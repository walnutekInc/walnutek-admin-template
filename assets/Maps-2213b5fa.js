import{_ as w,m as s,r as e,o as y,j as C,w as l,a as n,c as P,b as o,t as g,F as k,l as T,q as E,v as R,u as S,p as V,P as D}from"./index-d0ec4eb2.js";const M={setup(){const c=s([40,40]),r=s("EPSG:4326"),i=s(0),t=s(0);return{center:c,projection:r,zoom:i,rotation:t}}};function W(c,r,i,t,m,p){const _=e("ol-view"),d=e("ol-source-osm"),a=e("ol-tile-layer"),u=e("ol-map");return y(),C(u,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"400px"}},{default:l(()=>[n(_,{ref:"view",center:t.center,rotation:t.rotation,zoom:t.zoom,projection:t.projection},null,8,["center","rotation","zoom","projection"]),n(a,null,{default:l(()=>[n(d)]),_:1})]),_:1})}const A=w(M,[["render",W]]),G={setup(){const c=s([10,10]),r=s("EPSG:4326"),i=s(5),t=s(0);return{center:c,projection:r,zoom:i,rotation:t}},data(){return{currentCenter:this.center,currentZoom:this.zoom,currentResolution:this.resolution,currentRotation:this.rotation}},methods:{zoomChanged(c){this.currentZoom=c},resolutionChanged(c){this.currentResolution=c},centerChanged(c){this.currentCenter=c},rotationChanged(c){this.currentRotation=c}}};function L(c,r,i,t,m,p){const _=e("ol-view"),d=e("ol-source-osm"),a=e("ol-tile-layer"),u=e("ol-map");return y(),P(k,null,[o("div",null," center : "+g(m.currentCenter)+" zoom : "+g(m.currentZoom)+" resolution : "+g(m.currentResolution)+" rotation : "+g(m.currentRotation),1),n(u,{style:{height:"100%"}},{default:l(()=>[n(_,{ref:"view",center:t.center,rotation:t.rotation,zoom:t.zoom,projection:t.projection,onZoomChanged:p.zoomChanged,onCenterChanged:p.centerChanged,onResolutionChanged:p.resolutionChanged,onRotationChanged:p.rotationChanged},null,8,["center","rotation","zoom","projection","onZoomChanged","onCenterChanged","onResolutionChanged","onRotationChanged"]),n(a,null,{default:l(()=>[n(d)]),_:1})]),_:1})],64)}const Z=w(G,[["render",L]]);const $={setup(){const c=s([40,40]),r=s("EPSG:4326"),i=s(8),t=s(0);return{center:c,projection:r,zoom:i,rotation:t}}},B={class:"overlay-content"},N=o("br",null,null,-1);function U(c,r,i,t,m,p){const _=e("ol-view"),d=e("ol-source-osm"),a=e("ol-tile-layer"),u=e("ol-overlay"),h=e("ol-map");return y(),C(h,{style:{height:"100%"}},{default:l(()=>[n(_,{ref:"view",center:t.center,rotation:t.rotation,zoom:t.zoom,projection:t.projection},null,8,["center","rotation","zoom","projection"]),n(a,null,{default:l(()=>[n(d)]),_:1}),n(u,{position:[40,40]},{default:l(v=>[o("div",B,[T(" View point"),N,T(" Position: "+g(v.position),1)])]),_:1})]),_:1})}const I=w($,[["render",U]]),F={setup(){const c=s([40,40]),r=s("EPSG:4326"),i=s(8),t=s(0),m=s(!0),p=s("Point");return{center:c,projection:r,zoom:i,rotation:t,drawEnable:m,drawType:p,drawstart:a=>{console.log(a)},drawend:a=>{console.log(a)}}}},q=o("label",{class:"mx-2",for:"checkbox"},"Draw Enable",-1),H=o("option",{value:"Point"},"Point",-1),J=o("option",{value:"LineString"},"LineString",-1),K=o("option",{value:"Polygon"},"Polygon",-1),Q=o("option",{value:"Circle"},"Circle",-1),X=[H,J,K,Q];function Y(c,r,i,t,m,p){const _=e("ol-view"),d=e("ol-source-osm"),a=e("ol-tile-layer"),u=e("ol-interaction-draw"),h=e("ol-source-vector"),v=e("ol-style-stroke"),b=e("ol-style-fill"),j=e("ol-style-circle"),z=e("ol-style"),x=e("ol-vector-layer"),O=e("ol-map");return y(),P(k,null,[E(o("input",{type:"checkbox",id:"checkbox","onUpdate:modelValue":r[0]||(r[0]=f=>t.drawEnable=f)},null,512),[[R,t.drawEnable]]),q,E(o("select",{id:"type","onUpdate:modelValue":r[1]||(r[1]=f=>t.drawType=f)},X,512),[[S,t.drawType]]),n(O,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"100%"}},{default:l(()=>[n(_,{ref:"view",center:t.center,rotation:t.rotation,zoom:t.zoom,projection:t.projection},null,8,["center","rotation","zoom","projection"]),n(a,null,{default:l(()=>[n(d)]),_:1}),n(x,null,{default:l(()=>[n(h,{projection:t.projection},{default:l(()=>[t.drawEnable?(y(),C(u,{key:0,type:t.drawType,onDrawend:t.drawend,onDrawstart:t.drawstart},null,8,["type","onDrawend","onDrawstart"])):V("",!0)]),_:1},8,["projection"]),n(z,null,{default:l(()=>[n(v,{color:"red",width:2}),n(b,{color:"rgba(255,255,255,0.1)"}),n(j,{radius:7},{default:l(()=>[n(b,{color:"blue"})]),_:1})]),_:1})]),_:1})]),_:1})],64)}const oo=w(F,[["render",Y]]),to={setup(){const c=s([40,40]),r=s("EPSG:4326"),i=s(8),t=s(0);return{center:c,projection:r,zoom:i,rotation:t}}};function eo(c,r,i,t,m,p){const _=e("ol-view"),d=e("ol-source-osm"),a=e("ol-tile-layer"),u=e("ol-geom-point"),h=e("ol-style-fill"),v=e("ol-style-stroke"),b=e("ol-style-circle"),j=e("ol-style"),z=e("ol-feature"),x=e("ol-source-vector"),O=e("ol-vector-layer"),f=e("ol-map");return y(),C(f,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"100%"}},{default:l(()=>[n(_,{ref:"view",center:t.center,rotation:t.rotation,zoom:t.zoom,projection:t.projection},null,8,["center","rotation","zoom","projection"]),n(a,null,{default:l(()=>[n(d)]),_:1}),n(O,null,{default:l(()=>[n(x,null,{default:l(()=>[n(z,null,{default:l(()=>[n(u,{coordinates:[40,40]}),n(j,null,{default:l(()=>[n(b,{radius:"20"},{default:l(()=>[n(h,{color:"white"}),n(v,{color:"green",width:10})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const no=w(to,[["render",eo]]),co={components:{Pageheader:D,Openlayermap:A,Openlayerviewmap:Z,Openlayer:I,Olinteraction:oo,Multipointview:no}},so={class:"row row-sm"},lo={class:"col-lg-12"},ro={class:"card custom-card overflow-hidden"},io={class:"card-body"},ao=o("div",null,[o("h6",{class:"main-content-label mb-1"},"Ol-map"),o("p",{class:"text-muted card-sub-title"}," This is the main container for all other Vue3 OpenLayers components and has one default slot to place them all. ")],-1),_o={class:"mapcontainer4"},mo={class:"map"},po={class:"row row-sm"},uo={class:"col-lg-6"},ho={class:"card custom-card overflow-hidden"},vo={class:"card-body"},yo=o("div",null,[o("h6",{class:"main-content-label mb-1"},"ol-view"),o("p",{class:"text-muted card-sub-title"}," A View object represents a simple 2D view of the map. ")],-1),wo={class:"mapcontainer"},fo={class:"ht-300 overflow-hidden"},go={class:"col-lg-6"},bo={class:"card custom-card overflow-hidden"},Co={class:"card-body"},jo=o("div",null,[o("h6",{class:"main-content-label mb-1"},"ol-Layer"),o("p",{class:"text-muted"},"shows how to add custom content on to the map.")],-1),zo={class:"mapcontainer1"},xo={class:"ht-300 overflow-hidden"},Oo={class:"row row-sm"},Po={class:"col-lg-6"},ko={class:"card custom-card overflow-hidden"},To={class:"card-body"},Eo=o("div",null,[o("h6",{class:"main-content-label mb-1"},"ol-style-circle"),o("p",{class:"text-muted"},"Use it inside ol-style to style points as circles.")],-1),Ro={class:"mapcontainer1"},So={class:"ht-300 overflow-hidden"},Vo={class:"col-lg-6"},Do={class:"card custom-card overflow-hidden"},Mo={class:"card-body"},Wo=o("div",null,[o("h6",{class:"main-content-label mb-1"},"ol-style-circle"),o("p",{class:"text-muted"},"Use it inside ol-style to style points as circles.")],-1),Ao={class:"mapcontainer1"},Go={class:"ht-300 overflow-hidden"};function Lo(c,r,i,t,m,p){const _=e("Pageheader"),d=e("Openlayermap"),a=e("Openlayerviewmap"),u=e("Openlayer"),h=e("Multipointview"),v=e("Olinteraction");return y(),P(k,null,[n(_,{heading:" OpenLayer Maps",maintitle:"Apps",subtitle:"Maps"}),o("div",so,[o("div",lo,[o("div",ro,[o("div",io,[ao,o("div",_o,[o("div",mo,[n(d)])])])])])]),o("div",po,[o("div",uo,[o("div",ho,[o("div",vo,[yo,o("div",wo,[o("div",fo,[n(a)])])])])]),o("div",go,[o("div",bo,[o("div",Co,[jo,o("div",zo,[o("div",xo,[n(u)])])])])])]),o("div",Oo,[o("div",Po,[o("div",ko,[o("div",To,[Eo,o("div",Ro,[o("div",So,[n(h)])])])])]),o("div",Vo,[o("div",Do,[o("div",Mo,[Wo,o("div",Ao,[o("div",Go,[n(v)])])])])])])],64)}const $o=w(co,[["render",Lo]]);export{$o as default};
