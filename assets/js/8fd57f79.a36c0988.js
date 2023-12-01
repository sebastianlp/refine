"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[81491],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"Build low-code, customizable and authorization ready (accesscontrol) admin panel with NestJS.",description:"Build authorization ready admin panel with NestJS.",slug:"how-to-access-control-with-nestjs",authors:"yildiray",tags:["nestjs","access-control","refine"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},l=void 0,c={permalink:"/blog/how-to-access-control-with-nestjs",source:"@site/blog/2022-02-21-build-low-code-customizable-and-authorization-ready-accesscontrol-admin-panel-with-nestjs.md",title:"Build low-code, customizable and authorization ready (accesscontrol) admin panel with NestJS.",description:"Build authorization ready admin panel with NestJS.",date:"2022-02-21T00:00:00.000Z",formattedDate:"February 21, 2022",tags:[{label:"nestjs",permalink:"/blog/tags/nestjs"},{label:"access-control",permalink:"/blog/tags/access-control"},{label:"refine",permalink:"/blog/tags/refine"}],readingTime:3.19,hasTruncateMarker:!0,authors:[{name:"Y\u0131ld\u0131ray \xdcnl\xfc",title:"Software Developer",url:"https://github.com/yildirayunlu",imageURL:"https://github.com/yildirayunlu.png",key:"yildiray"}],frontMatter:{title:"Build low-code, customizable and authorization ready (accesscontrol) admin panel with NestJS.",description:"Build authorization ready admin panel with NestJS.",slug:"how-to-access-control-with-nestjs",authors:"yildiray",tags:["nestjs","access-control","refine"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Build internal tools using Low-Code with refine, React-based framework",permalink:"/blog/build-internal-tools-using-low-code-with-refine"},nextItem:{title:"Create Full Featured Admin Panel with React and Ant Design",permalink:"/blog/refine-react-ant-design-admin-panel-framework"},relatedPosts:[{title:"Building a React Admin Panel with refine and daisyUI",description:"We'll build a simple React admin panel using refine and daisyUI.",permalink:"/blog/daisy-ui-react-admin-panel",formattedDate:"September 6, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:60.91,date:"2023-09-06T00:00:00.000Z"},{title:"Building React admin panel with NextUI and refine",description:"We will see how  to build a React admin panel using refine and NextUI components library",permalink:"/blog/next-ui-react-admin-panel",formattedDate:"September 20, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:41.88,date:"2023-09-20T00:00:00.000Z"},{title:"How to Multipart File Upload Using FormData with React Hook Form",description:"In this guide, I'm going to show you how to multipart files upload with using React Hook Form",permalink:"/blog/how-to-multipart-file-upload-with-react-hook-form",formattedDate:"March 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:7.075,date:"2022-03-29T00:00:00.000Z"}],authorPosts:[{title:"Build Fast and Customizable Admin Panel with NestJS",description:"We will prepare a simple `job-posting` application. We will also use the refine framework for the admin panel. The project will consist of two parts, api and admin.",permalink:"/blog/customizable-admin-panel-with-nestjs",formattedDate:"October 4, 2021",authors:[{name:"Y\u0131ld\u0131ray \xdcnl\xfc",title:"Software Developer",url:"https://github.com/yildirayunlu",imageURL:"https://github.com/yildirayunlu.png",key:"yildiray"}],readingTime:4.175,date:"2021-10-04T00:00:00.000Z"},{title:"Best Open-Source Headless CMS to Try for Your Next Application",description:"A headless CMS system, which can be developed quickly, contains many features you need, and helps you to produce products very quickly compared to traditional systems.",permalink:"/blog/open-source-headless-cms",formattedDate:"May 5, 2022",authors:[{name:"Y\u0131ld\u0131ray \xdcnl\xfc",title:"Software Developer",url:"https://github.com/yildirayunlu",imageURL:"https://github.com/yildirayunlu.png",key:"yildiray"}],readingTime:3.425,date:"2022-05-05T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},d=[{value:"Intro",id:"intro",level:2},{value:"Scenario",id:"scenario",level:2},{value:"Authorization",id:"authorization",level:2},{value:"Using AccessControl in API",id:"using-accesscontrol-in-api",level:2},{value:"Using AccessControl in refine (dashboard)",id:"using-accesscontrol-in-refine-dashboard",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:d};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/blog/customizable-admin-panel-with-nestjs"},"previous blog post"),", we used ",(0,a.kt)("a",{parentName:"p",href:"https://nestjs.com"},"nestjs")," with an api and ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev"},"refine")," in the admin panel. In this blog, let's add ",(0,a.kt)("strong",{parentName:"p"},"authorization")," to both api and admin panel."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"All the steps described are in this ",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/refinedev/refine-hackathon/tree/main/job-posting-app"},"repo"),".")),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"https://dev.to/refine/build-fast-and-customizable-admin-panel-with-nestjs-291"},"previous blog post"),", we used ",(0,a.kt)("a",{parentName:"p",href:"https://nestjs.com"},"nestjs")," with an api and ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev"},"refine")," in the admin panel. In this blog, let's add ",(0,a.kt)("strong",{parentName:"p"},"authorization")," to both api and admin panel."),(0,a.kt)("h2",{id:"scenario"},"Scenario"),(0,a.kt)("p",null,"Let's have two roles in this system, they are ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"editor"),". In the API we prepared, we had two crud processes that we categorized as ",(0,a.kt)("inlineCode",{parentName:"p"},"companies")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"jobs"),"."),(0,a.kt)("p",null,"In this scenario; ",(0,a.kt)("inlineCode",{parentName:"p"},"editor")," can only list companies, not any deletion or additions. Have the authority to list and create job postings. Let ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," have authorization for all transactions."),(0,a.kt)("h2",{id:"authorization"},"Authorization"),(0,a.kt)("p",null,"I used ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nestjsx/crud"},"nestjsx-crud")," in the api we prepared. This library makes ",(0,a.kt)("inlineCode",{parentName:"p"},"CRUD")," operations very easy. However, there is no support on the authorization side. That's why I made use of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/onury/accesscontrol"},"accesscontrol")," library, which can be easily integrated with both ",(0,a.kt)("inlineCode",{parentName:"p"},"nestjs")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"refine"),". "),(0,a.kt)("h2",{id:"using-accesscontrol-in-api"},"Using AccessControl in API"),(0,a.kt)("p",null,"In the first step, let's install ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nestjsx/nest-access-control"},"nestjs-access-control")," in our project for ",(0,a.kt)("inlineCode",{parentName:"p"},"accesscontrol")," integration to the api."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install nest-access-control\n")),(0,a.kt)("p",null,"I'm specifying a role as the ",(0,a.kt)("inlineCode",{parentName:"p"},"AccessControl")," supports. According to our scenario, this should be as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// app.roles.ts\n\nimport { RolesBuilder } from 'nest-access-control';\n\nexport enum AppRoles {\n  ADMIN = 'ADMIN',\n  EDITOR = 'EDITOR',\n}\n\nexport const roles: RolesBuilder = new RolesBuilder();\n\nroles\n  // editor\n  .grant(AppRoles.EDITOR)\n  .create('jobs')\n  .update('jobs')\n  // admin\n  .grant(AppRoles.ADMIN)\n  .extend(AppRoles.EDITOR)\n  .create(['companies'])\n  .update(['companies'])\n  .delete(['companies', 'jobs']);\n")),(0,a.kt)("p",null,"Now I import ",(0,a.kt)("inlineCode",{parentName:"p"},"AccessControlModule"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"  // app.module.ts\n\n  import { roles } from './app.roles';\n\n    @Module({\n      imports: [\n        ...\n        AccessControlModule.forRoles(roles)\n      ],\n      controllers: [...],\n      providers: [...],\n    })\n    export class AppModule {}\n")),(0,a.kt)("p",null,"After determining the roles and privileges, we add the ",(0,a.kt)("inlineCode",{parentName:"p"},"ACGuard")," class to the controller ",(0,a.kt)("inlineCode",{parentName:"p"},"UseGuards"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { ACGuard } from 'nest-access-control';\n\n...\n@UseGuards(JwtAuthGuard, ACGuard)\n@Controller('companies')\nexport class CompanyController implements CrudController<CompanyEntity> {}\n...\n")),(0,a.kt)("p",null,"Now we define resource and action for methods using ",(0,a.kt)("inlineCode",{parentName:"p"},"UseRoles")," decorator. For example, we ",(0,a.kt)("strong",{parentName:"p"},"override")," for the ",(0,a.kt)("inlineCode",{parentName:"p"},"companies")," resource and the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," action as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { ACGuard, UseRoles } from 'nest-access-control';\n\n...\n@UseGuards(JwtAuthGuard, ACGuard)\n@Controller('companies')\nexport class CompanyController implements CrudController<CompanyEntity> {\n  constructor(public service: CompanyService) {}\n\n  get base(): CrudController<CompanyEntity> {\n    return this;\n  }\n\n  @Override()\n  @UseRoles({\n    resource: 'companies',\n    action: 'create',\n  })\n  createOne(\n    @ParsedRequest() req: CrudRequest,\n    @ParsedBody() dto: CompanyCreateDto,\n  ) {\n    return this.base.createOneBase(req, <CompanyEntity>dto);\n  }\n...\n")),(0,a.kt)("p",null,"Similarly, we add this decorator for other methods."),(0,a.kt)("p",null,"After these operations, we complete the authorization process on the API side. Now we will do the authorization to the admin panel that we created with ",(0,a.kt)("inlineCode",{parentName:"p"},"refine"),"."),(0,a.kt)("h2",{id:"using-accesscontrol-in-refine-dashboard"},"Using AccessControl in refine (dashboard)"),(0,a.kt)("p",null,"refine; It supports many authorization tools, very flexible. What we need to do; Defining an ",(0,a.kt)("inlineCode",{parentName:"p"},"accessControlProvider")," inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine />")," component."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"accessControlProvider"),' is implemented only one asynchronous method named "can" to be used to control whether the requested access is granted. This method takes ',(0,a.kt)("inlineCode",{parentName:"p"},"resource")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"action")," with parameters."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// App.tsx\n\n<Refine\n  ...\n  accessControlProvider={{\n    can: async ({ resource, action }) => {\n      let can: boolean = false;\n      const stringifyUser = localStorage.getItem('refine-user');\n      if (stringifyUser) {\n        const { roles } = JSON.parse(stringifyUser);\n\n        roles.forEach((role: string) => {\n          switch (action) {\n            case 'list':\n            case 'show':\n              can = ac.can(role).read(resource).granted;\n              break;\n            case 'create':\n              can = ac.can(role).create(resource).granted;\n              break;\n            case 'edit':\n              can = ac.can(role).update(resource).granted;\n              break;\n            case 'delete':\n              can = ac.can(role).delete(resource).granted;\n              break;\n          }\n        });\n      }\n      return Promise.resolve({ can });\n    },\n  }}\n/>****\n")),(0,a.kt)("p",null,"Now let me explain a little bit of this code I wrote. First we need the role of the logged in user. We saved it to local storage during login.\nThen we match the refine ",(0,a.kt)("inlineCode",{parentName:"p"},"actions")," with the accessControl's actions and check its authorization with the ",(0,a.kt)("inlineCode",{parentName:"p"},"granted")," method. I also resolve the returned result."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"As a result, we have done the authorization on both the ui (dashboard) side and the api side."))}m.isMDXComponent=!0}}]);