export default function runXmasLights() {
  const colors = ["#ff3333", "#33ff55", "#33aaff", "#ffdd33", "#ff77ff"];
  const lightsCount = 30; // количество огоньков

  for (let i = 0; i < lightsCount; i++) {
    const light = document.createElement("div");
    light.classList.add("light");

    // случайный размер
    const size = Math.random() * 60 - 12;
    light.style.width = size + "px";
    light.style.height = size + "px";

    // случайный цвет
    light.style.background = colors[Math.floor(Math.random() * colors.length)];

    // случайная позиция
    light.style.left = Math.random() * 80 + "vw";
    light.style.top = Math.random() * 90 + "vh";

    // случайная задержка анимации (чтобы не мигали одновременно)
    light.style.animationDelay = (Math.random() * 2) + "s";

    document.body.appendChild(light);
  }
}
