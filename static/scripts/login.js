let modalClose = document.querySelector(".modal-close");
let modalBg = document.querySelector(".login-bg");


modalBg.classList.add("bg-active");
modalClose.addEventListener("click", function () {
  modalBg.classList.remove("bg-active");
});
function check() {
  let name = document.getElementById("username").value;

  let password = document.getElementById("password").value;

  if (name == "" || password == "") {
    alert("fill all the details");
  } else {
    let arr;
    arr = JSON.parse(localStorage.getItem("user_details"));

    let flag = false;
    for (var i = 0; i < arr.length; i++) {
      console.log("hi");
      if (arr[i].name == name && arr[i].password == password) {
        flag = true;

        window.location.href = "/users/web";
        return;
      }
    }
    if (flag == false) {
      alert("invalid input");
    }
  }
}
