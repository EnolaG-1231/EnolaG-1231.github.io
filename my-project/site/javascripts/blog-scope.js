/* 给所有 /blog/ 页面打上 .is-blog 类（支持 Material 的 instant navigation） */
(function () {
  function markBlog() {
    var p = (location.pathname || '').replace(/\/+/g, '/');
    var isBlog = /(^|\/)blog(\/|$)/.test(p);      // /blog/、/blog/xxx/ 都算
    var root = document.documentElement;          // <html>
    if (!root) return;
    root.classList.toggle('is-blog', isBlog);
  }

  // 首次进入
  document.addEventListener('DOMContentLoaded', markBlog);

  // Material 的即时路由（document$）
  if (window && window.document$) {
    window.document$.subscribe(markBlog);
  }
})();
