/* ===== Theme ===== */

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light" || savedTheme === "dark") {
  document.documentElement.setAttribute("data-theme", savedTheme);
}

function toggleTheme() {
  const html = document.documentElement;
  const button = document.getElementById("themeToggle");
  const theme = html.getAttribute("data-theme") === "light" ? "dark" : "light";

  html.setAttribute("data-theme", theme);
  button.textContent = theme === "light" ? "☾" : "☀";
  localStorage.setItem("theme", theme);
}

document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.getElementById("themeToggle");
  themeButton.textContent =
    document.documentElement.getAttribute("data-theme") === "light" ? "☾" : "☀";
  themeButton.addEventListener("click", toggleTheme);
});

/* ===== Sidebar ===== */

function filterErrors() {
            var input = document
              .getElementById("searchBar")
              .value.toLowerCase();
            var list = document.getElementById("errorList");
            var items = list.getElementsByTagName("li");

            for (var i = 0; i < items.length; i++) {
              var text = items[i].textContent.toLowerCase();
              if (text.includes(input)) {
                items[i].style.display = "";
              } else {
                items[i].style.display = "none";
              }
            }
          }
          
          