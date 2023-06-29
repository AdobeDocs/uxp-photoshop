"use strict";(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[9179],{39200:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return h}});var n=a(87462),r=a(45987),m=(a(15007),a(64983)),d=a(91515);const l=["components"],i={},o={_frontmatter:i},p=d.Z;function h(e){let{components:t}=e,a=(0,r.Z)(e,l);return(0,m.mdx)(p,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"hyphenationproperties"},"HyphenationProperties"),(0,m.mdx)("p",null,"These property values are used to apply hyphenation to paragraph text."),(0,m.mdx)("p",null,'These hyphenation features can be seen in the dialog\nin the Paragraph panel\'s flyout menu item labeled "Hyphenation...".\nThey are expressed with an object literal with the following properties (values are in pixels):'),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"{    \n     // The minimum number of letters a word must have in order for hyphenation\n     // in word wrap to be allowed. In the range [2, 25], default 5.\n     wordsLongerThan: number,\n     // The minimum number of letters after which hyphenation\n     // in word wrap is allowed. In the range [1, 15], default 2.\n     afterFirst: number,\n     // The minimum number of letters before which hyphenation\n     // in word wrap is allowed. In the range [1, 15], default 2.\n     beforeLast: number,\n     // The maximum number of consecutive lines that can end with a hyphenated word.\n     // In the range [2, 25], default 2.\n     limit: number,\n     // The distance in pixels at the end of a line that will cause a word \n     // to break in unjustified type. In the range of [0, 8640] pixels for a 72PPI document.\n     // If the document resolution is different, the max. value is scaled accordingly.\n     // Default: 36px (72PPI) \n     zone: number,\n    // True to allow hyphenation in word wrap of capitalized words. Default true.\n     capitalWords: boolean\n}\n")),(0,m.mdx)("p",null,"The hyphenationFeatures getter returns an object with all the features:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"const textItem = app.activeDocument.activeLayers[0].textItem;\ntextItem.paragraphStyle.hyphenationFeatures; \n// { \n//       wordsLongerThan: 5, \n//       afterFirst: 2, \n//       beforeLast: 2, \n//       limit: 2, \n//       zone: 36, \n//       capitalWords: true \n// }\n")),(0,m.mdx)("p",null,"In the object that is passed to the setter, all the properties are optional;\nthe ones that are not specified will be assigned the default values."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"textItem.paragraphStyle.hyphenationFeatures = { wordsLongerThan: 10, afterFirst: 3 };\n// { \n//       wordsLongerThan: 10, \n//       afterFirst: 3, \n//       beforeLast: 2, \n//       limit: 2, \n//       zone: 36, \n//       capitalWords: true \n// }\n")),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Default"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Range"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Min Version"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"afterFirst"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("em",{parentName:"td"},"number")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"2"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"1..15"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"24.1"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"The minimum number of letters after which hyphenation in word wrap is allowed.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"beforeLast"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("em",{parentName:"td"},"number")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"2"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"1..15"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"24.1"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"The minimum number of letters before which hyphenation in word wrap is allowed.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"capitalWords"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("em",{parentName:"td"},"boolean")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"true"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"-"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"24.1"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"True to allow hyphenation in word wrap of capitalized words.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"limit"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("em",{parentName:"td"},"number")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"2"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"2..25"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"24.1"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"The maximum number of consecutive lines that can end with a hyphenated word.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"wordsLongerThan"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("em",{parentName:"td"},"number")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"5"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"2..25"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"24.1"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"The minimum number of letters a word must have in order for hyphenation in word wrap to be allowed.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"zone"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("em",{parentName:"td"},"number")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"36"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"0..8640 for a 72PPI document"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"24.1"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"The distance in pixels at the end of a line that will cause a word to break in unjustified type.")))))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ps-reference-objects-options-hyphenationproperties-md-4bbf9ee45c0345bb5414.js.map