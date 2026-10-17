// marquee.js — дублирование содержимого бегущей строки
(function () {
  const track = document.getElementById("marqueeTrack");
  if (!track) return;
  // Дублируем для бесшовной прокрутки
  track.innerHTML += track.innerHTML;
})();