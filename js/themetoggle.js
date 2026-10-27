/* ===== Theme ===== */

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



          