const s=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}};s();const l=new URL("data:text/css;base64,I3R3byB7CiAgd2lkdGg6IDIwMHB4OwogIGhlaWdodDogMjAwcHg7CiAgYm9yZGVyOiA1cHggc29saWQgYmx1ZTsKICBiYWNrZ3JvdW5kOiB1cmwoLi9uZXN0ZWQvY2F0Y2F0LmpwZykgYmx1ZTsKICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOwp9",self.location).href;document.querySelector("#app").innerHTML=`
  <!-- Cat here for "npm run dev" and "npm run build && npm run preview" -->
  <div id="one"></div>

  <!-- Cat NOT here when "npm run build && npm run preview" -->
  <link rel="stylesheet" href="${l}">
  <div id="two"></div>
`;
