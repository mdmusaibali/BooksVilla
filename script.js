const downArrowAi = document.querySelector(".down-arrow-ai");
const booksBoxAi = document.querySelector(".books-box-ai");
const downArrowSet = document.querySelector(".down-arrow-set");
const booksBoxSet = document.querySelector(".books-box-set");
const downArrowDbms = document.querySelector(".down-arrow-dbms");
const booksBoxDbms = document.querySelector(".books-box-dbms");
const aiTrigger = document.querySelector(".ai-trigger");
const setTrigger = document.querySelector(".set-trigger");
const dbmsTrigger = document.querySelector(".dbms-trigger");
downArrowAi.addEventListener("click", function () {
  booksBoxAi.classList.toggle("hide");
  booksBoxAi.classList.toggle("unhide");
});

downArrowSet.addEventListener("click", function () {
  booksBoxSet.classList.toggle("hide");
  booksBoxSet.classList.toggle("unhide");
});

downArrowDbms.addEventListener("click", function () {
  booksBoxDbms.classList.toggle("hide");
  booksBoxDbms.classList.toggle("unhide");
});
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
