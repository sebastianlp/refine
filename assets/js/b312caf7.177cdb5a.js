"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86486],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(a),u=o,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||n;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},26427:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>d});a(67294);var r=a(3905);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const s={title:"gRPC vs REST - A Brief Comparison",description:"We'll explore practical use cases of REST and gRPC to enable you to select the most appropriate API for your project.",slug:"grpc-vs-rest",authors:"deborah_emeni",tags:["comparison","javascript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-23-grpc-vs-rest/social.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/grpc-vs-rest",source:"@site/blog/2023-06-23-grpc-vs-rest.md",title:"gRPC vs REST - A Brief Comparison",description:"We'll explore practical use cases of REST and gRPC to enable you to select the most appropriate API for your project.",date:"2023-06-23T00:00:00.000Z",formattedDate:"June 23, 2023",tags:[{label:"comparison",permalink:"/blog/tags/comparison"},{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:12.52,hasTruncateMarker:!1,authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],frontMatter:{title:"gRPC vs REST - A Brief Comparison",description:"We'll explore practical use cases of REST and gRPC to enable you to select the most appropriate API for your project.",slug:"grpc-vs-rest",authors:"deborah_emeni",tags:["comparison","javascript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-23-grpc-vs-rest/social.png",hide_table_of_contents:!1},prevItem:{title:"A Detailed Guide on Docker run Command",permalink:"/blog/docker-run-command"},nextItem:{title:"TypeScript Record Type with Examples",permalink:"/blog/typescript-record-type"},relatedPosts:[{title:"How to Use JavaScript Slice Method",description:"JavaScript Slice method implementation on Array and Strings with examples",permalink:"/blog/javascript-slice",formattedDate:"October 17, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.215,date:"2022-10-17T00:00:00.000Z"},{title:"Best React Admin Dashboard Libraries 2023",description:"We have curated a compilation of the 5 best React admin dashboard libraries that encompass all the essential features needed to create modern and feature-rich dashboards with minimal effort.",permalink:"/blog/react-admin-dashboard",formattedDate:"March 17, 2023",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:6.495,date:"2023-03-17T00:00:00.000Z"},{title:"React-admin vs refine - Which React Framework is Best for B2B Apps?",description:"We'll compare the architectural structures of two web development frameworks - refine and React-admin.",permalink:"/blog/react-admin-vs-refine",formattedDate:"August 12, 2023",authors:[{name:"Ali Emir",title:"Software Developer",imageURL:"https://github.com/aliemir.png",key:"ali_emir"}],readingTime:37.28,date:"2023-08-12T00:00:00.000Z"}],authorPosts:[{title:"React Slick Examples - Creating a carousel",description:"We'll see how to use React Slick in your React projects through a step-by-step guide and hands-on demo.",permalink:"/blog/react-slick",formattedDate:"October 29, 2023",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:18.165,date:"2023-10-29T00:00:00.000Z"},{title:"How to use Conditional Rendering in React",description:"We'll implement Conditional Rendering in React and the various ways to use it in your React applications.",permalink:"/blog/react-conditional-rendering",formattedDate:"December 14, 2022",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:10.1,date:"2022-12-14T00:00:00.000Z"},{title:"How to use React Strict Mode in React 18",description:"What is Strict Mode in React 18 and how to use it to find and fix bugs in your React application.",permalink:"/blog/react-strict-mode-in-react-18",formattedDate:"November 24, 2022",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:6.905,date:"2022-11-24T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Understanding APIs",id:"understanding-apis",level:2},{value:"Explanation of REST APIs",id:"explanation-of-rest-apis",level:2},{value:"How REST APIs work",id:"how-rest-apis-work",level:2},{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Step 3",id:"step-3",level:3},{value:"Step 4",id:"step-4",level:3},{value:"Step 5",id:"step-5",level:3},{value:"Explanation of gRPC APIs",id:"explanation-of-grpc-apis",level:2},{value:"How gRPC APIs work",id:"how-grpc-apis-work",level:2},{value:"Step 1",id:"step-1-1",level:3},{value:"Step 2",id:"step-2-1",level:3},{value:"Step 3",id:"step-3-1",level:3},{value:"How the features of REST API differ from gRPC API",id:"how-the-features-of-rest-api-differ-from-grpc-api",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Resources",id:"resources",level:2}],h={toc:d};function u(e){var{components:t}=e,a=i(e,["components"]);return(0,r.kt)("wrapper",n(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){o(e,t,a[t])}))}return e}({},h,a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In this modern age, building applications with Application Programming Interfaces (APIs) that are scalable and efficient has greatly benefited businesses, developers, and users. To build an interactive application, you will need an API that enables communication and data exchange among various applications and services."),(0,r.kt)("p",null,"As a result, frameworks that help create high-performing APIs have been developed in recent years. Some examples of such frameworks include Representational State Transfer (",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Representational_state_transfer#:~:text=Representational%20state%20transfer%20(REST)%20is,as%20the%20Web%2C%20should%20behave."},"REST"),") and Google Remote Procedure Call (",(0,r.kt)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC"),")."),(0,r.kt)("p",null,"This article will teach you about REST APIs and gRPC APIs, including their definitions, functionalities, and distinctions. Additionally, you\u2019ll explore various scenarios that highlight practical use cases of REST and gRPC to enable you to select the most appropriate framework for your project."),(0,r.kt)("p",null,"Steps we'll cover:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#grpc-vs-rest"},"gRPC vs REST"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#understanding-apis"},"Understanding APIs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#explanation-of-rest-apis"},"Explanation of REST APIs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#how-rest-apis-work"},"How REST APIs work")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#explanation-of-grpc-apis"},"Explanation of gRPC APIs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#how-grpc-apis-work"},"How gRPC APIs work")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#how-the-features-of-rest-api-differ-from-grpc-api"},"How the features of REST API differ from gRPC API"))))),(0,r.kt)("h2",{id:"understanding-apis"},"Understanding APIs"),(0,r.kt)("p",null,"Developers often need to integrate various services from external sources or exchange data with other applications to build highly functional applications. APIs are crucial in this process by serving as intermediaries between different systems. They define rules or protocols that facilitate communication between services or applications. By utilizing APIs, developers can access and incorporate functionalities from other applications into their own, enabling them to focus on other tasks or functionalities within their application."),(0,r.kt)("p",null,"Let's look at a simple example that describes APIs and their importance in application development."),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-23-grpc-vs-rest/illustration.png",alt:"grpc-vs-rest"})),(0,r.kt)("p",null,"For instance, let's say you are building a book application called BookFinder (that provides information about books) and want to design an API for it."),(0,r.kt)("p",null,"To enhance the functionality of your application, you decide to integrate it with a book database service by utilizing their API, which you found online. Using their API, you can access functionalities such as retrieving book details like title, description, and author."),(0,r.kt)("p",null,"Here's what happens: when a user searches for a book in your BookFinder application, you make an API request to the book database service, passing the search query as a parameter. The API then processes the request and returns a response containing the relevant book information."),(0,r.kt)("h2",{id:"explanation-of-rest-apis"},"Explanation of REST APIs"),(0,r.kt)("p",null,"Representational State Transfer (REST) API is a popular and widely accepted architectural style that provides a set of principles that guide the design of APIs and ",(0,r.kt)("a",{parentName:"p",href:"https://microservices.io/"},"microservices"),". This approach promotes the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Scalability"),": REST APIs use principles such as Statelessness, which refers to a situation where the client request contains all the information needed to process the request on the server. This means that the server can handle requests from multiple clients, ensuring the system can handle increasing traffic which means scalability.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Loose Coupling"),": REST uses a standard communication protocol called ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/HTTP"},"HTTP")," and provides a common interface for the Client and Server components. As the components adhere to the common interface, REST promotes interdependence, meaning that updates or changes made to one component will not affect the others in the system. This process, known as Loose Coupling, promotes modularity and makes it easier to manage the components in the system.")),(0,r.kt)("p",null,"Since REST API is built on HTTP (specifically the ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/Protocols/rfc2616/rfc2616.html"},"HTTP/1.1")," version) protocol, it utilizes HTTP methods such as GET, POST, PUT, and DELETE to perform operations on resources. Using the architectural style of REST API, a client sends a request to the server using one of these HTTP methods to retrieve resources. The resources on the server are identified or accessed through a ",(0,r.kt)("a",{parentName:"p",href:"https://g.co/kgs/TC4KqJ"},"Uniform Resource Locator")," (URL). Once the resources are identified, the server sends back responses in a standard format, typically ",(0,r.kt)("a",{parentName:"p",href:"https://g.co/kgs/Ph6GfG"},"JSON")," (JavaScript Object Notation)"),(0,r.kt)("h2",{id:"how-rest-apis-work"},"How REST APIs work"),(0,r.kt)("p",null,"Let's see an example that demonstrates how REST APIs work, using the illustration from the previous section explaining APIs."),(0,r.kt)("p",null,"Consider a scenario where a user initiates a search for a book titled \u201cLord of the Rings.\u201d on your ",(0,r.kt)("strong",{parentName:"p"},"BookFinder")," application. The following steps will be carried out:"),(0,r.kt)("h3",{id:"step-1"},"Step 1"),(0,r.kt)("p",null,"Your application, also called the Client, will send a request using the HTTP method (",(0,r.kt)("strong",{parentName:"p"},"GET)")," to the database service containing information about the book. The request will be sent to a specific API endpoint, represented by a URL such as \u201c",(0,r.kt)("strong",{parentName:"p"},"/api/books\u201d"),", already designed to handle book-related requests."),(0,r.kt)("p",null,"A query-string format includes the search query as a parameter in the endpoint URL. Here's an example of how your request will look:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"  GET /api/books?title=Lord%20of%20the%20Rings HTTP/1.1\n  Host: book-database-service.com\n")),(0,r.kt)("p",null,"In the request, the search query parameter has been specified as key-value pairs. The key represents the parameter's name, while the value represents the search query. In this case, the key is 'title,' and the value is 'Lord of the Rings,' which has been included in the request URL. To handle spaces and special characters, the value is ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/URL_encoding"},"URL-encoded")," with ",(0,r.kt)("strong",{parentName:"p"},"%20"),". The ",(0,r.kt)("strong",{parentName:"p"},"Host")," indicates the actual server where the API is located."),(0,r.kt)("h3",{id:"step-2"},"Step 2"),(0,r.kt)("p",null,"After receiving the request, the database service's API processes it, extracting the query parameter '",(0,r.kt)("strong",{parentName:"p"},"title"),"' from the URL to determine the book name the user is searching for, such as 'Lord of the Rings'."),(0,r.kt)("h3",{id:"step-3"},"Step 3"),(0,r.kt)("p",null,"Now that the API knows the name of the book the user is searching for, it interacts with the database. The API utilizes search algorithms or queries the database using a Database Query Language like ",(0,r.kt)("a",{parentName:"p",href:"https://g.co/kgs/4XJRMt"},"SQL")," to find books in the database collection that match the specified title."),(0,r.kt)("p",null,"Here are the details of the retrieved book:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n  "title": "Lord of the Rings",\n  "description": "The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil..",\n  "author": "J. R. R. Tolkien\u201d\n}\n')),(0,r.kt)("h3",{id:"step-4"},"Step 4"),(0,r.kt)("p",null,"Since the database service API uses the REST API architectural style, it returns the retrieved details to your BookFinder application in ",(0,r.kt)("a",{parentName:"p",href:"https://g.co/kgs/fQaZqZ"},"JSON")," format as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n  "title": "Lord of the Rings",\n  "description": "The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil..",\n  "author": "J. R. R. Tolkien\n}\n')),(0,r.kt)("p",null,"From the JSON response, you can observe the ",(0,r.kt)("strong",{parentName:"p"},"HTTP Response")," ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes"},(0,r.kt)("strong",{parentName:"a"},"Status Cod")),(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes"},"e"),", which indicates the success or failure of the request. A Status Code of ",(0,r.kt)("strong",{parentName:"p"},"200 OK")," signifies a successful request, prompting the return of the book information."),(0,r.kt)("p",null,"Additionally, take note of the included ",(0,r.kt)("strong",{parentName:"p"},"Content-Type")," header, which provides further information about the response, stating that the response body contains JSON-formatted data."),(0,r.kt)("h3",{id:"step-5"},"Step 5"),(0,r.kt)("p",null,"This is where your BookFinder application receives the HTTP response from the database service's API and extracts the information needed to perform necessary operations or display it to users. "),(0,r.kt)("h2",{id:"explanation-of-grpc-apis"},"Explanation of gRPC APIs"),(0,r.kt)("p",null,"Google Remote Procedure Call (",(0,r.kt)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC"),") is a modern framework that provides a standard for software components to communicate with each other in a distributed system. It facilitates the exchange of requests and responses."),(0,r.kt)("p",null,"gRPC is built on ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Remote_procedure_call"},"RPC")," (Remote Procedure Protocol), which is a high-speed communication model. It leverages ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HTTP/2"},"HTTP/2"),", allowing clients to invoke functions from a remote server as if they were local. This capability enables developers to integrate services programmed in different languages."),(0,r.kt)("p",null,"Since gRPC is built on top of HTTP/2, it has access to certain features that offer the following benefits:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"High Performance"),": gRPC utilizes ",(0,r.kt)("a",{parentName:"li",href:"https://protobuf.dev/"},"Protocol Buffers"),", a data format for serializing structured data, which helps efficiently package and send data. Using the gRPC framework, data is transferred at high-speed thanks to the utilization of the HTTP/2 protocol. This combination of efficiency and speed in data communication leads to high-performance applications. gRPC also ensures high ",(0,r.kt)("a",{parentName:"li",href:"https://grpc.io/docs/what-is-grpc/core-concepts/#bidirectional-streaming-rpc"},"bidirectional streaming")," performance, allowing simultaneous data transmission between clients and servers.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Compatibility and Interoperability"),": The language used for defining gRPC APIs is called ",(0,r.kt)("a",{parentName:"li",href:"https://protobuf.dev/"},"Protobufs"),", which offers several benefits in defining services and data. Using Protobufs provides a platform-independent and ",(0,r.kt)("a",{parentName:"li",href:"https://g.co/kgs/ypCn7C"},"language-agnostic")," way to structure data. With Protobufs, you can write code in different programming languages, and the resulting data will seamlessly communicate with other systems. The platform-independence promotes compatibility and interoperability with other systems.")),(0,r.kt)("h2",{id:"how-grpc-apis-work"},"How gRPC APIs work"),(0,r.kt)("p",null,"Let's explore the functionality of the gRPC API by using your BookFinder application as an example."),(0,r.kt)("h3",{id:"step-1-1"},"Step 1"),(0,r.kt)("p",null,"To enable users of your application to search for a book and find the exact one they are looking for, you'll need to begin by creating a protocol buffer file named '",(0,r.kt)("strong",{parentName:"p"},"book.proto"),"'. This file will include the definition of a gRPC service called ",(0,r.kt)("inlineCode",{parentName:"p"},"BookService")," and its methods. One such method you'll need to create is ",(0,r.kt)("inlineCode",{parentName:"p"},"BookSearch"),", which will take a search query as input and return the book details as output."),(0,r.kt)("p",null,"Here's an example of how your ",(0,r.kt)("strong",{parentName:"p"},"book.proto")," file should be structured:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'syntax = "proto3";\n\nservice BookService {\n  rpc BookSearch(BookRequest) returns (BookResponse) {}\n}\n\nmessage BookRequest {\n  string search_query = 1;\n}\n\nmessage BookResponse {\n  string title = 1;\n  string description = 2;\n  string author = 3;\n}\n')),(0,r.kt)("p",null,"In the code above, the BookService is defined using the protobuf syntax of the ",(0,r.kt)("a",{parentName:"p",href:"https://protobuf.dev/programming-guides/proto3/"},(0,r.kt)("strong",{parentName:"a"},"proto3"))," ****version. It includes the ",(0,r.kt)("inlineCode",{parentName:"p"},"BookSearch")," method, which inputs a ",(0,r.kt)("inlineCode",{parentName:"p"},"BookRequest")," message and returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"BookResponse"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"BookRequest")," message has a single field called ",(0,r.kt)("inlineCode",{parentName:"p"},"search_query"),", which the user provides. The ",(0,r.kt)("inlineCode",{parentName:"p"},"BookResponse")," message has fields for the book's ",(0,r.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"description"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"author"),"."),(0,r.kt)("h3",{id:"step-2-1"},"Step 2"),(0,r.kt)("p",null,"After defining your Protocol Buffer file, you need to generate the necessary gRPC code using the ",(0,r.kt)("a",{parentName:"p",href:"https://grpc.io/docs/protoc-installation/"},"protoc compiler")," with the Node.js plugin (if you're using Node). This will provide you with server and client code to implement and consume the API."),(0,r.kt)("p",null,"Next, you'll implement the gRPC service methods you created earlier in the ",(0,r.kt)("strong",{parentName:"p"},"book.proto")," file. If you're using ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js"),", you can utilize a library like ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@grpc/grpc-js"},"@grpc/grpc-js"),", available via npm, to create the server. You can refer to the following sample to implement the server using the protocol buffer definitions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const grpc-js = require('@grpc/grpc-js');\nconst protoLoader = require('@grpc/proto-loader');\n\n// Loading the protocol buffer definition\nconst protoFile = 'book.proto';\nconst packageDefinition = protoLoader.loadSync(protoFile);\nconst protoDescriptor = grpc.loadPackageDefinition(packageDefinition);\n\n// Implementing the gRPC service methods\nconst BookService = {\n  BookSearch: (call, callback) => {\n    const searchQuery = call.request.search_query;\n\n    // Querying the book database for the book titled \"Lord of the Rings\"\n    const book = {\n      title: 'Lord of the Rings',\n      description: 'The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil...',\n      author: 'J. R. R. Tolkien',\n    };\n\n    // Returning the book information as the response\n    callback(null, book);\n  },\n};\n\n// Creating a new gRPC server\nconst server = new grpc.Server();\n\n// Adding the BookService implementation to the server\nserver.addService(protoDescriptor.BookService.service, BookService);\n\n// Starting the server and binding it to a port\nconst port = 8080;\nserver.bind(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure());\nserver.start();\nconsole.log(`gRPC server started on port ${port}`);\n")),(0,r.kt)("p",null,"The code above sets up a gRPC server to listen for incoming requests on port ",(0,r.kt)("strong",{parentName:"p"},"8080"),". When a client sends a request (a search for the 'Lord of the Rings' book) to the ",(0,r.kt)("inlineCode",{parentName:"p"},"BookSearch")," method, the server processes the request and responds with the 'Lord of the Rings' book information."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@grpc/proto-loader"},(0,r.kt)("strong",{parentName:"a"},"proto-loader"))," module loads and parses the protocol buffer definitions. The ",(0,r.kt)("strong",{parentName:"p"},"protoFile")," specifies the path to the protocol buffer definition file (book.proto). By using ",(0,r.kt)("strong",{parentName:"p"},"protoLoader.loadSync()"),", the contents of the protocol buffer definition file are loaded synchronously, returning a ",(0,r.kt)("strong",{parentName:"p"},"packageDefinition")," object."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"protoDescriptor")," utilizes ",(0,r.kt)("strong",{parentName:"p"},"grpc.loadPackageDefinition()")," to parse the loaded protocol buffer definition and generate code for gRPC communication."),(0,r.kt)("h3",{id:"step-3-1"},"Step 3"),(0,r.kt)("p",null,"After starting the server, you can generate client code using the same protocol buffer file (book.proto). This client code will provide a client object allowing you to request the server."),(0,r.kt)("p",null,"On the client side, you can create a gRPC client (client-side code) and use it to send a request to the server's ",(0,r.kt)("inlineCode",{parentName:"p"},"BookSearch")," method."),(0,r.kt)("p",null,"Here's an example of how this implementation works:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const grpc-js = require('@grpc/grpc-js');\nconst protoLoader = require('@grpc/proto-loader');\n\n// Loading the protocol buffer definition\nconst protoFile = 'book.proto';\nconst packageDefinition = protoLoader.loadSync(protoFile);\nconst protoDescriptor = grpc.loadPackageDefinition(packageDefinition);\n\n// Creating a new gRPC client\nconst client = new protoDescriptor.BookService(\n  'localhost:8080',\n  grpc.credentials.createInsecure()\n);\n\n// Creating a request object\nconst request = { search_query: 'Lord of the Rings' };\n\n// Sending the request to the server\nclient.BookSearch(request, (error, response) => {\n  if (error) {\n    console.error('Error:', error.message);\n    return;\n  }\n\n  // Handle the response\n  console.log('Book Information:');\n  console.log('Title:', response.title);\n  console.log('Description:', response.description);\n  console.log('Author:', response.author);\n});\n")),(0,r.kt)("p",null,"The code above creates a new gRPC client using the generated client code. The client is initialized with the server address (localhost:8080) and an insecure credential. A search query is then added to a request object with the field set to 'Lord of the Rings'. Finally, the gRPC client calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"BookSearch")," method, passing the request object and a callback function to handle the response."),(0,r.kt)("h2",{id:"how-the-features-of-rest-api-differ-from-grpc-api"},"How the features of REST API differ from gRPC API"),(0,r.kt)("p",null,"The architectural style of REST API differs from that of gRPC API due to their distinct features. The table below illustrates the differences:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Features")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"REST API")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"gRPC API")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Message Format")),(0,r.kt)("td",{parentName:"tr",align:null},"It primarily uses JSON, XML, and other text-based formats."),(0,r.kt)("td",{parentName:"tr",align:null},"It uses Protocol Buffers as the format for data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Caching capabilities")),(0,r.kt)("td",{parentName:"tr",align:null},"It supports caching using HTTP headers like Content-Type, Authorization, Content-Length, and others."),(0,r.kt)("td",{parentName:"tr",align:null},"There is no built-in caching mechanism for gRPC APIs, but external tools or libraries like gRPC client, NGINX, Redis, Memcached, etc., can be used for implementing caching.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"HTTP Protocol")),(0,r.kt)("td",{parentName:"tr",align:null},"It was built on HTTP/1.1, which utilizes HTTP methods (GET, POST, PUT, DELETE)."),(0,r.kt)("td",{parentName:"tr",align:null},"It transports data over the HTTP/2 protocol, establishing bidirectional communication between the client and the server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Generation of Code")),(0,r.kt)("td",{parentName:"tr",align:null},"It facilitates the use of code generation tools and frameworks like OpenAPI and Swagger Codegen, making it easy and efficient to generate code."),(0,r.kt)("td",{parentName:"tr",align:null},"It uses Protobuf for code generation because it allows efficient and type-safe communication between different programming languages, ensuring interoperability.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Integration")),(0,r.kt)("td",{parentName:"tr",align:null},"Since it's based on HTTP, a widely adopted standard protocol, it is supported by various frameworks like Express.js, Laravel, Ruby on Rails, Django, ASP.NET, etc."),(0,r.kt)("td",{parentName:"tr",align:null},"Since Protocol Buffers (protobuf) is a language-agnostic message format, it supports various programming languages including Java, C++, Go, Python, Node.js, Ruby, PHP, and more.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Cross-browser compatibility")),(0,r.kt)("td",{parentName:"tr",align:null},"Due to its underlying HTTP protocol, it can be accessed by any browser that supports HTTP. E.g., Google Chrome, Opera, Safari, Mozilla Firefox, etc."),(0,r.kt)("td",{parentName:"tr",align:null},"As gRPC is primarily designed for communication between servers and clients and not tightly coupled to browser-based applications, it is not directly dependent on browsers.")))),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Finally, you've reached the end of the article, where you learned about the architectural style of REST APIs and gRPC APIs, including how they work and the differences between their distinctive features."),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("p",null,"You may find the following resources useful:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://grpc.io/docs/"},"gRPC documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://protobuf.dev/overview/"},"Protocol Buffers documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.google.com/search?kgmid=/m/03nsxd&hl=en-NG&q=Representational+state+transfer&kgs=f491d5ba53c53c0c&shndl=0&source=sh/x/kp/1"},"REST APIs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/Protocols/rfc2616/rfc2616.html"},"HTTP/1.1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/HTTP/2"},"HTTP/2"))))}u.isMDXComponent=!0}}]);