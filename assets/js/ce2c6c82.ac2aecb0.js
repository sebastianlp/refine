"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9035],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"Next.js vs React - A Beginner's Guide",description:"We will be looking at the core differences between React and Next.js, using rendering, routing, and configuration as our basis for comparison.",slug:"next-js-vs-react",authors:"marvel_ken",tags:["react","nextjs"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-10-nextjs-vs-react/social.png",hide_table_of_contents:!1},l=void 0,c={permalink:"/blog/next-js-vs-react",source:"@site/blog/2023-10-10-nextjs-vs-react.md",title:"Next.js vs React - A Beginner's Guide",description:"We will be looking at the core differences between React and Next.js, using rendering, routing, and configuration as our basis for comparison.",date:"2023-10-10T00:00:00.000Z",formattedDate:"October 10, 2023",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"nextjs",permalink:"/blog/tags/nextjs"}],readingTime:13.87,hasTruncateMarker:!1,authors:[{name:"Marvel Ken",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"marvel_ken"}],frontMatter:{title:"Next.js vs React - A Beginner's Guide",description:"We will be looking at the core differences between React and Next.js, using rendering, routing, and configuration as our basis for comparison.",slug:"next-js-vs-react",authors:"marvel_ken",tags:["react","nextjs"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-10-nextjs-vs-react/social.png",hide_table_of_contents:!1},prevItem:{title:"A complete guide to the React createPortal API",permalink:"/blog/react-createportal"},nextItem:{title:"Using React Hot Toast as a Notification Provider for CRUD apps",permalink:"/blog/react-hot-toast"},relatedPosts:[{title:"Redirect in React Router V6 with useNavigate hook",description:"We'll discover how to perform a redirect using useNavigate in React Router V6",permalink:"/blog/usenavigate-react-router-redirect",formattedDate:"September 19, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:5.22,date:"2022-09-19T00:00:00.000Z"},{title:"A complete guide to the React createPortal API",description:"We'll explore the React createPortal API, its advantages, disadvantages, and possible use cases.",permalink:"/blog/react-createportal",formattedDate:"October 12, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:6.175,date:"2023-10-12T00:00:00.000Z"},{title:"How to use Material UI Select in React",description:"We'll discover the Material UI select component with examples",permalink:"/blog/material-ui-select-component",formattedDate:"October 30, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.15,date:"2022-10-30T00:00:00.000Z"}],authorPosts:[{title:"Beginner's Guide to React Query",description:"We'll be looking at the basics of React Query, how to use it, and why you should use it.",permalink:"/blog/react-query-guide",formattedDate:"July 4, 2023",authors:[{name:"Marvel Ken",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"marvel_ken"}],readingTime:9.71,date:"2023-07-04T00:00:00.000Z"},{title:"Introduction to Mantine UI",description:"Let's explore Mantine UI React Component Library.",permalink:"/blog/mantine-ui-react",formattedDate:"November 11, 2023",authors:[{name:"Marvel Ken",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"marvel_ken"}],readingTime:12.8,date:"2023-11-11T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2},{value:"Brief Overview of React.js",id:"brief-overview-of-reactjs",level:2},{value:"Brief Overview of Next.js",id:"brief-overview-of-nextjs",level:2},{value:"Core Differences between Next.js and React.js",id:"core-differences-between-nextjs-and-reactjs",level:2},{value:"Server-side Rendering in Next.js vs. Client-side Rendering in React.js",id:"server-side-rendering-in-nextjs-vs-client-side-rendering-in-reactjs",level:3},{value:"Client-side Rendering",id:"client-side-rendering",level:4},{value:"Server-Side Rendering",id:"server-side-rendering",level:4},{value:"The question arises: which method is the better option?",id:"the-question-arises-which-method-is-the-better-option",level:2},{value:"Static Site Generation",id:"static-site-generation",level:2},{value:"React: The Foundation",id:"react-the-foundation",level:3},{value:"Next.js: Enhanced SSG Capabilities",id:"nextjs-enhanced-ssg-capabilities",level:3},{value:"Routing",id:"routing",level:2},{value:"Next.js: File-based Routing",id:"nextjs-file-based-routing",level:3},{value:"Basic Page Routes",id:"basic-page-routes",level:3},{value:"Dynamic Routes",id:"dynamic-routes",level:3},{value:"Navigation with the<strong> `</strong>Link<strong>` </strong>Component",id:"navigation-with-the-link-component",level:2},{value:"React&#39;s Route Approach",id:"reacts-route-approach",level:2},{value:"The <code>react-router-dom</code> Library",id:"the-react-router-dom-library",level:3},{value:"React Dynamic Routing",id:"react-dynamic-routing",level:2},{value:"Next.js Configuration",id:"nextjs-configuration",level:2},{value:"React Configuration",id:"react-configuration",level:2},{value:"Starting Up Both Projects",id:"starting-up-both-projects",level:2},{value:"For React",id:"for-react",level:3},{value:"For Next.js",id:"for-nextjs",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:u};function h(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Newbies often think there's some tech rivalry when they hear about ",(0,a.kt)("a",{parentName:"p",href:"https://react.dev/"},"React")," and ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"Next.js"),". But in reality, React and Next.js share a parent-child bond. Just like in families where children sometimes outshine their parents in certain areas, Next.js brings its strengths to the table, But it's not about one being better than the other. The real questions are: Which one is simpler for me? Which feels safer? Do I have choices, or do I need to be a certain kind of developer to use them? Understanding this relationship helps make informed decisions about which to stick within your next project."),(0,a.kt)("p",null,"The primary goal of this comparison is to understand the core differences between Next.js and React.js. This involves diving into the architecture, configuration, and use cases they are best suited for. By understanding these fundamental differences, developers can gain deep insights into how each can be leveraged for different projects."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#core-differences-between-nextjs-and-reactjs"},"Core Differences between Next.js and React.js"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#server-side-rendering-in-nextjs-vs-client-side-rendering-in-reactjs"},"Server-side Rendering in Next.js vs. Client-side Rendering in React.js"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#client-side-rendering"},"Client-side Rendering")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#server-side-rendering"},"Server-Side Rendering")))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#the-question-arises-which-method-is-the-better-option"},"The question arises: which method is the better option?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#static-site-generation"},"Static Site Generation"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#react-the-foundation"},"React: The Foundation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#nextjs-enhanced-ssg-capabilities"},"Next.js: Enhanced SSG Capabilities")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#routing"},"Routing"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#nextjs-file-based-routing"},"Next.js: File-based Routing")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#basic-page-routes"},"Basic Page Routes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#dynamic-routes"},"Dynamic Routes")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#navigation-with-the-link-component"},"Navigation with the","*","*"," ",(0,a.kt)("inlineCode",{parentName:"a"},"**Link**")," ","*","*","Component")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#reacts-route-approach"},"React's Route Approach"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#the-react-router-dom-library"},"The ",(0,a.kt)("inlineCode",{parentName:"a"},"react-router-dom")," Library")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#react-dynamic-routing"},"React Dynamic Routing")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#nextjs-configuration"},"Next.js Configuration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#react-configuration"},"React Configuration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#starting-up-both-projects"},"Starting Up Both Projects"))),(0,a.kt)("h2",{id:"brief-overview-of-reactjs"},"Brief Overview of React.js"),(0,a.kt)("p",null,"React.js, often called React, is an open-source JavaScript library developed by Facebook for building user interfaces, particularly for single-page applications. Its core strength lies in its component-based architecture, allowing developers to create reusable pieces of code that dictate how elements should appear on the screen."),(0,a.kt)("p",null,"One of React's standout features is the ",(0,a.kt)("a",{parentName:"p",href:"https://legacy.reactjs.org/docs/faq-internals.html#:~:text=The%20virtual%20DOM%20(VDOM)%20is,a%20library%20such%20as%20ReactDOM."},"Virtual DOM"),", which intelligently updates only the parts of the page that change, ensuring efficient and speedy rendering. React employs JSX (JavaScript XML) for templating, blending the familiarity of HTML with the power of JavaScript. This unidirectional data flow and integration with various backend technologies make it flexible and manageable."),(0,a.kt)("h2",{id:"brief-overview-of-nextjs"},"Brief Overview of Next.js"),(0,a.kt)("p",null,"One of the distinctive things about Next.js is its versatility to be used in the Front and Backend. If anyone refers to Next.js as a backend framework, they would be as correct as those who refer to it as a frontend framework. The primary reason it is referred to as a backend framework is its ability to render the server side, which we will discuss later in this tutorial."),(0,a.kt)("p",null,"Everything that can be possibly done in React can be effectively carried out in Next.js too, with the added full-stack features."),(0,a.kt)("h2",{id:"core-differences-between-nextjs-and-reactjs"},"Core Differences between Next.js and React.js"),(0,a.kt)("p",null,"In this section, we will be looking at the core differences between React and Next.js, using rendering,"),(0,a.kt)("h3",{id:"server-side-rendering-in-nextjs-vs-client-side-rendering-in-reactjs"},"Server-side Rendering in Next.js vs. Client-side Rendering in React.js"),(0,a.kt)("p",null,"There are many talks about Server-side rendering(SSR) and client-side rendering. What exactly are these, and how do they differentiate Next.js and React.js?"),(0,a.kt)("h4",{id:"client-side-rendering"},"Client-side Rendering"),(0,a.kt)("p",null,"It's important to note that this is a relatively new approach to rendering site content, and the emergence of React.js made this famous as it was incorporated into their development."),(0,a.kt)("p",null,"Client-side rendering is the technique of dynamically generating content in the browser using JavaScript. Instead of receiving a fully populated HTML document from the server, the browser obtains a skeletal HTML structure accompanied by a JavaScript file. This file then takes on the responsibility of rendering the remainder of the site's content directly within the browser. With CSR, the user would experience a little delay as the browser needs to load the javascript first."),(0,a.kt)("h4",{id:"server-side-rendering"},"Server-Side Rendering"),(0,a.kt)("p",null,"Since the emergence of the browser, the known method for getting your HTML onto a screen was by using server-side rendering."),(0,a.kt)("p",null,"Server-side rendering (SSR) is a process in which a website's content is generated on the web server instead of the browser. In this approach, the server creates the initial HTML representation of the application and sends it directly to the client or browser. This takes a few milliseconds with a good internet connection to do."),(0,a.kt)("p",null,"When Facebook first launched in 2004, web development was primarily server-centric. Websites, including the initial version of Facebook, relied heavily on Server-Side Rendering (SSR). This means that every time a user performs an action, like adding a friend or posting a status, the server generates a new HTML page and sends it back to the browser. This often resulted in full-page reloads."),(0,a.kt)("p",null,"As web development evolved, the concept of Client-Side Rendering (CSR) gained traction. Instead of relying on the server to render every change, CSR leverages the power of the user's browser to dynamically update content."),(0,a.kt)("p",null,"Imagine the early Facebook feed. With SSR, every time you liked a post or added a comment, the entire page might need to refresh to reflect that change. With CSR, only the specific section of the page that changed (e.g., the like count or the comments section) would update without a full page reload. This provides a smoother and faster user experience."),(0,a.kt)("h2",{id:"the-question-arises-which-method-is-the-better-option"},"The question arises: which method is the better option?"),(0,a.kt)("p",null,"It all depends on what exactly is to be done, but the idea of Next.JS being client-side rendered is not all that. Next, versatility enables it to perform on any level, it can be used on the\nServer-side in two ways:"),(0,a.kt)("p",null,"By using useEffect():"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState, useEffect } from "react";\n\nexport function Page() {\n  const [data, setData] = useState(null);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    const fetchData = async () => {\n      try {\n        const response = await fetch("https://api.example.com/data");\n        if (!response.ok) {\n          throw new Error(`HTTP error! status: ${response.status}`);\n        }\n        const result = await response.json();\n        setData(result);\n      } catch (e) {\n        setError(e);\n        console.error("An error occurred while fetching the data: ", e);\n      }\n    };\n\n    fetchData();\n  }, []);\n\n  if (error) {\n    return <p>Error fetching data: {error.message}</p>;\n  }\n\n  return <p>{data ? `Your data: ${data}` : "Loading..."}</p>;\n}\n')),(0,a.kt)("p",null,"This approach also applies to React applications, as you could choose to use useEffect(), but it's advisable to use a library like it is recommended using a data-fetching library for better performance. Here's a minimum example using ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/blog/react-query-guide/#react-query-and-frameworks"},"React Query")," to fetch data on the client:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useQuery } from "react-query";\n\n// Function to fetch data\nconst fetchData = async () => {\n  const response = await fetch("https://api.example.com/data");\n  if (!response.ok) {\n    throw new Error("Network response was not ok");\n  }\n  return response.json();\n};\n\nfunction App() {\n  // Using the useQuery hook to fetch data\n  const { data, error, isLoading } = useQuery("fetchData", fetchData);\n\n  if (isLoading) {\n    return <p>Loading...</p>;\n  }\n\n  if (error) {\n    return <p>Error: {error.message}</p>;\n  }\n\n  return (\n    <div>\n      <h1>Data from API:</h1>\n      <ul>\n        {data.map((item, index) => (\n          <li key={index}>{item}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,a.kt)("p",null,"The advantage of Next.js js is in the power of options; a developer's gift of choice is essential as an external library would not be needed to perform server-side rendering in Next.js, unlike React.js."),(0,a.kt)("p",null,"To use Server-side Rendering in Next.js, you need to ",(0,a.kt)("inlineCode",{parentName:"p"},"export")," an ",(0,a.kt)("inlineCode",{parentName:"p"},"async")," function called ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),". This function is called by the server for each incoming request."),(0,a.kt)("p",null,"For instance, if your page requires pre-rendering of data that updates regularly (sourced from an external API), you can write a ",(0,a.kt)("inlineCode",{parentName:"p"},"**getServerSideProps**")," function. This function fetches the necessary data and supplies it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"**Page**")," component as illustrated below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'export default function Page({ fetchedData }) {\n  // Use fetchedData for rendering...\n}\n\n// Called on every server-side request\nexport async function getServerSideProps() {\n  // Retrieve data from the external API\n  const response = await fetch("https://.../data");\n\n  if (!response.ok) {\n    throw new Error("Failed to fetch data");\n  }\n\n  const fetchedData = await response.json();\n\n  // Supply data to the page through props\n  return { props: { fetchedData } };\n}\n')),(0,a.kt)("p",null,"Generally, it's important to note, in terms of initial page load times, that a server-rendered application using Next.js could potentially offer faster performance compared to a client-side rendered React application. The difference in performance can vary based on several factors, but the benefits of SSR, especially for SEO and perceived load times, are notable."),(0,a.kt)("h2",{id:"static-site-generation"},"Static Site Generation"),(0,a.kt)("p",null,"Static Site Generation (SSG) has become a popular approach in web development, offering faster initial page loads. Both React and Next.js provide mechanisms for SSG, but they differ in their implementation and capabilities."),(0,a.kt)("h3",{id:"react-the-foundation"},"React: The Foundation"),(0,a.kt)("p",null,"React by default, renders content dynamically in the browser. To achieve SSG with React, developers would often rely on additional tools and configurations. React doesn't natively support SSG. Instead, developers use tools like Create React App in conjunction with other libraries to pre-render content."),(0,a.kt)("h3",{id:"nextjs-enhanced-ssg-capabilities"},"Next.js: Enhanced SSG Capabilities"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props"},"Next.js takes SSG to the next level"),", offering in-built support and an easy developer experience.\nPages in Next.js without any data-fetching methods are automatically pre-rendered as static HTML, optimizing them for performance."),(0,a.kt)("p",null,"Next.js also introduces the ",(0,a.kt)("inlineCode",{parentName:"p"},"getStaticProps")," function, allowing developers to fetch data at build time and generate static pages. This is ideal for content that doesn't change frequently. In development mode, ",(0,a.kt)("inlineCode",{parentName:"p"},"next dev"),", pages are compiled on demand. Whereas, at the production build ",(0,a.kt)("inlineCode",{parentName:"p"},"next build")," pre-renders pages to HTML, optimizing them for deployment."),(0,a.kt)("p",null,"The terminal provides clear logs showing which pages are being statically generated. With ",(0,a.kt)("inlineCode",{parentName:"p"},"**next export**"),", developers can generate a fully static site suitable for hosting on static platforms."),(0,a.kt)("h2",{id:"routing"},"Routing"),(0,a.kt)("p",null,"While React itself doesn't provide built-in routing solutions, Next.js introduces a great approach. In this section, we will understand the comparisons between routing in Next.js and React."),(0,a.kt)("h3",{id:"nextjs-file-based-routing"},"Next.js: File-based Routing"),(0,a.kt)("p",null,"Next.js brings a refreshing take on routing, making it super efficient. Let's see how:"),(0,a.kt)("h3",{id:"basic-page-routes"},"Basic Page Routes"),(0,a.kt)("p",null,"In Next.js, the ",(0,a.kt)("inlineCode",{parentName:"p"},"**pages**")," directory isn't just another folder; it's the heart of your application's routing. The framework successfully transforms the file structure here into routes. This is what the directory looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"    pages\n    |-- OurTeam.tsx  -> /our-team\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/our-team.tsx"',title:'"pages/our-team.tsx"'},"function OurTeam() {\n  return <div>Welcome to the Our Team page!</div>;\n}\n\nexport default OurTeam;\n")),(0,a.kt)("h3",{id:"dynamic-routes"},"Dynamic Routes"),(0,a.kt)("p",null,"For scenarios where static paths aren't needed, Next.js understands that not all routes are static. For example, if you're building an e-commerce site and want to display Members details dynamically, you can use a structure like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"    pages\n    |-- team\n        |-- [memberId].tsx  -> /team/jane-doe, /team/john-doe, etc.\n")),(0,a.kt)("p",null,"This is what the code would look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/team/[memberId].tsx"',title:'"pages/team/[memberId].tsx"'},"function TeamMember({ memberId }) {\n  return <div>Welcome to the profile of {memberId}!</div>;\n}\n\n// Fetching the memberId from the route\nexport async function getServerSideProps(context) {\n  return {\n    props: { memberId: context.params.memberId },\n  };\n}\n\nexport default TeamMember;\n")),(0,a.kt)("h2",{id:"navigation-with-the-link-component"},"Navigation with the",(0,a.kt)("strong",{parentName:"h2"}," `"),"Link",(0,a.kt)("strong",{parentName:"h2"},"` "),"Component"),(0,a.kt)("p",null,"Next.js introduces a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"**Link**")," component. This component pre-fetches data when a user hovers over a link, enhancing the application's performance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import Link from "next/link";\n\nfunction HomePage() {\n  return (\n    <div>\n      Welcome to the Home page!\n      <Link href="/our-team">Visit Our Team</Link>\n    </div>\n  );\n}\n\nexport default HomePage;\n')),(0,a.kt)("h2",{id:"reacts-route-approach"},"React's Route Approach"),(0,a.kt)("p",null,"React is stiff about routing. This flexibility means you can choose your adventure, but it also means you need to set things up yourself."),(0,a.kt)("h3",{id:"the-react-router-dom-library"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"react-router-dom")," Library"),(0,a.kt)("p",null,"The most popular choice for routing in React applications is the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-router-dom"},"react-router-dom")," library. It provides a set of components and hooks to define and manage routes."),(0,a.kt)("p",null,"Routes are defined using the ",(0,a.kt)("inlineCode",{parentName:"p"},"**Route**")," component, and navigation is typically handled by the ",(0,a.kt)("inlineCode",{parentName:"p"},"**Link**")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"**NavLink**")," components."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { BrowserRouter as Router, Route, Link } from "react-router-dom";\n\nfunction App() {\n  return (\n    <Router>\n      <div>\n        <Link to="/our-team">Our Team</Link>\n        <Route path="/our-team" component={OurTeam} />\n      </div>\n    </Router>\n  );\n}\n\nfunction OurTeam() {\n  return <div>Welcome to the Our Team page!</div>;\n}\n')),(0,a.kt)("h2",{id:"react-dynamic-routing"},"React Dynamic Routing"),(0,a.kt)("p",null,"With react-router-dom, dynamic routes are achieved using the ",(0,a.kt)("inlineCode",{parentName:"p"},"**:parameter**")," syntax. For instance, to create a dynamic route for team members, you'd use a path like ",(0,a.kt)("inlineCode",{parentName:"p"},"**/team/:memberId**"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { BrowserRouter as Router, Route, Link } from "react-router-dom";\n\nfunction App() {\n  return (\n    <Router>\n      <div>\n        <Link to="/team/jane-doe">Jane Doe\'s Profile</Link>\n        <Route path="/team/:memberId" component={TeamMember} />\n      </div>\n    </Router>\n  );\n}\n\nfunction TeamMember(props) {\n  return <div>Welcome to the profile of {props.match.params.memberId}!</div>;\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Drawing Comparisons")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Simplicity vs. Flexibility"),": Next.js offers a straightforward, file-based routing system, making it easy for developers to set up routes without additional configuration. React, with ",(0,a.kt)("inlineCode",{parentName:"li"},"**react-router-dom**"),", provides more flexibility but requires manual setup."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Performance"),": Next.js's ",(0,a.kt)("inlineCode",{parentName:"li"},"**Link**")," component enhances performance by pre-fetching pages, a feature not inherent in vanilla React routing."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Learning Curve"),": For beginners, Next.js's intuitive routing can be easier to grasp. Meanwhile, React's routing, while powerful, might have a steeper learning curve due to its nature.")),(0,a.kt)("h2",{id:"nextjs-configuration"},"Next.js Configuration"),(0,a.kt)("p",null,'One of the standout features of Next.js is its "zero-config" approach. While Next.js works great with no configuration, there are times when you might need to customize its behavior. This is where ',(0,a.kt)("inlineCode",{parentName:"p"},"**next.config.js**")," comes into play cause they came prepared. This file, placed at the root of your project, allows you to tweak various aspects of Next.js, from setting up environment variables to customizing Webpack and Babel configurations."),(0,a.kt)("p",null,"Next.js also has built-in support for TypeScript. Simply adding a ",(0,a.kt)("inlineCode",{parentName:"p"},"**tsconfig.json**")," file to your project is enough for Next.js to configure TypeScript for you. At its best, Next.js supports global CSS, module CSS, and Sass out of the box. You can also easily integrate other CSS-in-JS libraries using plugins or custom configurations."),(0,a.kt)("h2",{id:"react-configuration"},"React Configuration"),(0,a.kt)("p",null,'The most common way to set up a new React project is using the Create-React-App. It provides a setup with Webpack, Babel, and a development server. However, it abstracts away the configuration, making it a bit complex to customize without "ejecting" (which exposes all configurations).'),(0,a.kt)("p",null,"If you need to customize the configuration of a CRA project, you can \"eject\" it. This process will generate all the configuration files, giving you full control. However, once ejected, you can't go back, and you'll have to manage updates and configurations manually."),(0,a.kt)("p",null,"React doesn't enforce a specific folder structure. While this offers flexibility, you'll need to decide on a structure and stick to it for consistency."),(0,a.kt)("p",null,"React doesn't have a default way to handle CSS. You can use regular CSS, and CSS modules, or opt for CSS-in-JS solutions like styled-components. Each method might require its configuration and dependencies."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Use Cases and Suitability"),"\nNext.js is an ideal choice for a range of applications, particularly for e-commerce platforms and blogs. Its strength lies in its hybrid rendering capabilities, offering both server-side rendering (SSR) and static site generation (SSG). This ensures fast page loads, which are very important for e-commerce sites and blogs where user experience and immediate visibility directly impact success."),(0,a.kt)("p",null,"On the other hand, React.js, in its core form without frameworks like Next.js, provides a more flexible foundation. It's particularly well-suited for building dynamic single-page applications (SPAs) such as social media platforms. These applications benefit from React's component-based architecture, enabling seamless user interactions without frequent page reloads."),(0,a.kt)("h2",{id:"starting-up-both-projects"},"Starting Up Both Projects"),(0,a.kt)("p",null,"To start up a development area for Next.js and React follow the procedures below:"),(0,a.kt)("h3",{id:"for-react"},"For React"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Installation:")," First, ensure you have Node.js and npm (Node Package Manager) installed. If not, download and install them from ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js official website"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Create a New React App:")," Use the Vite tool to quickly set up a new React project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm create vite@latest\n")),(0,a.kt)("p",null,"When the command begins to run, it will ask for a project name. Enter your project's name and press the enter key."),(0,a.kt)("p",null,"Following that, Vite will ask you to choose a framework. Opt for React.\n",(0,a.kt)("strong",{parentName:"p"},"Navigate to Your App:")," Change your directory to the newly created app:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd react-app-name\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Start the Development Server:")," Run the following command to start the local development server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install && npm start\n")),(0,a.kt)("h3",{id:"for-nextjs"},"For Next.js"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Installation:")," Just like with React, ensure you have Node.js and npm installed."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Create a New Next.js App:")," Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"**create-next-app**")," tool to initiate a new Next.js project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-next-app next-app-name\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Navigate to Your App:")," Change your directory to the newly created app:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd next-app-name\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Start the Development Server:")," Run the following command to start the local development server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")),(0,a.kt)("p",null,"Your Next.js app will now be running on ",(0,a.kt)("inlineCode",{parentName:"p"},"**http://localhost:3000/**"),", just like the React app. If you're running both simultaneously, you might want to change the port for one of them to avoid conflicts."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"We have been able to understand the differences, shining light on strengths and little weaknesses that we may have noticed. To an extent, Next.js as a child came in prepared with unique qualities, which have been discussed, and if I must advise, React shouldn't be used on its own. Despite it being a great library, it's advisable it's utilized through a framework like Next.js"))}h.isMDXComponent=!0}}]);