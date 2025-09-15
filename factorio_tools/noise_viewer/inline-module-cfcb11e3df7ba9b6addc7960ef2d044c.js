/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let a=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const i=this.t;if(t&&void 0===e){const t=void 0!==i&&1===i.length;t&&(e=s.get(i)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&s.set(i,e))}return e}toString(){return this.cssText}};const n=(e,...t)=>{const s=1===e.length?e[0]:t.reduce((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new a(s,e,i)},r=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new a("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:o,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:p,getOwnPropertySymbols:u,getPrototypeOf:h}=Object,d=globalThis,A=d.trustedTypes,f=A?A.emptyScript:"",m=d.reactiveElementPolyfillSupport,g=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},y=(e,t)=>!o(e,t),x={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),d.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);void 0!==s&&l(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:a}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:s,set(t){const n=s?.call(this);a?.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const e=h(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const e=this.properties,t=[...p(e),...u(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(r(e))}else void 0!==e&&t.push(r(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(t)i.adoptedStyleSheets=s.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const t of s){const s=document.createElement("style"),a=e.litNonce;void 0!==a&&s.setAttribute("nonce",a),s.textContent=t.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(void 0!==s&&!0===i.reflect){const a=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(t,i.type);this._$Em=e,null==a?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,t){const i=this.constructor,s=i._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=i.getPropertyOptions(s),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=s;const n=a.fromAttribute(t,e.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){const s=this.constructor,a=this[e];if(i??=s.getPropertyOptions(e),!((i.hasChanged??y)(a,t)||i.useDefault&&i.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:a},n){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==a||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===s&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,s=this[t];!0!==e||this._$AL.has(t)||void 0===s||this.C(t,void 0,i,s)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[g("elementProperties")]=new Map,b[g("finalized")]=new Map,m?.({ReactiveElement:b}),(d.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const E=globalThis,_=E.trustedTypes,w=_?_.createPolicy("lit-html",{createHTML:e=>e}):void 0,T="$lit$",R=`lit$${Math.random().toFixed(9).slice(2)}$`,$="?"+R,C=`<${$}>`,U=document,V=()=>U.createComment(""),S=e=>null===e||"object"!=typeof e&&"function"!=typeof e,k=Array.isArray,M="[ \t\n\f\r]",B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,P=/>/g,F=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,N=/"/g,D=/^(?:script|style|textarea|title)$/i,I=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),H=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),z=new WeakMap,Y=U.createTreeWalker(U,129);function K(e,t){if(!k(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(t):t}const X=(e,t)=>{const i=e.length-1,s=[];let a,n=2===t?"<svg>":3===t?"<math>":"",r=B;for(let t=0;t<i;t++){const i=e[t];let o,l,c=-1,p=0;for(;p<i.length&&(r.lastIndex=p,l=r.exec(i),null!==l);)p=r.lastIndex,r===B?"!--"===l[1]?r=O:void 0!==l[1]?r=P:void 0!==l[2]?(D.test(l[2])&&(a=RegExp("</"+l[2],"g")),r=F):void 0!==l[3]&&(r=F):r===F?">"===l[0]?(r=a??B,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,o=l[1],r=void 0===l[3]?F:'"'===l[3]?N:j):r===N||r===j?r=F:r===O||r===P?r=B:(r=F,a=void 0);const u=r===F&&e[t+1].startsWith("/>")?" ":"";n+=r===B?i+C:c>=0?(s.push(o),i.slice(0,c)+T+i.slice(c)+R+u):i+R+(-2===c?t:u)}return[K(e,n+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]};class G{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let a=0,n=0;const r=e.length-1,o=this.parts,[l,c]=X(e,t);if(this.el=G.createElement(l,i),Y.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=Y.nextNode())&&o.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(T)){const t=c[n++],i=s.getAttribute(e).split(R),r=/([.?@])?(.*)/.exec(t);o.push({type:1,index:a,name:r[2],strings:i,ctor:"."===r[1]?Z:"?"===r[1]?ee:"@"===r[1]?te:W}),s.removeAttribute(e)}else e.startsWith(R)&&(o.push({type:6,index:a}),s.removeAttribute(e));if(D.test(s.tagName)){const e=s.textContent.split(R),t=e.length-1;if(t>0){s.textContent=_?_.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],V()),Y.nextNode(),o.push({type:2,index:++a});s.append(e[t],V())}}}else if(8===s.nodeType)if(s.data===$)o.push({type:2,index:a});else{let e=-1;for(;-1!==(e=s.data.indexOf(R,e+1));)o.push({type:7,index:a}),e+=R.length-1}a++}}static createElement(e,t){const i=U.createElement("template");return i.innerHTML=e,i}}function q(e,t,i=e,s){if(t===H)return t;let a=void 0!==s?i._$Co?.[s]:i._$Cl;const n=S(t)?void 0:t._$litDirective$;return a?.constructor!==n&&(a?._$AO?.(!1),void 0===n?a=void 0:(a=new n(e),a._$AT(e,i,s)),void 0!==s?(i._$Co??=[])[s]=a:i._$Cl=a),void 0!==a&&(t=q(e,a._$AS(e,t.values),a,s)),t}class L{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??U).importNode(t,!0);Y.currentNode=s;let a=Y.nextNode(),n=0,r=0,o=i[0];for(;void 0!==o;){if(n===o.index){let t;2===o.type?t=new J(a,a.nextSibling,this,e):1===o.type?t=new o.ctor(a,o.name,o.strings,this,e):6===o.type&&(t=new ie(a,this,e)),this._$AV.push(t),o=i[++r]}n!==o?.index&&(a=Y.nextNode(),n++)}return Y.currentNode=U,s}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class J{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=q(this,e,t),S(e)?e===Q||null==e||""===e?(this._$AH!==Q&&this._$AR(),this._$AH=Q):e!==this._$AH&&e!==H&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>k(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Q&&S(this._$AH)?this._$AA.nextSibling.data=e:this.T(U.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,s="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=G.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{const e=new L(s,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=z.get(e.strings);return void 0===t&&z.set(e.strings,t=new G(e)),t}k(e){k(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const a of e)s===t.length?t.push(i=new J(this.O(V()),this.O(V()),this,this.options)):i=t[s],i._$AI(a),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class W{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,a){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Q}_$AI(e,t=this,i,s){const a=this.strings;let n=!1;if(void 0===a)e=q(this,e,t,0),n=!S(e)||e!==this._$AH&&e!==H,n&&(this._$AH=e);else{const s=e;let r,o;for(e=a[0],r=0;r<a.length-1;r++)o=q(this,s[i+r],t,r),o===H&&(o=this._$AH[r]),n||=!S(o)||o!==this._$AH[r],o===Q?e=Q:e!==Q&&(e+=(o??"")+a[r+1]),this._$AH[r]=o}n&&!s&&this.j(e)}j(e){e===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Z extends W{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Q?void 0:e}}class ee extends W{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Q)}}class te extends W{constructor(e,t,i,s,a){super(e,t,i,s,a),this.type=5}_$AI(e,t=this){if((e=q(this,e,t,0)??Q)===H)return;const i=this._$AH,s=e===Q&&i!==Q||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==Q&&(i===Q||s);s&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ie{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){q(this,e)}}const se=E.litHtmlPolyfillSupport;se?.(G,J),(E.litHtmlVersions??=[]).push("3.3.1");const ae=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ne=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const s=i?.renderBefore??t;let a=s._$litPart$;if(void 0===a){const e=i?.renderBefore??null;s._$litPart$=a=new J(t.insertBefore(V(),e),e,void 0,i??{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}};ne._$litElement$=!0,ne.finalized=!0,ae.litElementHydrateSupport?.({LitElement:ne});const re=ae.litElementPolyfillSupport;re?.({LitElement:ne}),(ae.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const oe=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},le={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},ce=(e=le,t,i)=>{const{kind:s,metadata:a}=i;let n=globalThis.litPropertyMetadata.get(a);if(void 0===n&&globalThis.litPropertyMetadata.set(a,n=new Map),"setter"===s&&((e=Object.create(e)).wrapped=!0),n.set(i.name,e),"accessor"===s){const{name:s}=i;return{set(i){const a=t.get.call(this);t.set.call(this,i),this.requestUpdate(s,a,e)},init(t){return void 0!==t&&this.C(s,void 0,e,t),t}}}if("setter"===s){const{name:s}=i;return function(i){const a=this[s];t.call(this,i),this.requestUpdate(s,a,e)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pe(e){return(t,i)=>"object"==typeof i?ce(e,t,i):((e,t,i)=>{const s=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),s?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ue(e){return pe({...e,state:!0,attribute:!1})}
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
function he(e,t){return(t,i,s)=>((e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i))(t,i,{get(){return(t=>t.renderRoot?.querySelector(e)??null)(this)}})}var de,Ae,fe=function(e,t,i,s){var a,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r},me=function(e,t,i,s){if("a"===i&&!s)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?s:"a"===i?s.call(e):s?s.value:t.get(e)};let ge=class extends ne{constructor(){super(),this.collapsed=!1,this.collapsed=!1}onClick(){this.collapsed=!this.collapsed,this.dispatchEvent(new CustomEvent("collapse-toggle",{bubbles:!0,composed:!0,detail:this.collapsed}))}render(){return I`<div
      class="${this.collapsed?"collapsed":"expanded"}"
      @click=${this.onClick}
    ></div>`}};ge.styles=n`
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
  `,fe([pe({type:Boolean})],ge.prototype,"collapsed",void 0),ge=fe([oe("nv-collapse-icon")],ge);let ve=class extends ne{constructor(){super(),de.add(this),this.caption="",this.collapsed=!1,this.concealed=!1,this.concealable=!1,this.deleteable=!1,this.moveable=!1,this.nudgeable=!1,this.addEventListener("collapse-toggle",e=>{e.stopPropagation(),this.collapsed=e.detail})}render(){return I`
      <div>
        <div
          class="header"
          draggable="${this.moveable?"true":"false"}"
          @dragover=${e=>{e.preventDefault()}}
          @drop=${e=>{e.preventDefault();const t=Array.from(e.dataTransfer?.items||[]).map(e=>e.getAsFile());t.length>0&&this.dispatchEvent(new CustomEvent("file-drop",{detail:t}))}}
        >
          ${this.concealable?I`<div
                class="eye-icon ${this.concealed?"concealed":""} "
                @click=${me(this,de,"m",Ae)}
              ></div>`:I`<div class="eye-placeholder"></div>`}
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
    `}};de=new WeakSet,Ae=function(){this.dispatchEvent(new CustomEvent("conceal-toggle",{detail:this.concealed}))},ve.styles=n`
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
    nv-nudge {
      margin: -4px;
    }
  `,fe([pe({type:String})],ve.prototype,"caption",void 0),fe([pe({type:Boolean})],ve.prototype,"collapsed",void 0),fe([pe({type:Boolean})],ve.prototype,"concealed",void 0),fe([pe({type:Boolean})],ve.prototype,"concealable",void 0),fe([pe({type:Boolean})],ve.prototype,"deleteable",void 0),fe([pe({type:Boolean})],ve.prototype,"moveable",void 0),fe([pe({type:Boolean})],ve.prototype,"nudgeable",void 0),ve=fe([oe("nv-collapse")],ve);var ye,xe,be=function(e,t,i,s,a){if("m"===s)throw new TypeError("Private method is not writable");if("a"===s&&!a)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===s?a.call(e,i):a?a.value=i:t.set(e,i),i},Ee=function(e,t,i,s){if("a"===i&&!s)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?s:"a"===i?s.call(e):s?s.value:t.get(e)};class _e{constructor(e,t){ye.set(this,void 0),xe.set(this,void 0),be(this,ye,e,"f"),be(this,xe,t,"f")}get x(){return Ee(this,ye,"f")}set x(e){be(this,ye,e,"f")}get y(){return Ee(this,xe,"f")}set y(e){be(this,xe,e,"f")}add(e){return new _e(this.x+e.x,this.y+e.y)}subtract(e){return new _e(this.x-e.x,this.y-e.y)}vmul(e){return this.x*e.y-e.x*this.y}smul(e){return this.x*e.x+this.y*e.y}mul(e){return new _e(this.x*e,this.y*e)}get len(){return Math.sqrt(this.smul(this))}min(e){return new _e(Math.min(this.x,e.x),Math.min(this.y,e.y))}max(e){return new _e(Math.max(this.x,e.x),Math.max(this.y,e.y))}floor(){return new _e(Math.floor(this.x),Math.floor(this.y))}ceil(){return new _e(Math.ceil(this.x),Math.ceil(this.y))}asArray(){return[this.x,this.y]}}ye=new WeakMap,xe=new WeakMap;var we,Te,Re,$e,Ce,Ue=function(e,t,i,s){var a,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r},Ve=function(e,t,i,s){if("a"===i&&!s)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?s:"a"===i?s.call(e):s?s.value:t.get(e)},Se=function(e,t,i,s,a){if("m"===s)throw new TypeError("Private method is not writable");if("a"===s&&!a)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===s?a.call(e,i):a?a.value=i:t.set(e,i),i};let ke=class extends ne{constructor(){super(),we.add(this),this.active=!1,Te.set(this,void 0),Se(this,Te,e=>{Ve(this,we,"m",$e).call(this,e)},"f")}render(){return I`
      <div class="nudge-icon ${this.active?"active":""}" @click=${Ve(this,we,"m",Re)}></div>
    `}get container(){return this}};function Me(e,t,i){return Math.min(Math.max(e,t),i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Te=new WeakMap,we=new WeakSet,Re=function(){this.active?Ve(this,we,"m",Ce).call(this):(this.active=!0,window.document.addEventListener("keydown",Ve(this,Te,"f")),this.classList.add("active"),window.document.addEventListener("mousedown",e=>{for(let t=e.target;null!==t;t=t.parentElement)if(t===this)return;Ve(this,we,"m",Ce).call(this)}))},$e=function(e){let t;switch(e.preventDefault(),e.code){case"ArrowLeft":case"KeyA":t=new _e(-32,0);break;case"ArrowUp":case"KeyW":t=new _e(0,-32);break;case"ArrowRight":case"KeyD":t=new _e(32,0);break;case"ArrowDown":case"KeyS":t=new _e(0,32);break;case"KeyQ":case"Escape":return void Ve(this,we,"m",Ce).call(this);case"NumpadAdd":case"Equal":return void this.dispatchEvent(new CustomEvent("zoom_in"));case"NumpadSubtract":case"Minus":return void this.dispatchEvent(new CustomEvent("zoom_out"));default:return}e.shiftKey?t=t.mul(8):e.ctrlKey&&(t=t.mul(1/32)),this.dispatchEvent(new CustomEvent("nudge",{detail:t}))},Ce=function(){this.active=!1,window.document.removeEventListener("keydown",Ve(this,Te,"f")),this.classList.remove("active")},ke.styles=n`
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
  `,Ue([pe({type:Boolean})],ke.prototype,"active",void 0),ke=Ue([oe("nv-nudge")],ke);const Be=1,Oe=3,Pe=4,Fe=e=>(...t)=>({_$litDirective$:e,values:t});let je=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ne={},De=Fe(class extends je{constructor(e){if(super(e),e.type!==Oe&&e.type!==Be&&e.type!==Pe)throw Error("The `live` directive is not allowed on child or event bindings");if(!(e=>void 0===e.strings)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===H||t===Q)return t;const i=e.element,s=e.name;if(e.type===Oe){if(t===i[s])return H}else if(e.type===Pe){if(!!t===i.hasAttribute(s))return H}else if(e.type===Be&&i.getAttribute(s)===t+"")return H;return((e,t=Ne)=>{e._$AH=t;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */})(e),t}});var Ie,He,Qe,ze=function(e,t,i,s){var a,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r},Ye=function(e,t,i,s){if("a"===i&&!s)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?s:"a"===i?s.call(e):s?s.value:t.get(e)};let Ke=class extends ne{constructor(e,t,i,s){super(),Ie.add(this),this.caption="",this.minValue=0,this.maxValue=0,this.value=0,this.allowFractional=!1,this.wide=!1,this.caption=e||"",this.minValue=t||0,this.maxValue=i||0,this.value=s||0}get container(){return this}safeReset(e){this.value=Me(e,this.minValue,this.maxValue)}render(){return I`
      <div class="right-aligned">
        <div>
          <input
            id="input"
            type="number"
            class="${this.wide?"wide":""}"
            @change=${Ye(this,Ie,"m",He)}
            @input=${Ye(this,Ie,"m",Qe)}
            .value="${De(this.value)}"
          />
        </div>
        <div class="number-input-caption">${this.caption}</div>
      </div>
    `}};Ie=new WeakSet,He=function(e){Ye(this,Ie,"m",Qe).call(this,e),this.dispatchEvent(new CustomEvent("change",{detail:this.value})),this.requestUpdate()},Qe=function(e){e.stopPropagation();const t=e.target.value;this.value=Me((this.allowFractional?parseFloat(t):parseInt(t))||0,this.minValue,this.maxValue),this.dispatchEvent(new CustomEvent("input",{detail:this.value}))},Ke.styles=n`
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
  `,ze([pe({type:String})],Ke.prototype,"caption",void 0),ze([pe({type:Number})],Ke.prototype,"minValue",void 0),ze([pe({type:Number})],Ke.prototype,"maxValue",void 0),ze([pe({type:Number})],Ke.prototype,"value",void 0),ze([pe({type:Boolean})],Ke.prototype,"allowFractional",void 0),ze([pe({type:Boolean})],Ke.prototype,"wide",void 0),Ke=ze([oe("nv-number-input")],Ke);const Xe=n`
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
`,Ge=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117];function qe(e){let t=4294967295;const i=(new TextEncoder).encode(e);for(const e of i){t=t>>>8^Ge[255&(t^e)]}return t^=4294967295,t<0&&(t+=4294967296),t}function Le(e){return`${e.replaceAll(/[^A-Za-z]/g,"")}_${qe(e).toString(16)}`}const Je=`\n  uint h = seed0;\n  h ^= ${Le("murmur_scramble")}(seed1);\n  h = (h << 13) | (h >> 19);\n  h = h * 5u + 0xe6546b64u;\n  h ^= ${Le("murmur_scramble")}(seed2);\n  h = (h << 13) | (h >> 19);\n  h = h * 5u + 0xe6546b64u;\n  h ^= ${Le("murmur_scramble")}(x);\n  h = (h << 13) | (h >> 19);\n  h = h * 5u + 0xe6546b64u;\n  h ^= ${Le("murmur_scramble")}(y);\n  h = (h << 13) | (h >> 19);\n  h = h * 5u + 0xe6546b64u;\n  h ^= h >> 16;\n  h *= 0x85ebca6bu;\n  h ^= h >> 13;\n  h *= 0xc2b2ae35u;\n  h ^= h >> 16;\n  return h;\n`,We=`\n  vec2 position = vec2(x + offset_x, y + offset_y) * input_scale;\n  vec2 floor_position = floor(position);\n  vec2 fract_position = position - floor(position);\n  uvec2 cell_position = uvec2(floor_position + vec2(65536, 65536));\n\n  uint dir1 = ${Le("murmur")}(cell_position.x, cell_position.y, seed0, seed1, 0u) & 3u;\n  uint dir2 = ${Le("murmur")}(cell_position.x + 1u, cell_position.y, seed0, seed1, 0u) & 3u;\n  uint dir3 = ${Le("murmur")}(cell_position.x, cell_position.y + 1u, seed0, seed1, 0u) & 3u;\n  uint dir4 = ${Le("murmur")}(cell_position.x + 1u, cell_position.y + 1u, seed0, seed1, 0u) & 3u;\n\n  vec2 gradient_vectors[4];\n  gradient_vectors[0] = vec2(1.0, 1.0);\n  gradient_vectors[1] = vec2(-1.0, 1.0);\n  gradient_vectors[2] = vec2(1.0, -1.0);\n  gradient_vectors[3] = vec2(-1.0, -1.0);\n\n  float value1 = dot(gradient_vectors[dir1], fract_position);\n  float value2 = dot(gradient_vectors[dir2], fract_position - vec2(1., 0.));\n  float value3 = dot(gradient_vectors[dir3], fract_position - vec2(0., 1.));\n  float value4 = dot(gradient_vectors[dir4], fract_position - vec2(1., 1.));\n\n  float fx = fract_position.x;\n  float fy = fract_position.y;\n  float fade_x = fx * fx * fx * (fx * (fx * 6.0 - 15.0) + 10.0);\n  float fade_y = fy * fy * fy * (fy * (fy * 6.0 - 15.0) + 10.0);\n\n  float result = mix(mix(value1, value2, fade_x), mix(value3, value4, fade_x), fade_y);\n  return result * 2. * output_scale;\n`,Ze=`\n  float result = 0.;\n  float total_weight = 0.;\n  for (uint i = 0u; i < octaves; i++) {\n    result = result * persistence + \n      ${Le("basis_noise")}(x, y, seed0, seed1 + i, input_scale, output_scale, offset_x, offset_y);\n    total_weight = total_weight * persistence * persistence + 1.;\n    seed1 = ${Le("murmur_scramble")}(seed1);\n    input_scale = input_scale / 2.;\n  }\n  return result / sqrt(total_weight);\n`,et=`\n  float result = 0.;\n  float multiplier = 1.;\n  for (uint i = 0u; i < octaves; i++) {\n    result += multiplier * \n      ${Le("basis_noise")}(x, y, seed0, seed1, input_scale, output_scale, offset_x, offset_y);\n    seed1 = ${Le("murmur_scramble")}(seed1);\n    input_scale *= octave_input_scale_multiplier;\n    multiplier *= octave_output_scale_multiplier;\n  }\n  return result;\n`;const tt=function(){const e=new Map,t=(t,i,s,a,n)=>{const r=s.map(e=>`${e.type} ${e.name}`),o=`${i} ${Le(t)}(${r.join(", ")}) {\n`;e.set(t,{valueType:i,args:s,definition:"".concat(o,a,"}\n\n"),dependencies:n})},i=(e,i,s)=>{t(e,"float",i.map(e=>({name:e,type:"float"})),`  return ${s};\n`)};return i("abs",["a"],"abs(a)"),i("min",["a","b"],"min(a, b)"),i("max",["a","b"],"max(a, b)"),i("clamp",["x","min","max"],"clamp(x, min, max)"),i("floor",["x"],"floor(x)"),i("log2",["x"],"log2(x)"),i("pow",["x","y"],"pow(x, y)"),i("sqrt",["x"],"sqrt(x)"),i("sin",["x"],"sin(x)"),i("cos",["x"],"cos(x)"),t("if","float",[{name:"cond",type:"bool"},{name:"if_true",type:"float"},{name:"if_false",type:"float"}],"  return cond ? if_true : if_false;\n",[]),t("distance_from_nearest_point","float",[{name:"x",type:"float"},{name:"y",type:"float"},{name:"points",type:"vec2"},{name:"max_distance",type:"float",default:"intBitsToFloat(2139095039)"}],"  return min(max_distance, length(vec2(x, y) - points));\n"),t("distance_from_nearest_point_x","float",[{name:"x",type:"float"},{name:"y",type:"float"},{name:"points",type:"vec2"}],"  return x - points.x;\n"),t("distance_from_nearest_point_y","float",[{name:"x",type:"float"},{name:"y",type:"float"},{name:"points",type:"vec2"}],"  return y - points.y;\n"),t("expression_in_range","float",[{name:"angle",type:"float"},{name:"max_value",type:"float"},{name:"a",type:"float"},{name:"b",type:"float"},{name:"a_min",type:"float"},{name:"b_min",type:"float"},{name:"a_max",type:"float"},{name:"b_max",type:"float"}],"\n  float a_value = min(a - a_min, a_max - a);\n  float b_value = min(b - b_min, b_max - b);\n  float value = min(a_value, b_value);\n  return min(value * angle, max_value);\n"),t("murmur_scramble","uint",[{name:"k",type:"uint"}],"\n  k *= 0xcc9e2d51u;\n  k = (k << 15) | (k >> 17);\n  k *= 0x1b873593u;\n  return k;\n"),t("murmur","uint",[{name:"x",type:"uint"},{name:"y",type:"uint"},{name:"seed0",type:"uint"},{name:"seed1",type:"uint"},{name:"seed2",type:"uint"}],Je,["murmur_scramble"]),t("basis_noise","float",[{name:"x",type:"float"},{name:"y",type:"float"},{name:"seed0",type:"uint"},{name:"seed1",type:"uint"},{name:"input_scale",type:"float",default:"1."},{name:"output_scale",type:"float",default:"1."},{name:"offset_x",type:"float",default:"0."},{name:"offset_y",type:"float",default:"0."}],We,["murmur"]),t("multioctave_noise","float",[{name:"x",type:"float"},{name:"y",type:"float"},{name:"persistence",type:"float"},{name:"seed0",type:"uint"},{name:"seed1",type:"uint"},{name:"octaves",type:"uint"},{name:"input_scale",type:"float",default:"1."},{name:"output_scale",type:"float",default:"1."},{name:"offset_x",type:"float",default:"0."},{name:"offset_y",type:"float",default:"0."}],Ze,["basis_noise"]),t("quick_multioctave_noise","float",[{name:"x",type:"float"},{name:"y",type:"float"},{name:"seed0",type:"uint"},{name:"seed1",type:"uint"},{name:"octaves",type:"uint"},{name:"input_scale",type:"float",default:"1."},{name:"output_scale",type:"float",default:"1."},{name:"octave_input_scale_multiplier",type:"float",default:"0.5"},{name:"octave_output_scale_multiplier",type:"float",default:"2."},{name:"offset_x",type:"float",default:"0."},{name:"offset_y",type:"float",default:"0."}],et,["basis_noise"]),t("variable_persistence_multioctave_noise","float",[{name:"x",type:"float"},{name:"y",type:"float"},{name:"persistence",type:"float"},{name:"seed0",type:"uint"},{name:"seed1",type:"uint"},{name:"octaves",type:"uint"},{name:"input_scale",type:"float",default:"1."},{name:"output_scale",type:"float",default:"1."},{name:"offset_x",type:"float",default:"0."},{name:"offset_y",type:"float",default:"0."}],Ze,["basis_noise"]),e}();class it{constructor(e){this.str=e,this.position=0}parse(){const e=this.str.length,t=[];for(;this.position<e;){const e=this.str.charAt(this.position);if(e.match(/[ \r\n\t]/))this.position++;else if(e.match(/[a-zA-Z_]/))t.push(this.parseIdentifier());else if(e.match(/[0-9.]/))t.push(this.parseNumber());else if(e.match(/['"]/))t.push(this.parseString());else if(e.match(/[-+^*/%<>=!~&|]/))t.push(this.parseOperator());else{if(!e.match(/[(){},]/))throw"Unexpected character: "+e;t.push({type:"separator",value:e}),this.position++}}return t}parseIdentifier(){return{type:"identifier",value:this.readMatching(/[a-zA-Z0-9_:]/)}}parseNumber(){let e;if("0"==this.str.charAt(this.position)&&"x"==this.str.charAt(this.position+1)?e=this.readMatching(/[0-9a-fx]/):(e=this.readMatching(/[0-9.]/),"e"==this.str.charAt(this.position)&&(e+=this.str.charAt(this.position++),"-"==this.str.charAt(this.position)&&(e+=this.str.charAt(this.position++)),e+=this.readMatching(/[0-9]/))),!e.match(/^(0x[0-9a-f]+|([0-9]+\.?[0-9]*|\.[0-9]+)(e-?[0-9]+)?)$/))throw"Invalid number: "+e;return{type:"number",value:e}}parseString(){const e=this.str.charAt(this.position++),t=this.readMatching("'"==e?/[^']/:/[^"]/);if(this.str.charAt(this.position++)!=e)throw"Unmatched quote";return{type:"string",value:t}}parseOperator(){return"="==this.str.charAt(this.position)?{type:"operator",value:this.readMatching(/[=]/)}:{type:"operator",value:this.readMatching(/[-+^*/%<>=!~&|]/)}}readMatching(e){let t="";for(;;){const i=this.str.charAt(this.position);if(!i.match(e))return t;t+=i,this.position++}}}const st=[["^"],["++","--","~~"],["*","/","%","%%"],["+","-"],["<","<=",">",">="],["==","~=","!="],["&"],["~"],["|"]],at=(()=>{const e=new Map;return st.forEach((t,i)=>{t.forEach(t=>{e.set(t,i)})}),e})();class nt{constructor(e){this.tokens=function(e){return new it(e).parse()}(`(${e})`),this.pos=0}parse(){return this.parseExpression()}parseExpression(){let e=!0;const t=[],i=[],s=e=>{for(;i.length>0&&at.get(i[i.length-1])<=e;){const e=i.pop(),s=[];s.push(t.pop()),"++"!=e&&"--"!=e&&"~~"!=e&&s.unshift(t.pop()),t.push({type:"operator",value:e,args:s})}};for(;;){const a=this.tokens[this.pos++];switch(a?.type){case"number":if(!e)throw"Unexpected value: `"+a.value+"`";e=!1,t.push({type:"number_constant",value:a.value});break;case"string":if(!e)throw"Unexpected value: `"+a.value+"`";e=!1,t.push({type:"string_constant",value:a.value});break;case"operator":{let t=a.value;if(e){if("+"!=t&&"-"!=t&&"~"!=t)throw"Expected value, got `"+t+"` instead";t+=t}e=!0,"^"!=t&&s(at.get(t)),i.push(t);break}case"identifier":if(!e)throw"Unexpected value: `"+a.value+"`";if(e=!1,"("==this.tokens[this.pos].value){this.pos++,t.push({type:"function",value:a.value,args:this.parseArgs()});const e=this.tokens[this.pos++].value;if(")"!=e)throw"Unexpected token: `"+e+"`, expected `)`";if("var"==a.value){const e=t.pop();if(1!=e.args.length)throw"Unexpected number of arguments for `var`";if("string_constant"!=e.args[0].type)throw"Unexpected type of argument for `var`";t.push({type:"variable",value:e.args[0].value})}}else if("{"==this.tokens[this.pos].value){this.pos++,t.push({type:"function",value:a.value,kwargs:this.parseKwArgs()});const e=this.tokens[this.pos++].value;if("}"!=e)throw"Unexpected token: `"+e+"`, expected `}`"}else t.push({type:"variable",value:a.value});break;case void 0:case"separator":if(void 0===a||")"==a.value||"}"==a.value||","==a.value){if(e)throw"Unexpected token: `"+a.value+"`, expected value";if(this.pos--,s(1e3),1!=t.length)throw"Internal parsing error: mismatch between the number of values and operators";return t[0]}if("("!=a.value)throw"Unexpected token: `"+a.value+"`";{if(!e)throw"Unexpected token: `(`, expected operator";e=!1,t.push(this.parseExpression());const i=this.tokens[this.pos++].value;if(")"!=i)throw"Unexpected token: `"+i+"`, expected `)`"}}}}parseArgs(){const e=[];if(")"==this.tokens[this.pos].value)return e;for(;;){e.push(this.parseExpression());const t=this.tokens[this.pos].value;if(")"==t)return e;if(","!=t)throw"Unexpected token: `"+t+"`, expected )";this.pos++}}parseKwArgs(){const e=new Map;if("}"==this.tokens[this.pos].value)return e;for(;;){const t=this.tokens[this.pos++];if("identifier"!=t.type)throw"Unexpected token: `"+t.value+"`, expected identifier";const i=this.tokens[this.pos++];if("="!=i.value)throw"Unexpected token: `"+i.value+"`, expected =";const s=this.parseExpression();e.set(t.value,s);const a=this.tokens[this.pos].value;if("}"==a)return e;if(","!=a)throw"Unexpected token: `"+a+"`, expected }";this.pos++}}}function rt(e){return new nt(e).parse()}class ot{constructor(e,t){this.valueType=e,this.value=t}castTo(e){return e===this.valueType?this.value:`${e}(${this.value})`}}const lt=function(){const e=new Map,t=(t,i,s,a)=>{e.set(t,{args:s,compile:e=>new ot(i,a(e))})};return t("^","float",["float","float"],e=>`pow(${e[0]}, ${e[1]})`),t("++","float",["float"],e=>e[0]),t("--","float",["float"],e=>`-(${e[0]})`),t("~~","bool",["bool"],e=>`!(${e[0]})`),t("*","float",["float","float"],e=>`(${e[0]}) * (${e[1]})`),t("/","float",["float","float"],e=>`(${e[0]}) / (${e[1]})`),t("%","float",["float","float"],e=>`(${e[0]}) % (${e[1]})`),t("+","float",["float","float"],e=>`(${e[0]}) + (${e[1]})`),t("-","float",["float","float"],e=>`(${e[0]}) - (${e[1]})`),t("<","bool",["float","float"],e=>`(${e[0]}) < (${e[1]})`),t("<=","bool",["float","float"],e=>`(${e[0]}) <= (${e[1]})`),t(">","bool",["float","float"],e=>`(${e[0]}) > (${e[1]})`),t(">=","bool",["float","float"],e=>`(${e[0]}) >= (${e[1]})`),t("==","bool",["float","float"],e=>`(${e[0]}) == (${e[1]})`),t("~=","bool",["float","float"],e=>`(${e[0]}) != (${e[1]})`),t("!=","bool",["float","float"],e=>`(${e[0]}) != (${e[1]})`),t("&","uint",["uint","uint"],e=>`(${e[0]}) & (${e[1]})`),t("~","uint",["uint","uint"],e=>`(${e[0]}) ^ (${e[1]})`),t("|","uint",["uint","uint"],e=>`(${e[0]}) | (${e[1]})`),e}();function ct(e){return t=>e(e,t)}function pt(e){return t=>e(e,t)}const ut=new Map([["true",new ot("int","1")],["false",new ot("int","0")],["e",new ot("float","2.71828182845904523536")],["pi",new ot("float","3.14159265358979323844")],["inf",new ot("float","intBitsToFloat(2139095039)")]]);class ht{constructor(e,t){this.dataRaw=e;const i=e.planet[t].map_gen_settings;this.propertyExpressionNames=new Map(Object.entries(i.property_expression_names)),this.environmentVariables=new Map([["map_seed","uint"],["starting_area_radius","float"],["cliff_elevation_0","float"],["cliff_elevation_interval","float"],["cliff_smoothing","float"],["cliff_richness","float"],["starting_positions","vec2"],["starting_lake_positions","vec2"],["control:moisture:frequency","float"],["control:moisture:bias","float"],["control:aux:frequency","float"],["control:aux:bias","float"],["control:temperature:frequency","float"],["control:temperature:bias","float"]]),Object.entries(i.autoplace_controls).forEach(([e,t])=>{this.environmentVariables.set(`control:${e}:frequency`,"float"),this.environmentVariables.set(`control:${e}:size`,"float"),this.environmentVariables.set(`control:${e}:richness`,"float")})}compileExpression(e,t,i){switch(e.type){case"number_constant":return new ot("number",e.value);case"string_constant":return new ot("uint",`${qe(e.value)}u`);case"function":{const s=e.value,a=i(s),n=[];return a.args.forEach((a,r)=>{if(void 0!==e.args)if(r<e.args.length)n.push(this.compileExpression(e.args[r],t,i).castTo(a.type));else{if(void 0===a.default)throw`Not enough parameters in call to ${s}`;n.push(a.default)}else{const r=e.kwargs.get(a.name);if(void 0!==r)n.push(this.compileExpression(r,t,i).castTo(a.type));else{if(void 0===a.default)throw`Named param ${a} not found in call to ${s}`;n.push(a.default)}}}),new ot(a.valueType,`${Le(s)}(${n.join(", ")})`)}case"operator":{const s=lt.get(e.value);if(void 0===s)throw`Unsupported operator ${e.value}`;return s.compile(e.args.map((e,a)=>this.compileExpression(e,t,i).castTo(s.args[a])))}case"variable":return t(e.value)}}compileCodeBlock(e,t,i,s,a){const n=[],r=this.compileExpression(rt(e),ct((e,r)=>{if(t.includes(r))return new ot("float",Le(r));const o=n.find(e=>e.name===r);if(void 0!==o)return new ot(o.value.valueType,Le(r));if(i.has(r)){let t=this.compileExpression(rt(i.get(r)),ct(e),a);return"number"===t.valueType&&(t=new ot("float",t.castTo("float"))),n.push({name:r,value:t}),new ot(t.valueType,Le(r))}{const e=s(r);return n.push({name:r,value:e}),new ot(e.valueType,Le(r))}}),a);return"".concat(...n.map(e=>`  ${e.value.valueType} ${Le(e.name)} = ${e.value.value};\n`),`  return ${r.castTo("float")};\n`)}compileFullExpression(e,t){const i=[],s=new Map([["__scale__","float"],["__shift__","vec2"]]),a=new Set,n=(e,t)=>{if(this.propertyExpressionNames.has(t))return e(e,this.propertyExpressionNames.get(t));if(this.dataRaw["noise-expression"].hasOwnProperty(t))return a.add(t),new ot("float",`texelFetch(tex_${Le(t)}, ivec2(v_texCoords), 0).r`);if("x"===t||"y"===t)return new ot("float",`round(v_mapCoords.${t})`);if(ut.has(t))return ut.get(t);if(this.environmentVariables.has(t)){const e=this.environmentVariables.get(t);return s.set(t,e),new ot(e,`u_${Le(t)}`)}throw`Unknown variable ${t}`},r=this.compileCodeBlock(e,[],t,ct(n),pt((e,t)=>{const s=i.find(e=>e.name===t);if(void 0!==s)return s.func;if(this.dataRaw["noise-function"].hasOwnProperty(t)){const s=this.dataRaw["noise-function"][t],a={valueType:"float",args:s.parameters.map(e=>({name:e,type:"float"}))},r=this.compileCodeBlock(s.expression,s.parameters,new Map(Object.entries(s.local_expressions||{})),ct(n),pt(e)),o=a.args.map(e=>`${e.type} ${Le(e.name)}`),l=`float ${Le(t)}(${o.join(", ")}) {\n`,c="".concat(l,r,"}\n\n");return i.push({name:t,func:{definition:c,...a}}),a}if(tt.has(t)){const s=tt.get(t);return(s.dependencies||[]).forEach(t=>{e(e,t)}),i.push({name:t,func:s}),s}throw`Could not find function named ${t}`})),o=`float ${Le("__result__")}() {\n${r}}\n\n`,l=Array.from(a).map(e=>`uniform highp sampler2D tex_${Le(e)};\n`),c=Array.from(s.entries()).map(([e,t])=>`uniform ${t} u_${Le(e)};\n`),p=i.map(e=>`${e.func.definition}`),u=`void main() {\n  outValue = ${Le("__result__")}();\n}\n`;return{shader:"".concat("#version 300 es\nprecision highp float;\n\nout float outValue;\nin vec2 v_mapCoords;\nin vec2 v_texCoords;\n\n",...l,...c,"\n",...p,o,u),uniforms:s,expressions:a}}compileNamedNoiseExpression(e){return this.compileFullExpression(e.expression,new Map(Object.entries(e.local_expressions||{})))}compileNoiseExpression(e){return this.compileFullExpression(e,new Map)}}const dt=`#version 300 es\nprecision highp float;\n\nin vec2 a_vertexPosition;\nout vec2 v_mapCoords;\nout vec2 v_texCoords;\nuniform vec2 u_${Le("__shift__")};\nuniform float u_${Le("__scale__")};\n\nvoid main() {\n  v_mapCoords = a_vertexPosition * u_${Le("__scale__")} + u_${Le("__shift__")};\n  v_texCoords = a_vertexPosition + vec2(512, 512);\n  gl_Position = vec4((v_texCoords + vec2(0.5))/ 512. - vec2(1.), 0., 1.);\n}`;function At(e,t,i){const s=e.createShader(t);if(e.shaderSource(s,i),e.compileShader(s),!e.getShaderParameter(s,e.COMPILE_STATUS))throw`An error occurred compiling the shaders: ${e.getShaderInfoLog(s)}`;return s}function ft(e,t){const i=At(e,e.VERTEX_SHADER,dt),s=At(e,e.FRAGMENT_SHADER,t),a=e.createProgram();if(e.attachShader(a,i),e.attachShader(a,s),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw`Unable to initialize the shader program: ${e.getProgramInfoLog(a)}`;return a}function mt(e){const t=e.createTexture();return e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texImage2D(e.TEXTURE_2D,0,e.R32F,1024,1024,0,e.RED,e.FLOAT,null),t}function gt(e){const t=e.createTexture();return e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1024,1024,0,e.RGBA,e.UNSIGNED_BYTE,null),t}class vt{constructor(e,t){this.canvas=new OffscreenCanvas(1024,1024),this.gl=this.canvas.getContext("webgl2");const i=this.gl;if(i.disable(i.BLEND),null===i.getExtension("EXT_color_buffer_float"))throw"EXT_color_buffer_float extension is not supported";this.fb=i.createFramebuffer(),this.positionBuffer=i.createBuffer(),i.bindBuffer(i.ARRAY_BUFFER,this.positionBuffer),i.bufferData(i.ARRAY_BUFFER,new Float32Array([512,512,-512,512,512,-512,-512,-512]),i.STATIC_DRAW),this.visualizeProgram=ft(i,"#version 300 es\nprecision highp float;\n\nuniform highp sampler2D u_texture;\nin vec2 v_mapCoords;\nin vec2 v_texCoords;\nout vec4 outValue;\n\nvoid main() {\n  float value = texelFetch(u_texture, ivec2(v_texCoords), 0).r;\n  if (value < -1.) {\n    outValue = vec4(0., log(-value) / log(1000.), 1., 1.);\n  } else if (value < 0.) {\n    outValue = vec4(0., 0., -value, 1.);\n  } else if (value < 1.) {\n    outValue = vec4(value, 0., 0., 1.);  \n  } else {\n    outValue = vec4(1., log(value) / log(1000.), 0., 1.);  \n  }\n}"),this.visualizeTexture=gt(i),this.inputHeightmap=mt(i),this.outputHeightmap=mt(i),this.inputTilemap=gt(i),this.outputTilemap=gt(i),this.clearProgram=ft(i,"#version 300 es\nprecision highp float;\n\nin vec2 v_texCoords;\nlayout(location = 0) out vec4 out_tile;\nlayout(location = 1) out float out_height;\n\nvoid main() {\n  out_height = -intBitsToFloat(2139095039);\n  out_tile = vec4(0., 0., 0., 1.);\n}"),this.placeTileProgram=ft(i,"#version 300 es\nprecision highp float;\n\nin vec2 v_texCoords;\nlayout(location = 0) out vec4 out_tile;\nlayout(location = 1) out float out_height;\n\nuniform highp sampler2D u_heightMap;\nuniform sampler2D u_tileMap;\n\nuniform highp sampler2D u_tileExpression;\nuniform vec4 u_tileColor;\n\nvoid main() {\n  float old_height = texelFetch(u_heightMap, ivec2(v_texCoords), 0).r;\n  float new_height = texelFetch(u_tileExpression, ivec2(v_texCoords), 0).r;\n  vec4 old_tile = texelFetch(u_tileMap, ivec2(v_texCoords), 0);\n  if (new_height > old_height) {\n    out_height = new_height;\n    out_tile = u_tileColor;\n  } else {\n    out_height = old_height;\n    out_tile = old_tile;\n  }\n}"),this.compiler=new ht(e,t);const s=e.planet[t].map_gen_settings.autoplace_settings;this.tiles=new Map,this.tileColors=new Map,Object.entries(s.tile.settings).forEach(([t,s])=>{const a=e.tile[t],n=this.compiler.compileNoiseExpression(a.autoplace.probability_expression),r=ft(i,n.shader),o=mt(i);this.tiles.set(t,{expression:n,program:r,texture:o,evaluated:-1}),this.tileColors.set(t,function(e){let t,i,s;return Array.isArray(e)?(t=e[0],i=e[1],s=e[2]):(t=e.r,i=e.g,s=e.b),(t>1||i>0||s>0)&&(t/=255,i/=255,s/=255),[t,i,s,1]}(a.map_color))}),this.namedExpressions=new Map(Object.entries(e["noise-expression"]).map(([e,t])=>{try{const s=this.compiler.compileNamedNoiseExpression(t),a=ft(i,s.shader);return[e,{expression:s,program:a,texture:mt(i),evaluated:-1}]}catch(t){return[e,{compilationError:t,evaluated:-1}]}})),Array.from(this.namedExpressions.values()).forEach(e=>{this.validateExpressionDependencies(e)}),Array.from(this.tiles.values()).forEach(e=>{this.validateExpressionDependencies(e)}),this.constants=new Map([["map_seed",[0]],["__scale__",[1]],["__shift__",[0,0]],["starting_area_radius",[150]],["cliff_elevation_0",[10]],["cliff_elevation_interval",[40]],["cliff_smoothing",[0]],["cliff_richness",[1]],["starting_positions",[0,0]],["starting_lake_positions",[0,0]],["control:moisture:frequency",[1]],["control:moisture:bias",[0]],["control:aux:frequency",[1]],["control:aux:bias",[0]],["control:temperature:frequency",[1]],["control:temperature:bias",[0]]]);const a=e.planet[t].map_gen_settings;this.autoplaceControlNames=Object.entries(a.autoplace_controls).map(([e,t])=>e),this.autoplaceControlNames.forEach(e=>{this.constants.set(`control:${e}:frequency`,[1]),this.constants.set(`control:${e}:size`,[1]),this.constants.set(`control:${e}:richness`,[1])})}renderTo(e){const t=this.gl;t.bindFramebuffer(t.FRAMEBUFFER,this.fb),t.drawBuffers([t.COLOR_ATTACHMENT0]),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0),t.viewport(0,0,1024,1024)}runProgram(e){const t=this.gl;t.bindBuffer(t.ARRAY_BUFFER,this.positionBuffer),t.vertexAttribPointer(t.getAttribLocation(e,"a_vertexPosition"),2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(t.getAttribLocation(e,"a_vertexPosition")),t.drawArrays(t.TRIANGLE_STRIP,0,4)}validateExpressionDependencies(e){if(e.compilationError)return!1;if(e.evaluated>=0)return!0;e.evaluated=0;for(const t of e.expression.expressions)if(!this.validateExpressionDependencies(this.namedExpressions.get(t)))return e.compilationError=`Failed to process required expression ${t}`,!1;return!0}getExpressionResult(e){if(e.compilationError)throw"This expression has not been compiled";if(e.evaluated==this.currentVersion)return e.texture;const t=Array.from(e.expression.expressions).map(e=>[e,this.getExpressionResult(this.namedExpressions.get(e))]),i=this.gl;return i.useProgram(e.program),t.forEach(([t,s],a)=>{i.activeTexture(i.TEXTURE0+a),i.bindTexture(i.TEXTURE_2D,s),i.uniform1i(i.getUniformLocation(e.program,`tex_${Le(t)}`),a)}),Array.from(e.expression.uniforms).forEach(([t,s])=>{const a=i.getUniformLocation(e.program,`u_${Le(t)}`),n=this.constants.get(t);if(void 0!==n)switch(s){case"float":i.uniform1fv(a,n);break;case"vec2":i.uniform2fv(a,n);break;case"uint":i.uniform1uiv(a,n);break;case"int":i.uniform1iv(a,n);break;default:console.log(`Unexpected uniform type: ${s}`)}else console.log(`Missing constant ${t}`)}),this.renderTo(e.texture),this.runProgram(e.program),e.evaluated=this.currentVersion,e.texture}visualizeResult(e){const t=this.gl;t.useProgram(this.visualizeProgram),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,e),t.uniform1i(t.getUniformLocation(this.visualizeProgram,"u_texture"),0),this.renderTo(this.visualizeTexture),this.runProgram(this.visualizeProgram);const i=new ImageData(1024,1024);return t.readPixels(0,0,1024,1024,t.RGBA,t.UNSIGNED_BYTE,i.data),i}placeAllTiles(){Array.from(this.tiles).forEach(([e,t])=>{t.compilationError||this.getExpressionResult(t)});const e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,this.fb),e.viewport(0,0,1024,1024),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1]),e.useProgram(this.clearProgram),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.inputTilemap,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,this.inputHeightmap,0),this.runProgram(this.clearProgram),e.useProgram(this.placeTileProgram),e.uniform1i(e.getUniformLocation(this.placeTileProgram,"u_tileMap"),0),e.uniform1i(e.getUniformLocation(this.placeTileProgram,"u_heightMap"),1),e.uniform1i(e.getUniformLocation(this.placeTileProgram,"u_tileExpression"),2),Array.from(this.tiles).forEach(([t,i])=>{i.compilationError||(e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.outputTilemap,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,this.outputHeightmap,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.inputTilemap),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.inputHeightmap),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,i.texture),e.uniform4fv(e.getUniformLocation(this.placeTileProgram,"u_tileColor"),this.tileColors.get(t)),this.runProgram(this.placeTileProgram),[this.inputHeightmap,this.outputHeightmap]=[this.outputHeightmap,this.inputHeightmap],[this.inputTilemap,this.outputTilemap]=[this.outputTilemap,this.inputTilemap])});const t=new ImageData(1024,1024);return e.readPixels(0,0,1024,1024,e.RGBA,e.UNSIGNED_BYTE,t.data),t}getExpressionValue(e,t,i){const s=this.getExpressionResult(e);this.renderTo(s);const a=new Float32Array(1),n=this.gl;return n.readPixels(t,i,1,1,n.RED,n.FLOAT,a),a[0]}setSeed(e){this.constants.set("map_seed",[e]),this.constants.set("map_seed_small",[65535&e]),this.constants.set("map_seed_normalized",[e/4294967295]),this.constants.set("starting_lake_positions",[75*Math.sin(e),75*Math.cos(e)]),this.currentVersion++}setScale(e){this.constants.set("__scale__",[e]),this.currentVersion++}setShift(e,t){this.constants.set("__shift__",[e,t]),this.currentVersion++}setControl(e,t){this.constants.set(e,[t]),this.currentVersion++}toExpressionHandler(e,t){return t.compilationError?{name:e,compilationError:t.compilationError}:{name:e,getFullResult:()=>this.visualizeResult(this.getExpressionResult(t)),getExpressionValues:(i,s)=>[{name:e,value:this.getExpressionValue(t,i,s)}]}}get expressions(){return Array.from(this.namedExpressions).map(([e,t])=>this.toExpressionHandler(e,t)).toSorted((e,t)=>e.name.localeCompare(t.name))}get tileNames(){return Array.from(this.tiles).map(([e,t])=>this.toExpressionHandler(e,t)).toSorted((e,t)=>e.name.localeCompare(t.name))}get autoplaceControls(){return this.autoplaceControlNames}get allTilesHandler(){return{name:"Tiles",getFullResult:()=>this.placeAllTiles(),getExpressionValues:(e,t)=>Array.from(this.tiles).flatMap(([i,s])=>s.compilationError?[]:[{name:i,value:this.getExpressionValue(s,e,t)}]).toSorted((e,t)=>e.name.localeCompare(t.name))}}}var yt=function(e,t,i,s){var a,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};const xt=[{displayValue:"13%",realValue:6},{displayValue:"25%",realValue:4},{displayValue:"33%",realValue:3},{displayValue:"50%",realValue:2},{displayValue:"75%",realValue:4/3},{displayValue:"100%",realValue:1},{displayValue:"133%",realValue:3/4},{displayValue:"150%",realValue:2/3},{displayValue:"200%",realValue:.5},{displayValue:"300%",realValue:1/3},{displayValue:"400%",realValue:1/4},{displayValue:"600%",realValue:1/6}],bt=[{displayValue:"13%",realValue:1/6},{displayValue:"25%",realValue:1/4},{displayValue:"33%",realValue:1/3},{displayValue:"50%",realValue:.5},{displayValue:"75%",realValue:3/4},{displayValue:"100%",realValue:1},{displayValue:"133%",realValue:2},{displayValue:"150%",realValue:1.5},{displayValue:"200%",realValue:2},{displayValue:"300%",realValue:3},{displayValue:"400%",realValue:4},{displayValue:"600%",realValue:6}],Et=[{displayValue:"-0.50",realValue:-.5},{displayValue:"-0.45",realValue:-.45},{displayValue:"-0.40",realValue:-.4},{displayValue:"-0.35",realValue:-.35},{displayValue:"-0.30",realValue:-.3},{displayValue:"-0.25",realValue:-.25},{displayValue:"-0.20",realValue:-.2},{displayValue:"-0.15",realValue:-.15},{displayValue:"-0.10",realValue:-.1},{displayValue:"-0.05",realValue:-.05},{displayValue:"0.00",realValue:0},{displayValue:"0.05",realValue:.05},{displayValue:"0.10",realValue:.1},{displayValue:"0.15",realValue:.15},{displayValue:"0.20",realValue:.2},{displayValue:"0.25",realValue:.25},{displayValue:"0.30",realValue:.3},{displayValue:"0.35",realValue:.35},{displayValue:"0.40",realValue:.4},{displayValue:"0.45",realValue:.45},{displayValue:"0.50",realValue:.5}];let _t=class extends ne{constructor(){super(),this.values=[],this.value=0}render(){return I`<div class="flex-vertical container">
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
    </div>`}};_t.styles=[Xe,n`
      .container {
        width: 100px;
      }
      .label {
        text-align: center;
      }
    `],yt([pe({type:Array})],_t.prototype,"values",void 0),yt([pe({type:Number})],_t.prototype,"value",void 0),yt([he("input")],_t.prototype,"input",void 0),_t=yt([oe("nv-slider")],_t);var wt=function(e,t,i,s){var a,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Tt=class extends ne{constructor(){super(),this.scale=1,this.hoverData=void 0,this.hoverX=0,this.hoverY=0,this.expressions=[],this.tiles=[],this.autoplaceControls=[],this.initialize()}render(){return I`
      <div>
        <div class="outer-frame main-window">
          <div class="inner-frame">
            <canvas
              width="1024"
              height="1024"
              id="canvas"
              class="main-image"
              @mousemove=${e=>{this.hoverX=e.pageX,this.hoverY=e.pageY,this.hoverData=this.currentHandler.getExpressionValues(e.offsetX,e.offsetY)}}
              @mouseleave=${()=>{this.hoverData=void 0}}
            ></canvas>
            <nv-values-hover ?hidden=${void 0===this.hoverData} .data=${this.hoverData}
                positionX=${this.hoverX} positionY=${this.hoverY}>
            </nv-values-hover>
          </div>
          <div class="inner-frame">
            <div id="global_controls" class="box-dark-inset">
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
                  ${[["moisture","Moisture"],["bias","Terrain type"]].map(([e,t])=>I`<tr>
                      <td>${t}</td>
                      <td>
                        <nv-slider .values=${xt} value=5 @change=${t=>{this.executor.setControl(`control:${e}:frequency`,t.detail),this.redraw()}}
                        </nv-slider>
                      </td>
                      <td>
                        <nv-slider .values=${Et} value=10 @change=${t=>{this.executor.setControl(`control:${e}:bias`,t.detail),this.redraw()}}
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
                        <nv-slider .values=${xt} value=5 @change=${t=>{this.executor.setControl(`control:${e}:frequency`,t.detail),this.redraw()}}
                        </nv-slider>
                      </td>
                      <td>
                        <nv-slider .values=${bt} value=5 @change=${t=>{this.executor.setControl(`control:${e}:size`,t.detail),this.redraw()}}
                        </nv-slider>
                      </td>
                    </tr>`)}
                </tbody>
              </table>
            </nv-collapse>
            <nv-collapse
              caption="Tiles"
              concealable
              collapsed
              @conceal-toggle=${()=>{this.currentHandler=this.allTilesHandler,this.redraw()}}
            >
              ${this.tiles.map(e=>I`<nv-collapse
                  ?concealable=${!e.compilationError}
                  collapsed
                  caption=${e.name}
                  @conceal-toggle=${()=>{this.currentHandler=e,this.redraw()}}
                >
                  <div>${e.compilationError}</div>
                </nv-collapse>`)}
            </nv-collapse>
            <nv-collapse caption="Expressions" collapsed>
              ${this.expressions.map(e=>I`<nv-collapse
                  ?concealable=${!e.compilationError}
                  collapsed
                  caption=${e.name}
                  @conceal-toggle=${()=>{this.currentHandler=e,this.redraw()}}
                >
                  <div>${e.compilationError}</div>
                </nv-collapse>`)}
            </nv-collapse>
            </div>
          </div>
        </div>
      </div>
    `}updated(){}firstUpdated(){}async initialize(){const e=await fetch("data_raw.json"),t=await e.json();this.executor=new vt(t,"nauvis"),this.expressions=this.executor.expressions,this.tiles=this.executor.tileNames,this.autoplaceControls=this.executor.autoplaceControls,this.allTilesHandler=this.executor.allTilesHandler,this.currentHandler=this.allTilesHandler,this.setSeed(0)}setSeed(e){this.seed.safeReset(e),this.executor.setSeed(e),this.redraw()}updateShift(){this.executor.setShift(this.shiftX.value,this.shiftY.value),this.redraw()}zoomIn(){this.scale>1&&(this.scale/=2,this.executor.setScale(this.scale),this.redraw())}zoomOut(){this.scale<16&&(this.scale*=2,this.executor.setScale(this.scale),this.redraw())}redraw(){const e=this.currentHandler.getFullResult();this.canvas.width=e.width,this.canvas.height=e.height,this.canvas.getContext("2d").putImageData(e,0,0)}};Tt.styles=[Xe,n`
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
        cursor: crosshair;
      }

      .import-icon {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAABOklEQVR42t2UM2BlQRiF17Zt27ar9W7QxFVsow3a2FXsVHHfxbZtJ+dx4pn7JsY71fxnvu9dr1vzP2zGD/gjF0MQSVKBSChjCy+8AVqogmhGyvCZBz+GVIgYAfQU4edRBpFglITw/SietDUb9viK+3iBv3BDFpl24jhbEDoON+A/1k9rXyNZ1nmy8E/jeBFOMfZooA/92EsvUwjehYsCp/kUPVClFWfH/99awYVWgQdtrEPwfuxUeKtdaUMPIkjkeFY+0IaxRODCITgyefEDUYiVpIUI8mWrYJwUEEx+K1AAETV2vK+OERVvxjX+V9eKgt/mxomCH2cr+HG6whQjEKGOH6d9Sp5gO/92J5J9jF6d9PdYAhHJOUafQXr1lS8wwjlKHqGFV8DOYguaOQXfWIJfHIph+GI9nRcDTpN++QrEtxwAAAAASUVORK5CYII=');
        background-size: 100%;
        width: 32px;
        height: 32px;
        margin: 2px 4px 6px;
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
    `],wt([he("#canvas")],Tt.prototype,"canvas",void 0),wt([he("#seed")],Tt.prototype,"seed",void 0),wt([he("#shift_x")],Tt.prototype,"shiftX",void 0),wt([he("#shift_y")],Tt.prototype,"shiftY",void 0),wt([ue()],Tt.prototype,"expressions",void 0),wt([ue()],Tt.prototype,"tiles",void 0),wt([ue()],Tt.prototype,"autoplaceControls",void 0),wt([ue()],Tt.prototype,"scale",void 0),wt([ue()],Tt.prototype,"hoverData",void 0),Tt=wt([oe("nv-gui")],Tt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Rt="important",$t=" !"+Rt,Ct=Fe(class extends je{constructor(e){if(super(e),e.type!==Be||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const s=e[i];return null==s?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(const e in t){const s=t[e];if(null!=s){this.ft.add(e);const t="string"==typeof s&&s.endsWith($t);e.includes("-")||t?i.setProperty(e,t?s.slice(0,-11):s,t?Rt:""):i[e]=s}}return H}});var Ut=function(e,t,i,s){var a,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Vt=class extends ne{constructor(){super(),this.data=void 0,this.positionX=0,this.positionY=0}render(){if(!this.data)return Q;const e=Math.max(...this.data.map(e=>e.value)),t=this.data.findIndex(t=>t.value===e);return I`
      <div
        class="hover-card"
        style=${Ct({left:`${this.positionX+5}px`,top:`${this.positionY+5}px`})}
      >
        <table>
          ${(this.data||[]).map((e,i)=>I`<tr class="${i===t?"bold":""}">
              <td>${e.name}</td>
              <td class="number">${e.value.toPrecision(6)}</td>
            </tr> `)}
        </table>
      </div>
    `}};Vt.styles=n`
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
  `,Ut([pe({type:Array})],Vt.prototype,"data",void 0),Ut([pe({type:Number})],Vt.prototype,"positionX",void 0),Ut([pe({type:Number})],Vt.prototype,"positionY",void 0),Vt=Ut([oe("nv-values-hover")],Vt);
