(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{377:function(e,t,n){var r=n(0),a=n(378).entries;r({target:"Object",stat:!0},{entries:function(e){return a(e)}})},378:function(e,t,n){var r=n(6),a=n(44),i=n(14),o=n(67).f,s=function(e){return function(t){for(var n,s=i(t),c=a(s),l=c.length,u=0,p=[];l>u;)n=c[u++],r&&!o.call(s,n)||p.push(e?[n,s[n]]:s[n]);return p}};e.exports={entries:s(!0),values:s(!1)}},379:function(e,t,n){var r=n(0),a=n(6);r({target:"Object",stat:!0,forced:!a,sham:!a},{defineProperties:n(176)})},380:function(e,t,n){var r=n(0),a=n(1),i=n(14),o=n(24).f,s=n(6),c=a((function(){o(1)}));r({target:"Object",stat:!0,forced:!s||c,sham:!s},{getOwnPropertyDescriptor:function(e,t){return o(i(e),t)}})},381:function(e,t){e.exports={base:"/",port:"7999",serviceWorker:!0,head:[["link",{rel:"manifest",href:"manifest.json"}],["meta",{name:"mobile-web-app-capable",content:"yes"}],["meta",{name:"apple-mobile-web-app-capable",content:"yes"}],["meta",{name:"application-name",content:"PWA Workshop Docs"}],["meta",{name:"apple-mobile-web-app-title",content:"PWA Workshop Docs"}]],locales:{"/":{lang:"en-US",title:"PWA Workshop",description:"Introduction to Progressive Web Applications"},"/fr/":{lang:"fr-FR",title:"PWA Workshop",description:"Introduction aux Progressive Web Applications"}},themeConfig:{locales:{"/":{selectText:"Language",label:"English",editLinkText:"Edit this page on GitHub",sidebar:["/","/1-manifest/","/2-service-worker/","/3-precaching/","/4-api-cache/","/5-pwa-install/","/6-background-sync/","/finish"]},"/fr/":{selectText:"Langue",label:"Français",editLinkText:"Editer sur GitHub",sidebar:["/fr/","/fr/1-manifest/","/fr/2-service-worker/","/fr/3-precaching/","/fr/4-api-cache/","/fr/5-pwa-install/","/fr/6-background-sync/","/fr/finish"]}},nav:[{text:"Cookbook",link:"https://pwa-cookbook.js.org"},{text:"Github",link:"https://github.com/sylvainpolletvillard/pwa-workshop"}]}}},386:function(e,t,n){"use strict";n.r(t);n(173),n(65),n(377),n(175);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(45),n(23),n(94),n(379),n(380),n(178),n(95),n(96);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var o=n(93),s=n(40),c=n(381),l=n.n(c),u=Object.assign.apply(Object,[{}].concat(Object(s.a)(Object.entries(l.a.locales).map((function(e){var t=Object(o.a)(e,2),n=t[0],a=t[1];return r({},a.lang,i(i({},a),{},{path:n}))}))))),p=u[l.a.locales["/"].lang],f={name:"SuggestLocale",data:function(){return{currentLocale:null,suggestedLocale:null}},mounted:function(){this.currentLocale=u[this.$localeConfig.lang],this.suggestedLocale=u[window.navigator.language]||p},computed:{message:function(){switch(this.suggestedLocale.lang){case"fr-FR":return"Vous préférez peut-être lire ce guide en français ?";case"en-US":return"You might prefer to read this guide in english ?"}}}},g=n(42),b=Object(g.a)(f,(function(){var e=this.$createElement,t=this._self._c||e;return this.suggestedLocale!==this.currentLocale?t("div",{staticClass:"tip custom-block"},[t("p",[t("a",{attrs:{href:this.suggestedLocale.path}},[this._v(this._s(this.message))])])]):this._e()}),[],!1,null,null,null);t.default=b.exports}}]);