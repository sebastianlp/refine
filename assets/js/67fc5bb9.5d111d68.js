"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[20894],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,k=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(k,i(i({ref:t},c),{},{components:n})):o.createElement(k,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>p,metadata:()=>l,toc:()=>u});n(67294);var o=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"useCheckboxGroup",title:"useCheckboxGroup"},s=void 0,l={unversionedId:"api-reference/antd/hooks/field/useCheckboxGroup",id:"version-3.xx.xx/api-reference/antd/hooks/field/useCheckboxGroup",title:"useCheckboxGroup",description:"useCheckboxGroup hook allows you to manage an Ant Design Checkbox.Group component when records in a resource needs to be used as checkbox options.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/antd/hooks/field/useCheckboxGroup.md",sourceDirName:"api-reference/antd/hooks/field",slug:"/api-reference/antd/hooks/field/useCheckboxGroup",permalink:"/docs/3.xx.xx/api-reference/antd/hooks/field/useCheckboxGroup",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/antd/hooks/field/useCheckboxGroup.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1701411048,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{id:"useCheckboxGroup",title:"useCheckboxGroup"},sidebar:"someSidebar",previous:{title:"Ant Design API",permalink:"/docs/3.xx.xx/api-reference/antd"},next:{title:"useRadioGroup",permalink:"/docs/3.xx.xx/api-reference/antd/hooks/field/useRadioGroup"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>defaultValue</code>",id:"defaultvalue",level:3},{value:"<code>optionLabel</code> and <code>optionValue</code>",id:"optionlabel-and-optionvalue",level:3},{value:"<code>filters</code>",id:"filters",level:3},{value:"<code>sort</code>",id:"sort",level:3},{value:"<code>fetchSize</code>",id:"fetchsize",level:3},{value:"<code>queryOptions</code>",id:"queryoptions",level:3},{value:"<code>pagination</code>",id:"pagination",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Example",id:"example",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},h=d("PropsTable"),k=d("CodeSandboxExample"),m={toc:u};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,o.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useCheckboxGroup")," hook allows you to manage an Ant Design ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/checkbox/#components-checkbox-demo-group"},"Checkbox.Group")," component when records in a resource needs to be used as checkbox options."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"We will demonstrate how to get data at the ",(0,o.kt)("inlineCode",{parentName:"p"},"/tags")," endpoint from the ",(0,o.kt)("inlineCode",{parentName:"p"},"https://api.fake-rest.refine.dev")," REST API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="https://api.fake-rest.refine.dev/tags"',title:'"https://api.fake-rest.refine.dev/tags"'},'{\n    [\n        {\n            id: 1,\n            title: "Driver Deposit",\n        },\n        {\n            id: 2,\n            title: "Index Compatible Synergistic",\n        },\n        {\n            id: 3,\n            title: "Plum",\n        },\n    ];\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/create.tsx"',title:'"pages/posts/create.tsx"'},'import { Form, Checkbox, useCheckboxGroup } from "@pankod/refine-antd";\n\nexport const PostCreate: React.FC = () => {\n    // highlight-start\n    const { checkboxGroupProps } = useCheckboxGroup<ITag>({\n        resource: "tags",\n    });\n    // highlight-end\n\n    return (\n        <Form>\n            <Form.Item label="Tags" name="tags">\n                // highlight-next-line\n                <Checkbox.Group {...checkboxGroupProps} />\n            </Form.Item>\n        </Form>\n    );\n};\n\ninterface ITag {\n    id: number;\n    title: string;\n}\n')),(0,o.kt)("br",null),(0,o.kt)("p",null,"All we have to do is pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"checkboxGroupProps")," it returns to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Checkbox.Group>")," component.\n",(0,o.kt)("inlineCode",{parentName:"p"},"useCheckboxGroup")," uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"useList")," hook for fetching data. ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useList"},"Refer to ",(0,o.kt)("inlineCode",{parentName:"a"},"useList")," hook for details. ","\u2192")),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/hooks/useCheckboxGroup/basic.png",alt:"Tags"}),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"resource"},(0,o.kt)("inlineCode",{parentName:"h3"},"resource")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const { checkboxGroupProps } = useCheckboxGroup({\n    resource: "tags",\n});\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"resource")," property determines which? API resource endpoint to fetch records from ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/data-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"dataProvider")),". It returns properly configured ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," values for checkboxes."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/checkbox"},"Refer to Ant Design Checkbox.Group component documentation for detailed info for ",(0,o.kt)("inlineCode",{parentName:"a"},"options"),". ","\u2192")),(0,o.kt)("h3",{id:"defaultvalue"},(0,o.kt)("inlineCode",{parentName:"h3"},"defaultValue")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const { selectProps } = useCheckboxGroup({\n    resource: "languages",\n// highlight-next-line\n    defaultValue: [1, 2],\n});\n')),(0,o.kt)("p",null,"The easiest way to selecting a default values for checkbox fields is by passing in ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultValue"),"."),(0,o.kt)("h3",{id:"optionlabel-and-optionvalue"},(0,o.kt)("inlineCode",{parentName:"h3"},"optionLabel")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"optionValue")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const { checkboxGroupProps } = useCheckboxGroup({\n    resource: "tags",\n    // highlight-start\n    optionLabel: "title",\n    optionValue: "id",\n    // highlight-end\n});\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"optionLabel")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"optionValue")," allows you to change the values and appearances of your options. Default values are ",(0,o.kt)("inlineCode",{parentName:"p"},'optionLabel = "title"')," and ",(0,o.kt)("inlineCode",{parentName:"p"},'optionValue = "id"'),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Supports use with ",(0,o.kt)("inlineCode",{parentName:"p"},"optionLabel")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"optionValue")," ",(0,o.kt)("a",{parentName:"p",href:"https://lodash.com/docs/4.17.15#get"},"Object path")," syntax."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const { options } = useSelect({\n    resource: "categories",\n// highlight-start\n    optionLabel: "nested.title",\n    optionValue: "nested.id",\n// highlight-end\n});\n'))),(0,o.kt)("h3",{id:"filters"},(0,o.kt)("inlineCode",{parentName:"h3"},"filters")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const { checkboxGroupProps } = useCheckboxGroup({\n    resource: "tags",\n    // highlight-start\n    filters: [\n        {\n            field: "title",\n            operator: "eq",\n            value: "Driver Deposit",\n        },\n    ],\n    // highlight-end\n});\n')),(0,o.kt)("p",null,"It allows us to add some filters while fetching the data. For example, if you want to list only the ",(0,o.kt)("inlineCode",{parentName:"p"},"titles")," that are equal to ",(0,o.kt)("inlineCode",{parentName:"p"},'"Driver Deposit"')," records."),(0,o.kt)("h3",{id:"sort"},(0,o.kt)("inlineCode",{parentName:"h3"},"sort")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const { checkboxGroupProps } = useCheckboxGroup({\n    resource: "tags",\n    // highlight-start\n    sort: [\n        {\n            field: "title",\n            order: "asc",\n        },\n    ],\n    // highlight-end\n});\n')),(0,o.kt)("p",null,"It allows us to sort the ",(0,o.kt)("inlineCode",{parentName:"p"},"options"),". For example, if you want to sort your list according to ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," by ascending."),(0,o.kt)("h3",{id:"fetchsize"},(0,o.kt)("inlineCode",{parentName:"h3"},"fetchSize")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const { selectProps } = useCheckboxGroup({\n    resource: "languages",\n// highlight-next-line\n    fetchSize: 20,\n});\n')),(0,o.kt)("p",null,"Amount of records to fetch in checkboxes."),(0,o.kt)("h3",{id:"queryoptions"},(0,o.kt)("inlineCode",{parentName:"h3"},"queryOptions")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const { checkboxGroupProps } = useCheckboxGroup({\n    resource: "tags",\n    // highlight-start\n    queryOptions: {\n        onError: () => {\n            console.log("triggers when on query return Error");\n        },\n    },\n    // highlight-end\n});\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},"useQuery")," options can be set by passing ",(0,o.kt)("inlineCode",{parentName:"p"},"queryOptions")," property."),(0,o.kt)("h3",{id:"pagination"},(0,o.kt)("inlineCode",{parentName:"h3"},"pagination")),(0,o.kt)("p",null,"Allows us to set page and items per page values."),(0,o.kt)("p",null,"For example imagine that we have 1000 post records:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const { selectProps } = useSelect({\n    resource: "categories",\n    // highlight-next-line\n    pagination: { current: 3, pageSize: 8 }\n});\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Listing will start from page 3 showing 8 records.")),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)(h,{module:"@pankod/refine-antd/useCheckboxGroup",mdxType:"PropsTable"}),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(k,{path:"field-antd-use-checkbox-group",mdxType:"CodeSandboxExample"}))}f.isMDXComponent=!0}}]);