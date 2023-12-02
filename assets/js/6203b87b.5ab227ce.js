"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80112],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||i;return n?o.createElement(h,r(r({ref:t},m),{},{components:n})):o.createElement(h,r({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>c});n(67294);var o=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={title:"React memo guide with examples",description:"Improve the app performance with React.memo()",slug:"react-memo-guide",authors:"abdullah_numan",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-13-react-memo/social.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/react-memo-guide",source:"@site/blog/2022-09-13-react-memo.md",title:"React memo guide with examples",description:"Improve the app performance with React.memo()",date:"2022-09-13T00:00:00.000Z",formattedDate:"September 13, 2022",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:9.895,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"React memo guide with examples",description:"Improve the app performance with React.memo()",slug:"react-memo-guide",authors:"abdullah_numan",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-13-react-memo/social.png",hide_table_of_contents:!1},prevItem:{title:"React useMemo hook guide with examples",permalink:"/blog/react-usememo"},nextItem:{title:"A Guide for Next.js with TypeScript",permalink:"/blog/next-js-with-typescript"},relatedPosts:[{title:"Implementing Dark Mode In Ant Design Using gulp",description:"In this article, we\u2019ll learn how to efficiently implement dark mode in a refine/Ant Design app, using gulp library and leveraging some React features like hooks",permalink:"/blog/how-to-add-darkmode-in-ant-design",formattedDate:"February 12, 2022",authors:[{name:"Pierre van Male",title:"Junior Fullstack Developer",url:"https://github.com/vmalep",imageURL:"https://github.com/vmalep.png",key:"vmalep"}],readingTime:5.075,date:"2022-02-12T00:00:00.000Z"},{title:"Building an Customizable Invoice Generator App with Refine, Strapi & Ant Design | Part II",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",permalink:"/blog/refine-invoice-generator",formattedDate:"March 1, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:13.215,date:"2022-03-01T00:00:00.000Z"},{title:"When to use dangerouslySetInnerHTML in React?",description:"Find out when to use dangerouslySetInnerHTML in React and how it can help avoid XSS attacks.",permalink:"/blog/use-react-dangerouslysetinnerhtml",formattedDate:"September 25, 2022",authors:[{name:"Clara Ekekenta",title:"Software Engineer",imageURL:"/img/generic-profile.png",key:"clara_ekekenta"}],readingTime:5.285,date:"2022-09-25T00:00:00.000Z"}],authorPosts:[{title:"TypeScript Decorators in Brief",description:"We'll explore four main types of TypeScript Decorators with examples from a class that resembles those in typical class based TypeScript libraries.",permalink:"/blog/typescript-decorators",formattedDate:"July 24, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:9.59,date:"2023-07-24T00:00:00.000Z"},{title:"Adding PDF Renderer",description:"We are going to add PDF renderer to our PDF Invoice Generator app that we have been building last few days. This is also where we summarize our accomplishments and wrap up the series.",permalink:"/blog/refine-react-invoice-generator-5",formattedDate:"April 14, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.42,date:"2023-04-14T00:00:00.000Z"},{title:"Pilot & refine architecture",description:"We'll be taking a look at the architecture of refine and how week of refineWeek series will be structured.",permalink:"/blog/refine-react-invoice-generator-1",formattedDate:"April 10, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:9.195,date:"2023-04-10T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"What is Memoization?",id:"what-is-memoization",level:2},{value:"Project Setup",id:"project-setup",level:2},{value:"Project Content Overview",id:"project-content-overview",level:2},{value:"Memoizing a Functional Component using <code>React.memo()</code>",id:"memoizing-a-functional-component-using-reactmemo",level:2},{value:"Memoizing Props",id:"memoizing-props",level:2},{value:"Comparing Prop Values",id:"comparing-prop-values",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Example",id:"example",level:2}],d=(u="CodeSandboxExample",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const h={toc:c};function g(e){var{components:t}=e,n=r(e,["components"]);return(0,o.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){a(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This is the first part of a series on the use of memoization in React. In this series, we'll cover memoizing a React component with ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo()")," as well as caching functions and values with React's memoization hooks."),(0,o.kt)("p",null,"We will begin with a progressive example that involves memoizing a functional component, which will be gradually extended to include use cases for the hooks: ",(0,o.kt)("inlineCode",{parentName:"p"},"useCallback()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo()"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"useCallback()")," is leveraged for memoizing a callback function, whereas ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo()")," is used to cache a computed value from an expensive function, for example, a sorting function that processes large amount of data."),(0,o.kt)("p",null,"In this post, we'll demonstrate the use of ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo()"),", which is a Higher Order Function, or HOC that adds caching logic to the passed in component. In the upcoming articles, we'll discuss about how to use ",(0,o.kt)("inlineCode",{parentName:"p"},"useCallback()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo()"),"."),(0,o.kt)("p",null,"Steps we'll cover:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#what-is-memoization"},"What is Memoization?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#project-setup"},"Project Setup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#project-content-overview"},"Project Content Overview")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#memoizing-a-functional-component-using-reactmemo"},"Memoizing a Functional Component using ",(0,o.kt)("inlineCode",{parentName:"a"},"React.memo()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#memoizing-props"},"Memoizing Props")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#comparing-prop-values"},"Comparing Prop Values"))),(0,o.kt)("h2",{id:"what-is-memoization"},"What is Memoization?"),(0,o.kt)("p",null,"Memoization is an optimization technique that allows us to store the last computed value or object from a resource-intensive function. It allows us to bypass the function's costly computations when the function is called with the same parameters repeatedly."),(0,o.kt)("p",null,"In React, ",(0,o.kt)("strong",{parentName:"p"},"memoization")," is used for optimizing the performance of an app by preventing unnecessary renders of components participating in the component hierarchy and by caching callbacks and values of expensive utility functions."),(0,o.kt)("p",null,"As React is all about rendering components in the virtual DOM prior to updating the actual Document Object Model in the browser, a lot of memory and time is wasted on useless renderings due to unaccounted for state updates. Using memoization in the right way helps in better use of computing resources in an app."),(0,o.kt)("p",null,"On the other hand, using it the wrong way can rip us off the benefits. Not only that, on the flip side of unnecessary re-renderings, unnecessary memoization can sometimes cost more than ignoring memoization - eventually hurting performance."),(0,o.kt)("h2",{id:"project-setup"},"Project Setup"),(0,o.kt)("p",null,"This series is more of a demo than a coding tutorial, as we've made the code already available at the ",(0,o.kt)("a",{parentName:"p",href:"#live-stackblitz-example"},"here"),". All the components have been coded ahead of time, and we'll highlighting on the existing code to discuss different aspects of the above mentioned memoization methods."),(0,o.kt)("p",null,"We'll follow the impact of memoization mainly from the browser's console. "),(0,o.kt)("h2",{id:"project-content-overview"},"Project Content Overview"),(0,o.kt)("p",null,"If you look at the project folder, you'll find out that ",(0,o.kt)("inlineCode",{parentName:"p"},"react-memoization")," is created using ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app"),"."),(0,o.kt)("p",null,"The app is based on the idea of a list of posts on a blog. There are several components involving a user seeing the latest posts and a list of the user's posts. Allow yourself some time to understand the components individually, their relationships, their state changes, and how props are passed through. It is crucial to pay close attention to how the change of a parent's state triggers re-render of its descendants."),(0,o.kt)("p",null,"The focus of this article will be the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Post />")," component, but ",(0,o.kt)("inlineCode",{parentName:"p"},"<App />"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<Blog />")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<LatestPost />")," are also involved. Below, we'll delve into what memoizing the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Post />")," component with ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo()")," does."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"React.memo()")," is a ",(0,o.kt)("strong",{parentName:"p"},"HOC")," that memoizes the passed in component. Doing so helps in optimizing its performance by preventing unnecessary re-renders due to state changes it does not depend on, e.g. those coming from ancestor components."),(0,o.kt)("h2",{id:"memoizing-a-functional-component-using-reactmemo"},"Memoizing a Functional Component using ",(0,o.kt)("inlineCode",{parentName:"h2"},"React.memo()")),(0,o.kt)("p",null,"To begin the example, we have an ",(0,o.kt)("inlineCode",{parentName:"p"},"<App />")," component that houses ",(0,o.kt)("inlineCode",{parentName:"p"},"<Blog />"),"."),(0,o.kt)("p",null,"We'll skip both for brevity, but if we look ",(0,o.kt)("inlineCode",{parentName:"p"},"<App />")," in the repository, we're storing a ",(0,o.kt)("inlineCode",{parentName:"p"},"signedIn")," state with ",(0,o.kt)("inlineCode",{parentName:"p"},"useState()")," hook. We also have a toggler function that alters the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"signedIn"),".  "),(0,o.kt)("p",null,"In the component, we pass ",(0,o.kt)("inlineCode",{parentName:"p"},"signedIn")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"<Blog />"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/App.jsx"',title:'"src/components/App.jsx"'},'import { useState } from "react";\nimport Blog from "./components/Blog";\n\nfunction App() {\n  const [signedIn, setSignedIn] = useState(false);\n  const handleClick = () => setSignedIn(!signedIn);\n\nconsole.log(\'Rendering App component\');\n\n  return (\n    <main>\n      <nav>\n        <button onClick={handleClick}>Sign Out</button>\n      </nav>\n      <Blog signedIn={signedIn} setSignedIn={setSignedIn} />\n    </main>\n  );\n};\n\nexport default App;\n')),(0,o.kt)("p",null,"Looking at ",(0,o.kt)("inlineCode",{parentName:"p"},"<Blog />"),", it gets a list of posts with a click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Get Latest Post"),"  button and sets the ",(0,o.kt)("inlineCode",{parentName:"p"},"updatedPosts")," state:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/Blog.jsx"',title:'"src/components/Blog.jsx"'},'import React, { useEffect, useMemo, useState } from "react";\nimport fetchUpdatedPosts from "../fetch/fetchUpdatedPosts";\nimport allPosts from "./../data/allPosts.json";\nimport sortPosts from "../utils/sortPosts";\nimport LatestPost from "./LatestPost";\nimport UserPostsIndex from "./UserPostsIndex";\n\nconst Blog = ({ signedIn }) => {\n  const [updatedPosts, setUpdatedPosts] = useState(allPosts);\n  const [localTime, setLocalTime] = useState(new Date().toLocaleTimeString());\n\n  const getLatestPosts = () => {\n    const posts = fetchUpdatedPosts();\n    setUpdatedPosts(posts);\n  };\n\n  const sortedPosts = sortPosts(updatedPosts);\n\n  useEffect(() => {\n    const id = setInterval(\n      () => setLocalTime(new Date().toLocaleTimeString()),\n      1000\n    );\n    return () => clearInterval(id);\n  }, []);\n\n  console.log("Rendering Blog component");\n\n  return (\n    <div>\n      <div>{localTime}</div>\n      <button onClick={getLatestPosts}>Get Latest Post</button>\n      //highlight-next-line\n      <LatestPost signedIn={signedIn} post={sortedPosts[0]} />\n      <UserPostsIndex signedIn={signedIn} />\n    </div>\n  );\n};\n\nexport default Blog;\n')),(0,o.kt)("p",null,"We can see that the first item from a sorted array is then passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"<LatestPost />")," component along with ",(0,o.kt)("inlineCode",{parentName:"p"},"signedIn"),"."),(0,o.kt)("p",null,"Then coming to ",(0,o.kt)("inlineCode",{parentName:"p"},"<LatestPost />"),", it nests the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Post />")," component, which we are going to memoize with ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo()"),". Let's quickly run through ",(0,o.kt)("inlineCode",{parentName:"p"},"<LatestPost />")," in the repository to see what it does."),(0,o.kt)("p",null,"We can see that ",(0,o.kt)("inlineCode",{parentName:"p"},"<LatestPost />")," changes its local state of ",(0,o.kt)("inlineCode",{parentName:"p"},"likesCount")," every 3 seconds in the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect()")," hook:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/LatestPost.jsx"',title:'"src/components/LatestPost.jsx"'},'import React, { useEffect, useState } from "react";\nimport Post from "./Post";\n\nconst LatestPost = ({ signedIn, post }) => {\n  const [likesCount, setLikesCount] = useState(null);\n\n  useEffect(() => {\n    const id = setInterval(() => {\n      setLikesCount((likesCount) => likesCount + 1);\n    }, 3000);\n\n    return () => clearInterval(id);\n  }, []);\n\n  console.log("Rendering LatestPost component");\n\n  return (\n    <div>\n      {post ? (\n        <>\n        //highlight-next-line\n          <Post signedIn={signedIn} post={post} />\n          {likesCount && (\n            <div className="my-1 p-1">\n              <span>{likesCount} Likes</span>\n            </div>\n          )}\n        </>\n      ) : (\n        <p>Click on Get Latest Post button</p>\n      )}\n    </div>\n  );\n};\n\nexport default LatestPost;\n\n')),(0,o.kt)("p",null,"Because of this, ",(0,o.kt)("inlineCode",{parentName:"p"},"<LatestPost />")," should re-render every 3 seconds. So should ",(0,o.kt)("inlineCode",{parentName:"p"},"<Post />")," as a consequence of being a child of ",(0,o.kt)("inlineCode",{parentName:"p"},"<LatestPost />"),":"),(0,o.kt)("p",null,"Let's now focus on ",(0,o.kt)("inlineCode",{parentName:"p"},"<Post />"),". It receives ",(0,o.kt)("inlineCode",{parentName:"p"},"signedIn")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"post")," as props and displays the content of ",(0,o.kt)("inlineCode",{parentName:"p"},"post"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/Post.jsx"',title:'"src/components/Post.jsx"'},'import React from \'react\';\n\nconst Post = ({ signedIn, post }) => {\n\nconsole.log(\'Rendering Post component\');\n\n  return (\n    <div className="">\n      {\n        post && (\n        <div className="post p-1">\n          <h1 className="heading-sm py-1">{post.title}</h1>\n          <p>{post.body}</p>\n        </div>\n        )\n      }\n    </div>\n  );\n};\n\nexport default Post;\n')),(0,o.kt)("p",null,"As you can see ",(0,o.kt)("inlineCode",{parentName:"p"},"<Post />")," does not depend on ",(0,o.kt)("inlineCode",{parentName:"p"},"likesCount")," but is re-rendered by the latter's change via ",(0,o.kt)("inlineCode",{parentName:"p"},"<LatestPost />"),". We can see this in the console."),(0,o.kt)("p",null,"If we check our Chrome's console we have ",(0,o.kt)("inlineCode",{parentName:"p"},"<Post />")," rendering again and again following an interval:"),(0,o.kt)("img",{style:{alignSelf:"center",width:"400px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-13-react-memo/memo1.png",alt:"memo1"}),(0,o.kt)("br",null),(0,o.kt)("p",null,"Notice, rendering ",(0,o.kt)("inlineCode",{parentName:"p"},"<Post />")," is accompanied by ",(0,o.kt)("inlineCode",{parentName:"p"},"<LatestPost />"),", so it is consistent that ",(0,o.kt)("inlineCode",{parentName:"p"},"<Post />"),"'s re-renders are happening due to ",(0,o.kt)("inlineCode",{parentName:"p"},"likesCount")," state changes in ",(0,o.kt)("inlineCode",{parentName:"p"},"<LatestPost />"),"."),(0,o.kt)("p",null," They are coming at ",(0,o.kt)("inlineCode",{parentName:"p"},"3000ms")," intervals from ",(0,o.kt)("inlineCode",{parentName:"p"},"<LatestPost />"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect()")," hook."),(0,o.kt)("p",null,"All these re-renders are futile for ",(0,o.kt)("inlineCode",{parentName:"p"},"<Post />")," and costly for the app."),(0,o.kt)("p",null,"Now, if we memoize ",(0,o.kt)("inlineCode",{parentName:"p"},"<Post />")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo()"),", the re-renders should stop. "),(0,o.kt)("p",null,"So, in ",(0,o.kt)("inlineCode",{parentName:"p"},"<Post />"),", let's the component export with the highlighted code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/Post.jsx"',title:'"src/components/Post.jsx"'},"const Post = ({ signedIn, post }) => {\n\nconsole.log('Rendering Post component');\n\n  return ( ... );\n};\n\n//highlight-next-line\nexport default React.memo(Post);\n")),(0,o.kt)("p",null,"Looking at the console, we can see that ",(0,o.kt)("inlineCode",{parentName:"p"},"Post")," is no longer re-rendered at 3s intervals:"),(0,o.kt)("img",{style:{alignSelf:"center",width:"400px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-13-react-memo/memo2.png",alt:"memo2"}),(0,o.kt)("br",null),(0,o.kt)("p",null,"It is clear that memoizing ",(0,o.kt)("inlineCode",{parentName:"p"},"<Post />")," reduces the number of re-renders. In a realtime app, this does huge a favor because re-renders due to frequent likes coming in turns out to be very costly for the app's performance."),(0,o.kt)("h2",{id:"memoizing-props"},"Memoizing Props"),(0,o.kt)("p",null,"We can see that ",(0,o.kt)("inlineCode",{parentName:"p"},"<Post />")," receives ",(0,o.kt)("inlineCode",{parentName:"p"},"signedIn")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"post")," props."),(0,o.kt)("p",null," Now, unlike with ",(0,o.kt)("inlineCode",{parentName:"p"},"likesCount"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<Post />")," ",(0,o.kt)("strong",{parentName:"p"},"depends on")," ",(0,o.kt)("inlineCode",{parentName:"p"},"signIn")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"post"),". And ",(0,o.kt)("strong",{parentName:"p"},"React memo")," caches these props and checks for incoming changes in them. Incoming changes to them triggers a re-render. So, altering any of ",(0,o.kt)("inlineCode",{parentName:"p"},"signedIn")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"post")," re-renders ",(0,o.kt)("inlineCode",{parentName:"p"},"Post"),"."),(0,o.kt)("p",null,"If you look at ",(0,o.kt)("inlineCode",{parentName:"p"},"<App />"),", we see that ",(0,o.kt)("inlineCode",{parentName:"p"},"signedIn")," originated from there and gets relayed via ",(0,o.kt)("inlineCode",{parentName:"p"},"<Blog />")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<LatestPost />")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"<Post />")," as props. We have a button in the navbar that toggles the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"signedIn"),"."),(0,o.kt)("p",null,"Let's try toggling its value to see the effect on memoized ",(0,o.kt)("inlineCode",{parentName:"p"},"<Post />"),":"),(0,o.kt)("p",null,"Add the following console log in ",(0,o.kt)("inlineCode",{parentName:"p"},"<Post />")," in order to log the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"signedIn")," to the console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"//highlight-next-line\nconsole.log(signedIn);\n")),(0,o.kt)("p",null,"When we click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Sign Out")," button in the navbar, we can see in the console that ",(0,o.kt)("inlineCode",{parentName:"p"},"<Post />")," re-renders after ",(0,o.kt)("inlineCode",{parentName:"p"},"<LatestPost />"),":"),(0,o.kt)("img",{width:"400px",src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-13-react-memo/memo3.png",style:{alignSelf:"center"},alt:"memo3"}),(0,o.kt)("br",null),(0,o.kt)("p",null,"This is because ",(0,o.kt)("strong",{parentName:"p"},"React memo"),"  caches the props passed to the component and checks for incoming changes. Do notice the Boolean value of ",(0,o.kt)("inlineCode",{parentName:"p"},"signedIn")," printed to the console. A change in ",(0,o.kt)("inlineCode",{parentName:"p"},"signedIn")," 's state renews the memoization and a re-render of the component is triggered."),(0,o.kt)("p",null,"This is actually what we want. Because we don't want ",(0,o.kt)("inlineCode",{parentName:"p"},"<Post />")," to re-render when we don't need it to, and we want to re-render it when we need it to."),(0,o.kt)("p",null,"If value of ",(0,o.kt)("inlineCode",{parentName:"p"},"signedIn")," never changed, we know ",(0,o.kt)("inlineCode",{parentName:"p"},"<Post />")," will never be re-rendered because of ",(0,o.kt)("inlineCode",{parentName:"p"},"signedIn"),". In that case, caching ",(0,o.kt)("inlineCode",{parentName:"p"},"signedIn")," doesn't do us any favor."),(0,o.kt)("p",null,"In our example, had we resorted to ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo()")," solely to retain the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"signedIn")," and ",(0,o.kt)("strong",{parentName:"p"},"not")," to prevent re-renders due to changes in ",(0,o.kt)("inlineCode",{parentName:"p"},"likesCount")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"post"),", we would not get much performance benefit. Instead, we would be bringing the comparison function into the scene for no reason, which adds to the cost. So it is not recommended to memoize a component if its prop values don't change often."),(0,o.kt)("p",null,"It is therefore important to figure out the performance gains by measuring and analyzing runtime performance using browser utilities like Chrome DevTools."),(0,o.kt)("h2",{id:"comparing-prop-values"},"Comparing Prop Values"),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"React memo")," checks for changes between the previous and current values for a given prop passed to the component. The default function carries out a shallow comparison on each passed in prop. It checks for equality of incoming values with the existing ones."),(0,o.kt)("p",null," In our ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo(Post)")," memo, the current states of ",(0,o.kt)("inlineCode",{parentName:"p"},"signedIn")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"post")," are checked for equality to their incoming states. If both values for each prop are equal, the memoized value is retained and re-render prevented. If they are not equal, the new value is cached and ",(0,o.kt)("inlineCode",{parentName:"p"},"<Post />")," re-renders."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Custom Comparators")),(0,o.kt)("p",null," It is also possible to customize the comparison by passing in a comparator function as a second argument:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"React.memo(Post, customComparator);\n")),(0,o.kt)("p",null,"We can specify dependencies for ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo()")," and choose to compare only the props we want to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/Post.jsx"',title:'"src/components/Post.jsx"'},'import React from "react";\n\nconst Post = ({ signedIn, post }) => {\n  console.log("Rendering Post component");\n\n  return ( ... );\n};\n\n//highlight-start\nconst customComparator = (prevProps, nextProps) => {\n  return nextProps.post === prevProps.post;\n};\n//highlight-end\n\n//highlight-start\nexport default React.memo(Post, customComparator);\n//highlight-end\n')),(0,o.kt)("p",null,"Here, we are omitting ",(0,o.kt)("inlineCode",{parentName:"p"},"signedIn")," from being compared by comparing only ",(0,o.kt)("inlineCode",{parentName:"p"},"post")," 's values. Now, if we click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Sign Out")," button, ",(0,o.kt)("inlineCode",{parentName:"p"},"Post")," is not being re-rendered:"),(0,o.kt)("img",{style:{alignSelf:"center",width:"400px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-13-react-memo/memo4.png",alt:"memo4"}),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"customComparator")," checks for equality of incoming values of only ",(0,o.kt)("inlineCode",{parentName:"p"},"post")," with its current value and returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if they are equal. Memoization will renew if the incoming value of'post` is unequal to its cached value."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"In this post, we found out that ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo()")," is very useful in preventing unnecessary, frequent re-renders of a component due to changes in states that it does not depend on. A good example involves a component that accepts props whose values change frequently and/or on demand. We can also choose to specify only the props we want in a custom comparator function."),(0,o.kt)("p",null,"In the next article, we will turn our attention back to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Blog />")," component and memoize a sorting function with ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo()")," hook."),(0,o.kt)("br",null),(0,o.kt)("div",null,(0,o.kt)("a",{href:"https://discord.gg/refine"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(d,{path:"blog-react-memoization-memo",mdxType:"CodeSandboxExample"}))}g.isMDXComponent=!0}}]);