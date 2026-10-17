// tilt.js — 3D-наклон карточек за мышью
(function () {
  const tiltEls = document.querySelectorAll("[data-tilt]");
  if (window.matchMedia("(hover: none)").matches) return;

  tiltEls.forEach((el) => {
    let raf = null;
    let rect = null;

    function onEnter() {
      rect = el.getBoundingClientRect();
    }

    function onMove(e) {
      if (!rect) rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rx = ((y - cy) / cy) * -8;
      const ry = ((x - cx) / cx) * 8;

      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02,1.02,1.02)`;
      });
    }

    function onLeave() {
      if (raf) cancelAnimationFrame(raf);
      el.style.transform = "perspective(900px) rotateX(0) rotateY(0) scale3d(1,1,1)";
    }

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
  });
})();