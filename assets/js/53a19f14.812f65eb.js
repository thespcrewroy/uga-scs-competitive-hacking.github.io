(self.webpackChunkmain_website=self.webpackChunkmain_website||[]).push([[2559],{3387:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var a=r(216),n=r(5303),s=r(7504),i=r(9439),o=r(3641);const l={description:"Forensics | Easy - Broken",tags:["easy"],sidebar_position:0},c="Broken",u={id:"Forensics/Easy/broken",title:"Broken",description:"Forensics | Easy - Broken",source:"@site/docs/Forensics/Easy/broken.md",sourceDirName:"Forensics/Easy",slug:"/Forensics/Easy/broken",permalink:"/practice/Forensics/Easy/broken",draft:!1,unlisted:!1,editUrl:"https://github.com/The-Hack-Pack/uga-scs-competitive-hacking.github.io/tree/development/docs/Forensics/Easy/broken.md",tags:[{inline:!1,label:"Easy",permalink:"/practice/tags/easy",description:"Easy level challenges."}],version:"current",sidebarPosition:0,frontMatter:{description:"Forensics | Easy - Broken",tags:["easy"],sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Easy - Forensics",permalink:"/practice/category/easy---forensics"},next:{title:"Medium - Forensics",permalink:"/practice/category/medium---forensics"}},d={},h=[{value:"Challenge",id:"challenge",level:2},{value:"Solution",id:"solution",level:2},{value:"Credits",id:"credits",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components},{Details:l}=t;return l||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"broken",children:"Broken"})}),"\n",(0,a.jsx)(t.p,{children:"Forensics | Easy - Broken"}),"\n",(0,a.jsx)(t.h2,{id:"challenge",children:"Challenge"}),"\n",(0,a.jsx)(t.p,{children:"We have intercepted a dank meme. Unfortunately, it seems to be corrupted. Can you fix it?"}),"\n",(0,a.jsxs)(t.p,{children:["Download file: ",(0,a.jsx)("a",{href:r(134).A,download:!0,children:"broken.png"})]}),"\n",(0,a.jsx)(s.A,{hash:"b1df31cc3e723b6f6fe2b030fe6642534b1540fc2baff262cf4d1c30812f89ce2d5e5fc5ad2150a3aaa4e3bb901d11a6fdd7c43bedce5354be55748f951ff960",algorithm:"sha512"}),"\n",(0,a.jsx)(t.h2,{id:"solution",children:"Solution"}),"\n",(0,a.jsxs)(l,{children:[(0,a.jsx)("summary",{children:"Solution Guide"}),(0,a.jsxs)(t.p,{children:["You might have noticed that the image does not open. Let's open the image in a hex editor to see what's going on. A good online hex editor is ",(0,a.jsx)(t.a,{href:"https://hexed.it/",children:"https://hexed.it/"}),". Upon opening the image, we can see the hexadecimal values as well as utf-8 (plaintext). The best way to see what's wrong with a corrupted file is by comparing it with another similar file. Let's open any non-corrupted PNG image in Hexedit (",(0,a.jsx)("a",{href:r(4023).A,download:!0,children:(0,a.jsx)(t.strong,{children:"here"})}),"'s an image you can use)."]}),(0,a.jsx)(t.p,{children:"Upon comparing the two files, you should immediately see a difference at the very beginning of the file. Here's what it looks like for each image:"}),(0,a.jsxs)(i.A,{children:[(0,a.jsx)(o.A,{value:"corrupted",label:"Corrupted Image",default:!0,children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Corrupted Image",src:r(847).A+"",width:"714",height:"105"})})}),(0,a.jsx)(o.A,{value:"sample",label:"Sample Image",children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Corrupted Image",src:r(9693).A+"",width:"685",height:"104"})})})]}),(0,a.jsxs)(t.p,{children:["The sample image beings with ",(0,a.jsx)(t.code,{children:"89 50 4E 47"})," (utf-8: ",(0,a.jsx)(t.code,{children:"\xebPNG"}),") whereas the corrupted image is missing it! This is the PNG file header. It is essential for an image rendering software to identify the image type and render it. Our corrupted image is missing this header, so let's add it. We can do this in Hexedit by ",(0,a.jsx)(t.strong,{children:"Right Clicking the first hex byte > Insert Bytes Here > 4 Bytes"}),". Then, we manually type the header stated above. We should be able to ",(0,a.jsx)(t.strong,{children:"Save as"})," to a new image and it should now open, giving you the flag!"]})]}),"\n",(0,a.jsx)(t.h2,{id:"credits",children:"Credits"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Author(s): Divesh Gupta (legendile7)"}),"\n"]})]})}function f(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},3641:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});r(6372);var a=r(3394);const n={tabItem:"tabItem_Ikcs"};var s=r(216);function i(e){let{children:t,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,i),hidden:r,children:t})}},9439:(e,t,r)=>{"use strict";r.d(t,{A:()=>w});var a=r(6372),n=r(3394),s=r(6995),i=r(9551),o=r(3020),l=r(7156),c=r(6765),u=r(7802);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=h(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[c,d]=f({queryString:r,groupId:n}),[m,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,u.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),g=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=r(8040);const g={tabList:"tabList_gm90",tabItem:"tabItem_Wkva"};var v=r(216);function x(e){let{className:t,block:r,selectedValue:a,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),n=o[r].value;n!==a&&(c(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,n.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function j(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}},7504:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var a=r(6372),n=r(5921),s=r.n(n),i=r(216);const o=e=>{let{hash:t,algorithm:r}=e;const[n,o]=(0,a.useState)(""),[l,c]=(0,a.useState)(""),u=()=>{const e=((e,t)=>{switch(t){case"sha1":return s().SHA1(e).toString();case"sha512":return s().SHA512(e).toString();default:return e}})(n,r);c(e===t?"Correct!":"Incorrect. Try again.")};return(0,i.jsxs)("div",{children:[(0,i.jsxs)("form",{onSubmit:e=>{e.preventDefault(),u()},children:[(0,i.jsx)("input",{type:"text",value:n,onChange:e=>o(e.target.value),placeholder:"Enter answer"}),(0,i.jsx)("button",{type:"submit",children:"Check"})]}),(0,i.jsx)("p",{children:l})]})}},134:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});const a=r.p+"assets/images/broken-1f554fa4a15b4244b218475e49d2c324.png"},4023:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});const a=r.p+"assets/images/sample-777412729ef696a338e6592bc96a8470.png"},847:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});const a=r.p+"assets/images/corrupted-hex-c67ca6955944038b2aa80c45f58e2ff6.png"},9693:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});const a=r.p+"assets/images/sample-hex-959c1f7bc8985f27eed02a587ed89a9c.png"},3936:()=>{}}]);