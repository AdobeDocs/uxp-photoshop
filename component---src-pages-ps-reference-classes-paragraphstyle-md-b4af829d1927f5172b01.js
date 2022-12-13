"use strict";(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[9504],{98983:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return s}});var n=a(87462),r=a(63366),m=(a(15007),a(64983)),i=a(91515),d=["components"],l={},p={_frontmatter:l},o=i.Z;function s(e){var t=e.components,a=(0,r.Z)(e,d);return(0,m.mdx)(o,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"paragraphstyle"},"ParagraphStyle"),(0,m.mdx)("p",null,"The Class that stores properties related to the Paragraph panel in the Photoshop UI."),(0,m.mdx)("h2",{id:"properties"},"Properties"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Access"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Default"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Range"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Min Version"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"features"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/modules/constants/#typeinterfacefeatures"},(0,m.mdx)("em",{parentName:"a"},"TypeInterfaceFeatures"))),(0,m.mdx)("td",{parentName:"tr",align:"left"},"R W"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"TypeInterfaceFeatures.DEFAULT"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"-"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"24.1"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"The paragraph UI features to display.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"firstLineIndent"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("em",{parentName:"td"},"number")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"R W"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"-"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"-1296..1296"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"24.1"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"The amount of space in pixels to indent the first line of paragraphs for a 72ppi document.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"hyphenation"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("em",{parentName:"td"},"boolean")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"R W"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"false"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"-"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"24.1"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"True to use hyphenation in word wrap. Use hyphenationFeatures for maximum control.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"hyphenationFeatures"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/interfaces/hyphenationproperties/"},(0,m.mdx)("em",{parentName:"a"},"HyphenationProperties"))),(0,m.mdx)("td",{parentName:"tr",align:"left"},"R W"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"-"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"-"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"24.1"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"The hyphenation features as they","'","re displayed in the dialog found in the Paragraph","'","s flyout menu ",'"',"Hyphenation...",'"',". They","'","re expressed with an option object with the following properties (numbers are in pixels):  ","`","`","`","javascript {          // The minimum number of letters a word must have in order for hyphenation      // in word wrap to be allowed. In the range ","[2, 25]",", default 5.      wordsLongerThan: number,      // The minimum number of letters after which hyphenation      // in word wrap is allowed. In the range ","[1, 15]",", default 2.      afterFirst: number,      // The minimum number of letters before which hyphenation      // in word wrap is allowed. In the range ","[1, 15]",", default 2.      beforeLast: number,      // The maximum number of consecutive lines that can end with a hyphenated word.      // In the range ","[2, 25]",", default 2.      limit: number,      // The distance in pixels at the end of a line that will cause a word       // to break in unjustified type. In the range of ","[0, 8640]"," pixels for a 72PPI document.      // If the document resolution is different, the max. value is scaled accordingly.      // Default: 36px (72PPI)       zone: number,     // True to allow hyphenation in word wrap of capitalized words. Default true.      capitalWords: boolean } ","`","`","`","  The hyphenationFeatures getter returns an object with all the features:  ","`","`","`","javascript const textItem ","="," app.activeDocument.activeLayers","[0]",".textItem; textItem.paragraphStyle.hyphenationFeatures;  // {  //       wordsLongerThan: 5,  //       afterFirst: 2,  //       beforeLast: 2,  //       limit: 2,  //       zone: 36,  //       capitalWords: true  // } ","`","`","`","  In the object that is passed to the setter, all the properties are optional; the ones that are not specified will be assigned the default values.  ","`","`","`","javascript textItem.paragraphStyle.hyphenationFeatures ","="," { wordsLongerThan: 10, afterFirst: 3 }; // {  //       wordsLongerThan: 10,  //       afterFirst: 3,  //       beforeLast: 2,  //       limit: 2,  //       zone: 36,  //       capitalWords: true  // } ","`","`","`")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"justification"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/modules/constants/#justification"},(0,m.mdx)("em",{parentName:"a"},"Justification"))),(0,m.mdx)("td",{parentName:"tr",align:"left"},"R W"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Justification.LEFT"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"-"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"24.1"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"The paragraph justification.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"justificationFeatures"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/interfaces/justificationproperties/"},(0,m.mdx)("em",{parentName:"a"},"JustificationProperties"))),(0,m.mdx)("td",{parentName:"tr",align:"left"},"R W"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"-"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"-"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"24.1"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"The justification features as they","'","re displayed in the dialog found in the Paragraph","'","s flyout menu ",'"',"Justification...",'"',". They","'","re expressed with an option object with the following properties (all percentage numbers):  ","`","`","`","javascript {          // Minimum, Desired and Maximum percentage of normal word spacing      wordSpacingMinimum:   number,      wordSpacingDesired:   number,      wordSpacingMaximum:   number,      // Minimum, Desired and Maximum percentage of normal letter spacing      letterSpacingMinimum: number,      letterSpacingDesired: number,      letterSpacingMaximum: number,      // Minimum, Desired and Maximum percentage of normal glyph scaling      glyphScalingMinimum:  number,      glyphScalingDesired:  number,      glyphScalingMaximum:  number      // Percentage of type size to use for auto leading      autoLeadingAmount:    number } ","`","`","`","  Unless it","'","s been set, the justificationFeatures value is ","`","null","`",". The setter allows you to set individual properties: the missing ones will be either filled with the default values or left untouched.  Properties","'"," ranges are as follows: WordSpacing: 0 ","<","="," Minimum ","<","="," Maximum Minimum ","<","="," Desired ","<","="," Maximum Minimum ","<","="," Maximum ","<","="," 1000 LetterSpacing: -100 ","<","="," Minimum ","<","="," Maximum Minimum ","<","="," Desired ","<","="," Maximum Minimum ","<","="," Maximum ","<","="," 500 GlyphScaling: 50 ","<","="," Minimum ","<","="," Maximum Minimum ","<","="," Desired ","<","="," Maximum Minimum ","<","="," Maximum ","<","="," 200 AutoLeading: 0 ","<","="," AutoLeading ","<","="," 500")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"kashidaWidth"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/modules/constants/#kashidawidthtype"},(0,m.mdx)("em",{parentName:"a"},"KashidaWidthType"))),(0,m.mdx)("td",{parentName:"tr",align:"left"},"R W"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"KashidaWidthType.MEDIUM"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"-"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"24.1"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"The width of kashida (tatweel) character")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"kinsoku"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/modules/constants/#kinsoku"},(0,m.mdx)("em",{parentName:"a"},"Kinsoku"))),(0,m.mdx)("td",{parentName:"tr",align:"left"},"R W"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Kinsoku.NONE"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"-"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"24.1"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Line breaking rules in Japanese text (Kinsoku Shori)")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"layoutMode"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/modules/constants/#paragraphlayout"},(0,m.mdx)("em",{parentName:"a"},"ParagraphLayout"))),(0,m.mdx)("td",{parentName:"tr",align:"left"},"R W"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"ParagraphLayout.WORLD"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"-"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"24.1"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"The paragraph layout mode.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"leftIndent"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("em",{parentName:"td"},"number")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"R W"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"-"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"-1296..1296"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"24.1"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"The amount of space in pixels to indent text from the left for a 72ppi document.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"mojikumi"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/modules/constants/#mojikumi"},(0,m.mdx)("em",{parentName:"a"},"Mojikumi"))),(0,m.mdx)("td",{parentName:"tr",align:"left"},"R W"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Mojikumi.NONE"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"-"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"24.1"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Spacing between punctuation, symbols, numbers, and other character classes in Japanese text.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"rightIndent"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("em",{parentName:"td"},"number")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"R W"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"-"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"-1296..1296"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"24.1"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"The amount of space in pixels to indent text from the right for a 72ppi document.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"spaceAfter"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("em",{parentName:"td"},"number")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"R W"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"-"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"-1296..1296"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"24.1"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"The amount of space in pixels to use after each paragraph for a 72ppi document.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"spaceBefore"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("em",{parentName:"td"},"number")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"R W"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"-"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"-1296..1296"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"24.1"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"The amount of space in pixels to use before each paragraph for a 72ppi document.")))),(0,m.mdx)("h2",{id:"methods"},"Methods"),(0,m.mdx)("h3",{id:"reset"},"reset"),(0,m.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"24.1"),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"async")," : ",(0,m.mdx)("em",{parentName:"p"},"Promise"),"<void",">"),(0,m.mdx)("p",null,"Resets the paragraph style to its default values."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ps-reference-classes-paragraphstyle-md-b4af829d1927f5172b01.js.map