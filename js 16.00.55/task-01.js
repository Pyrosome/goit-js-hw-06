const listItems = document.querySelectorAll('li.item');
console.log("Number of categories: ", listItems.length);

listItems.forEach((element) => {
    console.log("Category:", element.firstElementChild.textContent);
    console.log("Elements:", element.lastElementChild.childElementCount);
  });