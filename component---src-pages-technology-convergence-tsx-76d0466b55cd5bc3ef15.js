(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"7JU7":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var c=n("KQm4"),a=n("q1tI"),i=n.n(a),o=n("x+Gp"),l=n("tkFw"),r=n("Wbzz"),s=n("RyyV"),u=n("1Phs"),d=n("YECO");n("jKeJ");function h(e){var t=e.data,n=Object(s.e)(t.allTechnologiesCsv),h=Object(s.e)(e.data.technologyImages),m=Object(a.useState)([]),v=m[0],b=m[1],g=Object(u.d)(n,v),f=g.length>=1&&g.length<=5,p=g.length>0;return i.a.createElement(o.a,{"title-":"Aleph HMI",pageHeader:"Technology Convergence Timeline"},i.a.createElement(l.a,{title:"Technology Convergence"}),i.a.createElement("div",{className:"tech-conver"},i.a.createElement("div",{className:"tech-conver__header-GI"},"Choose from technologies below to generate a visualisation showing how these technologies could combine with others to produce new integrated capabilities in the future. Select up to five technologies and then submit."),i.a.createElement("div",{className:"tech-conver__main-GI"},n.map((function(e){var t=h.find((function(t){return t.name===e.icon}));if(!t)return null;var n=Object(d.i)(t);return i.a.createElement("div",{key:e.id,className:"tech-conver__grid-item"},i.a.createElement("div",{className:"tech-conver__tech-container"},i.a.createElement("div",{onClick:function(){return t=e.id,n=v.includes(t),void b(n?v.filter((function(e){return e!==t})):[].concat(Object(c.a)(v),[t]));var t,n},"data-tip":e.title||"","data-iscapture":"true"},i.a.createElement(d.a,{style:{opacity:v.includes(e.id)?1:.2},image:n,alt:e.title})),i.a.createElement("button",{className:"tech-conver__tech-click-button",onClick:function(){return t=e.slug,void window.open(Object(r.withPrefix)("/technology/"+t),"_blank");var t},disabled:!g.some((function(t){return t===e.id}))},e.title)))}))),i.a.createElement("div",{className:"tech-conver__buttons-GI"},i.a.createElement("div",{className:"tech-conver__buttons-right"},i.a.createElement("button",{disabled:!p,onClick:function(){b([])},style:{opacity:p?1:.3}},"Reset"),i.a.createElement("button",{disabled:!f,onClick:function(){return e="",g.forEach((function(t){e=e.concat(t+",")})),e=e.replace(/\,$/,""),void Object(r.navigate)("/technology-convergence-visualisation?technologies="+e);var e},style:{opacity:f?1:.3}},"Submit")))))}},jKeJ:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-technology-convergence-tsx-76d0466b55cd5bc3ef15.js.map