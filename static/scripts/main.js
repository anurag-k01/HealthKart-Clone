const arr_hk = [];

function createDatabase(img) {
  this.image = img;
}

let i1 = new createDatabase(
  "https://img2.hkrtcdn.com/13437/normal_1343641_o.png"
);
let i2 = new createDatabase(
  "https://img8.hkrtcdn.com/13471/normal_1347067_o.png"
);
let i3 = new createDatabase("https://img8.hkrtcdn.com/13530/bnr_1352997_o.png");
let i4 = new createDatabase(
  "https://img2.hkrtcdn.com/13471/normal_1347071_o.png"
);
let i5 = new createDatabase(
  "https://img4.hkrtcdn.com/13471/normal_1347073_o.png"
);
let i6 = new createDatabase(
  "https://img6.hkrtcdn.com/13471/normal_1347075_o.png"
);
let i7 = new createDatabase(
  "https://img4.hkrtcdn.com/13465/normal_1346413_o.png"
);
let i8 = new createDatabase(
  "https://img10.hkrtcdn.com/13471/normal_1347079_o.png"
);

arr_hk.push(i1, i2, i3, i4, i5, i6, i7, i8);

if (localStorage.getItem("arr_hk") == null) {
  localStorage.setItem("arr_hk", JSON.stringify(arr_hk));
}
// console.log(arr_hk);
function showDatabase(d) {
  let arr_hk = d;
  const div_hk_page = document.getElementById("hk_page");
  div_hk_page.innerHTML = null;

  arr_hk.forEach(function (el) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.image;
    div.append(img);
    div_hk_page.append(div);
  });
}
showDatabase(JSON.parse(localStorage.getItem("arr_hk")));
