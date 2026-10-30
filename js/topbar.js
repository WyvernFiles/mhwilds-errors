export function buildTopbar() {
  const elements = [
    { label: "Home", File: "/" },
    { label: "About", File: "/topbar/about.html" },
    { label: "Resources", File: "/topbar/resources.html" },
  ];

  const topbar = document.querySelector(".topbar");

  for (const element of elements) {
    const link = document.createElement("a");

    link.href = element.File;
    link.textContent = element.label;
    link.classList.add("nav-btn");

    if (link.pathname === window.location.pathname) {
      link.classList.add("active");
    }

    topbar.insertBefore(link, document.getElementById("themeToggle"));
  }
}
