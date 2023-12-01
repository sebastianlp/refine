"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[66441],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<s;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69833:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>u});n(67294);var a=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const o={title:"5 Most Common useState Mistakes React Developers Often Make",description:"Find out what the five most common mistakes React developers make with useState and how to avoid them.",slug:"common-usestate-mistakes-and-how-to-avoid",authors:"david_herbert",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-29-usestate-mistakes/usestate-mistakes-social.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/common-usestate-mistakes-and-how-to-avoid",source:"@site/blog/2022-08-29-usestate-mistakes.md",title:"5 Most Common useState Mistakes React Developers Often Make",description:"Find out what the five most common mistakes React developers make with useState and how to avoid them.",date:"2022-08-29T00:00:00.000Z",formattedDate:"August 29, 2022",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:14.615,hasTruncateMarker:!0,authors:[{name:"David Herbert",title:"Frontend Engineer",url:"https://github.com/DaveyHert",github:"https://github.com/DaveyHert",linkedin:"https://www.linkedin.com/in/daveyhert",imageURL:"https://github.com/DaveyHert.png",key:"david_herbert"}],frontMatter:{title:"5 Most Common useState Mistakes React Developers Often Make",description:"Find out what the five most common mistakes React developers make with useState and how to avoid them.",slug:"common-usestate-mistakes-and-how-to-avoid",authors:"david_herbert",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-29-usestate-mistakes/usestate-mistakes-social.png",hide_table_of_contents:!1},prevItem:{title:"CSS Grid vs Flexbox - A brief guide",permalink:"/blog/css-grid-vs-flexbox"},nextItem:{title:"Javascript Currying - Variadic Currying",permalink:"/blog/javascript-variadic-currying"},relatedPosts:[{title:"How to Build a React Admin Panel with Mantine and Strapi",description:"We'll be building a simple React Admin Panel with refine and Mantine using Strapi as a backend service.",permalink:"/blog/react-admin-panel",formattedDate:"February 23, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:22.995,date:"2023-02-23T00:00:00.000Z"},{title:"How to create a notification provider with react-toastify",description:"We'll create a custom notification provider in a refine application using react-toastify.",permalink:"/blog/react-toastify",formattedDate:"June 1, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:12.935,date:"2023-06-01T00:00:00.000Z"},{title:"Understanding Virtual DOM in React",description:"We'll dive into the concept of a virtual DOM in the React as well as explore its purpose.",permalink:"/blog/react-virtual-dom",formattedDate:"November 23, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:12.11,date:"2023-11-23T00:00:00.000Z"}],authorPosts:[{title:"How to become a modern Node.js developer?",description:"The most essential skills to have as a modern Node.js developer",permalink:"/blog/node-js-developer-skills",formattedDate:"September 6, 2022",authors:[{name:"David Herbert",title:"Frontend Engineer",url:"https://github.com/DaveyHert",github:"https://github.com/DaveyHert",linkedin:"https://www.linkedin.com/in/daveyhert",imageURL:"https://github.com/DaveyHert.png",key:"david_herbert"}],readingTime:8.74,date:"2022-09-06T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2},{value:"Initializing useState Wrongly",id:"initializing-usestate-wrongly",level:2},{value:"Not Using Optional Chaining",id:"not-using-optional-chaining",level:2},{value:"Updating useState Directly",id:"updating-usestate-directly",level:2},{value:"Updating Specific Object Property",id:"updating-specific-object-property",level:2},{value:"Managing Multiple Input Fields in Forms",id:"managing-multiple-input-fields-in-forms",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:u};function h(e){var{components:t}=e,n=r(e,["components"]);return(0,a.kt)("wrapper",s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The most challenging aspect of developing any application is often managing its state. However, we are often required to manage several pieces of state in our application, such as when data is retrieved from an external server or updated in the app. "),(0,a.kt)("p",null,"The difficulty of state management is the reason why so many state management libraries exist today - and more are still being developed. Thankfully, React has several built-in solutions in the form of hooks for state management, which makes managing states in React easier."),(0,a.kt)("p",null,"It's no secret that hooks have become increasingly crucial in React component development, particularly in functional components, as they have entirely replaced the need for class-based components, which were the conventional way to manage stateful components. The ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," hook is one of many hooks introduced in React, but although the ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," hook has been around for a few years now, developers are still prone to making common mistakes due to inadequate understanding. "),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," hook can be tricky to understand, especially for newer React developers or those migrating from class-based components to functional components. In this guide, we'll explore the top 5 common ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," mistakes that React developers often make and how you can avoid them."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#initializing-usestate-wrongly"},"Initializing useState Wrongly")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#not-using-optional-chaining"},"Not Using Optional Chaining")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#updating-usestate-directly"},"Updating useState Directly")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#updating-specific-object-property"},"Updating Specific Object Property")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#managing-multiple-input-fields-in-forms"},"Managing Multiple Input Fields in Forms"))),(0,a.kt)("h2",{id:"initializing-usestate-wrongly"},"Initializing useState Wrongly"),(0,a.kt)("p",null,"Initiating the useState hook incorrectly is one of the most common mistakes developers make when utilizing it. What does it mean to initialize useState? To initialize something is to set its initial value. "),(0,a.kt)("p",null,"The problem is that useState allows you to define its initial state using anything you want. However, what no one tells you outright is that depending on what your component is expecting in that state, using a wrong date type value to initialize your useState can lead to unexpected behavior in your app, such as failure to render the UI, resulting in a blank screen error."),(0,a.kt)("p",null,"For example, we have a component expecting a user object state containing the user's name, image, and bio - and in this component, we are rendering the user's properties. "),(0,a.kt)("p",null,"Initializing useState with a different data type, such as an empty state or a  value, would result in a blank page error, as shown below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { useState } from \"react\";\n\nfunction App() {\n  // Initializing state\n  const [user, setUser] = useState();\n\n  // Render UI\n  return (\n    <div className='App'>\n      <img src=\"https://refine.ams3.cdn.digitaloceanspaces.comundefined\" alt='profile image' />\n      <p>User: {user.name}</p>\n      <p>About: {user.bio}</p>\n    </div>\n  );\n}\n\nexport default App;\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-29-usestate-mistakes/blank-page-error.png",alt:"blank"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"Inspecting the console would throw a similar error as shown below:"),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-29-usestate-mistakes/initialize-error.png",alt:"initializeError"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"Newer developers often make this mistake when initializing their state, especially when fetching data from a server or database, as the retrieved data is expected to update the state with the actual user object. However, this is bad practice and could lead to expected behavior, as shown above."),(0,a.kt)("p",null,"The preferred way to initialize ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," is to pass it the expected data type to avoid potential blank page errors. For example, an empty object, as shown below, could be passed to the state:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { useState } from \"react\";\n\nfunction App() {\n  // Initializing state with expected data type\n  const [user, setUser] = useState({});\n\n  // Render UI\n  return (\n    <div className='App'>\n      <img src=\"https://refine.ams3.cdn.digitaloceanspaces.comundefined\" alt='profile image' />\n      <p>User: {user.name}</p>\n      <p>About: {user.bio}</p>\n    </div>\n  );\n}\n\nexport default App;\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-29-usestate-mistakes/fix-blank-page-error.png",alt:"fixBlankPage"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"We could take this a notch further by defining the user object's expected properties when initializing the state."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { useState } from "react";\n\nfunction App() {\n  // Initializing state with expected data type\n  const [user, setUser] = useState({\n    image: "",\n    name: "",\n    bio: "",\n  });\n\n  // Render UI\n  return (\n    <div className=\'App\'>\n      <img src="https://refine.ams3.cdn.digitaloceanspaces.comundefined" alt=\'profile image\' />\n      <p>User: {user.name}</p>\n      <p>About: {user.bio}</p>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,a.kt)("h2",{id:"not-using-optional-chaining"},"Not Using Optional Chaining"),(0,a.kt)("p",null,"Sometimes just initializing the useState with the expected data type is often not enough to prevent the unexpected blank page error. This is especially true when trying to access the property of a deeply nested object buried deep inside a chain of related objects. "),(0,a.kt)("p",null,"You typically try to access this object by chaining through related objects using the dot (.) chaining operator, e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"user.names.firstName"),". However, we have a problem if any chained objects or properties are missing. The page will break, and the user will get a blank page error. "),(0,a.kt)("p",null,"For Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { useState } from \"react\";\n\nfunction App() {\n  // Initializing state with expected data type\n  const [user, setUser] = useState({});\n\n  // Render UI\n  return (\n    <div className='App'>\n      <img src=\"https://refine.ams3.cdn.digitaloceanspaces.comundefined\" alt='profile image' />\n      <p>User: {user.names.firstName}</p>\n      <p>About: {user.bio}</p>\n    </div>\n  );\n}\n\nexport default App;\n")),(0,a.kt)("p",null,"Output error:"),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-29-usestate-mistakes/chain-error.png",alt:"chain"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"A typical solution to this error and UI not rendering is using conditional checks to validate the state's existence to check if it is accessible before rendering the component, e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"user.names && user.names.firstName"),", which only evaluates the right expression if the left expression is true (if the ",(0,a.kt)("inlineCode",{parentName:"p"},"user.names")," exist). However, this solution is a messy one as it would require several checks for each object chain."),(0,a.kt)("p",null,"Using the optional chaining operator ",(0,a.kt)("inlineCode",{parentName:"p"},"(?.)"),", you can read the value of a property that is buried deep inside a related chain of objects without needing to verify that each referenced object is valid. The optional chaining operator ",(0,a.kt)("inlineCode",{parentName:"p"},"(?.)")," is just like the dot chaining operator ",(0,a.kt)("inlineCode",{parentName:"p"},"(.)"),", except that if the referenced object or property is missing (i.e.,  or undefined), the expression short-circuits and returns a value of undefined. In simpler terms, if any chained object is missing, it doesn't continue with the chain operation (short-circuits)."),(0,a.kt)("p",null," For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"user?.names?.firstName")," would not throw any error or break the page because once it detects that the user or names object is missing, it immediately terminates the operation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { useState } from \"react\";\n\nfunction App() {\n  // Initializing state with expected data type\n  const [user, setUser] = useState({});\n\n  // Render UI\n  return (\n    <div className='App'>\n      <img src=\"https://refine.ams3.cdn.digitaloceanspaces.comundefined\" alt='profile image' />\n      <p>User: {user?.names?.firstName}</p>\n      <p>About: {user.bio}</p>\n    </div>\n  );\n}\n\nexport default App;\n")),(0,a.kt)("p",null,"Taking advantage of the optional chaining operator can simplify and shorten the expressions when accessing chained properties in the state, which can be very useful when exploring the content of objects whose reference may not be known beforehand."),(0,a.kt)("h2",{id:"updating-usestate-directly"},"Updating useState Directly"),(0,a.kt)("p",null,"The lack of proper understanding of how React schedules and updates state can easily lead to bugs in updating the state of an application. When using ",(0,a.kt)("inlineCode",{parentName:"p"},"useState"),", we typically define a state and directly update the state using the set state function. "),(0,a.kt)("p",null,"For example, we create a count state and a handler function attached to a button that adds one (+1) to the state when clicked:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { useState } from \"react\";\n\nfunction App() {\n  const [count, setCount] = useState(0);\n\n  // Directly update state\n  const increase = () => setCount(count + 1);\n\n  // Render UI\n  return (\n    <div className='App'>\n      <span>Count: {count}</span>\n      <button onClick={increase}>Add +1</button>\n    </div>\n  );\n}\n\nexport default App;\n")),(0,a.kt)("p",null,"The output:"),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-29-usestate-mistakes/direct-update.gif",alt:"directUpdateGif"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"This works as expected. However, directly updating the state is a bad practice that could lead to potential bugs when dealing with a live application that several users use. Why? Because contrary to what you may think, React doesn't update the state immediately when the button is clicked, as shown in the example demo. Instead, React takes a snapshot of the current state and schedules this Update (+1) to be made later for performance gains - this happens in milliseconds, so it is not noticeable to the human eyes. However, while the scheduled Update is still in pending transition, the current state may be changed by something else (such as multiple users' cases). The scheduled Update would have no way of knowing about this new event because it only has a record of the state snapshot it took when the button got clicked."),(0,a.kt)("p",null,"This could result in major bugs and weird behavior in your application. Let\u2019s see this in action by adding another button that asynchronously updates the count state after a 2 seconds delay. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { useState } from \"react\";\n\nfunction App() {\n  const [count, setCount] = useState(0);\n\n  // Directly update state\n  const update = () => setCount(count + 1);\n\n  // Directly update state after 2 sec\n  const asyncUpdate = () => {\n    setTimeout(() => {\n      setCount(count + 1);\n    }, 2000);\n  };\n\n  // Render UI\n  return (\n    <div className='App'>\n      <span>Count: {count}</span>\n      <button onClick={update}>Add +1</button>\n      <button onClick={asyncUpdate}>Add +1 later</button>\n    </div>\n  );\n}\n")),(0,a.kt)("p",null,"Pay attention to the bug in the output:"),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-29-usestate-mistakes/direct-update-error.gif",alt:"directUpdateError"}),(0,a.kt)("br",null),(0,a.kt)("p",null,'Notice the bug? We start by clicking on the first "Add +1" button twice (which updates the state to 1 + 1 = 2). After which, we click on the "Add +1 later" \u2013 this takes a snapshot of the current state (2) and schedules an update to add 1 to that state after two seconds. But while this scheduled update is still in transition, we went ahead to click on the "Add +1" button thrice, updating the current state to 5 (i.e., 2 + 1 + 1 + 1 = 5). However, the asynchronous scheduled Update tries to update the state after two seconds using the snapshot (2) it has in memory (i.e., 2 + 1 = 3), not realizing that the current state has been updated to 5. As a result, the state is updated to 3 instead of 6.'),(0,a.kt)("p",null,"This unintentional bug often plagues applications whose states are directly updated using just the setState(newValue) function. The suggested way of updating useState is by functional update which to pass ",(0,a.kt)("inlineCode",{parentName:"p"},"setState()")," a callback function and in this callback function we pass the current state at that instance e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"setState(currentState => currentState + newValue)"),". This passes the current state at the scheduled update time to the callback function, making it possible to know the current state before attempting an update. "),(0,a.kt)("p",null,"So, let's modify the example demo to use a functional update instead of a direct update."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { useState } from \"react\";\n\nfunction App() {\n  const [count, setCount] = useState(0);\n\n  // Directly update state\n  const update = () => setCount(count + 1);\n\n  // Directly update state after 3 sec\n  const asyncUpdate = () => {\n    setTimeout(() => {\n      setCount((currentCount) => currentCount + 1);\n    }, 2000);\n  };\n\n  // Render UI\n  return (\n    <div className='App'>\n      <span>Count: {count}</span>\n      <button onClick={update}>Add +1</button>\n      <button onClick={asyncUpdate}>Add +1 later</button>\n    </div>\n  );\n}\n\nexport default App;\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-29-usestate-mistakes/functional-state-update.gif",alt:"functionalState"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"With functional update, the ",(0,a.kt)("inlineCode",{parentName:"p"},"setState()")," function knows the state has been updated to 5, so it updates the state to 6."),(0,a.kt)("h2",{id:"updating-specific-object-property"},"Updating Specific Object Property"),(0,a.kt)("p",null,"Another common mistake is modifying just the property of an object or array instead of the reference itself. "),(0,a.kt)("p",null,'For example, we initialize a user object with a defined "name" and "age" property. However, our component has a button that attempts to update just the user\'s name, as shown below.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { useState, useEffect } from "react";\n\nexport default function App() {\n  const [user, setUser] = useState({\n    name: "John",\n    age: 25,\n  });\n\n  // Update property of user state\n  const changeName = () => {\n    setUser((user) => (user.name = "Mark"));\n  };\n\n  // Render UI\n  return (\n    <div className=\'App\'>\n      <p>User: {user.name}</p>\n      <p>Age: {user.age}</p>\n\n      <button onClick={changeName}>Change name</button>\n    </div>\n  );\n}\n')),(0,a.kt)("p",null,"Initial state before the button is clicked:"),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-29-usestate-mistakes/object-property-state.png",alt:"objectState"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"Updated state after the button is clicked:"),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-29-usestate-mistakes/object-property-state-error.png",alt:"objectStateError"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"As you can see, instead of the specific property getting modified, the user is no longer an object but has been overwritten to the string \u201cMark\u201d. Why? Because setState() assigns whatever value returned or passed to it as the new state. This mistake is common with React developers migrating from class-based components to functional components as they are used to updating state using ",(0,a.kt)("inlineCode",{parentName:"p"},"this.state.user.property = newValue")," in class-based components."),(0,a.kt)("p",null,"One typical old-school way of doing this is by creating a new object reference and assigning the previous user object to it, with the user\u2019s name directly modified."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { useState, useEffect } from "react";\n\nexport default function App() {\n  const [user, setUser] = useState({\n    name: "John",\n    age: 25,\n  });\n\n  // Update property of user state\n  const changeName = () => {\n    setUser((user) => Object.assign({}, user, { name: "Mark" }));\n  };\n\n  // Render UI\n  return (\n    <div className=\'App\'>\n      <p>User: {user.name}</p>\n      <p>Age: {user.age}</p>\n\n      <button onClick={changeName}>Change name</button>\n    </div>\n  );\n}\n')),(0,a.kt)("p",null,"Updated state after the button is clicked:"),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-29-usestate-mistakes/object-property-assignment.png",alt:"objectAssign"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"Notice that just the user\u2019s name has been modified, while the other property remains the same."),(0,a.kt)("p",null,"However, the ideal and modern way of updating a specific property or an object or array is the use of the ES6 spread operator (...). It is the ideal way to update a specific property of an object or array when working with a state in functional components. With this spread operator, you can easily unpack the properties of an existing item into a new item and, at the same time, modify or add new properties to the unpacked item.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { useState, useEffect } from "react";\n\nexport default function App() {\n  const [user, setUser] = useState({\n    name: "John",\n    age: 25,\n  });\n\n  // Update property of user state using spread operator\n  const changeName = () => {\n    setUser((user) => ({ ...user, name: "Mark" }));\n  };\n\n  // Render UI\n  return (\n    <div className=\'App\'>\n      <p>User: {user.name}</p>\n      <p>Age: {user.age}</p>\n\n      <button onClick={changeName}>Change name</button>\n    </div>\n  );\n}\n')),(0,a.kt)("p",null,"The result would be the same as the last state. Once the button is clicked, the name property is updated while the rest of the user properties remain the same."),(0,a.kt)("h2",{id:"managing-multiple-input-fields-in-forms"},"Managing Multiple Input Fields in Forms"),(0,a.kt)("p",null,"Managing several controlled inputs in a form is typically done by manually creating multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"useState()")," functions for each input field and binding each to the corresponding input field. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { useState, useEffect } from \"react\";\n\nexport default function App() {\n  const [firstName, setFirstName] = useState(\"\");\n  const [lastName, setLastName] = useState(\"\");\n  const [age, setAge] = useState(\"\");\n  const [userName, setUserName] = useState(\"\");\n  const [password, setPassword] = useState(\"\");\n  const [email, setEmail] = useState(\"\");\n\n  // Render UI\n  return (\n    <div className='App'>\n      <form>\n        <input type='text' placeholder='First Name' />\n        <input type='text' placeholder='Last Name' />\n        <input type='number' placeholder='Age' />\n        <input type='text' placeholder='Username' />\n        <input type='password' placeholder='Password' />\n        <input type='email' placeholder='email' />\n      </form>\n    </div>\n  );\n}\n")),(0,a.kt)("p",null,"Furthermore, you have to create a handler function for each of these inputs to establish a bidirectional flow of data that updates each state when an input value is entered. This can be rather redundant and time-consuming as it involves writing a lot of code that reduces the readability of your codebase."),(0,a.kt)("p",null,"However, it's possible to manage multiple input fields in a form using only one useState hook. This can be accomplished by first giving each input field a unique name and then creating one ",(0,a.kt)("inlineCode",{parentName:"p"},"useState()")," function that is initialized with properties that bear identical names to those of the input fields."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { useState, useEffect } from \"react\";\n\nexport default function App() {\n  const [user, setUser] = useState({\n    firstName: \"\",\n    lastName: \"\",\n    age: \"\",\n    username: \"\",\n    password: \"\",\n    email: \"\",\n  });\n\n  // Render UI\n  return (\n    <div className='App'>\n      <form>\n        <input type='text' name='firstName' placeholder='First Name' />\n        <input type='text' name='lastName' placeholder='Last Name' />\n        <input type='number' name='age' placeholder='Age' />\n        <input type='text' name='username' placeholder='Username' />\n        <input type='password' name='password' placeholder='Password' />\n        <input type='email' name='email' placeholder='email' />\n      </form>\n    </div>\n  );\n}\n")),(0,a.kt)("p",null,"After which, we create a handler event function that updates the specific property of the user object to reflect changes in the form whenever a user types in something. This can be accomplished using the spread operator and dynamically accessing the name of the specific input element that fired the handler function using the ",(0,a.kt)("inlineCode",{parentName:"p"},"event.target.elementsName = event.target.value"),"."),(0,a.kt)("p",null,"In other words, we check the event object that is usually passed to an event function for the target elements name (which is the same as the property name in the user state) and update it with the associated value in that target element, as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { useState, useEffect } from \"react\";\n\nexport default function App() {\n  const [user, setUser] = useState({\n    firstName: \"\",\n    lastName: \"\",\n    age: \"\",\n    username: \"\",\n    password: \"\",\n    email: \"\",\n  });\n\n  // Update specific input field\n  const handleChange = (e) => \n    setUser(prevState => ({...prevState, [e.target.name]: e.target.value}))\n\n  // Render UI\n  return (\n    <div className='App'>\n      <form>\n        <input type='text' onChange={handleChange} name='firstName' placeholder='First Name' />\n        <input type='text' onChange={handleChange} name='lastName' placeholder='Last Name' />\n        <input type='number' onChange={handleChange} name='age' placeholder='Age' />\n        <input type='text' onChange={handleChange} name='username' placeholder='Username' />\n        <input type='password' onChange={handleChange} name='password' placeholder='Password' />\n        <input type='email' onChange={handleChange} name='email' placeholder='email' />\n      </form>\n    </div>\n  );\n}\n")),(0,a.kt)("p",null,"With this implementation, the event handler function is fired for each user input. In this event function, we have a ",(0,a.kt)("inlineCode",{parentName:"p"},"setUser()")," state function that accepts the previous/current state of the user and unpacks this user state using the spread operator. Then we check the event object for whatever target element name that fired the function (which correlates to the property name in the state). Once this property name is gotten, we modify it to reflect the user input value in the form."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"As a React developer creating highly interactive user interfaces, you have probably made some of the mistakes mentioned above. Hopefully, these helpful useState practices will help you avoid some of these potential mistakes while using the ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," hook down the road while building your React-powered applications."),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://discord.gg/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord-banner.png",alt:"discord banner"}))))}h.isMDXComponent=!0}}]);