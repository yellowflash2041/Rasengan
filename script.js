const chakraThreads = document.querySelectorAll(".chakra");
const chakraFlashes = document.querySelectorAll(".outer-flash");

chakraThreads.forEach((val, index) => {
  let rotation = Math.floor(Math.random() * (180 - 10 + 1) + 10);
  let rotationY = Math.floor(Math.random() * (180 - 10 + 1) + 10);
  let rotationZ = Math.floor(Math.random() * 180);

  let size = Math.floor(Math.random() * (500 - 425 + 1) + 425);

  val.style.width = size + "px";
  val.style.height = size + "px";
  val.style.padding = (500 - size) / 2 + "px";
  val.style.transform = `rotateX(${rotation}deg) rotateY(${rotationY}deg) rotateZ(${rotationZ}deg)`;
});

chakraFlashes.forEach((val, index) => {
  let flashSize = Math.floor(Math.random() * 100);
  let rotation = Math.floor(Math.random() * 360);
  let delay = Math.floor(Math.random() * (5 - 1) + 5);

  val.style.transform = `rotate(${rotation}deg)`;
  val.style.borderLeftWidth = `${flashSize}px`;
  val.style.animationDelay = `-${delay}s`;
});
