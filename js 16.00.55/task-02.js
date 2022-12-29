/*Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. 
Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все < li > за одну операцию в список ul#ingredients. */

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

/* const list = document.getElementById("ingredients");

for (let i = 0; i < ingredients.length; i++) {
  const li = document.createElement("li");
  li.textContent = ingredients[i];
  li.classList.add("item");
  list.append(li);
} */

/* const list = document.getElementById("ingredients");
const ingredList = [];

for (let i = 0; i < ingredients.length; i++) {
  const li = document.createElement("li");
  li.textContent = ingredients[i];
  li.classList.add("item");
  ingradList.push(li);
}

list.append(...ingredList); */

const list = document.getElementById("ingredients");

const ingredList = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");

  console.log(li);
  console.log(ingredient);

  return li;
});

list.append(...ingredList);
