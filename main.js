/* ===== Theme ===== */


      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "light" || savedTheme === "dark") {
        document.documentElement.setAttribute("data-theme", savedTheme);
      }

      function toggleTheme() {
            const html = document.documentElement;
            const button = document.getElementById("themeToggle");

            if (html.getAttribute("data-theme") === "light") {
              html.setAttribute("data-theme", "dark");
              button.textContent =
                html.getAttribute("data-theme") === "light" ? "☾" : "☀";
              localStorage.setItem("theme", html.getAttribute("data-theme"));
            } else {
              html.setAttribute("data-theme", "light");
              button.textContent =
                html.getAttribute("data-theme") === "light" ? "☾" : "☀";
              localStorage.setItem("theme", html.getAttribute("data-theme"));
            }
          }
          const themeButton = document.getElementById("themeToggle");
          themeButton.textContent =
            document.documentElement.getAttribute("data-theme") === "light"
              ? "☾"
              : "☀";
          document
            .getElementById("themeToggle")
            .addEventListener("click", toggleTheme);
    

/* ===== Sidebar bar===== */

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
          
          