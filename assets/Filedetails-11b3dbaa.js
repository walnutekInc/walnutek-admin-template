import{C as N,S,N as j}from"./carousel.es-3d7d3dcd.js";/* empty css                 */import{i as v,a as B,b as E,c as P,d as g,e as l,f as u,g as b,h as R}from"./img-9-fddcde13.js";import{_ as w,r as t,o as i,c as d,F as _,k as f,b as s,a,i as T,P as $,w as h,d as A,j as D}from"./index-d0ec4eb2.js";import{_ as H}from"./blog-details-b1e820f0.js";const I={name:"App",data(){return{visible:!1,index:0,imgs:[v,B,E,P,g,l,u,b]}},methods:{showImg(e){this.index=e,this.visible=!0},handleHide(){this.visible=!1},handleNext(){this.index>=this.imgs.length-1?this.index=0:this.index+=1},handlePrev(){this.index<=0?this.index=this.imgs.length-1:this.index-=1}},mounted(){window.addEventListener("keyup",e=>{e.keyCode===37&&this.handlePrev(),e.keyCode===39&&this.handleNext()})}},L={class:"row row-sm"},M=["onClick"],V={class:"card custom-card"},X=["src"];function z(e,x,y,k,o,n){const r=t("vue-easy-lightbox");return i(),d("div",L,[(i(!0),d(_,null,f(o.imgs,(m,c)=>(i(),d("div",{class:"col-6 col-md-3","data-responsive":"../assets/img/media/1.jpg","data-src":"../assets/img/media/1.jpg","data-sub-html":"<h4>Gallery Image 1</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>",key:c,onClick:()=>n.showImg(c)},[s("div",V,[s("img",{src:m,class:"img-responsive rounded-3"},null,8,X)])],8,M))),128)),a(r,{visible:o.visible,imgs:o.imgs,index:o.index,onHide:n.handleHide},null,8,["visible","imgs","index","onHide"])])}const G=w(I,[["render",z]]);const K=T({components:{Carousel:N,Slide:S,Navigation:j,Recentfileinfo:G,Pageheader:$},data:()=>({settings:{itemsToShow:1,snapAlign:"center"},owlCarouselData:[{id:1,src:v,name:"Bitcoin BTC",value:1.343434},{id:2,src:R,name:"Ethereum ETH",value:3.763674},{id:3,src:l,name:"Ripple  XRP",value:12.53647},{id:4,src:u,name:"litecoin  LTC",value:3.635387},{id:5,src:g,name:"Dash DASH",value:3.635387},{id:6,src:b,name:"Monero  XMR",value:5.34578},{id:7,src:l,name:"Neo  NEO",value:4.435456},{id:8,src:l,name:"Steem STEEM",value:2.345467}],breakpoints:{700:{itemsToShow:3.5,snapAlign:"center"},1024:{itemsToShow:4,snapAlign:"start"}}})}),O={class:"row row-sm"},q=A('<div class="col-xl-8 col-lg-12 col-md-12"><div class="card custom-card overflow-hidden"><div class="card-body px-4 pt-4"><a href="javascript:;"><img src="'+H+'" alt="img" class="rounded-3 w-100"></a></div></div></div><div class="col-xl-4 col-lg-12 col-md-12"><div class="card custom-card"><div class="card-body"><h5 class="mb-3">File details :</h5><div class=""><div class="row"><div class="col-xl-12"><div class="table-responsive"><table class="table mb-0 border-top table-bordered text-nowrap"><tbody><tr><th scope="row">File-name</th><td>image.jpg</td></tr><tr><th scope="row">File-size</th><td>12.45mb</td></tr><tr><th scope="row">uploaded-date</th><td>01-12-2020</td></tr><tr><th scope="row">uploaded-by</th><td>prityy abodh</td></tr><tr><th scope="row">image-width</th><td>1000</td></tr><tr><th scope="row">image-height</th><td>600</td></tr><tr><th scope="row">File-formate</th><td>jpg</td></tr><tr><th scope="row">File-location</th><td>storage/photos/image.jpg</td></tr></tbody></table></div></div></div></div></div></div></div>',2),J={class:"col-xl-8 col-lg-12 col-md-12"},Q={class:""},U={class:"h-100"},W={id:"owl-demo2",class:"owl-carousel owl-carousel-icons2 mb-3 mt-3"},Y={class:"item"},Z={class:"card"},ss={class:"card custom-card overflow-hidden mb-2"},es={href:"javascript:;"},ts=["src"],is=s("div",{class:"card-footer bd-t-0 py-3"},[s("div",{class:"d-flex"},[s("div",null,[s("h6",{class:"mb-0"},"221.jpg")]),s("div",{class:"ms-auto"},[s("h6",{class:"text-muted mb-0"},"120 KB")])])],-1),os={class:"col-xl-4 col-lg-12 col-md-12"},as={class:"card custom-card"},ds={class:"card-body"},cs=s("h5",{class:"mb-3"},"Recent Files",-1);function ls(e,x,y,k,o,n){const r=t("Pageheader"),m=t("Slide"),c=t("Navigation"),C=t("Carousel"),F=t("Recentfileinfo");return i(),d(_,null,[a(r,{heading:"File-Details",maintitle:"Apps",subtitle:"File-Details"}),s("div",O,[q,s("div",J,[s("div",Q,[s("div",U,[s("div",W,[a(C,{settings:e.settings,breakpoints:e.breakpoints,autoplay:2e3,"wrap-around":!0},{addons:h(()=>[a(c)]),default:h(()=>[(i(!0),d(_,null,f(e.owlCarouselData,p=>(i(),D(m,{key:p},{default:h(()=>[s("div",Y,[s("div",Z,[s("div",ss,[s("a",es,[s("img",{src:p.src},null,8,ts)]),is])])])]),_:2},1024))),128))]),_:1},8,["settings","breakpoints"])])])])]),s("div",os,[s("div",as,[s("div",ds,[cs,a(F)])])])])],64)}const ps=w(K,[["render",ls]]);export{ps as default};
