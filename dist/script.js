
function toggle_dark_mode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var image = document.getElementById("dark_mode_toggle");
    if (element.classList.contains("dark-mode")) {
      localStorage.setItem("darkModeEnabled", "true");
      image.src = "/images/moon.png";
    } else {
      localStorage.removeItem("darkModeEnabled");
      image.src = "/images/sun.png";
    }
  }
  
  


  document.addEventListener("DOMContentLoaded", function() {
    var element = document.body;
    var dark_mode_query = localStorage.getItem("darkModeEnabled") === "true" ? "?darkModeEnabled=true" : "";
    var image = document.getElementById("dark_mode_toggle");
    if (dark_mode_query !== "") {
      element.classList.add("dark-mode");
      image.src = "/images/moon.png";

    }
    document.querySelectorAll("nav a:not([onclick])").forEach(function(link) {
        link.href += dark_mode_query;
      });      
  });
  

  
// Animation when loading site
window.onload = function() {
  var leftElements = document.getElementsByClassName("animate-left");
  for (var i = 0; i < leftElements.length; i++) {
    leftElements[i].style.opacity = "1";
    leftElements[i].style.transform = "translateX(0)";
  }

  var rightElements = document.getElementsByClassName("animate-right");
  for (var i = 0; i < rightElements.length; i++) {
    rightElements[i].style.opacity = "1";
    rightElements[i].style.transform = "translateX(0)";
  }

  var topElements = document.getElementsByClassName("animate-top");
  for (var i = 0; i < topElements.length; i++) {
    topElements[i].style.opacity = "1";
    topElements[i].style.transform = "translateY(0)";
  }

  var bottomElements = document.getElementsByClassName("animate-bottom");
  for (var i = 0; i < bottomElements.length; i++) {
    bottomElements[i].style.opacity = "1";
    bottomElements[i].style.transform = "translateY(0)";
  }
};
