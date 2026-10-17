// counters.js — анимированные счётчики с easing
(function () {
  const counters = document.querySelectorAll("[data-count]");
  if (!counters.length) return;

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.dataset.done) {
        entry.target.dataset.done = "1";
        const target = parseFloat(entry.target.dataset.count);
        const decimal = parseInt(entry.target.dataset.decimal || "0");
        const duration = 1900;
        const start = performance.now();

        function update(now) {
          const p = Math.min((now - start) / duration, 1);
          const v = target * easeOutCubic(p);
          entry.target.textContent = decimal ? v.toFixed(decimal) : Math.floor(v);
          if (p < 1) requestAnimationFrame(update);
          else entry.target.textContent = decimal ? target.toFixed(decimal) : target;
        }
        requestAnimationFrame(update);
      }
    });
  }, { threshold: 0.6 });

  counters.forEach((c) => io.observe(c));
})();