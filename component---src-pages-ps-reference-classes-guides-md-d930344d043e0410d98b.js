"use strict";(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[14626],{4863:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return s}});var n=a(87462),m=a(45987),d=(a(15007),a(64983)),r=a(91515);const l=["components"],o={},i={_frontmatter:o},p=r.Z;function s(e){let{components:t}=e,a=(0,m.Z)(e,l);return(0,d.mdx)(p,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"guides"},"Guides"),(0,d.mdx)("p",null,"A collections class allowing for array access into a document's guides"),(0,d.mdx)("p",null,"Access this collection through ",(0,d.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/document/#guides"},"Document.guides")," property. For example,\nfollowing adds a new guide to the collection:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"app.activeDocument.guides.add(Constants.Direction.HORIZONTAL, 20);\n")),(0,d.mdx)("h2",{id:"indexable"},"Indexable"),(0,d.mdx)("p",null,"▪ ","[index: ",(0,d.mdx)("em",{parentName:"p"},"number"),"]",": ",(0,d.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/guide/"},(0,d.mdx)("em",{parentName:"a"},"Guide"))),(0,d.mdx)("p",null,"Used to access the guides in the collection."),(0,d.mdx)("p",null,"Access this collection through ",(0,d.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/document/#guides"},"Document.guides")," property. For example,\nfollowing adds a new guide to the collection:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"app.activeDocument.guides.add(Constants.Direction.HORIZONTAL, 20);\n")),(0,d.mdx)("h2",{id:"properties"},"Properties"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Access"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Min Version"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"length"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"number")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"R"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"23.0"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Number of ",(0,d.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/classes/guide/"},"Guide")," elements in this collection.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"parent"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/classes/document/"},(0,d.mdx)("em",{parentName:"a"},"Document"))),(0,d.mdx)("td",{parentName:"tr",align:"left"},"R"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"23.0"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"The owner document of this Guide collection.")))),(0,d.mdx)("h2",{id:"methods"},"Methods"),(0,d.mdx)("h3",{id:"add"},"add"),(0,d.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"23.0"),(0,d.mdx)("p",null,(0,d.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/guide/"},(0,d.mdx)("em",{parentName:"a"},"Guide"))),(0,d.mdx)("p",null,"Adds a guide for the collection at the given coordinate and direction"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},(0,d.mdx)("em",{parentName:"strong"},"Fixes in Photoshop 24.0:"))),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("em",{parentName:"li"},"Correct coordinate when resolution is not 72 PPI")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("em",{parentName:"li"},"Returns valid instance of guide"))),(0,d.mdx)("h4",{id:"parameters"},"Parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"direction")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/modules/constants/#direction"},(0,d.mdx)("em",{parentName:"a"},"Direction"))),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Indicates whether the guide is vertical or horizontal")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"coordinate")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"number")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Position of the guide measured from the ruler origin in pixels. The value can be a decimal number.  Note: the user can move the ruler origin which will affect the position value of the guides.")))),(0,d.mdx)("hr",null),(0,d.mdx)("h3",{id:"removeall"},"removeAll"),(0,d.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"23.0"),(0,d.mdx)("p",null,(0,d.mdx)("em",{parentName:"p"},"void")),(0,d.mdx)("p",null,"Clears all guides from this collection."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ps-reference-classes-guides-md-d930344d043e0410d98b.js.map