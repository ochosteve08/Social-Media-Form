

let id=(id)=> document.getElementById(id);
let className=(className)=> document.getElementsByClassName(className);

let   username = id("username"),
      email = id("mail"),
      password = id("password"),
      form = id("form"),
      togglePassword = id('togglePassword');


form.addEventListener("submit",(event)=>{
    event.preventDefault();
    checkInputs();

  
});

function checkInputs() {
 
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  

  if (usernameValue === "") {
    //show error
    //add error class
    setErrorFor(username, " Oops! Username cannot be blank");
  }else if (usernameValue.length < 8 || username.length > 16) {
    setErrorFor(username, "Username should be minimum of 8 and maximum of 16 characters");
  }else {
    // add success class
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, " Oops! Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Please enter a valid email address");
  } else {
    setSuccessFor(email);
  };

  if (passwordValue === "") {
    setErrorFor(password, "Oops! password cannot be blank");
  } else if (!isPassword(passwordValue)) {
    setErrorFor(password, "Password must contain at least one uppercase, lowercase, number and special character");
  }
  else {
    setSuccessFor(password);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; // .from-control
  const msg = formControl.querySelector('.error');

  // add error message inside small
  msg.innerText = message;
  //add error class
  formControl.className = "form-div error";

}

function setSuccessFor(input) {
  const formControl = input.parentElement;
   const msg = formControl.querySelector('.error');
   msg.innerText="";
  formControl.className = "form-div success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isPassword(password) {
  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
}


togglePassword.addEventListener("click", function (event) {
            // toggle the type attribute
            const type = password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);

                   
            
            // toggle the icon
            this.classList.toggle("fa-eye");
        });

