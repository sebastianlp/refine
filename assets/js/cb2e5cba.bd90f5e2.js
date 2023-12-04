"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26267],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30738:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>d});n(67294);var a=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"Next.js 13 - What are the new features?",description:"Next.js 13 is out! Let's see the new features in this release.",slug:"new-features-in-next-js-13",authors:"michael",tags:["nextjs"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-12-next-13/social.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/new-features-in-next-js-13",source:"@site/blog/2022-11-12-next-13.md",title:"Next.js 13 - What are the new features?",description:"Next.js 13 is out! Let's see the new features in this release.",date:"2022-11-12T00:00:00.000Z",formattedDate:"November 12, 2022",tags:[{label:"nextjs",permalink:"/blog/tags/nextjs"}],readingTime:6.115,hasTruncateMarker:!1,authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],frontMatter:{title:"Next.js 13 - What are the new features?",description:"Next.js 13 is out! Let's see the new features in this release.",slug:"new-features-in-next-js-13",authors:"michael",tags:["nextjs"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-12-next-13/social.png",hide_table_of_contents:!1},prevItem:{title:"What is Turborepo and Why Should You Care?",permalink:"/blog/how-to-use-turborepo"},nextItem:{title:"How to Install and Use NVM?",permalink:"/blog/install-nvm-mac-and-windows"},relatedPosts:[{title:"What is Next.js getInitialProps and getServerSideProps?",description:"We will deep dive into Next.js getInitialProps and getServerSideProps.",permalink:"/blog/next-js-getinitialprops-and-getserversideprops",formattedDate:"October 31, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:9.1,date:"2022-10-31T00:00:00.000Z"},{title:"Next.js E-commerce App with Strapi and Chakra UI",description:"Learn the power of Refine for e-commerce with this quick & easy example. This step-by-step Refine SPA tutorial will get you started in no time.",permalink:"/blog/handcrafted-nextjs-e-commerce-app-tutorial-strapi-chakra-ui",formattedDate:"February 14, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:10.775,date:"2022-02-14T00:00:00.000Z"},{title:"Next.js vs React - A Beginner's Guide",description:"We will be looking at the core differences between React and Next.js, using rendering, routing, and configuration as our basis for comparison.",permalink:"/blog/next-js-vs-react",formattedDate:"October 10, 2023",authors:[{name:"Marvel Ken",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"marvel_ken"}],readingTime:13.87,date:"2023-10-10T00:00:00.000Z"}],authorPosts:[{title:"How Next.js Redirects Work",description:"We'll examine the concept of URL redirection in Next.js and how redirects work.",permalink:"/blog/next-js-redirect",formattedDate:"May 16, 2023",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:8.785,date:"2023-05-16T00:00:00.000Z"},{title:"How to Fetch Data in React with useSWR",description:"Introduction to SWR and useSwr for Client-Side Data Fetching",permalink:"/blog/data-fetching-next-js-useswr",formattedDate:"January 3, 2023",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:13.22,date:"2023-01-03T00:00:00.000Z"},{title:"What is Next.js getInitialProps and getServerSideProps?",description:"We will deep dive into Next.js getInitialProps and getServerSideProps.",permalink:"/blog/next-js-getinitialprops-and-getserversideprops",formattedDate:"October 31, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:9.1,date:"2022-10-31T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Installing Next.js 13",id:"installing-nextjs-13",level:3},{value:"Latest Features in Next.js 13",id:"latest-features-in-nextjs-13",level:2},{value:"A brand new <code>app/</code> directory",id:"a-brand-new-app-directory",level:3},{value:"Turbopack (Alpha)",id:"turbopack-alpha",level:3},{value:"A new way to fetch data",id:"a-new-way-to-fetch-data",level:3},{value:"Brand new <code>next/font</code> for font optimization",id:"brand-new-nextfont-for-font-optimization",level:3},{value:"Newly improved <code>next/link</code> and <code>next/image</code> components",id:"newly-improved-nextlink-and-nextimage-components",level:3},{value:"<code>@vercel/og</code> for Open Graph Image Generation",id:"vercelog-for-open-graph-image-generation",level:2},{value:"Upgrading to Next.js 13",id:"upgrading-to-nextjs-13",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:d};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Next.js is a popular React.js framework for building complex and performant web applications. Since its launch in 2016, Next.js has been constantly improved and updated for better performance and a great developer experience. Next.js 13 was announced at the just concluded ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/conf"},"Next.js Conference")," by Next.js and Vercel CEO, Guillermo Rauch. The announcement also re-affirms Next.js commitment and mission to revolutionize web development."),(0,a.kt)("p",null,"This new release comes with upgrades and new additions that let you create dynamic applications without limits and supports the latest features in React.js 18. Some even say Next.js 13 is the real React.js 18 (well, that's true to some extent). "),(0,a.kt)("p",null,"This article will explore the latest features and also take you through installing and upgrading your codebases to Next.js 13. Let's dive in! "),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#installing-nextjs-13"},"Installing Next.js 13")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#latest-features-in-nextjs-13"},"Latest Features in Next.js 13")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#upgrading-to-nextjs-13"},"Upgrading to Next.js 13"))),(0,a.kt)("h3",{id:"installing-nextjs-13"},"Installing Next.js 13"),(0,a.kt)("p",null,"To create a Next.js 13 app, you need to have ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js 14")," or later installed on your computer. Next, run any of the commands below to install Next.js 13:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-next-app@latest --experimental-app\n# or\nyarn create next-app --experimental-app\n# or\npnpm create next-app --experimental-app\n")),(0,a.kt)("p",null,"With the exception of a new app folder, the generated files and folders are almost the same as before in older versions."),(0,a.kt)("p",null,"Next, run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run dev")," to start the development server and you're good to go!"),(0,a.kt)("h2",{id:"latest-features-in-nextjs-13"},"Latest Features in Next.js 13"),(0,a.kt)("p",null,"Now, let's look at some of the latest and most interesting features in the new release."),(0,a.kt)("h3",{id:"a-brand-new-app-directory"},"A brand new ",(0,a.kt)("inlineCode",{parentName:"h3"},"app/")," directory"),(0,a.kt)("p",null,"One of the notable features in Next.js 13 is a brand new ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," directory (beta). The ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," directory file-system based router is an upgrade to Next.js page routing system. The app folder comes with a few ",(0,a.kt)("a",{parentName:"p",href:"https://beta.nextjs.org/docs/routing/fundamentals#special-files"},"special files")," that can be used for different states and UI of your application. For example, you can use an optional ",(0,a.kt)("inlineCode",{parentName:"p"},"error.tsx")," file to isolate errors to specific parts of your application."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," directory supports nested layouts, streaming, React's Server Components - the ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," directory will treat components inside of it as Server Components by default - nested routing and more. It works well alongside the ",(0,a.kt)("inlineCode",{parentName:"p"},"pages")," folder so it can be adopted incrementally."),(0,a.kt)("h3",{id:"turbopack-alpha"},"Turbopack (Alpha)"),(0,a.kt)("p",null,"Next.js 13 is built on top of Turbopack, a native, rust-based compiler, and successor to Webpack. Turbopack takes only 1.8 seconds during startup compared to Webpack, which takes 16.5 seconds. It's also 700x faster during updates than Webpack, 10x faster updates than Vite, and 4x faster cold starts than Webpack. "),(0,a.kt)("p",null,"It's interesting to note that Turbopack development is being led by the creator of Webpack, Tobias Koppers. Turbopack alpha is currently supported only in development. You can run the following command to try it out ",(0,a.kt)("inlineCode",{parentName:"p"},"next dev --turbo"),"."),(0,a.kt)("h3",{id:"a-new-way-to-fetch-data"},"A new way to fetch data"),(0,a.kt)("p",null,"Another cool feature in Next.js 13 is a new data fetching method built on top of the native ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"fetch() Web API"),". It allows you to use ",(0,a.kt)("inlineCode",{parentName:"p"},"async/await")," to asynchronously fetch data in Server Components created with JavaScript ",(0,a.kt)("inlineCode",{parentName:"p"},"await")," syntax, with performance benefits such as automatic caching and data re-validation. "),(0,a.kt)("p",null,"It also comes with a ",(0,a.kt)("inlineCode",{parentName:"p"},"use")," hook for unwrapping values from a Promise. The ",(0,a.kt)("inlineCode",{parentName:"p"},"use")," hook can be used inside normal components, hooks and on the client. Think of it like a React-only version of ",(0,a.kt)("inlineCode",{parentName:"p"},"await"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"use")," is being developed by the React team and uses Suspense under the hood. "),(0,a.kt)("p",null,"Below is an example taken from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/acdlite/rfcs/blob/first-class-promises/text/0000-first-class-support-for-promises.md"},"here")," showing how to fetch data with ",(0,a.kt)("inlineCode",{parentName:"p"},"async/await")," in Server Components."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app/page.tsx"',title:'"app/page.tsx"'},"async function Note({id, isEditing}) {\n  const note = await db.posts.get(id);\n  return (\n    <div>\n      <h1>{note.title}</h1>\n      <section>{note.body}</section>\n      {isEditing ? <NoteEditor note={note} /> : null}\n    </div>\n  );\n}\n")),(0,a.kt)("h3",{id:"brand-new-nextfont-for-font-optimization"},"Brand new ",(0,a.kt)("inlineCode",{parentName:"h3"},"next/font")," for font optimization"),(0,a.kt)("p",null,"Next.js 13 introduces a brand new font module, ",(0,a.kt)("inlineCode",{parentName:"p"},"next/font"),",  that automatically optimizes your local and Google fonts for performance, prevents layout shifts using the CSS size-adjust property and many other performance benefits."),(0,a.kt)("p",null,"CSS and font files are downloaded at build time with the rest of your static assets, and no requests are sent to Google by the browser."),(0,a.kt)("p",null,"Example usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Inter } from '@next/font/google';\n\nconst inter = Inter();\n\n<html className={inter.className}>\n")),(0,a.kt)("h3",{id:"newly-improved-nextlink-and-nextimage-components"},"Newly improved ",(0,a.kt)("inlineCode",{parentName:"h3"},"next/link")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"next/image")," components"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"next/link"),"  and ",(0,a.kt)("inlineCode",{parentName:"p"},"next/image")," components are some of the core features in Next.js that got an upgrade in Next.js 13. ",(0,a.kt)("inlineCode",{parentName:"p"},"next/image")," saw new performance upgrades such as less client-side JavaScript, faster image load times and a required alt attribute for accessibility.  "),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"next/link")," component used for client-side transition now has a built-in ",(0,a.kt)("inlineCode",{parentName:"p"},"<a>")," element by default. This means you won't have to manually add ",(0,a.kt)("inlineCode",{parentName:"p"},"<a>")," like before."),(0,a.kt)("p",null,"Before:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import Link from 'next/link'\n...\n<Link href=\"/about\">\n  <a>About</a>\n</Link>\n\n")),(0,a.kt)("p",null,"Next.js 13:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import Link from 'next/link'\n<Link href=\"/about\">\n  About // <a> will be added automatically in Next.js 13\n</Link>\n")),(0,a.kt)("h2",{id:"vercelog-for-open-graph-image-generation"},(0,a.kt)("inlineCode",{parentName:"h2"},"@vercel/og")," for Open Graph Image Generation"),(0,a.kt)("p",null,"Next.js 13 ships with a new library, ",(0,a.kt)("inlineCode",{parentName:"p"},"@vercel/og")," that optimizes the generation of social media cards via the Open Graph Protocol. The library exports an ",(0,a.kt)("inlineCode",{parentName:"p"},"ImageResponse")," function that generates a static image which you can then use in your ",(0,a.kt)("inlineCode",{parentName:"p"},"<meta>")," tags."),(0,a.kt)("p",null,"For example, given an api route ",(0,a.kt)("inlineCode",{parentName:"p"},"pages/api/og.tsx"),", you can generate a social card image with HTML and CSS like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { ImageResponse } from '@vercel/og';\n\nexport const config = {\n  runtime: 'experimental-edge',\n};\n\nexport default function () {\n  return new ImageResponse(\n    (\n      <div\n        style={{\n          fontSize: 128,\n          background: 'white',\n          width: '100%',\n          height: '100%',\n          display: 'flex',\n          textAlign: 'center',\n          alignItems: 'center',\n          justifyContent: 'center',\n        }}\n      >\n        Hello world!\n      </div>\n    ),\n    {\n      width: 1200,\n      height: 600,\n    },\n  );\n}\n")),(0,a.kt)("p",null,"Now, if you navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/api/og"),", you should see an image generated with the text ",(0,a.kt)("inlineCode",{parentName:"p"},"Hello World!"),"."),(0,a.kt)("p",null,"You can read more about OG image generation ",(0,a.kt)("a",{parentName:"p",href:"https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation"},"here"),"."),(0,a.kt)("p",null,"Some other new upgrades and additions include ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/blog/next-13#streaming"},"Streaming")," and ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/blog/next-13#middleware-api-updates"},"Middleware API")," updates."),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://discord.gg/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,a.kt)("h2",{id:"upgrading-to-nextjs-13"},"Upgrading to Next.js 13"),(0,a.kt)("p",null,"In one of the previous sections, we talked about creating a new Next.js 13 app. In this section, we'll look at how you can upgrade your existing codebases to Next.js 13. The easiest way to upgrade your app to Next.js 13 is to run any of the following commands using your preferred package manager:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i next@latest react@latest react-dom@latest eslint-config-next@latest\n# or\nyarn upgrade next react react-dom eslint-config-next --latest\n# or\npnpm up next react react-dom eslint-config-next --latest\n")),(0,a.kt)("p",null,"If you want to only upgrade specific features, you can run a codemod transformation for those particular features. For example, the following command will upgrade links in your pages folder to Next.js 13 when run from the root of your app:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx @next/codemod new-link ./pages\n")),(0,a.kt)("p",null,"You can check the documentations ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/advanced-features/codemods"},"here")," for the available Next.js codemods."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Next.js is one of the popular tools for building the Web and it's constantly evolving. This article summarized the latest features in Next.js 13 and you learned how to upgrade your codebases to use these new features. "),(0,a.kt)("p",null,"The documentation for Next.js 13 is currently in Beta and can be found ",(0,a.kt)("a",{parentName:"p",href:"https://beta.nextjs.org/docs/getting-started"},"here"),", and there is now also a dark mode available! :)"),(0,a.kt)("p",null,"With Next.js the possibilities are endless and I can't wait to see the cool stuff you build next. Happy coding! you build next. Happy coding!s and I can't wait to see the cool stuff you build next. Happy coding!"))}m.isMDXComponent=!0}}]);