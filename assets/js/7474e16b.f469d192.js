"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[11354],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=l(n),y=i,u=m["".concat(p,".").concat(y)]||m[y]||c[y]||r;return n?a.createElement(u,s(s({ref:t},d),{},{components:n})):a.createElement(u,s({ref:t},d))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>c});n(67294);var a=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const o={title:"How to Use the TypeScript satisfies Operator",description:"TypeScript classes are a superset of JavaScript classes. This post covers the fundamentals of type annotations in TypeScript Classes and their associated quirks.",slug:"typescript-satisfies-operator",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-15-ts-satisfies/social.png",hide_table_of_contents:!1},p=void 0,l={permalink:"/blog/typescript-satisfies-operator",source:"@site/blog/2023-11-15-ts-satisfies.md",title:"How to Use the TypeScript satisfies Operator",description:"TypeScript classes are a superset of JavaScript classes. This post covers the fundamentals of type annotations in TypeScript Classes and their associated quirks.",date:"2023-11-15T00:00:00.000Z",formattedDate:"November 15, 2023",tags:[{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:8.41,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"How to Use the TypeScript satisfies Operator",description:"TypeScript classes are a superset of JavaScript classes. This post covers the fundamentals of type annotations in TypeScript Classes and their associated quirks.",slug:"typescript-satisfies-operator",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-15-ts-satisfies/social.png",hide_table_of_contents:!1},prevItem:{title:"Using SVGs in React",permalink:"/blog/react-svg"},nextItem:{title:"A Detailed Guide on kubectl describe",permalink:"/blog/kubectl-describe-pod"},relatedPosts:[{title:"How to use TypeScript Partial Type?",description:"We'll explain the TypeScript Partial utility type with examples",permalink:"/blog/typescript-partial-utility-type",formattedDate:"October 10, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:3.925,date:"2022-10-10T00:00:00.000Z"},{title:"TypeScript vs JavaScript - A Detailed Comparison",description:"This post provides an insightful comparison and contrast between TypeScript and its ECMA standardized forerunner, JavaScript.",permalink:"/blog/javascript-vs-ts",formattedDate:"November 21, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:16.925,date:"2023-11-21T00:00:00.000Z"},{title:"Essentials of TypeScript Classes",description:"TypeScript classes are a superset of JavaScript classes. This post covers the fundamentals of type annotations in TypeScript Classes and their associated quirks.",permalink:"/blog/typescript-classes",formattedDate:"November 7, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:20.04,date:"2023-11-07T00:00:00.000Z"}],authorPosts:[{title:"A Definitive guide on JavaScript every() Method",description:"In this post, we expound on with examples of what the JavaScript every method is, how it works.",permalink:"/blog/javascript-every-method",formattedDate:"November 2, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:9.63,date:"2022-11-02T00:00:00.000Z"},{title:"How to Use JavaScript Array some",description:"JavaScript some method implementation on Array with examples",permalink:"/blog/javascript-some-method",formattedDate:"October 25, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:7.96,date:"2022-10-25T00:00:00.000Z"},{title:"TypeScript vs JavaScript - A Detailed Comparison",description:"This post provides an insightful comparison and contrast between TypeScript and its ECMA standardized forerunner, JavaScript.",permalink:"/blog/javascript-vs-ts",formattedDate:"November 21, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:16.925,date:"2023-11-21T00:00:00.000Z"}]},d={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"TypeScript Setup",id:"typescript-setup",level:3},{value:"Prior Knowledge",id:"prior-knowledge",level:3},{value:"What is the TypeScript satisfies Operator ?",id:"what-is-the-typescript-satisfies-operator-",level:2},{value:"TypeScript satisfies Leverages Contextual Typing",id:"typescript-satisfies-leverages-contextual-typing",level:3},{value:"TypeScript satisfies - Annotated Type Has Precedence Over <code>satisfies</code> Type",id:"typescript-satisfies---annotated-type-has-precedence-over-satisfies-type",level:3},{value:"TypeScript satisfies - Checking for Property Value Conformance",id:"typescript-satisfies---checking-for-property-value-conformance",level:2},{value:"TypeScript satisfies - Property Name Constraining",id:"typescript-satisfies---property-name-constraining",level:2},{value:"TypeScript satisfies - Property Name Fulfillment",id:"typescript-satisfies---property-name-fulfillment",level:2},{value:"TypeScript satisfies - Optional Member Conformance",id:"typescript-satisfies---optional-member-conformance",level:2},{value:"Summary",id:"summary",level:2}],m={toc:c};function y(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This post is about how to use TypeScript ",(0,a.kt)("inlineCode",{parentName:"p"},"satisfies")," operator to effectively apply property value conformance in complex object types with nested properties."),(0,a.kt)("p",null,"TypeScript's ",(0,a.kt)("inlineCode",{parentName:"p"},"satisfies")," operator comes with a few features that allow developers to check and validate the value of a variable against a given type. It was introduced in version ",(0,a.kt)("inlineCode",{parentName:"p"},"v4.9")," specifically to match type of variable values after their assignment, rather than setting an annotation prior to it."),(0,a.kt)("p",null,"As of the features added to the current iteration (dating November, 2023), ",(0,a.kt)("inlineCode",{parentName:"p"},"satisfies")," supports property value conformance, property name constraining and property name fulfillment -- largely associated with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Record<>")," utility type. It also allows optional member conformance with partial types transformed with ",(0,a.kt)("inlineCode",{parentName:"p"},"Partial<>"),"."),(0,a.kt)("p",null,"In this post, we get into the details of using TypeScript ",(0,a.kt)("inlineCode",{parentName:"p"},"satisfies")," while validating types of property values in a fairly nested user (",(0,a.kt)("inlineCode",{parentName:"p"},"joe"),") object. We first consider how ",(0,a.kt)("inlineCode",{parentName:"p"},"satisfies")," is focused on type checking and validation of variable values, rather than their annotation. We explore examples that further illustrate type validation of nested properties of objects - which we transform with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Record<>")," utility. We also understand how ",(0,a.kt)("inlineCode",{parentName:"p"},"satisfies")," is geared to handle associated property name constraining and fulfillment that come with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Record<>")," type. In the end, we go through an example of partial member conformance with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Partial<>")," transformation utility."),(0,a.kt)("p",null,"Step by step, we'll cover the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#what-is-the-typescript-satisfies-operator-"},"What is the TypeScript satisfies Operator ?"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#typescript-satisfies-leverages-contextual-typing"},"TypeScript satisfies Leverages Contextual Typing")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#typescript-satisfies---annotated-type-has-precedence-over-satisfies-type"},"TypeScript satisfies - Annotated Type Has Precedence Over ",(0,a.kt)("inlineCode",{parentName:"a"},"satisfies")," Type")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#typescript-satisfies---checking-for-property-value-conformance"},"TypeScript satisfies - Checking for Property Value Conformance")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#typescript-satisfies---property-name-constraining"},"TypeScript satisfies - Property Name Constraining")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#typescript-satisfies---property-name-fulfillment"},"TypeScript satisfies - Property Name Fulfillment")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#typescript-satisfies---optional-member-conformance"},"TypeScript satisfies - Optional Member Conformance"))),(0,a.kt)("h3",{id:"typescript-setup"},"TypeScript Setup"),(0,a.kt)("p",null,"Your JavaScript engine has to have TypeScript installed. It could be ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en"},(0,a.kt)("strong",{parentName:"a"},"Node.js"))," in your local machine with TypeScript supported or you could use the ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/play#code"},"TypeScript Playground"),"."),(0,a.kt)("h3",{id:"prior-knowledge"},"Prior Knowledge"),(0,a.kt)("p",null,"The TypeScript concepts covered in this post range from Intermediate to Advanced. We assume you are already familiar with the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types"},"TypeScript Union Types")),(0,a.kt)("li",{parentName:"ol"},"Typing a variable in TypeScript. If you are not already familiar with this, please go through the examples ",(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-annotations-on-variables"},"here")),(0,a.kt)("li",{parentName:"ol"},"Typing an object literal in TypeScript. More ",(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/2/objects.html"},"here")),(0,a.kt)("li",{parentName:"ol"},"Utility types, particularly how to transform types with the ",(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type"},(0,a.kt)("inlineCode",{parentName:"a"},"Record<>"))," and ",(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype"},(0,a.kt)("inlineCode",{parentName:"a"},"Partial<>"))," utilities. Feel free to get a refesher on all TypeScript utility types from the ",(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/utility-types.html"},"docs here"))),(0,a.kt)("h2",{id:"what-is-the-typescript-satisfies-operator-"},"What is the TypeScript satisfies Operator ?"),(0,a.kt)("p",null,"TypeScript's ",(0,a.kt)("inlineCode",{parentName:"p"},"satisfies")," operator is a syntax that helps developers validate the type of a variable's value after assignment. It does this by first matching the value to the type and then remembering the internals of the matched type, i.e. the properties and methods. As such, ",(0,a.kt)("inlineCode",{parentName:"p"},"satisfies")," keeps track of the types of the nested property values, helps catching otherwise uncaught TypeScript errors, and complying deeply with nested property types as well. It is thus a syntax aimed specifically for validating types on nested property values of objects with certain degrees of complexity."),(0,a.kt)("p",null,"Here's a nested ",(0,a.kt)("inlineCode",{parentName:"p"},"joe")," user object example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'type TAddress = {\n  addressLine1: string;\n  addressLine2?: string;\n  postCode: number | string;\n  city: string;\n  state: string;\n  country: string;\n};\n\ntype UserKeys = "username" | "email" | "firstName" | "lastName" | "address";\ntype TUser = Record<UserKeys, string | TAddress>;\n\nconst joe = {\n  username: "joe_hiyden",\n  email: "joe@exmaple.com",\n  firstName: "Joe",\n  lastName: "Hiyden",\n  address: {\n    addressLine1: "1, New Avenue",\n    addressLine2: "Old Avenue",\n    postCode: 12345,\n    city: "California",\n    state: "California",\n    country: "USA",\n  },\n} satisfies TUser;\n\nconsole.log(joe.address.postCode); // 12345\n')),(0,a.kt)("p",null,"Notice in the example that, we have used ",(0,a.kt)("inlineCode",{parentName:"p"},"TUser")," on ",(0,a.kt)("inlineCode",{parentName:"p"},"joe")," for its value validation with ",(0,a.kt)("inlineCode",{parentName:"p"},"satisfies"),". And ",(0,a.kt)("inlineCode",{parentName:"p"},"TUser")," is a transformed record with ",(0,a.kt)("inlineCode",{parentName:"p"},"Record<UserKeys, string | TAddress>")),(0,a.kt)("h3",{id:"typescript-satisfies-leverages-contextual-typing"},"TypeScript satisfies Leverages Contextual Typing"),(0,a.kt)("p",null,"It is necessary to understand that type inference before assignment is different from type validation of the assigned value with ",(0,a.kt)("inlineCode",{parentName:"p"},"satisfies"),". In other words, ",(0,a.kt)("inlineCode",{parentName:"p"},"joe")," above has a contextual typing: its type is set to itself and then ",(0,a.kt)("inlineCode",{parentName:"p"},"satisfies")," checks ",(0,a.kt)("inlineCode",{parentName:"p"},"joe"),"'s internals against it to validate the types for all properties and their values, including nested ones. You can find ",(0,a.kt)("inlineCode",{parentName:"p"},"joe"),"'s type when you hover over ",(0,a.kt)("inlineCode",{parentName:"p"},"joe"),". You'll see this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// joe's inferred type is the object itself\n\nconst joe: {\n  username: string;\n  email: string;\n  firstName: string;\n  lastName: string;\n  address: {\n    addressLine1: string;\n    addressLine2: string;\n    postCode: number;\n    city: string;\n    state: string;\n    country: string;\n  };\n};\n")),(0,a.kt)("h3",{id:"typescript-satisfies---annotated-type-has-precedence-over-satisfies-type"},"TypeScript satisfies - Annotated Type Has Precedence Over ",(0,a.kt)("inlineCode",{parentName:"h3"},"satisfies")," Type"),(0,a.kt)("p",null,"When we explicitly annotate the variable ",(0,a.kt)("inlineCode",{parentName:"p"},"joe"),", the annotated type gains precedence during type checking over the one passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"satisfies"),". We get errors indicating the annotated type's loose specificity on its nested properties. Notice the ",(0,a.kt)("inlineCode",{parentName:"p"},"2339")," error when we annotate ",(0,a.kt)("inlineCode",{parentName:"p"},"joe")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"TUser"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'type TAddress = {\n  addressLine1: string;\n  addressLine2?: string;\n  postCode: number | string;\n  city: string;\n  state: string;\n  country: string;\n};\n\ntype UserKeys = "username" | "email" | "firstName" | "lastName" | "address";\ntype TUser = Record<UserKeys, string | TAddress>;\n\n// highlight-next-line\nconst joe: TUser = {\n  username: "joe_hiyden",\n  email: "joe@exmaple.com",\n  firstName: "Joe",\n  lastName: "Hiyden",\n  address: {\n    addressLine1: "1, New Avenue",\n    addressLine2: "Mission Bay",\n    postCode: 12345,\n    city: "California",\n    state: "California",\n    country: "USA",\n  },\n} satisfies TUser;\n\nconsole.log(joe.address.postCode); // Property \'postCode\' does not exist on type \'string | TAddress\'. Property \'postCode\' does not exist on type \'string\'.(2339)\n')),(0,a.kt)("p",null,"In the modification above, we are using the same ",(0,a.kt)("inlineCode",{parentName:"p"},"TUser")," type for both annotating ",(0,a.kt)("inlineCode",{parentName:"p"},"joe")," and for validating it with ",(0,a.kt)("inlineCode",{parentName:"p"},"satisfies"),". Clearly, since annotating with ",(0,a.kt)("inlineCode",{parentName:"p"},"TUser")," gains precedence, it doesn't keep track of the internal information we are trying to get from inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"address")," object nested in ",(0,a.kt)("inlineCode",{parentName:"p"},"joe"),". TypeScript confuses the ",(0,a.kt)("inlineCode",{parentName:"p"},"TAddress")," type with the other ones typed with ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,a.kt)("p",null,"The point to be delivered here is that type inference or annotation of the variable declaration, ",(0,a.kt)("inlineCode",{parentName:"p"},"joe"),", is not the same thing as type validation of its value with ",(0,a.kt)("inlineCode",{parentName:"p"},"satisfies"),". And ",(0,a.kt)("inlineCode",{parentName:"p"},"satisfies")," is not intended for annotation, but rather largely for validating conformance."),(0,a.kt)("h2",{id:"typescript-satisfies---checking-for-property-value-conformance"},"TypeScript satisfies - Checking for Property Value Conformance"),(0,a.kt)("p",null,"Annotating ",(0,a.kt)("inlineCode",{parentName:"p"},"joe")," above with ",(0,a.kt)("inlineCode",{parentName:"p"},"TUser")," prevents access to ",(0,a.kt)("inlineCode",{parentName:"p"},"joe.address")," on the grounds of TypeScript's ",(0,a.kt)("em",{parentName:"p"},"typal dissonance")," between the union members: ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TAddress"),". Removing it and reinstating validation with ",(0,a.kt)("inlineCode",{parentName:"p"},"satisfies")," restores clarity and access, because ",(0,a.kt)("inlineCode",{parentName:"p"},"satisfies")," keeps track of the types of all property names and values at nested levels:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'type TAddress = {\n  addressLine1: string;\n  addressLine2?: string;\n  postCode: number | string;\n  city: string;\n  state: string;\n  country: string;\n};\n\ntype UserKeys = "username" | "email" | "firstName" | "lastName" | "address";\ntype TUser = Record<UserKeys, string | TAddress>;\n\nconst joe = {\n  username: "joe_hiyden",\n  email: "joe@exmaple.com",\n  firstName: "Joe",\n  lastName: "Hiyden",\n  address: {\n    addressLine1: "1, New Avenue",\n    addressLine2: "Mission Bay",\n    postCode: 12345,\n    city: "California",\n    state: "California",\n    country: "USA",\n  },\n} satisfies TUser;\n\nconsole.log(joe.address.postCode); // 12345\n')),(0,a.kt)("p",null,"Since we are using a number for ",(0,a.kt)("inlineCode",{parentName:"p"},"joe.address.postCode")," above, ",(0,a.kt)("inlineCode",{parentName:"p"},"satisfies")," correctly tracks it and no longer leads to the ",(0,a.kt)("inlineCode",{parentName:"p"},"2339")," error."),(0,a.kt)("h2",{id:"typescript-satisfies---property-name-constraining"},"TypeScript satisfies - Property Name Constraining"),(0,a.kt)("p",null,"Notice that we are using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Record<>")," utility to derive a record type for the user. TypeScript ",(0,a.kt)("inlineCode",{parentName:"p"},"satisfies")," is generally used in conjunction with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Record<>")," type. And as you notice already, we are applying property name constraints to limit ",(0,a.kt)("inlineCode",{parentName:"p"},"TUser"),"'s keys with: ",(0,a.kt)("inlineCode",{parentName:"p"},'type UserKeys = "username" | "email" | "firstName" | "lastName" | "address";'),"."),(0,a.kt)("p",null,"Due to this, property overloading is prevented. In the below version, ",(0,a.kt)("inlineCode",{parentName:"p"},"role")," is not included in ",(0,a.kt)("inlineCode",{parentName:"p"},"UserKeys"),", so we get a complain:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'type TAddress = {\n  addressLine1: string;\n  addressLine2?: string;\n  postCode: number | string;\n  city: string;\n  state: string;\n  country: string;\n};\n\ntype UserKeys = "username" | "email" | "firstName" | "lastName" | "address";\ntype TUser = Record<UserKeys, string | TAddress>;\n\nconst joe = {\n  username: "joe_hiyden",\n  email: "joe@exmaple.com",\n  firstName: "Joe",\n  lastName: "Hiyden",\n\n  // Complains about property overloading\n  // highlight-start\n  role: "Admin", // Object literal may only specify known properties, and \'role\' does not exist in type \'TUser\'.(1360)\n  // highlight-end\n  address: {\n    addressLine1: "1, New Avenue",\n    addressLine2: "Mission Bay",\n    postCode: 12345,\n    city: "California",\n    state: "California",\n    country: "USA",\n  },\n} satisfies TUser;\n\nconsole.log(joe.address.postCode); // 12345\n')),(0,a.kt)("h2",{id:"typescript-satisfies---property-name-fulfillment"},"TypeScript satisfies - Property Name Fulfillment"),(0,a.kt)("p",null,"Similarly, if we have a missing property in ",(0,a.kt)("inlineCode",{parentName:"p"},"joe"),", we get accused till we get all properties included:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'type TAddress = {\n  addressLine1: string;\n  addressLine2?: string;\n  postCode: number | string;\n  city: string;\n  state: string;\n  country: string;\n};\n\ntype UserKeys = "username" | "email" | "firstName" | "lastName" | "address";\ntype TUser = Record<UserKeys, string | TAddress>;\n\nconst joe = {\n  username: "joe_hiyden",\n  email: "joe@exmaple.com",\n  firstName: "Joe",\n  // lastName missing\n  address: {\n    addressLine1: "1, New Avenue",\n    addressLine2: "Mission Bay",\n    postCode: 12345,\n    city: "California",\n    state: "California",\n    country: "USA",\n  },\n  // Complains about missing property at `satisfies`\n  // highlight-next-line\n} satisfies TUser; //  Property \'lastName\' is missing in type \'{ username: string; email: string; firstName: string; address: { addressLine1: string; addressLine2: string; postCode: number; city: string; state: string; country: string; }; }\' but required in type \'TUser\'.(1360)\n')),(0,a.kt)("h2",{id:"typescript-satisfies---optional-member-conformance"},"TypeScript satisfies - Optional Member Conformance"),(0,a.kt)("p",null,"Instead of mandatory property name fulfillment, we can force an optional member conformance with a ",(0,a.kt)("inlineCode",{parentName:"p"},"Partial<>")," transformation. In the following update, there's no complains about any missing property (",(0,a.kt)("inlineCode",{parentName:"p"},"lastName"),"). We are all good:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'type TAddress = {\n  addressLine1: string;\n  addressLine2?: string;\n  postCode: number | string;\n  city: string;\n  state: string;\n  country: string;\n};\n\ntype UserKeys = "username" | "email" | "firstName" | "lastName" | "address";\ntype TUser = Record<UserKeys, string | TAddress>;\n\nconst joe = {\n  username: "joe_hiyden",\n  email: "joe@exmaple.com",\n  firstName: "Joe",\n  address: {\n    addressLine1: "1, New Avenue",\n    addressLine2: "Mission Bay",\n    postCode: 12345,\n    city: "California",\n    state: "California",\n    country: "USA",\n  },\n  // highlight-next-line\n} satisfies Partial<TUser>; // No complains about missing `lastName`\n')),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"In this post, we covered the ",(0,a.kt)("inlineCode",{parentName:"p"},"satisfies")," operator, a ",(0,a.kt)("inlineCode",{parentName:"p"},"v4.9")," addition to TypeScript. We discovered that TypeScript ",(0,a.kt)("inlineCode",{parentName:"p"},"satisfies")," offers a set of features primarily aimed for type validation of assigned variable values and their nested properties and values. We illustrated through examples that the ",(0,a.kt)("inlineCode",{parentName:"p"},"satisfies")," operator is used in conjunction with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Record<>")," utility type. In our examples, we found out that property name constraining, fulfillment associated with a ",(0,a.kt)("inlineCode",{parentName:"p"},"Record<>")," derived type are handled well by TypeScript ",(0,a.kt)("inlineCode",{parentName:"p"},"satisfies"),". Finally, we also saw how ",(0,a.kt)("inlineCode",{parentName:"p"},"satisfies")," can be used to enforce partial member conformance with ",(0,a.kt)("inlineCode",{parentName:"p"},"Partial<>")," transformation of a variable's value."))}y.isMDXComponent=!0}}]);