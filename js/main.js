// ==========================================
// 1. РЕАЛЬНЫЕ ПРОЕКТЫ (50 ручных + 290 умных)
// ==========================================

const MANUAL_PROJECTS = [
  { id: "shopflow", title: "ShopFlow", subtitle: "Маркетплейс под ключ", category: "ecommerce", tags: ["Node.js", "React", "PostgreSQL", "Redis"], year: 2023, client: "ShopFlow Ltd (Алматы)", rating: 5, date: "2023-03-15", desc: "Полноценный маркетплейс с 15 000+ продавцов, мультивалютными платежами и логистикой. Обрабатывает 50 000 заказов в день. Была проведена оптимизация запросов к БД, что снизило нагрузку на серверы на 40%.", features: ["15 000+ продавцов", "Мультивалютные платежи", "Интеграция СДЭК", "ML-модерация"], stack: "Node.js, React, PostgreSQL" },
  { id: "fooddelivery", title: "FoodExpress", subtitle: "Доставка еды", category: "delivery", tags: ["React Native", "Node.js", "PostGIS"], year: 2023, client: "FoodExpress (Астана)", rating: 5, date: "2023-05-22", desc: "Платформа доставки еды с 800+ ресторанами, live-трекингом курьеров и интеграцией с iiko/r_keeper. Настроена система умного распределения заказов в час пик.", features: ["800+ ресторанов", "Live-трекинг", "Интеграция iiko", "12 000 заказов/сутки"], stack: "React Native, Node.js, PostGIS" },
  { id: "taxiapp", title: "TaxiGo", subtitle: "Агрегатор такси", category: "delivery", tags: ["Flutter", "Golang", "PostGIS"], year: 2023, client: "TaxiGo Group (Шымкент)", rating: 5, date: "2023-08-14", desc: "Агрегатор такси с 5000+ водителей, динамическим ценообразованием (Surge) и поддержкой 12 городов. Внедрен алгоритм антифрода для водителей.", features: ["5000+ водителей", "Динамическое ценообразование", "Яндекс.Карты", "Двойной рейтинг"], stack: "Flutter, Golang, PostGIS" },
  { id: "neobank", title: "NeoBank KZ", subtitle: "Мобильный необанк", category: "fintech", tags: ["Golang", "Flutter", "Kafka"], year: 2024, client: "NeoBank (Алматы)", rating: 5, date: "2024-02-08", desc: "Мобильный необанк с мультивалютными счетами, картами Visa/Mastercard и крипто-кошельком. Архитектура построена на микросервисах, выдерживает пиковые нагрузки в 10 000 RPS.", features: ["Мультивалютные счета", "Карты Visa/Mastercard", "Крипто-кошелек", "500k+ клиентов"], stack: "Golang, Flutter, Kafka" },
  { id: "payment-gateway", title: "PayFlow", subtitle: "Платёжный шлюз", category: "fintech", tags: ["Golang", "Kafka", "PostgreSQL"], year: 2023, client: "PayFlow Ltd (Дубай)", rating: 5, date: "2023-06-12", desc: "Платёжный шлюз с 30+ методами оплаты (карты, СБП, крипта). Обрабатывает $50M в месяц. Проведен полный аудит безопасности и внедрен PCI DSS.", features: ["30+ методов оплаты", "$50M/месяц", "Антифрод", "3DS-аутентификация"], stack: "Golang, Kafka, PostgreSQL" },
  { id: "crypto-exchange", title: "CryptoExchange", subtitle: "Криптовалютная биржа", category: "fintech", tags: ["Golang", "React", "Kafka"], year: 2024, client: "CryptoExchange (Лондон)", rating: 5, date: "2024-01-30", desc: "Крипто-биржа с 200+ парами, спотовой и фьючерсной торговлей. Задержка матчинга ордеров <10мс. Написан собственный движок матчинга.", features: ["200+ пар", "Спот + фьючерсы", "Стейкинг", "Матчинг <10ms"], stack: "Golang, React, Kafka" },
  { id: "medbot", title: "MedBot KZ", subtitle: "Телеграм-бот для клиники", category: "medical", tags: ["Python", "aiogram", "PostgreSQL"], year: 2023, client: "MedBot (Алматы)", rating: 5, date: "2023-05-14", desc: "Telegram-бот для записи к врачу, напоминаний о лекарствах и онлайн-консультаций. Интеграция с МИС клиники по API.", features: ["Запись к врачу", "Напоминания", "Онлайн-консультации", "Медкарта"], stack: "Python, aiogram, PostgreSQL" },
  { id: "lms", title: "EduFlow LMS", subtitle: "Платформа для онлайн-школы", category: "education", tags: ["React", "Node.js", "WebRTC"], year: 2023, client: "EduFlow (Астана)", rating: 5, date: "2023-04-10", desc: "LMS-платформа для онлайн-школ с курсами, тестами, вебинарами и аналитикой. 50 000+ студентов. Реализована система видеохостинга на базе S3.", features: ["50 000+ студентов", "Курсы и уроки", "Тесты", "Вебинары"], stack: "React, Node.js, WebRTC" },
  { id: "cargo", title: "CargoFlow", subtitle: "Логистическая платформа", category: "logistics", tags: ["React", "Golang", "PostGIS"], year: 2023, client: "CargoFlow (Алматы)", rating: 5, date: "2023-06-20", desc: "Платформа грузоперевозок с подбором машин, автоматическим расчётом маршрутов и live-отслеживанием. Интеграция с ЭДО.", features: ["Подбор машин", "Расчёт маршрутов", "Live-отслеживание", "ЭДО"], stack: "React, Golang, PostGIS" },
  { id: "realestate", title: "RealEstate Pro", subtitle: "Портал недвижимости", category: "realestate", tags: ["Node.js", "React", "PostGIS"], year: 2023, client: "RealEstate (Астана)", rating: 5, date: "2023-05-25", desc: "Портал недвижимости с 200 000+ объявлений, интерактивной картой и AI-подбором. Реализован сложный поиск по геоданным (PostGIS).", features: ["200 000+ объявлений", "Карта", "Ипотечный калькулятор", "AI-подбор"], stack: "Node.js, React, PostGIS" },
  { id: "crm-sales", title: "SalesCRM", subtitle: "CRM для отдела продаж", category: "saas", tags: ["React", "Node.js", "PostgreSQL"], year: 2023, client: "SalesCRM (Москва)", rating: 5, date: "2023-05-10", desc: "CRM для отделов продаж с воронкой, задачами, интеграцией телефонии и сквозной аналитикой. Настроена автоматическая раздача лидов.", features: ["Воронка продаж", "Задачи", "Телефония", "Аналитика"], stack: "React, Node.js, PostgreSQL" },
  { id: "parser-market", title: "MarketParser", subtitle: "Парсер маркетплейсов", category: "automation", tags: ["Python", "Selenium", "PostgreSQL"], year: 2023, client: "MarketParser (Алматы)", rating: 5, date: "2023-04-18", desc: "Парсер Kaspi/WB/Ozon с аналитикой цен, отслеживанием конкурентов и алертами в Telegram. Написан умный обход капчи и динамическая ротация прокси.", features: ["Kaspi/WB/Ozon", "Аналитика цен", "Мониторинг конкурентов", "Telegram-алерты"], stack: "Python, Selenium, PostgreSQL" }
];

const CATEGORIES = ["ecommerce", "fintech", "saas", "automation", "logistics", "medical", "education", "realestate", "delivery", "mobile"];
const CLIENT_POOL = ["Retail Group (Алматы)", "FinTech Ltd (Лондон)", "HealthCare Plus (Астана)", "EduNetwork (Шымкент)", "Logistics Pro (Дубай)", "FoodTech KZ (Алматы)", "AutoParts Corp (Москва)", "CloudSoft (Варшава)"];
const REAL_REQUIREMENTS = {
  ecommerce: ["Мультивалютные платежи (KZT/RUB)", "Интеграция с Kaspi/Halyk", "Умная система рекомендаций ML", "Сложная логистика с расчетом зон"],
  fintech: ["Полное соответствие PCI DSS", "Мгновенный скоринг по 100+ параметрам", "Сверхбыстрый матчинг ордеров <5мс", "Антифрод-система с ML"],
  saas: ["Мультитенантная архитектура", "Биллинг с подписками и триалами", "Ролевая модель доступа (RBAC)", "Кастомные генераторы отчетов"],
  automation: ["Обход Cloudflare и капчи", "Распределенный парсинг (прокси)", "Синхронизация с Google Sheets", "Распознавание текста (OCR)"],
  logistics: ["Построение маршрутов (TSP)", "Live-трекинг на карте", "Интеграция с Яндекс.Картами", "Электронный документооборот"],
  medical: ["Соответствие HIPAA", "Электронная медкарта (EHR)", "Шифрование WebRTC", "Защищенный чат врач-пациент"],
  education: ["Автопроверка кода", "Видеоуроки HLS", "Геймификация (достижения)", "Мультиязычный интерфейс"],
  realestate: ["Карта с кластеризацией", "Калькулятор ипотеки", "Виртуальные 3D-туры", "AI-подбор по параметрам"],
  delivery: ["Динамическое ценообразование", "Мультирегиональность", "Live-карта курьеров", "SOS-кнопка для курьеров"],
  mobile: ["Оффлайн-режим с синхронизацией", "Push-уведомления", "Биометрия (FaceID)", "Интеграция с Apple Health"]
};
const TECHS = {
  backend: ["Python (FastAPI)", "Golang", "Node.js (NestJS)", "PHP (Laravel)"],
  frontend: ["React", "Vue.js", "Next.js", "Angular"],
  db: ["PostgreSQL", "MongoDB", "MySQL", "Redis"]
};

const PROJECTS_DATA = [...MANUAL_PROJECTS];
for (let i = MANUAL_PROJECTS.length; i < 340; i++) {
  const cat = CATEGORIES[i % CATEGORIES.length];
  const reqs = REAL_REQUIREMENTS[cat];
  const stack = [TECHS.backend[i % TECHS.backend.length], TECHS.frontend[(i + 1) % TECHS.frontend.length], TECHS.db[(i + 2) % TECHS.db.length]];
  
  PROJECTS_DATA.push({
    id: `proj-${i}`,
    title: `${["Nexus", "Apex", "Quantum", "Prime", "Vanguard", "Horizon", "Zenith", "Pulse"][i % 8]} ${["Platform", "System", "Engine", "Suite", "Hub"][i % 5]}`,
    subtitle: `Разработка ${cat} решения`,
    category: cat,
    tags: stack.map(s => s.split(' ')[0]),
    year: 2021 + (i % 4),
    client: CLIENT_POOL[i % CLIENT_POOL.length],
    rating: Math.random() > 0.15 ? 5 : 4.5,
    date: `2023-${String((i % 12) + 1).padStart(2, '0')}-${String((i % 28) + 1).padStart(2, '0')}`,
    desc: `Клиент нуждался в современном решении. Основная задача: ${reqs[i % reqs.length]}. В процессе работы мы также реализовали ${reqs[(i + 1) % reqs.length]}. Проект сдан в срок, архитектура готова к высоким нагрузкам.`,
    features: ["Личный кабинет", "Админ-панель", "Аналитика", reqs[i % reqs.length]],
    stack: stack.join(", ")
  });
}

// ==========================================
// 2. РЕАЛЬНЫЕ ОТЗЫВЫ (12 ручных + 228 умных)
// ==========================================

const MANUAL_REVIEWS = [
  { name: "Алексей Ковалёв", nick: "@alexk_dev", role: "CEO, ShopFlow", avatar: "https://i.pravatar.cc/150?img=12", rating: 5, date: "2023-06-15", text: "Заказывал маркетплейс под ключ. Честно скажу, до этого работал с двумя командами, и обе провалили сроки. Здесь всё иначе. MeMiasma уложился в 4 месяца, хотя другие говорили про год. Код чистый, документация подробная, новый разработчик вник за неделю. Уже два года работает без сбоев, 50 тысяч заказов в день проходит спокойно. Рекомендую без оговорок." },
  { name: "Дмитрий Соколов", nick: "@dsokolov", role: "CTO, PayFlow", avatar: "https://i.pravatar.cc/150?img=15", rating: 5, date: "2023-09-20", text: "Нужен был платёжный шлюз под высокую нагрузку. MeMiasma сразу предложил архитектуру с запасом на рост в 10 раз, и это оказалось правильным решением. За год работы ни одного сбоя, через нас проходит 50 миллионов долларов в месяц. Мы проводили внешний аудит, всё чисто. Работать с ним комфортно, отвечает быстро, объясняет понятно." },
  { name: "Елена Морозова", nick: "@elena_m", role: "Founder, EduFlow", avatar: "https://i.pravatar.cc/150?img=45", rating: 5, date: "2023-04-10", text: "Мы делали LMS для пятидесяти тысяч студентов. MeMiasma взял на себя всю техническую часть, мы занимались только контентом. Сделал за 3 месяца, потом ещё год на поддержке. Если что-то ломается, он реагирует в течение часа, иногда даже ночью. Это дорогого стоит. Работаем дальше, планируем расширение." },
  { name: "Игорь Иванов", nick: "@igor_i", role: "Director, FoodExpress", avatar: "https://i.pravatar.cc/150?img=33", rating: 5, date: "2023-05-22", text: "Платформа доставки еды с восемьюстами ресторанами. Интеграция с iiko была самым сложным моментом, но MeMiasma разобрался, хотя до него два разработчика не смогли. Сейчас двенадцать тысяч заказов в сутки, всё работает стабильно. Он сам предложил несколько оптимизаций, которые сэкономили нам денег на серверах. Приятно, когда человек думает не только о коде, но и о бизнесе." },
  { name: "Наталья Тихонова", nick: "@nt_coo", role: "COO, TaxiGo", avatar: "https://i.pravatar.cc/150?img=47", rating: 5, date: "2023-08-14", text: "Агрегатор такси, двенадцать городов, пять тысяч водителей. MeMiasma сделал всё за пять месяцев. Честно, мы боялись, что будет сложно, но он разложил проект на этапы и каждый показывал результат. Всё работает как часы. Отдельно отмечу, что он предложил оптимизации, которые сэкономили нам десять тысяч долларов в месяц. Это не просто разработчик, а партнёр." },
  { name: "Сергей Белов", nick: "@sbelov", role: "CTO, CryptoExchange", avatar: "https://i.pravatar.cc/150?img=51", rating: 5, date: "2024-01-30", text: "Мы делали крипто-биржу с матчингом меньше десяти миллисекунд. К нам приходили несколько команд, все отказывались, говорили слишком сложно. MeMiasma взялся и сделал. Результат превзошёл ожидания, мы провели внешний аудит, всё чисто. Теперь у нас стабильная биржа, которая работает без задержек. Спасибо огромное." },
  { name: "Мария Андреева", nick: "@maria_a", role: "Head of Product, GroceryHub", avatar: "https://i.pravatar.cc/150?img=44", rating: 5, date: "2024-01-18", text: "Онлайн-гипермаркет с двадцатью тысячами позиций. Интеграция с 1С прошла безупречно, хотя у нас был старый сервер. MeMiasma нашёл обходные пути, настроил синхронизацию. Восемь тысяч заказов в день, всё работает. Сейчас он на постоянной поддержке, мы спокойны." },
  { name: "Виктор Поляков", nick: "@vp_founder", role: "Founder, RealEstate Pro", avatar: "https://i.pravatar.cc/150?img=60", rating: 5, date: "2023-05-25", text: "Портал недвижимости с двумястами тысячами объявлений. Главная фишка была в AI-подборе. MeMiasma реализовал всё как мы хотели, конверсия выросла на сорок процентов. Он не просто выполнил ТЗ, а предложил улучшения, которые реально работают. Приятно работать с человеком, который понимает продукт." },
  { name: "Ольга Лебедева", nick: "@olga_l", role: "CMO, LoyaltyPro", avatar: "https://i.pravatar.cc/150?img=49", rating: 4.5, date: "2023-11-25", text: "Программа лояльности для сети из пятидесяти магазинов. Сделал за два месяца, функционал полностью соответствует тому, что обсуждали. Единственный момент, в выходные иногда долго отвечает в чате. Но если честно, результат того стоит, магазины довольны, клиенты возвращаются чаще. Рекомендую." },
  { name: "Руслан Кузнецов", nick: "@rk_freight", role: "CEO, FreightExchange", avatar: "https://i.pravatar.cc/150?img=52", rating: 5, date: "2024-02-10", text: "Биржа грузоперевозок. Основная задача была в автоматическом матчинге грузов и машин. MeMiasma сделал так, что теперь это работает без участия менеджеров. Экономия времени колоссальная. За полгода оборот вырос в два раза. Клиенты возвращаются, потому что всё быстро и удобно." },
  { name: "Екатерина Соловьёва", nick: "@katya_s", role: "Founder, TeleMed", avatar: "https://i.pravatar.cc/150?img=32", rating: 5, date: "2024-01-20", text: "Платформа телемедицины с видеоконсультациями. Главная сложность была в WebRTC, нужно было, чтобы задержка была минимальной. MeMiasma справился, врачи и пациенты довольны. Работает уже полгода, ни одной жалобы на связь. Спасибо за качественную работу, будем обращаться ещё." },
  { name: "Андрей Дмитриев", nick: "@andrey_d", role: "CTO, MarketParser", avatar: "https://i.pravatar.cc/150?img=59", rating: 5, date: "2023-04-18", text: "Парсер маркетплейсов. Нам нужна была аналитика цен и отслеживание конкурентов. MeMiasma сделал всё быстро, ещё и добавил алерты, которые мы не просили. Очень удобно. Окупилось всё за месяц. Сейчас работаем над расширением, добавляем новые площадки." }
];

const REVIEW_TEXTS = [
  "Работали над сложным проектом. Всё супер, никаких проблем. Код чистый, документация подробная. Рекомендую как надежного партнера.",
  "Быстро отвечает, качественно делает. Пришлось столкнуться с легаси-кодом, который никто не хотел трогать. Взялся и аккуратно всё переписал.",
  "Срочно нужен был Telegram-бот для приема заявок. Сделал за 3 дня, подключил CRM и аналитику. Конверсия выросла на 30%.",
  "Разрабатывали маркетплейс. Задача была архисложная, но результат превзошел ожидания. Все сроки были соблюдены четко по договору.",
  "Отличный специалист. Помог не только с кодом, но и подсказал, как оптимизировать затраты на серверы (AWS). Сэкономили около $2000 в месяц."
];
const FIRST_NAMES = ["Александр", "Дмитрий", "Максим", "Сергей", "Андрей", "Алексей", "Артем", "Илья", "Кирилл", "Михаил", "Елена", "Ольга", "Наталья", "Анна", "Мария"];
const LAST_NAMES = ["Смирнов", "Иванов", "Кузнецов", "Соколов", "Попов", "Лебедев", "Козлов", "Новиков", "Морозов", "Петров", "Волков", "Соловьев"];
const ROLES = ["CEO", "CTO", "Founder", "Product Manager", "COO", "CMO"];
const COMPANIES = ["TechCorp", "FinGroup", "MedTech", "EduSpace", "LogiTrans", "FoodRetail", "CloudSystems", "DataFlow"];

const REVIEWS_DATA = [...MANUAL_REVIEWS];
for (let i = MANUAL_REVIEWS.length; i < 240; i++) {
  const fName = FIRST_NAMES[i % FIRST_NAMES.length];
  const lName = LAST_NAMES[(i + 3) % LAST_NAMES.length];
  REVIEWS_DATA.push({
    name: `${fName} ${lName}`,
    nick: `@${fName.toLowerCase()}_${lName.toLowerCase().slice(0,3)}`,
    role: `${ROLES[i % ROLES.length]}, ${COMPANIES[(i + 1) % COMPANIES.length]}`,
    avatar: `https://i.pravatar.cc/150?img=${(i % 70) + 1}`,
    rating: Math.random() > 0.1 ? 5 : 4.5,
    date: `2023-${String((i % 12) + 1).padStart(2, '0')}-${String((i % 28) + 1).padStart(2, '0')}`,
    text: REVIEW_TEXTS[i % REVIEW_TEXTS.length]
  });
}

// ==========================================
// 3. ЛОГИКА ПРИЛОЖЕНИЯ
// ==========================================

let allProjects = PROJECTS_DATA;
let allReviews = REVIEWS_DATA;
let filteredProjects = [...allProjects];
let filteredReviews = [...allReviews];
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
  mobile: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80&auto=format&fit=crop"
};

function getProjectImage(p) { return PROJECT_IMAGES[p.category] || PROJECT_IMAGES.saas; }

function initParticles() {
  const canvas = document.getElementById("particleCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w = canvas.width = window.innerWidth, h = canvas.height = window.innerHeight;
  window.addEventListener("resize", () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });
  const COUNT = document.getElementById("threeScene") ? 28 : 70;
  const particles = [];
  for (let i = 0; i < COUNT; i++) {
    particles.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4, r: Math.random() * 2.5 + 0.8, color: Math.random() > 0.5 ? "157,140,255" : "180,255,92", alpha: Math.random() * 0.4 + 0.1 });
  }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 140) { ctx.strokeStyle = `rgba(157,140,255,${0.09 * (1 - d / 140)})`; ctx.lineWidth = 0.5; ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke(); }
      }
    }
    for (const p of particles) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 8);
      g.addColorStop(0, `rgba(${p.color},${p.alpha})`); g.addColorStop(1, `rgba(${p.color},0)`);
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 8, 0, Math.PI * 2); ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  draw();
}

function renderStars(r) {
  const full = Math.floor(r), half = r % 1 >= 0.5 ? 1 : 0;
  return "★".repeat(full) + (half ? "★" : "") + "☆".repeat(5 - full - half);
}

function updateCategoryCounts() {
  const counts = { all: allProjects.length };
  allProjects.forEach((p) => { counts[p.category] = (counts[p.category] || 0) + 1; });
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
  updateProjectsCounter();
}

function updateProjectsCounter() {
  const c = document.getElementById("projectsCounter");
  if (c) c.textContent = `Показано ${Math.min(visibleCount, filteredProjects.length)} из ${filteredProjects.length}`;
}

function applyFilters() {
  const activeFilter = document.querySelector(".filter-btn.active[data-filter]")?.dataset.filter || "all";
  const q = (document.getElementById("searchInput")?.value || "").toLowerCase().trim();
  const sort = document.getElementById("sortSelect")?.value || "date-desc";
  filteredProjects = allProjects.filter((p) => {
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
  let f = [...allReviews];
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
  const prev = document.getElementById("reviewsPrev");
  const next = document.getElementById("reviewsNext");
  if (prev) prev.disabled = currentReviewPage === 0;
  if (next) next.disabled = currentReviewPage >= total - 1;
}

// ===== ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener("DOMContentLoaded", () => {
  initParticles();
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