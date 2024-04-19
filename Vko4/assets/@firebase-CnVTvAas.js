import{o as go}from"./idb-BXWtuYvb.js";import{_ as Un}from"./tslib-BGVaTf34.js";var Ri={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},mo=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],h=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(h>>10)),e[i++]=String.fromCharCode(56320+(h&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Er={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,h=r+2<t.length,c=h?t[r+2]:0,u=s>>2,p=(s&3)<<4|a>>4;let I=(a&15)<<2|c>>6,N=c&63;h||(N=64,o||(I=64)),i.push(n[u],n[p],n[I],n[N])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ir(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mo(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const p=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||p==null)throw new _o;const I=s<<2|a>>4;if(i.push(I),c!==64){const N=a<<4&240|c>>2;if(i.push(N),p!==64){const U=c<<6&192|p;i.push(U)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vo=function(t){const e=Ir(t);return Er.encodeByteArray(e,!0)},St=function(t){return vo(t).replace(/\./g,"")},wr=function(t){try{return Er.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=()=>yo().__FIREBASE_DEFAULTS__,Eo=()=>{if(typeof process>"u"||typeof Ri>"u")return;const t=Ri.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},wo=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wr(t[1]);return e&&JSON.parse(e)},xn=()=>{try{return Io()||Eo()||wo()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Tr=t=>{var e,n;return(n=(e=xn())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},To=t=>{const e=Tr(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Ar=()=>{var t;return(t=xn())===null||t===void 0?void 0:t.config},Sr=t=>{var e;return(e=xn())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[St(JSON.stringify(n)),St(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Co(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(O())}function Ro(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Po(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ko(){const t=O();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Oo(){try{return typeof indexedDB=="object"}catch{return!1}}function No(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo="FirebaseError";class Y extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=bo,Object.setPrototypeOf(this,Y.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nt.prototype.create)}}class nt{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?Do(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Y(r,a,i)}}function Do(t,e){return t.replace(Lo,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Lo=/\{\$([^}]+)}/g;function Mo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ct(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(Pi(s)&&Pi(o)){if(!Ct(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Pi(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Fe(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function je(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Uo(t,e){const n=new xo(t,e);return n.subscribe.bind(n)}class xo{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Fo(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=cn),r.error===void 0&&(r.error=cn),r.complete===void 0&&(r.complete=cn);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Fo(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function cn(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(t){return t&&t._delegate?t._delegate:t}class fe{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Ao;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ho(e))try{this.getOrInitializeService({instanceIdentifier:he})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=he){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=he){return this.instances.has(e)}getOptions(e=he){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Vo(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=he){return this.component?this.component.multipleInstances?e:he:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vo(t){return t===he?void 0:t}function Ho(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jo(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var m;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(m||(m={}));const $o={debug:m.DEBUG,verbose:m.VERBOSE,info:m.INFO,warn:m.WARN,error:m.ERROR,silent:m.SILENT},Wo=m.INFO,zo={[m.DEBUG]:"log",[m.VERBOSE]:"log",[m.INFO]:"info",[m.WARN]:"warn",[m.ERROR]:"error"},Go=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=zo[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fn{constructor(e){this.name=e,this._logLevel=Wo,this._logHandler=Go,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in m))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,m.DEBUG,...e),this._logHandler(this,m.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,m.VERBOSE,...e),this._logHandler(this,m.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,m.INFO,...e),this._logHandler(this,m.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,m.WARN,...e),this._logHandler(this,m.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,m.ERROR,...e),this._logHandler(this,m.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qo(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function qo(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yn="@firebase/app",ki="0.10.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe=new Fn("@firebase/app"),Jo="@firebase/app-compat",Xo="@firebase/analytics-compat",Yo="@firebase/analytics",Qo="@firebase/app-check-compat",Zo="@firebase/app-check",ea="@firebase/auth",ta="@firebase/auth-compat",na="@firebase/database",ia="@firebase/database-compat",ra="@firebase/functions",sa="@firebase/functions-compat",oa="@firebase/installations",aa="@firebase/installations-compat",ha="@firebase/messaging",ca="@firebase/messaging-compat",la="@firebase/performance",ua="@firebase/performance-compat",da="@firebase/remote-config",fa="@firebase/remote-config-compat",pa="@firebase/storage",ga="@firebase/storage-compat",ma="@firebase/firestore",_a="@firebase/firestore-compat",va="firebase",ya="10.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In="[DEFAULT]",Ia={[yn]:"fire-core",[Jo]:"fire-core-compat",[Yo]:"fire-analytics",[Xo]:"fire-analytics-compat",[Zo]:"fire-app-check",[Qo]:"fire-app-check-compat",[ea]:"fire-auth",[ta]:"fire-auth-compat",[na]:"fire-rtdb",[ia]:"fire-rtdb-compat",[ra]:"fire-fn",[sa]:"fire-fn-compat",[oa]:"fire-iid",[aa]:"fire-iid-compat",[ha]:"fire-fcm",[ca]:"fire-fcm-compat",[la]:"fire-perf",[ua]:"fire-perf-compat",[da]:"fire-rc",[fa]:"fire-rc-compat",[pa]:"fire-gcs",[ga]:"fire-gcs-compat",[ma]:"fire-fst",[_a]:"fire-fst-compat","fire-js":"fire-js",[va]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=new Map,Ea=new Map,En=new Map;function Oi(t,e){try{t.container.addComponent(e)}catch(n){pe.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Re(t){const e=t.name;if(En.has(e))return pe.debug(`There were multiple attempts to register component ${e}.`),!1;En.set(e,t);for(const n of Rt.values())Oi(n,t);for(const n of Ea.values())Oi(n,t);return!0}function jn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function W(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ie=new nt("app","Firebase",wa);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new fe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ie.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe=ya;function Aa(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:In,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw ie.create("bad-app-name",{appName:String(r)});if(n||(n=Ar()),!n)throw ie.create("no-options");const s=Rt.get(r);if(s){if(Ct(n,s.options)&&Ct(i,s.config))return s;throw ie.create("duplicate-app",{appName:r})}const o=new Bo(r);for(const h of En.values())o.addComponent(h);const a=new Ta(n,i,o);return Rt.set(r,a),a}function Cr(t=In){const e=Rt.get(t);if(!e&&t===In&&Ar())return Aa();if(!e)throw ie.create("no-app",{appName:t});return e}function ue(t,e,n){var i;let r=(i=Ia[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pe.warn(a.join(" "));return}Re(new fe(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa="firebase-heartbeat-database",Ca=1,We="firebase-heartbeat-store";let ln=null;function Rr(){return ln||(ln=go(Sa,Ca,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(We)}catch(n){console.warn(n)}}}}).catch(t=>{throw ie.create("idb-open",{originalErrorMessage:t.message})})),ln}async function Ra(t){try{const n=(await Rr()).transaction(We),i=await n.objectStore(We).get(Pr(t));return await n.done,i}catch(e){if(e instanceof Y)pe.warn(e.message);else{const n=ie.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pe.warn(n.message)}}}async function Ni(t,e){try{const i=(await Rr()).transaction(We,"readwrite");await i.objectStore(We).put(e,Pr(t)),await i.done}catch(n){if(n instanceof Y)pe.warn(n.message);else{const i=ie.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pe.warn(i.message)}}}function Pr(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa=1024,ka=30*24*60*60*1e3;class Oa{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ba(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=bi();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ka}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bi(),{heartbeatsToSend:i,unsentEntries:r}=Na(this._heartbeatsCache.heartbeats),s=St(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function bi(){return new Date().toISOString().substring(0,10)}function Na(t,e=Pa){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Di(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Di(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class ba{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Oo()?No().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ra(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ni(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ni(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Di(t){return St(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(t){Re(new fe("platform-logger",e=>new Ko(e),"PRIVATE")),Re(new fe("heartbeat",e=>new Oa(e),"PRIVATE")),ue(yn,ki,t),ue(yn,ki,"esm2017"),ue("fire-js","")}Da("");var La=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l,Vn=Vn||{},f=La||self;function jt(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function rt(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Ma(t){return Object.prototype.hasOwnProperty.call(t,un)&&t[un]||(t[un]=++Ua)}var un="closure_uid_"+(1e9*Math.random()>>>0),Ua=0;function xa(t,e,n){return t.call.apply(t.bind,arguments)}function Fa(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function P(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?P=xa:P=Fa,P.apply(null,arguments)}function mt(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function w(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(i,o)}}function se(){this.s=this.s,this.o=this.o}var ja=0;se.prototype.s=!1;se.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),ja!=0)&&Ma(this)};se.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const kr=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Hn(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Li(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(jt(i)){const r=t.length||0,s=i.length||0;t.length=r+s;for(let o=0;o<s;o++)t[r+o]=i[o]}else t.push(i)}}function k(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var Va=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};f.addEventListener("test",n,e),f.removeEventListener("test",n,e)}catch{}return t}();function ze(t){return/^[\s\xa0]*$/.test(t)}function Vt(){var t=f.navigator;return t&&(t=t.userAgent)?t:""}function F(t){return Vt().indexOf(t)!=-1}function Bn(t){return Bn[" "](t),t}Bn[" "]=function(){};function Ha(t,e){var n=Lh;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var Ba=F("Opera"),Ge=F("Trident")||F("MSIE"),Or=F("Edge"),wn=Or||Ge,Nr=F("Gecko")&&!(Vt().toLowerCase().indexOf("webkit")!=-1&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),$a=Vt().toLowerCase().indexOf("webkit")!=-1&&!F("Edge");function br(){var t=f.document;return t?t.documentMode:void 0}e:{var Mi="",dn=function(){var t=Vt();if(Nr)return/rv:([^\);]+)(\)|;)/.exec(t);if(Or)return/Edge\/([\d\.]+)/.exec(t);if(Ge)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if($a)return/WebKit\/(\S+)/.exec(t);if(Ba)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(dn&&(Mi=dn?dn[1]:""),Ge){var Ui=br();if(Ui!=null&&Ui>parseFloat(Mi))break e}}f.document&&Ge&&br();function Ke(t,e){if(k.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Nr){e:{try{Bn(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Wa[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ke.$.h.call(this)}}w(Ke,k);var Wa={2:"touch",3:"pen",4:"mouse"};Ke.prototype.h=function(){Ke.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var st="closure_listenable_"+(1e6*Math.random()|0),za=0;function Ga(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=r,this.key=++za,this.fa=this.ia=!1}function Ht(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function $n(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Ka(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Dr(t){const e={};for(const n in t)e[n]=t[n];return e}const xi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Lr(t,e){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)t[n]=i[n];for(let s=0;s<xi.length;s++)n=xi[s],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Bt(t){this.src=t,this.g={},this.h=0}Bt.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=An(t,e,i,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Ga(e,this.src,s,!!i,r),e.ia=n,t.push(e)),e};function Tn(t,e){var n=e.type;if(n in t.g){var i=t.g[n],r=kr(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(Ht(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function An(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==i)return r}return-1}var Wn="closure_lm_"+(1e6*Math.random()|0),fn={};function Mr(t,e,n,i,r){if(i&&i.once)return xr(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Mr(t,e[s],n,i,r);return null}return n=Kn(n),t&&t[st]?t.O(e,n,rt(i)?!!i.capture:!!i,r):Ur(t,e,n,!1,i,r)}function Ur(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=rt(r)?!!r.capture:!!r,a=Gn(t);if(a||(t[Wn]=a=new Bt(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=qa(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Va||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(jr(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function qa(){function t(n){return e.call(t.src,t.listener,n)}const e=Ja;return t}function xr(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)xr(t,e[s],n,i,r);return null}return n=Kn(n),t&&t[st]?t.P(e,n,rt(i)?!!i.capture:!!i,r):Ur(t,e,n,!0,i,r)}function Fr(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)Fr(t,e[s],n,i,r);else i=rt(i)?!!i.capture:!!i,n=Kn(n),t&&t[st]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=An(s,n,i,r),-1<n&&(Ht(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Gn(t))&&(e=t.g[e.toString()],t=-1,e&&(t=An(e,n,i,r)),(n=-1<t?e[t]:null)&&zn(n))}function zn(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[st])Tn(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(jr(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Gn(e))?(Tn(n,t),n.h==0&&(n.src=null,e[Wn]=null)):Ht(t)}}}function jr(t){return t in fn?fn[t]:fn[t]="on"+t}function Ja(t,e){if(t.fa)t=!0;else{e=new Ke(e,this);var n=t.listener,i=t.la||t.src;t.ia&&zn(t),t=n.call(i,e)}return t}function Gn(t){return t=t[Wn],t instanceof Bt?t:null}var pn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Kn(t){return typeof t=="function"?t:(t[pn]||(t[pn]=function(e){return t.handleEvent(e)}),t[pn])}function E(){se.call(this),this.i=new Bt(this),this.S=this,this.J=null}w(E,se);E.prototype[st]=!0;E.prototype.removeEventListener=function(t,e,n,i){Fr(this,t,e,n,i)};function A(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new k(e,t);else if(e instanceof k)e.target=e.target||t;else{var r=e;e=new k(i,t),Lr(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=_t(o,i,!0,e)&&r}if(o=e.g=t,r=_t(o,i,!0,e)&&r,r=_t(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=_t(o,i,!1,e)&&r}E.prototype.N=function(){if(E.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Ht(n[i]);delete t.g[e],t.h--}}this.J=null};E.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};E.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function _t(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,h=o.la||o.src;o.ia&&Tn(t.i,o),r=a.call(h,i)!==!1&&r}}return r&&!i.defaultPrevented}var qn=f.JSON.stringify;class Xa{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Ya(){var t=Jn;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Qa{constructor(){this.h=this.g=null}add(e,n){const i=Vr.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Vr=new Xa(()=>new Za,t=>t.reset());class Za{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function eh(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function th(t){f.setTimeout(()=>{throw t},0)}let qe,Je=!1,Jn=new Qa,Hr=()=>{const t=f.Promise.resolve(void 0);qe=()=>{t.then(nh)}};var nh=()=>{for(var t;t=Ya();){try{t.h.call(t.g)}catch(n){th(n)}var e=Vr;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Je=!1};function $t(t,e){E.call(this),this.h=t||1,this.g=e||f,this.j=P(this.qb,this),this.l=Date.now()}w($t,E);l=$t.prototype;l.ga=!1;l.T=null;l.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),A(this,"tick"),this.ga&&(Xn(this),this.start()))}};l.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Xn(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}l.N=function(){$t.$.N.call(this),Xn(this),delete this.g};function Yn(t,e,n){if(typeof t=="function")n&&(t=P(t,n));else if(t&&typeof t.handleEvent=="function")t=P(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:f.setTimeout(t,e||0)}function Br(t){t.g=Yn(()=>{t.g=null,t.i&&(t.i=!1,Br(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ih extends se{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Br(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xe(t){se.call(this),this.h=t,this.g={}}w(Xe,se);var Fi=[];function $r(t,e,n,i){Array.isArray(n)||(n&&(Fi[0]=n.toString()),n=Fi);for(var r=0;r<n.length;r++){var s=Mr(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Wr(t){$n(t.g,function(e,n){this.g.hasOwnProperty(n)&&zn(e)},t),t.g={}}Xe.prototype.N=function(){Xe.$.N.call(this),Wr(this)};Xe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Wt(){this.g=!0}Wt.prototype.Ea=function(){this.g=!1};function rh(t,e,n,i,r,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),h=0;h<a.length;h++){var c=a[h].split("=");if(1<c.length){var u=c[0];c=c[1];var p=u.split("_");o=2<=p.length&&p[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function sh(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+n+`
`+s+" "+o})}function Ie(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ah(t,n)+(i?" "+i:"")})}function oh(t,e){t.info(function(){return"TIMEOUT: "+e})}Wt.prototype.info=function(){};function ah(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return qn(n)}catch{return e}}var Ne={},ji=null;function Qn(){return ji=ji||new E}Ne.Ta="serverreachability";function zr(t){k.call(this,Ne.Ta,t)}w(zr,k);function Ye(t){const e=Qn();A(e,new zr(e))}Ne.STAT_EVENT="statevent";function Gr(t,e){k.call(this,Ne.STAT_EVENT,t),this.stat=e}w(Gr,k);function b(t){const e=Qn();A(e,new Gr(e,t))}Ne.Ua="timingevent";function Kr(t,e){k.call(this,Ne.Ua,t),this.size=e}w(Kr,k);function ot(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){t()},e)}var Zn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},hh={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ei(){}ei.prototype.h=null;function Vi(t){return t.h||(t.h=t.i())}function ch(){}var at={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ti(){k.call(this,"d")}w(ti,k);function ni(){k.call(this,"c")}w(ni,k);var Sn;function zt(){}w(zt,ei);zt.prototype.g=function(){return new XMLHttpRequest};zt.prototype.i=function(){return{}};Sn=new zt;function ht(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new Xe(this),this.P=lh,t=wn?125:void 0,this.V=new $t(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new qr}function qr(){this.i=null,this.g="",this.h=!1}var lh=45e3,Jr={},Cn={};l=ht.prototype;l.setTimeout=function(t){this.P=t};function Rn(t,e,n){t.L=1,t.A=Kt(J(e)),t.u=n,t.S=!0,Xr(t,null)}function Xr(t,e){t.G=Date.now(),ct(t),t.B=J(t.A);var n=t.B,i=t.W;Array.isArray(i)||(i=[String(i)]),rs(n.i,"t",i),t.o=0,n=t.l.J,t.h=new qr,t.g=Ss(t.l,n?e:null,!t.u),0<t.O&&(t.M=new ih(P(t.Pa,t,t.g),t.O)),$r(t.U,t.g,"readystatechange",t.nb),e=t.I?Dr(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Ye(),rh(t.j,t.v,t.B,t.m,t.W,t.u)}l.nb=function(t){t=t.target;const e=this.M;e&&j(t)==3?e.l():this.Pa(t)};l.Pa=function(t){try{if(t==this.g)e:{const u=j(this.g);var e=this.g.Ia();const p=this.g.da();if(!(3>u)&&(u!=3||wn||this.g&&(this.h.h||this.g.ja()||Wi(this.g)))){this.J||u!=4||e==7||(e==8||0>=p?Ye(3):Ye(2)),Gt(this);var n=this.g.da();this.ca=n;t:if(Yr(this)){var i=Wi(this.g);t="";var r=i.length,s=j(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ce(this),Be(this);var o="";break t}this.h.i=new f.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,sh(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ze(a)){var c=a;break t}}c=null}if(n=c)Ie(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pn(this,n);else{this.i=!1,this.s=3,b(12),ce(this),Be(this);break e}}this.S?(Qr(this,u,o),wn&&this.i&&u==3&&($r(this.U,this.V,"tick",this.mb),this.V.start())):(Ie(this.j,this.m,o,null),Pn(this,o)),u==4&&ce(this),this.i&&!this.J&&(u==4?Es(this.l,this):(this.i=!1,ct(this)))}else Nh(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,b(12)):(this.s=0,b(13)),ce(this),Be(this)}}}catch{}finally{}};function Yr(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function Qr(t,e,n){let i=!0,r;for(;!t.J&&t.o<n.length;)if(r=uh(t,n),r==Cn){e==4&&(t.s=4,b(14),i=!1),Ie(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Jr){t.s=4,b(15),Ie(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Ie(t.j,t.m,r,null),Pn(t,r);Yr(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,b(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),hi(e),e.M=!0,b(11))):(Ie(t.j,t.m,n,"[Invalid Chunked Response]"),ce(t),Be(t))}l.mb=function(){if(this.g){var t=j(this.g),e=this.g.ja();this.o<e.length&&(Gt(this),Qr(this,t,e),this.i&&t!=4&&ct(this))}};function uh(t,e){var n=t.o,i=e.indexOf(`
`,n);return i==-1?Cn:(n=Number(e.substring(n,i)),isNaN(n)?Jr:(i+=1,i+n>e.length?Cn:(e=e.slice(i,i+n),t.o=i+n,e)))}l.cancel=function(){this.J=!0,ce(this)};function ct(t){t.Y=Date.now()+t.P,Zr(t,t.P)}function Zr(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=ot(P(t.lb,t),e)}function Gt(t){t.C&&(f.clearTimeout(t.C),t.C=null)}l.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(oh(this.j,this.B),this.L!=2&&(Ye(),b(17)),ce(this),this.s=2,Be(this)):Zr(this,this.Y-t)};function Be(t){t.l.H==0||t.J||Es(t.l,t)}function ce(t){Gt(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Xn(t.V),Wr(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Pn(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||kn(n.i,t))){if(!t.K&&kn(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ot(n),Yt(n);else break e;ai(n),b(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=ot(P(n.ib,n),6e3));if(1>=as(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else le(n,11)}else if((t.K||n.g==t)&&Ot(n),!ze(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const p=c[4];p!=null&&(n.Ga=p,n.l.info("SVER="+n.Ga));const I=c[5];I!=null&&typeof I=="number"&&0<I&&(i=1.5*I,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const N=t.g;if(N){const U=N.g?N.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(U){var s=i.i;s.g||U.indexOf("spdy")==-1&&U.indexOf("quic")==-1&&U.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(ii(s,s.h),s.h=null))}if(i.F){const ve=N.g?N.g.getResponseHeader("X-HTTP-Session-Id"):null;ve&&(i.Da=ve,v(i.I,i.F,ve))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=As(i,i.J?i.pa:null,i.Y),o.K){hs(i.i,o);var a=o,h=i.L;h&&a.setTimeout(h),a.C&&(Gt(a),ct(a)),i.g=o}else ys(i);0<n.j.length&&Qt(n)}else c[0]!="stop"&&c[0]!="close"||le(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?le(n,7):oi(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Ye(4)}catch{}}function dh(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(jt(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function fh(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(jt(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function es(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(jt(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=fh(t),i=dh(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}var ts=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ph(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function de(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof de){this.h=t.h,Pt(this,t.j),this.s=t.s,this.g=t.g,kt(this,t.m),this.l=t.l;var e=t.i,n=new Qe;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Hi(this,n),this.o=t.o}else t&&(e=String(t).match(ts))?(this.h=!1,Pt(this,e[1]||"",!0),this.s=Ve(e[2]||""),this.g=Ve(e[3]||"",!0),kt(this,e[4]),this.l=Ve(e[5]||"",!0),Hi(this,e[6]||"",!0),this.o=Ve(e[7]||"")):(this.h=!1,this.i=new Qe(null,this.h))}de.prototype.toString=function(){var t=[],e=this.j;e&&t.push(He(e,Bi,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(He(e,Bi,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(He(n,n.charAt(0)=="/"?_h:mh,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",He(n,yh)),t.join("")};function J(t){return new de(t)}function Pt(t,e,n){t.j=n?Ve(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function kt(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Hi(t,e,n){e instanceof Qe?(t.i=e,Ih(t.i,t.h)):(n||(e=He(e,vh)),t.i=new Qe(e,t.h))}function v(t,e,n){t.i.set(e,n)}function Kt(t){return v(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ve(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function He(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,gh),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function gh(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Bi=/[#\/\?@]/g,mh=/[#\?:]/g,_h=/[#\?]/g,vh=/[#\?@]/g,yh=/#/g;function Qe(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function oe(t){t.g||(t.g=new Map,t.h=0,t.i&&ph(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}l=Qe.prototype;l.add=function(t,e){oe(this),this.i=null,t=be(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ns(t,e){oe(t),e=be(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function is(t,e){return oe(t),e=be(t,e),t.g.has(e)}l.forEach=function(t,e){oe(this),this.g.forEach(function(n,i){n.forEach(function(r){t.call(e,r,i,this)},this)},this)};l.ta=function(){oe(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let s=0;s<r.length;s++)n.push(e[i])}return n};l.Z=function(t){oe(this);let e=[];if(typeof t=="string")is(this,t)&&(e=e.concat(this.g.get(be(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};l.set=function(t,e){return oe(this),this.i=null,t=be(this,t),is(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};l.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function rs(t,e,n){ns(t,e),0<n.length&&(t.i=null,t.g.set(be(t,e),Hn(n)),t.h+=n.length)}l.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;o[i]!==""&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function be(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Ih(t,e){e&&!t.j&&(oe(t),t.i=null,t.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(ns(this,i),rs(this,r,n))},t)),t.j=e}var Eh=class{constructor(t,e){this.g=t,this.map=e}};function ss(t){this.l=t||wh,f.PerformanceNavigationTiming?(t=f.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(f.g&&f.g.Ka&&f.g.Ka()&&f.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var wh=10;function os(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function as(t){return t.h?1:t.g?t.g.size:0}function kn(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ii(t,e){t.g?t.g.add(e):t.h=e}function hs(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ss.prototype.cancel=function(){if(this.i=cs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function cs(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Hn(t.i)}var Th=class{stringify(t){return f.JSON.stringify(t,void 0)}parse(t){return f.JSON.parse(t,void 0)}};function Ah(){this.g=new Th}function Sh(t,e,n){const i=n||"";try{es(t,function(r,s){let o=r;rt(r)&&(o=qn(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function Ch(t,e){const n=new Wt;if(f.Image){const i=new Image;i.onload=mt(vt,n,i,"TestLoadImage: loaded",!0,e),i.onerror=mt(vt,n,i,"TestLoadImage: error",!1,e),i.onabort=mt(vt,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=mt(vt,n,i,"TestLoadImage: timeout",!1,e),f.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function vt(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function qt(t){this.l=t.ec||null,this.j=t.ob||!1}w(qt,ei);qt.prototype.g=function(){return new Jt(this.l,this.j)};qt.prototype.i=function(t){return function(){return t}}({});function Jt(t,e){E.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=ri,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}w(Jt,E);var ri=0;l=Jt.prototype;l.open=function(t,e){if(this.readyState!=ri)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ze(this)};l.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||f).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};l.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,lt(this)),this.readyState=ri};l.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ze(this)),this.g&&(this.readyState=3,Ze(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ls(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function ls(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}l.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?lt(this):Ze(this),this.readyState==3&&ls(this)}};l.Za=function(t){this.g&&(this.response=this.responseText=t,lt(this))};l.Ya=function(t){this.g&&(this.response=t,lt(this))};l.ka=function(){this.g&&lt(this)};function lt(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ze(t)}l.setRequestHeader=function(t,e){this.v.append(t,e)};l.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};l.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ze(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Jt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Rh=f.JSON.parse;function y(t){E.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=us,this.L=this.M=!1}w(y,E);var us="",Ph=/^https?$/i,kh=["POST","PUT"];l=y.prototype;l.Oa=function(t){this.M=t};l.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Sn.g(),this.C=this.u?Vi(this.u):Vi(Sn),this.g.onreadystatechange=P(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){$i(this,s);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const s of i.keys())n.set(s,i.get(s));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),r=f.FormData&&t instanceof f.FormData,!(0<=kr(kh,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ps(this),0<this.B&&((this.L=Oh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=P(this.ua,this)):this.A=Yn(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){$i(this,s)}};function Oh(t){return Ge&&typeof t.timeout=="number"&&t.ontimeout!==void 0}l.ua=function(){typeof Vn<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,A(this,"timeout"),this.abort(8))};function $i(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ds(t),Xt(t)}function ds(t){t.F||(t.F=!0,A(t,"complete"),A(t,"error"))}l.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,A(this,"complete"),A(this,"abort"),Xt(this))};l.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Xt(this,!0)),y.$.N.call(this)};l.La=function(){this.s||(this.G||this.v||this.l?fs(this):this.kb())};l.kb=function(){fs(this)};function fs(t){if(t.h&&typeof Vn<"u"&&(!t.C[1]||j(t)!=4||t.da()!=2)){if(t.v&&j(t)==4)Yn(t.La,0,t);else if(A(t,"readystatechange"),j(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var r=String(t.I).match(ts)[1]||null;!r&&f.self&&f.self.location&&(r=f.self.location.protocol.slice(0,-1)),i=!Ph.test(r?r.toLowerCase():"")}n=i}if(n)A(t,"complete"),A(t,"success");else{t.m=6;try{var s=2<j(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",ds(t)}}finally{Xt(t)}}}}function Xt(t,e){if(t.g){ps(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||A(t,"ready");try{n.onreadystatechange=i}catch{}}}function ps(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(f.clearTimeout(t.A),t.A=null)}l.isActive=function(){return!!this.g};function j(t){return t.g?t.g.readyState:0}l.da=function(){try{return 2<j(this)?this.g.status:-1}catch{return-1}};l.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};l.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Rh(e)}};function Wi(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case us:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Nh(t){const e={};t=(t.g&&2<=j(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(ze(t[i]))continue;var n=eh(t[i]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[r]||[];e[r]=s,s.push(n)}Ka(e,function(i){return i.join(", ")})}l.Ia=function(){return this.m};l.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function gs(t){let e="";return $n(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function si(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=gs(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):v(t,e,n))}function Ue(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ms(t){this.Ga=0,this.j=[],this.l=new Wt,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ue("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ue("baseRetryDelayMs",5e3,t),this.hb=Ue("retryDelaySeedMs",1e4,t),this.eb=Ue("forwardChannelMaxRetries",2,t),this.xa=Ue("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new ss(t&&t.concurrentRequestLimit),this.Ja=new Ah,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}l=ms.prototype;l.ra=8;l.H=1;function oi(t){if(_s(t),t.H==3){var e=t.W++,n=J(t.I);if(v(n,"SID",t.K),v(n,"RID",e),v(n,"TYPE","terminate"),ut(t,n),e=new ht(t,t.l,e),e.L=2,e.A=Kt(J(n)),n=!1,f.navigator&&f.navigator.sendBeacon)try{n=f.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&f.Image&&(new Image().src=e.A,n=!0),n||(e.g=Ss(e.l,null),e.g.ha(e.A)),e.G=Date.now(),ct(e)}Ts(t)}function Yt(t){t.g&&(hi(t),t.g.cancel(),t.g=null)}function _s(t){Yt(t),t.u&&(f.clearTimeout(t.u),t.u=null),Ot(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&f.clearTimeout(t.m),t.m=null)}function Qt(t){if(!os(t.i)&&!t.m){t.m=!0;var e=t.Na;qe||Hr(),Je||(qe(),Je=!0),Jn.add(e,t),t.C=0}}function bh(t,e){return as(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ot(P(t.Na,t,e),ws(t,t.C)),t.C++,!0)}l.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new ht(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Dr(s),Lr(s,this.U)):s=this.U),this.o!==null||this.O||(r.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=vs(this,r,e),n=J(this.I),v(n,"RID",t),v(n,"CVER",22),this.F&&v(n,"X-HTTP-Session-Id",this.F),ut(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(gs(s)))+"&"+e:this.o&&si(n,this.o,s)),ii(this.i,r),this.bb&&v(n,"TYPE","init"),this.P?(v(n,"$req",e),v(n,"SID","null"),r.aa=!0,Rn(r,n,null)):Rn(r,n,e),this.H=2}}else this.H==3&&(t?zi(this,t):this.j.length==0||os(this.i)||zi(this))};function zi(t,e){var n;e?n=e.m:n=t.W++;const i=J(t.I);v(i,"SID",t.K),v(i,"RID",n),v(i,"AID",t.V),ut(t,i),t.o&&t.s&&si(i,t.o,t.s),n=new ht(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=vs(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),ii(t.i,n),Rn(n,i,e)}function ut(t,e){t.na&&$n(t.na,function(n,i){v(e,i,n)}),t.h&&es({},function(n,i){v(e,i,n)})}function vs(t,e,n){n=Math.min(t.j.length,n);var i=t.h?P(t.h.Va,t.h,t):null;e:{var r=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let h=0;h<n;h++){let c=r[h].g;const u=r[h].map;if(c-=s,0>c)s=Math.max(0,r[h].g-100),a=!1;else try{Sh(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,i}function ys(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;qe||Hr(),Je||(qe(),Je=!0),Jn.add(e,t),t.A=0}}function ai(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ot(P(t.Ma,t),ws(t,t.A)),t.A++,!0)}l.Ma=function(){if(this.u=null,Is(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ot(P(this.jb,this),t)}};l.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,b(10),Yt(this),Is(this))};function hi(t){t.B!=null&&(f.clearTimeout(t.B),t.B=null)}function Is(t){t.g=new ht(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=J(t.wa);v(e,"RID","rpc"),v(e,"SID",t.K),v(e,"AID",t.V),v(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&v(e,"TO",t.qa),v(e,"TYPE","xmlhttp"),ut(t,e),t.o&&t.s&&si(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Kt(J(e)),n.u=null,n.S=!0,Xr(n,t)}l.ib=function(){this.v!=null&&(this.v=null,Yt(this),ai(this),b(19))};function Ot(t){t.v!=null&&(f.clearTimeout(t.v),t.v=null)}function Es(t,e){var n=null;if(t.g==e){Ot(t),hi(t),t.g=null;var i=2}else if(kn(t.i,e))n=e.F,hs(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var r=t.C;i=Qn(),A(i,new Kr(i,n)),Qt(t)}else ys(t);else if(r=e.s,r==3||r==0&&0<e.ca||!(i==1&&bh(t,e)||i==2&&ai(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:le(t,5);break;case 4:le(t,10);break;case 3:le(t,6);break;default:le(t,2)}}}function ws(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function le(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=P(t.pb,t);n||(n=new de("//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Pt(n,"https"),Kt(n)),Ch(n.toString(),i)}else b(2);t.H=0,t.h&&t.h.za(e),Ts(t),_s(t)}l.pb=function(t){t?(this.l.info("Successfully pinged google.com"),b(2)):(this.l.info("Failed to ping google.com"),b(1))};function Ts(t){if(t.H=0,t.ma=[],t.h){const e=cs(t.i);(e.length!=0||t.j.length!=0)&&(Li(t.ma,e),Li(t.ma,t.j),t.i.i.length=0,Hn(t.j),t.j.length=0),t.h.ya()}}function As(t,e,n){var i=n instanceof de?J(n):new de(n);if(i.g!="")e&&(i.g=e+"."+i.g),kt(i,i.m);else{var r=f.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new de(null);i&&Pt(s,i),e&&(s.g=e),r&&kt(s,r),n&&(s.l=n),i=s}return n=t.F,e=t.Da,n&&e&&v(i,n,e),v(i,"VER",t.ra),ut(t,i),i}function Ss(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new y(new qt({ob:n})):new y(t.va),e.Oa(t.J),e}l.isActive=function(){return!!this.h&&this.h.isActive(this)};function Cs(){}l=Cs.prototype;l.Ba=function(){};l.Aa=function(){};l.za=function(){};l.ya=function(){};l.isActive=function(){return!0};l.Va=function(){};function M(t,e){E.call(this),this.g=new ms(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ze(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ze(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new De(this)}w(M,E);M.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;b(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=As(t,null,t.Y),Qt(t)};M.prototype.close=function(){oi(this.g)};M.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=qn(t),t=n);e.j.push(new Eh(e.fb++,t)),e.H==3&&Qt(e)};M.prototype.N=function(){this.g.h=null,delete this.j,oi(this.g),delete this.g,M.$.N.call(this)};function Rs(t){ti.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}w(Rs,ti);function Ps(){ni.call(this),this.status=1}w(Ps,ni);function De(t){this.g=t}w(De,Cs);De.prototype.Ba=function(){A(this.g,"a")};De.prototype.Aa=function(t){A(this.g,new Rs(t))};De.prototype.za=function(t){A(this.g,new Ps)};De.prototype.ya=function(){A(this.g,"b")};function Dh(){this.blockSize=-1}function $(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}w($,Dh);$.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function gn(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],o=e+(s^n&(r^s))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[2]+606105819&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[6]+2821735955&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[10]+4294925233&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[14]+2792965006&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^s&(n^r))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^s)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[11]+1839030562&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[7]+4139469664&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[3]+3572445317&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[15]+530742520&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~s))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}$.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,r=this.h,s=0;s<e;){if(r==0)for(;s<=n;)gn(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(i[r++]=t.charCodeAt(s++),r==this.blockSize){gn(this,i),r=0;break}}else for(;s<e;)if(i[r++]=t[s++],r==this.blockSize){gn(this,i),r=0;break}}this.h=r,this.i+=e};$.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function _(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=t[r]|0;i&&s==e||(n[r]=s,i=!1)}this.g=n}var Lh={};function ci(t){return-128<=t&&128>t?Ha(t,function(e){return new _([e|0],0>e?-1:0)}):new _([t|0],0>t?-1:0)}function V(t){if(isNaN(t)||!isFinite(t))return we;if(0>t)return T(V(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=On;return new _(e,0)}function ks(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return T(ks(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=V(Math.pow(e,8)),i=we,r=0;r<t.length;r+=8){var s=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+s),e);8>s?(s=V(Math.pow(e,s)),i=i.R(s).add(V(o))):(i=i.R(n),i=i.add(V(o)))}return i}var On=4294967296,we=ci(0),Nn=ci(1),Gi=ci(16777216);l=_.prototype;l.ea=function(){if(L(this))return-T(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:On+i)*e,e*=On}return t};l.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(z(this))return"0";if(L(this))return"-"+T(this).toString(t);for(var e=V(Math.pow(t,6)),n=this,i="";;){var r=bt(n,e).g;n=Nt(n,r.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,z(n))return s+i;for(;6>s.length;)s="0"+s;i=s+i}};l.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function z(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function L(t){return t.h==-1}l.X=function(t){return t=Nt(this,t),L(t)?-1:z(t)?0:1};function T(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new _(n,~t.h).add(Nn)}l.abs=function(){return L(this)?T(this):this};l.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var s=i+(this.D(r)&65535)+(t.D(r)&65535),o=(s>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new _(n,n[n.length-1]&-2147483648?-1:0)};function Nt(t,e){return t.add(T(e))}l.R=function(t){if(z(this)||z(t))return we;if(L(this))return L(t)?T(this).R(T(t)):T(T(this).R(t));if(L(t))return T(this.R(T(t)));if(0>this.X(Gi)&&0>t.X(Gi))return V(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var s=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(r)>>>16,h=t.D(r)&65535;n[2*i+2*r]+=o*h,yt(n,2*i+2*r),n[2*i+2*r+1]+=s*h,yt(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,yt(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,yt(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new _(n,0)};function yt(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function xe(t,e){this.g=t,this.h=e}function bt(t,e){if(z(e))throw Error("division by zero");if(z(t))return new xe(we,we);if(L(t))return e=bt(T(t),e),new xe(T(e.g),T(e.h));if(L(e))return e=bt(t,T(e)),new xe(T(e.g),e.h);if(30<t.g.length){if(L(t)||L(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Nn,i=e;0>=i.X(t);)n=Ki(n),i=Ki(i);var r=ye(n,1),s=ye(i,1);for(i=ye(i,2),n=ye(n,2);!z(i);){var o=s.add(i);0>=o.X(t)&&(r=r.add(n),s=o),i=ye(i,1),n=ye(n,1)}return e=Nt(t,r.R(e)),new xe(r,e)}for(r=we;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),s=V(n),o=s.R(e);L(o)||0<o.X(t);)n-=i,s=V(n),o=s.R(e);z(s)&&(s=Nn),r=r.add(s),t=Nt(t,o)}return new xe(r,t)}l.gb=function(t){return bt(this,t).h};l.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new _(n,this.h&t.h)};l.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new _(n,this.h|t.h)};l.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new _(n,this.h^t.h)};function Ki(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new _(n,t.h)}function ye(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],s=0;s<i;s++)r[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new _(r,t.h)}M.prototype.send=M.prototype.u;M.prototype.open=M.prototype.m;M.prototype.close=M.prototype.close;Zn.NO_ERROR=0;Zn.TIMEOUT=8;Zn.HTTP_ERROR=6;hh.COMPLETE="complete";ch.EventType=at;at.OPEN="a";at.CLOSE="b";at.ERROR="c";at.MESSAGE="d";E.prototype.listen=E.prototype.O;y.prototype.listenOnce=y.prototype.P;y.prototype.getLastError=y.prototype.Sa;y.prototype.getLastErrorCode=y.prototype.Ia;y.prototype.getStatus=y.prototype.da;y.prototype.getResponseJson=y.prototype.Wa;y.prototype.getResponseText=y.prototype.ja;y.prototype.send=y.prototype.ha;y.prototype.setWithCredentials=y.prototype.Oa;$.prototype.digest=$.prototype.l;$.prototype.reset=$.prototype.reset;$.prototype.update=$.prototype.j;_.prototype.add=_.prototype.add;_.prototype.multiply=_.prototype.R;_.prototype.modulo=_.prototype.gb;_.prototype.compare=_.prototype.X;_.prototype.toNumber=_.prototype.ea;_.prototype.toString=_.prototype.toString;_.prototype.getBits=_.prototype.D;_.fromNumber=V;_.fromString=ks;var Mh=_;const qi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}S.UNAUTHENTICATED=new S(null),S.GOOGLE_CREDENTIALS=new S("google-credentials-uid"),S.FIRST_PARTY=new S("first-party-uid"),S.MOCK_USER=new S("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dt="10.11.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=new Fn("@firebase/firestore");function D(t,...e){if(Pe.logLevel<=m.DEBUG){const n=e.map(ui);Pe.debug(`Firestore (${dt}): ${t}`,...n)}}function li(t,...e){if(Pe.logLevel<=m.ERROR){const n=e.map(ui);Pe.error(`Firestore (${dt}): ${t}`,...n)}}function Uh(t,...e){if(Pe.logLevel<=m.WARN){const n=e.map(ui);Pe.warn(`Firestore (${dt}): ${t}`,...n)}}function ui(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t="Unexpected state"){const e=`FIRESTORE (${dt}) INTERNAL ASSERTION FAILED: `+t;throw li(e),new Error(e)}function bn(t,e){t||di()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class R extends Y{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(S.UNAUTHENTICATED))}shutdown(){}}class Fh{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class jh{constructor(e){this.t=e,this.currentUser=S.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=h=>this.i!==i?(i=this.i,n(h)):Promise.resolve();let s=new Te;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Te,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const h=s;e.enqueueRetryable(async()=>{await h.promise,await r(this.currentUser)})},a=h=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(h=>a(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?a(h):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Te)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(bn(typeof i.accessToken=="string"),new Os(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return bn(e===null||typeof e=="string"),new S(e)}}class Vh{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=S.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Hh{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new Vh(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(S.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Bh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $h{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const i=s=>{s.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(bn(typeof n.token=="string"),this.R=n.token,new Bh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=Wh(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function Ns(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,n,i,r,s,o,a,h,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=h,this.useFetchStreams=c}}class Dt{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Dt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Dt&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ji,g;(g=Ji||(Ji={}))[g.OK=0]="OK",g[g.CANCELLED=1]="CANCELLED",g[g.UNKNOWN=2]="UNKNOWN",g[g.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",g[g.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",g[g.NOT_FOUND=5]="NOT_FOUND",g[g.ALREADY_EXISTS=6]="ALREADY_EXISTS",g[g.PERMISSION_DENIED=7]="PERMISSION_DENIED",g[g.UNAUTHENTICATED=16]="UNAUTHENTICATED",g[g.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",g[g.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",g[g.ABORTED=10]="ABORTED",g[g.OUT_OF_RANGE=11]="OUT_OF_RANGE",g[g.UNIMPLEMENTED=12]="UNIMPLEMENTED",g[g.INTERNAL=13]="INTERNAL",g[g.UNAVAILABLE=14]="UNAVAILABLE",g[g.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Mh([4294967295,4294967295],0);function mn(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,n,i=1e3,r=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=i,this.xo=r,this.Oo=s,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),i=Math.max(0,Date.now()-this.Bo),r=Math.max(0,n-i);r>0&&D("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,r,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new Te,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new fi(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qh(t,e){if(li("AsyncQueue",`${e}: ${t}`),Ns(t))return new R(C.UNAVAILABLE,`${e}: ${t}`);throw t}var Xi,Yi;(Yi=Xi||(Xi={})).j_="default",Yi.Cache="cache";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,n,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=S.UNAUTHENTICATED,this.clientId=zh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{D("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(D("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new R(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Te;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=qh(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=new Map;function Xh(t,e,n,i){if(e===!0&&i===!0)throw new R(C.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":di()}function Qh(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new R(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yh(t);throw new R(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new R(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new R(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Xh("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bs((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new R(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new R(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new R(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ds{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zi({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new R(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new R(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zi(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new xh;switch(i.type){case"firstParty":return new Hh(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new R(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Qi.get(n);i&&(D("ComponentProvider","Removing Datastore"),Qi.delete(n),i.terminate())}(this),Promise.resolve()}}function Zh(t,e,n,i={}){var r;const s=(t=Qh(t,Ds))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Uh("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let a,h;if(typeof i.mockUserToken=="string")a=i.mockUserToken,h=S.MOCK_USER;else{a=So(i.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new R(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new S(c)}t._authCredentials=new Fh(new Os(a,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new Kh(this,"async_queue_retry"),this.cu=()=>{const n=mn();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=mn();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const n=mn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const n=new Te;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!Ns(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const n=this.nu.then(()=>(this._u=!0,e().catch(i=>{this.ou=i,this._u=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw li("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this._u=!1,i))));return this.nu=n,n}enqueueAfterDelay(e,n,i){this.lu(),this.uu.indexOf(e)>-1&&(n=0);const r=fi.createAndSchedule(this,e,n,i,s=>this.Iu(s));return this.su.push(r),r}lu(){this.ou&&di()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const n of this.su)if(n.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.su)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const n=this.su.indexOf(e);this.su.splice(n,1)}}class tc extends Ds{constructor(e,n,i,r){super(e,n,i,r),this.type="firestore",this._queue=function(){return new ec}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||nc(this),this._firestoreClient.terminate()}}function gu(t,e){const n=typeof t=="object"?t:Cr(),i=typeof t=="string"?t:e||"(default)",r=jn(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=To("firestore");s&&Zh(r,...s)}return r}function nc(t){var e,n,i;const r=t._freezeSettings(),s=function(a,h,c,u){return new Gh(a,h,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,bs(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new Jh(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}(function(e,n=!0){(function(r){dt=r})(Oe),Re(new fe("firestore",(i,{instanceIdentifier:r,options:s})=>{const o=i.getProvider("app").getImmediate(),a=new tc(new jh(i.getProvider("auth-internal")),new $h(i.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new R(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Dt(c.options.projectId,u)}(o,r),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),ue(qi,"4.6.0",e),ue(qi,"4.6.0","esm2017")})();function Ls(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ic=Ls,Ms=new nt("auth","Firebase",Ls());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=new Fn("@firebase/auth");function rc(t,...e){Lt.logLevel<=m.WARN&&Lt.warn(`Auth (${Oe}): ${t}`,...e)}function Et(t,...e){Lt.logLevel<=m.ERROR&&Lt.error(`Auth (${Oe}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t,...e){throw pi(t,...e)}function H(t,...e){return pi(t,...e)}function Us(t,e,n){const i=Object.assign(Object.assign({},ic()),{[e]:n});return new nt("auth","Firebase",i).create(e,{appName:t.name})}function re(t){return Us(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pi(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Ms.create(t,...e)}function d(t,e,...n){if(!t)throw pi(e,...n)}function G(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Et(e),new Error(e)}function X(t,e){t||G(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sc(){return er()==="http:"||er()==="https:"}function er(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sc()||Ro()||"connection"in navigator)?navigator.onLine:!0}function ac(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n){this.shortDelay=e,this.longDelay=n,X(n>e,"Short delay should be less than long delay!"),this.isMobile=Co()||Po()}get(){return oc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(t,e){X(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;G("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;G("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;G("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=new ft(3e4,6e4);function _e(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ae(t,e,n,i,r={}){return Fs(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=it(Object.assign({key:t.config.apiKey},o)).slice(1),h=await t._getAdditionalHeaders();return h["Content-Type"]="application/json",t.languageCode&&(h["X-Firebase-Locale"]=t.languageCode),xs.fetch()(js(t,t.config.apiHost,n,a),Object.assign({method:e,headers:h,referrerPolicy:"no-referrer"},s))})}async function Fs(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},hc),e);try{const r=new uc(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw It(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[h,c]=a.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw It(t,"credential-already-in-use",o);if(h==="EMAIL_EXISTS")throw It(t,"email-already-in-use",o);if(h==="USER_DISABLED")throw It(t,"user-disabled",o);const u=i[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Us(t,u,c);x(t,u)}}catch(r){if(r instanceof Y)throw r;x(t,"network-request-failed",{message:String(r)})}}async function Zt(t,e,n,i,r={}){const s=await ae(t,e,n,i,r);return"mfaPendingCredential"in s&&x(t,"multi-factor-auth-required",{_serverResponse:s}),s}function js(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?gi(t.config,r):`${t.config.apiScheme}://${r}`}function lc(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class uc{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(H(this.auth,"network-request-failed")),cc.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function It(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=H(t,e,i);return r.customData._tokenResponse=n,r}function tr(t){return t!==void 0&&t.enterprise!==void 0}class dc{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return lc(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function fc(t,e){return ae(t,"GET","/v2/recaptchaConfig",_e(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pc(t,e){return ae(t,"POST","/v1/accounts:delete",e)}async function Vs(t,e){return ae(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gc(t,e=!1){const n=me(t),i=await n.getIdToken(e),r=mi(i);d(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:$e(_n(r.auth_time)),issuedAtTime:$e(_n(r.iat)),expirationTime:$e(_n(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function _n(t){return Number(t)*1e3}function mi(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Et("JWT malformed, contained fewer than 3 sections"),null;try{const r=wr(n);return r?JSON.parse(r):(Et("Failed to decode base64 JWT payload"),null)}catch(r){return Et("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function nr(t){const e=mi(t);return d(e,"internal-error"),d(typeof e.exp<"u","internal-error"),d(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Y&&mc(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function mc({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$e(this.lastLoginAt),this.creationTime=$e(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mt(t){var e;const n=t.auth,i=await t.getIdToken(),r=await et(t,Vs(n,{idToken:i}));d(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Hs(s.providerUserInfo):[],a=yc(t.providerData,o),h=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=h?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ln(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,p)}async function vc(t){const e=me(t);await Mt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yc(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Hs(t){return t.map(e=>{var{providerId:n}=e,i=Un(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ic(t,e){const n=await Fs(t,{},async()=>{const i=it({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=js(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",xs.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ec(t,e){return ae(t,"POST","/v2/accounts:revokeToken",_e(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){d(e.idToken,"internal-error"),d(typeof e.idToken<"u","internal-error"),d(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){d(e.length!==0,"internal-error");const n=nr(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(d(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await Ic(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new Ae;return i&&(d(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(d(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(d(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ae,this.toJSON())}_performRefresh(){return G("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t,e){d(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class K{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=Un(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _c(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ln(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await et(this,this.stsTokenManager.getToken(this.auth,e));return d(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return gc(this,e)}reload(){return vc(this)}_assign(e){this!==e&&(d(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new K(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){d(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Mt(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(W(this.auth.app))return Promise.reject(re(this.auth));const e=await this.getIdToken();return await et(this,pc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,h,c,u;const p=(i=n.displayName)!==null&&i!==void 0?i:void 0,I=(r=n.email)!==null&&r!==void 0?r:void 0,N=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,U=(o=n.photoURL)!==null&&o!==void 0?o:void 0,ve=(a=n.tenantId)!==null&&a!==void 0?a:void 0,sn=(h=n._redirectEventId)!==null&&h!==void 0?h:void 0,wi=(c=n.createdAt)!==null&&c!==void 0?c:void 0,Ti=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:on,emailVerified:Ai,isAnonymous:Si,providerData:an,stsTokenManager:Ci}=n;d(on&&Ci,e,"internal-error");const fo=Ae.fromJSON(this.name,Ci);d(typeof on=="string",e,"internal-error"),Q(p,e.name),Q(I,e.name),d(typeof Ai=="boolean",e,"internal-error"),d(typeof Si=="boolean",e,"internal-error"),Q(N,e.name),Q(U,e.name),Q(ve,e.name),Q(sn,e.name),Q(wi,e.name),Q(Ti,e.name);const hn=new K({uid:on,auth:e,email:I,emailVerified:Ai,displayName:p,isAnonymous:Si,photoURL:U,phoneNumber:N,tenantId:ve,stsTokenManager:fo,createdAt:wi,lastLoginAt:Ti});return an&&Array.isArray(an)&&(hn.providerData=an.map(po=>Object.assign({},po))),sn&&(hn._redirectEventId=sn),hn}static async _fromIdTokenResponse(e,n,i=!1){const r=new Ae;r.updateFromServerResponse(n);const s=new K({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Mt(s),s}static async _fromGetAccountInfoResponse(e,n,i){const r=n.users[0];d(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?Hs(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),a=new Ae;a.updateFromIdToken(i);const h=new K({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new Ln(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(h,c),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new Map;function q(t){X(t instanceof Function,"Expected a class definition");let e=ir.get(t);return e?(X(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ir.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Bs.type="NONE";const rr=Bs;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t,e,n){return`firebase:${t}:${e}:${n}`}class Se{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=wt(this.userKey,r.apiKey,s),this.fullPersistenceKey=wt("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?K._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Se(q(rr),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||q(rr);const o=wt(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const p=K._fromJSON(e,u);c!==s&&(a=p),s=c;break}}catch{}const h=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!h.length?new Se(s,e,i):(s=h[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Se(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zs(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($s(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ks(e))return"Blackberry";if(qs(e))return"Webos";if(_i(e))return"Safari";if((e.includes("chrome/")||Ws(e))&&!e.includes("edge/"))return"Chrome";if(Gs(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function $s(t=O()){return/firefox\//i.test(t)}function _i(t=O()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ws(t=O()){return/crios\//i.test(t)}function zs(t=O()){return/iemobile/i.test(t)}function Gs(t=O()){return/android/i.test(t)}function Ks(t=O()){return/blackberry/i.test(t)}function qs(t=O()){return/webos/i.test(t)}function en(t=O()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wc(t=O()){var e;return en(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Tc(){return ko()&&document.documentMode===10}function Js(t=O()){return en(t)||Gs(t)||qs(t)||Ks(t)||/windows phone/i.test(t)||zs(t)}function Ac(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(t,e=[]){let n;switch(t){case"Browser":n=sr(O());break;case"Worker":n=`${sr(O())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Oe}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const h=e(s);o(h)}catch(h){a(h)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cc(t,e={}){return ae(t,"GET","/v2/passwordPolicy",_e(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=6;class Pc{constructor(e){var n,i,r,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Rc,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,r,s,o,a;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(n=h.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),h.isValid&&(h.isValid=(i=h.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(r=h.containsLowercaseLetter)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(s=h.containsUppercaseLetter)!==null&&s!==void 0?s:!0),h.isValid&&(h.isValid=(o=h.containsNumericCharacter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(a=h.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),h}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new or(this),this.idTokenSubscription=new or(this),this.beforeStateQueue=new Sc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ms,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=q(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Se.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Vs(this,{idToken:e}),i=await K._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(W(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,h=await this.tryRedirectSignIn(e);(!o||o===a)&&(h!=null&&h.user)&&(r=h.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return d(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Mt(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ac()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(W(this.app))return Promise.reject(re(this));const n=e?me(e):null;return n&&d(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&d(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return W(this.app)?Promise.reject(re(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return W(this.app)?Promise.reject(re(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(q(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Cc(this),n=new Pc(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new nt("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await Ec(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&q(e)||this._popupRedirectResolver;d(n,this,"argument-error"),this.redirectPersistenceManager=await Se.create(this,[q(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(d(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const h=e.addObserver(n,i,r);return()=>{o=!0,h()}}else{const h=e.addObserver(n);return()=>{o=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return d(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&rc(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Le(t){return me(t)}class or{constructor(e){this.auth=e,this.observer=null,this.addObserver=Uo(n=>this.observer=n)}get next(){return d(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Oc(t){tn=t}function Ys(t){return tn.loadJS(t)}function Nc(){return tn.recaptchaEnterpriseScript}function bc(){return tn.gapiScript}function Dc(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Lc="recaptcha-enterprise",Mc="NO_RECAPTCHA";class Uc{constructor(e){this.type=Lc,this.auth=Le(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{fc(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new dc(h);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(h=>{a(h)})})}function r(s,o,a){const h=window.grecaptcha;tr(h)?h.enterprise.ready(()=>{h.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Mc)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!n&&tr(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let h=Nc();h.length!==0&&(h+=a),Ys(h).then(()=>{r(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function ar(t,e,n,i=!1){const r=new Uc(t);let s;try{s=await r.verify(n)}catch{s=await r.verify(n,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function hr(t,e,n,i){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await ar(t,e,n,n==="getOobCode");return i(t,s)}else return i(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ar(t,e,n,n==="getOobCode");return i(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(t,e){const n=jn(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Ct(s,e??{}))return r;x(r,"already-initialized")}return n.initialize({options:e})}function Fc(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(q);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function jc(t,e,n){const i=Le(t);d(i._canInitEmulator,i,"emulator-config-failed"),d(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),s=Qs(e),{host:o,port:a}=Vc(e),h=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${h}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Hc()}function Qs(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Vc(t){const e=Qs(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:cr(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:cr(o)}}}function cr(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Hc(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return G("not implemented")}_getIdTokenResponse(e){return G("not implemented")}_linkToIdToken(e,n){return G("not implemented")}_getReauthenticationResolver(e){return G("not implemented")}}async function Bc(t,e){return ae(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $c(t,e){return Zt(t,"POST","/v1/accounts:signInWithPassword",_e(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wc(t,e){return Zt(t,"POST","/v1/accounts:signInWithEmailLink",_e(t,e))}async function zc(t,e){return Zt(t,"POST","/v1/accounts:signInWithEmailLink",_e(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends vi{constructor(e,n,i,r=null){super("password",i),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new tt(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new tt(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hr(e,n,"signInWithPassword",$c);case"emailLink":return Wc(e,{email:this._email,oobCode:this._password});default:x(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hr(e,i,"signUpPassword",Bc);case"emailLink":return zc(e,{idToken:n,email:this._email,oobCode:this._password});default:x(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ce(t,e){return Zt(t,"POST","/v1/accounts:signInWithIdp",_e(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc="http://localhost";class ge extends vi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ge(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):x("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=Un(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new ge(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ce(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Ce(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ce(e,n)}buildRequest(){const e={requestUri:Gc,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=it(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qc(t){const e=Fe(je(t)).link,n=e?Fe(je(e)).deep_link_id:null,i=Fe(je(t)).deep_link_id;return(i?Fe(je(i)).link:null)||i||n||e||t}class yi{constructor(e){var n,i,r,s,o,a;const h=Fe(je(e)),c=(n=h.apiKey)!==null&&n!==void 0?n:null,u=(i=h.oobCode)!==null&&i!==void 0?i:null,p=Kc((r=h.mode)!==null&&r!==void 0?r:null);d(c&&u&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=u,this.continueUrl=(s=h.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=h.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=h.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=qc(e);try{return new yi(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(){this.providerId=Me.PROVIDER_ID}static credential(e,n){return tt._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=yi.parseLink(n);return d(i,"argument-error"),tt._fromEmailAndCode(e,i.code,i.tenantId)}}Me.PROVIDER_ID="password";Me.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Me.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends Zs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z extends pt{constructor(){super("facebook.com")}static credential(e){return ge._fromParams({providerId:Z.PROVIDER_ID,signInMethod:Z.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Z.credentialFromTaggedObject(e)}static credentialFromError(e){return Z.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Z.credential(e.oauthAccessToken)}catch{return null}}}Z.FACEBOOK_SIGN_IN_METHOD="facebook.com";Z.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee extends pt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ge._fromParams({providerId:ee.PROVIDER_ID,signInMethod:ee.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ee.credentialFromTaggedObject(e)}static credentialFromError(e){return ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return ee.credential(n,i)}catch{return null}}}ee.GOOGLE_SIGN_IN_METHOD="google.com";ee.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te extends pt{constructor(){super("github.com")}static credential(e){return ge._fromParams({providerId:te.PROVIDER_ID,signInMethod:te.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return te.credentialFromTaggedObject(e)}static credentialFromError(e){return te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return te.credential(e.oauthAccessToken)}catch{return null}}}te.GITHUB_SIGN_IN_METHOD="github.com";te.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne extends pt{constructor(){super("twitter.com")}static credential(e,n){return ge._fromParams({providerId:ne.PROVIDER_ID,signInMethod:ne.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ne.credentialFromTaggedObject(e)}static credentialFromError(e){return ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return ne.credential(n,i)}catch{return null}}}ne.TWITTER_SIGN_IN_METHOD="twitter.com";ne.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await K._fromIdTokenResponse(e,i,r),o=lr(i);return new ke({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=lr(i);return new ke({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function lr(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Y{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Ut.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new Ut(e,n,i,r)}}function eo(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ut._fromErrorAndOperation(t,s,e,i):s})}async function Jc(t,e,n=!1){const i=await et(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ke._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xc(t,e,n=!1){const{auth:i}=t;if(W(i.app))return Promise.reject(re(i));const r="reauthenticate";try{const s=await et(t,eo(i,r,e,t),n);d(s.idToken,i,"internal-error");const o=mi(s.idToken);d(o,i,"internal-error");const{sub:a}=o;return d(t.uid===a,i,"user-mismatch"),ke._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&x(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(t,e,n=!1){if(W(t.app))return Promise.reject(re(t));const i="signIn",r=await eo(t,i,e),s=await ke._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function Yc(t,e){return to(Le(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qc(t){const e=Le(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function mu(t,e,n){return W(t.app)?Promise.reject(re(t)):Yc(me(t),Me.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Qc(t),i})}function Zc(t,e,n,i){return me(t).onIdTokenChanged(e,n,i)}function el(t,e,n){return me(t).beforeAuthStateChanged(e,n)}const xt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xt,"1"),this.storage.removeItem(xt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(){const t=O();return _i(t)||en(t)}const nl=1e3,il=10;class io extends no{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=tl()&&Ac(),this.fallbackToPolling=Js(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,h)=>{this.notifyListeners(o,h)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);Tc()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,il):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},nl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}io.type="LOCAL";const rl=io;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro extends no{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ro.type="SESSION";const so=ro;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new nn(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,s)),h=await sl(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:h})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,h)=>{const c=Ii("",20);r.port1.start();const u=setTimeout(()=>{h(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(p){const I=p;if(I.data.eventId===c)switch(I.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(I.data.response);break;default:clearTimeout(u),clearTimeout(s),h(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(){return window}function al(t){B().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(){return typeof B().WorkerGlobalScope<"u"&&typeof B().importScripts=="function"}async function hl(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cl(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ll(){return oo()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao="firebaseLocalStorageDb",ul=1,Ft="firebaseLocalStorage",ho="fbase_key";class gt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rn(t,e){return t.transaction([Ft],e?"readwrite":"readonly").objectStore(Ft)}function dl(){const t=indexedDB.deleteDatabase(ao);return new gt(t).toPromise()}function Mn(){const t=indexedDB.open(ao,ul);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Ft,{keyPath:ho})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Ft)?e(i):(i.close(),await dl(),e(await Mn()))})})}async function ur(t,e,n){const i=rn(t,!0).put({[ho]:e,value:n});return new gt(i).toPromise()}async function fl(t,e){const n=rn(t,!1).get(e),i=await new gt(n).toPromise();return i===void 0?null:i.value}function dr(t,e){const n=rn(t,!0).delete(e);return new gt(n).toPromise()}const pl=800,gl=3;class co{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mn(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>gl)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return oo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nn._getInstance(ll()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hl(),!this.activeServiceWorker)return;this.sender=new ol(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cl()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mn();return await ur(e,xt,"1"),await dr(e,xt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>ur(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>fl(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dr(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=rn(r,!1).getAll();return new gt(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}co.type="LOCAL";const ml=co;new ft(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(t,e){return e?q(e):(d(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends vi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ce(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ce(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ce(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vl(t){return to(t.auth,new Ei(t),t.bypassAuthState)}function yl(t){const{auth:e,user:n}=t;return d(n,e,"internal-error"),Xc(n,new Ei(t),t.bypassAuthState)}async function Il(t){const{auth:e,user:n}=t;return d(n,e,"internal-error"),Jc(n,new Ei(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const h={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(h))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vl;case"linkViaPopup":case"linkViaRedirect":return Il;case"reauthViaPopup":case"reauthViaRedirect":return yl;default:x(this.auth,"internal-error")}}resolve(e){X(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){X(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El=new ft(2e3,1e4);class Ee extends lo{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,Ee.currentPopupAction&&Ee.currentPopupAction.cancel(),Ee.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return d(e,this.auth,"internal-error"),e}async onExecution(){X(this.filter.length===1,"Popup operations only handle one event");const e=Ii();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(H(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(H(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ee.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(H(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,El.get())};e()}}Ee.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl="pendingRedirect",Tt=new Map;class Tl extends lo{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Tt.get(this.auth._key());if(!e){try{const i=await Al(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Tt.set(this.auth._key(),e)}return this.bypassAuthState||Tt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Al(t,e){const n=Rl(e),i=Cl(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function Sl(t,e){Tt.set(t._key(),e)}function Cl(t){return q(t._redirectPersistence)}function Rl(t){return wt(wl,t.config.apiKey,t.name)}async function Pl(t,e,n=!1){if(W(t.app))return Promise.reject(re(t));const i=Le(t),r=_l(i,e),o=await new Tl(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl=10*60*1e3;class Ol{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Nl(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!uo(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(H(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kl&&this.cachedEventUids.clear(),this.cachedEventUids.has(fr(e))}saveEventToCache(e){this.cachedEventUids.add(fr(e)),this.lastProcessedEventTime=Date.now()}}function fr(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uo({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Nl(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uo(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bl(t,e={}){return ae(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ll=/^https?/;async function Ml(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bl(t);for(const n of e)try{if(Ul(n))return}catch{}x(t,"unauthorized-domain")}function Ul(t){const e=Dn(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!Ll.test(n))return!1;if(Dl.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl=new ft(3e4,6e4);function pr(){const t=B().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Fl(t){return new Promise((e,n)=>{var i,r,s;function o(){pr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pr(),n(H(t,"network-request-failed"))},timeout:xl.get()})}if(!((r=(i=B().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=B().gapi)===null||s===void 0)&&s.load)o();else{const a=Dc("iframefcb");return B()[a]=()=>{gapi.load?o():n(H(t,"network-request-failed"))},Ys(`${bc()}?onload=${a}`).catch(h=>n(h))}}).catch(e=>{throw At=null,e})}let At=null;function jl(t){return At=At||Fl(t),At}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl=new ft(5e3,15e3),Hl="__/auth/iframe",Bl="emulator/auth/iframe",$l={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Wl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zl(t){const e=t.config;d(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gi(e,Bl):`https://${t.config.authDomain}/${Hl}`,i={apiKey:e.apiKey,appName:t.name,v:Oe},r=Wl.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${it(i).slice(1)}`}async function Gl(t){const e=await jl(t),n=B().gapi;return d(n,t,"internal-error"),e.open({where:document.body,url:zl(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$l,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=H(t,"network-request-failed"),a=B().setTimeout(()=>{s(o)},Vl.get());function h(){B().clearTimeout(a),r(i)}i.ping(h).then(h,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ql=500,Jl=600,Xl="_blank",Yl="http://localhost";class gr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ql(t,e,n,i=ql,r=Jl){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const h=Object.assign(Object.assign({},Kl),{width:i.toString(),height:r.toString(),top:s,left:o}),c=O().toLowerCase();n&&(a=Ws(c)?Xl:n),$s(c)&&(e=e||Yl,h.scrollbars="yes");const u=Object.entries(h).reduce((I,[N,U])=>`${I}${N}=${U},`,"");if(wc(c)&&a!=="_self")return Zl(e||"",a),new gr(null);const p=window.open(e||"",a,u);d(p,t,"popup-blocked");try{p.focus()}catch{}return new gr(p)}function Zl(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu="__/auth/handler",tu="emulator/auth/handler",nu=encodeURIComponent("fac");async function mr(t,e,n,i,r,s){d(t.config.authDomain,t,"auth-domain-config-required"),d(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Oe,eventId:r};if(e instanceof Zs){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Mo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,p]of Object.entries(s||{}))o[u]=p}if(e instanceof pt){const u=e.getScopes().filter(p=>p!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const h=await t._getAppCheckToken(),c=h?`#${nu}=${encodeURIComponent(h)}`:"";return`${iu(t)}?${it(a).slice(1)}${c}`}function iu({config:t}){return t.emulator?gi(t,tu):`https://${t.authDomain}/${eu}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn="webStorageSupport";class ru{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=so,this._completeRedirectFn=Pl,this._overrideRedirectResult=Sl}async _openPopup(e,n,i,r){var s;X((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await mr(e,n,i,Dn(),r);return Ql(e,o,Ii())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await mr(e,n,i,Dn(),r);return al(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(X(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await Gl(e),i=new Ol(e);return n.register("authEvent",r=>(d(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vn,{type:vn},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[vn];o!==void 0&&n(!!o),x(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ml(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Js()||_i()||en()}}const su=ru;var _r="@firebase/auth",vr="1.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){d(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hu(t){Re(new fe("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;d(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const h={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xs(t)},c=new kc(i,r,s,h);return Fc(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Re(new fe("auth-internal",e=>{const n=Le(e.getProvider("auth").getImmediate());return(i=>new ou(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ue(_r,vr,au(t)),ue(_r,vr,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=5*60,lu=Sr("authIdTokenMaxAge")||cu;let yr=null;const uu=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>lu)return;const r=n==null?void 0:n.token;yr!==r&&(yr=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function _u(t=Cr()){const e=jn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=xc(t,{popupRedirectResolver:su,persistence:[ml,rl,so]}),i=Sr("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const o=uu(s.toString());el(n,o,()=>o(n.currentUser)),Zc(n,a=>o(a))}}const r=Tr("auth");return r&&jc(n,`http://${r}`),n}function du(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Oc({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=H("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",du().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hu("Browser");export{_u as a,gu as g,Aa as i,ue as r,mu as s};
