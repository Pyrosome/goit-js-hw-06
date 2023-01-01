const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const galleryEL = document.querySelector(".gallery");
// galleryEL.style.display = "flex";
// galleryEL.style.listStyle = "none";

// const picList = images.map((image) => {
//   console.log(image);

//   const li = document.createElement("li");
//   const img = document.createElement("img");
//   img.src = image.url;
//   img.alt = image.alt;
//   img.style.width = "100%";
//   img.style.height = "100%";

//   li.append(img);
//   console.log(li);
//   return li;
// });

// console.log(picList);
// galleryEL.append(...picList);

// const galleryEL = document.querySelector(".gallery");
// galleryEL.style.display = "flex";
// galleryEL.style.listStyle = "none";

// const galleryRef = images.map((element) => {
//   return `<li><img src="${element.url}" alt="${element.alt}"
//   width = 100%; height = 100%;></li>`;
// });

// const galleryRefString = galleryRef.join("");
// console.log(galleryRefString);

// galleryEL.insertAdjacentHTML("afterbegin", galleryRefString);

const galleryEL = document.querySelector(".gallery");
galleryEL.style.display = "flex";
galleryEL.style.listStyle = "none";

const galleryRef = images
  .map(
    ({ url, alt }) =>
      `<li data><img src="${url}" alt="${alt}" 
  width = 100%; height = 100%;></li>`
  )
  .join("");

galleryEL.insertAdjacentHTML("afterbegin", galleryRef);
