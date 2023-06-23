
const  plus = document.querySelectorAll(".plus")

plus.forEach(item => {
  item.addEventListener("click", (eo) => {
    // para1.style.display = "block"
    const content = eo.target.parentElement.parentElement.getElementsByClassName("content")[0]
    //content.style.display = "block"
    //content.style.height = "120px"
    //content.style.opacity = "1"
    
    content.classList.toggle("active")
    if (content.classList.contains("active")) {
      content.style.height = `${content.scrollHeight}px`
    }else{
      content.style.height = 0
    }

    // + & -
    item.classList.toggle("hide-plus")
    if (item.classList.contains("hide-plus")) {
      item.innerText = "_"
      item.style.transform = "translateY(-11px)"
      // content.style.height = `${content.scrollHeight}px`
    }else{
      item.innerText = "+"  
      item.style.transform = "translateY(0px)"
      // content.style.height = `${0}px`
    }
  })
});

/*¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤
  section display registration for register section in the index.html page
¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤*/
registerId.addEventListener("click", (eo) => {
  parentId.style.display = "flex"
  
  setTimeout(() => {
    formzoom.style.transform = "scale(1)"
  }, 100);
})

close1.addEventListener("click", (eo) => {
  formzoom.style.transform = "scale(0)"
  
  setTimeout(() => {
    parentId.style.display = "none"
  }, 300);
})