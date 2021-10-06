const booksBoxAi = document.querySelector(".books-box-ai");
const booksBoxSet = document.querySelector(".books-box-set");
const booksBoxDbms = document.querySelector(".books-box-dbms");
const booksBoxDs = document.querySelector(".books-box-ds");
const booksBoxDc = document.querySelector(".books-box-dc");

const setTrigger = document.querySelector(".set-trigger");
const aiTrigger = document.querySelector(".ai-trigger");
const dbmsTrigger = document.querySelector(".dbms-trigger");
const dsTrigger = document.querySelector(".ds-trigger");
const dcTrigger = document.querySelector(".dc-trigger");

const closeButton = document.querySelector(".close-icon");
const overflow = document.querySelector(".overflows");
const body = document.querySelector("body");

const downArrowAi = document.querySelector(".down-arrow-ai");
const upArrowAi = document.querySelector(".up-arrow-ai");
const downArrowSet = document.querySelector(".down-arrow-set");
const upArrowSet = document.querySelector(".up-arrow-set");
const downArrowDbms = document.querySelector(".down-arrow-dbms");
const upArrowDbms = document.querySelector(".up-arrow-dbms");
const downArrowDs = document.querySelector(".down-arrow-ds");
const upArrowDs = document.querySelector(".up-arrow-ds");
const downArrowDc = document.querySelector(".down-arrow-dc");
const upArrowDc = document.querySelector(".up-arrow-dc");

aiTrigger.addEventListener("click", function () {
  booksBoxAi.classList.toggle("hide");
  booksBoxAi.classList.toggle("unhide");
  downArrowAi.classList.toggle("hidden");
  upArrowAi.classList.toggle("hidden");
});
setTrigger.addEventListener("click", function () {
  booksBoxSet.classList.toggle("hide");
  booksBoxSet.classList.toggle("unhide");
  downArrowSet.classList.toggle("hidden");
  upArrowSet.classList.toggle("hidden");
});
dbmsTrigger.addEventListener("click", function () {
  booksBoxDbms.classList.toggle("hide");
  booksBoxDbms.classList.toggle("unhide");
  downArrowDbms.classList.toggle("hidden");
  upArrowDbms.classList.toggle("hidden");
});
dsTrigger.addEventListener("click", function () {
  booksBoxDs.classList.toggle("hide");
  booksBoxDs.classList.toggle("unhide");
  downArrowDs.classList.toggle("hidden");
  upArrowDs.classList.toggle("hidden");
});
dcTrigger.addEventListener("click", function () {
  booksBoxDc.classList.toggle("hide");
  booksBoxDc.classList.toggle("unhide");
  downArrowDc.classList.toggle("hidden");
  upArrowDc.classList.toggle("hidden");
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
