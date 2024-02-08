"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4696,1836],{41836:(j,D,a)=>{a.r(D),a.d(D,{C:()=>g,c:()=>s});var f=a(50876),i=Object.defineProperty,y=(l,E)=>i(l,"name",{value:E,configurable:!0});function m(l,E){for(var h=0;h<E.length;h++){const p=E[h];if(typeof p!="string"&&!Array.isArray(p)){for(const _ in p)if(_!=="default"&&!(_ in l)){const P=Object.getOwnPropertyDescriptor(p,_);P&&Object.defineProperty(l,_,P.get?P:{enumerable:!0,get:()=>p[_]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}y(m,"_mergeNamespaces");var v=(0,f.r)();const g=(0,f.g)(v),s=m({__proto__:null,default:g},[v])},2096:(j,D,a)=>{a.d(D,{f:()=>y});var f=Object.defineProperty,i=(m,v)=>f(m,"name",{value:v,configurable:!0});function y(m,v){const g=[];let s=m;for(;s!=null&&s.kind;)g.push(s),s=s.prevState;for(let l=g.length-1;l>=0;l--)v(g[l])}i(y,"forEachState")},74696:(j,D,a)=>{a.r(D);var f=a(41836),i=a(88072),y=a(80636),m=a(2096),v=a(50876),g=Object.defineProperty,s=(o,r)=>g(o,"name",{value:r,configurable:!0});function l(o,r,t){const n=E(t,p(r.string));if(!n)return;const e=r.type!==null&&/"|\w/.test(r.string[0])?r.start:r.end;return{list:n,from:{line:o.line,ch:e},to:{line:o.line,ch:r.end}}}s(l,"hintList");function E(o,r){if(!r)return h(o,n=>!n.isDeprecated);const t=o.map(n=>({proximity:_(p(n.text),r),entry:n}));return h(h(t,n=>n.proximity<=2),n=>!n.entry.isDeprecated).sort((n,e)=>(n.entry.isDeprecated?1:0)-(e.entry.isDeprecated?1:0)||n.proximity-e.proximity||n.entry.text.length-e.entry.text.length).map(n=>n.entry)}s(E,"filterAndSortList");function h(o,r){const t=o.filter(r);return t.length===0?o:t}s(h,"filterNonEmpty");function p(o){return o.toLowerCase().replaceAll(/\W/g,"")}s(p,"normalizeText");function _(o,r){let t=P(r,o);return o.length>r.length&&(t-=o.length-r.length-1,t+=o.indexOf(r)===0?0:.5),t}s(_,"getProximity");function P(o,r){let t,n;const e=[],c=o.length,O=r.length;for(t=0;t<=c;t++)e[t]=[t];for(n=1;n<=O;n++)e[0][n]=n;for(t=1;t<=c;t++)for(n=1;n<=O;n++){const b=o[t-1]===r[n-1]?0:1;e[t][n]=Math.min(e[t-1][n]+1,e[t][n-1]+1,e[t-1][n-1]+b),t>1&&n>1&&o[t-1]===r[n-2]&&o[t-2]===r[n-1]&&(e[t][n]=Math.min(e[t][n],e[t-2][n-2]+b))}return e[c][O]}s(P,"lexicalDistance"),f.C.registerHelper("hint","graphql-variables",(o,r)=>{const t=o.getCursor(),n=o.getTokenAt(t),e=x(t,n,r);return e!=null&&e.list&&e.list.length>0&&(e.from=f.C.Pos(e.from.line,e.from.ch),e.to=f.C.Pos(e.to.line,e.to.ch),f.C.signal(o,"hasCompletion",o,e,n)),e});function x(o,r,t){const n=r.state.kind==="Invalid"?r.state.prevState:r.state,{kind:e,step:c}=n;if(e==="Document"&&c===0)return l(o,r,[{text:"{"}]);const{variableToType:O}=t;if(!O)return;const b=C(O,r.state);if(e==="Document"||e==="Variable"&&c===0){const d=Object.keys(O);return l(o,r,d.map(u=>({text:`"${u}": `,type:O[u]})))}if((e==="ObjectValue"||e==="ObjectField"&&c===0)&&b.fields){const d=Object.keys(b.fields).map(u=>b.fields[u]);return l(o,r,d.map(u=>({text:`"${u.name}": `,type:u.type,description:u.description})))}if(e==="StringValue"||e==="NumberValue"||e==="BooleanValue"||e==="NullValue"||e==="ListValue"&&c===1||e==="ObjectField"&&c===2||e==="Variable"&&c===2){const d=b.type?(0,i.uE)(b.type):void 0;if(d instanceof i.Sk)return l(o,r,[{text:"{"}]);if(d instanceof i.qq){const u=d.getValues();return l(o,r,u.map(M=>({text:`"${M.name}"`,type:d,description:M.description})))}if(d===y.Is)return l(o,r,[{text:"true",type:y.Is,description:"Not false."},{text:"false",type:y.Is,description:"Not true."}])}}s(x,"getVariablesHint");function C(o,r){const t={type:null,fields:null};return(0,m.f)(r,n=>{switch(n.kind){case"Variable":{t.type=o[n.name];break}case"ListValue":{const e=t.type?(0,i.k9)(t.type):void 0;t.type=e instanceof i.kN?e.ofType:null;break}case"ObjectValue":{const e=t.type?(0,i.uE)(t.type):void 0;t.fields=e instanceof i.Sk?e.getFields():null;break}case"ObjectField":{const e=n.name&&t.fields?t.fields[n.name]:null;t.type=e==null?void 0:e.type;break}}}),t}s(C,"getTypeInfo")}}]);})();

//# sourceMappingURL=4696.7b994d2d.chunk.js.map