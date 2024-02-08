'use strict';

var Router = require('express-promise-router');
var backendCommon = require('@backstage/backend-common');
var backendTasks = require('@backstage/backend-tasks');
var pluginAppBackend = require('@backstage/plugin-app-backend');
var pluginAuthBackend = require('@backstage/plugin-auth-backend');
var pluginCatalogBackend = require('@backstage/plugin-catalog-backend');
var pluginCatalogBackendModuleScaffolderEntityModel = require('@backstage/plugin-catalog-backend-module-scaffolder-entity-model');
var catalogClient = require('@backstage/catalog-client');
var pluginScaffolderBackend = require('@backstage/plugin-scaffolder-backend');
var pluginProxyBackend = require('@backstage/plugin-proxy-backend');
var pluginTechdocsBackend = require('@backstage/plugin-techdocs-backend');
var Docker = require('dockerode');
var pluginSearchBackend = require('@backstage/plugin-search-backend');
var pluginSearchBackendNode = require('@backstage/plugin-search-backend-node');
var pluginSearchBackendModuleCatalog = require('@backstage/plugin-search-backend-module-catalog');
var pluginSearchBackendModuleTechdocs = require('@backstage/plugin-search-backend-module-techdocs');
var pluginPermissionNode = require('@backstage/plugin-permission-node');
var pluginAuthNode = require('@backstage/plugin-auth-node');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Router__default = /*#__PURE__*/_interopDefaultLegacy(Router);
var Docker__default = /*#__PURE__*/_interopDefaultLegacy(Docker);

async function createPlugin$6(env) {
  return await pluginAppBackend.createRouter({
    logger: env.logger,
    config: env.config,
    database: env.database,
    appPackageName: "app"
  });
}

async function createPlugin$5(env) {
  return await pluginAuthBackend.createRouter({
    logger: env.logger,
    config: env.config,
    database: env.database,
    discovery: env.discovery,
    tokenManager: env.tokenManager,
    providerFactories: {
      ...pluginAuthBackend.defaultAuthProviderFactories,
      // This replaces the default GitHub auth provider with a customized one.
      // The `signIn` option enables sign-in for this provider, using the
      // identity resolution logic that's provided in the `resolver` callback.
      //
      // This particular resolver makes all users share a single "guest" identity.
      // It should only be used for testing and trying out Backstage.
      //
      // If you want to use a production ready resolver you can switch to
      // the one that is commented out below, it looks up a user entity in the
      // catalog using the GitHub username of the authenticated user.
      // That resolver requires you to have user entities populated in the catalog,
      // for example using https://backstage.io/docs/integrations/github/org
      //
      // There are other resolvers to choose from, and you can also create
      // your own, see the auth documentation for more details:
      //
      //   https://backstage.io/docs/auth/identity-resolver
      github: pluginAuthBackend.providers.github.create({
        signIn: {
          resolver(_, ctx) {
            const userRef = "user:default/guest";
            return ctx.issueToken({
              claims: {
                sub: userRef,
                // The user's own identity
                ent: [userRef]
                // A list of identities that the user claims ownership through
              }
            });
          }
          // resolver: providers.github.resolvers.usernameMatchingUserEntityName(),
        }
      })
    }
  });
}

async function createPlugin$4(env) {
  const builder = await pluginCatalogBackend.CatalogBuilder.create(env);
  builder.addProcessor(new pluginCatalogBackendModuleScaffolderEntityModel.ScaffolderEntitiesProcessor());
  const { processingEngine, router } = await builder.build();
  await processingEngine.start();
  return router;
}

async function createPlugin$3(env) {
  const catalogClient$1 = new catalogClient.CatalogClient({
    discoveryApi: env.discovery
  });
  return await pluginScaffolderBackend.createRouter({
    logger: env.logger,
    config: env.config,
    database: env.database,
    reader: env.reader,
    catalogClient: catalogClient$1,
    identity: env.identity,
    permissions: env.permissions
  });
}

async function createPlugin$2(env) {
  return await pluginProxyBackend.createRouter({
    logger: env.logger,
    config: env.config,
    discovery: env.discovery
  });
}

async function createPlugin$1(env) {
  const preparers = await pluginTechdocsBackend.Preparers.fromConfig(env.config, {
    logger: env.logger,
    reader: env.reader
  });
  const dockerClient = new Docker__default["default"]();
  const containerRunner = new backendCommon.DockerContainerRunner({ dockerClient });
  const generators = await pluginTechdocsBackend.Generators.fromConfig(env.config, {
    logger: env.logger,
    containerRunner
  });
  const publisher = await pluginTechdocsBackend.Publisher.fromConfig(env.config, {
    logger: env.logger,
    discovery: env.discovery
  });
  await publisher.getReadiness();
  return await pluginTechdocsBackend.createRouter({
    preparers,
    generators,
    publisher,
    logger: env.logger,
    config: env.config,
    discovery: env.discovery,
    cache: env.cache
  });
}

async function createPlugin(env) {
  const searchEngine = new pluginSearchBackendNode.LunrSearchEngine({
    logger: env.logger
  });
  const indexBuilder = new pluginSearchBackendNode.IndexBuilder({
    logger: env.logger,
    searchEngine
  });
  const schedule = env.scheduler.createScheduledTaskRunner({
    frequency: { minutes: 10 },
    timeout: { minutes: 15 },
    // A 3 second delay gives the backend server a chance to initialize before
    // any collators are executed, which may attempt requests against the API.
    initialDelay: { seconds: 3 }
  });
  indexBuilder.addCollator({
    schedule,
    factory: pluginSearchBackendModuleCatalog.DefaultCatalogCollatorFactory.fromConfig(env.config, {
      discovery: env.discovery,
      tokenManager: env.tokenManager
    })
  });
  indexBuilder.addCollator({
    schedule,
    factory: pluginSearchBackendModuleTechdocs.DefaultTechDocsCollatorFactory.fromConfig(env.config, {
      discovery: env.discovery,
      logger: env.logger,
      tokenManager: env.tokenManager
    })
  });
  const { scheduler } = await indexBuilder.build();
  scheduler.start();
  backendCommon.useHotCleanup(module, () => scheduler.stop());
  return await pluginSearchBackend.createRouter({
    engine: indexBuilder.getSearchEngine(),
    types: indexBuilder.getDocumentTypes(),
    permissions: env.permissions,
    config: env.config,
    logger: env.logger
  });
}

var _a;
function makeCreateEnv(config) {
  const root = backendCommon.getRootLogger();
  const reader = backendCommon.UrlReaders.default({ logger: root, config });
  const discovery = backendCommon.HostDiscovery.fromConfig(config);
  const cacheManager = backendCommon.CacheManager.fromConfig(config);
  const databaseManager = backendCommon.DatabaseManager.fromConfig(config, { logger: root });
  const tokenManager = backendCommon.ServerTokenManager.noop();
  const taskScheduler = backendTasks.TaskScheduler.fromConfig(config, { databaseManager });
  const identity = pluginAuthNode.DefaultIdentityClient.create({
    discovery
  });
  const permissions = pluginPermissionNode.ServerPermissionClient.fromConfig(config, {
    discovery,
    tokenManager
  });
  root.info(`Created UrlReader ${reader}`);
  return (plugin) => {
    const logger = root.child({ type: "plugin", plugin });
    const database = databaseManager.forPlugin(plugin);
    const cache = cacheManager.forPlugin(plugin);
    const scheduler = taskScheduler.forPlugin(plugin);
    return {
      logger,
      database,
      cache,
      config,
      reader,
      discovery,
      tokenManager,
      scheduler,
      permissions,
      identity
    };
  };
}
async function main() {
  const config = await backendCommon.loadBackendConfig({
    argv: process.argv,
    logger: backendCommon.getRootLogger()
  });
  const createEnv = makeCreateEnv(config);
  const catalogEnv = backendCommon.useHotMemoize(module, () => createEnv("catalog"));
  const scaffolderEnv = backendCommon.useHotMemoize(module, () => createEnv("scaffolder"));
  const authEnv = backendCommon.useHotMemoize(module, () => createEnv("auth"));
  const proxyEnv = backendCommon.useHotMemoize(module, () => createEnv("proxy"));
  const techdocsEnv = backendCommon.useHotMemoize(module, () => createEnv("techdocs"));
  const searchEnv = backendCommon.useHotMemoize(module, () => createEnv("search"));
  const appEnv = backendCommon.useHotMemoize(module, () => createEnv("app"));
  const apiRouter = Router__default["default"]();
  apiRouter.use("/catalog", await createPlugin$4(catalogEnv));
  apiRouter.use("/scaffolder", await createPlugin$3(scaffolderEnv));
  apiRouter.use("/auth", await createPlugin$5(authEnv));
  apiRouter.use("/techdocs", await createPlugin$1(techdocsEnv));
  apiRouter.use("/proxy", await createPlugin$2(proxyEnv));
  apiRouter.use("/search", await createPlugin(searchEnv));
  apiRouter.use(backendCommon.notFoundHandler());
  const service = backendCommon.createServiceBuilder(module).loadConfig(config).addRouter("/api", apiRouter).addRouter("", await createPlugin$6(appEnv));
  await service.start().catch((err) => {
    console.log(err);
    process.exit(1);
  });
}
(_a = module.hot) == null ? void 0 : _a.accept();
main().catch((error) => {
  console.error("Backend failed to start up", error);
  process.exit(1);
});
//# sourceMappingURL=index.cjs.js.map
