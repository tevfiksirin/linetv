import{i as h,j as g,k as u,o as a,b as i,p as w,l as A,e as t,a as d,F as f,r as b,f as l,w as x,t as v,h as P}from"./entry.af646f82.js";import{_ as D}from"./nuxt-link.3267e76f.js";import{a as m}from"./index.180fbeda.js";import{a as y,_ as H}from"./FooterNew.25aaad97.js";const j=s=>(w("data-v-3598d4e4"),s=s(),A(),s),C={class:"containerIframe"},T=j(()=>t("iframe",{id:"youtube-desktop",class:"object-cover bg-transparent responsive-iframe",allowfullscreen:"true"},null,-1)),J=[T],L=h({__name:"Hero",setup(s){return g(()=>{u(()=>{const c="EKSYnFvR2lM",e=document.getElementById("youtube-desktop");e&&e.setAttribute("src",`https://www.youtube.com/embed/${c}?modestbranding=1&rel=0&controls=1&showinfo=0&autoplay=1`)})}),(c,e)=>(a(),i("div",C,J))}});const Y=d(L,[["__scopeId","data-v-3598d4e4"]]),M={name:"MainPosts",mounted(){this.getPosts()},data(){return{posts:"",imgData:[],postsUrl:"https://www.linehaber.com.tr/wp-json/wp/v2/posts?tags=174",postsData:{per_page:4,page:1},imgUrl:"https://www.linehaber.com.tr/wp-json/wp/v2/media/",catUrl:"https://www.linehaber.com.tr/wp-json/wp/v2/categories/"}},methods:{getPosts(){m.get(this.postsUrl,{params:this.postsData}).then(s=>{this.posts=s.data;for(let c in this.posts){let e=this.posts[c].featured_media,n=this.posts[c].id;e&&e!==""&&n&&n!==""&&m.get(this.imgUrl+e).then(o=>{this.imgData[n]=o.data.source_url,console.log(o.data.source_url)}).catch(o=>{console.log(o)})}}).catch(s=>{console.log(s)})}}},E={class:"max-w-[75%] h-full"},k={class:"container h-full"},G={class:"flex flex-col justify-between h-full post-list"},U={class:"post-content"},I=["src"],F={class:"p-2 font-extrabold"};function R(s,c,e,n,o,_){const r=D;return a(),i("div",E,[t("div",k,[t("div",G,[(a(!0),i(f,null,b(o.posts,p=>(a(),i("article",{key:p.id,class:"post"},[t("div",U,[l(r,{to:p.link,target:"_blank",class:"flex h-24 gap-2 bg-white"},{default:x(()=>[t("img",{src:o.imgData[p.id],class:"object-cover"},null,8,I),t("h2",F,v(p.title.rendered),1)]),_:2},1032,["to"])])]))),128))])])])}const z=d(M,[["render",R]]),K=s=>(w("data-v-83e56351"),s=s(),A(),s),X={class:"containerIframe"},N=K(()=>t("iframe",{id:"youtube-mobil",class:"object-cover bg-transparent responsive-iframe",allowfullscreen:"true"},null,-1)),S=[N],V=h({__name:"HeroMobil",setup(s){return g(()=>{u(()=>{const c="EKSYnFvR2lM",e=document.getElementById("youtube-mobil");e&&e.setAttribute("src",`https://www.youtube.com/embed/${c}?modestbranding=1&rel=0&controls=1&showinfo=0&autoplay=1`)})}),(c,e)=>(a(),i("div",X,S))}});const O=d(V,[["__scopeId","data-v-83e56351"]]),q={name:"MainPosts",mounted(){this.getPosts()},data(){return{posts:"",imgData:[],postsUrl:"https://www.linehaber.com.tr/wp-json/wp/v2/posts?tags=174",postsData:{per_page:2,page:1},imgUrl:"https://www.linehaber.com.tr/wp-json/wp/v2/media/",catUrl:"https://www.linehaber.com.tr/wp-json/wp/v2/categories/"}},methods:{getPosts(){m.get(this.postsUrl,{params:this.postsData}).then(s=>{this.posts=s.data;for(let c in this.posts){let e=this.posts[c].featured_media,n=this.posts[c].id;e&&e!==""&&n&&n!==""&&m.get(this.imgUrl+e).then(o=>{this.imgData[n]=o.data.source_url,console.log(o.data.source_url)}).catch(o=>{console.log(o)})}}).catch(s=>{console.log(s)})}}},Z={class:"mt-8"},Q={class:"container"},W={class:"flex flex-col gap-6 post-list"},$={class:"post-content"},tt=["href"],st=["src"],et={class:"p-3 font-bold"};function ot(s,c,e,n,o,_){return a(),i("div",Z,[t("div",Q,[t("div",W,[(a(!0),i(f,null,b(o.posts,r=>(a(),i("article",{key:r.id,class:"post"},[t("div",$,[t("a",{href:r.link,target:"_blank",class:"flex h-24 gap-2 bg-white"},[t("img",{src:o.imgData[r.id],class:"object-cover"},null,8,st),t("h2",et,v(r.title.rendered),1)],8,tt)])]))),128))])])])}const ct=d(q,[["render",ot]]),B="data:image/png;base64,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",nt={},at={class:"hidden lg:block"},it={class:"flex flex-col h-screen gap-1 pl-20 pr-20 bg-secondary-500"},lt=P('<div class="flex justify-between gap-4 pt-12"><div class="flex flex-col justify-between w-7/12 h-52"><div><img src="'+y+'" alt=""></div><h1 class="text-xl tracking-wide text-primary-500">CANLI İZLE</h1></div><div class="flex items-end justify-start w-4/12"><div><img class="relative -top-6" src="'+B+'" alt=""><h1 class="text-xl tracking-wide text-primary-500">HABER SİTEMİZ</h1></div></div></div>',1),rt={class:"flex justify-between gap-4"},dt={class:"w-7/12"},pt={class:"w-4/12 h-full"},mt={class:"block h-screen p-2 lg:hidden bg-secondary-500"},_t=t("div",{class:"mb-8 logo"},[t("div",{class:"w-20 mt-4"},[t("img",{class:"object-cover",src:y,alt:""})])],-1),ht={class:"w-full"},gt=t("div",{class:"mt-8"},[t("img",{class:"w-40",src:B,alt:""}),t("h1",{class:"mt-4 text-base font-bold tracking-wide text-primary-500"},"HABER SİTEMİZ")],-1);function ut(s,c){const e=Y,n=z,o=O,_=ct;return a(),i("div",null,[t("div",at,[t("div",it,[lt,t("div",rt,[t("div",dt,[l(e)]),t("div",pt,[l(n)])])])]),t("div",mt,[_t,t("div",ht,[l(o)]),gt,t("div",null,[l(_)])])])}const wt=d(nt,[["render",ut]]),At={};function ft(s,c){const e=wt,n=H;return a(),i("div",null,[l(e),l(n)])}const xt=d(At,[["render",ft]]);export{xt as default};
