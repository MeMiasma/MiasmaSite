// three-scene.js — WebGL 3D сцена
function initThreeScene() {
  if (typeof THREE === "undefined") return;
  const canvas = document.getElementById("threeScene");
  if (!canvas) return;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0b1020, 0.024);

  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 0, 14);

  const renderer = new THREE.WebGLRenderer({
    canvas, antialias: true, alpha: true,
    powerPreference: "high-performance",
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // ===== ЦВЕТА =====
  const PURPLE = new THREE.Color(0x9d8cff);
  const LIME = new THREE.Color(0xb4ff5c);

  // ===== СВЕТ =====
  scene.add(new THREE.AmbientLight(0x9d8cff, 0.35));

  const l1 = new THREE.PointLight(0x9d8cff, 2.4, 32);
  l1.position.set(6, 5, 8);
  scene.add(l1);

  const l2 = new THREE.PointLight(0xb4ff5c, 1.8, 32);
  l2.position.set(-6, -4, 6);
  scene.add(l2);

  const l3 = new THREE.PointLight(0x9d8cff, 1.2, 26);
  l3.position.set(0, -8, -5);
  scene.add(l3);

  // ===== ЦЕНТРАЛЬНЫЙ ТОРОИД-УЗЕЛ =====
  const knotGroup = new THREE.Group();

  const knotGeom = new THREE.TorusKnotGeometry(1.65, 0.42, 180, 26, 2, 3);
  const knotMat = new THREE.MeshStandardMaterial({
    color: 0x9d8cff,
    emissive: 0x4a3f8a,
    emissiveIntensity: 0.5,
    metalness: 0.88,
    roughness: 0.16,
  });
  const knot = new THREE.Mesh(knotGeom, knotMat);
  knotGroup.add(knot);

  // Голограмма-каркас
  const wireGeom = new THREE.TorusKnotGeometry(1.67, 0.44, 90, 14, 2, 3);
  const wireMat = new THREE.MeshBasicMaterial({
    color: 0xb4ff5c, wireframe: true,
    transparent: true, opacity: 0.14,
  });
  knotGroup.add(new THREE.Mesh(wireGeom, wireMat));

  scene.add(knotGroup);

  // ===== ВНЕШНИЕ КОЛЬЦА =====
  const ring1 = new THREE.Mesh(
    new THREE.TorusGeometry(4.2, 0.008, 8, 130),
    new THREE.MeshBasicMaterial({ color: 0x9d8cff, transparent: true, opacity: 0.5 })
  );
  ring1.rotation.x = Math.PI / 2.2;
  scene.add(ring1);

  const ring2 = new THREE.Mesh(
    new THREE.TorusGeometry(5.4, 0.006, 8, 150),
    new THREE.MeshBasicMaterial({ color: 0xb4ff5c, transparent: true, opacity: 0.35 })
  );
  ring2.rotation.x = Math.PI / 1.8;
  ring2.rotation.y = 0.4;
  scene.add(ring2);

  const ring3 = new THREE.Mesh(
    new THREE.TorusGeometry(6.8, 0.004, 8, 170),
    new THREE.MeshBasicMaterial({ color: 0x9d8cff, transparent: true, opacity: 0.2 })
  );
  ring3.rotation.x = Math.PI / 2.6;
  ring3.rotation.z = 0.6;
  scene.add(ring3);

  // ===== ГАЛАКТИКА ЧАСТИЦ =====
  const COUNT = 1000;
  const pos = new Float32Array(COUNT * 3);
  const col = new Float32Array(COUNT * 3);
  for (let i = 0; i < COUNT; i++) {
    const r = Math.random() * 24 + 3;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.65;
    pos[i * 3 + 2] = r * Math.cos(phi);
    const c = Math.random() > 0.5 ? PURPLE : LIME;
    col[i * 3] = c.r;
    col[i * 3 + 1] = c.g;
    col[i * 3 + 2] = c.b;
  }
  const pGeom = new THREE.BufferGeometry();
  pGeom.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  pGeom.setAttribute("color", new THREE.BufferAttribute(col, 3));
  const particles = new THREE.Points(
    pGeom,
    new THREE.PointsMaterial({
      size: 0.08, vertexColors: true,
      transparent: true, opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false, sizeAttenuation: true,
    })
  );
  scene.add(particles);

  // ===== ОРБИТАЛЬНЫЕ КУБИКИ =====
  const cubeGroup = new THREE.Group();
  const cubes = [];
  const CUBE_COUNT = 10;
  for (let i = 0; i < CUBE_COUNT; i++) {
    const s = Math.random() * 0.42 + 0.16;
    const isPurple = Math.random() > 0.5;
    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(s, s, s),
      new THREE.MeshStandardMaterial({
        color: isPurple ? 0x9d8cff : 0xb4ff5c,
        emissive: isPurple ? 0x3a2f7a : 0x4a7a1a,
        metalness: 0.85, roughness: 0.2,
        transparent: true, opacity: 0.75,
      })
    );
    const angle = (i / CUBE_COUNT) * Math.PI * 2;
    const radius = 3.6 + Math.random() * 2.8;
    cube.position.set(Math.cos(angle) * radius, (Math.random() - 0.5) * 4, Math.sin(angle) * radius);
    cube.userData = {
      angle, radius,
      speed: 0.12 + Math.random() * 0.22,
      rot: {
        x: (Math.random() - 0.5) * 0.025,
        y: (Math.random() - 0.5) * 0.025,
        z: (Math.random() - 0.5) * 0.025,
      },
      yBase: (Math.random() - 0.5) * 4,
      ySpeed: 0.25 + Math.random() * 0.5,
      yPhase: Math.random() * Math.PI * 2,
    };
    cubes.push(cube);
    cubeGroup.add(cube);
  }
  scene.add(cubeGroup);

  // ===== МЫШЬ =====
  let mx = 0, my = 0, tx = 0, ty = 0;
  document.addEventListener("mousemove", (e) => {
    mx = (e.clientX / window.innerWidth) * 2 - 1;
    my = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  // ===== РЕСАЙЗ =====
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // ===== АНИМАЦИЯ =====
  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    tx += (mx * 2 - tx) * 0.04;
    ty += (my * 1.6 - ty) * 0.04;

    knotGroup.rotation.x = t * 0.26 + ty * 0.45;
    knotGroup.rotation.y = t * 0.36 + tx * 0.45;
    knotGroup.position.y = Math.sin(t * 0.7) * 0.32;
    knotGroup.scale.setScalar(1 + Math.sin(t * 1.6) * 0.04);

    l1.position.x = Math.sin(t * 0.6) * 8;
    l1.position.z = Math.cos(t * 0.6) * 8;
    l2.position.x = Math.sin(t * 0.4 + Math.PI) * 7;
    l2.position.z = Math.cos(t * 0.4 + Math.PI) * 7;

    ring1.rotation.z = t * 0.3;
    ring2.rotation.z = -t * 0.2;
    ring3.rotation.z = t * 0.15;

    particles.rotation.y = t * 0.032;
    particles.rotation.x = Math.sin(t * 0.1) * 0.1;

    cubes.forEach((c) => {
      const d = c.userData;
      const a = d.angle + t * d.speed;
      c.position.x = Math.cos(a) * d.radius;
      c.position.z = Math.sin(a) * d.radius;
      c.position.y = d.yBase + Math.sin(t * d.ySpeed + d.yPhase) * 1.6;
      c.rotation.x += d.rot.x;
      c.rotation.y += d.rot.y;
      c.rotation.z += d.rot.z;
    });

    camera.position.x += (tx * 1.3 - camera.position.x) * 0.02;
    camera.position.y += (ty * 1.3 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  }
  animate();

  setTimeout(() => {
    canvas.classList.add("on");
    document.body.classList.add("has-3d");
  }, 200);
}

// Запуск после прелоадера
window.addEventListener("preloader:done", () => {
  setTimeout(initThreeScene, 400);
});

// Фолбэк: если прелоадер не сработал
window.addEventListener("load", () => {
  setTimeout(() => {
    if (!document.body.classList.contains("has-3d")) {
      initThreeScene();
    }
  }, 4000);
});