import{bz as m,by as b,bs as w,bo as E,bD as x,bS as S,bT as o,bZ as C,bE as d,bQ as M,bU as y,bH as g,bC as L}from"./vendor.6a6b1e94.js";const T=(a,e)=>{const t=m(),l=m(),_=m(!1),f=b(()=>!t.value||!l.value?null:{x:l.value.x-t.value.x,y:l.value.y-t.value.y}),h=b(()=>{if(!f.value)return"";const{x:r,y:u}=f.value;return Math.abs(r)>Math.abs(u)?r>0?"right":"left":u>0?"down":"up"}),s=r=>{var u,v;(u=e==null?void 0:e.beforeStart)==null||u.call(e,r),_.value=!0,l.value=t.value={x:r.touches[0].screenX,y:r.touches[0].screenY},(v=e==null?void 0:e.afterStart)==null||v.call(e,r)},c=r=>{var u,v;(u=e==null?void 0:e.beforeMove)==null||u.call(e,r),t.value&&(l.value={x:r.touches[0].screenX,y:r.touches[0].screenY},(v=e==null?void 0:e.afterMove)==null||v.call(e,r))},i=r=>{var u,v;(u=e==null?void 0:e.beforeEnd)==null||u.call(e,r),_.value=!1,(v=e==null?void 0:e.afterEnd)==null||v.call(e,r)};return w(()=>{!a.value||(a.value.addEventListener("touchstart",s),a.value.addEventListener("touchmove",c),a.value.addEventListener("touchend",i))}),E(()=>{!a.value||(a.value.removeEventListener("touchstart",s),a.value.removeEventListener("touchmove",c),a.value.removeEventListener("touchend",i))}),{swiping:_,direction:h,distance:f}},W=(a,e)=>{let t,l;return(..._)=>(t||(l=a(..._),t=setTimeout(()=>{t=void 0},e)),l)},F="_wrapper_1vy93_1",V="_slide_fade_enter_active_1vy93_34",j="_slide_fade_leave_active_1vy93_35",D="_slide_fade_enter_from_1vy93_44",N="_slide_fade_leave_to_1vy93_48",n={wrapper:F,slide_fade_enter_active:V,slide_fade_leave_active:j,slide_fade_enter_from:D,slide_fade_leave_to:N};function R(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!L(a)}const A={WelcomeFirst:"/welcome/second",WelcomeSecond:"/welcome/third",WelcomeThird:"/welcome/fourth",WelcomeFourth:"/items"},O=x({setup:(a,e)=>{const t=m(),{direction:l,swiping:_}=T(t,{beforeStart:c=>c.preventDefault()}),f=S(),h=o(),s=W(()=>{const c=(f.name||"WelcomeFirst").toString();h.replace(A[c])},500);return C(()=>{_.value&&l.value==="left"&&s()}),()=>d("div",{class:n.wrapper},[d("header",null,[d("svg",null,[d("use",{"xlink:href":"#whale"},null)]),d("h1",null,[M("\u6709\u4F59\u8BB0\u8D26")])]),d("main",{class:n.main,ref:t},[d(y,{name:"main"},{default:({Component:c})=>d(g,{enterFromClass:n.slide_fade_enter_from,enterActiveClass:n.slide_fade_enter_active,leaveToClass:n.slide_fade_leave_to,leaveActiveClass:n.slide_fade_leave_active},R(c)?c:{default:()=>[c]})})]),d("footer",null,[d(y,{name:"footer"},null)])])}});export{O as Welcome,O as default};
