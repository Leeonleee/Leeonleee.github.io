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
    var url = new URL(window.location.href);
    if (element.classList.contains("dark-mode")) {
      url.searchParams.set("darkModeEnabled", "true");
    } else {
      url.searchParams.delete("darkModeEnabled");
    }
    window.history.replaceState(null, "", url);
  }
  


document.addEventListener("DOMContentLoaded", function() {
    var element = document.body;
    var url = new URL(window.location.href);
    if (url.searchParams.get("darkModeEnabled") === "true") {
        element.classList.add("dark-mode");
    } else {
        element.classList.remove("dark-mode");
    }
});
  