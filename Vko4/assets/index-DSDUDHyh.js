import{r as n,j as e,a as A}from"./react-ozPE3UE_.js";import{c as L}from"./react-dom-B-UltLqB.js";import{H as N}from"./react-router-dom-BIkwS98u.js";import"./firebase-B7M99XvF.js";import{i as C,g as E,a as O,s as R}from"./@firebase-CnVTvAas.js";import{u as m,O as T,N as k,a as P,b as d}from"./react-router-BsySx_0_.js";import{s as j,A as I,T as B,a as p,B as v,b as x}from"./@mui-DlCRlU3x.js";import"./@babel-DYAsAt7o.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-DU41lQQs.js";import"./idb-BXWtuYvb.js";import"./tslib-BGVaTf34.js";import"./react-is-DcfIKM1A.js";import"./clsx-B-dksMZM.js";import"./@emotion-BFQlG5WQ.js";import"./hoist-non-react-statics-DQogQWOa.js";import"./stylis-NkKAe6Bn.js";import"./react-transition-group-hEX5ovL0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const M={apiKey:"AIzaSyCqXSUGGtitCjDX01x5HreMPYQy7Gv20LE",authDomain:"pilvi-react-6210b.firebaseapp.com",projectId:"pilvi-react-6210b",storageBucket:"pilvi-react-6210b.appspot.com",messagingSenderId:"250062694540",appId:"1:250062694540:web:d22c1400c4a36c246633a9"},y=C(M);E(y);const h=O(y),b=()=>{const[a,r]=n.useState(!1),[i,o]=n.useState(""),t=m();return n.useEffect(()=>{const s=h.onAuthStateChanged(c=>{c?(o(c.email||"Guest"),r(!0)):(o(""),r(!1),t("/"))});return()=>s()},[t]),{isAuthenticated:a,username:i}},G=j(I)({AppBar:{color:"secondary",position:"fixed",display:"flex",justifyContent:"space-between"}}),V=j(B)({"& .spacer":{flexGrow:1}}),F=()=>{const{username:a}=b(),r=m(),i=async()=>{try{await h.signOut(),r("/")}catch(o){console.error("Error logging out:",o)}};return e.jsx(G,{color:"secondary",children:e.jsxs(V,{children:[e.jsx("div",{className:"spacer"}),e.jsx(p,{variant:"h6",children:`Welcome, ${a}! `}),e.jsx("div",{style:{marginLeft:"1rem"},children:e.jsx(v,{variant:"outlined",color:"inherit",size:"large",onClick:i,children:"LOGOUT"})})]})})};function H(){const[a,r]=n.useState(0);return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(F,{})}),e.jsxs("div",{children:[e.jsx("a",{href:"https://vitejs.dev",target:"_blank",children:e.jsx("img",{src:"/Pilvipalvelut/Vko4/vite.svg",className:"logo",alt:"Vite logo"})}),e.jsx("a",{href:"https://react.dev",target:"_blank",children:e.jsx("img",{src:"/Pilvipalvelut/Vko4/react.svg",className:"logo react",alt:"React logo"})}),e.jsx("a",{href:"https://www.hiclipart.com/free-transparent-background-png-clipart-idhbw",target:"_blank",children:e.jsx("img",{src:"/hiclipart-cat-pic.png",className:"logo cat",alt:"Selfie logo"})})]}),e.jsx("h1",{children:"Vite + React + Selfie"}),e.jsxs("div",{className:"card",children:[e.jsxs("button",{onClick:()=>r(i=>i+1),children:["count is ",a]}),e.jsxs("p",{children:["Edit ",e.jsx("code",{children:"src/App.tsx"})," and save to test HMR"]})]}),e.jsx("p",{className:"read-the-docs",children:"Click on the Vite and React and Selfie logos to learn more"})]})}function W(){const a=m(),[r,i]=n.useState(""),[o,t]=n.useState(""),[s,c]=n.useState(""),[u,g]=n.useState(!1),S=async l=>{l.preventDefault();try{await R(h,r,o).then(f=>{const w=f.user;console.log("Tämä on esimerkkiviesti "+w.email),a("/homepage")})}catch{c("Väärä käyttäjätunnus ja/tai salasana"),g(!0)}};return n.useEffect(()=>{let l;return u&&(l=setTimeout(()=>{g(!1)},3e3)),()=>clearTimeout(l)},[u]),e.jsx("div",{children:e.jsxs("form",{onSubmit:S,children:[e.jsx(p,{variant:"h2",children:"Kirjaudu sisään"}),u&&e.jsx(p,{sx:{color:"red",marginTop:"1rem"},paragraph:!0,children:s}),e.jsx(x,{fullWidth:!0,required:!0,type:"email",margin:"normal",label:"Sähköposti",name:"email",value:r,onChange:l=>i(l.target.value)}),e.jsx(x,{fullWidth:!0,required:!0,type:"password",margin:"normal",label:"Salasana",name:"password",value:o,onChange:l=>t(l.target.value)}),e.jsx(v,{fullWidth:!0,size:"large",sx:{marginTop:"1rem"},variant:"outlined",type:"submit",children:"Kirjaudu sisään"})]})})}const q=()=>{const{isAuthenticated:a}=b();return a?e.jsx(T,{}):e.jsx(k,{to:"/homepage"})};function z(){return e.jsx(N,{basename:"/",children:e.jsxs(P,{children:[e.jsx(d,{path:"/",element:e.jsx(W,{})}),e.jsx(d,{path:"/homepage",element:e.jsx(q,{}),children:e.jsx(d,{path:"/homepage",element:e.jsx(H,{})})})]})})}L.createRoot(document.getElementById("root")).render(e.jsx(A.StrictMode,{children:e.jsx(z,{})}));
