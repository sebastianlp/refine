"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80338],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>p});n(67294);var a=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"Understanding the React useRef Hook",description:"We will explain the differences between useRef and React ref",slug:"react-useref-hook-and-ref",authors:"joel_adewole",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-26-react-useref/social.png",hide_table_of_contents:!1},l=void 0,c={permalink:"/blog/react-useref-hook-and-ref",source:"@site/blog/2022-10-26-react-useref.md",title:"Understanding the React useRef Hook",description:"We will explain the differences between useRef and React ref",date:"2022-10-26T00:00:00.000Z",formattedDate:"October 26, 2022",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:8.04,hasTruncateMarker:!1,authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],frontMatter:{title:"Understanding the React useRef Hook",description:"We will explain the differences between useRef and React ref",slug:"react-useref-hook-and-ref",authors:"joel_adewole",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-26-react-useref/social.png",hide_table_of_contents:!1},prevItem:{title:"How to use Material UI Select in React",permalink:"/blog/material-ui-select-component"},nextItem:{title:"How to Use JavaScript Array some",permalink:"/blog/javascript-some-method"},relatedPosts:[{title:"Creating a React search bar and content filtering components",description:"Article about how to create Search bar and filter component in React",permalink:"/blog/react-search-bar-and-filtering",formattedDate:"August 26, 2022",authors:[{name:"Madars Bi\u0161s",title:"Software Developer",url:"https://github.com/madzadev",imageURL:"https://github.com/madzadev.png",key:"madars_biss"}],readingTime:13.765,date:"2022-08-26T00:00:00.000Z"},{title:"How to Create Full Stack React/Next.JS Web App in Few Hour",description:"In this article, we will learn how we can create a full-featured customizable Web / B2B application with **refine** in just a few hours.",permalink:"/blog/create-full-stack-app-with-refine",formattedDate:"April 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:8.075,date:"2022-04-29T00:00:00.000Z"},{title:"How to Import CSV File with React",description:"In this guide, I will show you how to import CSV files using React and JavaScript.",permalink:"/blog/how-to-import-csv",formattedDate:"January 18, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:4.365,date:"2022-01-18T00:00:00.000Z"}],authorPosts:[{title:"React 18 Upgrade Guide and New Features",description:"React 18 was released! Are you looking to upgrade to React 18?  Learn about the new features and changes in this comprehensive guide.",permalink:"/blog/react-18-upgrade-guide",formattedDate:"September 9, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:7.93,date:"2022-09-09T00:00:00.000Z"},{title:"A Quick Start Guide to React Suspense",description:"We will discuss how React Suspense works and common use cases",permalink:"/blog/react-suspense-guide",formattedDate:"September 23, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:4.55,date:"2022-09-23T00:00:00.000Z"},{title:"Neumorphism with CSS - A new design trend",description:"Overview and examples for Neumorphic CSS implementations.",permalink:"/blog/neumorphic-css",formattedDate:"August 20, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:7.4,date:"2022-08-20T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"What is useRef?",id:"what-is-useref",level:2},{value:"Using Ref to Access DOM Elements",id:"using-ref-to-access-dom-elements",level:2},{value:"Difference between Ref and useRef",id:"difference-between-ref-and-useref",level:2},{value:"Using Ref and useRef in an Application",id:"using-ref-and-useref-in-an-application",level:2},{value:"Use-cases of Ref and useRef",id:"use-cases-of-ref-and-useref",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:p};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Among the various JavaScript libraries and frameworks, React is recognized for its developer friendliness and support."),(0,a.kt)("p",null,"Most developers find React very comfortable and scalable because of its provision of hooks. Hooks are built-in APIs that come with React and allow developers to interact with React state and lifecycle features in React. Hooks do not work inside classes, so they can only be used inside functional components. Developers can also decide to create custom hooks."),(0,a.kt)("p",null,"React allows for developer discretion, and more so than most UI libraries, it enables you to rethink the standard approach to designing UI components, such as by creating views using React and JSX's abstraction mechanism rather than the typical DOM specification."),(0,a.kt)("p",null,"In this article, we will discuss the ",(0,a.kt)("strong",{parentName:"p"},"React useRef")," hook, using ref to access DOM and the ",(0,a.kt)("strong",{parentName:"p"},"differences between ref and useRef"),"."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#what-is-useref"},"What is useRef?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#using-ref-to-access-dom-elements"},"Using Ref to Access DOM Elements")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#difference-between-ref-and-useref"},"Difference between Ref and useRef")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#using-ref-and-useref-in-an-application"},"Using Ref and useRef in an Application")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#use-cases-of-ref-and-useref"},"Use-cases of Ref and useRef"))),(0,a.kt)("h2",{id:"what-is-useref"},"What is useRef?"),(0,a.kt)("p",null,"One of the various hooks included in React is the useRef hook; it is used to reference an object inside a functional component and preserves the referenced object's state between re-renders. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"useRef"),' has a property called "current" used to retrieve the value of the referenced object at any time while also accepting an initial value as an argument. You can change the value of a referenced object by updating the ',(0,a.kt)("inlineCode",{parentName:"p"},"current")," value."),(0,a.kt)("p",null,"Here is how to  create a referenced object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useRef } from \u2018react\u2019\n\nconst myComponent = () => {\n         const refObj = useRef(initialValue)\n\n    return (\n    //\u2026\n    )\n}\n")),(0,a.kt)("p",null,"In the snippet above, we have an object ",(0,a.kt)("inlineCode",{parentName:"p"},"refObj")," we want to reference in an application, to access the value or update the value, we can call the ",(0,a.kt)("inlineCode",{parentName:"p"},"current")," property like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// inside a function\nconst handleRefUpdate = () => {\n    // accessing the referenced object\u2019s value\n    const value = refObj.current\n\n    // updating the referenced object\u2019s value\n   refObj.current = newValue\n}\n")),(0,a.kt)("p",null,"You should take note that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The value of the referenced object remains the same between re-renders."),(0,a.kt)("li",{parentName:"ul"},"Updating the value of the referenced object doesn\u2019t trigger a re-render.")),(0,a.kt)("h2",{id:"using-ref-to-access-dom-elements"},"Using Ref to Access DOM Elements"),(0,a.kt)("p",null,"Having in mind that DOM elements are also objects, we can reference them using useRef. But now, we need to make use of another player called ",(0,a.kt)("inlineCode",{parentName:"p"},"ref"),".",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," is an HTML attribute that assigns a referenced object to a DOM element. Let\u2019s see how this works:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import {useRef} from \u2018react\u2019\n\nconst myComponent = () => {\n         const elementRef = useRef()\n\n    return (\n        <input ref={elementRef} type=\u201dtext\u201d />\n    )\n}\n")),(0,a.kt)("p",null,"In the code snippet above, we created a new reference object, ",(0,a.kt)("inlineCode",{parentName:"p"},"elementRef")," and assigned it to an input tag using the ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," attribute. We can access the value of the input tag and update the value like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const handleInput = () => {\n    //accessing the input element value\n   const textValue = elementRef.current.value\n\n\n   // update the input element value\n   elementRef.current.value = \u201cHello World\u201d\n}\n")),(0,a.kt)("p",null,"In the code snippet above, we created a function that gets the current value of the input element and assigned it to ",(0,a.kt)("inlineCode",{parentName:"p"},"textValue"),". We also updated the value of the input element to \u201cHello World\u201d."),(0,a.kt)("h2",{id:"difference-between-ref-and-useref"},"Difference between Ref and useRef"),(0,a.kt)("p",null,"As discussed in the previous sections of this article, we can understand clearly that useRef is used to create a reference object, while ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," is used to access and assign DOM nodes or react components inside the render method to a reference object."),(0,a.kt)("p",null,"Also, a ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," can be created using the useRef hook or createRef function, which can\u2019t be done the other way."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"useRef")," can be used to reference any type of object, ",(0,a.kt)("strong",{parentName:"p"},"React ref")," is simply a DOM attribute used to reference DOM elements."),(0,a.kt)("h2",{id:"using-ref-and-useref-in-an-application"},"Using Ref and useRef in an Application"),(0,a.kt)("p",null,"Since we understand how ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useRef")," work and their differences, let\u2019s look at how we can use them in an actual application.\nFor instance, we want to implement a click-away event listener for a pop-up. We can make use of ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," to access the DOM element of the pop-up and listen when a click is made outside the pop-up."),(0,a.kt)("p",null,"In your react application environment, you can create a folder called \u201chooks\u201d, this folder will contain custom hooks."),(0,a.kt)("p",null,"Inside the folder create a new file ",(0,a.kt)("inlineCode",{parentName:"p"},"useClickAway"),", and enter the following code into the file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useEffect} from \'react\'\n \nexport default function useClickAway(ref: any, callback: Function) {\n   useEffect(() => {\n     function handleClickAway(event: any) {\n       if (ref.current && !ref.current.contains(event.target)) {\n         callback();\n       }\n     }\n document.addEventListener("mousedown", handleClickAway);\n     return () => {\n       document.removeEventListener("mousedown", handleClickAway);\n     };\n   }, [ref]);\n };\n')),(0,a.kt)("p",null,"In the above code snippet, we created a custom hook that accepted a reference object as ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," and a callback function, then we performed an event listener to check when the mouse is clicked, if the click is not on the current ref then we trigger the callback function."),(0,a.kt)("p",null,"Here is an implementation of the custom hook on a product page:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useRef } from "react";\n//.. Other importations\nexport default function Storefront() {\n  const targetElement = useRef(null)\n  const alertClickAway = () => {\n   alert("Clicked outside product 1")\n }\n useClickAway(targetElement, alertClickAway)\n //.. Other functions\n return (\n       {//.. Other parts of the application}\n       <div className="gallery">\n         <div className="col" ref={targetElement}>\n           <img src="https://i.postimg.cc/G207QNV7/image.png" alt="Product 1" />\n           <p>iWatch Series 6</p>\n           <div className="btns">\n             <button>\n               <img src="https://api.iconify.design/flat-color-icons:like.svg?color=%23888888" alt="like" />\n             </button>\n             <button>\n               <img \n                  src="https://api.iconify.design/icon-park:buy.svg?color=%23888888"\n                  alt="add" />\n            </button>\n           </div>\n         </div>\n )\n}\n')),(0,a.kt)("p",null,"In the code snippet above, we have a storefront component where we imported the custom hook ",(0,a.kt)("inlineCode",{parentName:"p"},"useClickAway"),", we then created a new reference object ",(0,a.kt)("inlineCode",{parentName:"p"},"targetElement")," and assigned it to a div inside a gallery of products, and then we created a callback function to alert whenever the mouse is clicked outside the product item with ref ",(0,a.kt)("inlineCode",{parentName:"p"},"targetElement"),"."),(0,a.kt)("p",null,"Now let\u2019s see the output:"),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-26-react-useref/useref.gif",alt:"useRef"}),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"use-cases-of-ref-and-useref"},"Use-cases of Ref and useRef"),(0,a.kt)("p",null,"You now have enough understanding of what ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useRef")," are and how they work. You may now be contemplating when to use and when to avoid using references. Both ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useRef")," are quite easy to misuse, and doing so can be highly expensive."),(0,a.kt)("p",null,"The following are some uses for references:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Interacting with input elements: Accessing input elements and performing functionality like focus, change tracking or auto-completion are made possible by using refs. "),(0,a.kt)("li",{parentName:"ul"},"Interacting with third-party UI libraries: Ref can be used to interact with elements created by third-party UI libraries that might be tricky to access using standard DOM methods. For instance, if you use a third-party library to generate sliders, you can use ref to access the sliders' DOM element without being informed of the structure of the slider library's source code. "),(0,a.kt)("li",{parentName:"ul"},"Media playback: You may also access media assets like images, audio, or videos using refs and interact with how they are rendered. For instance, auto-playing videos or lazy loading of images when an element enters the viewport."),(0,a.kt)("li",{parentName:"ul"},"Complex animation triggering: Traditionally, CSS keyframes or a timeout are used to determine when to initiate animations. In some situations, which can be more complicated, you can use refs to observe DOM elements and determine when to start an animation."),(0,a.kt)("li",{parentName:"ul"},"In some situations, such as the following, you shouldn't use references:"),(0,a.kt)("li",{parentName:"ul"},"Declarative cases: Even in situations with simple solutions where using refs works, there is no need to write more expensive code to do the same task. For instance, using conditional rendering to hide or show DOM elements instead of refs. "),(0,a.kt)("li",{parentName:"ul"},"Elements affecting state: Occasionally, the concept of using refs is so intriguing that you overlook the impact of modifications made to an element on the application's lifecycle. You should have in mind that changes to refs do not cause re-rendering and that refs maintain the value of their objects across renderings. Therefore, it is advisable to avoid using refs in situations when state changes need to trigger a re-render."),(0,a.kt)("li",{parentName:"ul"},"Accessing functional components: DOM elements, which should not be mistaken for functional components, can be referenced using the Ref attribute. Because, unlike class components or DOM elements, functional components do not have instances. For example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import {useRef} from \u2018react\u2019\n\nconst FunctionalComponent = () => {\n    return (\n        <h1>Hello World<>\n)\n}\n\nconst myComponent = () => {\n         const elementRef = useRef()\n\n    return (\n        <FunctionalComponent ref={elementRef} />\n    )\n}\n")),(0,a.kt)("p",null,"Because the component ",(0,a.kt)("inlineCode",{parentName:"p"},"FunctionalComponent")," does not have instances, the ref in the code snippet above will not work. Instead, we can convert the ",(0,a.kt)("inlineCode",{parentName:"p"},"FunctionalComponent")," into a class component or use ",(0,a.kt)("inlineCode",{parentName:"p"},"forwardRef")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"FunctionalComponent")," component."),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://discord.gg/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In this article, we discussed how to create references using the useRef hook, which takes an initial value and modifies the value of the reference object's 'current' property to update its value. "),(0,a.kt)("p",null,"We saw how to use the 'current' value with 'ref' to access DOM elements and interact with their properties. "),(0,a.kt)("p",null,'We go over how to create a custom hook that accepts the reference DOM element and a callback function to use "ref" and "useRef" in the application to observe click events on DOM elements. '),(0,a.kt)("p",null,'Additionally, we talked about the use cases for "ref" and "useRef," when to use them and when not to.'),(0,a.kt)("p",null,"Having seen how ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useRef")," can be used to keep track of and update mutable values without re-rendering the parent components, you can explore more about them or learn more, by checking the React official documentation about ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"Refs")," and ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#useref"},"useRefs")," and even try out other React hooks."))}f.isMDXComponent=!0}}]);