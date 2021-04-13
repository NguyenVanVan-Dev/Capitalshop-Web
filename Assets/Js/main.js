

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop + 200;


function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
   
  } else {
    navbar.classList.remove("sticky");
  }
}

// tab-menu product
function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("product__tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("menu-product-tab-link");
 
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active_tab", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.classList.add("active_tab") ;
  
}
