"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[9094],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(m,c(c({ref:n},u),{},{components:t})):r.createElement(m,c({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3849:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),c=["components"],i={},s="JSON",l={unversionedId:"basic-crud/json",id:"basic-crud/json",title:"JSON",description:"Select JSON Result",source:"@site/docs/06-basic-crud/06-json.md",sourceDirName:"06-basic-crud",slug:"/basic-crud/json",permalink:"/SeaORM/docs/next/basic-crud/json",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/06-basic-crud/06-json.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1651736158,formattedLastUpdatedAt:"5/5/2022",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Delete",permalink:"/SeaORM/docs/next/basic-crud/delete"},next:{title:"Raw SQL",permalink:"/SeaORM/docs/next/basic-crud/raw-sql"}},u=[{value:"Select JSON Result",id:"select-json-result",children:[],level:2}],d={toc:u};function p(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"json"},"JSON"),(0,o.kt)("h2",{id:"select-json-result"},"Select JSON Result"),(0,o.kt)("p",null,"All SeaORM selects are capable of returning ",(0,o.kt)("inlineCode",{parentName:"p"},"serde_json::Value"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'// Find by id\nlet cake: Option<serde_json::Value> = Cake::find_by_id(1)\n    .into_json()\n    .one(db)\n    .await?;\n\nassert_eq!(\n    cake,\n    Some(serde_json::json!({\n        "id": 1,\n        "name": "Cheese Cake"\n    }))\n);\n\n// Find with filter\nlet cakes: Vec<serde_json::Value> = Cake::find()\n    .filter(cake::Column::Name.contains("chocolate"))\n    .order_by_asc(cake::Column::Name)\n    .into_json()\n    .all(db)\n    .await?;\n\nassert_eq!(\n    cakes,\n    vec![\n        serde_json::json!({\n            "id": 2,\n            "name": "Chocolate Forest"\n        }),\n        serde_json::json!({\n            "id": 8,\n            "name": "Chocolate Cupcake"\n        }),\n    ]\n);\n\n// Paginate json result\nlet cake_pages: Paginator<_> = Cake::find()\n    .filter(cake::Column::Name.contains("chocolate"))\n    .order_by_asc(cake::Column::Name)\n    .into_json()\n    .paginate(db, 50);\n\nwhile let Some(cakes) = cake_pages.fetch_and_next().await? {\n    // Do something on cakes: Vec<serde_json::Value>\n}\n')))}p.isMDXComponent=!0}}]);