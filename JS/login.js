// function login() {
//   let username = document.getElementById("username").value;
//   let password = document.getElementById("password").value;

//   if (username === "admin" && password === "Admin@123") {
//     alert(" You have logged In Successfully \n\n Welcome To BiteBox...");
//   } else if (username === "admin" && password !== "Admin@123") {
//     alert("Sorry " + username + " password is incorrect. Please Try Again.");
//   } else if (username !== "admin" && password !== "Admin@123") {
//     alert("Sorry but username is incorrect. Please Try Again.");
//   } else {
//     alert("Invalid username and Password. Please Try Again.");
//   }
// }

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (username === "shrutidurve" && password === "123456") {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);
    window.location.href = "index.html";

    alert("Welcome To BiteBox " + username + "!!");
  } else {
    message.innerText = "Invalid Username or Password.";
  }
}
