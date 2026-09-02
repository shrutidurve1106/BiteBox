function Signup(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const gender = document.getElementById("gender").value;
  const pass = document.getElementById("password1").value;
  const password = document.getElementById("password2").value;

  console.log(event.username);

  if (
    name == "" ||
    username == "" ||
    email == "" ||
    gender == "" ||
    pass == ""
  ) {
    alert("All Fields are Necessary");
  }
  if (pass === password) {
    alert("Registration Successfully!!");
  } else {
    Message.innerHTML("Both Passwords are not same..Please Try Again..");
  }
}
