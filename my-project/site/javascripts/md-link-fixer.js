(function () {
  function rewrite(doc) {
    const useFileUrls = location.pathname.endsWith('.html'); // 只要当前路径是 .html，就按文件式 URL 处理

    doc.querySelectorAll('a[href$=".md"]').forEach(a => {
      const raw = a.getAttribute('href');
      try {
        const u = new URL(raw, location.href);
        const was = u.pathname + (u.search || '') + (u.hash || '');

        if (useFileUrls) {
          // /gallery/index.md -> /gallery.html
          // /gallery/g1.md    -> /gallery/g1.html
          u.pathname = u.pathname
            .replace(/\/index\.md$/i, '.html')
            .replace(/\.md$/i, '.html');
        } else {
          // 兜底：目录式
          u.pathname = u.pathname
            .replace(/\/?index\.md$/i, '/')
            .replace(/\.md$/i, '/');
        }

        a.setAttribute('href', u.pathname + (u.search || '') + (u.hash || ''));
        console.debug?.('[md-link-fixer]', was, '→', a.getAttribute('href'));
      } catch {}
    });
  }
  rewrite(document);
  if (window.document$?.subscribe) window.document$.subscribe(rewrite);
})();
