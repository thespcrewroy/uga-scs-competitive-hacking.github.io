"use strict";(self.webpackChunkmain_website=self.webpackChunkmain_website||[]).push([["9348"],{7914:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(5893);n(7294);var s=n(7670),a=n(8007);function i(e){let{metadata:t}=e,{previousPage:n,nextPage:i}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,r.jsx)(a.Z,{permalink:n,title:(0,r.jsx)(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),i&&(0,r.jsx)(a.Z,{permalink:i,title:(0,r.jsx)(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},6802:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(5893);n(7294);var s=n(8141),a=n(3146);function i(e){let{items:t,component:n=a.Z}=e;return(0,r.jsx)(r.Fragment,{children:t.map(e=>{let{content:t}=e;return(0,r.jsx)(s.n4,{content:t,children:(0,r.jsx)(n,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)})})}},8986:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(5893);n(7294);var s=n(7026),a=n(357),i=n(6171),o=n(2817),l=n(3367),u=n(8141),c=n(187),h=n(7914),g=n(2901),d=n(6802),p=n(6230);function f(e){let{author:t}=e,n=(0,o.ds)(t);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.d,{title:n}),(0,r.jsx)(g.Z,{tag:"blog_authors_posts"})]})}function m(){let{authorsListPath:e}=(0,u.wj)();return(0,r.jsx)(l.Z,{href:e,children:(0,r.jsx)(o.fw,{})})}function x(e){let{author:t,items:n,sidebar:s,listMetadata:a}=e;return(0,r.jsxs)(c.Z,{sidebar:s,children:[(0,r.jsxs)("header",{className:"margin-bottom--xl",children:[(0,r.jsx)(p.Z,{as:"h1",author:t}),t.description&&(0,r.jsx)("p",{children:t.description}),(0,r.jsx)(m,{})]}),0===n.length?(0,r.jsx)("p",{children:(0,r.jsx)(o.J$,{})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("hr",{}),(0,r.jsx)(d.Z,{items:n}),(0,r.jsx)(h.Z,{metadata:a})]})]})}function b(e){return(0,r.jsxs)(a.FG,{className:(0,s.Z)(i.k.wrapper.blogPages,i.k.page.blogAuthorsPostsPage),children:[(0,r.jsx)(f,{...e}),(0,r.jsx)(x,{...e})]})}},2817:function(e,t,n){n.d(t,{HV:function(){return u},J$:function(){return h},Wi:function(){return o},ds:function(){return l},fw:function(){return c}});var r=n(5893);n(7294);var s=n(7670),a=n(1107);function i(){let{selectMessage:e}=(0,a.c)();return t=>e(t,(0,s.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function o(e){let t=i();return(0,s.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function l(e){let t=i();return(0,s.I)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}let u=()=>(0,s.I)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function c(){return(0,r.jsx)(s.Z,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}function h(){return(0,r.jsx)(s.Z,{id:"theme.blog.author.noPosts",description:"The text for authors with 0 blog post",children:"This author has not written any posts yet."})}},454:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(5893);n(7294);var s=n(603),a=n(6513);function i(e){return(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(s.Z,{...e}),(0,r.jsx)("div",{style:{marginLeft:"0.4em"},children:(0,r.jsx)(a.cn,{contentSetId:"13b95a5f-3c78-4212-8749-0f9203c9ebe0",preset:a.ts,showCount:!0})})]})}}}]);