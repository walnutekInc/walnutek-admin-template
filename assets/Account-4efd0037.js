import{_ as n,s as h,r as o,o as d,c as r,a as i,P as w,b as s,F as k,d as m,e as f,l as t}from"./index-d0ec4eb2.js";import{b as $,a as A,c as P,_ as y}from"./15-1e8a82c1.js";import{a as p,_ as x}from"./19-58d4187b.js";const B={components:{Multiselect:h},data(){return{value:null,options:["India","USA","UK","UAE"]}}};function M(u,a,b,v,l,g){const e=o("Multiselect");return d(),r("div",null,[i(e,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=c=>l.value=c),options:l.options,placeholder:"Choose one"},null,8,["modelValue","options"])])}const R=n(B,[["render",M]]),S={components:{Multiselect:h},data(){return{value:null,options:["English","English (United States)","English UK","Arabic"]}}};function D(u,a,b,v,l,g){const e=o("Multiselect");return d(),r("div",null,[i(e,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=c=>l.value=c),options:l.options,placeholder:"Choose one"},null,8,["modelValue","options"])])}const N=n(S,[["render",D]]),C={components:{Pageheader:w,Countryselectoption:R,Languageselectoption:N}},E={class:"row row-sm"},V=m('<div class="col-xl-3 col-lg-12 col-md-12"><div class="card custom-card"><div class="card-header"><h3 class="main-content-label">My Account</h3></div><div class="card-body text-center item-user"><div class="profile-pic"><div class="profile-pic-img"><span class="bg-success dots" data-bs-toggle="tooltip" data-bs-placement="top" title="online"></span><img src="'+f+'" class="rounded-circle" alt="user"></div><a href="javascript:;" class="text-dark"><h5 class="mt-3 mb-0 font-weight-semibold">Sonia Taylor</h5></a></div></div><div class=""><div class="panel panel-primary tabs-style-4"><div class="tab-menu-heading w-100"><div class="tabs-menu"><ul class="item1-links nav nav-tabs mb-0"><li class="nav-item"><a href="#orders" class="nav-link active" data-bs-toggle="tab"><i class="ti-user icon1"></i> My orders</a></li><li class="nav-item"><a class="nav-link" href="#myaddres" data-bs-toggle="tab"><i class="ti-save-alt icon1"></i>My Address</a></li><li class="nav-item"><a class="nav-link" href="#trackorder" data-bs-toggle="tab"><i class="ti-truck icon1"></i>Track Order</a></li><li class="nav-item"><a class="nav-link" href="#whishlist" data-bs-toggle="tab"><i class="ti-heart icon1"></i> Wishlist</a></li><li class="nav-item"><a class="nav-link" href="#wallet" data-bs-toggle="tab"><i class="ti-wallet icon1"></i>Wallet</a></li><li class="nav-item"><a class="nav-link" href="#profile" data-bs-toggle="tab"><i class="ti-credit-card icon1"></i>My Profile</a></li></ul></div></div></div></div></div></div>',1),L={class:"col-xl-9 col-lg-12 col-md-12"},T={class:"card custom-card"},U={class:"card-body"},j={class:"tab-content",id:"myTabContent"},O=s("div",{class:"tab-pane fade show active",id:"orders",role:"tabpanel"},[s("div",{class:"d-flex mb-4"},[s("label",{class:"main-content-label my-auto"},"All orders"),s("h6",{class:"mb-0 ms-auto"},[s("button",{class:"btn btn-success float-end"},[s("i",{class:""}),t("Invoice ")])])]),s("div",{class:"table-responsive"},[s("table",{class:"table border text-md-nowrap text-nowrap"},[s("thead",null,[s("tr",null,[s("th",null,"#"),s("th",null,"Photo"),s("th",null,"Product"),s("th",null,"Qty"),s("th",null,"Price"),s("th",{class:"text-end"},"Total")])]),s("tbody",null,[s("tr",{class:"border-bottom"},[s("th",{scope:"row"},"#34350"),s("td",null,[s("img",{src:$,class:"img-sm product-image border",alt:"product-img"})]),s("td",null,"Plastic Outdoor Chair"),s("td",null,"1"),s("td",null,"$200"),s("td",{class:"text-end"},"$200")]),s("tr",{class:"border-bottom"},[s("th",{scope:"row"},"#34351"),s("td",null,[s("img",{src:A,class:"img-sm product-image border",alt:"product-img"})]),s("td",null,"Black Digital smart watch"),s("td",null,"2"),s("td",null,"$500"),s("td",{class:"text-end"},"$500")]),s("tr",{class:"border-bottom"},[s("th",{scope:"row"},"#34352"),s("td",null,[s("img",{src:P,class:"img-sm product-image border",alt:"product-img"})]),s("td",null,"Women Pink Heels Sandal"),s("td",null,"2"),s("td",null,"$400"),s("td",{class:"text-end"},"$400")]),s("tr",null,[s("th",{scope:"row"},"#34353"),s("td",null,[s("img",{src:p,class:"img-sm product-image border",alt:"product-img"})]),s("td",null,"Apple iPhone(Black, 128 GB)"),s("td",null,"2"),s("td",null,"$800"),s("td",{class:"text-end"},"$800")])])])])],-1),G=s("div",{class:"tab-pane fade",id:"myaddres",role:"tabpanel"},[s("button",{type:"button",class:"btn btn-round btn-success mb-3"},[s("i",{class:"fe fe-plus-circle me-2"}),t("Add New Address ")]),s("div",{class:"row"},[s("div",{class:"col-lg-12 col-xl-6"},[s("div",{class:"card custom-card border mb-lg-0"},[s("div",{class:"card-header pb-3"},[s("h6",{class:"mb-0"},[s("i",{class:"ti-home me-2"}),t("Default Address")])]),s("div",{class:"card-body"},[s("p",null,"+91 08023310451"),s("p",null," 3-15/10/403 Newark, Street no 5, Next To Pizza Hut, Bangalore, Karnataka, 560003, India. "),s("p",{class:"mb-0"},"soniataylor344@example.com")]),s("div",{class:"card-footer"},[s("div",{class:"row"},[s("div",{class:"col-6"},[s("button",{type:"button",class:"btn btn-block btn-primary mb-1"},[s("i",{class:"ti ti-pencil"})])]),s("div",{class:"col-6"},[s("button",{type:"button",class:"btn btn-block btn-outline-primary mb-1"},[s("i",{class:"ti ti-trash"})])])])])])]),s("div",{class:"col-lg-12 col-xl-6"},[s("div",{class:"card custom-card border mb-0"},[s("div",{class:"card-header pb-3"},[s("h6",{class:"mb-0"},[s("i",{class:"ti-home me-2"}),t("Office Address")])]),s("div",{class:"card-body"},[s("p",null,"+91 02228346362"),s("p",null," 2-15A-12 , Steriling Chambers, S Radhakrishnana Marg, J B Nagar, Andheri (west), Mumbai , Maharashtra "),s("p",{class:"mb-0"},"john54@gmail.com")]),s("div",{class:"card-footer"},[s("div",{class:"row"},[s("div",{class:"col-6"},[s("button",{type:"button",class:"btn btn-block btn-primary mb-1"},[s("i",{class:"ti ti-pencil"})])]),s("div",{class:"col-6"},[s("button",{type:"button",class:"btn btn-block btn-outline-primary mb-1"},[s("i",{class:"ti ti-trash"})])])])])])])])],-1),H=s("div",{class:"tab-pane fade",id:"trackorder",role:"tabpanel"},[s("h6",{class:"mb-4"},[t("ORDER ID: "),s("b",null,"OD45345345435")]),s("div",{class:"card"},[s("div",{class:"card-body row"},[s("div",{class:"col-sm-12 col-md-3 mb-3 mb-md-0"},[s("strong",null,"Estimated Delivery time:"),t(),s("br"),t("29 Dec 2020 ")]),s("div",{class:"col-sm-12 col-md-3 mb-3 mb-md-0"},[s("strong",null,"Shipping BY:"),t(),s("br"),t(" BLUEDART, | "),s("i",{class:"fa fa-phone"}),t(" +1598675986 ")]),s("div",{class:"col-sm-12 col-md-3 mb-3 mb-md-"},[s("strong",null,"Status:"),t(),s("br"),t(" Picked by the courier ")]),s("div",{class:"col-sm-12 col-md-3"},[s("strong",null,"Tracking #:"),t(),s("br"),t(" BD045903594656 ")])])]),s("div",{class:"track mb-5"},[s("div",{class:"step active"},[s("span",{class:"icon"},[s("i",{class:"fa fa-check"})]),s("span",{class:"text d-none d-md-block"},"Order confirmed")]),s("div",{class:"step active"},[s("span",{class:"icon"},[s("i",{class:"fa fa-user"})]),s("span",{class:"text d-none d-md-block"}," Picked by courier")]),s("div",{class:"step"},[s("span",{class:"icon"},[s("i",{class:"fa fa-truck"})]),s("span",{class:"text d-none d-md-block"}," On the way ")]),s("div",{class:"step"},[s("span",{class:"icon"},[s("i",{class:"fa fa-gift"})]),s("span",{class:"text d-none d-md-block"},"Ready for pickup")])]),s("br"),s("div",{class:"row mt-3"},[s("div",{class:"col-xl-4"},[s("figure",{class:"itemside mb-3"},[s("div",{class:"aside"},[s("img",{src:p,class:"img-sm product-image border",alt:"product-img"})]),s("figcaption",{class:"info align-self-center"},[s("p",{class:"title mb-1"},[t(" Apple iPhone(Black, 128 GB) "),s("br"),t(" 8GB RAM ")]),s("span",{class:"text-muted"},"$950 ")])])]),s("div",{class:"col-xl-4"},[s("figure",{class:"itemside mb-3"},[s("div",{class:"aside"},[s("img",{src:x,class:"img-sm product-image border",alt:"product-img"})]),s("figcaption",{class:"info align-self-center"},[s("p",{class:"title mb-1"},[t(" Designer Hand Decorative "),s("br"),t(" flower Pot ")]),s("span",{class:"text-muted"},"$850 ")])])]),s("div",{class:"col-xl-4"},[s("figure",{class:"itemside mb-3"},[s("div",{class:"aside"},[s("img",{src:y,class:"img-sm product-image border",alt:"product-img"})]),s("figcaption",{class:"info align-self-center"},[s("p",{class:"title mb-1"},[t("Regular waterproof "),s("br"),t("(24 L) Backpack")]),s("span",{class:"text-muted"},"$650 ")])])])])],-1),I=s("div",{class:"tab-pane fade",id:"whishlist",role:"tabpanel"},[s("div",{class:"d-flex mb-4"},[s("label",{class:"main-content-label my-auto"},"Wishlist")]),s("div",{class:"table-responsive"},[s("table",{class:"table border text-nowrap"},[s("thead",null,[s("tr",null,[s("th",null,"#"),s("th",null,"Photo"),s("th",null,"Product"),s("th",null,"Qty"),s("th",null,"Price"),s("th",null,"Total"),s("th",null,"Action")])]),s("tbody",null,[s("tr",null,[s("th",{scope:"row"},"1"),s("td",null,[s("img",{src:y,class:"img-sm product-image border",alt:"product-img"})]),s("td",null,"Regular waterproof (24 L) Backpack"),s("td",null,"1"),s("td",null,"$10"),s("td",null,"$500"),s("td",null,[s("button",{type:"button",class:"btn btn-primary mb-1 me-1"},[s("i",{class:"ti-shopping-cart me-2"}),t("Move to cart ")]),s("button",{type:"button",class:"btn btn-danger mb-1"},[s("i",{class:"ti-trash me-2"}),t("Remove ")])])]),s("tr",null,[s("th",{scope:"row"},"2"),s("td",null,[s("img",{src:x,class:"img-sm product-image border",alt:"product-img"})]),s("td",null,"Designer Hand Decorative flower Pot"),s("td",null,"1"),s("td",null,"$20"),s("td",null,"$200"),s("td",null,[s("button",{type:"button",class:"btn btn-primary mb-1 me-1"},[s("i",{class:"ti-shopping-cart me-2"}),t("Move to cart ")]),s("button",{type:"button",class:"btn btn-danger mb-1"},[s("i",{class:"ti-trash me-2"}),t("Remove ")])])]),s("tr",null,[s("th",{scope:"row"},"3"),s("td",null,[s("img",{src:p,class:"img-sm product-image border",alt:"product-img"})]),s("td",null,"Apple iPhone(Black, 128 GB) 8GB RAM"),s("td",null,"1"),s("td",null,"$30"),s("td",null,"$300"),s("td",null,[s("button",{type:"button",class:"btn btn-primary mb-1 me-1"},[s("i",{class:"ti-shopping-cart me-2"}),t("Move to cart ")]),s("button",{type:"button",class:"btn btn-danger mb-1"},[s("i",{class:"ti-trash me-2"}),t("Remove ")])])])])])])],-1),W=s("div",{class:"tab-pane fade",id:"wallet",role:"tabpanel"},[s("div",{class:"border p-4 text-center"},[s("span",{class:"text-uppercase tx-14 mt-4 text-muted"},"Available"),s("h1",{class:"my-3"},"$245465"),s("a",{href:"javascript:;",class:"btn btn-primary"},[s("i",{class:"fe fe-plus me-2"}),t("Add Money")])]),s("ul",{class:"list-group tx-13"},[s("li",{class:"list-group-item border-top-0 px-2 px-sm-4 pd-sm-x-0 d-flex justify-content-between"},[s("div",{class:"d-flex"},[s("span",{class:"crypto-icon bg-primary-transparent me-3"},[s("i",{class:"fe fe-arrow-down-left text-primary"})]),s("span",{class:"my-auto font-weight-semibold tx-15"},"Received")]),s("span",{class:"font-weight-semibold my-auto text-success tx-15"},"+0.00004564")]),s("li",{class:"list-group-item px-2 px-sm-4 pd-sm-x-0 d-flex justify-content-between"},[s("div",{class:"d-flex"},[s("span",{class:"crypto-icon bg-primary-transparent me-3"},[s("i",{class:"fe fe-arrow-up-right text-primary"})]),s("span",{class:"my-auto font-weight-semibold tx-15"},"Sent")]),s("span",{class:"font-weight-semibold my-auto text-danger tx-15"},"-0.03445436")]),s("li",{class:"list-group-item px-2 px-sm-4 pd-sm-x-0 d-flex justify-content-between"},[s("div",{class:"d-flex"},[s("span",{class:"crypto-icon bg-primary-transparent me-3"},[s("i",{class:"fe fe-arrow-down-left text-primary"})]),s("span",{class:"my-auto font-weight-semibold tx-15"},"Received")]),s("span",{class:"font-weight-semibold my-auto text-success tx-15"},"+4.2543")]),s("li",{class:"list-group-item px-2 px-sm-4 pd-sm-x-0 d-flex justify-content-between"},[s("div",{class:"d-flex"},[s("span",{class:"crypto-icon bg-primary-transparent me-3"},[s("i",{class:"fe fe-arrow-up-right text-primary"})]),s("span",{class:"my-auto font-weight-semibold tx-15"},"Sent")]),s("span",{class:"font-weight-semibold my-auto text-danger tx-15"},"+0.00255423")]),s("li",{class:"list-group-item px-2 px-sm-4 pd-sm-x-0 d-flex justify-content-between"},[s("div",{class:"d-flex"},[s("span",{class:"crypto-icon bg-primary-transparent me-3"},[s("i",{class:"fe fe-arrow-down-left text-primary"})]),s("span",{class:"my-auto font-weight-semibold tx-15"},"Received")]),s("span",{class:"font-weight-semibold my-auto text-success tx-15"},"-0.02434525")])])],-1),F={class:"tab-pane fade",id:"profile",role:"tabpanel"},K=m('<div class="d-flex align-items-start pb-3 border-bottom"><img src="'+f+'" class="img rounded-circle avatar-xl" alt=""><div class="ps-sm-4 ps-2" id="img-section"><b>Profile Photo</b><p class="mb-1">Accepted file type .png. Less than 1MB</p><button class="btn button border btn-sm"><b>Upload</b></button></div></div>',1),z={class:"py-2"},Q=m('<div class="row py-2"><div class="col-md-6"><label id="firstname">First Name</label><input type="text" class="form-control" placeholder="Steve"></div><div class="col-md-6 mt-md-0 mt-3"><label id="last-name">Last Name</label><input type="text" class="form-control" placeholder="Smith"></div></div><div class="row py-2"><div class="col-md-6"><label id="emailid">Email Address</label><input type="text" class="form-control" placeholder="steve_@email.com"></div><div class="col-md-6 mt-md-0 mt-3"><label id="phoneno">Phone Number</label><input type="tel" class="form-control" placeholder="+1 213-548-6015"></div></div>',2),J={class:"row py-2"},Y={class:"col-xl-6"},q=s("label",{for:"country"},"Country",-1),X={class:"col-xl-6 mt-md-0 mt-3",id:"lang"},Z=s("label",{for:"language"},"Language",-1),ss={class:"arrow"};function ts(u,a,b,v,l,g){const e=o("Pageheader"),c=o("Countryselectoption"),_=o("Languageselectoption");return d(),r(k,null,[i(e,{heading:"Account",maintitle:"E-commerece",subtitle:"Account"}),s("div",E,[V,s("div",L,[s("div",T,[s("div",U,[s("div",j,[O,G,H,I,W,s("div",F,[K,s("div",z,[Q,s("div",J,[s("div",Y,[q,i(c)]),s("div",X,[Z,s("div",ss,[i(_)])])])])])])])])])])],64)}const cs=n(C,[["render",ts]]);export{cs as default};