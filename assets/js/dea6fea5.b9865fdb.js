(self.webpackChunkmain_website=self.webpackChunkmain_website||[]).push([[5074],{6611:(e,s,a)=>{"use strict";a.r(s),a.d(s,{assets:()=>c,contentTitle:()=>h,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var t=a(216),i=a(5303),r=a(7504);const n={description:"Password Cracking | Medium - Masked",tags:["medium"],sidebar_position:0},h="Masked",o={id:"PasswordCracking/Medium/masked",title:"Masked",description:"Password Cracking | Medium - Masked",source:"@site/docs/PasswordCracking/Medium/masked.md",sourceDirName:"PasswordCracking/Medium",slug:"/PasswordCracking/Medium/masked",permalink:"/practice/PasswordCracking/Medium/masked",draft:!1,unlisted:!1,editUrl:"https://github.com/The-Hack-Pack/uga-scs-competitive-hacking.github.io/tree/development/docs/PasswordCracking/Medium/masked.md",tags:[{inline:!1,label:"Medium",permalink:"/practice/tags/medium",description:"Medium level challenges."}],version:"current",sidebarPosition:0,frontMatter:{description:"Password Cracking | Medium - Masked",tags:["medium"],sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Medium - Pass Crack",permalink:"/practice/category/medium---pass-crack"},next:{title:"Network Traffic Analysis",permalink:"/practice/category/network-traffic-analysis"}},c={},d=[{value:"Challenge",id:"challenge",level:2},{value:"Solution",id:"solution",level:2},{value:"Credits",id:"credits",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"masked",children:"Masked"})}),"\n",(0,t.jsx)(s.p,{children:"Password Cracking | Medium - Masked"}),"\n",(0,t.jsx)(s.h2,{id:"challenge",children:"Challenge"}),"\n",(0,t.jsx)(s.p,{children:"A password hash was retrieved that needs to be cracked. We have received intel that the password is of the format"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"THP-PASS-####"})}),"\n",(0,t.jsxs)(s.p,{children:["where ",(0,t.jsx)(s.code,{children:"#"})," is a number 0-9."]}),"\n",(0,t.jsxs)(s.p,{children:["Target Hash: ",(0,t.jsx)(s.code,{children:"a9fe58ebbe541f23dcb988ac47e7ee6f"})]}),"\n",(0,t.jsx)(r.A,{hash:"0b0583b4d6ee8fe50f52b780d92d4e774c371c8d42ef73beb2dbb284f6891388acf60ea4b201ad8f8704ae3e64e07bc33e0161f922d4e475bf73f61d5522141f",algorithm:"sha512"}),"\n",(0,t.jsx)(s.h2,{id:"solution",children:"Solution"}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:"Solution Guide"}),(0,t.jsxs)(s.p,{children:["This challenge assumes you have solved the Easy challenge ",(0,t.jsx)(s.a,{href:"https://thehackpack.org/practice/PasswordCracking/Easy/rockyou",children:(0,t.jsx)(s.strong,{children:"RockYou"})})," and have a basic understanding of Hashcat. Please do that challenge and look over the solution guide before moving to this one. In RockYou, we used Hashcat to do a wordlist attack (aka Rainbow Tables Attack). However, we do not have a dictionary this time. We only have the password format of ",(0,t.jsx)(s.code,{children:"THP-PASS-####"})," where the 4 numbers are unknown. Therefore, we will have to do a different attack to bruteforce every single number combination possible."]}),(0,t.jsxs)(s.p,{children:["Our first step is to identify the hash type. This can be done with an online tool such as ",(0,t.jsx)(s.a,{href:"https://hashes.com/en/tools/hash_identifier",children:"https://hashes.com/en/tools/hash_identifier"}),". After submitting the hash here, we can see that it is identified as an ",(0,t.jsx)(s.strong,{children:"MD5"})," hash."]}),(0,t.jsxs)(s.p,{children:["Our next step is to crack the hash. We will be using ",(0,t.jsx)(s.strong,{children:"Hashcat"})," again for this. For the purpose of this tutorial, we will be using Kali Linux."]}),(0,t.jsxs)(s.p,{children:["Hashcat supports many hash modes, denoted by a numerical ID. We know our hash is MD5 so we just need to find the hash mode ID for it. We can find that ",(0,t.jsx)(s.a,{href:"https://hashcat.net/wiki/doku.php?id=example_hashes",children:(0,t.jsx)(s.strong,{children:"here"})}),". Upon searching for MD5 here (it's the first one), we can see the hash mode is ",(0,t.jsx)(s.code,{children:"0"}),"."]}),(0,t.jsxs)(s.p,{children:["Our next step is to choose an attack type. I encourage you to take a look at hashcat's attack modes ",(0,t.jsx)(s.a,{href:"https://hashcat.net/wiki/doku.php?id=hashcat",children:(0,t.jsx)(s.strong,{children:"here"})})," (near the bottom of the page) and figure out which one to use."]}),(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:"Reveal Attack Type"}),(0,t.jsxs)(s.p,{children:["We will need to bruteforce every single number combination for this attack. Therefore, the best attack method for this would be ",(0,t.jsx)(s.a,{href:"https://hashcat.net/wiki/doku.php?id=mask_attack",children:"Mask Attack"}),". This will let us put a ",(0,t.jsx)(s.code,{children:"mask"})," of ",(0,t.jsx)(s.code,{children:"?d"})," in place of each number we don't know to tell hashcat to hash every single combination from ",(0,t.jsx)(s.code,{children:"THP-PASS-0000"})," to ",(0,t.jsx)(s.code,{children:"THP-PASS-9999"})," and compare to the target hash."]}),(0,t.jsxs)(s.p,{children:["The ID for this is attack type is ",(0,t.jsx)(s.code,{children:"3"}),"."]})]}),(0,t.jsx)(s.p,{children:"Now we can craft our command to crack the password. The format of a hashcat attack is:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"hashcat -a <attack-mode> -m <hash-mode> [hash] [other_options_like_mask]\n"})}),(0,t.jsx)(s.p,{children:"I encourage you to craft the command yourself by referencing the wiki for our attack type."}),(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:"Reveal Command"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"hashcat -a 3 -m 0 a9fe58ebbe541f23dcb988ac47e7ee6f THP-PASS-?d?d?d?d\n"})})]}),(0,t.jsxs)(s.p,{children:["After executing this command, hashcat will start cracking the hash by hashing every single password from ",(0,t.jsx)(s.code,{children:"THP-PASS-0000"})," to ",(0,t.jsx)(s.code,{children:"THP-PASS-9999"})," and compare with the target hash. This may take a few minutes depending on your computer but after a short while, we should see our hash cracked!"]})]}),"\n",(0,t.jsx)(s.h2,{id:"credits",children:"Credits"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Author(s): Divesh Gupta (legendile7)"}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},7504:(e,s,a)=>{"use strict";a.d(s,{A:()=>h});var t=a(6372),i=a(5921),r=a.n(i),n=a(216);const h=e=>{let{hash:s,algorithm:a}=e;const[i,h]=(0,t.useState)(""),[o,c]=(0,t.useState)(""),d=()=>{const e=((e,s)=>{switch(s){case"sha1":return r().SHA1(e).toString();case"sha512":return r().SHA512(e).toString();default:return e}})(i,a);c(e===s?"Correct!":"Incorrect. Try again.")};return(0,n.jsxs)("div",{children:[(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault(),d()},children:[(0,n.jsx)("input",{type:"text",value:i,onChange:e=>h(e.target.value),placeholder:"Enter answer"}),(0,n.jsx)("button",{type:"submit",children:"Check"})]}),(0,n.jsx)("p",{children:o})]})}},3936:()=>{}}]);