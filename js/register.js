

userName.addEventListener("keyup", (eo) => {
  userName.classList.add("error");
  usermessage.style.display = "block";

  if (userName.value.length > 4) {
    userName.classList.add("success");
    usermessage.style.display = "none";
    // usericon.style.display = "block"
    userName.nextElementSibling.style.opacity = "1" // HTML Element apres l'id #username  
    // usericon.style.opacity = "1";
  } else {
    userName.classList.remove("success");
    usermessage.style.display = "block";                               
    usericon.style.opacity = "0";
  }
  activation() // call the funcition here
});

// copy this email to test momo269@hotmal.com
userEmail.addEventListener("keyup", (eo) => {
  userEmail.classList.add("error");
  mailmessage.style.display = "block";

  const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if (regEmail.test(userEmail.value)) {
    userEmail.classList.add("success");
    mailmessage.style.display = "none";
    userEmail.nextElementSibling.style.opacity = "1" // HTML Element apres l'id #userEmail  
    // emailIcon.style.opacity = "1";
   } else{
    userEmail.classList.remove("success");
    mailmessage.style.display = "block";
    emailIcon.style.opacity = "0";
   } 
   activation() // call the funcition here
})

userPass.addEventListener("keyup", (eo) => {
  userPass.classList.add("error");
  passMessage.style.display = "block";

  const regPAss = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  if (regPAss.test(userPass.value)) {
    userPass.classList.add("success");
    passMessage.style.display = "none";
    passIcon.style.opacity = "1";
  }else{
    userPass.classList.remove("success");
    passMessage.style.display = "block";
    passIcon.style.opacity = "0";
  }
  activation() // call the funcition here
})

// copy this password to test  Engstocko02@
rePasswd.addEventListener("keyup", (eo) => {
  rePasswd.classList.add("error");
  repassMessage.style.display = "block";
  if (rePasswd.value == userPass.value) {
    rePasswd.classList.add("success");
    repassMessage.style.display = "none";
    repassIcon.style.opacity = "1";
  }else{
    rePasswd.classList.remove("success");
    repassMessage.style.display = "block";
    repassIcon.style.opacity = "0";
  }
  activation() // call the funcition here
})

  /*¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤
  this function to check if all html elements has a success class & enable the button register
¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤*/
const activation = () => {
if (userName.classList.contains("success") && userEmail.classList.contains("success") && userPass.classList.contains("success") && rePasswd.classList.contains("success")) {
  register.removeAttribute("disabled");
}else{
  register.setAttribute("disabled", "disabled");
}
}


/*¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤  
  section display registration for register page
¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤*/
showRegister.addEventListener("click", (eo) => {
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

