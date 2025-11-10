(function () {
  function fix(doc) {
    doc.querySelectorAll('a[href$=".md"]').forEach(a => {
      const href = a.getAttribute('href');
      try {
        const url = new URL(href, location.href); // 解析 ../ 等相对路径
        url.pathname = url.pathname.replace(/\.md$/, '/'); // /gallery/g1.md -> /gallery/g1/
        a.setAttribute('href', url.pathname + url.search + url.hash);
      } catch (_) { /* ignore bad href */ }
    });
  }

  // 首次加载
  fix(document);

  // Material instant navigation：每次页面切换再跑一遍
  if (window.document$ && typeof window.document$.subscribe === 'function') {
    window.document$.subscribe(fix);
  }
})();
