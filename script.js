const closeButton = document.querySelector(".close-icon");
const overflow = document.querySelector(".overflows");
const body = document.querySelector("body");
closeButton.addEventListener("click", function () {
  overflow.classList.add("hide");
  body.style.overflow = "scroll";
});

const downloadButtons = document.querySelectorAll(".btn").forEach((btn) =>
  btn.addEventListener("click", function () {
    overflow.classList.remove("hide");
    body.style.overflow = "hidden";
    document.documentElement.scrollTop = 0;
  })
);

//------------------------------------------------------------------------------------
const box = document.querySelectorAll(".box");
const downArrow = document.querySelectorAll(".down-arrow");
const upArrow = document.querySelectorAll(".up-arrow");
const trigger = document.querySelectorAll(".trigger");
for (let i = 0; i < trigger.length; i++) {
  trigger[i].addEventListener("click", function () {
    box[i].classList.toggle("hide");
    box[i].classList.toggle("unhide");
    downArrow[i].classList.toggle("hidden");
    upArrow[i].classList.toggle("hidden");
  });
}
