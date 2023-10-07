(()=>{"use strict";var e,t,s,i;!function(e){e.head1="head1",e.head2="head2",e.head3="head3"}(e||(e={})),function(e){e.chest1="chest1",e.chest2="chest2",e.chest3="chest3"}(t||(t={})),function(e){e.legs1="legs1",e.legs2="legs2",e.legs3="legs3"}(s||(s={})),function(e){e.CHANGE_HEAD="CHANGE_HEAD",e.CHANGE_CHEST="CHANGE_CHEST",e.CHANGE_LEGS="CHANGE_LEGS"}(i||(i={}));let n={head:e.head1,chest:t.chest1,legs:s.legs1};const r=[],o=e=>{const t=JSON.parse(JSON.stringify(n));n=((e,t)=>{switch(e.type){case i.CHANGE_HEAD:return Object.assign(Object.assign({},t),{head:e.payload});case i.CHANGE_CHEST:return Object.assign(Object.assign({},t),{chest:e.payload});case i.CHANGE_LEGS:return Object.assign(Object.assign({},t),{legs:e.payload});default:return t}})(e,t),r.forEach((e=>e.render())),console.log(n)},c=e=>{r.push(e)};var d;!function(e){e.head="head",e.chest="chest",e.legs="legs"}(d||(d={}));class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),c(this)}connectedCallback(){this.render()}render(){var i,n;if(this.shadowRoot){this.shadowRoot.innerHTML="";const r=this.ownerDocument.createElement("link");r.setAttribute("rel","stylesheet"),r.setAttribute("href","/src/components/bigContainer/bigContainer.css"),null===(i=this.shadowRoot)||void 0===i||i.appendChild(r);const o=this.ownerDocument.createElement("section");null===(n=this.shadowRoot)||void 0===n||n.appendChild(o);const c=this.ownerDocument.createElement("div");c.classList.add("buttonRow"),o.appendChild(c);const a=this.ownerDocument.createElement("change-button");a.setAttribute("img","/src/figures/head1.png"),a.setAttribute("id",`${e.head1}`),a.setAttribute("type",`${d.head}`),c.appendChild(a);const h=this.ownerDocument.createElement("change-button");h.setAttribute("img","/src/figures/head2.png"),h.setAttribute("id",`${e.head2}`),h.setAttribute("type",`${d.head}`),c.appendChild(h);const l=this.ownerDocument.createElement("change-button");l.setAttribute("img","/src/figures/head3.png"),l.setAttribute("id",`${e.head3}`),l.setAttribute("type",`${d.head}`),c.appendChild(l);const u=this.ownerDocument.createElement("div");u.classList.add("buttonRow"),o.appendChild(u);const p=this.ownerDocument.createElement("change-button");p.setAttribute("img","/src/figures/chest1.png"),p.setAttribute("id",`${t.chest1}`),p.setAttribute("type",`${d.chest}`),u.appendChild(p);const m=this.ownerDocument.createElement("change-button");m.setAttribute("img","/src/figures/chest2.png"),m.setAttribute("id",`${t.chest2}`),m.setAttribute("type",`${d.chest}`),u.appendChild(m);const g=this.ownerDocument.createElement("change-button");g.setAttribute("img","/src/figures/chest3.png"),g.setAttribute("id",`${t.chest3}`),g.setAttribute("type",`${d.chest}`),u.appendChild(g);const b=this.ownerDocument.createElement("div");b.classList.add("buttonRow"),o.appendChild(b);const A=this.ownerDocument.createElement("change-button");A.setAttribute("img","/src/figures/legs1.png"),A.setAttribute("id",`${s.legs1}`),A.setAttribute("type",`${d.legs}`),b.appendChild(A);const E=this.ownerDocument.createElement("change-button");E.setAttribute("img","/src/figures/legs2.png"),E.setAttribute("id",`${s.legs2}`),E.setAttribute("type",`${d.legs}`),b.appendChild(E);const w=this.ownerDocument.createElement("change-button");w.setAttribute("img","/src/figures/legs3.png"),w.setAttribute("id",`${s.legs3}`),w.setAttribute("type",`${d.legs}`),b.appendChild(w)}}}customElements.define("big-container",a);class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),c(this)}connectedCallback(){this.render()}render(){var e,t;if(this.shadowRoot){this.shadowRoot.innerHTML="";const s=this.ownerDocument.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("href","/src/components/canvasDiv/canvasDiv.css"),null===(e=this.shadowRoot)||void 0===e||e.appendChild(s);const i=this.ownerDocument.createElement("div");i.setAttribute("id","canvas"),null===(t=this.shadowRoot)||void 0===t||t.appendChild(i);const n=this.ownerDocument.createElement("elements-div");n.setAttribute("img","/src/figures/head1.png"),n.setAttribute("id","head1"),i.appendChild(n);const r=this.ownerDocument.createElement("elements-div");r.setAttribute("img","/src/figures/head2.png"),r.setAttribute("id","head2"),i.appendChild(r);const o=this.ownerDocument.createElement("elements-div");o.setAttribute("img","/src/figures/head3.png"),o.setAttribute("id","head3"),i.appendChild(o);const c=this.ownerDocument.createElement("elements-div");c.setAttribute("img","/src/figures/chest1.png"),c.setAttribute("id","chest1"),i.appendChild(c);const d=this.ownerDocument.createElement("elements-div");d.setAttribute("img","/src/figures/chest2.png"),d.setAttribute("id","chest2"),i.appendChild(d);const a=this.ownerDocument.createElement("elements-div");a.setAttribute("img","/src/figures/chest3.png"),a.setAttribute("id","chest3"),i.appendChild(a);const h=this.ownerDocument.createElement("elements-div");h.setAttribute("img","/src/figures/legs1.png"),h.setAttribute("id","legs1"),i.appendChild(h);const l=this.ownerDocument.createElement("elements-div");l.setAttribute("img","/src/figures/legs2.png"),l.setAttribute("id","legs2"),i.appendChild(l);const u=this.ownerDocument.createElement("elements-div");u.setAttribute("img","/src/figures/legs3.png"),u.setAttribute("id","legs3"),i.appendChild(u)}}}customElements.define("canvas-div",h);class l extends HTMLElement{static get observedAttributes(){return Object.keys({img:null,id:null})}constructor(){super(),this.properties={img:"",id:""},this.attachShadow({mode:"open"})}attributeChangedCallback(e,t,s){switch(e){case"img":this.properties.img=s;break;case"id":this.properties.id=s}}connectedCallback(){this.render()}render(){var e,t;const s=this.ownerDocument.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("href","/src/components/elementsDiv/elementsDiv.css"),null===(e=this.shadowRoot)||void 0===e||e.appendChild(s);const i=this.ownerDocument.createElement("img");i.setAttribute("src",`${this.properties.img}`),null===(t=this.shadowRoot)||void 0===t||t.appendChild(i),console.log(this.properties.id),n.head===this.properties.id||n.chest===this.properties.id||n.legs===this.properties.id?(i.classList.contains("hiddenPart")&&i.classList.remove("hiddenPart"),i.classList.add(`${this.properties.id}`)):(i.classList.contains("hiddenPart")&&i.classList.remove(`${this.properties.id}`),i.classList.add("hiddenPart"))}}customElements.define("elements-div",l);class u extends HTMLElement{static get observedAttributes(){return Object.keys({img:null,id:null,type:null})}constructor(){super(),this.properties={img:"",id:"",type:""},this.attachShadow({mode:"open"})}attributeChangedCallback(e,t,s){switch(e){case"img":this.properties.img=s;break;case"id":this.properties.id=s;break;case"type":this.properties.type=s}}connectedCallback(){this.render()}render(){var e,t;const s=this.ownerDocument.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("href","/src/components/button/button.css"),null===(e=this.shadowRoot)||void 0===e||e.appendChild(s);const n=this.ownerDocument.createElement("div");n.classList.add("changeButton"),null===(t=this.shadowRoot)||void 0===t||t.appendChild(n);const r=this.ownerDocument.createElement("img");r.setAttribute("src",`${this.properties.img}`),n.appendChild(r),n.addEventListener("click",(()=>{var e;this.properties.type===d.head&&o((e=this.properties.id,{type:i.CHANGE_HEAD,payload:e})),this.properties.type===d.chest&&o((e=>({type:i.CHANGE_CHEST,payload:e}))(this.properties.id)),this.properties.type===d.legs&&o((e=>({type:i.CHANGE_LEGS,payload:e}))(this.properties.id))}))}}customElements.define("change-button",u);class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){if(this.shadowRoot){const e=this.ownerDocument.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href","/src/index.css"),this.shadowRoot.appendChild(e);const t=this.ownerDocument.createElement("big-container");this.shadowRoot.appendChild(t);const s=this.ownerDocument.createElement("canvas-div");this.shadowRoot.appendChild(s)}}}customElements.define("app-container",p)})();