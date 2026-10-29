export function buildTopbar() {
  const elements = [
    { label: "Home", File: "/" },
    { label: "About", File: "/topbar/about.html" },
    { label: "Resources", File: "/topbar/resources.html" },
  ];

  const topbar = document.querySelector(".topbar");
  const currentPath = window.location.pathname;

  for (const element of elements) {
    const link = document.createElement("a");

    link.href = element.File;
    link.textContent = element.label;
    link.classList.add("nav-btn");

    topbar.insertBefore(link, document.getElementById("themeToggle"));
  }
}
