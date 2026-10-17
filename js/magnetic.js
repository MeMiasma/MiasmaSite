// magnetic.js — магнитный эффект на кнопках
(function () {
  if (window.matchMedia("(hover: none)").matches) return;
  const els = document.querySelectorAll("[data-magnetic]");
  const STRENGTH = 0.35;
  const RADIUS = 90;

  els.forEach((el) => {
    let raf = null;
    let rect = null;

    function refresh() {
      rect = el.getBoundingClientRect();
    }

    el.addEventListener("mouseenter", refresh);

    document.addEventListener("mousemove", (e) => {
      if (!rect) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);

      if (dist < RADIUS + Math.max(rect.width, rect.height) / 2) {
        const pull = 1 - dist / (RADIUS + Math.max(rect.width, rect.height) / 2);
        const tx = dx * STRENGTH * pull;
        const ty = dy * STRENGTH * pull;
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          el.style.transform = `translate(${tx}px, ${ty}px)`;
        });
      } else {
        if (raf) cancelAnimationFrame(raf);
        el.style.transform = "";
      }
    });

    el.addEventListener("mouseleave", () => {
      rect = null;
      el.style.transform = "";
    });
  });
})();