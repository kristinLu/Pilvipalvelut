import{r as a}from"./react-ozPE3UE_.js";import{i as v,g as k,r as M,j as U,p as D,m as z,A as _,s as W,a as A}from"./@remix-run-Dql683DL.js";/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function y(){return y=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},y.apply(this,arguments)}const I=a.createContext(null),V=a.createContext(null),R=a.createContext(null),N=a.createContext(null),x=a.createContext({outlet:null,matches:[],isDataRoute:!1}),J=a.createContext(null);function b(){return a.useContext(N)!=null}function L(){return b()||v(!1),a.useContext(N).location}function T(t){a.useContext(R).static||a.useLayoutEffect(t)}function q(){let{isDataRoute:t}=a.useContext(x);return t?le():G()}function G(){b()||v(!1);let t=a.useContext(I),{basename:e,future:r,navigator:n}=a.useContext(R),{matches:i}=a.useContext(x),{pathname:u}=L(),l=JSON.stringify(k(i,r.v7_relativeSplatPath)),p=a.useRef(!1);return T(()=>{p.current=!0}),a.useCallback(function(f,s){if(s===void 0&&(s={}),!p.current)return;if(typeof f=="number"){n.go(f);return}let o=M(f,JSON.parse(l),u,s.relative==="path");t==null&&e!=="/"&&(o.pathname=o.pathname==="/"?e:U([e,o.pathname])),(s.replace?n.replace:n.push)(o,s.state,s)},[e,n,l,u,t])}const K=a.createContext(null);function Q(t){let e=a.useContext(x).outlet;return e&&a.createElement(K.Provider,{value:t},e)}function X(t,e){return Y(t,e)}function Y(t,e,r,n){b()||v(!1);let{navigator:i}=a.useContext(R),{matches:u}=a.useContext(x),l=u[u.length-1],p=l?l.params:{};l&&l.pathname;let d=l?l.pathnameBase:"/";l&&l.route;let f=L(),s;if(e){var o;let c=typeof e=="string"?D(e):e;d==="/"||(o=c.pathname)!=null&&o.startsWith(d)||v(!1),s=c}else s=f;let h=s.pathname||"/",m=h;if(d!=="/"){let c=d.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(c.length).join("/")}let g=z(t,{pathname:m}),C=te(g&&g.map(c=>Object.assign({},c,{params:Object.assign({},p,c.params),pathname:U([d,i.encodeLocation?i.encodeLocation(c.pathname).pathname:c.pathname]),pathnameBase:c.pathnameBase==="/"?d:U([d,i.encodeLocation?i.encodeLocation(c.pathnameBase).pathname:c.pathnameBase])})),u,r,n);return e&&C?a.createElement(N.Provider,{value:{location:y({pathname:"/",search:"",hash:"",state:null,key:"default"},s),navigationType:_.Pop}},C):C}function Z(){let t=oe(),e=A(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return a.createElement(a.Fragment,null,a.createElement("h2",null,"Unexpected Application Error!"),a.createElement("h3",{style:{fontStyle:"italic"}},e),r?a.createElement("pre",{style:i},r):null,null)}const $=a.createElement(Z,null);class H extends a.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error!==void 0?a.createElement(x.Provider,{value:this.props.routeContext},a.createElement(J.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ee(t){let{routeContext:e,match:r,children:n}=t,i=a.useContext(I);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),a.createElement(x.Provider,{value:e},n)}function te(t,e,r,n){var i;if(e===void 0&&(e=[]),r===void 0&&(r=null),n===void 0&&(n=null),t==null){var u;if((u=r)!=null&&u.errors)t=r.matches;else return null}let l=t,p=(i=r)==null?void 0:i.errors;if(p!=null){let s=l.findIndex(o=>o.route.id&&(p==null?void 0:p[o.route.id]));s>=0||v(!1),l=l.slice(0,Math.min(l.length,s+1))}let d=!1,f=-1;if(r&&n&&n.v7_partialHydration)for(let s=0;s<l.length;s++){let o=l[s];if((o.route.HydrateFallback||o.route.hydrateFallbackElement)&&(f=s),o.route.id){let{loaderData:h,errors:m}=r,g=o.route.loader&&h[o.route.id]===void 0&&(!m||m[o.route.id]===void 0);if(o.route.lazy||g){d=!0,f>=0?l=l.slice(0,f+1):l=[l[0]];break}}}return l.reduceRight((s,o,h)=>{let m,g=!1,C=null,c=null;r&&(m=p&&o.route.id?p[o.route.id]:void 0,C=o.route.errorElement||$,d&&(f<0&&h===0?(ie("route-fallback",!1),g=!0,c=null):f===h&&(g=!0,c=o.route.hydrateFallbackElement||null)));let B=e.concat(l.slice(0,h+1)),F=()=>{let E;return m?E=C:g?E=c:o.route.Component?E=a.createElement(o.route.Component,null):o.route.element?E=o.route.element:E=s,a.createElement(ee,{match:o,routeContext:{outlet:s,matches:B,isDataRoute:r!=null},children:E})};return r&&(o.route.ErrorBoundary||o.route.errorElement||h===0)?a.createElement(H,{location:r.location,revalidation:r.revalidation,component:C,error:m,children:F(),routeContext:{outlet:null,matches:B,isDataRoute:!0}}):F()},null)}var S=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(S||{}),P=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(P||{});function re(t){let e=a.useContext(I);return e||v(!1),e}function ne(t){let e=a.useContext(V);return e||v(!1),e}function ae(t){let e=a.useContext(x);return e||v(!1),e}function w(t){let e=ae(),r=e.matches[e.matches.length-1];return r.route.id||v(!1),r.route.id}function oe(){var t;let e=a.useContext(J),r=ne(P.UseRouteError),n=w(P.UseRouteError);return e!==void 0?e:(t=r.errors)==null?void 0:t[n]}function le(){let{router:t}=re(S.UseNavigateStable),e=w(P.UseNavigateStable),r=a.useRef(!1);return T(()=>{r.current=!0}),a.useCallback(function(i,u){u===void 0&&(u={}),r.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,y({fromRouteId:e},u)))},[t,e])}const j={};function ie(t,e,r){!e&&!j[t]&&(j[t]=!0)}function de(t){let{to:e,replace:r,state:n,relative:i}=t;b()||v(!1);let{future:u,static:l}=a.useContext(R),{matches:p}=a.useContext(x),{pathname:d}=L(),f=q(),s=M(e,k(p,u.v7_relativeSplatPath),d,i==="path"),o=JSON.stringify(s);return a.useEffect(()=>f(JSON.parse(o),{replace:r,state:n,relative:i}),[f,o,i,r,n]),null}function fe(t){return Q(t.context)}function se(t){v(!1)}function pe(t){let{basename:e="/",children:r=null,location:n,navigationType:i=_.Pop,navigator:u,static:l=!1,future:p}=t;b()&&v(!1);let d=e.replace(/^\/*/,"/"),f=a.useMemo(()=>({basename:d,navigator:u,static:l,future:y({v7_relativeSplatPath:!1},p)}),[d,p,u,l]);typeof n=="string"&&(n=D(n));let{pathname:s="/",search:o="",hash:h="",state:m=null,key:g="default"}=n,C=a.useMemo(()=>{let c=W(s,d);return c==null?null:{location:{pathname:c,search:o,hash:h,state:m,key:g},navigationType:i}},[d,s,o,h,m,g,i]);return C==null?null:a.createElement(R.Provider,{value:f},a.createElement(N.Provider,{children:r,value:C}))}function ve(t){let{children:e,location:r}=t;return X(O(e),r)}new Promise(()=>{});function O(t,e){e===void 0&&(e=[]);let r=[];return a.Children.forEach(t,(n,i)=>{if(!a.isValidElement(n))return;let u=[...e,i];if(n.type===a.Fragment){r.push.apply(r,O(n.props.children,u));return}n.type!==se&&v(!1),!n.props.index||!n.props.children||v(!1);let l={id:n.props.id||u.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=O(n.props.children,u)),r.push(l)}),r}export{de as N,fe as O,pe as R,ve as a,se as b,q as u};
