"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[66513],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57797:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>u});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={title:"Access Control Provider",sidebar_label:"Access Control Provider"},c=void 0,p={unversionedId:"core/providers/access-control-provider/index",id:"core/providers/access-control-provider/index",title:"Access Control Provider",description:"Overview",source:"@site/docs/core/providers/access-control-provider/index.md",sourceDirName:"core/providers/access-control-provider",slug:"/core/providers/access-control-provider/",permalink:"/docs/core/providers/access-control-provider/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/core/providers/access-control-provider/index.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1701677405,formattedLastUpdatedAt:"Dec 4, 2023",frontMatter:{title:"Access Control Provider",sidebar_label:"Access Control Provider"},sidebar:"mainSidebar",previous:{title:"Auth Provider",permalink:"/docs/core/providers/auth-provider/"},next:{title:"Audit Log Provider",permalink:"/docs/core/providers/audit-log-provider/"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Hooks and Components",id:"hooks-and-components",level:2},{value:"<code>useCan</code>",id:"usecan",level:3},{value:"<code>&lt;CanAccess /&gt;</code>",id:"canaccess-",level:3},{value:"Performance",id:"performance",level:2},{value:"List of Default Access Control Points",id:"list-of-default-access-control-points",level:2},{value:"Sider",id:"sider",level:3},{value:"Buttons",id:"buttons",level:3},{value:"Examples",id:"examples",level:2}],d=(m="CodeSandboxExample",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const f={toc:u};function k(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Access control is a broad topic with lots of advanced solutions that provide different sets of features."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," provides an agnostic API via the ",(0,r.kt)("inlineCode",{parentName:"p"},"accessControlProvider")," to manage access control throughout your app, which allows you to integrate different methods, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"RBAC"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ABAC"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ACL"),", etc., and libraries, such as ",(0,r.kt)("a",{parentName:"p",href:"https://casbin.org/"},"Casbin"),", ",(0,r.kt)("a",{parentName:"p",href:"https://casl.js.org/v5/en/"},"CASL"),", ",(0,r.kt)("a",{parentName:"p",href:"https://cerbos.dev/"},"Cerbos")," and ",(0,r.kt)("a",{parentName:"p",href:"https://onury.io/accesscontrol/"},"AccessControl.js"),"."),(0,r.kt)("p",null,"To check if a desired access will be granted, the ",(0,r.kt)("inlineCode",{parentName:"p"},"accessControlProvider")," should at least have an asynchronous method named ",(0,r.kt)("inlineCode",{parentName:"p"},"can")," with the following interface:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type CanParams = {\n  resource: string;\n  action: string;\n  params?: {\n    resource?: IResourceItem;\n    id?: BaseKey;\n    [key: string]: any;\n  };\n};\n\ntype CanReturnType = {\n  can: boolean;\n  reason?: string;\n};\n\nexport interface IAccessControlContext {\n  can?: ({ resource, action, params }: CanParams) => Promise<CanReturnType>;\n  options?: {\n    buttons?: {\n      enableAccessControl?: boolean;\n      hideIfUnauthorized?: boolean;\n    };\n  };\n}\n\nconst accessControlProvider: IAccessControlContext = {\n  can: async ({ resource, action, params }: CanParams): Promise<CanReturnType> => {\n    return { can: true };\n  },\n  options: {\n    buttons: {\n      enableAccessControl: true,\n      hideIfUnauthorized: false,\n    },\n  },\n};\n")),(0,r.kt)("p",null,"It's also possible to globally configure buttons' behavior by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"accessControlProvider"),".\nYou can still change the behavior of the buttons independently, however, if no configuration is found, buttons will fallback to configuration defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"options.buttons"),".\nBy default, ",(0,r.kt)("inlineCode",{parentName:"p"},"enableAccessControl")," is ",(0,r.kt)("strong",{parentName:"p"},"true")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"hideIfUnauthorized")," is ",(0,r.kt)("strong",{parentName:"p"},"false"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IAccessControlContext {\n  can?: ({ resource, action, params }: CanParams) => Promise<CanReturnType>;\n  options?: {\n    buttons?: {\n      // default is true\n      enableAccessControl?: boolean;\n      // default is false\n      hideIfUnauthorized?: boolean;\n    };\n  };\n}\n\nconst accessControlProvider: IAccessControlContext = {\n  can: async ({ resource, action, params }: CanParams): Promise<CanReturnType> => {\n    return { can: true };\n  },\n  // Global settings\n  options: {\n    buttons: {\n      enableAccessControl: true,\n      // hide action buttons if not authorized.\n      hideIfUnauthorized: true,\n    },\n  },\n};\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to these sections in the Interface References documentation ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/interface-references#resourceitemprops"},(0,r.kt)("inlineCode",{parentName:"a"},"IResourceItem")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/interface-references#basekey"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseKey")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/interface-references#canparams"},(0,r.kt)("inlineCode",{parentName:"a"},"CanParams")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/interface-references#canreturntype"},(0,r.kt)("inlineCode",{parentName:"a"},"CanReturnType")))),(0,r.kt)("p",null,"A basic usage would be like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const App: React.FC = () => {\n  return (\n    <Refine\n      // other providers and props\n      accessControlProvider={{\n        can: async ({ resource, action, params }) => {\n          if (resource === "posts" && action === "edit") {\n            return {\n              can: false,\n              reason: "Unauthorized",\n            };\n          }\n\n          return { can: true };\n        },\n        options: {\n          buttons: {\n            enableAccessControl: true,\n            hideIfUnauthorized: false,\n          },\n        },\n      }}\n    >\n      {/* your app */}\n    </Refine>\n  );\n};\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Depending on your router, providing ",(0,r.kt)("inlineCode",{parentName:"p"},"accessControlProvider")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," component ",(0,r.kt)("strong",{parentName:"p"},"won't enforce")," access control by itself; you may need to wrap protected routes with the ",(0,r.kt)("inlineCode",{parentName:"p"},"<CanAccess>")," component."),(0,r.kt)("p",{parentName:"admonition"},"Refer to one of the following documentations, depending on your preferred router:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/packages/list-of-packages#usage-with-access-control-providers"},"React Router Access Control"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/packages/list-of-packages#access-control"},"NextJS Router Access Control"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/packages/list-of-packages#access-control"},"Remix Router Access Control"))))),(0,r.kt)("hr",null),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can also access the resource object directly."),(0,r.kt)("p",{parentName:"admonition"},"In the example below, the ",(0,r.kt)("inlineCode",{parentName:"p"},"can")," function receives the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource"),"(",(0,r.kt)("a",{parentName:"p",href:"/docs/core/interface-references#resourceitemprops"},"ResourceItemProps"),") object you pass to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component, which allows you to use Attribute Based Access Control (ABAC), which allows you to grant permissions based on the value of a field in the resource object."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'export const accessControlProvider = {\n  can: async ({ resource, action, params }) => {\n    const resourceName = params?.resource?.name;\n    const anyUsefulMeta = params?.resource?.meta?.yourUsefulMeta;\n\n    if (resourceName === "posts" && anyUsefulMeta === true && action === "edit") {\n      return {\n        can: false,\n        reason: "Unauthorized",\n      };\n    }\n  },\n};\n'))),(0,r.kt)("hr",null),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"reason")," along with ",(0,r.kt)("inlineCode",{parentName:"p"},"can"),". It will be accessible using ",(0,r.kt)("inlineCode",{parentName:"p"},"useCan"),". It will be shown at the tooltip of the buttons from ",(0,r.kt)("strong",{parentName:"p"},"refine")," when they are disabled.")),(0,r.kt)("hr",null),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can find access control examples made with ",(0,r.kt)("strong",{parentName:"p"},"refine")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Casbin")," ","\u2192"," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/examples/access-control-casbin"},"Source Code")," - ",(0,r.kt)("a",{parentName:"li",href:"https://codesandbox.io/embed/github/refinedev/refine/tree/master/examples/access-control-casbin/?view=preview&theme=dark&codemirror=1"},"Demo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cerbos")," ","\u2192"," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/examples/access-control-cerbos"},"Source Code")," - ",(0,r.kt)("a",{parentName:"li",href:"https://codesandbox.io/embed/github/refinedev/refine/tree/master/examples/access-control-cerbos/?view=preview&theme=dark&codemirror=1"},"Demo")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#list-of-default-access-control-points"},(0,r.kt)("strong",{parentName:"a"},"refine")," checks for access control in its related components and pages.")),(0,r.kt)("h2",{id:"hooks-and-components"},"Hooks and Components"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," provides a hook and a component to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"can")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"accessControlProvider"),"."),(0,r.kt)("h3",{id:"usecan"},(0,r.kt)("inlineCode",{parentName:"h3"},"useCan")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useCan")," uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"can")," for the query function for ",(0,r.kt)("strong",{parentName:"p"},"react-query"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery"),". It takes the parameters that ",(0,r.kt)("inlineCode",{parentName:"p"},"can")," takes, can be configured with ",(0,r.kt)("inlineCode",{parentName:"p"},"queryOptions")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," and returns the result of ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { data } = useCan({\n  resource: "resource-you-ask-for-access",\n  action: "action-type-on-resource",\n  params: { foo: "optional-params" },\n});\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const useCan: ({\n    action,\n    resource,\n    params,\n    queryOptions,\n}: CanParams* & {\n    queryOptions?: UseQueryOptions<CanReturnType>;\n}) => UseQueryResult<CanReturnType*>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to these sections in the Interfaces documentation: ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/interface-references#canparams"},(0,r.kt)("inlineCode",{parentName:"a"},"CanParams"))," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/interface-references#canreturntype"},(0,r.kt)("inlineCode",{parentName:"a"},"CanReturnType")))),(0,r.kt)("h3",{id:"canaccess-"},(0,r.kt)("inlineCode",{parentName:"h3"},"<CanAccess />")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<CanAccess />")," is a wrapper component that uses ",(0,r.kt)("inlineCode",{parentName:"p"},"useCan")," to check for access control. It takes the parameters that ",(0,r.kt)("inlineCode",{parentName:"p"},"can")," method takes and also a ",(0,r.kt)("inlineCode",{parentName:"p"},"fallback"),". If access control returns true, it renders its children; otherwise, it renders ",(0,r.kt)("inlineCode",{parentName:"p"},"fallback"),", if it was provided."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<CanAccess resource="posts" action="edit" params={{ id: 1 }} fallback={<CustomFallback />}>\n  <YourComponent />\n</CanAccess>\n')),(0,r.kt)("h2",{id:"performance"},"Performance"),(0,r.kt)("p",null,"As the number of points that check for access control in your app increases, the performance of your app may take a hit, especially if its access control involves remote endpoints. Caching the access control checks helps quite a lot, which can be done easily by configuring the ",(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},(0,r.kt)("inlineCode",{parentName:"a"},"staleTime")," and ",(0,r.kt)("inlineCode",{parentName:"a"},"cacheTime"))," properties since ",(0,r.kt)("strong",{parentName:"p"},"refine")," uses react-query."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// inside your component\n\nconst { data } = useCan({\n    resource: "resource-you-ask-for-access",\n    action: "action-type-on-resource",\n    params: { foo: "optional-params" } },\n    queryOptions: {\n        staleTime: 5 * 60 * 1000, // 5 minutes\n    }\n);\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"By default, ",(0,r.kt)("strong",{parentName:"p"},"refine")," uses 5 minutes for ",(0,r.kt)("inlineCode",{parentName:"p"},"cacheTime")," and 0 minutes for ",(0,r.kt)("inlineCode",{parentName:"p"},"staleTime")," for its own access control points.")),(0,r.kt)("h2",{id:"list-of-default-access-control-points"},"List of Default Access Control Points"),(0,r.kt)("p",null,"Here is a list of components and pages ",(0,r.kt)("strong",{parentName:"p"},"refine")," checks for access control:"),(0,r.kt)("h3",{id:"sider"},"Sider"),(0,r.kt)("p",null,"Sider is integrated, which means that unaccessible resources won't appear in the sider menu."),(0,r.kt)("p",null,"Menu items will check access control with ",(0,r.kt)("inlineCode",{parentName:"p"},'{ resource, action: "list" }'),". For example, if your app has a resource called ",(0,r.kt)("inlineCode",{parentName:"p"},"posts"),", it will be checked with ",(0,r.kt)("inlineCode",{parentName:"p"},'{ resource: "posts", action: "list" }'),"."),(0,r.kt)("h3",{id:"buttons"},"Buttons"),(0,r.kt)("p",null,"These buttons will be checked for access control."),(0,r.kt)("p",null,"Let's say they are rendered where ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"posts")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," where applicable. The ",(0,r.kt)("inlineCode",{parentName:"p"},"can")," function will receive the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource"),"(",(0,r.kt)("a",{parentName:"p",href:"/docs/core/interface-references#resourceitemprops"},"ResourceItemProps"),") object you passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component, which allows you to use Attribute Based Access Control (ABAC), which allows you to grant permissions based on the value of a field in the resource object."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/ui-integrations/ant-design/components/buttons/list-button"},(0,r.kt)("strong",{parentName:"a"},"List")),": ",(0,r.kt)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "list", params: { *resource } }')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/ui-integrations/ant-design/components/buttons/create-button"},(0,r.kt)("strong",{parentName:"a"},"Create")),": ",(0,r.kt)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "create", params: { *resource } }')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/ui-integrations/ant-design/components/buttons/clone-button"},(0,r.kt)("strong",{parentName:"a"},"Clone")),": ",(0,r.kt)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "create", params: { id: 1, *resource } }')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/ui-integrations/ant-design/components/buttons/edit-button"},(0,r.kt)("strong",{parentName:"a"},"Edit")),": ",(0,r.kt)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "edit", params: { id: 1, *resource } }')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/ui-integrations/ant-design/components/buttons/delete-button"},(0,r.kt)("strong",{parentName:"a"},"Delete")),": ",(0,r.kt)("inlineCode",{parentName:"li"},'{ resource: "posts, action: "delete", params: { id: 1, *resource } }')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/ui-integrations/ant-design/components/buttons/show-button"},(0,r.kt)("strong",{parentName:"a"},"Show")),": ",(0,r.kt)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "show", params: { id: 1, *resource } }'))),(0,r.kt)("p",null,"These buttons will be disabled if access control returns ",(0,r.kt)("inlineCode",{parentName:"p"},"{ can: false }")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"This example is for ",(0,r.kt)("strong",{parentName:"p"},"Casbin")," access control provider. You can check our other access control provider, ",(0,r.kt)("a",{parentName:"p",href:"/docs/examples/access-control/cerbos/"},(0,r.kt)("strong",{parentName:"a"},"Cerbos"))," as well."),(0,r.kt)(d,{path:"access-control-casbin",mdxType:"CodeSandboxExample"}))}k.isMDXComponent=!0}}]);