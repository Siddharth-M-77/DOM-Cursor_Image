const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
//   console.log(card.childNodes);//1st way to get element
  const imgDiv = card.querySelector(".img"); //2nd way
  card.addEventListener("mousemove", (dets) => {
    imgDiv.style.opacity = "1";
    imgDiv.style.left = dets.clientX - card.offsetLeft - 60 + "px";
    imgDiv.style.top = dets.clientY - card.offsetTop - 60 + "px";
  });

  card.addEventListener("mouseleave", () => {
    imgDiv.style.opacity = "0";
  });
});
