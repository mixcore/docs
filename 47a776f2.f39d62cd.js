(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{143:function(e,t,o){"use strict";o.d(t,"a",(function(){return m})),o.d(t,"b",(function(){return f}));var r=o(0),n=o.n(r);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=n.a.createContext({}),u=function(e){var t=n.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},m=function(e){var t=u(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(o),p=r,f=m["".concat(i,".").concat(p)]||m[p]||h[p]||a;return o?n.a.createElement(f,s(s({ref:t},c),{},{components:o})):n.a.createElement(f,s({ref:t},c))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},86:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return u}));var r=o(3),n=o(7),a=(o(0),o(143)),i={},s={unversionedId:"theme",id:"theme",isDocsHomePage:!1,title:"theme",description:'What is "Theme"?',source:"@site/docs/theme.md",slug:"/theme",permalink:"/theme",editUrl:"https://github.com/mixcore/docs/edit/master/website/docs/theme.md",version:"current",lastUpdatedBy:"Smilefounder",lastUpdatedAt:1580460714},l=[{value:"Creating Themes",id:"creating-themes",children:[{value:"Why mixcore CMS Themes",id:"why-mixcore-cms-themes",children:[]}]}],c={toc:l};function u(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"what-is-theme"},'What is "Theme"?'),Object(a.b)("p",null,'Fundamentally, the mixcore CMS Theme system is a way to "skin" your weblog. Yet, it is more than just a "skin." Skinning your site implies that only the design is changed. mixcore CMS Themes can provide much more control over the look and presentation of the material on your website.'),Object(a.b)("p",null,"A mixcore CMS Theme is a collection of files that work together to produce a graphical interface with an underlying unifying design for a multi-purpose website. These files are called template files. A Theme modifies the way the site is displayed, without modifying the underlying software. Themes may include customized template files, image files (","*",".jpg, ","*",".gif), style sheets (","*",".css), custom Pages, Modules, as well as any necessary code files (","*",".aspx). For an introduction to template files, see Stepping Into Templates."),Object(a.b)("p",null,"Let's say you write a lot about cheese and gadgets. Through the use of the mixcore CMS Loop and template files, you can customize your Cheese category posts to look different from your Gadgets category posts. With this powerful control over what different pages and categories look like on your site, you are limited only by your imagination. For information on how to use different Themes for different categories or posts, see The Loop in Action and Category Templates."),Object(a.b)("h2",{id:"creating-themes"},"Creating Themes"),Object(a.b)("h3",{id:"why-mixcore-cms-themes"},"Why mixcore CMS Themes"),Object(a.b)("p",null,"mixcore CMS Themes are files that work together to create the design and functionality of a mixcore CMS site. Each Theme may be different, offering many choices for site owners to instantly change their website look."),Object(a.b)("p",null,"You may wish to develop mixcore CMS Themes for your own use, for a client project or to submit to the mixcore CMS Theme Directory. Why else should you build a mixcore CMS Theme?"),Object(a.b)("p",null,"To create a unique look for your mixcore CMS site."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"To take advantage of templates, template tags, and the mixcore CMS Loop to generate different website results and looks."),Object(a.b)("li",{parentName:"ul"},"To provide alternative templates for specific site features, such as category pages and search result pages."),Object(a.b)("li",{parentName:"ul"},"To quickly switch between two site layouts, or to take advantage of a Theme or style switcher to allow site owners to change the look of your site."),Object(a.b)("li",{parentName:"ul"},"A mixcore CMS Theme has many benefits, too.")),Object(a.b)("p",null,"It separates the presentation styles and template files from the system files so the site will upgrade without drastic changes to the visual presentation of the site."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"It allows for customization of the site functionality unique to that Theme."),Object(a.b)("li",{parentName:"ul"},"It allows for quick changes of the visual design and layout of a mixcore CMS site."),Object(a.b)("li",{parentName:"ul"},"It removes the need for a typical mixcore CMS site owner to have to learn CSS, HTML, and ASP.NET (Dotnet) Core in order to have a great-looking website."),Object(a.b)("li",{parentName:"ul"},"Why should you build your own mixcore CMS Theme? That's the real question.")),Object(a.b)("p",null,"It's an opportunity to learn more about CSS, HTML, and ASP.NET (Dotnet) Core."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"It's an opportunity to put your expertise with CSS, HTML, and ASP.NET (Dotnet) Core to work."),Object(a.b)("li",{parentName:"ul"},"It's creative."),Object(a.b)("li",{parentName:"ul"},"It's fun (most of the time)."),Object(a.b)("li",{parentName:"ul"},"If you release it to the public, you can feel good that you shared and gave something back to the mixcore CMS Community (okay, bragging rights)")))}u.isMDXComponent=!0}}]);