
const parentartcl = document.querySelector(".parent-articles");
const parentbtn = document.querySelector(".alltabbtn");
const allbtn = document.querySelectorAll(".mybtn");

allbtn.forEach((item, index) => {
  item.addEventListener("click", (eo) => {
    parentbtn.querySelector(".activebtn").classList.remove("activebtn");
    item.classList.add("activebtn");

    parentartcl.querySelector(".article1").classList.remove("article1");
    parentartcl.getElementsByClassName("article")[index].classList.add("article1");
  });
});
