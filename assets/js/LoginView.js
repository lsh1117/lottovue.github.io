import{r as c,c as a,a as s,t as r,o as t}from"./index.js";const u=()=>new Promise((l,n)=>{if(!window.Kakao.isInitialized()){n("Kakao SDK is not initialized");return}window.Kakao.Auth.login({scope:"profile_nickname",success:e=>{console.log("Authentication successful:",e),window.Kakao.API.request({url:"/v2/user/me",success:o=>{console.log("User info:",o),l(o)},fail:o=>{console.error("Failed to get user info:",o),n(o)}})},fail:e=>{var o;if(console.error("Login failed:",e),e.error_description.includes("intent:")){const i=(o=e.error_description.match(/S.browser_fallback_url=([^;]*)/))==null?void 0:o[1];i&&(window.location.href=decodeURIComponent(i))}n(e)}})}),d={class:"section section-area"},f={key:0,class:"section-body"},_={key:1,class:"section-footer"},p={__name:"LoginView",setup(l){const n=c(null),e=async()=>{try{const o=await u();n.value=o}catch(o){console.error("Login error:",o)}};return(o,i)=>(t(),a("div",null,[s("section",d,[n.value?(t(),a("div",f,[s("div",null,[i[0]||(i[0]=s("p",null,"로그인 성공!",-1)),s("p",null,"이름: "+r(n.value.kakao_account.profile.nickname),1)])])):(t(),a("div",_,[s("div",{class:"btn-area btn-area-center"},[s("button",{class:"btn-primary btn-small",onClick:e},"카카오 로그인")])]))])]))}};export{p as default};