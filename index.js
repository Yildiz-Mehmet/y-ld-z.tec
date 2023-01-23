const open = document.getElementById("open1");
const choose = document.getElementById("choose");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  open.classList.replace("open", "openActive");
  close.classList.replace("close", "closeActive");

  choose.classList.add("active");
  choose.classList.replace("choose1", "chooseActive");
});

close.addEventListener("click", () => {
  open.classList.replace("openActive", "open");
  close.classList.replace("closeActive", "close");

  choose.classList.remove("active");
  choose.classList.replace("chooseActive", "choose1");
});
