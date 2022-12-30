// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const value = document.querySelector("#value");
let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

const incrementButton = document.querySelector('[data-action="increment"]');
incrementButton.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
