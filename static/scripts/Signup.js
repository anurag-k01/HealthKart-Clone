let signup_btn = document.querySelector(".signup-btn");

let modalClose = document.querySelector(".modal-close");
let modalBg = document.querySelector(".signup-bg");

modalBg.classList.add("bg-active");
modalClose.addEventListener("click", function () {
  modalBg.classList.remove("bg-active");
});

function store() {
  let name = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (name == "" || email == "" || password == "") {
    alert("fill all the details");
  } else {
    let userobj = {
      name,
      email,
      password,
    };
    let arr;
    arr = localStorage.getItem("user_details");

    if (arr == null) {
      arr = [];
    } else {
      arr = JSON.parse(localStorage.getItem("user_details"));
    }
    arr.push(userobj);
    localStorage.setItem("user_details", JSON.stringify(arr));

    window.location.href = "https://healthkart-clone.herokuapp.com/login";
  }
}
