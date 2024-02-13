#!/bin/bash
docker run -itd -p 7007:7007 --env-file ./.env backstage node packages/backend --config app-config.yaml
