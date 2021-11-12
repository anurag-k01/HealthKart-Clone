let debit = document.querySelector(".debit-card");

debit.addEventListener("click", function () {
  let main_div = document.getElementById("debit-card-details");
  let card_details = document.createElement("div");
  let h1 = document.createElement("h1");
  h1.innerText = "Enter Card Details";
  let cardname = document.createElement("input");
  cardname.style.marginBottom = "10px";
  cardname.placeholder = "card holder name";
  let break_line = document.createElement("br");
  let break_line1 = document.createElement("br");
  let break_line2 = document.createElement("br");
  let break_line3 = document.createElement("br");
  let cardno = document.createElement("input");
  cardno.style.marginBottom = "10px";
  cardno.placeholder = "card number";
  let expireM = document.createElement("input");
  expireM.placeholder = "Expire MM";
  let expireY = document.createElement("input");
  expireY.placeholder = "Expire YY";
  expireY.style.marginLeft = "10px";
  let cvv = document.createElement("input");
  cvv.placeholder = "CVV";
  cvv.style.marginLeft = "10px";
  let check_box = document.createElement("input");
  check_box.setAttribute("type", "checkbox");
  let p = document.createElement("p");
  p.innerText = "Securely saved for faster payments";
  let img1 = document.createElement("img");
  img1.setAttribute("src", "https://img1.hkrtcdn.com/1718/RuPay-Icon.png");
  let img2 = document.createElement("img");
  img2.setAttribute(
    "src",
    "https://s3-ap-southeast-1.amazonaws.com/hkprod/13831/normal_1383075_o.png"
  );
  let img3 = document.createElement("img");
  img3.setAttribute(
    "src",
    "https://s3-ap-southeast-1.amazonaws.com/hkprod/13831/normal_1383073_o.png"
  );
  let img4 = document.createElement("img");
  img4.setAttribute(
    "src",
    "https://s3-ap-southeast-1.amazonaws.com/hkprod/payment_img/card/ic_maestro.png"
  );
  let img5 = document.createElement("img");
  img5.setAttribute(
    "src",
    "https://s3-ap-southeast-1.amazonaws.com/hkprod/payment_img/card/Maestro_logo.png"
  );
  let pay_btn = document.createElement("button");
  pay_btn.addEventListener("click", function () {
    setTimeout(function () {
      window.location.href = "success.html";
    }, 3000);
  });
  pay_btn.innerText = "pay now";
  card_details.append(
    h1,
    cardname,
    break_line,
    cardno,
    break_line1,
    expireM,
    expireY,

    cvv,
    break_line2,
    check_box,
    p,
    img1,
    img2,
    img3,
    img4,
    img5,
    pay_btn
  );
  main_div.append(card_details);
});

let cod = document.querySelector(".COD");
cod.addEventListener("click", function () {
  setTimeout(function () {
    window.location.href = "https://healthkart-clone.herokuapp.com/sucess";
  }, 2000);
});
