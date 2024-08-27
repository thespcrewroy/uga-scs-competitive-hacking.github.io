"use strict";(self.webpackChunkmain_website=self.webpackChunkmain_website||[]).push([[9591],{4625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=n(216),i=n(5303);const r={sidebar_position:1},s="Contribute",a={id:"contribute",title:"Contribute",description:"This is our guide on how you can make your own challenges or edit existing ones for this website!",source:"@site/docs/contribute.md",sourceDirName:".",slug:"/contribute",permalink:"/practice/contribute",draft:!1,unlisted:!1,editUrl:"https://github.com/The-Hack-Pack/uga-scs-competitive-hacking.github.io/tree/development/docs/contribute.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/practice/intro"},next:{title:"Open Source Intelligence",permalink:"/practice/category/open-source-intelligence"}},c={},l=[{value:"Getting Started",id:"getting-started",level:2},{value:"Creating a New Challenge",id:"creating-a-new-challenge",level:2},{value:"Editing an Existing Challenge",id:"editing-an-existing-challenge",level:2},{value:"Have Questions?",id:"have-questions",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"contribute",children:"Contribute"})}),"\n",(0,o.jsx)(t.p,{children:"This is our guide on how you can make your own challenges or edit existing ones for this website!"}),"\n",(0,o.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,o.jsxs)(t.p,{children:["Our GitHub repository is available ",(0,o.jsx)(t.a,{href:"https://github.com/The-Hack-Pack/uga-scs-competitive-hacking.github.io",children:(0,o.jsx)(t.strong,{children:"here"})}),". We use a static-site generator called ",(0,o.jsx)(t.a,{href:"https://docusaurus.io/",children:"Docusaurus"})," version 3.5.1, which you should familiarize yourself with first. After you have a basic understanding of the documentation, you can proceed to either make your own challenge or edit an existing one!"]}),"\n",(0,o.jsx)(t.h2,{id:"creating-a-new-challenge",children:"Creating a New Challenge"}),"\n",(0,o.jsxs)(t.p,{children:["To make your own challenge, first fork the repository and clone it to your device. Make sure to switch your branch to ",(0,o.jsx)(t.code,{children:"development"}),". Next, head to the ",(0,o.jsx)(t.code,{children:"docs"})," folder from root and you will see folders for all the categories. Head to the folder for your challenge's category, then to the respective difficulty folder contained inside, and then create a text document (.md extension). Name it to your challenge's name. Then, copy-paste the template below into your doc."]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"Make sure to replace every field in ALL CAPS with your challenge's information!"})}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"Reveal Template"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-md",children:'---\r\ndescription: CHALLENGE-CATEGORY | DIFFICULTY - CHALLENGE NAME\r\ntags: [DIFFICULTY-TAG-LOWERCASE]\r\nsidebar_position: INTEGER\r\n---\r\n\r\nimport PasswordForm from \'@site/src/components/PasswordForm\';\r\n\r\n# CHALLENGE-NAME\r\nDESCRIPTION-FIELD-FROM-ABOVE-COPY-PASTED-HERE\r\n\r\n## Challenge\r\nCHALLENGE-DESCRIPTION-HERE\r\n\r\n![DOWNLOADABLE FILE](./assets/YOURFILE)\r\n\r\n\x3c!--- This is a submission form, you can have multiple ---\x3e\r\n<PasswordForm hash="HASH-GOES-HERE" algorithm="sha512" />\r\n\r\n## Solution\r\n<details>\r\n  <summary>Solution Guide</summary>\r\n\r\n  SOLUTION GUIDE HERE, LEAVE BLANK LINE ABOVE. DO NOT INCLUDE ANSWERS HERE, ONLY HOW TO SOLVE.\r\n</details>\r\n\r\n## Credits\r\n- Author(s): YOUR NAME(S)\n'})})]}),"\n",(0,o.jsxs)(t.p,{children:["If you have any downloadble files, place them in the ",(0,o.jsx)(t.code,{children:"assets"})," folder (which should be in the same directory as your challenge). Make sure to convert your answer(s) to SHA-512 (can be done at a site like ",(0,o.jsx)(t.a,{href:"https://sha512.online/",children:(0,o.jsx)(t.strong,{children:"this"})}),") and put it in the PasswordForm component(s)."]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"Make sure to DM one of the officers with the answer(s) to the challenge! This is required for approval!"})}),"\n",(0,o.jsx)(t.p,{children:"And you're done! Make a pull request to the development branch and an officer will validate and approve you!"}),"\n",(0,o.jsx)(t.h2,{id:"editing-an-existing-challenge",children:"Editing an Existing Challenge"}),"\n",(0,o.jsxs)(t.p,{children:['To edit an existing challenge, you can simply click the "Edit This Page" link at the bottom of the challenge page. From there, you can fork the repository, edit the page, and make a pull request to the ',(0,o.jsx)(t.code,{children:"development"})," branch. Our officer team will review the changes and publish them!"]}),"\n",(0,o.jsx)(t.h2,{id:"have-questions",children:"Have Questions?"}),"\n",(0,o.jsxs)(t.p,{children:["Reach out to us on our Discord server! If you want to communicate privately, DM one of the officers or email us at ",(0,o.jsx)(t.a,{href:"mailto:hello@thehackpack.org",children:"hello@thehackpack.org"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},5303:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(6372);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);