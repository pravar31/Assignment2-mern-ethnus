let id = null;
const start = () => {
  let train = document.getElementById("image");
  let positionX = 0;
  //   clearInterval(id);
  id = setInterval(() => {
    positionX++;
    train.style.left = positionX + "px";
  }, 10);
};

const stop = () => {
  let train = document.getElementById("image");
  train.style.left = "0px";
  clearInterval(id);
};
