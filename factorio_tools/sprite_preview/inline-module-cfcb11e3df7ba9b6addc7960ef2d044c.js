/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),a=new WeakMap;let n=class{constructor(e,t,a){if(this._$cssResult$=!0,a!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const i=this.t;if(t&&void 0===e){const t=void 0!==i&&1===i.length;t&&(e=a.get(i)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&a.set(i,e))}return e}toString(){return this.cssText}};const r=(e,...t)=>{const a=1===e.length?e[0]:t.reduce((t,i,a)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[a+1],e[0]);return new n(a,e,i)},o=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:s,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:h}=Object,u=globalThis,f=u.trustedTypes,A=f?f.emptyScript:"",g=u.reactiveElementPolyfillSupport,m=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?A:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},w=(e,t)=>!s(e,t),b={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:w};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let y=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=b){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(e,i,t);void 0!==a&&l(this.prototype,e,a)}}static getPropertyDescriptor(e,t,i){const{get:a,set:n}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:a,set(t){const r=a?.call(this);n?.call(this,t),this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??b}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const e=h(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const e=this.properties,t=[...d(e),...p(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(o(e))}else void 0!==e&&t.push(o(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,a)=>{if(t)i.adoptedStyleSheets=a.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const t of a){const a=document.createElement("style"),n=e.litNonce;void 0!==n&&a.setAttribute("nonce",n),a.textContent=t.cssText,i.appendChild(a)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,i);if(void 0!==a&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(a):this.setAttribute(a,n),this._$Em=null}}_$AK(e,t){const i=this.constructor,a=i._$Eh.get(e);if(void 0!==a&&this._$Em!==a){const e=i.getPropertyOptions(a),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=a;const r=n.fromAttribute(t,e.type);this[a]=r??this._$Ej?.get(a)??r,this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){const a=this.constructor,n=this[e];if(i??=a.getPropertyOptions(e),!((i.hasChanged??w)(n,t)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:a,wrapped:n},r){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==n||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===a&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,a=this[t];!0!==e||this._$AL.has(t)||void 0===a||this.C(t,void 0,i,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[m("elementProperties")]=new Map,y[m("finalized")]=new Map,g?.({ReactiveElement:y}),(u.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,_=x.trustedTypes,E=_?_.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,R="?"+T,C=`<${R}>`,U=document,F=()=>U.createComment(""),M=e=>null===e||"object"!=typeof e&&"function"!=typeof e,k=Array.isArray,P="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,$=/>/g,B=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,j=/"/g,N=/^(?:script|style|textarea|title)$/i,V=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),L=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),Q=new WeakMap,G=U.createTreeWalker(U,129);function W(e,t){if(!k(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}const K=(e,t)=>{const i=e.length-1,a=[];let n,r=2===t?"<svg>":3===t?"<math>":"",o=O;for(let t=0;t<i;t++){const i=e[t];let s,l,c=-1,d=0;for(;d<i.length&&(o.lastIndex=d,l=o.exec(i),null!==l);)d=o.lastIndex,o===O?"!--"===l[1]?o=I:void 0!==l[1]?o=$:void 0!==l[2]?(N.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=B):void 0!==l[3]&&(o=B):o===B?">"===l[0]?(o=n??O,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,s=l[1],o=void 0===l[3]?B:'"'===l[3]?j:D):o===j||o===D?o=B:o===I||o===$?o=O:(o=B,n=void 0);const p=o===B&&e[t+1].startsWith("/>")?" ":"";r+=o===O?i+C:c>=0?(a.push(s),i.slice(0,c)+S+i.slice(c)+T+p):i+T+(-2===c?t:p)}return[W(e,r+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),a]};class H{constructor({strings:e,_$litType$:t},i){let a;this.parts=[];let n=0,r=0;const o=e.length-1,s=this.parts,[l,c]=K(e,t);if(this.el=H.createElement(l,i),G.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(a=G.nextNode())&&s.length<o;){if(1===a.nodeType){if(a.hasAttributes())for(const e of a.getAttributeNames())if(e.endsWith(S)){const t=c[r++],i=a.getAttribute(e).split(T),o=/([.?@])?(.*)/.exec(t);s.push({type:1,index:n,name:o[2],strings:i,ctor:"."===o[1]?Z:"?"===o[1]?ee:"@"===o[1]?te:X}),a.removeAttribute(e)}else e.startsWith(T)&&(s.push({type:6,index:n}),a.removeAttribute(e));if(N.test(a.tagName)){const e=a.textContent.split(T),t=e.length-1;if(t>0){a.textContent=_?_.emptyScript:"";for(let i=0;i<t;i++)a.append(e[i],F()),G.nextNode(),s.push({type:2,index:++n});a.append(e[t],F())}}}else if(8===a.nodeType)if(a.data===R)s.push({type:2,index:n});else{let e=-1;for(;-1!==(e=a.data.indexOf(T,e+1));)s.push({type:7,index:n}),e+=T.length-1}n++}}static createElement(e,t){const i=U.createElement("template");return i.innerHTML=e,i}}function Y(e,t,i=e,a){if(t===L)return t;let n=void 0!==a?i._$Co?.[a]:i._$Cl;const r=M(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,i,a)),void 0!==a?(i._$Co??=[])[a]=n:i._$Cl=n),void 0!==n&&(t=Y(e,n._$AS(e,t.values),n,a)),t}class J{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,a=(e?.creationScope??U).importNode(t,!0);G.currentNode=a;let n=G.nextNode(),r=0,o=0,s=i[0];for(;void 0!==s;){if(r===s.index){let t;2===s.type?t=new q(n,n.nextSibling,this,e):1===s.type?t=new s.ctor(n,s.name,s.strings,this,e):6===s.type&&(t=new ie(n,this,e)),this._$AV.push(t),s=i[++o]}r!==s?.index&&(n=G.nextNode(),r++)}return G.currentNode=U,a}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,a){this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Y(this,e,t),M(e)?e===z||null==e||""===e?(this._$AH!==z&&this._$AR(),this._$AH=z):e!==this._$AH&&e!==L&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>k(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==z&&M(this._$AH)?this._$AA.nextSibling.data=e:this.T(U.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,a="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=H.createElement(W(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(t);else{const e=new J(a,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=Q.get(e.strings);return void 0===t&&Q.set(e.strings,t=new H(e)),t}k(e){k(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,a=0;for(const n of e)a===t.length?t.push(i=new q(this.O(F()),this.O(F()),this,this.options)):i=t[a],i._$AI(n),a++;a<t.length&&(this._$AR(i&&i._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,a,n){this.type=1,this._$AH=z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}_$AI(e,t=this,i,a){const n=this.strings;let r=!1;if(void 0===n)e=Y(this,e,t,0),r=!M(e)||e!==this._$AH&&e!==L,r&&(this._$AH=e);else{const a=e;let o,s;for(e=n[0],o=0;o<n.length-1;o++)s=Y(this,a[i+o],t,o),s===L&&(s=this._$AH[o]),r||=!M(s)||s!==this._$AH[o],s===z?e=z:e!==z&&(e+=(s??"")+n[o+1]),this._$AH[o]=s}r&&!a&&this.j(e)}j(e){e===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Z extends X{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===z?void 0:e}}class ee extends X{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==z)}}class te extends X{constructor(e,t,i,a,n){super(e,t,i,a,n),this.type=5}_$AI(e,t=this){if((e=Y(this,e,t,0)??z)===L)return;const i=this._$AH,a=e===z&&i!==z||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==z&&(i===z||a);a&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ie{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Y(this,e)}}const ae=x.litHtmlPolyfillSupport;ae?.(H,q),(x.litHtmlVersions??=[]).push("3.3.1");const ne=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let re=class extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const a=i?.renderBefore??t;let n=a._$litPart$;if(void 0===n){const e=i?.renderBefore??null;a._$litPart$=n=new q(t.insertBefore(F(),e),e,void 0,i??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L}};re._$litElement$=!0,re.finalized=!0,ne.litElementHydrateSupport?.({LitElement:re});const oe=ne.litElementPolyfillSupport;oe?.({LitElement:re}),(ne.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const se=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},le={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:w},ce=(e=le,t,i)=>{const{kind:a,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),"setter"===a&&((e=Object.create(e)).wrapped=!0),r.set(i.name,e),"accessor"===a){const{name:a}=i;return{set(i){const n=t.get.call(this);t.set.call(this,i),this.requestUpdate(a,n,e)},init(t){return void 0!==t&&this.C(a,void 0,e,t),t}}}if("setter"===a){const{name:a}=i;return function(i){const n=this[a];t.call(this,i),this.requestUpdate(a,n,e)}}throw Error("Unsupported decorator location: "+a)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function de(e){return(t,i)=>"object"==typeof i?ce(e,t,i):((e,t,i)=>{const a=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),a?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pe(e){return de({...e,state:!0,attribute:!1})}
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
 */let fe;function Ae(e){return(t,i)=>he(t,i,{get(){return(this.renderRoot??(fe??=document.createDocumentFragment())).querySelectorAll(e)}})}async function ge(e){const t=new Image;return t.src=e,new Promise(e=>{t.addEventListener("load",()=>{const i=new OffscreenCanvas(t.width,t.height).getContext("2d");i.drawImage(t,0,0,t.width,t.height),e(i.getImageData(0,0,t.width,t.height))})})}var me,ve,we=function(e,t,i,a,n){if("m"===a)throw new TypeError("Private method is not writable");if("a"===a&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?n.call(e,i):n?n.value=i:t.set(e,i),i},be=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};class ye{constructor(e,t){me.set(this,void 0),ve.set(this,void 0),we(this,me,e,"f"),we(this,ve,t,"f")}get x(){return be(this,me,"f")}set x(e){we(this,me,e,"f")}get y(){return be(this,ve,"f")}set y(e){we(this,ve,e,"f")}add(e){return new ye(this.x+e.x,this.y+e.y)}subtract(e){return new ye(this.x-e.x,this.y-e.y)}vmul(e){return this.x*e.y-e.x*this.y}smul(e){return this.x*e.x+this.y*e.y}mul(e){return new ye(this.x*e,this.y*e)}get len(){return Math.sqrt(this.smul(this))}min(e){return new ye(Math.min(this.x,e.x),Math.min(this.y,e.y))}max(e){return new ye(Math.max(this.x,e.x),Math.max(this.y,e.y))}floor(){return new ye(Math.floor(this.x),Math.floor(this.y))}ceil(){return new ye(Math.ceil(this.x),Math.ceil(this.y))}asPrototype(){return{x:this.x,y:this.y}}asArray(){return[this.x,this.y]}}me=new WeakMap,ve=new WeakMap;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const xe=1,_e=3,Ee=4,Se=e=>(...t)=>({_$litDirective$:e,values:t});let Te=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Re={},Ce=Se(class extends Te{constructor(e){if(super(e),e.type!==_e&&e.type!==xe&&e.type!==Ee)throw Error("The `live` directive is not allowed on child or event bindings");if(!(e=>void 0===e.strings)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===L||t===z)return t;const i=e.element,a=e.name;if(e.type===_e){if(t===i[a])return L}else if(e.type===Ee){if(!!t===i.hasAttribute(a))return L}else if(e.type===xe&&i.getAttribute(a)===t+"")return L;return((e,t=Re)=>{e._$AH=t;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */})(e),t}}),Ue=r`
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
`;var Fe,Me,ke,Pe,Oe,Ie,$e=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o},Be=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};let De=class extends re{constructor(){super(),Fe.add(this),this.concealed=!1;try{const e=JSON.parse(localStorage.getItem("sprite_preview_settings"));Be(this,Fe,"m",Ie).call(this,e)}catch(e){Be(this,Fe,"m",Ie).call(this,{imageRules:[{}],invertLayerOrder:!1,animationSpeed:60})}}render(){return V`
      <sp-overlay
        id="overlay"
        ?concealed=${this.concealed}
        @close=${()=>{Be(this,Fe,"m",Me).call(this),this.concealed=!0}}
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
            ${this._imageRules.map((e,t)=>V`
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
                      .value=${Ce(e.filename||"")}
                      @change=${t=>{e.filename=t.target.value}}
                    />
                  </td>
                  <td class="image-rule-cell">
                    <input
                      type="text"
                      .value=${Ce(e.suffixRegex||"")}
                      @change=${t=>{e.suffixRegex=t.target.value}}
                    />
                  </td>
                  <td class="image-rule-cell">
                    <input
                      type="number"
                      .value=${Ce(e.columns||"")}
                      @change=${t=>{e.columns=parseInt(t.target.value)||void 0}}
                    />
                  </td>
                  <td class="image-rule-cell">
                    <input
                      type="number"
                      .value=${Ce(e.rows||"")}
                      @change=${t=>{e.rows=parseInt(t.target.value)||void 0}}
                    />
                  </td>
                  <td class="image-rule-cell">
                    <input
                      type="number"
                      .value=${Ce(e.scale||"")}
                      @change=${t=>{e.scale=parseFloat(t.target.value)||void 0}}
                    />
                  </td>
                  <td class="image-rule-cell">
                    <sp-blend-mode-select
                      .value=${Ce(e.blendMode||"normal")}
                      @change=${t=>{e.blendMode=t.detail}}
                    ></sp-blend-mode-select>
                  </td>
                  <td class="image-rule-cell">
                    <sp-draw-mode-select
                      .value=${Ce(e.drawMode||"sprite")}
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
                      .value=${Ce(e.priority||"")}
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
            <div class="import-icon" @click=${Be(this,Fe,"m",Pe)}></div>
            <div class="export-icon" @click=${Be(this,Fe,"m",ke)}></div>
          </div>
        </div>
      </sp-overlay>
    `}show(){this.concealed=!1}getImageRule(e){for(const t of this._imageRules)if(-1!=e.search(new RegExp(t.filename||"")))return t;return{}}getFilePriority(e){return this.getImageRule(e).priority||0}get invertLayerOrder(){return this._invertLayerOrder}get animationSpeed(){return this._animationSpeed||60}get container(){return this}};function je(e,t){if(""===(e.suffixRegex||""))return;const i=new RegExp(e.suffixRegex);return t.replace(i,"")}function Ne(e,t,i){let[a,n]=function(e){let t=1,i=16;for(let a=2;a<=16;a++){if(e.width%a!=0)continue;const n=e.width/a;let r=0,o=0;for(let t=0;t<e.width-n;t+=4)for(let i=0;i<e.height;i+=4)for(let a=0;a<4;a++)r++,o+=Math.abs(e.data[4*(e.width*i+t)+a]-e.data[4*(e.width*i+t+n)+a]);o/r<i+1&&(i=o/r,t=a)}let a=1;i=16;for(let t=2;t<=16;t++){if(e.height%t!=0)continue;const n=e.height/t;let r=0,o=0;for(let t=0;t<e.width;t+=4)for(let i=0;i<e.height-n;i+=4)for(let a=0;a<4;a++)r++,o+=Math.abs(e.data[4*(e.width*i+t)+a]-e.data[4*(e.width*(i+n)+t)+a]);o/r<i+1&&(i=o/r,a=t)}return[a,t]}(i);void 0!==t.columns&&(n=t.columns),void 0!==t.rows&&(a=t.rows);const r=je(t,e),o=new ye(i.width/n,i.height/a);return{hidden:t.concealed||!1,group:r||e,filenames:[e],size:o,shift:new ye(o.x%2,o.y%2).mul(.5),scale:t.scale||.5,frameCount:a*n,lineLength:n,linesPerFile:a,blendMode:t.blendMode||"normal",drawMode:t.drawMode||"sprite",tint:t.tint||[255,255,255,255]}}Fe=new WeakSet,Me=function(){localStorage.setItem("sprite_preview_settings",JSON.stringify(Be(this,Fe,"m",Oe).call(this))),this.dispatchEvent(new CustomEvent("settings-updated"))},ke=function(){navigator.clipboard.writeText(JSON.stringify(Be(this,Fe,"m",Oe).call(this),void 0,2))},Pe=function(){try{navigator.clipboard.readText().then(e=>{const t=JSON.parse(e);Array.isArray(t.imageRules)&&Be(this,Fe,"m",Ie).call(this,t)})}catch(e){}},Oe=function(){return{imageRules:this._imageRules,invertLayerOrder:this._invertLayerOrder,animationSpeed:this._animationSpeed}},Ie=function(e){Array.isArray(e.imageRules)&&0!=e.imageRules.length||(e.imageRules=[{}]),this._invertLayerOrder=e.invertLayerOrder,this._animationSpeed=e.animationSpeed,this._imageRules=e.imageRules,this.requestUpdate()},De.styles=[Ue,r`
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
    `],$e([de({type:Boolean})],De.prototype,"concealed",void 0),$e([pe()],De.prototype,"_imageRules",void 0),$e([pe()],De.prototype,"_invertLayerOrder",void 0),$e([pe()],De.prototype,"_animationSpeed",void 0),De=$e([se("sp-user-settings")],De);var Ve,Le=function(e,t,i,a,n){if("m"===a)throw new TypeError("Private method is not writable");if("a"===a&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?n.call(e,i):n?n.value=i:t.set(e,i),i},ze=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};class Qe extends EventTarget{constructor(){super(),Ve.set(this,new Map),Le(this,Ve,new Map,"f")}async loadImageFromFile(e){const t=await async function(e){const t=new FileReader,i=new Promise(e=>{t.addEventListener("load",()=>{e(t.result)})});return t.readAsDataURL(e),ge(await i)}(e),i={filename:e.name,size:new ye(t.width,t.height),data:t};return ze(this,Ve,"f").set(e.name,i),this.dispatchEvent(new CustomEvent("image_updated",{detail:i})),i}getLoadedImage(e){return ze(this,Ve,"f").get(e)}static instance(){return globalThis.fileManager}}function Ge(e,t,i){return Math.min(Math.max(e,t),i)}function We(e){if(void 0!==e)return e.split("/").pop()}function Ke(){return{hidden:!0,variant:0,position:new ye(0,0),shadowPosition:new ye(0,0),showShadow:!0}}function He(){return{hidden:!1,filename:"",size:new ye(0,0),position:new ye(0,0),shift:new ye(0,0),scale:.5,blendMode:"normal",drawMode:"sprite",tint:[255,255,255,255]}}function Ye(){return{size:new ye(1,1),animation:[],circuitConnector:Ke(),fluidBoxes:[],waterReflection:He()}}function Je(e){return Array.isArray(e)?new ye(e[0],e[1]):"number"==typeof e.x&&"number"==typeof e.y?new ye(e.x,e.y):new ye(0,0)}function qe(e){let t;if(Array.isArray(e.size))t=new ye(e.size[0],e.size[1]);else{if("number"!=typeof e.width||"number"!=typeof e.height)throw"Either `size` or `width` and `height` fields must be present.";t=new ye(e.width,e.height)}const i=Je(e.shift).mul(64),a=void 0!==e.blend_mode?e.blend_mode:"normal";let n,r;return n=e.draw_as_shadow?"shadow":e.draw_as_glow?"glow":e.draw_as_light?"light":"sprite",r=Array.isArray(e.tint)?[Ge(Math.floor(255*e.tint[0]),0,255),Ge(Math.floor(255*e.tint[1]),0,255),Ge(Math.floor(255*e.tint[2]),0,255),Ge(Math.floor(255*e.tint[3]),0,255)]:void 0!==e.tint?[Ge(Math.floor(255*e.tint.r),0,255),Ge(Math.floor(255*e.tint.g),0,255),Ge(Math.floor(255*e.tint.b),0,255),Ge(Math.floor(255*e.tint.a),0,255)]:[255,255,255,255],{hidden:!1,size:t,shift:i,scale:e.scale||.5,blendMode:a,drawMode:n,tint:r}}function Xe(e){let t,i;if("string"==typeof e.filename)t=We(e.filename),i=[t];else if(void 0!==e.filename)throw"`filename` is not a string.";if(Array.isArray(e.filenames)&&(i=e.filenames.map(We),void 0===t&&(t=e.filenames[0])),void 0===i)throw"At least one of the fields `filename` and `filenames` must be present.";const a=void 0!==e.frame_count?e.frame_count:1,n=void 0!==e.line_length?e.line_length:a,r=void 0!==e.lines_per_file?e.lines_per_file:Math.floor(a/n);return{...qe(e),group:t,filenames:i,frameCount:a,lineLength:n,linesPerFile:r}}function Ze(e){return void 0===e?[]:void 0!==e.north?Ze(e.north):Array.isArray(e.layers)?e.layers.flatMap(Ze):[Xe(e)]}function et(e){let t,i;if("string"!=typeof e.filename)throw"filename must be present";return t=We(e.filename),i="number"==typeof e.x&&"number"==typeof e.y?new ye(e.x,e.y):Array.isArray(e.position)?new ye(e.position[0],e.position[1]):new ye(0,0),{...qe(e),filename:t,position:i}}function tt(e){return void 0===e?[]:Array.isArray(e.layers)?e.layers.flatMap(tt):[et(e)]}function it(e){return{position:Je(e.position),direction:e.direction/4||0}}function at(e){const t=(e||[])[0]?.sprites?.connector_main;if("__base__/graphics/entity/circuit-connector/ccm-universal-04a-base-sequence.png"!==t?.filename)return Ke();const i=void 0!==t.position?Je(t.position):new ye(t.x,t.y),a=i.y/50*8+i.x/52,n=Je(t.shift).mul(64).add(new ye(0,-2)),r=(e||[])[0]?.sprites?.connector_shadow,o=void 0!==r;return{hidden:!0,variant:a,position:n,shadowPosition:o?Je(r.shift).mul(64).add(new ye(-5,-5)):n,showShadow:o}}function nt(e){return void 0===e?.pictures?He():Array.isArray(e.pictures)?0==e.pictures.length?He():et(e.pictures[0]):et(e.pictures)}function rt(e){let t;return t="number"==typeof e.tile_width&&"number"==typeof e.tile_height?new ye(e.tile_width,e.tile_height):Array.isArray(e.collision_box)?Je(e.collision_box[1]).subtract(Je(e.collision_box[0])):"object"==typeof e.collision_box?.left_top&&"object"==typeof e.collision_box?.right_bottom?Je(e.collision_box.right_bottom).subtract(Je(e.collision_box.left_top)):new ye(1,1),{size:new ye(Math.ceil(t.x),Math.ceil(t.y)),animation:[Ze(e.graphics_set.animation),Ze(e.graphics_set.idle_animation)].flat(),fluidBoxes:e.fluid_boxes?.map(e=>function(e){return{pipePicturesNorth:tt(e.pipe_picture?.north),pipePicturesEast:tt(e.pipe_picture?.east),pipePicturesSouth:tt(e.pipe_picture?.south),pipePicturesWest:tt(e.pipe_picture?.west),pipeConnections:e.pipe_connections?.map(it)||[]}}(e))||[],circuitConnector:at(e.circuit_connector),waterReflection:nt(e.water_reflection)}}function ot(e){return`"${e}"`}function st(e){return e.toString()}function lt(e,t){const i="  ".repeat(t);let a="{\n";return e.forEach(e=>{a+=`${i}  ${e},\n`}),a+=`${i}}`,a}function ct(e,t){const i="  ".repeat(t);let a="{\n";for(const[t,n]of e)a+=`${i}  ${t} = ${n},\n`;return a+=`${i}}`,a}Ve=new WeakMap,globalThis.fileManager=new Qe;var dt,pt,ht,ut,ft,At,gt=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o},mt=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};let vt=class extends re{constructor(){super(),dt.add(this),this.data=[]}render(){return V`
      <sp-collapse
        id="container"
        caption="Animation"
        concealable
        nudgeable
        @file-drop=${mt(this,dt,"m",ht)}
        @nudge=${e=>{this._layers.forEach(t=>{t.nudge(e.detail)})}}
      >
        <div class="layers ${globalThis.userSettings.invertLayerOrder?"inverted-order":""}">
          ${this.data.map((e,t)=>V`<sp-animation-layer
              .data=${e}
              @delete=${e=>{e.stopPropagation(),this.data.splice(t,1),this.requestUpdate(),this.dispatchEvent(new CustomEvent("data-update",{bubbles:!0,composed:!0}))}}
              @data-update=${()=>{this.requestUpdate()}}
              @dragstart=${mt(this,dt,"m",ft)}
              @dragenter=${e=>{mt(this,dt,"m",ut).call(this,e)&&(e.dataTransfer.dropEffect="move"),e.preventDefault()}}
              @dragover=${e=>{mt(this,dt,"m",ut).call(this,e)&&(e.dataTransfer.dropEffect="move"),e.preventDefault()}}
              @drop=${mt(this,dt,"m",At)}
            ></sp-animation-layer>`)}
        </div>
        <div class="flex-reverse">
          <sp-file-button @filesAdded=${mt(this,dt,"m",ht)} caption="+ Add spritesheets" allowJson>
          </sp-file-button>
        </div>
      </sp-collapse>
    `}connectedCallback(){super.connectedCallback(),globalThis.userSettings.addEventListener("settings-updated",()=>{this.requestUpdate()})}getSprites(e){return this._container.concealed?[]:Array.from(this._layers).flatMap(t=>t.getSprites(e))}addLayer(e){this.data.push(e),this.requestUpdate()}addFileToGroup(e,t){return this.data.some((i,a)=>i.group===e&&(this._layers[a].addFile(t),!0))}exportLua(e){const t=lt(Array.from(this._layers).map(t=>t.exportLua(e+2)),e+1);return ct(new Map([["layers",t]]),e)}exportJson(){return{layers:Array.from(this._layers).map(e=>e.exportJson())}}async loadFromFile(e){const t=await Qe.instance().loadImageFromFile(e),i=t.filename;for(const e of this.data)if(-1!=e.filenames.indexOf(i))return;const a=globalThis.userSettings.getImageRule(i);a.ignore||this.addFileToGroup(je(a,i),i)||this.addLayer(Ne(t.filename,a,t.data))}};dt=new WeakSet,pt=async function(e){try{const i=(t=await async function(e){const t=new FileReader,i=new Promise(e=>{t.addEventListener("load",()=>{e(t.result)})});return t.readAsText(e),i}(e),Ze(JSON.parse(t)));this.data.push(...i),this.requestUpdate()}catch(e){}var t},ht=async function(e){const t=e.detail,i=t.filter(e=>"application/json"==e.type);for(const e of i)await mt(this,dt,"m",pt).call(this,e);const a=t.filter(e=>"image/png"==e.type).toSorted((e,t)=>{const i=globalThis.userSettings.getFilePriority(e.name),a=globalThis.userSettings.getFilePriority(t.name);return i!=a?i-a:e.name.localeCompare(t.name,void 0,{numeric:!0})});for(const e of a)await this.loadFromFile(e);this.requestUpdate(),this.dispatchEvent(new CustomEvent("data-update",{bubbles:!0,composed:!0}))},ut=function(e){return"Animation"==e.dataTransfer.getData("dragged-element")&&globalThis.draggedElement?.parentElement===e.target.parentElement},ft=function(e){globalThis.draggedElement=e.target,e.dataTransfer.setData("dragged-element","Animation"),e.stopPropagation()},At=function(e){if(mt(this,dt,"m",ut).call(this,e)){const t=Array.from(e.target.parentNode.children),i=t.indexOf(globalThis.draggedElement),a=t.indexOf(e.target);if(i!=a){const e=this.data.splice(i,1)[0];this.data.splice(a,0,e)}this.requestUpdate(),this.dispatchEvent(new CustomEvent("data-update",{bubbles:!0,composed:!0}))}e.stopPropagation()},vt.styles=[Ue,r`
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
    `],gt([de({type:Array})],vt.prototype,"data",void 0),gt([ue("#container")],vt.prototype,"_container",void 0),gt([Ae("sp-animation-layer")],vt.prototype,"_layers",void 0),vt=gt([se("sp-animation")],vt);var wt,bt,yt,xt,_t,Et,St=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o},Tt=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};let Rt=class extends re{constructor(){super(),wt.add(this),this.data={hidden:!1,group:"",filenames:[],lineLength:0,linesPerFile:0,frameCount:0,blendMode:"normal",drawMode:"sprite",shift:new ye(0,0),size:new ye(0,0),scale:.5,tint:[255,255,255,255]}}render(){return V`
      <sp-collapse concealable id="container" caption="${this.data.group}"
          @file-drop=${e=>{const t=e.detail.filter(e=>"image/png"===e.type).toSorted((e,t)=>e.name.localeCompare(t.name,void 0,{numeric:!0}));t.forEach(e=>{Qe.instance().loadImageFromFile(e),this.addFile(e.name)})}}
          ?concealed=${this.data.hidden} collapsed moveable deleteable
          @conceal-toggle=${Tt(this,wt,"m",Et)}
          >
        <div>
          <div>
            <sp-image-file-list id="file_list" .filenames=${this.data.filenames}
              @change=${()=>{Tt(this,wt,"m",xt).call(this)}}>
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
                    @change=${e=>{this.data.size.x=e.detail,Tt(this,wt,"m",bt).call(this)}}
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
                    @change=${e=>{this.data.size.y=e.detail,Tt(this,wt,"m",bt).call(this)}}
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
                    allowFractional
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
                    allowFractional
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
                    @change=${e=>{this.data.lineLength=e.detail,Tt(this,wt,"m",yt).call(this)}}
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
                    @change=${e=>{this.data.linesPerFile=e.detail,Tt(this,wt,"m",yt).call(this)}}
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
                <td>
                  <sp-number-input
                    caption="Scale:"
                    id="rows"
                    value=${this.data.scale}
                    minValue="0.01"
                    maxValue="100"
                    allowFractional
                    @input=${e=>{this.data.scale=e.detail}}
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
    `}tryResolveImage(e){return-1!=this.data.filenames.findIndex(t=>t===e)}addFile(e){this.data.filenames.push(e),Tt(this,wt,"m",xt).call(this),this._fileList.requestUpdate(),this.requestUpdate()}nudge(e){this.data.shift.x+=e.x,this.data.shift.y+=e.y,this.requestUpdate()}getSprites(e){if(this.data.hidden)return[];(e%=this.data.frameCount)<0&&(e+=this.data.frameCount);const t=e%this.data.lineLength;let i=Math.floor(e/this.data.lineLength);const a=this.data.filenames[Math.trunc(i/this.data.linesPerFile)];return void 0===a?[]:(i%=this.data.linesPerFile,[{filename:a,size:new ye(this.data.size.x,this.data.size.y),position:new ye(this.data.size.x*t,this.data.size.y*i),shift:this.data.shift,scale:this.data.scale,blendMode:this.data.blendMode,drawMode:this.data.drawMode,tint:this.data.tint}])}exportLua(e){const t=new Map([["scale",st(this.data.scale)],["filenames",lt(this.data.filenames.map(ot),e+1)],["blend_mode",ot(this.data.blendMode)],["width",st(this.data.size.x)],["height",st(this.data.size.y)],["line_length",st(this.data.lineLength)],["lines_per_file",st(this.data.linesPerFile)],["frame_count",st(this.data.frameCount)]]);t.set("shift",`util.by_pixel_hr(${this.data.shift.x}, ${this.data.shift.y})`);const i=this.data.tint.map(e=>e/255);return t.set("tint",`{ r = ${i[0]}, g = ${i[1]}, b = ${i[2]}, a = ${i[3]} }`),"light"==this.data.drawMode?t.set("draw_as_light",st(!0)):"glow"==this.data.drawMode?t.set("draw_as_glow",st(!0)):"shadow"==this.data.drawMode&&t.set("draw_as_shadow",st(!0)),ct(t,e)}exportJson(){const e={scale:this.data.scale,filenames:this.data.filenames,blend_mode:this.data.blendMode,width:this.data.size.x,height:this.data.size.y,shift:this.data.shift.mul(1/64).asPrototype(),line_length:this.data.lineLength,lines_per_file:this.data.linesPerFile,frame_count:this.data.frameCount,tint:this.data.tint.map(e=>e/255)};return"light"==this.data.drawMode?e.draw_as_light=!0:"glow"==this.data.drawMode?e.draw_as_glow=!0:"shadow"==this.data.drawMode&&(e.draw_as_shadow=!0),e}};wt=new WeakSet,bt=function(){const e=Tt(this,wt,"m",_t).call(this);void 0!==e&&(this.data.lineLength=Math.floor(e.x/this.data.size.x),this.data.linesPerFile=Math.floor(e.y/this.data.size.y),Tt(this,wt,"m",xt).call(this),this.requestUpdate())},yt=function(){const e=Tt(this,wt,"m",_t).call(this);void 0!==e&&(this.data.size.x=Math.floor(e.x/this.data.lineLength),this.data.size.y=Math.floor(e.y/this.data.linesPerFile),Tt(this,wt,"m",xt).call(this))},xt=function(){if(this.data.frameCount=this.data.filenames.length*this.data.lineLength*this.data.linesPerFile,this.data.filenames.length>0){const e=Qe.instance().getLoadedImage(this.data.filenames[this.data.filenames.length-1]);void 0!==e&&(this.data.frameCount+=(Math.floor(e.size.y/this.data.size.y)-this.data.linesPerFile)*this.data.lineLength)}this.requestUpdate()},_t=function(){if(0!=this.data.filenames.length)return Qe.instance().getLoadedImage(this.data.filenames[0])?.size},Et=function(e){this.data.hidden=e.detail,this.requestUpdate()},Rt.styles=[Ue],St([de({type:Object})],Rt.prototype,"data",void 0),St([ue("#container")],Rt.prototype,"_container",void 0),St([ue("#file_list")],Rt.prototype,"_fileList",void 0),Rt=St([se("sp-animation-layer")],Rt);var Ct,Ut,Ft=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o},Mt=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};let kt=class extends re{constructor(){super(),this.collapsed=!1,this.collapsed=!1}onClick(){this.collapsed=!this.collapsed,this.dispatchEvent(new CustomEvent("collapse-toggle",{bubbles:!0,composed:!0,detail:this.collapsed}))}render(){return V`<div
      class="${this.collapsed?"collapsed":"expanded"}"
      @click=${this.onClick}
    ></div>`}};kt.styles=r`
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
  `,Ft([de({type:Boolean})],kt.prototype,"collapsed",void 0),kt=Ft([se("sp-collapse-icon")],kt);let Pt=class extends re{constructor(){super(),Ct.add(this),this.caption="",this.collapsed=!1,this.concealed=!1,this.concealable=!1,this.deleteable=!1,this.moveable=!1,this.nudgeable=!1,this.addEventListener("collapse-toggle",e=>{e.stopPropagation(),this.collapsed=e.detail})}render(){return V`
      <div>
        <div
          class="header"
          draggable="${this.moveable?"true":"false"}"
          @dragover=${e=>{e.preventDefault()}}
          @drop=${e=>{e.preventDefault();const t=Array.from(e.dataTransfer?.items||[]).map(e=>e.getAsFile());t.length>0&&this.dispatchEvent(new CustomEvent("file-drop",{detail:t}))}}
        >
          ${this.concealable?V`<div
                class="eye-icon ${this.concealed?"concealed":""} "
                @click=${Mt(this,Ct,"m",Ut)}
              ></div>`:V`<div class="eye-placeholder"></div>`}
          <sp-collapse-icon .collapsed=${this.collapsed}></sp-collapse-icon>
          <div class="caption">${this.caption}</div>
          ${this.nudgeable?V`<sp-nudge
                @nudge=${e=>{this.dispatchEvent(new CustomEvent("nudge",{detail:e.detail}))}}
              ></sp-nudge>`:z}
          ${this.moveable?V`<div class="drag-block"></div>`:z}
          ${this.deleteable?V`<div
                class="delete-icon"
                @click=${()=>{this.dispatchEvent(new CustomEvent("delete",{bubbles:!0,composed:!0}))}}
              ></div>`:z}
        </div>
        <div ?hidden=${this.collapsed} class="body">
          <slot></slot>
        </div>
      </div>
    `}};Ct=new WeakSet,Ut=function(){this.concealed=!this.concealed,this.dispatchEvent(new CustomEvent("conceal-toggle",{detail:this.concealed}))},Pt.styles=r`
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
    sp-nudge {
      margin: -4px;
    }
  `,Ft([de({type:String})],Pt.prototype,"caption",void 0),Ft([de({type:Boolean})],Pt.prototype,"collapsed",void 0),Ft([de({type:Boolean})],Pt.prototype,"concealed",void 0),Ft([de({type:Boolean})],Pt.prototype,"concealable",void 0),Ft([de({type:Boolean})],Pt.prototype,"deleteable",void 0),Ft([de({type:Boolean})],Pt.prototype,"moveable",void 0),Ft([de({type:Boolean})],Pt.prototype,"nudgeable",void 0),Pt=Ft([se("sp-collapse")],Pt);var Ot,It,$t=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o},Bt=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};let Dt=class extends re{constructor(){super(),Ot.add(this),this.caption="",this.allowJson=!1,this.caption=""}render(){return V`
      <div class="text-button" @click=${()=>{this._file.click()}}>
        ${this.caption}
      </div>
      <input id="file"
             type="file"
             accept=${this.allowJson?"image/png,application/json":"image/png"}
             hidden
             multiple
             @change=${Bt(this,Ot,"m",It)}>
      </input>
    `}};Ot=new WeakSet,It=function(){const e=Array.from(this._file.files);this._file.value="",this.dispatchEvent(new CustomEvent("filesAdded",{detail:e}))},Dt.styles=r`
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
  `,$t([de({type:String})],Dt.prototype,"caption",void 0),$t([de({type:Boolean})],Dt.prototype,"allowJson",void 0),$t([ue("#file")],Dt.prototype,"_file",void 0),Dt=$t([se("sp-file-button")],Dt);var jt,Nt,Vt,Lt=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o},zt=function(e,t,i,a,n){if("m"===a)throw new TypeError("Private method is not writable");if("a"===a&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?n.call(e,i):n?n.value=i:t.set(e,i),i},Qt=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};let Gt=class extends re{constructor(e){super(),jt.add(this),this.filename="",Nt.set(this,void 0),this.filename=e||"",zt(this,Nt,e=>{e.detail.filename==this.filename&&(this.dispatchEvent(new CustomEvent("loaded")),this.requestUpdate())},"f")}render(){return V`
      <div class="right-aligned">
        <div class="delete-icon" @click=${()=>{this.dispatchEvent(new CustomEvent("delete",{bubbles:!0,composed:!0}))}}> </div>
        <div class="replace-icon" @click=${()=>{this._file.click()}}></div>
        <div class="file-name ${Qt(this,jt,"a",Vt)?"":"missing-file"}">${this.filename}</div>
      </div>
      <input id="file" type="file" hidden accept='image/*' @change=${this.onFileChange}>
      </input>
    `}connectedCallback(){super.connectedCallback(),Qe.instance().addEventListener("image_updated",Qt(this,Nt,"f"))}disconnectedCallback(){super.disconnectedCallback(),Qe.instance().removeEventListener("image_updated",Qt(this,Nt,"f"))}onFileChange(e){const t=e.target,i=t.files[0];void 0!==i&&(this.filename=i.name,Qe.instance().loadImageFromFile(i),t.value="")}get size(){return Qt(this,jt,"a",Vt)?.size}};Nt=new WeakMap,jt=new WeakSet,Vt=function(){return Qe.instance().getLoadedImage(this.filename)},Gt.styles=r`
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
  `,Lt([de({type:String})],Gt.prototype,"filename",void 0),Lt([ue("#file")],Gt.prototype,"_file",void 0),Gt=Lt([se("sp-image-file")],Gt);var Wt=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let Kt=class extends re{constructor(){super(),this.filenames=[],this.collapsed=!0}render(){return V`
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
        ${this.filenames.map((e,t)=>V`<sp-image-file
            filename=${e}
            @delete=${e=>{e.stopPropagation(),this.filenames.splice(t,1),this.requestUpdate(),this.dispatchEvent(new CustomEvent("change"))}}
          ></sp-image-file>`)}
      </div>
    `}addFiles(e){for(const t of e)Qe.instance().loadImageFromFile(t),-1==this.filenames.indexOf(t.name)&&this.filenames.push(t.name);this.requestUpdate(),this.dispatchEvent(new CustomEvent("change"))}onFileChange(e){const t=e.target;this.addFiles(Array.from(t.files)),t.value=""}};Kt.styles=r`
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
  `,Wt([de({type:Array})],Kt.prototype,"filenames",void 0),Wt([pe()],Kt.prototype,"collapsed",void 0),Wt([ue("#file")],Kt.prototype,"_file",void 0),Kt=Wt([se("sp-image-file-list")],Kt);const Ht=[{name:"nauvis",cycle:[0,.25,.45,.55,.75,1]},{name:"vulcanus",cycle:[0,.2,.45,.55,.8,1]},{name:"fulgora",cycle:[0,.2,.3,.4,.6,.7,1]},{name:"gleba",cycle:[0,.15,.25,.35,.45,.55,.65,.75,1]}],Yt=16384;const Jt=await async function(){const e=new Map;for(const t of Ht){const i=await ge(`./luts/${t.name}.png`),a=[];t.cycle.forEach((e,t)=>{a.push({time:e,lut:i.data.slice(Yt*t,Yt*(t+1))})}),e.set(t.name,a)}return e}();function qt(e,t){let i=Jt.get(e);void 0===i&&(i=Jt.get("nauvis"));for(let e=0;;e++){const a=i[e],n=i[e+1];if(n.time<=t)continue;const r=(t-a.time)/(n.time-a.time),o=1-r,s=new Uint8Array(Yt);for(let e=0;e<Yt;e++)s[e]=a.lut[e]*o+n.lut[e]*r;return s}}var Xt,Zt,ei=function(e,t,i,a,n){if("m"===a)throw new TypeError("Private method is not writable");if("a"===a&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?n.call(e,i):n?n.value=i:t.set(e,i),i},ti=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};class ii{constructor(e,t){Xt.set(this,void 0),Zt.set(this,void 0),ei(this,Xt,e,"f"),ei(this,Zt,t,"f")}get topLeft(){return ti(this,Xt,"f")}get bottomRight(){return ti(this,Zt,"f")}union(e){return new ii(this.topLeft.min(e.topLeft),this.bottomRight.max(e.bottomRight))}}Xt=new WeakMap,Zt=new WeakMap;var ai,ni,ri=function(e,t,i,a,n){if("m"===a)throw new TypeError("Private method is not writable");if("a"===a&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?n.call(e,i):n?n.value=i:t.set(e,i),i},oi=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};class si{constructor(e){ai.set(this,void 0),ni.set(this,void 0),ri(this,ai,e,"f"),ri(this,ni,new Map,"f"),Qe.instance().addEventListener("image_updated",e=>{const t=e.detail;this.addImage(t.filename,t.data)})}get(e){return oi(this,ni,"f").get(e)}addImage(e,t){const i=oi(this,ai,"f");i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),oi(this,ni,"f").has(e)&&i.deleteTexture(oi(this,ni,"f").get(e));const a=i.createTexture();oi(this,ni,"f").set(e,a),i.bindTexture(i.TEXTURE_2D,a),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.NEAREST),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,t)}}ai=new WeakMap,ni=new WeakMap;const li="#version 300 es\nprecision highp float;\n\nin vec2 a_vertexPosition;\nout vec2 v_position;\n\nuniform vec2 u_shift;\n\nvoid main() {\n  v_position = a_vertexPosition * 1024. + u_shift;\n  gl_Position = vec4(a_vertexPosition, 0., 1.);\n}",ci="#version 300 es\nprecision highp float;\n\nin vec2 a_vertexPosition;\nout vec2 v_texturePosition;\n\nuniform vec2 u_spriteSize;\nuniform vec2 u_shift;\nuniform float u_scale;\n\nvoid main() {\n  v_texturePosition = (a_vertexPosition + vec2(1., 1.)) / 2.;\n  gl_Position = vec4((a_vertexPosition * u_spriteSize * u_scale + u_shift * 2.) / 2048., 0., 1.);\n}",di="#version 300 es\nprecision highp float;\n\nin vec2 a_vertexPosition;\nout vec2 v_position;\n\nvoid main() {\n  v_position = (a_vertexPosition + vec2(1., 1.)) / 2.;\n  gl_Position = vec4(a_vertexPosition, 0., 1.);\n}";function pi(e,t,i){const a=e.createShader(t);if(e.shaderSource(a,i),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS))throw`An error occurred compiling the shaders: ${e.getShaderInfoLog(a)}`;return a}function hi(e,t,i){const a=e.createProgram();if(e.attachShader(a,pi(e,e.VERTEX_SHADER,t)),e.attachShader(a,pi(e,e.FRAGMENT_SHADER,i)),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw`An error occurred compiling the shaders: ${e.getProgramInfoLog(a)}`;return a}var ui,fi,Ai,gi,mi,vi,wi,bi,yi,xi,_i,Ei,Si,Ti,Ri,Ci,Ui,Fi,Mi,ki,Pi,Oi,Ii,$i=function(e,t,i,a,n){if("m"===a)throw new TypeError("Private method is not writable");if("a"===a&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?n.call(e,i):n?n.value=i:t.set(e,i),i},Bi=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};function Di(e){const t=e.createTexture();return e.bindTexture(e.TEXTURE_2D,t),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,2048,2048,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),t}function ji(e){const t=e.createTexture();return e.bindTexture(e.TEXTURE_3D,t),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),t}class Ni{constructor(){ui.add(this),fi.set(this,void 0),Ai.set(this,void 0),gi.set(this,void 0),mi.set(this,void 0),vi.set(this,void 0),wi.set(this,void 0),bi.set(this,void 0),yi.set(this,void 0),xi.set(this,void 0),_i.set(this,void 0),Ei.set(this,void 0),Si.set(this,void 0),$i(this,fi,new OffscreenCanvas(2048,2048),"f"),$i(this,Ai,Bi(this,fi,"f").getContext("webgl2"),"f");const e=Bi(this,Ai,"f");e.enable(e.BLEND),$i(this,gi,new si(e),"f"),$i(this,mi,function(e){return{labBackgroundProgram:hi(e,li,"#version 300 es\nprecision highp float;\n\nin vec2 v_position;\nout vec4 outColor;\n\nvoid main() {\n  float color =\n    (mod(v_position.x, 128.) < 64.) == (mod(v_position.y, 128.) < 64.)\n      ? 48. / 255. \n      : 27. / 255.;\n  outColor = vec4(color, color, color, 1.0);\n}"),plainBackgroundProgram:hi(e,li,"#version 300 es\nprecision highp float;\n\nuniform vec4 u_color;\nout vec4 outColor;\n\nvoid main() {\n  outColor = vec4(u_color.rgb / 255., 1.0);\n}"),waterProgram:hi(e,li,"#version 300 es\nprecision highp float;\n\nuniform sampler2D u_waterNoiseTexture;\nuniform sampler2D u_reflectionTexture;\nuniform float u_time;\n\nin vec2 v_position;\nout vec4 outColor;\n\nfloat noise_func(vec2 uv)\n{\n    return texture(u_waterNoiseTexture, uv).x;\n}\n\nvec2 rotate(inout vec2 uv)\n{\n    vec2 param = uv * 2.0;\n    uv += vec2(noise_func(param) * 0.02);\n    float angle = 3.0;\n    float sinRot = sin(angle);\n    float cosRot = cos(angle);\n    mat2 rotation = mat2(vec2(cosRot, -sinRot), vec2(sinRot, cosRot));\n    return uv * rotation;\n}\n\nfloat fbm(inout vec2 uv, float t)\n{\n    float f = 0.0;\n    float total = 0.0;\n    float mul_1 = 1.0;\n    for (int i = 0; i < 3; i++)\n    {\n        vec2 param = uv + vec2((t * 0.0025) * (1.0 - mul_1));\n        f += (noise_func(param) * mul_1);\n        total += mul_1;\n        vec2 param_1 = uv * 1.1;\n        uv = rotate(param_1);\n        mul_1 *= 0.75;\n    }\n    return f / total;\n}\n\nvec4 MainPS()\n{\n    float time = u_time * 5.4;\n    float animationSpeed = 0.07;\n    float animationScale = 0.006;\n    vec2 uv = v_position / 1024.;\n    uv.y *= (-1.414);\n    vec2 param_2 = vec2(sin(time * animationSpeed) * animationScale) + uv;\n    float value = fbm(param_2, time) + 0.1;\n    vec3 mask = texture(u_reflectionTexture, mix(v_position / 1024., vec2(1., 1.), 0.5)).xyz;\n    float darks = 1.0 - ceil(value + 0.307);\n    float reflection = smoothstep(0.0, 0.27, (0.4 - value * 0.8) + (mask.x * 0.25));\n    float specular = clamp(ceil(value + 0.35 - mask.x), 1.0, 2.0);\n    vec4 color = vec4(vec3(21., 147., 167.) / 255. * (value + specular * 0.19 - mask.z * 0.3), 1.);\n    color = mix(color, color * (-1.0), vec4(darks * 0.11));\n    vec3 color_reflect = mix(color.xyz, (color.xyz * color.xyz) * 1.5,\n        vec3(clamp(reflection, 0.0, 0.5)));\n    color = vec4(color_reflect, color.w);\n    color *= (1.0 - mask.y);\n    vec4 foamColor = vec4(230./255., 255./255., 252./255., 1.);\n    color = mix(color, foamColor, vec4(smoothstep(-0.35, 0.3, mask.z - (value * 2.15))));\n    return color;\n}\n\nvoid main()\n{\n    outColor = MainPS();\n}"),spriteProgram:hi(e,ci,"#version 300 es\nprecision highp float;\n\nin vec2 v_texturePosition;\nout vec4 outColor;\n\nuniform vec2 u_spriteSize;\nuniform vec2 u_spritePosition;\nuniform sampler2D u_spritesheet;\nuniform vec4 u_tint;\n\nvoid main() {\n  vec2 spritesheetSize = vec2(textureSize(u_spritesheet, 0));\n  vec2 texturePosition = (u_spriteSize * v_texturePosition + u_spritePosition) / spritesheetSize;\n  vec4 tint = u_tint / 255.;\n  outColor = texture(u_spritesheet, texturePosition) * vec4(tint.rgb * tint.a, tint.a);\n}"),shadowProgram:hi(e,ci,"#version 300 es\nprecision highp float;\n\nin vec2 v_texturePosition;\nout vec4 outColor;\n\nuniform vec2 u_spriteSize;\nuniform vec2 u_spritePosition;\nuniform sampler2D u_spritesheet;\n\nvoid main() {\n  vec2 spritesheetSize = vec2(textureSize(u_spritesheet, 0));\n  vec2 texturePosition = (u_spriteSize * v_texturePosition + u_spritePosition) / spritesheetSize;\n  outColor = texture(u_spritesheet, texturePosition).a > 0.5 ? vec4(1.) : vec4(0.);\n}"),applyShadowProgram:hi(e,di,"#version 300 es\nprecision highp float;\n\nin vec2 v_position;\nout vec4 outColor;\n\nuniform sampler2D u_backgroundTexture;\nuniform sampler2D u_shadowTexture;\n\nvoid main() {\n  vec4 bg_color = texture(u_backgroundTexture, v_position);\n  float shadow_color = texture(u_shadowTexture, v_position).x > 0.5 ? 0.5 : 1.0;  \n  outColor = vec4(bg_color.xyz * shadow_color, bg_color.a);\n}"),applyLightProgram:hi(e,di,"#version 300 es\nprecision highp float;\nprecision highp sampler3D;\n\nin vec2 v_position;\nout vec4 outColor;\n\nuniform sampler2D u_spriteTexture;\nuniform sampler2D u_lightTexture;\nuniform sampler3D u_daylightLut;\nuniform sampler3D u_nighttimeLut;\n\nvoid main() {\n  vec3 spriteColor = mix(texture(u_spriteTexture, v_position).rbg, vec3(0.5, 0.5, 0.5), 1./16.);\n  vec3 light = texture(u_lightTexture, v_position).rgb; \n  vec4 dayColor = texture(u_daylightLut, spriteColor);\n  vec4 nightColor = texture(u_nighttimeLut, spriteColor);\n  outColor = mix(nightColor, dayColor, vec4(light, 1.0));\n}")}}(e),"f"),$i(this,vi,Di(e),"f"),$i(this,wi,Di(e),"f"),$i(this,bi,Di(e),"f"),$i(this,yi,Di(e),"f"),$i(this,xi,Di(e),"f"),$i(this,_i,Di(e),"f"),$i(this,Ei,ji(e),"f"),$i(this,Si,ji(e),"f");const t=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,t),e.bindBuffer(e.ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ARRAY_BUFFER,new Float32Array([1,1,-1,1,1,-1,-1,-1]),e.STATIC_DRAW),["nauvis","vulcanus","fulgora","gleba","aquilo","space-platform"].forEach(e=>{ge("./images/backgrounds/"+e+".jpg").then(t=>{Bi(this,gi,"f").addImage(e,t)})}),ge("./images/backgrounds/water.png").then(t=>{Bi(this,gi,"f").addImage("water",t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT)}),["circuit-connector/ccm-universal-04a-base-sequence.png","circuit-connector/ccm-universal-04b-base-shadow-sequence.png","circuit-connector/ccm-universal-04c-wire-sequence.png","circuit-connector/ccm-universal-04d-wire-shadow-sequence.png","circuit-connector/ccm-universal-04e-blue-LED-on-sequence.png","circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png","circuit-connector/ccm-universal-04h-green-LED-sequence.png","circuit-connector/ccm-universal-04i-red-LED-sequence.png","pipe-covers/pipe-cover-north.png","pipe-covers/pipe-cover-north-shadow.png","pipe-covers/pipe-cover-east.png","pipe-covers/pipe-cover-east-shadow.png","pipe-covers/pipe-cover-south.png","pipe-covers/pipe-cover-south-shadow.png","pipe-covers/pipe-cover-west.png","pipe-covers/pipe-cover-west-shadow.png"].forEach(e=>{ge("./images/"+e).then(t=>{Bi(this,gi,"f").addImage(e,t)})})}draw(e,t,i){const a=Bi(this,Ai,"f");Bi(this,ui,"m",Ci).call(this),e.sort((e,t)=>(e.secondaryDrawOrder||0)-(t.secondaryDrawOrder||0)),e.forEach(e=>{"water-reflection"===e.drawMode&&Bi(this,ui,"m",Fi).call(this,e)}),Bi(this,ui,"m",Ui).call(this,i),e.forEach(e=>{"shadow"===e.drawMode&&Bi(this,ui,"m",Mi).call(this,e)}),Bi(this,ui,"m",Oi).call(this),e.forEach(e=>{"sprite"!==e.drawMode&&"glow"!==e.drawMode||Bi(this,ui,"m",ki).call(this,e),"light"!==e.drawMode&&"glow"!==e.drawMode||Bi(this,ui,"m",Pi).call(this,e)}),Bi(this,ui,"m",Ii).call(this,i.name,t);const[n,r]=Bi(this,ui,"m",Ti).call(this,e),o=new ImageData(r.x-n.x,r.y-n.y);return a.readPixels(n.x+1024,n.y+1024,o.width,o.height,a.RGBA,a.UNSIGNED_BYTE,o.data),o}}fi=new WeakMap,Ai=new WeakMap,gi=new WeakMap,mi=new WeakMap,vi=new WeakMap,wi=new WeakMap,bi=new WeakMap,yi=new WeakMap,xi=new WeakMap,_i=new WeakMap,Ei=new WeakMap,Si=new WeakMap,ui=new WeakSet,Ti=function(e){const t=0==e.length?new ii(new ye(-64,-64),new ye(64,64)):e.map(e=>new ii(e.shift.subtract(e.size.mul(e.scale||.5)),e.shift.add(e.size.mul(e.scale||.5)))).reduce((e,t)=>e.union(t));return[t.topLeft.subtract(new ye(64,64)).floor(),t.bottomRight.add(new ye(64,64)).ceil()]},Ri=function(e){const t=Bi(this,Ai,"f");t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0)},Ci=function(){const e=Bi(this,Ai,"f");[Bi(this,vi,"f"),Bi(this,wi,"f"),Bi(this,bi,"f"),Bi(this,yi,"f"),Bi(this,xi,"f"),Bi(this,_i,"f")].forEach(t=>{Bi(this,ui,"m",Ri).call(this,t),e.clearBufferfv(e.COLOR,0,[0,0,0,1])})},Ui=function(e){const t=Bi(this,Ai,"f");let i;Bi(this,ui,"m",Ri).call(this,Bi(this,xi,"f"));const a=Bi(this,gi,"f").get(e.name);"plain"===e.name?(i=Bi(this,mi,"f").plainBackgroundProgram,t.useProgram(i),t.uniform2fv(t.getUniformLocation(i,"u_shift"),[0,0]),t.uniform4fv(t.getUniformLocation(i,"u_color"),e.color)):void 0===a?(i=Bi(this,mi,"f").labBackgroundProgram,t.useProgram(i),t.uniform2fv(t.getUniformLocation(i,"u_shift"),e.machineSize.mul(32).asArray())):"water"===e.name?(i=Bi(this,mi,"f").waterProgram,t.useProgram(i),t.uniform2fv(t.getUniformLocation(i,"u_shift"),[0,0]),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,a),t.uniform1i(t.getUniformLocation(i,"u_waterNoiseTexture"),0),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,Bi(this,vi,"f")),t.uniform1i(t.getUniformLocation(i,"u_reflectionTexture"),1),t.uniform1f(t.getUniformLocation(i,"u_time"),Date.now()/1e3%3600)):(i=Bi(this,mi,"f").spriteProgram,t.useProgram(i),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,a),t.uniform2fv(t.getUniformLocation(i,"u_spriteSize"),[2048,2048]),t.uniform2fv(t.getUniformLocation(i,"u_shift"),[0,0]),t.uniform4fv(t.getUniformLocation(i,"u_tint"),[255,255,255,255]),t.uniform1f(t.getUniformLocation(i,"u_scale"),1),t.uniform2fv(t.getUniformLocation(i,"u_spritePosition"),[0,0]),t.uniform1i(t.getUniformLocation(i,"u_spritesheet"),0)),t.vertexAttribPointer(t.getAttribLocation(i,"a_vertexPosition"),2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(t.getAttribLocation(i,"a_vertexPosition")),t.blendFunc(Bi(this,Ai,"f").ONE,Bi(this,Ai,"f").ONE_MINUS_SRC_ALPHA),t.drawArrays(t.TRIANGLE_STRIP,0,4)},Fi=function(e){const t=Bi(this,Ai,"f");Bi(this,ui,"m",Ri).call(this,Bi(this,vi,"f")),t.blendFunc(Bi(this,Ai,"f").ONE,Bi(this,Ai,"f").ONE);const i=Bi(this,gi,"f").get(e.filename);if(void 0===i)return;t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,i),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR);const a=Bi(this,mi,"f").spriteProgram;t.useProgram(a),t.uniform2fv(t.getUniformLocation(a,"u_spriteSize"),e.size.asArray()),t.uniform2fv(t.getUniformLocation(a,"u_shift"),e.shift.asArray()),t.uniform4fv(t.getUniformLocation(a,"u_tint"),e.tint||[255,255,255,255]),t.uniform1f(t.getUniformLocation(a,"u_scale"),2*(e.scale||.5)),t.uniform2fv(t.getUniformLocation(a,"u_spritePosition"),(e.position||new ye(0,0)).asArray()),t.uniform1i(t.getUniformLocation(a,"u_spritesheet"),0),t.drawArrays(t.TRIANGLE_STRIP,0,4)},Mi=function(e){const t=Bi(this,Ai,"f");Bi(this,ui,"m",Ri).call(this,Bi(this,wi,"f")),t.blendFunc(Bi(this,Ai,"f").ONE,Bi(this,Ai,"f").ONE);const i=Bi(this,gi,"f").get(e.filename);if(void 0===i)return;t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,i);const a=Bi(this,mi,"f").shadowProgram;t.useProgram(a),t.uniform2fv(t.getUniformLocation(a,"u_spriteSize"),e.size.asArray()),t.uniform2fv(t.getUniformLocation(a,"u_shift"),e.shift.asArray()),t.uniform1f(t.getUniformLocation(a,"u_scale"),2*(e.scale||.5)),t.uniform2fv(t.getUniformLocation(a,"u_spritePosition"),(e.position||new ye(0,0)).asArray()),t.uniform1i(t.getUniformLocation(a,"u_spritesheet"),0),t.drawArrays(t.TRIANGLE_STRIP,0,4)},ki=function(e){const t=Bi(this,Ai,"f");switch(Bi(this,ui,"m",Ri).call(this,Bi(this,yi,"f")),e.blendMode){case"normal":t.blendFunc(Bi(this,Ai,"f").ONE,Bi(this,Ai,"f").ONE_MINUS_SRC_ALPHA);break;case"additive":t.blendFunc(Bi(this,Ai,"f").ONE,Bi(this,Ai,"f").ONE);break;case"additive-soft":t.blendFunc(Bi(this,Ai,"f").ONE_MINUS_DST_COLOR,Bi(this,Ai,"f").ONE);break;case"multiplicative":t.blendFunc(Bi(this,Ai,"f").DST_COLOR,Bi(this,Ai,"f").ZERO);break;case"multiplicative-with-alpha":t.blendFunc(Bi(this,Ai,"f").DST_COLOR,Bi(this,Ai,"f").ONE_MINUS_SRC_ALPHA)}const i=Bi(this,gi,"f").get(e.filename);if(void 0===i)return;t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,i);const a=Bi(this,mi,"f").spriteProgram;t.useProgram(a),t.uniform2fv(t.getUniformLocation(a,"u_spriteSize"),e.size.asArray()),t.uniform2fv(t.getUniformLocation(a,"u_shift"),e.shift.asArray()),t.uniform4fv(t.getUniformLocation(a,"u_tint"),e.tint||[255,255,255,255]),t.uniform1f(t.getUniformLocation(a,"u_scale"),2*(e.scale||.5)),t.uniform2fv(t.getUniformLocation(a,"u_spritePosition"),(e.position||new ye(0,0)).asArray()),t.uniform1i(t.getUniformLocation(a,"u_spritesheet"),0),t.drawArrays(t.TRIANGLE_STRIP,0,4)},Pi=function(e){const t=Bi(this,Ai,"f");Bi(this,ui,"m",Ri).call(this,Bi(this,bi,"f")),t.blendFunc(Bi(this,Ai,"f").ONE,Bi(this,Ai,"f").ONE);const i=Bi(this,gi,"f").get(e.filename);if(void 0===i)return;t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,i);const a=Bi(this,mi,"f").spriteProgram;t.useProgram(a),t.uniform2fv(t.getUniformLocation(a,"u_spriteSize"),e.size.asArray()),t.uniform2fv(t.getUniformLocation(a,"u_shift"),e.shift.asArray()),t.uniform4fv(t.getUniformLocation(a,"u_tint"),e.tint||[255,255,255,255]),t.uniform1f(t.getUniformLocation(a,"u_scale"),2*(e.scale||.5)),t.uniform2fv(t.getUniformLocation(a,"u_spritePosition"),(e.position||new ye(0,0)).asArray()),t.uniform1i(t.getUniformLocation(a,"u_spritesheet"),0),t.drawArrays(t.TRIANGLE_STRIP,0,4)},Oi=function(){const e=Bi(this,Ai,"f");e.blendFunc(Bi(this,Ai,"f").ONE,Bi(this,Ai,"f").ONE_MINUS_SRC_ALPHA),Bi(this,ui,"m",Ri).call(this,Bi(this,yi,"f"));const t=Bi(this,mi,"f").applyShadowProgram;e.useProgram(t),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Bi(this,xi,"f")),e.uniform1i(e.getUniformLocation(t,"u_backgroundTexture"),0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,Bi(this,wi,"f")),e.uniform1i(e.getUniformLocation(t,"u_shadowTexture"),1),e.drawArrays(e.TRIANGLE_STRIP,0,4)},Ii=function(e,t){const i=Bi(this,Ai,"f"),a=Bi(this,mi,"f").applyLightProgram;i.useProgram(a),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.blendFunc(Bi(this,Ai,"f").ONE,Bi(this,Ai,"f").ONE_MINUS_SRC_ALPHA),Bi(this,ui,"m",Ri).call(this,Bi(this,_i,"f")),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,Bi(this,yi,"f")),i.uniform1i(i.getUniformLocation(a,"u_spriteTexture"),0),i.activeTexture(i.TEXTURE1),i.bindTexture(i.TEXTURE_2D,Bi(this,bi,"f")),i.uniform1i(i.getUniformLocation(a,"u_lightTexture"),1),i.activeTexture(i.TEXTURE2),i.bindTexture(i.TEXTURE_3D,Bi(this,Ei,"f")),i.uniform1i(i.getUniformLocation(a,"u_daylightLut"),2);const n=qt(e,0);i.texImage3D(i.TEXTURE_3D,0,i.RGBA,16,16,16,0,i.RGBA,i.UNSIGNED_BYTE,n),i.activeTexture(i.TEXTURE3),i.bindTexture(i.TEXTURE_3D,Bi(this,Si,"f")),i.uniform1i(i.getUniformLocation(a,"u_nighttimeLut"),3);const r=qt(e,t);i.texImage3D(i.TEXTURE_3D,0,i.RGBA,16,16,16,0,i.RGBA,i.UNSIGNED_BYTE,r),i.drawArrays(i.TRIANGLE_STRIP,0,4)};var Vi,Li,zi=async function(e={}){var t,i,a,n,r=e,o=new Promise((e,t)=>{i=e,a=t}),s=import.meta.url,l="";try{l=new URL(".",s).href}catch{}if("object"!=typeof window&&"undefined"==typeof WorkerGlobalScope)throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");n=async e=>{m(!w(e),"readAsync does not work with file:// URLs");var t=await fetch(e,{credentials:"same-origin"});if(t.ok)return t.arrayBuffer();throw new Error(t.status+" : "+t.url)};var c,d,p=console.log.bind(console),h=console.error.bind(console);m(!0,"worker environment detected but not enabled at build time.  Add `worker` to `-sENVIRONMENT` to enable."),m(!0,"node environment detected but not enabled at build time.  Add `node` to `-sENVIRONMENT` to enable."),m(!0,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable."),"object"!=typeof WebAssembly&&h("no native wasm support detected");var u,f,A,g=!1;function m(e,t){e||M("Assertion failed"+(t?": "+t:""))}var v=!1,w=e=>e.startsWith("file://");function b(){if(!g){var e=re();0==e&&(e+=4);var t=A[e>>2],i=A[e+4>>2];34821223==t&&2310721022==i||M(`Stack overflow! Stack cookie has been overwritten at ${Q(e)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${Q(i)} ${Q(t)}`),1668509029!=A[0]&&M("Runtime error: The application has corrupted its heap memory area (address zero)!")}}function y(e){Object.getOwnPropertyDescriptor(r,e)||Object.defineProperty(r,e,{configurable:!0,set(){M(`Attempt to set \`Module.${e}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function x(e){return"FS_createPath"===e||"FS_createDataFile"===e||"FS_createPreloadedFile"===e||"FS_unlink"===e||"addRunDependency"===e||"FS_createLazyFile"===e||"FS_createDevice"===e||"removeRunDependency"===e}function _(e,t){"undefined"==typeof globalThis||Object.getOwnPropertyDescriptor(globalThis,e)||Object.defineProperty(globalThis,e,{configurable:!0,get(){t()}})}function E(e,t){_(e,()=>{W(`\`${e}\` is not longer defined by emscripten. ${t}`)})}function S(e){Object.getOwnPropertyDescriptor(r,e)||Object.defineProperty(r,e,{configurable:!0,get(){var t=`'${e}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;x(e)&&(t+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),M(t)}})}function T(){var e=d.buffer;u=new Int8Array(e),r.HEAPU8=f=new Uint8Array(e),A=new Uint32Array(e),new BigInt64Array(e),new BigUint64Array(e)}(()=>{var e=new Int16Array(1),t=new Int8Array(e.buffer);if(e[0]=25459,115!==t[0]||99!==t[1])throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})(),E("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),E("asm","Please use wasmExports instead"),m("undefined"!=typeof Int32Array&&"undefined"!=typeof Float64Array&&null!=Int32Array.prototype.subarray&&null!=Int32Array.prototype.set,"JS engine does not provide full typed array support");var R=0,C=null,U={},F=null;function M(e){r.onAbort?.(e),h(e="Aborted("+e+")"),g=!0;var t=new WebAssembly.RuntimeError(e);throw a(t),t}var k,P={error(){M("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with -sFORCE_FILESYSTEM")},init(){P.error()},createDataFile(){P.error()},createPreloadedFile(){P.error()},createLazyFile(){P.error()},open(){P.error()},mkdev(){P.error()},registerDevice(){P.error()},analyzePath(){P.error()},ErrnoError(){P.error()}};function O(e,t){return(...i)=>{m(v,`native function \`${e}\` called before runtime initialization`);var a=ne[e];return m(a,`exported native function \`${e}\` not found`),m(i.length<=t,`native function \`${e}\` called with ${i.length} args but expects ${t}`),a(...i)}}function I(){return r.locateFile?(e="webp_encoder.wasm",r.locateFile?r.locateFile(e,l):l+e):new URL("webp_encoder.wasm",import.meta.url).href;var e}async function $(e){if(!c)try{var t=await n(e);return new Uint8Array(t)}catch{}return function(e){if(e==k&&c)return new Uint8Array(c);throw"both async and sync fetching of the wasm failed"}(e)}async function B(e,t,i){if(!e&&"function"==typeof WebAssembly.instantiateStreaming)try{var a=fetch(t,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(a,i)}catch(e){h(`wasm streaming compile failed: ${e}`),h("falling back to ArrayBuffer instantiation")}return async function(e,t){try{var i=await $(e);return await WebAssembly.instantiate(i,t)}catch(e){h(`failed to asynchronously prepare wasm: ${e}`),w(k)&&h(`warning: Loading from a file URI (${k}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),M(e)}}(t,i)}var D,j=e=>{for(;e.length>0;)e.shift()(r)},N=[],V=e=>N.push(e),L=[],z=e=>L.push(e),Q=e=>(m("number"==typeof e),"0x"+(e>>>=0).toString(16).padStart(8,"0")),G=()=>de(),W=e=>{W.shown||={},W.shown[e]||(W.shown[e]=1,h(e))},K="undefined"!=typeof TextDecoder?new TextDecoder:void 0,H=(e,t=0,i=NaN)=>{for(var a=t+i,n=t;e[n]&&!(n>=a);)++n;if(n-t>16&&e.buffer&&K)return K.decode(e.subarray(t,n));for(var r="";t<n;){var o=e[t++];if(128&o){var s=63&e[t++];if(192!=(224&o)){var l=63&e[t++];if(224==(240&o)?o=(15&o)<<12|s<<6|l:(240!=(248&o)&&W("Invalid UTF-8 leading byte "+Q(o)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),o=(7&o)<<18|s<<12|l<<6|63&e[t++]),o<65536)r+=String.fromCharCode(o);else{var c=o-65536;r+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else r+=String.fromCharCode((31&o)<<6|s)}else r+=String.fromCharCode(o)}return r},Y=(e,t)=>(m("number"==typeof e,`UTF8ToString expects a number (got ${typeof e})`),e?H(f,e,t):""),J=(e,t)=>(m(t,"alignment argument is required"),Math.ceil(e/t)*t),q=e=>{var t=d.buffer,i=(e-t.byteLength+65535)/65536|0;try{return d.grow(i),T(),1}catch(i){h(`growMemory: Attempted to grow heap from ${t.byteLength} bytes to ${e} bytes, but got error: ${i}`)}},X=[null,[],[]],Z=(e,t)=>{var i=X[e];m(i),0===t||10===t?((1===e?p:h)(H(i)),i.length=0):i.push(t)},ee=(e,t,i)=>(m("number"==typeof i,"stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),((e,t,i,a)=>{if(m("string"==typeof e,`stringToUTF8Array expects a string (got ${typeof e})`),!(a>0))return 0;for(var n=i,r=i+a-1,o=0;o<e.length;++o){var s=e.charCodeAt(o);if(s>=55296&&s<=57343&&(s=65536+((1023&s)<<10)|1023&e.charCodeAt(++o)),s<=127){if(i>=r)break;t[i++]=s}else if(s<=2047){if(i+1>=r)break;t[i++]=192|s>>6,t[i++]=128|63&s}else if(s<=65535){if(i+2>=r)break;t[i++]=224|s>>12,t[i++]=128|s>>6&63,t[i++]=128|63&s}else{if(i+3>=r)break;s>1114111&&W("Invalid Unicode code point "+Q(s)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),t[i++]=240|s>>18,t[i++]=128|s>>12&63,t[i++]=128|s>>6&63,t[i++]=128|63&s}}return t[i]=0,i-n})(e,f,t,i)),te=e=>ce(e),ie=(e,t,i,a,n)=>{var o={string:e=>{var t=0;return null!=e&&0!==e&&(t=(e=>{var t=(e=>{for(var t=0,i=0;i<e.length;++i){var a=e.charCodeAt(i);a<=127?t++:a<=2047?t+=2:a>=55296&&a<=57343?(t+=4,++i):t+=3}return t})(e)+1,i=te(t);return ee(e,i,t),i})(e)),t},array:e=>{var t,i,a=te(e.length);return i=a,m((t=e).length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),u.set(t,i),a}},s=(e=>{var t=r["_"+e];return m(t,"Cannot call unknown function "+e+", make sure it is exported"),t})(e),l=[],c=0;if(m("array"!==t,'Return type should not be "array".'),a)for(var d=0;d<a.length;d++){var p=o[i[d]];p?(0===c&&(c=G()),l[d]=p(a[d])):l[d]=a[d]}var h=s(...l);return h=function(e){return 0!==c&&le(c),function(e){return"string"===t?Y(e):"boolean"===t?Boolean(e):e}(e)}(h)};r.noExitRuntime&&r.noExitRuntime,r.print&&(p=r.print),r.printErr&&(h=r.printErr),r.wasmBinary&&(c=r.wasmBinary),r.FS_createDataFile=P.createDataFile,r.FS_createPreloadedFile=P.createPreloadedFile,D="fetchSettings",Object.getOwnPropertyDescriptor(r,D)&&M(`\`Module.${D}\` was supplied but \`${D}\` not included in INCOMING_MODULE_JS_API`),r.arguments&&r.arguments,r.thisProgram&&r.thisProgram,m(void 0===r.memoryInitializerPrefixURL,"Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),m(void 0===r.pthreadMainPrefixURL,"Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),m(void 0===r.cdInitializerPrefixURL,"Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),m(void 0===r.filePackagePrefixURL,"Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),m(void 0===r.read,"Module.read option was removed"),m(void 0===r.readAsync,"Module.readAsync option was removed (modify readAsync in JS)"),m(void 0===r.readBinary,"Module.readBinary option was removed (modify readBinary in JS)"),m(void 0===r.setWindowTitle,"Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),m(void 0===r.TOTAL_MEMORY,"Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),m(void 0===r.ENVIRONMENT,"Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),m(void 0===r.STACK_SIZE,"STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),m(void 0===r.wasmMemory,"Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),m(void 0===r.INITIAL_MEMORY,"Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),r.ccall=ie,r.cwrap=(e,t,i,a)=>(...a)=>ie(e,t,i,a),["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","setTempRet0","zeroMemory","exitJS","strError","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","readEmAsmArgs","jstoi_q","getExecutableName","listenOnce","autoResumeAudioContext","getDynCaller","dynCall","handleException","keepRuntimeAlive","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","asyncLoad","mmapAlloc","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayFromString","intArrayToString","AsciiToString","stringToAscii","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","getEnvStrings","checkWasiClock","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","initRandomFill","randomFill","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","ExceptionInfo","findMatchingCatch","Browser_asyncPrepareDataCounter","isLeapYear","ydayFromDate","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_createPreloadedFile","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace"].forEach(function(e){_(e,()=>{var t=`\`${e}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,i=e;i.startsWith("_")||(i="$"+e),t+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${i}')`,x(e)&&(t+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),W(t)}),S(e)}),["run","addRunDependency","removeRunDependency","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","ptrToString","getHeapMax","growMemory","ENV","ERRNO_CODES","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","alignMemory","wasmTable","noExitRuntime","addOnPreRun","addOnPostRun","getCFunc","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","UTF16Decoder","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","flush_NO_FILESYSTEM","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","Browser","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","SYSCALLS","preloadPlugins","FS_stdin_getChar_buffer","FS_unlink","FS_createPath","FS_createDevice","FS_readFile","FS","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_createDataFile","FS_forceLoadFile","FS_createLazyFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","MEMFS","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s"].forEach(S);var ae={__assert_fail:(e,t,i,a)=>M(`Assertion failed: ${Y(e)}, at: `+[t?Y(t):"unknown filename",i,a?Y(a):"unknown function"]),_abort_js:()=>M("native code called abort()"),emscripten_resize_heap:e=>{var t=f.length;m((e>>>=0)>t);var i=2147483648;if(e>i)return h(`Cannot enlarge memory, requested ${e} bytes, but the limit is 2147483648 bytes!`),!1;for(var a=1;a<=4;a*=2){var n=t*(1+.2/a);n=Math.min(n,e+100663296);var r=Math.min(i,J(Math.max(e,n),65536));if(q(r))return!0}return h(`Failed to grow the heap from ${t} bytes to ${r} bytes, not enough memory!`),!1},fd_close:e=>{M("fd_close called without SYSCALLS_REQUIRE_FILESYSTEM")},fd_seek:function(e,t,i,a){return 70},fd_write:(e,t,i,a)=>{for(var n=0,r=0;r<i;r++){var o=A[t>>2],s=A[t+4>>2];t+=8;for(var l=0;l<s;l++)Z(e,f[o+l]);n+=s}return A[a>>2]=n,0}},ne=await async function(){function e(e,t){return ne=e.exports,m(d=ne.memory,"memory not found in wasm exports"),T(),function(e){if(R--,r.monitorRunDependencies?.(R),m(U[e]),delete U[e],0==R&&(null!==F&&(clearInterval(F),F=null),C)){var t=C;C=null,t()}}("wasm-instantiate"),ne}var t;t="wasm-instantiate",R++,r.monitorRunDependencies?.(R),m(!U[t]),U[t]=1,null===F&&"undefined"!=typeof setInterval&&(F=setInterval(()=>{if(g)return clearInterval(F),void(F=null);var e=!1;for(var t in U)e||(e=!0,h("still waiting on run dependencies:")),h(`dependency: ${t}`);e&&h("(end of list)")},1e4));var i=r,n={env:ae,wasi_snapshot_preview1:ae};if(r.instantiateWasm)return new Promise((t,i)=>{try{r.instantiateWasm(n,(i,a)=>{t(e(i))})}catch(e){h(`Module.instantiateWasm callback failed with error: ${e}`),i(e)}});k??=I();try{var o=function(t){return m(r===i,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),i=null,e(t.instance)}(await B(c,k,n));return o}catch(e){return a(e),Promise.reject(e)}}();r._CreateImage=O("CreateImage",3),r._AddFrame=O("AddFrame",0),r._Assemble=O("Assemble",0),r._ResultBytes=O("ResultBytes",0),r._ResultSize=O("ResultSize",0),r._Cleanup=O("Cleanup",0);var re=ne.emscripten_stack_get_end;ne.emscripten_stack_get_base;var oe=ne.emscripten_stack_init;ne.emscripten_stack_get_free;var se,le=ne._emscripten_stack_restore,ce=ne._emscripten_stack_alloc,de=ne.emscripten_stack_get_current;function pe(){var e;oe(),m(!(3&(e=re()))),0==e&&(e+=4),A[e>>2]=34821223,A[e+4>>2]=2310721022,A[0]=1668509029}!function(){if(r.preInit)for("function"==typeof r.preInit&&(r.preInit=[r.preInit]);r.preInit.length>0;)r.preInit.shift()();y("preInit")}(),function e(){function t(){m(!se),se=!0,r.calledRun=!0,g||(m(!v),v=!0,b(),ne.__wasm_call_ctors(),i(r),r.onRuntimeInitialized?.(),y("onRuntimeInitialized"),m(!r._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),function(){if(b(),r.postRun)for("function"==typeof r.postRun&&(r.postRun=[r.postRun]);r.postRun.length;)V(r.postRun.shift());y("postRun"),j(N)}())}R>0?C=e:(pe(),function(){if(r.preRun)for("function"==typeof r.preRun&&(r.preRun=[r.preRun]);r.preRun.length;)z(r.preRun.shift());y("preRun"),j(L)}(),R>0?C=e:(r.setStatus?(r.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>r.setStatus(""),1),t()},1)):t(),b()))}(),t=o;for(const t of Object.keys(r))t in e||Object.defineProperty(e,t,{configurable:!0,get(){M(`Access to module property ('${t}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return t},Qi=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)},Gi=function(e,t,i,a,n){if("m"===a)throw new TypeError("Private method is not writable");if("a"===a&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?n.call(e,i):n?n.value=i:t.set(e,i),i};class Wi extends EventTarget{constructor(){super(),Vi.set(this,void 0),Li.set(this,void 0)}async addFrame(e,t){return void 0===Qi(this,Vi,"f")&&Gi(this,Vi,await zi(),"f"),void 0===Qi(this,Li,"f")&&Gi(this,Li,Qi(this,Vi,"f").ccall("CreateImage","number",["number","number","number"],[e.width,e.height,t]),"f"),new Promise(t=>{setTimeout(()=>{Qi(this,Vi,"f").HEAPU8.set(e.data,Qi(this,Li,"f")),Qi(this,Vi,"f").ccall("AddFrame","undefined",[],[]),t()},0)})}exportAnimation(){Qi(this,Vi,"f").ccall("Assemble","string",[],[]);const e=Qi(this,Vi,"f").ccall("ResultBytes","number",[],[]),t=Qi(this,Vi,"f").ccall("ResultSize","number",[],[]),i=new Blob([Qi(this,Vi,"f").HEAPU8.slice(e,e+t)],{type:"image/webp"});return Qi(this,Vi,"f").ccall("Cleanup","undefined",[],[]),Gi(this,Li,void 0,"f"),i}}Vi=new WeakMap,Li=new WeakMap;var Ki,Hi,Yi,Ji,qi,Xi,Zi,ea,ta,ia,aa=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o},na=function(e,t,i,a,n){if("m"===a)throw new TypeError("Private method is not writable");if("a"===a&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?n.call(e,i):n?n.value=i:t.set(e,i),i},ra=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};let oa=class extends re{constructor(){super(),Ki.add(this),this._data=Ye(),this._missingFiles=[],Hi.set(this,void 0),Yi.set(this,void 0),Ji.set(this,void 0),qi.set(this,void 0),Xi.set(this,void 0),na(this,Ji,0,"f"),na(this,qi,!1,"f"),na(this,Hi,new Ni,"f"),this._background="lab",this._backgroundColor=[0,0,0,255],Qe.instance().addEventListener("image_updated",()=>{ra(this,Ki,"m",ta).call(this)}),na(this,Yi,new Wi,"f"),globalThis.userSettings=new De,globalThis.userSettings.concealed=!0,document.body.appendChild(globalThis.userSettings),document.body.addEventListener("dragover",e=>{e.preventDefault()}),document.body.addEventListener("drop",e=>{e.preventDefault();Array.from(e.dataTransfer?.items||[]).map(e=>e.getAsFile()).filter(e=>"image/png"===e?.type).forEach(e=>{Qe.instance().loadImageFromFile(e)}),this.requestUpdate()})}render(){return V`
    <div>
      <div class="outer-frame main-window">
        <div class="inner-frame">
          <canvas width="256" height="256" id="canvas" class="main-image" @click=${()=>{this._canvas.toBlob(async e=>{await navigator.clipboard.write([new ClipboardItem({[e.type]:e})])})}}></canvas>
        </div>
        <div class="inner-frame" id="controls">
          <div id="global_controls" class="box-dark-inset" ?hidden=${ra(this,Ki,"m",ea).call(this)}>
            <div class="range-line">
              <div>
                <label for="animation_speed">Animation speed:</label>
              </div>
              <div class="range-container">
                <input id="animation_speed" type="range" min="1" max="120"
                  value="${globalThis.userSettings.animationSpeed.toString()}"
                    @dblclick=${()=>{this._animationSpeed.value=globalThis.userSettings.animationSpeed.toString()}}></input>
              </div>
              <div class="rewind-button" @click=${()=>{na(this,Ji,0,"f")}}></div>
              <div class="previous-button" @click=${()=>{var e;na(this,Ji,(e=ra(this,Ji,"f"),--e),"f")}}></div>
              <div class="pause-button" @click=${e=>{na(this,qi,!ra(this,qi,"f"),"f"),e.target.classList.toggle("paused",ra(this,qi,"f"))}}></div>
              <div class="next-button" @click=${()=>{var e;na(this,Ji,(e=ra(this,Ji,"f"),++e),"f")}}></div>
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
              <sp-background-select @change=${e=>{this._background=e.detail}}></sp-background-select>
              <sp-color-picker .hidden=${"plain"!==this._background} offset
                .rgba=${this._backgroundColor}
                @change=${e=>{this._backgroundColor=e.detail}}>
              </sp-color-picker>
            </div>
          </div>
          <div>
            <sp-assembling-machine id="assembling_machine" .data=${this._data}
              @data-update=${()=>{ra(this,Ki,"m",ta).call(this),this.requestUpdate()}}>
            </sp-assembling-machine>
            <sp-collapse caption="Missing image files" ?hidden=${0==this._missingFiles.length}>
              <div>
                ${this._missingFiles.map(e=>V`<div class="flex-reverse missing-file">${e}</div>`)}
                <div class="flex-reverse">
                  <sp-file-button caption="Add all" @filesAdded=${e=>{e.detail.forEach(e=>{Qe.instance().loadImageFromFile(e).then(()=>{ra(this,Ki,"m",ta).call(this)})})}}>
                  </sp-file-button>
                </div>
              </div>
            </sp-collapse>
          </div>
          <div class="flex-reverse">
            <div class="import-icon" @click=${()=>{this._importUi.show()}}
            ></div>
            <div class="export-icon" @click=${()=>{this._exportUi.jsonText=JSON.stringify(this._assemblingMachine.exportJson(),void 0,2),this._exportUi.luaText=this._assemblingMachine.exportLua(0),this._exportUi.concealed=!1}}></div>
            <sp-progress-bar id="download_progress" ?hidden=${ra(this,Ki,"m",ea).call(this)}>
              <div id="download_button" class="download-icon" @click=${ra(this,Ki,"m",ia)}></div>
            </sp-progress-bar>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div @click=${()=>{globalThis.userSettings.show()}} class="user-settings-icon"></div>
    <sp-export-ui concealed></sp-export-ui>
    <sp-import-ui @settingsImported=${e=>{this.importSettings(e.detail)}}></sp-import-ui>
    `}updated(){ra(this,Ki,"m",ea).call(this)||void 0!==ra(this,Xi,"f")||this.drawSprite()}firstUpdated(){ra(this,Ki,"m",Zi).call(this,ra(this,Hi,"f").draw([],0,{name:"lab",machineSize:new ye(0,0)}))}drawSprite(){var e;if(void 0===ra(this,Hi,"f"))return;if(na(this,Xi,void 0,"f"),ra(this,Ki,"m",ea).call(this))return void ra(this,Ki,"m",Zi).call(this,ra(this,Hi,"f").draw([],0,{name:"lab",machineSize:new ye(0,0)}));const t=parseInt(this._dayNight.value)/256,i=performance.now(),a=this._assemblingMachine.getSprites(ra(this,Ji,"f"));ra(this,Ki,"m",Zi).call(this,ra(this,Hi,"f").draw(a,t,{name:this._background,color:this._backgroundColor,machineSize:this._data.size}));const n=performance.now();if(ra(this,qi,"f"))na(this,Xi,setTimeout(()=>{this.drawSprite()},0),"f");else{na(this,Ji,(e=ra(this,Ji,"f"),++e),"f");const t=parseInt(this._animationSpeed.value);na(this,Xi,setTimeout(()=>{this.drawSprite()},Math.max(0,1e3/t-(n-i))),"f")}}importSettings(e){this._data=e,ra(this,Ki,"m",ta).call(this),this.requestUpdate()}};Hi=new WeakMap,Yi=new WeakMap,Ji=new WeakMap,qi=new WeakMap,Xi=new WeakMap,Ki=new WeakSet,Zi=function(e){this._canvas.width=e.width,this._canvas.height=e.height,this._canvas.getContext("2d").putImageData(e,0,0)},ea=function(){return 0==this._data.animation.length},ta=function(){const e=[this._data.animation.flatMap(e=>e.filenames),this._data.fluidBoxes.flatMap(e=>[e.pipePicturesNorth,e.pipePicturesEast,e.pipePicturesSouth,e.pipePicturesWest].flatMap(e=>e.map(e=>e.filename))),""!==this._data.waterReflection.filename?[this._data.waterReflection.filename]:[]].flat(),t=[...new Set(e)];this._missingFiles=t.filter(e=>void 0===Qe.instance().getLoadedImage(e)).toSorted()},ia=async function(){if(ra(this,Ki,"m",ea).call(this))return;clearTimeout(ra(this,Xi,"f")),this._downloadProgress.progress=0;const e=Math.max(...this._data.animation.map(e=>e.frameCount)),t=Math.floor(1e3/parseInt(this._animationSpeed.value)),i=parseInt(this._dayNight.value)/256;for(let a=0;a<e;a++){const n=this._assemblingMachine.getSprites(a),r=ra(this,Hi,"f").draw(n,i,{name:this._background,color:this._backgroundColor,machineSize:this._data.size});await ra(this,Yi,"f").addFrame(r,t),this._downloadProgress.progress=(a+1)/e}const a=ra(this,Yi,"f").exportAnimation(),n=document.createElement("a");n.href=URL.createObjectURL(a),n.download="animation.webp",n.click(),this._downloadProgress.progress=void 0,na(this,Xi,setTimeout(()=>{this.drawSprite()},0),"f")},oa.styles=[Ue,r`
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
      .range-line sp-background-select,
      .range-line sp-color-picker {
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

      .download-icon {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAABtUlEQVR42q3TQ/gVURiA8TPIbbLNTbbb5tVdZnObsct27bJtbcI627att+c5/U/zzZ2+ib+L8Ts2/wl1mME68WkqlpWjPzNYyTxG0RjPJDGYj8RljEUD9vMV6To98I1EXbG5COAxVmwsHaKIDMwEoDeBiWEhugsiwVqAxOZDSHcQdyKsAzAxFOdl8poQ1y0tMA1+GbiKpweuqQGpkRKgKpIeGKEF2iKt5oMLsJkXROZrgc5EJtjpLnb+UnyaicRyLdAE5xGl7Bzf/eOzCWeaFijKF5zzNpEDn6VE+ul34RiRC5Q2Fh4LiHylrB7oCyCPIrF32JP2IIWcRbpEXzYifaGuFrCoy2vSjDRWIkBNmlDQjnVMSczH+0mA+pwC4C3j8OxRnCHpBQOMIwPU5TmRSXZZQG+O8AXnKpMpZpdkyNBMBKjMPeJ6mhwUpgldaE1l8wMA62TgAtne0Ujcld4sZS7tlYDiDvYRojIncJaTOzuwAd1R8tCI+0i7yBMPnCXNLl4iuEQ88Oe2AbDWBpjDX5Cvc0O+8je+UN98xzA+8edGmwi12cJNbimfU6xnHfIzjfrm//gGbMn9tbHUM1gAAAAASUVORK5CYII=');
        background-size: 100%;
        width: 32px;
        height: 32px;
        margin: 4px;
      }

      .rewind-button {
        width: 16px;
        height: 16px;
        margin: 2px 4px;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAmklEQVR42mNAB/9t/z/7zwxlJ/y/jC6d+v8WUAErmN35//z/N6jSE/+f+C/3/8x/lv9c/zf93wAkEQqAnF3/V/7nArI0/8v/v/C/HSQKVwAUuvG/Acq2+X/7fxyU/QbmsEf/w2EOA7rCBm7uG5jDLIAMiMPO/ZcHMhAK/neBHAbhQhwGZBBWQKQVhB1J2JuEA4pwUBOMLILRDQD0FLMRIiJ78AAAAABJRU5ErkJggg==');
        background-size: 100%;
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
    `],aa([pe()],oa.prototype,"_data",void 0),aa([pe()],oa.prototype,"_missingFiles",void 0),aa([pe()],oa.prototype,"_background",void 0),aa([pe()],oa.prototype,"_backgroundColor",void 0),aa([ue("#canvas")],oa.prototype,"_canvas",void 0),aa([ue("#animation_speed")],oa.prototype,"_animationSpeed",void 0),aa([ue("#day_night")],oa.prototype,"_dayNight",void 0),aa([ue("#assembling_machine")],oa.prototype,"_assemblingMachine",void 0),aa([ue("sp-export-ui")],oa.prototype,"_exportUi",void 0),aa([ue("sp-import-ui")],oa.prototype,"_importUi",void 0),aa([ue("#download_progress")],oa.prototype,"_downloadProgress",void 0),oa=aa([se("sp-gui")],oa);var sa,la,ca,da,pa,ha=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o},ua=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)},fa=function(e,t,i,a,n){if("m"===a)throw new TypeError("Private method is not writable");if("a"===a&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?n.call(e,i):n?n.value=i:t.set(e,i),i};let Aa=class extends re{constructor(){super(),sa.add(this),this.active=!1,la.set(this,void 0),fa(this,la,e=>{ua(this,sa,"m",da).call(this,e)},"f")}render(){return V`
      <div class="nudge-icon ${this.active?"active":""}" @click=${ua(this,sa,"m",ca)}></div>
    `}get container(){return this}};la=new WeakMap,sa=new WeakSet,ca=function(){this.active?ua(this,sa,"m",pa).call(this):(this.active=!0,window.document.addEventListener("keydown",ua(this,la,"f")),this.classList.add("active"),window.document.addEventListener("mousedown",e=>{for(let t=e.target;null!==t;t=t.parentElement)if(t===this)return;ua(this,sa,"m",pa).call(this)}))},da=function(e){let t;switch(e.preventDefault(),e.code){case"ArrowLeft":case"KeyA":t=new ye(-1,0);break;case"ArrowUp":case"KeyW":t=new ye(0,-1);break;case"ArrowRight":case"KeyD":t=new ye(1,0);break;case"ArrowDown":case"KeyS":t=new ye(0,1);break;case"KeyQ":case"Escape":return void ua(this,sa,"m",pa).call(this);case"KeyR":return void this.dispatchEvent(new CustomEvent("rotate",{detail:e.shiftKey}));default:return}e.shiftKey?t=t.mul(64):e.ctrlKey&&(t=t.mul(10)),this.dispatchEvent(new CustomEvent("nudge",{detail:t}))},pa=function(){this.active=!1,window.document.removeEventListener("keydown",ua(this,la,"f")),this.classList.remove("active")},Aa.styles=r`
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
  `,ha([de({type:Boolean})],Aa.prototype,"active",void 0),Aa=ha([se("sp-nudge")],Aa);var ga=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};class ma extends re{constructor(){super()}_onChange(){this.value=this._select.value,this.dispatchEvent(new CustomEvent("change",{detail:this.value}))}}ma.styles=r`
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
  `,ga([de({type:String})],ma.prototype,"value",void 0),ga([ue("#select")],ma.prototype,"_select",void 0);let va=class extends ma{constructor(){super(),this.value="normal"}render(){return V`
      <select id="select" .value=${Ce(this.value)} @change=${this._onChange}>
        <option label="Normal" value="normal"></option>
        <option label="Additive" value="additive"></option>
        <option label="Additive soft" value="additive-soft"></option>
        <option label="Multiplicative" value="multiplicative"></option>
        <option label="Multiplicative with alpha" value="multiplicative-with-alpha"></option>
      </select>
    `}};va=ga([se("sp-blend-mode-select")],va);let wa=class extends ma{constructor(){super(),this.value="sprite"}render(){return V`
      <select id="select" .value=${Ce(this.value)} @change=${this._onChange}>
        <option label="Sprite" value="sprite"></option>
        <option label="Light" value="light"></option>
        <option label="Glow" value="glow"></option>
        <option label="Shadow" value="shadow"></option>
      </select>
    `}};wa=ga([se("sp-draw-mode-select")],wa);let ba=class extends ma{constructor(){super(),this.value="lab"}render(){return V`
      <select id="select" .value=${Ce(this.value)} @change=${this._onChange}>
        <option label="Lab tiles" value="lab"></option>
        <option label="Nauvis" value="nauvis"></option>
        <option label="Vulcanus" value="vulcanus"></option>
        <option label="Fulgora" value="fulgora"></option>
        <option label="Gleba" value="gleba"></option>
        <option label="Aquilo" value="aquilo"></option>
        <option label="Space platform" value="space-platform"></option>
        <option label="Water" value="water"></option>
        <option label="Plain color" value="plain"></option>
      </select>
    `}};ba=ga([se("sp-background-select")],ba);var ya,xa,_a,Ea,Sa,Ta=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o},Ra=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};let Ca=class extends re{constructor(){super(),ya.add(this),this.caption="",this.data=[]}render(){return V`
      <sp-collapse
        id="container"
        caption="${this.caption}"
        concealable
        collapsed
        nudgeable
        @file-drop=${Ra(this,ya,"m",xa)}
        @nudge=${e=>{this._layers.forEach(t=>{t.nudge(e.detail)})}}
      >
        <div class="layers ${globalThis.userSettings.invertLayerOrder?"inverted-order":""}">
          ${this.data.map((e,t)=>V`<sp-sprite-layer
              .data=${e}
              @delete=${e=>{e.stopPropagation(),this.data.splice(t,1),this.requestUpdate(),this.dispatchEvent(new CustomEvent("data-update",{bubbles:!0,composed:!0}))}}
              @data-update=${()=>{this.requestUpdate()}}
              @dragstart=${Ra(this,ya,"m",Ea)}
              @dragenter=${e=>{Ra(this,ya,"m",_a).call(this,e)&&(e.dataTransfer.dropEffect="move"),e.preventDefault()}}
              @dragover=${e=>{Ra(this,ya,"m",_a).call(this,e)&&(e.dataTransfer.dropEffect="move"),e.preventDefault()}}
              @drop=${Ra(this,ya,"m",Sa)}
            ></sp-sprite-layer>`)}
        </div>
        <div class="flex-reverse">
          <sp-file-button
            caption="+ Add layer"
            @filesAdded=${Ra(this,ya,"m",xa)}
            allowJson
          ></sp-file-button>
        </div>
      </sp-collapse>
    `}connectedCallback(){super.connectedCallback(),globalThis.userSettings.addEventListener("settings-updated",()=>{this.requestUpdate()})}getSprites(){return this._container.concealed?[]:Array.from(this._layers).flatMap(e=>e.getSprites())}exportLua(e){const t=lt(Array.from(this._layers).map(t=>t.exportLua(e+2)),e+1);return ct(new Map([["layers",t]]),e)}exportJson(){return{layers:Array.from(this._layers).map(e=>e.exportJson())}}};ya=new WeakSet,xa=async function(e){const t=e.detail.filter(e=>"image/png"==e.type).toSorted((e,t)=>e.name.localeCompare(t.name,void 0,{numeric:!0}));for(const e of t){const t=await Qe.instance().loadImageFromFile(e);this.data.push({hidden:!1,filename:t.filename,size:t.size,position:new ye(0,0),shift:new ye(0,0),scale:.5,blendMode:"normal",drawMode:"sprite",tint:[255,255,255,255]})}this.requestUpdate()},_a=function(e){return"Sprite"==e.dataTransfer.getData("dragged-element")&&globalThis.draggedElement?.parentElement===e.target.parentElement},Ea=function(e){globalThis.draggedElement=e.target,e.dataTransfer.setData("dragged-element","Sprite"),e.stopPropagation()},Sa=function(e){if(Ra(this,ya,"m",_a).call(this,e)){const t=Array.from(e.target.parentNode.children),i=t.indexOf(globalThis.draggedElement),a=t.indexOf(e.target);if(i!=a){const e=this.data.splice(i,1)[0];this.data.splice(a,0,e)}this.requestUpdate(),this.dispatchEvent(new CustomEvent("data-update",{bubbles:!0,composed:!0}))}e.stopPropagation()},Ca.styles=[Ue,r`
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
    `],Ta([de({type:String})],Ca.prototype,"caption",void 0),Ta([de({type:Array})],Ca.prototype,"data",void 0),Ta([ue("#container")],Ca.prototype,"_container",void 0),Ta([Ae("sp-sprite-layer")],Ca.prototype,"_layers",void 0),Ca=Ta([se("sp-sprite")],Ca);var Ua=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let Fa=class extends re{constructor(){super(),this.data=He()}render(){return V`
      <sp-collapse
        id="container"
        caption="${this.data.filename}"
        concealeable
        collapsed
        moveable
        deleteable
        @file-drop=${e=>{const t=e.detail.filter(e=>"image/png"===e.type).toSorted((e,t)=>e.name.localeCompare(t.name,void 0,{numeric:!0}));t.forEach(e=>{Qe.instance().loadImageFromFile(e)}),this.data.filename=t[0].name,this.requestUpdate()}}
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
                <td></td>
                <td>
                  <sp-number-input
                    caption="Scale:"
                    id="rows"
                    value=${this.data.scale}
                    minValue="0.01"
                    maxValue="100"
                    allowFractional
                    @input=${e=>{this.data.scale=e.detail}}
                  >
                  </sp-number-input>
                </td>
                <td>
                  <sp-number-input
                    caption="Shift X"
                    id="shift_x"
                    value=${this.data.shift.x}
                    minValue="-1024"
                    maxValue="1024"
                    allowFractional
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
                    allowFractional
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
    `}nudge(e){this.data.shift.x+=e.x,this.data.shift.y+=e.y,this.requestUpdate()}getSprites(){return this._container.concealed?[]:[{filename:this._image.filename,size:this.data.size,position:this.data.position,shift:this.data.shift,scale:this.data.scale,blendMode:this.data.blendMode,drawMode:this.data.drawMode,tint:this.data.tint}]}exportLua(e){const t=new Map([["scale",st(this.data.scale)],["filename",ot(this.data.filename)],["blend_mode",ot(this.data.blendMode)],["width",st(this.data.size.x)],["height",st(this.data.size.y)]]);t.set("shift",`util.by_pixel_hr(${this.data.shift.x}, ${this.data.shift.y})`);const i=this.data.tint.map(e=>e/255);t.set("tint",`{ r = ${i[0]}, g = ${i[1]}, b = ${i[2]}, a = ${i[3]} }`);const a=this.data.position;return t.set("position",`{ ${a.x}, ${a.y} }`),"light"==this.data.drawMode?t.set("draw_as_light",st(!0)):"glow"==this.data.drawMode?t.set("draw_as_glow",st(!0)):"shadow"==this.data.drawMode&&t.set("draw_as_shadow",st(!0)),ct(t,e)}exportJson(){const e={scale:this.data.scale,filename:this.data.filename,blend_mode:this.data.blendMode,width:this.data.size.x,height:this.data.size.y,shift:this.data.shift.mul(1/64).asPrototype(),position:this.data.position.asArray(),tint:this.data.tint.map(e=>e/255)};return"light"==this.data.drawMode?e.draw_as_light=!0:"glow"==this.data.drawMode?e.draw_as_glow=!0:"shadow"==this.data.drawMode&&(e.draw_as_shadow=!0),e}};Fa.styles=[Ue],Ua([de({type:Object})],Fa.prototype,"data",void 0),Ua([ue("#image")],Fa.prototype,"_image",void 0),Ua([ue("#container")],Fa.prototype,"_container",void 0),Fa=Ua([se("sp-sprite-layer")],Fa);var Ma=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let ka=class extends re{constructor(){super()}render(){return V`
      <div class="tooltip">
        <div class="tooltip-icon"></div>
        <div class="tooltip-text">
          <slot></slot>
        </div>
      </div>
    `}};ka.styles=r`
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
  `,ka=Ma([se("sp-tooltip")],ka);var Pa,Oa,Ia,$a=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o},Ba=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};let Da=class extends re{constructor(e,t,i,a){super(),Pa.add(this),this.caption="",this.minValue=0,this.maxValue=0,this.value=0,this.allowFractional=!1,this.caption=e||"",this.minValue=t||0,this.maxValue=i||0,this.value=a||0}get container(){return this}safe_reset(e){this.value=Ge(e,this.minValue,this.maxValue)}render(){return V`
      <div class="right-aligned">
        <div>
          <input
            id="input"
            type="number"
            @change=${Ba(this,Pa,"m",Oa)}
            @input=${Ba(this,Pa,"m",Ia)}
            .value="${Ce(this.value)}"
          />
        </div>
        <div class="number-input-caption">${this.caption}</div>
      </div>
    `}};Pa=new WeakSet,Oa=function(e){Ba(this,Pa,"m",Ia).call(this,e),this.dispatchEvent(new CustomEvent("change",{detail:this.value})),this.requestUpdate()},Ia=function(e){e.stopPropagation();const t=e.target.value;this.value=Ge((this.allowFractional?parseFloat(t):parseInt(t))||0,this.minValue,this.maxValue),this.dispatchEvent(new CustomEvent("input",{detail:this.value}))},Da.styles=r`
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
  `,$a([de({type:String})],Da.prototype,"caption",void 0),$a([de({type:Number})],Da.prototype,"minValue",void 0),$a([de({type:Number})],Da.prototype,"maxValue",void 0),$a([de({type:Number})],Da.prototype,"value",void 0),$a([de({type:Boolean})],Da.prototype,"allowFractional",void 0),Da=$a([se("sp-number-input")],Da);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ja="important",Na=" !"+ja,Va=Se(class extends Te{constructor(e){if(super(e),e.type!==xe||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const a=e[i];return null==a?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${a};`},"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(const e in t){const a=t[e];if(null!=a){this.ft.add(e);const t="string"==typeof a&&a.endsWith(Na);e.includes("-")||t?i.setProperty(e,t?a.slice(0,-11):a,t?ja:""):i[e]=a}}return L}});var La,za,Qa,Ga,Wa,Ka=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o},Ha=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)},Ya=function(e,t,i,a,n){if("m"===a)throw new TypeError("Private method is not writable");if("a"===a&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?n.call(e,i):n?n.value=i:t.set(e,i),i};const Ja=1e-7;function qa(e){const t=e[0]/255,i=e[1]/255,a=e[2]/255,n=Math.max(t,i,a),r=n-Math.min(t,i,a);let o,s;return o=n<Ja?0:r/n,o<Ja?s=0:(Math.abs(t-n)<Ja?(s=(i-a)/r,s<0&&(s+=6)):s=Math.abs(i-n)<Ja?2+(a-t)/r:4+(t-i)/r,s/=6),[s,o,n,e[3]/255]}function Xa(e){const t=e[0],i=e[1],a=e[2];let n=0,r=0,o=0,s=t%1;s+=s<0?1:0,s*=6;const l=i*a,c=l*(1-Math.abs(s%2-1));s<1?(n=l,r=c):s<2?(n=c,r=l):s<3?(r=l,o=c):s<4?(r=c,o=l):s<5?(n=c,o=l):s<6&&(n=l,o=c);const d=a-l;return n+=d,r+=d,o+=d,[Ge(Math.floor(255*n),0,255),Ge(Math.floor(255*r),0,255),Ge(Math.floor(255*o),0,255),Ge(Math.floor(255*e[3]),0,255)]}function Za(e,t,i){return[t[0]*e+i[0]*(1-e),t[1]*e+i[1]*(1-e),t[2]*e+i[2]*(1-e),t[3]*e+i[3]*(1-e)]}const en=96,tn=120,an=256,nn=4*Math.atan(1),rn=Math.sqrt(3);function on(e,t){const i=Math.sqrt(e*e+t*t);return i>=en&&i<=tn?0:i<en?en-i:i-tn}function sn(e,t){return Math.max(0,Math.max(2*t,-e*rn-t,e*rn-t)-en+2)}function ln(e,t){return e>=132&&e<156&&t>=-120&&t<=tn}function cn(e,t){return Math.atan2(t,e)/2/nn}function dn(e,t){return e/(t+en)*rn/2+.5}function pn(e,t){return(t/en+1)/1.5}function hn(e,t){return Ge(t/tn/2+.5,0,1)}let un=class extends re{constructor(e){super(),La.add(this),this.rgba=[255,255,255,255],this._hsva=[1,1,1,1],this.offset=!1,this._active=!1,this._selectMode=void 0,za.set(this,void 0),this.rgba=e||[255,255,255,255],Ya(this,za,e=>{-1==e.composedPath().indexOf(this._picker)&&(this._active=!1,window.document.removeEventListener("mousedown",Ha(this,za,"f")))},"f")}connectedCallback(){super.connectedCallback(),this._hsva=qa(this.rgba)}updateRgba(){this.rgba=[this._red.value,this._green.value,this._blue.value,this._alpha.value],this._hsva=qa(this.rgba),this.dispatchEvent(new CustomEvent("change",{detail:this.rgba}))}render(){return V`
      <div id="picker" class="color-picker">
        <div class="color-picker-background">
          <div
            class="color-picker-color"
            @click=${()=>{this._active=!0,window.document.addEventListener("mousedown",Ha(this,za,"f"))}}
            style=${Va({backgroundColor:`rgba(${this.rgba[0]}, ${this.rgba[1]},\n                             ${this.rgba[2]}, ${this.rgba[3]})`})}
          ></div>
        </div>
        <div ?hidden=${!this._active}>
          <div class="color-picker-popup outer-frame ${this.offset?"popup-bottom":"popup-top"}">
            <div class="inner-frame">
              <canvas
                id="canvas"
                width="${292}"
                height="${an}"
                @mousedown=${Ha(this,La,"m",Qa)}
                @mousemove=${Ha(this,La,"m",Ga)}
                @mouseup=${Ha(this,La,"m",Wa)}
                @mouseleave=${Ha(this,La,"m",Wa)}
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
    `}updated(){this._canvas.getContext("2d").putImageData(function(e){const t=new ImageData(292,an),i=new ye(Math.cos(2*e[0]*nn),Math.sin(2*e[0]*nn)),a=new ye(2*(e[1]-.5)/rn*e[2]*1.5*en,(1.5*e[2]-1)*en);for(let n=-128;n<128;n++)for(let r=-128;r<164;r++){const o=4*((n+128)*t.width+(r+128)),s=on(r,n),l=sn(r,n);if(s<1){const e=cn(r,n),a=Math.abs(i.vmul(new ye(r,n)));let l=Xa([e,1,1,255]);a<2&&i.smul(new ye(r,n))>0&&(l=Za(a/2,l,[0,0,0,255])),t.data.set(Za(s,[48,48,48,255],l),o)}else if(l<1){let i=Xa([e[0],dn(r,n),pn(0,n),255]);const s=a.subtract(new ye(r,n)),c=Math.sqrt(s.smul(s));Math.abs(c-4)<2&&(i=Za(Math.abs(c-4)/2,i,e[2]<.5?[255,255,255,255]:[0,0,0,255])),t.data.set(Za(l,[48,48,48,255],i),o)}else if(ln(r,n)){const i=(Math.floor(r/12)+Math.floor(n/12))%2==0?[102,102,102,255]:[204,204,204,255],a=Xa(e);a[3]=255;const s=Math.trunc(2*(e[3]-.5)*tn);let l=Za(hn(0,n),a,i);n==s?l=Xa([e[0],.18,.17,1]):n!=s-1&&n!=s+1||(l=Xa([e[0],.18,.85,1])),t.data.set(l,o)}else t.data.set([48,48,48,255],o)}return t}(this._hsva),0,0)}get container(){return this}};za=new WeakMap,La=new WeakSet,Qa=function(e){const t=e.offsetX-128,i=e.offsetY-128;if(on(t,i)<Ja)this._hsva[0]=cn(t,i),this._selectMode="hue";else if(sn(t,i)<Ja)this._hsva[1]=dn(t,i),this._hsva[2]=pn(0,i),this._selectMode="saturationValue";else{if(!ln(t,i))return;this._hsva[3]=hn(0,i),this._selectMode="alpha"}this.rgba=Xa(this._hsva),this.dispatchEvent(new CustomEvent("change",{detail:this.rgba}))},Ga=function(e){const t=e.offsetX-128,i=e.offsetY-128;if("hue"===this._selectMode)this._hsva[0]=cn(t,i);else if("saturationValue"===this._selectMode){const e=new ye(t,i);sn(t,i)<Ja?(this._hsva[1]=dn(t,i),this._hsva[2]=pn(0,i)):i>=48?(this._hsva[1]=Ge(t/en/rn+.5,0,1),this._hsva[2]=1):t>0?(this._hsva[1]=1,this._hsva[2]=Ge(e.smul(new ye(.5/rn,.5))/en+.5,0,1)):(this._hsva[1]=0,this._hsva[2]=Ge(e.smul(new ye(-.5/rn,.5))/en+.5,0,1))}else{if("alpha"!==this._selectMode)return;this._hsva[3]=Ge(hn(0,i),0,1)}this.rgba=Xa(this._hsva),this.dispatchEvent(new CustomEvent("change",{detail:this.rgba}))},Wa=function(){this._selectMode=void 0},un.styles=[Ue,r`
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

      .popup-top {
        position: absolute;
        right: 28px;
        bottom: 0px;
      }

      .popup-bottom {
        position: absolute;
        right: 28px;
        top: 0px;
      }

      .color-picker-popup canvas {
        margin: 0px;
      }
    `],Ka([de({type:Array})],un.prototype,"rgba",void 0),Ka([de({type:Array})],un.prototype,"_hsva",void 0),Ka([de({type:Boolean})],un.prototype,"offset",void 0),Ka([pe()],un.prototype,"_active",void 0),Ka([pe()],un.prototype,"_selectMode",void 0),Ka([ue("#red")],un.prototype,"_red",void 0),Ka([ue("#green")],un.prototype,"_green",void 0),Ka([ue("#blue")],un.prototype,"_blue",void 0),Ka([ue("#alpha")],un.prototype,"_alpha",void 0),Ka([ue("#picker")],un.prototype,"_picker",void 0),Ka([ue("#canvas")],un.prototype,"_canvas",void 0),un=Ka([se("sp-color-picker")],un);var fn=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let An=class extends re{constructor(){super(...arguments),this.data=Ye()}render(){return V`
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
      <sp-water-reflection .data=${this.data.waterReflection}></sp-water-reflection>
    `}exportLua(e){const t=new Map;return this.data.animation.length>0&&t.set("graphics_set",ct(new Map([["animation",this._animation.exportLua(e+2)]]),e+1)),this.data.circuitConnector.hidden||t.set("circuit_connector",this._circuitConnector.exportLua(e+1)),this.data.fluidBoxes.length>0&&t.set("fluid_boxes",this._fluidBoxes.exportLua(e+1)),""!=this.data.waterReflection.filename&&t.set("water_reflection",this._waterReflection.exportLua(e+1)),ct(t,e)}exportJson(){const e={tile_width:this.data.size.x,tile_height:this.data.size.y};if(this.data.animation.length>0&&(e.graphics_set={animation:this._animation.exportJson()}),!this.data.circuitConnector.hidden){const t=this._circuitConnector.exportJson();e.circuit_connector=[t,t,t,t]}return this.data.fluidBoxes.length>0&&(e.fluid_boxes=this._fluidBoxes.exportJson()),""!=this.data.waterReflection.filename&&(e.water_reflection=this._waterReflection.exportJson()),e}getSprites(e){return[this._animation.getSprites(e),this._circuitConnector.getSprites(),this._fluidBoxes.getSprites(),this._waterReflection.getSprites()].flat()}};An.styles=[Ue,r`
      .size-box {
        border-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAABHUlEQVR42r2Tg243URTE9wE+1jZWFzWjhnWD2nj/V5jur/rbSDKZzMw5s7zBkl9Sq6ijxLdQwrIDDkY3UsJiDt7afE1eq+R70ckZIxMnmp+ZhtH4uaIKJT8FNk0VhaFmp6f1989vGI2fKypfkrv9JI6zO5jR+PCQgiCA0fjkxXeTKyEA3Ha8uKi5qQmN9PdRAqPxyX9mi0ownbiKTxOli/MKpyc1OzZMSQCj8cmZY5690jshNKlsFMqGi9rb3dHbyzOMxidnrtyd5Ep8msrFkbbWVnV9eaH7m2sYjU9eo4RbTBMt21THBwc6Oz7SaQYYjU/OHPMV/5Nll8E7baytaXdrK8MmjMYnr/GfAK5iHeAF/gANyFs5O906xS3gHb/4wE6+9U2WAAAAAElFTkSuQmCC')
          8/4px repeat;
        background-color: #404040;
        color: #fff;
        padding: 8px;
        margin: 0px;
      }
    `],fn([de({type:Object})],An.prototype,"data",void 0),fn([ue("sp-animation")],An.prototype,"_animation",void 0),fn([ue("sp-circuit-connector")],An.prototype,"_circuitConnector",void 0),fn([ue("sp-fluid-boxes")],An.prototype,"_fluidBoxes",void 0),fn([ue("sp-water-reflection")],An.prototype,"_waterReflection",void 0),An=fn([se("sp-assembling-machine")],An);var gn,mn,vn,wn,bn,yn=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o},xn=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};const _n=[{filename:"circuit-connector/ccm-universal-04a-base-sequence.png",size:new ye(52,50),shift:new ye(0,2)},{filename:"circuit-connector/ccm-universal-04c-wire-sequence.png",size:new ye(62,58),shift:new ye(0,2)},{filename:"circuit-connector/ccm-universal-04e-blue-LED-on-sequence.png",size:new ye(60,60),shift:new ye(0,0),draw_as_glow:!0},{filename:"circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",size:new ye(46,44),shift:new ye(0,0)},{filename:"circuit-connector/ccm-universal-04h-green-LED-sequence.png",size:new ye(48,46),shift:new ye(0,0),draw_as_glow:!0},{filename:"circuit-connector/ccm-universal-04i-red-LED-sequence.png",size:new ye(48,46),shift:new ye(0,0),draw_as_glow:!0}],En=[{filename:"circuit-connector/ccm-universal-04b-base-shadow-sequence.png",size:new ye(60,46),shift:new ye(5,5)},{filename:"circuit-connector/ccm-universal-04d-wire-shadow-sequence.png",size:new ye(68,54),shift:new ye(10,7)}];let Sn=class extends re{constructor(){super(),gn.add(this)}render(){return V`
      <sp-collapse
        caption="Circuit connector"
        id="collapse"
        ?concealed=${this.data.hidden}
        concealable
        collapsed
        @conceal-toggle=${xn(this,gn,"m",mn)}
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
                <sp-nudge @nudge=${xn(this,gn,"m",vn)} @rotate=${xn(this,gn,"m",wn)}> </sp-nudge>
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
                <sp-nudge @nudge=${xn(this,gn,"m",bn)}> </sp-nudge>
              </td>
            </tr>
          </table>
        </div>
      </sp-collapse>
    `}getSprites(){if(this.data.hidden)return[];const e=Math.floor(this.data.variant/8),t=this.data.variant%8,i=_n.map(i=>({filename:i.filename,size:i.size,position:new ye(t*i.size.x,e*i.size.y),shift:i.shift.add(this.data.position),blendMode:"normal",drawMode:i.draw_as_glow?"glow":"sprite",tint:[255,255,255,255]})),a=this.data.showShadow?En.map(i=>({filename:i.filename,size:i.size,position:new ye(t*i.size.x,e*i.size.y),shift:i.shift.add(this.data.shadowPosition),blendMode:"normal",drawMode:"shadow",tint:[255,255,255,255]})):[];return i.concat(a)}exportLua(e){const t=ct(new Map([["variation",st(this.data.variant)],["main_offset",`util.by_pixel_hr(${this.data.position.x}, ${this.data.position.y})`],["shadow_offset",`util.by_pixel_hr(${this.data.shadowPosition.x}, ${this.data.shadowPosition.y})`],["show_shadow",st(this.data.showShadow)]]),e+2),i=lt([t,t,t,t],e+1),a="  ".repeat(e);return`circuit_connector_definitions.create_vector(\n${a}  universal_connector_template,\n${a}  ${i}\n${a})`}exportJson(){const e=(e,t)=>{const i=Math.floor(this.data.variant/8),a=this.data.variant%8,n={filename:"__base__/graphics/entity/"+e.filename,width:e.size.x,height:e.size.y,position:new ye(a*e.size.x,i*e.size.y).asArray(),shift:(t?this.data.shadowPosition:this.data.position).add(e.shift).mul(1/64).asPrototype(),scale:.5};return e.draw_as_glow&&(n.draw_as_glow=!0),t&&(n.draw_as_shadow=!0),n},t={connector_main:e(_n[0],!1),wire_pins:e(_n[1],!1),led_blue:e(_n[2],!1),led_blue_off:e(_n[3],!1),led_green:e(_n[4],!1),led_red:e(_n[5],!1)};return this.data.showShadow&&(t.connector_shadow=e(En[0],!0),t.wire_pins_shadow=e(En[1],!0)),{sprites:t}}};gn=new WeakSet,mn=function(e){this.data.hidden=e.detail,this.requestUpdate()},vn=function(e){this.data.position=this.data.position.add(e.detail),this.data.shadowPosition=this.data.shadowPosition.add(e.detail),this.requestUpdate()},wn=function(e){const t=e.detail;this.data.variant=(this.data.variant+(t?39:1))%40,this.requestUpdate()},bn=function(e){this.data.shadowPosition=this.data.shadowPosition.add(e.detail)},Sn.styles=[Ue],yn([de({type:Object})],Sn.prototype,"data",void 0),yn([ue("#collapse")],Sn.prototype,"_collapse",void 0),Sn=yn([se("sp-circuit-connector")],Sn);var Tn=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let Rn=class extends re{constructor(){super(),this.checked=!1,this.caption="",this.checked=!1,this.caption=""}onChange(e){this.checked=e.target.checked,this.dispatchEvent(new CustomEvent("change",{detail:this.checked}))}render(){return V`
      <div class="right-aligned">
        <div>
          <input type=checkbox
                 ?checked=${this.checked}
                 @change=${this.onChange}>
           </input>
        </div>
        <div>${this.caption}</div>
      </div>
    `}};Rn.styles=r`
    .right-aligned {
      display: flex;
      flex-direction: row-reverse;
    }
  `,Tn([de({type:Boolean})],Rn.prototype,"checked",void 0),Tn([de({type:String})],Rn.prototype,"caption",void 0),Rn=Tn([se("sp-checkbox")],Rn);var Cn,Un,Fn,Mn,kn,Pn=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o},On=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};const In=[{image:"pipe-covers/pipe-cover-north.png",shadow:"pipe-covers/pipe-cover-north-shadow.png"},{image:"pipe-covers/pipe-cover-east.png",shadow:"pipe-covers/pipe-cover-east-shadow.png"},{image:"pipe-covers/pipe-cover-south.png",shadow:"pipe-covers/pipe-cover-south-shadow.png"},{image:"pipe-covers/pipe-cover-west.png",shadow:"pipe-covers/pipe-cover-west-shadow.png"}],$n=[new ye(0,-1),new ye(1,0),new ye(0,1),new ye(-1,0)],Bn=["defines.direction.north","defines.direction.east","defines.direction.south","defines.direction.west"];let Dn=class extends re{constructor(){super(),Cn.add(this),this.data={pipePicturesNorth:[],pipePicturesEast:[],pipePicturesSouth:[],pipePicturesWest:[],pipeConnections:[]},this.boundingBoxSize=new ye(1,1)}connectedCallback(){super.connectedCallback();for(let e=this;void 0!==e;e=e.getRootNode().host)if("SP-ASSEMBLING-MACHINE"==e.nodeName){this.boundingBoxSize=e.data.size,e.addEventListener("data-update",()=>{this.requestUpdate()});break}}render(){return V`
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
            @mousedown=${On(this,Cn,"m",kn)}
            width=${32*(this.boundingBoxSize.x+2)}
            height=${32*(this.boundingBoxSize.y+2)}
          >
          </canvas>
        </sp-collapse>
      </sp-collapse>
    `}updated(){const e=this._canvas.getContext("2d"),t=new ImageData(this._canvas.width,this._canvas.height);for(let e=0;e<t.height;e++)for(let i=0;i<t.width;i++){const a=4*(e*t.width+i),n=(32&i)==(32&e)?27:48;t.data.set([n,n,n,255],a)}e.putImageData(t,0,0),e.lineWidth=2,e.strokeStyle="#ffff00",e.strokeRect(32,32,32*this.boundingBoxSize.x,32*this.boundingBoxSize.y),this.data.pipeConnections.forEach(t=>{On(this,Cn,"m",Un).call(this,t,e)})}getSprites(){return null===this._container||this._container.concealed?[]:this.data.pipeConnections.flatMap(e=>{const t=e.position.add($n[e.direction]).mul(64),i=this._pipeConnections.concealed?[]:[{filename:In[e.direction].image,size:new ye(128,128),shift:t,blendMode:"normal",drawMode:"sprite",secondaryDrawOrder:0==e.direction?-64:64},{filename:In[e.direction].shadow,size:new ye(128,128),shift:t,blendMode:"normal",drawMode:"shadow",secondaryDrawOrder:0==e.direction?-64:64}];return[[this._pipePicturesNorth,this._pipePicturesEast,this._pipePicturesSouth,this._pipePicturesWest][e.direction].getSprites().map(i=>(i.shift=i.shift.add(t),i.secondaryDrawOrder=0==e.direction?-1:1,i)),i].flat()})}exportLua(e){const t=new Map([["north",this._pipePicturesNorth.exportLua(e+2)],["east",this._pipePicturesEast.exportLua(e+2)],["south",this._pipePicturesSouth.exportLua(e+2)],["west",this._pipePicturesWest.exportLua(e+2)]]),i=this.data.pipeConnections.map(t=>ct(new Map([["direction",Bn[t.direction]],["position",`{ ${t.position.x}, ${t.position.y} }`]]),e+2)),a=new Map([["north",st(-1)]]),n=new Map([["pipe_covers","pipecoverspictures()"],["pipe_picture",ct(t,e+1)],["pipe_connections",lt(i,e+1)],["secondary_draw_orders",ct(a,e+1)]]);return ct(n,e)}exportJson(){return{pipe_picture:{north:this._pipePicturesNorth.exportJson(),east:this._pipePicturesEast.exportJson(),south:this._pipePicturesSouth.exportJson(),west:this._pipePicturesWest.exportJson()},pipe_connections:this.data.pipeConnections.map(e=>({direction:4*e.direction,position:e.position.asPrototype()})),secondary_draw_orders:{north:-1}}}};Cn=new WeakSet,Un=function(e,t){const i=$n[e.direction],a=new ye(-i.y,i.x);let n=e.position.add(i.mul(.5)).add(new ye(this.boundingBoxSize.x/2+1,this.boundingBoxSize.y/2+1)).mul(32);t.beginPath(),n=n.add(i.mul(7)),t.moveTo(n.x,n.y),n=n.add(i.mul(-10)).add(a.mul(10)),t.lineTo(n.x,n.y),n=n.add(a.mul(-20)),t.lineTo(n.x,n.y),t.closePath(),t.fillStyle="#29cce7",t.fill(),t.lineWidth=1,t.strokeStyle="#1770bf",t.stroke()},Fn=function(e,t,i){if(e<0||e>32*i||Math.abs(t)>10)return;const a=Math.floor(e/32);return Math.abs(t)+Math.abs(e-32*(a+.5))>16?void 0:a},Mn=function(e,t){const i=this.boundingBoxSize.x,a=this.boundingBoxSize.y;{const n=On(this,Cn,"m",Fn).call(this,e-32,t-32,i);if(void 0!==n)return{direction:0,position:new ye(n-(i-1)/2,-(a-1)/2)}}{const n=On(this,Cn,"m",Fn).call(this,t-32,e-32-32*i,a);if(void 0!==n)return{direction:1,position:new ye((i-1)/2,n-(a-1)/2)}}{const n=On(this,Cn,"m",Fn).call(this,e-32,t-32-32*a,i);if(void 0!==n)return{direction:2,position:new ye(n-(i-1)/2,(a-1)/2)}}{const n=On(this,Cn,"m",Fn).call(this,t-32,e-32,a);if(void 0!==n)return{direction:3,position:new ye(-(i-1)/2,n-(a-1)/2)}}},kn=function(e){const t=On(this,Cn,"m",Mn).call(this,e.offsetX,e.offsetY);if(void 0===t)return;const i=this.data.pipeConnections.filter(e=>e.direction!=t.direction||e.position.x!=t.position.x||e.position.y!=t.position.y);i.length!=this.data.pipeConnections.length?this.data.pipeConnections=i:this.data.pipeConnections.push(t),this.requestUpdate()},Dn.styles=Ue,Pn([de({type:Object})],Dn.prototype,"data",void 0),Pn([pe()],Dn.prototype,"boundingBoxSize",void 0),Pn([ue("#canvas")],Dn.prototype,"_canvas",void 0),Pn([ue("#pipe_pictures_north")],Dn.prototype,"_pipePicturesNorth",void 0),Pn([ue("#pipe_pictures_east")],Dn.prototype,"_pipePicturesEast",void 0),Pn([ue("#pipe_pictures_south")],Dn.prototype,"_pipePicturesSouth",void 0),Pn([ue("#pipe_pictures_west")],Dn.prototype,"_pipePicturesWest",void 0),Pn([ue("#pipe_connections")],Dn.prototype,"_pipeConnections",void 0),Pn([ue("#container")],Dn.prototype,"_container",void 0),Dn=Pn([se("sp-fluid-box")],Dn);var jn=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let Nn=class extends re{constructor(){super(),this.data=[]}render(){return V`
      <sp-collapse id="container" caption="Fluid boxes" concealable collapsed concealed>
        ${this.data.map((e,t)=>V`<sp-fluid-box
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
    `}getSprites(){return this._container.concealed?[]:Array.from(this._fluidBoxes).flatMap(e=>e.getSprites())}exportLua(e){return lt(Array.from(this._fluidBoxes).map(t=>t.exportLua(e+1)),e)}exportJson(){return Array.from(this._fluidBoxes).map(e=>e.exportJson())}};Nn.styles=Ue,jn([de({type:Array})],Nn.prototype,"data",void 0),jn([ue("#container")],Nn.prototype,"_container",void 0),jn([Ae("sp-fluid-box")],Nn.prototype,"_fluidBoxes",void 0),Nn=jn([se("sp-fluid-boxes")],Nn);var Vn=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let Ln=class extends re{constructor(){super(),this.concealed=!1}render(){return V`
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
    `}};Ln.styles=[Ue,r`
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
    `],Vn([de({type:Boolean})],Ln.prototype,"concealed",void 0),Ln=Vn([se("sp-overlay")],Ln);var zn=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let Qn=class extends re{constructor(){super(),this.jsonText="",this.luaText="",this.concealed=!1,this.activeTab="json"}render(){return V`
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
    `}};Qn.styles=[Ue,r`
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
    `],zn([de({type:String})],Qn.prototype,"jsonText",void 0),zn([de({type:String})],Qn.prototype,"luaText",void 0),zn([de({type:Boolean})],Qn.prototype,"concealed",void 0),zn([de({type:String})],Qn.prototype,"activeTab",void 0),Qn=zn([se("sp-export-ui")],Qn);var Gn,Wn,Kn=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o},Hn=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};let Yn=class extends re{constructor(){super(),Gn.add(this),this._concealed=!0,this._errorMessage=void 0}render(){return V`
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
            <div class="confirm-icon" @click=${Hn(this,Gn,"m",Wn)}></div>
            <div class="error-message" ?hidden=${void 0===this._errorMessage}>
              ${this._errorMessage}
            </div>
          </div>
        </div>
      </sp-overlay>
    `}show(){this._text.value="",this._errorMessage=void 0,this._concealed=!1}};Gn=new WeakSet,Wn=function(){try{const e=function(e){const t=JSON.parse(e);return"object"==typeof t.graphics_set?rt(t):{...Ye(),animation:Ze(t)}}(this._text.value);if(void 0!==e)return this.dispatchEvent(new CustomEvent("settingsImported",{detail:e})),void(this._concealed=!0)}catch(e){"string"==typeof e?this._errorMessage=e:e instanceof SyntaxError?this._errorMessage=e.message:this._errorMessage="Malformed input"}},Yn.styles=[Ue,r`
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
    `],Kn([pe()],Yn.prototype,"_concealed",void 0),Kn([pe()],Yn.prototype,"_errorMessage",void 0),Kn([ue("#textarea")],Yn.prototype,"_text",void 0),Yn=Kn([se("sp-import-ui")],Yn);var Jn=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let qn=class extends re{constructor(){super(),this.progress=void 0}render(){return void 0===this.progress?V`<slot></slot>`:V`
      <div
        class="progress"
        style=${Va({background:`\n            radial-gradient(closest-side, #303030 50%, transparent 51% 100%),\n            conic-gradient(white ${100*this.progress}%, black 0) `})}
      ></div>
    `}};qn.styles=[r`
      .progress {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin: 4px 4px 4px 4px;
      }
    `],Jn([de({type:Number})],qn.prototype,"progress",void 0),qn=Jn([se("sp-progress-bar")],qn);var Xn,Zn,er=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o},tr=function(e,t,i,a){if("a"===i&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?a:"a"===i?a.call(e):a?a.value:t.get(e)};let ir=class extends re{constructor(){super(),Xn.add(this),this.data=He()}render(){return V`
      <sp-collapse
        id="container"
        caption="Water reflection"
        concealable
        collapsed
        nudgeable
        @file-drop=${e=>{tr(this,Xn,"m",Zn).call(this,e.detail)}}
        @nudge=${e=>{this.nudge(e.detail)}}
      >
        <div>
          ${""==this.data.filename?V`<div class="flex-reverse">
                <sp-file-button
                  caption="Select picture"
                  @filesAdded=${e=>{tr(this,Xn,"m",Zn).call(this,e.detail)}}
                >
                </sp-file-button>
              </div>`:V`
                <sp-image-file
                  id="image"
                  filename=${this.data.filename}
                  @delete=${e=>{e.stopPropagation(),this.data.filename="",this.requestUpdate()}}
                ></sp-image-file>
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
                      <td></td>
                      <td>
                        <sp-number-input
                          caption="Scale:"
                          id="rows"
                          value=${this.data.scale}
                          minValue="0.01"
                          maxValue="100"
                          allowFractional
                          @input=${e=>{this.data.scale=e.detail}}
                        >
                        </sp-number-input>
                      </td>
                      <td>
                        <sp-number-input
                          caption="Shift X"
                          id="shift_x"
                          value=${this.data.shift.x}
                          minValue="-1024"
                          maxValue="1024"
                          allowFractional
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
                          allowFractional
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
              `}
        </div>
      </sp-collapse>
    `}nudge(e){this.data.shift.x+=e.x,this.data.shift.y+=e.y,this.requestUpdate()}getSprites(){return this._container.concealed||""===this.data.filename?[]:[{filename:this._image.filename,size:this.data.size,position:this.data.position,shift:this.data.shift,scale:this.data.scale,blendMode:"additive",drawMode:"water-reflection",tint:[255,255,255,255]}]}exportLua(e){const t=ct(new Map([["scale",st(this.data.scale)],["filename",ot(this.data.filename)],["width",st(this.data.size.x)],["height",st(this.data.size.y)],["shift",`util.by_pixel_hr(${this.data.shift.x}, ${this.data.shift.y})`],["position",`{ ${this.data.position.x}, ${this.data.position.y} }`]]),e+2);return ct(new Map([["pictures",lt([t],e+1)]]),e)}exportJson(){return{pictures:[{scale:this.data.scale,filename:this.data.filename,width:this.data.size.x,height:this.data.size.y,shift:this.data.shift.mul(1/64).asPrototype(),position:this.data.position.asArray()}]}}};Xn=new WeakSet,Zn=async function(e){if(0==e.length)return;e=e.filter(e=>"image/png"===e.type).toSorted((e,t)=>e.name.localeCompare(t.name,void 0,{numeric:!0}));const t=await e.map(async e=>Qe.instance().loadImageFromFile(e))[0];this.data.filename=t.filename,this.data.size=t.size,this.requestUpdate()},ir.styles=[Ue],er([de({type:Object})],ir.prototype,"data",void 0),er([ue("#image")],ir.prototype,"_image",void 0),er([ue("#container")],ir.prototype,"_container",void 0),ir=er([se("sp-water-reflection")],ir);
