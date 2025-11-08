
/* 首页问候 + 首页标记（只在 index.md 生效） */
(function () {
  function isHome() {
    return !!document.getElementById('home-flag');
  }

  function markHome() {
    // 仅首页给 <html> 加 .is-home
    document.documentElement.classList.toggle('is-home', isHome());
  }

  function setGreeting() {
    if (!isHome()) return;
    var h = new Date().getHours();

    // 按时间段选择问候
    var msg;
    if (h >= 0 && h < 6) {
      msg = "夜安，该休息啦~❤️";
    } else if (h < 12) {
      msg = "早上好，请保持专注🌧️";
    } else if (h < 18) {
      msg = "下午好，别忘了喝水🌤️";
    } else {
      msg = "晚上好，月色适合读书🌔✨";
    }

    var el = document.getElementById('home-greeting');
    if (el) el.textContent = msg;
  }

  // 首次加载
  document.addEventListener('DOMContentLoaded', function () {
    markHome();
    setGreeting();
  });

  // 兼容 Material 的 instant navigation
  if (window && window.document$) {
    window.document$.subscribe(function () {
      markHome();
      setGreeting();
    });
  }
})();
