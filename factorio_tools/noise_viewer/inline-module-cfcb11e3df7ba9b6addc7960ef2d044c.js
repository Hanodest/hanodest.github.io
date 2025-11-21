/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;let s=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const i=this.t;if(t&&void 0===e){const t=void 0!==i&&1===i.length;t&&(e=n.get(i)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&n.set(i,e))}return e}toString(){return this.cssText}};const o=(e,...t)=>{const n=1===e.length?e[0]:t.reduce((t,i,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1],e[0]);return new s(n,e,i)},a=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new s("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:r,defineProperty:l,getOwnPropertyDescriptor:p,getOwnPropertyNames:c,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,h=globalThis,f=h.trustedTypes,m=f?f.emptyScript:"",g=h.reactiveElementPolyfillSupport,A=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?m:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},y=(e,t)=>!r(e,t),_={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),h.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);void 0!==n&&l(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){const{get:n,set:s}=p(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:n,set(t){const o=n?.call(this);s?.call(this,t),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_}static _$Ei(){if(this.hasOwnProperty(A("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(A("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(A("properties"))){const e=this.properties,t=[...c(e),...d(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,n)=>{if(t)i.adoptedStyleSheets=n.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const t of n){const n=document.createElement("style"),s=e.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,i.appendChild(n)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(void 0!==n&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(t,i.type);this._$Em=e,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(e,t){const i=this.constructor,n=i._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=i.getPropertyOptions(n),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=n;const o=s.fromAttribute(t,e.type);this[n]=o??this._$Ej?.get(n)??o,this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){const n=this.constructor,s=this[e];if(i??=n.getPropertyOptions(e),!((i.hasChanged??y)(s,t)||i.useDefault&&i.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:n,wrapped:s},o){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),!0!==s||void 0!==o)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===n&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,n=this[t];!0!==e||this._$AL.has(t)||void 0===n||this.C(t,void 0,i,n)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[A("elementProperties")]=new Map,x[A("finalized")]=new Map,g?.({ReactiveElement:x}),(h.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const b=globalThis,E=b.trustedTypes,w=E?E.createPolicy("lit-html",{createHTML:e=>e}):void 0,$="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,R="?"+C,T=`<${R}>`,S=document,k=()=>S.createComment(""),U=e=>null===e||"object"!=typeof e&&"function"!=typeof e,V=Array.isArray,M="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B=/-->/g,j=/>/g,P=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),N=/'/g,F=/"/g,D=/^(?:script|style|textarea|title)$/i,I=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),z=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),Y=new WeakMap,K=S.createTreeWalker(S,129);function q(e,t){if(!V(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(t):t}class H{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let s=0,o=0;const a=e.length-1,r=this.parts,[l,p]=((e,t)=>{const i=e.length-1,n=[];let s,o=2===t?"<svg>":3===t?"<math>":"",a=O;for(let t=0;t<i;t++){const i=e[t];let r,l,p=-1,c=0;for(;c<i.length&&(a.lastIndex=c,l=a.exec(i),null!==l);)c=a.lastIndex,a===O?"!--"===l[1]?a=B:void 0!==l[1]?a=j:void 0!==l[2]?(D.test(l[2])&&(s=RegExp("</"+l[2],"g")),a=P):void 0!==l[3]&&(a=P):a===P?">"===l[0]?(a=s??O,p=-1):void 0===l[1]?p=-2:(p=a.lastIndex-l[2].length,r=l[1],a=void 0===l[3]?P:'"'===l[3]?F:N):a===F||a===N?a=P:a===B||a===j?a=O:(a=P,s=void 0);const d=a===P&&e[t+1].startsWith("/>")?" ":"";o+=a===O?i+T:p>=0?(n.push(r),i.slice(0,p)+$+i.slice(p)+C+d):i+C+(-2===p?t:d)}return[q(e,o+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]})(e,t);if(this.el=H.createElement(l,i),K.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=K.nextNode())&&r.length<a;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith($)){const t=p[o++],i=n.getAttribute(e).split(C),a=/([.?@])?(.*)/.exec(t);r.push({type:1,index:s,name:a[2],strings:i,ctor:"."===a[1]?W:"?"===a[1]?Z:"@"===a[1]?ee:L}),n.removeAttribute(e)}else e.startsWith(C)&&(r.push({type:6,index:s}),n.removeAttribute(e));if(D.test(n.tagName)){const e=n.textContent.split(C),t=e.length-1;if(t>0){n.textContent=E?E.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],k()),K.nextNode(),r.push({type:2,index:++s});n.append(e[t],k())}}}else if(8===n.nodeType)if(n.data===R)r.push({type:2,index:s});else{let e=-1;for(;-1!==(e=n.data.indexOf(C,e+1));)r.push({type:7,index:s}),e+=C.length-1}s++}}static createElement(e,t){const i=S.createElement("template");return i.innerHTML=e,i}}function X(e,t,i=e,n){if(t===z)return t;let s=void 0!==n?i._$Co?.[n]:i._$Cl;const o=U(t)?void 0:t._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),void 0===o?s=void 0:(s=new o(e),s._$AT(e,i,n)),void 0!==n?(i._$Co??=[])[n]=s:i._$Cl=s),void 0!==s&&(t=X(e,s._$AS(e,t.values),s,n)),t}let G=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,n=(e?.creationScope??S).importNode(t,!0);K.currentNode=n;let s=K.nextNode(),o=0,a=0,r=i[0];for(;void 0!==r;){if(o===r.index){let t;2===r.type?t=new J(s,s.nextSibling,this,e):1===r.type?t=new r.ctor(s,r.name,r.strings,this,e):6===r.type&&(t=new te(s,this,e)),this._$AV.push(t),r=i[++a]}o!==r?.index&&(s=K.nextNode(),o++)}return K.currentNode=S,n}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}};class J{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=X(this,e,t),U(e)?e===Q||null==e||""===e?(this._$AH!==Q&&this._$AR(),this._$AH=Q):e!==this._$AH&&e!==z&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>V(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Q&&U(this._$AH)?this._$AA.nextSibling.data=e:this.T(S.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,n="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=H.createElement(q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new G(n,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=Y.get(e.strings);return void 0===t&&Y.set(e.strings,t=new H(e)),t}k(e){V(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const s of e)n===t.length?t.push(i=new J(this.O(k()),this.O(k()),this,this.options)):i=t[n],i._$AI(s),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class L{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,s){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Q}_$AI(e,t=this,i,n){const s=this.strings;let o=!1;if(void 0===s)e=X(this,e,t,0),o=!U(e)||e!==this._$AH&&e!==z,o&&(this._$AH=e);else{const n=e;let a,r;for(e=s[0],a=0;a<s.length-1;a++)r=X(this,n[i+a],t,a),r===z&&(r=this._$AH[a]),o||=!U(r)||r!==this._$AH[a],r===Q?e=Q:e!==Q&&(e+=(r??"")+s[a+1]),this._$AH[a]=r}o&&!n&&this.j(e)}j(e){e===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class W extends L{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Q?void 0:e}}class Z extends L{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Q)}}class ee extends L{constructor(e,t,i,n,s){super(e,t,i,n,s),this.type=5}_$AI(e,t=this){if((e=X(this,e,t,0)??Q)===z)return;const i=this._$AH,n=e===Q&&i!==Q||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==Q&&(i===Q||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class te{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){X(this,e)}}const ie={I:J},ne=b.litHtmlPolyfillSupport;ne?.(H,J),(b.litHtmlVersions??=[]).push("3.3.1");const se=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let oe=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const n=i?.renderBefore??t;let s=n._$litPart$;if(void 0===s){const e=i?.renderBefore??null;n._$litPart$=s=new J(t.insertBefore(k(),e),e,void 0,i??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return z}};oe._$litElement$=!0,oe.finalized=!0,se.litElementHydrateSupport?.({LitElement:oe});const ae=se.litElementPolyfillSupport;ae?.({LitElement:oe}),(se.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const re=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},le={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},pe=(e=le,t,i)=>{const{kind:n,metadata:s}=i;let o=globalThis.litPropertyMetadata.get(s);if(void 0===o&&globalThis.litPropertyMetadata.set(s,o=new Map),"setter"===n&&((e=Object.create(e)).wrapped=!0),o.set(i.name,e),"accessor"===n){const{name:n}=i;return{set(i){const s=t.get.call(this);t.set.call(this,i),this.requestUpdate(n,s,e)},init(t){return void 0!==t&&this.C(n,void 0,e,t),t}}}if("setter"===n){const{name:n}=i;return function(i){const s=this[n];t.call(this,i),this.requestUpdate(n,s,e)}}throw Error("Unsupported decorator location: "+n)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ce(e){return(t,i)=>"object"==typeof i?pe(e,t,i):((e,t,i)=>{const n=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),n?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function de(e){return ce({...e,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ue(e,t){return(t,i,n)=>((e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i))(t,i,{get(){return(t=>t.renderRoot?.querySelector(e)??null)(this)}})}var he=function(e,t,i,n){var s,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(a=(o<3?s(a):o>3?s(t,i,a):s(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let fe=class extends oe{constructor(){super(),this.collapsed=!1,this.collapsed=!1}onClick(){this.collapsed=!this.collapsed,this.dispatchEvent(new CustomEvent("collapse-toggle",{bubbles:!0,composed:!0,detail:this.collapsed}))}render(){return I`<div
      class="${this.collapsed?"collapsed":"expanded"}"
      @click=${this.onClick}
    ></div>`}};fe.styles=o`
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
  `,he([ce({type:Boolean})],fe.prototype,"collapsed",void 0),fe=he([re("nv-collapse-icon")],fe);let me=class extends oe{constructor(){super(),this.caption="",this.collapsed=!1,this.concealed=!1,this.concealable=!1,this.deleteable=!1,this.moveable=!1,this.nudgeable=!1,this.addEventListener("collapse-toggle",e=>{e.stopPropagation(),this.collapsed=e.detail})}render(){return I`
      <div>
        <div
          class="header"
          draggable="${this.moveable?"true":"false"}"
          @dragover=${e=>{e.preventDefault()}}
          @drop=${e=>{e.preventDefault();const t=Array.from(e.dataTransfer?.items||[]).map(e=>e.getAsFile());t.length>0&&this.dispatchEvent(new CustomEvent("file-drop",{detail:t}))}}
        >
          <slot name="eye-icon">
            <div slot="eye-icon" class="eye-placeholder"></div>
          </slot>
          <nv-collapse-icon .collapsed=${this.collapsed}></nv-collapse-icon>
          <div class="caption">${this.caption}</div>
          ${this.nudgeable?I`<nv-nudge
                @nudge=${e=>{this.dispatchEvent(new CustomEvent("nudge",{detail:e.detail}))}}
              ></nv-nudge>`:Q}
          ${this.moveable?I`<div class="drag-block"></div>`:Q}
          ${this.deleteable?I`<div
                class="delete-icon"
                @click=${()=>{this.dispatchEvent(new CustomEvent("delete",{bubbles:!0,composed:!0}))}}
              ></div>`:Q}
        </div>
        <div ?hidden=${this.collapsed} class="body">
          <slot></slot>
        </div>
      </div>
    `}};me.styles=o`
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
    .eye-placeholder {
      width: 24px;
      height: 24px;
    }
    nv-nudge {
      margin: -4px;
    }
  `,he([ce({type:String})],me.prototype,"caption",void 0),he([ce({type:Boolean})],me.prototype,"collapsed",void 0),he([ce({type:Boolean})],me.prototype,"concealed",void 0),he([ce({type:Boolean})],me.prototype,"concealable",void 0),he([ce({type:Boolean})],me.prototype,"deleteable",void 0),he([ce({type:Boolean})],me.prototype,"moveable",void 0),he([ce({type:Boolean})],me.prototype,"nudgeable",void 0),me=he([re("nv-collapse")],me);var ge,Ae,ve=function(e,t,i,n,s){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?s.call(e,i):s?s.value=i:t.set(e,i),i},ye=function(e,t,i,n){if("a"===i&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?n:"a"===i?n.call(e):n?n.value:t.get(e)};class _e{constructor(e,t){ge.set(this,void 0),Ae.set(this,void 0),ve(this,ge,e,"f"),ve(this,Ae,t,"f")}get x(){return ye(this,ge,"f")}set x(e){ve(this,ge,e,"f")}get y(){return ye(this,Ae,"f")}set y(e){ve(this,Ae,e,"f")}add(e){return new _e(this.x+e.x,this.y+e.y)}subtract(e){return new _e(this.x-e.x,this.y-e.y)}vmul(e){return this.x*e.y-e.x*this.y}smul(e){return this.x*e.x+this.y*e.y}mul(e){return new _e(this.x*e,this.y*e)}get len(){return Math.sqrt(this.smul(this))}min(e){return new _e(Math.min(this.x,e.x),Math.min(this.y,e.y))}max(e){return new _e(Math.max(this.x,e.x),Math.max(this.y,e.y))}floor(){return new _e(Math.floor(this.x),Math.floor(this.y))}ceil(){return new _e(Math.ceil(this.x),Math.ceil(this.y))}asArray(){return[this.x,this.y]}}ge=new WeakMap,Ae=new WeakMap;var xe,be,Ee,we,$e,Ce=function(e,t,i,n){var s,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(a=(o<3?s(a):o>3?s(t,i,a):s(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a},Re=function(e,t,i,n){if("a"===i&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?n:"a"===i?n.call(e):n?n.value:t.get(e)},Te=function(e,t,i,n,s){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?s.call(e,i):s?s.value=i:t.set(e,i),i};let Se=class extends oe{constructor(){super(),xe.add(this),this.active=!1,be.set(this,void 0),Te(this,be,e=>{Re(this,xe,"m",we).call(this,e)},"f")}render(){return I`
      <div class="nudge-icon ${this.active?"active":""}" @click=${Re(this,xe,"m",Ee)}></div>
    `}get container(){return this}};function ke(e,t,i){return Math.min(Math.max(e,t),i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */be=new WeakMap,xe=new WeakSet,Ee=function(){this.active?Re(this,xe,"m",$e).call(this):(this.active=!0,window.document.addEventListener("keydown",Re(this,be,"f")),this.classList.add("active"),window.document.addEventListener("mousedown",e=>{for(let t=e.target;null!==t;t=t.parentElement)if(t===this)return;Re(this,xe,"m",$e).call(this)}))},we=function(e){let t;switch(e.preventDefault(),e.code){case"ArrowLeft":case"KeyA":t=new _e(-32,0);break;case"ArrowUp":case"KeyW":t=new _e(0,-32);break;case"ArrowRight":case"KeyD":t=new _e(32,0);break;case"ArrowDown":case"KeyS":t=new _e(0,32);break;case"KeyQ":case"Escape":return void Re(this,xe,"m",$e).call(this);case"NumpadAdd":case"Equal":return void this.dispatchEvent(new CustomEvent("zoom_in"));case"NumpadSubtract":case"Minus":return void this.dispatchEvent(new CustomEvent("zoom_out"));default:return}e.shiftKey?t=t.mul(8):e.ctrlKey&&(t=t.mul(1/32)),this.dispatchEvent(new CustomEvent("nudge",{detail:t}))},$e=function(){this.active=!1,window.document.removeEventListener("keydown",Re(this,be,"f")),this.classList.remove("active")},Se.styles=o`
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
  `,Ce([ce({type:Boolean})],Se.prototype,"active",void 0),Se=Ce([re("nv-nudge")],Se);const Ue=1,Ve=2,Me=3,Oe=4,Be=e=>(...t)=>({_$litDirective$:e,values:t});let je=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Pe}=ie,Ne=()=>document.createComment(""),Fe=(e,t,i)=>{const n=e._$AA.parentNode,s=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=n.insertBefore(Ne(),s),o=n.insertBefore(Ne(),s);i=new Pe(t,o,e,e.options)}else{const t=i._$AB.nextSibling,o=i._$AM,a=o!==e;if(a){let t;i._$AQ?.(e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==o._$AU&&i._$AP(t)}if(t!==s||a){let e=i._$AA;for(;e!==t;){const t=e.nextSibling;n.insertBefore(e,s),e=t}}}return i},De=(e,t,i=e)=>(e._$AI(t,i),e),Ie={},ze=(e,t=Ie)=>e._$AH=t,Qe=e=>{e._$AR(),e._$AA.remove()},Ye=Be(class extends je{constructor(e){if(super(e),e.type!==Me&&e.type!==Ue&&e.type!==Oe)throw Error("The `live` directive is not allowed on child or event bindings");if(!(e=>void 0===e.strings)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===z||t===Q)return t;const i=e.element,n=e.name;if(e.type===Me){if(t===i[n])return z}else if(e.type===Oe){if(!!t===i.hasAttribute(n))return z}else if(e.type===Ue&&i.getAttribute(n)===t+"")return z;return ze(e),t}});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ke,qe,He,Xe=function(e,t,i,n){var s,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(a=(o<3?s(a):o>3?s(t,i,a):s(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a},Ge=function(e,t,i,n){if("a"===i&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?n:"a"===i?n.call(e):n?n.value:t.get(e)};let Je=class extends oe{constructor(e,t,i,n){super(),Ke.add(this),this.caption="",this.minValue=0,this.maxValue=0,this.value=0,this.allowFractional=!1,this.wide=!1,this.caption=e||"",this.minValue=t||0,this.maxValue=i||0,this.value=n||0}get container(){return this}safeReset(e){this.value=ke(e,this.minValue,this.maxValue)}render(){return I`
      <div class="right-aligned">
        <div>
          <input
            id="input"
            type="number"
            class="${this.wide?"wide":""}"
            @change=${Ge(this,Ke,"m",qe)}
            @input=${Ge(this,Ke,"m",He)}
            .value="${Ye(this.value)}"
          />
        </div>
        <div class="number-input-caption">${this.caption}</div>
      </div>
    `}};Ke=new WeakSet,qe=function(e){Ge(this,Ke,"m",He).call(this,e),this.dispatchEvent(new CustomEvent("change",{detail:this.value})),this.requestUpdate()},He=function(e){e.stopPropagation();const t=e.target.value;this.value=ke((this.allowFractional?parseFloat(t):parseInt(t))||0,this.minValue,this.maxValue),this.dispatchEvent(new CustomEvent("input",{detail:this.value}))},Je.styles=o`
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
    input[type='number'].wide {
      width: 90px;
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
  `,Xe([ce({type:String})],Je.prototype,"caption",void 0),Xe([ce({type:Number})],Je.prototype,"minValue",void 0),Xe([ce({type:Number})],Je.prototype,"maxValue",void 0),Xe([ce({type:Number})],Je.prototype,"value",void 0),Xe([ce({type:Boolean})],Je.prototype,"allowFractional",void 0),Xe([ce({type:Boolean})],Je.prototype,"wide",void 0),Je=Xe([re("nv-number-input")],Je);const Le=o`
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
    margin-top: -4px;
    width: 12px;
    height: 18px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAkCAQAAAA5xjKlAAABT0lEQVR42u3LPW7UUACF0WP7jW0BEkIshIqOggIaluHZA4tgD1NmC2mSIgVdKnZBAYKgwTP+eX6kihQ/iUxquN0n3RM8cgHyffnEq48ng+td0XH98vX2JHC1m7sSc3fl7fZBcLlbuqMRi9RderciYX1P3WgyYWOjykhY32dHvSNaT7TCioT8vtcbMVvISCC/DyISZCRAfk+IBjkJcJHfkVbkwvstgfNd7JLh/n1FChTduQ/bcJZ6lcVB79qC0hs1Rp/vutcbPevOuvBTK0gGg42EwqBA3tFRuDHaKM2iWoV4d1h37yDsLRoBSaPBYABD1rdEmE2CUoHSBpNoQsx6Mgset//g3wSVGoMIYtYZqLUYjJB3DloNWj8sKL1YdbMGjYDGKKKSN+Fg0qsAQA34eq+jX2bhu9EsSv6+QiWo3YIbvyV4kDz1XPhmcNqSvckf4RzIUIeBuqcAAAAASUVORK5CYII=');
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
    margin-top: -4px;
    width: 12px;
    height: 18px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAkCAQAAAA5xjKlAAABT0lEQVR42u3LPW7UUACF0WP7jW0BEkIshIqOggIaluHZA4tgD1NmC2mSIgVdKnZBAYKgwTP+eX6kihQ/iUxquN0n3RM8cgHyffnEq48ng+td0XH98vX2JHC1m7sSc3fl7fZBcLlbuqMRi9RderciYX1P3WgyYWOjykhY32dHvSNaT7TCioT8vtcbMVvISCC/DyISZCRAfk+IBjkJcJHfkVbkwvstgfNd7JLh/n1FChTduQ/bcJZ6lcVB79qC0hs1Rp/vutcbPevOuvBTK0gGg42EwqBA3tFRuDHaKM2iWoV4d1h37yDsLRoBSaPBYABD1rdEmE2CUoHSBpNoQsx6Mgset//g3wSVGoMIYtYZqLUYjJB3DloNWj8sKL1YdbMGjYDGKKKSN+Fg0qsAQA34eq+jX2bhu9EsSv6+QiWo3YIbvyV4kDz1XPhmcNqSvckf4RzIUIeBuqcAAAAASUVORK5CYII=');
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
`,We=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117];function Ze(e){let t=4294967295;const i=(new TextEncoder).encode(e);for(const e of i){t=t>>>8^We[255&(t^e)]}return t^=4294967295,t<0&&(t+=4294967296),t}function et(e){return Ze(e).toString(16)}function tt(e){return`${e.replaceAll(/[^A-Za-z]/g,"")}_${Ze(e).toString(16)}`}function it(e){return void 0===e.argumentIndex?e.name:`${e.name}[${e.argumentIndex}]`}function nt(e){const t=it(e);return`${t.replaceAll(/[^A-Za-z0-9]/g,"")}_${Ze("__func__"+t).toString(16)}`}function st(e){return nt({name:e})}const ot=`\n  uint h = seed0;\n  h ^= ${st("murmur_scramble")}(seed1);\n  h = (h << 13) | (h >> 19);\n  h = h * 5u + 0xe6546b64u;\n  h ^= ${st("murmur_scramble")}(seed2);\n  h = (h << 13) | (h >> 19);\n  h = h * 5u + 0xe6546b64u;\n  h ^= ${st("murmur_scramble")}(x);\n  h = (h << 13) | (h >> 19);\n  h = h * 5u + 0xe6546b64u;\n  h ^= ${st("murmur_scramble")}(y);\n  h = (h << 13) | (h >> 19);\n  h = h * 5u + 0xe6546b64u;\n  h ^= h >> 16;\n  h *= 0x85ebca6bu;\n  h ^= h >> 13;\n  h *= 0xc2b2ae35u;\n  h ^= h >> 16;\n  return h;\n`,at=`\n  if (source <= 0.) {\n    return source;\n  }\n  uint seed_x = uint(x + 65536.);\n  uint seed_y = uint(y + 65536.);\n  uint rand = ${st("murmur")}(seed_x, seed_y, seed, 0u, 2u);\n  return source - float(rand) / 65536. / 65536. * amplitude;\n`,rt=`\n  vec2 position = vec2(x + offset_x, y + offset_y) * input_scale;\n  vec2 floor_position = floor(position);\n  vec2 fract_position = position - floor(position);\n  uvec2 cell_position = uvec2(floor_position + vec2(65536, 65536));\n\n  uint dir1 = ${st("murmur")}(cell_position.x, cell_position.y, seed0, seed1, 0u) & 3u;\n  uint dir2 = ${st("murmur")}(cell_position.x + 1u, cell_position.y, seed0, seed1, 0u) & 3u;\n  uint dir3 = ${st("murmur")}(cell_position.x, cell_position.y + 1u, seed0, seed1, 0u) & 3u;\n  uint dir4 = ${st("murmur")}(cell_position.x + 1u, cell_position.y + 1u, seed0, seed1, 0u) & 3u;\n\n  vec2 gradient_vectors[4];\n  gradient_vectors[0] = vec2(1.0, 1.0);\n  gradient_vectors[1] = vec2(-1.0, 1.0);\n  gradient_vectors[2] = vec2(1.0, -1.0);\n  gradient_vectors[3] = vec2(-1.0, -1.0);\n\n  float value1 = dot(gradient_vectors[dir1], fract_position);\n  float value2 = dot(gradient_vectors[dir2], fract_position - vec2(1., 0.));\n  float value3 = dot(gradient_vectors[dir3], fract_position - vec2(0., 1.));\n  float value4 = dot(gradient_vectors[dir4], fract_position - vec2(1., 1.));\n\n  float fx = fract_position.x;\n  float fy = fract_position.y;\n  float fade_x = fx * fx * fx * (fx * (fx * 6.0 - 15.0) + 10.0);\n  float fade_y = fy * fy * fy * (fy * (fy * 6.0 - 15.0) + 10.0);\n\n  float result = mix(mix(value1, value2, fade_x), mix(value3, value4, fade_x), fade_y);\n  return result * 2. * output_scale;\n`,lt=`\n  float result = 0.;\n  float total_weight = 0.;\n  for (uint i = 0u; i < octaves; i++) {\n    result = result * persistence + \n      ${st("basis_noise")}(x, y, seed0, seed1 + i, input_scale, output_scale, offset_x, offset_y);\n    total_weight = total_weight * persistence * persistence + 1.;\n    seed1 = ${st("murmur_scramble")}(seed1);\n    input_scale = input_scale / 2.;\n  }\n  return result / sqrt(total_weight);\n`,pt=`\n  float result = 0.;\n  float multiplier = 1.;\n  for (uint i = 0u; i < octaves; i++) {\n    result += multiplier * \n      ${st("basis_noise")}(x, y, seed0, seed1, input_scale, output_scale, offset_x, offset_y);\n    seed1 = ${st("murmur_scramble")}(seed1);\n    input_scale *= octave_input_scale_multiplier;\n    multiplier *= octave_output_scale_multiplier;\n  }\n  return result;\n`,ct=`\n  float result = 0.;\n  float total_weight = 1.;\n  for (uint i = 0u; i < octaves; i++) {\n    input_scale = input_scale / 2.;\n    total_weight *= 2.;\n    result = result * persistence + \n      ${st("basis_noise")}(x, y, seed0, seed1, input_scale, output_scale, offset_x, offset_y);\n  }\n  return result * total_weight;\n`,dt=`\n  uint rand_x = ${st("murmur")}(uint(cell_position.x + 65536), uint(cell_position.y + 65536), seed0, seed1, 1u);\n  uint rand_y = ${st("murmur")}(uint(cell_position.x + 65536), uint(cell_position.y + 65536), seed0, seed1, 2u);\n  vec2 offset = vec2(float(rand_x) / 65536. / 65536., float(rand_y) / 65536. / 65536.);\n  return mix(vec2(0.5), offset, jitter);\n`,ut=`\n  vec2 position = vec2(x, y) / grid_size;\n  vec2 floor_position = floor(position);\n  vec2 fract_position = position - floor(position);\n  ivec2 cell_position = ivec2(floor_position);\n  float result = 10.;\n  for (int dx = -1; dx <= 1; dx++) {\n    for (int dy = -1; dy <= 1; dy++) {\n      vec2 cell = ${st("voronoi_cell_offset")}(cell_position + ivec2(dx, dy), seed0, seed1, jitter)\n        + vec2(float(dx), float(dy));\n      vec2 distance_vect = abs(cell - fract_position);\n      float distance = 65536.;\n      if (distance_type == 0u || distance_type == 1983611757u) {\n        distance = max(distance_vect.x, distance_vect.y);\n      } else if (distance_type == 1u || distance_type == 2907822068u) {\n        distance = distance_vect.x + distance_vect.y;\n      } else if (distance_type == 2u || distance_type == 1773386994u) {\n        distance = length(distance_vect);\n      } else if (distance_type == 3u || distance_type == 4281622980u) {\n        distance = pow(pow(distance_vect.x, 3.) + pow(distance_vect.y, 3.), 1./3.);\n      }\n      result = min(result, distance);\n    }\n  }\n  return result;\n`,ht=`\n  vec2 position = vec2(x, y) / grid_size;\n  vec2 floor_position = floor(position);\n  vec2 fract_position = position - floor(position);\n  ivec2 cell_position = ivec2(floor_position);\n  float nearest = 65536.;\n  float second_nearest = 65536.;\n  for (int dx = -1; dx <= 1; dx++) {\n    for (int dy = -1; dy <= 1; dy++) {\n      vec2 cell = ${st("voronoi_cell_offset")}(cell_position + ivec2(dx, dy), seed0, seed1, jitter)\n        + vec2(float(dx), float(dy));\n      vec2 distance_vect = abs(cell - fract_position);\n      float distance = 65536.;\n      if (distance_type == 0u || distance_type == 1983611757u) {\n        distance = max(distance_vect.x, distance_vect.y);\n      } else if (distance_type == 1u || distance_type == 2907822068u) {\n        distance = distance_vect.x + distance_vect.y;\n      } else if (distance_type == 2u || distance_type == 1773386994u) {\n        distance = length(distance_vect);\n      } else if (distance_type == 3u || distance_type == 4281622980u) {\n        distance = pow(pow(distance_vect.x, 3.) + pow(distance_vect.y, 3.), 1./3.);\n      }\n      if (distance < nearest) {\n        second_nearest = nearest;\n        nearest = distance;\n      } else if (distance < second_nearest) {\n        second_nearest = distance;\n      }\n    }\n  }\n  return second_nearest - nearest;\n`,ft=`\n  vec2 position = vec2(x, y) / grid_size;\n  vec2 floor_position = floor(position);\n  vec2 fract_position = position - floor(position);\n  ivec2 cell_position = ivec2(floor_position);\n\n  float nearest_cell_distance = 65536.;\n  ivec2 nearest_cell = ivec2(0, 0);\n  for (int dx = -1; dx <= 1; dx++) {\n    for (int dy = -1; dy <= 1; dy++) {\n      vec2 cell = ${st("voronoi_cell_offset")}(cell_position + ivec2(dx, dy), seed0, seed1, jitter)\n        + vec2(float(dx), float(dy));\n      vec2 distance_vect = abs(cell - fract_position);\n      float distance = 65536.;\n      if (distance_type == 0u || distance_type == 1983611757u) {\n        distance = max(distance_vect.x, distance_vect.y);\n      } else if (distance_type == 1u || distance_type == 2907822068u) {\n        distance = distance_vect.x + distance_vect.y;\n      } else if (distance_type == 2u || distance_type == 1773386994u) {\n        distance = length(distance_vect);\n      }\n      if (distance < nearest_cell_distance) {\n        nearest_cell_distance = distance;\n        nearest_cell = ivec2(dx, dy);\n      }\n    }\n  }\n\n  float result = 65536.;\n  vec2 nearest_vect = ${st("voronoi_cell_offset")}(cell_position + nearest_cell, seed0, seed1, jitter)\n    + vec2(nearest_cell) - fract_position;\n  for (int dx = nearest_cell.x - 1; dx <= nearest_cell.x + 1; dx++) {\n    for (int dy = nearest_cell.y - 1; dy <= nearest_cell.y + 1; dy++) {\n      if (dx == nearest_cell.x && dy == nearest_cell.y) {\n        continue;\n      }\n      vec2 cell = ${st("voronoi_cell_offset")}(cell_position + ivec2(dx, dy), seed0, seed1, jitter)\n        + vec2(float(dx), float(dy));\n      vec2 distance_vect = cell - fract_position;\n      float distance = 65536.;\n      if (distance_type == 0u || distance_type == 1983611757u) {\n        distance = ${st("manhattan_dist")}(\n          distance_vect + vec2(distance_vect.y, -distance_vect.x),\n          nearest_vect + vec2(nearest_vect.y, -nearest_vect.x)) / sqrt(2.);\n      } else if (distance_type == 1u || distance_type == 2907822068u) {\n        distance = ${st("manhattan_dist")}(distance_vect, nearest_vect);\n      } else if (distance_type == 2u || distance_type == 1773386994u) {\n        distance = dot(-(distance_vect + nearest_vect) * 0.5, normalize(nearest_vect - distance_vect));\n      }\n      result = min(result, distance);\n    }\n  }\n\n  return result;\n`,mt=`\n  vec2 position = vec2(x, y) / grid_size;\n  vec2 floor_position = floor(position);\n  vec2 fract_position = position - floor(position);\n  ivec2 cell_position = ivec2(floor_position);\n  float result = 10.;\n  float cell_id = -1.;\n  for (int dx = -1; dx <= 1; dx++) {\n    for (int dy = -1; dy <= 1; dy++) {\n      vec2 cell = ${st("voronoi_cell_offset")}(cell_position + ivec2(dx, dy), seed0, seed1, jitter)\n        + vec2(float(dx), float(dy));\n      vec2 distance_vect = abs(cell - fract_position);\n      float distance = 65536.;\n      if (distance_type == 0u || distance_type == 1983611757u) {\n        distance = max(distance_vect.x, distance_vect.y);\n      } else if (distance_type == 1u || distance_type == 2907822068u) {\n        distance = distance_vect.x + distance_vect.y;\n      } else if (distance_type == 2u || distance_type == 1773386994u) {\n        distance = length(distance_vect);\n      } else if (distance_type == 3u || distance_type == 4281622980u) {\n        distance = pow(pow(distance_vect.x, 3.) + pow(distance_vect.y, 3.), 1./3.);\n      }\n      if (distance < result) {\n        result = distance;\n        cell_id = float(${st("murmur")}(\n          uint(int(cell_position.x) + dx), uint(int(cell_position.y) + dy), seed0, seed1, 3u)\n                       ) / 65536. / 65536.;\n      }\n      result = min(result, distance);\n    }\n  }\n  return cell_id;\n`,gt=`\n  // TODO: Make grid centered on (0,0)\n\n  float result = basement_value;\n\n  struct CandidatePoint {\n    float x, y;\n    float quantity;\n    float radius;\n    float favorability;\n    int overlaps;\n  };\n\n  candidate_point_count = min(candidate_point_count, 64u);\n  for (int dx = -1; dx <= 1; dx++) {\n    for (int dy = -1; dy <= 1; dy++) {\n      ivec2 cell_position = ivec2(floor(vec2(x, y) / region_size) + vec2(dx, dy));\n\n      CandidatePoint points[64];\n      float total_density = 0.;\n      for (uint i = 0u; i < candidate_point_count; i++) {\n        uint rand_x = ${st("murmur")}(\n          uint(cell_position.x + 65536), uint(cell_position.y + 65536), seed0, seed1, 11u + 2u*i);\n        uint rand_y = ${st("murmur")}(\n          uint(cell_position.x + 65536), uint(cell_position.y + 65536), seed0, seed1, 12u + 2u*i);\n        points[i].x = floor((float(cell_position.x) + float(rand_x) / 65536. / 65536.) * region_size);\n        points[i].y = floor((float(cell_position.y) + float(rand_y) / 65536. / 65536.) * region_size);\n        vec2 lookup_position = (vec2(points[i].x, points[i].y) - u_${tt("__shift__")})\n          / u_${tt("__size__")} / u_${tt("__scale__")}\n          + vec2(0.5, 0.5);\n        points[i].quantity = texture(spot_quantity, lookup_position).r;\n        points[i].radius = texture(spot_radius, lookup_position).r;\n        points[i].favorability = texture(spot_favorability, lookup_position).r;\n        points[i].overlaps = 0;\n        total_density += texture(density, lookup_position).r;\n      }\n\n      float remaining_quantity = total_density * region_size * region_size / float(candidate_point_count);\n      uint considered_spots = 0u;\n      for (uint i = 0u; i < candidate_point_count; i++) {\n        if (u_${tt("__fast_spot_noise__")} == 0u) {\n          uint best = i;\n          for (uint j = i + 1u; j < candidate_point_count; j++) {\n            if (points[j].overlaps != points[best].overlaps \n                  ? points[j].overlaps < points[best].overlaps\n                  : points[j].favorability > points[best].favorability\n                ) {\n              best = j;\n            }\n          }\n          CandidatePoint best_point = points[best];\n          points[best] = points[i];\n          points[i] = best_point;\n          for (uint j = i + 1u; j < candidate_point_count; j++) {\n            if (\n              suggested_minimum_candidate_point_spacing > 0. && \n              length(vec2(points[i].x, points[i].y) - vec2(points[j].x, points[j].y)) <= \n                suggested_minimum_candidate_point_spacing) {\n              points[j].overlaps ++;\n            }\n          }\n        }\n\n        if (i % skip_span != skip_offset) {\n          continue;\n        }\n\n        float quantity = points[i].quantity;\n        if (hard_region_target_quantity) {\n          quantity = min(quantity, remaining_quantity);\n        }\n        remaining_quantity -= points[i].quantity;\n        float height = 3. * quantity / 3.14159265358979323844 / points[i].radius / points[i].radius;\n\n        float dist = length(vec2(x,y) - vec2(points[i].x, points[i].y));\n        if (dist <= maximum_spot_basement_radius) {\n          result = max(result, height * (1. - dist / points[i].radius));\n        }\n\n        considered_spots++;\n        if (remaining_quantity <= 0. || considered_spots >= candidate_point_count) {\n          break;\n        }\n      }\n    }\n  }\n\n  return result;\n`,At=`\n  vec2 coord = v_texCoords + vec2(offset_x, offset_y) / u_${tt("__scale__")};\n  return texture(arg_0, coord / u_${tt("__size__")}).r;\n`;const vt=function(){const e=new Map,t=(t,i,n,s,o,a)=>{const r=n.filter(e=>!e.ignored).map(e=>`${e.type} ${e.name}`),l=new Map((o||[]).map(e=>[e,{name:e}])),p={name:t,argumentIndex:a};e.set(it(p),{id:p,valueType:i,args:n,definition:"".concat(`${i} ${nt(p)}(${r.join(", ")}) {\n`,s,"}\n\n"),dependencies:{functions:l,constants:new Set,expressions:new Set},sourceMap:{expression:{text:"",tokens:[]},localExpressions:new Map}})},i=(e,i,n)=>{t(e,"float",i.map(e=>({name:e,type:"float"})),`  return ${n};\n`)};return i("abs",["a"],"abs(a)"),i("min",["a","b"],"min(a, b)"),i("max",["a","b"],"max(a, b)"),i("clamp",["x","min","max"],"clamp(x, min, max)"),i("ridge",["x","min","max"],"min + mod(x, max - min)"),i("floor",["x"],"floor(x)"),i("log2",["x"],"log2(x)"),i("pow",["x","y"],"pow(x, y)"),i("sqrt",["x"],"sqrt(x)"),i("sin",["x"],"sin(x)"),i("cos",["x"],"cos(x)"),t("if","float",[{name:"cond",type:"bool"},{name:"if_true",type:"float"},{name:"if_false",type:"float"}],"  return cond ? if_true : if_false;\n",[]),t("distance_from_nearest_point","float",[{name:"x",type:"float"},{name:"y",type:"float"},{name:"points",type:"vec2"},{name:"max_distance",type:"float",default:"intBitsToFloat(2139095039)"}],"  return min(max_distance, length(vec2(x, y) - points));\n"),t("distance_from_nearest_point_x","float",[{name:"x",type:"float"},{name:"y",type:"float"},{name:"points",type:"vec2"}],"  return x - points.x;\n"),t("distance_from_nearest_point_y","float",[{name:"x",type:"float"},{name:"y",type:"float"},{name:"points",type:"vec2"}],"  return y - points.y;\n"),t("expression_in_range","float",[{name:"angle",type:"float"},{name:"max_value",type:"float"},{name:"a",type:"float"},{name:"b",type:"float"},{name:"a_min",type:"float"},{name:"b_min",type:"float"},{name:"a_max",type:"float"},{name:"b_max",type:"float"}],"\n  float a_value = min(a - a_min, a_max - a);\n  float b_value = min(b - b_min, b_max - b);\n  float value = min(a_value, b_value);\n  return min(value * angle, max_value);\n"),t("terrace","float",[{name:"value",type:"float"},{name:"strength",type:"float"},{name:"offset",type:"float"},{name:"width",type:"float"}],"\n  float fract_value = mod(value - offset, width);\n  float floor_value = value - fract_value;\n  return strength >= 1. \n    ? floor_value\n    : floor_value + max(0., width - (width - fract_value) / (1. - strength));\n"),t("murmur_scramble","uint",[{name:"k",type:"uint"}],"\n  k *= 0xcc9e2d51u;\n  k = (k << 15) | (k >> 17);\n  k *= 0x1b873593u;\n  return k;\n"),t("murmur","uint",[{name:"x",type:"uint"},{name:"y",type:"uint"},{name:"seed0",type:"uint"},{name:"seed1",type:"uint"},{name:"seed2",type:"uint"}],ot,["murmur_scramble"]),t("random_penalty","float",[{name:"x",type:"float"},{name:"y",type:"float"},{name:"source",type:"float"},{name:"seed",type:"uint",default:"1"},{name:"amplitude",type:"float",default:"1."}],at,["murmur"]),t("basis_noise","float",[{name:"x",type:"float"},{name:"y",type:"float"},{name:"seed0",type:"uint"},{name:"seed1",type:"uint"},{name:"input_scale",type:"float",default:"1."},{name:"output_scale",type:"float",default:"1."},{name:"offset_x",type:"float",default:"0."},{name:"offset_y",type:"float",default:"0."}],rt,["murmur"]),t("multioctave_noise","float",[{name:"x",type:"float"},{name:"y",type:"float"},{name:"persistence",type:"float"},{name:"seed0",type:"uint"},{name:"seed1",type:"uint"},{name:"octaves",type:"uint"},{name:"input_scale",type:"float",default:"1."},{name:"output_scale",type:"float",default:"1."},{name:"offset_x",type:"float",default:"0."},{name:"offset_y",type:"float",default:"0."}],lt,["basis_noise"]),t("quick_multioctave_noise","float",[{name:"x",type:"float"},{name:"y",type:"float"},{name:"seed0",type:"uint"},{name:"seed1",type:"uint"},{name:"octaves",type:"uint"},{name:"input_scale",type:"float",default:"1."},{name:"output_scale",type:"float",default:"1."},{name:"octave_input_scale_multiplier",type:"float",default:"0.5"},{name:"octave_output_scale_multiplier",type:"float",default:"2."},{name:"offset_x",type:"float",default:"0."},{name:"offset_y",type:"float",default:"0."}],pt,["basis_noise"]),t("variable_persistence_multioctave_noise","float",[{name:"x",type:"float"},{name:"y",type:"float"},{name:"persistence",type:"float"},{name:"seed0",type:"uint"},{name:"seed1",type:"uint"},{name:"octaves",type:"uint"},{name:"input_scale",type:"float",default:"1."},{name:"output_scale",type:"float",default:"1."},{name:"offset_x",type:"float",default:"0."},{name:"offset_y",type:"float",default:"0."}],ct,["basis_noise"]),t("voronoi_cell_offset","vec2",[{name:"cell_position",type:"ivec2"},{name:"seed0",type:"uint"},{name:"seed1",type:"uint"},{name:"jitter",type:"float",default:"0.5"}],dt,["murmur"]),t("voronoi_spot_noise","float",[{name:"x",type:"float"},{name:"y",type:"float"},{name:"seed0",type:"uint"},{name:"seed1",type:"uint"},{name:"grid_size",type:"float"},{name:"distance_type",type:"uint"},{name:"jitter",type:"float",default:"0.5"}],ut,["voronoi_cell_offset"]),t("voronoi_facet_noise","float",[{name:"x",type:"float"},{name:"y",type:"float"},{name:"seed0",type:"uint"},{name:"seed1",type:"uint"},{name:"grid_size",type:"float"},{name:"distance_type",type:"uint"},{name:"jitter",type:"float",default:"0.5"}],ht,["voronoi_cell_offset"]),t("manhattan_dist","float",[{name:"v1",type:"vec2"},{name:"v2",type:"vec2"}],"\n  vec2 diff = abs(v1 - v2);\n  if (diff.x < diff.y) {\n    v1 = v1.yx;\n    v2 = v2.yx;\n  }\n  if (v1.x > v2.x) {\n    vec2 tmp = v1;\n    v1 = v2;\n    v2 = tmp;\n  }\n  if (v1.y > v2.y) {\n    v1.y = -v1.y;\n    v2.y = -v2.y;\n  }\n  if (v1.y > 0.) {\n    return abs(v2.y + v2.x - v1.y + v1.x) * 0.5;\n  } else if (v2.y < 0.) {\n    return abs(v2.y - v2.x - v1.y - v1.x) * 0.5;\n  } else {\n    return abs(v1.x + v1.y + v2.x + v2.y) * 0.5;\n  }\n"),t("voronoi_pyramid_noise","float",[{name:"x",type:"float"},{name:"y",type:"float"},{name:"seed0",type:"uint"},{name:"seed1",type:"uint"},{name:"grid_size",type:"float"},{name:"distance_type",type:"uint"},{name:"jitter",type:"float",default:"0.5"}],ft,["voronoi_cell_offset","manhattan_dist"]),t("voronoi_cell_id","float",[{name:"x",type:"float"},{name:"y",type:"float"},{name:"seed0",type:"uint"},{name:"seed1",type:"uint"},{name:"grid_size",type:"float"},{name:"distance_type",type:"uint"},{name:"jitter",type:"float",default:"0.5"}],mt,["voronoi_cell_offset"]),t("spot_noise","float",[{name:"x",type:"float"},{name:"y",type:"float"},{name:"density_expression",type:"float"},{name:"spot_quantity_expression",type:"float",ignored:!0},{name:"spot_radius_expression",type:"float",ignored:!0},{name:"spot_favorability_expression",type:"float",ignored:!0},{name:"seed0",type:"uint",ignored:!0},{name:"seed1",type:"uint",ignored:!0},{name:"basement_value",type:"float",ignored:!0},{name:"maximum_spot_basement_radius",type:"float",ignored:!0},{name:"region_size",type:"float",ignored:!0},{name:"skip_offset",type:"uint",ignored:!0},{name:"skip_span",type:"uint",ignored:!0},{name:"hard_region_target_quantity",type:"bool",ignored:!0},{name:"candidate_point_count",type:"uint",ignored:!0},{name:"candidate_spot_count",type:"uint",ignored:!0},{name:"suggested_minimum_candidate_point_spacing",type:"float",ignored:!0}],"return density_expression;",[],0),t("spot_noise","float",[{name:"x",type:"float"},{name:"y",type:"float"},{name:"density_expression",type:"float",ignored:!0},{name:"spot_quantity_expression",type:"float"},{name:"spot_radius_expression",type:"float",ignored:!0},{name:"spot_favorability_expression",type:"float",ignored:!0},{name:"seed0",type:"uint",ignored:!0},{name:"seed1",type:"uint",ignored:!0},{name:"basement_value",type:"float",ignored:!0},{name:"maximum_spot_basement_radius",type:"float",ignored:!0},{name:"region_size",type:"float",ignored:!0},{name:"skip_offset",type:"uint",ignored:!0},{name:"skip_span",type:"uint",ignored:!0},{name:"hard_region_target_quantity",type:"bool",ignored:!0},{name:"candidate_point_count",type:"uint",ignored:!0},{name:"candidate_spot_count",type:"uint",ignored:!0},{name:"suggested_minimum_candidate_point_spacing",type:"float",ignored:!0}],"return spot_quantity_expression;",[],1),t("spot_noise","float",[{name:"x",type:"float"},{name:"y",type:"float"},{name:"density_expression",type:"float",ignored:!0},{name:"spot_quantity_expression",type:"float",ignored:!0},{name:"spot_radius_expression",type:"float"},{name:"spot_favorability_expression",type:"float",ignored:!0},{name:"seed0",type:"uint",ignored:!0},{name:"seed1",type:"uint",ignored:!0},{name:"basement_value",type:"float",ignored:!0},{name:"maximum_spot_basement_radius",type:"float",ignored:!0},{name:"region_size",type:"float",ignored:!0},{name:"skip_offset",type:"uint",ignored:!0},{name:"skip_span",type:"uint",ignored:!0},{name:"hard_region_target_quantity",type:"bool",ignored:!0},{name:"candidate_point_count",type:"uint",ignored:!0},{name:"candidate_spot_count",type:"uint",ignored:!0},{name:"suggested_minimum_candidate_point_spacing",type:"float",ignored:!0}],"return spot_radius_expression;",[],2),t("spot_noise","float",[{name:"x",type:"float"},{name:"y",type:"float"},{name:"density_expression",type:"float",ignored:!0},{name:"spot_quantity_expression",type:"float",ignored:!0},{name:"spot_radius_expression",type:"float",ignored:!0},{name:"spot_favorability_expression",type:"float"},{name:"seed0",type:"uint",ignored:!0},{name:"seed1",type:"uint",ignored:!0},{name:"basement_value",type:"float",ignored:!0},{name:"maximum_spot_basement_radius",type:"float",ignored:!0},{name:"region_size",type:"float",ignored:!0},{name:"skip_offset",type:"uint",ignored:!0},{name:"skip_span",type:"uint",ignored:!0},{name:"hard_region_target_quantity",type:"bool",ignored:!0},{name:"candidate_point_count",type:"uint",ignored:!0},{name:"candidate_spot_count",type:"uint",ignored:!0},{name:"suggested_minimum_candidate_point_spacing",type:"float",ignored:!0}],"return spot_favorability_expression;",[],3),t("spot_noise","float",[{name:"x",type:"float"},{name:"y",type:"float"},{name:"density_expression",type:"float",ignored:!0},{name:"spot_quantity_expression",type:"float",ignored:!0},{name:"spot_radius_expression",type:"float",ignored:!0},{name:"spot_favorability_expression",type:"float",ignored:!0},{name:"seed0",type:"uint"},{name:"seed1",type:"uint"},{name:"basement_value",type:"float"},{name:"maximum_spot_basement_radius",type:"float"},{name:"region_size",type:"float",default:"512."},{name:"skip_offset",type:"uint",default:"0u"},{name:"skip_span",type:"uint",default:"1u"},{name:"hard_region_target_quantity",type:"bool",default:"true"},{name:"candidate_point_count",type:"uint",default:"256u"},{name:"candidate_spot_count",type:"uint",default:"256u"},{name:"suggested_minimum_candidate_point_spacing",type:"float",default:"0."},{name:"density",type:"sampler2D",evalFunction:e.get("spot_noise[0]")},{name:"spot_quantity",type:"sampler2D",evalFunction:e.get("spot_noise[1]")},{name:"spot_radius",type:"sampler2D",evalFunction:e.get("spot_noise[2]")},{name:"spot_favorability",type:"sampler2D",evalFunction:e.get("spot_noise[3]")}],gt,["murmur"]),t("multisample","float",[{name:"expression",type:"float"},{name:"offset_x",type:"int",ignored:!0},{name:"offset_y",type:"int",ignored:!0}],"  return expression;\n",[],0),t("multisample","float",[{name:"expression",type:"float",ignored:!0},{name:"offset_x",type:"int"},{name:"offset_y",type:"int"},{name:"arg_0",type:"sampler2D",evalFunction:e.get("multisample[0]")}],At),e}();function yt(e){let t=`${e.type} ${et(e.value)}`;return void 0!==e.args&&(t+=`(${e.args.map(e=>yt(e)).join(",")})`),void 0!==e.kwargs&&(t+=`(${Array.from(e.kwargs).map(([e,t])=>`${e} = ${yt(t)}`).join(",")})`),et(t)}class _t{constructor(e){this.str=e,this.position=0}parse(){const e=this.str.length,t=[];for(;this.position<e;){const e=this.str.charAt(this.position);if(e.match(/[ \r\n\t]/))this.position++;else if(e.match(/[a-zA-Z_]/))t.push(this.parseIdentifier());else if(e.match(/[0-9.]/))t.push(this.parseNumber());else if(e.match(/['"]/))t.push(this.parseString());else if(e.match(/[-+^*/%<>=!~&|]/))t.push(this.parseOperator());else{if(!e.match(/[(){},]/))throw`Unexpected character: '${e}' at ${this.position}`;t.push({type:"separator",value:e,position:this.position}),this.position++}}return t}parseIdentifier(){const e=this.position;return{type:"identifier",value:this.readMatching(/[a-zA-Z0-9_:]/),position:e}}parseNumber(){const e=this.position;let t;if("0"==this.str.charAt(this.position)&&"x"==this.str.charAt(this.position+1)?t=this.readMatching(/[0-9a-fx]/):(t=this.readMatching(/[0-9.]/),"e"==this.str.charAt(this.position)&&(t+=this.str.charAt(this.position++),"-"==this.str.charAt(this.position)&&(t+=this.str.charAt(this.position++)),t+=this.readMatching(/[0-9]/))),!t.match(/^(0x[0-9a-f]+|([0-9]+\.?[0-9]*|\.[0-9]+)(e-?[0-9]+)?)$/))throw"Invalid number: "+t;return{type:"number",value:t,position:e}}parseString(){const e=this.position,t=this.str.charAt(this.position++),i=this.readMatching("'"==t?/[^']/:/[^"]/);if(this.str.charAt(this.position++)!=t)throw"Unmatched quote";return{type:"string",value:i,position:e+1}}parseOperator(){const e=this.position;return"="==this.str.charAt(this.position)?{type:"operator",value:this.readMatching(/[=]/),position:e}:{type:"operator",value:this.readMatching(/[-+^*/%<>=!~&|]/),position:e}}readMatching(e){let t="";for(;;){const i=this.str.charAt(this.position);if(!i.match(e))return t;t+=i,this.position++}}}const xt=[["^"],["++","--","~~"],["*","/","%","%%"],["+","-"],["<","<=",">",">="],["==","~=","!="],["&"],["~"],["|"]],bt=(()=>{const e=new Map;return xt.forEach((t,i)=>{t.forEach(t=>{e.set(t,i)})}),e})();class Et{constructor(e){this.tokens=function(e){return new _t(e).parse()}(`(${e})`),this.tokens.forEach(e=>{e.position--}),this.pos=0}parse(){return this.parseExpression()}parseExpression(){let e=!0;const t=[],i=[],n=e=>{for(;i.length>0&&bt.get(i[i.length-1])<=e;){const e=i.pop(),n=[];n.push(t.pop()),"++"!=e&&"--"!=e&&"~~"!=e&&n.unshift(t.pop()),t.push({type:"operator",value:e,args:n,position:n[0].position,length:n[n.length-1].position-n[0].position+n[n.length-1].length})}};for(;;){const s=this.tokens[this.pos++];switch(s?.type){case"number":if(!e)throw`Unexpected value: "${s.value}" at ${s.position}`;e=!1,t.push({type:"number_constant",value:s.value,position:s.position,length:s.value.length});break;case"string":if(!e)throw`Unexpected value: "${s.value}" at ${s.position}`;e=!1,t.push({type:"string_constant",value:s.value,position:s.position,length:s.value.length});break;case"operator":{let t=s.value;if(e){if("+"!=t&&"-"!=t&&"~"!=t)throw`Expected value, got "${t}" instead at ${s.position}`;t+=t}e=!0,"^"!=t&&n(bt.get(t)),i.push(t);break}case"identifier":if(!e)throw"Unexpected value: `"+s.value+"`";if(e=!1,"("==this.tokens[this.pos].value){this.pos++,t.push({type:"function",value:s.value,args:this.parseArgs(),position:s.position,length:s.value.length});const e=this.tokens[this.pos++].value;if(")"!=e)throw"Unexpected token: `"+e+"`, expected `)`";if("var"==s.value){const e=t.pop();if(1!=e.args.length)throw`Unexpected number of arguments for "var" at ${s.position}`;const i=e.args[0];if("string_constant"!=i.type)throw`Unexpected type of argument for "var" at ${s.position}`;t.push({type:"variable",value:i.value,position:i.position,length:i.length})}if("min"==s.value||"max"==s.value){const e=t[t.length-1];for(;e.args.length>2;){const t=e.args.shift(),i=e.args.shift();e.args.push({type:"function",value:s.value,args:[t,i],position:s.position,length:s.value.length})}}}else if("{"==this.tokens[this.pos].value){this.pos++,t.push({type:"function",value:s.value,kwargs:this.parseKwArgs(),position:s.position,length:s.value.length});const e=this.tokens[this.pos++].value;if("}"!=e)throw"Unexpected token: `"+e+"`, expected `}`"}else t.push({type:"variable",value:s.value,position:s.position,length:s.value.length});break;case void 0:case"separator":if(void 0===s||")"==s.value||"}"==s.value||","==s.value){if(e)throw"Unexpected token: `"+s.value+"`, expected value";if(this.pos--,n(1e3),1!=t.length)throw"Internal parsing error: mismatch between the number of values and operators";return t[0]}if("("!=s.value)throw"Unexpected token: `"+s.value+"`";{if(!e)throw"Unexpected token: `(`, expected operator";e=!1,t.push(this.parseExpression());const i=this.tokens[this.pos++].value;if(")"!=i)throw"Unexpected token: `"+i+"`, expected `)`"}}}}parseArgs(){const e=[];if(")"==this.tokens[this.pos].value)return e;for(;;){e.push(this.parseExpression());const t=this.tokens[this.pos].value;if(")"==t)return e;if(","!=t)throw"Unexpected token: `"+t+"`, expected )";this.pos++}}parseKwArgs(){const e=new Map;if("}"==this.tokens[this.pos].value)return e;for(;;){const t=this.tokens[this.pos++];if("identifier"!=t.type)throw"Unexpected token: `"+t.value+"`, expected identifier";const i=this.tokens[this.pos++];if("="!=i.value)throw"Unexpected token: `"+i.value+"`, expected =";const n=this.parseExpression();e.set(t.value,n);const s=this.tokens[this.pos].value;if("}"==s)return e;if(","!=s)throw"Unexpected token: `"+s+"`, expected }";this.pos++}}}function wt(e){return new Et(e).parse()}class $t{constructor(e,t,i){this.valueType=e,this.value=t,this.source=i}castTo(e){return e===this.valueType?this.value:`${e}(${this.value})`}}const Ct=function(){const e=new Map,t=(t,i,n,s)=>{e.set(t,{args:n,compile:e=>new $t(i,s(e),"evaluation_result")})};return t("^","float",["float","float"],e=>`pow(${e[0]}, ${e[1]})`),t("++","float",["float"],e=>e[0]),t("--","float",["float"],e=>`-(${e[0]})`),t("~~","bool",["bool"],e=>`!(${e[0]})`),t("*","float",["float","float"],e=>`(${e[0]}) * (${e[1]})`),t("/","float",["float","float"],e=>`(${e[0]}) / (${e[1]})`),t("%","float",["float","float"],e=>`mod(${e[0]}, ${e[1]})`),t("+","float",["float","float"],e=>`(${e[0]}) + (${e[1]})`),t("-","float",["float","float"],e=>`(${e[0]}) - (${e[1]})`),t("<","bool",["float","float"],e=>`(${e[0]}) < (${e[1]})`),t("<=","bool",["float","float"],e=>`(${e[0]}) <= (${e[1]})`),t(">","bool",["float","float"],e=>`(${e[0]}) > (${e[1]})`),t(">=","bool",["float","float"],e=>`(${e[0]}) >= (${e[1]})`),t("==","bool",["float","float"],e=>`(${e[0]}) == (${e[1]})`),t("~=","bool",["float","float"],e=>`(${e[0]}) != (${e[1]})`),t("!=","bool",["float","float"],e=>`(${e[0]}) != (${e[1]})`),t("&","uint",["uint","uint"],e=>`(${e[0]}) & (${e[1]})`),t("~","uint",["uint","uint"],e=>`(${e[0]}) ^ (${e[1]})`),t("|","uint",["uint","uint"],e=>`(${e[0]}) | (${e[1]})`),e}(),Rt=new Map([["true",new $t("int","1","const")],["false",new $t("int","0","const")],["e",new $t("float","2.71828182845904523536","const")],["pi",new $t("float","3.14159265358979323844","const")],["inf",new $t("float","intBitsToFloat(2139095039)","const")]]);class Tt{constructor(e,t){this.dataRaw=e;const i=e.planet[t].map_gen_settings;this.propertyExpressionNames=new Map(Object.entries(i?.property_expression_names??{})),this.environmentVariables=new Map([["map_seed","uint"],["map_seed_normalized","float"],["map_seed_small","uint"],["starting_area_radius","float"],["cliff_elevation_0","float"],["cliff_elevation_interval","float"],["cliff_smoothing","float"],["cliff_richness","float"],["starting_positions","vec2"],["starting_lake_positions","vec2"],["control:moisture:frequency","float"],["control:moisture:bias","float"],["control:aux:frequency","float"],["control:aux:bias","float"],["control:temperature:frequency","float"],["control:temperature:bias","float"]]),Object.entries(e["autoplace-control"]).forEach(([e,t])=>{this.environmentVariables.set(`control:${e}:frequency`,"float"),this.environmentVariables.set(`control:${e}:size`,"float"),this.environmentVariables.set(`control:${e}:richness`,"float")}),this.compiledFunctions=new Map}addToCompiled(e){const t=it(e.id);this.compiledFunctions.has(t)||(this.compiledFunctions.set(t,e),e.args.forEach(e=>{void 0!==e.evalFunction&&this.addToCompiled(e.evalFunction)}))}getFunction(e){const t=it(e);if(this.dataRaw["noise-function"].hasOwnProperty(e.name)){if(!this.compiledFunctions.has(t)){const t=this.dataRaw["noise-function"][e.name];this.addToCompiled(this.compileNoiseFunction(e,wt(t.expression),t.parameters,new Map(Object.entries(t.local_expressions||{}))))}return this.compiledFunctions.get(t)}if(vt.has(t))return vt.get(t);throw`Could not find function named ${t}`}getGlobalVariable(e,t){if(this.propertyExpressionNames.has(e)){const i=this.propertyExpressionNames.get(e);return"number"==typeof i?new $t("float",`float(${i})`,"const"):"boolean"==typeof i?new $t("bool",i.toString(),"const"):this.getGlobalVariable(i,t)}if(this.dataRaw["noise-expression"].hasOwnProperty(e))return t.expressions.add(e),new $t("float",`texelFetch(tex_${tt(e)}, ivec2(v_texCoords), 0).r`,"named_expression");if("x"===e||"y"===e)return new $t("float",`round(v_mapCoords.${e})`,"global_variable");if(Rt.has(e))return Rt.get(e);if(this.environmentVariables.has(e))return t.constants.add(e),new $t(this.environmentVariables.get(e),`u_${tt(e)}`,"global_variable");throw`Unknown variable ${e}`}getLocalVariable(e,t){const i=t.args.find(t=>t.name==e);if(void 0!==i)return i.ignored=!1,new $t("float",tt(e),"function_arg");const n=t.localVariables.find(t=>t.name===e);if(void 0!==n)return new $t(n.value.valueType,tt(e),n.value.source);if(t.localExpressions.has(e)){const i=t.localExpressions.get(e);t.sourceMap.localExpressions.set(e,{text:i.toString(),tokens:[]});let n=this.compileExpression(e,wt(i),t);return"number"===n.valueType&&(n=new $t("float",n.castTo("float"),"evaluation_result")),n=new $t(n.valueType,n.value,"local_expression"),t.localVariables.push({name:e,value:n}),new $t(n.valueType,tt(e),"local_expression")}{const i=this.getGlobalVariable(e,t.dependencies);return t.localVariables.push({name:e,value:i}),new $t(i.valueType,tt(e),i.source)}}compileNoiseFunction(e,t,i,n){const s={valueType:"float",args:i.map(e=>({name:e,type:"float",ignored:!0}))},o=new Map,a={functions:new Map,constants:new Set,expressions:new Set},r={expression:{text:"",tokens:[]},localExpressions:new Map},l=this.compileCodeBlock(t,s.args,n,a,o,r);o.forEach((t,o)=>{const a={name:e.name,argumentIndex:o};s.args.push({name:`arg[${o}]`,type:"sampler2D",evalFunction:this.compileNoiseFunction(a,t,i,n)})});const p=s.args.filter(e=>!e.ignored).map(e=>`${e.type} ${tt(e.name)}`),c="".concat(`float ${nt(e)}(${p.join(", ")}) {\n`,l,"}\n\n");return{id:e,definition:c,dependencies:a,sourceMap:r,...s}}getPrecalculatedArgument(e,t,i){const n=it(t.id);i.dependencies.functions.set(n,t.id);const s=[];t.args.forEach((t,o)=>{const a=void 0!==e.args?o<e.args.length?e.args[o]:void 0:e.kwargs.get(t.name);if(!t.ignored)if(void 0!==a)s.push(yt(a));else if(void 0!==t.default)s.push(et(t.default));else{if(null==t.evalFunction)throw`Param ${t.name} not found in call to ${n}`;s.push(this.getPrecalculatedArgument(e,t.evalFunction,i))}});const o=Ze(`${n}(${s.join(",")})`);return i.precalculatedArguments.has(o)||i.precalculatedArguments.set(o,{...e,precalculatedArg:t.id.argumentIndex}),tt(`arg[${o}]`)}compileExpression(e,t,i){switch(t.type){case"number_constant":return new $t("number",t.value,"const");case"string_constant":return new $t("uint",`${Ze(t.value)}u`,"const");case"function":{const n=t.value,s={name:n,argumentIndex:t.precalculatedArg};i.dependencies.functions.set(it(s),s);const o=this.getFunction(s),a=[];return o.args.forEach((s,o)=>{const r=void 0!==t.args?o<t.args.length?t.args[o]:void 0:t.kwargs.get(s.name);if(!s.ignored)if(void 0!==r)a.push(this.compileExpression(e,r,i).castTo(s.type));else if(void 0!==s.default)a.push(s.default);else{if(void 0===s.evalFunction)throw`Param ${s.name} not found in call to ${n}`;a.push(this.getPrecalculatedArgument(t,s.evalFunction,i))}}),new $t(o.valueType,`${nt(o.id)}(${a.join(", ")})`,"evaluation_result")}case"operator":{const n=Ct.get(t.value);if(void 0===n)throw`Unsupported operator ${t.value}`;return n.compile(t.args.map((t,s)=>this.compileExpression(e,t,i).castTo(n.args[s])))}case"variable":{const n=(null===e?i.sourceMap.expression:i.sourceMap.localExpressions.get(e)).tokens,s=this.getLocalVariable(t.value,i);if("named_expression"==s.source){let e=t.value;for(;this.propertyExpressionNames.has(e);)e=this.propertyExpressionNames.get(e);n.push({begin:t.position,length:t.length,reference:e,type:"named_expression"})}else"local_expression"==s.source&&n.push({begin:t.position,length:t.length,reference:t.value,type:"local_expression"});return s}}}compileCodeBlock(e,t,i,n,s,o){const a=[],r=this.compileExpression(null,e,{args:t,localVariables:a,localExpressions:i,dependencies:n,precalculatedArguments:s,sourceMap:o});return"".concat(...a.map(e=>`  ${e.value.valueType} ${tt(e.name)} = ${e.value.value};\n`),`  return ${r.castTo("float")};\n`)}assembleFullExpression(e,t){const i=[],n=new Map([["__scale__","float"],["__size__","vec2"],["__shift__","vec2"],["__fast_spot_noise__","uint"]]),s=new Set,o=e=>{i.some(t=>t.id.name===e.id.name&&t.id.argumentIndex===e.id.argumentIndex)||(e.dependencies.constants.forEach(e=>{n.set(e,this.environmentVariables.get(e))}),e.dependencies.expressions.forEach(e=>{s.add(e)}),e.dependencies.functions.forEach(e=>{o(this.getFunction(e))}),i.push(e))};o(t);const a=[];t.args.forEach(t=>{const i=`${e}[${Ze(t.name)}]`;s.add(i),a.push(`tex_${tt(i)}`)});const r=Array.from(s).map(e=>`uniform highp sampler2D tex_${tt(e)};\n`),l=Array.from(n.entries()).map(([e,t])=>`uniform ${t} u_${tt(e)};\n`),p=i.map(e=>e.definition),c=`void main() {\n  outValue = ${nt(t.id)}(${a.join(", ")});\n}\n`;return{shader:"".concat("#version 300 es\nprecision highp float;\n\nout float outValue;\nin vec2 v_mapCoords;\nin vec2 v_texCoords;\n\n",...r,...l,"\n",...p,c),uniforms:n,expressions:s,sourceMap:t.sourceMap}}compileFullExpression(e,t,i){const n=this.compileNoiseFunction({name:"__result__"},wt(t),[],new Map(Object.entries(i||{})));n.sourceMap.expression.text=t.toString();const s=new Map;s.set(e,this.assembleFullExpression(e,n));const o=t=>{t.args.forEach(t=>{const i=`${e}[${Ze(t.name)}]`;s.has(i)||(s.set(i,this.assembleFullExpression(e,t.evalFunction)),o(t.evalFunction))})};return o(n),s}}function St(e){const t=[e.type,e.name];return void 0!==e.localExpressionName&&t.push(e.localExpressionName),t.join("::")}const kt=`#version 300 es\nprecision highp float;\n\nin vec2 a_vertexPosition;\nout vec2 v_mapCoords;\nout vec2 v_texCoords;\nuniform vec2 u_${tt("__shift__")};\nuniform float u_${tt("__scale__")};\nuniform vec2 u_${tt("__size__")};\n\nvoid main() {\n  v_mapCoords = a_vertexPosition * u_${tt("__scale__")} + u_${tt("__shift__")};\n  v_texCoords = a_vertexPosition + u_${tt("__size__")} / 2.;\n  gl_Position = vec4((v_texCoords + vec2(0.5)) / u_${tt("__size__")} * 2. - vec2(1.), 0., 1.);\n}`;function Ut(e,t,i){const n=e.createShader(t);if(e.shaderSource(n,i),e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS))throw`An error occurred compiling the shaders: ${e.getShaderInfoLog(n)}`;return n}function Vt(e,t){const i=Ut(e,e.VERTEX_SHADER,kt),n=Ut(e,e.FRAGMENT_SHADER,t),s=e.createProgram();if(e.attachShader(s,i),e.attachShader(s,n),e.linkProgram(s),!e.getProgramParameter(s,e.LINK_STATUS))throw`Unable to initialize the shader program: ${e.getProgramInfoLog(s)}`;return s}function Mt(e,t,i){const n=e.createTexture();return e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texImage2D(e.TEXTURE_2D,0,e.R32F,t,i,0,e.RED,e.FLOAT,null),n}function Ot(e,t,i){const n=e.createTexture();return e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,t,i,0,e.RGBA,e.UNSIGNED_BYTE,null),n}class Bt{constructor(e,t,i){this.dataRaw=e,this.currentVersion=0,this.width=i.width,this.height=i.height,this.canvas=new OffscreenCanvas(this.width,this.height),this.gl=this.canvas.getContext("webgl2");const n=this.gl;if(n.disable(n.BLEND),null===n.getExtension("EXT_color_buffer_float"))throw"EXT_color_buffer_float extension is not supported";this.fb=n.createFramebuffer(),this.positionBuffer=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,this.positionBuffer),n.bufferData(n.ARRAY_BUFFER,new Float32Array([this.width/2,this.height/2,-this.width/2,this.height/2,this.width/2,-this.height/2,-this.width/2,-this.height/2]),n.STATIC_DRAW),this.visualizeProgram=Vt(n,"#version 300 es\nprecision highp float;\n\nuniform highp sampler2D u_texture;\nin vec2 v_mapCoords;\nin vec2 v_texCoords;\nout vec4 outValue;\n\nvoid main() {\n  float value = texelFetch(u_texture, ivec2(v_texCoords), 0).r;\n  if (value < -1.) {\n    outValue = mix(vec4(0., 0., 1., 1.), vec4(0.5, 0., 0.5, 1.), min(log(-value) / log(1000.), 1.));\n  } else if (value < 0.) {\n    outValue = vec4(0., 0., -value, 1.);\n  } else if (value < 1.) {\n    outValue = vec4(value, 0., 0., 1.);  \n  } else {\n    outValue = mix(vec4(1., 0., 0., 1.), vec4(1., 1., 0., 1.), min(log(value) / log(1000.), 1.));\n  }\n}"),this.visualizeTexture=Ot(n,this.width,this.height),this.inputHeightmap=Mt(n,this.width,this.height),this.outputHeightmap=Mt(n,this.width,this.height),this.inputTilemap=Ot(n,this.width,this.height),this.outputTilemap=Ot(n,this.width,this.height),this.clearProgram=Vt(n,"#version 300 es\nprecision highp float;\n\nin vec2 v_texCoords;\nlayout(location = 0) out vec4 out_tile;\nlayout(location = 1) out float out_height;\n\nvoid main() {\n  out_height = -intBitsToFloat(2139095039);\n  out_tile = vec4(0., 0., 0., 1.);\n}"),this.placeTileProgram=Vt(n,"#version 300 es\nprecision highp float;\n\nin vec2 v_texCoords;\nlayout(location = 0) out vec4 out_tile;\nlayout(location = 1) out float out_height;\n\nuniform highp sampler2D u_heightMap;\nuniform sampler2D u_tileMap;\n\nuniform highp sampler2D u_tileExpression;\nuniform vec4 u_tileColor;\n\nvoid main() {\n  float old_height = texelFetch(u_heightMap, ivec2(v_texCoords), 0).r;\n  float new_height = texelFetch(u_tileExpression, ivec2(v_texCoords), 0).r;\n  vec4 old_tile = texelFetch(u_tileMap, ivec2(v_texCoords), 0);\n  if (new_height >= old_height) {\n    out_height = new_height;\n    out_tile = u_tileColor;\n  } else {\n    out_height = old_height;\n    out_tile = old_tile;\n  }\n}"),this.compiler=new Tt(e,t);const s=e.planet[t].map_gen_settings.autoplace_settings;this.compiledExpressions=new Map,this.tileColors=new Map,Object.entries(s.tile.settings).forEach(([t,i])=>{const n=e.tile[t];this.addCompiledExpression({type:"tile",name:t},n.autoplace.probability_expression,n.autoplace.local_expressions),this.tileColors.set(t,function(e){let t,i,n;return Array.isArray(e)?(t=e[0],i=e[1],n=e[2]):(t=e.r,i=e.g,n=e.b),(t>1||i>1||n>1)&&(t/=255,i/=255,n/=255),[t,i,n,1]}(n.map_color))}),Object.entries(e["noise-expression"]).forEach(([e,t])=>{this.addCompiledExpression({type:"named_expression",name:e},t.expression,t.local_expressions)}),Array.from(this.compiledExpressions.values()).forEach(e=>{this.validateExpressionDependencies(e)});const o=e=>{if(!e.useful){e.useful=!0;for(const t of e.expression?.expressions??[]){const e=St({type:"named_expression",name:t});o(this.compiledExpressions.get(e))}}};this.tiles.forEach(o),this.constants=new Map([["__scale__",[1]],["__shift__",[0,0]],["__size__",[this.width,this.height]],["__fast_spot_noise__",[i.fastSpotNoise?1:0]],["starting_area_radius",[150]],["cliff_elevation_0",[10]],["cliff_elevation_interval",[40]],["cliff_smoothing",[0]],["cliff_richness",[1]],["starting_positions",[0,0]],["starting_lake_positions",[0,0]],["control:moisture:frequency",[1]],["control:moisture:bias",[0]],["control:aux:frequency",[1]],["control:aux:bias",[0]],["control:temperature:frequency",[1]],["control:temperature:bias",[0]]]),this.setSeed(0),this.autoplaceControlNames=Object.entries(e["autoplace-control"]).map(([e,t])=>e),this.autoplaceControlNames.forEach(e=>{this.constants.set(`control:${e}:frequency`,[1]),this.constants.set(`control:${e}:size`,[1]),this.constants.set(`control:${e}:richness`,[1])})}addCompiledExpression(e,t,i){const n=this.gl;try{this.compiler.compileFullExpression(e.name,t,i).forEach((t,i)=>{const s=Vt(n,t.shader),o=Mt(n,this.width,this.height);this.compiledExpressions.set(St({type:e.type,name:i,localExpressionName:e.localExpressionName}),{displayName:e.name==i?e.name:null,id:e,expression:t,program:s,texture:o,evaluated:-1})})}catch(t){this.compiledExpressions.set(St(e),{displayName:e.name,id:e,compilationError:t,evaluated:-1})}}renderTo(e){const t=this.gl;t.bindFramebuffer(t.FRAMEBUFFER,this.fb),t.drawBuffers([t.COLOR_ATTACHMENT0]),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0),t.viewport(0,0,this.width,this.height)}runProgram(e){const t=this.gl;t.bindBuffer(t.ARRAY_BUFFER,this.positionBuffer),t.vertexAttribPointer(t.getAttribLocation(e,"a_vertexPosition"),2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(t.getAttribLocation(e,"a_vertexPosition")),t.drawArrays(t.TRIANGLE_STRIP,0,4)}validateExpressionDependencies(e){if(e.compilationError)return!1;if(e.evaluated>=0)return!0;e.evaluated=0;for(const t of e.expression.expressions){const i=St({type:"named_expression",name:t});if(!this.validateExpressionDependencies(this.compiledExpressions.get(i)))return e.compilationError=`Failed to process required expression ${t}`,!1}return!0}getExpressionResult(e){if(e.compilationError)throw"This expression has not been compiled";if(e.evaluated==this.currentVersion)return e.texture;const t=Array.from(e.expression.expressions).map(e=>{const t=St({type:"named_expression",name:e});return[e,this.getExpressionResult(this.compiledExpressions.get(t))]}),i=this.gl;return i.useProgram(e.program),t.forEach(([t,n],s)=>{i.activeTexture(i.TEXTURE0+s),i.bindTexture(i.TEXTURE_2D,n),i.uniform1i(i.getUniformLocation(e.program,`tex_${tt(t)}`),s)}),Array.from(e.expression.uniforms).forEach(([t,n])=>{const s=i.getUniformLocation(e.program,`u_${tt(t)}`),o=this.constants.get(t);if(void 0===o)throw`Missing constant ${t}`;switch(n){case"float":i.uniform1fv(s,o);break;case"vec2":i.uniform2fv(s,o);break;case"uint":i.uniform1uiv(s,o);break;case"int":i.uniform1iv(s,o);break;default:throw`Unexpected uniform type: ${n}`}}),this.renderTo(e.texture),this.runProgram(e.program),e.evaluated=this.currentVersion,e.texture}visualizeResult(e){const t=this.gl;t.useProgram(this.visualizeProgram),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,e),t.uniform1i(t.getUniformLocation(this.visualizeProgram,"u_texture"),0),t.uniform2fv(t.getUniformLocation(this.visualizeProgram,`u_${tt("__size__")}`),this.constants.get("__size__")),this.renderTo(this.visualizeTexture),this.runProgram(this.visualizeProgram);const i=new ImageData(this.width,this.height);return t.readPixels(0,0,this.width,this.height,t.RGBA,t.UNSIGNED_BYTE,i.data),i}placeAllTiles(){this.tiles.forEach(e=>{e.compilationError||this.getExpressionResult(e)});const e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,this.fb),e.viewport(0,0,this.width,this.height),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1]),e.useProgram(this.clearProgram),e.uniform2fv(e.getUniformLocation(this.clearProgram,`u_${tt("__size__")}`),this.constants.get("__size__")),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.inputTilemap,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,this.inputHeightmap,0),this.runProgram(this.clearProgram),e.useProgram(this.placeTileProgram),e.uniform1i(e.getUniformLocation(this.placeTileProgram,"u_tileMap"),0),e.uniform1i(e.getUniformLocation(this.placeTileProgram,"u_heightMap"),1),e.uniform1i(e.getUniformLocation(this.placeTileProgram,"u_tileExpression"),2),e.uniform2fv(e.getUniformLocation(this.placeTileProgram,`u_${tt("__size__")}`),this.constants.get("__size__")),this.tiles.forEach(t=>{t.compilationError||(e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.outputTilemap,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,this.outputHeightmap,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.inputTilemap),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.inputHeightmap),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,t.texture),e.uniform4fv(e.getUniformLocation(this.placeTileProgram,"u_tileColor"),this.tileColors.get(t.displayName)),this.runProgram(this.placeTileProgram),[this.inputHeightmap,this.outputHeightmap]=[this.outputHeightmap,this.inputHeightmap],[this.inputTilemap,this.outputTilemap]=[this.outputTilemap,this.inputTilemap])});const t=new ImageData(this.width,this.height);return e.readPixels(0,0,this.width,this.height,e.RGBA,e.UNSIGNED_BYTE,t.data),t}getExpressionValue(e,t,i){const n=this.getExpressionResult(e);this.renderTo(n);const s=new Float32Array(1),o=this.gl;return o.readPixels(t,i,1,1,o.RED,o.FLOAT,s),s[0]}setSeed(e){this.constants.set("map_seed",[e]),this.constants.set("map_seed_small",[65535&e]),this.constants.set("map_seed_normalized",[e/4294967295]),this.constants.set("starting_lake_positions",[75*Math.sin(e),75*Math.cos(e)]),this.currentVersion++}setScale(e){this.constants.set("__scale__",[e]),this.currentVersion++}setShift(e,t){this.constants.set("__shift__",[e,t]),this.currentVersion++}setControl(e,t){this.constants.set(e,[t]),this.currentVersion++}toDisplayExpression(e){return{displayName:e.displayName,id:e.id,compilationError:e.compilationError,sourceMap:e.expression?.sourceMap}}get tiles(){return Array.from(this.compiledExpressions.values()).filter(e=>"tile"==e.id.type&&null!==e.displayName).toSorted((e,t)=>e.id.name.localeCompare(t.id.name))}getExpressions(e){return Array.from(this.compiledExpressions.values()).filter(t=>"named_expression"==t.id.type&&null!==t.displayName&&(t.useful||e)).map(e=>this.toDisplayExpression(e)).toSorted((e,t)=>e.displayName.localeCompare(t.displayName))}get tileNames(){return Array.from(this.compiledExpressions.values()).filter(e=>"tile"==e.id.type&&null!==e.displayName).map(e=>this.toDisplayExpression(e)).toSorted((e,t)=>e.displayName.localeCompare(t.displayName))}get autoplaceControls(){return this.autoplaceControlNames}getCompiledExpression(e){const t=St(e),i=this.compiledExpressions.get(t);if(void 0!==i)return i;if(void 0===e.localExpressionName)throw`Internal error: could not find the compilation result for ${e.type} ${e.name}`;return"tile"===e.type?this.addCompiledExpression(e,e.localExpressionName,this.dataRaw.tile[e.name].autoplace.local_expressions):this.addCompiledExpression(e,e.localExpressionName,this.dataRaw["noise-expression"][e.name].local_expressions),this.compiledExpressions.get(t)}getFullExpressionResult(e){const t=this.getCompiledExpression(e);if(t.compilationError)throw`Internal error: failed to process expression: "${t.compilationError}"`;return this.visualizeResult(this.getExpressionResult(t))}getSingleExpressionValue(e,t,i){const n=this.getCompiledExpression(e);if(n.compilationError)throw`Internal error: failed to process expression: "${n.compilationError}"`;return{name:n.displayName,value:this.getExpressionValue(n,t,i)}}getAllTileValues(e,t){return this.tiles.filter(e=>!e.compilationError).map(i=>({name:i.displayName,value:this.getExpressionValue(i,e,t)})).toSorted((e,t)=>e.name.localeCompare(t.name))}}var jt=function(e,t,i,n){var s,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(a=(o<3?s(a):o>3?s(t,i,a):s(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};const Pt=[{displayValue:"13%",realValue:6},{displayValue:"25%",realValue:4},{displayValue:"33%",realValue:3},{displayValue:"50%",realValue:2},{displayValue:"75%",realValue:4/3},{displayValue:"100%",realValue:1},{displayValue:"133%",realValue:3/4},{displayValue:"150%",realValue:2/3},{displayValue:"200%",realValue:.5},{displayValue:"300%",realValue:1/3},{displayValue:"400%",realValue:1/4},{displayValue:"600%",realValue:1/6}],Nt=[{displayValue:"13%",realValue:1/6},{displayValue:"25%",realValue:1/4},{displayValue:"33%",realValue:1/3},{displayValue:"50%",realValue:.5},{displayValue:"75%",realValue:3/4},{displayValue:"100%",realValue:1},{displayValue:"133%",realValue:4/3},{displayValue:"150%",realValue:1.5},{displayValue:"200%",realValue:2},{displayValue:"300%",realValue:3},{displayValue:"400%",realValue:4},{displayValue:"600%",realValue:6}],Ft=[{displayValue:"-0.50",realValue:-.5},{displayValue:"-0.45",realValue:-.45},{displayValue:"-0.40",realValue:-.4},{displayValue:"-0.35",realValue:-.35},{displayValue:"-0.30",realValue:-.3},{displayValue:"-0.25",realValue:-.25},{displayValue:"-0.20",realValue:-.2},{displayValue:"-0.15",realValue:-.15},{displayValue:"-0.10",realValue:-.1},{displayValue:"-0.05",realValue:-.05},{displayValue:"0.00",realValue:0},{displayValue:"0.05",realValue:.05},{displayValue:"0.10",realValue:.1},{displayValue:"0.15",realValue:.15},{displayValue:"0.20",realValue:.2},{displayValue:"0.25",realValue:.25},{displayValue:"0.30",realValue:.3},{displayValue:"0.35",realValue:.35},{displayValue:"0.40",realValue:.4},{displayValue:"0.45",realValue:.45},{displayValue:"0.50",realValue:.5}];let Dt=class extends oe{constructor(){super(),this.values=[],this.value=0}render(){return I`<div class="flex-vertical container">
      <div class="slider">
        <input
          type="range"
          min="0"
          max="${this.values.length-1}"
          value="${this.value}"
          step="1"
          @change=${()=>{this.value=parseInt(this.input.value),this.dispatchEvent(new CustomEvent("change",{detail:this.values[this.value].realValue}))}}
        />
      </div>
      <div class="label">${this.values[this.value].displayValue}</div>
    </div>`}};Dt.styles=[Le,o`
      .container {
        width: 100px;
      }
      .label {
        text-align: center;
      }
    `],jt([ce({type:Array})],Dt.prototype,"values",void 0),jt([ce({type:Number})],Dt.prototype,"value",void 0),jt([ue("input")],Dt.prototype,"input",void 0),Dt=jt([re("nv-slider")],Dt);class It extends EventTarget{constructor(e,t,i){super(),this.canvas=e,this.executor=t,this.currentExpression=i,this.previewExpression=i}preview(e){this.previewExpression=e,this.redraw(),this.dispatchEvent(new CustomEvent("view",{detail:this.previewExpression}))}cancelPreview(){this.previewExpression=this.currentExpression,this.redraw(),this.dispatchEvent(new CustomEvent("view",{detail:this.previewExpression}))}select(e){this.previewExpression=e,this.currentExpression=e,this.redraw(),this.dispatchEvent(new CustomEvent("select",{detail:this.previewExpression}))}getHoverData(e,t){return null==this.previewExpression?this.executor.getAllTileValues(e,t):[this.executor.getSingleExpressionValue(this.previewExpression,e,t)]}redraw(){const e=null==this.previewExpression?this.executor.placeAllTiles():this.executor.getFullExpressionResult(this.previewExpression);this.canvas.width=e.width,this.canvas.height=e.height,this.canvas.getContext("2d").putImageData(e,0,0)}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function zt(e,t,i){return e?t(e):i?.(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qt=(e,t,i)=>{const n=new Map;for(let s=t;s<=i;s++)n.set(e[s],s);return n},Yt=Be(class extends je{constructor(e){if(super(e),e.type!==Ve)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let n;void 0===i?i=t:void 0!==t&&(n=t);const s=[],o=[];let a=0;for(const t of e)s[a]=n?n(t,a):a,o[a]=i(t,a),a++;return{values:o,keys:s}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,n]){const s=(e=>e._$AH)(e),{values:o,keys:a}=this.dt(t,i,n);if(!Array.isArray(s))return this.ut=a,o;const r=this.ut??=[],l=[];let p,c,d=0,u=s.length-1,h=0,f=o.length-1;for(;d<=u&&h<=f;)if(null===s[d])d++;else if(null===s[u])u--;else if(r[d]===a[h])l[h]=De(s[d],o[h]),d++,h++;else if(r[u]===a[f])l[f]=De(s[u],o[f]),u--,f--;else if(r[d]===a[f])l[f]=De(s[d],o[f]),Fe(e,l[f+1],s[d]),d++,f--;else if(r[u]===a[h])l[h]=De(s[u],o[h]),Fe(e,s[d],s[u]),u--,h++;else if(void 0===p&&(p=Qt(a,h,f),c=Qt(r,d,u)),p.has(r[d]))if(p.has(r[u])){const t=c.get(a[h]),i=void 0!==t?s[t]:null;if(null===i){const t=Fe(e,s[d]);De(t,o[h]),l[h]=t}else l[h]=De(i,o[h]),Fe(e,s[d],i),s[t]=null;h++}else Qe(s[u]),u--;else Qe(s[d]),d++;for(;h<=f;){const t=Fe(e,l[f+1]);De(t,o[h]),l[h++]=t}for(;d<=u;){const e=s[d++];null!==e&&Qe(e)}return this.ut=a,ze(e,l),z}});var Kt=function(e,t,i,n){var s,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(a=(o<3?s(a):o>3?s(t,i,a):s(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let qt=class extends oe{constructor(){super(),this.scale=1,this.hoverData=void 0,this.hoverX=0,this.hoverY=0,this.requiresScroll=!1,this.urlParams=new URLSearchParams(document.location.hash?.substring(1)),this.planets=[],this.expressions=[],this.tiles=[],this.autoplaceControls=[],this.initialize()}render(){return I`
      <div>
        <div class="outer-frame main-window">
          <div class="inner-frame map-container" ?hidden=${void 0===this.currentPlanet}>
            <canvas
              width="1024"
              height="1024"
              id="canvas"
              class="main-image"
              @mousemove=${e=>{void 0!==this.renderController&&(this.hoverX=e.offsetX,this.hoverY=e.offsetY,this.hoverData=this.renderController.getHoverData(e.offsetX,e.offsetY))}}
              @mouseleave=${()=>{this.hoverData=void 0}}
            ></canvas>
            <nv-values-hover ?hidden=${void 0===this.hoverData} .data=${this.hoverData}
                positionX=${this.hoverX} positionY=${this.hoverY}>
            </nv-values-hover>
          </div>
          <div class="inner-frame">
            <div id="global_controls" class="box-dark-inset">
              ${zt(void 0!==this.errorMessage,()=>I`<div class="flex-horizontal error-message">${this.errorMessage}</div>`)}
              <div class="flex-horizontal" ?hidden=${0==this.planets.length}>
                <select @change=${e=>{this.selectPlanet(e.target.value,null)}}>
                  ${this.planets.map(e=>I`<option
                      label=${e}
                      value=${e}
                      ?selected=${e===this.currentPlanet}
                    ></option>`)}
                </select>
                <nv-import-ui @data-imported=${this.dataImported}></nv-import-ui>
              </div>
              <div class="flex-horizontal">
                <nv-number-input
                  id="seed"
                  minValue="0"
                  maxValue="4294967295"
                  value="0"
                  caption="Seed"
                  wide
                  @change=${e=>{this.setSeed(e.detail)}}
                >
                </nv-number-input>
                <div
                  class="dice"
                  @click=${()=>{const e=new Uint32Array(1);crypto.getRandomValues(e),this.setSeed(e[0])}}
                ></div>
              </div>
              <div class="flex-horizontal">
                <nv-number-input
                  id="shift_x"
                  minValue="-65536"
                  maxValue="65536"
                  value="0"
                  caption="X"
                  @change=${()=>{this.updateShift()}}
                >
                </nv-number-input>
                <nv-number-input
                  id="shift_y"
                  minValue="-65536"
                  maxValue="65536"
                  value="0"
                  caption="Y"
                  @change=${()=>{this.updateShift()}}
                >
                </nv-number-input>
                <div class="zoom-in ${this.scale>1?"active":""}" @click=${this.zoomIn}>
                </div>
                <div class="zoom-out ${this.scale<16?"active":""}" @click=${this.zoomOut}>
                </div>
                <nv-nudge @nudge=${e=>{this.shiftX.safeReset(this.shiftX.value+e.detail.x),this.shiftY.safeReset(this.shiftY.value+e.detail.y),this.updateShift()}}
                @zoom_in=${this.zoomIn}
                @zoom_out=${this.zoomOut}
                >
                </nv-nudge>
                </div>
              </div>
            <nv-collapse caption="Controls" collapsed>
              <table class="controls">
                <thead>
                  <tr>
                    <th></th>
                    <th>Scale</th>
                    <th>Bias</th>
                  </tr>
                </thead>
                <tbody>
                  ${[["moisture","Moisture"],["aux","Terrain type"]].map(([e,t])=>I`<tr>
                      <td>${t}</td>
                      <td>
                        <nv-slider .values=${Pt} value=5 @change=${t=>{this.executor.setControl(`control:${e}:frequency`,t.detail),this.renderController.redraw()}}
                        </nv-slider>
                      </td>
                      <td>
                        <nv-slider .values=${Ft} value=10 @change=${t=>{this.executor.setControl(`control:${e}:bias`,t.detail),this.renderController.redraw()}}
                        </nv-slider>
                      </td>
                    </tr>`)}
                </tbody>
                <thead>
                  <tr>
                    <th></th>
                    <th>Scale</th>
                    <th>Coverage</th>
                  </tr>
                </thead>
                <tbody>
                  ${this.autoplaceControls.map(e=>I`<tr>
                      <td>${e}</td>
                      <td>
                        <nv-slider .values=${Pt} value=5 @change=${t=>{this.executor.setControl(`control:${e}:frequency`,t.detail),this.renderController.redraw()}}
                        </nv-slider>
                      </td>
                      <td>
                        <nv-slider .values=${Nt} value=5 @change=${t=>{this.executor.setControl(`control:${e}:size`,t.detail),this.renderController.redraw()}}
                        </nv-slider>
                      </td>
                    </tr>`)}
                </tbody>
              </table>
            </nv-collapse>
            <nv-collapse
              id="tiles"
              caption="Tiles"
              ?collapsed=${!this.urlParams.has("tile")}
            >
              <div slot="eye-icon" class="eye-icon ${null===this.selectedExpression?"":"inactive"}"
                @click=${()=>{this.renderController.select(null)}}
                @mouseenter=${()=>{this.renderController.preview(null)}}
                @mouseleave=${()=>{this.renderController.cancelPreview()}}
              ></div>
              ${Yt(this.tiles,e=>St(e.id),e=>this.renderExpression(e))}
            </nv-collapse>
            <nv-collapse id="expressions" caption="Expressions" collapsed>
              ${Yt(this.expressions,e=>St(e.id),e=>this.renderExpression(e))}
            </nv-collapse>
            </div>
          </div>
        </div>
      </div>
      <nv-user-settings id="settings" @settings-updated=${()=>{this.selectPlanet(this.currentPlanet,this.selectedExpression)}}></nv-user-settings>
    `}renderExpression(e){return I`<nv-collapse
      ?concealable=${!e.compilationError}
      collapsed
      caption=${e.displayName}
      id=${St(e.id)}
    >
      ${zt(e.compilationError,()=>I`<div class="error-message">${e.compilationError}</div>`,()=>{const t=e.sourceMap;return I` <div
              slot="eye-icon"
              class="eye-icon ${this.selectedExpression?.type===e.id.type&&this.selectedExpression?.name===e.id.name?"":"inactive"}"
              @click=${()=>{this.renderController.select(e.id)}}
              @mouseenter=${()=>{this.renderController.preview(e.id)}}
              @mouseleave=${()=>{this.renderController.cancelPreview()}}
            ></div>
            <div class="expression-container">
              <div class="main-expression">
                ${this.renderSourceString(t.expression,e.id)}
              </div>
              ${zt(t.localExpressions.size>0,()=>I`
                  <table class="local-expressions">
                    ${Array.from(t.localExpressions).sort((e,t)=>e[0].localeCompare(t[0])).map(([t,i])=>{const n={localExpressionName:t,...e.id};return I`<tr
                          class="${n.type===this.selectedExpression?.type&&n.name===this.selectedExpression?.name&&n.localExpressionName===this.selectedExpression?.localExpressionName?"selected":""}"
                        >
                          <td
                            class="local-expression-name"
                            id=${St(n)}
                            @click=${()=>{this.renderController.select(n)}}
                            @mouseenter=${()=>{this.renderController.preview(n)}}
                            @mouseleave=${()=>{this.renderController.cancelPreview()}}
                          >
                            ${t}
                          </td>
                          <td>${this.renderSourceString(i,e.id)}</td>
                        </tr>`})}
                  </table>
                `)}
            </div>`})}
    </nv-collapse>`}renderSourceString(e,t){const i=[];let n=0;return e.tokens.toSorted((e,t)=>e.begin-t.begin).forEach(s=>{if(s.begin<n)return;n<s.begin&&i.push(I`<span class="source-regular">${e.text.substring(n,s.begin)}</span>`);const o="named_expression"==s.type?{type:"named_expression",name:s.reference}:{localExpressionName:s.reference,...t};i.push(I`<span
            class="source-expression"
            @click=${()=>{this.renderController.select(o),this.scrollToSelected()}}
            @mouseenter=${()=>{this.renderController.preview(o)}}
            @mouseleave=${()=>{this.renderController.cancelPreview()}}
            >${e.text.substring(s.begin,s.begin+s.length)}</span
          >`),n=s.begin+s.length}),n<e.text.length&&i.push(I`<span class="source-regular">${e.text.substring(n)}</span>`),i}updated(){this.requiresScroll&&(this.requiresScroll=!1,this.scrollToSelected())}firstUpdated(){}scrollToSelected(){null!==this.selectedExpression&&("tile"==this.selectedExpression.type?this.tilesCollapse.collapsed=!1:this.expressionsCollapse.collapsed=!1,this.shadowRoot.getElementById(St({type:this.selectedExpression.type,name:this.selectedExpression.name})).collapsed=!1,this.shadowRoot.getElementById(St(this.selectedExpression)).scrollIntoView({behavior:"smooth",block:"center"}))}async initialize(){const e=this.urlParams.get("mod")??"base";let t;t="base"==e||"elevated-rails"==e||"quality"==e?"data_raw.json":"space-age"==e?"data_raw_sa.json":`https://modname_resolver.bpbin.com/raw/${e}`;try{const e=await fetch(t);if(200!=e.status)throw"Failed to fetch the mod data";this.dataRaw=await e.json()}catch(e){return void(this.errorMessage=`${e}`)}this.planets=Object.getOwnPropertyNames(this.dataRaw.planet);let i=null;this.urlParams.get("tile")?(this.tilesCollapse.collapsed=!1,i={type:"tile",name:this.urlParams.get("tile"),localExpressionName:this.urlParams.get("local_expression")??void 0}):this.urlParams.get("named_expression")&&(this.expressionsCollapse.collapsed=!1,i={type:"named_expression",name:this.urlParams.get("named_expression"),localExpressionName:this.urlParams.get("local_expression")??void 0}),this.requiresScroll=!0,this.selectPlanet(this.urlParams.get("planet")??this.planets[0],i)}dataImported(e){this.errorMessage=void 0,this.urlParams.set("custom_data","true"),this.dataRaw=e.detail,this.planets=Object.getOwnPropertyNames(this.dataRaw.planet),this.selectPlanet(this.planets[0],null)}updateUrl(){document.location.hash=this.urlParams.get("custom_data")?"":this.urlParams.toString()}selectExpression(e){this.selectedExpression=e,this.urlParams.delete("tile"),this.urlParams.delete("named_expression"),this.urlParams.delete("local_expression"),null!==e&&(this.urlParams.set(e.type,e.name),void 0!==e.localExpressionName&&this.urlParams.set("local_expression",e.localExpressionName)),this.updateUrl()}selectPlanet(e,t){this.currentPlanet=e,this.urlParams.set("planet",e);const i=this.userSettings.settings;this.executor=new Bt(this.dataRaw,e,i),this.renderController=new It(this.canvas,this.executor,t),this.renderController.addEventListener("view",e=>{this.selectedExpression=e.detail}),this.renderController.addEventListener("select",e=>{this.selectExpression(e.detail)}),this.expressions=this.executor.getExpressions(i.showAll),this.tiles=this.executor.tileNames,this.autoplaceControls=this.executor.autoplaceControls,this.shiftX.safeReset(0),this.shiftY.safeReset(0),this.scale=1,this.executor.setScale(this.scale),this.selectExpression(t),this.setSeed(0)}setSeed(e){this.seed.safeReset(e),this.executor.setSeed(e),this.renderController.redraw()}updateShift(){this.executor.setShift(this.shiftX.value,this.shiftY.value),this.renderController.redraw()}zoomIn(){this.scale>1&&(this.scale/=2,this.executor.setScale(this.scale),this.renderController.redraw())}zoomOut(){this.scale<16&&(this.scale*=2,this.executor.setScale(this.scale),this.renderController.redraw())}};qt.styles=[Le,o`
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

      .map-container {
        position: sticky;
        top: 8px;
      }

      .main-image {
        margin: -4px -4px -8px;
        cursor: crosshair;
      }

      .error-message {
        padding: 4px;
        color: #ff0000;
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

      .dice {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAABiklEQVR42oXUvWtTURjA4YvUuIggCjZSdHSwU/4CBwehHSyFqiB28xOxlaqIDuJUFRGnIp3sHiOFSlbroODiULGJ1NrQBqEgMbUKJfFxuHAPl+PH7x0Pz3LgfRNJNCXPtLSUleLXRH72eKwD4JcZvX8H213RQr7v7tghBgbVhRoaQnWDeXBQFaE5PXq8QKjqgBQoqMk3IZG4Jl/T3hTcMKSC0Af9+i0i1DRqOAWfdU05aUVc+K0zVi2noAWaTpvUEVc34jloCQDMGfAWoS33jGvrGHY5Bmy6adwGYN5xb8BTiVExAO8MKVtwzqQtwHnbvBIDL82jY9oxy7qmrYPXZhEDIwoW8MVt3JUoywpgM0MPJa5mYL8eK4Cf2gFcV7QKfjjiVgYOeQDYcNgpKfDJfYkxWRkIPZK4ZCkFT6wrGvgnuGCnmqkUFDWt+SgGbRctgYaaNb0pSPSpIgZnJSqAqr78Ah31PgK77fI1WqBoRQM4YdY3Ewr/OQIZ6JqxLzoC0ZSULRpT+dOZ+Q36KpXpE9aapAAAAABJRU5ErkJggg==');
        background-size: 100%;
        width: 24px;
        height: 24px;
        margin: 4px 4px 0px 4px;
      }

      .eye-icon {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAA7klEQVR42tWTvQrCMBSFbSAUuomOVlx0cJQ2PoVuEZ37AIrYQSvx0T/vEC5Yq9LRnOmEk5tz/wZ/cEiwjJgKRliS72JDzoYTDXdBw4ktM8wn+RhPw6OFO55xl5El5ygJ1FSCmhBvzixJXq2sNfaFkgwryHBc4u2NNUajs0LlTEgp8YKClIk+aVjFX1hwVTMlKQdCZAdhTo1dWYicIUdNsCajJCgPFGTUyo8MB3geigrLDuUCj6VCOTvTv7NtS8V3S+2k3UvS+1bS866y5qQUWtb8razauJs+cZ2Nc5jeo9F/+H6Pt7AZptcC/cHOPwGkwpaZF4wrwwAAAABJRU5ErkJggg==');
        width: 24px;
        height: 24px;
      }
      .eye-icon.inactive {
        filter: brightness(50%);
      }

      .zoom-in {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAABaElEQVR42pXQzUvUQRzH8aF2Txt0ESlYvIsbBoFQhy6d/QfybvceCDzUpaBjHTxYp1g6REsHj2FBD7BRIHpR8OBpXUXRBUXBx5ewDL/hx+4P9H36fj8z7/nOTEgY9NicliMb/nttJBSj5KU9eU7VDYR+uO4bgG3L1gCsqvU5PW4/9sFozKqm7IC2asjjBeh4kM8NWQQ/8vGgXRyL2415biLWN7XAeEh4At5n/VP8yroJMBsS5sBogXDVFg6UktDCdrzMjBlNrHeryW76FQwn4RBLabzE5246DcaSsIm1NMFftKUJn8CtJPzDWfprz/AzZFjBiWspeAWm+gvugT8hYcQpdgzF/r43HsW6rAliH1EHC26EHMo+gn2V/MKAVdDy0JUsvasJoKGcV2ragE0N0+pWgGKl6rte9vUqCeNmHQBO/DapolGkRJQMu6Omkj38S69STK/yLoTLKZ0QLqfMh4uh5K2OebfPASNwBVQ09yDEAAAAAElFTkSuQmCC');
        background-size: 100%;
        width: 24px;
        height: 24px;
        margin: 4px 4px 0px 4px;
      }

      .zoom-out {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAABR0lEQVR42pXQvyt1cRzA8Vuup57O8gxS6vaYcSUZlNXuH/AH2NksFv4AA4rNj43JJkwGoWShiOmSiDtI8vOlTiffe073O3h/l0/v7+d9zumUAtqN21bz5tahGT2lOMqmPMnzaUVb8/V/tgA8OHMN4Eq12dO3wLslfZmrmPQIblSKwRSoGy74/07Abl63e8J7WA/oUAMjjXICLJaaYhRsNqpt0BcJWtzjRTmoGh6yecGRcP6mbgN0heAVp9m8g0CSujkwGII7XGfzqstwsjesgd4QHOBLpRTBOT4kQUyDycj6ENhrVD0+UdfZZL3VPhjL6xVwoqOw/scyeJbkL9pcgZpRLeFj7ANY15pPqm4A9zbMW3UBxJOKXRR5jiUpRmx6AXzYMyaxHksylHUbUJX8/KdIEqOYzKbyF0k9Vb9Ijot38WRW3bH+b0UR5CT8dvINAAAAAElFTkSuQmCC');
        background-size: 100%;
        width: 24px;
        height: 24px;
        margin: 4px 4px 0px 4px;
      }

      .zoom-in:not(.active),
      .zoom-out:not(.active) {
        filter: brightness(50%);
      }

      .controls th {
        padding: 8px 4px 0px 4px;
      }
      .controls td {
        padding: 0px 4px;
      }

      div.expression-container {
        max-width: 600px;
      }
      div.main-expression {
        padding: 4px;
      }
      table.local-expressions {
        border-collapse: collapse;
      }
      table.local-expressions td {
        border-style: none;
        border-width: 1px;
        border-color: #666666;
        padding: 4px;
      }
      table.local-expressions td {
        border-top-style: solid;
      }
      table.local-expressions tr:first-child td {
        border-top-width: 2px;
      }
      table.local-expressions td:first-child {
        border-right-style: solid;
      }
      tr.selected {
        background-color: #444444;
      }
      .source-expression,
      .local-expression-name {
        text-decoration: underline;
        cursor: pointer;
      }
    `],Kt([ue("#canvas")],qt.prototype,"canvas",void 0),Kt([ue("#seed")],qt.prototype,"seed",void 0),Kt([ue("#shift_x")],qt.prototype,"shiftX",void 0),Kt([ue("#shift_y")],qt.prototype,"shiftY",void 0),Kt([ue("#tiles")],qt.prototype,"tilesCollapse",void 0),Kt([ue("#expressions")],qt.prototype,"expressionsCollapse",void 0),Kt([ue("#settings")],qt.prototype,"userSettings",void 0),Kt([de()],qt.prototype,"errorMessage",void 0),Kt([de()],qt.prototype,"planets",void 0),Kt([de()],qt.prototype,"currentPlanet",void 0),Kt([de()],qt.prototype,"expressions",void 0),Kt([de()],qt.prototype,"tiles",void 0),Kt([de()],qt.prototype,"autoplaceControls",void 0),Kt([de()],qt.prototype,"scale",void 0),Kt([de()],qt.prototype,"hoverData",void 0),Kt([de()],qt.prototype,"selectedExpression",void 0),qt=Kt([re("nv-gui")],qt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ht="important",Xt=" !"+Ht,Gt=Be(class extends je{constructor(e){if(super(e),e.type!==Ue||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const n=e[i];return null==n?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(const e in t){const n=t[e];if(null!=n){this.ft.add(e);const t="string"==typeof n&&n.endsWith(Xt);e.includes("-")||t?i.setProperty(e,t?n.slice(0,-11):n,t?Ht:""):i[e]=n}}return z}});var Jt=function(e,t,i,n){var s,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(a=(o<3?s(a):o>3?s(t,i,a):s(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let Lt=class extends oe{constructor(){super(),this.data=void 0,this.positionX=0,this.positionY=0}render(){if(!this.data)return Q;const e=Math.max(...this.data.map(e=>e.value)),t=this.data.findLastIndex(t=>t.value===e);return I`
      <div
        class="hover-card"
        style=${Gt({left:`${this.positionX+16}px`,top:`${this.positionY+16}px`})}
      >
        <table>
          ${(this.data||[]).map((e,i)=>I`<tr class="${i===t?"bold":""}">
              <td>${e.name}</td>
              <td class="number">${e.value.toPrecision(6)}</td>
            </tr> `)}
        </table>
      </div>
    `}};Lt.styles=o`
    .hover-card {
      color: black;
      background-color: #cccccc;
      position: absolute;
      padding: 4px;
      font-family: monospace;
    }
    tr.bold {
      font-weight: bold;
    }
    td {
      padding: 0px 4px;
    }
    td.number {
      text-align: end;
    }
  `,Jt([ce({type:Array})],Lt.prototype,"data",void 0),Jt([ce({type:Number})],Lt.prototype,"positionX",void 0),Jt([ce({type:Number})],Lt.prototype,"positionY",void 0),Lt=Jt([re("nv-values-hover")],Lt);var Wt=function(e,t,i,n){var s,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(a=(o<3?s(a):o>3?s(t,i,a):s(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let Zt=class extends oe{constructor(){super(),this.concealed=!0,this.errorMessage=void 0}render(){return I`
      <div class="import-icon" @click=${this.show}></div>
      <nv-overlay
        ?concealed=${this.concealed}
        @close=${()=>{this.concealed=!0}}
      >
        <div class="import-ui">
          <div id="import_header" class="import-header">
            Accepted input: well-formed JSON of data.raw table. It can be obtained from a dump
            produced by running
            <a href="https://wiki.factorio.com/Command_line_parameters">factorio --dump-data</a>,
            from <a href="https://raw.tools.bpbin.com/">data.raw explorer</a>, or any other methods.
          </div>
          <textarea id="textarea"></textarea>
          <div class="flex-reverse">
            <div class="confirm-icon" @click=${this.tryImport}></div>
            <div class="error-message" ?hidden=${void 0===this.errorMessage}>
              ${this.errorMessage}
            </div>
          </div>
        </div>
      </nv-overlay>
    `}show(){this.text.value="",this.errorMessage=void 0,this.concealed=!1}tryImport(){try{return this.dispatchEvent(new CustomEvent("data-imported",{detail:JSON.parse(this.text.value)})),void(this.concealed=!0)}catch(e){"string"==typeof e?this.errorMessage=e:e instanceof SyntaxError?this.errorMessage=e.message:this.errorMessage="Malformed input"}}};Zt.styles=[Le,o`
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

      .import-icon {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAABOklEQVR42t2UM2BlQRiF17Zt27ar9W7QxFVsow3a2FXsVHHfxbZtJ+dx4pn7JsY71fxnvu9dr1vzP2zGD/gjF0MQSVKBSChjCy+8AVqogmhGyvCZBz+GVIgYAfQU4edRBpFglITw/SietDUb9viK+3iBv3BDFpl24jhbEDoON+A/1k9rXyNZ1nmy8E/jeBFOMfZooA/92EsvUwjehYsCp/kUPVClFWfH/99awYVWgQdtrEPwfuxUeKtdaUMPIkjkeFY+0IaxRODCITgyefEDUYiVpIUI8mWrYJwUEEx+K1AAETV2vK+OERVvxjX+V9eKgt/mxomCH2cr+HG6whQjEKGOH6d9Sp5gO/92J5J9jF6d9PdYAhHJOUafQXr1lS8wwjlKHqGFV8DOYguaOQXfWIJfHIph+GI9nRcDTpN++QrEtxwAAAAASUVORK5CYII=');
        background-size: 100%;
        width: 24px;
        height: 24px;
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
    `],Wt([de()],Zt.prototype,"concealed",void 0),Wt([de()],Zt.prototype,"errorMessage",void 0),Wt([ue("#textarea")],Zt.prototype,"text",void 0),Zt=Wt([re("nv-import-ui")],Zt);var ei=function(e,t,i,n){var s,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(a=(o<3?s(a):o>3?s(t,i,a):s(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let ti=class extends oe{constructor(){super(),this.concealed=!1}render(){return I`
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
    `}};ti.styles=[Le,o`
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
    `],ei([ce({type:Boolean})],ti.prototype,"concealed",void 0),ti=ei([re("nv-overlay")],ti);var ii=function(e,t,i,n){var s,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(a=(o<3?s(a):o>3?s(t,i,a):s(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let ni=class extends oe{constructor(){super(),this.concealed=!0,this.settings=this.restoreSettings()}render(){return I`
      <div
        class="user-settings-icon"
        @click=${()=>{this.concealed=!1}}
      ></div>
      <nv-overlay
        id="overlay"
        ?concealed=${this.concealed}
        @close=${()=>{this.saveSettings(),this.concealed=!0}}
      >
        <div class="flex-reverse"><div class="close-icon"></div></div>
        <div>
          <div class="flex-horizontal white">
            <nv-number-input
              caption="Width"
              minValue="128"
              maxValue="2048"
              value="${this.settings.width}"
              @change=${e=>{this.settings.width=e.detail}}
            ></nv-number-input>
            <nv-number-input
              caption="Height"
              minValue="128"
              maxValue="2048"
              value="${this.settings.height}"
              @change=${e=>{this.settings.height=e.detail}}
            ></nv-number-input>
          </div>
          <div class="flex-horizontal white">
            <div class="checkbox-caption">
              Show all expressions
              <nv-tooltip
                >If unchecked, all the expressions that aren't used in the terrain generation of the
                selected planet will be hidden.</nv-tooltip
              >
            </div>
            <input
              type="checkbox"
              ?checked=${this.settings.showAll}
              @change=${e=>{this.settings.showAll=e.target.checked}}
            />
          </div>
          <div class="flex-horizontal white">
            <div class="checkbox-caption">
              Use fast spot noise
              <nv-tooltip
                >Uses a fast inaccurate version of spot_noise function that ignores
                spot_favorability_expression and suggested_minimum_candidate_point_spacing for spot
                selection.</nv-tooltip
              >
            </div>
            <input
              type="checkbox"
              ?checked=${this.settings.fastSpotNoise}
              @change=${e=>{this.settings.fastSpotNoise=e.target.checked}}
            />
          </div>
        </div>
      </nv-overlay>
    `}restoreSettings(){const e={width:1024,height:1024,showAll:!1,fastSpotNoise:!1};try{const t=JSON.parse(localStorage.getItem("noise_viewer_settings"));e.width=t.width??e.width,e.height=t.height??e.height,e.showAll=t.showAll??e.showAll,e.fastSpotNoise=t.fastSpotNoise??e.fastSpotNoise}catch(e){}return e}saveSettings(){localStorage.setItem("noise_viewer_settings",JSON.stringify(this.settings)),this.dispatchEvent(new CustomEvent("settings-updated"))}};ni.styles=[Le,o`
      th {
        text-align: left;
        font-weight: normal;
      }

      .checkbox-caption {
        height: 32px;
        line-height: 32px;
        padding: 0px 2px;
      }

      .white {
        color: #ffffff;
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
    `],ii([de()],ni.prototype,"concealed",void 0),ii([ce({type:Object})],ni.prototype,"settings",void 0),ni=ii([re("nv-user-settings")],ni);var si=function(e,t,i,n){var s,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(a=(o<3?s(a):o>3?s(t,i,a):s(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let oi=class extends oe{constructor(){super()}render(){return I`
      <div class="tooltip">
        <div class="tooltip-icon"></div>
        <div class="tooltip-text">
          <slot></slot>
        </div>
      </div>
    `}};oi.styles=o`
    .tooltip {
      width: 16px;
      height: 16px;
      line-height: 16px;
      position: relative;
      display: inline-block;
      margin: 0px 4px 0px 0px;
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
      padding: 8px;
      bottom: 16px;
      color: #ffffff;
      max-width: 500px;
      min-width: 300px;
      display: none;
    }

    .tooltip:hover .tooltip-text {
      display: block;
    }
  `,oi=si([re("nv-tooltip")],oi);
