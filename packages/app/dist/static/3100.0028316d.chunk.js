"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3100],{93100:(p,c,t)=>{t.r(c),t.d(c,{SidebarSearchModal:()=>z});var e=t(85668),f=t(94656),s=t(8024),C=t(91812),v=t(35828),S=t(76048),M=t(50907),P=t(64960),E=t(19947),B=t(24432),A=t(89672),D=t(35580),W=t(8640),N=t(1275),$=t(67256),V=t(40476),O=t(14132),U=t(87987),F=t(33648),b=t(6331),y=t(9620),j=t(30235);const R=(0,V.c)(n=>({dialogTitle:{gap:n.spacing(1),display:"grid",alignItems:"center",gridTemplateColumns:"1fr auto","&> button":{marginTop:n.spacing(1)}},input:{flex:1},button:{"&:hover":{background:"none"}},paperFullWidth:{height:"calc(100% - 128px)"},dialogActionsContainer:{padding:n.spacing(1,3)},viewResultsLink:{verticalAlign:"0.5em"}})),G=({toggleModal:n})=>{const l=R(),a=(0,F.i6)(),{transitions:i}=(0,S.c)(),{focusContent:u}=(0,s.WG)(),d=(0,C.M7)(b.r)(),o=(0,e.useRef)(null);(0,e.useEffect)(()=>{var m;(m=o==null?void 0:o.current)==null||m.focus()});const h=(0,e.useCallback)(()=>{setTimeout(u,i.duration.leavingScreen)},[u,i]),g=(0,e.useCallback)(()=>{var m,r;const x=(r=(m=o.current)==null?void 0:m.value)!=null?r:"";a(`${d}?query=${x}`),h()},[a,h,d]);return e.createElement(e.Fragment,null,e.createElement(M.c,null,e.createElement(W.c,{className:l.dialogTitle},e.createElement(v.EB,{className:l.input,inputProps:{ref:o},onSubmit:g}),e.createElement($.c,{"aria-label":"close",onClick:n},e.createElement(U.c,null)))),e.createElement(P.c,null,e.createElement(E.c,{container:!0,direction:"row-reverse",justifyContent:"flex-start",alignItems:"center"},e.createElement(E.c,{item:!0},e.createElement(N.c,{className:l.button,color:"primary",endIcon:e.createElement(O.c,null),onClick:g,disableRipple:!0},"View Full Results"))),e.createElement(B.c,null),e.createElement(v.UB,{onClick:h,onKeyDown:h})),e.createElement(A.c,{className:l.dialogActionsContainer},e.createElement(E.c,{container:!0,direction:"row"},e.createElement(E.c,{item:!0,xs:12},e.createElement(v.QP,null)))))},K=n=>{var l;const{open:a=!0,hidden:i,toggleModal:u,children:d}=n,o=R();return e.createElement(D.c,{classes:{paperFullWidth:o.paperFullWidth},onClose:u,"aria-labelledby":"search-modal-title",fullWidth:!0,maxWidth:"lg",open:a,hidden:i},a&&e.createElement(v.k3,{inheritParentContextIfAvailable:!0},(l=d&&d({toggleModal:u}))!=null?l:e.createElement(G,{toggleModal:u})))},I=(0,y.IR)("search-modal-context"),L=n=>{const l=T(n.showInitially),a=(0,y.Ow)({1:l});return e.createElement(I.Provider,{value:a},n.children)};function T(n=!1){const[l,a]=(0,e.useState)({hidden:!n,open:n}),i=(0,e.useCallback)(()=>a(r=>({open:!0,hidden:!r.hidden})),[]),u=(0,e.useCallback)(r=>a(x=>({open:x.open||r,hidden:!r})),[]),d=(0,e.useContext)(I),o=d==null?void 0:d.atVersion(1),h=!!(o!=null&&o.state),g=(0,F.IT)(),m=`${g.pathname}${g.search}${g.hash}`;return(0,j.c)(()=>{a(r=>({open:r.open,hidden:!0}))},[m]),h?o:{state:l,toggleModal:i,setOpen:u}}var H=t(55632);const Q=n=>{const{state:l,toggleModal:a}=T(),i=n.icon?n.icon:f.c;return e.createElement(e.Fragment,null,e.createElement(s.qq,{className:"search-icon",icon:i,text:"Search",onClick:a}),e.createElement(K,{...l,toggleModal:a,children:n.children}))},z=n=>e.createElement(L,null,e.createElement(Q,{...n}))},33576:(p,c,t)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.useFirstMountState=void 0;var e=t(85668);function f(){var s=e.useRef(!0);return s.current?(s.current=!1,!0):s.current}c.useFirstMountState=f},30235:(p,c,t)=>{var e;e={value:!0};var f=t(85668),s=t(33576),C=function(v,S){var M=s.useFirstMountState();f.useEffect(function(){if(!M)return v()},S)};c.c=C}}]);})();

//# sourceMappingURL=3100.0028316d.chunk.js.map