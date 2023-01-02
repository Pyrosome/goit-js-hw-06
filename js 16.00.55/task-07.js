const sizeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

sizeEl.addEventListener("blur", (event) => {
  textEl.style.fontSize = `${sizeEl.value}px`;
  console.log(sizeEl.value);
});
