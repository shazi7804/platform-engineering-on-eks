(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7504],{26464:t=>{function a(e){return e?typeof e=="string"?e:e.source:null}function i(...e){return e.map(n=>a(n)).join("")}function o(e){const r={keyword:"in of on if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await import",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Behavior bool color coordinate date double enumeration font geocircle georectangle geoshape int list matrix4x4 parent point quaternion real rect size string url variant vector2d vector3d vector4d Promise"},n="[a-zA-Z_][a-zA-Z0-9\\._]*",s={className:"keyword",begin:"\\bproperty\\b",starts:{className:"string",end:"(:|=|;|,|//|/\\*|$)",returnEnd:!0}},c={className:"keyword",begin:"\\bsignal\\b",starts:{className:"string",end:"(\\(|:|=|;|,|//|/\\*|$)",returnEnd:!0}},u={className:"attribute",begin:"\\bid\\s*:",starts:{className:"string",end:n,returnEnd:!1}},l={begin:n+"\\s*:",returnBegin:!0,contains:[{className:"attribute",begin:n,end:"\\s*:",excludeEnd:!0,relevance:0}],relevance:0},E={begin:i(n,/\s*\{/),end:/\{/,returnBegin:!0,relevance:0,contains:[e.inherit(e.TITLE_MODE,{begin:n})]};return{name:"QML",aliases:["qt"],case_insensitive:!1,keywords:r,contains:[{className:"meta",begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,{className:"subst",begin:"\\$\\{",end:"\\}"}]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{begin:/</,end:/>\s*[);\]]/,relevance:0,subLanguage:"xml"}],relevance:0},c,s,{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/[A-Za-z$_][0-9A-Za-z$_]*/}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]}],illegal:/\[|%/},{begin:"\\."+e.IDENT_RE,relevance:0},u,l,E],illegal:/#/}}t.exports=o}}]);})();

//# sourceMappingURL=react-syntax-highlighter_languages_highlight_qml.6099e35b.chunk.js.map