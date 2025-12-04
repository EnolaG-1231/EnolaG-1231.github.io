---
hide:
  - navigation
  - toc
  - feedback
---
<div id="home-flag" hidden></div>


# Welcome to Lian's Home

This is my private site.
申请季中所有笔记和博文都暂时隐藏了‧º·(˚ ˃̣̣̥᷄⌓˂̣̣̥᷅ )‧º·˚！！待回归;_;！！

<div id="home-greeting" class="home-greeting">Loading greeting…</div>


<style>
html:has(#home-flag) body::before {
  content: "";
  position: fixed;
  inset: 0;
  background: url("/static/bg-light.png") center/cover no-repeat fixed;
  z-index: 0;
  pointer-events: none;
}


html[data-md-color-scheme="slate"]:has(#home-flag) body::before,
body[data-md-color-scheme="slate"]:has(#home-flag)::before,
[data-md-color-scheme="slate"] body:has(#home-flag)::before {
  background-image: url("/static/bg-dark.png") !important;
}

/* 背景透明 */
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

/* 代码区 */
html:has(#home-flag) .md-typeset pre,
html:has(#home-flag) .md-typeset code { background: rgba(0,0,0,0.06); }
html[data-md-color-scheme="slate"]:has(#home-flag) .md-typeset pre,
html[data-md-color-scheme="slate"]:has(#home-flag) .md-typeset code { background: rgba(255,255,255,0.06); }
</style>
