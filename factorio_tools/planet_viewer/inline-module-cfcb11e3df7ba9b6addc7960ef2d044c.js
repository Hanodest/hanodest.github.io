/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let a=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(t,e))}return e}toString(){return this.cssText}};const n=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new a(i,e,o)},s=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new a("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:p,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,A=globalThis,m=A.trustedTypes,g=m?m.emptyScript:"",f=A.reactiveElementPolyfillSupport,v=(e,t)=>e,b={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},x=(e,t)=>!l(e,t),y={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:x};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),A.litPropertyMetadata??=new WeakMap;let C=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=y){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&c(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:r}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const a=o?.call(this);r?.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??y}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...p(e),...h(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{if(i)e.adoptedStyleSheets=o.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of o){const o=document.createElement("style"),r=t.litNonce;void 0!==r&&o.setAttribute("nonce",r),o.textContent=i.cssText,e.appendChild(o)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(t,i.type);this._$Em=e,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:b;this._$Em=o;const a=r.fromAttribute(t,e.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,t,i,o=!1,r){if(void 0!==e){const a=this.constructor;if(!1===o&&(r=this[e]),i??=a.getPropertyOptions(e),!((i.hasChanged??x)(r,t)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:r},a){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==r||void 0!==a)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,i,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[v("elementProperties")]=new Map,C[v("finalized")]=new Map,f?.({ReactiveElement:C}),(A.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:x},E=(e=w,t,i)=>{const{kind:o,metadata:r}=i;let a=globalThis.litPropertyMetadata.get(r);if(void 0===a&&globalThis.litPropertyMetadata.set(r,a=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),a.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const r=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,r,e,!0,i)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=i;return function(i){const r=this[o];t.call(this,i),this.requestUpdate(o,r,e,!0,i)}}throw Error("Unsupported decorator location: "+o)};function U(e){return(t,i)=>"object"==typeof i?E(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function R(e){return U({...e,state:!0,attribute:!1})}
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
function k(e,t){return(t,i,o)=>((e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i))(t,i,{get(){return(t=>t.renderRoot?.querySelector(e)??null)(this)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=globalThis,_=e=>e,T=S.trustedTypes,B=T?T.createPolicy("lit-html",{createHTML:e=>e}):void 0,M="$lit$",I=`lit$${Math.random().toFixed(9).slice(2)}$`,$="?"+I,N=`<${$}>`,F=document,O=()=>F.createComment(""),D=e=>null===e||"object"!=typeof e&&"function"!=typeof e,V=Array.isArray,j="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Q=/-->/g,z=/>/g,G=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),K=/'/g,H=/"/g,q=/^(?:script|style|textarea|title)$/i,Y=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),L=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),X=new WeakMap,J=F.createTreeWalker(F,129);function Z(e,t){if(!V(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==B?B.createHTML(t):t}const ee=(e,t)=>{const i=e.length-1,o=[];let r,a=2===t?"<svg>":3===t?"<math>":"",n=P;for(let t=0;t<i;t++){const i=e[t];let s,l,c=-1,d=0;for(;d<i.length&&(n.lastIndex=d,l=n.exec(i),null!==l);)d=n.lastIndex,n===P?"!--"===l[1]?n=Q:void 0!==l[1]?n=z:void 0!==l[2]?(q.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=G):void 0!==l[3]&&(n=G):n===G?">"===l[0]?(n=r??P,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,s=l[1],n=void 0===l[3]?G:'"'===l[3]?H:K):n===H||n===K?n=G:n===Q||n===z?n=P:(n=G,r=void 0);const p=n===G&&e[t+1].startsWith("/>")?" ":"";a+=n===P?i+N:c>=0?(o.push(s),i.slice(0,c)+M+i.slice(c)+I+p):i+I+(-2===c?t:p)}return[Z(e,a+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class te{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,a=0;const n=e.length-1,s=this.parts,[l,c]=ee(e,t);if(this.el=te.createElement(l,i),J.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=J.nextNode())&&s.length<n;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(M)){const t=c[a++],i=o.getAttribute(e).split(I),n=/([.?@])?(.*)/.exec(t);s.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?ne:"?"===n[1]?se:"@"===n[1]?le:ae}),o.removeAttribute(e)}else e.startsWith(I)&&(s.push({type:6,index:r}),o.removeAttribute(e));if(q.test(o.tagName)){const e=o.textContent.split(I),t=e.length-1;if(t>0){o.textContent=T?T.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],O()),J.nextNode(),s.push({type:2,index:++r});o.append(e[t],O())}}}else if(8===o.nodeType)if(o.data===$)s.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(I,e+1));)s.push({type:7,index:r}),e+=I.length-1}r++}}static createElement(e,t){const i=F.createElement("template");return i.innerHTML=e,i}}function ie(e,t,i=e,o){if(t===L)return t;let r=void 0!==o?i._$Co?.[o]:i._$Cl;const a=D(t)?void 0:t._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),void 0===a?r=void 0:(r=new a(e),r._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=r:i._$Cl=r),void 0!==r&&(t=ie(e,r._$AS(e,t.values),r,o)),t}class oe{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??F).importNode(t,!0);J.currentNode=o;let r=J.nextNode(),a=0,n=0,s=i[0];for(;void 0!==s;){if(a===s.index){let t;2===s.type?t=new re(r,r.nextSibling,this,e):1===s.type?t=new s.ctor(r,s.name,s.strings,this,e):6===s.type&&(t=new ce(r,this,e)),this._$AV.push(t),s=i[++n]}a!==s?.index&&(r=J.nextNode(),a++)}return J.currentNode=F,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class re{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ie(this,e,t),D(e)?e===W||null==e||""===e?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==L&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>V(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==W&&D(this._$AH)?this._$AA.nextSibling.data=e:this.T(F.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=te.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new oe(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=X.get(e.strings);return void 0===t&&X.set(e.strings,t=new te(e)),t}k(e){V(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const r of e)o===t.length?t.push(i=new re(this.O(O()),this.O(O()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=_(e).nextSibling;_(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ae{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,r){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(e,t=this,i,o){const r=this.strings;let a=!1;if(void 0===r)e=ie(this,e,t,0),a=!D(e)||e!==this._$AH&&e!==L,a&&(this._$AH=e);else{const o=e;let n,s;for(e=r[0],n=0;n<r.length-1;n++)s=ie(this,o[i+n],t,n),s===L&&(s=this._$AH[n]),a||=!D(s)||s!==this._$AH[n],s===W?e=W:e!==W&&(e+=(s??"")+r[n+1]),this._$AH[n]=s}a&&!o&&this.j(e)}j(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ne extends ae{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===W?void 0:e}}class se extends ae{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==W)}}class le extends ae{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){if((e=ie(this,e,t,0)??W)===L)return;const i=this._$AH,o=e===W&&i!==W||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==W&&(i===W||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ce{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ie(this,e)}}const de=S.litHtmlPolyfillSupport;de?.(te,re),(S.litHtmlVersions??=[]).push("3.3.3");const pe=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let he=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let r=o._$litPart$;if(void 0===r){const e=i?.renderBefore??null;o._$litPart$=r=new re(t.insertBefore(O(),e),e,void 0,i??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L}};he._$litElement$=!0,he.finalized=!0,pe.litElementHydrateSupport?.({LitElement:he});const ue=pe.litElementPolyfillSupport;ue?.({LitElement:he}),(pe.litElementVersions??=[]).push("4.2.2");const Ae=n`
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
    width: 40px;
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
`;async function me(e){const t=new Image;return t.src=e,new Promise(e=>{t.addEventListener("load",()=>{const i=new OffscreenCanvas(t.width,t.height).getContext("2d");i.drawImage(t,0,0,t.width,t.height),e(i.getImageData(0,0,t.width,t.height))})})}var ge,fe,ve=function(e,t,i,o,r){if("m"===o)throw new TypeError("Private method is not writable");if("a"===o&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===o?r.call(e,i):r?r.value=i:t.set(e,i),i},be=function(e,t,i,o){if("a"===i&&!o)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?o:"a"===i?o.call(e):o?o.value:t.get(e)};class xe{constructor(e,t){ge.set(this,void 0),fe.set(this,void 0),ve(this,ge,e,"f"),ve(this,fe,t,"f")}get x(){return be(this,ge,"f")}set x(e){ve(this,ge,e,"f")}get y(){return be(this,fe,"f")}set y(e){ve(this,fe,e,"f")}add(e){return new xe(this.x+e.x,this.y+e.y)}subtract(e){return new xe(this.x-e.x,this.y-e.y)}vmul(e){return this.x*e.y-e.x*this.y}smul(e){return this.x*e.x+this.y*e.y}mul(e){return new xe(this.x*e,this.y*e)}get len(){return Math.sqrt(this.smul(this))}min(e){return new xe(Math.min(this.x,e.x),Math.min(this.y,e.y))}max(e){return new xe(Math.max(this.x,e.x),Math.max(this.y,e.y))}floor(){return new xe(Math.floor(this.x),Math.floor(this.y))}ceil(){return new xe(Math.ceil(this.x),Math.ceil(this.y))}asArray(){return[this.x,this.y]}}ge=new WeakMap,fe=new WeakMap;class ye extends EventTarget{constructor(){super(),this.images=new Map,this.images=new Map}async loadImageFromUrl(e,t){const i=await me(t),o={filename:e,size:new xe(i.width,i.height),data:i};return this.images.set(e,o),this.dispatchEvent(new CustomEvent("image_updated",{detail:o})),o}async loadImageFromFile(e){const t=await async function(e){const t=new FileReader,i=new Promise(e=>{t.addEventListener("load",()=>{e(t.result)})});return t.readAsDataURL(e),me(await i)}(e),i={filename:e.name,size:new xe(t.width,t.height),data:t};return this.images.set(e.name,i),this.dispatchEvent(new CustomEvent("image_updated",{detail:i})),i}getLoadedImage(e){return this.images.get(e)}static instance(){return globalThis.fileManager}}function Ce(e,t){const i=[];for(let o=0;o<4;o++)for(let r=0;r<4;r++){let a=0;for(let i=0;i<4;i++)a+=e[4*i+r]*t[4*o+i];i.push(a)}return i}globalThis.fileManager=new ye;function we(e,t,i){const o=e.createShader(t);if(e.shaderSource(o,i),e.compileShader(o),!e.getShaderParameter(o,e.COMPILE_STATUS))throw`An error occurred compiling the shaders: ${e.getShaderInfoLog(o)}`;return o}function Ee(e){return function(e,t,i){const o=we(e,e.VERTEX_SHADER,t),r=we(e,e.FRAGMENT_SHADER,i),a=e.createProgram();if(e.attachShader(a,o),e.attachShader(a,r),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw`Unable to initialize the shader program: ${e.getProgramInfoLog(a)}`;return a}(e,"#version 300 es\nprecision highp float;\n\nuniform float border;\nuniform float radius;\n\nin vec2 a_vertexPosition;\nout vec2 uv;\n\nvoid main() {\n  uv = mix(a_vertexPosition * (radius + border) / radius, vec2(1., 1.), 0.5);\n  gl_Position = vec4(a_vertexPosition, 0., 1.);\n}\n","#version 300 es\nprecision highp float;\n\nstruct HeroCloud\n{\n  vec4 positionAndSize;\n  vec4 lookupCoord;\n  float rotation;\n  uint projectionType;\n  uint cloudType;\n  float rotationBonus;\n};\n\nlayout(std140) uniform fsConstants\n{\n  float mapTick;\n  float rotationSeconds;\n  float planetDistance;\n  float atmosphereThickness;\n  uint flags;\n  vec4 atmosphereColor;\n  vec4 specularColor;\n  vec4 lightColor;\n  vec4 lightDirection;\n  vec4 atmosphereRayLightColor1;\n  vec4 atmosphereRayLightColor2;\n  float surfaceNormalIntensity;\n  float cloudNormalIntensity;\n  float specularIntensity;\n  float cloudiness;\n  float emissionScalar;\n  float lightRadius;\n  float lightIntensityContrast;\n  float surfaceVerticalOffset;\n  float cloudVerticalOffset;\n  float cloudFlowIntensity;\n  float cloudFlowSeconds;\n  float cloudPanningBonus;\n  vec4 lookupCoordsSurface;\n  vec4 lookupCoordsNormal;\n  vec4 lookupCoordsReflectivity;\n  vec4 lookupCoordsEmission;\n  vec4 lookupCoordsGlobalCloud;\n  vec4 lookupCoordsGlobalCloudNormal;\n  vec4 lookupCoordsGlobalCloudFlow;\n  mat4 surfaceRotation;\n  HeroCloud heroClouds[4];\n} constants;\n\nuniform sampler2D heroCloudTexture1;\nuniform sampler2D heroCloudTexture2;\nuniform sampler2D heroCloudTexture3;\nuniform sampler2D surfaceTexture;\nuniform sampler2D emissionTexture;\nuniform sampler2D normalTexture;\nuniform sampler2D reflectivityTexture;\nuniform sampler2D globalCloudFlowTexture;\nuniform sampler2D globalCloudTexture;\nuniform sampler2D globalCloudNormalTexture;\n\nin vec2 uv;\nlayout(location = 0) out vec4 fragColor;\nin float vExtra;\nvec3 lightDir;\nvec2 sphereCenter;\nfloat planetRadius;\nfloat atmosphereRadius;\nfloat planetRadius2;\nbool emissionScalesWithShadow;\nbool heroCloudsAreEmissive;\nfloat PI;\nfloat adjustedTime;\nvec3 lightDirWithRadius;\n\nvec3 cameraToSphere(vec2 screenUV) {\n  vec2 offset = screenUV - sphereCenter;\n  float distSq = dot(offset, offset);\n  if (distSq > planetRadius2) {\n    return vec3(0.0);\n  }\n  float z = sqrt(planetRadius2 - distSq);\n  return vec3(offset, z);\n}\n\nvec2 sphereNormalToUV(vec3 normal) {\n  vec3 n = normalize(normal);\n  return vec2(0.5 + (atan(n.x, n.z) / 6.28318023681640625), 0.5 - (asin(n.y) / 3.141590118408203125));\n}\n\nvec2 remap(vec2 uv_1, vec4 lookupCoords) {\n  return (uv_1 * vec2(lookupCoords.z, lookupCoords.w)) + vec2(lookupCoords.x, lookupCoords.y);\n}\n\nvec3 rotateVector(vec3 v, float angle, vec3 axis) {\n  float cosAngle = cos(angle);\n  float sinAngle = sin(angle);\n  return ((v * cosAngle) + (cross(axis, v) * sinAngle)) + ((axis * dot(axis, v)) * (1.0 - cosAngle));\n}\n\nvec3 perturbNormal(vec3 normal, vec2 normalCol, float intensity) {\n  vec3 perturbedNormal = rotateVector(normal, normalCol.x, vec3(0.0, 1.0, 0.0));\n  perturbedNormal = rotateVector(perturbedNormal, normalCol.y, vec3(1.0, 0.0, 0.0));\n  return mix(normal, normal * perturbedNormal, vec3(intensity));\n}\n\nfloat clampedContrast(float inputValue, float factor, float curvature) {\n  return clamp(pow(((inputValue - 0.5) * factor) + 0.5, curvature), 0.0, 1.0);\n}\n\nfloat rangeOffset(float inputValue, float contrast) {\n  return ((clamp(inputValue, 0.0, 1.0) - contrast) * 1.0) / (1.0 - contrast);\n}\n\nfloat cheapContrast(float inputValue, float contrast) {\n  return ((clamp(inputValue + contrast, 0.0, 1.0) - contrast) * 1.0) / (1.0 - contrast);\n}\n\nvec3 uvToSphereNormal(vec2 uv_1) {\n  float phi = ((uv_1.x - 0.5) * 2.0) * 3.141590118408203125;\n  float theta = (0.5 - uv_1.y) * 3.141590118408203125;\n  return vec3(cos(theta) * sin(phi), sin(theta), cos(theta) * cos(phi));\n}\n\nvec2 sphereNormalToDecal(vec3 normal, vec3 decalDirection, uint projectionType) {\n  vec3 n = normalize(normal);\n  vec3 d = normalize(decalDirection);\n  bool flip = false;\n  if (dot(n, d) > 0.0) {\n    if ((projectionType == 2u) || (projectionType == 3u)) {\n      d = -d;\n      flip = true;\n    } else {\n      return vec2(-1.0);\n    }\n  }\n  vec3 tangent = normalize(cross(d, vec3(0.0, 1.0, 0.0)));\n  if (length(tangent) < 0.001) {\n    tangent = normalize(cross(d, vec3(1.0, 0.0, 0.0)));\n  }\n  vec3 bitangent = cross(d, tangent);\n  float u = dot(n, tangent);\n  float v = dot(n, bitangent);\n  return vec2(u, v) * (((projectionType == 3u) && flip) ? (-1.0) : 1.0);\n}\n\nvec2 cloudRemap(vec2 uv_1, vec2 size, float angle) {\n  vec2 rotUV = vec2((uv_1.x * cos(angle)) - (uv_1.y * sin(angle)), (uv_1.x * sin(angle)) + (uv_1.y * cos(angle)));\n  vec2 diff = abs(rotUV);\n  vec2 scale = size * 2.0;\n  if (diff.x < size.x && diff.y < size.y) {\n    return (rotUV / scale) + vec2(0.5);\n  }\n  return vec2(-10.0);\n}\n\nvec4 drawHeroCloud(vec3 normal, HeroCloud heroCloud) {\n  vec2 cloudPosition = heroCloud.positionAndSize.xy;\n  vec2 cloudSize = heroCloud.positionAndSize.zw;\n  if (heroCloud.projectionType == 0u) {\n    return vec4(0.0);\n  }\n  vec3 cloudNormal = uvToSphereNormal(cloudPosition);\n  vec2 sphereUVClouds = sphereNormalToDecal(normal, cloudNormal, heroCloud.projectionType);\n  vec2 cloudsColorUV = cloudRemap(sphereUVClouds, cloudSize, (constants.mapTick * heroCloud.rotation) + heroCloud.rotationBonus);\n  if (cloudsColorUV.x == (-10.0)) {\n    return vec4(0.0);\n  }\n  if (heroCloud.cloudType == 1u) {\n    return texture(heroCloudTexture1, remap(cloudsColorUV, heroCloud.lookupCoord));\n  } else if (heroCloud.cloudType == 2u) {\n    return texture(heroCloudTexture2, remap(cloudsColorUV, heroCloud.lookupCoord));\n  } else if (heroCloud.cloudType == 3u) {\n    return texture(heroCloudTexture3, remap(cloudsColorUV, heroCloud.lookupCoord));\n  }\n  return vec4(0.0);\n}\n\nfloat fresnel(vec3 inputNormal, float amount) {\n  return pow(1.0 - clamp(dot(normalize(inputNormal), vec3(0.0, 0.0, 1.0)), 0.0, 1.0), amount);\n}\n\nvoid main() {\n  lightDir = normalize(constants.lightDirection.xyz);\n  sphereCenter = vec2(0.5);\n  planetRadius = 0.5 - constants.atmosphereThickness;\n  atmosphereRadius = constants.atmosphereThickness;\n  planetRadius2 = planetRadius * planetRadius;\n  emissionScalesWithShadow = (constants.flags & 1u) != 0u;\n  heroCloudsAreEmissive = (constants.flags & 2u) != 0u;\n  PI = 3.1415927410125732421875;\n  adjustedTime = constants.mapTick / 60.0;\n  lightDirWithRadius = lightDir * constants.lightRadius;\n  vec2 screenUV = uv;\n  vec3 normal = cameraToSphere(screenUV);\n  if (all(equal(normal, vec3(0.0)))) {\n    discard;\n  }\n  vec3 sphereNormal = (constants.surfaceRotation * vec4(normal, 0.0)).xyz;\n  vec2 sphereUV = sphereNormalToUV(sphereNormal);\n  vec4 surfaceColor = texture(surfaceTexture, remap(sphereUV, constants.lookupCoordsSurface));\n  vec3 emissionColor = texture(emissionTexture, remap(sphereUV, constants.lookupCoordsEmission)).xyz;\n  vec2 normalCol = texture(normalTexture, remap(sphereUV, constants.lookupCoordsNormal)).xy;\n  vec3 surfaceNormal = perturbNormal(normal, normalCol, constants.surfaceNormalIntensity);\n  float lightIntensitySmooth = dot(normal, lightDirWithRadius);\n  float lightIntensitySurface = dot(surfaceNormal, lightDirWithRadius);\n  lightIntensitySurface = clamp(clampedContrast(lightIntensitySurface, constants.lightIntensityContrast, 1.0), 0.1, 1.0);\n  lightIntensitySmooth = clamp(clampedContrast(lightIntensitySmooth, constants.lightIntensityContrast, 1.0), 0.1, 1.0);\n  vec3 reflectionDir = (normal * (2.0 * dot(surfaceNormal, lightDir))) - lightDir;\n  float specularAngle = clamp(rangeOffset(dot(reflectionDir, -normalize(surfaceNormal)) * 1.66, 0.8), 0.0, 1.0);\n  float reflectivityCol = texture(reflectivityTexture, remap(sphereUV, constants.lookupCoordsReflectivity)).x;\n  float specularWithDistance = rangeOffset(specularAngle, max(1.0 - pow(constants.lightRadius / 6.0, 2.0), 0.5));\n  float lightIntensitySpecular = clamp((specularWithDistance * reflectivityCol) * constants.specularIntensity, 0.0, 1.0);\n  vec3 lightIntensitySurfaceV3 = vec3(lightIntensitySurface) * constants.lightColor.xyz;\n  vec3 atmosphereRayLightColor = mix(constants.atmosphereRayLightColor1.xyz * 10.0, constants.atmosphereRayLightColor2.xyz * 10.0, lightIntensitySurfaceV3);\n  lightIntensitySurfaceV3 *= mix(lightIntensitySurfaceV3, lightIntensitySurfaceV3 * atmosphereRayLightColor, vec3(1.0) - lightIntensitySurfaceV3);\n  float surfaceAtmosphericFresnel = clamp(cheapContrast(dot(normal, vec3(0.0, 0.0, 1.0)) - constants.surfaceVerticalOffset, 0.99), 0.0, 1.0);\n  float cloudAtmosphericFresnel = clamp(cheapContrast(dot(normal, vec3(0.0, 0.0, 1.0)) - constants.cloudVerticalOffset, 0.95), 0.0, 1.0);\n  surfaceColor = clamp(surfaceColor * surfaceAtmosphericFresnel, vec4(0.0), vec4(1.0));\n  vec3 lightIntensitySpecularV3 = vec3(((constants.specularColor * lightIntensitySpecular) * constants.lightColor).xyz);\n  surfaceColor.xyz = (surfaceColor.xyz + lightIntensitySpecularV3) * lightIntensitySurfaceV3;\n  vec4 globalCloudColor = vec4(0.0);\n  vec3 globalCloudNormal = vec3(0.0, 0.0, 1.0);\n  vec2 cloudUV = sphereUV;\n  cloudUV.x = mod(cloudUV.x + constants.cloudPanningBonus * adjustedTime / constants.rotationSeconds, 1.0);\n  vec3 cloudNormal = uvToSphereNormal(cloudUV);\n  vec2 trueFlowMapData = texture(globalCloudFlowTexture, remap(cloudUV, constants.lookupCoordsGlobalCloudFlow)).xy;\n  float cloudProgressA = mod(adjustedTime, constants.cloudFlowSeconds) / constants.cloudFlowSeconds;\n  float cloudProgressB = mod(adjustedTime + (constants.cloudFlowSeconds / 2.0), constants.cloudFlowSeconds) / constants.cloudFlowSeconds;\n  vec2 flowShiftA = (((trueFlowMapData * 2.0) - vec2(1.0)) * cloudProgressA) * constants.cloudFlowIntensity;\n  vec2 flowShiftB = (((trueFlowMapData * 2.0) - vec2(1.0)) * cloudProgressB) * constants.cloudFlowIntensity;\n  vec3 right = normalize(cross(cloudNormal, vec3(0.0, 1.0, 0.0)));\n  vec3 shiftedGlobalCloudNormalA = normalize(rotateVector(cloudNormal, -flowShiftA.y, right));\n  vec3 shiftedGlobalCloudNormalB = normalize(rotateVector(cloudNormal, -flowShiftB.y, right));\n  vec3 up = normalize(cross(cloudNormal, right));\n  shiftedGlobalCloudNormalA = normalize(rotateVector(shiftedGlobalCloudNormalA, flowShiftA.x, up));\n  shiftedGlobalCloudNormalB = normalize(rotateVector(shiftedGlobalCloudNormalB, flowShiftB.x, up));\n  vec2 shiftedCloudUVA = sphereNormalToUV(shiftedGlobalCloudNormalA);\n  vec2 shiftedCloudUVB = sphereNormalToUV(shiftedGlobalCloudNormalB);\n  vec4 shiftedCloudDataA = texture(globalCloudTexture, remap(shiftedCloudUVA, constants.lookupCoordsGlobalCloud));\n  vec4 shiftedCloudDataB = texture(globalCloudTexture, remap(shiftedCloudUVB, constants.lookupCoordsGlobalCloud));\n  vec2 shiftedCloudNormalDataA = texture(globalCloudNormalTexture, remap(shiftedCloudUVA, constants.lookupCoordsGlobalCloudNormal)).xy;\n  vec2 shiftedCloudNormalDataB = texture(globalCloudNormalTexture, remap(shiftedCloudUVB, constants.lookupCoordsGlobalCloudNormal)).xy;\n  float blendAB = 0.5 + (0.5 * cos((PI * 2.0) * cloudProgressA));\n  globalCloudColor = mix(shiftedCloudDataA, shiftedCloudDataB, vec4(blendAB));\n  float cloudiness = clamp(1.0 - constants.cloudiness, 0.0, 1.0);\n  globalCloudColor.w = clamp(rangeOffset(globalCloudColor.w, cloudiness), 0.0, 1.0);\n  vec2 globalCloudNormalData = mix(shiftedCloudNormalDataA, shiftedCloudNormalDataB, vec2(blendAB));\n  globalCloudNormal = perturbNormal(sphereNormal, globalCloudNormalData, constants.cloudNormalIntensity);\n  globalCloudColor.xyz = globalCloudColor.xyz * clamp(cloudAtmosphericFresnel, 0.0, 1.0);\n  vec4 heroCloudColor = vec4(0.0);\n  vec4 heroCloudColor1 = drawHeroCloud(sphereNormal, constants.heroClouds[0]);\n  vec4 heroCloudColor2 = drawHeroCloud(sphereNormal, constants.heroClouds[1]);\n  vec4 heroCloudColor3 = drawHeroCloud(sphereNormal, constants.heroClouds[2]);\n  vec4 heroCloudColor4 = drawHeroCloud(sphereNormal, constants.heroClouds[3]);\n  vec3 heroCloudColorRGB = max(max(heroCloudColor1.xyz, heroCloudColor2.xyz), max(heroCloudColor3.xyz, heroCloudColor4.xyz));\n  heroCloudColorRGB *= clamp(cloudAtmosphericFresnel, 0.0, 1.0);\n  float heroCloudColorA = clamp(((heroCloudColor1.w + heroCloudColor2.w) + heroCloudColor3.w) + heroCloudColor4.w, 0.0, 1.0);\n  heroCloudColor = vec4(heroCloudColorRGB, heroCloudColorA);\n  globalCloudColor = mix(globalCloudColor, heroCloudColor, vec4(clamp(heroCloudColor.w, 0.0, 1.0)));\n  globalCloudNormal = mix(globalCloudNormal, sphereNormal, vec3(clamp(heroCloudColor.w, 0.0, 1.0)));\n  emissionColor += (((heroCloudColor.xyz * heroCloudColor.w) * cloudAtmosphericFresnel) * float(heroCloudsAreEmissive));\n  float lightIntensityClouds = dot(globalCloudNormal, lightDir);\n  lightIntensityClouds = pow(lightIntensityClouds + 0.5, 4.0);\n  globalCloudColor.xyz = mix(globalCloudColor.xyz, (globalCloudColor.xyz * 1.5) * constants.lightColor.xyz, vec3(clamp(lightIntensityClouds * 2.0, 0.0, 1.0)));\n\n  fragColor = surfaceColor;\n  fragColor.xyz = mix(fragColor.xyz, globalCloudColor.xyz * lightIntensitySmooth, vec3(clamp(globalCloudColor.w, 0.0, 1.0)));\n  fragColor = mix(fragColor, vec4((constants.atmosphereColor.xyz * 10.0) * lightIntensitySurfaceV3, 1.0), clamp((vec4(lightIntensitySmooth) * (fresnel(normal, 2.0) + 0.1)) * (constants.atmosphereColor.w * 10.0), vec4(0.0), vec4(1.0)));\n  emissionColor = ((emissionColor * constants.emissionScalar) * (1.0 - fresnel(normal - vec3(0.0, 0.0, 0.1), 2.0))) * (1.0 - (lightIntensitySurface * 0.6));\n  emissionColor = mix(vec3(0.0), emissionColor, vec3(surfaceAtmosphericFresnel));\n  fragColor.xyz = fragColor.xyz + mix(vec3(0.0), mix(emissionColor, emissionColor * vec3(0.4588, 0.498, 0.5333), vec3(clamp(globalCloudColor.w + 0.1, 0.0, 1.0))), vec3(1.0 - (emissionScalesWithShadow ? lightIntensitySurface : 0.)));\n  float distanceFade = clamp(1.05 - (abs(constants.planetDistance) / 100.0), 0.0, 1.0);\n  fragColor *= vec4(vec3(distanceFade), clamp(pow(distanceFade * 1.5, 0.2), 0.0, 1.0));\n  fragColor *= cheapContrast(dot(normal, vec3(0.0, 0.0, 1.0)), 0.9);\n}\n")}function Ue(e,t){const i=e.createTexture();return e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),e.bindTexture(e.TEXTURE_2D,null),i}function Re(e){return[e[0]/255,e[1]/255,e[2]/255,e[3]/255]}class ke{constructor(e){this.canvas=e;const t=e.getContext("webgl2",{preserveDrawingBuffer:!0});this.gl=t;const i=Ee(t);this.planetProgram=i,this.textures=new Map,t.getExtension("EXT_color_buffer_float"),t.enable(t.BLEND),this.positionBuffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.positionBuffer),t.bufferData(t.ARRAY_BUFFER,new Float32Array([1,1,-1,1,1,-1,-1,-1]),t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null);const o=t.getUniformBlockIndex(i,"fsConstants"),r=t.getActiveUniformBlockParameter(i,o,t.UNIFORM_BLOCK_DATA_SIZE);this.uboBuffer=t.createBuffer(),t.bindBuffer(t.UNIFORM_BUFFER,this.uboBuffer),t.bufferData(t.UNIFORM_BUFFER,r,t.DYNAMIC_DRAW),t.bindBufferBase(t.UNIFORM_BUFFER,0,this.uboBuffer),t.bindBuffer(t.UNIFORM_BUFFER,null),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0);const a=new ImageData(1,1);a.data.set([127,127,127,255]),this.grayTexture=Ue(t,a),a.data.set([0,0,0,0]),this.transparentTexture=Ue(t,a),ye.instance().addEventListener("image_updated",e=>{const i=e.detail;this.textures.set(i.filename,Ue(t,i.data))})}setUniform(e,t){const i=this.gl,o=this.planetProgram;i.bindBuffer(i.UNIFORM_BUFFER,this.uboBuffer);const r=i.getUniformIndices(o,["fsConstants."+e]),a=i.getActiveUniforms(o,r,i.UNIFORM_OFFSET);i.bufferSubData(i.UNIFORM_BUFFER,a[0],new Float32Array(Array.isArray(t)?t:[t]),0),i.bindBuffer(i.UNIFORM_BUFFER,null)}setUintUniform(e,t){const i=this.gl,o=this.planetProgram;i.bindBuffer(i.UNIFORM_BUFFER,this.uboBuffer);const r=i.getUniformIndices(o,["fsConstants."+e]),a=i.getActiveUniforms(o,r,i.UNIFORM_OFFSET);i.bufferSubData(i.UNIFORM_BUFFER,a[0],new Uint32Array([t]),0),i.bindBuffer(i.UNIFORM_BUFFER,null)}setTexture(e,t,i,o=null){const r=this.gl;r.activeTexture(r.TEXTURE0+e),r.bindTexture(r.TEXTURE_2D,(i?this.textures.get(i):null)??o),r.uniform1i(r.getUniformLocation(this.planetProgram,t),e)}draw(e,t){const i=this.gl,o=this.planetProgram,r=2*(e.radius+64);this.canvas.width=this.canvas.height=r,i.viewport(0,0,r,r),i.clearBufferfv(i.COLOR,0,[0,0,0,1]),i.useProgram(o),i.uniform1f(i.getUniformLocation(this.planetProgram,"border"),64),i.uniform1f(i.getUniformLocation(this.planetProgram,"radius"),e.radius),this.setTexture(1,"surfaceTexture",e.planetSurface,this.transparentTexture),this.setTexture(2,"emissionTexture",e.planetEmission,this.transparentTexture),this.setTexture(3,"normalTexture",e.planetNormal,this.grayTexture),this.setTexture(4,"reflectivityTexture",e.planetReflectivity,this.transparentTexture),this.setTexture(5,"globalCloudTexture",e.globalCloud,this.transparentTexture),this.setTexture(6,"globalCloudFlowTexture",e.globalCloudFlow,this.grayTexture),this.setTexture(7,"globalCloudNormalTexture",e.globalCloudNormal,this.grayTexture),this.setUniform("mapTick",t),this.setUniform("planetDistance",0),this.setUniform("atmosphereThickness",e.atmosphereThickness),this.setUniform("rotationSeconds",e.rotationSeconds);const a=t/60,n=Ce((s=(s=a/e.rotationSeconds*360)*Math.PI/180,[Math.cos(s),0,-Math.sin(s),0,0,1,0,0,Math.sin(s),0,Math.cos(s),0,0,0,0,1]),Ce(function(e){return e=e*Math.PI/180,[Math.cos(e),Math.sin(e),0,0,-Math.sin(e),Math.cos(e),0,0,0,0,1,0,0,0,0,1]}(e.planetAxis[1]+e.planetAxisDeviationAmplitude[1]*Math.sin(a/e.planetAxisDeviationSeconds[1]*2*Math.PI)),function(e){return e=e*Math.PI/180,[1,0,0,0,0,Math.cos(e),Math.sin(e),0,0,-Math.sin(e),Math.cos(e),0,0,0,0,1]}(e.planetAxis[0]+e.planetAxisDeviationAmplitude[0]*Math.sin(a/e.planetAxisDeviationSeconds[0]*2*Math.PI))));var s;this.setUniform("surfaceRotation",n),this.setUintUniform("flags",e.emissionScalesWithShadow?1:0),this.setUniform("atmosphereColor",Re(e.atmosphereColor)),this.setUniform("specularColor",Re(e.specularColor)),this.setUniform("lightColor",Re(e.lightColor)),this.setUniform("lightDirection",e.lightDirection),this.setUniform("atmosphereRayLightColor1",Re(e.atmosphereRayLightColor1)),this.setUniform("atmosphereRayLightColor2",Re(e.atmosphereRayLightColor2)),this.setUniform("surfaceNormalIntensity",e.surfaceNormalIntensity),this.setUniform("cloudNormalIntensity",e.cloudNormalIntensity),this.setUniform("specularIntensity",e.specularIntensity),this.setUniform("cloudiness",e.cloudiness),this.setUniform("emissionScalar",e.emissionScalar),this.setUniform("lightRadius",e.lightRadius),this.setUniform("lightIntensityContrast",e.lightIntensityContrast),this.setUniform("surfaceVerticalOffset",e.surfaceVerticalOffset),this.setUniform("cloudVerticalOffset",e.cloudVerticalOffset),this.setUniform("cloudFlowIntensity",e.cloudFlowIntensity),this.setUniform("cloudFlowSeconds",e.cloudFlowSeconds),this.setUniform("cloudPanningBonus",e.cloudPanningRate),this.setUniform("lookupCoordsSurface",[0,0,1,1]),this.setUniform("lookupCoordsNormal",[0,0,1,1]),this.setUniform("lookupCoordsReflectivity",[0,0,1,1]),this.setUniform("lookupCoordsEmission",[0,0,1,1]),this.setUniform("lookupCoordsGlobalCloud",[0,0,1,1]),this.setUniform("lookupCoordsGlobalCloudNormal",[0,0,1,1]),this.setUniform("lookupCoordsGlobalCloudFlow",[0,0,1,1]),i.bindBuffer(i.ARRAY_BUFFER,this.positionBuffer),i.vertexAttribPointer(i.getAttribLocation(o,"a_vertexPosition"),2,i.FLOAT,!1,0,0),i.enableVertexAttribArray(i.getAttribLocation(o,"a_vertexPosition")),i.blendFunc(i.ONE,i.ONE_MINUS_SRC_ALPHA),i.drawArrays(i.TRIANGLE_STRIP,0,4)}}function Se(e){return e[0]<=1&&e[1]<=1&&e[2]<=1&&e[3]<=1?[255*e[0],255*e[1],255*e[2],255*e[3]]:e}function _e(){return{atmosphereColor:Se([.095,.15,.19,1]),atmosphereRayLightColor1:Se([.5,.26665,0,1]),atmosphereRayLightColor2:Se([.1,.08431,.05059,1]),atmosphereThickness:.02,cloudFlowIntensity:.3,cloudFlowSeconds:32,cloudNormalIntensity:1,cloudPanningRate:0,cloudVerticalOffset:.015,cloudiness:1,emissionScalar:2,emissionScalesWithShadow:!0,globalCloud:null,globalCloudFlow:null,globalCloudNormal:null,lightColor:Se([.9804,1,1,1]),lightDirection:[-1,0,.5],lightIntensityContrast:.7,lightRadius:9.9,planetAxis:[-30,20],planetAxisDeviationAmplitude:[0,0],planetAxisDeviationSeconds:[609.2,712.7],planetEmission:null,planetNormal:null,planetReflectivity:null,planetSurface:null,radius:400,rotationSeconds:340,specularColor:Se([1,1,1,1]),specularIntensity:1,surfaceNormalIntensity:.1,surfaceVerticalOffset:.1}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Te=1,Be=3,Me=4,Ie=e=>(...t)=>({_$litDirective$:e,values:t});let $e=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ne={},Fe=Ie(class extends $e{constructor(e){if(super(e),e.type!==Be&&e.type!==Te&&e.type!==Me)throw Error("The `live` directive is not allowed on child or event bindings");if(!(e=>void 0===e.strings)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===L||t===W)return t;const i=e.element,o=e.name;if(e.type===Be){if(t===i[o])return L}else if(e.type===Me){if(!!t===i.hasAttribute(o))return L}else if(e.type===Te&&i.getAttribute(o)===t+"")return L;return((e,t=Ne)=>{e._$AH=t;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */})(e),t}});function Oe(e,t,i){return Math.min(Math.max(e,t),i)}function De(e,t=0){if("string"==typeof e)return`"${e}"`;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(Array.isArray(e)){let i="";return i="{\n",e.forEach(e=>{i+="  ".repeat(t+1),i+=De(e,t+1),i+=",\n"}),i+="  ".repeat(t),i+="}",i}{let i="{\n";for(const o in e)void 0!==e[o]&&(i+="  ".repeat(t+1),i+=`${o} = `,i+=De(e[o],t+1),i+=",\n");return i+="  ".repeat(t),i+="}",i}}var Ve=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let je=class extends he{constructor(){super(),this.urlParams=new URLSearchParams(document.location.hash?.substring(1)),document.body.addEventListener("dragover",e=>{e.preventDefault()}),document.body.addEventListener("drop",e=>{e.preventDefault(),Array.from(e.dataTransfer?.items||[]).map(e=>e.getAsFile()).filter(e=>"image/png"===e?.type).forEach(e=>{ye.instance().loadImageFromFile(e)}),this.requestUpdate()}),this.backdrop=_e()}render(){return Y`
      <div>
        <div class="outer-frame main-window">
          <div class="inner-frame">
            <div>
              <canvas
                width="1024"
                height="1024"
                id="canvas"
                class="main-image"
                @click=${()=>{this.canvas.toBlob(async e=>{await navigator.clipboard.write([new ClipboardItem({[e.type]:e})])})}}
              ></canvas>
            </div>
          </div>
          <div class="inner-frame">
            <pv-collapse caption="Planet">${this.planetSections()}</pv-collapse>
            <pv-collapse caption="Surface">${this.surfaceSections()}</pv-collapse>
            <pv-collapse caption="Clouds">${this.cloudSections()}</pv-collapse>
            <pv-collapse caption="Light">${this.lightSections()}</pv-collapse>
            <pv-collapse caption="Atmosphere">${this.atmosphereSections()}</pv-collapse>
            <div class="flex-reverse">
              <div
                class="import-icon"
                @click=${()=>{this.importUi.concealed=!1}}
              ></div>
              <div
                class="export-icon"
                @click=${()=>{const e=function(e){const t=e=>{if(!e)return;const t=ye.instance().getLoadedImage(e);return t?{filename:t.filename,width:t.size.x,height:t.size.y}:void 0};return{atmosphere_color:e.atmosphereColor,atmosphere_ray_light_color_1:e.atmosphereRayLightColor1,atmosphere_ray_light_color_2:e.atmosphereRayLightColor2,atmosphere_thickness:e.atmosphereThickness,cloud_flow_intensity:e.cloudFlowIntensity,cloud_flow_seconds:e.cloudFlowSeconds,cloud_normal_intensity:e.cloudFlowIntensity,cloud_panning_rate:e.cloudPanningRate,cloud_vertical_offset:e.cloudVerticalOffset,cloudiness:e.cloudiness,emission_scalar:e.emissionScalar,emission_scales_with_shadow:e.emissionScalesWithShadow,global_cloud:t(e.globalCloud),global_cloud_flow:t(e.globalCloudFlow),global_cloud_normal:t(e.globalCloudNormal),light_color:e.lightColor,light_direction:e.lightDirection,light_intensity_contrast:e.lightIntensityContrast,light_radius:e.lightRadius,planet_axis:e.planetAxis,planet_axis_deviation_amplitude:e.planetAxisDeviationAmplitude,planet_axis_deviation_seconds:e.planetAxisDeviationSeconds,planet_emission:t(e.planetEmission),planet_normal:t(e.planetNormal),planet_reflectivity:t(e.planetReflectivity),planet_surface:t(e.planetSurface),radius:e.radius,rotation_seconds:e.rotationSeconds,specular_color:e.specularColor,specular_intensity:e.specularIntensity,surface_normal_intensity:e.surfaceNormalIntensity,surface_vertical_offset:e.surfaceVerticalOffset}}(this.backdrop);this.exportUi.jsonText=JSON.stringify(e,void 0,2),this.exportUi.luaText=De(e),this.exportUi.concealed=!1}}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <pv-export-ui concealed></pv-export-ui>
      <pv-import-ui
        concealed
        @settingsImported=${e=>{this.backdrop=e.detail,this.requestUpdate()}}
      ></pv-import-ui>
    `}planetSections(){return Y`
      <div class="flex-vertical">
        <div class="flex-reverse">
          <pv-number-input
            caption="Rotation period"
            value=${Fe(this.backdrop.rotationSeconds)}
            min="-10000"
            max="10000"
            allowFractional
            @change=${e=>{this.backdrop.rotationSeconds=e.detail,this.requestUpdate()}}
          ></pv-number-input>
          <pv-number-input
            caption="Radius"
            value=${Fe(this.backdrop.radius)}
            min="1"
            max="1000"
            allowFractional
            @change=${e=>{this.backdrop.radius=e.detail,this.requestUpdate()}}
          ></pv-number-input>
        </div>
        <div class="separator"></div>
        <div class="flex-reverse">
          <pv-nudge
            @nudge=${e=>{this.backdrop.planetAxis[0]=Oe(this.backdrop.planetAxis[0]-e.detail.y,-180,180),this.backdrop.planetAxis[1]=Oe(this.backdrop.planetAxis[1]+e.detail.x,-180,180),this.requestUpdate()}}
          >
          </pv-nudge>
          <div class="caption">Axis</div>
        </div>
        <div class="flex-reverse">
          <pv-number-input
            caption="⏲"
            value=${Fe(this.backdrop.planetAxisDeviationSeconds[0])}
            min="0.001"
            max="10000"
            allowFractional
            @change=${e=>{this.backdrop.planetAxisDeviationSeconds[0]=e.detail,this.requestUpdate()}}
          ></pv-number-input>
          <pv-number-input
            caption="σ"
            value=${Fe(this.backdrop.planetAxisDeviationAmplitude[0])}
            min="0"
            max="180"
            allowFractional
            @change=${e=>{this.backdrop.planetAxisDeviationAmplitude[0]=e.detail,this.requestUpdate()}}
          ></pv-number-input>
          <pv-number-input
            caption="Tilt"
            value=${Fe(this.backdrop.planetAxis[0])}
            min="-180"
            max="180"
            allowFractional
            @change=${e=>{this.backdrop.planetAxis[0]=e.detail,this.requestUpdate()}}
          ></pv-number-input>
        </div>
        <div class="flex-reverse">
          <pv-number-input
            caption="⏲"
            value=${Fe(this.backdrop.planetAxisDeviationSeconds[1])}
            min="0.001"
            max="10000"
            allowFractional
            @change=${e=>{this.backdrop.planetAxisDeviationSeconds[1]=e.detail,this.requestUpdate()}}
          ></pv-number-input>
          <pv-number-input
            caption="σ"
            value=${Fe(this.backdrop.planetAxisDeviationAmplitude[1])}
            min="0"
            max="180"
            allowFractional
            @change=${e=>{this.backdrop.planetAxisDeviationAmplitude[1]=e.detail,this.requestUpdate()}}
          ></pv-number-input>
          <pv-number-input
            caption="Pitch"
            value=${Fe(this.backdrop.planetAxis[1])}
            min="-180"
            max="180"
            allowFractional
            @change=${e=>{this.backdrop.planetAxis[1]=e.detail,this.requestUpdate()}}
          ></pv-number-input>
        </div>
      </div>
    `}surfaceSections(){return Y`
      <div class="flex-vertical">
        <div class="flex-reverse">
          <pv-image-file
            filename=${this.backdrop.planetSurface}
            @change=${e=>{this.backdrop.planetSurface=e.detail,this.requestUpdate()}}
          ></pv-image-file>
          <div class="caption">Surface</div>
        </div>
        <div>
          <pv-slider
            caption="Vertical offset"
            value=${Fe(this.backdrop.surfaceVerticalOffset)}
            min="0"
            max="1"
            step="0.001"
            allowFractional
            @change=${e=>{this.backdrop.surfaceVerticalOffset=e.detail,this.requestUpdate()}}
          ></pv-slider>
        </div>
        <div class="separator"></div>
        <div class="flex-reverse">
          <pv-image-file
            filename=${this.backdrop.planetNormal}
            @change=${e=>{this.backdrop.planetNormal=e.detail,this.requestUpdate()}}
          ></pv-image-file>
          <div class="caption">Normal</div>
        </div>
        <div>
          <pv-slider
            caption="Intensity"
            value=${Fe(this.backdrop.surfaceNormalIntensity)}
            min="0"
            max="1"
            step="0.001"
            allowFractional
            @change=${e=>{this.backdrop.surfaceNormalIntensity=e.detail,this.requestUpdate()}}
          ></pv-slider>
        </div>
        <div class="separator"></div>
        <div class="flex-reverse">
          <pv-image-file
            filename=${this.backdrop.planetReflectivity}
            @change=${e=>{this.backdrop.planetReflectivity=e.detail,this.requestUpdate()}}
          ></pv-image-file>
          <div class="caption">Reflectivity</div>
        </div>
        <div class="separator"></div>
        <div class="flex-reverse">
          <pv-image-file
            filename=${this.backdrop.planetEmission}
            @change=${e=>{this.backdrop.planetEmission=e.detail,this.requestUpdate()}}
          ></pv-image-file>
          <div class="caption">Emission</div>
        </div>
        <div>
          <pv-slider
            caption="Scalar"
            value=${Fe(this.backdrop.emissionScalar)}
            min="0"
            max="10"
            step="0.001"
            allowFractional
            @change=${e=>{this.backdrop.emissionScalar=e.detail,this.requestUpdate()}}
          ></pv-slider>
        </div>
      </div>
      <div class="flex-reverse">
        <input
          type="checkbox"
          ?checked=${Fe(this.backdrop.emissionScalesWithShadow)}
          @change=${e=>{this.backdrop.emissionScalesWithShadow=e.target.checked,this.requestUpdate()}}
        />
        <div class="caption">Scales with shadow</div>
      </div>
    `}cloudSections(){return Y`
      <div class="flex-vertical">
        <div class="flex-reverse">
          <pv-image-file
            filename=${this.backdrop.globalCloud}
            @change=${e=>{this.backdrop.globalCloud=e.detail,this.requestUpdate()}}
          ></pv-image-file>
          <div class="caption">Cloud</div>
        </div>
        <div>
          <pv-slider
            caption="Cloudiness"
            value=${Fe(this.backdrop.cloudiness)}
            min="0"
            max="1"
            step="0.001"
            allowFractional
            @change=${e=>{this.backdrop.cloudiness=e.detail,this.requestUpdate()}}
          ></pv-slider>
        </div>
        <div>
          <pv-number-input
            caption="Panning rate"
            value=${Fe(this.backdrop.cloudPanningRate)}
            min="-1000"
            max="1000"
            allowFractional
            @change=${e=>{this.backdrop.cloudPanningRate=e.detail,this.requestUpdate()}}
          ></pv-number-input>
        </div>
        <div>
          <pv-slider
            caption="Vertical offset"
            value=${Fe(this.backdrop.cloudVerticalOffset)}
            min="0"
            max="1"
            step="0.001"
            allowFractional
            @change=${e=>{this.backdrop.cloudVerticalOffset=e.detail,this.requestUpdate()}}
          ></pv-slider>
        </div>
        <div class="separator"></div>
        <div class="flex-reverse">
          <pv-image-file
            filename=${this.backdrop.globalCloudNormal}
            @change=${e=>{this.backdrop.globalCloudNormal=e.detail,this.requestUpdate()}}
          ></pv-image-file>
          <div class="caption">Normal</div>
        </div>
        <div>
          <pv-slider
            caption="Intensity"
            value=${Fe(this.backdrop.cloudNormalIntensity)}
            min="0"
            max="1"
            step="0.001"
            allowFractional
            @change=${e=>{this.backdrop.cloudNormalIntensity=e.detail,this.requestUpdate()}}
          ></pv-slider>
        </div>
        <div class="separator"></div>
        <div class="flex-reverse">
          <pv-image-file
            filename=${this.backdrop.globalCloudFlow}
            @change=${e=>{this.backdrop.globalCloudFlow=e.detail,this.requestUpdate()}}
          ></pv-image-file>
          <div class="caption">Flow</div>
        </div>
        <div class="flex-reverse">
          <pv-number-input
            caption="⏲"
            value=${Fe(this.backdrop.cloudFlowSeconds)}
            min="0.001"
            max="10000"
            allowFractional
            @change=${e=>{this.backdrop.cloudFlowSeconds=e.detail,this.requestUpdate()}}
          ></pv-number-input>
          <pv-number-input
            caption="Intensity"
            value=${Fe(this.backdrop.cloudFlowIntensity)}
            min="0"
            max="1000"
            allowFractional
            @change=${e=>{this.backdrop.cloudFlowIntensity=e.detail,this.requestUpdate()}}
          ></pv-number-input>
        </div>
      </div>
    `}lightSections(){return Y`
      <div class="flex-vertical">
        <div class="flex-reverse">
          <div>
            <pv-color-picker
              .rgba=${this.backdrop.lightColor}
              @change=${e=>{this.backdrop.lightColor=e.detail}}
            ></pv-color-picker>
          </div>
          <div class="caption">Color</div>
          <pv-number-input
            caption="Radius"
            value=${Fe(this.backdrop.lightRadius)}
            min="0.001"
            max="1000"
            allowFractional
            @change=${e=>{this.backdrop.lightRadius=e.detail,this.requestUpdate()}}
          ></pv-number-input>
        </div>
        <div class="flex-reverse">
          <pv-nudge
            @nudge=${e=>{const t=this.backdrop.lightDirection,i=Math.hypot(t[0],t[1],t[2]);if(i<1e-7)return;let o=Math.atan2(t[1],Math.hypot(t[0],t[2])),r=Math.abs(o)<Math.PI/2-1e-7?Math.atan2(t[0],t[2]):0;o=Oe(o-e.detail.y*Math.PI/180,-Math.PI/2,Math.PI/2),r+=e.detail.x*Math.PI/180;const a=e=>Math.round(1e8*e)/1e8;t[0]=a(i*Math.cos(o)*Math.sin(r)),t[1]=a(i*Math.sin(o)),t[2]=a(i*Math.cos(o)*Math.cos(r)),this.requestUpdate()}}
          ></pv-nudge>
          <pv-number-input
            caption="z"
            value=${Fe(this.backdrop.lightDirection[2])}
            min="-1000"
            max="1000"
            allowFractional
            @change=${e=>{this.backdrop.lightDirection[2]=e.detail,this.requestUpdate()}}
          ></pv-number-input>
          <pv-number-input
            caption="y"
            value=${Fe(this.backdrop.lightDirection[1])}
            min="-1000"
            max="1000"
            allowFractional
            @change=${e=>{this.backdrop.lightDirection[1]=e.detail,this.requestUpdate()}}
          ></pv-number-input>
          <pv-number-input
            caption="x"
            value=${Fe(this.backdrop.lightDirection[0])}
            min="-1000"
            max="1000"
            allowFractional
            @change=${e=>{this.backdrop.lightDirection[0]=e.detail,this.requestUpdate()}}
          ></pv-number-input>
          <div class="caption">Direction</div>
        </div>
        <div class="separator"></div>
        <div class="flex-reverse">
          <pv-slider
            caption="Intensity contrast"
            value=${Fe(this.backdrop.lightIntensityContrast)}
            min="0"
            max="1"
            step="0.001"
            allowFractional
            @change=${e=>{this.backdrop.lightIntensityContrast=e.detail,this.requestUpdate()}}
          ></pv-slider>
        </div>
        <div class="separator"></div>
        <div class="flex-reverse">
          <div>
            <pv-color-picker
              .rgba=${this.backdrop.specularColor}
              @change=${e=>{this.backdrop.specularColor=e.detail}}
            ></pv-color-picker>
          </div>
          <div class="caption">Specular color</div>
        </div>
        <div>
          <pv-slider
            caption="Intensity"
            value=${Fe(this.backdrop.specularIntensity)}
            min="0"
            max="1"
            step="0.001"
            allowFractional
            @change=${e=>{this.backdrop.specularIntensity=e.detail,this.requestUpdate()}}
          ></pv-slider>
        </div>
      </div>
    `}atmosphereSections(){return Y`
      <div class="flex-vertical">
        <div>
          <pv-slider
            caption="Thickness"
            value=${Fe(this.backdrop.atmosphereThickness)}
            min="0"
            max="0.5"
            step="0.001"
            allowFractional
            @change=${e=>{this.backdrop.atmosphereThickness=e.detail,this.requestUpdate()}}
          ></pv-slider>
        </div>
        <div class="flex-reverse">
          <div>
            <pv-color-picker
              .rgba=${this.backdrop.atmosphereRayLightColor2}
              @change=${e=>{this.backdrop.atmosphereRayLightColor2=e.detail}}
            ></pv-color-picker>
          </div>
          <div class="caption">Dusk light</div>
          <div>
            <pv-color-picker
              .rgba=${this.backdrop.atmosphereRayLightColor1}
              @change=${e=>{this.backdrop.atmosphereRayLightColor1=e.detail}}
            ></pv-color-picker>
          </div>
          <div class="caption">Dawn light</div>
          <div>
            <pv-color-picker
              .rgba=${this.backdrop.atmosphereColor}
              @change=${e=>{this.backdrop.atmosphereColor=e.detail}}
            ></pv-color-picker>
          </div>
          <div class="caption">Color</div>
        </div>
      </div>
    `}updated(){}firstUpdated(){this.renderer=new ke(this.canvas),this.draw()}draw(){this.renderer.draw(this.backdrop,Math.floor(60*performance.now()/1e3)),setTimeout(()=>{this.draw()},0)}};je.styles=[Ae,n`
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

      .separator {
        height: 8px;
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

      .caption {
        height: 32px;
        line-height: 32px;
        margin-left: 4px;
        padding: 0px 2px;
      }
    `],Ve([k("#canvas")],je.prototype,"canvas",void 0),Ve([k("pv-import-ui")],je.prototype,"importUi",void 0),Ve([k("pv-export-ui")],je.prototype,"exportUi",void 0),je=Ve([e("pv-gui")],je);var Pe,Qe,ze,Ge,Ke,He=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n},qe=function(e,t,i,o){if("a"===i&&!o)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?o:"a"===i?o.call(e):o?o.value:t.get(e)},Ye=function(e,t,i,o,r){if("m"===o)throw new TypeError("Private method is not writable");if("a"===o&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===o?r.call(e,i):r?r.value=i:t.set(e,i),i};let Le=class extends he{constructor(){super(),Pe.add(this),this.active=!1,Qe.set(this,void 0),Ye(this,Qe,e=>{qe(this,Pe,"m",Ge).call(this,e)},"f")}render(){return Y`
      <div class="nudge-icon ${this.active?"active":""}" @click=${qe(this,Pe,"m",ze)}></div>
    `}get container(){return this}};Qe=new WeakMap,Pe=new WeakSet,ze=function(){this.active?qe(this,Pe,"m",Ke).call(this):(this.active=!0,window.document.addEventListener("keydown",qe(this,Qe,"f")),this.classList.add("active"),window.document.addEventListener("mousedown",e=>{for(let t=e.target;null!==t;t=t.parentElement)if(t===this)return;qe(this,Pe,"m",Ke).call(this)}))},Ge=function(e){let t;switch(e.preventDefault(),e.code){case"ArrowLeft":case"KeyA":t=new xe(-1,0);break;case"ArrowUp":case"KeyW":t=new xe(0,-1);break;case"ArrowRight":case"KeyD":t=new xe(1,0);break;case"ArrowDown":case"KeyS":t=new xe(0,1);break;case"KeyQ":case"Escape":return void qe(this,Pe,"m",Ke).call(this);case"NumpadAdd":case"Equal":return void this.dispatchEvent(new CustomEvent("zoom_in"));case"NumpadSubtract":case"Minus":return void this.dispatchEvent(new CustomEvent("zoom_out"));default:return}e.shiftKey?t=t.mul(10):e.ctrlKey&&(t=t.mul(.1)),this.dispatchEvent(new CustomEvent("nudge",{detail:t}))},Ke=function(){this.active=!1,window.document.removeEventListener("keydown",qe(this,Qe,"f")),this.classList.remove("active")},Le.styles=n`
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
  `,He([U({type:Boolean})],Le.prototype,"active",void 0),Le=He([e("pv-nudge")],Le);var We=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Xe=class extends he{constructor(){super(),this.collapsed=!1,this.collapsed=!1}onClick(){this.collapsed=!this.collapsed,this.dispatchEvent(new CustomEvent("collapse-toggle",{bubbles:!0,composed:!0,detail:this.collapsed}))}render(){return Y`<div
      class="${this.collapsed?"collapsed":"expanded"}"
      @click=${this.onClick}
    ></div>`}};Xe.styles=n`
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
  `,We([U({type:Boolean})],Xe.prototype,"collapsed",void 0),Xe=We([e("pv-collapse-icon")],Xe);let Je=class extends he{constructor(){super(),this.caption="",this.collapsed=!1,this.addEventListener("collapse-toggle",e=>{e.stopPropagation(),this.collapsed=e.detail})}render(){return Y`
      <div>
        <div class="header">
          <pv-collapse-icon .collapsed=${this.collapsed}></pv-collapse-icon>
          <div class="caption">${this.caption}</div>
        </div>
        <div ?hidden=${this.collapsed} class="body">
          <slot></slot>
        </div>
      </div>
    `}};Je.styles=n`
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
  `,We([U({type:String})],Je.prototype,"caption",void 0),We([U({type:Boolean})],Je.prototype,"collapsed",void 0),Je=We([e("pv-collapse")],Je);var Ze=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let et=class extends he{constructor(){super(),this.caption="",this.value=0,this.min=0,this.max=0,this.step=1}render(){return Y`<div class="flex-reverse container">
      <div>
        <input
          id="textInput"
          type="number"
          @change=${()=>{this.value=Oe(parseFloat(this.textInput.value),this.min,this.max),this.textInput.value=`${this.value}`,this.dispatchEvent(new CustomEvent("change",{detail:this.value})),this.requestUpdate()}}
          .value="${this.value}"
        />
      </div>
      <div class="slider">
        <input
          id="slider"
          type="range"
          min="${this.min}"
          max="${this.max}"
          step="${this.step}"
          .value="${this.value}"
          @change=${()=>{this.value=parseFloat(this.slider.value),this.dispatchEvent(new CustomEvent("change",{detail:this.value})),this.requestUpdate()}}
        />
      </div>
      <div class="caption">${this.caption}</div>
    </div>`}};et.styles=[Ae,n`
      .caption {
        margin: 6px 0px 6px 0px;
      }
      .slider {
        margin: 6px 8px 6px 8px;
        width: 100px;
      }
    `],Ze([U({type:String})],et.prototype,"caption",void 0),Ze([U({type:Number})],et.prototype,"value",void 0),Ze([U({type:Number})],et.prototype,"min",void 0),Ze([U({type:Number})],et.prototype,"max",void 0),Ze([U({type:Number})],et.prototype,"step",void 0),Ze([k("#slider")],et.prototype,"slider",void 0),Ze([k("#textInput")],et.prototype,"textInput",void 0),et=Ze([e("pv-slider")],et);var tt=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let it=class extends he{constructor(){super(),this.caption="",this.min=0,this.max=0,this.value=0,this.allowFractional=!1}render(){return Y`
      <div class="right-aligned">
        <div>
          <input
            id="input"
            type="number"
            @change=${e=>{e.stopPropagation();const t=e.target.value;this.value=Oe((this.allowFractional?parseFloat(t):parseInt(t))||0,this.min,this.max),this.dispatchEvent(new CustomEvent("change",{detail:this.value}))}}
            .value="${this.value}"
          />
        </div>
        <div class="number-input-caption">${this.caption}</div>
      </div>
    `}};it.styles=n`
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
      width: 40px;
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
  `,tt([U({type:String})],it.prototype,"caption",void 0),tt([U({type:Number})],it.prototype,"min",void 0),tt([U({type:Number})],it.prototype,"max",void 0),tt([U({type:Number})],it.prototype,"value",void 0),tt([U({type:Boolean})],it.prototype,"allowFractional",void 0),it=tt([e("pv-number-input")],it);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot="important",rt=" !"+ot,at=Ie(class extends $e{constructor(e){if(super(e),e.type!==Te||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const o=e[i];return null==o?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(const e in t){const o=t[e];if(null!=o){this.ft.add(e);const t="string"==typeof o&&o.endsWith(rt);e.includes("-")||t?i.setProperty(e,t?o.slice(0,-11):o,t?ot:""):i[e]=o}}return L}});var nt=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};const st=1e-7;function lt(e){const t=e[0]/255,i=e[1]/255,o=e[2]/255,r=Math.max(t,i,o),a=r-Math.min(t,i,o);let n,s;return n=r<st?0:a/r,n<st?s=0:(Math.abs(t-r)<st?(s=(i-o)/a,s<0&&(s+=6)):s=Math.abs(i-r)<st?2+(o-t)/a:4+(t-i)/a,s/=6),[s,n,r,e[3]/255]}function ct(e){const t=e[0],i=e[1],o=e[2];let r=0,a=0,n=0,s=t%1;s+=s<0?1:0,s*=6;const l=i*o,c=l*(1-Math.abs(s%2-1));s<1?(r=l,a=c):s<2?(r=c,a=l):s<3?(a=l,n=c):s<4?(a=c,n=l):s<5?(r=c,n=l):s<6&&(r=l,n=c);const d=o-l;return r+=d,a+=d,n+=d,[Oe(Math.floor(255*r),0,255),Oe(Math.floor(255*a),0,255),Oe(Math.floor(255*n),0,255),Oe(Math.floor(255*e[3]),0,255)]}function dt(e,t,i){return[t[0]*e+i[0]*(1-e),t[1]*e+i[1]*(1-e),t[2]*e+i[2]*(1-e),t[3]*e+i[3]*(1-e)]}const pt=96,ht=120,ut=256,At=4*Math.atan(1),mt=Math.sqrt(3);function gt(e,t){const i=Math.sqrt(e*e+t*t);return i>=pt&&i<=ht?0:i<pt?pt-i:i-ht}function ft(e,t){return Math.max(0,Math.max(2*t,-e*mt-t,e*mt-t)-pt+2)}function vt(e,t){return e>=132&&e<156&&t>=-120&&t<=ht}function bt(e,t){return Math.atan2(t,e)/2/At}function xt(e,t){return e/(t+pt)*mt/2+.5}function yt(e,t){return(t/pt+1)/1.5}function Ct(e,t){return Oe(t/ht/2+.5,0,1)}let wt=class extends he{constructor(){super(),this.rgba=[1,1,1,1],this._hsva=[1,1,1,1],this.offset=!1,this._active=!1,this._selectMode=void 0,this.windowClick=e=>{-1==e.composedPath().indexOf(this._picker)&&(this._active=!1,window.document.removeEventListener("mousedown",this.windowClick))}}connectedCallback(){super.connectedCallback(),this._hsva=lt(this.rgba)}updateRgba(){this.rgba=[this._red.value,this._green.value,this._blue.value,this._alpha.value],this._hsva=lt(this.rgba),this.dispatchEvent(new CustomEvent("change",{detail:this.rgba}))}render(){return Y`
      <div id="picker" class="color-picker">
        <div class="color-picker-background">
          <div
            class="color-picker-color"
            @click=${()=>{this._active=!0,window.document.addEventListener("mousedown",this.windowClick)}}
            style=${at({backgroundColor:`rgba(${this.rgba[0]}, ${this.rgba[1]},\n                             ${this.rgba[2]}, ${this.rgba[3]})`})}
          ></div>
        </div>
        <div ?hidden=${!this._active}>
          <div class="color-picker-popup outer-frame ${this.offset?"popup-bottom":"popup-top"}">
            <div class="inner-frame">
              <canvas
                id="canvas"
                width="${292}"
                height="${ut}"
                @mousedown=${this.mouseDown}
                @mousemove=${this.mouseMove}
                @mouseup=${this.mouseUp}
                @mouseleave=${this.mouseUp}
              ></canvas>
              <div class="flex-horizontal flex-spaced">
                <pv-number-input
                  id="red"
                  caption="r"
                  value=${this.rgba[0]}
                  minValue="0"
                  maxValue="255"
                  @input=${this.updateRgba}
                  @change=${this.updateRgba}
                ></pv-number-input>
                <pv-number-input
                  id="green"
                  caption="g"
                  value=${this.rgba[1]}
                  minValue="0"
                  maxValue="255"
                  @input=${this.updateRgba}
                  @change=${this.updateRgba}
                ></pv-number-input>
                <pv-number-input
                  id="blue"
                  caption="b"
                  value=${this.rgba[2]}
                  minValue="0"
                  maxValue="255"
                  @input=${this.updateRgba}
                  @change=${this.updateRgba}
                ></pv-number-input>
                <pv-number-input
                  id="alpha"
                  caption="a"
                  value=${this.rgba[3]}
                  minValue="0"
                  maxValue="255"
                  @input=${this.updateRgba}
                  @change=${this.updateRgba}
                ></pv-number-input>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}updated(){this._canvas.getContext("2d").putImageData(function(e){const t=new ImageData(292,ut),i=new xe(Math.cos(2*e[0]*At),Math.sin(2*e[0]*At)),o=new xe(2*(e[1]-.5)/mt*e[2]*1.5*pt,(1.5*e[2]-1)*pt);for(let r=-128;r<128;r++)for(let a=-128;a<164;a++){const n=4*((r+128)*t.width+(a+128)),s=gt(a,r),l=ft(a,r);if(s<1){const e=bt(a,r),o=Math.abs(i.vmul(new xe(a,r)));let l=ct([e,1,1,255]);o<2&&i.smul(new xe(a,r))>0&&(l=dt(o/2,l,[0,0,0,255])),t.data.set(dt(s,[48,48,48,255],l),n)}else if(l<1){let i=ct([e[0],xt(a,r),yt(0,r),255]);const s=o.subtract(new xe(a,r)),c=Math.sqrt(s.smul(s));Math.abs(c-4)<2&&(i=dt(Math.abs(c-4)/2,i,e[2]<.5?[255,255,255,255]:[0,0,0,255])),t.data.set(dt(l,[48,48,48,255],i),n)}else if(vt(a,r)){const i=(Math.floor(a/12)+Math.floor(r/12))%2==0?[102,102,102,255]:[204,204,204,255],o=ct(e);o[3]=255;const s=Math.trunc(2*(e[3]-.5)*ht);let l=dt(Ct(0,r),o,i);r==s?l=ct([e[0],.18,.17,1]):r!=s-1&&r!=s+1||(l=ct([e[0],.18,.85,1])),t.data.set(l,n)}else t.data.set([48,48,48,255],n)}return t}(this._hsva),0,0)}mouseDown(e){const t=e.offsetX-128,i=e.offsetY-128;if(gt(t,i)<st)this._hsva[0]=bt(t,i),this._selectMode="hue";else if(ft(t,i)<st)this._hsva[1]=xt(t,i),this._hsva[2]=yt(0,i),this._selectMode="saturationValue";else{if(!vt(t,i))return;this._hsva[3]=Ct(0,i),this._selectMode="alpha"}this.rgba=ct(this._hsva),this.dispatchEvent(new CustomEvent("change",{detail:this.rgba}))}mouseMove(e){const t=e.offsetX-128,i=e.offsetY-128;if("hue"===this._selectMode)this._hsva[0]=bt(t,i);else if("saturationValue"===this._selectMode){const e=new xe(t,i);ft(t,i)<st?(this._hsva[1]=xt(t,i),this._hsva[2]=yt(0,i)):i>=48?(this._hsva[1]=Oe(t/pt/mt+.5,0,1),this._hsva[2]=1):t>0?(this._hsva[1]=1,this._hsva[2]=Oe(e.smul(new xe(.5/mt,.5))/pt+.5,0,1)):(this._hsva[1]=0,this._hsva[2]=Oe(e.smul(new xe(-.5/mt,.5))/pt+.5,0,1))}else{if("alpha"!==this._selectMode)return;this._hsva[3]=Oe(Ct(0,i),0,1)}this.rgba=ct(this._hsva),this.dispatchEvent(new CustomEvent("change",{detail:this.rgba}))}mouseUp(){this._selectMode=void 0}get container(){return this}};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Et(e,t,i){return e?t(e):i?.(e)}wt.styles=[Ae,n`
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
    `],nt([U({type:Array})],wt.prototype,"rgba",void 0),nt([U({type:Array})],wt.prototype,"_hsva",void 0),nt([U({type:Boolean})],wt.prototype,"offset",void 0),nt([R()],wt.prototype,"_active",void 0),nt([R()],wt.prototype,"_selectMode",void 0),nt([k("#red")],wt.prototype,"_red",void 0),nt([k("#green")],wt.prototype,"_green",void 0),nt([k("#blue")],wt.prototype,"_blue",void 0),nt([k("#alpha")],wt.prototype,"_alpha",void 0),nt([k("#picker")],wt.prototype,"_picker",void 0),nt([k("#canvas")],wt.prototype,"_canvas",void 0),wt=nt([e("pv-color-picker")],wt);var Ut=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Rt=class extends he{constructor(){super(),this.filename="",this.onImageUpdated=e=>{e.detail.filename==this.filename&&this.requestUpdate()}}render(){return Y`
      <div class="right-aligned">
        ${Et(""!=this.filename,()=>Y` <div
              class="delete-icon"
              @click=${()=>{this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:null}))}}
            ></div>`)}
        <div class="replace-icon" @click=${()=>{this.file.click()}}></div>
        <div class="file-name ${this.loadedImage?"":"missing-file"}">${""!=this.filename?this.filename:"No texture selected"}</div>
      </div>
      <input id="file" type="file" hidden accept='image/*' @change=${this.onFileChange}>
      </input>
    `}connectedCallback(){super.connectedCallback(),ye.instance().addEventListener("image_updated",this.onImageUpdated)}disconnectedCallback(){super.disconnectedCallback(),ye.instance().removeEventListener("image_updated",this.onImageUpdated)}onFileChange(e){const t=e.target,i=t.files[0];void 0!==i&&(this.filename=i.name,ye.instance().loadImageFromFile(i),t.value="",this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:i.name})))}get loadedImage(){return ye.instance().getLoadedImage(this.filename)}get size(){return this.loadedImage?.size}};Rt.styles=n`
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
      color: #8e8e8e;
    }

    .missing-file {
      text-decoration: line-through;
      color: #8e8e8e;
    }
  `,Ut([U({type:String})],Rt.prototype,"filename",void 0),Ut([k("#file")],Rt.prototype,"file",void 0),Rt=Ut([e("pv-image-file")],Rt);var kt=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let St=class extends he{constructor(){super(),this.concealed=!1}render(){return Y`
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
    `}};St.styles=[Ae,n`
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
    `],kt([U({type:Boolean})],St.prototype,"concealed",void 0),St=kt([e("pv-overlay")],St);var _t=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let Tt=class extends he{constructor(){super(),this.jsonText="",this.luaText="",this.concealed=!1,this.activeTab="json"}render(){return Y`
      <pv-overlay
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
      </pv-overlay>
    `}};Tt.styles=[Ae,n`
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
    `],_t([U({type:String})],Tt.prototype,"jsonText",void 0),_t([U({type:String})],Tt.prototype,"luaText",void 0),_t([U({type:Boolean})],Tt.prototype,"concealed",void 0),_t([U({type:String})],Tt.prototype,"activeTab",void 0),Tt=_t([e("pv-export-ui")],Tt);var Bt=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};class Mt{constructor(e){const t=JSON.parse(e);if("object"!=typeof t)throw"Imported JSON must be an object";this.json=new Map(Object.entries(t))}parseColor(e){const t=this.json.get(e);if(void 0===t)return null;if(!Array.isArray(t)||4!=t.length)throw`${e} is not a valid color`;for(let i=0;i<4;i++)if("number"!=typeof t[i]||t[i]<0||t[i]>255)throw`${e} is not a valid color`;return Se(t)}parseNumber(e){const t=this.json.get(e);if(void 0===t)return null;if("number"!=typeof t)throw`${e} is not a number`;return t}parseBoolean(e){const t=this.json.get(e);if(void 0===t)return null;if("boolean"!=typeof t)throw`${e} is not a bool`;return t}parseTexture(e){const t=this.json.get(e);if(null==t)return null;if("object"!=typeof t)throw`${e} is not an object`;const i=new Map(Object.entries(t)).get("filename");if("string"!=typeof i)throw`${e}.filename is not a string`;return function(e){if(void 0!==e)return e.split("/").pop()}(i)??null}parseVector2D(e){const t=this.json.get(e);if(null==t)return null;if(Array.isArray(t)&&2==t.length&&"number"==typeof t[0]&&"number"==typeof t[1])return[t[0],t[1]];if("object"==typeof t&&"x"in t&&"number"==typeof t.x&&"y"in t&&"number"==typeof t.y)return[t.x,t.y];throw`${e} is not a valid vector`}parseVector3D(e){const t=this.json.get(e);if(null==t)return null;if(Array.isArray(t)&&3==t.length&&"number"==typeof t[0]&&"number"==typeof t[1]&&"number"==typeof t[2])return[t[0],t[1],t[2]];if("object"==typeof t&&"x"in t&&"number"==typeof t.x&&"y"in t&&"number"==typeof t.y&&"z"in t&&"number"==typeof t.z)return[t.x,t.y,t.z];throw`${e} is not a valid vector`}parse(){const e=[["atmosphereColor",this.parseColor("atmosphere_color")],["atmosphereRayLightColor1",this.parseColor("atmosphere_ray_light_color1")],["atmosphereRayLightColor2",this.parseColor("atmosphere_ray_light_color2")],["atmosphereThickness",this.parseNumber("atmosphere_thickness")],["cloudFlowIntensity",this.parseNumber("cloud_flow_intensity")],["cloudFlowSeconds",this.parseNumber("cloud_flow_seconds")],["cloudNormalIntensity",this.parseNumber("cloud_normal_intensity")],["cloudPanningRate",this.parseNumber("cloud_panning_rate")],["cloudVerticalOffset",this.parseNumber("cloud_vertical_offset")],["cloudiness",this.parseNumber("cloudiness")],["emissionScalar",this.parseNumber("emission_scalar")],["emissionScalesWithShadow",this.parseBoolean("emission_scales_with_shadow")],["globalCloud",this.parseTexture("global_cloud")],["globalCloudFlow",this.parseTexture("global_cloud_flow")],["globalCloudNormal",this.parseTexture("global_cloud_normal")],["lightColor",this.parseColor("light_color")],["lightDirection",this.parseVector3D("light_direction")],["lightIntensityContrast",this.parseNumber("light_intensity_contrast")],["lightRadius",this.parseNumber("light_radius")],["planetAxis",this.parseVector2D("planet_axis")],["planetAxisDeviationAmplitude",this.parseVector2D("planet_axis_deviation_amplitude")],["planetAxisDeviationSeconds",this.parseVector2D("planet_axis_deviation_seconds")],["planetEmission",this.parseTexture("planet_emission")],["planetNormal",this.parseTexture("planet_normal")],["planetReflectivity",this.parseTexture("planet_reflectivity")],["planetSurface",this.parseTexture("planet_surface")],["radius",this.parseNumber("radius")],["rotationSeconds",this.parseNumber("rotation_seconds")],["specularColor",this.parseColor("specular_color")],["specularIntensity",this.parseNumber("specular_intensity")],["surfaceNormalIntensity",this.parseNumber("surface_normal_intensity")],["surfaceVerticalOffset",this.parseNumber("surface_vertical_offset")]].filter(([e,t])=>null!==t);return{..._e(),...Object.fromEntries(e)}}}let It=class extends he{constructor(){super(),this.concealed=!1,this.error=void 0}render(){return Y`
      <pv-overlay
        ?concealed=${this.concealed}
        @close=${()=>{this.text.value="",this.error=void 0,this.concealed=!0}}
      >
        <div class="import-ui">
          <div id="import_header" class="import-header">
            Accepted input: well-formed JSON of
            <a href="https://lua-api.factorio.com/latest/types/PlatformBackdrop.html">
              PlatformBackdrop</a
            >. It can be obtained from the export function of this tool, from a dump produced by
            running
            <a href="https://wiki.factorio.com/Command_line_parameters">factorio --dump-data</a>,
            from <a href="https://raw.tools.bpbin.com/">data.raw explorer</a>, or any other methods.
          </div>
          <textarea></textarea>
          <div class="import-footer flex-reverse">
            <div
              class="confirm-icon"
              @click=${()=>{this.tryImport()}}
            ></div>
            ${Et(void 0!==this.error,()=>Y` <div class="error-message">${this.error}</div>`)}
          </div>
        </div>
      </pv-overlay>
    `}tryImport(){try{const e=new Mt(this.text.value).parse();if(void 0!==e)return this.text.value="",this.error=void 0,this.concealed=!0,void this.dispatchEvent(new CustomEvent("settingsImported",{detail:e}))}catch(e){"string"==typeof e?this.error=e:e instanceof SyntaxError?this.error=e.message:this.error="Malformed input"}}};It.styles=[Ae,n`
      .import-ui {
        position: relative;
        width: 800px;
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
        border-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAMAAAAMs7fIAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+kDHAAMEv/8TFkAAADnUExURR9jKzaAR0iaXzqQUiFpLzCJSRZaISmFRCWCQCOCPxVZICGBPiCBPSG0XSO1Xii1YC+3ZTi5a0K5b0y2cVazdCnQcRXLZR/NbAfIXQ7JYRnMaBbLZgvIXwTHWwDGWSTNbSfOby3PcjbReDTKczfLdDvMeEPOfEPEdkTFd0rFek/HfVG8d1K9eFW+elq/fWrPjmPck1TdiEndgEDbejnadjXZczLYcoDmo23olGPril3thFnsgVXrf1PqfVHqfYPuoHPxkWr0iWf2hWX2g2P1gmL1gmH1gWj7gmn7g2r7hGz6hnP4jID1mb/GK9MAAAB2SURBVHjaYvQBNDoWBwjAUAxNaviNKdAjR/ZfB5f2B3d91e/RARzhkTFPADrB0Ytn+OIZ5Jynzh88xVohBPb3noW8B0ph/eDp7T0bKQJbMh083bzn0if863nt8zrrVU9bJwCecXTucAMyyUykdwFXshWijgcWO2ZybalT8XPYAAAAAElFTkSuQmCC')
          8/4px repeat;
        background-color: #00c659;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+kDHAAYGUaAQoQAAAELSURBVHjaYyAKjIJRICYmFqOkqPRdTFQsgPqGi4q5qaqo/tNQ1/gPwiDLqGa4qKios5qqGthwGJaXk39FFcPFxcXLEYYjsKKC4ieKDZcQl2iEGY6OpSSlthI0QEREhEVaWvoUMDyT0MSZxMXEs4GG/8dh+CagGi6CFsjJyj0AaVBXU/8PjEQPpGCpRTcUpk5KSmoXyGHEeL8ZWTMoKIA+SZGUkFwENAiXy9cRHb7SUtJHFBUVv6K7EJfhQAd1I+sn1QeYGGEp2HDMYCEcwWxAL68HGoDfcAmJySQZjJ5agJZsgVuC6fJmqmQmYMTOQzecwvIG0ycg18IiGZgHUmFy1LakHZTBGIYkGAUAqWyaQRtD4EMAAAAASUVORK5CYII=');
        background-size: 16px;
        background-position: center;
        width: 24px;
        height: 24px;
      }
    `],Bt([U({type:Boolean})],It.prototype,"concealed",void 0),Bt([k("textarea")],It.prototype,"text",void 0),Bt([R()],It.prototype,"error",void 0),It=Bt([e("pv-import-ui")],It);
