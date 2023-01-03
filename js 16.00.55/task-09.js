// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль при клике
// на button.change - color и выводит значение цвета в span.color.

const button = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

button.addEventListener("click", (event) => {
  const currentColor = getRandomHexColor();
  document.body.style.backgroundColor = currentColor;
  colorName.textContent = `${currentColor}`;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
