"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16509],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,d=p["".concat(s,".").concat(h)]||p[h]||f[h]||i;return n?o.createElement(d,r(r({ref:t},c),{},{components:n})):o.createElement(d,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>f});n(67294);var o=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"A Guide to Using the useLayoutEffect Hook in React",description:"We'll explore the useLayoutEffect hook in-depth, how it differs from useEffect and learn how to properly leverage its capabilities to enhance the user experience.",slug:"uselayouteffect-vs-useeffect",authors:"wisdom_ekpotu",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-02-react-uselayouteffect/social.png",hide_table_of_contents:!1},s=void 0,u={permalink:"/blog/uselayouteffect-vs-useeffect",source:"@site/blog/2023-06-02-react-uselayouteffect.md",title:"A Guide to Using the useLayoutEffect Hook in React",description:"We'll explore the useLayoutEffect hook in-depth, how it differs from useEffect and learn how to properly leverage its capabilities to enhance the user experience.",date:"2023-06-02T00:00:00.000Z",formattedDate:"June 2, 2023",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:10.285,hasTruncateMarker:!1,authors:[{name:"Wisdom Ekpotu",title:"Software Engineer",imageURL:"https://github.com/wisdomekpotu.png",key:"wisdom_ekpotu"}],frontMatter:{title:"A Guide to Using the useLayoutEffect Hook in React",description:"We'll explore the useLayoutEffect hook in-depth, how it differs from useEffect and learn how to properly leverage its capabilities to enhance the user experience.",slug:"uselayouteffect-vs-useeffect",authors:"wisdom_ekpotu",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-02-react-uselayouteffect/social.png",hide_table_of_contents:!1},prevItem:{title:"Bun vs. Node.js",permalink:"/blog/bun-js-vs-node"},nextItem:{title:"How to create a notification provider with react-toastify",permalink:"/blog/react-toastify"},relatedPosts:[{title:"Building a Complete React CRM App with refine, Ant Design and GraphQL",description:"We'll explore the key features of our CRM app, the technologies we used.",permalink:"/blog/react-crm-with-refine",formattedDate:"October 2, 2023",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:5.1,date:"2023-10-02T00:00:00.000Z"},{title:"When to use dangerouslySetInnerHTML in React?",description:"Find out when to use dangerouslySetInnerHTML in React and how it can help avoid XSS attacks.",permalink:"/blog/use-react-dangerouslysetinnerhtml",formattedDate:"September 25, 2022",authors:[{name:"Clara Ekekenta",title:"Software Engineer",imageURL:"/img/generic-profile.png",key:"clara_ekekenta"}],readingTime:5.285,date:"2022-09-25T00:00:00.000Z"},{title:"Material UI Grid System in React",description:"We'll discover the Material UI Grid system with React examples",permalink:"/blog/material-ui-grid",formattedDate:"September 18, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:13.01,date:"2022-09-18T00:00:00.000Z"}],authorPosts:[]},c={authorsImageUrls:[void 0]},f=[{value:"Introduction",id:"introduction",level:2},{value:"What are side effects in React?",id:"what-are-side-effects-in-react",level:2},{value:"The <code>useEffect</code> hook",id:"the-useeffect-hook",level:2},{value:"Syntax:",id:"syntax",level:3},{value:"What is the problem with <code>useEffect</code>?",id:"what-is-the-problem-with-useeffect",level:2},{value:"Introducing the <code>useLayoutEffect</code> hook?",id:"introducing-the-uselayouteffect-hook",level:2},{value:"How does the <code>useLayoutEffect</code> hook work",id:"how-does-the-uselayouteffect-hook-work",level:2},{value:"When should you use the <code>useLayoutEffect</code> hook?",id:"when-should-you-use-the-uselayouteffect-hook",level:2},{value:"1. Adding Smooth Scroll:",id:"1-adding-smooth-scroll",level:3},{value:"2. Animating Elements:",id:"2-animating-elements",level:3},{value:"3. Auto-focus Input Field:",id:"3-auto-focus-input-field",level:3},{value:"Comparing <code>useEffect</code> to <code>useLayoutEffect</code>",id:"comparing-useeffect-to-uselayouteffect",level:2},{value:"Benefits of using the <code>useLayoutEffect</code> hook",id:"benefits-of-using-the-uselayouteffect-hook",level:2},{value:"Pitfalls of using the <code>useLayoutEffect</code> hook",id:"pitfalls-of-using-the-uselayouteffect-hook",level:2},{value:"Best Practices for using <code>useLayoutEffect</code>",id:"best-practices-for-using-uselayouteffect",level:2},{value:"Choosing the Right Hook",id:"choosing-the-right-hook",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:f};function h(e){var{components:t}=e,n=r(e,["components"]);return(0,o.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){a(e,t,n[t])}))}return e}({},p,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In recent years, ",(0,o.kt)("a",{parentName:"p",href:"https://react.dev/"},"React")," has solidified itself in the ever-changing landscape of web development as one of the most efficient ways of building highly performant and interactive user interfaces. With the introduction of a new feature called ",(0,o.kt)("a",{parentName:"p",href:"https://react.dev/reference/react"},"Hooks"),", React has revolutionized the way developers manage stateful and reusable logic within functional components."),(0,o.kt)("p",null,"With Hooks you can use state and other React features without the need to write ES6 class components. One important hook though not very popular is the ",(0,o.kt)("inlineCode",{parentName:"p"},"useLayoutEffect")," hook, which allows developers to handle and perform side effects in React components."),(0,o.kt)("p",null,"In this article, you will explore the ",(0,o.kt)("inlineCode",{parentName:"p"},"useLayoutEffect")," hook in-depth, how it differs from ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," and learn how to properly leverage its capabilities to enhance the user experience. Also, to follow along with this article you should have some experience working with Reactjs."),(0,o.kt)("p",null,"Steps we'll cover:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#what-are-side-effects-in-react"},"What are side effects in React?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#the-useeffect-hook"},"The ",(0,o.kt)("inlineCode",{parentName:"a"},"useEffect")," hook")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#what-is-the-problem-with-useeffect"},"What is the problem with ",(0,o.kt)("inlineCode",{parentName:"a"},"useEffect"),"?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#introducing-the-uselayouteffect-hook"},"Introducing the ",(0,o.kt)("inlineCode",{parentName:"a"},"useLayoutEffect")," hook?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-does-the-uselayouteffect-hook-work"},"How does the ",(0,o.kt)("inlineCode",{parentName:"a"},"useLayoutEffect")," hook work")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#when-should-you-use-the-uselayouteffect-hook"},"When should you use the ",(0,o.kt)("inlineCode",{parentName:"a"},"useLayoutEffect")," hook?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#comparing-useeffect-to-uselayouteffect"},"Comparing ",(0,o.kt)("inlineCode",{parentName:"a"},"useEffect")," to ",(0,o.kt)("inlineCode",{parentName:"a"},"useLayoutEffect"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#benefits-of-using-the-uselayouteffect-hook"},"Benefits of using the ",(0,o.kt)("inlineCode",{parentName:"a"},"useLayoutEffect")," hook")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#pitfalls-of-using-the-uselayouteffect-hook"},"Pitfalls of using the ",(0,o.kt)("inlineCode",{parentName:"a"},"useLayoutEffect")," hook")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#best-practices-for-using-uselayouteffect"},"Best Practices for using ",(0,o.kt)("inlineCode",{parentName:"a"},"useLayoutEffect")))),(0,o.kt)("h2",{id:"what-are-side-effects-in-react"},"What are side effects in React?"),(0,o.kt)("p",null,"To truly grasp what ",(0,o.kt)("inlineCode",{parentName:"p"},"useLayoutEffect")," is and what it does, it's essential to have a solid understanding of side effects in React."),(0,o.kt)("p",null,"A component's primary responsibilities include rendering the user interface (UI), responding to user input and events, and re-rendering the UI as necessary. You might need to carry out some tasks or operations when working on a React project that falls outside the render cycle of the component. These are known as \"",(0,o.kt)("strong",{parentName:"p"},"Side Effects"),'".'),(0,o.kt)("p",null,"A side effect is anything that happens within your application that is not (at least not directly) related to UI rendering. For example, send HTTP requests to servers, store data in the browser's memory, and set time functions. There are no UI changes in these scenarios. In other words, React will not re-render your component for these scenarios. "),(0,o.kt)("p",null,"Although they can be very helpful in our application and are a key concept in functional programming, side effects can also be challenging to manage and, if done incorrectly, can result in unexpected behavior and performance problems."),(0,o.kt)("p",null,"To handle side effects you can make use of a set of built-in hooks called ",(0,o.kt)("a",{parentName:"p",href:"https://react.dev/reference/react#effect-hooks"},"Effect Hooks")," namely; ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"useLayoutEffect"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"useInsertionEffect"),"."),(0,o.kt)("p",null,"Among these hooks, the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook is the most used by react developers compared to the other hooks. But a question arises. Is it suitable for treating all kinds of side effects? "),(0,o.kt)("h2",{id:"the-useeffect-hook"},"The ",(0,o.kt)("inlineCode",{parentName:"h2"},"useEffect")," hook"),(0,o.kt)("p",null,"If you have written React code using class components then you should be familiar with the lifecycle methods; ",(0,o.kt)("inlineCode",{parentName:"p"},"componentDidMount"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"componentDidUpdate"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"componentWillUnmount"),". "),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook is a combination of all three lifecycle methods hence it allows us to access lifecycle methods in functional components. "),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hooks runs ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"asynchronously"))," ie and It is commonly used to make API requests."),(0,o.kt)("h3",{id:"syntax"},"Syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.js"',title:'"src/App.js"'},"import React, { useEffect } from 'react';\n\nfunction MyComponent() {\n  useEffect(() => {\n    // Side effect logic goes here\n    console.log('Component rendered!');\n    // Cleanup function (optional)\n    return () => {\n      console.log('Component unmounted!');\n    };\n  }, []); // Empty dependencies array, runs only on mount\n  return (\n    <div>\n      {/* Component JSX */}\n    </div>\n  );\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," operates once the component is fully loaded initially, and then every time there's a change in the component's state."),(0,o.kt)("h2",{id:"what-is-the-problem-with-useeffect"},"What is the problem with ",(0,o.kt)("inlineCode",{parentName:"h2"},"useEffect"),"?"),(0,o.kt)("p",null,"As stated above the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook is asynchronous this has a significant drawback in that it can only be called after the component has been mounted. This implies that side effects that depend on the layout of the component cannot be carried out using ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect"),"."),(0,o.kt)("p",null,"Now how do we solve this problem, this is where ",(0,o.kt)("inlineCode",{parentName:"p"},"useLayoutEffect")," comes in."),(0,o.kt)("h2",{id:"introducing-the-uselayouteffect-hook"},"Introducing the ",(0,o.kt)("inlineCode",{parentName:"h2"},"useLayoutEffect")," hook?"),(0,o.kt)("p",null,"While many React developers are familiar with the widely used ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook, the ",(0,o.kt)("inlineCode",{parentName:"p"},"useLayoutEffect")," hook remains overshadowed by its sibling but is still a powerful tool for improving the performance of React apps."),(0,o.kt)("p",null,"Unlike the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook, the ",(0,o.kt)("inlineCode",{parentName:"p"},"useLayoutEffect")," hook runs ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"synchronously"))," which means it runs immediately after React has performed all the necessary DOM mutations but just before the browser paints the screen. It has the same API and possesses a similar syntax as the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook."),(0,o.kt)("p",null,"This hook was introduced to solve some layout specific / niche issues that plagued devs when using the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook."),(0,o.kt)("p",null,"Syntax: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.js"',title:'"src/App.js"'},"import React, { useLayoutEffect } from 'react';\n\nfunction MyComponent() {\n  useLayoutEffect(() => {\n    // Perform side effects here\n    // This code runs after the component has rendered but before the browser paints the screen\n\n    return () => {\n      // Cleanup code here (optional)\n    };\n  }, []);\n\n  return (\n    // JSX code for your component\n  );\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useLayoutEffect")," is usually used together with the ",(0,o.kt)("inlineCode",{parentName:"p"},"useRef")," hook, which will allow you to get a reference to any DOM element that you can use to read layout information."),(0,o.kt)("h2",{id:"how-does-the-uselayouteffect-hook-work"},"How does the ",(0,o.kt)("inlineCode",{parentName:"h2"},"useLayoutEffect")," hook work"),(0,o.kt)("p",null,"Here is a basic overview of how the ",(0,o.kt)("inlineCode",{parentName:"p"},"useLayoutEffect")," hook works:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The user interacts with the application."),(0,o.kt)("li",{parentName:"ul"},"The components' states change."),(0,o.kt)("li",{parentName:"ul"},"After that, the DOM is altered."),(0,o.kt)("li",{parentName:"ul"},"If the ",(0,o.kt)("inlineCode",{parentName:"li"},"useLayoutEffect")," dependencies have changed, this method is called to clean up effects from the previous render."),(0,o.kt)("li",{parentName:"ul"},"After cleanup, the ",(0,o.kt)("inlineCode",{parentName:"li"},"useLayoutEffect")," hook is called."),(0,o.kt)("li",{parentName:"ul"},"Changes are reflected on the browser screen.")),(0,o.kt)("h2",{id:"when-should-you-use-the-uselayouteffect-hook"},"When should you use the ",(0,o.kt)("inlineCode",{parentName:"h2"},"useLayoutEffect")," hook?"),(0,o.kt)("h3",{id:"1-adding-smooth-scroll"},"1. Adding Smooth Scroll:"),(0,o.kt)("p",null,"Example: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { useRef, useLayoutEffect } from 'react';\n\nconst SmoothScrolling = () => {\n  const containerRef = useRef(null);\n\n  useLayoutEffect(() => {\n    const container = containerRef.current;\n\n    const handleScroll = () => {\n      // Smoothly scroll to the top of the container\n      container.scrollTo({\n        top: 0,\n        behavior: 'smooth',\n      });\n    };\n\n    // Scroll to the top when the component is mounted\n    handleScroll();\n\n    // Add event listener to scroll to the top on subsequent scrolls\n    window.addEventListener('scroll', handleScroll);\n\n    return () => {\n      window.removeEventListener('scroll', handleScroll);\n    };\n  }, []);\n\n  return (\n    <div ref={containerRef}>\n      {/* Your Content */}\n    </div>\n  );\n};\n")),(0,o.kt)("p",null,"In the code above, the ",(0,o.kt)("inlineCode",{parentName:"p"},"useLayoutEffect")," hook is used to add smooth scrolling functionality to a container element. An event listener is set up to listen for a scroll event on the window object and invoke the ",(0,o.kt)("inlineCode",{parentName:"p"},"handlescroll")," function.  The function will smoothly scroll the container to top using the scrollTo method with  ",(0,o.kt)("inlineCode",{parentName:"p"},"{ top: 0, behavior: 'smooth' }")," as the options."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useLayoutEffect")," hook will perform the initial scroll to the top when the component is mounted. A clean-up function is added to remove the event listener when the component is unmounted."),(0,o.kt)("h3",{id:"2-animating-elements"},"2. Animating Elements:"),(0,o.kt)("p",null,"Example: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { useRef, useLayoutEffect } from 'react';\n\nconst AnimatingElements = () => {\n  const elementRef = useRef(null);\n\n  useLayoutEffect(() => {\n    const element = elementRef.current;\n\n    // Animate the element's opacity on mount\n    element.style.opacity = 0;\n    setTimeout(() => {\n      element.style.opacity = 1;\n    }, 1000);\n\n    return () => {\n      // Clean up animation when the component unmounts\n      element.style.opacity = 0;\n    };\n  }, []);\n\n  return <div ref={elementRef}>Animate me!</div>;\n};\n")),(0,o.kt)("p",null,"The code block above demonstrates how to animate an element's opacity using the useLayoutEffect hook. An initial opacity of the element is set to 0 and then a setTimeout function is used to animate it to 1 after a delay of 1000ms. "),(0,o.kt)("p",null,"Then the ",(0,o.kt)("inlineCode",{parentName:"p"},"useLayoutEffect")," hook applies the animation after the component is mounted. The element's opacity is reset to 0 when the component is unmounted."),(0,o.kt)("h3",{id:"3-auto-focus-input-field"},"3. Auto-focus Input Field:"),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { useRef, useLayoutEffect } from 'react';\n\nconst AutoFocusInput = () => {\n  const inputRef = useRef(null);\n\n  useLayoutEffect(() => {\n    inputRef.current.focus();\n  }, []);\n\n  return <input ref={inputRef} />;\n};\n")),(0,o.kt)("p",null,"In the preceding code, we make use of the ",(0,o.kt)("inlineCode",{parentName:"p"},"useLayoutEffect")," hook to automatically focus on an input field when the component is mounted.\nWe proceed to access the input element using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ref")," hook. Inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"useLayoutEffect")," hook, we call the focus method on the input element to give it focus. Since we want this only to run once we will leave the dependency array empty ([])."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," For this example there is no cleanup function because there is no need to undo the focus when the component is unmounted."),(0,o.kt)("h2",{id:"comparing-useeffect-to-uselayouteffect"},"Comparing ",(0,o.kt)("inlineCode",{parentName:"h2"},"useEffect")," to ",(0,o.kt)("inlineCode",{parentName:"h2"},"useLayoutEffect")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"useEffect Hook"),(0,o.kt)("th",{parentName:"tr",align:null},"useLayoutEffect    Hook"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Order of Execution"),(0,o.kt)("td",{parentName:"tr",align:null},"Runs after rendering and any updates have been applied."),(0,o.kt)("td",{parentName:"tr",align:null},"Runs after rendering but before the browser paints the screen")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Scheduling"),(0,o.kt)("td",{parentName:"tr",align:null},"Schedule asynchronous operations"),(0,o.kt)("td",{parentName:"tr",align:null},"Schedules synchronous operations")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Timing"),(0,o.kt)("td",{parentName:"tr",align:null},"Runs asynchronously during the render phase."),(0,o.kt)("td",{parentName:"tr",align:null},"Runs synchronously during the commit phase.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Use Cases"),(0,o.kt)("td",{parentName:"tr",align:null},"Fetching data, subscribing to events, scheduling side effects."),(0,o.kt)("td",{parentName:"tr",align:null},"Performing measurements, synchronously modifying the DOM based on layout.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Blocking Nature"),(0,o.kt)("td",{parentName:"tr",align:null},"Non-blocking, does not delay rendering"),(0,o.kt)("td",{parentName:"tr",align:null},"Potentially blocking, may delay rendering")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Performance"),(0,o.kt)("td",{parentName:"tr",align:null},"Optimized for performance in most cases"),(0,o.kt)("td",{parentName:"tr",align:null},"Can cause performance issues if not used carefully")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Usage Considerations"),(0,o.kt)("td",{parentName:"tr",align:null},"Preferable for most side effects and effects that don't require immediate visual updates."),(0,o.kt)("td",{parentName:"tr",align:null},"Suitable for effects that need to be applied synchronously before the browser paints.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Dependencies"),(0,o.kt)("td",{parentName:"tr",align:null},"Can specify an array of dependencies to control when the effect runs."),(0,o.kt)("td",{parentName:"tr",align:null},"Similar to ",(0,o.kt)("inlineCode",{parentName:"td"},"useEffect"),", dependencies can be specified to optimize effect re-execution.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Server-side Rendering (SSR)"),(0,o.kt)("td",{parentName:"tr",align:null},"Can be used in both client-side and server-side rendering environments."),(0,o.kt)("td",{parentName:"tr",align:null},"Not recommended for server-side rendering, as it can block rendering. Use ",(0,o.kt)("inlineCode",{parentName:"td"},"useEffect")," instead.")))),(0,o.kt)("h2",{id:"benefits-of-using-the-uselayouteffect-hook"},"Benefits of using the ",(0,o.kt)("inlineCode",{parentName:"h2"},"useLayoutEffect")," hook"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It ensures that layouts are very consistent throughout and are stable before the user sees it."),(0,o.kt)("li",{parentName:"ul"},"It helps prevent unnecessary re-renders or repaints by synchronizing state changes with DOM changes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Preventing Flickering or unwanted content flashes:")," In some circumstances, utilizing useLayoutEffect can assist to eliminate visual flickering or layout shifts that might occur when elements need to be relocated or styled depending on layout information. By performing the appropriate layout changes synchronously before the browser paints, you may prevent the visual glitches that could arise if you used ",(0,o.kt)("inlineCode",{parentName:"li"},"useEffect")," and had a delay between layout changes and rendering.")),(0,o.kt)("h2",{id:"pitfalls-of-using-the-uselayouteffect-hook"},"Pitfalls of using the ",(0,o.kt)("inlineCode",{parentName:"h2"},"useLayoutEffect")," hook"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A major pitfall of this hook according to the official React docs, is that it can hurt app performance. "),(0,o.kt)("li",{parentName:"ol"},"No support for Server-Side Rendering (SSR): Because SSR requires asynchronous rendering to avoid blocking the server thread, using useLayoutEffect in an SSR setup can result in mismatches between server-rendered and client-rendered content.")),(0,o.kt)("h2",{id:"best-practices-for-using-uselayouteffect"},"Best Practices for using ",(0,o.kt)("inlineCode",{parentName:"h2"},"useLayoutEffect")),(0,o.kt)("p",null,"When using the ",(0,o.kt)("inlineCode",{parentName:"p"},"useLayoutEffect")," hook in React, it's important to follow best practices to ensure that your code behaves correctly and efficiently. Here are some recommended practices for using ",(0,o.kt)("inlineCode",{parentName:"p"},"useLayoutEffect")," effectively:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useLayoutEffect")," is a Hook, and hence must be called at the top level of your component."),(0,o.kt)("li",{parentName:"ul"},"Do not call it inside loops or conditions. If you need to do that then extract a component and move the Effect there."),(0,o.kt)("li",{parentName:"ul"},"Only use the ",(0,o.kt)("inlineCode",{parentName:"li"},"useLayoutEffect")," hook for side effects that depend on the layout of the component."),(0,o.kt)("li",{parentName:"ul"},"Also make use of the ",(0,o.kt)("inlineCode",{parentName:"li"},"ref")," object in order to access the current layout of the component."),(0,o.kt)("li",{parentName:"ul"},"Avoid using ",(0,o.kt)("inlineCode",{parentName:"li"},"useLayoutEffect")," to update the state of your components."),(0,o.kt)("li",{parentName:"ul"},"Avoid carrying out expensive operations and computations that could significantly cause a delay in rendering."),(0,o.kt)("li",{parentName:"ul"},"Always consider using alternatives such as ",(0,o.kt)("inlineCode",{parentName:"li"},"useEffect"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Limit the use of useLayoutEffect:")," In most circumstances, useEffect will suffice to deliver the needed functionality. Use useLayoutEffect only in situations when synchronous execution and quick access to the DOM is required."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Be mindful of dependencies:")," Just like ",(0,o.kt)("inlineCode",{parentName:"li"},"useEffect"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"useLayoutEffect")," hook also accepts an array of dependencies as the second argument. So ensure you include all the relevant dependencies to avoid unnecessary re-renders.")),(0,o.kt)("h2",{id:"choosing-the-right-hook"},"Choosing the Right Hook"),(0,o.kt)("p",null,"There is no right or wrong hook to use it all depends on your specific use case. So I would recommend starting with the",(0,o.kt)("inlineCode",{parentName:"p"},"useeffect")," hook and switching over when it causes a problem."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Throughout this article, you have learned a lot about ",(0,o.kt)("inlineCode",{parentName:"p"},"useLayoutEffect")," hook, similarities and differences, best practices etc. By now I am confident you know enough to properly make use of effect hooks in your applications to improve the overall experience and solve great problems."))}h.isMDXComponent=!0}}]);