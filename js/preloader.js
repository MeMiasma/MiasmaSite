// preloader.js — надежный загрузочный экран (без зависаний)
(function () {
  const pl = document.getElementById("preloader");
  if (!pl) return;

  const bar = document.getElementById("plBar");
  const pct = document.getElementById("plPercent");
  const stage = document.getElementById("plStage");
  const term = document.getElementById("plTerminal");
  const text = document.getElementById("plText");

  const stages = [
    { p: 15, t: "mount /dev/portfolio", s: "init" },
    { p: 30, t: "load python3.12 runtime", s: "py" },
    { p: 48, t: "compile shaders (webgl)", s: "gpu" },
    { p: 62, t: "init three.js scene", s: "scene" },
    { p: 78, t: "connect postgres cluster", s: "db" },
    { p: 90, t: "spawn neural particles", s: "vfx" },
    { p: 100, t: "✓ all systems operational", s: "ready" },
  ];

  const labels = ["Booting runtime", "Loading modules", "Connecting API", "Synthesizing", "Almost ready"];

  let currentP = 0;
  let targetP = 0;
  let stageIdx = 0;
  let labelIdx = 0;
  let finished = false;

  // Функция плавного обновления полоски (60fps)
  function renderLoop() {
    if (finished) return;

    // Плавно догоняем целевой процент
    if (currentP < targetP) {
      currentP += (targetP - currentP) * 0.1;
      if (targetP - currentP < 0.5) currentP = targetP;
    }

    bar.style.width = currentP + "%";
    pct.textContent = Math.floor(currentP) + "%";

    // Обновляем терминал по достижении стадии
    while (stageIdx < stages.length - 1 && currentP >= stages[stageIdx + 1].p) {
      stageIdx++;
      term.textContent = "> " + stages[stageIdx].t;
      stage.textContent = stages[stageIdx].s;
      if (stages[stageIdx].p === 100) {
        term.style.color = "var(--lime)";
      }
    }

    if (currentP < 100) {
      requestAnimationFrame(renderLoop);
    } else if (!finished) {
      finished = true;
      finish();
    }
  }

  // Симуляция загрузки: каждые 250-500мс прибавляем рандомный процент
  function simulateLoading() {
    if (targetP >= 100) return;

    // Рандомный прыжок от 5 до 20%
    const jump = Math.random() * 15 + 5;
    targetP = Math.min(100, targetP + jump);

    // Меняем текст статуса
    text.textContent = labels[labelIdx % labels.length];
    labelIdx++;

    // Продолжаем симуляцию с рандомной задержкой
    const delay = Math.random() * 250 + 150;
    setTimeout(simulateLoading, delay);
  }

  function finish() {
    text.textContent = "Welcome";
    stage.textContent = "ready";
    
    // Небольшая пауза перед исчезновением, чтобы пользователь увидел 100%
    setTimeout(() => {
      pl.classList.add("done");
      document.body.classList.add("loaded");
      
      // Отправляем событие для запуска 3D-сцены
      window.dispatchEvent(new Event("preloader:done"));
      
      // Полностью удаляем из DOM через 1 секунду (после анимации opacity)
      setTimeout(() => pl.remove(), 1100);
    }, 600);
  }

  // ===== СТАРТ =====
  // Запускаем рендер-цикл
  requestAnimationFrame(renderLoop);
  
  // Запускаем симуляцию процентов с задержкой в 1 секунду
  setTimeout(simulateLoading, 1000);
})();