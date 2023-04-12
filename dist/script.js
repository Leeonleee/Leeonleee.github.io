// function toggle_dark_mode() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//  }

// function toggle_dark_mode() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//     if (element.classList.contains("dark-mode")) {
//       sessionStorage.setItem("darkModeEnabled", "true");
//     } else {
//       sessionStorage.removeItem("darkModeEnabled");
//     }
//   }
  

function toggle_dark_mode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if (element.classList.contains("dark-mode")) {
      localStorage.setItem("darkModeEnabled", "true");
    } else {
      localStorage.removeItem("darkModeEnabled");
    }
  }
  
  


  document.addEventListener("DOMContentLoaded", function() {
    var element = document.body;
    var dark_mode_query = localStorage.getItem("darkModeEnabled") === "true" ? "?darkModeEnabled=true" : "";
    if (dark_mode_query !== "") {
      element.classList.add("dark-mode");
    }
    document.querySelectorAll("nav a").forEach(function(link) {
      link.href += dark_mode_query;
    });
  });
  
  