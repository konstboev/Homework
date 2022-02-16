"use string";

let button = document.querySelector(".button");
let modalwin = document.querySelector("#modalwin");
let close = document.querySelector(".modalwin_close");

button.addEventListener("click", () => {
  modalwin.style.display = "block";
});

close.addEventListener("click", () => {
  modalwin.style.display = "none";
});

window.onclick = function (event) {
  if (event.target === modalwin) {
    modalwin.style.display = "none";
  }
};
