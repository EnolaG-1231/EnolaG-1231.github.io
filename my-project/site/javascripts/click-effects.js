// 轻量“点击冒心心”，在按钮/输入上点击不触发
(function () {
  const colors = ['#e91e63', '#03a9f4', '#ff9800', '#4caf50', '#9c27b0'];
  document.addEventListener('click', function (e) {
    if (e.target.closest('a, button, input, textarea, select, label')) return;

    const s = document.createElement('span');
    s.className = 'click-pop';
    s.textContent = '❤'; // 想要烟花可换成 '❤'、'✦'、'✺' 等
    document.body.appendChild(s);

    s.style.left = e.clientX + 'px';
    s.style.top  = e.clientY + 'px';
    s.style.color = colors[Math.floor(Math.random() * colors.length)];

    // 触发过渡
    requestAnimationFrame(() => s.classList.add('show'));
    setTimeout(() => s.remove(), 450);
  }, false);
})();
