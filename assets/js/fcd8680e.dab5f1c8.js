"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4268],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||l;return a?n.createElement(f,o(o({ref:t},m),{},{components:a})):n.createElement(f,o({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4803:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],i={},s='What is "Template"?',p={unversionedId:"template",id:"template",title:'What is "Template"?',description:"Templates are ASP.NET (Dotnet) Core source files used to generate the pages requested by visitors, and are output as HTML. Template files are made up of HTML, ASP.NET (Dotnet) Core, and mixcore CMS Template Tags.",source:"@site/docs/template.md",sourceDirName:".",slug:"/template",permalink:"/template",draft:!1,editUrl:"https://github.com/mixcore/docs/edit/master/website/docs/template.md",tags:[],version:"current",lastUpdatedBy:"Smilefounder",lastUpdatedAt:1580460714,formattedLastUpdatedAt:"1/31/2020",frontMatter:{}},m={},u=[{value:"Document Head (header.aspx)",id:"document-head-headeraspx",level:2}],c={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"what-is-template"},'What is "Template"?'),(0,l.kt)("p",null,"Templates are ASP.NET (Dotnet) Core source files used to generate the pages requested by visitors, and are output as HTML. Template files are made up of HTML, ASP.NET (Dotnet) Core, and mixcore CMS Template Tags."),(0,l.kt)("p",null,"Let's look at the various templates that can be defined as part of a Theme."),(0,l.kt)("p",null,"mixcore CMS allows you to define separate templates for the various aspects of your site. It is not essential, however, to have all these different template files for your site to fully function. Templates are chosen and generated based upon the Template Hierarchy, depending upon what templates are available in a particular Theme."),(0,l.kt)("p",null,"As a Theme developer, you can choose the amount of customization you want to implement using templates. For example, as an extreme case, you can use only one template file, called index.aspx as the template for all pages generated and displayed by the site. A more common use is to have different template files generate different results, to allow maximum customization."),(0,l.kt)("h1",{id:"template-files-list"},"Template Files List"),(0,l.kt)("p",null,"(TBC)"),(0,l.kt)("h1",{id:"basic-templates"},"Basic Templates"),(0,l.kt)("p",null,"(TBC)"),(0,l.kt)("h1",{id:"custom-page-templates"},"Custom Page Templates"),(0,l.kt)("p",null,"(TBC)"),(0,l.kt)("h1",{id:"custom-module-templates"},"Custom Module Templates"),(0,l.kt)("p",null,"(TBC)"),(0,l.kt)("h1",{id:"translation-support--i18n"},"Translation Support / I18n"),(0,l.kt)("p",null,"To ensure smooth transition for language localization, use the mixcore CMS gettext-based i18n functions for wrapping all translatable text within the template files. This makes it easier for the translation files to hook in and translate the labels, titles and other template text into the site's current language. See more at mixcore CMS Localization and I18n for mixcore CMS Developers."),(0,l.kt)("h1",{id:"template-file-checklist"},"Template File Checklist"),(0,l.kt)("p",null,"When developing a Theme, check your template files against the following template file standards."),(0,l.kt)("h2",{id:"document-head-headeraspx"},"Document Head (header.aspx)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use the proper ",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Document_Type_Declaration"},"DOCTYPE"),"."),(0,l.kt)("li",{parentName:"ul"},"The opening ",(0,l.kt)("inlineCode",{parentName:"li"},"<html>")," tag should include language attributes. ",(0,l.kt)("strong",{parentName:"li"},"[TODO]")),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"<meta>")," charset element should be placed before everything else, including the ",(0,l.kt)("inlineCode",{parentName:"li"},"<title>")," element."),(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"@metainfo()")," to set the ",(0,l.kt)("inlineCode",{parentName:"li"},"<meta>")," charset and description elements. ",(0,l.kt)("strong",{parentName:"li"},"[TODO]")),(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},'@ViewData["Title"]')," to set the ",(0,l.kt)("inlineCode",{parentName:"li"},"<title>")," element."),(0,l.kt)("li",{parentName:"ul"},"Use Automatic Feed Links to add feed links. "),(0,l.kt)("li",{parentName:"ul"},"Add a call to ",(0,l.kt)("inlineCode",{parentName:"li"},'@Html.Partial("../Layouts/sioc_head.cshtml")')," before the closing ",(0,l.kt)("inlineCode",{parentName:"li"},"</head>")," tag. Plugins use this action hook to add their own scripts, stylesheets, and other functionality."),(0,l.kt)("li",{parentName:"ul"},"Do not link the theme stylesheets in the Header template. Use the ",(0,l.kt)("inlineCode",{parentName:"li"},'@RenderSection("Styles", false)')," action hook in a theme function instead.")),(0,l.kt)("p",null,"Here's an example of a correctly-formatted HTML5 compliant head area:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-aspx"},'<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="..." />\n        <title>@ViewData["Title"] - mixcore</title>\n        <link rel="profile" href="http://gmpg.org/xfn/11" />\n        ...\n    </head>\n')))}d.isMDXComponent=!0}}]);