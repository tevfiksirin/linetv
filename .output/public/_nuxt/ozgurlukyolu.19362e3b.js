import{a as p,b as o,e as s,F as u,r as c,o as l,t as d}from"./entry.da68c3c9.js";const _={data(){return{videoItems:[]}},methods:{loadPlaylist(){fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLPlQXrMWR4Y7BfnO6dZJNIQHCeXx5itzs&key=AIzaSyBRsjyQ1DggqJZhmYRWZLOAAqZyYpVQEBY").then(e=>e.json()).then(e=>{this.videoItems=e.items.reverse()}).catch(e=>console.log(e))}},mounted(){this.loadPlaylist()}},y={class:"video-playlist"},h=["href"],m=["src"];function I(a,n,r,e,i,g){return l(),o("div",y,[s("ul",null,[(l(!0),o(u,null,c(i.videoItems,t=>(l(),o("li",{key:t.snippet.resourceId.videoId},[s("a",{href:"https://www.youtube.com/watch?v="+t.snippet.resourceId.videoId,target:"_blank"},[s("img",{src:t.snippet.thumbnails.medium.url},null,8,m),s("span",null,d(t.snippet.title),1)],8,h)]))),128))])])}const f=p(_,[["render",I]]);export{f as default};
