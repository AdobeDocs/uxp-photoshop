"use strict";(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[52575],{11740:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return m},default:function(){return p}});var n=a(87462),o=a(45987),i=(a(15007),a(64983)),r=a(91515);const l=["components"],m={},s={_frontmatter:m},d=r.Z;function p(e){let{components:t}=e,a=(0,o.Z)(e,l);return(0,i.mdx)(d,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"batchplay"},"batchPlay"),(0,i.mdx)("p",null,"At the heart of our APIs is ",(0,i.mdx)("inlineCode",{parentName:"p"},"batchPlay"),", a method that executes one or more Photoshop action commands and return their results."),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"batchPlay is an advanced API, and we recommend trying to first use the DOM APIs before resorting to using batchPlay.")),(0,i.mdx)("h2",{id:"api"},"API"),(0,i.mdx)("p",null,"BatchPlay can directly be accessed from the Photoshop action module, and as most other APIs it is asynchronous by default and returns a promise."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"require('photoshop').action.batchPlay(descriptors: ActionDescriptor[], options: Object): Promise<Object[]>\n")),(0,i.mdx)("p",null,"Below we will dive into both how action commands are defined in JavaScript, and what options are available."),(0,i.mdx)("h3",{id:"descriptors"},"Descriptors"),(0,i.mdx)("p",null,"The first argument to ",(0,i.mdx)("inlineCode",{parentName:"p"},"batchPlay")," is an array of descriptors (also called action descriptors)."),(0,i.mdx)("p",null,"UXP for Photoshop uses a textual representation of these action descriptors. This format is sometimes referred to as ",(0,i.mdx)("inlineCode",{parentName:"p"},"actionJSON"),"."),(0,i.mdx)("p",null,"An action descriptor contains the following components:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The command. This describes the desired Photoshop command. The command is specified via the ",(0,i.mdx)("inlineCode",{parentName:"li"},"_obj")," keyword."),(0,i.mdx)("li",{parentName:"ul"},"The target for the command. This describes the (DOM) element that the command should operate on. The target is specified via the ",(0,i.mdx)("inlineCode",{parentName:"li"},"_target")," keyword. This property is sometimes omitted. If omitted, the command operates on a default element. The default element is typically the object that is active in the UI."),(0,i.mdx)("li",{parentName:"ul"},"Command parameters. Describes the various parameters for the command."),(0,i.mdx)("li",{parentName:"ul"},"Command execution options. Options related to how the command should be executed.")),(0,i.mdx)("p",null,"The following is an example of an ",(0,i.mdx)("inlineCode",{parentName:"p"},"actionJSON")," command for hiding a layer ",(0,i.mdx)("a",{id:"hidelayerexample"}),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'{\n  _obj: "hide",\n  _target:[\n    {_ref: "layer", _enum: "ordinal", _value: "targetEnum"},\n    {_ref: "document", _enum: "ordinal", _value: "targetEnum"}\n  ]\n}\n')),(0,i.mdx)("p",null,"The command is ",(0,i.mdx)("inlineCode",{parentName:"p"},"hide")," as specified by the ",(0,i.mdx)("inlineCode",{parentName:"p"},"_obj")," keyword."),(0,i.mdx)("p",null,"The value of ",(0,i.mdx)("inlineCode",{parentName:"p"},"_target")," is called an ",(0,i.mdx)("inlineCode",{parentName:"p"},"action reference")," and specifies which layer should be hidden. The action reference specifies the target in reverse order - from most specific to least (similar to a postal address). To find the DOM object for a target you go from the last value in the list to the first. In this example we have:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},'{"_ref":"document", "_enum":"ordinal","_value":"targetEnum"}')," First find the target document. It is specified as ",(0,i.mdx)("inlineCode",{parentName:"li"},"ordinal")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"targetEnum"),". This means the active (front most) document."),(0,i.mdx)("li",{parentName:"ul"},"In that document we look for the layer specified as ",(0,i.mdx)("inlineCode",{parentName:"li"},'{"_ref":"layer","_enum":"ordinal","_value":"targetEnum"}'),". This means the active (selected) layer.")),(0,i.mdx)("p",null,"For this command we are therefore targeting the selected layer in the front most document. ",(0,i.mdx)("inlineCode",{parentName:"p"},"targetEnum")," is the default value for ordinal enumerations and can be omitted. See the section on ",(0,i.mdx)("a",{parentName:"p",href:"#action-references"},"action references")," below for details."),(0,i.mdx)("p",null,"This command modifies the Photoshop state and must therefore be executed from within a modal scope. See the documentation of ",(0,i.mdx)("a",{parentName:"p",href:"./executeasmodal"},"executeAsModal")," for details. The following JavaScript uses batchPlay to hide the active layer:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'async function hideActiveLayer() {\n  return await require("photoshop").action.batchPlay([{_obj:"hide", _target:[{_ref: "layer", _enum: "ordinal"},{_ref: "document", _enum: "ordinal"}]}], {});\n}\nlet result = require("photoshop").core.executeAsModal(hideActiveLayer, {"commandName": "Hide Layer"});\n')),(0,i.mdx)("p",null,"Here is another example of ",(0,i.mdx)("inlineCode",{parentName:"p"},"batchPlay")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"actionJSON"),". This examples returns the value of a specific document pixel.\nThis example illustrates providing ",(0,i.mdx)("inlineCode",{parentName:"p"},"samplePoint")," as an additional command parameter."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'async function samplePixel() {\n  return await require("photoshop").action.batchPlay([{\n    _obj: "colorSampler",\n    _target: {_ref: "document",_enum: "ordinal",_value: "targetEnum"},\n    samplePoint: {\n      horizontal: 100,\n      vertical: 100\n    }\n  }], {});\n}\nlet result = await require("photoshop").core.executeAsModal(samplePixel, {"commandName": "Sample Pixel"});\n')),(0,i.mdx)("p",null,"Sample output from the colorSampler command:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'[{"colorSampler":{"_obj":"CMYKColorClass","black":0,"cyan":26.27,"magenta":4.71,"yellowColor":0},"sampledData":true}]\n')),(0,i.mdx)("h4",{id:"accepted-action-descriptors"},"Accepted action descriptors"),(0,i.mdx)("p",null,"The composition of action descriptors can be complicated. Photoshop provides a number of ways that help a developer understand which descriptors Photoshop accepts."),(0,i.mdx)("p",null,"The first way is to use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Actions")," panel. Create a new action and record the commands that you want to run from JavaScript. Then select the action in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Actions")," panel, or one or more individual steps in the action. Now select ",(0,i.mdx)("inlineCode",{parentName:"p"},"Copy As JavaScript")," from the panel flyout menu. This will copy UXP compatible JavaScript for the selected items to the clipboard. ",(0,i.mdx)("inlineCode",{parentName:"p"},"Copy As JavaScript"),' is available from the flyout menu when developer mode is enabled.\nThe following is an example of copying a single "make layer" command as JavaScript:'),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'async function actionCommands() {\n    let command;\n    let result;\n    let psAction = require("photoshop").action;\n\n    // Make layer\n    command = {"_obj":"make","_target":[{"_ref":"layer"}],"layerID":2};\n    result = await psAction.batchPlay([command], {});\n}\n\nasync function runModalFunction() {\n    await require("photoshop").core.executeAsModal(actionCommands, {"commandName": "Action Commands"});\n}\n\nawait runModalFunction();\n')),(0,i.mdx)("p",null,"Another option is to create a listener function in JavaScript. This is done by providing the global event hook to a low level API. This call only works when developer mode is enabled."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"require('photoshop').action.addNotificationListener(['all'], (event, descriptor) => {console.log(\"Event:\" + event + \" Descriptor: \" + JSON.stringify(descriptor))});\n")),(0,i.mdx)("p",null,'Another option is to use the developer UI to log action descriptors to a file. When "developer mode" is enabled, then the following menu items will be available:'),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},'"Plugins > Development > Record Action Commands..." This menu item can be used to save any Photoshop command as an action descriptor to a file. After selecting the menu item and selecting the destination file, perform one of more Photoshop commands using the normal UI. Then choose "Plugins > Development > Stop Action Recording". The destination file will contain actionJSON for the performed commands.'),(0,i.mdx)("li",{parentName:"ul"},'"Plugins > Development > Record Action Notifications..." This menu item will save both commands and change notifications to the selected destination file. ')),(0,i.mdx)("p",null,"Lastly, you can record your actions as a standard Photoshop action using the Actions panel. Then export actions to an ",(0,i.mdx)("inlineCode",{parentName:"p"},"actionJSON")," format by doing the following:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Select the action set that contains the command."),(0,i.mdx)("li",{parentName:"ul"},'Press (macOS)"shift+option+command" or (Windows)"shift+control+alt" and choose "Save Actions..." from the panel fly-out menu.')),(0,i.mdx)("h4",{id:"command-execution-options"},"Command execution options"),(0,i.mdx)("p",null,"An action descriptor can include a ",(0,i.mdx)("inlineCode",{parentName:"p"},"_options")," property. If present then its value specifies how the command is executed.\n",(0,i.mdx)("inlineCode",{parentName:"p"},"_options")," can contain the following values:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"dialogOptions: string"),". This value controls how Photoshop shows UI during the execution of the command. The possible values are:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},'"silent": The command is executed without UI. If an error occurs, or if the command needs additional parameters, then a scripting error is returned. This is the default value.'),(0,i.mdx)("li",{parentName:"ul"},'"dontDisplay": The command is executed without UI unless an error occurs, or if the command need additional parameters. In that case UI may be shown.'),(0,i.mdx)("li",{parentName:"ul"},'"display": Standard UI related to the command is shown.')))),(0,i.mdx)("h3",{id:"options"},"options"),(0,i.mdx)("p",null,"The second argument of batchPlay adjusts the options. Below is the list of options that are most commonly needed."),(0,i.mdx)("h4",{id:"synchronousexecution-default-false"},"synchronousExecution (default: false)"),(0,i.mdx)("p",null,"If set to true, batchPlay will block the entire scripting thread until it resolves, then return the value(s). We use this in the DOM API for property getters and setters, as it allows for simpler code."),(0,i.mdx)("p",null,"JavaScript code that use batchPlay directly should avoid using this keyword if possible, and instead use the default form that returns a promise."),(0,i.mdx)("h4",{id:"continueonerror-default-false"},"continueOnError (default: false)"),(0,i.mdx)("p",null,"When false, the batchPlay command will stop when the first (sub)command fails. When true, then all (sub)commands are executed."),(0,i.mdx)("h4",{id:"immediateredraw-default-false"},"immediateRedraw (default: false)"),(0,i.mdx)("p",null,"When true, then Photoshop will update its UI after all the descriptors have been executed."),(0,i.mdx)("h4",{id:"historystateinfo-default-none"},"historyStateInfo (default: none)"),(0,i.mdx)("p",null,"This option is deprecated as of Photoshop 2022. New JavaScript code should use the history suspension mechanism provided by ",(0,i.mdx)("a",{parentName:"p",href:"./executeasmodal#history-state-suspension"},"executeAsModal")),(0,i.mdx)("p",null,"Request Photoshop to describe the entire batchPlayed series of actions as a single history state. History state should have two properties:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"name"),": A string to show the name of the history event in History panel")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"target"),": A document reference for where to create the history state at. Keep in mind that if you point at a different document, or if your batchPlays aren't all acting on the same document, the behavior is undefined."),(0,i.mdx)("p",{parentName:"li"},"Plugins that use api version 2 may find it easier to use the history state functionality that is provided via the executionContext object."))),(0,i.mdx)("h3",{id:"result-value"},"Result value"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"batchPlay")," returns a promise. This promise is rejected if the batchPlay command is invalid. This is the case when incorrect arguments are provided. An example of a batchPlay rejection is:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'require("photoshop").action.batchPlay(true, {});\n')),(0,i.mdx)("p",null,"This example provides an incorrect initial argument to batchPlay. The initial argument is expected to be a descriptor list and not a boolean. For cases such as this, the promise is rejected with an appropriate error message. The above example generates the following rejection:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'[[PromiseState]]: "rejected"\n[[PromiseResult]]: Error: Argument 1 has an invalid type. Expected type: array actual type: boolean\n')),(0,i.mdx)("p",null,"A batchPlay command can also fail if a valid command cannot be procesed by Photoshop. This is most often the case if the specified target element does not exist."),(0,i.mdx)("p",null,"The previously shown example to ",(0,i.mdx)("a",{parentName:"p",href:"#hidelayerexample"},"hide the active layer")," will fail if no documents are open, because the command can then not find the target layer to hide. For such cases the ",(0,i.mdx)("inlineCode",{parentName:"p"},"batchPlay")," promise is resolved successfully, and an error message is returned in a list form."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'[\n  {\n  _obj: "error"\n  message: "The object “current document” is not currently available."\n  result: -25922\n  }\n]\n')),(0,i.mdx)("p",null,"The elements in the returned list match the action descriptor list passed to batchPlay. The first item in the returned list is the result of the first action descriptor in the batchPlay, and so forth. The properties of the returned elements are:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"_obj: string"),'. The value is "Error"'),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"message: string"),". A localized error message"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"result: number"),'. An internal Photoshop error code. A "0" means "no error". -128 means that the user cancelled the operation. Other values are possible.')),(0,i.mdx)("h3",{id:"action-references"},"Action references"),(0,i.mdx)("p",null,"Action references specify which DOM objects a command operates on. An action reference is specified using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"_target")," keyword.\nAn action reference is a list of item references that specifies how to find the DOM element starting from the application DOM element.\nEach item in the list can use one of the following forms:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Reference form"),(0,i.mdx)("th",{parentName:"tr",align:null},"Syntax"),(0,i.mdx)("th",{parentName:"tr",align:null},"Example"),(0,i.mdx)("th",{parentName:"tr",align:null},"Notes"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"ID"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"{_ref:className, _id:number}")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},'{_ref:"document", _id: 123}')),(0,i.mdx)("td",{parentName:"tr",align:null})),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Index"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"{_ref:className, _index:number}")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},'{_ref:"document", _index: 1}')),(0,i.mdx)("td",{parentName:"tr",align:null},"Indices are 1 based")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Name"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"{_ref:className, _name:string}")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},'{_ref:"document", _name: "Untitled-1"}')),(0,i.mdx)("td",{parentName:"tr",align:null})),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Enumeration"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},'{_ref:className, _enum: "ordinal", _value: enumerationSpecifier*}')),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},'{_ref:"document", _enum: "ordinal", _value:"targetEnum"}')),(0,i.mdx)("td",{parentName:"tr",align:null})),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Property"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"{_property:propertyName}")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},'{_property:"title"}')),(0,i.mdx)("td",{parentName:"tr",align:null})))),(0,i.mdx)("p",null,"We recommend using the ID form whenever possible because the ID of an object does not change during the lifetime of the Photoshop session. The index will change if elements are added or removed in front of the specified object."),(0,i.mdx)("p",null,"The enumerationSpecifier is command specific, but the most common value is ",(0,i.mdx)("inlineCode",{parentName:"p"},"targetEnum"),' meaning the currently selected or active object of the specified class. Other possible values include: "first", "last", and "front". When using the enumeration form, ',(0,i.mdx)("inlineCode",{parentName:"p"},"targetEnum")," is the default value for the ",(0,i.mdx)("inlineCode",{parentName:"p"},"_value")," property."),(0,i.mdx)("h3",{id:"getting-state-from-photoshop"},"Getting state from Photoshop"),(0,i.mdx)("p",null,'batchPlay can be used to obtain state from Photoshop. To do this, use the action command "get" with a target property.'),(0,i.mdx)("p",null,"The following sample obtains the title of a target document.:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'var target = {_ref:[{"_property": "title"}, {_ref: "document", _id: someDocumentID}, {"_ref":"application"}]};\nvar command = {"_obj": "get", "_target": target};\nlet result = await photoshop.action.batchPlay([command], {});\n')),(0,i.mdx)("p",null,"A possible result from running this command is:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'[{"title":"Untitled-1"}]\n')),(0,i.mdx)("p",null,'If you use the "get" command without a target property, then all possible properties for the target are returned. The following lists all possible document properties:'),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'var target = {_ref:[{_ref: "document", _id: someDocumentID}, {"_ref":"application"}]};\nvar command = {"_obj": "get", "_target": target};\nlet result = await photoshop.action.batchPlay([command], {});\n')),(0,i.mdx)("p",null,"A possible result from running this command may include the following:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'[{"mode":{"_enum":"colorSpace","_value":"RGBColor"},"bigNudgeH":655360,"bigNudgeV":655360,"rulerOriginH":0,"rulerOriginV":0,"width":{"_unit":"distanceUnit","_value":504},"height":{"_unit":"distanceUnit","_value":360},"resolution":{"_unit":"densityUnit","_value":300},"title":"Untitled-1","fileInfo":{"_obj":"fileInfo"},"numberOfPaths":0,"numberOfChannels":3,"numberOfLayers":0,"targetPathIndex":-1,"workPathIndex":-1,"clippingPathInfo":{"_obj":"clippingInfo","clippingPathIndex":-1,"clippingPathFlatness":0}, . . . ]\n')),(0,i.mdx)("p",null,'Using "get" without a property is intended for use only during the development of a plugin. This "get all" request allows a developer to understand which properties a given element supports.'),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"A shipping plugin should not obtain all properties for a given target because this may be slow, and may become slower in the future when additional properties are added.")),(0,i.mdx)("h4",{id:"multi-get"},"Multi-Get"),(0,i.mdx)("p",null,"In some cases you may want to obtain several property values from the same target, or get the same property from several similar targets.\nExamples of this are:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Get the name, the id, and the color mode for a specific document."),(0,i.mdx)("li",{parentName:"ul"},"Get the id's of all open documents.")),(0,i.mdx)("p",null,'While you can issue multiple "get" statements to get this information, it is more efficient to use the ',(0,i.mdx)("inlineCode",{parentName:"p"},"multiGet")," command.\nA multiGet command has the following form:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"_obj"),': must be "multiGet".'),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"_target"),": a target reference that specifies a base object."),(0,i.mdx)("li",{parentName:"ul"},"extendedReference: a list describing what values to return from the base object. The extendedReference has either one or two elements. The first element is a property-list. The second element can be used to specify an element range."),(0,i.mdx)("li",{parentName:"ul"},"options: describes how the command should react if any of the requested values are unavailable. options can include:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"failOnMissingProperty: A boolean describing what should happen if one of the target elements do not expose one of the requested properties. The default value is true, meaning that the command fails if a requested property is not available."),(0,i.mdx)("li",{parentName:"ul"},"failOnMissingElement: A boolean describing what should happen if one of the target elements do exist. The default value is true, meaning that the command fails if any of the requested element do not exist.")))),(0,i.mdx)("p",null,"The following example illustrates how to get the value of multiple properties on the active layer:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'layerProperties =\n  { _obj: "multiGet",\n     _target: {_ref: [{_ref: "layer", _enum: "ordinal"}, {_ref: "document", _enum: "ordinal"}]},\n     extendedReference: [["name", "layerID", "opacity"]],\n     options: {failOnMissingProperty:false, failOnMissingElement: false}\n  };\nresult = await require("photoshop").action.batchPlay([layerProperties], {});\n')),(0,i.mdx)("p",null,"This command will generate a result such as the following:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'[{"name":"Layer 4","layerID":5,"opacity":255}]\n')),(0,i.mdx)("p",null,"In this example the base object is a layer. The extendedReference specifies the list of properties to return from the target layer."),(0,i.mdx)("p",null,"The following example illustrates how to get the value of multiple properties on the first two layers:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'layerProperties =\n  { _obj: "multiGet",\n     _target: {_ref: [{_ref: "document", _enum: "ordinal"}]},\n     extendedReference: [["name", "layerID", "opacity"], {_obj: "layer", index:1, count:2}],\n     options: {failOnMissingProperty:false, failOnMissingElement: false}\n  };\nresult = await require("photoshop").action.batchPlay([layerProperties], {});\n')),(0,i.mdx)("p",null,"This command will generate a result such as the following:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'[{"list":[{"name":"Layer 1","layerID":2,"opacity":255},{"name":"Layer 2","layerID":3,"opacity":255}]}]\n')),(0,i.mdx)("p",null,"In this example we want to obtain the value from several layers, and this mean that the base object as specified by the ",(0,i.mdx)("inlineCode",{parentName:"p"},"_target")," is a document. The extendedReference is used in its two element form to specify a property list and a range of layers."),(0,i.mdx)("p",null,"The element range specifier can use count equal to -1 to specify all elements. Therefore to get the name of all layers in a document, one can use the following multiGet command:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'layerProperties =\n  { _obj: "multiGet",\n     _target: {_ref: [{_ref: "document", _enum: "ordinal"}]},\n     extendedReference: [["name"], {_obj: "layer", index:1, count:-1}],\n     options: {failOnMissingProperty:false, failOnMissingElement: false}\n  };\nresult = await require("photoshop").action.batchPlay([layerProperties], {});\n')),(0,i.mdx)("p",null,"This command will generate a result such as the following:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'[{"list":[{"name":"Layer 1"},{"name":"Layer 2"},{"name":"Layer 3"},{"name":"Layer 4"}]}]\n')),(0,i.mdx)("h2",{id:"legacy-notes"},"Legacy notes"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"batchPlay")," is the evolution of ",(0,i.mdx)("inlineCode",{parentName:"p"},"executeAction")," from ExtendScript. Where ",(0,i.mdx)("inlineCode",{parentName:"p"},"executeAction")," could only play one descriptor at a time, ",(0,i.mdx)("inlineCode",{parentName:"p"},"batchPlay")," accepts an array of action descriptors."),(0,i.mdx)("p",null,"In ExtendScript, we provided a class around constructing descriptors, references, and putting values in. With ",(0,i.mdx)("inlineCode",{parentName:"p"},"batchPlay"),", we have replaced these related classes with ",(0,i.mdx)("inlineCode",{parentName:"p"},"actionJSON"),"."),(0,i.mdx)("p",null,"If you have used ",(0,i.mdx)("inlineCode",{parentName:"p"},"executeAction")," in ExtendScript, you are probably familiar with 4 character codes (OSTypes) and helper methods around them. In ",(0,i.mdx)("inlineCode",{parentName:"p"},"actionJson")," we prefer extended string identifiers such as ",(0,i.mdx)("inlineCode",{parentName:"p"},"colorSampler"),". However, you can still use an OSType by prepending it with a ",(0,i.mdx)("inlineCode",{parentName:"p"},"$")," sign and passing that as a string, like ",(0,i.mdx)("inlineCode",{parentName:"p"},"'$app '")," (mind the space!)."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ps-reference-media-batchplay-md-84cfcf238ba2341f612f.js.map