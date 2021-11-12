var customerSupport = document.getElementById("customer-head");
var customerBody = document.getElementById("customer-body");
customerSupport.addEventListener("mouseover", function () {
  customerBody.style.display = "inline";
});

customerSupport.addEventListener("mouseout", function () {
  customerBody.style.display = "none";
});

customerBody.addEventListener("mouseover", function () {
  customerBody.style.display = "inline";
});

customerBody.addEventListener("mouseout", function () {
  customerBody.style.display = "none";
});

var accountSupport = document.getElementById("account-head");
var accountBody = document.getElementById("account-body");
accountSupport.addEventListener("mouseover", function () {
  accountBody.style.display = "inline";
});

accountSupport.addEventListener("mouseout", function () {
  accountBody.style.display = "none";
});

accountBody.addEventListener("mouseover", function () {
  accountBody.style.display = "inline";
});

accountBody.addEventListener("mouseout", function () {
  accountBody.style.display = "none";
});

var genderSupport = document.getElementById("gender-head");
var genderBody = document.getElementById("gender-body");
genderSupport.addEventListener("mouseover", function () {
  genderBody.style.display = "inline";
});

genderSupport.addEventListener("mouseout", function () {
  genderBody.style.display = "none";
});

genderBody.addEventListener("mouseover", function () {
  genderBody.style.display = "inline";
});

genderBody.addEventListener("mouseout", function () {
  genderBody.style.display = "none";
});

var goalSupport = document.getElementById("goal-head");
var goalBody = document.getElementById("goal-body");
goalSupport.addEventListener("mouseover", function () {
  goalBody.style.display = "inline";
});

goalSupport.addEventListener("mouseout", function () {
  goalBody.style.display = "none";
});

goalBody.addEventListener("mouseover", function () {
  goalBody.style.display = "inline";
});

goalBody.addEventListener("mouseout", function () {
  goalBody.style.display = "none";
});

var dealsSupport = document.getElementById("deals-head");
var dealsBody = document.getElementById("deals-body");
dealsSupport.addEventListener("mouseover", function () {
  dealsBody.style.display = "inline";
});

dealsSupport.addEventListener("mouseout", function () {
  dealsBody.style.display = "none";
});

dealsBody.addEventListener("mouseover", function () {
  dealsBody.style.display = "inline";
});

dealsBody.addEventListener("mouseout", function () {
  dealsBody.style.display = "none";
});

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("second_nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
function login() {
  window.location.href = "http://localhost:3452/login";
}
function signup() {
  window.open("http://localhost:3452/signup");
}
var suggest_div = document.getElementById("suggest");
var timerId;






async function searchMovies() {
  let querryy = document.getElementById("search-inp").value;
  if (querryy.length <= 0) {
    return false;
  } else {
  let res = await fetch(`http://localhost:3452/users/${querryy}`);
  let data = await res.json();

  return data;
   }
}
function autosuggest() {
  if (timerId) {
    return false;
  }

  timerId = setTimeout(() => {
    main();
    timerId = undefined;
  }, 1000);
}
function appendMovies(d) {
  
  suggest_div.innerHTML = null;
  
  let print_div = document.createElement("div");
  print_div.classList="suggest-box"
  d.forEach(({ name }) => {
    let search_div = document.createElement("div");
    search_div.addEventListener("click",()=>{
      window.location.href="https://google.com"
    })
    let p = document.createElement("span");
    p.innerText = name;   
    search_div.append(p);
    print_div.append(search_div);
    suggest_div.append(print_div);
  });
}

async function main() {
  let moviess = await searchMovies();
  appendMovies(moviess);
}
