import{_ as r,r as l,o as t,j as b,w as c,c as s,b as e,t as i,p as v,n as g,l as w,P as p,a as d,F as $}from"./index-d0ec4eb2.js";const C={name:"my-component",data(){return{columns:[{label:"ID",field:"id"},{label:"INVOICE",field:"invoice"},{label:"NAME",field:"name"},{label:"DATE",field:"date"},{label:"TOTAL",field:"total"},{label:"WAREHOUSE",field:"warehouse"},{label:"STATUS",field:"status"},{label:"ACTIONS",field:"actionpage"}],rows:[{id:"#W83549801",invoice:"2",name:"Anna sthesia",date:"08/11/2022",total:"$1,000",warehouse:"Boston",status:"pending",statusinfo:"warning",Placement:"top"},{id:"#W83549802",invoice:"5",name:"Barb Dwyer",date:"15/11/2022",total:"$4,577",warehouse:"Washington Dc",status:"Delivered",statusinfo:"success"},{id:"#W83549803",invoice:"3",name:"Wilma Mumduya",date:"17/11/2022",total:"$4,500",warehouse:"San Francisco",status:"Delivered",statusinfo:"success"},{id:"#W83549804",invoice:"4",name:"Zack Lee",date:"18/11/2022",total:"$3,266",warehouse:"Las Vegas",status:" Refunded",statusinfo:"info"},{id:"#W83549805",invoice:"5",name:"Tom Foolery",date:"20/11/2022",total:"$1,30,000",warehouse:"Los Angel",status:"Cancelled",statusinfo:"danger"},{id:"#W83549806",invoice:"6",name:"Pat Agonia",date:"22/11/2022",total:"$2,535",warehouse:"Chicago",status:"Delivered",statusinfo:"success"},{id:"#W83549807",invoice:"6",name:"Mary Christmas",date:"26/11/2022",total:"$1,526",warehouse:"Los Angels",status:"Cancelled",statusinfo:"danger"},{id:"#W83549808",invoice:"5",name:"Ella Vator",date:"29/11/2022",total:"$1,500",warehouse:"Chicago",status:"pending",statusinfo:"warning"},{id:"#W83549809",invoice:"8",name:"Sharon Needles",date:"01/12/2022",total:"$2,30,000",warehouse:"Uk",status:"Delivered",statusinfo:"success"},{id:"#W835498010",invoice:"7",name:"Anne Fibbiyon",date:"04/12/2022",total:"$33,990",warehouse:"Chicago",status:" Refunded",statusinfo:"info"},{id:"#W835498011",invoice:"1",name:"Frank Senbeans",date:"09/12/2022",total:"$12,999",warehouse:"Chicago",status:"Cancelled",statusinfo:"danger"},{id:"#W835498012",invoice:"12",name:"Chris P. Bacon",date:"12/12/2022",total:"$15,993",warehouse:"Brazil",status:"Delivered",statusinfo:"success"}]}}},W={key:0},A={style:{"font-weight":"bold",color:"#6259ca"}},y=e("div",{class:"button-list"},[e("a",{href:"javascript:;",class:"btn"},[e("i",{class:"ti ti-files"})]),e("a",{href:"javascript:;",class:"btn"},[e("i",{class:"ti ti-pencil"})]),e("a",{href:"javascript:;",class:"btn"},[e("i",{class:"ti ti-trash"})])],-1),O={key:1},D={key:2};function k(u,m,h,f,o,_){const n=l("vue-good-table");return t(),b(n,{columns:o.columns,rows:o.rows,"line-numbers":!0,"search-options":{enabled:!0},"pagination-options":{enabled:!0,mode:"records"},compactMode:!0},{"table-actions":c(()=>[]),"table-row":c(a=>[a.column.field=="actionpage"?(t(),s("span",W,[e("span",A,i(a.row.actionpage),1),y])):v("",!0),a.column.field=="status"?(t(),s("span",O,[e("span",{class:g("status bg-"+a.row.statusinfo)},null,2),w(i(a.row.status),1)])):(t(),s("span",D,i(a.formattedRow[a.column.field]),1))]),_:1},8,["columns","rows"])}const B=r(C,[["render",k]]),N={components:{Pageheader:p,Orderdatatable:B}},S={class:"row row-sm"},T={class:"col-md-12 col-lg-12"},x={class:"card custom-card"},E=e("div",{class:"card-header border-bottom-0 pb-0"},[e("div",null,[e("div",{class:"d-flex"},[e("label",{class:"main-content-label my-auto pt-2"},"All Orders")])])],-1),P={class:"card-body"};function V(u,m,h,f,o,_){const n=l("Pageheader"),a=l("Orderdatatable");return t(),s($,null,[d(n,{heading:"All Orders",maintitle:"e-commerce",subtitle:"All Orders"}),e("div",S,[e("div",T,[e("div",x,[E,e("div",P,[d(a)])])])])],64)}const L=r(N,[["render",V]]);export{L as default};
