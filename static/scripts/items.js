var data_div1 = document.getElementById("flash_data_left");
var data_div2 = document.getElementById("flash_data_rt");

let items_data = JSON.parse(localStorage.getItem("items_added"));

function apppendData(el) {
  let items_data = JSON.parse(localStorage.getItem("items_added"));
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let img = document.createElement("img");
  img.src = el.img;

  img.setAttribute("class", "img_f");

  let p_name = document.createElement("p");
  p_name.textContent = el.name;

  p_name.setAttribute("class", "name_f");
  let p_price = document.createElement("p");
  p_price.textContent = el.price;

  p_price.setAttribute("class", "price_f");
  let p_disc = document.createElement("p");
  p_disc.textContent = el.discount;
  let p_add = document.createElement("button");
  let p_buy = document.createElement("p");

  var sel = document.createElement("select");
  var opt1 = document.createElement("option");
  var opt2 = document.createElement("option");

  opt1.value = "Natural Crunch";
  opt1.text = "Natural Crunch";

  opt2.value = "Natural Smooth";
  opt2.text = "Natural Smooth";

  sel.add(opt1, null);
  sel.add(opt2, null);

  p_add.innerText = "Add to Cart";

  p_buy.innerText = "Quick buy";
  p_add.setAttribute("id", "add_box");

  p_buy.setAttribute("id", "buy_box");
  p_disc.setAttribute("class", "disc_f");
  div1.append(img);
  div2.append(p_name, p_price, p_disc, p_add, p_buy, sel);

  data_div1.append(div1);
  data_div2.append(div2);
}

function showVisited() {
  let p_add = document.createElement("button");
  p_add.innerText = "Add to Cart";

  p_add.setAttribute("id", "add_box");
  let items_data = JSON.parse(localStorage.getItem("items_added"));

  // data_div1.innerHTML = null;
  // data_div2.innerHTML = null;
  items_data.forEach(function (el) {
    apppendData(el);
  });
}
// showVisited();

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
}
