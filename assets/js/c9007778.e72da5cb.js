"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[11897],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),m=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(a),d=r,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||n;return a?o.createElement(h,i(i({ref:t},p),{},{components:a})):o.createElement(h,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<n;m++)i[m]=a[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},37737:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>m,toc:()=>u});a(67294);var o=a(3905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={title:"React Hook Form vs Formik - Comparing the most popular React form libraries",description:"This article will compare React Hook Form and Formik by highlighting their strengths and weaknesses.",slug:"react-hook-form-vs-formik",authors:"joseph_mawa",tags:["react-hook-form","comparison"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-30-compare-form-libraries/social.png",hide_table_of_contents:!1},s=void 0,m={permalink:"/blog/react-hook-form-vs-formik",source:"@site/blog/2023-01-30-compare-form-libraries.md",title:"React Hook Form vs Formik - Comparing the most popular React form libraries",description:"This article will compare React Hook Form and Formik by highlighting their strengths and weaknesses.",date:"2023-01-30T00:00:00.000Z",formattedDate:"January 30, 2023",tags:[{label:"react-hook-form",permalink:"/blog/tags/react-hook-form"},{label:"comparison",permalink:"/blog/tags/comparison"}],readingTime:7.94,hasTruncateMarker:!1,authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],frontMatter:{title:"React Hook Form vs Formik - Comparing the most popular React form libraries",description:"This article will compare React Hook Form and Formik by highlighting their strengths and weaknesses.",slug:"react-hook-form-vs-formik",authors:"joseph_mawa",tags:["react-hook-form","comparison"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-30-compare-form-libraries/social.png",hide_table_of_contents:!1},prevItem:{title:"The Important Differences between URI VS URL",permalink:"/blog/uri-vs-url"},nextItem:{title:"refine vs RedwoodJS",permalink:"/blog/refine-vs-redwood-js"},relatedPosts:[{title:"Best React Admin Dashboard Libraries 2023",description:"We have curated a compilation of the 5 best React admin dashboard libraries that encompass all the essential features needed to create modern and feature-rich dashboards with minimal effort.",permalink:"/blog/react-admin-dashboard",formattedDate:"March 17, 2023",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:6.495,date:"2023-03-17T00:00:00.000Z"},{title:"How to Multipart File Upload Using FormData with React Hook Form",description:"In this guide, I'm going to show you how to multipart files upload with using React Hook Form",permalink:"/blog/how-to-multipart-file-upload-with-react-hook-form",formattedDate:"March 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:7.05,date:"2022-03-29T00:00:00.000Z"},{title:"React Hook Form Validation with Complete Examples",description:"We'll implement React Hook Form custom validations and schema validations using yup.",permalink:"/blog/react-hook-form-validation-examples",formattedDate:"September 27, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:19.815,date:"2022-09-27T00:00:00.000Z"}],authorPosts:[{title:"How to Build a React Admin Panel with Mantine and Strapi",description:"We'll be building a simple React Admin Panel with refine and Mantine using Strapi as a backend service.",permalink:"/blog/react-admin-panel",formattedDate:"February 23, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:22.995,date:"2023-02-23T00:00:00.000Z"},{title:"A Complete guide to pnpm",description:"We'll explore pnpm, an efficient alternative to npm.",permalink:"/blog/how-to-use-pnpm",formattedDate:"November 27, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:8.995,date:"2023-11-27T00:00:00.000Z"},{title:"Top 6 Free Online Code Editors and IDEs with Pros and Cons",description:"We'll compare the best online IDEs and code editors for web development. We'll also look at the pros and cons of each.",permalink:"/blog/6-best-online-code-editors-comparison",formattedDate:"November 1, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:15.98,date:"2022-11-01T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2},{value:"The most popular React form libraries",id:"the-most-popular-react-form-libraries",level:2},{value:"React Hook Form",id:"react-hook-form",level:3},{value:"How to use React Hook Form",id:"how-to-use-react-hook-form",level:4},{value:"Pros of React Hook Form",id:"pros-of-react-hook-form",level:4},{value:"Cons of React Hook Form library",id:"cons-of-react-hook-form-library",level:4},{value:"Formik",id:"formik",level:3},{value:"How to use Formik",id:"how-to-use-formik",level:4},{value:"Pros of Formik",id:"pros-of-formik",level:4},{value:"Cons of Formik",id:"cons-of-formik",level:4},{value:"Comparing Formik and React Hook Form",id:"comparing-formik-and-react-hook-form",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:u};function d(e){var{components:t}=e,a=i(e,["components"]);return(0,o.kt)("wrapper",n(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},o=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),o.forEach((function(t){r(e,t,a[t])}))}return e}({},c,a),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Forms are a handy feature for collecting data from users. Unfortunately, creating, styling, and validating forms is not always straightforward, especially when using front-end frameworks such as React. Fortunately, packages such as ",(0,o.kt)("a",{parentName:"p",href:"https://react-hook-form.com/"},"React Hook Form")," and ",(0,o.kt)("a",{parentName:"p",href:"https://formik.org/"},"Formik")," exist to simplify working with forms in React and React frameworks."),(0,o.kt)("p",null,"Among other benefits, most form libraries simplify working with forms by handling form validation and submission out of the box for you. Despite the advantages of using a library for form management, each library has strengths and weaknesses."),(0,o.kt)("p",null,"Formik and React hook form are among the most popular libraries for form management in the React ecosystem. This article will compare Formik and React hook form by highlighting their strengths and weaknesses. Hopefully, it will help you choose a form library that will meet your project's requirements."),(0,o.kt)("h2",{id:"the-most-popular-react-form-libraries"},"The most popular React form libraries"),(0,o.kt)("p",null,"As mentioned above, there are several React packages that you can use when working with forms. However, React Hook Form and Formik are the most popular. We will explore the two libraries in this section. We will highlight how to use them and their pros and cons."),(0,o.kt)("h3",{id:"react-hook-form"},"React Hook Form"),(0,o.kt)("p",null,"React Hook Form is another library for managing forms in React and React frameworks like Next and Gatsby. Similar to Formik, React Hook Form is a free, open-source library. It is MIT licensed. Therefore, you can use it pretty much any way you want."),(0,o.kt)("p",null,"You can use it to manage your form state and field validation. You can integrate it with some popular UI libraries like Material UI. As its name suggests, React Hook Form was built using React hooks. Therefore, you can't use it directly in class components."),(0,o.kt)("h4",{id:"how-to-use-react-hook-form"},"How to use React Hook Form"),(0,o.kt)("p",null,"You can install React Hook Form from the NPM package registry like any other package before using it. Run one of the commands below in an existing React or React Native project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# npm\nnpm install react-hook-form\n\n# yarn\nyarn add react-hook-form\n")),(0,o.kt)("p",null,"The code below shows a simple login form demonstrating the most basic usage of React Hook Form. In the example code below, we are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook. It is one of the hooks that simplifies form management, and you will almost always use it when working with React Hook Form. The ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook takes an optional object as an argument and returns several methods."),(0,o.kt)("p",null,"The method worth mentioning is the ",(0,o.kt)("inlineCode",{parentName:"p"},"register")," function. You can use it to register input elements and apply validation rules. It takes a unique input name string as the first argument and an optional object as the second. You can use the second argument to add input validation fields like the example below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useForm } from "react-hook-form";\n\nexport function Form() {\n  const { register, handleSubmit, watch, formState } = useForm();\n\n  const submitHandler = (data) => console.log(data);\n\n  return (\n    <form onSubmit={handleSubmit(submitHandler)}>\n      <p>\n        <label htmlFor="username">Username</label>\n        <input\n          type="text"\n          id="username"\n          {...register("username", { required: true, minLength: 4 })}\n        />\n      </p>\n      <p>\n        <label htmlFor="Password">Password</label>\n        <input\n          type="password"\n          id="password"\n          {...register("password", { required: true, minLength: 10})}\n          required\n        />\n      </p>\n      <button> Submit </button>\n    </form>\n  );\n}\n')),(0,o.kt)("p",null,"The example above is a basic illustration of React Hook Form. Do check out the React Hook Form documentation for more advanced features."),(0,o.kt)("h4",{id:"pros-of-react-hook-form"},"Pros of React Hook Form"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It is free and open source."),(0,o.kt)("li",{parentName:"ul"},"React Hook Form has no dependencies and a small bundle size. It has a gzipped bundle size of 12.12KB, according to\xa0",(0,o.kt)("a",{parentName:"li",href:"https://bundlejs.com/"},"bundlejs"),"."),(0,o.kt)("li",{parentName:"ul"},"It is MIT licensed"),(0,o.kt)("li",{parentName:"ul"},"It is easy to pick up."),(0,o.kt)("li",{parentName:"ul"},"Good documentation"),(0,o.kt)("li",{parentName:"ul"},"It is performant"),(0,o.kt)("li",{parentName:"ul"},"You can use it in both React and React Native."),(0,o.kt)("li",{parentName:"ul"},"It validates form fields out of the box."),(0,o.kt)("li",{parentName:"ul"},"It is in active maintenance."),(0,o.kt)("li",{parentName:"ul"},"It has an active community."),(0,o.kt)("li",{parentName:"ul"},"You can integrate React Hook Form with UI libraries like Material UI and\xa0",(0,o.kt)("a",{parentName:"li",href:"https://refine.dev/"},"refine"),". With refine, you can use the\xa0",(0,o.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/react-hook-form"},"@refinedev/react-hook-form"),"\xa0adapter. You can handle forms using ",(0,o.kt)("a",{parentName:"li",href:"https://refine.dev/docs/packages/documentation/react-hook-form/useForm/"},(0,o.kt)("inlineCode",{parentName:"a"},"useForm"))," hook in your refine CRUD apps with React Hook Form."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://refine.dev/blog/dynamic-forms-in-react-hook-form/"},"Refer to article on using React Hook Form dynamic form fields with refine"),".")),(0,o.kt)("h4",{id:"cons-of-react-hook-form-library"},"Cons of React Hook Form library"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"React Hook Form uses React hooks. Therefore, you can't use it directly in class components.")),(0,o.kt)("h3",{id:"formik"},"Formik"),(0,o.kt)("p",null,"Formik is a free, popular open-source package for building forms in React and React Native. It has built-in features for managing form validation, error messages, and form submissions. It has a minimal API surface area. Therefore, it shouldn't be hard to start using, even for an absolute beginner to Formik."),(0,o.kt)("p",null,"It has over thirty thousand GitHub stars, two million weekly downloads on the NPM package registry, and is Apache 2.0 Licensed."),(0,o.kt)("h4",{id:"how-to-use-formik"},"How to use Formik"),(0,o.kt)("p",null,"Depending on your package manager of choice, you can install Formik in any React or React Native project using one of the commands below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# npm\nnpm install formik\n\n# yarn\nyarn add formik\n")),(0,o.kt)("p",null,"If you are not using a package bundler like webpack, you can also load it from the unpkg CDN using an HTML ",(0,o.kt)("inlineCode",{parentName:"p"},"script")," tag like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/formik/dist/formik.umd.production.min.js"><\/script>\n')),(0,o.kt)("p",null,"The code below illustrates the most basic use of Formik for building a simple login form. The login form comprises text and email ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," fields. It uses the built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"Form"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Formik"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Field")," components."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Formik")," component is one of the built-in components you use when building forms with Formik. It internally uses render props. Therefore, you can pass a render prop to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Formik")," component or use it to wrap a child component. In addition to the render prop, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Formik")," Component also takes several other props you can look up in the documentation."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Form")," is another built-in component that wraps the HTML form element. Internally, it has access to the ",(0,o.kt)("inlineCode",{parentName:"p"},"onSubmit")," prop and several other props you pass to ",(0,o.kt)("inlineCode",{parentName:"p"},"Formik"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Field")," is a built-in component for adding ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," elements to your form. For a complete list of props it takes and how to use them, check the Formik documentation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Form, Formik, Field } from "formik";\n\nexport function LoginForm() {\n  return (\n    <>\n      <h1>Login form</h1>\n      <Formik\n        initialValues={{ userName: "", password: "" }}\n        onSubmit={(values) => console.log("values ", values)}\n      >\n        <Form>\n          <p>\n            <label htmlFor="username">Username</label>\n            <Field id="username" required type="text" name="userName" />\n          </p>\n          <p>\n            <label htmlFor="password">Password</label>\n            <Field id="password" required type="password" name="password" />\n          </p>\n          <button type="submit">Login</button>\n        </Form>\n      </Formik>\n    </>\n  );\n}\n')),(0,o.kt)("p",null,"Formik leaves form validation to you. You can do it yourself or use a third-party library like\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jquense/yup"},"Yup"),"."),(0,o.kt)("p",null,"The above code illustrates a simple use case of the Formik library. It has several complex features for solving a variety of problems. Check the Formik documentation for all the other features I have not hinted at in this article."),(0,o.kt)("h4",{id:"pros-of-formik"},"Pros of Formik"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can use it with both React and React Native."),(0,o.kt)("li",{parentName:"ul"},"It is free"),(0,o.kt)("li",{parentName:"ul"},"It is performant"),(0,o.kt)("li",{parentName:"ul"},"It has a flexible licensing requirement. Released under the terms of the Apache License version 2.0"),(0,o.kt)("li",{parentName:"ul"},"It is lightweight. According to\xa0",(0,o.kt)("a",{parentName:"li",href:"https://bundlejs.com/"},"bundlejs.com"),", the gzipped bundle size of Formik is 44.34KB."),(0,o.kt)("li",{parentName:"ul"},"It has excellent documentation."),(0,o.kt)("li",{parentName:"ul"},"It is easy to pick up."),(0,o.kt)("li",{parentName:"ul"},"It has bindings for popular UI frameworks like Ant design, Material UI, and Semantic UI.")),(0,o.kt)("h4",{id:"cons-of-formik"},"Cons of Formik"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Formik is not actively maintained at the moment. The last Git commit to the project repository was a year ago. Similarly, there hasn't been any new version released for at least one year.")),(0,o.kt)("h2",{id:"comparing-formik-and-react-hook-form"},"Comparing Formik and React Hook Form"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"Formik"),(0,o.kt)("th",{parentName:"tr",align:null},"React Hook Form"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Gzipped bundle size"),(0,o.kt)("td",{parentName:"tr",align:null},"44.34KB"),(0,o.kt)("td",{parentName:"tr",align:null},"12.12KB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Dependencies"),(0,o.kt)("td",{parentName:"tr",align:null},"7"),(0,o.kt)("td",{parentName:"tr",align:null},"0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GitHub stars"),(0,o.kt)("td",{parentName:"tr",align:null},"31.6k"),(0,o.kt)("td",{parentName:"tr",align:null},"32.2k")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Active maintenance"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Performance"),(0,o.kt)("td",{parentName:"tr",align:null},"Good"),(0,o.kt)("td",{parentName:"tr",align:null},"Good")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,o.kt)("td",{parentName:"tr",align:null},"Good"),(0,o.kt)("td",{parentName:"tr",align:null},"Good")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"License"),(0,o.kt)("td",{parentName:"tr",align:null},"Apache License version 2.0"),(0,o.kt)("td",{parentName:"tr",align:null},"MIT")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"NPM weekly downloads"),(0,o.kt)("td",{parentName:"tr",align:null},"2.1 Million"),(0,o.kt)("td",{parentName:"tr",align:null},"2.7 Million")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Pricing"),(0,o.kt)("td",{parentName:"tr",align:null},"Free"),(0,o.kt)("td",{parentName:"tr",align:null},"Free")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Community support"),(0,o.kt)("td",{parentName:"tr",align:null},"Good"),(0,o.kt)("td",{parentName:"tr",align:null},"Good")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Open GitHub issues"),(0,o.kt)("td",{parentName:"tr",align:null},"635"),(0,o.kt)("td",{parentName:"tr",align:null},"3")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Closed GitHub issues"),(0,o.kt)("td",{parentName:"tr",align:null},"1497"),(0,o.kt)("td",{parentName:"tr",align:null},"3528")))),(0,o.kt)("br",null),(0,o.kt)("div",null,(0,o.kt)("a",{href:"https://discord.gg/refine"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Form management is an area of web development that may be difficult to get right, especially when using front-end frameworks like React. The HTML5 built-in form functionality comes in handy when validating form fields, managing errors, and submitting forms.  "),(0,o.kt)("p",null,"However, solutions like Formik and React Hook Form also exist to simplify form management in React and React frameworks. Formik and React Hook Form are popular, free, open-source, mature, and battle-tested. They are both excellent packages for form management. You can use them alongside the native HTML5 form functionality."),(0,o.kt)("p",null,"On the flip side, judging by its commit and release history on GitHub, Formik is not actively maintained. While writing this article, the Formik GitHub repository has not had a recent Git commit or new release in the last year."),(0,o.kt)("p",null,"Additionally, Formik has a relatively larger bundle size than React Hook Form. According to\xa0",(0,o.kt)("a",{parentName:"p",href:"https://bundlejs.com/"},"bundlejs"),", the gzipped bundle size of Formik is 44.34KB, while that of React Hook Forms is 12.12 KB. Furthermore, Formik internally relies on seven dependencies, while React Hook Form has no dependency."),(0,o.kt)("p",null,"Given the pros and cons of both packages highlighted above, your best bet is React Hook Form when looking to use one of the two libraries in a new project. Hopefully, this article has given you insights into which form library to pick for your next project."))}d.isMDXComponent=!0}}]);