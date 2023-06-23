
const allImg = [
  `<img class="imgslide" src="images/pic-1.jpeg">`,
  `<img class="imgslide" src="images/pic-2.jpg">`,
  `<img class="imgslide" src="images/pic-3.jpeg">`,
  `<img class="imgslide" src="images/pic-4.jpeg">`,
  `<img class="imgslide" src="images/pic-5.jpeg">`,
  `<img class="imgslide" src="images/pic-6.jpeg">`
];

let index = 0;
show.innerHTML += allImg[index];
show.innerHTML += `<p id="count">image #${index +1} sur ${allImg.length}</p>`;
prevw.setAttribute("disabled", "");

next.addEventListener("click", (eo) => {
  if (index < allImg.length - 1) {
    index++;
    show.innerHTML += allImg[index];
    show.innerHTML += `<p id="count">image #${index +1} sur ${allImg.length}</p>`;
    prevw.removeAttribute("disabled");
  }if(index == allImg.length -1){
    next.setAttribute("disabled", "");
  }
  parent.getElementsByClassName("activ-num")[0].classList.remove("activ-num")
  parent.getElementsByTagName("button")[index].classList.add("activ-num")
});

prevw.addEventListener("click", (eo) => {
   next.removeAttribute("disabled");
  if (index <= allImg.length - 1) {
    index--;
    show.innerHTML += allImg[index];
    show.innerHTML += `<p id="count">image #${index +1} sur ${allImg.length}</p>`;
    
  }if(index == 0){
    prevw.setAttribute("disabled", "");
  }
  parent.getElementsByClassName("activ-num")[0].classList.remove("activ-num")
  parent.getElementsByTagName("button")[index].classList.add("activ-num")
});

/* For active number */ 
const allnum = document.querySelectorAll(".myNumber") 
const parent = document.getElementsByClassName("parentnum")[0]
allnum.forEach((item, num) => {
  item.addEventListener("click", (eo) => {
    parent.getElementsByClassName("activ-num")[0].classList.remove("activ-num")
    item.classList.add("activ-num")
    show.innerHTML += allImg[num];
    show.innerHTML += `<p id="count">image #${[num +1]} sur ${allImg.length}</p>`;

     index = num // Array index = Button index
     if (num == allImg.length -1) {
       next.setAttribute("disabled", "");
       prevw.removeAttribute("disabled");
     }else if (num == 0) {
      prevw.setAttribute("disabled", "");
      next.removeAttribute("disabled");
    }else {
      prevw.removeAttribute("disabled");
      next.removeAttribute("disabled");
    }
  })
}); 


