import{a as d,o as a,b as i,e as t,F as g,r as m,t as _,f as l,h as f}from"./entry.da68c3c9.js";import{a as p}from"./index.80d604a0.js";import{a as A,_ as u}from"./FooterNew.04cf40c5.js";import"./nuxt-link.be39c832.js";const v={},B={class:"containerIframe"},b=t("iframe",{class:"object-cover bg-transparent responsive-iframe",src:"https://player.socialsmart.tv/linetv/",allowfullscreen:"true"},null,-1),x=[b];function y(e,n){return a(),i("div",B,x)}const P=d(v,[["render",y]]),D={name:"MainPosts",mounted(){this.getPosts()},data(){return{posts:"",imgData:[],postsUrl:"https://www.linehaber.com.tr/wp-json/wp/v2/posts?tags=174",postsData:{per_page:4,page:1},imgUrl:"https://www.linehaber.com.tr/wp-json/wp/v2/media/",catUrl:"https://www.linehaber.com.tr/wp-json/wp/v2/categories/"}},methods:{getPosts(){p.get(this.postsUrl,{params:this.postsData}).then(e=>{this.posts=e.data;for(let n in this.posts){let c=this.posts[n].featured_media,o=this.posts[n].id;c&&c!==""&&o&&o!==""&&p.get(this.imgUrl+c).then(s=>{this.imgData[o]=s.data.source_url,console.log(s.data.source_url)}).catch(s=>{console.log(s)})}}).catch(e=>{console.log(e)})}}},H={class:"max-w-[75%] h-full"},j={class:"container h-full"},C={class:"flex flex-col justify-between h-full post-list"},T={class:"post-content"},J=["href"],L=["src"],Y={class:"p-2 font-extrabold"};function M(e,n,c,o,s,h){return a(),i("div",H,[t("div",j,[t("div",C,[(a(!0),i(g,null,m(s.posts,r=>(a(),i("article",{key:r.id,class:"post"},[t("div",T,[t("a",{href:r.link,target:"_blank",class:"flex h-24 gap-2 bg-white"},[t("img",{src:s.imgData[r.id],class:"object-cover"},null,8,L),t("h2",Y,_(r.title.rendered),1)],8,J)])]))),128))])])])}const E=d(D,[["render",M]]);const G={},U={class:"containerIframe"},k=t("iframe",{class:"object-cover bg-transparent responsive-iframe",src:"https://player.socialsmart.tv/linetv/",allowfullscreen:"true"},null,-1),z=[k];function F(e,n){return a(),i("div",U,z)}const R=d(G,[["render",F]]),K={name:"MainPosts",mounted(){this.getPosts()},data(){return{posts:"",imgData:[],postsUrl:"https://www.linehaber.com.tr/wp-json/wp/v2/posts?tags=174",postsData:{per_page:2,page:1},imgUrl:"https://www.linehaber.com.tr/wp-json/wp/v2/media/",catUrl:"https://www.linehaber.com.tr/wp-json/wp/v2/categories/"}},methods:{getPosts(){p.get(this.postsUrl,{params:this.postsData}).then(e=>{this.posts=e.data;for(let n in this.posts){let c=this.posts[n].featured_media,o=this.posts[n].id;c&&c!==""&&o&&o!==""&&p.get(this.imgUrl+c).then(s=>{this.imgData[o]=s.data.source_url,console.log(s.data.source_url)}).catch(s=>{console.log(s)})}}).catch(e=>{console.log(e)})}}},X={class:"mt-8"},I={class:"container"},N={class:"flex flex-col gap-6 post-list"},V={class:"post-content"},O=["href"],q=["src"],Z={class:"p-3 font-bold"};function S(e,n,c,o,s,h){return a(),i("div",X,[t("div",I,[t("div",N,[(a(!0),i(g,null,m(s.posts,r=>(a(),i("article",{key:r.id,class:"post"},[t("div",V,[t("a",{href:r.link,target:"_blank",class:"flex h-24 gap-2 bg-white"},[t("img",{src:s.imgData[r.id],class:"object-cover"},null,8,q),t("h2",Z,_(r.title.rendered),1)],8,O)])]))),128))])])])}const Q=d(K,[["render",S]]),w="data:image/png;base64,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",W={},$={class:"hidden lg:block"},tt={class:"flex flex-col h-screen gap-1 pl-20 pr-20 bg-secondary-500"},st=f('<div class="flex justify-between gap-4 pt-12"><div class="flex flex-col justify-between w-7/12 h-52"><div><img src="'+A+'" alt=""></div><h1 class="text-xl tracking-wide text-primary-500">CANLI İZLE</h1></div><div class="flex items-end justify-start w-4/12"><div><img class="relative -top-6" src="'+w+'" alt=""><h1 class="text-xl tracking-wide text-primary-500">HABER SİTEMİZ</h1></div></div></div>',1),et={class:"flex justify-between gap-4"},ct={class:"w-7/12"},ot={class:"w-4/12 h-full"},nt={class:"block h-screen p-2 lg:hidden bg-secondary-500"},at=t("div",{class:"mb-8 logo"},[t("div",{class:"w-20 mt-4"},[t("img",{class:"object-cover",src:A,alt:""})])],-1),it={class:"w-full"},rt=t("div",{class:"mt-8"},[t("img",{class:"w-40",src:w,alt:""}),t("h1",{class:"mt-4 text-base font-bold tracking-wide text-primary-500"},"HABER SİTEMİZ")],-1);function lt(e,n){const c=P,o=E,s=R,h=Q;return a(),i("div",null,[t("div",$,[t("div",tt,[st,t("div",et,[t("div",ct,[l(c)]),t("div",ot,[l(o)])])])]),t("div",nt,[at,t("div",it,[l(s)]),rt,t("div",null,[l(h)])])])}const dt=d(W,[["render",lt]]),pt={};function ht(e,n){const c=dt,o=u;return a(),i("div",null,[l(c),l(o)])}const wt=d(pt,[["render",ht]]);export{wt as default};
