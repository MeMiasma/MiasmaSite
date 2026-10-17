// main.js — ФИНАЛЬНЫЙ РАБОЧИЙ ФАЙЛ (Данные внутри)

document.addEventListener("DOMContentLoaded", () => {
  
  // ===== 1. ТВОИ ДАННЫЕ (БЕЗ ОШИБОК) =====
  const PROJECTS = [
    { id: "shopflow", title: "ShopFlow", subtitle: "Маркетплейс под ключ", category: "ecommerce", tags: ["Node.js","React","PostgreSQL"], year: 2023, client: "ShopFlow Ltd", rating: 5, date: "2023-03-15", desc: "Маркетплейс с 15 000+ продавцов, мультивалютными платежами и логистикой.", features: ["15 000+ продавцов", "Мультивалютные платежи", "Интеграция с СДЭК", "Модерация"], stack: "Node.js, React" },
    { id: "fooddelivery", title: "FoodExpress", subtitle: "Доставка еды", category: "delivery", tags: ["React Native","Node.js","PostGIS"], year: 2023, client: "FoodExpress KZ", rating: 5, date: "2023-05-22", desc: "Платформа доставки еды с 800+ ресторанами, live-трекингом курьеров.", features: ["800+ ресторанов", "Live-трекинг", "Интеграция iiko", "12 000 заказов/сутки"], stack: "React Native, Node.js" },
    { id: "taxiapp", title: "TaxiGo", subtitle: "Сервис такси", category: "delivery", tags: ["Flutter","Golang","PostGIS"], year: 2023, client: "TaxiGo Group", rating: 5, date: "2023-08-14", desc: "Агрегатор такси с 5000+ водителей, динамическим ценообразованием.", features: ["5000+ водителей", "Динамическое ценообразование", "12 городов", "Live-карта"], stack: "Flutter, Golang" },
    { id: "neobank", title: "NeoBank KZ", subtitle: "Необанк", category: "fintech", tags: ["Golang","Flutter","PostgreSQL"], year: 2024, client: "NeoBank KZ", rating: 5, date: "2024-02-08", desc: "Мобильный необанк с мультивалютными счетами и крипто-кошельком.", features: ["Мультивалютные счета", "Карты Visa/Mastercard", "Крипто-кошелек", "500k+ клиентов"], stack: "Golang, Flutter" },
    { id: "payment-gateway", title: "PayFlow", subtitle: "Платёжный шлюз", category: "fintech", tags: ["Golang","Kafka","PostgreSQL"], year: 2023, client: "PayFlow Ltd", rating: 5, date: "2023-06-12", desc: "Платёжный шлюз с 30+ методами оплаты. $50M в месяц.", features: ["30+ методов оплаты", "$50M/месяц", "Антифрод", "3DS"], stack: "Golang, Kafka" },
    { id: "crypto-exchange", title: "CryptoExchange", subtitle: "Крипто-биржа", category: "fintech", tags: ["Golang","React","PostgreSQL"], year: 2024, client: "CryptoExchange KZ", rating: 5, date: "2024-01-30", desc: "Крипто-биржа с 200+ парами, задержка матчинга <10мс.", features: ["200+ пар", "Спот + фьючерсы", "Стейкинг", "Матчинг <10ms"], stack: "Golang, React" },
    { id: "medbot", title: "MedBot KZ", subtitle: "Медицинский бот", category: "medical", tags: ["Python","aiogram","PostgreSQL"], year: 2023, client: "MedBot KZ", rating: 5, date: "2023-05-14", desc: "Telegram-бот для записи к врачу и напоминаний.", features: ["Запись к врачу", "Напоминания", "Онлайн-консультация", "Медкарта"], stack: "Python, aiogram" },
    { id: "telemedicine", title: "TeleMed", subtitle: "Телемедицина", category: "medical", tags: ["React","Node.js","WebRTC"], year: 2024, client: "TeleMed KZ", rating: 5, date: "2024-01-20", desc: "Платформа телемедицины с видеоконсультациями и рецептами.", features: ["Видеоконсультации", "Электронные рецепты", "Онлайн-оплата", "История приёмов"], stack: "React, Node.js" },
    { id: "lms", title: "EduFlow LMS", subtitle: "LMS-платформа", category: "education", tags: ["React","Node.js","PostgreSQL"], year: 2023, client: "EduFlow KZ", rating: 5, date: "2023-04-10", desc: "LMS-платформа для онлайн-школ с курсами и вебинарами. 50 000+ студентов.", features: ["50 000+ студентов", "Курсы и уроки", "Тесты", "Вебинары"], stack: "React, Node.js" },
    { id: "tutor", title: "TutorHub", subtitle: "Репетиторы онлайн", category: "education", tags: ["React","Node.js","WebRTC"], year: 2024, client: "TutorHub KZ", rating: 5, date: "2024-01-15", desc: "Платформа для онлайн-занятий с репетиторами.", features: ["Поиск репетиторов", "Расписание", "Видеозвонки", "Оплата"], stack: "React, Node.js" },
    { id: "cargo", title: "CargoFlow", subtitle: "Грузоперевозки", category: "logistics", tags: ["React","Golang","PostGIS"], year: 2023, client: "CargoFlow KZ", rating: 5, date: "2023-06-20", desc: "Платформа грузоперевозок с подбором машин и отслеживанием.", features: ["Подбор машин", "Расчёт маршрутов", "Отслеживание", "ЭДО"], stack: "React, Golang" },
    { id: "last-mile", title: "LastMile Pro", subtitle: "Последняя миля", category: "logistics", tags: ["React Native","Node.js","PostGIS"], year: 2023, client: "LastMile KZ", rating: 5, date: "2023-09-05", desc: "Система управления курьерами с live-трекингом.", features: ["Live-трекинг", "Оптимизация маршрутов", "Приложение курьера", "Электронная подпись"], stack: "React Native, Node.js" },
    { id: "realestate", title: "RealEstate Pro", subtitle: "Портал недвижимости", category: "realestate", tags: ["Node.js","React","PostGIS"], year: 2023, client: "RealEstate KZ", rating: 5, date: "2023-05-25", desc: "Портал недвижимости с 200 000+ объявлений и AI-подбором.", features: ["200 000+ объявлений", "Карта", "Ипотечный калькулятор", "AI-подбор"], stack: "Node.js, React" },
    { id: "rent", title: "RentHub", subtitle: "Аренда жилья", category: "realestate", tags: ["React","Node.js"], year: 2023, client: "RentHub KZ", rating: 5, date: "2023-10-10", desc: "Сервис аренды жилья с онлайн-бронированием.", features: ["Онлайн-бронирование", "Оплата", "Договоры", "Отзывы"], stack: "React, Node.js" },
    { id: "parser-market", title: "MarketParser", subtitle: "Парсер маркетплейсов", category: "automation", tags: ["Python","Selenium","PostgreSQL"], year: 2023, client: "MarketParser KZ", rating: 5, date: "2023-04-18", desc: "Парсер Kaspi/Wildberries/Ozon с аналитикой цен.", features: ["Kaspi/WB/Ozon", "Аналитика цен", "Отслеживание конкурентов", "Алерты"], stack: "Python, Selenium" },
    { id: "parser-realestate", title: "EstateParser", subtitle: "Парсер недвижимости", category: "automation", tags: ["Python","Scrapy"], year: 2023, client: "EstateParser KZ", rating: 5, date: "2023-07-14", desc: "Парсер krisha.kz/olx.kz с аналитикой цен.", features: ["Krisha/OLX", "Аналитика цен", "История", "Алерты"], stack: "Python, Scrapy" },
    { id: "crm-sales", title: "SalesCRM", subtitle: "CRM для продаж", category: "saas", tags: ["React","Node.js","PostgreSQL"], year: 2023, client: "SalesCRM KZ", rating: 5, date: "2023-05-10", desc: "CRM для отделов продаж с воронкой и аналитикой.", features: ["Воронка продаж", "Задачи", "Телефония", "Аналитика"], stack: "React, Node.js" },
    { id: "erp", title: "ERP System", subtitle: "ERP-система", category: "saas", tags: ["React","Node.js","PostgreSQL"], year: 2024, client: "ERP KZ", rating: 5, date: "2024-01-25", desc: "ERP-система для бизнеса с модулями продаж, склада и HR.", features: ["Продажи", "Склад", "Финансы", "HR"], stack: "React, Node.js" },
    { id: "fitness-app", title: "FitApp", subtitle: "Фитнес-приложение", category: "mobile", tags: ["Flutter","Node.js"], year: 2023, client: "FitApp KZ", rating: 5, date: "2023-05-20", desc: "Фитнес-приложение с тренировками и питанием.", features: ["Тренировки", "Трекинг", "Питание", "Интеграция с часами"], stack: "Flutter, Node.js" },
    { id: "recipe-app", title: "RecipeApp", subtitle: "Рецепты", category: "mobile", tags: ["Flutter","Node.js"], year: 2023, client: "RecipeApp KZ", rating: 5, date: "2023-08-12", desc: "Приложение с 50 000+ рецептов.", features: ["50 000+ рецептов", "Список покупок", "Инструкции", "Фильтры"], stack: "Flutter, Node.js" }
  ];

  const REVIEWS = [
    { name: "Алексей Ковалёв", nick: "@alexk_dev", role: "CEO, ShopFlow", avatar: "https://i.pravatar.cc/150?img=12", rating: 5, date: "Июнь 2023", text: "Заказывал маркетплейс под ключ. Уложился в 4 месяца. Код чистый, документация подробная. Уже два года работает без сбоев." },
    { name: "Дмитрий Соколов", nick: "@dsokolov", role: "CTO, PayFlow", avatar: "https://i.pravatar.cc/150?img=15", rating: 5, date: "Сентябрь 2023", text: "Нужен был платёжный шлюз под высокую нагрузку. За год работы ни одного сбоя, через нас проходит 50 млн долларов в месяц." },
    { name: "Елена Морозова", nick: "@elena_m", role: "Founder, EduFlow", avatar: "https://i.pravatar.cc/150?img=45", rating: 5, date: "Апрель 2023", text: "Делали LMS для 50 тысяч студентов. Сделал за 3 месяца. Если что-то ломается, реагирует в течение часа." },
    { name: "Игорь Иванов", nick: "@igor_i", role: "Director, FoodExpress", avatar: "https://i.pravatar.cc/150?img=33", rating: 5, date: "Май 2023", text: "Платформа доставки еды. Сейчас 12 тысяч заказов в сутки, всё работает стабильно. Он сам предложил оптимизации." },
    { name: "Наталья Тихонова", nick: "@nt_coo", role: "COO, TaxiGo", avatar: "https://i.pravatar.cc/150?img=47", rating: 5, date: "Август 2023", text: "Агрегатор такси, 12 городов. Сделал всё за пять месяцев. Это не просто разработчик, а партнёр." },
    { name: "Сергей Белов", nick: "@sbelov", role: "CTO, CryptoExchange", avatar: "https://i.pravatar.cc/150?img=51", rating: 5, date: "Январь 2024", text: "Крипто-биржа с матчингом <10мс. Взялся и сделал. Результат превзошёл ожидания." },
    { name: "Мария Андреева", nick: "@maria_a", role: "Product, GroceryHub", avatar: "https://i.pravatar.cc/150?img=44", rating: 5, date: "Январь 2024", text: "Онлайн-гипермаркет. Интеграция с 1С прошла безупречно. 8 тысяч заказов в день." },
    { name: "Виктор Поляков", nick: "@vp_founder", role: "Founder, RealEstate", avatar: "https://i.pravatar.cc/150?img=60", rating: 5, date: "Май 2023", text: "Портал недвижимости. AI-подбор реализовал как хотели, конверсия выросла на 40%." }
  ];

  // ===== 2. ЛОГИКА =====
  let filteredProjects = [...PROJECTS];
  let filteredReviews = [...REVIEWS];
  let visibleCount = 30;
  const BATCH_SIZE = 30;
  let currentReviewPage = 0;
  const REVIEWS_PER_PAGE = 6;
  let currentReviewFilter = "all";

  const CATEGORY_NAMES = { ecommerce: "E-commerce", fintech: "Финтех", saas: "SaaS", automation: "Автоматизация", logistics: "Логистика", medical: "Медицина", education: "Образование", realestate: "Недвижимость", delivery: "Доставка", mobile: "Мобильные" };
  const PROJECT_IMAGES = { ecommerce: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80&auto=format&fit=crop", fintech: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&q=80&auto=format&fit=crop", saas: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop", automation: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80&auto=format&fit=crop", logistics: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=600&q=80&auto=format&fit=crop", medical: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80&auto=format&fit=crop", education: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80&auto=format&fit=crop", realestate: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80&auto=format&fit=crop", delivery: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&q=80&auto=format&fit=crop", mobile: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80&auto=format&fit=crop" };

  function getProjectImage(p) { return PROJECT_IMAGES[p.category] || PROJECT_IMAGES.saas; }

  function renderStars(r) {
    const full = Math.floor(r), half = r % 1 >= 0.5 ? 1 : 0;
    return "★".repeat(full) + (half ? "★" : "") + "☆".repeat(5 - full - half);
  }

  function updateCategoryCounts() {
    const counts = { all: PROJECTS.length };
    PROJECTS.forEach((p) => { counts[p.category] = (counts[p.category] || 0) + 1; });
    Object.keys(counts).forEach((k) => {
      const el = document.getElementById(`count-${k}`);
      if (el) el.textContent = counts[k];
    });
  }

  function renderProjects() {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;
    grid.innerHTML = "";
    if (filteredProjects.length === 0) {
      grid.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><h3>Ничего не найдено</h3><p>Попробуйте изменить фильтры</p></div>`;
      if (document.getElementById("loadMoreBtn")) document.getElementById("loadMoreBtn").style.display = "none";
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
          <div class="project-meta"><span>${String(i + 1).padStart(2, "0")} / ${p.year}</span><span class="project-year">${p.year}</span></div>
          <h3>${p.title}</h3><p>${p.subtitle}</p>
          <div class="project-client">👤 ${p.client}</div>
          <div class="project-rating"><span class="stars">${renderStars(p.rating)}</span><span>${p.rating.toFixed(1)}</span><span class="date">${p.date}</span></div>
          <div class="tag-list">${p.tags.slice(0, 4).map((t) => `<span>${t}</span>`).join("")}</div>
        </div>`;
      card.addEventListener("click", () => openModal(p));
      grid.appendChild(card);
    });
    const lm = document.getElementById("loadMoreBtn");
    if (lm) {
      if (visibleCount >= filteredProjects.length) lm.style.display = "none";
      else { lm.style.display = "inline-flex"; lm.textContent = `Показать ещё ${Math.min(BATCH_SIZE, filteredProjects.length - visibleCount)} ↓`; }
    }
    const c = document.getElementById("projectsCounter");
    if (c) c.textContent = `Показано ${Math.min(visibleCount, filteredProjects.length)} из ${filteredProjects.length}`;
  }

  function applyFilters() {
    const activeFilter = document.querySelector(".filter-btn.active[data-filter]")?.dataset.filter || "all";
    const q = (document.getElementById("searchInput")?.value || "").toLowerCase().trim();
    const sort = document.getElementById("sortSelect")?.value || "date-desc";
    filteredProjects = PROJECTS.filter((p) => {
      const mC = activeFilter === "all" || p.category === activeFilter;
      const mQ = !q || p.title.toLowerCase().includes(q) || p.client.toLowerCase().includes(q) || p.tags.some((t) => t.toLowerCase().includes(q));
      return mC && mQ;
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
    document.getElementById("modalMeta").innerHTML = `<span class="meta-client">👤 ${p.client}</span><span>📅 ${p.date}</span>`;
    document.getElementById("modalFeatures").innerHTML = p.features.map((f) => `<li>${f}</li>`).join("");
    document.getElementById("modalTags").innerHTML = p.tags.map((t) => `<span>${t}</span>`).join("");
    document.getElementById("modalRating").innerHTML = `<span class="stars">${renderStars(p.rating)}</span><span class="rv">${p.rating.toFixed(1)} / 5.0</span>`;
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    const modal = document.getElementById("projectModal");
    if (modal) { modal.classList.remove("open"); document.body.style.overflow = ""; }
  }

  function applyReviewFilter() {
    let f = [...REVIEWS];
    if (currentReviewFilter === "5") f = f.filter((r) => r.rating === 5);
    else if (currentReviewFilter === "4.5") f = f.filter((r) => r.rating >= 4.5);
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
    const page = filteredReviews.slice(currentReviewPage * REVIEWS_PER_PAGE, (currentReviewPage + 1) * REVIEWS_PER_PAGE);
    if (page.length === 0) {
      pageEl.innerHTML = `<div class="empty-state"><div class="empty-icon">💬</div><h3>Отзывов не найдено</h3><p>Попробуйте другой фильтр</p></div>`;
    } else {
      pageEl.innerHTML = page.map((r, i) => `
        <article class="review-card" style="animation-delay:${i * 65}ms">
          <div class="review-quote">"</div>
          <div class="review-header">
            <img class="review-avatar" src="${r.avatar}" onerror="this.style.display='none';this.nextElementSibling.style.display='grid';" />
            <div class="review-avatar-fb" style="display:none">${r.name.charAt(0).toUpperCase()}</div>
            <div class="review-author"><strong>${r.name}</strong><span>${r.nick} · ${r.role}</span></div>
            <div class="review-rating">${renderStars(r.rating)}</div>
          </div>
          <p class="review-text">«${r.text}»</p>
          <div class="review-foot"><span>📅 ${r.date}</span><span class="rv">${r.rating.toFixed(1)} / 5.0</span></div>
        </article>`).join("");
    }
    if (infoEl) infoEl.textContent = `${currentReviewPage + 1} / ${total}`;
    if (document.getElementById("reviewsPrev")) document.getElementById("reviewsPrev").disabled = currentReviewPage === 0;
    if (document.getElementById("reviewsNext")) document.getElementById("reviewsNext").disabled = currentReviewPage >= total - 1;
  }

  // ===== 3. ЗАПУСК =====
  updateCategoryCounts();
  applyFilters();
  renderReviews();

  document.querySelectorAll(".filter-btn[data-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn[data-filter]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      applyFilters();
    });
  });

  const search = document.getElementById("searchInput");
  if (search) search.addEventListener("input", applyFilters);
  const sort = document.getElementById("sortSelect");
  if (sort) sort.addEventListener("change", applyFilters);

  const loadMore = document.getElementById("loadMoreBtn");
  if (loadMore) loadMore.addEventListener("click", () => { visibleCount += BATCH_SIZE; renderProjects(); });

  const modalClose = document.getElementById("modalClose");
  if (modalClose) modalClose.addEventListener("click", closeModal);
  
  document.querySelectorAll(".reviews-filter").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".reviews-filter").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentReviewFilter = btn.dataset.rfilter;
      applyReviewFilter();
    });
  });

  const prev = document.getElementById("reviewsPrev");
  const next = document.getElementById("reviewsNext");
  if (prev) prev.addEventListener("click", () => { if (currentReviewPage > 0) { currentReviewPage--; renderReviews(); } });
  if (next) next.addEventListener("click", () => { const t = Math.ceil(filteredReviews.length / REVIEWS_PER_PAGE); if (currentReviewPage < t - 1) { currentReviewPage++; renderReviews(); } });

  const mt = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");
  if (mt && nav) mt.addEventListener("click", () => nav.classList.toggle("open"));

  const obs = new IntersectionObserver((entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }); }, { threshold: 0.08 });
  document.querySelectorAll(".section-block").forEach((s) => obs.observe(s));
});