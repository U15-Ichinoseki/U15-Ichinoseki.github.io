/* empty css               */(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const r=document.createElement("section");r.id="topics";r.className="py-20 px-8";r.innerHTML=`
  <div class="container">
    <h2 class="text-4xl font-bold text-center mb-12">更新情報</h2>
    <div class="space-y-4">
      <a href="#schedule" class="block p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
        <p class="text-sm text-gray-500 mb-1">2025.08.25</p>
        <p class="text-lg font-semibold text-gray-800">エントリー受付開始しました</p>
      </a>
      <!-- 他の更新情報もここに追加 -->
    </div>
  </div>
`;document.querySelector("main").insertBefore(r,document.querySelector("#overview"));
