(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{114:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),i=(r(0),r(143)),a={id:"maintenance-optimization",title:"Optimization"},c={unversionedId:"maintenance-optimization",id:"maintenance-optimization",isDocsHomePage:!1,title:"Optimization",description:"Whether you run a high traffic Mixcore installation or a small blog on a low cost shared host, you should optimize Mixcore and your server to run as efficiently as possible. This article provides a broad overview of Mixcore optimization with specific recommended approaches. However, it\u2019s not a detailed technical explanation of each aspect.",source:"@site/docs/maintenance-optimization.md",slug:"/maintenance-optimization",permalink:"/maintenance-optimization",editUrl:"https://github.com/mixcore/docs/edit/master/website/docs/maintenance-optimization.md",version:"current",lastUpdatedBy:"Smilefounder",lastUpdatedAt:1580460714,sidebar:"someSidebar",previous:{title:"Mixcore Restores",permalink:"/maintenance-mixcore-restores"},next:{title:"Hardending Mixcore",permalink:"/security-hardening-mixcore"}},s=[{value:"Performance factors",id:"performance-factors",children:[]}],l={toc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Whether you run a high traffic Mixcore installation or a small blog on a low cost shared host, you should optimize Mixcore and your server to run as efficiently as possible. This article provides a broad overview of Mixcore optimization with specific recommended approaches. However, it\u2019s not a detailed technical explanation of each aspect."),Object(i.b)("p",null,"If you need a quick fix now, go straight to the Caching section, you\u2019ll get the biggest benefit for the smallest hassle there. If you want to get started on a more thorough optimization process immediately, go to How Do You Improve Performance in Mixcore."),Object(i.b)("p",null,"A broad overview of the topic of performance is included below in What Affects Performance and How Do You Measure Performance. Many of the techniques discussed here also apply to Mixcore Multisite (MU)."),Object(i.b)("h2",{id:"performance-factors"},"Performance factors"),Object(i.b)("p",null,"Several factors can affect the performance of your Mixcore blog (or website). Those factors include, but are not limited to, the hosting environment, Mixcore configuration, software versions, number of graphics and their sizes."),Object(i.b)("p",null,"Most of these performance degrading factors are addressed here in this article."))}p.isMDXComponent=!0},143:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,d=u["".concat(a,".").concat(m)]||u[m]||f[m]||i;return r?o.a.createElement(d,c(c({ref:t},l),{},{components:r})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);