"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3237],{95420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>p,metadata:()=>u,toc:()=>m});n(67294);var a=n(3905),r=n(53787),i=n(50551);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={title:"CLI",sidebar_label:"CLI"},d=void 0,u={unversionedId:"packages/cli/index",id:"packages/cli/index",title:"CLI",description:"refine CLI is a command line application that allows you to interact with your refine project and perform some tasks. This includes creating a new resource, managing updates, swizzle components, and runs your project (build, start, dev).",source:"@site/docs/packages/cli/index.md",sourceDirName:"packages/cli",slug:"/packages/cli/",permalink:"/docs/packages/cli/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/packages/cli/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1701686837,formattedLastUpdatedAt:"Dec 4, 2023",frontMatter:{title:"CLI",sidebar_label:"CLI"},sidebar:"mainSidebar",previous:{title:"useStepsForm",permalink:"/docs/packages/react-hook-form/use-steps-form/"},next:{title:"Inferencer",permalink:"/docs/packages/inferencer/"}},c={},m=[{value:"Commands",id:"commands",level:2},{value:"swizzle",id:"swizzle",level:3},{value:"Do I need to swizzle?",id:"do-i-need-to-swizzle",level:4},{value:"Usage",id:"usage",level:4},{value:"add",id:"add",level:3},{value:"resource",id:"resource",level:4},{value:"provider",id:"provider",level:4},{value:"create-resource",id:"create-resource",level:3},{value:"Options",id:"options",level:4},{value:"Usage <strong>Examples</strong>",id:"usage-examples",level:4},{value:"update",id:"update",level:3},{value:"Options",id:"options-1",level:4},{value:"check-updates",id:"check-updates",level:3},{value:"dev, start, build",id:"dev-start-build",level:3},{value:"run",id:"run",level:3},{value:"whoami",id:"whoami",level:3},{value:"How to add to an existing project?",id:"how-to-add-to-an-existing-project",level:2}],k={toc:m};function h(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"refine CLI is a command line application that allows you to interact with your ",(0,a.kt)("strong",{parentName:"p"},"refine")," project and perform some tasks. This includes ",(0,a.kt)("a",{parentName:"p",href:"#create-resource"},"creating a new resource"),", ",(0,a.kt)("a",{parentName:"p",href:"#update"},"managing updates"),", ",(0,a.kt)("a",{parentName:"p",href:"#swizzle"},"swizzle")," components, and ",(0,a.kt)("a",{parentName:"p",href:"#dev--start--build"},"runs your project")," (build, start, dev)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'> npm run refine\nUsage: refine <command> [options]\n\n      ___           ___           ___                       ___           ___\n     /\\  \\         /\\  \\         /\\  \\          ___        /\\__\\         /\\  \\\n    /::\\  \\       /::\\  \\       /::\\  \\        /\\  \\      /::|  |       /::\\  \\\n   /:/\\:\\  \\     /:/\\:\\  \\     /:/\\:\\  \\       \\:\\  \\    /:|:|  |      /:/\\:\\  \\\n  /::\\~\\:\\  \\   /::\\~\\:\\  \\   /::\\~\\:\\  \\      /::\\__\\  /:/|:|  |__   /::\\~\\:\\  \\\n /:/\\:\\ \\:\\__\\ /:/\\:\\ \\:\\__\\ /:/\\:\\ \\:\\__\\  __/:/\\/__/ /:/ |:| /\\__\\ /:/\\:\\ \\:\\__\\\n \\/_|::\\/:/  / \\:\\~\\:\\ \\/__/ \\/__\\:\\ \\/__/ /\\/:/  /    \\/__|:|/:/  / \\:\\~\\:\\ \\/__/\n    |:|::/  /   \\:\\ \\:\\__\\        \\:\\__\\   \\::/__/         |:/:/  /   \\:\\ \\:\\__\\\n    |:|\\/__/     \\:\\ \\/__/         \\/__/    \\:\\__\\         |::/  /     \\:\\ \\/__/\n    |:|  |        \\:\\__\\                     \\/__/         /:/  /       \\:\\__\\\n     \\|__|         \\/__/                                   \\/__/         \\/__/\n\nOptions:\n  -v, --version              Output the current version.\n  -h, --help                 Output usage information.\n\nCommands:\n  add [options] [auth] [live] [data] [resource]  Creates new features for your project (data-provider, auth-provider, live-provider, resource etc.)\n  create-resource [options]  Create a new resource files (deprecated, please use "add resource" command)\n  check-updates              Check all installed `refine` packages are up to date\n  update [options]           Interactively select and update all `refine` packages to selected version. To skip the interactive mode, use the `--all` option.\n  dev [args...]              It runs: `nextjs dev`. Also accepts all the arguments `nextjs` accepts.\n  build [args...]            It runs: `nextjs build`. Also accepts all the arguments `nextjs` accepts.\n  start [args...]            It runs: `nextjs start`. Also accepts all the arguments `nextjs` accepts.\n  run [command] [args...]    Runs a defined package script. If no `command` is provided, it will list the available scripts\n  whoami                     View the details of the development environment\n  help [command]             display help for command\n\n')),(0,a.kt)("admonition",{title:"Installation",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"CLI is automatically installed in projects created with the ",(0,a.kt)("inlineCode",{parentName:"p"},"create refine-app")," command. You can use the ",(0,a.kt)("a",{parentName:"p",href:"#commands"},"commands")," immediately \ud83c\udf89"),(0,a.kt)("p",{parentName:"admonition"},"If you want to add it to your existing project, checkout ",(0,a.kt)("a",{parentName:"p",href:"#how-to-add-to-an-existing-project"},"how to add to an existing project?")," section.")),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("h3",{id:"swizzle"},"swizzle"),(0,a.kt)("p",null,"In this command, you can swizzle the components of the ",(0,a.kt)("strong",{parentName:"p"},"refine"),". This allows you to customize the components and use your own components."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Why is it called swizzling?"),(0,a.kt)("p",null,"The term comes from Objective-C and Swift-UI: ",(0,a.kt)("a",{parentName:"p",href:"https://pspdfkit.com/blog/2019/swizzling-in-swift/"},"method swizzling")," is the process of changing the implementation of an existing selector (method)."),(0,a.kt)("p",null,"For ",(0,a.kt)("strong",{parentName:"p"},"refine"),", component swizzling means providing an alternative component that will be used instead of the default one."),(0,a.kt)("p",null,"You can think of it as ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Monkey_patch"},"Monkey Patching")," for React components, which allows you to change the default implementation. Gatsby has a similar feature called ",(0,a.kt)("a",{parentName:"p",href:"https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/"},"theme shadowing"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Thanks to the ",(0,a.kt)("a",{parentName:"strong",href:"https://docusaurus.io"},"Docusaurus")," team for inspiring us for this feature."))),(0,a.kt)("h4",{id:"do-i-need-to-swizzle"},"Do I need to swizzle?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," packages provide data providers, UI frameworks, and components that make it easy to build a project. Most these are customizable and can be used as is. However, sometimes you may want to customize it as if you created it yourself. This is where swizzling comes in. Most of ",(0,a.kt)("strong",{parentName:"p"},"refine")," packages provide a swizzle command that ejects the files to your project. You can then customize them as you wish."),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Let's create a new component by swizzling the ",(0,a.kt)("inlineCode",{parentName:"p"},"Layout")," components."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> npm run refine swizzle\n\n? Which package do you want to swizzle? (Use arrow keys or type to search)\n\nData Provider\n \u25ef @refinedev/simple-rest\nUI Framework\n \u25c9 @refinedev/antd\n")),(0,a.kt)("p",null,"First, you need to select the package you want to swizzle. In this example, we will swizzle the ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/antd")," package."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"refine")," CLI will only show the packages that are installed in your project.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"? Which component do you want to swizzle?\n\n \u25ef TagField\n \u25ef TextField\n \u25ef UrlField\nOther\n \u25ef Breadcrumb\n\u276f\u25c9 Layout\nPages\n \u25ef ErrorPage\n \u25ef AuthPage\n(Move up and down to reveal more choices)\n")),(0,a.kt)("p",null,"Then, you need to select the component you want to swizzle. In this example, we will swizzle the ",(0,a.kt)("inlineCode",{parentName:"p"},"Layout")," component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'Successfully swizzled Layout\nFiles created:\n - src/components/layout/sider.tsx\n - src/components/layout/header.tsx\n - src/components/layout/title.tsx\n - src/components/layout/index.tsx\n\nWarning:\nIf you want to change the default layout;\nYou should wrap your pages with layout/index.tsx inside <Refine>\ncomponent.\n\n    \u256d App.tsx \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256e\n    \u2502                                                 \u2502\n    \u2502   import { Layout } from "components/layout";   \u2502\n    \u2502                                                 \u2502\n    \u2502   const App = () => {                           \u2502\n    \u2502       return (                                  \u2502\n    \u2502           <Refine                               \u2502\n    \u2502               /* ... */                         \u2502\n    \u2502           >                                     \u2502\n    \u2502               <Layout>                          \u2502\n    \u2502                   {/* ... */}                   \u2502\n    \u2502               <Layout>                          \u2502\n    \u2502           </Refine>                             \u2502\n    \u2502       );                                        \u2502\n    \u2502   }                                             \u2502\n    \u2502                                                 \u2502\n    \u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f\n')),(0,a.kt)("p",null,"Finally, the swizzle command will create a new folder in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/components/layout")," directory and generate the layout components of the ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/antd")," package in it."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"refine")," CLI determines the path to create a new folder according to the framework you are using. For example, if you are using the ",(0,a.kt)("inlineCode",{parentName:"p"},"remix"),", the path will be ",(0,a.kt)("inlineCode",{parentName:"p"},"app/components/layout"),".")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If there is already a file with the same name in the directory, the swizzle command will not overwrite it.")),(0,a.kt)("h3",{id:"add"},"add"),(0,a.kt)("p",null,"Use this command to add a new ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"provider")," to your project."),(0,a.kt)("h4",{id:"resource"},"resource"),(0,a.kt)("p",null,"CRUD components are created for the selected actions. These components are put on the specified path. The folder name here becomes plural."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> npm run refine add resource\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Argument"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resourceName (optional)"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the resource you want to add.")))),(0,a.kt)("h4",{id:"provider"},"provider"),(0,a.kt)("p",null,"Empty Provider methods are created for to easily implement and connect to your data source from your ",(0,a.kt)("strong",{parentName:"p"},"refine")," project. These components are put on the specified path."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> npm run refine add auth\n> npm run refine add data\n> npm run refine add live\n> npm run refine add access-control\n> npm run refine add audit-log\n> npm run refine add i18n\n> npm run refine add notification\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Argument"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"auth")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"data")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"live")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"access-control")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"audit-log")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"i18n")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"notification")," (required)"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the provider you want to add.")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Alias"),(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-a"),(0,a.kt)("td",{parentName:"tr",align:null},"--actions"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"list"),",",(0,a.kt)("inlineCode",{parentName:"td"},"create"),",",(0,a.kt)("inlineCode",{parentName:"td"},"edit"),",",(0,a.kt)("inlineCode",{parentName:"td"},"show")),(0,a.kt)("td",{parentName:"tr",align:null},"Only generate the specified actions for resource. (works only when ",(0,a.kt)("inlineCode",{parentName:"td"},"add resource"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-p"),(0,a.kt)("td",{parentName:"tr",align:null},"--path"),(0,a.kt)("td",{parentName:"tr",align:null},"(when ",(0,a.kt)("inlineCode",{parentName:"td"},"add resource"),"): react/vite: ",(0,a.kt)("inlineCode",{parentName:"td"},"src/pages")," next.js: ",(0,a.kt)("inlineCode",{parentName:"td"},"src/components")," remix: ",(0,a.kt)("inlineCode",{parentName:"td"},"app/components")),(0,a.kt)("td",{parentName:"tr",align:null},"The path to create source files. (It is created automatically according to the framework.)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-p"),(0,a.kt)("td",{parentName:"tr",align:null},"--path"),(0,a.kt)("td",{parentName:"tr",align:null},"(when ",(0,a.kt)("inlineCode",{parentName:"td"},"add providers"),"): react/vite: ",(0,a.kt)("inlineCode",{parentName:"td"},"src/providers")," next.js: ",(0,a.kt)("inlineCode",{parentName:"td"},"src/providers")," remix: ",(0,a.kt)("inlineCode",{parentName:"td"},"app/providers")),(0,a.kt)("td",{parentName:"tr",align:null},"The path to create source files. (It is created automatically according to the framework.)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-h"),(0,a.kt)("td",{parentName:"tr",align:null},"--help"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Output usage information")))),(0,a.kt)("h3",{id:"create-resource"},"create-resource"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud83d\udea8 Deprecated: Please use ",(0,a.kt)("a",{parentName:"p",href:"#add"},"add")," command instead.")),(0,a.kt)("p",null,"Use this command to add a new resource to your project. CRUD components are created for the selected actions. These components are put on the specified path. The folder name here becomes plural."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> npm run refine create-resource\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Argument"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resourceName (optional)"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the resource you want to add.")))),(0,a.kt)("h4",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Alias"),(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-a"),(0,a.kt)("td",{parentName:"tr",align:null},"--actions"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"list"),",",(0,a.kt)("inlineCode",{parentName:"td"},"create"),",",(0,a.kt)("inlineCode",{parentName:"td"},"edit"),",",(0,a.kt)("inlineCode",{parentName:"td"},"show")),(0,a.kt)("td",{parentName:"tr",align:null},"Only generate the specified actions.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-p"),(0,a.kt)("td",{parentName:"tr",align:null},"--path"),(0,a.kt)("td",{parentName:"tr",align:null},"react: ",(0,a.kt)("inlineCode",{parentName:"td"},"src/pages")," next.js: ",(0,a.kt)("inlineCode",{parentName:"td"},"src/components")," remix: ",(0,a.kt)("inlineCode",{parentName:"td"},"app/components")),(0,a.kt)("td",{parentName:"tr",align:null},"The path to create source files. (It is created automatically according to the framework.)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-h"),(0,a.kt)("td",{parentName:"tr",align:null},"--help"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Output usage information")))),(0,a.kt)("h4",{id:"usage-examples"},"Usage ",(0,a.kt)("strong",{parentName:"h4"},"Examples")),(0,a.kt)("p",null,"Let's create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Category")," resource with all the actions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> npm run refine create-resource category\n\nsrc/pages/\n\u2514\u2500\u2500 categories\n    \u251c\u2500\u2500 create.tsx\n    \u251c\u2500\u2500 edit.tsx\n    \u251c\u2500\u2500 index.ts\n    \u251c\u2500\u2500 list.tsx\n    \u2514\u2500\u2500 show.tsx\n")),(0,a.kt)("p",null,"If we only want to use list and create actions, it should be like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> npm run refine create-resource category -- --actions list,create\n\nsrc/pages/\n\u2514\u2500\u2500 categories\n    \u251c\u2500\u2500 create.tsx\n    \u251c\u2500\u2500 index.ts\n    \u2514\u2500\u2500 list.tsx\n")),(0,a.kt)("p",null,"If we want to create these files in another path, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--path")," option."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> npm run refine create-resource category -- --path src/resources --actions list,create\n\nsrc/resources/\n\u2514\u2500\u2500 categories\n    \u251c\u2500\u2500 create.tsx\n    \u251c\u2500\u2500 index.ts\n    \u2514\u2500\u2500 list.tsx\n")),(0,a.kt)("p",null,"You can also create multiple resources at the same time. For this, you can write the sources by separating them with a space."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> npm run refine create-resource category user -- --actions list,create\n\nsrc/pages/\n\u251c\u2500\u2500 categories\n\u2502\xa0\xa0 \u251c\u2500\u2500 create.tsx\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.ts\n\u2502\xa0\xa0 \u2514\u2500\u2500 list.tsx\n\u2514\u2500\u2500 users\n    \u251c\u2500\u2500 create.tsx\n    \u251c\u2500\u2500 index.ts\n    \u2514\u2500\u2500 list.tsx\n")),(0,a.kt)("h3",{id:"update"},"update"),(0,a.kt)("p",null,"Interactively update your outdated ",(0,a.kt)("strong",{parentName:"p"},"refine")," packages. To skip interactive mode, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--all")," flag to update all outdated ",(0,a.kt)("strong",{parentName:"p"},"refine")," packages to selected tag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> npm run refine update\n\n? Choose packages to update (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)\n\n   Package                          From      To\n\nPatch Updates\n \u25ef @refinedev/cli                1.5.1 -> 1.5.3\n\nMinor Updates\n \u25ef @refinedev/airtable           2.1.1 -> 2.7.8\n \u25c9 @refinedev/core              3.88.1 -> 3.90.4\n \u25ef @refinedev/react-hook-form   3.31.0 -> 3.33.2\n \u25ef @refinedev/simple-rest        2.6.0 -> 2.7.8\n\u276f\u25c9 @refinedev/strapi            3.18.0 -> 3.37.0\n\nMajor Updates\n \u25ef @refinedev/airtable           2.1.1 -> 3.33.0\n \u25ef @refinedev/simple-rest        2.6.0 -> 3.35.2\n")),(0,a.kt)("h4",{id:"options-1"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Alias"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Values"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"--tag"),(0,a.kt)("td",{parentName:"tr",align:null},"-t"),(0,a.kt)("td",{parentName:"tr",align:null},"Select version to update to."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"latest"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"next")),(0,a.kt)("td",{parentName:"tr",align:null},"Version ranges in the ",(0,a.kt)("inlineCode",{parentName:"td"},"package.json")," will be installed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"--all"),(0,a.kt)("td",{parentName:"tr",align:null},"-a"),(0,a.kt)("td",{parentName:"tr",align:null},"Use to skip interactive mode update and update all ",(0,a.kt)("inlineCode",{parentName:"td"},"refine")," packages to the selected ",(0,a.kt)("inlineCode",{parentName:"td"},"tag"),"."),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false")," Interactive mode will be open.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"--dry-run"),(0,a.kt)("td",{parentName:"tr",align:null},"-d"),(0,a.kt)("td",{parentName:"tr",align:null},"Use to skip automatic installation. Prints the update command of the packages."),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false")," Selected packages will be installed automatically.")))),(0,a.kt)("h3",{id:"check-updates"},"check-updates"),(0,a.kt)("p",null,"Show the running versions of the installed ",(0,a.kt)("strong",{parentName:"p"},"refine")," packages."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> npm run refine check-updates\n                                    Update Available\n                \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                \u2502 name                           \u2502 current \u2502 wanted \u2502 latest \u2502\n                \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n                \u2502 @refinedev/airtable        \u2502 2.1.1   \u2502 2.7.8  \u2502 3.33.0 \u2502\n                \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n                \u2502 @refinedev/cli             \u2502 1.5.1   \u2502 1.5.3  \u2502 1.5.3  \u2502\n                \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n                \u2502 @refinedev/core            \u2502 3.88.1  \u2502 3.90.4 \u2502 3.90.4 \u2502\n                \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n                \u2502 @refinedev/react-hook-form \u2502 3.31.0  \u2502 3.33.2 \u2502 3.33.2 \u2502\n                \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n                \u2502 @refinedev/simple-rest     \u2502 2.6.0   \u2502 2.7.8  \u2502 3.35.2 \u2502\n                \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n                \u2502 @refinedev/strapi          \u2502 3.18.0  \u2502 3.37.0 \u2502 3.37.0 \u2502\n                \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                    To update `refine` packages with the wanted version\n                        Run the following command npm run refine update\n")),(0,a.kt)("h3",{id:"dev-start-build"},"dev, start, build"),(0,a.kt)("p",null,"When you run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run refine [dev | start | build]")," It will detect the framework you are using and run the commands accordingly."),(0,a.kt)("p",null,"Also you can pass environment variables, and all the options that are available in the framework. For example, you can run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run refine dev --port 3001")," to run the app on port ",(0,a.kt)("inlineCode",{parentName:"p"},"3001"),"."),(0,a.kt)(r.Z,{defaultValue:"cra",values:[{label:"React",value:"cra"},{label:"Next.js",value:"nextjs"},{label:"Remix",value:"remix"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"cra",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," # Starts application in development mode. Equivalent to `react-scripts start` or `vite`.\nnpm run refine dev\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Creates a production build of your app. Equivalent to `react-scripts build` or `vite build`.\nnpm run refine build\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/available-scripts"},"Refer to the Create React App documentation for detailed usage. ","\u2192")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://vitejs.dev/guide/#command-line-interface"},"Refer to the Vite documentation for detailed usage. ","\u2192"))),(0,a.kt)(i.Z,{value:"nextjs",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Starts application in development mode. Equivalent to `next dev`.\nnpm run refine dev\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Starts application in production mode. Equivalent to `next start`.\nnpm run refine start\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Creates a production build of your app. Equivalent to `next build`.\nnpm run refine build\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/api-reference/cli"},"Refer to the Next.js documentation for detailed usage. ","\u2192"))),(0,a.kt)(i.Z,{value:"remix",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Starts application in development mode. Equivalent to `remix dev`.\nnpm run refine dev\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Starts application in production mode. Equivalent to `remix-serve start`.\nnpm run refine start\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Creates a production build of your app. Equivalent to `next build`.\nnpm run refine build\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://remix.run/docs/en/v1/other-api/dev"},"Refer to the Remix documentation for detailed usage. ","\u2192")))),(0,a.kt)("h3",{id:"run"},"run"),(0,a.kt)("p",null,"Runs a custom script in the context of your ",(0,a.kt)("strong",{parentName:"p"},"refine")," project. Also It will pass all the arguments to the script."),(0,a.kt)("p",null,"First it will check ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," to see if there is a script with the given name. If there is, it will run that script. Otherwise, it will run in ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/.bin"),"."),(0,a.kt)("p",null,"With this way you can run unsupported commands via ",(0,a.kt)("strong",{parentName:"p"},"refine"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run refine run react-app-rewired start\n")),(0,a.kt)("h3",{id:"whoami"},"whoami"),(0,a.kt)("p",null,"View the details of the development environment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> npm run refine whoami\n\n## System:\n - OS: macOS 13.0\n - CPU: (8) arm64 Apple M1 Pro\n## Binaries:\n - Node: 16.14.0 - ~/.nvm/versions/node/v16.14.0/bin/node\n - Yarn: 1.22.17 - /opt/homebrew/bin/yarn\n - npm: 8.3.1 - ~/.nvm/versions/node/v16.14.0/bin/npm\n## Browsers:\n - Chrome: 107.0.5304.121\n - Firefox: 106.0.3\n - Safari: 16.1\n\n## Refine Packages:\n - @refinedev/airtable: 2.1.1\n - @refinedev/antd: 3.62.0\n - @refinedev/cli: 1.5.1\n - @refinedev/core: 3.88.1\n - @refinedev/react-hook-form: 3.31.0\n - @refinedev/simple-rest: 2.6.0\n - @refinedev/strapi: 3.18.0\n")),(0,a.kt)("h2",{id:"how-to-add-to-an-existing-project"},"How to add to an existing project?"),(0,a.kt)("p",null,"If you want to add the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/cli"},"@refinedev/cli")," to your existing project, you have to add it to your project's ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,a.kt)(r.Z,{defaultValue:"npm",values:[{label:"use npm",value:"npm"},{label:"use yarn",value:"yarn"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @refinedev/cli\n"))),(0,a.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @refinedev/cli\n")))),(0,a.kt)("p",null,"Then add the ",(0,a.kt)("inlineCode",{parentName:"p"},"refine")," command to your scripts in your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="package.json"',title:'"package.json"'},'{\n    "scripts": {\n+       "refine": "refine"\n    }\n}\n')),(0,a.kt)("p",null,"Hooray!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> npm run refine\nUsage: refine <command> [options]\n\n      ___           ___           ___                       ___           ___\n     /\\  \\         /\\  \\         /\\  \\          ___        /\\__\\         /\\  \\\n    /::\\  \\       /::\\  \\       /::\\  \\        /\\  \\      /::|  |       /::\\  \\\n   /:/\\:\\  \\     /:/\\:\\  \\     /:/\\:\\  \\       \\:\\  \\    /:|:|  |      /:/\\:\\  \\\n  /::\\~\\:\\  \\   /::\\~\\:\\  \\   /::\\~\\:\\  \\      /::\\__\\  /:/|:|  |__   /::\\~\\:\\  \\\n /:/\\:\\ \\:\\__\\ /:/\\:\\ \\:\\__\\ /:/\\:\\ \\:\\__\\  __/:/\\/__/ /:/ |:| /\\__\\ /:/\\:\\ \\:\\__\\\n \\/_|::\\/:/  / \\:\\~\\:\\ \\/__/ \\/__\\:\\ \\/__/ /\\/:/  /    \\/__|:|/:/  / \\:\\~\\:\\ \\/__/\n    |:|::/  /   \\:\\ \\:\\__\\        \\:\\__\\   \\::/__/         |:/:/  /   \\:\\ \\:\\__\\\n    |:|\\/__/     \\:\\ \\/__/         \\/__/    \\:\\__\\         |::/  /     \\:\\ \\/__/\n    |:|  |        \\:\\__\\                     \\/__/         /:/  /       \\:\\__\\\n     \\|__|         \\/__/                                   \\/__/         \\/__/\n\nOptions:\n  -v, --version              Output the current version.\n  -h, --help                 Output usage information.\n\nCommands:\n  create-resource [options]  Create a new resource files\n  check-updates              Check all installed `refine` packages are up to date\n  update [options]           Interactively select and update all `refine` packages to selected version. To skip the interactive mode, use the `--all` option.\n  dev [args...]              It runs: `nextjs dev`. Also accepts all the arguments `nextjs` accepts.\n  build [args...]            It runs: `nextjs build`. Also accepts all the arguments `nextjs` accepts.\n  start [args...]            It runs: `nextjs start`. Also accepts all the arguments `nextjs` accepts.\n  run [command] [args...]    Runs a defined package script. If no `command` is provided, it will list the available scripts\n  whoami                     View the details of the development environment\n  help [command]             display help for command\n\n")),(0,a.kt)("p",null,"You can optionally modify your scripts in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"refine CLI")," ",(0,a.kt)("a",{parentName:"p",href:"#dev--start--build"},"commands"),". The benefit it will provide you is that it gives warnings to keep your ",(0,a.kt)("inlineCode",{parentName:"p"},"refine")," packages always up to date."),(0,a.kt)(r.Z,{defaultValue:"react",values:[{label:"React",value:"react"},{label:"Next.js",value:"nextjs"},{label:"Remix",value:"remix"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"react",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="package.json"',title:'"package.json"'},'{\n    "scripts": {\n-       "dev": "react-scripts start",\n-       "build": "react-scripts build",\n+       "dev": "refine start",\n+       "build": "refine build",\n    }\n}\n'))),(0,a.kt)(i.Z,{value:"nextjs",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="package.json"',title:'"package.json"'},'{\n    "scripts": {\n-       "dev": "next dev",\n-       "build": "next build",\n-       "start": "next start",\n+       "dev": "refine dev",\n+       "build": "refine build",\n+       "start": "refine start",\n    }\n}\n'))),(0,a.kt)(i.Z,{value:"remix",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="package.json"',title:'"package.json"'},'{\n    "scripts": {\n-       "dev": "remix dev",\n-       "build": "remix build",\n-       "start": "remix-serve build"\n+       "dev": "refine dev",\n+       "build": "refine build",\n+       "start": "refine start",\n    }\n}\n')))))}h.isMDXComponent=!0}}]);