(this["webpackJsonpresolute-apparel"]=this["webpackJsonpresolute-apparel"]||[]).push([[0],{63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(2),r=n.n(c),i=n(31),s=n.n(i),l=n(18),o=n(8),u=n(41),p=n(17),d=n(37),m=n.n(d),b=n(33),h=n(42),j=n.n(h),g=n(4),O="SET_CURRENT_USER",f={currentUser:null},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(g.a)(Object(g.a)({},e),{},{currentUser:t.payload});default:return e}},x={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",REMOVE_ITEM:"REMOVE_ITEM"},y=n(44),_=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(g.a)(Object(g.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(y.a)(e),[Object(g.a)(Object(g.a)({},t),{},{quantity:1})])},k=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(g.a)(Object(g.a)({},e),{},{quantity:e.quantity-1}):e}))},w={hidden:!0,cartItems:[]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x.TOGGLE_CART_HIDDEN:return Object(g.a)(Object(g.a)({},e),{},{hidden:!e.hidden});case x.ADD_ITEM:return Object(g.a)(Object(g.a)({},e),{},{cartItems:_(e.cartItems,t.payload)});case x.REMOVE_ITEM:return Object(g.a)(Object(g.a)({},e),{},{cartItems:k(e.cartItems,t.payload)});case x.CLEAR_ITEM_FROM_CART:return Object(g.a)(Object(g.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},E={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;return t.type,e},I={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;return t.type,e},S={key:"root",storage:j.a,whitelist:["cart"]},T=Object(p.c)({user:v,cart:N,directory:C,shop:U}),M=Object(b.a)(S,T),A=[m.a];A.push(m.a);var R=Object(p.d)(M,p.a.apply(void 0,A)+window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),P=Object(b.b)(R),D=n(14),B=n.n(D),G=n(19),q=n(25),L=n(26),V=n(28),z=n(27),H=n(6),J=Object(H.a)([function(e){return e.user}],(function(e){return e.currentUser})),W=n(9),F=n(29),X=(n(57),n(60),function(){var e=Object(G.a)(B.a.mark((function e(t,n){var a,c,r,i;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=Y.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return c=t.displayName,r=t.email,i=new Date,e.prev=9,e.next=12,a.set(Object(g.a)({displayName:c,email:r,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("Error creating user",e.t0.message);case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}());F.a.initializeApp({apiKey:"AIzaSyCcDfoGhoIikkZvioqZQxhEj71PxLccJ3c",authDomain:"resolute-apparel.firebaseapp.com",databaseURL:"https://resolute-apparel.firebaseio.com",projectId:"resolute-apparel",storageBucket:"resolute-apparel.appspot.com",messagingSenderId:"407361526842",appId:"1:407361526842:web:83ffcc2da0ae4e1426a903",measurementId:"G-M7THLFCPSM"});var Q=F.a.auth(),Y=F.a.firestore(),K=new F.a.auth.GoogleAuthProvider;K.setCustomParameters({prompt:"select_account"});var Z=function(){return Q.signInWithPopup(K)};F.a;function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ee(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var te=c.createElement("g",{transform:"translate(0.000000,123.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none"},c.createElement("path",{d:"M462 1210 c-341 -92 -539 -447 -433 -780 58 -185 218 -343 406 -403 55 -17 94 -22 180 -22 86 0 125 5 180 22 191 61 348 217 408 408 31 99 31 261 0 360 -60 189 -216 347 -403 406 -95 31 -244 35 -338 9z m-42 -245 c37 -19 50 -43 50 -94 0 -28 -7 -48 -25 -70 l-26 -30 31 -60 c16 -33 30 -65 30 -71 0 -5 -13 -10 -30 -10 -25 0 -33 8 -65 65 -32 57 -40 65 -66 65 l-29 0 0 -65 0 -65 -35 0 -35 0 0 175 0 175 85 0 c57 0 96 -5 115 -15z m348 3 c-2 -7 -65 -172 -139 -365 -132 -349 -134 -353 -162 -353 -19 0 -27 5 -25 13 2 8 64 172 138 365 134 350 135 352 163 352 19 0 28 -4 25 -12z m191 -441 c33 -90 61 -169 61 -175 0 -7 -13 -12 -30 -12 -25 0 -31 5 -41 40 l-12 40 -67 0 -67 0 -12 -40 c-11 -37 -15 -40 -46 -40 l-35 0 25 68 c107 284 106 282 135 282 26 0 30 -7 89 -163z"}),c.createElement("path",{d:"M290 870 l0 -50 40 0 c27 0 47 7 60 20 24 24 24 29 4 58 -12 17 -25 22 -60 22 l-44 0 0 -50z"}),c.createElement("path",{d:"M847 541 c-9 -27 -17 -51 -17 -55 0 -3 18 -6 41 -6 31 0 40 3 36 14 -3 8 -11 32 -18 55 -7 23 -15 41 -18 41 -4 0 -14 -22 -24 -49z"}));function ne(e,t){var n=e.title,a=e.titleId,r=ee(e,["title","titleId"]);return c.createElement("svg",$({xmlns:"http://www.w3.org/2000/svg",width:"123.000000pt",height:"123.000000pt",viewBox:"0 0 123.000000 123.000000",preserveAspectRatio:"xMidYMid meet",ref:t,"aria-labelledby":a},r),n?c.createElement("title",{id:a},n):null,te)}var ae=c.forwardRef(ne),ce=(n.p,function(){return{type:x.TOGGLE_CART_HIDDEN}}),re=function(e){return{type:x.ADD_ITEM,payload:e}},ie=function(e){return e.cart},se=Object(H.a)([ie],(function(e){return e.cartItems})),le=Object(H.a)([ie],(function(e){return e.hidden})),oe=Object(H.a)([se],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),ue=Object(H.a)([se],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)}));function pe(){return(pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function de(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var me=c.createElement("g",null),be=c.createElement("g",null),he=c.createElement("g",null),je=c.createElement("g",null),ge=c.createElement("g",null),Oe=c.createElement("g",null),fe=c.createElement("g",null),ve=c.createElement("g",null),xe=c.createElement("g",null),ye=c.createElement("g",null),_e=c.createElement("g",null),ke=c.createElement("g",null),we=c.createElement("g",null),Ne=c.createElement("g",null),Ee=c.createElement("g",null);function Ce(e,t){var n=e.title,a=e.titleId,r=de(e,["title","titleId"]);return c.createElement("svg",pe({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":a},r),n?c.createElement("title",{id:a},n):null,c.createElement("g",null,c.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),c.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),c.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),me,be,he,je,ge,Oe,fe,ve,xe,ye,_e,ke,we,Ne,Ee)}var Ie=c.forwardRef(Ce),Ue=(n.p,Object(H.b)({itemCount:oe})),Se=Object(o.b)(Ue,(function(e){return{toggleCartHidden:function(){return e(ce())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(a.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(a.jsx)(Ie,{className:"shopping-icon"}),Object(a.jsx)("span",{className:"item-count",children:n})]})})),Te=n(20),Me=function(e){var t=e.children,n=e.isGoogleSignIn,c=e.inverted,r=Object(Te.a)(e,["children","isGoogleSignIn","inverted"]);return Object(a.jsx)("button",Object(g.a)(Object(g.a)({className:"".concat(c?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},r),{},{children:t}))},Ae=function(e){var t=e.item,n=t.imageUrl,c=t.price,r=t.name,i=t.quantity;return Object(a.jsxs)("div",{className:"cart-item",children:[Object(a.jsx)("img",{src:n,alt:"item"}),Object(a.jsxs)("div",{className:"cart-item__details",children:[Object(a.jsx)("span",{className:"cart-item__details-name",children:r}),Object(a.jsxs)("span",{className:"cart-item__details-price",children:[i," x $",c]})]})]})},Re=Object(H.b)({cartItems:se}),Pe=Object(W.g)(Object(o.b)(Re)((function(e){var t=e.cartItems,n=e.history,c=e.dispatch;return Object(a.jsxs)("div",{className:"cart-dropdown",children:[Object(a.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(a.jsx)(Ae,{item:e},e.id)})):Object(a.jsx)("span",{className:"empty-message",children:"Your cart is empty"})}),Object(a.jsx)(Me,{onClick:function(){n.push("/checkout"),c(ce())},children:"GO TO CHECKOUT"})]})}))),De=Object(H.b)({currentUser:J,hidden:le}),Be=Object(o.b)(De)((function(e){var t=e.currentUser,n=e.hidden;return Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)(l.b,{className:"header__logo-container",to:"/",children:Object(a.jsx)(ae,{className:"header__logo-container-logo"})}),Object(a.jsxs)("div",{className:"header__options",children:[Object(a.jsx)(l.b,{className:"header__options-option",to:"/shop",children:"SHOP"}),t?Object(a.jsx)("div",{className:"header__options-option",onClick:function(){return Q.signOut()},children:"SIGN OUT"}):Object(a.jsx)(l.b,{className:"header__options-option",to:"/signin",children:"SIGN IN"}),Object(a.jsx)(Se,{})]}),n?null:Object(a.jsx)(Pe,{})]})})),Ge=Object(W.g)((function(e){var t=e.title,n=e.imageUrl,c=e.size,r=e.history,i=e.linkUrl,s=e.match;return Object(a.jsxs)("div",{className:"".concat(c," menu-item"),onClick:function(){return r.push("".concat(s.url).concat(i))},children:[Object(a.jsx)("div",{className:"menu-item__background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(a.jsxs)("div",{className:"menu-item__content",children:[Object(a.jsx)("h1",{className:"menu-item__content-title",children:t}),Object(a.jsx)("span",{className:"menu-item__content-subtitle",children:"SHOP NOW"})]})]})})),qe=Object(H.a)([function(e){return e.directory}],(function(e){return e.sections})),Le=Object(H.b)({sections:qe}),Ve=Object(o.b)(Le)((function(e){var t=e.sections;return Object(a.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(Te.a)(e,["id"]);return Object(a.jsx)(Ge,Object(g.a)({},n),t)}))})})),ze=function(){return Object(a.jsx)("div",{className:"homepage",children:Object(a.jsx)(Ve,{})})},He=Object(o.b)(null,(function(e){return{addItem:function(t){return e(re(t))}}}))((function(e){var t=e.item,n=e.addItem,c=t.name,r=t.price,i=t.imageUrl;return Object(a.jsxs)("div",{className:"collection-item",children:[Object(a.jsx)("div",{className:"collection-item__image",style:{backgroundImage:"url(".concat(i,")")}}),Object(a.jsxs)("div",{className:"collection-item__footer",children:[Object(a.jsx)("span",{className:"collection-item__footer-name",children:c}),Object(a.jsxs)("span",{className:"collection-item__footer-price",children:["$",r]})]}),Object(a.jsx)(Me,{onClick:function(){return n(t)},inverted:!0,children:"Add to cart"})]})})),Je=function(e){var t=e.title,n=e.items;return Object(a.jsxs)("div",{className:"collection-preview",children:[Object(a.jsx)("h1",{className:"collection-preview__title",children:t}),Object(a.jsx)("div",{className:"collection-preview__preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(a.jsx)(He,{item:e},e.id)}))})]})},We=Object(H.a)([function(e){return e.shop}],(function(e){return e.collections})),Fe=Object(H.a)([We],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),Xe=Object(H.b)({collections:Fe}),Qe=Object(o.b)(Xe)((function(e){var t=e.collections;return Object(a.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object(Te.a)(e,["id"]);return Object(a.jsx)(Je,Object(g.a)({},n),t)}))})})),Ye=Object(o.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(H.a)([We],(function(e){return e[n]})))(e)};var n}))((function(e){var t=e.collection,n=t.title,c=t.items;return Object(a.jsxs)("div",{className:"collection-page",children:[Object(a.jsx)("h2",{className:"collection-page__title",children:n}),Object(a.jsx)("div",{className:"collection-page__items",children:c.map((function(e){return Object(a.jsx)(He,{item:e},e.id)}))})]})})),Ke=function(e){var t=e.match;return Object(a.jsxs)("div",{className:"shop-page",children:[Object(a.jsx)(W.b,{exact:!0,path:"".concat(t.path),component:Qe}),Object(a.jsx)(W.b,{path:"".concat(t.path,"/:collectionId"),component:Ye})]})},Ze=n(24),$e=function(e){var t=e.handleChange,n=e.label,c=Object(Te.a)(e,["handleChange","label"]);return Object(a.jsxs)("div",{className:"form__fields",children:[Object(a.jsx)("input",Object(g.a)({className:"form__fields-input",onChange:t},c)),n?Object(a.jsx)("label",{className:"".concat(c.value.length?"form__fields-input-label-shrink":""," form__fields-input-label "),children:n}):null]})},et=function(e){Object(V.a)(n,e);var t=Object(z.a)(n);function n(e){var a;return Object(q.a)(this,n),(a=t.call(this,e)).handleSubmit=function(){var e=Object(G.a)(B.a.mark((function e(t){var n,c,r;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,c=n.email,r=n.password,e.prev=2,e.next=5,Q.signInWithEmailAndPassword(c,r);case 5:a.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=e.target,n=t.value,c=t.name;a.setState(Object(Ze.a)({},c,n))},a.state={email:"",password:""},a}return Object(L.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"sign-in",children:[Object(a.jsx)("h2",{className:"title",children:"I already have an account"}),Object(a.jsx)("span",{children:"Sign in with your email and password"}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)($e,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"Email",required:!0}),Object(a.jsx)($e,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"Password",required:!0}),Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsx)(Me,{type:"submit",children:" Sign in "}),Object(a.jsx)(Me,{onClick:Z,isGoogleSignIn:!0,children:"Sign in with Google"})]})]})]})}}]),n}(r.a.Component),tt=function(e){Object(V.a)(n,e);var t=Object(z.a)(n);function n(){var e;return Object(q.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(G.a)(B.a.mark((function t(n){var a,c,r,i,s,l,o;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=e.state,c=a.displayName,r=a.email,i=a.password,s=a.confirmPassword,i===s){t.next=5;break}return alert("passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,Q.createUserWithEmailAndPassword(r,i);case 8:return l=t.sent,o=l.user,t.next=12,X(o,{displayName:c});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(Ze.a)({},a,c))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(L.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,c=e.password,r=e.confirmPassword;return Object(a.jsxs)("div",{className:"sign-up",children:[Object(a.jsx)("h2",{className:"title",children:"I do not have a account"}),Object(a.jsx)("span",{children:"Sign up with your email and password"}),Object(a.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(a.jsx)($e,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),Object(a.jsx)($e,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(a.jsx)($e,{type:"password",name:"password",value:c,onChange:this.handleChange,label:"Password",required:!0}),Object(a.jsx)($e,{type:"password",name:"confirmPassword",value:r,onChange:this.handleChange,label:"Confirm Password",required:!0}),Object(a.jsx)(Me,{type:"submit",children:"SIGN UP"})]})]})}}]),n}(r.a.Component),nt=function(e){return Object(a.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(a.jsx)(et,{}),Object(a.jsx)(tt,{})]})},at=Object(o.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:x.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(re(t))},removeItem:function(t){return e(function(e){return{type:x.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,c=e.addItem,r=e.removeItem,i=t.name,s=t.imageUrl,l=t.price,o=t.quantity;return Object(a.jsxs)("div",{className:"checkout-item",children:[Object(a.jsx)("div",{className:"checkout-item__image-container",children:Object(a.jsx)("img",{src:s,alt:"item"})}),Object(a.jsx)("span",{className:"checkout-item__name",children:i}),Object(a.jsxs)("span",{className:"checkout-item__quantity",children:[Object(a.jsxs)("div",{className:"checkout-item__quantity-adjuster",onClick:function(){return r(t)},children:[" ","\u276e"]}),Object(a.jsx)("span",{className:"value",children:o}),Object(a.jsxs)("div",{className:"checkout-item__quantity-adjuster",onClick:function(){return c(t)},children:[" ","\u276f"]})]}),Object(a.jsxs)("span",{className:"checkout-item__price",children:["$",l]}),Object(a.jsx)("button",{className:"checkout-item__remove-button",onClick:function(){return n(t)},children:"\u2715"})]})})),ct=n(43),rt=n.n(ct),it=function(e){var t=e.price,n=100*t;return Object(a.jsx)(rt.a,{label:"Pay Now",name:"Resolute Apparel",billingAddress:!0,shippingAddress:!0,image:"https://raw.githubusercontent.com/timmybytes/resolute-apparel/e80682a2f2bb48dba1741668755b373959c9336a/src/assets/resolute-apparel-logo.svg",description:"Your total is $".concat(t),amount:n,panel:"Pay Now",token:function(e){console.log(e),alert("Payment Successful")},stripeKey:"pk_test_51Hw6hCFiIW9yLxn1C22p6Dyvuj9si9MI7yq2VC18JzRf4EicL2QjmpQmcIItXlVBfa9Dxp6AaGPYx8kVdhqzl4NV00N93SJXGl"})},st=Object(H.b)({cartItems:se,total:ue}),lt=Object(o.b)(st)((function(e){var t=e.cartItems,n=e.total;return Object(a.jsxs)("div",{className:"checkout-page",children:[Object(a.jsxs)("div",{className:"checkout-page__header",children:[Object(a.jsx)("div",{className:"checkout-page__header-block",children:Object(a.jsx)("span",{children:"Product"})}),Object(a.jsx)("div",{className:"checkout-page__header-block",children:Object(a.jsx)("span",{children:"Description"})}),Object(a.jsx)("div",{className:"checkout-page__header-block",children:Object(a.jsx)("span",{children:"Quantity"})}),Object(a.jsx)("div",{className:"checkout-page__header-block",children:Object(a.jsx)("span",{children:"Price"})}),Object(a.jsx)("div",{className:"checkout-page__header-block",children:Object(a.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(a.jsx)(at,{cartItem:e},e.id)})),Object(a.jsx)("div",{className:"checkout-page__total",children:Object(a.jsxs)("span",{children:["TOTAL: $",n]})}),Object(a.jsxs)("div",{className:"checkout-page__test-warning",children:["Please use the following test credit card for payments: ",Object(a.jsx)("br",{}),"CC: 4242 4242 4242 4242 - Exp: Any future date - CVV: Any three digits"]}),Object(a.jsx)(it,{className:"checkout-page__stripe-button",price:n})]})})),ot=function(e){Object(V.a)(n,e);var t=Object(z.a)(n);function n(){var e;Object(q.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).unsubscribeFromAuth=null,e}return Object(L.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=Q.onAuthStateChanged(function(){var t=Object(G.a)(B.a.mark((function t(n){return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=7;break}return t.next=3,X(n);case 3:t.sent.onSnapshot((function(t){e(Object(g.a)({id:t.id},t.data()))})),t.next=8;break;case 7:e(n);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Be,{}),Object(a.jsxs)(W.d,{children:[Object(a.jsx)(W.b,{exact:!0,path:"".concat("/resolute-apparel","/"),component:ze}),Object(a.jsx)(W.b,{path:"".concat("/resolute-apparel","/shop"),component:Ke}),Object(a.jsx)(W.b,{exact:!0,path:"".concat("/resolute-apparel","/checkout"),component:lt}),Object(a.jsx)(W.b,{exact:!0,path:"".concat("/resolute-apparel","/signin"),render:function(){return e.props.currentUser?Object(a.jsx)(W.a,{to:"/"}):Object(a.jsx)(nt,{})}})]})]})}}]),n}(r.a.Component),ut=Object(H.b)({currentUser:J}),pt=Object(o.b)(ut,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:O,payload:e}}(t))}}}))(ot);n(63);s.a.render(Object(a.jsx)(o.a,{store:R,children:Object(a.jsx)(l.a,{basename:"/",children:Object(a.jsx)(u.a,{persistor:P,children:Object(a.jsx)(pt,{})})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.1a5beed7.chunk.js.map