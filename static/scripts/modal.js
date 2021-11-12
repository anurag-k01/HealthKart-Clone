let address_btn = document.getElementById("proceed");
// let login_btn=document.querySelector('.login');

let modalClose = document.querySelector(".modal-close");
let modalBg = document.querySelector(".modal-bg");

address_btn.addEventListener("click", function () {
  modalBg.classList.add("bg-active");
});

modalClose.addEventListener("click", function () {
  modalBg.classList.remove("bg-active");
});

function proceed() {
  let name = document.getElementById("name").value;
  let phno = document.getElementById("phno").value;
  let address = document.getElementById("address").value;
  let pincode = document.getElementById("pincode").value;
  let state = document.getElementById("state").value;
  let city = document.getElementById("city").value;
  console.log(name);
  if (
    name == "" ||
    phno == "" ||
    address == "" ||
    pincode == "" ||
    state == "" ||
    city == ""
  ) {
    alert("fill all the details");
  } 
}
