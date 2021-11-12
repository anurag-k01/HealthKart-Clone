let dataa = document.getElementById("data");
let totaql = document.createElement("div");
function appendProducts(el) {
  let div = document.createElement("div");
  div.setAttribute("class", "items_pg");

  let p_name = document.createElement("span");
  p_name.innerHTML = el.name;
  let p_price = document.createElement("p");
  p_price.innerHTML = `Mrp - ${el.price}/-`;
  let img = document.createElement("img");
  img.src = el.img;
  img.setAttribute("class", "img_item");
  let img_div = document.createElement("div");
  let sidetoside = document.createElement("span");
  let addCart = document.createElement("button");
  addCart.innerHTML = "ADD TO CART";
  addCart.setAttribute("class", "btn btn-outline-secondary");
  addCart.addEventListener("click", () => {
    add_to_kart(el);
  });
  sidetoside.append(addCart);
  let side = document.createElement("span");
  let buy = document.createElement("button");
  buy.setAttribute("class", "btn btn-danger");
  buy.innerHTML = "QUICK BUY";
  side.append(buy);
  let right_text = document.createElement("div");
  let dropdown1 = document.createElement("div");
  dropdown1.innerHTML = ` <label for="State" class="form-label fs-5">Flavour <span class="fs-6 text-muted">(4 Options)</span></label>
  <select class="form-select" aria-label="Default select example">
      <option selected>Choose...</option>
      <option value="1">Fruit Punch</option>
      <option value="2">Green Apple</option>
      <option value="3">Raspberry Lemonade</option>
      <option value="4">Watermelon</option>
  </select>`;
  let dropdown2 = document.createElement("div");
  dropdown2.setAttribute("class", "drop2");
  dropdown2.innerHTML = ` <label for="State" class="form-label fs-5">Serving per pack <span class="fs-6 text-muted">(4 Options)</span></label>
  <select class="form-select" aria-label="Default select example">
      <option selected>Choose...</option>
      <option value="1">30 Servings</option>
      <option value="2">20 Servings</option>
      <option value="3"> 10 Servings</option>
      <option value="4">5 Servings</option>
  </select>`;
  right_text.append(p_name, p_price, sidetoside, side, dropdown1, dropdown2);
  right_text.setAttribute("class", "text");
  let parent_div = document.createElement("div");
  parent_div.setAttribute("class", "parent");
  img_div.append(img);
  parent_div.append(img_div, right_text);
  div.append(parent_div);

  dataa.append(div);
}

function showProduct() {
  let data_div = JSON.parse(localStorage.getItem("items"));
  dataa.innerHTML = null;
  data_div.forEach(function (el) {
    appendProducts(el);
  });
}

showProduct();
function add_to_kart(item) {
  let count = 0;
  let arr;
  arr = localStorage.getItem("kart");
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("kart"));
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === item.name) {
      alert("Already Added");
      return;
    }
  }

  arr.push(item);

  localStorage.setItem("kart", JSON.stringify(arr));
  window.location.href = "https://healthkart-clone.herokuapp.com/cart";
}
