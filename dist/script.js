// function toggle_dark_mode() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//  }


function toggle_dark_mode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if (element.classList.contains("dark-mode")) {
        localStorage.setItem("darkModeEnabled", "true");
    } else {
        localStorage.removeItem("darkModeEnabled");
    }
}
  