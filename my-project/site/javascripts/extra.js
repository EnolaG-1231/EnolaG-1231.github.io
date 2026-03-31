(function () {
  function isHomeByPath() {
    // 从站点 Logo 的链接推断站点根（比硬编码更稳，兼容子路径部署）
    var logoHref = document.querySelector('a.md-logo')?.getAttribute('href') || '/';
    var basePath = new URL(logoHref, location.origin).pathname;
    var currPath = location.pathname;

    // 统一尾部斜杠
    if (!basePath.endsWith('/')) basePath += '/';
    if (!currPath.endsWith('/')) currPath += '/';

    // 认为 "/"" 或 站点根路径 就是首页
    return currPath === basePath;
  }

  function applyHomeClass() {
    document.documentElement.classList.toggle('is-home', isHomeByPath());
  }

  // 首次
  if (document.readyState !== 'loading') applyHomeClass();
  else document.addEventListener('DOMContentLoaded', applyHomeClass);

  // Material 的即时导航：每次页面切换
  if (window.document$ && typeof document$.subscribe === 'function') {
    document$.subscribe(applyHomeClass);
  }
})();
