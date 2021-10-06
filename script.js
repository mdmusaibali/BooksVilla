const booksBoxAi = document.querySelector(".books-box-ai");
const booksBoxSet = document.querySelector(".books-box-set");
const booksBoxDbms = document.querySelector(".books-box-dbms");
const aiTrigger = document.querySelector(".ai-trigger");
const setTrigger = document.querySelector(".set-trigger");
const dbmsTrigger = document.querySelector(".dbms-trigger");
const closeButton = document.querySelector(".close-icon");
const overflow = document.querySelector(".overflows");
const body = document.querySelector("body");
aiTrigger.addEventListener("click", function () {
  booksBoxAi.classList.toggle("hide");
  booksBoxAi.classList.toggle("unhide");
});
setTrigger.addEventListener("click", function () {
  booksBoxSet.classList.toggle("hide");
  booksBoxSet.classList.toggle("unhide");
});
dbmsTrigger.addEventListener("click", function () {
  booksBoxDbms.classList.toggle("hide");
  booksBoxDbms.classList.toggle("unhide");
});

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
