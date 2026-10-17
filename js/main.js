// main.js — Полная исправленная версия

let allProjects = [];
let allReviews = [];
let filteredProjects = [];
let filteredReviews = [];
let visibleCount = 30;
const BATCH_SIZE = 30;
let currentReviewPage = 0;
const REVIEWS_PER_PAGE = 6;
let currentReviewFilter = "all";

const CATEGORY_NAMES = {
  ecommerce: "E-commerce", fintech: "Финтех", saas: "SaaS",
  automation: "Автоматизация", logistics: "Логистика",
  medical: "Медицина", education: "Образование",
  realestate: "Недвижимость", delivery: "Доставка", mobile: "Мобильные",
};

const PROJECT_IMAGES = {
  ecommerce: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80&auto=format&fit=crop",
  fintech: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&q=80&auto=format&fit=crop",
  saas: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop",
  automation: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80&auto=format&fit=crop",
  logistics: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=600&q=80&auto=format&fit=crop",
  medical: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80&auto=format&fit=crop",
  education: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80&auto=format&fit=crop",
  realestate: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80&auto=format&fit=crop",
  delivery: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&q=80&auto=format&fit=crop",
  mobile: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80&auto=format&fit=crop",
};

const SPECIFIC_IMAGES = {
  shopflow: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80&auto=format&fit=crop",
  fooddelivery: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80&auto=format&fit=crop",
  taxiapp: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80&auto=format&fit=crop",
  neobank: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80&auto=format&fit=crop",
  "payment-gateway": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80&auto=format&fit=crop",
  "crypto-exchange": "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600&q=80&auto=format&fit=crop",
  medbot: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&auto=format&fit=crop",
  lms: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80&auto=format&fit=crop",
  cargo: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80&auto=format&fit=crop",
  crypto: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600&q=80&auto=format&fit=crop"
};

function getProjectImage(p) {
  return SPECIFIC_IMAGES[p.id] || PROJECT_IMAGES[p.category] || PROJECT_IMAGES.saas;
}

// ===== 2D ЧАСТИЦЫ =====
function initParticles() {
  const canvas = document.getElementById("particleCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });

  const has3D = document.getElementById("threeScene");
  const COUNT = has3D ? Math.min(28, Math.floor(window.innerWidth / 48)) : Math.min(70, Math.floor(window.innerWidth / 22));
  const particles = [];

  for (let i = 0; i < COUNT; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2.5 + 0.8,
      color: Math.random() > 0.5 ? "157,140,255" : "180,255,92",
      alpha: Math.random() * 0.4 + 0.1,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 140) {
          ctx.strokeStyle = `rgba(157,140,255,${0.09 * (1 - d / 140)})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 8);
      g.addColorStop(0, `rgba(${p.color},${p.alpha})`);
      g.addColorStop(1, `rgba(${p.color},0)`);
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 8, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// ===== ЗВЁЗДЫ =====
function renderStars(r) {
  const full = Math.floor(r);
  const half = r % 1 >= 0.5 ? 1 : 0;
  return "★".repeat(full) + (half ? "★" : "") + "☆".repeat(5 - full - half);
}

// ===== ПРОЕКТЫ =====
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  grid.innerHTML = "";

  if (filteredProjects.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3>Ничего не найдено</h3>
        <p>Попробуйте изменить фильтры или поисковый запрос</p>
      </div>`;
    const lm = document.getElementById("loadMoreBtn");
    if (lm) lm.style.display = "none";
    updateProjectsCounter();
    return;
  }

  filteredProjects.slice(0, visibleCount).forEach((p, i) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.style.animationDelay = `${(i % 12) * 45}ms`;
    card.innerHTML = `
      <div class="project-art">
        <img src="${getProjectImage(p)}" alt="${p.title}" loading="lazy" />
        <div class="project-badge">${CATEGORY_NAMES[p.category] || "PROJECT"}</div>
      </div>
      <div class="project-body">
        <div class="project-meta">
          <span>${String(i + 1).padStart(2, "0")} / ${p.year}</span>
          <span class="project-year">${p.year}</span>
        </div>
        <h3>${p.title}</h3>
        <p>${p.subtitle}</p>
        <div class="project-client">👤 ${p.client}</div>
        <div class="project-rating">
          <span class="stars">${renderStars(p.rating)}</span>
          <span>${p.rating.toFixed(1)}</span>
          <span class="date">${p.date}</span>
        </div>
        <div class="tag-list">${p.tags.slice(0, 4).map((t) => `<span>${t}</span>`).join("")}</div>
      </div>`;
    card.addEventListener("click", () => openModal(p));
    grid.appendChild(card);
  });

  const lm = document.getElementById("loadMoreBtn");
  if (lm) {
    if (visibleCount >= filteredProjects.length) lm.style.display = "none";
    else {
      lm.style.display = "inline-flex";
      const rem = Math.min(BATCH_SIZE, filteredProjects.length - visibleCount);
      lm.textContent = `Показать ещё ${rem} ↓`;
    }
  }
  updateProjectsCounter();
}

function updateProjectsCounter() {
  const c = document.getElementById("projectsCounter");
  if (!c) return;
  const shown = Math.min(visibleCount, filteredProjects.length);
  c.textContent = `Показано ${shown} из ${filteredProjects.length}`;
}

function updateCategoryCounts() {
  const counts = { all: allProjects.length };
  allProjects.forEach((p) => { counts[p.category] = (counts[p.category] || 0) + 1; });
  Object.keys(counts).forEach((k) => {
    const el = document.getElementById(`count-${k}`);
    if (el) el.textContent = counts[k];
  });
}

function applyFilters() {
  const activeFilter = document.querySelector(".filter-btn.active[data-filter]")?.dataset.filter || "all";
  const q = (document.getElementById("searchInput")?.value || "").toLowerCase().trim();
  const sort = document.getElementById("sortSelect")?.value || "date-desc";

  filteredProjects = allProjects.filter((p) => {
    const matchCat = activeFilter === "all" || p.category === activeFilter;
    const matchQ = !q ||
      p.title.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.client.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q));
    return matchCat && matchQ;
  });

  filteredProjects.sort((a, b) => {
    if (sort === "date-desc") return new Date(b.date) - new Date(a.date);
    if (sort === "date-asc") return new Date(a.date) - new Date(b.date);
    if (sort === "rating-desc") return b.rating - a.rating;
    if (sort === "title-asc") return a.title.localeCompare(b.title);
    return 0;
  });

  visibleCount = BATCH_SIZE;
  renderProjects();
}

function openModal(p) {
  const modal = document.getElementById("projectModal");
  if (!modal) return;
  document.getElementById("modalHero").style.backgroundImage = `url(${getProjectImage(p)})`;
  document.getElementById("modalEyebrow").textContent = `PROJECT / ${(CATEGORY_NAMES[p.category] || p.category).toUpperCase()}`;
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalDescription").textContent = p.desc;
  document.getElementById("modalMeta").innerHTML = `
    <span class="meta-client">👤 ${p.client}</span>
    <span>📅 ${p.date}</span>
    <span>🏷️ ${CATEGORY_NAMES[p.category] || p.category}</span>`;
  document.getElementById("modalFeatures").innerHTML = p.features.map((f) => `<li>${f}</li>`).join("");
  document.getElementById("modalTags").innerHTML = p.tags.map((t) => `<span>${t}</span>`).join("");
  document.getElementById("modalRating").innerHTML = `
    <span class="stars">${renderStars(p.rating)}</span>
    <span class="rv">${p.rating.toFixed(1)} / 5.0</span>
    <span style="color:#6e7892;margin-left:auto;">${p.year}</span>`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("projectModal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// ===== ОТЗЫВЫ =====
function applyReviewFilter() {
  let f = [...allReviews];
  if (currentReviewFilter === "5") f = f.filter((r) => r.rating === 5);
  else if (currentReviewFilter === "4.5") f = f.filter((r) => r.rating >= 4.5);
  else if (currentReviewFilter === "recent") {
    const months = { "Январь":1,"Февраль":2,"Март":3,"Апрель":4,"Май":5,"Июнь":6,"Июль":7,"Август":8,"Сентябрь":9,"Октябрь":10,"Ноябрь":11,"Декабрь":12 };
    f.sort((a, b) => {
      const pa = a.date.split(" ");
      const pb = b.date.split(" ");
      return (parseInt(pb[1]) || 2024) * 12 + (months[pb[0]] || 1) - ((parseInt(pa[1]) || 2024) * 12 + (months[pa[0]] || 1));
    });
  }
  filteredReviews = f;
  currentReviewPage = 0;
  renderReviews();
}

function renderReviews() {
  const pageEl = document.getElementById("reviewsPage");
  const infoEl = document.getElementById("reviewsPageInfo");
  if (!pageEl) return;

  const total = Math.max(1, Math.ceil(filteredReviews.length / REVIEWS_PER_PAGE));
  if (currentReviewPage >= total) currentReviewPage = total - 1;
  if (currentReviewPage < 0) currentReviewPage = 0;

  const start = currentReviewPage * REVIEWS_PER_PAGE;
  const page = filteredReviews.slice(start, start + REVIEWS_PER_PAGE);

  if (page.length === 0) {
    pageEl.innerHTML = `<div class="empty-state"><div class="empty-icon">💬</div><h3>Отзывов не найдено</h3><p>Попробуйте другой фильтр</p></div>`;
  } else {
    pageEl.innerHTML = page.map((r, i) => `
      <article class="review-card" style="animation-delay:${i * 65}ms">
        <div class="review-quote">"</div>
        <div class="review-header">
          <img class="review-avatar" src="${r.avatar}" alt="${r.name}" loading="lazy"
               onerror="this.style.display='none';this.nextElementSibling.style.display='grid';" />
          <div class="review-avatar-fb" style="display:none">${r.name.charAt(0).toUpperCase()}</div>
          <div class="review-author">
            <strong>${r.name}</strong>
            <span>${r.nick} · ${r.role}</span>
          </div>
          <div class="review-rating">${renderStars(r.rating)}</div>
        </div>
        <p class="review-text">«${r.text}»</p>
        <div class="review-foot">
          <span>📅 ${r.date}</span>
          <span class="rv">${r.rating.toFixed(1)} / 5.0</span>
        </div>
      </article>`).join("");
  }

  if (infoEl) infoEl.textContent = `${currentReviewPage + 1} / ${total}`;
  const prev = document.getElementById("reviewsPrev");
  const next = document.getElementById("reviewsNext");
  if (prev) prev.disabled = currentReviewPage === 0;
  if (next) next.disabled = currentReviewPage >= total - 1;
}

// ===== ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener("DOMContentLoaded", () => {
  // Ждем загрузки данных
  allProjects = window.PROJECTS || [];
  allReviews = window.REVIEWS || [];
  filteredProjects = [...allProjects];
  filteredReviews = [...allReviews];

  if (allProjects.length === 0) console.error("Проекты не загружены! Проверьте projects-data.js");
  if (allReviews.length === 0) console.error("Отзывы не загружены! Проверьте reviews-data.js");

  initParticles();
  updateCategoryCounts();
  applyFilters();
  renderReviews();

  // Скролл-прогресс
  const scrollBar = document.getElementById("scrollProgress");
  if (scrollBar) {
    window.addEventListener("scroll", () => {
      const st = window.scrollY;
      const dh = document.documentElement.scrollHeight - window.innerHeight;
      scrollBar.style.width = (dh > 0 ? (st / dh) * 100 : 0) + "%";
    }, { passive: true });
  }

  // Кнопка наверх
  const scrollTopBtn = document.getElementById("scrollTop");
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      scrollTopBtn.classList.toggle("visible", window.scrollY > 600);
    }, { passive: true });
    scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  // Фильтры проектов
  document.querySelectorAll(".filter-btn[data-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn[data-filter]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      applyFilters();
    });
  });

  // Поиск с debounce
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    let t;
    searchInput.addEventListener("input", () => {
      clearTimeout(t);
      t = setTimeout(applyFilters, 220);
    });
  }

  // Сортировка
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) sortSelect.addEventListener("change", applyFilters);

  // Показать ещё
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      visibleCount += BATCH_SIZE;
      renderProjects();
    });
  }

  // Модалка
  const modalCloseBtn = document.getElementById("modalClose");
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  const projectModal = document.getElementById("projectModal");
  if (projectModal) {
    projectModal.addEventListener("click", (e) => {
      if (e.target.id === "projectModal") closeModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // Мобильное меню
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }));
  }

  // Фильтры отзывов
  document.querySelectorAll(".reviews-filter").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".reviews-filter").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentReviewFilter = btn.dataset.rfilter;
      applyReviewFilter();
    });
  });

  // Пагинация отзывов
  const prev = document.getElementById("reviewsPrev");
  const next = document.getElementById("reviewsNext");
  if (prev) prev.addEventListener("click", () => {
    if (currentReviewPage > 0) {
      currentReviewPage--;
      renderReviews();
      document.getElementById("reviews").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
  if (next) next.addEventListener("click", () => {
    const total = Math.ceil(filteredReviews.length / REVIEWS_PER_PAGE);
    if (currentReviewPage < total - 1) {
      currentReviewPage++;
      renderReviews();
      document.getElementById("reviews").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  // Появление секций
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.08 });
  document.querySelectorAll(".section-block").forEach((s) => observer.observe(s));
});