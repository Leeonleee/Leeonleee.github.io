const modeLogo = document.getElementById("mode-switch");

function switchMode(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("page-mode", "dark");
        modeLogo.innerHTML = "☀";
        }
        else {
        document.documentElement.setAttribute("page-mode", "light");
        modeLogo.innerHTML = "☾"
        }
    }

document.getElementById("checkbox").addEventListener("change", switchMode, false);