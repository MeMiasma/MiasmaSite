// cursor.js — кастомный курсор с инерцией
(function () {
  if (window.matchMedia("(hover: none)").matches) return;
  const cursor = document.getElementById("cursor");
  if (!cursor) return;

  const dot = cursor.querySelector(".cursor-dot");
  const ring = cursor.querySelector(".cursor-ring");

  let mx = window.innerWidth / 2;
  let my = window.innerHeight / 2;
  let dx = mx, dy = my;
  let rx = mx, ry = my;

  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
  });

  document.addEventListener("mousedown", () => cursor.classList.add("click"));
  document.addEventListener("mouseup", () => cursor.classList.remove("click"));

  // Hover на интерактивных
  const hoverSelectors = "a, button, .filter-btn, .project-card, .service-card, .review-card, .page-btn, input, select, [data-magnetic], [data-tilt]";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(hoverSelectors)) cursor.classList.add("hover");
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(hoverSelectors)) cursor.classList.remove("hover");
  });

  function animate() {
    // Точка — быстрая
    dx += (mx - dx) * 0.35;
    dy += (my - dy) * 0.35;
    // Кольцо — с инерцией
    rx += (mx - rx) * 0.16;
    ry += (my - ry) * 0.16;

    dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(animate);
  }
  animate();
})();