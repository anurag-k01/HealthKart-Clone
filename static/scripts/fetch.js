async function gett() {
  var res = await fetch("https://healthkart-clone.herokuapp.com/users");
  let data = await res.json();
  showdata(data);
}
gett();
async function tredning() {
  var res1 = await fetch("https://healthkart-clone.herokuapp.com/trend");
  let data1 = await res1.json();
  showTrendingData(data1);
}
tredning();
let maindiv = document.getElementById("box");
let trenddiv = document.getElementById("box1");
function showTrendingData(data) {
  data.forEach((item) => {
    let minidiv = document.createElement("div");
    minidiv.classList = "col";
    minidiv.classList = "single-product-box";
    minidiv.setAttribute("class", "mini");

    let img = document.createElement("img");
    img.src = item.img;

    let heading = document.createElement("h5");
    heading.innerHTML = item.name;

    let price = document.createElement("span");
    price.innerHTML = item.price;

    let discount = document.createElement("span");
    discount.innerHTML = item.discount;
    discount.setAttribute("class", "discount");
    minidiv.addEventListener("click", () => {
      add_to_items(item);
    });

    let btn_span = document.createElement("span");

    let btn = document.createElement("button");
    btn.setAttribute("class", "cartbt");
    btn.innerText = "Add";
    count = 0;
    btn.addEventListener(
      "click",
      () => {
        count++;

        event.stopPropagation();
        btn.innerText = "CART";
        if (count == 1) {
          add_to_kart(item);
          quantity();
        } else {
          if (count == 2) {
            window.location.href =
              "https://healthkart-clone.herokuapp.com/cart";
          }
        }
      },
      false
    );
    btn_span.append(btn);
    minidiv.append(img, heading, price, discount, btn_span);
    minidiv.addEventListener("mouseover", function () {
      btn.style.opacity = 1.0;
      img.style.opacity = 0.6;

      btn.style.background = "#00c2c1";
    });
    minidiv.addEventListener("mouseout", function () {
      btn.style.opacity = 1.0;
      img.style.opacity = 1.0;

      btn.style.background = "";
    });

    box1.append(minidiv);
  });
}
function showdata(data) {
  data.forEach((item) => {
    let minidiv = document.createElement("div");
    minidiv.classList = "col";
    minidiv.innerHTML = `<div class="mini">
        <img src="${item.img}" id="imgg" alt="">
        <h5>${item.name}</h5>
        <span>Mrp -${item.price}</span>
        <span style="text-decoration: line-through;"> ${item.discount}</span>
      </div>`;
    minidiv.addEventListener("click", () => {
      add_to_items(item);
    });
    let btn = document.createElement("button");
    btn.setAttribute("class", "cartbtn");
    btn.innerText = "Add";
    count = 0;
    btn.addEventListener(
      "click",
      () => {
        count++;

        event.stopPropagation();
        btn.innerText = "CART";
        if (count == 1) {
          add_to_kart(item);
          quantity();
        } else {
          if (count == 2) {
            window.location.href =
              "https://healthkart-clone.herokuapp.com/cart";
          }
        }
      },
      false
    );

    minidiv.append(btn);

    maindiv.append(minidiv);
  });

  // console.log(data);
}
function add_to_items(item) {
  let count = 0;

  let arr;
  arr = localStorage.getItem("items");
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("items"));
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name !== item.name || arr[i].name === item.name) {
      arr.pop();
      // return;
    }
  }

  arr.push(item);

  localStorage.setItem("items", JSON.stringify(arr));
  window.location.href = "https://healthkart-clone.herokuapp.com/items";
}
function add_to_kart(item) {
  let count = 0;
  let arr;
  arr = localStorage.getItem("kart");
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("kart"));
  }

  arr.push(item);

  localStorage.setItem("kart", JSON.stringify(arr));
}

function viewall() {
  window.location.href = "https://healthkart-clone.herokuapp.com/sorting";
}
function quantity() {
  let data_div = JSON.parse(localStorage.getItem("kart"));

  let total_items = data_div?.length;

  //   console.log(total_price);
  let totalItems = document.createElement("div");

  totalItems.innerHTML = `${total_items}`;

  let cartCount = document.getElementById("cart_count");
  cartCount.innerHTML = `${total_items}`;
  cartCount.style.color = "white";
  return cartCount;
}
// quantity();
// console.log(quantity());
