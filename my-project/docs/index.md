---
hide:
  - navigation
  - toc

---
<div id="home-flag" hidden></div>


# Welcome to Lian's Home

This is my private site.

<div id="home-greeting" class="home-greeting">Loading greeting…</div>


<style>
/* 首页：默认先上浅色背景 */
html:has(#home-flag) body::before {
  content: "";
  position: fixed;
  inset: 0;
  background: url("/static/bg-light.png") center/cover no-repeat fixed;
  z-index: 0;
  pointer-events: none;
}

/* ============================
   深色模式兜底三连：
   1) html 有 data-md-color-scheme
   2) body 有 data-md-color-scheme
   3) 外层随便谁有 data-md-color-scheme
   谁命中谁覆盖
   ============================ */
html[data-md-color-scheme="slate"]:has(#home-flag) body::before,
body[data-md-color-scheme="slate"]:has(#home-flag)::before,
[data-md-color-scheme="slate"] body:has(#home-flag)::before {
  background-image: url("/static/bg-dark.png") !important;
}

/* 首页把中间内容弄透明，露出背景 */
html:has(#home-flag) .md-container,
html:has(#home-flag) .md-main,
html:has(#home-flag) .md-content,
html:has(#home-flag) .md-content__inner,
html:has(#home-flag) .md-sidebar--primary,
html:has(#home-flag) .md-sidebar--secondary {
  background: transparent !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
}

/* 首页代码区稍微垫底 */
html:has(#home-flag) .md-typeset pre,
html:has(#home-flag) .md-typeset code { background: rgba(0,0,0,0.06); }
html[data-md-color-scheme="slate"]:has(#home-flag) .md-typeset pre,
html[data-md-color-scheme="slate"]:has(#home-flag) .md-typeset code { background: rgba(255,255,255,0.06); }
</style>
