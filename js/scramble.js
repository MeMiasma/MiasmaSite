// scramble.js — эффект "дешифровки" текста при появлении
(function () {
  const CHARS = "!<>-_\\/[]{}—=+*^?#________";
  const elements = document.querySelectorAll("[data-scramble]");

  elements.forEach((el) => {
    const original = el.dataset.scramble || el.textContent;
    // Сохраняем HTML структуру (span с градиентом)
    const originalHTML = el.innerHTML;
    let frame = 0;
    const queue = [];

    // Разбираем посимвольно, но сохраняем разметку на месте
    // Для простоты анимируем только текстовые узлы
    const textNodes = [];
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = walker.nextNode())) {
      textNodes.push({ node: n, text: n.nodeValue });
    }

    const totalChars = textNodes.reduce((s, o) => s + o.text.length, 0);

    function scramble() {
      let charIndex = 0;
      textNodes.forEach(({ node, text }) => {
        let newText = "";
        for (let i = 0; i < text.length; i++) {
          const progress = frame / 30;
          const threshold = (charIndex + i) / totalChars;
          if (progress > threshold) {
            newText += text[i];
          } else if (text[i] === " " || text[i] === "\n") {
            newText += text[i];
          } else {
            newText += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }
        node.nodeValue = newText;
        charIndex += text.length;
      });
      frame++;
      if (frame < 42) {
        setTimeout(scramble, 30);
      } else {
        el.innerHTML = originalHTML;
      }
    }

    // Запускаем при появлении в viewport
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(scramble, 300);
          io.disconnect();
        }
      });
    }, { threshold: 0.3 });
    io.observe(el);
  });
})();