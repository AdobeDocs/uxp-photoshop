"use strict";(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[4],{95655:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return d},default:function(){return u}});var a=n(87462),l=n(45987),o=(n(15007),n(64983)),r=n(91515);const m=["components"],d={},s={_frontmatter:d},i=r.Z;function u(e){let{components:t}=e,n=(0,l.Z)(e,m);return(0,o.mdx)(i,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"scripting-reference"},"Scripting Reference"),(0,o.mdx)("h2",{id:"script-module"},"Script module"),(0,o.mdx)("p",null,"Represents the UXP module that contains the properties and methods used for scripting."),(0,o.mdx)("h3",{id:"usage"},"Usage"),(0,o.mdx)("hr",null),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'const { script } = require("uxp");\n')),(0,o.mdx)("h3",{id:"properties"},"Properties"),(0,o.mdx)("hr",null),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Name"),(0,o.mdx)("th",{parentName:"tr",align:null},"Type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Access"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"executionContext"),(0,o.mdx)("td",{parentName:"tr",align:null},"ExecutionContext"),(0,o.mdx)("td",{parentName:"tr",align:null},"readOnly"),(0,o.mdx)("td",{parentName:"tr",align:null},"ExecutionContext passed by the host when invoking Script")))),(0,o.mdx)("h2",{id:"executioncontext"},"ExecutionContext"),(0,o.mdx)("p",null,"Passed by the host when invoking scripts. Contains the following: "),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Details about the current script execution"),(0,o.mdx)("li",{parentName:"ul"},"Methods that can send data to Photoshop"),(0,o.mdx)("li",{parentName:"ul"},"Events to manage the lifecycle of the script")),(0,o.mdx)("h3",{id:"usage-1"},"Usage"),(0,o.mdx)("hr",null),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},'const { script } = require("uxp");\nconst executionContext = script.executionContext;\nconsole.log("isCancelled: ", executionContext.isCancelled);\n')),(0,o.mdx)("h3",{id:"properties-1"},"Properties"),(0,o.mdx)("hr",null),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Name"),(0,o.mdx)("th",{parentName:"tr",align:null},"Type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Access"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"isCancelled"),(0,o.mdx)("td",{parentName:"tr",align:null},"bool"),(0,o.mdx)("td",{parentName:"tr",align:null},"readOnly"),(0,o.mdx)("td",{parentName:"tr",align:null},"Used to check if the execution context has been cancelled by the client or host.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"hostControl"),(0,o.mdx)("td",{parentName:"tr",align:null},"Object"),(0,o.mdx)("td",{parentName:"tr",align:null},"readOnly"),(0,o.mdx)("td",{parentName:"tr",align:null},"Object with 4 properties, detailed ",(0,o.mdx)("a",{parentName:"td",href:"#hostcontrol"},"below"),".")))),(0,o.mdx)("h4",{id:"hostcontrol"},"hostControl"),(0,o.mdx)("p",null,"The hostControl property is used to suspend and resume history states. "),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"suspendHistory(options)"),": used to suspend history on a target document"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"resumeHistory(suspensionID, commit)"),": used to resume history on a target document"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"registerAutoCloseDocument(docID)"),": register a document to be closed when the modal scope exits"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"unregisterAutoCloseDocument(docID)"),": unregister a document from being closed when the modal scope exists ")),(0,o.mdx)("h3",{id:"methods-hostcontrol"},"Methods: hostControl"),(0,o.mdx)("hr",null),(0,o.mdx)("h4",{id:"history-state-suspension"},"History state suspension"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},(0,o.mdx)("inlineCode",{parentName:"strong"},"executionContext.hostControl.suspendHistory(options)"))),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Returns a suspension identifier that should be used with ",(0,o.mdx)("inlineCode",{parentName:"li"},"resumeHistory")),(0,o.mdx)("li",{parentName:"ul"},"Suspends history state of document with ID ",(0,o.mdx)("inlineCode",{parentName:"li"},"options.documentID")),(0,o.mdx)("li",{parentName:"ul"},"Coalesces all document changes into a single history state defined as ",(0,o.mdx)("inlineCode",{parentName:"li"},"options.name"))),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Parameters")),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Name"),(0,o.mdx)("th",{parentName:"tr",align:null},"Type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"options"),(0,o.mdx)("td",{parentName:"tr",align:null},"Object"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"documentID"),": ID of the document whose history state should be suspended.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null}),(0,o.mdx)("td",{parentName:"tr",align:null}),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"name"),": name that is used for the history state - visible in the History panel")))),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},(0,o.mdx)("inlineCode",{parentName:"strong"},"executionContext.hostControl.resumeHistory(suspensionID, commit)"))),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Resumes the history state"),(0,o.mdx)("li",{parentName:"ul"},"Optionally creates a history state for the current document state")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Parameters")),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Name"),(0,o.mdx)("th",{parentName:"tr",align:null},"Type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"suspensionID"),(0,o.mdx)("td",{parentName:"tr",align:null},"string"),(0,o.mdx)("td",{parentName:"tr",align:null},"the suspension identifier that was returned from ",(0,o.mdx)("inlineCode",{parentName:"td"},"suspendHistory"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"commit"),(0,o.mdx)("td",{parentName:"tr",align:null},"bool"),(0,o.mdx)("td",{parentName:"tr",align:null},"If true, then the current document state is committed and a history state is created. If false, the document is rolled back to the time when the state was suspended. (optional and defaults to true)")))),(0,o.mdx)("h4",{id:"example"},"Example"),(0,o.mdx)("p",null,"This example demonstrates suspending the history state on a target document, then resuming the state after modifying the document."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'let hostControl = executionContext.hostControl;\n// Get an ID for a target document\nlet documentID = await getTargetDocument();\n\n// Suspend history state on the target document\n// This will coalesce all changes into a single history state called\n// \'Custom Command\'\nlet suspensionID = await hostControl.suspendHistory({\n    "documentID": documentID,\n    "name": "Custom Command"\n});\n\n// modify the document\n// . . .\n\n// resume the history state\nawait hostControl.resumeHistory(suspensionID);\n')),(0,o.mdx)("h4",{id:"automatic-document-closing"},"Automatic document closing"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},(0,o.mdx)("inlineCode",{parentName:"strong"},"executionContext.hostControl.registerAutoCloseDocument(docID)"))),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Register a document to be automatically closed without saving when the execution context ends")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},(0,o.mdx)("inlineCode",{parentName:"strong"},"executionContext.hostControl.unregisterAutoCloseDocument(docID)"))),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Unregister a document to be automatically closed without saving when the execution context ends")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Parameters")),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Name"),(0,o.mdx)("th",{parentName:"tr",align:null},"Type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"docID"),(0,o.mdx)("td",{parentName:"tr",align:null},"number"),(0,o.mdx)("td",{parentName:"tr",align:null},"The ID of the document of this history state")))),(0,o.mdx)("h4",{id:"example-1"},"Example"),(0,o.mdx)("p",null,'This example demonstrates creating and marking a document as "auto close" first. After adding some contents to the page, the document is unregistered from the set of auto close documents. If the user cancels while the script is running, the document is closed. '),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"let hostControl = executionContext.hostControl;\nlet docID = await createDocument();\nawait hostControl.registerAutoCloseDocument(docID);\n\n// Add contents to docID\n...\n\nawait hostControl.unregisterAutoCloseDocument(docID);\n")),(0,o.mdx)("h3",{id:"events"},"Events"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},(0,o.mdx)("inlineCode",{parentName:"strong"},"onCancel"))),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Script cancellation can occur either when the user clicks “Cancel” in the progress bar, or when the host app encounters some exception in running the script file. Developers can add ",(0,o.mdx)("strong",{parentName:"li"},"event handlers")," to get notified when the command has been cancelled. The associated callback will receive a parameter ",(0,o.mdx)("inlineCode",{parentName:"li"},"reason"),". ")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},'executionContext.onCancel.addListener((reason) => {\n        // reason would be a json object set by the host while cancelling\n        reject("Script Cancelled");\n});\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-scripting-reference-index-md-40e29f41b7ed5f7fe011.js.map