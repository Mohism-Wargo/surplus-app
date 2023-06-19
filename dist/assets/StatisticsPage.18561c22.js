import{T as w,g as x,d as k,F as O,h as D,e as A}from"./index.79152699.js";import{i as T}from"./echarts.e9bcecd5.js";import{bD as l,bz as u,bs as m,br as _,bE as r,bQ as c,by as f}from"./vendor.6a6b1e94.js";import"./vant.6410adee.js";const M="_wrapper_kkstk_1",L={wrapper:M},C="_wrapper_wxcjg_1",I={wrapper:C},Y={tooltip:{show:!0,trigger:"axis",formatter:([e])=>{const[s,t]=e.data;return`${new w(new Date(s)).format("YYYY\u5E74MM\u6708DD\u65E5")} \uFFE5${x(t)}`}},grid:[{left:16,top:20,right:16,bottom:20}],xAxis:{type:"time",boundaryGap:["3%","0%"],axisLabel:{formatter:e=>new w(new Date(e)).format("MM-DD")},axisTick:{alignWithLabel:!0}},yAxis:{show:!0,type:"value",splitLine:{show:!0,lineStyle:{type:"dashed"}},axisLabel:{show:!1}}},F=l({props:{data:{type:Array,required:!0}},setup:(e,s)=>{const t=u();let a;return m(()=>{t.value!==void 0&&(a=T(t.value),a.setOption({...Y,series:[{data:e.data,type:"line"}]}))}),_(()=>e.data,()=>{a==null||a.setOption({series:[{data:e.data}]})}),()=>r("div",{ref:t,class:I.wrapper},null)}}),V="_wrapper_1iji7_1",E={wrapper:V},B={tooltip:{trigger:"item",formatter:e=>{const{name:s,value:t,percent:a}=e;return`${s}: \uFFE5${x(t)} \u5360\u6BD4 ${a}%`}},grid:[{left:0,top:0,right:0,bottom:0}],series:[{type:"pie",radius:"70%",emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},N=l({props:{data:{type:Array}},setup:(e,s)=>{const t=u();let a;return m(()=>{t.value!==void 0&&(a=T(t.value),a.setOption(B))}),_(()=>e.data,()=>{a==null||a.setOption({series:[{data:e.data}]})}),()=>r("div",{ref:t,class:E.wrapper},null)}}),P="_wrapper_3j8qr_1",z="_topItem_3j8qr_5",G="_sign_3j8qr_11",Q="_bar_wrapper_3j8qr_22",U="_bar_text_3j8qr_27",W="_bar_3j8qr_22",X="_bar_inner_3j8qr_41",o={wrapper:P,topItem:z,sign:G,bar_wrapper:Q,bar_text:U,bar:W,bar_inner:X},H=l({props:{data:{type:Array}},setup:(e,s)=>()=>r("div",{class:o.wrapper},[e.data&&e.data.length>0?e.data.map(({tag:t,amount:a,percent:p})=>r("div",{class:o.topItem},[r("div",{class:o.sign},[t.sign]),r("div",{class:o.bar_wrapper},[r("div",{class:o.bar_text},[r("span",null,[" ",t.name,c(" - "),p,c("%")," "]),r("span",null,[" ",c("\uFFE5"),r(k,{value:a},null)," "])]),r("div",{class:o.bar},[r("div",{class:o.bar_inner,style:{width:`${p}%`}},null)])])])):r("div",null,[c("\u6CA1\u6709\u6570\u636E")])])}),J=24*3600*1e3,K=l({props:{startDate:{type:String,required:!1},endDate:{type:String,required:!1}},setup:(e,s)=>{const t=u("expenses"),a=u([]),p=f(()=>{if(!e.startDate||!e.endDate)return[];const i=(new Date(e.endDate).getTime()-new Date(e.startDate).getTime())/J+1;return Array.from({length:i}).map((y,S)=>{const g=new w(e.startDate+"T00:00:00.000+0800").add(S,"day").getTimestamp(),h=a.value[0],j=h&&new Date(h.happen_at+"T00:00:00.000+0800").getTime()===g?a.value.shift().amount:0;return[new Date(g).toISOString(),j]})}),b=async()=>{const n=await D.get("/items/summary",{happen_after:e.startDate,happen_before:e.endDate,kind:t.value,group_by:"happen_at"},{_mock:"itemSummary",_autoLoading:!0});a.value=n.data.groups};m(b),_(()=>t.value,b);const d=u([]),$=f(()=>d.value.map(n=>({name:n.tag.name,value:n.amount}))),q=f(()=>{const n=d.value.reduce((i,y)=>i+y.amount,0);return d.value.map(i=>({...i,percent:Math.round(i.amount/n*100)}))}),v=async()=>{const n=await D.get("/items/summary",{happen_after:e.startDate,happen_before:e.endDate,kind:t.value,group_by:"tag_id"},{_mock:"itemSummary"});d.value=n.data.groups};return m(v),_(()=>t.value,v),()=>r("div",{class:L.wrapper},[r(O,{label:"\u7C7B\u578B",type:"select",options:[{value:"expenses",text:"\u652F\u51FA"},{value:"income",text:"\u6536\u5165"}],modelValue:t.value,"onUpdate:modelValue":n=>t.value=n},null),r(F,{data:p.value},null),r(N,{data:$.value},null),r(H,{data:q.value},null)])}}),ae=l({setup:(e,s)=>()=>r(A,{rerenderOnSwitchTab:!0,component:K,hideThisYear:!0},null)});export{ae as StatisticsPage,ae as default};
