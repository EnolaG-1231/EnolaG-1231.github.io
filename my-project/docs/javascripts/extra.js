(function () {
  try {
    var baseHref = (document.querySelector('base') || {}).href || (location.origin + '/');
    var basePath = new URL(baseHref, location.origin).pathname;   // 例如："/" 或 "/你的仓库名/"
    var currPath = location.pathname;
    // 统一都以末尾带 "/" 的形式比较
    if (!basePath.endsWith('/')) basePath += '/';
    if (!currPath.endsWith('/')) currPath += '/';
    var isHome = (currPath === basePath);
    if (isHome) document.documentElement.classList.add('is-home');
  } catch (e) {
    // 安全降级：若出错且处于根路径，也标记为首页
    if (location.pathname === '/' || location.pathname === '') {
      document.documentElement.classList.add('is-home');
    }
  }
})();
