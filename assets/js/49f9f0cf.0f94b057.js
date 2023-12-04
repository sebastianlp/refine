"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71487],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,b=d["".concat(s,".").concat(f)]||d[f]||l[f]||i;return r?n.createElement(b,c(c({ref:t},p),{},{components:r})):n.createElement(b,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62004:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>u,toc:()=>l});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={},s=void 0,u={unversionedId:"core/hooks/use-show/basic-usage-live-preview",id:"core/hooks/use-show/basic-usage-live-preview",title:"basic-usage-live-preview",description:"",source:"@site/docs/core/hooks/use-show/basic-usage-live-preview.md",sourceDirName:"core/hooks/use-show",slug:"/core/hooks/use-show/basic-usage-live-preview",permalink:"/docs/core/hooks/use-show/basic-usage-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/core/hooks/use-show/basic-usage-live-preview.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1701677405,formattedLastUpdatedAt:"Dec 4, 2023",frontMatter:{}},p={},l=[],d={toc:l};function f(e){var{components:t}=e,r=c(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css",metastring:"live shared",live:!0,shared:!0},"body {\n  padding: 4px;\n  background: white;\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products/show/1 previewHeight=300px",live:!0,url:"http://localhost:3000/products/show/1",previewHeight:"300px"},'setInitialRoutes(["/products/show/1"]);\n// visible-block-start\nimport { useShow } from "@refinedev/core";\n\ninterface IProduct {\n  id: number;\n  name: string;\n  material: string;\n}\n\nconst ProductShow: React.FC = () => {\n  const { queryResult } = useShow<IProduct>();\n\n  const { data, isLoading, isError } = queryResult;\n  const product = data?.data;\n\n  if (isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  if (isError) {\n    return <div>Something went wrong!</div>;\n  }\n\n  return (\n    <div>\n      <h3>Product Details</h3>\n      <p>id: {product?.id}</p>\n      <p>name: {product?.name}</p>\n      <p>material: {product?.material}</p>\n    </div>\n  );\n};\n\n// visible-block-end\nsetRefineProps({\n  resources: [\n    {\n      name: "products",\n      show: ProductShow,\n    },\n  ],\n});\nrender(<RefineHeadlessDemo />);\n')))}f.isMDXComponent=!0}}]);