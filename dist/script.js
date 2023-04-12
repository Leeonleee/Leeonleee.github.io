
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
  

  

  