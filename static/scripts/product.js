const whey = [
    {
      name: "MuscleBlaze Biozyme Performance Whey- 4.4 lb Chocolate Hazelnut",
      rating: 4.6,
      price: 3699,
      discount: 4949,
      photo:
        "https://img2.hkrtcdn.com/14637/prd_1463611-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Chocolate-Hazelnut_c_s.jpg",
    },
    {
      name: "MuscleBlaze Biozyme Performance Whey- 4.4 lb Rich Chocolate",
      rating: 4.6,
      price: 3699,
      discount: 4949,
      photo:
        "https://img2.hkrtcdn.com/14637/prd_1463611-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Chocolate-Hazelnut_c_s.jpg",
    },
    {
      name: "Ultimate Nutrition Prostar 100% Whey Protein- 5.28 lb Chocolate...",
      rating: 4.7,
      price: 4698,
      discount: 5999,
      photo: "https://img1.hkrtcdn.com/1691/prd_169080_c_s.jpg",
    },
    {
      name: "MuscleBlaze Whey Gold Protein- 4.4 lb Rich Milk Chocolate",
      rating: 4.5,
      price: 5349,
      discount: 6399,
      photo:
        "https://img2.hkrtcdn.com/12134/prd_1213301-MuscleBlaze-Whey-Gold-Protein-4.4-lb-Rich-Milk-Chocolate_c_s.jpg",
    },
    {
      name: "MuscleBlaze Whey Protein- 4 lb Rich Milk Chocolate",
      rating: 4.4,
      price: 3799,
      discount: 4599,
      photo:
        "https://img6.hkrtcdn.com/12133/prd_1213295-MuscleBlaze-Whey-Protein-4-lb-Rich-Milk-Chocolate_c_s.jpg",
    },
    {
      name: "MuscleBlaze Whey Protein- 4.4 lb Rich Milk Chocolate",
      rating: 4.4,
      price: 4199,
      discount: 5199,
      photo:
        "https://img2.hkrtcdn.com/12133/prd_1213281-MuscleBlaze-Whey-Protein-4.4-lb-Rich-Milk-Chocolate_c_s.jpg",
    },
    {
      name: "MB Fuel One Whey Protein Immunity+- 8.8 lb Chocolate",
      rating: 4.5,
      price: 5499,
      discount: 6999,
      photo:
        "https://img6.hkrtcdn.com/14889/prd_1488805-MB-Fuel-One-Whey-Protein-Immunity-8.8-lb-Chocolate_c_s.jpg",
    },
    {
      name: "MuscleBlaze Biozyme Whey Protein- 4.4 lb Rich Milk Chocolate",
      rating: 4.6,
      price: 4499,
      discount: 5349,
      photo:
        "https://img10.hkrtcdn.com/12134/prd_1213319-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Rich-Milk-Chocolate_c_s.jpg",
    },
    {
      name: "MuscleBlaze Raw Whey Protein- 2.2 lb Unflavoured",
      rating: 4.6,
      price: 1399,
      discount: 1999,
      photo:
        "https://img10.hkrtcdn.com/12133/prd_1213299-MuscleBlaze-Raw-Whey-Protein-2.2-lb-Unflavoured_c_s.jpg",
    },
  ];
  if (localStorage.getItem("whey") == null) {
    localStorage.setItem("whey", JSON.stringify(whey));
  }
  function showProteins(d) {
    let proteins = d;
    let aligItems = document.getElementById("grid-align");
    aligItems.innerHTML = null;
    proteins.forEach(function (el) {
      let items_div = document.createElement("div");
      items_div.setAttribute("class", "items");
      let item_name = document.createElement("p");
      item_name.innerHTML = el.name;
      let items_rating = document.createElement("p");
      items_rating.innerHTML = el.rating;
      let items_price = document.createElement("span");
      items_price.innerHTML = el.price;
      items_price.setAttribute("class", "pricce");
      let items_discount = document.createElement("span");
      items_discount.innerHTML = el.discount;
      items_discount.setAttribute("class", "discount");
      let img = document.createElement("img");
      img.src = el.photo;
      let content_div = document.createElement("div");
      content_div.style.marginLeft = "10px";
      content_div.append(item_name, items_rating, items_price, items_discount);
      items_div.append(img, content_div);
      items_div.addEventListener("mouseover", function () {
        items_div.setAttribute("class", "zoom");
      });
      items_div.addEventListener("mouseout", function () {
        items_div.setAttribute("class", "items");
      });
      aligItems.append(items_div);
    });
  }
  showProteins(JSON.parse(localStorage.getItem("whey")));
  function SortByPrice() {
    let whey = JSON.parse(localStorage.getItem("whey"));
    whey = whey.sort(function (a, b) {
      return a.price - b.price;
    });
    showProteins(whey);
  }
  
  function SortByPriceHL() {
    let whey = JSON.parse(localStorage.getItem("whey"));
    whey = whey.sort(function (a, b) {
      return b.price - a.price;
    });
    showProteins(whey);
  }
  function SortByRating() {
    let whey = JSON.parse(localStorage.getItem("whey"));
    whey = whey.sort(function (a, b) {
      return b.rating - a.rating;
    });
    showProteins(whey);
  }
  function sortByDiscountLtoH() {
    let whey = JSON.parse(localStorage.getItem("whey"));
    whey = whey.sort(function (a, b) {
      return a.discount - b.discount;
    });
    showProteins(whey);
  }
  function sortByDiscountHtoL() {
    let whey = JSON.parse(localStorage.getItem("whey"));
    whey = whey.sort(function (a, b) {
      return b.discount - a.discount;
    });
    showProteins(whey);
  }
  
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  