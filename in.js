const imgs = ["./img/g4.jpg", "./img/g3.jpg", "./img/g2.jpg"];
const imgTag = document.querySelector("img");
let count = 0;

const next = () => {
  count++;
  console.log(count);

  if (count >= imgs.length) {
    count = 0;
    imgTag.src = imgs[count];
  } else {
    imgTag.src = imgs[count];
  }
};

const pre = () => {
  console.log(count);

  if (count === 0) {
    count = imgs.length - 1;
    imgTag.src = imgs[count];
  } else {
    count--;
    imgTag.src = imgs[count];
  }
};
