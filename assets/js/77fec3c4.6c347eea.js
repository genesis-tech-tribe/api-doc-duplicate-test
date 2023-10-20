"use strict";(self.webpackChunkproject_document=self.webpackChunkproject_document||[]).push([[703],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return t?r.createElement(f,a(a({ref:n},d),{},{components:t})):r.createElement(f,a({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3540:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const i={},a="Domain Model",s={unversionedId:"domain-model/domain-model",id:"domain-model/domain-model",title:"Domain Model",description:"User Context",source:"@site/docs/domain-model/domain-model.md",sourceDirName:"domain-model",slug:"/domain-model/",permalink:"/api-doc-duplicate-test/domain-model/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Welcome to Nishiki Project Document Test Repo",permalink:"/api-doc-duplicate-test/"},next:{title:"ER Diagram",permalink:"/api-doc-duplicate-test/er-diagram/"}},l={},c=[{value:"User Context",id:"user-context",level:2},{value:"Group Context",id:"group-context",level:2},{value:"User ID",id:"user-id",level:2},{value:"User",id:"user",level:2}],d={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"domain-model"},"Domain Model"),(0,o.kt)("h2",{id:"user-context"},"User Context"),(0,o.kt)("mermaid",{value:"classDiagram\n\n    class UserId {\n        String id\n    }\n\n    class User {\n        String name\n        String eMail\n        UserId UserId\n    }\n\n    User *-- UserId : Composition\n\n"}),(0,o.kt)("h2",{id:"group-context"},"Group Context"),(0,o.kt)("mermaid",{value:"classDiagram\n\n    class UserId {\n        String id\n    }\n\n    class User {\n        String name\n        UserId UserId\n    }\n\n\n    class GroupId {\n        String id\n    }\n\n    class Group {\n        String id\n        String name\n        List [UserGroup]\n        List [Container]\n        List [User]\n    }\n\n    class Container {\n        ContainerId ContainerId\n        List [Food]\n        String name\n    }\n\n    class ContainerId {\n        Sting: id\n    }\n\n    class Food {\n        String id\n        String name\n        Unit Unit\n        Quantity Quantity\n        Expire Expire\n    }\n\n    class Unit {\n        String Unit\n    }\n\n    class Quantity {\n        Int Quantity\n    }\n\n    class Expire {\n        Date Expire\n    }\n\n    User *-- UserId : Composition\n\n    Group *-- GroupId : Composition\n    Group *-- Container : Composition\n    Group *-- User : Composition\n\n    Container *-- ContainerId : Composition\n    Container *-- Food : Composition\n\n    Food *-- Unit : Composition\n    Food *-- Quantity : Composition\n    Food *-- Expire : Composition\n"}),(0,o.kt)("h2",{id:"user-id"},"User ID"),(0,o.kt)("p",null,"Identifier"),(0,o.kt)("p",null,"The ID is created by Cognito User Pool."),(0,o.kt)("h2",{id:"user"},"User"),(0,o.kt)("p",null,"Entity"))}u.isMDXComponent=!0}}]);