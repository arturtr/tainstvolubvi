// Shared redirect: tags the visit with the page's QR source, counts it, then leaves for Taplink.
(function () {
  var TARGET = "https://taplink.cc/tainstvolubvi";
  var COUNTER = 0; // Yandex Metrika counter id; 0 disables counting

  var source = document.documentElement.getAttribute("data-source");
  var query = new URLSearchParams(location.search);
  if (source && !query.has("utm_source")) {
    query.set("utm_source", source);
    query.set("utm_medium", "qr");
  }
  var url = TARGET + (query.toString() ? "?" + query.toString() : "");

  var left = false;
  function leave() {
    if (!left) { left = true; location.replace(url); }
  }
  if (!COUNTER) return leave();

  // Wait for the hit to reach Metrika; an ad blocker must not strand the visitor.
  setTimeout(leave, 1500);
  window.ym = window.ym || function () { (window.ym.a = window.ym.a || []).push(arguments); };
  window.ym.l = Date.now();
  var tag = document.createElement("script");
  tag.async = true;
  tag.src = "https://mc.yandex.ru/metrika/tag.js";
  document.head.appendChild(tag);
  ym(COUNTER, "init", { defer: true, clickmap: false, trackLinks: false, webvisor: false });
  ym(COUNTER, "hit", location.href, { title: document.title, callback: leave });
})();
