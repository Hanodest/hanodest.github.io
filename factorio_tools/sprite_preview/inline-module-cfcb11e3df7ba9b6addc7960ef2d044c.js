/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),a=new WeakMap;let n=class{constructor(e,t,a){if(this._$cssResult$=!0,a!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const i=this.t;if(t&&void 0===e){const t=void 0!==i&&1===i.length;t&&(e=a.get(i)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&a.set(i,e))}return e}toString(){return this.cssText}};const r=(e,...t)=>{const a=1===e.length?e[0]:t.reduce((t,i,a)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[a+1],e[0]);return new n(a,e,i)},s=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:o,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:c,getOwnPropertySymbols:p,getPrototypeOf:h}=Object,u=globalThis,A=u.trustedTypes,g=A?A.emptyScript:"",m=u.reactiveElementPolyfillSupport,f=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},w=(e,t)=>!o(e,t),b={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:w};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let y=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=b){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(e,i,t);void 0!==a&&l(this.prototype,e,a)}}static getPropertyDescriptor(e,t,i){const{get:a,set:n}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:a,set(t){const r=a?.call(this);n?.call(this,t),this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??b}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const e=h(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const e=this.properties,t=[...c(e),...p(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,a)=>{if(t)i.adoptedStyleSheets=a.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const t of a){const a=document.createElement("style"),n=e.litNonce;void 0!==n&&a.setAttribute("nonce",n),a.textContent=t.cssText,i.appendChild(a)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,i);if(void 0!==a&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(a):this.setAttribute(a,n),this._$Em=null}}_$AK(e,t){const i=this.constructor,a=i._$Eh.get(e);if(void 0!==a&&this._$Em!==a){const e=i.getPropertyOptions(a),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=a;const r=n.fromAttribute(t,e.type);this[a]=r??this._$Ej?.get(a)??r,this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){const a=this.constructor,n=this[e];if(i??=a.getPropertyOptions(e),!((i.hasChanged??w)(n,t)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:a,wrapped:n},r){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==n||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===a&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,a=this[t];!0!==e||this._$AL.has(t)||void 0===a||this.C(t,void 0,i,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[f("elementProperties")]=new Map,y[f("finalized")]=new Map,m?.({ReactiveElement:y}),(u.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,_=x.trustedTypes,E=_?_.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,F="?"+C,R=`<${F}>`,k=document,M=()=>k.createComment(""),U=e=>null===e||"object"!=typeof e&&"function"!=typeof e,T=Array.isArray,O="[ \t\n\f\r]",$=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,P=/>/g,B=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,V=/"/g,D=/^(?:script|style|textarea|title)$/i,N=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),z=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),L=new WeakMap,G=k.createTreeWalker(k,129);function H(e,t){if(!T(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}const q=(e,t)=>{const i=e.length-1,a=[];let n,r=2===t?"<svg>":3===t?"<math>":"",s=$;for(let t=0;t<i;t++){const i=e[t];let o,l,d=-1,c=0;for(;c<i.length&&(s.lastIndex=c,l=s.exec(i),null!==l);)c=s.lastIndex,s===$?"!--"===l[1]?s=I:void 0!==l[1]?s=P:void 0!==l[2]?(D.test(l[2])&&(n=RegExp("</"+l[2],"g")),s=B):void 0!==l[3]&&(s=B):s===B?">"===l[0]?(s=n??$,d=-1):void 0===l[1]?d=-2:(d=s.lastIndex-l[2].length,o=l[1],s=void 0===l[3]?B:'"'===l[3]?V:j):s===V||s===j?s=B:s===I||s===P?s=$:(s=B,n=void 0);const p=s===B&&e[t+1].startsWith("/>")?" ":"";r+=s===$?i+R:d>=0?(a.push(o),i.slice(0,d)+S+i.slice(d)+C+p):i+C+(-2===d?t:p)}return[H(e,r+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),a]};class K{constructor({strings:e,_$litType$:t},i){let a;this.parts=[];let n=0,r=0;const s=e.length-1,o=this.parts,[l,d]=q(e,t);if(this.el=K.createElement(l,i),G.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(a=G.nextNode())&&o.length<s;){if(1===a.nodeType){if(a.hasAttributes())for(const e of a.getAttributeNames())if(e.endsWith(S)){const t=d[r++],i=a.getAttribute(e).split(C),s=/([.?@])?(.*)/.exec(t);o.push({type:1,index:n,name:s[2],strings:i,ctor:"."===s[1]?Z:"?"===s[1]?ee:"@"===s[1]?te:X}),a.removeAttribute(e)}else e.startsWith(C)&&(o.push({type:6,index:n}),a.removeAttribute(e));if(D.test(a.tagName)){const e=a.textContent.split(C),t=e.length-1;if(t>0){a.textContent=_?_.emptyScript:"";for(let i=0;i<t;i++)a.append(e[i],M()),G.nextNode(),o.push({type:2,index:++n});a.append(e[t],M())}}}else if(8===a.nodeType)if(a.data===F)o.push({type:2,index:n});else{let e=-1;for(;-1!==(e=a.data.indexOf(C,e+1));)o.push({type:7,index:n}),e+=C.length-1}n++}}static createElement(e,t){const i=k.createElement("template");return i.innerHTML=e,i}}function Y(e,t,i=e,a){if(t===z)return t;let n=void 0!==a?i._$Co?.[a]:i._$Cl;const r=U(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,i,a)),void 0!==a?(i._$Co??=[])[a]=n:i._$Cl=n),void 0!==n&&(t=Y(e,n._$AS(e,t.values),n,a)),t}class J{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,a=(e?.creationScope??k).importNode(t,!0);G.currentNode=a;let n=G.nextNode(),r=0,s=0,o=i[0];for(;void 0!==o;){if(r===o.index){let t;2===o.type?t=new W(n,n.nextSibling,this,e):1===o.type?t=new o.ctor(n,o.name,o.strings,this,e):6===o.type&&(t=new ie(n,this,e)),this._$AV.push(t),o=i[++s]}r!==o?.index&&(n=G.nextNode(),r++)}return G.currentNode=k,a}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class W{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,a){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Y(this,e,t),U(e)?e===Q||null==e||""===e?(this._$AH!==Q&&this._$AR(),this._$AH=Q):e!==this._$AH&&e!==z&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>T(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Q&&U(this._$AH)?this._$AA.nextSibling.data=e:this.T(k.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,a="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=K.createElement(H(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(t);else{const e=new J(a,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=L.get(e.strings);return void 0===t&&L.set(e.strings,t=new K(e)),t}k(e){T(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,a=0;for(const n of e)a===t.length?t.push(i=new W(this.O(M()),this.O(M()),this,this.options)):i=t[a],i._$AI(n),a++;a<t.length&&(this._$AR(i&&i._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,a,n){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Q}_$AI(e,t=this,i,a){const n=this.strings;let r=!1;if(void 0===n)e=Y(this,e,t,0),r=!U(e)||e!==this._$AH&&e!==z,r&&(this._$AH=e);else{const a=e;let s,o;for(e=n[0],s=0;s<n.length-1;s++)o=Y(this,a[i+s],t,s),o===z&&(o=this._$AH[s]),r||=!U(o)||o!==this._$AH[s],o===Q?e=Q:e!==Q&&(e+=(o??"")+n[s+1]),this._$AH[s]=o}r&&!a&&this.j(e)}j(e){e===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Z extends X{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Q?void 0:e}}class ee extends X{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Q)}}class te extends X{constructor(e,t,i,a,n){super(e,t,i,a,n),this.type=5}_$AI(e,t=this){if((e=Y(this,e,t,0)??Q)===z)return;const i=this._$AH,a=e===Q&&i!==Q||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==Q&&(i===Q||a);a&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ie{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Y(this,e)}}const ae=x.litHtmlPolyfillSupport;ae?.(K,W),(x.litHtmlVersions??=[]).push("3.3.1");const ne=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let re=class extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const a=i?.renderBefore??t;let n=a._$litPart$;if(void 0===n){const e=i?.renderBefore??null;a._$litPart$=n=new W(t.insertBefore(M(),e),e,void 0,i??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return z}};re._$litElement$=!0,re.finalized=!0,ne.litElementHydrateSupport?.({LitElement:re});const se=ne.litElementPolyfillSupport;se?.({LitElement:re}),(ne.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const oe=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},le={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:w},de=(e=le,t,i)=>{const{kind:a,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),"setter"===a&&((e=Object.create(e)).wrapped=!0),r.set(i.name,e),"accessor"===a){const{name:a}=i;return{set(i){const n=t.get.call(this);t.set.call(this,i),this.requestUpdate(a,n,e)},init(t){return void 0!==t&&this.C(a,void 0,e,t),t}}}if("setter"===a){const{name:a}=i;return function(i){const n=this[a];t.call(this,i),this.requestUpdate(a,n,e)}}throw Error("Unsupported decorator location: "+a)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ce(e){return(t,i)=>"object"==typeof i?de(e,t,i):((e,t,i)=>{const a=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),a?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pe(e){return ce({...e,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const he=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ue(e,t){return(t,i,a)=>he(t,i,{get(){return(t=>t.renderRoot?.querySelector(e)??null)(this)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ae;function ge(e){return(t,i)=>he(t,i,{get(){return(this.renderRoot??(Ae??=document.createDocumentFragment())).querySelectorAll(e)}})}async function me(e){const t=new Image;return t.src=e,new Promise(e=>{t.addEventListener("load",()=>{const i=new OffscreenCanvas(t.width,t.height).getContext("2d");i.drawImage(t,0,0,t.width,t.height),e(i.getImageData(0,0,t.width,t.height))})})}var fe,ve,we=function(e,t,i,a,n){if("m"===a)throw new TypeError("Private method is not writable");if("a"===a&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?n.call(e,i):n?n.value=i:t.set(e,i),i},be=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};class ye{constructor(e,t){fe.set(this,void 0),ve.set(this,void 0),we(this,fe,e,"f"),we(this,ve,t,"f")}get x(){return be(this,fe,"f")}set x(e){we(this,fe,e,"f")}get y(){return be(this,ve,"f")}set y(e){we(this,ve,e,"f")}add(e){return new ye(this.x+e.x,this.y+e.y)}subtract(e){return new ye(this.x-e.x,this.y-e.y)}vmul(e){return this.x*e.y-e.x*this.y}smul(e){return this.x*e.x+this.y*e.y}mul(e){return new ye(this.x*e,this.y*e)}get len(){return Math.sqrt(this.smul(this))}min(e){return new ye(Math.min(this.x,e.x),Math.min(this.y,e.y))}max(e){return new ye(Math.max(this.x,e.x),Math.max(this.y,e.y))}floor(){return new ye(Math.floor(this.x),Math.floor(this.y))}asPrototype(){return{x:this.x,y:this.y}}asArray(){return[this.x,this.y]}}fe=new WeakMap,ve=new WeakMap;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const xe=1,_e=3,Ee=4,Se=e=>(...t)=>({_$litDirective$:e,values:t});let Ce=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fe={},Re=Se(class extends Ce{constructor(e){if(super(e),e.type!==_e&&e.type!==xe&&e.type!==Ee)throw Error("The `live` directive is not allowed on child or event bindings");if(!(e=>void 0===e.strings)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===z||t===Q)return t;const i=e.element,a=e.name;if(e.type===_e){if(t===i[a])return z}else if(e.type===Ee){if(!!t===i.hasAttribute(a))return z}else if(e.type===xe&&i.getAttribute(a)===t+"")return z;return((e,t=Fe)=>{e._$AH=t;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */})(e),t}}),ke=r`
  .outer-frame {
    border-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAIAAAC0D9CtAAABEUlEQVR42mLwdXOOCg1KiI1JTkhISQJ0Rh7YCcQwEJUF6blkjk9ne7fzn0zvMB5Amvm03b9rpoWBhNd0vczStCryuq7MdXNsFCsYSHjes05Xq2Sd5GmapRkpT4fOLKeFgYTXsmpWq+VyMZvPp/PZbDGfn5ucFgYSXvthaLq+LOs8L4ocFTgvymjmXQ4DCa/inBmpYFUGtxcJOcmeVBFxduJu897HSeTE3r2TFZiHebseMyrP67X3hLDfmNnw5mW7HjMqsbEC27z3cRI50X0XvGDvGcJOlpAz7Mhxx02Sth+860Z2ZVWcHAlMPGgYUO/7YVw1ja/FE9GK45zLikBj91vk9+vjbTySxwQJLyNVeUbw/9nbS2W5B1KYAAAAAElFTkSuQmCC')
      8/4px repeat;
    padding: 4px;
    background-color: #303030;
  }

  .inner-frame {
    border-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAABHUlEQVR42r2Tg243URTE9wE+1jZWFzWjhnWD2nj/V5jur/rbSDKZzMw5s7zBkl9Sq6ijxLdQwrIDDkY3UsJiDt7afE1eq+R70ckZIxMnmp+ZhtH4uaIKJT8FNk0VhaFmp6f1989vGI2fKypfkrv9JI6zO5jR+PCQgiCA0fjkxXeTKyEA3Ha8uKi5qQmN9PdRAqPxyX9mi0ownbiKTxOli/MKpyc1OzZMSQCj8cmZY5690jshNKlsFMqGi9rb3dHbyzOMxidnrtyd5Ep8msrFkbbWVnV9eaH7m2sYjU9eo4RbTBMt21THBwc6Oz7SaQYYjU/OHPMV/5Nll8E7baytaXdrK8MmjMYnr/GfAK5iHeAF/gANyFs5O906xS3gHb/4wE6+9U2WAAAAAElFTkSuQmCC')
      8/4px repeat;
    margin: 4px;
    padding: 8px;
    width: fit-content;
    height: fit-content;
    background-color: #303030;
    color: #ffffff;
  }

  .flex-horizontal {
    display: flex;
    flex-direction: row;
  }

  .flex-vertical {
    display: flex;
    flex-direction: column;
  }

  .flex-reverse {
    display: flex;
    flex-direction: row-reverse;
  }

  .flex-spaced {
    justify-content: space-evenly;
  }

  input[type='range'] {
    width: 100%;
    margin: 4px 0;
    background-color: transparent;
    -webkit-appearance: none;
  }
  input[type='range']:focus {
    outline: none;
  }
  input[type='range']::-webkit-slider-runnable-track {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAICAYAAAAvOAWIAAAAMUlEQVR42mPUEuORYCASMAIVGxCtWFBQ8D/Rijk4OIhXrKmpSbziqKio/7TxIClBBwCpPQeZYhCXdAAAAABJRU5ErkJggg==');
    border-radius: 0px;
    width: 100%;
    height: 8px;
    cursor: pointer;
  }
  input[type='range']::-webkit-slider-thumb {
    margin-top: -2px;
    width: 20px;
    height: 12px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAYCAAAAACt7+AcAAAA80lEQVR42u2QXUrDQBRGDzPXO40W1GW4BV/ctu+CW3AJIrb+tonzq00GNCWBdgGehzl8cGDgyu3lwjIlK5U8PF+vsmJ5YqddXOytzUrWdA1ToqNSALrtWl7imTIlNOOvw/ZTWsJv+FAw1w5/X+BGSHcFczWEvhVGnADBEnaOgd5/7IXOUPrAmUIHXb9nQ3X4PlD3TYTY71FoMFSskoiDQ4LUbwMUA8JR/If1jr4kitViq/GzoWsIfnBuqwmzoSr6lrEXyulHtc6GjaV5Kpid1Vc3mYqE1FpGOOARcjWVnIo8h5Q4hIjK+n3DYZbnsvIcwSb+ACWTbR0OfHJZAAAAAElFTkSuQmCC');
    background-size: 100%;
    cursor: pointer;
    -webkit-appearance: none;
  }
  @supports (-moz-appearance: none) {
    input[type='range'] {
      height: 0px;
    }
  }
  input[type='range']::-moz-range-track {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAICAYAAAAvOAWIAAAAMUlEQVR42mPUEuORYCASMAIVGxCtWFBQ8D/Rijk4OIhXrKmpSbziqKio/7TxIClBBwCpPQeZYhCXdAAAAABJRU5ErkJggg==');
    border-radius: 0px;
    width: 100%;
    height: 8px;
  }
  input[type='range']::-moz-range-thumb {
    border: none;
    border-radius: 0px;
    margin-top: -2px;
    width: 20px;
    height: 12px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAYCAAAAACt7+AcAAAA80lEQVR42u2QXUrDQBRGDzPXO40W1GW4BV/ctu+CW3AJIrb+tonzq00GNCWBdgGehzl8cGDgyu3lwjIlK5U8PF+vsmJ5YqddXOytzUrWdA1ToqNSALrtWl7imTIlNOOvw/ZTWsJv+FAw1w5/X+BGSHcFczWEvhVGnADBEnaOgd5/7IXOUPrAmUIHXb9nQ3X4PlD3TYTY71FoMFSskoiDQ4LUbwMUA8JR/If1jr4kitViq/GzoWsIfnBuqwmzoSr6lrEXyulHtc6GjaV5Kpid1Vc3mYqE1FpGOOARcjWVnIo8h5Q4hIjK+n3DYZbnsvIcwSb+ACWTbR0OfHJZAAAAAElFTkSuQmCC');
    background-size: 100%;
    cursor: pointer;
  }

  input[type='number'] {
    width: 30px;
    text-align: center;
  }
  input[type='text'] {
    width: 150px;
    text-align: left;
  }
  input[type='number'],
  input[type='text'] {
    height: 18px;
    margin: 4px 4px;
    background-color: #8e8e8e;
    outline: none;
    border-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAhElEQVR42m3MBZaFMBBE0aRxiOLO/lc580a/ViN1bkRCCPFdcFFKaa3VY35ESJZlVVU1TWOYpqEjuCSSlGXpne+6bhgHvnQEFy3655w11jHG0hFc1MfX7caY+Bc6gktRFOdxXNfJc56/BcFlP/Z126Z57v9CR3Bh8zxNMXCV5Ta+dAT/BMrUDuTSc0raAAAAAElFTkSuQmCC')
      4/2px repeat;
  }

  input[type='number']:focus,
  input[type='text']:focus {
    background-color: #f1be64;
  }
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }

  .text-button {
    border-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAAAAAAeBhgmAAAAkElEQVR42gXBQU7DMBAAwPHaolUFEgf+f+RvVBFqFZI2CV53pnx/nd8A2J9Tu/o4VYC+zdc22S4VoK/3qf0e60UD/q33uS3stQpS7495aVCjonYdoQhVRKhCESghEKIgAAAEAIDASImUA2FIXWbq0tCgyyB1aMuxnEoF+tiOvf14AsBZu93+AOD9s8YDAOzbC2KjQZ4dHgX7AAAAAElFTkSuQmCC')
      8/4px repeat;
    background-color: #8e8e8e;
    color: #000;
    font-weight: bold;
    user-select: none;
    height: 32px;
    width: fit-content;
    line-height: 32px;
    padding: 0px 8px;
    margin: 4px 2px;
  }

  textarea {
    border-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAhElEQVR42m3MBZaFMBBE0aRxiOLO/lc580a/ViN1bkRCCPFdcFFKaa3VY35ESJZlVVU1TWOYpqEjuCSSlGXpne+6bhgHvnQEFy3655w11jHG0hFc1MfX7caY+Bc6gktRFOdxXNfJc56/BcFlP/Z126Z57v9CR3Bh8zxNMXCV5Ta+dAT/BMrUDuTSc0raAAAAAElFTkSuQmCC')
      4/2px repeat;
    box-sizing: border-box;
    width: 100%;
    height: 600px;
    resize: none;
    outline: none;
    background-color: #8e8e8e;
  }
  textarea:focus {
    background-color: #f0dab4;
  }
  textarea:disabled {
    background-color: #8e8e8e;
    color: #303030;
  }
`;var Me,Ue,Te,Oe,$e,Ie,Pe=function(e,t,i,a){var n,r=arguments.length,s=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s},Be=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};let je=class extends re{constructor(){super(),Me.add(this),this.concealed=!1;try{const e=JSON.parse(localStorage.getItem("sprite_preview_settings"));Be(this,Me,"m",Ie).call(this,e)}catch(e){Be(this,Me,"m",Ie).call(this,{imageRules:[{}],invertLayerOrder:!1,animationSpeed:60})}}render(){return N`
      <sp-overlay
        id="overlay"
        ?concealed=${this.concealed}
        @close=${()=>{Be(this,Me,"m",Ue).call(this),this.concealed=!0}}
      >
        <div class="flex-reverse"><div class="close-icon"></div></div>
        <div>
          <div class="flex-horizontal white">
            <div class="checkbox-caption">Invert order of layers</div>
            <input
              type="checkbox"
              ?checked=${this._invertLayerOrder}
              @change=${e=>{this._invertLayerOrder=e.target.checked}}
            />
          </div>
          <div class="flex-horizontal white">
            <sp-number-input
              caption="Default animation speed (fps):"
              minValue="1"
              maxValue="120"
              value="${this._animationSpeed||60}"
              @change=${e=>{this._animationSpeed=e.detail}}
            ></sp-number-input>
          </div>
          <table>
            <tr class="image-rule-header" id="image_rule_header">
              <th class="image-rule-header-cell"></th>
              <th class="image-rule-header-cell"></th>
              <th class="image-rule-header-cell">
                Filename
                <sp-tooltip>
                  RegExp that will be matched against the names of all added spritesheets. If empty,
                  will match <b>all</b> uploaded files.
                </sp-tooltip>
              </th>
              <th class="image-rule-header-cell">
                Sheet number
                <sp-tooltip>
                  RegExp matching a part of the file name. Spritesheets that have the same name if
                  the matched part is ignored will be grouped into the same layer.
                </sp-tooltip>
              </th>
              <th class="image-rule-header-cell">Columns</th>
              <th class="image-rule-header-cell">Rows</th>
              <th class="image-rule-header-cell">Scale</th>
              <th class="image-rule-header-cell">Blend mode</th>
              <th class="image-rule-header-cell">Draw mode</th>
              <th class="image-rule-header-cell">Color</th>
              <th class="image-rule-header-cell">Ignore</th>
              <th class="image-rule-header-cell">
                Priority
                <sp-tooltip>
                  When multiple spritesheet are selected at once, this priority determines the order
                  of layers they will be put in.
                </sp-tooltip>
              </th>
              <th>
                <div
                  class="add-icon"
                  @click=${()=>{this._imageRules.push({}),this.requestUpdate()}}
                ></div>
              </th>
            </tr>
            ${this._imageRules.map((e,t)=>N`
                <tr
                  class="image-rule"
                  @dragenter=${e=>{e.preventDefault()}}
                  @dragover=${e=>{e.preventDefault()}}
                  @drop=${e=>{if("ImageRule"==e.dataTransfer.getData("dragged-element")){const i=parseInt(e.dataTransfer.getData("dragged-element-index"));if(i!=t){const e=this._imageRules.splice(i,1)[0];this._imageRules.splice(t,0,e)}this.requestUpdate()}e.stopPropagation()}}
                >
                  <td class="image-rule-cell">
                    <div
                      class="drag-block-small"
                      draggable="true"
                      @dragstart=${e=>{globalThis.draggedElement=e.target,e.dataTransfer.setData("dragged-element","ImageRule"),e.dataTransfer.setData("dragged-element-index",t.toString()),e.stopPropagation()}}
                    ></div>
                  </td>
                  <td class="image-rule-cell">
                    <div
                      class="eye-icon ${e.concealed?"concealed":""}"
                      @click=${()=>{e.concealed=!e.concealed,this.requestUpdate()}}
                    ></div>
                  </td>
                  <td class="image-rule-cell">
                    <input
                      type="text"
                      .value=${Re(e.filename||"")}
                      @change=${t=>{e.filename=t.target.value}}
                    />
                  </td>
                  <td class="image-rule-cell">
                    <input
                      type="text"
                      .value=${Re(e.suffixRegex||"")}
                      @change=${t=>{e.suffixRegex=t.target.value}}
                    />
                  </td>
                  <td class="image-rule-cell">
                    <input
                      type="number"
                      .value=${Re(e.columns||"")}
                      @change=${t=>{e.columns=parseInt(t.target.value)||void 0}}
                    />
                  </td>
                  <td class="image-rule-cell">
                    <input
                      type="number"
                      .value=${Re(e.rows||"")}
                      @change=${t=>{e.rows=parseInt(t.target.value)||void 0}}
                    />
                  </td>
                  <td class="image-rule-cell">
                    <input
                      type="number"
                      .value=${Re(e.scale||"")}
                      @change=${t=>{e.scale=parseFloat(t.target.value)||void 0}}
                    />
                  </td>
                  <td class="image-rule-cell">
                    <sp-blend-mode-select
                      .value=${Re(e.blendMode||"normal")}
                      @change=${t=>{e.blendMode=t.detail}}
                    ></sp-blend-mode-select>
                  </td>
                  <td class="image-rule-cell">
                    <sp-draw-mode-select
                      .value=${Re(e.drawMode||"sprite")}
                      @change=${t=>{e.drawMode=t.detail}}
                    ></sp-draw-mode-select>
                  </td>
                  <td class="image-rule-cell">
                    <sp-color-picker
                      .rgba=${e.tint||[255,255,255,255]}
                      @change=${t=>{e.tint=t.detail}}
                    ></sp-color-picker>
                  </td>
                  <td class="image-rule-cell">
                    <input
                      type="checkbox"
                      ?checked=${e.ignore}
                      @change=${t=>{e.ignore=t.target.checked}}
                    />
                  </td>
                  <td class="image-rule-cell">
                    <input
                      type="number"
                      .value=${Re(e.priority||"")}
                      @change=${t=>{e.priority=parseInt(t.target.value)||void 0}}
                    />
                  </td>
                  <td class="image-rule-cell">
                    <div
                      class="delete-icon"
                      @click=${()=>{this._imageRules.splice(t,1),this.requestUpdate()}}
                    ></div>
                  </td>
                </tr>
              `)}
          </table>
          <div class="flex-reverse">
            <div class="import-icon" @click=${Be(this,Me,"m",Oe)}></div>
            <div class="export-icon" @click=${Be(this,Me,"m",Te)}></div>
          </div>
        </div>
      </sp-overlay>
    `}show(){this.concealed=!1}getImageRule(e){for(const t of this._imageRules)if(-1!=e.search(new RegExp(t.filename||"")))return t;return{}}getFilePriority(e){return this.getImageRule(e).priority||0}get invertLayerOrder(){return this._invertLayerOrder}get animationSpeed(){return this._animationSpeed||60}get container(){return this}};function Ve(e,t){if(""===(e.suffixRegex||""))return;const i=new RegExp(e.suffixRegex);return t.replace(i,"")}function De(e,t,i){let[a,n]=function(e){let t=1,i=16;for(let a=2;a<=16;a++){if(e.width%a!=0)continue;const n=e.width/a;let r=0,s=0;for(let t=0;t<e.width-n;t+=4)for(let i=0;i<e.height;i+=4)for(let a=0;a<4;a++)r++,s+=Math.abs(e.data[4*(e.width*i+t)+a]-e.data[4*(e.width*i+t+n)+a]);s/r<i+1&&(i=s/r,t=a)}let a=1;i=16;for(let t=2;t<=16;t++){if(e.height%t!=0)continue;const n=e.height/t;let r=0,s=0;for(let t=0;t<e.width;t+=4)for(let i=0;i<e.height-n;i+=4)for(let a=0;a<4;a++)r++,s+=Math.abs(e.data[4*(e.width*i+t)+a]-e.data[4*(e.width*(i+n)+t)+a]);s/r<i+1&&(i=s/r,a=t)}return[a,t]}(i);void 0!==t.columns&&(n=t.columns),void 0!==t.rows&&(a=t.rows);const r=Ve(t,e);return{hidden:t.concealed||!1,group:r||e,filenames:[e],size:new ye(i.width/n,i.height/a),shift:new ye(0,0),frameCount:a*n,lineLength:n,linesPerFile:a,blendMode:t.blendMode||"normal",drawMode:t.drawMode||"sprite",tint:t.tint||[255,255,255,255]}}Me=new WeakSet,Ue=function(){localStorage.setItem("sprite_preview_settings",JSON.stringify(Be(this,Me,"m",$e).call(this))),this.dispatchEvent(new CustomEvent("settings-updated"))},Te=function(){navigator.clipboard.writeText(JSON.stringify(Be(this,Me,"m",$e).call(this),void 0,2))},Oe=function(){try{navigator.clipboard.readText().then(e=>{const t=JSON.parse(e);Array.isArray(t.imageRules)&&Be(this,Me,"m",Ie).call(this,t)})}catch(e){}},$e=function(){return{imageRules:this._imageRules,invertLayerOrder:this._invertLayerOrder,animationSpeed:this._animationSpeed}},Ie=function(e){Array.isArray(e.imageRules)&&0!=e.imageRules.length||(e.imageRules=[{}]),this._invertLayerOrder=e.invertLayerOrder,this._animationSpeed=e.animationSpeed,this._imageRules=e.imageRules,this.requestUpdate()},je.styles=[ke,r`
      th {
        text-align: left;
        font-weight: normal;
      }

      .checkbox-caption {
        height: 32px;
        line-height: 32px;
        padding: 0px 2px;
      }

      .add-icon {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAACVBMVEX////h4eHd399Noxm+AAAAAXRSTlMAQObYZgAAADRJREFUeNpjwAqYFsAYCXRicK2aGpa1atUCBs7QrFWhoaEBQJFVq0AiYDUBQILGjAVYQwIAgZQUh+soxiQAAAAASUVORK5CYII=');
        background-size: 100%;
        width: 16px;
        height: 16px;
        margin: 8px 4px;
      }

      .delete-icon {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAiklEQVR42tWPsQ2DQBAEt4RzJZQANdAFGakjRAdUgkQHHxAQUgITOaEAsvMn1knoZcfekS6Z1UqnT1hwgkX3kHAGLDPgpBAtL7xMNq048S+cwnjirNiNFc/GJNHjJCp2iZFRYqci4fRSFBoOiYlJ4qD5t8LvNzs2Zh4ZI+7MRhcLBWKh5irqi1p6A9XbO4YHN0IaAAAAAElFTkSuQmCC');
        background-size: 100%;
        width: 16px;
        height: 16px;
        margin: 8px 4px;
      }

      .export-icon {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAABOklEQVR42mIYtgBQOxlANBRFYdjEJGpFZoVEUiAJFAIxAIRBrCAEikDAiAIAGQAURvREaDIAEZgAAYxSIQZ51ndiHcxzz3snbD+w7/wf9953mKPGI10E4ZUmx8z4y3nOiZFEYupMe+pjtBAj72xlC26QlMRU0ut7OvhNxCFl1tigSoN4QLGZdvpOv3xKMUEWuEM0HSYsQQWhzXKQ5agjmjNL0OCJQoio4l4FXcbDI21mU29okZ4qqiFc4ijzja5VcBmCqxQyBbsqeA7BouMzW1fBVwjmU6snREQ8qOCHqJ99736UkGB6XkGOKCi4+M+O3iKJXDGi2Klo+ev2qvvrhqKJIDSMN3Nd5wpLg3/U/mKMj9pcf+iZDDqJ8uELyAXplF+ww3wgB36BnWELPlyCF1uwzWdm/Y2y1f8Fcc10Q2C2TUwAAAAASUVORK5CYII=');
        background-size: 100%;
        width: 32px;
        height: 32px;
        margin: 2px 4px 6px;
      }

      .import-icon {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAABOklEQVR42t2UM2BlQRiF17Zt27ar9W7QxFVsow3a2FXsVHHfxbZtJ+dx4pn7JsY71fxnvu9dr1vzP2zGD/gjF0MQSVKBSChjCy+8AVqogmhGyvCZBz+GVIgYAfQU4edRBpFglITw/SietDUb9viK+3iBv3BDFpl24jhbEDoON+A/1k9rXyNZ1nmy8E/jeBFOMfZooA/92EsvUwjehYsCp/kUPVClFWfH/99awYVWgQdtrEPwfuxUeKtdaUMPIkjkeFY+0IaxRODCITgyefEDUYiVpIUI8mWrYJwUEEx+K1AAETV2vK+OERVvxjX+V9eKgt/mxomCH2cr+HG6whQjEKGOH6d9Sp5gO/92J5J9jF6d9PdYAhHJOUafQXr1lS8wwjlKHqGFV8DOYguaOQXfWIJfHIph+GI9nRcDTpN++QrEtxwAAAAASUVORK5CYII=');
        background-size: 100%;
        width: 32px;
        height: 32px;
        margin: 2px 4px 6px;
      }

      .drag-block-small {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAIAAAB/FOjAAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+kEDRAXNbVjfTIAAABdSURBVHjanY4xDgMhDAS95kcofQj/f1DAGLIWbSi4WURjjTSon5qSqqa1lrvLP+acw8wGZyjvogoKRA64j/ZtvTd7IlwnvXIGlCPCdyBuiH8LYFFoBwEbCa6F66Qfaz5BFQ6DVd0AAAAASUVORK5CYII=');
        background-repeat: repeat-y;
        width: 16px;
        height: 24px;
        margin: 0px 2px;
      }

      .eye-icon {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAA7klEQVR42tWTvQrCMBSFbSAUuomOVlx0cJQ2PoVuEZ37AIrYQSvx0T/vEC5Yq9LRnOmEk5tz/wZ/cEiwjJgKRliS72JDzoYTDXdBw4ktM8wn+RhPw6OFO55xl5El5ygJ1FSCmhBvzixJXq2sNfaFkgwryHBc4u2NNUajs0LlTEgp8YKClIk+aVjFX1hwVTMlKQdCZAdhTo1dWYicIUdNsCajJCgPFGTUyo8MB3geigrLDuUCj6VCOTvTv7NtS8V3S+2k3UvS+1bS866y5qQUWtb8razauJs+cZ2Nc5jeo9F/+H6Pt7AZptcC/cHOPwGkwpaZF4wrwwAAAABJRU5ErkJggg==');
        width: 24px;
        height: 24px;
      }
      .eye-icon.concealed {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAABGUlEQVR42r3TgacCQRDH8fb2HVrUe5dKewFFcQcH3F13W///P/V9izV2OBG0I9B89BvTrL7zMFQUn4CKiQtFwhbHL1scFrMMCi4EIsFypSek6rlFaN6TIzOvrAINbmEKRXq6WCPPhAb2GN3uOahg8UNJzZjIzFkIhprAzDEjjjsey0ZI4JQIVUqtyZGJlh9qCTazi+2s6WXAHqsJnpJH9v16RctLqiOGUeSGpcs6mhWNApY7epZCAx1ppMQzKWIZVKQ4xU5W9aTG0mZEVilDR2A4EeQ3Nlg8dxyaBHy+iTOzkJoyrU4IB2kXsmeQYA+6WEMeLGsX5GhStFR6lcuHtOWm/t5X7FsiB7TND4hImKg+ucmCv4i/8v4BFnSTVSU61MEAAAAASUVORK5CYII=');
      }

      .white {
        color: #ffffff;
      }

      .image-rule-cell,
      .image-rule-header-cell {
        padding: 0;
      }

      .image-rule-header-cell {
        color: #ffffff;
      }
    `],Pe([ce({type:Boolean})],je.prototype,"concealed",void 0),Pe([pe()],je.prototype,"_imageRules",void 0),Pe([pe()],je.prototype,"_invertLayerOrder",void 0),Pe([pe()],je.prototype,"_animationSpeed",void 0),je=Pe([oe("sp-user-settings")],je);var Ne,ze,Qe=function(e,t,i,a,n){if("m"===a)throw new TypeError("Private method is not writable");if("a"===a&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?n.call(e,i):n?n.value=i:t.set(e,i),i},Le=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};class Ge extends EventTarget{constructor(e){super(),Ne.set(this,void 0),ze.set(this,new Map),Qe(this,Ne,e,"f"),Qe(this,ze,new Map,"f")}async loadImageFromFile(e){const t=await async function(e){const t=new FileReader,i=new Promise(e=>{t.addEventListener("load",()=>{e(t.result)})});return t.readAsDataURL(e),me(await i)}(e),i={filename:e.name,id:crypto.randomUUID(),size:new ye(t.width,t.height),data:t};return Le(this,ze,"f").set(e.name,i),Le(this,Ne,"f").addImage(i.id,t),this.dispatchEvent(new CustomEvent("image_updated",{detail:i})),i}getLoadedImage(e){return Le(this,ze,"f").get(e)}static instance(){return globalThis.fileManager}}function He(e,t,i){return Math.min(Math.max(e,t),i)}function qe(e){if(void 0!==e)return e.split("/").pop()}function Ke(){return{hidden:!0,variant:0,position:new ye(0,0),shadowPosition:new ye(0,0),showShadow:!0}}function Ye(){return{size:new ye(1,1),animation:[],circuitConnector:Ke(),fluidBoxes:[]}}function Je(e){return Array.isArray(e)?new ye(e[0],e[1]):"number"==typeof e.x&&"number"==typeof e.y?new ye(e.x,e.y):new ye(0,0)}function We(e){let t;if(Array.isArray(e.size))t=new ye(e.size[0],e.size[1]);else{if("number"!=typeof e.width||"number"!=typeof e.height)throw"Either `size` or `width` and `height` fields must be present.";t=new ye(e.width,e.height)}const i=Je(e.shift).mul(64).floor(),a=void 0!==e.blend_mode?e.blend_mode:"normal";let n,r;return n=e.draw_as_shadow?"shadow":e.draw_as_glow?"glow":e.draw_as_light?"light":"sprite",r=Array.isArray(e.tint)?[He(Math.floor(255*e.tint[0]),0,255),He(Math.floor(255*e.tint[1]),0,255),He(Math.floor(255*e.tint[2]),0,255),He(Math.floor(255*e.tint[3]),0,255)]:void 0!==e.tint?[He(Math.floor(255*e.tint.r),0,255),He(Math.floor(255*e.tint.g),0,255),He(Math.floor(255*e.tint.b),0,255),He(Math.floor(255*e.tint.a),0,255)]:[255,255,255,255],{hidden:!1,size:t,shift:i,blendMode:a,drawMode:n,tint:r}}function Xe(e){let t,i;if("string"==typeof e.filename)t=qe(e.filename),i=[t];else if(void 0!==e.filename)throw"`filename` is not a string.";if(Array.isArray(e.filenames)&&(i=e.filenames.map(qe),void 0===t&&(t=e.filenames[0])),void 0===i)throw"At least one of the fields `filename` and `filenames` must be present.";const a=void 0!==e.frame_count?e.frame_count:1,n=void 0!==e.line_length?e.line_length:a,r=void 0!==e.lines_per_file?e.lines_per_file:Math.floor(a/n);return{...We(e),group:t,filenames:i,frameCount:a,lineLength:n,linesPerFile:r}}function Ze(e){return Array.isArray(e.layers)?e.layers.flatMap(Ze):[Xe(e)]}function et(e){let t,i;if("string"!=typeof e.filename)throw"filename must be present";return t=qe(e.filename),i="number"==typeof e.x&&"number"==typeof e.y?new ye(e.x,e.y):Array.isArray(e.position)?new ye(e.position[0],e.position[1]):new ye(0,0),{...We(e),filename:t,position:i}}function tt(e){return Array.isArray(e.layers)?e.layers.flatMap(tt):[et(e)]}function it(e){return{position:Je(e.position),direction:e.direction/4||0}}function at(e){const t=(e||[])[0]?.sprites?.connector_main;if("__base__/graphics/entity/circuit-connector/ccm-universal-04a-base-sequence.png"!==t?.filename)return Ke();const i=void 0!==t.position?Je(t.position):new ye(t.x,t.y),a=i.y/50*8+i.x/52,n=Je(t.shift).mul(64).add(new ye(0,-2)),r=(e||[])[0]?.sprites?.connector_shadow,s=void 0!==r;return{hidden:!0,variant:a,position:n,shadowPosition:s?Je(r.shift).mul(64).add(new ye(-5,-5)):n,showShadow:s}}function nt(e){let t;return t="number"==typeof e.tile_width&&"number"==typeof e.tile_height?new ye(e.tile_width,e.tile_height):Array.isArray(e.collision_box)?Je(e.collision_box[1]).subtract(Je(e.collision_box[0])):"object"==typeof e.collision_box?.left_top&&"object"==typeof e.collision_box?.right_bottom?Je(e.collision_box.right_bottom).subtract(Je(e.collision_box.left_top)):new ye(1,1),{size:new ye(Math.ceil(t.x),Math.ceil(t.y)),animation:Ze(e.graphics_set.animation),fluidBoxes:e.fluid_boxes?.map(e=>function(e){return{pipePicturesNorth:tt(e.pipe_picture.north),pipePicturesEast:tt(e.pipe_picture.east),pipePicturesSouth:tt(e.pipe_picture.south),pipePicturesWest:tt(e.pipe_picture.west),pipeConnections:e.pipe_connections?.map(it)||[]}}(e))||[],circuitConnector:at(e.circuit_connector)}}function rt(e){return`"${e}"`}function st(e){return e.toString()}function ot(e,t){const i="  ".repeat(t);let a="{\n";return e.forEach(e=>{a+=`${i}  ${e},\n`}),a+=`${i}}`,a}function lt(e,t){const i="  ".repeat(t);let a="{\n";for(const[t,n]of e)a+=`${i}  ${t} = ${n},\n`;return a+=`${i}}`,a}Ne=new WeakMap,ze=new WeakMap;var dt,ct,pt,ht,ut,At,gt=function(e,t,i,a){var n,r=arguments.length,s=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s},mt=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};let ft=class extends re{constructor(){super(),dt.add(this),this.data=[]}render(){return N`
      <sp-collapse
        id="container"
        caption="Animation"
        concealable
        nudgeable
        @file-drop=${mt(this,dt,"m",pt)}
        @nudge=${e=>{this._layers.forEach(t=>{t.nudge(e.detail)})}}
      >
        <div class="layers ${globalThis.userSettings.invertLayerOrder?"inverted-order":""}">
          ${this.data.map((e,t)=>N`<sp-animation-layer
              .data=${e}
              @delete=${e=>{e.stopPropagation(),this.data.splice(t,1),this.requestUpdate(),this.dispatchEvent(new CustomEvent("data-update",{bubbles:!0,composed:!0}))}}
              @data-update=${()=>{this.requestUpdate()}}
              @dragstart=${mt(this,dt,"m",ut)}
              @dragenter=${e=>{mt(this,dt,"m",ht).call(this,e)&&(e.dataTransfer.dropEffect="move"),e.preventDefault()}}
              @dragover=${e=>{mt(this,dt,"m",ht).call(this,e)&&(e.dataTransfer.dropEffect="move"),e.preventDefault()}}
              @drop=${mt(this,dt,"m",At)}
            ></sp-animation-layer>`)}
        </div>
        <div class="flex-reverse">
          <sp-file-button @filesAdded=${mt(this,dt,"m",pt)} caption="+ Add spritesheets" allowJson>
          </sp-file-button>
        </div>
      </sp-collapse>
    `}connectedCallback(){super.connectedCallback(),globalThis.userSettings.addEventListener("settings-updated",()=>{this.requestUpdate()})}getSprites(e){return this._container.concealed?[]:Array.from(this._layers).flatMap(t=>t.getSprites(e))}addLayer(e){this.data.push(e),this.requestUpdate()}addFileToGroup(e,t){return this.data.some((i,a)=>i.group===e&&(this._layers[a].addFile(t),!0))}exportLua(e){const t=ot(Array.from(this._layers).map(t=>t.exportLua(e+2)),e+1);return lt(new Map([["layers",t]]),e)}exportJson(){return{layers:Array.from(this._layers).map(e=>e.exportJson())}}async loadFromFile(e){const t=await Ge.instance().loadImageFromFile(e),i=t.filename;for(const e of this.data)if(-1!=e.filenames.indexOf(i))return;const a=globalThis.userSettings.getImageRule(i);a.ignore||this.addFileToGroup(Ve(a,i),i)||this.addLayer(De(t.filename,a,t.data))}};dt=new WeakSet,ct=async function(e){try{const i=(t=await async function(e){const t=new FileReader,i=new Promise(e=>{t.addEventListener("load",()=>{e(t.result)})});return t.readAsText(e),i}(e),Ze(JSON.parse(t)));this.data.push(...i),this.requestUpdate()}catch(e){}var t},pt=async function(e){const t=e.detail,i=t.filter(e=>"application/json"==e.type);for(const e of i)await mt(this,dt,"m",ct).call(this,e);const a=t.filter(e=>"image/png"==e.type).toSorted((e,t)=>{const i=globalThis.userSettings.getFilePriority(e.name),a=globalThis.userSettings.getFilePriority(t.name);return i!=a?i-a:e.name.localeCompare(t.name)});for(const e of a)await this.loadFromFile(e);this.requestUpdate(),this.dispatchEvent(new CustomEvent("data-update",{bubbles:!0,composed:!0}))},ht=function(e){return"Animation"==e.dataTransfer.getData("dragged-element")&&globalThis.draggedElement?.parentElement===e.target.parentElement},ut=function(e){globalThis.draggedElement=e.target,e.dataTransfer.setData("dragged-element","Animation"),e.stopPropagation()},At=function(e){if(mt(this,dt,"m",ht).call(this,e)){const t=Array.from(e.target.parentNode.children),i=t.indexOf(globalThis.draggedElement),a=t.indexOf(e.target);if(i!=a){const e=this.data.splice(i,1)[0];this.data.splice(a,0,e)}this.requestUpdate(),this.dispatchEvent(new CustomEvent("data-update",{bubbles:!0,composed:!0}))}e.stopPropagation()},ft.styles=[ke,r`
      .layers {
        display: flex;
        flex-direction: column;
      }
      .layers.inverted-order {
        flex-direction: column-reverse;
      }
      sp-animation-layer {
        margin: -2px 0px 0px 0px;
      }
    `],gt([ce({type:Array})],ft.prototype,"data",void 0),gt([ue("#container")],ft.prototype,"_container",void 0),gt([ge("sp-animation-layer")],ft.prototype,"_layers",void 0),ft=gt([oe("sp-animation")],ft);var vt,wt,bt,yt,xt,_t,Et=function(e,t,i,a){var n,r=arguments.length,s=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s},St=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};let Ct=class extends re{constructor(){super(),vt.add(this),this.data={hidden:!1,group:"",filenames:[],lineLength:0,linesPerFile:0,frameCount:0,blendMode:"normal",drawMode:"sprite",shift:new ye(0,0),size:new ye(0,0),tint:[255,255,255,255]}}render(){return N`
      <sp-collapse concealable id="container" caption="${this.data.group}"
          @file-drop=${e=>{e.detail.filter(e=>"image/png"===e.type).forEach(e=>{Ge.instance().loadImageFromFile(e),this.addFile(e.name)})}}
          ?concealed=${this.data.hidden} collapsed moveable deleteable
          @conceal-toggle=${St(this,vt,"m",_t)}
          >
        <div>
          <div>
            <sp-image-file-list id="file_list" .filenames=${this.data.filenames}
              @change=${()=>{St(this,vt,"m",yt).call(this)}}>
            </sp-image-file-list>
          </div>
          <div class="flex-reverse">
            <table>
              <tr>
                <td>
                  <sp-number-input
                    caption="Width:"
                    id="width"
                    value=${this.data.size.x}
                    minValue="0"
                    maxValue="1024"
                    @change=${e=>{this.data.size.x=e.detail,St(this,vt,"m",wt).call(this)}}
                  >
                  </sp-number-input>
                </td>
                <td>
                  <sp-number-input
                    caption="Height:"
                    id="height"
                    value=${this.data.size.y}
                    minValue="0"
                    maxValue="1024"
                    @change=${e=>{this.data.size.y=e.detail,St(this,vt,"m",wt).call(this)}}
                  >
                  </sp-number-input>
                </td>
                <td>
                  <sp-number-input
                    caption="Shift x:"
                    id="shift_x"
                    value=${this.data.shift.x}
                    minValue="-1024"
                    maxValue="1024"
                    @input=${e=>{this.data.shift.x=e.detail}}
                  >
                  </sp-number-input>
                </td>
                <td>
                  <sp-number-input
                    caption="Shift y:"
                    id="shift_y"
                    value=${this.data.shift.y}
                    minValue="-1024"
                    maxValue="1024"
                    @input=${e=>{this.data.shift.y=e.detail}}
                  >
                  </sp-number-input>
                </td>
                <td>
                  <sp-nudge @nudge=${e=>{this.nudge(e.detail)}}></sp-nudge>
                </td>
              </tr>
                <td>
                  <sp-number-input
                    caption="Columns:"
                    id="columns"
                    value=${this.data.lineLength}
                    minValue="1"
                    maxValue="64"
                    @change=${e=>{this.data.lineLength=e.detail,St(this,vt,"m",bt).call(this)}}
                  >
                  </sp-number-input>
                </td>
                <td>
                  <sp-number-input
                    caption="Rows:"
                    id="rows"
                    value=${this.data.linesPerFile}
                    minValue="1"
                    maxValue="64"
                    @change=${e=>{this.data.linesPerFile=e.detail,St(this,vt,"m",bt).call(this)}}
                  >
                  </sp-number-input>
                </td>
                <td>
                  <sp-number-input
                    caption="Frames:"
                    id="rows"
                    value=${this.data.frameCount}
                    minValue="1"
                    maxValue="1024"
                    @input=${e=>{this.data.frameCount=e.detail}}
                  >
                  </sp-number-input>
                </td>
              </tr>
            </table>
          </div>
          <div class="flex-reverse">
            <sp-color-picker
              .rgba=${this.data.tint}
              @change=${e=>{this.data.tint=e.detail}}
            ></sp-color-picker>
            <sp-draw-mode-select
              value=${this.data.drawMode}
              @change=${e=>{this.data.drawMode=e.detail}}
            ></sp-draw-mode-select>
            <sp-blend-mode-select
              value=${this.data.blendMode}
              @change=${e=>{this.data.blendMode=e.detail}}
            ></sp-blend-mode-select>
          </div>
        </div>
      </sp-collapse>
    `}tryResolveImage(e){return-1!=this.data.filenames.findIndex(t=>t===e)}addFile(e){this.data.filenames.push(e),St(this,vt,"m",yt).call(this),this._fileList.requestUpdate(),this.requestUpdate()}nudge(e){this.data.shift.x+=e.x,this.data.shift.y+=e.y,this.requestUpdate()}getSprites(e){if(this.data.hidden)return[];const t=(e%=this.data.frameCount)%this.data.lineLength;let i=Math.floor(e/this.data.lineLength);const a=this.data.filenames[Math.trunc(i/this.data.linesPerFile)];if(void 0===a)return[];const n=Ge.instance().getLoadedImage(a);return void 0===n?.id?[]:(i%=this.data.linesPerFile,[{imageId:n.id,size:new ye(this.data.size.x,this.data.size.y),shift:new ye(this.data.size.x*t,this.data.size.y*i),topLeft:this.data.shift.subtract(new ye(this.data.size.x>>1,this.data.size.y>>1)),blendMode:this.data.blendMode,drawMode:this.data.drawMode,tint:this.data.tint}])}exportLua(e){const t=new Map([["scale",st(.5)],["filenames",ot(this.data.filenames.map(rt),e+1)],["blend_mode",rt(this.data.blendMode)],["width",st(this.data.size.x)],["height",st(this.data.size.y)],["line_length",st(this.data.lineLength)],["lines_per_file",st(this.data.linesPerFile)],["frame_count",st(this.data.frameCount)]]),i=this.data.shift.add(new ye(this.data.size.x%2,this.data.size.y%2).mul(.5));t.set("shift",`util.by_pixel_hr(${i.x}, ${i.y})`);const a=this.data.tint.map(e=>e/255);return t.set("tint",`{ r = ${a[0]}, g = ${a[1]}, b = ${a[2]}, a = ${a[3]} }`),"light"==this.data.drawMode?t.set("draw_as_light",st(!0)):"glow"==this.data.drawMode?t.set("draw_as_glow",st(!0)):"shadow"==this.data.drawMode&&t.set("draw_as_shadow",st(!0)),lt(t,e)}exportJson(){const e={scale:.5,filenames:this.data.filenames,blend_mode:this.data.blendMode,width:this.data.size.x,height:this.data.size.y,shift:this.data.shift.add(new ye(this.data.size.x%2,this.data.size.y%2).mul(.5)).mul(1/64).asPrototype(),line_length:this.data.lineLength,lines_per_file:this.data.linesPerFile,frame_count:this.data.frameCount,tint:this.data.tint.map(e=>e/255)};return"light"==this.data.drawMode?e.draw_as_light=!0:"glow"==this.data.drawMode?e.draw_as_glow=!0:"shadow"==this.data.drawMode&&(e.draw_as_shadow=!0),e}};vt=new WeakSet,wt=function(){const e=St(this,vt,"m",xt).call(this);void 0!==e&&(this.data.lineLength=Math.floor(e.x/this.data.size.x),this.data.linesPerFile=Math.floor(e.y/this.data.size.y),St(this,vt,"m",yt).call(this),this.requestUpdate())},bt=function(){const e=St(this,vt,"m",xt).call(this);void 0!==e&&(this.data.size.x=Math.floor(e.x/this.data.lineLength),this.data.size.y=Math.floor(e.y/this.data.linesPerFile),St(this,vt,"m",yt).call(this))},yt=function(){if(this.data.frameCount=this.data.filenames.length*this.data.lineLength*this.data.linesPerFile,this.data.filenames.length>0){const e=Ge.instance().getLoadedImage(this.data.filenames[this.data.filenames.length-1]);void 0!==e&&(this.data.frameCount+=(Math.floor(e.size.y/this.data.size.y)-this.data.linesPerFile)*this.data.lineLength)}this.requestUpdate()},xt=function(){if(0!=this.data.filenames.length)return Ge.instance().getLoadedImage(this.data.filenames[0])?.size},_t=function(e){this.data.hidden=e.detail,this.requestUpdate()},Ct.styles=[ke],Et([ce({type:Object})],Ct.prototype,"data",void 0),Et([ue("#container")],Ct.prototype,"_container",void 0),Et([ue("#file_list")],Ct.prototype,"_fileList",void 0),Ct=Et([oe("sp-animation-layer")],Ct);var Ft,Rt,kt=function(e,t,i,a){var n,r=arguments.length,s=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s},Mt=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};let Ut=class extends re{constructor(){super(),this.collapsed=!1,this.collapsed=!1}onClick(){this.collapsed=!this.collapsed,this.dispatchEvent(new CustomEvent("collapse-toggle",{bubbles:!0,composed:!0,detail:this.collapsed}))}render(){return N`<div
      class="${this.collapsed?"collapsed":"expanded"}"
      @click=${this.onClick}
    ></div>`}};Ut.styles=r`
    div {
      margin: 4px;
      width: 16px;
      height: 16px;
      background-size: 100%;
    }
    div.expanded {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+kDFxcVOp8hf08AAAAySURBVHjaYxhsYBSsXL12IhBvIoAn4jOAG58hUDluhA7ChhDWTNgQTM0kGQLXTDswCgCmTmARdcP4gQAAAABJRU5ErkJggg==');
    }
    div.collapsed {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfpAx0AICy/EF05AAAANElEQVR42mMYxmDl6rUTgZibEgM2wQwh2wCKDAFppsgQhGaEIRQbQF8voGumfzTCNQ9/AAAuqWARkMs+BQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNS0wMy0yOVQwMDozMjowOCswMDowMEP8cdkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjUtMDMtMjlUMDA6MzI6MDgrMDA6MDAyocllAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI1LTAzLTI5VDAwOjMyOjQ0KzAwOjAwJl6MNAAAAABJRU5ErkJggg==');
    }
  `,kt([ce({type:Boolean})],Ut.prototype,"collapsed",void 0),Ut=kt([oe("sp-collapse-icon")],Ut);let Tt=class extends re{constructor(){super(),Ft.add(this),this.caption="",this.collapsed=!1,this.concealed=!1,this.concealable=!1,this.deleteable=!1,this.moveable=!1,this.nudgeable=!1,this.addEventListener("collapse-toggle",e=>{e.stopPropagation(),this.collapsed=e.detail})}render(){return N`
      <div>
        <div
          class="header"
          draggable="${this.moveable?"true":"false"}"
          @dragover=${e=>{e.preventDefault()}}
          @drop=${e=>{e.preventDefault();const t=Array.from(e.dataTransfer?.items||[]).map(e=>e.getAsFile());t.length>0&&this.dispatchEvent(new CustomEvent("file-drop",{detail:t}))}}
        >
          ${this.concealable?N`<div
                class="eye-icon ${this.concealed?"concealed":""} "
                @click=${Mt(this,Ft,"m",Rt)}
              ></div>`:N`<div class="eye-placeholder"></div>`}
          <sp-collapse-icon .collapsed=${this.collapsed}></sp-collapse-icon>
          <div class="caption">${this.caption}</div>
          ${this.nudgeable?N`<sp-nudge
                @nudge=${e=>{this.dispatchEvent(new CustomEvent("nudge",{detail:e.detail}))}}
              ></sp-nudge>`:Q}
          ${this.moveable?N`<div class="drag-block"></div>`:Q}
          ${this.deleteable?N`<div
                class="delete-icon"
                @click=${()=>{this.dispatchEvent(new CustomEvent("delete",{bubbles:!0,composed:!0}))}}
              ></div>`:Q}
        </div>
        <div ?hidden=${this.collapsed} class="body">
          <slot></slot>
        </div>
      </div>
    `}};Ft=new WeakSet,Rt=function(){this.concealed=!this.concealed,this.dispatchEvent(new CustomEvent("conceal-toggle",{detail:this.concealed}))},Tt.styles=r`
    .header {
      border-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAIAAAC0D9CtAAABDElEQVR42mII8vaIj4pIS07MTEvNSk/LykjHREBxQGnkga0wCEVBQPe/UyU9dP5Q5Pc+575wfRk7d3Ew8dUy6W1Zzv2wxlgwxln7MmOPg4mv1mValpnrtq3buu7bW9iwZ4aprAuL1vqu9e2m7xyFSU8tdGDPXRxMfJWy8CkbY47jPM7zYErpYcYeBxNfyYZShKOWy8uMPemukJ1e2Cg5qL3MCw2j0x8TRrzrgNNUJX7F/5+TgQthxLsOOI/n5M6jJJHyoPYyLzX1MBPhqCW+ytiTigoxhRCsd6c5C/0/7OkdzImDiX/1IbgYs62/aUFyviTncmlNiixzvvKEkHJMbL/nouSV+JjwfwgvDU9YgqQV02LMywAAAABJRU5ErkJggg==')
        8/4px repeat;
      background-color: #404040;
      color: #fff;
      padding: 8px;
      margin: 2px;
      display: flex;
      flex-direction: row;
    }
    .caption {
      margin-top: auto;
      margin-bottom: auto;
      flex: auto;
    }
    .body {
      border-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAABHUlEQVR42r2Tg243URTE9wE+1jZWFzWjhnWD2nj/V5jur/rbSDKZzMw5s7zBkl9Sq6ijxLdQwrIDDkY3UsJiDt7afE1eq+R70ckZIxMnmp+ZhtH4uaIKJT8FNk0VhaFmp6f1989vGI2fKypfkrv9JI6zO5jR+PCQgiCA0fjkxXeTKyEA3Ha8uKi5qQmN9PdRAqPxyX9mi0ownbiKTxOli/MKpyc1OzZMSQCj8cmZY5690jshNKlsFMqGi9rb3dHbyzOMxidnrtyd5Ep8msrFkbbWVnV9eaH7m2sYjU9eo4RbTBMt21THBwc6Oz7SaQYYjU/OHPMV/5Nll8E7baytaXdrK8MmjMYnr/GfAK5iHeAF/gANyFs5O906xS3gHb/4wE6+9U2WAAAAAElFTkSuQmCC')
        8 / 0px 0px 4px 4px repeat;
      padding: 0px 0px 4px 8px;
    }
    .eye-icon {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAA7klEQVR42tWTvQrCMBSFbSAUuomOVlx0cJQ2PoVuEZ37AIrYQSvx0T/vEC5Yq9LRnOmEk5tz/wZ/cEiwjJgKRliS72JDzoYTDXdBw4ktM8wn+RhPw6OFO55xl5El5ygJ1FSCmhBvzixJXq2sNfaFkgwryHBc4u2NNUajs0LlTEgp8YKClIk+aVjFX1hwVTMlKQdCZAdhTo1dWYicIUdNsCajJCgPFGTUyo8MB3geigrLDuUCj6VCOTvTv7NtS8V3S+2k3UvS+1bS866y5qQUWtb8razauJs+cZ2Nc5jeo9F/+H6Pt7AZptcC/cHOPwGkwpaZF4wrwwAAAABJRU5ErkJggg==');
      width: 24px;
      height: 24px;
    }
    .eye-icon.concealed {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAABGUlEQVR42r3TgacCQRDH8fb2HVrUe5dKewFFcQcH3F13W///P/V9izV2OBG0I9B89BvTrL7zMFQUn4CKiQtFwhbHL1scFrMMCi4EIsFypSek6rlFaN6TIzOvrAINbmEKRXq6WCPPhAb2GN3uOahg8UNJzZjIzFkIhprAzDEjjjsey0ZI4JQIVUqtyZGJlh9qCTazi+2s6WXAHqsJnpJH9v16RctLqiOGUeSGpcs6mhWNApY7epZCAx1ppMQzKWIZVKQ4xU5W9aTG0mZEVilDR2A4EeQ3Nlg8dxyaBHy+iTOzkJoyrU4IB2kXsmeQYA+6WEMeLGsX5GhStFR6lcuHtOWm/t5X7FsiB7TND4hImKg+ucmCv4i/8v4BFnSTVSU61MEAAAAASUVORK5CYII=');
    }
    .eye-placeholder {
      width: 24px;
      height: 24px;
    }
    .delete-icon {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAMAAAAbzM5ZAAAAQlBMVEVAP0AxKig7NTQ/PT05MzEYGBgqJyZQTEtnZGMsKimVlJWSkpI9OTnh4eHe3t6ZmZljYF5KRUI5MCwoIiAbGhmbmps8rnqJAAAAbElEQVR42tXRSQ6AMAhAUaBILdQ63/+qGk0aJbrXH1ZvQwKQWVxMkFPjSgSEcWgvDRF5x2mMl8bpQOQcapnxRApQC/Rt7BXAeodazIo6BOs6hQc0j1Z0n4dFulb8w5XeXzyLpJrIfODS3FqQNxZzBtMKOhPuAAAAAElFTkSuQmCC');
      background-size: 100%;
      width: 20px;
      height: 30px;
      margin: -4px -4px -4px 4px;
    }
    .drag-block {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAgCAIAAACgkq6HAAAAa0lEQVR42mI0MTJigAE+fgFA+2KAwlAMQrGq//4Xbn0uFmEADHaAHx4QIkpCHMxYg0R0YC10Amvx+M6a+auquCC+bEAyc10QXz/47/Ae3oNdEEmZhyGPranI2ftstHmIZEDIJbW7+/T5GJAP0SszDh15Ke0AAAAASUVORK5CYII=');
      background-repeat: repeat-x;
      width: 64px;
      height: 32px;
      margin: -4px -4px -4px 4px;
    }
  `,kt([ce({type:String})],Tt.prototype,"caption",void 0),kt([ce({type:Boolean})],Tt.prototype,"collapsed",void 0),kt([ce({type:Boolean})],Tt.prototype,"concealed",void 0),kt([ce({type:Boolean})],Tt.prototype,"concealable",void 0),kt([ce({type:Boolean})],Tt.prototype,"deleteable",void 0),kt([ce({type:Boolean})],Tt.prototype,"moveable",void 0),kt([ce({type:Boolean})],Tt.prototype,"nudgeable",void 0),Tt=kt([oe("sp-collapse")],Tt);var Ot,$t,It=function(e,t,i,a){var n,r=arguments.length,s=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s},Pt=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};let Bt=class extends re{constructor(){super(),Ot.add(this),this.caption="",this.allowJson=!1,this.caption=""}render(){return N`
      <div class="text-button" @click=${()=>{this._file.click()}}>
        ${this.caption}
      </div>
      <input id="file"
             type="file"
             accept=${this.allowJson?"image/png,application/json":"image/png"}
             hidden
             multiple
             @change=${Pt(this,Ot,"m",$t)}>
      </input>
    `}};Ot=new WeakSet,$t=function(){const e=Array.from(this._file.files);this._file.value="",this.dispatchEvent(new CustomEvent("filesAdded",{detail:e}))},Bt.styles=r`
    .text-button {
      border-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAAAAAAeBhgmAAAAkElEQVR42gXBQU7DMBAAwPHaolUFEgf+f+RvVBFqFZI2CV53pnx/nd8A2J9Tu/o4VYC+zdc22S4VoK/3qf0e60UD/q33uS3stQpS7495aVCjonYdoQhVRKhCESghEKIgAAAEAIDASImUA2FIXWbq0tCgyyB1aMuxnEoF+tiOvf14AsBZu93+AOD9s8YDAOzbC2KjQZ4dHgX7AAAAAElFTkSuQmCC')
        8/4px repeat;
      background-color: #8e8e8e;
      color: #000;
      font-weight: bold;
      user-select: none;
      height: 32px;
      width: fit-content;
      line-height: 32px;
      padding: 0px 8px;
      margin: 4px 2px;
    }
  `,It([ce({type:String})],Bt.prototype,"caption",void 0),It([ce({type:Boolean})],Bt.prototype,"allowJson",void 0),It([ue("#file")],Bt.prototype,"_file",void 0),Bt=It([oe("sp-file-button")],Bt);var jt,Vt,Dt,Nt=function(e,t,i,a){var n,r=arguments.length,s=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s},zt=function(e,t,i,a,n){if("m"===a)throw new TypeError("Private method is not writable");if("a"===a&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?n.call(e,i):n?n.value=i:t.set(e,i),i},Qt=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};let Lt=class extends re{constructor(e){super(),jt.add(this),this.filename="",Vt.set(this,void 0),this.filename=e||"",zt(this,Vt,e=>{e.detail.filename==this.filename&&(this.dispatchEvent(new CustomEvent("loaded")),this.requestUpdate())},"f")}render(){return N`
      <div class="right-aligned">
        <div class="delete-icon" @click=${()=>{this.dispatchEvent(new CustomEvent("delete",{bubbles:!0,composed:!0}))}}> </div>
        <div class="replace-icon" @click=${()=>{this._file.click()}}></div>
        <div class="file-name ${Qt(this,jt,"a",Dt)?"":"missing-file"}">${this.filename}</div>
      </div>
      <input id="file" type="file" hidden accept='image/*' @change=${this.onFileChange}>
      </input>
    `}connectedCallback(){super.connectedCallback(),Ge.instance().addEventListener("image_updated",Qt(this,Vt,"f"))}disconnectedCallback(){super.disconnectedCallback(),Ge.instance().removeEventListener("image_updated",Qt(this,Vt,"f"))}onFileChange(e){const t=e.target,i=t.files[0];void 0!==i&&(this.filename=i.name,Ge.instance().loadImageFromFile(i),t.value="")}get imageId(){return Qt(this,jt,"a",Dt)?.id}get size(){return Qt(this,jt,"a",Dt)?.size}};Vt=new WeakMap,jt=new WeakSet,Dt=function(){return Ge.instance().getLoadedImage(this.filename)},Lt.styles=r`
    .right-aligned {
      display: flex;
      flex-direction: row-reverse;
    }

    .delete-icon {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAiklEQVR42tWPsQ2DQBAEt4RzJZQANdAFGakjRAdUgkQHHxAQUgITOaEAsvMn1knoZcfekS6Z1UqnT1hwgkX3kHAGLDPgpBAtL7xMNq048S+cwnjirNiNFc/GJNHjJCp2iZFRYqci4fRSFBoOiYlJ4qD5t8LvNzs2Zh4ZI+7MRhcLBWKh5irqi1p6A9XbO4YHN0IaAAAAAElFTkSuQmCC');
      background-size: 100%;
      width: 16px;
      height: 16px;
      margin: 8px 4px;
    }

    .replace-icon {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAdUlEQVR42mN4+B8CGYAAwX4oAGMTqUD+oQBYgQAEAlmMQFoergAiDRRmBytghfIEIArkgQxGqFABWHkAlMcINg2iG0MBAkAdxfYwAQiXgRVMArHhcghXo0KiFRC0Aux3HI6EyxH2Bao6hH6MkEQENUIB5bEJAERVC/bElu4DAAAAAElFTkSuQmCC');
      background-size: 100%;
      width: 16px;
      height: 16px;
      margin: 8px 4px;
    }

    .file-name {
      height: 32px;
      line-height: 32px;
      margin: 0px 2px;
    }

    .missing-file {
      text-decoration: line-through;
      color: #8e8e8e;
    }
  `,Nt([ce({type:String})],Lt.prototype,"filename",void 0),Nt([ue("#file")],Lt.prototype,"_file",void 0),Lt=Nt([oe("sp-image-file")],Lt);var Gt=function(e,t,i,a){var n,r=arguments.length,s=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let Ht=class extends re{constructor(){super(),this.filenames=[],this.collapsed=!0}render(){return N`
      <div class="right-aligned">
        <div class="delete-icon" @click=${()=>{this.filenames.splice(0),this.dispatchEvent(new CustomEvent("change")),this.requestUpdate()}}></div>
        <div class="add-icon" @click=${()=>{this._file.click()}}></div>
        <div class="label">
          Spritesheets: ${this.filenames.length.toString()}
        </div>
        <sp-collapse-icon collapsed
          @collapse-toggle=${e=>{e.stopPropagation(),this.collapsed=e.detail}}>
        </sp-collapse-icon>
      </div>
      <input id="file" type="file" hidden accept='image/*' multiple @change=${this.onFileChange}>
      </input>
      <div ?hidden=${this.collapsed}>
        ${this.filenames.map((e,t)=>N`<sp-image-file
            filename=${e}
            @delete=${e=>{e.stopPropagation(),this.filenames.splice(t,1),this.requestUpdate(),this.dispatchEvent(new CustomEvent("change"))}}
          ></sp-image-file>`)}
      </div>
    `}addFiles(e){for(const t of e)Ge.instance().loadImageFromFile(t),-1==this.filenames.indexOf(t.name)&&this.filenames.push(t.name);this.requestUpdate(),this.dispatchEvent(new CustomEvent("change"))}onFileChange(e){const t=e.target;this.addFiles(Array.from(t.files)),t.value=""}};Ht.styles=r`
    .right-aligned {
      display: flex;
      flex-direction: row-reverse;
    }

    .label {
      height: 32px;
      line-height: 32px;
      margin: 0px 2px;
    }

    .add-icon {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAJUExURf///+Hh4d3f302jGb4AAAABdFJOUwBA5thmAAAANElEQVR42mPACpgWwBgJdGJwrZoalrVq1QIGztCsVaGhoQFAkVWrQCJgNQFAgsaMBVhDAgCBlBSH6yjGJAAAAABJRU5ErkJggg==');
      background-size: 100%;
      width: 16px;
      height: 16px;
      margin: 8px 4px;
    }

    .delete-icon {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAiklEQVR42tWPsQ2DQBAEt4RzJZQANdAFGakjRAdUgkQHHxAQUgITOaEAsvMn1knoZcfekS6Z1UqnT1hwgkX3kHAGLDPgpBAtL7xMNq048S+cwnjirNiNFc/GJNHjJCp2iZFRYqci4fRSFBoOiYlJ4qD5t8LvNzs2Zh4ZI+7MRhcLBWKh5irqi1p6A9XbO4YHN0IaAAAAAElFTkSuQmCC');
      background-size: 100%;
      width: 16px;
      height: 16px;
      margin: 8px 4px;
    }
  `,Gt([ce({type:Array})],Ht.prototype,"filenames",void 0),Gt([pe()],Ht.prototype,"collapsed",void 0),Gt([ue("#file")],Ht.prototype,"_file",void 0),Ht=Gt([oe("sp-image-file-list")],Ht);const qt=[{name:"nauvis",cycle:[0,.25,.45,.55,.75,1]},{name:"vulcanus",cycle:[0,.2,.45,.55,.8,1]},{name:"fulgora",cycle:[0,.2,.3,.4,.6,.7,1]},{name:"gleba",cycle:[0,.15,.25,.35,.45,.55,.65,.75,1]}],Kt=16384;const Yt=await async function(){const e=new Map;for(const t of qt){const i=await me(`./luts/${t.name}.png`),a=[];t.cycle.forEach((e,t)=>{a.push({time:e,lut:i.data.slice(Kt*t,Kt*(t+1))})}),e.set(t.name,a)}return e}();function Jt(e,t){let i=Yt.get(e);void 0===i&&(i=Yt.get("nauvis"));for(let e=0;;e++){const a=i[e],n=i[e+1];if(n.time<=t)continue;const r=(t-a.time)/(n.time-a.time),s=1-r,o=new Uint8Array(Kt);for(let e=0;e<Kt;e++)o[e]=a.lut[e]*s+n.lut[e]*r;return o}}var Wt,Xt,Zt=function(e,t,i,a,n){if("m"===a)throw new TypeError("Private method is not writable");if("a"===a&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?n.call(e,i):n?n.value=i:t.set(e,i),i},ei=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};class ti{constructor(e,t){Wt.set(this,void 0),Xt.set(this,void 0),Zt(this,Wt,e,"f"),Zt(this,Xt,t,"f")}get topLeft(){return ei(this,Wt,"f")}get bottomRight(){return ei(this,Xt,"f")}union(e){return new ti(this.topLeft.min(e.topLeft),this.bottomRight.max(e.bottomRight))}}Wt=new WeakMap,Xt=new WeakMap;var ii,ai,ni,ri=async function(e={}){var t,i,a=e,n=import.meta.url,r="";try{r=new URL(".",n).href}catch{}if("object"!=typeof window&&"undefined"==typeof WorkerGlobalScope)throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");i=async e=>{c(!f(e),"readAsync does not work with file:// URLs");var t=await fetch(e,{credentials:"same-origin"});if(t.ok)return t.arrayBuffer();throw new Error(t.status+" : "+t.url)};var s,o=console.log.bind(console),l=console.error.bind(console);c(!0,"worker environment detected but not enabled at build time.  Add `worker` to `-sENVIRONMENT` to enable."),c(!0,"node environment detected but not enabled at build time.  Add `node` to `-sENVIRONMENT` to enable."),c(!0,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable."),"object"!=typeof WebAssembly&&l("no native wasm support detected");var d=!1;function c(e,t){e||U("Assertion failed"+(t?": "+t:""))}var p,h,u,A,g,m,f=e=>e.startsWith("file://");function v(){if(!d){var e=re();0==e&&(e+=4);var t=m[e>>2],i=m[e+4>>2];34821223==t&&2310721022==i||U(`Stack overflow! Stack cookie has been overwritten at ${Q(e)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${Q(i)} ${Q(t)}`),1668509029!=m[0]&&U("Runtime error: The application has corrupted its heap memory area (address zero)!")}}function w(e){Object.getOwnPropertyDescriptor(a,e)||Object.defineProperty(a,e,{configurable:!0,set(){U(`Attempt to set \`Module.${e}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function b(e){return()=>c(!1,`call to '${e}' via reference taken before Wasm module initialization`)}function y(e){return"FS_createPath"===e||"FS_createDataFile"===e||"FS_createPreloadedFile"===e||"FS_unlink"===e||"addRunDependency"===e||"FS_createLazyFile"===e||"FS_createDevice"===e||"removeRunDependency"===e}function x(e,t){"undefined"==typeof globalThis||Object.getOwnPropertyDescriptor(globalThis,e)||Object.defineProperty(globalThis,e,{configurable:!0,get(){t()}})}function _(e,t){x(e,()=>{G(`\`${e}\` is not longer defined by emscripten. ${t}`)})}function E(e){Object.getOwnPropertyDescriptor(a,e)||Object.defineProperty(a,e,{configurable:!0,get(){var t=`'${e}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;y(e)&&(t+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),U(t)}})}(()=>{var e=new Int16Array(1),t=new Int8Array(e.buffer);if(e[0]=25459,115!==t[0]||99!==t[1])throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})(),_("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),_("asm","Please use wasmExports instead");var S=!1;function C(){var e=u.buffer;A=new Int8Array(e),a.HEAPU8=g=new Uint8Array(e),m=new Uint32Array(e),new BigInt64Array(e),new BigUint64Array(e)}c("undefined"!=typeof Int32Array&&"undefined"!=typeof Float64Array&&null!=Int32Array.prototype.subarray&&null!=Int32Array.prototype.set,"JS engine does not provide full typed array support");var F=0,R=null,k={},M=null;function U(e){a.onAbort?.(e),l(e="Aborted("+e+")"),d=!0;var t=new WebAssembly.RuntimeError(e);throw h?.(t),t}var T,O={error(){U("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with -sFORCE_FILESYSTEM")},init(){O.error()},createDataFile(){O.error()},createPreloadedFile(){O.error()},createLazyFile(){O.error()},open(){O.error()},mkdev(){O.error()},registerDevice(){O.error()},analyzePath(){O.error()},ErrnoError(){O.error()}};function $(e,t){return(...i)=>{c(S,`native function \`${e}\` called before runtime initialization`);var a=ce[e];return c(a,`exported native function \`${e}\` not found`),c(i.length<=t,`native function \`${e}\` called with ${i.length} args but expects ${t}`),a(...i)}}function I(){return a.locateFile?(e="renderer.wasm",a.locateFile?a.locateFile(e,r):r+e):new URL("renderer.wasm",import.meta.url).href;var e}async function P(e){if(!s)try{var t=await i(e);return new Uint8Array(t)}catch{}return function(e){if(e==T&&s)return new Uint8Array(s);throw"both async and sync fetching of the wasm failed"}(e)}async function B(e,t,i){if(!e&&"function"==typeof WebAssembly.instantiateStreaming)try{var a=fetch(t,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(a,i)}catch(e){l(`wasm streaming compile failed: ${e}`),l("falling back to ArrayBuffer instantiation")}return async function(e,t){try{var i=await P(e);return await WebAssembly.instantiate(i,t)}catch(e){l(`failed to asynchronously prepare wasm: ${e}`),f(T)&&l(`warning: Loading from a file URI (${T}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),U(e)}}(t,i)}var j=e=>{for(;e.length>0;)e.shift()(a)},V=[],D=e=>V.push(e),N=[],z=e=>N.push(e),Q=e=>(c("number"==typeof e),"0x"+(e>>>=0).toString(16).padStart(8,"0")),L=()=>le(),G=e=>{G.shown||={},G.shown[e]||(G.shown[e]=1,l(e))};class H{constructor(e){this.excPtr=e,this.ptr=e-24}set_type(e){m[this.ptr+4>>2]=e}get_type(){return m[this.ptr+4>>2]}set_destructor(e){m[this.ptr+8>>2]=e}get_destructor(){return m[this.ptr+8>>2]}set_caught(e){e=e?1:0,A[this.ptr+12]=e}get_caught(){return 0!=A[this.ptr+12]}set_rethrown(e){e=e?1:0,A[this.ptr+13]=e}get_rethrown(){return 0!=A[this.ptr+13]}init(e,t){this.set_adjusted_ptr(0),this.set_type(e),this.set_destructor(t)}set_adjusted_ptr(e){m[this.ptr+16>>2]=e}get_adjusted_ptr(){return m[this.ptr+16>>2]}}var q,K=(e,t)=>(c(t,"alignment argument is required"),Math.ceil(e/t)*t),Y=e=>{var t=u.buffer,i=(e-t.byteLength+65535)/65536|0;try{return u.grow(i),C(),1}catch(i){l(`growMemory: Attempted to grow heap from ${t.byteLength} bytes to ${e} bytes, but got error: ${i}`)}},J="undefined"!=typeof TextDecoder?new TextDecoder:void 0,W=(e,t=0,i=NaN)=>{for(var a=t+i,n=t;e[n]&&!(n>=a);)++n;if(n-t>16&&e.buffer&&J)return J.decode(e.subarray(t,n));for(var r="";t<n;){var s=e[t++];if(128&s){var o=63&e[t++];if(192!=(224&s)){var l=63&e[t++];if(224==(240&s)?s=(15&s)<<12|o<<6|l:(240!=(248&s)&&G("Invalid UTF-8 leading byte "+Q(s)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),s=(7&s)<<18|o<<12|l<<6|63&e[t++]),s<65536)r+=String.fromCharCode(s);else{var d=s-65536;r+=String.fromCharCode(55296|d>>10,56320|1023&d)}}else r+=String.fromCharCode((31&s)<<6|o)}else r+=String.fromCharCode(s)}return r},X=[null,[],[]],Z=(e,t)=>{var i=X[e];c(i),0===t||10===t?((1===e?o:l)(W(i)),i.length=0):i.push(t)},ee=(e,t,i)=>(c("number"==typeof i,"stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),((e,t,i,a)=>{if(c("string"==typeof e,`stringToUTF8Array expects a string (got ${typeof e})`),!(a>0))return 0;for(var n=i,r=i+a-1,s=0;s<e.length;++s){var o=e.codePointAt(s);if(o<=127){if(i>=r)break;t[i++]=o}else if(o<=2047){if(i+1>=r)break;t[i++]=192|o>>6,t[i++]=128|63&o}else if(o<=65535){if(i+2>=r)break;t[i++]=224|o>>12,t[i++]=128|o>>6&63,t[i++]=128|63&o}else{if(i+3>=r)break;o>1114111&&G("Invalid Unicode code point "+Q(o)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),t[i++]=240|o>>18,t[i++]=128|o>>12&63,t[i++]=128|o>>6&63,t[i++]=128|63&o,s++}}return t[i]=0,i-n})(e,g,t,i)),te=e=>oe(e),ie=(e,t,i,n,r)=>{var s={string:e=>{var t=0;return null!=e&&0!==e&&(t=(e=>{var t=(e=>{for(var t=0,i=0;i<e.length;++i){var a=e.charCodeAt(i);a<=127?t++:a<=2047?t+=2:a>=55296&&a<=57343?(t+=4,++i):t+=3}return t})(e)+1,i=te(t);return ee(e,i,t),i})(e)),t},array:e=>{var t,i,a=te(e.length);return i=a,c((t=e).length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),A.set(t,i),a}};function o(e){return"string"===t?(c("number"==typeof(i=e),`UTF8ToString expects a number (got ${typeof i})`),i?W(g,i,a):""):"boolean"===t?Boolean(e):e;var i,a}var l=(e=>{var t=a["_"+e];return c(t,"Cannot call unknown function "+e+", make sure it is exported"),t})(e),d=[],p=0;if(c("array"!==t,'Return type should not be "array".'),n)for(var h=0;h<n.length;h++){var u=s[i[h]];u?(0===p&&(p=L()),d[h]=u(n[h])):d[h]=n[h]}var m=l(...d);return m=function(e){return 0!==p&&se(p),o(e)}(m)};a.noExitRuntime&&a.noExitRuntime,a.print&&(o=a.print),a.printErr&&(l=a.printErr),a.wasmBinary&&(s=a.wasmBinary),a.FS_createDataFile=O.createDataFile,a.FS_createPreloadedFile=O.createPreloadedFile,q="fetchSettings",Object.getOwnPropertyDescriptor(a,q)&&U(`\`Module.${q}\` was supplied but \`${q}\` not included in INCOMING_MODULE_JS_API`),a.arguments&&a.arguments,a.thisProgram&&a.thisProgram,c(void 0===a.memoryInitializerPrefixURL,"Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),c(void 0===a.pthreadMainPrefixURL,"Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),c(void 0===a.cdInitializerPrefixURL,"Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),c(void 0===a.filePackagePrefixURL,"Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),c(void 0===a.read,"Module.read option was removed"),c(void 0===a.readAsync,"Module.readAsync option was removed (modify readAsync in JS)"),c(void 0===a.readBinary,"Module.readBinary option was removed (modify readBinary in JS)"),c(void 0===a.setWindowTitle,"Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),c(void 0===a.TOTAL_MEMORY,"Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),c(void 0===a.ENVIRONMENT,"Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),c(void 0===a.STACK_SIZE,"STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),c(void 0===a.wasmMemory,"Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),c(void 0===a.INITIAL_MEMORY,"Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),a.ccall=ie,a.cwrap=(e,t,i,a)=>(...a)=>ie(e,t,i,a),["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","setTempRet0","zeroMemory","exitJS","withStackSave","strError","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","readEmAsmArgs","jstoi_q","getExecutableName","autoResumeAudioContext","getDynCaller","dynCall","handleException","keepRuntimeAlive","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","asyncLoad","mmapAlloc","HandleAllocator","getNativeTypeSize","getUniqueRunDependency","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayFromString","intArrayToString","AsciiToString","stringToAscii","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","getEnvStrings","checkWasiClock","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","initRandomFill","randomFill","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","findMatchingCatch","Browser_asyncPrepareDataCounter","isLeapYear","ydayFromDate","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_createPreloadedFile","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace"].forEach(function(e){x(e,()=>{var t=`\`${e}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,i=e;i.startsWith("_")||(i="$"+e),t+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${i}')`,y(e)&&(t+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),G(t)}),E(e)}),["run","addRunDependency","removeRunDependency","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","ptrToString","getHeapMax","growMemory","ENV","ERRNO_CODES","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","alignMemory","wasmTable","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","UTF16Decoder","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","flush_NO_FILESYSTEM","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","SYSCALLS","preloadPlugins","FS_stdin_getChar_buffer","FS_unlink","FS_createPath","FS_createDevice","FS_readFile","FS","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_createDataFile","FS_forceLoadFile","FS_createLazyFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","MEMFS","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s"].forEach(E),a._CreateImage=b("_CreateImage"),a._CalculateRowLength=b("_CalculateRowLength"),a._GetRowLength=b("_GetRowLength"),a._InitCanvas=b("_InitCanvas"),a._GetWidth=b("_GetWidth"),a._GetHeight=b("_GetHeight"),a._SetBackground=b("_SetBackground"),a._DrawSprite=b("_DrawSprite"),a._DrawLight=b("_DrawLight"),a._DrawShadow=b("_DrawShadow"),a._ApplyShadows=b("_ApplyShadows"),a._ApplyLight=b("_ApplyLight"),a._GetDayLut=b("_GetDayLut"),a._GetNightLut=b("_GetNightLut");var ae,ne=b("_emscripten_stack_init"),re=b("_emscripten_stack_get_end"),se=b("__emscripten_stack_restore"),oe=b("__emscripten_stack_alloc"),le=b("_emscripten_stack_get_current"),de={__cxa_throw:(e,t,i)=>{new H(e).init(t,i),c(!1,"Exception thrown, but exception catching is not enabled. Compile with -sNO_DISABLE_EXCEPTION_CATCHING or -sEXCEPTION_CATCHING_ALLOWED=[..] to catch.")},_abort_js:()=>U("native code called abort()"),emscripten_resize_heap:e=>{var t=g.length;c((e>>>=0)>t);var i=2147483648;if(e>i)return l(`Cannot enlarge memory, requested ${e} bytes, but the limit is 2147483648 bytes!`),!1;for(var a=1;a<=4;a*=2){var n=t*(1+.2/a);n=Math.min(n,e+100663296);var r=Math.min(i,K(Math.max(e,n),65536));if(Y(r))return!0}return l(`Failed to grow the heap from ${t} bytes to ${r} bytes, not enough memory!`),!1},fd_close:e=>{U("fd_close called without SYSCALLS_REQUIRE_FILESYSTEM")},fd_seek:function(e,t,i,a){return 70},fd_write:(e,t,i,a)=>{for(var n=0,r=0;r<i;r++){var s=m[t>>2],o=m[t+4>>2];t+=8;for(var l=0;l<o;l++)Z(e,g[s+l]);n+=o}return m[a>>2]=n,0}},ce=await async function(){function e(e,t){return ce=e.exports,c(u=ce.memory,"memory not found in wasm exports"),C(),function(e){a._CreateImage=$("CreateImage",3),a._CalculateRowLength=$("CalculateRowLength",1),a._GetRowLength=$("GetRowLength",2),a._InitCanvas=$("InitCanvas",4),a._GetWidth=$("GetWidth",0),a._GetHeight=$("GetHeight",0),a._SetBackground=$("SetBackground",3),a._DrawSprite=$("DrawSprite",12),a._DrawLight=$("DrawLight",11),a._DrawShadow=$("DrawShadow",7),a._ApplyShadows=$("ApplyShadows",0),a._ApplyLight=$("ApplyLight",0),a._GetDayLut=$("GetDayLut",0),a._GetNightLut=$("GetNightLut",0),ne=e.emscripten_stack_init,e.emscripten_stack_get_free,e.emscripten_stack_get_base,re=e.emscripten_stack_get_end,se=e._emscripten_stack_restore,oe=e._emscripten_stack_alloc,le=e.emscripten_stack_get_current}(ce),function(e){if(F--,a.monitorRunDependencies?.(F),c(k[e]),delete k[e],0==F&&(null!==M&&(clearInterval(M),M=null),R)){var t=R;R=null,t()}}("wasm-instantiate"),ce}var t;t="wasm-instantiate",F++,a.monitorRunDependencies?.(F),c(!k[t]),k[t]=1,null===M&&"undefined"!=typeof setInterval&&(M=setInterval(()=>{if(d)return clearInterval(M),void(M=null);var e=!1;for(var t in k)e||(e=!0,l("still waiting on run dependencies:")),l(`dependency: ${t}`);e&&l("(end of list)")},1e4));var i=a,n={env:de,wasi_snapshot_preview1:de};return a.instantiateWasm?new Promise((t,i)=>{try{a.instantiateWasm(n,(i,a)=>{t(e(i))})}catch(e){l(`Module.instantiateWasm callback failed with error: ${e}`),i(e)}}):(T??=I(),function(t){return c(a===i,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),i=null,e(t.instance)}(await B(s,T,n)))}();function pe(){var e;ne(),c(!(3&(e=re()))),0==e&&(e+=4),m[e>>2]=34821223,m[e+4>>2]=2310721022,m[0]=1668509029}!function(){if(a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);a.preInit.length>0;)a.preInit.shift()();w("preInit")}(),function e(){function t(){c(!ae),ae=!0,a.calledRun=!0,d||(c(!S),S=!0,v(),ce.__wasm_call_ctors(),p?.(a),a.onRuntimeInitialized?.(),w("onRuntimeInitialized"),c(!a._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),function(){if(v(),a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;)D(a.postRun.shift());w("postRun"),j(V)}())}F>0?R=e:(pe(),function(){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)z(a.preRun.shift());w("preRun"),j(N)}(),F>0?R=e:(a.setStatus?(a.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>a.setStatus(""),1),t()},1)):t(),v()))}(),t=S?a:new Promise((e,t)=>{p=e,h=t});for(const t of Object.keys(a))t in e||Object.defineProperty(e,t,{configurable:!0,get(){U(`Access to module property ('${t}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return t},si=function(e,t,i,a,n){if("m"===a)throw new TypeError("Private method is not writable");if("a"===a&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?n.call(e,i):n?n.value=i:t.set(e,i),i},oi=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};class li{constructor(e){ii.add(this),ai.set(this,void 0),si(this,ai,e,"f"),["nauvis","vulcanus","fulgora","gleba","aquilo"].forEach(e=>{me("./images/backgrounds/"+e+".jpg").then(t=>{this.addImage(e,t)})}),["circuit-connector/ccm-universal-04a-base-sequence.png","circuit-connector/ccm-universal-04b-base-shadow-sequence.png","circuit-connector/ccm-universal-04c-wire-sequence.png","circuit-connector/ccm-universal-04d-wire-shadow-sequence.png","circuit-connector/ccm-universal-04e-blue-LED-on-sequence.png","circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png","circuit-connector/ccm-universal-04h-green-LED-sequence.png","circuit-connector/ccm-universal-04i-red-LED-sequence.png","pipe-covers/pipe-cover-north.png","pipe-covers/pipe-cover-north-shadow.png","pipe-covers/pipe-cover-east.png","pipe-covers/pipe-cover-east-shadow.png","pipe-covers/pipe-cover-south.png","pipe-covers/pipe-cover-south-shadow.png","pipe-covers/pipe-cover-west.png","pipe-covers/pipe-cover-west-shadow.png"].forEach(e=>{me("./images/"+e).then(t=>{this.addImage(e,t)})}),globalThis.fileManager=new Ge(this)}addImage(e,t){const i=oi(this,ai,"f").ccall("CreateImage","number",["string","number","number"],[e,t.width,t.height]);oi(this,ai,"f").HEAPU8.set(t.data,i),oi(this,ai,"f").ccall("CalculateRowLength","undefined",["string"],[e])}getRenderSize(){return[oi(this,ai,"f").ccall("GetWidth","number",[],[]),oi(this,ai,"f").ccall("GetHeight","number",[],[])]}getRowLength(e,t){return oi(this,ai,"f").ccall("GetRowLength","number",["string","number"],[e,t])}getFrameCount(){return 0}draw(e,t,i){e.sort((e,t)=>(e.secondaryDrawOrder||0)-(t.secondaryDrawOrder||0));const[a,n]=oi(this,ii,"m",ni).call(this,e);oi(this,ai,"f").ccall("InitCanvas","undefined",["number","number","number","number"],[a.x,a.y,n.x,n.y]),oi(this,ai,"f").ccall("SetBackground","undefined",["string","number","number"],[i.name,i.machineSize.x,i.machineSize.y]),e.forEach(e=>{if("shadow"!=e.drawMode)return;const t=e.shift||new ye(0,0);oi(this,ai,"f").ccall("DrawShadow","undefined",["string","number","number","number","number","number","number"],[e.imageId,t.x,t.y,e.size.x,e.size.y,e.topLeft.x,e.topLeft.y])}),oi(this,ai,"f").ccall("ApplyShadows","undefined",[],[]),e.forEach(e=>{const t=e.shift||new ye(0,0),i=e.tint||[255,255,255,255];"sprite"!=e.drawMode&&"glow"!=e.drawMode||oi(this,ai,"f").ccall("DrawSprite","undefined",["string","string","number","number","number","number","number","number","number","number","number","number"],[e.imageId,e.blendMode,t.x,t.y,e.size.x,e.size.y,e.topLeft.x,e.topLeft.y,i[0],i[1],i[2],i[3]]),"light"!=e.drawMode&&"glow"!=e.drawMode||oi(this,ai,"f").ccall("DrawLight","undefined",["string","number","number","number","number","number","number","number","number","number","number"],[e.imageId,t.x,t.y,e.size.x,e.size.y,e.topLeft.x,e.topLeft.y,i[0],i[1],i[2],i[3]])}),oi(this,ai,"f").HEAPU8.set(Jt(i.name,0),oi(this,ai,"f").ccall("GetDayLut","number",[],[])),oi(this,ai,"f").HEAPU8.set(Jt(i.name,t),oi(this,ai,"f").ccall("GetNightLut","number",[],[]));const r=oi(this,ai,"f").ccall("GetWidth","number",[],[]),s=oi(this,ai,"f").ccall("GetHeight","number",[],[]),o=new ImageData(r,s),l=oi(this,ai,"f").ccall("ApplyLight","number",[],[]);return o.data.set(oi(this,ai,"f").HEAPU8.slice(l,l+r*s*4)),o}static async create(){const e=await ri();return new li(e)}}ai=new WeakMap,ii=new WeakSet,ni=function(e){const t=0==e.length?new ti(new ye(-64,-64),new ye(64,64)):e.map(e=>new ti(e.topLeft,e.topLeft.add(e.size))).reduce((e,t)=>e.union(t));return[t.topLeft.subtract(new ye(64,64)),t.bottomRight.add(new ye(64,64))]};var di,ci,pi,hi,ui,Ai,gi,mi,fi,vi,wi,bi,yi=function(e,t,i,a){var n,r=arguments.length,s=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s},xi=function(e,t,i,a,n){if("m"===a)throw new TypeError("Private method is not writable");if("a"===a&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?n.call(e,i):n?n.value=i:t.set(e,i),i},_i=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};let Ei=class extends re{constructor(){super(),di.add(this),this._data=Ye(),this._missingFiles=[],ci.set(this,void 0),pi.set(this,void 0),hi.set(this,void 0),ui.set(this,void 0),Ai.set(this,void 0),gi.set(this,void 0),mi.set(this,void 0),xi(this,hi,0,"f"),xi(this,ui,!1,"f"),li.create().then(e=>{xi(this,ci,e,"f"),Ge.instance().addEventListener("image_updated",()=>{_i(this,di,"m",wi).call(this)}),_i(this,di,"m",fi).call(this,_i(this,ci,"f").draw([],0,{name:"lab",machineSize:new ye(0,0)}))}),globalThis.userSettings=new je,globalThis.userSettings.concealed=!0,document.body.appendChild(globalThis.userSettings),document.body.addEventListener("dragover",e=>{e.preventDefault()}),document.body.addEventListener("drop",e=>{e.preventDefault();Array.from(e.dataTransfer?.items||[]).map(e=>e.getAsFile()).filter(e=>"image/png"===e.type).forEach(e=>{Ge.instance().loadImageFromFile(e)}),this.requestUpdate()})}render(){return N`
    <div>
      <div class="outer-frame main-window">
        <div class="inner-frame">
          <canvas width="256" height="256" id="canvas" class="main-image" @click=${()=>{this._canvas.toBlob(async e=>{await navigator.clipboard.write([new ClipboardItem({[e.type]:e})])})}}></canvas>
        </div>
        <div class="inner-frame" id="controls">
          <div id="global_controls" class="box-dark-inset" ?hidden=${_i(this,di,"m",vi).call(this)}>
            <div class="range-line">
              <div>
                <label for="animation_speed">Animation speed:</label>
              </div>
              <div class="range-container">
                <input id="animation_speed" type="range" min="1" max="120"
                  value="${globalThis.userSettings.animationSpeed.toString()}"
                    @dblclick=${()=>{this._animationSpeed.value=globalThis.userSettings.animationSpeed.toString()}}></input>
              </div>
              <div class="previous-button" @click=${()=>{var e;xi(this,hi,(e=_i(this,hi,"f"),--e),"f")}}></div>
              <div class="pause-button" @click=${e=>{xi(this,ui,!_i(this,ui,"f"),"f"),e.target.classList.toggle("paused",_i(this,ui,"f"))}}></div>
              <div class="next-button" @click=${()=>{var e;xi(this,hi,(e=_i(this,hi,"f"),++e),"f")}}></div>
            </div>
            <div class="range-line">
              <div>
                <label for="day_night">Daytime</label>
              </div>
              <div class="range-container">
                <input id="day_night" type="range" min="0" max="255" value="0"></input>
              </div>
            </div>
            <div class="range-line">
              <div>
                <label for="background">Background</label>
              </div>
              <sp-background-select id="background"></sp-background-select>
            </div>
          </div>
          <div>
            <sp-assembling-machine id="assembling_machine" .data=${this._data}
              @data-update=${()=>{_i(this,di,"m",wi).call(this),this.requestUpdate()}}>
            </sp-assembling-machine>
            <sp-collapse caption="Missing image files" ?hidden=${0==this._missingFiles.length}>
              <div>
                ${this._missingFiles.map(e=>N`<div class="flex-reverse missing-file">${e}</div>`)}
                <div class="flex-reverse">
                  <sp-file-button caption="Add all" @filesAdded=${e=>{e.detail.forEach(e=>{Ge.instance().loadImageFromFile(e).then(()=>{_i(this,di,"m",wi).call(this)})})}}>
                  </sp-file-button>
                </div>
              </div>
            </sp-collapse>
          </div>
          <div class="flex-reverse">
            <div id="download_button" class="download-icon hidden"></div>
            <div id="download_progress" class="download-progress hidden"></div>
            <div class="import-icon" @click=${()=>{this._importUi.show()}}
            ></div>
            <div class="export-icon" @click=${()=>{this._exportUi.jsonText=JSON.stringify(this._assemblingMachine.exportJson(),void 0,2),this._exportUi.luaText=this._assemblingMachine.exportLua(0),this._exportUi.concealed=!1}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div @click=${()=>{globalThis.userSettings.show()}} class="user-settings-icon"></div>
    <sp-export-ui concealed></sp-export-ui>
    <sp-import-ui @settingsImported=${e=>{this.importSettings(e.detail)}}></sp-import-ui>
    `}updated(){_i(this,di,"m",vi).call(this)||void 0!==_i(this,Ai,"f")||this.drawSprite()}drawSprite(){var e;if(void 0===_i(this,ci,"f"))return;if(xi(this,Ai,void 0,"f"),_i(this,di,"m",vi).call(this))return void _i(this,di,"m",fi).call(this,_i(this,ci,"f").draw([],0,{name:"lab",machineSize:new ye(0,0)}));const t=parseInt(this._dayNight.value)/256,i=performance.now(),a=this._assemblingMachine.getSprites(_i(this,hi,"f"));_i(this,di,"m",fi).call(this,_i(this,ci,"f").draw(a,t,{name:this._background.value,machineSize:this._data.size}));const n=performance.now();if(_i(this,ui,"f"))xi(this,Ai,setTimeout(()=>{this.drawSprite()},0),"f");else{xi(this,hi,(e=_i(this,hi,"f"),++e),"f");const t=parseInt(this._animationSpeed.value);xi(this,Ai,setTimeout(()=>{this.drawSprite()},Math.max(0,1e3/t-(n-i))),"f")}}importSettings(e){this._data=e,_i(this,di,"m",wi).call(this),this.requestUpdate()}async exportAnimation(){if(_i(this,di,"m",vi).call(this))return;clearTimeout(_i(this,Ai,"f")),_i(this,gi,"f").classList.add("hidden"),_i(this,mi,"f").classList.remove("hidden"),_i(this,di,"m",bi).call(this,0);const e=Math.floor(1e3/parseInt(this._animationSpeed.value)),t=parseInt(this._dayNight.value)/256,i=await _i(this,pi,"f").exportAnimation(t,this._background.value,e),a=document.createElement("a");a.href=URL.createObjectURL(i),a.download="animation.webp",a.click(),_i(this,gi,"f").classList.remove("hidden"),_i(this,mi,"f").classList.add("hidden"),xi(this,Ai,setTimeout(()=>{this.drawSprite()},0),"f")}};ci=new WeakMap,pi=new WeakMap,hi=new WeakMap,ui=new WeakMap,Ai=new WeakMap,gi=new WeakMap,mi=new WeakMap,di=new WeakSet,fi=function(e){this._canvas.width=e.width,this._canvas.height=e.height,this._canvas.getContext("2d").putImageData(e,0,0)},vi=function(){return 0==this._data.animation.length},wi=function(){const e=[this._data.animation.flatMap(e=>e.filenames),this._data.fluidBoxes.flatMap(e=>[e.pipePicturesNorth,e.pipePicturesEast,e.pipePicturesSouth,e.pipePicturesWest].flatMap(e=>e.map(e=>e.filename)))].flat(),t=[...new Set(e)];this._missingFiles=t.filter(e=>void 0===Ge.instance().getLoadedImage(e)).toSorted()},bi=function(e){_i(this,mi,"f").style.background=`\n        radial-gradient(closest-side, #303030 50%, transparent 51% 100%),\n        conic-gradient(white ${100*e}%, black 0) `},Ei.styles=[ke,r`
      .main-window {
        width: fit-content;
        height: fit-content;
        display: flex;
        margin: 100px auto 0;
      }

      .outer-frame {
        border-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAIAAAC0D9CtAAABEUlEQVR42mLwdXOOCg1KiI1JTkhISQJ0Rh7YCcQwEJUF6blkjk9ne7fzn0zvMB5Amvm03b9rpoWBhNd0vczStCryuq7MdXNsFCsYSHjes05Xq2Sd5GmapRkpT4fOLKeFgYTXsmpWq+VyMZvPp/PZbDGfn5ucFgYSXvthaLq+LOs8L4ocFTgvymjmXQ4DCa/inBmpYFUGtxcJOcmeVBFxduJu897HSeTE3r2TFZiHebseMyrP67X3hLDfmNnw5mW7HjMqsbEC27z3cRI50X0XvGDvGcJOlpAz7Mhxx02Sth+860Z2ZVWcHAlMPGgYUO/7YVw1ja/FE9GK45zLikBj91vk9+vjbTySxwQJLyNVeUbw/9nbS2W5B1KYAAAAAElFTkSuQmCC')
          8/4px repeat;
        padding: 4px;
        background-color: #303030;
      }

      .inner-frame {
        border-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAABHUlEQVR42r2Tg243URTE9wE+1jZWFzWjhnWD2nj/V5jur/rbSDKZzMw5s7zBkl9Sq6ijxLdQwrIDDkY3UsJiDt7afE1eq+R70ckZIxMnmp+ZhtH4uaIKJT8FNk0VhaFmp6f1989vGI2fKypfkrv9JI6zO5jR+PCQgiCA0fjkxXeTKyEA3Ha8uKi5qQmN9PdRAqPxyX9mi0ownbiKTxOli/MKpyc1OzZMSQCj8cmZY5690jshNKlsFMqGi9rb3dHbyzOMxidnrtyd5Ep8msrFkbbWVnV9eaH7m2sYjU9eo4RbTBMt21THBwc6Oz7SaQYYjU/OHPMV/5Nll8E7baytaXdrK8MmjMYnr/GfAK5iHeAF/gANyFs5O906xS3gHb/4wE6+9U2WAAAAAElFTkSuQmCC')
          8/4px repeat;
        margin: 4px;
        padding: 8px;
        width: fit-content;
        height: fit-content;
        background-color: #303030;
        color: #ffffff;
      }

      .box-dark {
        border-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAIAAAC0D9CtAAABDElEQVR42mII8vaIj4pIS07MTEvNSk/LykjHREBxQGnkga0wCEVBQPe/UyU9dP5Q5Pc+575wfRk7d3Ew8dUy6W1Zzv2wxlgwxln7MmOPg4mv1mValpnrtq3buu7bW9iwZ4aprAuL1vqu9e2m7xyFSU8tdGDPXRxMfJWy8CkbY47jPM7zYErpYcYeBxNfyYZShKOWy8uMPemukJ1e2Cg5qL3MCw2j0x8TRrzrgNNUJX7F/5+TgQthxLsOOI/n5M6jJJHyoPYyLzX1MBPhqCW+ytiTigoxhRCsd6c5C/0/7OkdzImDiX/1IbgYs62/aUFyviTncmlNiixzvvKEkHJMbL/nouSV+JjwfwgvDU9YgqQV02LMywAAAABJRU5ErkJggg==')
          8/4px repeat;
        background-color: #404040;
        color: #fff;
        padding: 8px;
        margin: 2px;
      }

      .box-dark-inset {
        border-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAABHUlEQVR42r2Tg243URTE9wE+1jZWFzWjhnWD2nj/V5jur/rbSDKZzMw5s7zBkl9Sq6ijxLdQwrIDDkY3UsJiDt7afE1eq+R70ckZIxMnmp+ZhtH4uaIKJT8FNk0VhaFmp6f1989vGI2fKypfkrv9JI6zO5jR+PCQgiCA0fjkxXeTKyEA3Ha8uKi5qQmN9PdRAqPxyX9mi0ownbiKTxOli/MKpyc1OzZMSQCj8cmZY5690jshNKlsFMqGi9rb3dHbyzOMxidnrtyd5Ep8msrFkbbWVnV9eaH7m2sYjU9eo4RbTBMt21THBwc6Oz7SaQYYjU/OHPMV/5Nll8E7baytaXdrK8MmjMYnr/GfAK5iHeAF/gANyFs5O906xS3gHb/4wE6+9U2WAAAAAElFTkSuQmCC')
          8/4px repeat;
        background-color: #404040;
        color: #fff;
        padding: 8px;
        margin: 0px;
      }

      .main-image {
        margin: -4px -4px -8px;
        cursor: copy;
      }

      .range-container {
        flex: 1;
        margin: 0 8px;
      }
      .range-line {
        padding: 4px 0;
        display: flex;
      }
      .range-line sp-background-select {
        margin: -8px 2px;
      }

      .export-icon {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAABOklEQVR42mIYtgBQOxlANBRFYdjEJGpFZoVEUiAJFAIxAIRBrCAEikDAiAIAGQAURvREaDIAEZgAAYxSIQZ51ndiHcxzz3snbD+w7/wf9953mKPGI10E4ZUmx8z4y3nOiZFEYupMe+pjtBAj72xlC26QlMRU0ut7OvhNxCFl1tigSoN4QLGZdvpOv3xKMUEWuEM0HSYsQQWhzXKQ5agjmjNL0OCJQoio4l4FXcbDI21mU29okZ4qqiFc4ijzja5VcBmCqxQyBbsqeA7BouMzW1fBVwjmU6snREQ8qOCHqJ99736UkGB6XkGOKCi4+M+O3iKJXDGi2Klo+ev2qvvrhqKJIDSMN3Nd5wpLg3/U/mKMj9pcf+iZDDqJ8uELyAXplF+ww3wgB36BnWELPlyCF1uwzWdm/Y2y1f8Fcc10Q2C2TUwAAAAASUVORK5CYII=');
        background-size: 100%;
        width: 32px;
        height: 32px;
        margin: 2px 4px 6px;
      }

      .import-icon {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAABOklEQVR42t2UM2BlQRiF17Zt27ar9W7QxFVsow3a2FXsVHHfxbZtJ+dx4pn7JsY71fxnvu9dr1vzP2zGD/gjF0MQSVKBSChjCy+8AVqogmhGyvCZBz+GVIgYAfQU4edRBpFglITw/SietDUb9viK+3iBv3BDFpl24jhbEDoON+A/1k9rXyNZ1nmy8E/jeBFOMfZooA/92EsvUwjehYsCp/kUPVClFWfH/99awYVWgQdtrEPwfuxUeKtdaUMPIkjkeFY+0IaxRODCITgyefEDUYiVpIUI8mWrYJwUEEx+K1AAETV2vK+OERVvxjX+V9eKgt/mxomCH2cr+HG6whQjEKGOH6d9Sp5gO/92J5J9jF6d9PdYAhHJOUafQXr1lS8wwjlKHqGFV8DOYguaOQXfWIJfHIph+GI9nRcDTpN++QrEtxwAAAAASUVORK5CYII=');
        background-size: 100%;
        width: 32px;
        height: 32px;
        margin: 2px 4px 6px;
      }

      .previous-button {
        width: 16px;
        height: 16px;
        margin: 2px 4px;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAcklEQVR42oXREQzCQRgF8Auz6L91kPtBlvuWW2655RzlvnzLnYKiSqKsX959t+/p/ba7e6+Y3G1KF0tHT7Vo2P0dzu29QeuAma0rhMDaBUJg5eRLCCwcfCAGZy8Ygzg5yK/IH5l/My8qrzofa3Ibzv1Qf74jX2iU97hTAAAAAElFTkSuQmCC');
        background-size: 100%;
      }

      .next-button {
        width: 16px;
        height: 16px;
        margin: 2px 4px;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAbUlEQVR42qXRoQ1CQRAE0AsaSX7C13Rw/ujmaqEFErrAUARdcAqQKMxDYSCMYfVLdnemmN0crMvX2BqmooKHneUH6KhvAEO3SADOWgZwtMmAp71VAnB3ygD/gbwiH5nfTEGFqHNZs+uPupuL6QUtFmBBePuziAAAAABJRU5ErkJggg==');
        background-size: 100%;
      }

      .pause-button {
        width: 16px;
        height: 16px;
        margin: 2px 4px;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAALklEQVR42mP4f/4/DHz/b8cABP/tgSwYOM/wHxmkgRWkIQsNKQWjCjCj2w45ugEVFamxJRgyzgAAAABJRU5ErkJggg==');
        background-size: 100%;
      }

      .pause-button.paused {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAZklEQVR42mP4L/X/9f85/yUZcIH/xv9B4Mv/jv88uBTAwJP/af+ZsCtAgDP/7TEVoIPN/1VQFWCCX/9n/hdBKMAO3v4v/88OUYAbXP0vQJ4ChBWkOhLhTdIDChHUZESW1P9X+KIbAKHGJJm4ZeI3AAAAAElFTkSuQmCC');
      }

      .user-settings-icon {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAACCUlEQVR42p3SA5AlSRAA0Dzbtm3btm3btm3bNkNn27bXtvctKiP64s/06DWzrEjJrF71k7fNGR3jOMVZ0R6m9Ig3rOV0nRTdnWdDb3vA5NE6r6n3crTGhEarNzRa53L1LojWuZD0l0OsbX+/kK6JlpnOZv5T/G66TJ3aD4re9jNb1POZyj5Vuu1Uvol6KixTpVu4uYU0rSkjJYNVdq7SbarSJdNuwr8WiP+ziUcMVHxu4kyd0LuKQa61Qh7zAeAp67jQI+aNFG6QfGAjs1jXm5K7Ilytn+eyeuXTSGE/9Q6wnFTTgAn1Ua+72fSQDDdY8kKk0Em93yO8oHjMgqayczbINZYoDSyui2HOcq8hiqEedrGR/rWInXORO5swxnOS5NcoTGqa8d8rFMeOj2YyqaMlt0Uyh6R/pGRdQ9DbMpFcTPoskn0UP9ozGpnF/Gawgo+cMj5eyDeGKA40YYQlfa5YLZqyuk0tn0W2tbCVI+xL6uZVo0grRSMLGanRntbQvLuaa2C4Rkc6VaOhGG37aGR+o8BjtnadQTmCeX1ntKs9q7jPjDa0ajSysU7gzYwvA93tbWJTjE/5BaOsEc3zquKkjNdSdI5kHqfYNOpYz2/go4yvB/0dF21lDiPBWw72mOFg+2g7q2tqy2g7yxtltFFSNYI2s4zlLKQTOlnZOraIjrCjb+wSbTAGA6PPo6zoGoQAAAAASUVORK5CYII=');
        background-size: 100%;
        width: 32px;
        height: 32px;
        position: fixed;
        top: 8px;
        right: 8px;
      }

      .missing-file {
        height: 32px;
        line-height: 32px;
        margin: 0px 2px;
        text-decoration: line-through;
        color: #8e8e8e;
      }
    `],yi([pe()],Ei.prototype,"_data",void 0),yi([pe()],Ei.prototype,"_missingFiles",void 0),yi([ue("#canvas")],Ei.prototype,"_canvas",void 0),yi([ue("#animation_speed")],Ei.prototype,"_animationSpeed",void 0),yi([ue("#background")],Ei.prototype,"_background",void 0),yi([ue("#day_night")],Ei.prototype,"_dayNight",void 0),yi([ue("#assembling_machine")],Ei.prototype,"_assemblingMachine",void 0),yi([ue("sp-export-ui")],Ei.prototype,"_exportUi",void 0),yi([ue("sp-import-ui")],Ei.prototype,"_importUi",void 0),Ei=yi([oe("sp-gui")],Ei);var Si,Ci,Fi,Ri,ki,Mi=function(e,t,i,a){var n,r=arguments.length,s=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s},Ui=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)},Ti=function(e,t,i,a,n){if("m"===a)throw new TypeError("Private method is not writable");if("a"===a&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?n.call(e,i):n?n.value=i:t.set(e,i),i};let Oi=class extends re{constructor(){super(),Si.add(this),this.active=!1,Ci.set(this,void 0),Ti(this,Ci,e=>{Ui(this,Si,"m",Ri).call(this,e)},"f")}render(){return N`
      <div class="nudge-icon ${this.active?"active":""}" @click=${Ui(this,Si,"m",Fi)}></div>
    `}get container(){return this}};Ci=new WeakMap,Si=new WeakSet,Fi=function(){this.active?Ui(this,Si,"m",ki).call(this):(this.active=!0,window.document.addEventListener("keydown",Ui(this,Ci,"f")),this.classList.add("active"),window.document.addEventListener("mousedown",e=>{for(let t=e.target;null!==t;t=t.parentElement)if(t===this)return;Ui(this,Si,"m",ki).call(this)}))},Ri=function(e){let t;switch(e.preventDefault(),e.code){case"ArrowLeft":t=new ye(-1,0);break;case"ArrowUp":t=new ye(0,-1);break;case"ArrowRight":t=new ye(1,0);break;case"ArrowDown":t=new ye(0,1);break;case"KeyQ":case"Escape":return void Ui(this,Si,"m",ki).call(this);case"KeyR":return void this.dispatchEvent(new CustomEvent("rotate",{detail:e.shiftKey}));default:return}e.shiftKey?t=t.mul(64):e.ctrlKey&&(t=t.mul(10)),this.dispatchEvent(new CustomEvent("nudge",{detail:t}))},ki=function(){this.active=!1,window.document.removeEventListener("keydown",Ui(this,Ci,"f")),this.classList.remove("active")},Oi.styles=r`
    .nudge-icon {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAc0lEQVR42oXRhRGCIRiA4X8XFrC9NieCMe0x7BEeu+V4L+Drqj4RhCqPuo2DTs7cdQRH3f8OyRRMxVyOPuj/Sx6/HSTdV2tHS2NjCaTrf+WofhtsK8dWKDvcS6x+SizvJbJNxj/bMPgzZmFRxVWXj1U89wnaJ8aFw90wfgAAAABJRU5ErkJggg==');
      background-size: 100%;
      width: 24px;
      height: 24px;
      margin: 4px;
    }
    .nudge-icon:not(.active) {
      filter: brightness(50%);
    }
  `,Mi([ce({type:Boolean})],Oi.prototype,"active",void 0),Oi=Mi([oe("sp-nudge")],Oi);var $i=function(e,t,i,a){var n,r=arguments.length,s=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};class Ii extends re{constructor(){super()}_onChange(){this.value=this._select.value,this.dispatchEvent(new CustomEvent("change",{detail:this.value}))}}Ii.styles=r`
    select {
      border-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAMAAAAMs7fIAAAAY1BMVEURERGLi4uNjY13d3dfX1+GhoZqamqIiIg1NTXIyMiDg4Nra2u9vb2srKyQkJCAgICUlJS6urqmpqaCgoI9PT3CwsKzs7Opqamfn598fHxnZ2dmZmZaWlpUVFQtLS0dHR0YGBhqgy5gAAAAgElEQVQY043OyxKDIAyF4QQIabGNBfF+ff+n7Cjj1A4bv+W/SA4EXz9/ah9AQuNfJ98EgV669n1qO+nBahL5JCKkLRirS0fEzESu1NYchRh3TKkUuiJEpRQiVbo4imNUO2R3t+R38l/5nnky42CTYTTTDDE+rmKEZYWrdYEN/m1fTjwJeaI3KW0AAAAASUVORK5CYII=')
        8/4px repeat;
      background-color: #8e8e8e;
      color: #000;
      font-weight: bold;
      padding: 2px 4px 4px 4px;
      height: 26px;
      margin: 4px 2px 2px 2px;
      border-width: 0px;
    }
    select:focus {
      outline: none;
    }
  `,$i([ce({type:String})],Ii.prototype,"value",void 0),$i([ue("#select")],Ii.prototype,"_select",void 0);let Pi=class extends Ii{constructor(){super(),this.value="normal"}render(){return N`
      <select id="select" .value=${Re(this.value)} @change=${this._onChange}>
        <option label="Normal" value="normal"></option>
        <option label="Additive" value="additive"></option>
        <option label="Additive soft" value="additive-soft"></option>
        <option label="Multiplicative" value="multiplicative"></option>
        <option label="Multiplicative with alpha" value="multiplicative-with-alpha"></option>
      </select>
    `}};Pi=$i([oe("sp-blend-mode-select")],Pi);let Bi=class extends Ii{constructor(){super(),this.value="sprite"}render(){return N`
      <select id="select" .value=${Re(this.value)} @change=${this._onChange}>
        <option label="Sprite" value="sprite"></option>
        <option label="Light" value="light"></option>
        <option label="Glow" value="glow"></option>
        <option label="Shadow" value="shadow"></option>
      </select>
    `}};Bi=$i([oe("sp-draw-mode-select")],Bi);let ji=class extends Ii{constructor(){super(),this.value="lab"}render(){return N`
      <select id="select" .value=${Re(this.value)} @change=${this._onChange}>
        <option label="Lab tiles" value="lab"></option>
        <option label="Nauvis" value="nauvis"></option>
        <option label="Vulcanus" value="vulcanus"></option>
        <option label="Fulgora" value="fulgora"></option>
        <option label="Gleba" value="gleba"></option>
        <option label="Aquilo" value="aquilo"></option>
      </select>
    `}};ji=$i([oe("sp-background-select")],ji);var Vi,Di,Ni,zi,Qi,Li=function(e,t,i,a){var n,r=arguments.length,s=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s},Gi=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};let Hi=class extends re{constructor(){super(),Vi.add(this),this.caption="",this.data=[]}render(){return N`
      <sp-collapse
        id="container"
        caption="${this.caption}"
        concealable
        collapsed
        nudgeable
        @file-drop=${Gi(this,Vi,"m",Di)}
        @nudge=${e=>{this._layers.forEach(t=>{t.nudge(e.detail)})}}
      >
        <div class="layers ${globalThis.userSettings.invertLayerOrder?"inverted-order":""}">
          ${this.data.map((e,t)=>N`<sp-sprite-layer
              .data=${e}
              @delete=${e=>{e.stopPropagation(),this.data.splice(t,1),this.requestUpdate(),this.dispatchEvent(new CustomEvent("data-update",{bubbles:!0,composed:!0}))}}
              @data-update=${()=>{this.requestUpdate()}}
              @dragstart=${Gi(this,Vi,"m",zi)}
              @dragenter=${e=>{Gi(this,Vi,"m",Ni).call(this,e)&&(e.dataTransfer.dropEffect="move"),e.preventDefault()}}
              @dragover=${e=>{Gi(this,Vi,"m",Ni).call(this,e)&&(e.dataTransfer.dropEffect="move"),e.preventDefault()}}
              @drop=${Gi(this,Vi,"m",Qi)}
            ></sp-sprite-layer>`)}
        </div>
        <div class="flex-reverse">
          <sp-file-button
            caption="+ Add layer"
            @filesAdded=${Gi(this,Vi,"m",Di)}
            allowJson
          ></sp-file-button>
        </div>
      </sp-collapse>
    `}connectedCallback(){super.connectedCallback(),globalThis.userSettings.addEventListener("settings-updated",()=>{this.requestUpdate()})}getSprites(){return this._container.concealed?[]:Array.from(this._layers).flatMap(e=>e.getSprites())}exportLua(e){const t=ot(Array.from(this._layers).map(t=>t.exportLua(e+2)),e+1);return lt(new Map([["layers",t]]),e)}exportJson(){return{layers:Array.from(this._layers).map(e=>e.exportJson())}}};Vi=new WeakSet,Di=async function(e){for(const t of e.detail){const e=await Ge.instance().loadImageFromFile(t);this.data.push({hidden:!1,filename:e.filename,size:e.size,position:new ye(0,0),shift:new ye(0,0),blendMode:"normal",drawMode:"sprite",tint:[255,255,255,255]})}this.requestUpdate()},Ni=function(e){return"Sprite"==e.dataTransfer.getData("dragged-element")&&globalThis.draggedElement?.parentElement===e.target.parentElement},zi=function(e){globalThis.draggedElement=e.target,e.dataTransfer.setData("dragged-element","Sprite"),e.stopPropagation()},Qi=function(e){if(Gi(this,Vi,"m",Ni).call(this,e)){const t=Array.from(e.target.parentNode.children),i=t.indexOf(globalThis.draggedElement),a=t.indexOf(e.target);if(i!=a){const e=this.data.splice(i,1)[0];this.data.splice(a,0,e)}this.requestUpdate(),this.dispatchEvent(new CustomEvent("data-update",{bubbles:!0,composed:!0}))}e.stopPropagation()},Hi.styles=[ke,r`
      .layers {
        display: flex;
        flex-direction: column;
      }
      .layers.inverted-order {
        flex-direction: column-reverse;
      }
      sp-sprite-layer {
        margin: -2px 0px 0px 0px;
      }
    `],Li([ce({type:String})],Hi.prototype,"caption",void 0),Li([ce({type:Array})],Hi.prototype,"data",void 0),Li([ue("#container")],Hi.prototype,"_container",void 0),Li([ge("sp-sprite-layer")],Hi.prototype,"_layers",void 0),Hi=Li([oe("sp-sprite")],Hi);var qi=function(e,t,i,a){var n,r=arguments.length,s=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let Ki=class extends re{constructor(){super(),this.data={hidden:!1,filename:"",size:new ye(0,0),position:new ye(0,0),shift:new ye(0,0),blendMode:"normal",drawMode:"sprite",tint:[255,255,255,255]}}render(){return N`
      <sp-collapse
        id="container"
        caption="${this.data.filename}"
        concealeable
        collapsed
        moveable
        deleteable
        @file-drop=${e=>{const t=e.detail.filter(e=>"image/png"===e.type);t.forEach(e=>{Ge.instance().loadImageFromFile(e)}),this.data.filename=t[0].name,this.requestUpdate()}}
      >
        <div>
          <sp-image-file id="image" filename=${this.data.filename}></sp-image-file>
          <div class="flex-reverse">
            <table>
              <tr>
                <td>
                  <sp-number-input
                    caption="Width"
                    id="width"
                    value=${this.data.size.x}
                    minValue="0"
                    maxValue="1024"
                    @input=${e=>{this.data.size.x=e.detail}}
                  >
                  </sp-number-input>
                </td>
                <td>
                  <sp-number-input
                    caption="Height"
                    id="height"
                    value=${this.data.size.y}
                    minValue="0"
                    maxValue="1024"
                    @input=${e=>{this.data.size.y=e.detail}}
                  >
                  </sp-number-input>
                </td>
                <td>
                  <sp-number-input
                    caption="Position X"
                    id="position_x"
                    value=${this.data.position.x}
                    minValue="0"
                    maxValue="1024"
                    @input=${e=>{this.data.position.x=e.detail}}
                  >
                  </sp-number-input>
                </td>
                <td>
                  <sp-number-input
                    caption="Position Y"
                    id="position_y"
                    value=${this.data.position.x}
                    minValue="0"
                    maxValue="1024"
                    @input=${e=>{this.data.position.y=e.detail}}
                  >
                  </sp-number-input>
                </td>
                <td></td>
              </tr>
              <tr>
                <td colspan="2"></td>
                <td>
                  <sp-number-input
                    caption="Shift X"
                    id="shift_x"
                    value=${this.data.shift.x}
                    minValue="-1024"
                    maxValue="1024"
                    @input=${e=>{this.data.shift.x=e.detail}}
                  >
                  </sp-number-input>
                </td>
                <td>
                  <sp-number-input
                    caption="Shift Y"
                    id="shift_y"
                    value=${this.data.shift.y}
                    minValue="-1024"
                    maxValue="1024"
                    @input=${e=>{this.data.shift.y=e.detail}}
                  >
                  </sp-number-input>
                </td>
                <td>
                  <sp-nudge
                    @nudge=${e=>{this.nudge(e.detail)}}
                  ></sp-nudge>
                </td>
              </tr>
            </table>
          </div>
          <div class="flex-reverse">
            <sp-color-picker
              .rgba=${this.data.tint}
              @change=${e=>{this.data.tint=e.detail}}
            ></sp-color-picker>
            <sp-draw-mode-select
              value=${this.data.drawMode}
              @change=${e=>{this.data.drawMode=e.detail}}
            ></sp-draw-mode-select>
            <sp-blend-mode-select
              value=${this.data.blendMode}
              @change=${e=>{this.data.blendMode=e.detail}}
            ></sp-blend-mode-select>
          </div>
        </div>
      </sp-collapse>
    `}nudge(e){this.data.shift.x+=e.x,this.data.shift.y+=e.y,this.requestUpdate()}getSprites(){return this._container.concealed?[]:[{imageId:this._image.imageId,size:this.data.size,shift:this.data.position,topLeft:this.data.shift.subtract(new ye(this.data.size.x>>1,this.data.size.y>>1)),blendMode:this.data.blendMode,drawMode:this.data.drawMode,tint:this.data.tint}]}exportLua(e){const t=new Map([["scale",st(.5)],["filename",rt(this.data.filename)],["blend_mode",rt(this.data.blendMode)],["width",st(this.data.size.x)],["height",st(this.data.size.y)]]),i=this.data.shift.add(new ye(this.data.size.x%2,this.data.size.y%2).mul(.5));t.set("shift",`util.by_pixel_hr(${i.x}, ${i.y})`);const a=this.data.tint.map(e=>e/255);t.set("tint",`{ r = ${a[0]}, g = ${a[1]}, b = ${a[2]}, a = ${a[3]} }`);const n=this.data.position;return t.set("position",`{ ${n.x}, ${n.y} }`),"light"==this.data.drawMode?t.set("draw_as_light",st(!0)):"glow"==this.data.drawMode?t.set("draw_as_glow",st(!0)):"shadow"==this.data.drawMode&&t.set("draw_as_shadow",st(!0)),lt(t,e)}exportJson(){const e={scale:.5,filename:this.data.filename,blend_mode:this.data.blendMode,width:this.data.size.x,height:this.data.size.y,shift:this.data.shift.add(new ye(this.data.size.x%2,this.data.size.y%2).mul(.5)).mul(1/64).asPrototype(),position:this.data.position.asArray(),tint:this.data.tint.map(e=>e/255)};return"light"==this.data.drawMode?e.draw_as_light=!0:"glow"==this.data.drawMode?e.draw_as_glow=!0:"shadow"==this.data.drawMode&&(e.draw_as_shadow=!0),e}};Ki.styles=[ke],qi([ce({type:Object})],Ki.prototype,"data",void 0),qi([ue("#image")],Ki.prototype,"_image",void 0),qi([ue("#container")],Ki.prototype,"_container",void 0),Ki=qi([oe("sp-sprite-layer")],Ki);var Yi=function(e,t,i,a){var n,r=arguments.length,s=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let Ji=class extends re{constructor(){super()}render(){return N`
      <div class="tooltip">
        <div class="tooltip-icon"></div>
        <div class="tooltip-text">
          <slot></slot>
        </div>
      </div>
    `}};Ji.styles=r`
    .tooltip {
      width: 16px;
      height: 16px;
      position: relative;
      display: inline-block;
    }

    .tooltip-icon {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAjElEQVR42pWQwQ2CQBREqQDbcO3Hi/ShYixFJUGhH7ED+oDnJJvNRNaDvjnOy87mF3/AhppGqQl5uaJnJjHTUX7WL5YMWKEnMSqJu7f9+FnxUIjCCTMq5hiFG2ZHhbnmwlYxF0/kgicI/iSVkphYFxG6r59sfYeSgSXPeCgrDzw00bq2FDjQKHtt/84begom1FPpFJQAAAAASUVORK5CYII=');
      background-size: 100%;
      width: 16px;
      height: 16px;
    }

    .tooltip-text {
      border-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAIAAAC0D9CtAAABE0lEQVR42sWRg24FUQBE77Nt2zaCulFt225Yf3tnvVs3ejcnmjmzJFszwzd784+Xm693u2/3e9+BFg5M+GS8XVyfHj7bnLk9XLo/XqFZlUKFaOHAhE+KUf9wqzQ70V+fGduYG9+Ym6CZ5JgAyNHCgQmfRN32ZMBTycTblXynWmiDWlEMEuRo4cCETwJOW9jjjPo98WAgFgqCaCgkhgnRwoEJn994Y/SG9sLRMEcIUDO0cMQbF7XhBpEwiHAIMzgwxRsfu5EMKJBwG99ANv9/n/9/t///H6/N7HNY/U673+30u10UHrcEOkQLByZ8YjPqLAadSa816rQGCt1XUC0cmPCJXqNSKuTkbwcmfKKQy8h/Dvx3w6p2nO3eJCYAAAAASUVORK5CYII=')
        8/4px repeat;
      position: absolute;
      background-color: #1f1e1f;
      padding: 4px;
      bottom: 16px;
      color: #ffffff;
      max-width: 500px;
      min-width: 300px;
      display: none;
    }

    .tooltip:hover .tooltip-text {
      display: block;
    }
  `,Ji=Yi([oe("sp-tooltip")],Ji);var Wi,Xi,Zi,ea=function(e,t,i,a){var n,r=arguments.length,s=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s},ta=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};let ia=class extends re{constructor(e,t,i,a){super(),Wi.add(this),this.caption="",this.minValue=0,this.maxValue=0,this.value=0,this.caption=e||"",this.minValue=t||0,this.maxValue=i||0,this.value=a||0}get container(){return this}safe_reset(e){this.value=He(e,this.minValue,this.maxValue)}render(){return N`
      <div class="right-aligned">
        <div>
          <input
            id="input"
            type="number"
            @change=${ta(this,Wi,"m",Xi)}
            @input=${ta(this,Wi,"m",Zi)}
            .value="${Re(this.value)}"
          />
        </div>
        <div class="number-input-caption">${this.caption}</div>
      </div>
    `}};Wi=new WeakSet,Xi=function(e){ta(this,Wi,"m",Zi).call(this,e),this.dispatchEvent(new CustomEvent("change",{detail:this.value})),this.requestUpdate()},Zi=function(e){e.stopPropagation(),this.value=He(parseInt(e.target.value)||0,this.minValue,this.maxValue),this.dispatchEvent(new CustomEvent("input",{detail:this.value}))},ia.styles=r`
    .right-aligned {
      display: flex;
      flex-direction: row-reverse;
    }
    .number-input-caption {
      height: 32px;
      line-height: 32px;
      padding: 0px 2px;
    }
    input[type='number'] {
      width: 30px;
      text-align: center;
    }
    input[type='number'] {
      height: 18px;
      margin: 4px 4px;
      background-color: #8e8e8e;
      outline: none;
      border-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAhElEQVR42m3MBZaFMBBE0aRxiOLO/lc580a/ViN1bkRCCPFdcFFKaa3VY35ESJZlVVU1TWOYpqEjuCSSlGXpne+6bhgHvnQEFy3655w11jHG0hFc1MfX7caY+Bc6gktRFOdxXNfJc56/BcFlP/Z126Z57v9CR3Bh8zxNMXCV5Ta+dAT/BMrUDuTSc0raAAAAAElFTkSuQmCC')
        4/2px repeat;
    }

    input[type='number']:focus {
      background-color: #f1be64;
    }
    input[type='number']::-webkit-outer-spin-button,
    input[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type='number'] {
      -moz-appearance: textfield;
    }
  `,ea([ce({type:String})],ia.prototype,"caption",void 0),ea([ce({type:Number})],ia.prototype,"minValue",void 0),ea([ce({type:Number})],ia.prototype,"maxValue",void 0),ea([ce({type:Number})],ia.prototype,"value",void 0),ia=ea([oe("sp-number-input")],ia);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const aa="important",na=" !"+aa,ra=Se(class extends Ce{constructor(e){if(super(e),e.type!==xe||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const a=e[i];return null==a?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${a};`},"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(const e in t){const a=t[e];if(null!=a){this.ft.add(e);const t="string"==typeof a&&a.endsWith(na);e.includes("-")||t?i.setProperty(e,t?a.slice(0,-11):a,t?aa:""):i[e]=a}}return z}});var sa,oa,la,da,ca,pa=function(e,t,i,a){var n,r=arguments.length,s=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s},ha=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)},ua=function(e,t,i,a,n){if("m"===a)throw new TypeError("Private method is not writable");if("a"===a&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?n.call(e,i):n?n.value=i:t.set(e,i),i};const Aa=1e-7;function ga(e){const t=e[0]/255,i=e[1]/255,a=e[2]/255,n=Math.max(t,i,a),r=n-Math.min(t,i,a);let s,o;return s=n<Aa?0:r/n,s<Aa?o=0:(Math.abs(t-n)<Aa?(o=(i-a)/r,o<0&&(o+=6)):o=Math.abs(i-n)<Aa?2+(a-t)/r:4+(t-i)/r,o/=6),[o,s,n,e[3]/255]}function ma(e){const t=e[0],i=e[1],a=e[2];let n=0,r=0,s=0,o=t%1;o+=o<0?1:0,o*=6;const l=i*a,d=l*(1-Math.abs(o%2-1));o<1?(n=l,r=d):o<2?(n=d,r=l):o<3?(r=l,s=d):o<4?(r=d,s=l):o<5?(n=d,s=l):o<6&&(n=l,s=d);const c=a-l;return n+=c,r+=c,s+=c,[He(Math.floor(255*n),0,255),He(Math.floor(255*r),0,255),He(Math.floor(255*s),0,255),He(Math.floor(255*e[3]),0,255)]}function fa(e,t,i){return[t[0]*e+i[0]*(1-e),t[1]*e+i[1]*(1-e),t[2]*e+i[2]*(1-e),t[3]*e+i[3]*(1-e)]}const va=96,wa=120,ba=256,ya=4*Math.atan(1),xa=Math.sqrt(3);function _a(e,t){const i=Math.sqrt(e*e+t*t);return i>=va&&i<=wa?0:i<va?va-i:i-wa}function Ea(e,t){return Math.max(0,Math.max(2*t,-e*xa-t,e*xa-t)-va+2)}function Sa(e,t){return e>=132&&e<156&&t>=-120&&t<=wa}function Ca(e,t){return Math.atan2(t,e)/2/ya}function Fa(e,t){return e/(t+va)*xa/2+.5}function Ra(e,t){return(t/va+1)/1.5}function ka(e,t){return He(t/wa/2+.5,0,1)}let Ma=class extends re{constructor(e){super(),sa.add(this),this.rgba=[255,255,255,255],this._hsva=[1,1,1,1],this._active=!1,this._selectMode=void 0,oa.set(this,void 0),this.rgba=e||[255,255,255,255],ua(this,oa,e=>{-1==e.composedPath().indexOf(this._picker)&&(this._active=!1,window.document.removeEventListener("mousedown",ha(this,oa,"f")))},"f")}connectedCallback(){super.connectedCallback(),this._hsva=ga(this.rgba)}updateRgba(){this.rgba=[this._red.value,this._green.value,this._blue.value,this._alpha.value],this._hsva=ga(this.rgba),this.dispatchEvent(new CustomEvent("change",{detail:this.rgba}))}render(){return N`
      <div id="picker" class="color-picker">
        <div class="color-picker-background">
          <div
            class="color-picker-color"
            @click=${()=>{this._active=!0,window.document.addEventListener("mousedown",ha(this,oa,"f"))}}
            style=${ra({backgroundColor:`rgba(${this.rgba[0]}, ${this.rgba[1]},\n                             ${this.rgba[2]}, ${this.rgba[3]})`})}
          ></div>
        </div>
        <div ?hidden=${!this._active}>
          <div class="color-picker-popup outer-frame">
            <div class="inner-frame">
              <canvas
                id="canvas"
                width="${292}"
                height="${ba}"
                @mousedown=${ha(this,sa,"m",la)}
                @mousemove=${ha(this,sa,"m",da)}
                @mouseup=${ha(this,sa,"m",ca)}
                @mouseleave=${ha(this,sa,"m",ca)}
              ></canvas>
              <div class="flex-horizontal flex-spaced">
                <sp-number-input
                  id="red"
                  caption="r"
                  value=${this.rgba[0]}
                  minValue="0"
                  maxValue="255"
                  @input=${this.updateRgba}
                  @change=${this.updateRgba}
                ></sp-number-input>
                <sp-number-input
                  id="green"
                  caption="g"
                  value=${this.rgba[1]}
                  minValue="0"
                  maxValue="255"
                  @input=${this.updateRgba}
                  @change=${this.updateRgba}
                ></sp-number-input>
                <sp-number-input
                  id="blue"
                  caption="b"
                  value=${this.rgba[2]}
                  minValue="0"
                  maxValue="255"
                  @input=${this.updateRgba}
                  @change=${this.updateRgba}
                ></sp-number-input>
                <sp-number-input
                  id="alpha"
                  caption="a"
                  value=${this.rgba[3]}
                  minValue="0"
                  maxValue="255"
                  @input=${this.updateRgba}
                  @change=${this.updateRgba}
                ></sp-number-input>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}updated(){this._canvas.getContext("2d").putImageData(function(e){const t=new ImageData(292,ba),i=new ye(Math.cos(2*e[0]*ya),Math.sin(2*e[0]*ya)),a=new ye(2*(e[1]-.5)/xa*e[2]*1.5*va,(1.5*e[2]-1)*va);for(let n=-128;n<128;n++)for(let r=-128;r<164;r++){const s=4*((n+128)*t.width+(r+128)),o=_a(r,n),l=Ea(r,n);if(o<1){const e=Ca(r,n),a=Math.abs(i.vmul(new ye(r,n)));let l=ma([e,1,1,255]);a<2&&i.smul(new ye(r,n))>0&&(l=fa(a/2,l,[0,0,0,255])),t.data.set(fa(o,[48,48,48,255],l),s)}else if(l<1){let i=ma([e[0],Fa(r,n),Ra(0,n),255]);const o=a.subtract(new ye(r,n)),d=Math.sqrt(o.smul(o));Math.abs(d-4)<2&&(i=fa(Math.abs(d-4)/2,i,e[2]<.5?[255,255,255,255]:[0,0,0,255])),t.data.set(fa(l,[48,48,48,255],i),s)}else if(Sa(r,n)){const i=(Math.floor(r/12)+Math.floor(n/12))%2==0?[102,102,102,255]:[204,204,204,255],a=ma(e);a[3]=255;const o=Math.trunc(2*(e[3]-.5)*wa);let l=fa(ka(0,n),a,i);n==o?l=ma([e[0],.18,.17,1]):n!=o-1&&n!=o+1||(l=ma([e[0],.18,.85,1])),t.data.set(l,s)}else t.data.set([48,48,48,255],s)}return t}(this._hsva),0,0)}get container(){return this}};oa=new WeakMap,sa=new WeakSet,la=function(e){const t=e.offsetX-128,i=e.offsetY-128;if(_a(t,i)<Aa)this._hsva[0]=Ca(t,i),this._selectMode="hue";else if(Ea(t,i)<Aa)this._hsva[1]=Fa(t,i),this._hsva[2]=Ra(0,i),this._selectMode="saturationValue";else{if(!Sa(t,i))return;this._hsva[3]=ka(0,i),this._selectMode="alpha"}this.rgba=ma(this._hsva),this.dispatchEvent(new CustomEvent("change",{detail:this.rgba}))},da=function(e){const t=e.offsetX-128,i=e.offsetY-128;if("hue"===this._selectMode)this._hsva[0]=Ca(t,i);else if("saturationValue"===this._selectMode){const e=new ye(t,i);Ea(t,i)<Aa?(this._hsva[1]=Fa(t,i),this._hsva[2]=Ra(0,i)):i>=48?(this._hsva[1]=He(t/va/xa+.5,0,1),this._hsva[2]=1):t>0?(this._hsva[1]=1,this._hsva[2]=He(e.smul(new ye(.5/xa,.5))/va+.5,0,1)):(this._hsva[1]=0,this._hsva[2]=He(e.smul(new ye(-.5/xa,.5))/va+.5,0,1))}else{if("alpha"!==this._selectMode)return;this._hsva[3]=He(ka(0,i),0,1)}this.rgba=ma(this._hsva),this.dispatchEvent(new CustomEvent("change",{detail:this.rgba}))},ca=function(){this._selectMode=void 0},Ma.styles=[ke,r`
      .color-picker {
        position: relative;
        width: 24px;
        height: 24px;
        margin: 4px 2px;
      }

      .color-picker-color {
        width: 24px;
        height: 24px;
      }

      .color-picker-background {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAAAAAAA7I8lAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAFklEQVR42mM4AwZpYDDYOBAKIjTIOADq0KwhQBkxNwAAAABJRU5ErkJggg==');
      }

      .color-picker-popup {
        position: absolute;
        right: 28px;
        bottom: 0px;
      }

      .color-picker-popup canvas {
        margin: 0px;
      }
    `],pa([ce({type:Array})],Ma.prototype,"rgba",void 0),pa([ce({type:Array})],Ma.prototype,"_hsva",void 0),pa([pe()],Ma.prototype,"_active",void 0),pa([pe()],Ma.prototype,"_selectMode",void 0),pa([ue("#red")],Ma.prototype,"_red",void 0),pa([ue("#green")],Ma.prototype,"_green",void 0),pa([ue("#blue")],Ma.prototype,"_blue",void 0),pa([ue("#alpha")],Ma.prototype,"_alpha",void 0),pa([ue("#picker")],Ma.prototype,"_picker",void 0),pa([ue("#canvas")],Ma.prototype,"_canvas",void 0),Ma=pa([oe("sp-color-picker")],Ma);var Ua=function(e,t,i,a){var n,r=arguments.length,s=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let Ta=class extends re{constructor(){super(...arguments),this.data=Ye()}render(){return N`
      <div class="flex-horizontal size-box">
        <div>
          <sp-number-input
            caption="Width:"
            id="width"
            value=${this.data.size.x}
            minValue="1"
            maxValue="32"
            @change=${e=>{this.data.size.x=e.detail,this.dispatchEvent(new CustomEvent("data-update"))}}
          >
        </div>
        <div>
          <sp-number-input
            caption="Height:"
            id="height"
            value=${this.data.size.y}
            minValue="1"
            maxValue="32"
            @change=${e=>{this.data.size.y=e.detail,this.dispatchEvent(new CustomEvent("data-update"))}}
          >
        </div>
      </div>
      <sp-animation .data=${this.data.animation}></sp-animation>
      <sp-circuit-connector .data=${this.data.circuitConnector}></sp-circuit-connector>
      <sp-fluid-boxes .data=${this.data.fluidBoxes}></sp-fluid-boxes>
    `}exportLua(e){const t=new Map;return this.data.animation.length>0&&t.set("graphics_set",lt(new Map([["animation",this._animation.exportLua(e+2)]]),e+1)),this.data.circuitConnector.hidden||t.set("circuit_connector",this._circuitConnector.exportLua(e+1)),this.data.fluidBoxes.length>0&&t.set("fluid_boxes",this._fluidBoxes.exportLua(e+1)),lt(t,e)}exportJson(){const e={tile_width:this.data.size.x,tile_height:this.data.size.y};if(this.data.animation.length>0&&(e.graphics_set={animation:this._animation.exportJson()}),!this.data.circuitConnector.hidden){const t=this._circuitConnector.exportJson();e.circuit_connector=[t,t,t,t]}return this.data.fluidBoxes.length>0&&(e.fluid_boxes=this._fluidBoxes.exportJson()),e}getSprites(e){return[this._animation.getSprites(e),this._circuitConnector.getSprites(),this._fluidBoxes.getSprites()].flat()}};Ta.styles=[ke,r`
      .size-box {
        border-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAABHUlEQVR42r2Tg243URTE9wE+1jZWFzWjhnWD2nj/V5jur/rbSDKZzMw5s7zBkl9Sq6ijxLdQwrIDDkY3UsJiDt7afE1eq+R70ckZIxMnmp+ZhtH4uaIKJT8FNk0VhaFmp6f1989vGI2fKypfkrv9JI6zO5jR+PCQgiCA0fjkxXeTKyEA3Ha8uKi5qQmN9PdRAqPxyX9mi0ownbiKTxOli/MKpyc1OzZMSQCj8cmZY5690jshNKlsFMqGi9rb3dHbyzOMxidnrtyd5Ep8msrFkbbWVnV9eaH7m2sYjU9eo4RbTBMt21THBwc6Oz7SaQYYjU/OHPMV/5Nll8E7baytaXdrK8MmjMYnr/GfAK5iHeAF/gANyFs5O906xS3gHb/4wE6+9U2WAAAAAElFTkSuQmCC')
          8/4px repeat;
        background-color: #404040;
        color: #fff;
        padding: 8px;
        margin: 0px;
      }
    `],Ua([ce({type:Object})],Ta.prototype,"data",void 0),Ua([ue("sp-animation")],Ta.prototype,"_animation",void 0),Ua([ue("sp-circuit-connector")],Ta.prototype,"_circuitConnector",void 0),Ua([ue("sp-fluid-boxes")],Ta.prototype,"_fluidBoxes",void 0),Ta=Ua([oe("sp-assembling-machine")],Ta);var Oa,$a,Ia,Pa,Ba,ja=function(e,t,i,a){var n,r=arguments.length,s=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s},Va=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};const Da=[{filename:"circuit-connector/ccm-universal-04a-base-sequence.png",size:new ye(52,50),shift:new ye(0,2)},{filename:"circuit-connector/ccm-universal-04c-wire-sequence.png",size:new ye(62,58),shift:new ye(0,2)},{filename:"circuit-connector/ccm-universal-04e-blue-LED-on-sequence.png",size:new ye(60,60),shift:new ye(0,0),draw_as_glow:!0},{filename:"circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",size:new ye(46,44),shift:new ye(0,0)},{filename:"circuit-connector/ccm-universal-04h-green-LED-sequence.png",size:new ye(48,46),shift:new ye(0,0),draw_as_glow:!0},{filename:"circuit-connector/ccm-universal-04i-red-LED-sequence.png",size:new ye(48,46),shift:new ye(0,0),draw_as_glow:!0}],Na=[{filename:"circuit-connector/ccm-universal-04b-base-shadow-sequence.png",size:new ye(60,46),shift:new ye(5,5)},{filename:"circuit-connector/ccm-universal-04d-wire-shadow-sequence.png",size:new ye(68,54),shift:new ye(10,7)}];let za=class extends re{constructor(){super(),Oa.add(this)}render(){return N`
      <sp-collapse
        caption="Circuit connector"
        id="collapse"
        ?concealed=${this.data.hidden}
        concealable
        collapsed
        @conceal-toggle=${Va(this,Oa,"m",$a)}
      >
        <div class="flex-reverse">
          <table>
            <tr>
              <td>
                <sp-number-input
                  caption="Variant"
                  value=${this.data.variant}
                  minValue="0"
                  maxValue="39"
                  @change=${e=>{this.data.variant=e.detail}}
                >
                </sp-number-input>
              </td>
              <td>
                <sp-number-input
                  caption="Shift X"
                  value=${this.data.position.x}
                  minValue="-1024"
                  maxValue="1024"
                  @change=${e=>{this.data.position.x=e.detail}}
                >
                </sp-number-input>
              </td>
              <td>
                <sp-number-input
                  caption="Shift Y"
                  value=${this.data.position.y}
                  minValue="-1024"
                  maxValue="1024"
                  @change=${e=>{this.data.position.y=e.detail}}
                >
                </sp-number-input>
              </td>
              <td>
                <sp-nudge @nudge=${Va(this,Oa,"m",Ia)} @rotate=${Va(this,Oa,"m",Pa)}> </sp-nudge>
              </td>
            </tr>
            <tr>
              <td>
                <sp-checkbox
                  caption="Shadow"
                  ?checked=${this.data.showShadow}
                  @change=${e=>{this.data.showShadow=e.detail}}
                >
                </sp-checkbox>
              </td>
              <td>
                <sp-number-input
                  caption="Shift X"
                  value=${this.data.shadowPosition.x}
                  minValue="-1024"
                  maxValue="1024"
                  @change=${e=>{this.data.shadowPosition.x=e.detail}}
                >
                </sp-number-input>
              </td>
              <td>
                <sp-number-input
                  caption="Shift Y"
                  value=${this.data.shadowPosition.y}
                  minValue="-1024"
                  maxValue="1024"
                  @change=${e=>{this.data.shadowPosition.x=e.detail}}
                >
                </sp-number-input>
              </td>
              <td>
                <sp-nudge @nudge=${Va(this,Oa,"m",Ba)}> </sp-nudge>
              </td>
            </tr>
          </table>
        </div>
      </sp-collapse>
    `}getSprites(){if(this.data.hidden)return[];const e=Math.floor(this.data.variant/8),t=this.data.variant%8,i=Da.map(i=>({imageId:i.filename,size:i.size,shift:new ye(t*i.size.x,e*i.size.y),topLeft:i.size.mul(-.5).add(i.shift).add(this.data.position),blendMode:"normal",drawMode:i.draw_as_glow?"glow":"sprite",tint:[255,255,255,255]})),a=this.data.showShadow?Na.map(i=>({imageId:i.filename,size:i.size,shift:new ye(t*i.size.x,e*i.size.y),topLeft:i.size.mul(-.5).add(i.shift).add(this.data.shadowPosition),blendMode:"normal",drawMode:"shadow",tint:[255,255,255,255]})):[];return i.concat(a)}exportLua(e){const t=lt(new Map([["variation",st(this.data.variant)],["main_offset",`util.by_pixel_hr(${this.data.position.x}, ${this.data.position.y})`],["shadow_offset",`util.by_pixel_hr(${this.data.shadowPosition.x}, ${this.data.shadowPosition.y})`],["show_shadow",st(this.data.showShadow)]]),e+2),i=ot([t,t,t,t],e+1),a="  ".repeat(e);return`circuit_connector_definitions.create_vector(\n${a}  universal_connector_template,\n${a}  ${i}\n${a})`}exportJson(){const e=(e,t)=>{const i=Math.floor(this.data.variant/8),a=this.data.variant%8,n={filename:"__base__/graphics/entity/"+e.filename,width:e.size.x,height:e.size.y,position:new ye(a*e.size.x,i*e.size.y).asArray(),shift:(t?this.data.shadowPosition:this.data.position).add(e.shift).mul(1/64).asPrototype(),scale:.5};return e.draw_as_glow&&(n.draw_as_glow=!0),t&&(n.draw_as_shadow=!0),n},t={connector_main:e(Da[0],!1),wire_pins:e(Da[1],!1),led_blue:e(Da[2],!1),led_blue_off:e(Da[3],!1),led_green:e(Da[4],!1),led_red:e(Da[5],!1)};return this.data.showShadow&&(t.connector_shadow=e(Na[0],!0),t.wire_pins_shadow=e(Na[1],!0)),{sprites:t}}};Oa=new WeakSet,$a=function(e){this.data.hidden=e.detail,this.requestUpdate()},Ia=function(e){this.data.position=this.data.position.add(e.detail),this.data.shadowPosition=this.data.shadowPosition.add(e.detail),this.requestUpdate()},Pa=function(e){const t=e.detail;this.data.variant=(this.data.variant+(t?39:1))%40,this.requestUpdate()},Ba=function(e){this.data.shadowPosition=this.data.shadowPosition.add(e.detail)},za.styles=[ke],ja([ce({type:Object})],za.prototype,"data",void 0),ja([ue("#collapse")],za.prototype,"_collapse",void 0),za=ja([oe("sp-circuit-connector")],za);var Qa=function(e,t,i,a){var n,r=arguments.length,s=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let La=class extends re{constructor(){super(),this.checked=!1,this.caption="",this.checked=!1,this.caption=""}onChange(e){this.checked=e.target.checked,this.dispatchEvent(new CustomEvent("change",{detail:this.checked}))}render(){return N`
      <div class="right-aligned">
        <div>
          <input type=checkbox
                 ?checked=${this.checked}
                 @change=${this.onChange}>
           </input>
        </div>
        <div>${this.caption}</div>
      </div>
    `}};La.styles=r`
    .right-aligned {
      display: flex;
      flex-direction: row-reverse;
    }
  `,Qa([ce({type:Boolean})],La.prototype,"checked",void 0),Qa([ce({type:String})],La.prototype,"caption",void 0),La=Qa([oe("sp-checkbox")],La);var Ga,Ha,qa,Ka,Ya,Ja=function(e,t,i,a){var n,r=arguments.length,s=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s},Wa=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};const Xa=[{image:"pipe-covers/pipe-cover-north.png",shadow:"pipe-covers/pipe-cover-north-shadow.png"},{image:"pipe-covers/pipe-cover-east.png",shadow:"pipe-covers/pipe-cover-east-shadow.png"},{image:"pipe-covers/pipe-cover-south.png",shadow:"pipe-covers/pipe-cover-south-shadow.png"},{image:"pipe-covers/pipe-cover-west.png",shadow:"pipe-covers/pipe-cover-west-shadow.png"}],Za=[new ye(0,-1),new ye(1,0),new ye(0,1),new ye(-1,0)],en=["defines.direction.north","defines.direction.east","defines.direction.south","defines.direction.west"];let tn=class extends re{constructor(){super(),Ga.add(this),this.data={pipePicturesNorth:[],pipePicturesEast:[],pipePicturesSouth:[],pipePicturesWest:[],pipeConnections:[]},this.boundingBoxSize=new ye(1,1)}connectedCallback(){super.connectedCallback();for(let e=this;void 0!==e;e=e.getRootNode().host)if("SP-ASSEMBLING-MACHINE"==e.nodeName){this.boundingBoxSize=e.data.size,e.addEventListener("data-update",()=>{this.requestUpdate()});break}}render(){return N`
      <sp-collapse id="container" concealable collapsed deleteable>
        <sp-sprite
          caption="Pipe picture - North"
          id="pipe_pictures_north"
          .data=${this.data.pipePicturesNorth}
        ></sp-sprite>
        <sp-sprite
          caption="Pipe picture - East"
          id="pipe_pictures_east"
          .data=${this.data.pipePicturesEast}
        ></sp-sprite>
        <sp-sprite
          caption="Pipe picture - South"
          id="pipe_pictures_south"
          .data=${this.data.pipePicturesSouth}
        ></sp-sprite>
        <sp-sprite
          caption="Pipe picture - West"
          id="pipe_pictures_west"
          .data=${this.data.pipePicturesWest}
        ></sp-sprite>
        <sp-collapse id="pipe_connections" caption="Pipe connections" concealable>
          <canvas
            id="canvas"
            @mousedown=${Wa(this,Ga,"m",Ya)}
            width=${32*(this.boundingBoxSize.x+2)}
            height=${32*(this.boundingBoxSize.y+2)}
          >
          </canvas>
        </sp-collapse>
      </sp-collapse>
    `}updated(){const e=this._canvas.getContext("2d"),t=new ImageData(this._canvas.width,this._canvas.height);for(let e=0;e<t.height;e++)for(let i=0;i<t.width;i++){const a=4*(e*t.width+i),n=(32&i)==(32&e)?27:48;t.data.set([n,n,n,255],a)}e.putImageData(t,0,0),e.lineWidth=2,e.strokeStyle="#ffff00",e.strokeRect(32,32,32*this.boundingBoxSize.x,32*this.boundingBoxSize.y),this.data.pipeConnections.forEach(t=>{Wa(this,Ga,"m",Ha).call(this,t,e)})}getSprites(){return null===this._container||this._container.concealed?[]:this.data.pipeConnections.flatMap(e=>{const t=e.position.add(Za[e.direction]).mul(64),i=this._pipeConnections.concealed?[]:[{imageId:Xa[e.direction].image,size:new ye(128,128),topLeft:t.subtract(new ye(64,64)),blendMode:"normal",drawMode:"sprite",secondaryDrawOrder:0==e.direction?-64:64},{imageId:Xa[e.direction].shadow,size:new ye(128,128),topLeft:t.subtract(new ye(64,64)),blendMode:"normal",drawMode:"shadow",secondaryDrawOrder:0==e.direction?-64:64}];return[[this._pipePicturesNorth,this._pipePicturesEast,this._pipePicturesSouth,this._pipePicturesWest][e.direction].getSprites().map(i=>(i.topLeft=i.topLeft.add(t),i.secondaryDrawOrder=0==e.direction?-1:1,i)),i].flat()})}exportLua(e){const t=new Map([["north",this._pipePicturesNorth.exportLua(e+2)],["east",this._pipePicturesEast.exportLua(e+2)],["south",this._pipePicturesSouth.exportLua(e+2)],["west",this._pipePicturesWest.exportLua(e+2)]]),i=this.data.pipeConnections.map(t=>lt(new Map([["direction",en[t.direction]],["position",`{ ${t.position.x}, ${t.position.y} }`]]),e+2)),a=new Map([["north",st(-1)]]),n=new Map([["pipe_covers","pipecoverspictures()"],["pipe_picture",lt(t,e+1)],["pipe_connections",ot(i,e+1)],["secondary_draw_orders",lt(a,e+1)]]);return lt(n,e)}exportJson(){return{pipe_picture:{north:this._pipePicturesNorth.exportJson(),east:this._pipePicturesEast.exportJson(),south:this._pipePicturesSouth.exportJson(),west:this._pipePicturesWest.exportJson()},pipe_connections:this.data.pipeConnections.map(e=>({direction:4*e.direction,position:e.position.asPrototype()})),secondary_draw_orders:{north:-1}}}};Ga=new WeakSet,Ha=function(e,t){const i=Za[e.direction],a=new ye(-i.y,i.x);let n=e.position.add(i.mul(.5)).add(new ye(this.boundingBoxSize.x/2+1,this.boundingBoxSize.y/2+1)).mul(32);t.beginPath(),n=n.add(i.mul(7)),t.moveTo(n.x,n.y),n=n.add(i.mul(-10)).add(a.mul(10)),t.lineTo(n.x,n.y),n=n.add(a.mul(-20)),t.lineTo(n.x,n.y),t.closePath(),t.fillStyle="#29cce7",t.fill(),t.lineWidth=1,t.strokeStyle="#1770bf",t.stroke()},qa=function(e,t,i){if(e<0||e>32*i||Math.abs(t)>10)return;const a=Math.floor(e/32);return Math.abs(t)+Math.abs(e-32*(a+.5))>16?void 0:a},Ka=function(e,t){const i=this.boundingBoxSize.x,a=this.boundingBoxSize.y;{const n=Wa(this,Ga,"m",qa).call(this,e-32,t-32,i);if(void 0!==n)return{direction:0,position:new ye(n-(i-1)/2,-(a-1)/2)}}{const n=Wa(this,Ga,"m",qa).call(this,t-32,e-32-32*i,a);if(void 0!==n)return{direction:1,position:new ye((i-1)/2,n-(a-1)/2)}}{const n=Wa(this,Ga,"m",qa).call(this,e-32,t-32-32*a,i);if(void 0!==n)return{direction:2,position:new ye(n-(i-1)/2,(a-1)/2)}}{const n=Wa(this,Ga,"m",qa).call(this,t-32,e-32,a);if(void 0!==n)return{direction:3,position:new ye(-(i-1)/2,n-(a-1)/2)}}},Ya=function(e){const t=Wa(this,Ga,"m",Ka).call(this,e.offsetX,e.offsetY);if(void 0===t)return;const i=this.data.pipeConnections.filter(e=>e.direction!=t.direction||e.position.x!=t.position.x||e.position.y!=t.position.y);i.length!=this.data.pipeConnections.length?this.data.pipeConnections=i:this.data.pipeConnections.push(t),this.requestUpdate()},tn.styles=ke,Ja([ce({type:Object})],tn.prototype,"data",void 0),Ja([pe()],tn.prototype,"boundingBoxSize",void 0),Ja([ue("#canvas")],tn.prototype,"_canvas",void 0),Ja([ue("#pipe_pictures_north")],tn.prototype,"_pipePicturesNorth",void 0),Ja([ue("#pipe_pictures_east")],tn.prototype,"_pipePicturesEast",void 0),Ja([ue("#pipe_pictures_south")],tn.prototype,"_pipePicturesSouth",void 0),Ja([ue("#pipe_pictures_west")],tn.prototype,"_pipePicturesWest",void 0),Ja([ue("#pipe_connections")],tn.prototype,"_pipeConnections",void 0),Ja([ue("#container")],tn.prototype,"_container",void 0),tn=Ja([oe("sp-fluid-box")],tn);var an=function(e,t,i,a){var n,r=arguments.length,s=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let nn=class extends re{constructor(){super(),this.data=[]}render(){return N`
      <sp-collapse id="container" caption="Fluid boxes" concealable collapsed concealed>
        ${this.data.map((e,t)=>N`<sp-fluid-box
            .data=${e}
            @delete=${e=>{e.stopPropagation(),this.data.splice(t,1),this.requestUpdate()}}
          ></sp-fluid-box>`)}
        <div class="flex-reverse">
          <div
            class="text-button"
            @click=${()=>{this.data.push({pipePicturesNorth:[],pipePicturesEast:[],pipePicturesSouth:[],pipePicturesWest:[],pipeConnections:[]}),this.requestUpdate()}}
          >
            + Add
          </div>
        </div>
      </sp-collapse>
    `}getSprites(){return this._container.concealed?[]:Array.from(this._fluidBoxes).flatMap(e=>e.getSprites())}exportLua(e){return ot(Array.from(this._fluidBoxes).map(t=>t.exportLua(e+1)),e)}exportJson(){return Array.from(this._fluidBoxes).map(e=>e.exportJson())}};nn.styles=ke,an([ce({type:Array})],nn.prototype,"data",void 0),an([ue("#container")],nn.prototype,"_container",void 0),an([ge("sp-fluid-box")],nn.prototype,"_fluidBoxes",void 0),nn=an([oe("sp-fluid-boxes")],nn);var rn=function(e,t,i,a){var n,r=arguments.length,s=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let sn=class extends re{constructor(){super(),this.concealed=!1}render(){return N`
      <div
        class="overlay"
        ?hidden=${this.concealed}
        @click=${()=>{this.dispatchEvent(new CustomEvent("close"))}}
      >
        <div
          class="outer-frame flex-vertical main-window"
          @click=${e=>{e.stopPropagation()}}
        >
          <div class="flex-reverse">
            <div
              class="close-icon"
              @click=${()=>{this.dispatchEvent(new CustomEvent("close"))}}
            ></div>
          </div>
          <slot></slot>
        </div>
      </div>
    `}};sn.styles=[ke,r`
      .overlay {
        z-index: 1;
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background-color: rgba(64, 64, 64, 0.8);
      }

      .main-window {
        width: fit-content;
        height: fit-content;
        display: flex;
        margin: 100px auto 0;
      }

      .close-icon {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAMFBMVEUAAADJy8jIysfHycbGycXFyMO+wb6oqqfs7+vr7urq7ejo7Ofh5eDf497V2NXV19Qr9O5VAAAACHRSTlMA9fX19fX19eKBVJ0AAABOSURBVHjaY8AH2J8xMNgXABn8dxwYex8AGcydSyTmJIDkJGZ2LgErYuyY5QBhdK4OADMkZu/cChHYKjFLAcjg6Apg7GgAiTQBZQXwWQkASSMSCIopJdMAAAAASUVORK5CYII=');
        background-size: 100%;
        width: 16px;
        height: 16px;
        margin: 4px 4px 4px 4px;
      }
    `],rn([ce({type:Boolean})],sn.prototype,"concealed",void 0),sn=rn([oe("sp-overlay")],sn);var on=function(e,t,i,a){var n,r=arguments.length,s=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let ln=class extends re{constructor(){super(),this.jsonText="",this.luaText="",this.concealed=!1,this.activeTab="json"}render(){return N`
      <sp-overlay
        ?concealed=${this.concealed}
        @close=${()=>{this.concealed=!0}}
      >
        <div class="export-ui">
          <div class="flex-horizontal">
            <div
              class="tab-header ${"json"===this.activeTab?"active":""}"
              @click=${()=>{this.activeTab="json"}}
            >
              JSON
            </div>
            <div
              class="tab-header ${"lua"===this.activeTab?"active":""}"
              @click=${()=>{this.activeTab="lua"}}
            >
              Lua
            </div>
          </div>
          <div
            class="copy-icon"
            @click=${()=>{navigator.clipboard.writeText("json"===this.activeTab?this.jsonText:this.luaText)}}
          ></div>
          <textarea
            disabled
            .value=${"json"===this.activeTab?this.jsonText:this.luaText}
          ></textarea>
        </div>
      </sp-overlay>
    `}};ln.styles=[ke,r`
      .copy-icon {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAj0lEQVR42r2MtxXCMAAF1XoYNnFoCAOYHfA25Ay9VNJ7FVOR05GdU+X7yrr3RWnQcJix8NPDigpjPFYhQfLADAt77FinovcvH7MHnzsuNSHePV/BwcOm4afFBjcszFjFylvcfcE/hKAB1QiKXo6A4oHxvfaQMaHNiS7G/2rxQLLws2ZLT4TBpBcSZnTQRFme8MO8Be0T2fUAAAAASUVORK5CYII=');
        background-size: 100%;
        width: 16px;
        height: 16px;
        position: absolute;
        cursor: copy;
        top: 38px;
        right: 24px;
      }

      .export-ui {
        position: relative;
        width: 800px;
        margin: 4px;
      }

      .tab-header {
        border-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAQAAACRZI9xAAABHklEQVR42kyKxUEEQRREO5SJZtLYANgrcsN9FHeHY19wd/qEu4ewMgEUD9/vv+qZ37j0H8IX91Z811vxxT2El76pjG3PBWfZtW7Iq695rbPMBdveD2C9tdldHetEB9rVFn3Afcxem7Xf0HxgtURaLWhSY/SCfpX5ACD1h7NpzWH0K1aXOumYexJtWsNZ6pumMFAvUvJjk2Lz96MHagpNjWtQB2e3MNghDcQfoDeoxpl8sU5Nauf9BqIfqAOtSXXKF01OVRzNSN0CIIG4O9Dq8HL6aFQqbAAGYBDh/1/n7rRzTwX9UeGA/nUGsEOH1qY5jHtK6UaNarr9SHtGiRKF7jDuqUgv5Mguk88lKk6nSWxiG+dyVWNmcWQTnlC1DCNDZl3nQ0g8YgAAAABJRU5ErkJggg==')
          8/4px repeat;
        background-color: #8e8e8e;
        height: 32px;
        line-height: 32px;
        padding: 0px 8px;
        font-weight: bold;
      }
      .tab-header.active {
        border-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAABPUlEQVR42q2TQU7DMBBFp97CJVhxgLLsLZBa1aLJOXoA1tyB68BNuqja4Nix7QS/haOQBYrUWvqazsx/X3KaKJmduqqPh7fDt9a62e12/Xa7Haj0zNnPGTXCdb3Re/3VNM27MWbtnHv03q9CCEKlZ84eH/4/IVVVbdq2/bxcLi8AWeKsQ2JbO/5mzh4ffrgSgvHjfD4/+ZDhzokxRpqfRq7X6yh65uzx4YeDV3qvj6fTaR18kK7rCMQsrWnFWjuKnjl7fPjh4FVevGYTVxDfeaHGGKXvexmGQThUeuZTHxy8yvd75uGhKTw/87DCwKt81wcWKaV/A+ZBxQ+vctqKRdGSkKngldzhKNJu1X1CeDgo9UlSWi78hVUMbpXiP0cpJokpLhb+wo4hIQaJIS4W/sLynvBB8S1QF6v44X8BGPWng09b/NcAAAAASUVORK5CYII=')
          8/4px repeat;
        background-color: #313031;
        color: #ffe6c0;
      }
    `],on([ce({type:String})],ln.prototype,"jsonText",void 0),on([ce({type:String})],ln.prototype,"luaText",void 0),on([ce({type:Boolean})],ln.prototype,"concealed",void 0),on([ce({type:String})],ln.prototype,"activeTab",void 0),ln=on([oe("sp-export-ui")],ln);var dn,cn,pn=function(e,t,i,a){var n,r=arguments.length,s=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s},hn=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};let un=class extends re{constructor(){super(),dn.add(this),this._concealed=!0,this._errorMessage=void 0}render(){return N`
      <sp-overlay
        ?concealed=${this._concealed}
        @close=${()=>{this._concealed=!0}}
      >
        <div class="import-ui">
          <div id="import_header" class="import-header">
            Accepted input: well-formed JSON of
            <a href="https://lua-api.factorio.com/latest/prototypes/AnimationPrototype.html">
              AnimationPrototype</a
            >
            or
            <a href="https://lua-api.factorio.com/latest/prototypes/AssemblingMachinePrototype.html"
              >AssemblingMachinePrototype</a
            >. It can be obtained from the export function of this tool, from a dump produced by
            running
            <a href="https://wiki.factorio.com/Command_line_parameters">factorio --dump-data</a>,
            from <a href="https://raw.tools.bpbin.com/">data.raw explorer</a>, or any other methods.
          </div>
          <textarea id="textarea"></textarea>
          <div class="flex-reverse">
            <div class="confirm-icon" @click=${hn(this,dn,"m",cn)}></div>
            <div class="error-message" ?hidden=${void 0===this._errorMessage}>
              ${this._errorMessage}
            </div>
          </div>
        </div>
      </sp-overlay>
    `}show(){this._text.value="",this._errorMessage=void 0,this._concealed=!1}};dn=new WeakSet,cn=function(){try{const e=function(e){const t=JSON.parse(e);return"object"==typeof t.graphics_set?nt(t):{...Ye(),animation:Ze(t)}}(this._text.value);if(void 0!==e)return this.dispatchEvent(new CustomEvent("settingsImported",{detail:e})),void(this._concealed=!0)}catch(e){"string"==typeof e?this._errorMessage=e:e instanceof SyntaxError?this._errorMessage=e.message:this._errorMessage="Malformed input"}},un.styles=[ke,r`
      .import-ui {
        position: relative;
        width: 800px;
        margin: 4px;
      }

      .error-message {
        color: #ff0000;
        margin: 4px;
      }

      .import-header,
      .import-header a {
        color: lightgray;
        margin: 4px;
      }

      .error-message {
        color: #ff0000;
        margin: 4px;
      }

      .confirm-icon {
        border-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAMAAAAMs7fIAAAA51BMVEUfYys2gEdIml86kFIhaS8wiUkWWiEphUQlgkAjgj8VWSAhgT4ggT0htF0jtV4otWAvt2U4uWtCuW9MtnFWs3Qp0HEVy2UfzWwHyF0OyWEZzGgWy2YLyF8Ex1sAxlkkzW0nzm8tz3I20Xg0ynM3y3Q7zHhDznxDxHZExXdKxXpPx31RvHdSvXhVvnpav31qz45j3JNU3YhJ3YBA23o52nY12XMy2HKA5qNt6JRj64pd7YRZ7IFV639T6n1R6n2D7qBz8ZFq9Iln9oVl9oNj9YJi9YJh9YFo+4Jp+4Nq+4Rs+oZz+IyA9Zm/xivTAAAAdklEQVR42mL0ATQ6FgcIwFAMTWr4jSnQI0f2XweX9gd3fdXv0QEc4ZExTwA6wdGLZ/jiGeScp84fPMVaIQT2956FvAdKYf3g6e09GykCWzIdPN2859In/Ot57fM661VPWycAnnF07nADMslMpHcBV7IVoo4HFjtmcm2pU/Fz2AAAAABJRU5ErkJggg==')
          8/4px repeat;
        background-color: #00c659;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABC0lEQVR42mMgCoyCUSAmJhajpKj0XUxULID6houKuamqqP7TUNf4D8Igy6hmuKioqLOaqhrYcBiWl5N/RRXDxcXFyxGGI7CiguInig2XEJdohBmOjqUkpbYSNEBERIRFWlr6FDA8k9DEmcTFxLOBhv/HYfgmoBoughbIyco9AGlQV1P/D4xED6RgqUU3FKZOSkpqF8hhxHi/GVkzKCiAPkmRlJBcBDQIl8vXER2+0lLSRxQVFb+iuxCX4UAHdSPrJ9UHmBhhKdhwzGAhHMFsQC+vBxqA33AJickkGYyeWoCWbIFbgunyZqpkJmDEzkM3nMLyBtMnINfCIhmYB1JhctS2pB2UwRiGJBgFAKlsmkEbQ+BDAAAAAElFTkSuQmCC');
        background-size: 16px;
        background-position: center;
        width: 24px;
        height: 24px;
      }
    `],pn([pe()],un.prototype,"_concealed",void 0),pn([pe()],un.prototype,"_errorMessage",void 0),pn([ue("#textarea")],un.prototype,"_text",void 0),un=pn([oe("sp-import-ui")],un);
