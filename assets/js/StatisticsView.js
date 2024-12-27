import{u as p}from"./DrwStore.js";import{_ as N,r as f,e as w,o as n,c as l,a as s,t as i,F as y,d as S,n as $,j as g,k as x,l as v}from"./index.js";const C={class:"ShowNumber"},k={class:"accordion accordion-area"},A={class:"accordion-icon"},M={key:0,class:"accordion-body"},V={class:"chart-area chart-bar-area"},B={class:"chart-list"},E={class:"chart-bar"},F={class:"chart-bar-label"},z={class:"text-"},D={__name:"ShowNumber",setup(m){const d=p(),c=f(!1),u=()=>{c.value=!c.value},_=()=>{const a=Array(45).fill(0);return d.numbers.forEach(t=>{a[Number(t.drwtNo1)-1]++,a[Number(t.drwtNo2)-1]++,a[Number(t.drwtNo3)-1]++,a[Number(t.drwtNo4)-1]++,a[Number(t.drwtNo5)-1]++,a[Number(t.drwtNo6)-1]++}),a.map((t,e)=>({number:e+1,count:t}))},h=w(()=>_().sort((t,e)=>e.count-t.count));function b(a){return Math.floor((a-1)/10)+1}return(a,t)=>(n(),l("div",C,[s("div",k,[s("div",{class:"accordion-header",onClick:u},[t[0]||(t[0]=s("label",{class:"label-medium"},"번호별 등장 횟수",-1)),s("span",A,i(c.value?"▲":"▼"),1)]),c.value?(n(),l("div",M,[s("div",V,[s("ul",B,[(n(!0),l(y,null,S(h.value,(e,o)=>(n(),l("li",{class:"chart-item",key:o},[s("div",E,[s("div",F,[s("span",{class:$(["ball-645","ball-"+b(e.number)])},i(e.number),3)]),s("div",{class:"chart-bar-volum",style:g({width:e.count*2.5+"px"})},[s("span",z,i(e.count),1)],4)])]))),128))])])])):x("",!0)])]))}},G=N(D,[["__scopeId","data-v-fbae397a"]]),I={class:"consecutive-number-stats"},O={class:"accordion accordion-area"},j={class:"accordion-icon"},L={key:0,class:"accordion-body"},q={class:"chart-area chart-bar-area"},H={class:"chart-list"},J={class:"chart-bar"},K={class:"chart-bar-label"},P={class:"text-"},Q={__name:"ConsecutiveShow",setup(m){const d=p(),c=f(!1),u=a=>{const t=Array(45).fill(0).map(()=>0),e=Array(45).fill(0);a.forEach(o=>{for(let r=1;r<=45;r++)Number(o.drwtNo1)===r||Number(o.drwtNo2)===r||Number(o.drwtNo3)===r||Number(o.drwtNo4)===r||Number(o.drwtNo5)===r||Number(o.drwtNo6)===r?(e[r-1]++,e[r-1]==4&&console.log("#############",r,o)):(t[r-1]=Math.max(t[r-1],e[r-1]),e[r-1]=0)});for(let o=0;o<45;o++)t[o]=Math.max(t[o],e[o]);return t},_=w(()=>{const a=d.numbers;return u(a)});function h(a){return Math.floor((a-1)/10)+1}function b(){c.value=!c.value}return(a,t)=>(n(),l("div",I,[s("div",O,[s("div",{class:"accordion-header",onClick:b},[t[0]||(t[0]=s("label",{class:"label-medium"},"번호별 연속 등장 횟수",-1)),s("span",j,i(c.value?"▲":"▼"),1)]),c.value?(n(),l("div",L,[s("div",q,[s("ul",H,[(n(!0),l(y,null,S(_.value,(e,o)=>(n(),l("li",{class:"chart-item",key:o},[s("div",J,[s("div",K,[s("span",{class:$(["ball-645","ball-"+h(o+1)])},i(o+1),3)]),s("div",{class:"chart-bar-volum",style:g({width:e*40+"px"})},[s("span",P,i(e),1)],4)])]))),128))])])])):x("",!0)])]))}},R=N(Q,[["__scopeId","data-v-d894fb72"]]),T={class:"StatisticsView"},U={class:"section section-area"},W={class:"section-body"},Z={__name:"StatisticsView",setup(m){return(d,c)=>(n(),l("div",T,[s("section",U,[c[0]||(c[0]=s("div",{class:"section-header"},[s("h4",{class:"title-big"},"통계 보기")],-1)),s("div",W,[v(G),v(R)])])]))}};export{Z as default};
