const img = document.createElement("img");
const IMG_COUNT = 5;
const background = Math.floor(Math.random() * IMG_COUNT) + 1;

img.src = `img/${background}.jpeg`;
img.classList.add("bgImage");
document.body.appendChild(img);
console.log("Background Success");