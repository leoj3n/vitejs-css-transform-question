const l=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}};l();const s=new URL("data:text/css;base64,QGltcG9ydCB1cmwoLi9zdHlsZTMuY3NzKTsK",self.location).href;document.querySelector("#app").innerHTML=`
  <!-- Cat here for "npm run dev" and "npm run build && npm run preview" -->
  <div id="one"></div>

  <!-- Cat NOT here when "npm run build && npm run preview" -->
  <link rel="stylesheet" href="${s}">
  <div id="two"></div>
`;