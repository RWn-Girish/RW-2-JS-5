let form = document.querySelector("#registerForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let fname = document.getElementById("fname");
  let lname = document.getElementById("lname");
  let email = document.getElementById("email");
  let pass = document.getElementById("password");
  let DOB = document.getElementById("DOB");
  let hobbies = document.getElementById("hobbies");
  let gender = document.querySelector('input[name="gender"]:checked');

  let isValid = true;

  if (fname.value === "") {
    document.getElementById("fnameErr").innerHTML = "Firstname is not Empty";
    isValid = false;
  } else if (fname.value.length < 3) {
    document.getElementById("fnameErr").innerHTML =
      "Firstname Length minimum 3 character";
    isValid = false;
  }

  if (lname.value === "") {
    document.getElementById("lnameErr").innerHTML = "Lastname is not Empty";
    isValid = false;
  } else if (lname.value.length < 3) {
    document.getElementById("lnameErr").innerHTML =
      "Lastname Length minimum 3 character";
    isValid = false;
  }

  if (email.value === "") {
    document.getElementById("emailErr").innerHTML = "Email is not Empty";
    isValid = false;
  }

  if (pass.value === "") {
    document.getElementById("passErr").innerHTML = "Password is not Empty";
    isValid = false;
  } else if (pass.value.length < 3 || pass.value.length < 15) {
    document.getElementById("passErr").innerHTML =
      "Password length is 3 to 15 characters";
    isValid = false;
  } else {
    let validPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (!validPass.test(pass.value)) {
      document.getElementById("passErr").innerHTML =
        "Password in atleast One Upper, Lower and Digit & specical Character";
      isValid = false;
    }
  }

  if (DOB.value === "") {
    document.getElementById("DOBErr").innerHTML = "DOB is not Empty";
    isValid = false;
  }

  if (hobbies.value === "") {
    document.getElementById("hobbiesErr").innerHTML = "hobbies Select One";
    isValid = false;
  }

  if (!gender) {
    document.getElementById("genderErr").innerHTML = "Gender Select One";
    isValid = false;
  }

  if (isValid) {
    console.log("Submit Form");
    form.reset();
  }
});

function validateForm() {
  let isValid = true;

  if (fname.value === "") {
    document.getElementById("fnameErr").innerHTML = "Firstname is not Empty";
    isValid = false;
  } else if (fname.value.length < 3) {
    document.getElementById("fnameErr").innerHTML =
      "Firstname Length minimum 3 character";
    isValid = false;
  }

  if (lname.value === "") {
    document.getElementById("lnameErr").innerHTML = "Lastname is not Empty";
    isValid = false;
  } else if (lname.value.length < 3) {
    document.getElementById("lnameErr").innerHTML =
      "Lastname Length minimum 3 character";
    isValid = false;
  }

  if (email.value === "") {
    document.getElementById("emailErr").innerHTML = "Email is not Empty";
    isValid = false;
  }

  if (pass.value === "") {
    document.getElementById("passErr").innerHTML = "Password is not Empty";
    isValid = false;
  } else if (pass.value.length < 3 && pass.value.length < 15) {
    document.getElementById("passErr").innerHTML =
      "Password length is 3 to 15 characters";
    isValid = false;
  } else {
    let validPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (!validPass.test(pass.value)) {
      document.getElementById("passErr").innerHTML =
        "Password in atleast One Upper, Lower and Digit & specical Character";
      isValid = false;
    }
  }

  if (DOB.value === "") {
    document.getElementById("DOBErr").innerHTML = "DOB is not Empty";
    isValid = false;
  }

  if (hobbies.value === "") {
    document.getElementById("hobbiesErr").innerHTML = "hobbies Select One";
    isValid = false;
  }

  if (!gender) {
    document.getElementById("genderErr").innerHTML = "Gender Select One";
    isValid = false;
  }

  return isValid;
}
