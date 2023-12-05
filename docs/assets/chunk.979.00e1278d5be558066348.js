/*! For license information please see chunk.979.00e1278d5be558066348.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[979],{793:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f})
var n=r(247),i=r(292),o=r(67),s=r.n(o),a=r(173),c=r(283),u=r(341),l=r(456)
r(521),(0,n.HU)({owner:s(),getOwner:i.getOwner,setOwner:i.setOwner,createCache:a.createCache,getValue:a.getValue,invokeHelper:c.invokeHelper,waitForPromise:(...e)=>(0,l.waitForPromise)(...e),setHelperManager:c.setHelperManager,helperCapabilities:c.capabilities,isDestroyed:u.isDestroyed,isDestroying:u.isDestroying,destroy:u.destroy,registerDestructor:u.registerDestructor,associateDestroyableChild:u.associateDestroyableChild})
var f={initialize:function(){}}},247:(e,t,r)=>{r.d(t,{KD:()=>d,Df:()=>a,ob:()=>h,ei:()=>g,NA:()=>c,My:()=>m,Y2:()=>u,VY:()=>l,Pc:()=>f,iW:()=>p,HU:()=>E,Er:()=>y,Q4:()=>s,fF:()=>v})
const n=!1
r(521)
let i,o,s,a,c,u,l,f,h,p,d,v,y,m,b=!1
function g(e){return void 0!==i&&e instanceof i?e:o(e)}function E(e){if(n){if(b)throw new Error("Attempted to set the glimmer-apollo environment context twice. This should only be set once.")
b=!0}i=e.owner,s=e.setOwner,o=e.getOwner,a=e.createCache,c=e.getValue,u=e.invokeHelper,v=e.waitForPromise,y=e.setHelperManager,m=e.helperCapabilities,f=e.isDestroying,l=e.isDestroyed,h=e.destroy,p=e.registerDestructor,d=e.associateDestroyableChild}},335:(e,t,r)=>{r.r(t),r.d(t,{clearClient:()=>d,clearClients:()=>p,getClient:()=>h,gql:()=>s.Ps,setClient:()=>f,useMutation:()=>oe,useQuery:()=>ie,useSubscription:()=>se})
var n=r(247),i=r(313),o=r(277),s=r(150),a=r(521),c=r(929)
const u=new WeakMap,l="default"
function f(e,t,r=l){const i=(0,n.ei)(e)
if(!i)throw new Error("Unable to find owner from the given context in glimmer-apollo setClient")
u.has(i)||u.set(i,new Map),u.get(i)?.set(r,t),(0,n.iW)(e,(()=>{d(e,r)}))}function h(e,t=l){const r=(0,n.ei)(e)
if(!r)throw new Error("Unable to find owner from the given context in glimmer-apollo getClient")
const i=u.get(r)?.get(t)
if(!i)throw new Error(`Apollo client with id ${t} has not been set yet, use setClient(new ApolloClient({ ... }, '${t}')) to define it`)
return i}function p(e){const t=(0,n.ei)(e)
if(!t)throw new Error("Unable to find owner from the given context in glimmer-apollo clearClients")
const r=u.get(t)
r?.forEach((e=>{e.clearStore()})),r?.clear()}function d(e,t=l){const r=(0,n.ei)(e)
if(!r)throw new Error("Unable to find owner from the given context in glimmer-apollo clearClient")
const i=u.get(r),o=i?.get(t)
o&&o.clearStore(),i?.delete(t)}function v(e,t,r){const i=function(e,t,r){let i
return{get value(){return i||(i=(0,n.Y2)(e,t,(()=>function(e){return Array.isArray(e)?{positional:e,named:{}}:"positional"in e||"named"in e?{positional:e.positional||[],named:e.named||{}}:"object"==typeof e?{named:e,positional:[]}:e}(r?.()||{})))),(0,n.NA)(i)}}}(e,t,r)
return new Proxy(i,{get(e,t){const r=e.value,n=Reflect.get(r,t,r)
return"function"==typeof n?n.bind(r):n},ownKeys:e=>Reflect.ownKeys(e.value),getOwnPropertyDescriptor:(e,t)=>Reflect.getOwnPropertyDescriptor(e.value,t)})}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance")
return e}var b=0
function g(e){return"__private_"+b+++"_"+e}function E(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n
if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n)
else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s)
return o>3&&s&&Object.defineProperty(t,r,s),s}class O{constructor(e,t){if("function"==typeof e)return{definition:this.constructor,args:e};(0,n.Q4)(this,e),this.args=t}setup(){}}class w{constructor(e){this.capabilities=(0,n.My)("3.23",{hasValue:!0,hasDestroyable:!0}),this.owner=e}createHelper(e,t){const{update:r,teardown:i}=e.prototype,o="function"==typeof r,s="function"==typeof i,a=this.owner
let c,u
return u=o?(0,n.Df)((()=>(void 0===c?c=k(u,e,a,t,s):c.update(),c))):(0,n.Df)((()=>(void 0!==c&&(0,n.ob)(c),c=k(u,e,a,t,s),c))),u}getValue(e){return(0,n.NA)(e)}getDestroyable(e){return e}getDebugName(e){return e.name||"(anonymous function)"}}function k(e,t,r,i,o){const s=new t(r,i)
return(0,n.KD)(e,s),s.setup(),o&&(0,n.iW)(s,(()=>s.teardown())),s}function _(e){if("undefined"!=typeof self&&(t=self,Object.prototype.hasOwnProperty.call(t,"FastBoot"))&&void 0!==self.FastBoot){const t=(0,n.ei)(e)
if(function(e){return!(!e||!("lookup"in e))}(t)&&"function"==typeof t.lookup)return t.lookup("service:fastboot")}var t}function T(){let e,t
return[new Promise(((r,n)=>{e=r,t=n})),e,t]}function S(e){return new Promise((t=>{e?e.then((()=>t())).catch((()=>t())):t()}))}function D(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?D(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(0,n.Er)((e=>new w(e)),O)
var x=g("onComplete"),N=g("onError"),A=g("handleOnCompleteOrOnError")
class R extends O{constructor(...e){super(...e),Object.defineProperty(this,A,{value:P}),Object.defineProperty(this,N,{value:F}),Object.defineProperty(this,x,{value:C}),this.loading=!1,this.called=!1}async mutate(e,t={}){this.loading=!0
const[r,i]=this.args.positional,o=I(I({},i),t),s=h(this,o.clientId)
return e?e&&i?.variables&&(e=I(I({},i.variables),e)):e=i?.variables,this.promise=(0,n.fF)(s.mutate(I(I({mutation:r},o),{},{variables:e}))).then((e=>(m(this,x)[x](e),this.data))).catch((e=>(m(this,N)[N](e),e))),this.promise}settled(){return S(this.promise)}}function C(e){const{data:t,errors:r}=e,n=r&&r.length>0?new i.cA({graphQLErrors:r}):void 0
this.data=t,this.error=n,m(this,A)[A]()}function F(e){this.error=e,this.data=void 0,m(this,A)[A]()}function P(){if(this.loading=!1,this.called=!0,(0,n.VY)(this)||(0,n.Pc)(this))return
const[,e]=this.args.positional,{onComplete:t,onError:r}=e||{},{data:i,error:o}=this
t&&!o?t(i):r&&o&&r(o)}E([a.tracked],R.prototype,"loading",void 0),E([a.tracked],R.prototype,"called",void 0),E([a.tracked],R.prototype,"error",void 0),E([a.tracked],R.prototype,"data",void 0),E([a.tracked],R.prototype,"promise",void 0)
class j extends O{constructor(...e){super(...e),this.refetch=e=>this.observable?.refetch(e),this.fetchMore=e=>this.observable?.fetchMore(e),this.updateQuery=e=>this.observable?.updateQuery(e),this.startPolling=e=>{this.observable?.startPolling(e)},this.stopPolling=()=>{this.observable?.stopPolling()},this.subscribeToMore=e=>this.observable?.subscribeToMore(e)}_setObservable(e){this.observable=e}}function L(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var M=g("subscription"),q=g("previousPositionalArgs"),V=g("firstPromiseReject"),Q=g("onComplete"),B=g("onError"),U=g("handleOnCompleteOrOnError")
class G extends j{constructor(...e){super(...e),Object.defineProperty(this,U,{value:W}),Object.defineProperty(this,B,{value:K}),Object.defineProperty(this,Q,{value:z}),this.loading=!0,this.networkStatus=o.Ie.loading,Object.defineProperty(this,M,{writable:!0,value:void 0}),Object.defineProperty(this,q,{writable:!0,value:void 0}),Object.defineProperty(this,V,{writable:!0,value:void 0})}async setup(){m(this,q)[q]=this.args.positional
const[e,t]=this.args.positional,r=h(this,t?.clientId)
this.loading=!0
const i=_(this)
if(i&&i.isFastBoot&&t&&!1===t.ssr)return
let[o,s,a]=T()
m(this,V)[V]=a,this.promise=o
const c=r.watchQuery(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?L(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({query:e},t||{}))
this._setObservable(c),m(this,M)[M]=c.subscribe((e=>{m(this,Q)[Q](e),s&&(s(),s=void 0)}),(e=>{m(this,B)[B](e),m(this,V)[V]&&(m(this,V)[V](),m(this,V)[V]=void 0)})),(0,n.fF)(o).catch((()=>{})),i&&i.isFastBoot&&t&&!1!==t.ssr&&i.deferRendering(o)}update(){(0,c.D)(m(this,q)[q],this.args.positional)||(this.teardown(),this.setup())}teardown(){m(this,M)[M]&&m(this,M)[M].unsubscribe(),m(this,V)[V]&&(m(this,V)[V](),m(this,V)[V]=void 0)}settled(){return S(this.promise)}}function z(e){const{loading:t,errors:r,data:n,networkStatus:o}=e
let{error:s}=e
s=r&&r.length>0?new i.cA({graphQLErrors:r}):void 0,this.loading=t,this.data=n,this.networkStatus=o,this.error=s,m(this,U)[U]()}function K(e){Object.prototype.hasOwnProperty.call(e,"graphQLErrors")||(e=new i.cA({networkError:e})),this.loading=!1,this.data=void 0,this.networkStatus=o.Ie.error,this.error=e,m(this,U)[U]()}function W(){if((0,n.VY)(this)||(0,n.Pc)(this))return
const[,e]=this.args.positional,{onComplete:t,onError:r}=e||{},{data:i,error:o}=this
t&&!o?t(i):r&&o&&r(o)}function Y(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}E([a.tracked],G.prototype,"loading",void 0),E([a.tracked],G.prototype,"error",void 0),E([a.tracked],G.prototype,"data",void 0),E([a.tracked],G.prototype,"networkStatus",void 0),E([a.tracked],G.prototype,"promise",void 0)
var J=g("subscription"),$=g("previousPositionalArgs"),H=g("onNextResult"),X=g("onError"),Z=g("onComplete")
class ee extends O{constructor(...e){super(...e),Object.defineProperty(this,Z,{value:ne}),Object.defineProperty(this,X,{value:re}),Object.defineProperty(this,H,{value:te}),this.loading=!0,Object.defineProperty(this,J,{writable:!0,value:void 0}),Object.defineProperty(this,$,{writable:!0,value:void 0})}async setup(){m(this,$)[$]=this.args.positional
const[e,t]=this.args.positional,r=h(this,t?.clientId)
this.loading=!0
const i=_(this)
if(i&&i.isFastBoot&&t&&!1===t.ssr)return
let[o,s,a]=T()
this.promise=o
const c=r.subscribe(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?Y(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({query:e},t||{}))
m(this,J)[J]=c.subscribe({next:e=>{(0,n.VY)(this)||(0,n.Pc)(this)||(m(this,H)[H](e),s&&(s(),s=void 0))},error:e=>{(0,n.VY)(this)||(0,n.Pc)(this)||(m(this,X)[X](e),a&&(a(),a=void 0))},complete:()=>{(0,n.VY)(this)||(0,n.Pc)(this)||m(this,Z)[Z]()}}),(0,n.fF)(o).catch((()=>{})),i&&i.isFastBoot&&t&&!1!==t.ssr&&i.deferRendering(o)}update(){(0,c.D)(m(this,$)[$],this.args.positional)&&m(this,J)[J]||(this.teardown(),this.setup())}teardown(){m(this,J)[J]&&m(this,J)[J].unsubscribe()}settled(){return S(this.promise)}}function te(e){this.loading=!1,this.error=void 0
const{data:t}=e
this.data=null==t?void 0:t
const[,r]=this.args.positional,{onData:n}=r||{}
n&&n(this.data)}function re(e){Object.prototype.hasOwnProperty.call(e,"graphQLErrors")||(e=new i.cA({networkError:e})),this.loading=!1,this.data=void 0,this.error=e
const[,t]=this.args.positional,{onError:r}=t||{}
r&&r(this.error)}function ne(){this.loading=!1
const[,e]=this.args.positional,{onComplete:t}=e||{}
t&&t(),m(this,J)[J]&&(m(this,J)[J].unsubscribe(),m(this,J)[J]=void 0)}function ie(e,t){return v(e,G,t)}function oe(e,t){return v(e,R,t)}function se(e,t){return v(e,ee,t)}E([a.tracked],ee.prototype,"loading",void 0),E([a.tracked],ee.prototype,"error",void 0),E([a.tracked],ee.prototype,"data",void 0),E([a.tracked],ee.prototype,"promise",void 0)},150:(e,t,r)=>{r.d(t,{J9:()=>te,_t:()=>Z,wO:()=>ee,Ps:()=>H,HW:()=>X})
var n=r(204)
function i(e,t){if(!Boolean(e))throw new Error(null!=t?t:"Unexpected invariant triggered.")}const o=/\r\n|[\n\r]/g
function s(e,t){let r=0,n=1
for(const s of e.body.matchAll(o)){if("number"==typeof s.index||i(!1),s.index>=t)break
r=s.index+s[0].length,n+=1}return{line:n,column:t+1-r}}function a(e,t){const r=e.locationOffset.column-1,n="".padStart(r)+e.body,i=t.line-1,o=e.locationOffset.line-1,s=t.line+o,a=1===t.line?r:0,u=t.column+a,l=`${e.name}:${s}:${u}\n`,f=n.split(/\r\n|[\n\r]/g),h=f[i]
if(h.length>120){const e=Math.floor(u/80),t=u%80,r=[]
for(let n=0;n<h.length;n+=80)r.push(h.slice(n,n+80))
return l+c([[`${s} |`,r[0]],...r.slice(1,e+1).map((e=>["|",e])),["|","^".padStart(t)],["|",r[e+1]]])}return l+c([[s-1+" |",f[i-1]],[`${s} |`,h],["|","^".padStart(u)],[`${s+1} |`,f[i+1]]])}function c(e){const t=e.filter((([e,t])=>void 0!==t)),r=Math.max(...t.map((([e])=>e.length)))
return t.map((([e,t])=>e.padStart(r)+(t?" "+t:""))).join("\n")}class u extends Error{constructor(e,...t){var r,n,i
const{nodes:o,source:a,positions:c,path:f,originalError:h,extensions:p}=function(e){const t=e[0]
return null==t||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}(t)
super(e),this.name="GraphQLError",this.path=null!=f?f:void 0,this.originalError=null!=h?h:void 0,this.nodes=l(Array.isArray(o)?o:o?[o]:void 0)
const d=l(null===(r=this.nodes)||void 0===r?void 0:r.map((e=>e.loc)).filter((e=>null!=e)))
this.source=null!=a?a:null==d||null===(n=d[0])||void 0===n?void 0:n.source,this.positions=null!=c?c:null==d?void 0:d.map((e=>e.start)),this.locations=c&&a?c.map((e=>s(a,e))):null==d?void 0:d.map((e=>s(e.source,e.start)))
const v="object"==typeof(y=null==h?void 0:h.extensions)&&null!==y?null==h?void 0:h.extensions:void 0
var y
this.extensions=null!==(i=null!=p?p:v)&&void 0!==i?i:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),null!=h&&h.stack?Object.defineProperty(this,"stack",{value:h.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,u):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message
if(this.nodes)for(const r of this.nodes)r.loc&&(e+="\n\n"+a((t=r.loc).source,s(t.source,t.start)))
else if(this.source&&this.locations)for(const r of this.locations)e+="\n\n"+a(this.source,r)
var t
return e}toJSON(){const e={message:this.message}
return null!=this.locations&&(e.locations=this.locations),null!=this.path&&(e.path=this.path),null!=this.extensions&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function l(e){return void 0===e||0===e.length?void 0:e}function f(e,t,r){return new u(`Syntax Error: ${r}`,{source:e,positions:[t]})}var h,p=r(859)
!function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"}(h||(h={}))
var d,v,y=r(659),m=r(614),b=r(528);(v=d||(d={})).SOF="<SOF>",v.EOF="<EOF>",v.BANG="!",v.DOLLAR="$",v.AMP="&",v.PAREN_L="(",v.PAREN_R=")",v.SPREAD="...",v.COLON=":",v.EQUALS="=",v.AT="@",v.BRACKET_L="[",v.BRACKET_R="]",v.BRACE_L="{",v.PIPE="|",v.BRACE_R="}",v.NAME="Name",v.INT="Int",v.FLOAT="Float",v.STRING="String",v.BLOCK_STRING="BlockString",v.COMMENT="Comment"
class g{constructor(e){const t=new p.WU(d.SOF,0,0,0,0)
this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let e=this.token
if(e.kind!==d.EOF)do{if(e.next)e=e.next
else{const t=S(this,e.end)
e.next=t,t.prev=e,e=t}}while(e.kind===d.COMMENT)
return e}}function E(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function O(e,t){return w(e.charCodeAt(t))&&k(e.charCodeAt(t+1))}function w(e){return e>=55296&&e<=56319}function k(e){return e>=56320&&e<=57343}function _(e,t){const r=e.source.body.codePointAt(t)
if(void 0===r)return d.EOF
if(r>=32&&r<=126){const e=String.fromCodePoint(r)
return'"'===e?"'\"'":`"${e}"`}return"U+"+r.toString(16).toUpperCase().padStart(4,"0")}function T(e,t,r,n,i){const o=e.line,s=1+r-e.lineStart
return new p.WU(t,r,n,o,s,i)}function S(e,t){const r=e.source.body,n=r.length
let i=t
for(;i<n;){const t=r.charCodeAt(i)
switch(t){case 65279:case 9:case 32:case 44:++i
continue
case 10:++i,++e.line,e.lineStart=i
continue
case 13:10===r.charCodeAt(i+1)?i+=2:++i,++e.line,e.lineStart=i
continue
case 35:return D(e,i)
case 33:return T(e,d.BANG,i,i+1)
case 36:return T(e,d.DOLLAR,i,i+1)
case 38:return T(e,d.AMP,i,i+1)
case 40:return T(e,d.PAREN_L,i,i+1)
case 41:return T(e,d.PAREN_R,i,i+1)
case 46:if(46===r.charCodeAt(i+1)&&46===r.charCodeAt(i+2))return T(e,d.SPREAD,i,i+3)
break
case 58:return T(e,d.COLON,i,i+1)
case 61:return T(e,d.EQUALS,i,i+1)
case 64:return T(e,d.AT,i,i+1)
case 91:return T(e,d.BRACKET_L,i,i+1)
case 93:return T(e,d.BRACKET_R,i,i+1)
case 123:return T(e,d.BRACE_L,i,i+1)
case 124:return T(e,d.PIPE,i,i+1)
case 125:return T(e,d.BRACE_R,i,i+1)
case 34:return 34===r.charCodeAt(i+1)&&34===r.charCodeAt(i+2)?j(e,i):N(e,i)}if((0,b.X1)(t)||45===t)return I(e,i,t)
if((0,b.LQ)(t))return L(e,i)
throw f(e.source,i,39===t?"Unexpected single quote character ('), did you mean to use a double quote (\")?":E(t)||O(r,i)?`Unexpected character: ${_(e,i)}.`:`Invalid character: ${_(e,i)}.`)}return T(e,d.EOF,n,n)}function D(e,t){const r=e.source.body,n=r.length
let i=t+1
for(;i<n;){const e=r.charCodeAt(i)
if(10===e||13===e)break
if(E(e))++i
else{if(!O(r,i))break
i+=2}}return T(e,d.COMMENT,t,i,r.slice(t+1,i))}function I(e,t,r){const n=e.source.body
let i=t,o=r,s=!1
if(45===o&&(o=n.charCodeAt(++i)),48===o){if(o=n.charCodeAt(++i),(0,b.X1)(o))throw f(e.source,i,`Invalid number, unexpected digit after 0: ${_(e,i)}.`)}else i=x(e,i,o),o=n.charCodeAt(i)
if(46===o&&(s=!0,o=n.charCodeAt(++i),i=x(e,i,o),o=n.charCodeAt(i)),69!==o&&101!==o||(s=!0,o=n.charCodeAt(++i),43!==o&&45!==o||(o=n.charCodeAt(++i)),i=x(e,i,o),o=n.charCodeAt(i)),46===o||(0,b.LQ)(o))throw f(e.source,i,`Invalid number, expected digit but got: ${_(e,i)}.`)
return T(e,s?d.FLOAT:d.INT,t,i,n.slice(t,i))}function x(e,t,r){if(!(0,b.X1)(r))throw f(e.source,t,`Invalid number, expected digit but got: ${_(e,t)}.`)
const n=e.source.body
let i=t+1
for(;(0,b.X1)(n.charCodeAt(i));)++i
return i}function N(e,t){const r=e.source.body,n=r.length
let i=t+1,o=i,s=""
for(;i<n;){const n=r.charCodeAt(i)
if(34===n)return s+=r.slice(o,i),T(e,d.STRING,t,i+1,s)
if(92!==n){if(10===n||13===n)break
if(E(n))++i
else{if(!O(r,i))throw f(e.source,i,`Invalid character within String: ${_(e,i)}.`)
i+=2}}else{s+=r.slice(o,i)
const t=117===r.charCodeAt(i+1)?123===r.charCodeAt(i+2)?A(e,i):R(e,i):P(e,i)
s+=t.value,i+=t.size,o=i}}throw f(e.source,i,"Unterminated string.")}function A(e,t){const r=e.source.body
let n=0,i=3
for(;i<12;){const e=r.charCodeAt(t+i++)
if(125===e){if(i<5||!E(n))break
return{value:String.fromCodePoint(n),size:i}}if(n=n<<4|F(e),n<0)break}throw f(e.source,t,`Invalid Unicode escape sequence: "${r.slice(t,t+i)}".`)}function R(e,t){const r=e.source.body,n=C(r,t+2)
if(E(n))return{value:String.fromCodePoint(n),size:6}
if(w(n)&&92===r.charCodeAt(t+6)&&117===r.charCodeAt(t+7)){const e=C(r,t+8)
if(k(e))return{value:String.fromCodePoint(n,e),size:12}}throw f(e.source,t,`Invalid Unicode escape sequence: "${r.slice(t,t+6)}".`)}function C(e,t){return F(e.charCodeAt(t))<<12|F(e.charCodeAt(t+1))<<8|F(e.charCodeAt(t+2))<<4|F(e.charCodeAt(t+3))}function F(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function P(e,t){const r=e.source.body
switch(r.charCodeAt(t+1)){case 34:return{value:'"',size:2}
case 92:return{value:"\\",size:2}
case 47:return{value:"/",size:2}
case 98:return{value:"\b",size:2}
case 102:return{value:"\f",size:2}
case 110:return{value:"\n",size:2}
case 114:return{value:"\r",size:2}
case 116:return{value:"\t",size:2}}throw f(e.source,t,`Invalid character escape sequence: "${r.slice(t,t+2)}".`)}function j(e,t){const r=e.source.body,n=r.length
let i=e.lineStart,o=t+3,s=o,a=""
const c=[]
for(;o<n;){const n=r.charCodeAt(o)
if(34===n&&34===r.charCodeAt(o+1)&&34===r.charCodeAt(o+2)){a+=r.slice(s,o),c.push(a)
const n=T(e,d.BLOCK_STRING,t,o+3,(0,m.wv)(c).join("\n"))
return e.line+=c.length-1,e.lineStart=i,n}if(92!==n||34!==r.charCodeAt(o+1)||34!==r.charCodeAt(o+2)||34!==r.charCodeAt(o+3))if(10!==n&&13!==n)if(E(n))++o
else{if(!O(r,o))throw f(e.source,o,`Invalid character within String: ${_(e,o)}.`)
o+=2}else a+=r.slice(s,o),c.push(a),13===n&&10===r.charCodeAt(o+1)?o+=2:++o,a="",s=o,i=o
else a+=r.slice(s,o),s=o+1,o+=4}throw f(e.source,o,"Unterminated string.")}function L(e,t){const r=e.source.body,n=r.length
let i=t+1
for(;i<n;){const e=r.charCodeAt(i)
if(!(0,b.HQ)(e))break;++i}return T(e,d.NAME,t,i,r.slice(t,i))}var M=r(345),q=r(616)
const V=globalThis.process&&"production"===globalThis.process.env.NODE_ENV?function(e,t){return e instanceof t}:function(e,t){if(e instanceof t)return!0
if("object"==typeof e&&null!==e){var r
const n=t.prototype[Symbol.toStringTag]
if(n===(Symbol.toStringTag in e?e[Symbol.toStringTag]:null===(r=e.constructor)||void 0===r?void 0:r.name)){const t=(0,q.X)(e)
throw new Error(`Cannot use ${n} "${t}" from another module or realm.\n\nEnsure that there is only one instance of "graphql" in the node_modules\ndirectory. If different versions of "graphql" are the dependencies of other\nrelied on modules, use "resolutions" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate "graphql" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results.`)}}return!1}
class Q{constructor(e,t="GraphQL request",r={line:1,column:1}){"string"==typeof e||(0,M.a)(!1,`Body must be a string. Received: ${(0,q.X)(e)}.`),this.body=e,this.name=t,this.locationOffset=r,this.locationOffset.line>0||(0,M.a)(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||(0,M.a)(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}class B{constructor(e,t={}){const r=function(e){return V(e,Q)}(e)?e:new Q(e)
this._lexer=new g(r),this._options=t,this._tokenCounter=0}parseName(){const e=this.expectToken(d.NAME)
return this.node(e,{kind:y.h.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:y.h.DOCUMENT,definitions:this.many(d.SOF,this.parseDefinition,d.EOF)})}parseDefinition(){if(this.peek(d.BRACE_L))return this.parseOperationDefinition()
const e=this.peekDescription(),t=e?this._lexer.lookahead():this._lexer.token
if(t.kind===d.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition()
case"scalar":return this.parseScalarTypeDefinition()
case"type":return this.parseObjectTypeDefinition()
case"interface":return this.parseInterfaceTypeDefinition()
case"union":return this.parseUnionTypeDefinition()
case"enum":return this.parseEnumTypeDefinition()
case"input":return this.parseInputObjectTypeDefinition()
case"directive":return this.parseDirectiveDefinition()}if(e)throw f(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.")
switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition()
case"fragment":return this.parseFragmentDefinition()
case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const e=this._lexer.token
if(this.peek(d.BRACE_L))return this.node(e,{kind:y.h.OPERATION_DEFINITION,operation:p.ku.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()})
const t=this.parseOperationType()
let r
return this.peek(d.NAME)&&(r=this.parseName()),this.node(e,{kind:y.h.OPERATION_DEFINITION,operation:t,name:r,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const e=this.expectToken(d.NAME)
switch(e.value){case"query":return p.ku.QUERY
case"mutation":return p.ku.MUTATION
case"subscription":return p.ku.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(d.PAREN_L,this.parseVariableDefinition,d.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:y.h.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(d.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(d.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const e=this._lexer.token
return this.expectToken(d.DOLLAR),this.node(e,{kind:y.h.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:y.h.SELECTION_SET,selections:this.many(d.BRACE_L,this.parseSelection,d.BRACE_R)})}parseSelection(){return this.peek(d.SPREAD)?this.parseFragment():this.parseField()}parseField(){const e=this._lexer.token,t=this.parseName()
let r,n
return this.expectOptionalToken(d.COLON)?(r=t,n=this.parseName()):n=t,this.node(e,{kind:y.h.FIELD,alias:r,name:n,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(d.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){const t=e?this.parseConstArgument:this.parseArgument
return this.optionalMany(d.PAREN_L,t,d.PAREN_R)}parseArgument(e=!1){const t=this._lexer.token,r=this.parseName()
return this.expectToken(d.COLON),this.node(t,{kind:y.h.ARGUMENT,name:r,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const e=this._lexer.token
this.expectToken(d.SPREAD)
const t=this.expectOptionalKeyword("on")
return!t&&this.peek(d.NAME)?this.node(e,{kind:y.h.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:y.h.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const e=this._lexer.token
return this.expectKeyword("fragment"),!0===this._options.allowLegacyFragmentVariables?this.node(e,{kind:y.h.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:y.h.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if("on"===this._lexer.token.value)throw this.unexpected()
return this.parseName()}parseValueLiteral(e){const t=this._lexer.token
switch(t.kind){case d.BRACKET_L:return this.parseList(e)
case d.BRACE_L:return this.parseObject(e)
case d.INT:return this.advanceLexer(),this.node(t,{kind:y.h.INT,value:t.value})
case d.FLOAT:return this.advanceLexer(),this.node(t,{kind:y.h.FLOAT,value:t.value})
case d.STRING:case d.BLOCK_STRING:return this.parseStringLiteral()
case d.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:y.h.BOOLEAN,value:!0})
case"false":return this.node(t,{kind:y.h.BOOLEAN,value:!1})
case"null":return this.node(t,{kind:y.h.NULL})
default:return this.node(t,{kind:y.h.ENUM,value:t.value})}case d.DOLLAR:if(e){if(this.expectToken(d.DOLLAR),this._lexer.token.kind===d.NAME){const e=this._lexer.token.value
throw f(this._lexer.source,t.start,`Unexpected variable "$${e}" in constant value.`)}throw this.unexpected(t)}return this.parseVariable()
default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const e=this._lexer.token
return this.advanceLexer(),this.node(e,{kind:y.h.STRING,value:e.value,block:e.kind===d.BLOCK_STRING})}parseList(e){return this.node(this._lexer.token,{kind:y.h.LIST,values:this.any(d.BRACKET_L,(()=>this.parseValueLiteral(e)),d.BRACKET_R)})}parseObject(e){return this.node(this._lexer.token,{kind:y.h.OBJECT,fields:this.any(d.BRACE_L,(()=>this.parseObjectField(e)),d.BRACE_R)})}parseObjectField(e){const t=this._lexer.token,r=this.parseName()
return this.expectToken(d.COLON),this.node(t,{kind:y.h.OBJECT_FIELD,name:r,value:this.parseValueLiteral(e)})}parseDirectives(e){const t=[]
for(;this.peek(d.AT);)t.push(this.parseDirective(e))
return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){const t=this._lexer.token
return this.expectToken(d.AT),this.node(t,{kind:y.h.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){const e=this._lexer.token
let t
if(this.expectOptionalToken(d.BRACKET_L)){const r=this.parseTypeReference()
this.expectToken(d.BRACKET_R),t=this.node(e,{kind:y.h.LIST_TYPE,type:r})}else t=this.parseNamedType()
return this.expectOptionalToken(d.BANG)?this.node(e,{kind:y.h.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:y.h.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(d.STRING)||this.peek(d.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const e=this._lexer.token,t=this.parseDescription()
this.expectKeyword("schema")
const r=this.parseConstDirectives(),n=this.many(d.BRACE_L,this.parseOperationTypeDefinition,d.BRACE_R)
return this.node(e,{kind:y.h.SCHEMA_DEFINITION,description:t,directives:r,operationTypes:n})}parseOperationTypeDefinition(){const e=this._lexer.token,t=this.parseOperationType()
this.expectToken(d.COLON)
const r=this.parseNamedType()
return this.node(e,{kind:y.h.OPERATION_TYPE_DEFINITION,operation:t,type:r})}parseScalarTypeDefinition(){const e=this._lexer.token,t=this.parseDescription()
this.expectKeyword("scalar")
const r=this.parseName(),n=this.parseConstDirectives()
return this.node(e,{kind:y.h.SCALAR_TYPE_DEFINITION,description:t,name:r,directives:n})}parseObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription()
this.expectKeyword("type")
const r=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition()
return this.node(e,{kind:y.h.OBJECT_TYPE_DEFINITION,description:t,name:r,interfaces:n,directives:i,fields:o})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(d.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(d.BRACE_L,this.parseFieldDefinition,d.BRACE_R)}parseFieldDefinition(){const e=this._lexer.token,t=this.parseDescription(),r=this.parseName(),n=this.parseArgumentDefs()
this.expectToken(d.COLON)
const i=this.parseTypeReference(),o=this.parseConstDirectives()
return this.node(e,{kind:y.h.FIELD_DEFINITION,description:t,name:r,arguments:n,type:i,directives:o})}parseArgumentDefs(){return this.optionalMany(d.PAREN_L,this.parseInputValueDef,d.PAREN_R)}parseInputValueDef(){const e=this._lexer.token,t=this.parseDescription(),r=this.parseName()
this.expectToken(d.COLON)
const n=this.parseTypeReference()
let i
this.expectOptionalToken(d.EQUALS)&&(i=this.parseConstValueLiteral())
const o=this.parseConstDirectives()
return this.node(e,{kind:y.h.INPUT_VALUE_DEFINITION,description:t,name:r,type:n,defaultValue:i,directives:o})}parseInterfaceTypeDefinition(){const e=this._lexer.token,t=this.parseDescription()
this.expectKeyword("interface")
const r=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition()
return this.node(e,{kind:y.h.INTERFACE_TYPE_DEFINITION,description:t,name:r,interfaces:n,directives:i,fields:o})}parseUnionTypeDefinition(){const e=this._lexer.token,t=this.parseDescription()
this.expectKeyword("union")
const r=this.parseName(),n=this.parseConstDirectives(),i=this.parseUnionMemberTypes()
return this.node(e,{kind:y.h.UNION_TYPE_DEFINITION,description:t,name:r,directives:n,types:i})}parseUnionMemberTypes(){return this.expectOptionalToken(d.EQUALS)?this.delimitedMany(d.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const e=this._lexer.token,t=this.parseDescription()
this.expectKeyword("enum")
const r=this.parseName(),n=this.parseConstDirectives(),i=this.parseEnumValuesDefinition()
return this.node(e,{kind:y.h.ENUM_TYPE_DEFINITION,description:t,name:r,directives:n,values:i})}parseEnumValuesDefinition(){return this.optionalMany(d.BRACE_L,this.parseEnumValueDefinition,d.BRACE_R)}parseEnumValueDefinition(){const e=this._lexer.token,t=this.parseDescription(),r=this.parseEnumValueName(),n=this.parseConstDirectives()
return this.node(e,{kind:y.h.ENUM_VALUE_DEFINITION,description:t,name:r,directives:n})}parseEnumValueName(){if("true"===this._lexer.token.value||"false"===this._lexer.token.value||"null"===this._lexer.token.value)throw f(this._lexer.source,this._lexer.token.start,`${U(this._lexer.token)} is reserved and cannot be used for an enum value.`)
return this.parseName()}parseInputObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription()
this.expectKeyword("input")
const r=this.parseName(),n=this.parseConstDirectives(),i=this.parseInputFieldsDefinition()
return this.node(e,{kind:y.h.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:r,directives:n,fields:i})}parseInputFieldsDefinition(){return this.optionalMany(d.BRACE_L,this.parseInputValueDef,d.BRACE_R)}parseTypeSystemExtension(){const e=this._lexer.lookahead()
if(e.kind===d.NAME)switch(e.value){case"schema":return this.parseSchemaExtension()
case"scalar":return this.parseScalarTypeExtension()
case"type":return this.parseObjectTypeExtension()
case"interface":return this.parseInterfaceTypeExtension()
case"union":return this.parseUnionTypeExtension()
case"enum":return this.parseEnumTypeExtension()
case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){const e=this._lexer.token
this.expectKeyword("extend"),this.expectKeyword("schema")
const t=this.parseConstDirectives(),r=this.optionalMany(d.BRACE_L,this.parseOperationTypeDefinition,d.BRACE_R)
if(0===t.length&&0===r.length)throw this.unexpected()
return this.node(e,{kind:y.h.SCHEMA_EXTENSION,directives:t,operationTypes:r})}parseScalarTypeExtension(){const e=this._lexer.token
this.expectKeyword("extend"),this.expectKeyword("scalar")
const t=this.parseName(),r=this.parseConstDirectives()
if(0===r.length)throw this.unexpected()
return this.node(e,{kind:y.h.SCALAR_TYPE_EXTENSION,name:t,directives:r})}parseObjectTypeExtension(){const e=this._lexer.token
this.expectKeyword("extend"),this.expectKeyword("type")
const t=this.parseName(),r=this.parseImplementsInterfaces(),n=this.parseConstDirectives(),i=this.parseFieldsDefinition()
if(0===r.length&&0===n.length&&0===i.length)throw this.unexpected()
return this.node(e,{kind:y.h.OBJECT_TYPE_EXTENSION,name:t,interfaces:r,directives:n,fields:i})}parseInterfaceTypeExtension(){const e=this._lexer.token
this.expectKeyword("extend"),this.expectKeyword("interface")
const t=this.parseName(),r=this.parseImplementsInterfaces(),n=this.parseConstDirectives(),i=this.parseFieldsDefinition()
if(0===r.length&&0===n.length&&0===i.length)throw this.unexpected()
return this.node(e,{kind:y.h.INTERFACE_TYPE_EXTENSION,name:t,interfaces:r,directives:n,fields:i})}parseUnionTypeExtension(){const e=this._lexer.token
this.expectKeyword("extend"),this.expectKeyword("union")
const t=this.parseName(),r=this.parseConstDirectives(),n=this.parseUnionMemberTypes()
if(0===r.length&&0===n.length)throw this.unexpected()
return this.node(e,{kind:y.h.UNION_TYPE_EXTENSION,name:t,directives:r,types:n})}parseEnumTypeExtension(){const e=this._lexer.token
this.expectKeyword("extend"),this.expectKeyword("enum")
const t=this.parseName(),r=this.parseConstDirectives(),n=this.parseEnumValuesDefinition()
if(0===r.length&&0===n.length)throw this.unexpected()
return this.node(e,{kind:y.h.ENUM_TYPE_EXTENSION,name:t,directives:r,values:n})}parseInputObjectTypeExtension(){const e=this._lexer.token
this.expectKeyword("extend"),this.expectKeyword("input")
const t=this.parseName(),r=this.parseConstDirectives(),n=this.parseInputFieldsDefinition()
if(0===r.length&&0===n.length)throw this.unexpected()
return this.node(e,{kind:y.h.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:r,fields:n})}parseDirectiveDefinition(){const e=this._lexer.token,t=this.parseDescription()
this.expectKeyword("directive"),this.expectToken(d.AT)
const r=this.parseName(),n=this.parseArgumentDefs(),i=this.expectOptionalKeyword("repeatable")
this.expectKeyword("on")
const o=this.parseDirectiveLocations()
return this.node(e,{kind:y.h.DIRECTIVE_DEFINITION,description:t,name:r,arguments:n,repeatable:i,locations:o})}parseDirectiveLocations(){return this.delimitedMany(d.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const e=this._lexer.token,t=this.parseName()
if(Object.prototype.hasOwnProperty.call(h,t.value))return t
throw this.unexpected(e)}node(e,t){return!0!==this._options.noLocation&&(t.loc=new p.Ye(e,this._lexer.lastToken,this._lexer.source)),t}peek(e){return this._lexer.token.kind===e}expectToken(e){const t=this._lexer.token
if(t.kind===e)return this.advanceLexer(),t
throw f(this._lexer.source,t.start,`Expected ${G(e)}, found ${U(t)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e&&(this.advanceLexer(),!0)}expectKeyword(e){const t=this._lexer.token
if(t.kind!==d.NAME||t.value!==e)throw f(this._lexer.source,t.start,`Expected "${e}", found ${U(t)}.`)
this.advanceLexer()}expectOptionalKeyword(e){const t=this._lexer.token
return t.kind===d.NAME&&t.value===e&&(this.advanceLexer(),!0)}unexpected(e){const t=null!=e?e:this._lexer.token
return f(this._lexer.source,t.start,`Unexpected ${U(t)}.`)}any(e,t,r){this.expectToken(e)
const n=[]
for(;!this.expectOptionalToken(r);)n.push(t.call(this))
return n}optionalMany(e,t,r){if(this.expectOptionalToken(e)){const e=[]
do{e.push(t.call(this))}while(!this.expectOptionalToken(r))
return e}return[]}many(e,t,r){this.expectToken(e)
const n=[]
do{n.push(t.call(this))}while(!this.expectOptionalToken(r))
return n}delimitedMany(e,t){this.expectOptionalToken(e)
const r=[]
do{r.push(t.call(this))}while(this.expectOptionalToken(e))
return r}advanceLexer(){const{maxTokens:e}=this._options,t=this._lexer.advance()
if(void 0!==e&&t.kind!==d.EOF&&(++this._tokenCounter,this._tokenCounter>e))throw f(this._lexer.source,t.start,`Document contains more that ${e} tokens. Parsing aborted.`)}}function U(e){const t=e.value
return G(e.kind)+(null!=t?` "${t}"`:"")}function G(e){return function(e){return e===d.BANG||e===d.DOLLAR||e===d.AMP||e===d.PAREN_L||e===d.PAREN_R||e===d.SPREAD||e===d.COLON||e===d.EQUALS||e===d.AT||e===d.BRACKET_L||e===d.BRACKET_R||e===d.BRACE_L||e===d.PIPE||e===d.BRACE_R}(e)?`"${e}"`:e}var z=new Map,K=new Map,W=!0,Y=!1
function J(e){return e.replace(/[\s,]+/g," ").trim()}function $(e){var t=J(e)
if(!z.has(t)){var r=function(e,t){return new B(e,t).parseDocument()}(e,{experimentalFragmentVariables:Y,allowLegacyFragmentVariables:Y})
if(!r||"Document"!==r.kind)throw new Error("Not a valid GraphQL document.")
z.set(t,function(e){var t=new Set(e.definitions)
t.forEach((function(e){e.loc&&delete e.loc,Object.keys(e).forEach((function(r){var n=e[r]
n&&"object"==typeof n&&t.add(n)}))}))
var r=e.loc
return r&&(delete r.startToken,delete r.endToken),e}(function(e){var t=new Set,r=[]
return e.definitions.forEach((function(e){if("FragmentDefinition"===e.kind){var n=e.name.value,i=J((s=e.loc).source.body.substring(s.start,s.end)),o=K.get(n)
o&&!o.has(i)?W&&console.warn("Warning: fragment with name "+n+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):o||K.set(n,o=new Set),o.add(i),t.has(i)||(t.add(i),r.push(e))}else r.push(e)
var s})),(0,n.pi)((0,n.pi)({},e),{definitions:r})}(r)))}return z.get(t)}function H(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r]
"string"==typeof e&&(e=[e])
var n=e[0]
return t.forEach((function(t,r){t&&"Document"===t.kind?n+=t.loc.source.body:n+=t,n+=e[r+1]})),$(n)}function X(){z.clear(),K.clear()}function Z(){W=!1}function ee(){Y=!0}function te(){Y=!1}var re,ne=H,ie=X,oe=Z,se=ee,ae=te;(re=H||(H={})).gql=ne,re.resetCaches=ie,re.disableFragmentWarnings=oe,re.enableExperimentalFragmentVariables=se,re.disableExperimentalFragmentVariables=ae,H.default=H},415:(e,t,r)=>{r.r(t),r.d(t,{ApolloCache:()=>en,ApolloClient:()=>Zr,ApolloError:()=>me.cA,ApolloLink:()=>$,Cache:()=>Hr,DocumentTransform:()=>Et,HttpLink:()=>at,InMemoryCache:()=>ti,MissingFieldError:()=>tn,NetworkStatus:()=>xt.Ie,Observable:()=>_,ObservableQuery:()=>Vt,checkFetcher:()=>Re,concat:()=>oi,createHttpLink:()=>st,createSignalIfSupported:()=>si,defaultDataIdFromObject:()=>sn,defaultPrinter:()=>Ke,disableExperimentalFragmentVariables:()=>li.J9,disableFragmentWarnings:()=>li._t,empty:()=>ri,enableExperimentalFragmentVariables:()=>li.wO,execute:()=>H,fallbackHttpConfig:()=>ze,from:()=>ni,fromError:()=>$e,fromPromise:()=>ci,gql:()=>li.Ps,isApolloError:()=>me.MS,isNetworkRequestSettled:()=>xt.Jp,isReference:()=>N,makeReference:()=>x,makeVar:()=>Qr,mergeOptions:()=>$r,parseAndCheckHttpResponse:()=>Ae,resetCaches:()=>li.HW,rewriteURIForGET:()=>Je,selectHttpOptionsAndBody:()=>We,selectHttpOptionsAndBodyInternal:()=>Ye,selectURI:()=>le,serializeFetchParameter:()=>ue,setLogVerbosity:()=>ui.U6,split:()=>ii,throwServerError:()=>ye,toPromise:()=>ai})
var n=r(204),i=r(562)
function o(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var c=function(){return"function"==typeof Symbol},u=function(e){return c()&&Boolean(Symbol[e])},l=function(e){return u(e)?Symbol[e]:"@@"+e}
c()&&!u("observable")&&(Symbol.observable=Symbol("observable"))
var f=l("iterator"),h=l("observable"),p=l("species")
function d(e,t){var r=e[t]
if(null!=r){if("function"!=typeof r)throw new TypeError(r+" is not a function")
return r}}function v(e){var t=e.constructor
return void 0!==t&&null===(t=t[p])&&(t=void 0),void 0!==t?t:_}function y(e){y.log?y.log(e):setTimeout((function(){throw e}))}function m(e){Promise.resolve().then((function(){try{e()}catch(e){y(e)}}))}function b(e){var t=e._cleanup
if(void 0!==t&&(e._cleanup=void 0,t))try{if("function"==typeof t)t()
else{var r=d(t,"unsubscribe")
r&&r.call(t)}}catch(e){y(e)}}function g(e){e._observer=void 0,e._queue=void 0,e._state="closed"}function E(e,t,r){e._state="running"
var n=e._observer
try{var i=d(n,t)
switch(t){case"next":i&&i.call(n,r)
break
case"error":if(g(e),!i)throw r
i.call(n,r)
break
case"complete":g(e),i&&i.call(n)}}catch(e){y(e)}"closed"===e._state?b(e):"running"===e._state&&(e._state="ready")}function O(e,t,r){if("closed"!==e._state){if("buffering"!==e._state)return"ready"!==e._state?(e._state="buffering",e._queue=[{type:t,value:r}],void m((function(){return function(e){var t=e._queue
if(t){e._queue=void 0,e._state="ready"
for(var r=0;r<t.length&&(E(e,t[r].type,t[r].value),"closed"!==e._state);++r);}}(e)}))):void E(e,t,r)
e._queue.push({type:t,value:r})}}var w=function(){function e(e,t){this._cleanup=void 0,this._observer=e,this._queue=void 0,this._state="initializing"
var r=new k(this)
try{this._cleanup=t.call(void 0,r)}catch(e){r.error(e)}"initializing"===this._state&&(this._state="ready")}return e.prototype.unsubscribe=function(){"closed"!==this._state&&(g(this),b(this))},a(e,[{key:"closed",get:function(){return"closed"===this._state}}]),e}(),k=function(){function e(e){this._subscription=e}var t=e.prototype
return t.next=function(e){O(this._subscription,"next",e)},t.error=function(e){O(this._subscription,"error",e)},t.complete=function(){O(this._subscription,"complete")},a(e,[{key:"closed",get:function(){return"closed"===this._subscription._state}}]),e}(),_=function(){function e(t){if(!(this instanceof e))throw new TypeError("Observable cannot be called as a function")
if("function"!=typeof t)throw new TypeError("Observable initializer must be a function")
this._subscriber=t}var t=e.prototype
return t.subscribe=function(e){return"object"==typeof e&&null!==e||(e={next:e,error:arguments[1],complete:arguments[2]}),new w(e,this._subscriber)},t.forEach=function(e){var t=this
return new Promise((function(r,n){if("function"==typeof e)var i=t.subscribe({next:function(t){try{e(t,o)}catch(e){n(e),i.unsubscribe()}},error:n,complete:r})
else n(new TypeError(e+" is not a function"))
function o(){i.unsubscribe(),r()}}))},t.map=function(e){var t=this
if("function"!=typeof e)throw new TypeError(e+" is not a function")
return new(v(this))((function(r){return t.subscribe({next:function(t){try{t=e(t)}catch(e){return r.error(e)}r.next(t)},error:function(e){r.error(e)},complete:function(){r.complete()}})}))},t.filter=function(e){var t=this
if("function"!=typeof e)throw new TypeError(e+" is not a function")
return new(v(this))((function(r){return t.subscribe({next:function(t){try{if(!e(t))return}catch(e){return r.error(e)}r.next(t)},error:function(e){r.error(e)},complete:function(){r.complete()}})}))},t.reduce=function(e){var t=this
if("function"!=typeof e)throw new TypeError(e+" is not a function")
var r=v(this),n=arguments.length>1,i=!1,o=arguments[1]
return new r((function(r){return t.subscribe({next:function(t){var s=!i
if(i=!0,!s||n)try{o=e(o,t)}catch(e){return r.error(e)}else o=t},error:function(e){r.error(e)},complete:function(){if(!i&&!n)return r.error(new TypeError("Cannot reduce an empty sequence"))
r.next(o),r.complete()}})}))},t.concat=function(){for(var e=this,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
var i=v(this)
return new i((function(t){var n,o=0
return function e(s){n=s.subscribe({next:function(e){t.next(e)},error:function(e){t.error(e)},complete:function(){o===r.length?(n=void 0,t.complete()):e(i.from(r[o++]))}})}(e),function(){n&&(n.unsubscribe(),n=void 0)}}))},t.flatMap=function(e){var t=this
if("function"!=typeof e)throw new TypeError(e+" is not a function")
var r=v(this)
return new r((function(n){var i=[],o=t.subscribe({next:function(t){if(e)try{t=e(t)}catch(e){return n.error(e)}var o=r.from(t).subscribe({next:function(e){n.next(e)},error:function(e){n.error(e)},complete:function(){var e=i.indexOf(o)
e>=0&&i.splice(e,1),s()}})
i.push(o)},error:function(e){n.error(e)},complete:function(){s()}})
function s(){o.closed&&0===i.length&&n.complete()}return function(){i.forEach((function(e){return e.unsubscribe()})),o.unsubscribe()}}))},t[h]=function(){return this},e.from=function(t){var r="function"==typeof this?this:e
if(null==t)throw new TypeError(t+" is not an object")
var n=d(t,h)
if(n){var i=n.call(t)
if(Object(i)!==i)throw new TypeError(i+" is not an object")
return function(e){return e instanceof _}(i)&&i.constructor===r?i:new r((function(e){return i.subscribe(e)}))}if(u("iterator")&&(n=d(t,f)))return new r((function(e){m((function(){if(!e.closed){for(var r,i=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(r)return(r=r.call(e)).next.bind(r)
if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return o(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(e))){r&&(e=r)
var n=0
return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(n.call(t));!(r=i()).done;){var s=r.value
if(e.next(s),e.closed)return}e.complete()}}))}))
if(Array.isArray(t))return new r((function(e){m((function(){if(!e.closed){for(var r=0;r<t.length;++r)if(e.next(t[r]),e.closed)return
e.complete()}}))}))
throw new TypeError(t+" is not observable")},e.of=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return new("function"==typeof this?this:e)((function(e){m((function(){if(!e.closed){for(var t=0;t<r.length;++t)if(e.next(r[t]),e.closed)return
e.complete()}}))}))},a(e,null,[{key:p,get:function(){return this}}]),e}()
c()&&Object.defineProperty(_,Symbol("extensions"),{value:{symbol:h,hostReportError:y},configurable:!0})
var T=r(609)
function S(e,t){var r=t,o=[]
return e.definitions.forEach((function(e){if("OperationDefinition"===e.kind)throw(0,i._K)(70,e.operation,e.name?" named '".concat(e.name.value,"'"):"")
"FragmentDefinition"===e.kind&&o.push(e)})),void 0===r&&((0,i.kG)(1===o.length,71,o.length),r=o[0].name.value),(0,n.pi)((0,n.pi)({},e),{definitions:(0,n.ev)([{kind:"OperationDefinition",operation:"query",selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:r}}]}}],e.definitions,!0)})}function D(e){void 0===e&&(e=[])
var t={}
return e.forEach((function(e){t[e.name.value]=e})),t}function I(e,t){switch(e.kind){case"InlineFragment":return e
case"FragmentSpread":var r=e.name.value
if("function"==typeof t)return t(r)
var n=t&&t[r]
return(0,i.kG)(n,72,r),n||null
default:return null}}function x(e){return{__ref:String(e)}}function N(e){return Boolean(e&&"object"==typeof e&&"string"==typeof e.__ref)}function A(e,t,r,n){if(function(e){return"IntValue"===e.kind}(r)||function(e){return"FloatValue"===e.kind}(r))e[t.value]=Number(r.value)
else if(function(e){return"BooleanValue"===e.kind}(r)||function(e){return"StringValue"===e.kind}(r))e[t.value]=r.value
else if(function(e){return"ObjectValue"===e.kind}(r)){var o={}
r.fields.map((function(e){return A(o,e.name,e.value,n)})),e[t.value]=o}else if(function(e){return"Variable"===e.kind}(r)){var s=(n||{})[r.name.value]
e[t.value]=s}else if(function(e){return"ListValue"===e.kind}(r))e[t.value]=r.values.map((function(e){var r={}
return A(r,t,e,n),r[t.value]}))
else if(function(e){return"EnumValue"===e.kind}(r))e[t.value]=r.value
else{if(!function(e){return"NullValue"===e.kind}(r))throw(0,i._K)(81,t.value,r.kind)
e[t.value]=null}}var R=["connection","include","skip","client","rest","export","nonreactive"],C=Object.assign((function(e,t,r){if(t&&r&&r.connection&&r.connection.key){if(r.connection.filter&&r.connection.filter.length>0){var n=r.connection.filter?r.connection.filter:[]
n.sort()
var i={}
return n.forEach((function(e){i[e]=t[e]})),"".concat(r.connection.key,"(").concat(F(i),")")}return r.connection.key}var o=e
if(t){var s=F(t)
o+="(".concat(s,")")}return r&&Object.keys(r).forEach((function(e){-1===R.indexOf(e)&&(r[e]&&Object.keys(r[e]).length?o+="@".concat(e,"(").concat(F(r[e]),")"):o+="@".concat(e))})),o}),{setStringify:function(e){var t=F
return F=e,t}}),F=function(e){return JSON.stringify(e,P)}
function P(e,t){return(0,T.s)(t)&&!Array.isArray(t)&&(t=Object.keys(t).sort().reduce((function(e,r){return e[r]=t[r],e}),{})),t}function j(e,t){if(e.arguments&&e.arguments.length){var r={}
return e.arguments.forEach((function(e){var n=e.name,i=e.value
return A(r,n,i,t)})),r}return null}function L(e){return e.alias?e.alias.value:e.name.value}function M(e,t,r){for(var n,i=0,o=t.selections;i<o.length;i++)if(q(c=o[i])){if("__typename"===c.name.value)return e[L(c)]}else n?n.push(c):n=[c]
if("string"==typeof e.__typename)return e.__typename
if(n)for(var s=0,a=n;s<a.length;s++){var c,u=M(e,I(c=a[s],r).selectionSet,r)
if("string"==typeof u)return u}}function q(e){return"Field"===e.kind}function V(e){(0,i.kG)(e&&"Document"===e.kind,73)
var t=e.definitions.filter((function(e){return"FragmentDefinition"!==e.kind})).map((function(e){if("OperationDefinition"!==e.kind)throw(0,i._K)(74,e.kind)
return e}))
return(0,i.kG)(t.length<=1,75,t.length),e}function Q(e){return V(e),e.definitions.filter((function(e){return"OperationDefinition"===e.kind}))[0]}function B(e){return e.definitions.filter((function(e){return"OperationDefinition"===e.kind&&!!e.name})).map((function(e){return e.name.value}))[0]||null}function U(e){return e.definitions.filter((function(e){return"FragmentDefinition"===e.kind}))}function G(e){var t=Q(e)
return(0,i.kG)(t&&"query"===t.operation,76),t}function z(e){var t
V(e)
for(var r=0,n=e.definitions;r<n.length;r++){var o=n[r]
if("OperationDefinition"===o.kind){var s=o.operation
if("query"===s||"mutation"===s||"subscription"===s)return o}"FragmentDefinition"!==o.kind||t||(t=o)}if(t)return t
throw(0,i._K)(80)}function K(e){var t=Object.create(null),r=e&&e.variableDefinitions
return r&&r.length&&r.forEach((function(e){e.defaultValue&&A(t,e.variable.name,e.defaultValue)})),t}function W(e,t){return t?t(e):_.of()}function Y(e){return"function"==typeof e?new $(e):e}function J(e){return e.request.length<=1}var $=function(){function e(e){e&&(this.request=e)}return e.empty=function(){return new e((function(){return _.of()}))},e.from=function(t){return 0===t.length?e.empty():t.map(Y).reduce((function(e,t){return e.concat(t)}))},e.split=function(t,r,n){var i=Y(r),o=Y(n||new e(W))
return J(i)&&J(o)?new e((function(e){return t(e)?i.request(e)||_.of():o.request(e)||_.of()})):new e((function(e,r){return t(e)?i.request(e,r)||_.of():o.request(e,r)||_.of()}))},e.execute=function(e,t){return e.request(function(e,t){var r=(0,n.pi)({},e)
return Object.defineProperty(t,"setContext",{enumerable:!1,value:function(e){r="function"==typeof e?(0,n.pi)((0,n.pi)({},r),e(r)):(0,n.pi)((0,n.pi)({},r),e)}}),Object.defineProperty(t,"getContext",{enumerable:!1,value:function(){return(0,n.pi)({},r)}}),t}(t.context,function(e){var t={variables:e.variables||{},extensions:e.extensions||{},operationName:e.operationName,query:e.query}
return t.operationName||(t.operationName="string"!=typeof t.query?B(t.query)||void 0:""),t}(function(e){for(var t=["query","operationName","variables","extensions","context"],r=0,n=Object.keys(e);r<n.length;r++){var o=n[r]
if(t.indexOf(o)<0)throw(0,i._K)(43,o)}return e}(t))))||_.of()},e.concat=function(t,r){var n=Y(t)
if(J(n))return!1!==globalThis.__DEV__&&i.kG.warn(35,n),n
var o=Y(r)
return J(o)?new e((function(e){return n.request(e,(function(e){return o.request(e)||_.of()}))||_.of()})):new e((function(e,t){return n.request(e,(function(e){return o.request(e,t)||_.of()}))||_.of()}))},e.prototype.split=function(t,r,n){return this.concat(e.split(t,r,n||new e(W)))},e.prototype.concat=function(t){return e.concat(this,t)},e.prototype.request=function(e,t){throw(0,i._K)(36)},e.prototype.onError=function(e,t){if(t&&t.error)return t.error(e),!1
throw e},e.prototype.setOnError=function(e){return this.onError=e,this},e}(),H=$.execute,X=r(112),Z=r(345),ee=r(616),te=r(859),re=r(659)
const ne=Object.freeze({})
function ie(e,t,r=te.h8){const n=new Map
for(const m of Object.values(re.h))n.set(m,oe(t,m))
let i,o,s,a=Array.isArray(e),c=[e],u=-1,l=[],f=e
const h=[],p=[]
do{u++
const e=u===c.length,m=e&&0!==l.length
if(e){if(o=0===p.length?void 0:h[h.length-1],f=s,s=p.pop(),m)if(a){f=f.slice()
let e=0
for(const[t,r]of l){const n=t-e
null===r?(f.splice(n,1),e++):f[n]=r}}else{f=Object.defineProperties({},Object.getOwnPropertyDescriptors(f))
for(const[e,t]of l)f[e]=t}u=i.index,c=i.keys,l=i.edits,a=i.inArray,i=i.prev}else if(s){if(o=a?u:c[u],f=s[o],null==f)continue
h.push(o)}let b
if(!Array.isArray(f)){var d,v;(0,te.UG)(f)||(0,Z.a)(!1,`Invalid AST Node: ${(0,ee.X)(f)}.`)
const r=e?null===(d=n.get(f.kind))||void 0===d?void 0:d.leave:null===(v=n.get(f.kind))||void 0===v?void 0:v.enter
if(b=null==r?void 0:r.call(t,f,o,s,h,p),b===ne)break
if(!1===b){if(!e){h.pop()
continue}}else if(void 0!==b&&(l.push([o,b]),!e)){if(!(0,te.UG)(b)){h.pop()
continue}f=b}}var y
void 0===b&&m&&l.push([o,f]),e?h.pop():(i={inArray:a,index:u,keys:c,edits:l,prev:i},a=Array.isArray(f),c=a?f:null!==(y=r[f.kind])&&void 0!==y?y:[],u=-1,l=[],s&&p.push(s),s=f)}while(void 0!==i)
return 0!==l.length?l[l.length-1][1]:e}function oe(e,t){const r=e[t]
return"object"==typeof r?r:"function"==typeof r?{enter:r,leave:void 0}:{enter:e.enter,leave:e.leave}}function se(e,t){var r=e.directives
return!r||!r.length||function(e){var t=[]
return e&&e.length&&e.forEach((function(e){if(function(e){var t=e.name.value
return"skip"===t||"include"===t}(e)){var r=e.arguments,n=e.name.value;(0,i.kG)(r&&1===r.length,67,n)
var o=r[0];(0,i.kG)(o.name&&"if"===o.name.value,68,n)
var s=o.value;(0,i.kG)(s&&("Variable"===s.kind||"BooleanValue"===s.kind),69,n),t.push({directive:e,ifArgument:o})}})),t}(r).every((function(e){var r=e.directive,n=e.ifArgument,o=!1
return"Variable"===n.value.kind?(o=t&&t[n.value.name.value],(0,i.kG)(void 0!==o,66,r.name.value)):o=n.value.value,"skip"===r.name.value?!o:o}))}function ae(e,t,r){var n=new Set(e),i=n.size
return ie(t,{Directive:function(e){if(n.delete(e.name.value)&&(!r||!n.size))return ne}}),r?!n.size:n.size<i}function ce(e){return e&&ae(["client","export"],e,!0)}var ue=function(e,t){var r
try{r=JSON.stringify(e)}catch(e){var n=(0,i._K)(39,t,e.message)
throw n.parseError=e,n}return r},le=function(e,t){return e.getContext().uri||("function"==typeof t?t(e):t||"/graphql")},fe="function"==typeof WeakMap&&"ReactNative"!==(0,i.wY)((function(){return navigator.product})),he="function"==typeof WeakSet,pe="function"==typeof Symbol&&"function"==typeof Symbol.for,de=pe&&Symbol.asyncIterator
function ve(e){var t={next:function(){return e.read()}}
return de&&(t[Symbol.asyncIterator]=function(){return this}),t}(0,i.wY)((function(){return window.document.createElement})),(0,i.wY)((function(){return navigator.userAgent.indexOf("jsdom")>=0}))
var ye=function(e,t,r){var n=new Error(r)
throw n.name="ServerError",n.response=e,n.statusCode=e.status,n.result=t,n},me=r(313),be=Array.isArray
function ge(e){return Array.isArray(e)&&e.length>0}var Ee=Object.prototype.hasOwnProperty
function Oe(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return we(e)}function we(e){var t=e[0]||{},r=e.length
if(r>1)for(var n=new _e,i=1;i<r;++i)t=n.merge(t,e[i])
return t}var ke=function(e,t,r){return this.merge(e[r],t[r])},_e=function(){function e(e){void 0===e&&(e=ke),this.reconciler=e,this.isObject=T.s,this.pastCopies=new Set}return e.prototype.merge=function(e,t){for(var r=this,i=[],o=2;o<arguments.length;o++)i[o-2]=arguments[o]
return(0,T.s)(t)&&(0,T.s)(e)?(Object.keys(t).forEach((function(o){if(Ee.call(e,o)){var s=e[o]
if(t[o]!==s){var a=r.reconciler.apply(r,(0,n.ev)([e,t,o],i,!1))
a!==s&&((e=r.shallowCopyForMerge(e))[o]=a)}}else(e=r.shallowCopyForMerge(e))[o]=t[o]})),e):t},e.prototype.shallowCopyForMerge=function(e){return(0,T.s)(e)&&(this.pastCopies.has(e)||(e=Array.isArray(e)?e.slice(0):(0,n.pi)({__proto__:Object.getPrototypeOf(e)},e),this.pastCopies.add(e))),e},e}()
function Te(e){return"incremental"in e}function Se(e){return(0,T.s)(e)&&"payload"in e}function De(e,t){var r=e,n=new _e
return Te(t)&&ge(t.incremental)&&t.incremental.forEach((function(e){for(var t=e.data,i=e.path,o=i.length-1;o>=0;--o){var s=i[o],a=isNaN(+s)?{}:[]
a[s]=t,t=a}r=n.merge(r,t)})),r}var Ie=Object.prototype.hasOwnProperty
function xe(e){var t={}
return e.split("\n").forEach((function(e){var r=e.indexOf(":")
if(r>-1){var n=e.slice(0,r).trim().toLowerCase(),i=e.slice(r+1).trim()
t[n]=i}})),t}function Ne(e,t){e.status>=300&&ye(e,function(){try{return JSON.parse(t)}catch(e){return t}}(),"Response not successful: Received status code ".concat(e.status))
try{return JSON.parse(t)}catch(n){var r=n
throw r.name="ServerParseError",r.response=e,r.statusCode=e.status,r.bodyText=t,r}}function Ae(e){return function(t){return t.text().then((function(e){return Ne(t,e)})).then((function(r){return t.status>=300&&ye(t,r,"Response not successful: Received status code ".concat(t.status)),Array.isArray(r)||Ie.call(r,"data")||Ie.call(r,"errors")||ye(t,r,"Server response was missing for query '".concat(Array.isArray(e)?e.map((function(e){return e.operationName})):e.operationName,"'.")),r}))}}var Re=function(e){if(!e&&"undefined"==typeof fetch)throw(0,i._K)(37)},Ce=r(614)
const Fe=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g
function Pe(e){return je[e.charCodeAt(0)]}const je=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],Le={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>Me(e.definitions,"\n\n")},OperationDefinition:{leave(e){const t=Ve("(",Me(e.variableDefinitions,", "),")"),r=Me([e.operation,Me([e.name,t]),Me(e.directives," ")]," ")
return("query"===r?"":r+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:r,directives:n})=>e+": "+t+Ve(" = ",r)+Ve(" ",Me(n," "))},SelectionSet:{leave:({selections:e})=>qe(e)},Field:{leave({alias:e,name:t,arguments:r,directives:n,selectionSet:i}){const o=Ve("",e,": ")+t
let s=o+Ve("(",Me(r,", "),")")
return s.length>80&&(s=o+Ve("(\n",Qe(Me(r,"\n")),"\n)")),Me([s,Me(n," "),i]," ")}},Argument:{leave:({name:e,value:t})=>e+": "+t},FragmentSpread:{leave:({name:e,directives:t})=>"..."+e+Ve(" ",Me(t," "))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:r})=>Me(["...",Ve("on ",e),Me(t," "),r]," ")},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:r,directives:n,selectionSet:i})=>`fragment ${e}${Ve("(",Me(r,", "),")")} on ${t} ${Ve("",Me(n," ")," ")}`+i},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t?(0,Ce.LZ)(e):`"${e.replace(Fe,Pe)}"`},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+Me(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+Me(e,", ")+"}"},ObjectField:{leave:({name:e,value:t})=>e+": "+t},Directive:{leave:({name:e,arguments:t})=>"@"+e+Ve("(",Me(t,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:r})=>Ve("",e,"\n")+Me(["schema",Me(t," "),qe(r)]," ")},OperationTypeDefinition:{leave:({operation:e,type:t})=>e+": "+t},ScalarTypeDefinition:{leave:({description:e,name:t,directives:r})=>Ve("",e,"\n")+Me(["scalar",t,Me(r," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:t,interfaces:r,directives:n,fields:i})=>Ve("",e,"\n")+Me(["type",t,Ve("implements ",Me(r," & ")),Me(n," "),qe(i)]," ")},FieldDefinition:{leave:({description:e,name:t,arguments:r,type:n,directives:i})=>Ve("",e,"\n")+t+(Be(r)?Ve("(\n",Qe(Me(r,"\n")),"\n)"):Ve("(",Me(r,", "),")"))+": "+n+Ve(" ",Me(i," "))},InputValueDefinition:{leave:({description:e,name:t,type:r,defaultValue:n,directives:i})=>Ve("",e,"\n")+Me([t+": "+r,Ve("= ",n),Me(i," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:t,interfaces:r,directives:n,fields:i})=>Ve("",e,"\n")+Me(["interface",t,Ve("implements ",Me(r," & ")),Me(n," "),qe(i)]," ")},UnionTypeDefinition:{leave:({description:e,name:t,directives:r,types:n})=>Ve("",e,"\n")+Me(["union",t,Me(r," "),Ve("= ",Me(n," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:t,directives:r,values:n})=>Ve("",e,"\n")+Me(["enum",t,Me(r," "),qe(n)]," ")},EnumValueDefinition:{leave:({description:e,name:t,directives:r})=>Ve("",e,"\n")+Me([t,Me(r," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:t,directives:r,fields:n})=>Ve("",e,"\n")+Me(["input",t,Me(r," "),qe(n)]," ")},DirectiveDefinition:{leave:({description:e,name:t,arguments:r,repeatable:n,locations:i})=>Ve("",e,"\n")+"directive @"+t+(Be(r)?Ve("(\n",Qe(Me(r,"\n")),"\n)"):Ve("(",Me(r,", "),")"))+(n?" repeatable":"")+" on "+Me(i," | ")},SchemaExtension:{leave:({directives:e,operationTypes:t})=>Me(["extend schema",Me(e," "),qe(t)]," ")},ScalarTypeExtension:{leave:({name:e,directives:t})=>Me(["extend scalar",e,Me(t," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:t,directives:r,fields:n})=>Me(["extend type",e,Ve("implements ",Me(t," & ")),Me(r," "),qe(n)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:t,directives:r,fields:n})=>Me(["extend interface",e,Ve("implements ",Me(t," & ")),Me(r," "),qe(n)]," ")},UnionTypeExtension:{leave:({name:e,directives:t,types:r})=>Me(["extend union",e,Me(t," "),Ve("= ",Me(r," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:t,values:r})=>Me(["extend enum",e,Me(t," "),qe(r)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:t,fields:r})=>Me(["extend input",e,Me(t," "),qe(r)]," ")}}
function Me(e,t=""){var r
return null!==(r=null==e?void 0:e.filter((e=>e)).join(t))&&void 0!==r?r:""}function qe(e){return Ve("{\n",Qe(Me(e,"\n")),"\n}")}function Ve(e,t,r=""){return null!=t&&""!==t?e+t+r:""}function Qe(e){return Ve("  ",e.replace(/\n/g,"\n  "))}function Be(e){var t
return null!==(t=null==e?void 0:e.some((e=>e.includes("\n"))))&&void 0!==t&&t}var Ue=fe?new WeakMap:void 0,Ge=function(e){var t
return(t=null==Ue?void 0:Ue.get(e))||(t=function(e){return ie(e,Le)}(e),null==Ue||Ue.set(e,t)),t},ze={http:{includeQuery:!0,includeExtensions:!1,preserveHeaderCase:!1},headers:{accept:"*/*","content-type":"application/json"},options:{method:"POST"}},Ke=function(e,t){return t(e)}
function We(e,t){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i]
return r.unshift(t),Ye.apply(void 0,(0,n.ev)([e,Ke],r,!1))}function Ye(e,t){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i]
var o={},s={}
r.forEach((function(e){o=(0,n.pi)((0,n.pi)((0,n.pi)({},o),e.options),{headers:(0,n.pi)((0,n.pi)({},o.headers),e.headers)}),e.credentials&&(o.credentials=e.credentials),s=(0,n.pi)((0,n.pi)({},s),e.http)})),o.headers&&(o.headers=function(e,t){if(!t){var r=Object.create(null)
return Object.keys(Object(e)).forEach((function(t){r[t.toLowerCase()]=e[t]})),r}var n=Object.create(null)
Object.keys(Object(e)).forEach((function(t){n[t.toLowerCase()]={originalName:t,value:e[t]}}))
var i=Object.create(null)
return Object.keys(n).forEach((function(e){i[n[e].originalName]=n[e].value})),i}(o.headers,s.preserveHeaderCase))
var a=e.operationName,c=e.extensions,u=e.variables,l=e.query,f={operationName:a,variables:u}
return s.includeExtensions&&(f.extensions=c),s.includeQuery&&(f.query=t(l,Ge)),{options:o,body:f}}function Je(e,t){var r=[],n=function(e,t){r.push("".concat(e,"=").concat(encodeURIComponent(t)))}
if("query"in t&&n("query",t.query),t.operationName&&n("operationName",t.operationName),t.variables){var i=void 0
try{i=ue(t.variables,"Variables map")}catch(e){return{parseError:e}}n("variables",i)}if(t.extensions){var o=void 0
try{o=ue(t.extensions,"Extensions map")}catch(e){return{parseError:e}}n("extensions",o)}var s="",a=e,c=e.indexOf("#");-1!==c&&(s=e.substr(c),a=e.substr(0,c))
var u=-1===a.indexOf("?")?"?":"&"
return{newURI:a+u+r.join("&")+s}}function $e(e){return new _((function(t){t.error(e)}))}var He={kind:re.h.FIELD,name:{kind:re.h.NAME,value:"__typename"}}
function Xe(e,t){return!e||e.selectionSet.selections.every((function(e){return e.kind===re.h.FRAGMENT_SPREAD&&Xe(t[e.name.value],t)}))}function Ze(e){return Xe(Q(e)||function(e){(0,i.kG)("Document"===e.kind,77),(0,i.kG)(e.definitions.length<=1,78)
var t=e.definitions[0]
return(0,i.kG)("FragmentDefinition"===t.kind,79),t}(e),D(U(e)))?null:e}function et(e){var t=new Map
return function(r){void 0===r&&(r=e)
var n=t.get(r)
return n||t.set(r,n={variables:new Set,fragmentSpreads:new Set}),n}}function tt(e,t){V(t)
for(var r=et(""),o=et(""),s=function(e){for(var t=0,n=void 0;t<e.length&&(n=e[t]);++t)if(!be(n)){if(n.kind===re.h.OPERATION_DEFINITION)return r(n.name&&n.name.value)
if(n.kind===re.h.FRAGMENT_DEFINITION)return o(n.name.value)}return!1!==globalThis.__DEV__&&i.kG.error(82),null},a=0,c=t.definitions.length-1;c>=0;--c)t.definitions[c].kind===re.h.OPERATION_DEFINITION&&++a
var u,l,f,h=(u=e,l=new Map,f=new Map,u.forEach((function(e){e&&(e.name?l.set(e.name,e):e.test&&f.set(e.test,e))})),function(e){var t=l.get(e.name.value)
return!t&&f.size&&f.forEach((function(r,n){n(e)&&(t=r)})),t}),p=function(e){return ge(e)&&e.map(h).some((function(e){return e&&e.remove}))},d=new Map,v=!1,y={enter:function(e){if(p(e.directives))return v=!0,null}},m=ie(t,{Field:y,InlineFragment:y,VariableDefinition:{enter:function(){return!1}},Variable:{enter:function(e,t,r,n,i){var o=s(i)
o&&o.variables.add(e.name.value)}},FragmentSpread:{enter:function(e,t,r,n,i){if(p(e.directives))return v=!0,null
var o=s(i)
o&&o.fragmentSpreads.add(e.name.value)}},FragmentDefinition:{enter:function(e,t,r,n){d.set(JSON.stringify(n),e)},leave:function(e,t,r,n){return e===d.get(JSON.stringify(n))?e:a>0&&e.selectionSet.selections.every((function(e){return e.kind===re.h.FIELD&&"__typename"===e.name.value}))?(o(e.name.value).removed=!0,v=!0,null):void 0}},Directive:{leave:function(e){if(h(e))return v=!0,null}}})
if(!v)return t
var b=function(e){return e.transitiveVars||(e.transitiveVars=new Set(e.variables),e.removed||e.fragmentSpreads.forEach((function(t){b(o(t)).transitiveVars.forEach((function(t){e.transitiveVars.add(t)}))}))),e},g=new Set
m.definitions.forEach((function(e){e.kind===re.h.OPERATION_DEFINITION?b(r(e.name&&e.name.value)).fragmentSpreads.forEach((function(e){g.add(e)})):e.kind!==re.h.FRAGMENT_DEFINITION||0!==a||o(e.name.value).removed||g.add(e.name.value)})),g.forEach((function(e){b(o(e)).fragmentSpreads.forEach((function(e){g.add(e)}))}))
var E={enter:function(e){if(t=e.name.value,!g.has(t)||o(t).removed)return null
var t}}
return Ze(ie(m,{FragmentSpread:E,FragmentDefinition:E,OperationDefinition:{leave:function(e){if(e.variableDefinitions){var t=b(r(e.name&&e.name.value)).transitiveVars
if(t.size<e.variableDefinitions.length)return(0,n.pi)((0,n.pi)({},e),{variableDefinitions:e.variableDefinitions.filter((function(e){return t.has(e.variable.name.value)}))})}}}}))}var rt=Object.assign((function(e){return ie(e,{SelectionSet:{enter:function(e,t,r){if(!r||r.kind!==re.h.OPERATION_DEFINITION){var i=e.selections
if(i&&!i.some((function(e){return q(e)&&("__typename"===e.name.value||0===e.name.value.lastIndexOf("__",0))}))){var o=r
if(!(q(o)&&o.directives&&o.directives.some((function(e){return"export"===e.name.value}))))return(0,n.pi)((0,n.pi)({},e),{selections:(0,n.ev)((0,n.ev)([],i,!0),[He],!1)})}}}}})}),{added:function(e){return e===He}})
function nt(e){return"query"===z(e).operation?e:ie(e,{OperationDefinition:{enter:function(e){return(0,n.pi)((0,n.pi)({},e),{operation:"query"})}}})}function it(e){return V(e),tt([{test:function(e){return"client"===e.name.value},remove:!0}],e)}var ot=(0,i.wY)((function(){return fetch})),st=function(e){void 0===e&&(e={})
var t=e.uri,r=void 0===t?"/graphql":t,o=e.fetch,s=e.print,a=void 0===s?Ke:s,c=e.includeExtensions,u=e.preserveHeaderCase,l=e.useGETForQueries,f=e.includeUnusedVariables,h=void 0!==f&&f,p=(0,n._T)(e,["uri","fetch","print","includeExtensions","preserveHeaderCase","useGETForQueries","includeUnusedVariables"])
!1!==globalThis.__DEV__&&Re(o||ot)
var d={http:{includeExtensions:c,preserveHeaderCase:u},options:p.fetchOptions,credentials:p.credentials,headers:p.headers}
return new $((function(e){var t=le(e,r),s=e.getContext(),c={}
if(s.clientAwareness){var u=s.clientAwareness,f=u.name,p=u.version
f&&(c["apollographql-client-name"]=f),p&&(c["apollographql-client-version"]=p)}var v=(0,n.pi)((0,n.pi)({},c),s.headers),y={http:s.http,options:s.fetchOptions,credentials:s.credentials,headers:v}
if(ae(["client"],e.query)){var m=it(e.query)
if(!m)return $e(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."))
e.query=m}var b,g,E,O,w,k=Ye(e,a,ze,d,y),T=k.options,S=k.body
S.variables&&!h&&(S.variables=(b=S.variables,g=e.query,E=(0,n.pi)({},b),O=new Set(Object.keys(b)),ie(g,{Variable:function(e,t,r){r&&"VariableDefinition"!==r.kind&&O.delete(e.name.value)}}),O.forEach((function(e){delete E[e]})),E)),T.signal||"undefined"==typeof AbortController||(w=new AbortController,T.signal=w.signal)
var D,I="OperationDefinition"===(D=z(e.query)).kind&&"subscription"===D.operation,x=ae(["defer"],e.query)
if(l&&!e.query.definitions.some((function(e){return"OperationDefinition"===e.kind&&"mutation"===e.operation}))&&(T.method="GET"),x||I){T.headers=T.headers||{}
var N="multipart/mixed;"
I&&x&&!1!==globalThis.__DEV__&&i.kG.warn(38),I?N+="boundary=graphql;subscriptionSpec=1.0,application/json":x&&(N+="deferSpec=20220824,application/json"),T.headers.accept=N}if("GET"===T.method){var A=Je(t,S),R=A.newURI,C=A.parseError
if(C)return $e(C)
t=R}else try{T.body=ue(S,"Payload")}catch(C){return $e(C)}return new _((function(r){var s=o||(0,i.wY)((function(){return fetch}))||ot,a=r.next.bind(r)
return s(t,T).then((function(t){var r
e.setContext({response:t})
var i=null===(r=t.headers)||void 0===r?void 0:r.get("content-type")
return null!==i&&/^multipart\/mixed/i.test(i)?function(e,t){var r
return(0,n.mG)(this,void 0,void 0,(function(){var i,o,s,a,c,u,l,f,h,p,d,v,y,m,b,g,E,O,w,k,_,T,S
return(0,n.Jh)(this,(function(D){switch(D.label){case 0:if(void 0===TextDecoder)throw new Error("TextDecoder must be defined in the environment: please import a polyfill.")
i=new TextDecoder("utf-8"),o=null===(r=e.headers)||void 0===r?void 0:r.get("content-type"),s="boundary=",a=(null==o?void 0:o.includes(s))?null==o?void 0:o.substring((null==o?void 0:o.indexOf(s))+9).replace(/['"]/g,"").replace(/\;(.*)/gm,"").trim():"-",c="\r\n--".concat(a),u="",l=function(e){var t,r,n=e
if(e.body&&(n=e.body),de&&n[Symbol.asyncIterator])return r=n[Symbol.asyncIterator](),(t={next:function(){return r.next()}})[Symbol.asyncIterator]=function(){return this},t
if(function(e){return!!e.getReader}(n))return ve(n.getReader())
if(function(e){return!!e.stream}(n))return ve(n.stream().getReader())
if(function(e){return!!e.arrayBuffer}(n))return function(e){var t=!1,r={next:function(){return t?Promise.resolve({value:void 0,done:!0}):(t=!0,new Promise((function(t,r){e.then((function(e){t({value:e,done:!1})})).catch(r)})))}}
return de&&(r[Symbol.asyncIterator]=function(){return this}),r}(n.arrayBuffer())
if(function(e){return!!e.pipe}(n))return function(e){var t=null,r=null,n=!1,i=[],o=[]
function s(e){if(!r){if(o.length){var t=o.shift()
if(Array.isArray(t)&&t[0])return t[0]({value:e,done:!1})}i.push(e)}}function a(e){r=e,o.slice().forEach((function(t){t[1](e)})),!t||t()}function c(){n=!0,o.slice().forEach((function(e){e[0]({value:void 0,done:!0})})),!t||t()}t=function(){t=null,e.removeListener("data",s),e.removeListener("error",a),e.removeListener("end",c),e.removeListener("finish",c),e.removeListener("close",c)},e.on("data",s),e.on("error",a),e.on("end",c),e.on("finish",c),e.on("close",c)
var u={next:function(){return new Promise((function(e,t){return r?t(r):i.length?e({value:i.shift(),done:!1}):n?e({value:void 0,done:!0}):void o.push([e,t])}))}}
return de&&(u[Symbol.asyncIterator]=function(){return this}),u}(n)
throw new Error("Unknown body type for responseIterator. Please pass a streamable response.")}(e),f=!0,D.label=1
case 1:return f?[4,l.next()]:[3,3]
case 2:for(h=D.sent(),p=h.value,d=h.done,v="string"==typeof p?p:i.decode(p),y=u.length-c.length+1,f=!d,m=(u+=v).indexOf(c,y);m>-1;){if(b=void 0,T=[u.slice(0,m),u.slice(m+c.length)],u=T[1],g=(b=T[0]).indexOf("\r\n\r\n"),E=xe(b.slice(0,g)),(O=E["content-type"])&&-1===O.toLowerCase().indexOf("application/json"))throw new Error("Unsupported patch content type: application/json is required.")
if(w=b.slice(g))if(k=Ne(e,w),Object.keys(k).length>1||"data"in k||"incremental"in k||"errors"in k||"payload"in k)Se(k)?(_={},"payload"in k&&(_=(0,n.pi)({},k.payload)),"errors"in k&&(_=(0,n.pi)((0,n.pi)({},_),{extensions:(0,n.pi)((0,n.pi)({},"extensions"in _?_.extensions:null),(S={},S[me.YG]=k.errors,S))})),t(_)):t(k)
else if(1===Object.keys(k).length&&"hasNext"in k&&!k.hasNext)return[2]
m=u.indexOf(c)}return[3,1]
case 3:return[2]}}))}))}(t,a):Ae(e)(t).then(a)})).then((function(){w=void 0,r.complete()})).catch((function(e){w=void 0,function(e,t){e.result&&e.result.errors&&e.result.data&&t.next(e.result),t.error(e)}(e,r)})),function(){w&&w.abort()}}))}))},at=function(e){function t(t){void 0===t&&(t={})
var r=e.call(this,st(t).request)||this
return r.options=t,r}return(0,n.ZT)(t,e),t}($),ct=r(929)
const ut=()=>Object.create(null),{forEach:lt,slice:ft}=Array.prototype,{hasOwnProperty:ht}=Object.prototype
class pt{constructor(e=!0,t=ut){this.weakness=e,this.makeData=t}lookup(){return this.lookupArray(arguments)}lookupArray(e){let t=this
return lt.call(e,(e=>t=t.getChildTrie(e))),ht.call(t,"data")?t.data:t.data=this.makeData(ft.call(e))}peek(){return this.peekArray(arguments)}peekArray(e){let t=this
for(let r=0,n=e.length;t&&r<n;++r){const n=t.mapFor(e[r],!1)
t=n&&n.get(e[r])}return t&&t.data}remove(){return this.removeArray(arguments)}removeArray(e){let t
if(e.length){const r=e[0],n=this.mapFor(r,!1),i=n&&n.get(r)
i&&(t=i.removeArray(ft.call(e,1)),i.data||i.weak||i.strong&&i.strong.size||n.delete(r))}else t=this.data,delete this.data
return t}getChildTrie(e){const t=this.mapFor(e,!0)
let r=t.get(e)
return r||t.set(e,r=new pt(this.weakness,this.makeData)),r}mapFor(e,t){return this.weakness&&function(e){switch(typeof e){case"object":if(null===e)break
case"function":return!0}return!1}(e)?this.weak||(t?this.weak=new WeakMap:void 0):this.strong||(t?this.strong=new Map:void 0)}}var dt,vt,yt=function(){function e(){this.known=new(he?WeakSet:Set),this.pool=new pt(fe),this.passes=new WeakMap,this.keysByJSON=new Map,this.empty=this.admit({})}return e.prototype.isKnown=function(e){return(0,T.s)(e)&&this.known.has(e)},e.prototype.pass=function(e){if((0,T.s)(e)){var t=function(e){return(0,T.s)(e)?be(e)?e.slice(0):(0,n.pi)({__proto__:Object.getPrototypeOf(e)},e):e}(e)
return this.passes.set(t,e),t}return e},e.prototype.admit=function(e){var t=this
if((0,T.s)(e)){var r=this.passes.get(e)
if(r)return r
switch(Object.getPrototypeOf(e)){case Array.prototype:if(this.known.has(e))return e
var n=e.map(this.admit,this)
return(a=this.pool.lookupArray(n)).array||(this.known.add(a.array=n),!1!==globalThis.__DEV__&&Object.freeze(n)),a.array
case null:case Object.prototype:if(this.known.has(e))return e
var i=Object.getPrototypeOf(e),o=[i],s=this.sortedKeys(e)
o.push(s.json)
var a,c=o.length
if(s.sorted.forEach((function(r){o.push(t.admit(e[r]))})),!(a=this.pool.lookupArray(o)).object){var u=a.object=Object.create(i)
this.known.add(u),s.sorted.forEach((function(e,t){u[e]=o[c+t]})),!1!==globalThis.__DEV__&&Object.freeze(u)}return a.object}}return e},e.prototype.sortedKeys=function(e){var t=Object.keys(e),r=this.pool.lookupArray(t)
if(!r.keys){t.sort()
var n=JSON.stringify(t);(r.keys=this.keysByJSON.get(n))||this.keysByJSON.set(n,r.keys={sorted:t,json:n})}return r.keys},e}(),mt=Object.assign((function(e){if((0,T.s)(e)){void 0===dt&&bt()
var t=dt.admit(e),r=vt.get(t)
return void 0===r&&vt.set(t,r=JSON.stringify(t)),r}return JSON.stringify(e)}),{reset:bt})
function bt(){dt=new yt,vt=new(fe?WeakMap:Map)}function gt(e){return e}var Et=function(){function e(e,t){void 0===t&&(t=Object.create(null)),this.resultCache=he?new WeakSet:new Set,this.transform=e,t.getCacheKey&&(this.getCacheKey=t.getCacheKey),!1!==t.cache&&(this.stableCacheKeys=new pt(fe,(function(e){return{key:e}})))}return e.prototype.getCacheKey=function(e){return[e]},e.identity=function(){return new e(gt,{cache:!1})},e.split=function(t,r,n){return void 0===n&&(n=e.identity()),new e((function(e){return(t(e)?r:n).transformDocument(e)}),{cache:!1})},e.prototype.transformDocument=function(e){if(this.resultCache.has(e))return e
var t=this.getStableCacheEntry(e)
if(t&&t.value)return t.value
V(e)
var r=this.transform(e)
return this.resultCache.add(r),t&&(t.value=r),r},e.prototype.concat=function(t){var r=this
return new e((function(e){return t.transformDocument(r.transformDocument(e))}),{cache:!1})},e.prototype.getStableCacheEntry=function(e){if(this.stableCacheKeys){var t=this.getCacheKey(e)
return t?((0,i.kG)(Array.isArray(t),65),this.stableCacheKeys.lookupArray(t)):void 0}},e}()
function Ot(e,t,r){return new _((function(n){var i={then:function(e){return new Promise((function(t){return t(e())}))}}
function o(e,t){return function(r){if(e){var o=function(){return n.closed?0:e(r)}
i=i.then(o,o).then((function(e){return n.next(e)}),(function(e){return n.error(e)}))}else n[t](r)}}var s={next:o(t,"next"),error:o(r,"error"),complete:function(){i.then((function(){return n.complete()}))}},a=e.subscribe(s)
return function(){return a.unsubscribe()}}))}function wt(e){return ge(kt(e))}function kt(e){var t=ge(e.errors)?e.errors.slice(0):[]
return Te(e)&&ge(e.incremental)&&e.incremental.forEach((function(e){e.errors&&t.push.apply(t,e.errors)})),t}var _t=r(701)
function Tt(e,t,r){var n=[]
e.forEach((function(e){return e[t]&&n.push(e)})),n.forEach((function(e){return e[t](r)}))}function St(e){function t(t){Object.defineProperty(e,t,{value:_})}return pe&&Symbol.species&&t(Symbol.species),t("@@species"),e}function Dt(e){return e&&"function"==typeof e.then}var It=function(e){function t(t){var r=e.call(this,(function(e){return r.addObserver(e),function(){return r.removeObserver(e)}}))||this
return r.observers=new Set,r.promise=new Promise((function(e,t){r.resolve=e,r.reject=t})),r.handlers={next:function(e){null!==r.sub&&(r.latest=["next",e],r.notify("next",e),Tt(r.observers,"next",e))},error:function(e){var t=r.sub
null!==t&&(t&&setTimeout((function(){return t.unsubscribe()})),r.sub=null,r.latest=["error",e],r.reject(e),r.notify("error",e),Tt(r.observers,"error",e))},complete:function(){var e=r,t=e.sub,n=e.sources
if(null!==t){var i=(void 0===n?[]:n).shift()
i?Dt(i)?i.then((function(e){return r.sub=e.subscribe(r.handlers)})):r.sub=i.subscribe(r.handlers):(t&&setTimeout((function(){return t.unsubscribe()})),r.sub=null,r.latest&&"next"===r.latest[0]?r.resolve(r.latest[1]):r.resolve(),r.notify("complete"),Tt(r.observers,"complete"))}}},r.nextResultListeners=new Set,r.cancel=function(e){r.reject(e),r.sources=[],r.handlers.complete()},r.promise.catch((function(e){})),"function"==typeof t&&(t=[new _(t)]),Dt(t)?t.then((function(e){return r.start(e)}),r.handlers.error):r.start(t),r}return(0,n.ZT)(t,e),t.prototype.start=function(e){void 0===this.sub&&(this.sources=Array.from(e),this.handlers.complete())},t.prototype.deliverLastMessage=function(e){if(this.latest){var t=this.latest[0],r=e[t]
r&&r.call(e,this.latest[1]),null===this.sub&&"next"===t&&e.complete&&e.complete()}},t.prototype.addObserver=function(e){this.observers.has(e)||(this.deliverLastMessage(e),this.observers.add(e))},t.prototype.removeObserver=function(e){this.observers.delete(e)&&this.observers.size<1&&this.handlers.complete()},t.prototype.notify=function(e,t){var r=this.nextResultListeners
r.size&&(this.nextResultListeners=new Set,r.forEach((function(r){return r(e,t)})))},t.prototype.beforeNext=function(e){var t=!1
this.nextResultListeners.add((function(r,n){t||(t=!0,e(r,n))}))},t}(_)
St(It)
var xt=r(277)
function Nt(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
var r=Object.create(null)
return e.forEach((function(e){e&&Object.keys(e).forEach((function(t){var n=e[t]
void 0!==n&&(r[t]=n)}))})),r}var At=Object.prototype.toString
function Rt(e){return Ct(e)}function Ct(e,t){switch(At.call(e)){case"[object Array]":if((t=t||new Map).has(e))return t.get(e)
var r=e.slice(0)
return t.set(e,r),r.forEach((function(e,n){r[n]=Ct(e,t)})),r
case"[object Object]":if((t=t||new Map).has(e))return t.get(e)
var n=Object.create(Object.getPrototypeOf(e))
return t.set(e,n),Object.keys(e).forEach((function(r){n[r]=Ct(e[r],t)})),n
default:return e}}function Ft(e,t,r,i){var o=t.data,s=(0,n._T)(t,["data"]),a=r.data,c=(0,n._T)(r,["data"])
return(0,ct.Z)(s,c)&&Pt(z(e).selectionSet,o,a,{fragmentMap:D(U(e)),variables:i})}function Pt(e,t,r,n){if(t===r)return!0
var i=new Set
return e.selections.every((function(e){if(i.has(e))return!0
if(i.add(e),!se(e,n.variables))return!0
if(jt(e))return!0
if(q(e)){var o=L(e),s=t&&t[o],a=r&&r[o],c=e.selectionSet
if(!c)return(0,ct.Z)(s,a)
var u=Array.isArray(s),l=Array.isArray(a)
if(u!==l)return!1
if(u&&l){var f=s.length
if(a.length!==f)return!1
for(var h=0;h<f;++h)if(!Pt(c,s[h],a[h],n))return!1
return!0}return Pt(c,s,a,n)}var p=I(e,n.fragmentMap)
return p?!!jt(p)||Pt(p.selectionSet,t,r,n):void 0}))}function jt(e){return!!e.directives&&e.directives.some(Lt)}function Lt(e){return"nonreactive"===e.name.value}var Mt=Object.assign,qt=Object.hasOwnProperty,Vt=function(e){function t(t){var r=t.queryManager,i=t.queryInfo,o=t.options,s=e.call(this,(function(e){try{var t=e._subscription._observer
t&&!t.error&&(t.error=Bt)}catch(e){}var r=!s.observers.size
s.observers.add(e)
var n=s.last
return n&&n.error?e.error&&e.error(n.error):n&&n.result&&e.next&&e.next(n.result),r&&s.reobserve().catch((function(){})),function(){s.observers.delete(e)&&!s.observers.size&&s.tearDownQuery()}}))||this
s.observers=new Set,s.subscriptions=new Set,s.queryInfo=i,s.queryManager=r,s.waitForOwnResult=Gt(o.fetchPolicy),s.isTornDown=!1
var a=r.defaultOptions.watchQuery,c=(void 0===a?{}:a).fetchPolicy,u=void 0===c?"cache-first":c,l=o.fetchPolicy,f=void 0===l?u:l,h=o.initialFetchPolicy,p=void 0===h?"standby"===f?u:f:h
s.options=(0,n.pi)((0,n.pi)({},o),{initialFetchPolicy:p,fetchPolicy:f}),s.queryId=i.queryId||r.generateQueryId()
var d=Q(s.query)
return s.queryName=d&&d.name&&d.name.value,s}return(0,n.ZT)(t,e),Object.defineProperty(t.prototype,"query",{get:function(){return this.lastQuery||this.options.query},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"variables",{get:function(){return this.options.variables},enumerable:!1,configurable:!0}),t.prototype.result=function(){var e=this
return new Promise((function(t,r){var n={next:function(r){t(r),e.observers.delete(n),e.observers.size||e.queryManager.removeQuery(e.queryId),setTimeout((function(){i.unsubscribe()}),0)},error:r},i=e.subscribe(n)}))},t.prototype.getCurrentResult=function(e){void 0===e&&(e=!0)
var t=this.getLastResult(!0),r=this.queryInfo.networkStatus||t&&t.networkStatus||xt.Ie.ready,i=(0,n.pi)((0,n.pi)({},t),{loading:(0,xt.Oj)(r),networkStatus:r}),o=this.options.fetchPolicy,s=void 0===o?"cache-first":o
if(Gt(s)||this.queryManager.getDocumentInfo(this.query).hasForcedResolvers);else if(this.waitForOwnResult)this.queryInfo.updateWatch()
else{var a=this.queryInfo.getDiff();(a.complete||this.options.returnPartialData)&&(i.data=a.result),(0,ct.D)(i.data,{})&&(i.data=void 0),a.complete?(delete i.partial,!a.complete||i.networkStatus!==xt.Ie.loading||"cache-first"!==s&&"cache-only"!==s||(i.networkStatus=xt.Ie.ready,i.loading=!1)):i.partial=!0,!1===globalThis.__DEV__||a.complete||this.options.partialRefetch||i.loading||i.data||i.error||Ut(a.missing)}return e&&this.updateLastResult(i),i},t.prototype.isDifferentFromLastResult=function(e,t){return!this.last||(this.queryManager.getDocumentInfo(this.query).hasNonreactiveDirective?!Ft(this.query,this.last.result,e,this.variables):!(0,ct.D)(this.last.result,e))||t&&!(0,ct.D)(this.last.variables,t)},t.prototype.getLast=function(e,t){var r=this.last
if(r&&r[e]&&(!t||(0,ct.D)(r.variables,this.variables)))return r[e]},t.prototype.getLastResult=function(e){return this.getLast("result",e)},t.prototype.getLastError=function(e){return this.getLast("error",e)},t.prototype.resetLastResults=function(){delete this.last,this.isTornDown=!1},t.prototype.resetQueryStoreErrors=function(){this.queryManager.resetErrors(this.queryId)},t.prototype.refetch=function(e){var t,r={pollInterval:0},o=this.options.fetchPolicy
if(r.fetchPolicy="cache-and-network"===o?o:"no-cache"===o?"no-cache":"network-only",!1!==globalThis.__DEV__&&e&&qt.call(e,"variables")){var s=G(this.query),a=s.variableDefinitions
a&&a.some((function(e){return"variables"===e.variable.name.value}))||!1!==globalThis.__DEV__&&i.kG.warn(20,e,(null===(t=s.name)||void 0===t?void 0:t.value)||s)}return e&&!(0,ct.D)(this.options.variables,e)&&(r.variables=this.options.variables=(0,n.pi)((0,n.pi)({},this.options.variables),e)),this.queryInfo.resetLastWrite(),this.reobserve(r,xt.Ie.refetch)},t.prototype.fetchMore=function(e){var t=this,r=(0,n.pi)((0,n.pi)({},e.query?e:(0,n.pi)((0,n.pi)((0,n.pi)((0,n.pi)({},this.options),{query:this.options.query}),e),{variables:(0,n.pi)((0,n.pi)({},this.options.variables),e.variables)})),{fetchPolicy:"no-cache"})
r.query=this.transformDocument(r.query)
var i=this.queryManager.generateQueryId()
this.lastQuery=e.query?this.transformDocument(this.options.query):r.query
var o=this.queryInfo,s=o.networkStatus
o.networkStatus=xt.Ie.fetchMore,r.notifyOnNetworkStatusChange&&this.observe()
var a=new Set
return this.queryManager.fetchQuery(i,r,xt.Ie.fetchMore).then((function(n){return t.queryManager.removeQuery(i),o.networkStatus===xt.Ie.fetchMore&&(o.networkStatus=s),t.queryManager.cache.batch({update:function(i){var o=e.updateQuery
o?i.updateQuery({query:t.query,variables:t.variables,returnPartialData:!0,optimistic:!1},(function(e){return o(e,{fetchMoreResult:n.data,variables:r.variables})})):i.writeQuery({query:r.query,variables:r.variables,data:n.data})},onWatchUpdated:function(e){a.add(e.query)}}),n})).finally((function(){a.has(t.query)||Qt(t)}))},t.prototype.subscribeToMore=function(e){var t=this,r=this.queryManager.startGraphQLSubscription({query:e.document,variables:e.variables,context:e.context}).subscribe({next:function(r){var n=e.updateQuery
n&&t.updateQuery((function(e,t){var i=t.variables
return n(e,{subscriptionData:r,variables:i})}))},error:function(t){e.onError?e.onError(t):!1!==globalThis.__DEV__&&i.kG.error(21,t)}})
return this.subscriptions.add(r),function(){t.subscriptions.delete(r)&&r.unsubscribe()}},t.prototype.setOptions=function(e){return this.reobserve(e)},t.prototype.silentSetOptions=function(e){var t=Nt(this.options,e||{})
Mt(this.options,t)},t.prototype.setVariables=function(e){return(0,ct.D)(this.variables,e)?this.observers.size?this.result():Promise.resolve():(this.options.variables=e,this.observers.size?this.reobserve({fetchPolicy:this.options.initialFetchPolicy,variables:e},xt.Ie.setVariables):Promise.resolve())},t.prototype.updateQuery=function(e){var t=this.queryManager,r=e(t.cache.diff({query:this.options.query,variables:this.variables,returnPartialData:!0,optimistic:!1}).result,{variables:this.variables})
r&&(t.cache.writeQuery({query:this.options.query,data:r,variables:this.variables}),t.broadcastQueries())},t.prototype.startPolling=function(e){this.options.pollInterval=e,this.updatePolling()},t.prototype.stopPolling=function(){this.options.pollInterval=0,this.updatePolling()},t.prototype.applyNextFetchPolicy=function(e,t){if(t.nextFetchPolicy){var r=t.fetchPolicy,n=void 0===r?"cache-first":r,i=t.initialFetchPolicy,o=void 0===i?n:i
"standby"===n||("function"==typeof t.nextFetchPolicy?t.fetchPolicy=t.nextFetchPolicy(n,{reason:e,options:t,observable:this,initialFetchPolicy:o}):t.fetchPolicy="variables-changed"===e?o:t.nextFetchPolicy)}return t.fetchPolicy},t.prototype.fetch=function(e,t,r){return this.queryManager.setObservableQuery(this),this.queryManager.fetchConcastWithInfo(this.queryId,e,t,r)},t.prototype.updatePolling=function(){var e=this
if(!this.queryManager.ssrMode){var t=this.pollingInfo,r=this.options.pollInterval
if(r){if(!t||t.interval!==r){(0,i.kG)(r,22),(t||(this.pollingInfo={})).interval=r
var n=function(){e.pollingInfo&&((0,xt.Oj)(e.queryInfo.networkStatus)?o():e.reobserve({fetchPolicy:"no-cache"===e.options.initialFetchPolicy?"no-cache":"network-only"},xt.Ie.poll).then(o,o))},o=function(){var t=e.pollingInfo
t&&(clearTimeout(t.timeout),t.timeout=setTimeout(n,t.interval))}
o()}}else t&&(clearTimeout(t.timeout),delete this.pollingInfo)}},t.prototype.updateLastResult=function(e,t){void 0===t&&(t=this.variables)
var r=this.getLastError()
return r&&this.last&&!(0,ct.D)(t,this.last.variables)&&(r=void 0),this.last=(0,n.pi)({result:this.queryManager.assumeImmutableResults?e:Rt(e),variables:t},r?{error:r}:null)},t.prototype.reobserveAsConcast=function(e,t){var r=this
this.isTornDown=!1
var i=t===xt.Ie.refetch||t===xt.Ie.fetchMore||t===xt.Ie.poll,o=this.options.variables,s=this.options.fetchPolicy,a=Nt(this.options,e||{}),c=i?a:Mt(this.options,a),u=this.transformDocument(c.query)
this.lastQuery=u,i||(this.updatePolling(),e&&e.variables&&!(0,ct.D)(e.variables,o)&&"standby"!==c.fetchPolicy&&c.fetchPolicy===s&&(this.applyNextFetchPolicy("variables-changed",c),void 0===t&&(t=xt.Ie.setVariables))),this.waitForOwnResult&&(this.waitForOwnResult=Gt(c.fetchPolicy))
var l=function(){r.concast===p&&(r.waitForOwnResult=!1)},f=c.variables&&(0,n.pi)({},c.variables),h=this.fetch(c,t,u),p=h.concast,d=h.fromLink,v={next:function(e){l(),r.reportResult(e,f)},error:function(e){l(),r.reportError(e,f)}}
return i||!d&&this.concast||(this.concast&&this.observer&&this.concast.removeObserver(this.observer),this.concast=p,this.observer=v),p.addObserver(v),p},t.prototype.reobserve=function(e,t){return this.reobserveAsConcast(e,t).promise},t.prototype.resubscribeAfterError=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
var r=this.last
this.resetLastResults()
var n=this.subscribe.apply(this,e)
return this.last=r,n},t.prototype.observe=function(){this.reportResult(this.getCurrentResult(!1),this.variables)},t.prototype.reportResult=function(e,t){var r=this.getLastError(),n=this.isDifferentFromLastResult(e,t);(r||!e.partial||this.options.returnPartialData)&&this.updateLastResult(e,t),(r||n)&&Tt(this.observers,"next",e)},t.prototype.reportError=function(e,t){var r=(0,n.pi)((0,n.pi)({},this.getLastResult()),{error:e,errors:e.graphQLErrors,networkStatus:xt.Ie.error,loading:!1})
this.updateLastResult(r,t),Tt(this.observers,"error",this.last.error=e)},t.prototype.hasObservers=function(){return this.observers.size>0},t.prototype.tearDownQuery=function(){this.isTornDown||(this.concast&&this.observer&&(this.concast.removeObserver(this.observer),delete this.concast,delete this.observer),this.stopPolling(),this.subscriptions.forEach((function(e){return e.unsubscribe()})),this.subscriptions.clear(),this.queryManager.stopQuery(this.queryId),this.observers.clear(),this.isTornDown=!0)},t.prototype.transformDocument=function(e){return this.queryManager.transform(e)},t}(_)
function Qt(e){var t=e.options,r=t.fetchPolicy,n=t.nextFetchPolicy
return"cache-and-network"===r||"network-only"===r?e.reobserve({fetchPolicy:"cache-first",nextFetchPolicy:function(e,t){return this.nextFetchPolicy=n,"function"==typeof this.nextFetchPolicy?this.nextFetchPolicy(e,t):r}}):e.reobserve()}function Bt(e){!1!==globalThis.__DEV__&&i.kG.error(23,e.message,e.stack)}function Ut(e){!1!==globalThis.__DEV__&&e&&!1!==globalThis.__DEV__&&i.kG.debug(24,e)}function Gt(e){return"network-only"===e||"no-cache"===e||"standby"===e}function zt(e){return e.kind===re.h.FIELD||e.kind===re.h.FRAGMENT_SPREAD||e.kind===re.h.INLINE_FRAGMENT}St(Vt)
const Kt=()=>Object.create(null),{forEach:Wt,slice:Yt}=Array.prototype,{hasOwnProperty:Jt}=Object.prototype
class $t{constructor(e=!0,t=Kt){this.weakness=e,this.makeData=t}lookup(...e){return this.lookupArray(e)}lookupArray(e){let t=this
return Wt.call(e,(e=>t=t.getChildTrie(e))),Jt.call(t,"data")?t.data:t.data=this.makeData(Yt.call(e))}peek(...e){return this.peekArray(e)}peekArray(e){let t=this
for(let r=0,n=e.length;t&&r<n;++r){const n=this.weakness&&Ht(e[r])?t.weak:t.strong
t=n&&n.get(e[r])}return t&&t.data}getChildTrie(e){const t=this.weakness&&Ht(e)?this.weak||(this.weak=new WeakMap):this.strong||(this.strong=new Map)
let r=t.get(e)
return r||t.set(e,r=new $t(this.weakness,this.makeData)),r}}function Ht(e){switch(typeof e){case"object":if(null===e)break
case"function":return!0}return!1}function Xt(){}class Zt{constructor(e=1/0,t=Xt){this.max=e,this.dispose=t,this.map=new Map,this.newest=null,this.oldest=null}has(e){return this.map.has(e)}get(e){const t=this.getNode(e)
return t&&t.value}get size(){return this.map.size}getNode(e){const t=this.map.get(e)
if(t&&t!==this.newest){const{older:e,newer:r}=t
r&&(r.older=e),e&&(e.newer=r),t.older=this.newest,t.older.newer=t,t.newer=null,this.newest=t,t===this.oldest&&(this.oldest=r)}return t}set(e,t){let r=this.getNode(e)
return r?r.value=t:(r={key:e,value:t,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.map.set(e,r),r.value)}clean(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)}delete(e){const t=this.map.get(e)
return!!t&&(t===this.newest&&(this.newest=t.older),t===this.oldest&&(this.oldest=t.newer),t.newer&&(t.newer.older=t.older),t.older&&(t.older.newer=t.newer),this.map.delete(e),this.dispose(t.value,e),!0)}}let er=null
const tr={}
let rr=1
function nr(e){try{return e()}catch(e){}}const ir="@wry/context:Slot",or=nr((()=>globalThis))||nr((()=>global))||Object.create(null),sr=or[ir]||Array[ir]||function(e){try{Object.defineProperty(or,ir,{value:e,enumerable:!1,writable:!1,configurable:!0})}finally{return e}}(class{constructor(){this.id=["slot",rr++,Date.now(),Math.random().toString(36).slice(2)].join(":")}hasValue(){for(let e=er;e;e=e.parent)if(this.id in e.slots){const t=e.slots[this.id]
if(t===tr)break
return e!==er&&(er.slots[this.id]=t),!0}return er&&(er.slots[this.id]=tr),!1}getValue(){if(this.hasValue())return er.slots[this.id]}withValue(e,t,r,n){const i={__proto__:null,[this.id]:e},o=er
er={parent:o,slots:i}
try{return t.apply(n,r)}finally{er=o}}static bind(e){const t=er
return function(){const r=er
try{return er=t,e.apply(this,arguments)}finally{er=r}}}static noContext(e,t,r){if(!er)return e.apply(r,t)
{const n=er
try{return er=null,e.apply(r,t)}finally{er=n}}}}),{bind:ar,noContext:cr}=sr,ur=new sr,{hasOwnProperty:lr}=Object.prototype,fr=Array.from||function(e){const t=[]
return e.forEach((e=>t.push(e))),t}
function hr(e){const{unsubscribe:t}=e
"function"==typeof t&&(e.unsubscribe=void 0,t())}const pr=[],dr=100
function vr(e,t){if(!e)throw new Error(t||"assertion failure")}function yr(e,t){const r=e.length
return r>0&&r===t.length&&e[r-1]===t[r-1]}function mr(e){switch(e.length){case 0:throw new Error("unknown value")
case 1:return e[0]
case 2:throw e[1]}}function br(e){return e.slice(0)}class gr{constructor(e){this.fn=e,this.parents=new Set,this.childValues=new Map,this.dirtyChildren=null,this.dirty=!0,this.recomputing=!1,this.value=[],this.deps=null,++gr.count}peek(){if(1===this.value.length&&!wr(this))return Er(this),this.value[0]}recompute(e){return vr(!this.recomputing,"already recomputing"),Er(this),wr(this)?function(e,t){return xr(e),ur.withValue(e,Or,[e,t]),function(e,t){if("function"==typeof e.subscribe)try{hr(e),e.unsubscribe=e.subscribe.apply(null,t)}catch(t){return e.setDirty(),!1}return!0}(e,t)&&function(e){e.dirty=!1,wr(e)||_r(e)}(e),mr(e.value)}(this,e):mr(this.value)}setDirty(){this.dirty||(this.dirty=!0,kr(this),hr(this))}dispose(){this.setDirty(),xr(this),Tr(this,((e,t)=>{e.setDirty(),Nr(e,this)}))}forget(){this.dispose()}dependOn(e){e.add(this),this.deps||(this.deps=pr.pop()||new Set),this.deps.add(e)}forgetDeps(){this.deps&&(fr(this.deps).forEach((e=>e.delete(this))),this.deps.clear(),pr.push(this.deps),this.deps=null)}}function Er(e){const t=ur.getValue()
if(t)return e.parents.add(t),t.childValues.has(e)||t.childValues.set(e,[]),wr(e)?Sr(t,e):Dr(t,e),t}function Or(e,t){e.recomputing=!0
const{normalizeResult:r}=e
let n
r&&1===e.value.length&&(n=br(e.value)),e.value.length=0
try{if(e.value[0]=e.fn.apply(null,t),r&&n&&!yr(n,e.value))try{e.value[0]=r(e.value[0],n[0])}catch(e){}}catch(t){e.value[1]=t}e.recomputing=!1}function wr(e){return e.dirty||!(!e.dirtyChildren||!e.dirtyChildren.size)}function kr(e){Tr(e,Sr)}function _r(e){Tr(e,Dr)}function Tr(e,t){const r=e.parents.size
if(r){const n=fr(e.parents)
for(let i=0;i<r;++i)t(n[i],e)}}function Sr(e,t){vr(e.childValues.has(t)),vr(wr(t))
const r=!wr(e)
if(e.dirtyChildren){if(e.dirtyChildren.has(t))return}else e.dirtyChildren=pr.pop()||new Set
e.dirtyChildren.add(t),r&&kr(e)}function Dr(e,t){vr(e.childValues.has(t)),vr(!wr(t))
const r=e.childValues.get(t)
0===r.length?e.childValues.set(t,br(t.value)):yr(r,t.value)||e.setDirty(),Ir(e,t),wr(e)||_r(e)}function Ir(e,t){const r=e.dirtyChildren
r&&(r.delete(t),0===r.size&&(pr.length<dr&&pr.push(r),e.dirtyChildren=null))}function xr(e){e.childValues.size>0&&e.childValues.forEach(((t,r)=>{Nr(e,r)})),e.forgetDeps(),vr(null===e.dirtyChildren)}function Nr(e,t){t.parents.delete(e),e.childValues.delete(t),Ir(e,t)}gr.count=0
const Ar={setDirty:!0,dispose:!0,forget:!0}
function Rr(e){const t=new Map,r=e&&e.subscribe
function n(e){const n=ur.getValue()
if(n){let i=t.get(e)
i||t.set(e,i=new Set),n.dependOn(i),"function"==typeof r&&(hr(i),i.unsubscribe=r(e))}}return n.dirty=function(e,r){const n=t.get(e)
if(n){const i=r&&lr.call(Ar,r)?r:"setDirty"
fr(n).forEach((e=>e[i]())),t.delete(e),hr(n)}},n}let Cr
function Fr(...e){return(Cr||(Cr=new $t("function"==typeof WeakMap))).lookupArray(e)}const Pr=new Set
function jr(e,{max:t=Math.pow(2,16),keyArgs:r,makeCacheKey:n=Fr,normalizeResult:i,subscribe:o,cache:s=Zt}=Object.create(null)){const a="function"==typeof s?new s(t,(e=>e.dispose())):s,c=function(){const t=n.apply(null,r?r.apply(null,arguments):arguments)
if(void 0===t)return e.apply(null,arguments)
let s=a.get(t)
s||(a.set(t,s=new gr(e)),s.normalizeResult=i,s.subscribe=o,s.forget=()=>a.delete(t))
const c=s.recompute(Array.prototype.slice.call(arguments))
return a.set(t,s),Pr.add(a),ur.hasValue()||(Pr.forEach((e=>e.clean())),Pr.clear()),c}
function u(e){const t=e&&a.get(e)
t&&t.setDirty()}function l(e){const t=e&&a.get(e)
if(t)return t.peek()}function f(e){return!!e&&a.delete(e)}return Object.defineProperty(c,"size",{get:()=>a.size,configurable:!1,enumerable:!1}),Object.freeze(c.options={max:t,keyArgs:r,makeCacheKey:n,normalizeResult:i,subscribe:o,cache:a}),c.dirtyKey=u,c.dirty=function(){u(n.apply(null,arguments))},c.peekKey=l,c.peek=function(){return l(n.apply(null,arguments))},c.forgetKey=f,c.forget=function(){return f(n.apply(null,arguments))},c.makeCacheKey=n,c.getKey=r?function(){return n.apply(null,r.apply(null,arguments))}:n,Object.freeze(c)}var Lr=new sr,Mr=new WeakMap
function qr(e){var t=Mr.get(e)
return t||Mr.set(e,t={vars:new Set,dep:Rr()}),t}function Vr(e){qr(e).vars.forEach((function(t){return t.forgetCache(e)}))}function Qr(e){var t=new Set,r=new Set,n=function(o){if(arguments.length>0){if(e!==o){e=o,t.forEach((function(e){qr(e).dep.dirty(n),function(e){e.broadcastWatches&&e.broadcastWatches()}(e)}))
var s=Array.from(r)
r.clear(),s.forEach((function(t){return t(e)}))}}else{var a=Lr.getValue()
a&&(i(a),qr(a).dep(n))}return e}
n.onNextChange=function(e){return r.add(e),function(){r.delete(e)}}
var i=n.attachCache=function(e){return t.add(e),qr(e).vars.add(n),n}
return n.forgetCache=function(e){return t.delete(e)},n}var Br=function(){function e(e){var t=e.cache,r=e.client,n=e.resolvers,i=e.fragmentMatcher
this.selectionsToResolveCache=new WeakMap,this.cache=t,r&&(this.client=r),n&&this.addResolvers(n),i&&this.setFragmentMatcher(i)}return e.prototype.addResolvers=function(e){var t=this
this.resolvers=this.resolvers||{},Array.isArray(e)?e.forEach((function(e){t.resolvers=Oe(t.resolvers,e)})):this.resolvers=Oe(this.resolvers,e)},e.prototype.setResolvers=function(e){this.resolvers={},this.addResolvers(e)},e.prototype.getResolvers=function(){return this.resolvers||{}},e.prototype.runResolvers=function(e){var t=e.document,r=e.remoteResult,i=e.context,o=e.variables,s=e.onlyRunForcedResolvers,a=void 0!==s&&s
return(0,n.mG)(this,void 0,void 0,(function(){return(0,n.Jh)(this,(function(e){return t?[2,this.resolveDocument(t,r.data,i,o,this.fragmentMatcher,a).then((function(e){return(0,n.pi)((0,n.pi)({},r),{data:e.result})}))]:[2,r]}))}))},e.prototype.setFragmentMatcher=function(e){this.fragmentMatcher=e},e.prototype.getFragmentMatcher=function(){return this.fragmentMatcher},e.prototype.clientQuery=function(e){return ae(["client"],e)&&this.resolvers?e:null},e.prototype.serverQuery=function(e){return it(e)},e.prototype.prepareContext=function(e){var t=this.cache
return(0,n.pi)((0,n.pi)({},e),{cache:t,getCacheKey:function(e){return t.identify(e)}})},e.prototype.addExportedVariables=function(e,t,r){return void 0===t&&(t={}),void 0===r&&(r={}),(0,n.mG)(this,void 0,void 0,(function(){return(0,n.Jh)(this,(function(i){return e?[2,this.resolveDocument(e,this.buildRootValueFromCache(e,t)||{},this.prepareContext(r),t).then((function(e){return(0,n.pi)((0,n.pi)({},t),e.exportedVariables)}))]:[2,(0,n.pi)({},t)]}))}))},e.prototype.shouldForceResolvers=function(e){var t=!1
return ie(e,{Directive:{enter:function(e){if("client"===e.name.value&&e.arguments&&(t=e.arguments.some((function(e){return"always"===e.name.value&&"BooleanValue"===e.value.kind&&!0===e.value.value}))))return ne}}}),t},e.prototype.buildRootValueFromCache=function(e,t){return this.cache.diff({query:nt(e),variables:t,returnPartialData:!0,optimistic:!1}).result},e.prototype.resolveDocument=function(e,t,r,i,o,s){return void 0===r&&(r={}),void 0===i&&(i={}),void 0===o&&(o=function(){return!0}),void 0===s&&(s=!1),(0,n.mG)(this,void 0,void 0,(function(){var a,c,u,l,f,h,p,d,v,y
return(0,n.Jh)(this,(function(m){return a=z(e),c=U(e),u=D(c),l=this.collectSelectionsToResolve(a,u),f=a.operation,h=f?f.charAt(0).toUpperCase()+f.slice(1):"Query",d=(p=this).cache,v=p.client,y={fragmentMap:u,context:(0,n.pi)((0,n.pi)({},r),{cache:d,client:v}),variables:i,fragmentMatcher:o,defaultOperationType:h,exportedVariables:{},selectionsToResolve:l,onlyRunForcedResolvers:s},[2,this.resolveSelectionSet(a.selectionSet,!1,t,y).then((function(e){return{result:e,exportedVariables:y.exportedVariables}}))]}))}))},e.prototype.resolveSelectionSet=function(e,t,r,o){return(0,n.mG)(this,void 0,void 0,(function(){var s,a,c,u,l,f=this
return(0,n.Jh)(this,(function(h){return s=o.fragmentMap,a=o.context,c=o.variables,u=[r],l=function(e){return(0,n.mG)(f,void 0,void 0,(function(){var l,f
return(0,n.Jh)(this,(function(n){return(t||o.selectionsToResolve.has(e))&&se(e,c)?q(e)?[2,this.resolveField(e,t,r,o).then((function(t){var r
void 0!==t&&u.push(((r={})[L(e)]=t,r))}))]:(function(e){return"InlineFragment"===e.kind}(e)?l=e:(l=s[e.name.value],(0,i.kG)(l,18,e.name.value)),l&&l.typeCondition&&(f=l.typeCondition.name.value,o.fragmentMatcher(r,f,a))?[2,this.resolveSelectionSet(l.selectionSet,t,r,o).then((function(e){u.push(e)}))]:[2]):[2]}))}))},[2,Promise.all(e.selections.map(l)).then((function(){return we(u)}))]}))}))},e.prototype.resolveField=function(e,t,r,i){return(0,n.mG)(this,void 0,void 0,(function(){var o,s,a,c,u,l,f,h,p,d=this
return(0,n.Jh)(this,(function(n){return r?(o=i.variables,s=e.name.value,a=L(e),c=s!==a,u=r[a]||r[s],l=Promise.resolve(u),i.onlyRunForcedResolvers&&!this.shouldForceResolvers(e)||(f=r.__typename||i.defaultOperationType,(h=this.resolvers&&this.resolvers[f])&&(p=h[c?s:a])&&(l=Promise.resolve(Lr.withValue(this.cache,p,[r,j(e,o),i.context,{field:e,fragmentMap:i.fragmentMap}])))),[2,l.then((function(r){var n,o
if(void 0===r&&(r=u),e.directives&&e.directives.forEach((function(e){"export"===e.name.value&&e.arguments&&e.arguments.forEach((function(e){"as"===e.name.value&&"StringValue"===e.value.kind&&(i.exportedVariables[e.value.value]=r)}))})),!e.selectionSet)return r
if(null==r)return r
var s=null!==(o=null===(n=e.directives)||void 0===n?void 0:n.some((function(e){return"client"===e.name.value})))&&void 0!==o&&o
return Array.isArray(r)?d.resolveSubSelectedArray(e,t||s,r,i):e.selectionSet?d.resolveSelectionSet(e.selectionSet,t||s,r,i):void 0}))]):[2,null]}))}))},e.prototype.resolveSubSelectedArray=function(e,t,r,n){var i=this
return Promise.all(r.map((function(r){return null===r?null:Array.isArray(r)?i.resolveSubSelectedArray(e,t,r,n):e.selectionSet?i.resolveSelectionSet(e.selectionSet,t,r,n):void 0})))},e.prototype.collectSelectionsToResolve=function(e,t){var r=function(e){return!Array.isArray(e)},n=this.selectionsToResolveCache
return function e(o){if(!n.has(o)){var s=new Set
n.set(o,s),ie(o,{Directive:function(e,t,n,i,o){"client"===e.name.value&&o.forEach((function(e){r(e)&&zt(e)&&s.add(e)}))},FragmentSpread:function(n,o,a,c,u){var l=t[n.name.value];(0,i.kG)(l,19,n.name.value)
var f=e(l)
f.size>0&&(u.forEach((function(e){r(e)&&zt(e)&&s.add(e)})),s.add(n),f.forEach((function(e){s.add(e)})))}})}return n.get(o)}(e)},e}(),Ur=new(fe?WeakMap:Map)
function Gr(e,t){var r=e[t]
"function"==typeof r&&(e[t]=function(){return Ur.set(e,(Ur.get(e)+1)%1e15),r.apply(this,arguments)})}function zr(e){e.notifyTimeout&&(clearTimeout(e.notifyTimeout),e.notifyTimeout=void 0)}var Kr=function(){function e(e,t){void 0===t&&(t=e.generateQueryId()),this.queryId=t,this.listeners=new Set,this.document=null,this.lastRequestId=1,this.stopped=!1,this.dirty=!1,this.observableQuery=null
var r=this.cache=e.cache
Ur.has(r)||(Ur.set(r,0),Gr(r,"evict"),Gr(r,"modify"),Gr(r,"reset"))}return e.prototype.init=function(e){var t=e.networkStatus||xt.Ie.loading
return this.variables&&this.networkStatus!==xt.Ie.loading&&!(0,ct.D)(this.variables,e.variables)&&(t=xt.Ie.setVariables),(0,ct.D)(e.variables,this.variables)||(this.lastDiff=void 0),Object.assign(this,{document:e.document,variables:e.variables,networkError:null,graphQLErrors:this.graphQLErrors||[],networkStatus:t}),e.observableQuery&&this.setObservableQuery(e.observableQuery),e.lastRequestId&&(this.lastRequestId=e.lastRequestId),this},e.prototype.reset=function(){zr(this),this.dirty=!1},e.prototype.getDiff=function(){var e=this.getDiffOptions()
if(this.lastDiff&&(0,ct.D)(e,this.lastDiff.options))return this.lastDiff.diff
this.updateWatch(this.variables)
var t=this.observableQuery
if(t&&"no-cache"===t.options.fetchPolicy)return{complete:!1}
var r=this.cache.diff(e)
return this.updateLastDiff(r,e),r},e.prototype.updateLastDiff=function(e,t){this.lastDiff=e?{diff:e,options:t||this.getDiffOptions()}:void 0},e.prototype.getDiffOptions=function(e){var t
return void 0===e&&(e=this.variables),{query:this.document,variables:e,returnPartialData:!0,optimistic:!0,canonizeResults:null===(t=this.observableQuery)||void 0===t?void 0:t.options.canonizeResults}},e.prototype.setDiff=function(e){var t=this,r=this.lastDiff&&this.lastDiff.diff
this.updateLastDiff(e),this.dirty||(0,ct.D)(r&&r.result,e&&e.result)||(this.dirty=!0,this.notifyTimeout||(this.notifyTimeout=setTimeout((function(){return t.notify()}),0)))},e.prototype.setObservableQuery=function(e){var t=this
e!==this.observableQuery&&(this.oqListener&&this.listeners.delete(this.oqListener),this.observableQuery=e,e?(e.queryInfo=this,this.listeners.add(this.oqListener=function(){t.getDiff().fromOptimisticTransaction?e.observe():Qt(e)})):delete this.oqListener)},e.prototype.notify=function(){var e=this
zr(this),this.shouldNotify()&&this.listeners.forEach((function(t){return t(e)})),this.dirty=!1},e.prototype.shouldNotify=function(){if(!this.dirty||!this.listeners.size)return!1
if((0,xt.Oj)(this.networkStatus)&&this.observableQuery){var e=this.observableQuery.options.fetchPolicy
if("cache-only"!==e&&"cache-and-network"!==e)return!1}return!0},e.prototype.stop=function(){if(!this.stopped){this.stopped=!0,this.reset(),this.cancel(),this.cancel=e.prototype.cancel
var t=this.observableQuery
t&&t.stopPolling()}},e.prototype.cancel=function(){},e.prototype.updateWatch=function(e){var t=this
void 0===e&&(e=this.variables)
var r=this.observableQuery
if(!r||"no-cache"!==r.options.fetchPolicy){var i=(0,n.pi)((0,n.pi)({},this.getDiffOptions(e)),{watcher:this,callback:function(e){return t.setDiff(e)}})
this.lastWatch&&(0,ct.D)(i,this.lastWatch)||(this.cancel(),this.cancel=this.cache.watch(this.lastWatch=i))}},e.prototype.resetLastWrite=function(){this.lastWrite=void 0},e.prototype.shouldWrite=function(e,t){var r=this.lastWrite
return!(r&&r.dmCount===Ur.get(this.cache)&&(0,ct.D)(t,r.variables)&&(0,ct.D)(e.data,r.result.data))},e.prototype.markResult=function(e,t,r,n){var i=this,o=new _e,s=ge(e.errors)?e.errors.slice(0):[]
if(this.reset(),"incremental"in e&&ge(e.incremental)){var a=De(this.getDiff().result,e)
e.data=a}else if("hasNext"in e&&e.hasNext){var c=this.getDiff()
e.data=o.merge(c.result,e.data)}this.graphQLErrors=s,"no-cache"===r.fetchPolicy?this.updateLastDiff({result:e.data,complete:!0},this.getDiffOptions(r.variables)):0!==n&&(Wr(e,r.errorPolicy)?this.cache.performTransaction((function(o){if(i.shouldWrite(e,r.variables))o.writeQuery({query:t,data:e.data,variables:r.variables,overwrite:1===n}),i.lastWrite={result:e,variables:r.variables,dmCount:Ur.get(i.cache)}
else if(i.lastDiff&&i.lastDiff.diff.complete)return void(e.data=i.lastDiff.diff.result)
var s=i.getDiffOptions(r.variables),a=o.diff(s)
!i.stopped&&(0,ct.D)(i.variables,r.variables)&&i.updateWatch(r.variables),i.updateLastDiff(a,s),a.complete&&(e.data=a.result)})):this.lastWrite=void 0)},e.prototype.markReady=function(){return this.networkError=null,this.networkStatus=xt.Ie.ready},e.prototype.markError=function(e){return this.networkStatus=xt.Ie.error,this.lastWrite=void 0,this.reset(),e.graphQLErrors&&(this.graphQLErrors=e.graphQLErrors),e.networkError&&(this.networkError=e.networkError),e},e}()
function Wr(e,t){void 0===t&&(t="none")
var r="ignore"===t||"all"===t,n=!wt(e)
return!n&&r&&e.data&&(n=!0),n}var Yr=Object.prototype.hasOwnProperty,Jr=function(){function e(e){var t=e.cache,r=e.link,n=e.defaultOptions,i=e.documentTransform,o=e.queryDeduplication,s=void 0!==o&&o,a=e.onBroadcast,c=e.ssrMode,u=void 0!==c&&c,l=e.clientAwareness,f=void 0===l?{}:l,h=e.localState,p=e.assumeImmutableResults,d=void 0===p?!!t.assumeImmutableResults:p,v=this
this.clientAwareness={},this.queries=new Map,this.fetchCancelFns=new Map,this.transformCache=new(fe?WeakMap:Map),this.queryIdCounter=1,this.requestIdCounter=1,this.mutationIdCounter=1,this.inFlightLinkObservables=new Map
var y=new Et((function(e){return v.cache.transformDocument(e)}),{cache:!1})
this.cache=t,this.link=r,this.defaultOptions=n||Object.create(null),this.queryDeduplication=s,this.clientAwareness=f,this.localState=h||new Br({cache:t}),this.ssrMode=u,this.assumeImmutableResults=d,this.documentTransform=i?y.concat(i).concat(y):y,(this.onBroadcast=a)&&(this.mutationStore=Object.create(null))}return e.prototype.stop=function(){var e=this
this.queries.forEach((function(t,r){e.stopQueryNoBroadcast(r)})),this.cancelPendingFetches((0,i._K)(25))},e.prototype.cancelPendingFetches=function(e){this.fetchCancelFns.forEach((function(t){return t(e)})),this.fetchCancelFns.clear()},e.prototype.mutate=function(e){var t,r,o=e.mutation,s=e.variables,a=e.optimisticResponse,c=e.updateQueries,u=e.refetchQueries,l=void 0===u?[]:u,f=e.awaitRefetchQueries,h=void 0!==f&&f,p=e.update,d=e.onQueryUpdated,v=e.fetchPolicy,y=void 0===v?(null===(t=this.defaultOptions.mutate)||void 0===t?void 0:t.fetchPolicy)||"network-only":v,m=e.errorPolicy,b=void 0===m?(null===(r=this.defaultOptions.mutate)||void 0===r?void 0:r.errorPolicy)||"none":m,g=e.keepRootFields,E=e.context
return(0,n.mG)(this,void 0,void 0,(function(){var e,t,r,u
return(0,n.Jh)(this,(function(f){switch(f.label){case 0:return(0,i.kG)(o,26),(0,i.kG)("network-only"===y||"no-cache"===y,27),e=this.generateMutationId(),o=this.cache.transformForLink(this.transform(o)),t=this.getDocumentInfo(o).hasClientExports,s=this.getVariables(o,s),t?[4,this.localState.addExportedVariables(o,s,E)]:[3,2]
case 1:s=f.sent(),f.label=2
case 2:return r=this.mutationStore&&(this.mutationStore[e]={mutation:o,variables:s,loading:!0,error:null}),a&&this.markMutationOptimistic(a,{mutationId:e,document:o,variables:s,fetchPolicy:y,errorPolicy:b,context:E,updateQueries:c,update:p,keepRootFields:g}),this.broadcastQueries(),u=this,[2,new Promise((function(t,i){return Ot(u.getObservableFromLink(o,(0,n.pi)((0,n.pi)({},E),{optimisticResponse:a}),s,!1),(function(t){if(wt(t)&&"none"===b)throw new me.cA({graphQLErrors:kt(t)})
r&&(r.loading=!1,r.error=null)
var i=(0,n.pi)({},t)
return"function"==typeof l&&(l=l(i)),"ignore"===b&&wt(i)&&delete i.errors,u.markMutationResult({mutationId:e,result:i,document:o,variables:s,fetchPolicy:y,errorPolicy:b,context:E,update:p,updateQueries:c,awaitRefetchQueries:h,refetchQueries:l,removeOptimistic:a?e:void 0,onQueryUpdated:d,keepRootFields:g})})).subscribe({next:function(e){u.broadcastQueries(),"hasNext"in e&&!1!==e.hasNext||t(e)},error:function(t){r&&(r.loading=!1,r.error=t),a&&u.cache.removeOptimistic(e),u.broadcastQueries(),i(t instanceof me.cA?t:new me.cA({networkError:t}))}})}))]}}))}))},e.prototype.markMutationResult=function(e,t){var r=this
void 0===t&&(t=this.cache)
var i=e.result,o=[],s="no-cache"===e.fetchPolicy
if(!s&&Wr(i,e.errorPolicy)){if(Te(i)||o.push({result:i.data,dataId:"ROOT_MUTATION",query:e.document,variables:e.variables}),Te(i)&&ge(i.incremental)){var a=t.diff({id:"ROOT_MUTATION",query:this.getDocumentInfo(e.document).asQuery,variables:e.variables,optimistic:!1,returnPartialData:!0}),c=void 0
a.result&&(c=De(a.result,i)),void 0!==c&&(i.data=c,o.push({result:c,dataId:"ROOT_MUTATION",query:e.document,variables:e.variables}))}var u=e.updateQueries
u&&this.queries.forEach((function(e,n){var s=e.observableQuery,a=s&&s.queryName
if(a&&Yr.call(u,a)){var c=u[a],l=r.queries.get(n),f=l.document,h=l.variables,p=t.diff({query:f,variables:h,returnPartialData:!0,optimistic:!1}),d=p.result
if(p.complete&&d){var v=c(d,{mutationResult:i,queryName:f&&B(f)||void 0,queryVariables:h})
v&&o.push({result:v,dataId:"ROOT_QUERY",query:f,variables:h})}}}))}if(o.length>0||e.refetchQueries||e.update||e.onQueryUpdated||e.removeOptimistic){var l=[]
if(this.refetchQueries({updateCache:function(t){s||o.forEach((function(e){return t.write(e)}))
var a,c=e.update,u=!(Te(a=i)||function(e){return"hasNext"in e&&"data"in e}(a))||Te(i)&&!i.hasNext
if(c){if(!s){var l=t.diff({id:"ROOT_MUTATION",query:r.getDocumentInfo(e.document).asQuery,variables:e.variables,optimistic:!1,returnPartialData:!0})
l.complete&&("incremental"in(i=(0,n.pi)((0,n.pi)({},i),{data:l.result}))&&delete i.incremental,"hasNext"in i&&delete i.hasNext)}u&&c(t,i,{context:e.context,variables:e.variables})}s||e.keepRootFields||!u||t.modify({id:"ROOT_MUTATION",fields:function(e,t){var r=t.fieldName,n=t.DELETE
return"__typename"===r?e:n}})},include:e.refetchQueries,optimistic:!1,removeOptimistic:e.removeOptimistic,onQueryUpdated:e.onQueryUpdated||null}).forEach((function(e){return l.push(e)})),e.awaitRefetchQueries||e.onQueryUpdated)return Promise.all(l).then((function(){return i}))}return Promise.resolve(i)},e.prototype.markMutationOptimistic=function(e,t){var r=this,o="function"==typeof e?e(t.variables):e
return this.cache.recordOptimisticTransaction((function(e){try{r.markMutationResult((0,n.pi)((0,n.pi)({},t),{result:{data:o}}),e)}catch(e){!1!==globalThis.__DEV__&&i.kG.error(e)}}),t.mutationId)},e.prototype.fetchQuery=function(e,t,r){return this.fetchConcastWithInfo(e,t,r).concast.promise},e.prototype.getQueryStore=function(){var e=Object.create(null)
return this.queries.forEach((function(t,r){e[r]={variables:t.variables,networkStatus:t.networkStatus,networkError:t.networkError,graphQLErrors:t.graphQLErrors}})),e},e.prototype.resetErrors=function(e){var t=this.queries.get(e)
t&&(t.networkError=void 0,t.graphQLErrors=[])},e.prototype.transform=function(e){return this.documentTransform.transformDocument(e)},e.prototype.getDocumentInfo=function(e){var t=this.transformCache
if(!t.has(e)){var r={hasClientExports:ce(e),hasForcedResolvers:this.localState.shouldForceResolvers(e),hasNonreactiveDirective:ae(["nonreactive"],e),clientQuery:this.localState.clientQuery(e),serverQuery:tt([{name:"client",remove:!0},{name:"connection"},{name:"nonreactive"}],e),defaultVars:K(Q(e)),asQuery:(0,n.pi)((0,n.pi)({},e),{definitions:e.definitions.map((function(e){return"OperationDefinition"===e.kind&&"query"!==e.operation?(0,n.pi)((0,n.pi)({},e),{operation:"query"}):e}))})}
t.set(e,r)}return t.get(e)},e.prototype.getVariables=function(e,t){return(0,n.pi)((0,n.pi)({},this.getDocumentInfo(e).defaultVars),t)},e.prototype.watchQuery=function(e){var t=this.transform(e.query)
void 0===(e=(0,n.pi)((0,n.pi)({},e),{variables:this.getVariables(t,e.variables)})).notifyOnNetworkStatusChange&&(e.notifyOnNetworkStatusChange=!1)
var r=new Kr(this),i=new Vt({queryManager:this,queryInfo:r,options:e})
return i.lastQuery=t,this.queries.set(i.queryId,r),r.init({document:t,observableQuery:i,variables:i.variables}),i},e.prototype.query=function(e,t){var r=this
return void 0===t&&(t=this.generateQueryId()),(0,i.kG)(e.query,28),(0,i.kG)("Document"===e.query.kind,29),(0,i.kG)(!e.returnPartialData,30),(0,i.kG)(!e.pollInterval,31),this.fetchQuery(t,(0,n.pi)((0,n.pi)({},e),{query:this.transform(e.query)})).finally((function(){return r.stopQuery(t)}))},e.prototype.generateQueryId=function(){return String(this.queryIdCounter++)},e.prototype.generateRequestId=function(){return this.requestIdCounter++},e.prototype.generateMutationId=function(){return String(this.mutationIdCounter++)},e.prototype.stopQueryInStore=function(e){this.stopQueryInStoreNoBroadcast(e),this.broadcastQueries()},e.prototype.stopQueryInStoreNoBroadcast=function(e){var t=this.queries.get(e)
t&&t.stop()},e.prototype.clearStore=function(e){return void 0===e&&(e={discardWatches:!0}),this.cancelPendingFetches((0,i._K)(32)),this.queries.forEach((function(e){e.observableQuery?e.networkStatus=xt.Ie.loading:e.stop()})),this.mutationStore&&(this.mutationStore=Object.create(null)),this.cache.reset(e)},e.prototype.getObservableQueries=function(e){var t=this
void 0===e&&(e="active")
var r=new Map,o=new Map,s=new Set
return Array.isArray(e)&&e.forEach((function(e){var r
"string"==typeof e?o.set(e,!1):(r=e,(0,T.s)(r)&&"Document"===r.kind&&Array.isArray(r.definitions)?o.set(t.transform(e),!1):(0,T.s)(e)&&e.query&&s.add(e))})),this.queries.forEach((function(t,n){var i=t.observableQuery,s=t.document
if(i){if("all"===e)return void r.set(n,i)
var a=i.queryName
if("standby"===i.options.fetchPolicy||"active"===e&&!i.hasObservers())return;("active"===e||a&&o.has(a)||s&&o.has(s))&&(r.set(n,i),a&&o.set(a,!0),s&&o.set(s,!0))}})),s.size&&s.forEach((function(e){var o=(0,_t.X)("legacyOneTimeQuery"),s=t.getQuery(o).init({document:e.query,variables:e.variables}),a=new Vt({queryManager:t,queryInfo:s,options:(0,n.pi)((0,n.pi)({},e),{fetchPolicy:"network-only"})});(0,i.kG)(a.queryId===o),s.setObservableQuery(a),r.set(o,a)})),!1!==globalThis.__DEV__&&o.size&&o.forEach((function(e,t){e||!1!==globalThis.__DEV__&&i.kG.warn("string"==typeof t?33:34,t)})),r},e.prototype.reFetchObservableQueries=function(e){var t=this
void 0===e&&(e=!1)
var r=[]
return this.getObservableQueries(e?"all":"active").forEach((function(n,i){var o=n.options.fetchPolicy
n.resetLastResults(),(e||"standby"!==o&&"cache-only"!==o)&&r.push(n.refetch()),t.getQuery(i).setDiff(null)})),this.broadcastQueries(),Promise.all(r)},e.prototype.setObservableQuery=function(e){this.getQuery(e.queryId).setObservableQuery(e)},e.prototype.startGraphQLSubscription=function(e){var t=this,r=e.query,n=e.fetchPolicy,i=e.errorPolicy,o=void 0===i?"none":i,s=e.variables,a=e.context,c=void 0===a?{}:a
r=this.transform(r),s=this.getVariables(r,s)
var u=function(e){return t.getObservableFromLink(r,c,e).map((function(i){"no-cache"!==n&&(Wr(i,o)&&t.cache.write({query:r,result:i.data,dataId:"ROOT_SUBSCRIPTION",variables:e}),t.broadcastQueries())
var s=wt(i),a=(0,me.ls)(i)
if(s||a){var c={}
if(s&&(c.graphQLErrors=i.errors),a&&(c.protocolErrors=i.extensions[me.YG]),"none"===o||a)throw new me.cA(c)}return"ignore"===o&&delete i.errors,i}))}
if(this.getDocumentInfo(r).hasClientExports){var l=this.localState.addExportedVariables(r,s,c).then(u)
return new _((function(e){var t=null
return l.then((function(r){return t=r.subscribe(e)}),e.error),function(){return t&&t.unsubscribe()}}))}return u(s)},e.prototype.stopQuery=function(e){this.stopQueryNoBroadcast(e),this.broadcastQueries()},e.prototype.stopQueryNoBroadcast=function(e){this.stopQueryInStoreNoBroadcast(e),this.removeQuery(e)},e.prototype.removeQuery=function(e){this.fetchCancelFns.delete(e),this.queries.has(e)&&(this.getQuery(e).stop(),this.queries.delete(e))},e.prototype.broadcastQueries=function(){this.onBroadcast&&this.onBroadcast(),this.queries.forEach((function(e){return e.notify()}))},e.prototype.getLocalState=function(){return this.localState},e.prototype.getObservableFromLink=function(e,t,r,i){var o,s,a=this
void 0===i&&(i=null!==(o=null==t?void 0:t.queryDeduplication)&&void 0!==o?o:this.queryDeduplication)
var c=this.getDocumentInfo(e),u=c.serverQuery,l=c.clientQuery
if(u){var f=this.inFlightLinkObservables,h=this.link,p={query:u,variables:r,operationName:B(u)||void 0,context:this.prepareContext((0,n.pi)((0,n.pi)({},t),{forceFetch:!i}))}
if(t=p.context,i){var d=Ge(u),v=f.get(d)||new Map
f.set(d,v)
var y=mt(r)
if(!(s=v.get(y))){var m=new It([H(h,p)])
v.set(y,s=m),m.beforeNext((function(){v.delete(y)&&v.size<1&&f.delete(d)}))}}else s=new It([H(h,p)])}else s=new It([_.of({data:{}})]),t=this.prepareContext(t)
return l&&(s=Ot(s,(function(e){return a.localState.runResolvers({document:l,remoteResult:e,context:t,variables:r})}))),s},e.prototype.getResultsFromLink=function(e,t,r){var n=e.lastRequestId=this.generateRequestId(),i=this.cache.transformForLink(r.query)
return Ot(this.getObservableFromLink(i,r.context,r.variables),(function(o){var s=kt(o),a=s.length>0
if(n>=e.lastRequestId){if(a&&"none"===r.errorPolicy)throw e.markError(new me.cA({graphQLErrors:s}))
e.markResult(o,i,r,t),e.markReady()}var c={data:o.data,loading:!1,networkStatus:xt.Ie.ready}
return a&&"ignore"!==r.errorPolicy&&(c.errors=s,c.networkStatus=xt.Ie.error),c}),(function(t){var r=(0,me.MS)(t)?t:new me.cA({networkError:t})
throw n>=e.lastRequestId&&e.markError(r),r}))},e.prototype.fetchConcastWithInfo=function(e,t,r,n){var i=this
void 0===r&&(r=xt.Ie.loading),void 0===n&&(n=t.query)
var o,s,a=this.getVariables(n,t.variables),c=this.getQuery(e),u=this.defaultOptions.watchQuery,l=t.fetchPolicy,f=void 0===l?u&&u.fetchPolicy||"cache-first":l,h=t.errorPolicy,p=void 0===h?u&&u.errorPolicy||"none":h,d=t.returnPartialData,v=void 0!==d&&d,y=t.notifyOnNetworkStatusChange,m=void 0!==y&&y,b=t.context,g=void 0===b?{}:b,E=Object.assign({},t,{query:n,variables:a,fetchPolicy:f,errorPolicy:p,returnPartialData:v,notifyOnNetworkStatusChange:m,context:g}),O=function(e){E.variables=e
var n=i.fetchQueryByPolicy(c,E,r)
return"standby"!==E.fetchPolicy&&n.sources.length>0&&c.observableQuery&&c.observableQuery.applyNextFetchPolicy("after-fetch",t),n},w=function(){return i.fetchCancelFns.delete(e)}
if(this.fetchCancelFns.set(e,(function(e){w(),setTimeout((function(){return o.cancel(e)}))})),this.getDocumentInfo(E.query).hasClientExports)o=new It(this.localState.addExportedVariables(E.query,E.variables,E.context).then(O).then((function(e){return e.sources}))),s=!0
else{var k=O(E.variables)
s=k.fromLink,o=new It(k.sources)}return o.promise.then(w,w),{concast:o,fromLink:s}},e.prototype.refetchQueries=function(e){var t=this,r=e.updateCache,n=e.include,i=e.optimistic,o=void 0!==i&&i,s=e.removeOptimistic,a=void 0===s?o?(0,_t.X)("refetchQueries"):void 0:s,c=e.onQueryUpdated,u=new Map
n&&this.getObservableQueries(n).forEach((function(e,r){u.set(r,{oq:e,lastDiff:t.getQuery(r).getDiff()})}))
var l=new Map
return r&&this.cache.batch({update:r,optimistic:o&&a||!1,removeOptimistic:a,onWatchUpdated:function(e,t,r){var n=e.watcher instanceof Kr&&e.watcher.observableQuery
if(n){if(c){u.delete(n.queryId)
var i=c(n,t,r)
return!0===i&&(i=n.refetch()),!1!==i&&l.set(n,i),i}null!==c&&u.set(n.queryId,{oq:n,lastDiff:r,diff:t})}}}),u.size&&u.forEach((function(e,r){var n,i=e.oq,o=e.lastDiff,s=e.diff
if(c){if(!s){var a=i.queryInfo
a.reset(),s=a.getDiff()}n=c(i,s,o)}c&&!0!==n||(n=i.refetch()),!1!==n&&l.set(i,n),r.indexOf("legacyOneTimeQuery")>=0&&t.stopQueryNoBroadcast(r)})),a&&this.cache.removeOptimistic(a),l},e.prototype.fetchQueryByPolicy=function(e,t,r){var i=this,o=t.query,s=t.variables,a=t.fetchPolicy,c=t.refetchWritePolicy,u=t.errorPolicy,l=t.returnPartialData,f=t.context,h=t.notifyOnNetworkStatusChange,p=e.networkStatus
e.init({document:o,variables:s,networkStatus:r})
var d=function(){return e.getDiff()},v=function(t,r){void 0===r&&(r=e.networkStatus||xt.Ie.loading)
var a=t.result
!1===globalThis.__DEV__||l||(0,ct.D)(a,{})||Ut(t.missing)
var c=function(e){return _.of((0,n.pi)({data:e,loading:(0,xt.Oj)(r),networkStatus:r},t.complete?null:{partial:!0}))}
return a&&i.getDocumentInfo(o).hasForcedResolvers?i.localState.runResolvers({document:o,remoteResult:{data:a},context:f,variables:s,onlyRunForcedResolvers:!0}).then((function(e){return c(e.data||void 0)})):"none"===u&&r===xt.Ie.refetch&&Array.isArray(t.missing)?c(void 0):c(a)},y="no-cache"===a?0:r===xt.Ie.refetch&&"merge"!==c?1:2,m=function(){return i.getResultsFromLink(e,y,{query:o,variables:s,context:f,fetchPolicy:a,errorPolicy:u})},b=h&&"number"==typeof p&&p!==r&&(0,xt.Oj)(r)
switch(a){default:case"cache-first":return(g=d()).complete?{fromLink:!1,sources:[v(g,e.markReady())]}:l||b?{fromLink:!0,sources:[v(g),m()]}:{fromLink:!0,sources:[m()]}
case"cache-and-network":var g
return(g=d()).complete||l||b?{fromLink:!0,sources:[v(g),m()]}:{fromLink:!0,sources:[m()]}
case"cache-only":return{fromLink:!1,sources:[v(d(),e.markReady())]}
case"network-only":return b?{fromLink:!0,sources:[v(d()),m()]}:{fromLink:!0,sources:[m()]}
case"no-cache":return b?{fromLink:!0,sources:[v(e.getDiff()),m()]}:{fromLink:!0,sources:[m()]}
case"standby":return{fromLink:!1,sources:[]}}},e.prototype.getQuery=function(e){return e&&!this.queries.has(e)&&this.queries.set(e,new Kr(this,e)),this.queries.get(e)},e.prototype.prepareContext=function(e){void 0===e&&(e={})
var t=this.localState.prepareContext(e)
return(0,n.pi)((0,n.pi)({},t),{clientAwareness:this.clientAwareness})},e}()
function $r(e,t){return Nt(e,t,t.variables&&{variables:Nt((0,n.pi)((0,n.pi)({},e&&e.variables),t.variables))})}var Hr,Xr=!1,Zr=function(){function e(e){var t=this
if(this.resetStoreCallbacks=[],this.clearStoreCallbacks=[],!e.cache)throw(0,i._K)(15)
var r=e.uri,n=e.credentials,o=e.headers,s=e.cache,a=e.documentTransform,c=e.ssrMode,u=void 0!==c&&c,l=e.ssrForceFetchDelay,f=void 0===l?0:l,h=e.connectToDevTools,p=void 0===h?"object"==typeof window&&!window.__APOLLO_CLIENT__&&!1!==globalThis.__DEV__:h,d=e.queryDeduplication,v=void 0===d||d,y=e.defaultOptions,m=e.assumeImmutableResults,b=void 0===m?s.assumeImmutableResults:m,g=e.resolvers,E=e.typeDefs,O=e.fragmentMatcher,w=e.name,k=e.version,_=e.link
_||(_=r?new at({uri:r,credentials:n,headers:o}):$.empty()),this.link=_,this.cache=s,this.disableNetworkFetches=u||f>0,this.queryDeduplication=v,this.defaultOptions=y||Object.create(null),this.typeDefs=E,f&&setTimeout((function(){return t.disableNetworkFetches=!1}),f),this.watchQuery=this.watchQuery.bind(this),this.query=this.query.bind(this),this.mutate=this.mutate.bind(this),this.resetStore=this.resetStore.bind(this),this.reFetchObservableQueries=this.reFetchObservableQueries.bind(this),this.version=X.i,this.localState=new Br({cache:s,client:this,resolvers:g,fragmentMatcher:O}),this.queryManager=new Jr({cache:this.cache,link:this.link,defaultOptions:this.defaultOptions,documentTransform:a,queryDeduplication:v,ssrMode:u,clientAwareness:{name:w,version:k},localState:this.localState,assumeImmutableResults:b,onBroadcast:p?function(){t.devToolsHookCb&&t.devToolsHookCb({action:{},state:{queries:t.queryManager.getQueryStore(),mutations:t.queryManager.mutationStore||{}},dataWithOptimisticResults:t.cache.extract(!0)})}:void 0}),p&&this.connectToDevTools()}return e.prototype.connectToDevTools=function(){if("object"==typeof window){var e=window,t=Symbol.for("apollo.devtools");(e[t]=e[t]||[]).push(this),e.__APOLLO_CLIENT__=this}Xr||!1===globalThis.__DEV__||(Xr=!0,setTimeout((function(){if("undefined"!=typeof window&&window.document&&window.top===window.self&&!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__){var e=window.navigator,t=e&&e.userAgent,r=void 0
"string"==typeof t&&(t.indexOf("Chrome/")>-1?r="https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm":t.indexOf("Firefox/")>-1&&(r="https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),r&&!1!==globalThis.__DEV__&&i.kG.log("Download the Apollo DevTools for a better development experience: %s",r)}}),1e4))},Object.defineProperty(e.prototype,"documentTransform",{get:function(){return this.queryManager.documentTransform},enumerable:!1,configurable:!0}),e.prototype.stop=function(){this.queryManager.stop()},e.prototype.watchQuery=function(e){return this.defaultOptions.watchQuery&&(e=$r(this.defaultOptions.watchQuery,e)),!this.disableNetworkFetches||"network-only"!==e.fetchPolicy&&"cache-and-network"!==e.fetchPolicy||(e=(0,n.pi)((0,n.pi)({},e),{fetchPolicy:"cache-first"})),this.queryManager.watchQuery(e)},e.prototype.query=function(e){return this.defaultOptions.query&&(e=$r(this.defaultOptions.query,e)),(0,i.kG)("cache-and-network"!==e.fetchPolicy,16),this.disableNetworkFetches&&"network-only"===e.fetchPolicy&&(e=(0,n.pi)((0,n.pi)({},e),{fetchPolicy:"cache-first"})),this.queryManager.query(e)},e.prototype.mutate=function(e){return this.defaultOptions.mutate&&(e=$r(this.defaultOptions.mutate,e)),this.queryManager.mutate(e)},e.prototype.subscribe=function(e){return this.queryManager.startGraphQLSubscription(e)},e.prototype.readQuery=function(e,t){return void 0===t&&(t=!1),this.cache.readQuery(e,t)},e.prototype.readFragment=function(e,t){return void 0===t&&(t=!1),this.cache.readFragment(e,t)},e.prototype.writeQuery=function(e){var t=this.cache.writeQuery(e)
return!1!==e.broadcast&&this.queryManager.broadcastQueries(),t},e.prototype.writeFragment=function(e){var t=this.cache.writeFragment(e)
return!1!==e.broadcast&&this.queryManager.broadcastQueries(),t},e.prototype.__actionHookForDevTools=function(e){this.devToolsHookCb=e},e.prototype.__requestRaw=function(e){return H(this.link,e)},e.prototype.resetStore=function(){var e=this
return Promise.resolve().then((function(){return e.queryManager.clearStore({discardWatches:!1})})).then((function(){return Promise.all(e.resetStoreCallbacks.map((function(e){return e()})))})).then((function(){return e.reFetchObservableQueries()}))},e.prototype.clearStore=function(){var e=this
return Promise.resolve().then((function(){return e.queryManager.clearStore({discardWatches:!0})})).then((function(){return Promise.all(e.clearStoreCallbacks.map((function(e){return e()})))}))},e.prototype.onResetStore=function(e){var t=this
return this.resetStoreCallbacks.push(e),function(){t.resetStoreCallbacks=t.resetStoreCallbacks.filter((function(t){return t!==e}))}},e.prototype.onClearStore=function(e){var t=this
return this.clearStoreCallbacks.push(e),function(){t.clearStoreCallbacks=t.clearStoreCallbacks.filter((function(t){return t!==e}))}},e.prototype.reFetchObservableQueries=function(e){return this.queryManager.reFetchObservableQueries(e)},e.prototype.refetchQueries=function(e){var t=this.queryManager.refetchQueries(e),r=[],n=[]
t.forEach((function(e,t){r.push(t),n.push(e)}))
var o=Promise.all(n)
return o.queries=r,o.results=n,o.catch((function(e){!1!==globalThis.__DEV__&&i.kG.debug(17,e)})),o},e.prototype.getObservableQueries=function(e){return void 0===e&&(e="active"),this.queryManager.getObservableQueries(e)},e.prototype.extract=function(e){return this.cache.extract(e)},e.prototype.restore=function(e){return this.cache.restore(e)},e.prototype.addResolvers=function(e){this.localState.addResolvers(e)},e.prototype.setResolvers=function(e){this.localState.setResolvers(e)},e.prototype.getResolvers=function(){return this.localState.getResolvers()},e.prototype.setLocalStateFragmentMatcher=function(e){this.localState.setFragmentMatcher(e)},e.prototype.setLink=function(e){this.link=this.queryManager.link=e},e}()
Hr||(Hr={})
var en=function(){function e(){this.assumeImmutableResults=!1,this.getFragmentDoc=jr(S)}return e.prototype.batch=function(e){var t,r=this,n="string"==typeof e.optimistic?e.optimistic:!1===e.optimistic?null:void 0
return this.performTransaction((function(){return t=e.update(r)}),n),t},e.prototype.recordOptimisticTransaction=function(e,t){this.performTransaction(e,t)},e.prototype.transformDocument=function(e){return e},e.prototype.transformForLink=function(e){return e},e.prototype.identify=function(e){},e.prototype.gc=function(){return[]},e.prototype.modify=function(e){return!1},e.prototype.readQuery=function(e,t){return void 0===t&&(t=!!e.optimistic),this.read((0,n.pi)((0,n.pi)({},e),{rootId:e.id||"ROOT_QUERY",optimistic:t}))},e.prototype.readFragment=function(e,t){return void 0===t&&(t=!!e.optimistic),this.read((0,n.pi)((0,n.pi)({},e),{query:this.getFragmentDoc(e.fragment,e.fragmentName),rootId:e.id,optimistic:t}))},e.prototype.writeQuery=function(e){var t=e.id,r=e.data,i=(0,n._T)(e,["id","data"])
return this.write(Object.assign(i,{dataId:t||"ROOT_QUERY",result:r}))},e.prototype.writeFragment=function(e){var t=e.id,r=e.data,i=e.fragment,o=e.fragmentName,s=(0,n._T)(e,["id","data","fragment","fragmentName"])
return this.write(Object.assign(s,{query:this.getFragmentDoc(i,o),dataId:t,result:r}))},e.prototype.updateQuery=function(e,t){return this.batch({update:function(r){var i=r.readQuery(e),o=t(i)
return null==o?i:(r.writeQuery((0,n.pi)((0,n.pi)({},e),{data:o})),o)}})},e.prototype.updateFragment=function(e,t){return this.batch({update:function(r){var i=r.readFragment(e),o=t(i)
return null==o?i:(r.writeFragment((0,n.pi)((0,n.pi)({},e),{data:o})),o)}})},e}(),tn=function(e){function t(r,n,i,o){var s,a=e.call(this,r)||this
if(a.message=r,a.path=n,a.query=i,a.variables=o,Array.isArray(a.path)){a.missing=a.message
for(var c=a.path.length-1;c>=0;--c)a.missing=((s={})[a.path[c]]=a.missing,s)}else a.missing=a.path
return a.__proto__=t.prototype,a}return(0,n.ZT)(t,e),t}(Error)
function rn(e){return!1!==globalThis.__DEV__&&(t=new Set([e])).forEach((function(e){(0,T.s)(e)&&function(e){if(!1!==globalThis.__DEV__&&!Object.isFrozen(e))try{Object.freeze(e)}catch(e){if(e instanceof TypeError)return null
throw e}return e}(e)===e&&Object.getOwnPropertyNames(e).forEach((function(r){(0,T.s)(e[r])&&t.add(e[r])}))})),e
var t}var nn=Object.prototype.hasOwnProperty
function on(e){return null==e}function sn(e,t){var r=e.__typename,n=e.id,i=e._id
if("string"==typeof r&&(t&&(t.keyObject=on(n)?on(i)?void 0:{_id:i}:{id:n}),on(n)&&!on(i)&&(n=i),!on(n)))return"".concat(r,":").concat("number"==typeof n||"string"==typeof n?n:JSON.stringify(n))}var an={dataIdFromObject:sn,addTypename:!0,resultCaching:!0,canonizeResults:!1}
function cn(e){var t=e.canonizeResults
return void 0===t?an.canonizeResults:t}var un=/^[_a-z][_0-9a-z]*/i
function ln(e){var t=e.match(un)
return t?t[0]:e}function fn(e,t,r){return!!(0,T.s)(t)&&(be(t)?t.every((function(t){return fn(e,t,r)})):e.selections.every((function(e){if(q(e)&&se(e,r)){var n=L(e)
return nn.call(t,n)&&(!e.selectionSet||fn(e.selectionSet,t[n],r))}return!0})))}function hn(e){return(0,T.s)(e)&&!N(e)&&!be(e)}function pn(e,t){var r=D(U(e))
return{fragmentMap:r,lookupFragment:function(e){var n=r[e]
return!n&&t&&(n=t.lookup(e)),n||null}}}var dn=Object.create(null),vn=function(){return dn},yn=Object.create(null),mn=function(){function e(e,t){var r=this
this.policies=e,this.group=t,this.data=Object.create(null),this.rootIds=Object.create(null),this.refs=Object.create(null),this.getFieldValue=function(e,t){return rn(N(e)?r.get(e.__ref,t):e&&e[t])},this.canRead=function(e){return N(e)?r.has(e.__ref):"object"==typeof e},this.toReference=function(e,t){if("string"==typeof e)return x(e)
if(N(e))return e
var n=r.policies.identify(e)[0]
if(n){var i=x(n)
return t&&r.merge(n,e),i}}}return e.prototype.toObject=function(){return(0,n.pi)({},this.data)},e.prototype.has=function(e){return void 0!==this.lookup(e,!0)},e.prototype.get=function(e,t){if(this.group.depend(e,t),nn.call(this.data,e)){var r=this.data[e]
if(r&&nn.call(r,t))return r[t]}return"__typename"===t&&nn.call(this.policies.rootTypenamesById,e)?this.policies.rootTypenamesById[e]:this instanceof On?this.parent.get(e,t):void 0},e.prototype.lookup=function(e,t){return t&&this.group.depend(e,"__exists"),nn.call(this.data,e)?this.data[e]:this instanceof On?this.parent.lookup(e,t):this.policies.rootTypenamesById[e]?Object.create(null):void 0},e.prototype.merge=function(e,t){var r,n=this
N(e)&&(e=e.__ref),N(t)&&(t=t.__ref)
var o="string"==typeof e?this.lookup(r=e):e,s="string"==typeof t?this.lookup(r=t):t
if(s){(0,i.kG)("string"==typeof r,1)
var a=new _e(kn).merge(o,s)
if(this.data[r]=a,a!==o&&(delete this.refs[r],this.group.caching)){var c=Object.create(null)
o||(c.__exists=1),Object.keys(s).forEach((function(e){if(!o||o[e]!==a[e]){c[e]=1
var t=ln(e)
t===e||n.policies.hasKeyArgs(a.__typename,t)||(c[t]=1),void 0!==a[e]||n instanceof On||delete a[e]}})),!c.__typename||o&&o.__typename||this.policies.rootTypenamesById[r]!==a.__typename||delete c.__typename,Object.keys(c).forEach((function(e){return n.group.dirty(r,e)}))}}},e.prototype.modify=function(e,t){var r=this,o=this.lookup(e)
if(o){var s=Object.create(null),a=!1,c=!0,u={DELETE:dn,INVALIDATE:yn,isReference:N,toReference:this.toReference,canRead:this.canRead,readField:function(t,n){return r.policies.readField("string"==typeof t?{fieldName:t,from:n||x(e)}:t,{store:r})}}
if(Object.keys(o).forEach((function(l){var f=ln(l),h=o[l]
if(void 0!==h){var p="function"==typeof t?t:t[l]||t[f]
if(p){var d=p===vn?dn:p(rn(h),(0,n.pi)((0,n.pi)({},u),{fieldName:f,storeFieldName:l,storage:r.getStorage(e,l)}))
if(d===yn)r.group.dirty(e,l)
else if(d===dn&&(d=void 0),d!==h&&(s[l]=d,a=!0,h=d,!1!==globalThis.__DEV__)){var v=function(e){if(void 0===r.lookup(e.__ref))return!1!==globalThis.__DEV__&&i.kG.warn(2,e),!0}
if(N(d))v(d)
else if(Array.isArray(d))for(var y=!1,m=void 0,b=0,g=d;b<g.length;b++){var E=g[b]
if(N(E)){if(y=!0,v(E))break}else"object"==typeof E&&E&&r.policies.identify(E)[0]&&(m=E)
if(y&&void 0!==m){!1!==globalThis.__DEV__&&i.kG.warn(3,m)
break}}}}void 0!==h&&(c=!1)}})),a)return this.merge(e,s),c&&(this instanceof On?this.data[e]=void 0:delete this.data[e],this.group.dirty(e,"__exists")),!0}return!1},e.prototype.delete=function(e,t,r){var n,i=this.lookup(e)
if(i){var o=this.getFieldValue(i,"__typename"),s=t&&r?this.policies.getStoreFieldName({typename:o,fieldName:t,args:r}):t
return this.modify(e,s?((n={})[s]=vn,n):vn)}return!1},e.prototype.evict=function(e,t){var r=!1
return e.id&&(nn.call(this.data,e.id)&&(r=this.delete(e.id,e.fieldName,e.args)),this instanceof On&&this!==t&&(r=this.parent.evict(e,t)||r),(e.fieldName||r)&&this.group.dirty(e.id,e.fieldName||"__exists")),r},e.prototype.clear=function(){this.replace(null)},e.prototype.extract=function(){var e=this,t=this.toObject(),r=[]
return this.getRootIdSet().forEach((function(t){nn.call(e.policies.rootTypenamesById,t)||r.push(t)})),r.length&&(t.__META={extraRootIds:r.sort()}),t},e.prototype.replace=function(e){var t=this
if(Object.keys(this.data).forEach((function(r){e&&nn.call(e,r)||t.delete(r)})),e){var r=e.__META,i=(0,n._T)(e,["__META"])
Object.keys(i).forEach((function(e){t.merge(e,i[e])})),r&&r.extraRootIds.forEach(this.retain,this)}},e.prototype.retain=function(e){return this.rootIds[e]=(this.rootIds[e]||0)+1},e.prototype.release=function(e){if(this.rootIds[e]>0){var t=--this.rootIds[e]
return t||delete this.rootIds[e],t}return 0},e.prototype.getRootIdSet=function(e){return void 0===e&&(e=new Set),Object.keys(this.rootIds).forEach(e.add,e),this instanceof On?this.parent.getRootIdSet(e):Object.keys(this.policies.rootTypenamesById).forEach(e.add,e),e},e.prototype.gc=function(){var e=this,t=this.getRootIdSet(),r=this.toObject()
t.forEach((function(n){nn.call(r,n)&&(Object.keys(e.findChildRefIds(n)).forEach(t.add,t),delete r[n])}))
var n=Object.keys(r)
if(n.length){for(var i=this;i instanceof On;)i=i.parent
n.forEach((function(e){return i.delete(e)}))}return n},e.prototype.findChildRefIds=function(e){if(!nn.call(this.refs,e)){var t=this.refs[e]=Object.create(null),r=this.data[e]
if(!r)return t
var n=new Set([r])
n.forEach((function(e){N(e)&&(t[e.__ref]=!0),(0,T.s)(e)&&Object.keys(e).forEach((function(t){var r=e[t];(0,T.s)(r)&&n.add(r)}))}))}return this.refs[e]},e.prototype.makeCacheKey=function(){return this.group.keyMaker.lookupArray(arguments)},e}(),bn=function(){function e(e,t){void 0===t&&(t=null),this.caching=e,this.parent=t,this.d=null,this.resetCaching()}return e.prototype.resetCaching=function(){this.d=this.caching?Rr():null,this.keyMaker=new pt(fe)},e.prototype.depend=function(e,t){if(this.d){this.d(gn(e,t))
var r=ln(t)
r!==t&&this.d(gn(e,r)),this.parent&&this.parent.depend(e,t)}},e.prototype.dirty=function(e,t){this.d&&this.d.dirty(gn(e,t),"__exists"===t?"forget":"setDirty")},e}()
function gn(e,t){return t+"#"+e}function En(e,t){_n(e)&&e.group.depend(t,"__exists")}!function(e){var t=function(e){function t(t){var r=t.policies,n=t.resultCaching,i=void 0===n||n,o=t.seed,s=e.call(this,r,new bn(i))||this
return s.stump=new wn(s),s.storageTrie=new pt(fe),o&&s.replace(o),s}return(0,n.ZT)(t,e),t.prototype.addLayer=function(e,t){return this.stump.addLayer(e,t)},t.prototype.removeLayer=function(){return this},t.prototype.getStorage=function(){return this.storageTrie.lookupArray(arguments)},t}(e)
e.Root=t}(mn||(mn={}))
var On=function(e){function t(t,r,n,i){var o=e.call(this,r.policies,i)||this
return o.id=t,o.parent=r,o.replay=n,o.group=i,n(o),o}return(0,n.ZT)(t,e),t.prototype.addLayer=function(e,r){return new t(e,this,r,this.group)},t.prototype.removeLayer=function(e){var t=this,r=this.parent.removeLayer(e)
return e===this.id?(this.group.caching&&Object.keys(this.data).forEach((function(e){var n=t.data[e],i=r.lookup(e)
i?n?n!==i&&Object.keys(n).forEach((function(r){(0,ct.D)(n[r],i[r])||t.group.dirty(e,r)})):(t.group.dirty(e,"__exists"),Object.keys(i).forEach((function(r){t.group.dirty(e,r)}))):t.delete(e)})),r):r===this.parent?this:r.addLayer(this.id,this.replay)},t.prototype.toObject=function(){return(0,n.pi)((0,n.pi)({},this.parent.toObject()),this.data)},t.prototype.findChildRefIds=function(t){var r=this.parent.findChildRefIds(t)
return nn.call(this.data,t)?(0,n.pi)((0,n.pi)({},r),e.prototype.findChildRefIds.call(this,t)):r},t.prototype.getStorage=function(){for(var e=this.parent;e.parent;)e=e.parent
return e.getStorage.apply(e,arguments)},t}(mn),wn=function(e){function t(t){return e.call(this,"EntityStore.Stump",t,(function(){}),new bn(t.group.caching,t.group))||this}return(0,n.ZT)(t,e),t.prototype.removeLayer=function(){return this},t.prototype.merge=function(e,t){return this.parent.merge(e,t)},t}(On)
function kn(e,t,r){var n=e[r],i=t[r]
return(0,ct.D)(n,i)?n:i}function _n(e){return!!(e instanceof mn&&e.group.caching)}function Tn(e){return[e.selectionSet,e.objectOrReference,e.context,e.context.canonizeResults]}var Sn=function(){function e(e){var t=this
this.knownResults=new(fe?WeakMap:Map),this.config=Nt(e,{addTypename:!1!==e.addTypename,canonizeResults:cn(e)}),this.canon=e.canon||new yt,this.executeSelectionSet=jr((function(e){var r,i=e.context.canonizeResults,o=Tn(e)
o[3]=!i
var s=(r=t.executeSelectionSet).peek.apply(r,o)
return s?i?(0,n.pi)((0,n.pi)({},s),{result:t.canon.admit(s.result)}):s:(En(e.context.store,e.enclosingRef.__ref),t.execSelectionSetImpl(e))}),{max:this.config.resultCacheMaxSize,keyArgs:Tn,makeCacheKey:function(e,t,r,n){if(_n(r.store))return r.store.makeCacheKey(e,N(t)?t.__ref:t,r.varString,n)}}),this.executeSubSelectedArray=jr((function(e){return En(e.context.store,e.enclosingRef.__ref),t.execSubSelectedArrayImpl(e)}),{max:this.config.resultCacheMaxSize,makeCacheKey:function(e){var t=e.field,r=e.array,n=e.context
if(_n(n.store))return n.store.makeCacheKey(t,r,n.varString)}})}return e.prototype.resetCanon=function(){this.canon=new yt},e.prototype.diffQueryAgainstStore=function(e){var t=e.store,r=e.query,i=e.rootId,o=void 0===i?"ROOT_QUERY":i,s=e.variables,a=e.returnPartialData,c=void 0===a||a,u=e.canonizeResults,l=void 0===u?this.config.canonizeResults:u,f=this.config.cache.policies
s=(0,n.pi)((0,n.pi)({},K(G(r))),s)
var h,p=x(o),d=this.executeSelectionSet({selectionSet:z(r).selectionSet,objectOrReference:p,enclosingRef:p,context:(0,n.pi)({store:t,query:r,policies:f,variables:s,varString:mt(s),canonizeResults:l},pn(r,this.config.fragments))})
if(d.missing&&(h=[new tn(Dn(d.missing),d.missing,r,s)],!c))throw h[0]
return{result:d.result,complete:!h,missing:h}},e.prototype.isFresh=function(e,t,r,n){if(_n(n.store)&&this.knownResults.get(e)===r){var i=this.executeSelectionSet.peek(r,t,n,this.canon.isKnown(e))
if(i&&e===i.result)return!0}return!1},e.prototype.execSelectionSetImpl=function(e){var t=this,r=e.selectionSet,n=e.objectOrReference,o=e.enclosingRef,s=e.context
if(N(n)&&!s.policies.rootTypenamesById[n.__ref]&&!s.store.has(n.__ref))return{result:this.canon.empty,missing:"Dangling reference to missing ".concat(n.__ref," object")}
var a,c=s.variables,u=s.policies,l=s.store.getFieldValue(n,"__typename"),f=[],h=new _e
function p(e,t){var r
return e.missing&&(a=h.merge(a,((r={})[t]=e.missing,r))),e.result}this.config.addTypename&&"string"==typeof l&&!u.rootIdsByTypename[l]&&f.push({__typename:l})
var d=new Set(r.selections)
d.forEach((function(e){var r,v
if(se(e,c))if(q(e)){var y=u.readField({fieldName:e.name.value,field:e,variables:s.variables,from:n},s),m=L(e)
void 0===y?rt.added(e)||(a=h.merge(a,((r={})[m]="Can't find field '".concat(e.name.value,"' on ").concat(N(n)?n.__ref+" object":"object "+JSON.stringify(n,null,2)),r))):be(y)?y=p(t.executeSubSelectedArray({field:e,array:y,enclosingRef:o,context:s}),m):e.selectionSet?null!=y&&(y=p(t.executeSelectionSet({selectionSet:e.selectionSet,objectOrReference:y,enclosingRef:N(y)?y:o,context:s}),m)):s.canonizeResults&&(y=t.canon.pass(y)),void 0!==y&&f.push(((v={})[m]=y,v))}else{var b=I(e,s.lookupFragment)
if(!b&&e.kind===re.h.FRAGMENT_SPREAD)throw(0,i._K)(9,e.name.value)
b&&u.fragmentMatches(b,l)&&b.selectionSet.selections.forEach(d.add,d)}}))
var v={result:we(f),missing:a},y=s.canonizeResults?this.canon.admit(v):rn(v)
return y.result&&this.knownResults.set(y.result,r),y},e.prototype.execSubSelectedArrayImpl=function(e){var t,r=this,n=e.field,o=e.array,s=e.enclosingRef,a=e.context,c=new _e
function u(e,r){var n
return e.missing&&(t=c.merge(t,((n={})[r]=e.missing,n))),e.result}return n.selectionSet&&(o=o.filter(a.store.canRead)),o=o.map((function(e,t){return null===e?null:be(e)?u(r.executeSubSelectedArray({field:n,array:e,enclosingRef:s,context:a}),t):n.selectionSet?u(r.executeSelectionSet({selectionSet:n.selectionSet,objectOrReference:e,enclosingRef:N(e)?e:s,context:a}),t):(!1!==globalThis.__DEV__&&function(e,t,r){if(!t.selectionSet){var n=new Set([r])
n.forEach((function(r){(0,T.s)(r)&&((0,i.kG)(!N(r),10,function(e,t){return N(t)?e.get(t.__ref,"__typename"):t&&t.__typename}(e,r),t.name.value),Object.values(r).forEach(n.add,n))}))}}(a.store,n,e),e)})),{result:a.canonizeResults?this.canon.admit(o):o,missing:t}},e}()
function Dn(e){try{JSON.stringify(e,(function(e,t){if("string"==typeof t)throw t
return t}))}catch(e){return e}}var In=r(407),xn=Object.create(null)
function Nn(e){var t=JSON.stringify(e)
return xn[t]||(xn[t]=Object.create(null))}function An(e){var t=Nn(e)
return t.keyFieldsFn||(t.keyFieldsFn=function(t,r){var n=function(e,t){return r.readField(t,e)},o=r.keyObject=Cn(e,(function(e){var o=jn(r.storeObject,e,n)
return void 0===o&&t!==r.storeObject&&nn.call(t,e[0])&&(o=jn(t,e,Pn)),(0,i.kG)(void 0!==o,4,e.join("."),t),o}))
return"".concat(r.typename,":").concat(JSON.stringify(o))})}function Rn(e){var t=Nn(e)
return t.keyArgsFn||(t.keyArgsFn=function(t,r){var n=r.field,i=r.variables,o=r.fieldName,s=Cn(e,(function(e){var r=e[0],o=r.charAt(0)
if("@"!==o)if("$"!==o){if(t)return jn(t,e)}else{var s=r.slice(1)
if(i&&nn.call(i,s)){var a=e.slice(0)
return a[0]=s,jn(i,a)}}else if(n&&ge(n.directives)){var c=r.slice(1),u=n.directives.find((function(e){return e.name.value===c})),l=u&&j(u,i)
return l&&jn(l,e.slice(1))}})),a=JSON.stringify(s)
return(t||"{}"!==a)&&(o+=":"+a),o})}function Cn(e,t){var r=new _e
return Fn(e).reduce((function(e,n){var i,o=t(n)
if(void 0!==o){for(var s=n.length-1;s>=0;--s)(i={})[n[s]]=o,o=i
e=r.merge(e,o)}return e}),Object.create(null))}function Fn(e){var t=Nn(e)
if(!t.paths){var r=t.paths=[],n=[]
e.forEach((function(t,i){be(t)?(Fn(t).forEach((function(e){return r.push(n.concat(e))})),n.length=0):(n.push(t),be(e[i+1])||(r.push(n.slice(0)),n.length=0))}))}return t.paths}function Pn(e,t){return e[t]}function jn(e,t,r){return r=r||Pn,Ln(t.reduce((function e(t,n){return be(t)?t.map((function(t){return e(t,n)})):t&&r(t,n)}),e))}function Ln(e){return(0,T.s)(e)?be(e)?e.map(Ln):Cn(Object.keys(e).sort(),(function(t){return jn(e,t)})):e}function Mn(e){return void 0!==e.args?e.args:e.field?j(e.field,e.variables):null}C.setStringify(mt)
var qn=function(){},Vn=function(e,t){return t.fieldName},Qn=function(e,t,r){return(0,r.mergeObjects)(e,t)},Bn=function(e,t){return t},Un=function(){function e(e){this.config=e,this.typePolicies=Object.create(null),this.toBeAdded=Object.create(null),this.supertypeMap=new Map,this.fuzzySubtypes=new Map,this.rootIdsByTypename=Object.create(null),this.rootTypenamesById=Object.create(null),this.usingPossibleTypes=!1,this.config=(0,n.pi)({dataIdFromObject:sn},e),this.cache=this.config.cache,this.setRootTypename("Query"),this.setRootTypename("Mutation"),this.setRootTypename("Subscription"),e.possibleTypes&&this.addPossibleTypes(e.possibleTypes),e.typePolicies&&this.addTypePolicies(e.typePolicies)}return e.prototype.identify=function(e,t){var r,i=this,o=t&&(t.typename||(null===(r=t.storeObject)||void 0===r?void 0:r.__typename))||e.__typename
if(o===this.rootTypenamesById.ROOT_QUERY)return["ROOT_QUERY"]
for(var s,a=t&&t.storeObject||e,c=(0,n.pi)((0,n.pi)({},t),{typename:o,storeObject:a,readField:t&&t.readField||function(){var e=zn(arguments,a)
return i.readField(e,{store:i.cache.data,variables:e.variables})}}),u=o&&this.getTypePolicy(o),l=u&&u.keyFn||this.config.dataIdFromObject;l;){var f=l((0,n.pi)((0,n.pi)({},e),a),c)
if(!be(f)){s=f
break}l=An(f)}return s=s?String(s):void 0,c.keyObject?[s,c.keyObject]:[s]},e.prototype.addTypePolicies=function(e){var t=this
Object.keys(e).forEach((function(r){var i=e[r],o=i.queryType,s=i.mutationType,a=i.subscriptionType,c=(0,n._T)(i,["queryType","mutationType","subscriptionType"])
o&&t.setRootTypename("Query",r),s&&t.setRootTypename("Mutation",r),a&&t.setRootTypename("Subscription",r),nn.call(t.toBeAdded,r)?t.toBeAdded[r].push(c):t.toBeAdded[r]=[c]}))},e.prototype.updateTypePolicy=function(e,t){var r=this,n=this.getTypePolicy(e),i=t.keyFields,o=t.fields
function s(e,t){e.merge="function"==typeof t?t:!0===t?Qn:!1===t?Bn:e.merge}s(n,t.merge),n.keyFn=!1===i?qn:be(i)?An(i):"function"==typeof i?i:n.keyFn,o&&Object.keys(o).forEach((function(t){var n=r.getFieldPolicy(e,t,!0),i=o[t]
if("function"==typeof i)n.read=i
else{var a=i.keyArgs,c=i.read,u=i.merge
n.keyFn=!1===a?Vn:be(a)?Rn(a):"function"==typeof a?a:n.keyFn,"function"==typeof c&&(n.read=c),s(n,u)}n.read&&n.merge&&(n.keyFn=n.keyFn||Vn)}))},e.prototype.setRootTypename=function(e,t){void 0===t&&(t=e)
var r="ROOT_"+e.toUpperCase(),n=this.rootTypenamesById[r]
t!==n&&((0,i.kG)(!n||n===e,5,e),n&&delete this.rootIdsByTypename[n],this.rootIdsByTypename[t]=r,this.rootTypenamesById[r]=t)},e.prototype.addPossibleTypes=function(e){var t=this
this.usingPossibleTypes=!0,Object.keys(e).forEach((function(r){t.getSupertypeSet(r,!0),e[r].forEach((function(e){t.getSupertypeSet(e,!0).add(r)
var n=e.match(un)
n&&n[0]===e||t.fuzzySubtypes.set(e,new RegExp(e))}))}))},e.prototype.getTypePolicy=function(e){var t=this
if(!nn.call(this.typePolicies,e)){var r=this.typePolicies[e]=Object.create(null)
r.fields=Object.create(null)
var i=this.supertypeMap.get(e)
!i&&this.fuzzySubtypes.size&&(i=this.getSupertypeSet(e,!0),this.fuzzySubtypes.forEach((function(r,n){if(r.test(e)){var o=t.supertypeMap.get(n)
o&&o.forEach((function(e){return i.add(e)}))}}))),i&&i.size&&i.forEach((function(e){var i=t.getTypePolicy(e),o=i.fields,s=(0,n._T)(i,["fields"])
Object.assign(r,s),Object.assign(r.fields,o)}))}var o=this.toBeAdded[e]
return o&&o.length&&o.splice(0).forEach((function(r){t.updateTypePolicy(e,r)})),this.typePolicies[e]},e.prototype.getFieldPolicy=function(e,t,r){if(e){var n=this.getTypePolicy(e).fields
return n[t]||r&&(n[t]=Object.create(null))}},e.prototype.getSupertypeSet=function(e,t){var r=this.supertypeMap.get(e)
return!r&&t&&this.supertypeMap.set(e,r=new Set),r},e.prototype.fragmentMatches=function(e,t,r,n){var o=this
if(!e.typeCondition)return!0
if(!t)return!1
var s=e.typeCondition.name.value
if(t===s)return!0
if(this.usingPossibleTypes&&this.supertypeMap.has(s))for(var a=this.getSupertypeSet(t,!0),c=[a],u=function(e){var t=o.getSupertypeSet(e,!1)
t&&t.size&&c.indexOf(t)<0&&c.push(t)},l=!(!r||!this.fuzzySubtypes.size),f=!1,h=0;h<c.length;++h){var p=c[h]
if(p.has(s))return a.has(s)||(f&&!1!==globalThis.__DEV__&&i.kG.warn(6,t,s),a.add(s)),!0
p.forEach(u),l&&h===c.length-1&&fn(e.selectionSet,r,n)&&(l=!1,f=!0,this.fuzzySubtypes.forEach((function(e,r){var n=t.match(e)
n&&n[0]===t&&u(r)})))}return!1},e.prototype.hasKeyArgs=function(e,t){var r=this.getFieldPolicy(e,t,!1)
return!(!r||!r.keyFn)},e.prototype.getStoreFieldName=function(e){var t,r=e.typename,n=e.fieldName,i=this.getFieldPolicy(r,n,!1),o=i&&i.keyFn
if(o&&r)for(var s={typename:r,fieldName:n,field:e.field||null,variables:e.variables},a=Mn(e);o;){var c=o(a,s)
if(!be(c)){t=c||n
break}o=Rn(c)}return void 0===t&&(t=e.field?function(e,t){var r=null
e.directives&&(r={},e.directives.forEach((function(e){r[e.name.value]={},e.arguments&&e.arguments.forEach((function(n){var i=n.name,o=n.value
return A(r[e.name.value],i,o,t)}))})))
var n=null
return e.arguments&&e.arguments.length&&(n={},e.arguments.forEach((function(e){var r=e.name,i=e.value
return A(n,r,i,t)}))),C(e.name.value,n,r)}(e.field,e.variables):C(n,Mn(e))),!1===t?n:n===ln(t)?t:n+":"+t},e.prototype.readField=function(e,t){var r=e.from
if(r&&(e.field||e.fieldName)){if(void 0===e.typename){var n=t.store.getFieldValue(r,"__typename")
n&&(e.typename=n)}var i=this.getStoreFieldName(e),o=ln(i),s=t.store.getFieldValue(r,i),a=this.getFieldPolicy(e.typename,o,!1),c=a&&a.read
if(c){var u=Gn(this,r,e,t,t.store.getStorage(N(r)?r.__ref:r,i))
return Lr.withValue(this.cache,c,[s,u])}return s}},e.prototype.getReadFunction=function(e,t){var r=this.getFieldPolicy(e,t,!1)
return r&&r.read},e.prototype.getMergeFunction=function(e,t,r){var n=this.getFieldPolicy(e,t,!1),i=n&&n.merge
return!i&&r&&(i=(n=this.getTypePolicy(r))&&n.merge),i},e.prototype.runMergeFunction=function(e,t,r,n,i){var o=r.field,s=r.typename,a=r.merge
return a===Qn?Kn(n.store)(e,t):a===Bn?t:(n.overwrite&&(e=void 0),a(e,t,Gn(this,void 0,{typename:s,fieldName:o.name.value,field:o,variables:n.variables},n,i||Object.create(null))))},e}()
function Gn(e,t,r,n,i){var o=e.getStoreFieldName(r),s=ln(o),a=r.variables||n.variables,c=n.store,u=c.toReference,l=c.canRead
return{args:Mn(r),field:r.field||null,fieldName:s,storeFieldName:o,variables:a,isReference:N,toReference:u,storage:i,cache:e.cache,canRead:l,readField:function(){return e.readField(zn(arguments,t,a),n)},mergeObjects:Kn(n.store)}}function zn(e,t,r){var o,s=e[0],a=e[1],c=e.length
return"string"==typeof s?o={fieldName:s,from:c>1?a:t}:(o=(0,n.pi)({},s),nn.call(o,"from")||(o.from=t)),!1!==globalThis.__DEV__&&void 0===o.from&&!1!==globalThis.__DEV__&&i.kG.warn(7,(0,In.v)(Array.from(e))),void 0===o.variables&&(o.variables=r),o}function Kn(e){return function(t,r){if(be(t)||be(r))throw(0,i._K)(8)
if((0,T.s)(t)&&(0,T.s)(r)){var o=e.getFieldValue(t,"__typename"),s=e.getFieldValue(r,"__typename")
if(o&&s&&o!==s)return r
if(N(t)&&hn(r))return e.merge(t.__ref,r),t
if(hn(t)&&N(r))return e.merge(t,r.__ref),r
if(hn(t)&&hn(r))return(0,n.pi)((0,n.pi)({},t),r)}return r}}function Wn(e,t,r){var i="".concat(t).concat(r),o=e.flavors.get(i)
return o||e.flavors.set(i,o=e.clientOnly===t&&e.deferred===r?e:(0,n.pi)((0,n.pi)({},e),{clientOnly:t,deferred:r})),o}var Yn=function(){function e(e,t,r){this.cache=e,this.reader=t,this.fragments=r}return e.prototype.writeToStore=function(e,t){var r=this,o=t.query,s=t.result,a=t.dataId,c=t.variables,u=t.overwrite,l=Q(o),f=new _e
c=(0,n.pi)((0,n.pi)({},K(l)),c)
var h=(0,n.pi)((0,n.pi)({store:e,written:Object.create(null),merge:function(e,t){return f.merge(e,t)},variables:c,varString:mt(c)},pn(o,this.fragments)),{overwrite:!!u,incomingById:new Map,clientOnly:!1,deferred:!1,flavors:new Map}),p=this.processSelectionSet({result:s||Object.create(null),dataId:a,selectionSet:l.selectionSet,mergeTree:{map:new Map},context:h})
if(!N(p))throw(0,i._K)(11,s)
return h.incomingById.forEach((function(t,n){var o=t.storeObject,s=t.mergeTree,a=t.fieldNodeSet,c=x(n)
if(s&&s.map.size){var u=r.applyMerges(s,c,o,h)
if(N(u))return
o=u}if(!1!==globalThis.__DEV__&&!h.overwrite){var l=Object.create(null)
a.forEach((function(e){e.selectionSet&&(l[e.name.value]=!0)})),Object.keys(o).forEach((function(e){(function(e){return!0===l[ln(e)]})(e)&&!function(e){var t=s&&s.map.get(e)
return Boolean(t&&t.info&&t.info.merge)}(e)&&function(e,t,r,n){var o=function(e){var t=n.getFieldValue(e,r)
return"object"==typeof t&&t},s=o(e)
if(s){var a=o(t)
if(a&&!N(s)&&!(0,ct.D)(s,a)&&!Object.keys(s).every((function(e){return void 0!==n.getFieldValue(a,e)}))){var c=n.getFieldValue(e,"__typename")||n.getFieldValue(t,"__typename"),u=ln(r),l="".concat(c,".").concat(u)
if(!ei.has(l)){ei.add(l)
var f=[]
be(s)||be(a)||[s,a].forEach((function(e){var t=n.getFieldValue(e,"__typename")
"string"!=typeof t||f.includes(t)||f.push(t)})),!1!==globalThis.__DEV__&&i.kG.warn(14,u,c,f.length?"either ensure all objects of type "+f.join(" and ")+" have an ID or a custom merge function, or ":"",l,s,a)}}}}(c,o,e,h.store)}))}e.merge(n,o)})),e.retain(p.__ref),p},e.prototype.processSelectionSet=function(e){var t=this,r=e.dataId,o=e.result,s=e.selectionSet,a=e.context,c=e.mergeTree,u=this.cache.policies,l=Object.create(null),f=r&&u.rootTypenamesById[r]||M(o,s,a.fragmentMap)||r&&a.store.get(r,"__typename")
"string"==typeof f&&(l.__typename=f)
var h=function(){var e=zn(arguments,l,a.variables)
if(N(e.from)){var t=a.incomingById.get(e.from.__ref)
if(t){var r=u.readField((0,n.pi)((0,n.pi)({},e),{from:t.storeObject}),a)
if(void 0!==r)return r}}return u.readField(e,a)},p=new Set
this.flattenFields(s,o,a,f).forEach((function(e,r){var n,s=L(r),a=o[s]
if(p.add(r),void 0!==a){var d=u.getStoreFieldName({typename:f,fieldName:r.name.value,field:r,variables:e.variables}),v=$n(c,d),y=t.processFieldValue(a,r,r.selectionSet?Wn(e,!1,!1):e,v),m=void 0
r.selectionSet&&(N(y)||hn(y))&&(m=h("__typename",y))
var b=u.getMergeFunction(f,r.name.value,m)
b?v.info={field:r,typename:f,merge:b}:Zn(c,d),l=e.merge(l,((n={})[d]=y,n))}else!1===globalThis.__DEV__||e.clientOnly||e.deferred||rt.added(r)||u.getReadFunction(f,r.name.value)||!1!==globalThis.__DEV__&&i.kG.error(12,L(r),o)}))
try{var d=u.identify(o,{typename:f,selectionSet:s,fragmentMap:a.fragmentMap,storeObject:l,readField:h}),v=d[0],y=d[1]
r=r||v,y&&(l=a.merge(l,y))}catch(e){if(!r)throw e}if("string"==typeof r){var m=x(r),b=a.written[r]||(a.written[r]=[])
if(b.indexOf(s)>=0)return m
if(b.push(s),this.reader&&this.reader.isFresh(o,m,s,a))return m
var g=a.incomingById.get(r)
return g?(g.storeObject=a.merge(g.storeObject,l),g.mergeTree=Hn(g.mergeTree,c),p.forEach((function(e){return g.fieldNodeSet.add(e)}))):a.incomingById.set(r,{storeObject:l,mergeTree:Xn(c)?void 0:c,fieldNodeSet:p}),m}return l},e.prototype.processFieldValue=function(e,t,r,n){var i=this
return t.selectionSet&&null!==e?be(e)?e.map((function(e,o){var s=i.processFieldValue(e,t,r,$n(n,o))
return Zn(n,o),s})):this.processSelectionSet({result:e,selectionSet:t.selectionSet,context:r,mergeTree:n}):!1!==globalThis.__DEV__?Rt(e):e},e.prototype.flattenFields=function(e,t,r,n){void 0===n&&(n=M(t,e,r.fragmentMap))
var o=new Map,s=this.cache.policies,a=new pt(!1)
return function e(c,u){var l=a.lookup(c,u.clientOnly,u.deferred)
l.visited||(l.visited=!0,c.selections.forEach((function(a){if(se(a,r.variables)){var c=u.clientOnly,l=u.deferred
if(c&&l||!ge(a.directives)||a.directives.forEach((function(e){var t=e.name.value
if("client"===t&&(c=!0),"defer"===t){var n=j(e,r.variables)
n&&!1===n.if||(l=!0)}})),q(a)){var f=o.get(a)
f&&(c=c&&f.clientOnly,l=l&&f.deferred),o.set(a,Wn(r,c,l))}else{var h=I(a,r.lookupFragment)
if(!h&&a.kind===re.h.FRAGMENT_SPREAD)throw(0,i._K)(13,a.name.value)
h&&s.fragmentMatches(h,n,t,r.variables)&&e(h.selectionSet,Wn(r,c,l))}}})))}(e,r),o},e.prototype.applyMerges=function(e,t,r,o,s){var a,c=this
if(e.map.size&&!N(r)){var u,l=be(r)||!N(t)&&!hn(t)?void 0:t,f=r
l&&!s&&(s=[N(l)?l.__ref:l])
var h=function(e,t){return be(e)?"number"==typeof t?e[t]:void 0:o.store.getFieldValue(e,String(t))}
e.map.forEach((function(e,t){var r=h(l,t),n=h(f,t)
if(void 0!==n){s&&s.push(t)
var a=c.applyMerges(e,r,n,o,s)
a!==n&&(u=u||new Map).set(t,a),s&&(0,i.kG)(s.pop()===t)}})),u&&(r=be(f)?f.slice(0):(0,n.pi)({},f),u.forEach((function(e,t){r[t]=e})))}return e.info?this.cache.policies.runMergeFunction(t,r,e.info,o,s&&(a=o.store).getStorage.apply(a,s)):r},e}(),Jn=[]
function $n(e,t){var r=e.map
return r.has(t)||r.set(t,Jn.pop()||{map:new Map}),r.get(t)}function Hn(e,t){if(e===t||!t||Xn(t))return e
if(!e||Xn(e))return t
var r=e.info&&t.info?(0,n.pi)((0,n.pi)({},e.info),t.info):e.info||t.info,i=e.map.size&&t.map.size,o={info:r,map:i?new Map:e.map.size?e.map:t.map}
if(i){var s=new Set(t.map.keys())
e.map.forEach((function(e,r){o.map.set(r,Hn(e,t.map.get(r))),s.delete(r)})),s.forEach((function(r){o.map.set(r,Hn(t.map.get(r),e.map.get(r)))}))}return o}function Xn(e){return!e||!(e.info||e.map.size)}function Zn(e,t){var r=e.map,n=r.get(t)
n&&Xn(n)&&(Jn.push(n),r.delete(t))}var ei=new Set,ti=function(e){function t(t){void 0===t&&(t={})
var r=e.call(this)||this
return r.watches=new Set,r.addTypenameTransform=new Et(rt),r.assumeImmutableResults=!0,r.makeVar=Qr,r.txCount=0,r.config=function(e){return Nt(an,e)}(t),r.addTypename=!!r.config.addTypename,r.policies=new Un({cache:r,dataIdFromObject:r.config.dataIdFromObject,possibleTypes:r.config.possibleTypes,typePolicies:r.config.typePolicies}),r.init(),r}return(0,n.ZT)(t,e),t.prototype.init=function(){var e=this.data=new mn.Root({policies:this.policies,resultCaching:this.config.resultCaching})
this.optimisticData=e.stump,this.resetResultCache()},t.prototype.resetResultCache=function(e){var t=this,r=this.storeReader,n=this.config.fragments
this.storeWriter=new Yn(this,this.storeReader=new Sn({cache:this,addTypename:this.addTypename,resultCacheMaxSize:this.config.resultCacheMaxSize,canonizeResults:cn(this.config),canon:e?void 0:r&&r.canon,fragments:n}),n),this.maybeBroadcastWatch=jr((function(e,r){return t.broadcastWatch(e,r)}),{max:this.config.resultCacheMaxSize,makeCacheKey:function(e){var r=e.optimistic?t.optimisticData:t.data
if(_n(r)){var n=e.optimistic,i=e.id,o=e.variables
return r.makeCacheKey(e.query,e.callback,mt({optimistic:n,id:i,variables:o}))}}}),new Set([this.data.group,this.optimisticData.group]).forEach((function(e){return e.resetCaching()}))},t.prototype.restore=function(e){return this.init(),e&&this.data.replace(e),this},t.prototype.extract=function(e){return void 0===e&&(e=!1),(e?this.optimisticData:this.data).extract()},t.prototype.read=function(e){var t=e.returnPartialData,r=void 0!==t&&t
try{return this.storeReader.diffQueryAgainstStore((0,n.pi)((0,n.pi)({},e),{store:e.optimistic?this.optimisticData:this.data,config:this.config,returnPartialData:r})).result||null}catch(e){if(e instanceof tn)return null
throw e}},t.prototype.write=function(e){try{return++this.txCount,this.storeWriter.writeToStore(this.data,e)}finally{--this.txCount||!1===e.broadcast||this.broadcastWatches()}},t.prototype.modify=function(e){if(nn.call(e,"id")&&!e.id)return!1
var t=e.optimistic?this.optimisticData:this.data
try{return++this.txCount,t.modify(e.id||"ROOT_QUERY",e.fields)}finally{--this.txCount||!1===e.broadcast||this.broadcastWatches()}},t.prototype.diff=function(e){return this.storeReader.diffQueryAgainstStore((0,n.pi)((0,n.pi)({},e),{store:e.optimistic?this.optimisticData:this.data,rootId:e.id||"ROOT_QUERY",config:this.config}))},t.prototype.watch=function(e){var t,r=this
return this.watches.size||qr(t=this).vars.forEach((function(e){return e.attachCache(t)})),this.watches.add(e),e.immediate&&this.maybeBroadcastWatch(e),function(){r.watches.delete(e)&&!r.watches.size&&Vr(r),r.maybeBroadcastWatch.forget(e)}},t.prototype.gc=function(e){mt.reset()
var t=this.optimisticData.gc()
return e&&!this.txCount&&(e.resetResultCache?this.resetResultCache(e.resetResultIdentities):e.resetResultIdentities&&this.storeReader.resetCanon()),t},t.prototype.retain=function(e,t){return(t?this.optimisticData:this.data).retain(e)},t.prototype.release=function(e,t){return(t?this.optimisticData:this.data).release(e)},t.prototype.identify=function(e){if(N(e))return e.__ref
try{return this.policies.identify(e)[0]}catch(e){!1!==globalThis.__DEV__&&i.kG.warn(e)}},t.prototype.evict=function(e){if(!e.id){if(nn.call(e,"id"))return!1
e=(0,n.pi)((0,n.pi)({},e),{id:"ROOT_QUERY"})}try{return++this.txCount,this.optimisticData.evict(e,this.data)}finally{--this.txCount||!1===e.broadcast||this.broadcastWatches()}},t.prototype.reset=function(e){var t=this
return this.init(),mt.reset(),e&&e.discardWatches?(this.watches.forEach((function(e){return t.maybeBroadcastWatch.forget(e)})),this.watches.clear(),Vr(this)):this.broadcastWatches(),Promise.resolve()},t.prototype.removeOptimistic=function(e){var t=this.optimisticData.removeLayer(e)
t!==this.optimisticData&&(this.optimisticData=t,this.broadcastWatches())},t.prototype.batch=function(e){var t,r=this,i=e.update,o=e.optimistic,s=void 0===o||o,a=e.removeOptimistic,c=e.onWatchUpdated,u=function(e){var n=r,o=n.data,s=n.optimisticData;++r.txCount,e&&(r.data=r.optimisticData=e)
try{return t=i(r)}finally{--r.txCount,r.data=o,r.optimisticData=s}},l=new Set
return c&&!this.txCount&&this.broadcastWatches((0,n.pi)((0,n.pi)({},e),{onWatchUpdated:function(e){return l.add(e),!1}})),"string"==typeof s?this.optimisticData=this.optimisticData.addLayer(s,u):!1===s?u(this.data):u(),"string"==typeof a&&(this.optimisticData=this.optimisticData.removeLayer(a)),c&&l.size?(this.broadcastWatches((0,n.pi)((0,n.pi)({},e),{onWatchUpdated:function(e,t){var r=c.call(this,e,t)
return!1!==r&&l.delete(e),r}})),l.size&&l.forEach((function(e){return r.maybeBroadcastWatch.dirty(e)}))):this.broadcastWatches(e),t},t.prototype.performTransaction=function(e,t){return this.batch({update:e,optimistic:t||null!==t})},t.prototype.transformDocument=function(e){return this.addTypenameToDocument(this.addFragmentsToDocument(e))},t.prototype.broadcastWatches=function(e){var t=this
this.txCount||this.watches.forEach((function(r){return t.maybeBroadcastWatch(r,e)}))},t.prototype.addFragmentsToDocument=function(e){var t=this.config.fragments
return t?t.transform(e):e},t.prototype.addTypenameToDocument=function(e){return this.addTypename?this.addTypenameTransform.transformDocument(e):e},t.prototype.broadcastWatch=function(e,t){var r=e.lastDiff,n=this.diff(e)
t&&(e.optimistic&&"string"==typeof t.optimistic&&(n.fromOptimisticTransaction=!0),t.onWatchUpdated&&!1===t.onWatchUpdated.call(this,e,n,r))||r&&(0,ct.D)(r.result,n.result)||e.callback(e.lastDiff=n,r)},t}(en),ri=$.empty,ni=$.from,ii=$.split,oi=$.concat,si=function(){if("undefined"==typeof AbortController)return{controller:!1,signal:!1}
var e=new AbortController
return{controller:e,signal:e.signal}}
function ai(e){var t=!1
return new Promise((function(r,n){e.subscribe({next:function(e){t?!1!==globalThis.__DEV__&&i.kG.warn(42):(t=!0,r(e))},error:n})}))}function ci(e){return new _((function(t){e.then((function(e){t.next(e),t.complete()})).catch(t.error.bind(t))}))}var ui=r(845),li=r(150);(0,ui.U6)(!1!==globalThis.__DEV__?"log":"silent")},277:(e,t,r)=>{var n
function i(e){return!!e&&e<7}function o(e){return 7===e||8===e}r.d(t,{Ie:()=>n,Jp:()=>o,Oj:()=>i}),function(e){e[e.loading=1]="loading",e[e.setVariables=2]="setVariables",e[e.fetchMore=3]="fetchMore",e[e.refetch=4]="refetch",e[e.poll=6]="poll",e[e.ready=7]="ready",e[e.error=8]="error"}(n||(n={}))},313:(e,t,r)=>{r.d(t,{MS:()=>a,YG:()=>o,cA:()=>c,ls:()=>s})
var n=r(204),i=(r(562),r(609)),o=Symbol()
function s(e){return!!e.extensions&&Array.isArray(e.extensions[o])}function a(e){return e.hasOwnProperty("graphQLErrors")}var c=function(e){function t(r){var o,s,a=r.graphQLErrors,c=r.protocolErrors,u=r.clientErrors,l=r.networkError,f=r.errorMessage,h=r.extraInfo,p=e.call(this,f)||this
return p.name="ApolloError",p.graphQLErrors=a||[],p.protocolErrors=c||[],p.clientErrors=u||[],p.networkError=l||null,p.message=f||(o=p,s=(0,n.ev)((0,n.ev)((0,n.ev)([],o.graphQLErrors,!0),o.clientErrors,!0),o.protocolErrors,!0),o.networkError&&s.push(o.networkError),s.map((function(e){return(0,i.s)(e)&&e.message||"Error message not found."})).join("\n")),p.extraInfo=h,p.__proto__=t.prototype,p}return(0,n.ZT)(t,e),t}(Error)},701:(e,t,r)=>{r.d(t,{X:()=>i})
var n=new Map
function i(e){var t=n.get(e)||1
return n.set(e,t+1),"".concat(e,":").concat(t,":").concat(Math.random().toString(36).slice(2))}},609:(e,t,r)=>{function n(e){return null!==e&&"object"==typeof e}r.d(t,{s:()=>n})},407:(e,t,r)=>{r.d(t,{v:()=>i})
var n=r(701)
function i(e,t){void 0===t&&(t=0)
var r=(0,n.X)("stringifyForDisplay")
return JSON.stringify(e,(function(e,t){return void 0===t?r:t}),t).split(JSON.stringify(r)).join("<undefined>")}},562:(e,t,r)=>{r.d(t,{kG:()=>u,wY:()=>o,_K:()=>l})
var n=r(845),i=r(112)
function o(e){try{return e()}catch(e){}}const s=o((function(){return globalThis}))||o((function(){return window}))||o((function(){return self}))||o((function(){return global}))||o((function(){return o.constructor("return this")()}))
var a=r(407)
function c(e){return function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n]
if("number"==typeof t){var i=t;(t=p(i))||(t=d(i,r),r=[])}e.apply(void 0,[t].concat(r))}}var u=Object.assign((function(e,t){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i]
e||(0,n.kG)(e,p(t,r)||d(t,r))}),{debug:c(n.kG.debug),log:c(n.kG.log),warn:c(n.kG.warn),error:c(n.kG.error)})
function l(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r]
return new n.ej(p(e,t)||d(e,t))}var f=Symbol.for("ApolloErrorMessageHandler_"+i.i)
function h(e){return"string"==typeof e?e:(0,a.v)(e,2).slice(0,1e3)}function p(e,t){if(void 0===t&&(t=[]),e)return s[f]&&s[f](e,t.map(h))}function d(e,t){if(void 0===t&&(t=[]),e)return"An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({version:i.i,message:e,args:t.map(h)})))}globalThis.__DEV__},112:(e,t,r)=>{r.d(t,{i:()=>n})
var n="3.8.8"},929:(e,t,r)=>{r.d(t,{D:()=>a,Z:()=>c})
const{toString:n,hasOwnProperty:i}=Object.prototype,o=Function.prototype.toString,s=new Map
function a(e,t){try{return u(e,t)}finally{s.clear()}}const c=a
function u(e,t){if(e===t)return!0
const r=n.call(e)
if(r!==n.call(t))return!1
switch(r){case"[object Array]":if(e.length!==t.length)return!1
case"[object Object]":{if(p(e,t))return!0
const r=l(e),n=l(t),o=r.length
if(o!==n.length)return!1
for(let e=0;e<o;++e)if(!i.call(t,r[e]))return!1
for(let i=0;i<o;++i){const n=r[i]
if(!u(e[n],t[n]))return!1}return!0}case"[object Error]":return e.name===t.name&&e.message===t.message
case"[object Number]":if(e!=e)return t!=t
case"[object Boolean]":case"[object Date]":return+e==+t
case"[object RegExp]":case"[object String]":return e==`${t}`
case"[object Map]":case"[object Set]":{if(e.size!==t.size)return!1
if(p(e,t))return!0
const n=e.entries(),i="[object Map]"===r
for(;;){const e=n.next()
if(e.done)break
const[r,o]=e.value
if(!t.has(r))return!1
if(i&&!u(o,t.get(r)))return!1}return!0}case"[object Uint16Array]":case"[object Uint8Array]":case"[object Uint32Array]":case"[object Int32Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object ArrayBuffer]":e=new Uint8Array(e),t=new Uint8Array(t)
case"[object DataView]":{let r=e.byteLength
if(r===t.byteLength)for(;r--&&e[r]===t[r];);return-1===r}case"[object AsyncFunction]":case"[object GeneratorFunction]":case"[object AsyncGeneratorFunction]":case"[object Function]":{const r=o.call(e)
return r===o.call(t)&&!function(e,t){const r=e.length-t.length
return r>=0&&e.indexOf(t,r)===r}(r,h)}}return!1}function l(e){return Object.keys(e).filter(f,e)}function f(e){return void 0!==this[e]}const h="{ [native code] }"
function p(e,t){let r=s.get(e)
if(r){if(r.has(t))return!0}else s.set(e,r=new Set)
return r.add(t),!1}},345:(e,t,r)=>{function n(e,t){if(!Boolean(e))throw new Error(t)}r.d(t,{a:()=>n})},616:(e,t,r)=>{r.d(t,{X:()=>o})
const n=10,i=2
function o(e){return s(e,[])}function s(e,t){switch(typeof e){case"string":return JSON.stringify(e)
case"function":return e.name?`[function ${e.name}]`:"[function]"
case"object":return function(e,t){if(null===e)return"null"
if(t.includes(e))return"[Circular]"
const r=[...t,e]
if(function(e){return"function"==typeof e.toJSON}(e)){const t=e.toJSON()
if(t!==e)return"string"==typeof t?t:s(t,r)}else if(Array.isArray(e))return function(e,t){if(0===e.length)return"[]"
if(t.length>i)return"[Array]"
const r=Math.min(n,e.length),o=e.length-r,a=[]
for(let n=0;n<r;++n)a.push(s(e[n],t))
return 1===o?a.push("... 1 more item"):o>1&&a.push(`... ${o} more items`),"["+a.join(", ")+"]"}(e,r)
return function(e,t){const r=Object.entries(e)
if(0===r.length)return"{}"
if(t.length>i)return"["+function(e){const t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"")
if("Object"===t&&"function"==typeof e.constructor){const t=e.constructor.name
if("string"==typeof t&&""!==t)return t}return t}(e)+"]"
const n=r.map((([e,r])=>e+": "+s(r,t)))
return"{ "+n.join(", ")+" }"}(e,r)}(e,t)
default:return String(e)}}},859:(e,t,r)=>{r.d(t,{UG:()=>a,WU:()=>i,Ye:()=>n,h8:()=>o,ku:()=>c})
class n{constructor(e,t,r){this.start=e.start,this.end=t.end,this.startToken=e,this.endToken=t,this.source=r}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class i{constructor(e,t,r,n,i,o){this.kind=e,this.start=t,this.end=r,this.line=n,this.column=i,this.value=o,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const o={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},s=new Set(Object.keys(o))
function a(e){const t=null==e?void 0:e.kind
return"string"==typeof t&&s.has(t)}var c
!function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"}(c||(c={}))},614:(e,t,r)=>{r.d(t,{LZ:()=>s,wv:()=>i})
var n=r(528)
function i(e){var t
let r=Number.MAX_SAFE_INTEGER,n=null,i=-1
for(let a=0;a<e.length;++a){var s
const t=e[a],c=o(t)
c!==t.length&&(n=null!==(s=n)&&void 0!==s?s:a,i=a,0!==a&&c<r&&(r=c))}return e.map(((e,t)=>0===t?e:e.slice(r))).slice(null!==(t=n)&&void 0!==t?t:0,i+1)}function o(e){let t=0
for(;t<e.length&&(0,n.FD)(e.charCodeAt(t));)++t
return t}function s(e,t){const r=e.replace(/"""/g,'\\"""'),i=r.split(/\r\n|[\n\r]/g),o=1===i.length,s=i.length>1&&i.slice(1).every((e=>0===e.length||(0,n.FD)(e.charCodeAt(0)))),a=r.endsWith('\\"""'),c=e.endsWith('"')&&!a,u=e.endsWith("\\"),l=c||u,f=!(null!=t&&t.minimize)&&(!o||e.length>70||l||s||a)
let h=""
const p=o&&(0,n.FD)(e.charCodeAt(0))
return(f&&!p||s)&&(h+="\n"),h+=r,(f||l)&&(h+="\n"),'"""'+h+'"""'}},528:(e,t,r)=>{function n(e){return 9===e||32===e}function i(e){return e>=48&&e<=57}function o(e){return e>=97&&e<=122||e>=65&&e<=90}function s(e){return o(e)||95===e}function a(e){return o(e)||i(e)||95===e}r.d(t,{FD:()=>n,HQ:()=>a,LQ:()=>s,X1:()=>i})},659:(e,t,r)=>{var n
r.d(t,{h:()=>n}),function(e){e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"}(n||(n={}))},845:(e,t,r)=>{r.d(t,{U6:()=>h,ej:()=>a,kG:()=>c})
var n=r(204),i="Invariant Violation",o=Object.setPrototypeOf,s=void 0===o?function(e,t){return e.__proto__=t,e}:o,a=function(e){function t(r){void 0===r&&(r=i)
var n=e.call(this,"number"==typeof r?i+": "+r+" (see https://github.com/apollographql/invariant-packages)":r)||this
return n.framesToPop=1,n.name=i,s(n,t.prototype),n}return(0,n.ZT)(t,e),t}(Error)
function c(e,t){if(!e)throw new a(t)}var u=["debug","log","warn","error","silent"],l=u.indexOf("log")
function f(e){return function(){if(u.indexOf(e)>=l)return(console[e]||console.log).apply(console,arguments)}}function h(e){var t=u[l]
return l=Math.max(0,u.indexOf(e)),t}!function(e){e.debug=f("debug"),e.log=f("log"),e.warn=f("warn"),e.error=f("error")}(c||(c={}))},204:(e,t,r)=>{r.d(t,{Jh:()=>c,ZT:()=>i,_T:()=>s,ev:()=>u,mG:()=>a,pi:()=>o})
var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)}
function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},o.apply(this,arguments)}
function s(e,t){var r={}
for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function a(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{c(n.next(e))}catch(e){o(e)}}function a(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t
e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))}function c(e,t){var r,n,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function a(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.")
for(;o&&(o=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i
switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a
break
case 4:return s.label++,{value:a[1],done:!1}
case 5:s.label++,n=a[1],a=[0]
continue
case 7:a=s.ops.pop(),s.trys.pop()
continue
default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){s=0
continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1]
break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a
break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a)
break}i[2]&&s.ops.pop(),s.trys.pop()
continue}a=t.call(e,s)}catch(e){a=[6,e],n=0}finally{r=i=0}if(5&a[0])throw a[1]
return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}function u(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i])
return e.concat(n||Array.prototype.slice.call(t))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError}}])
