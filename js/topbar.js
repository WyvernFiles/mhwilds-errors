export function buildTopbar() {
  const links = [
    { label: "Home", file: "/" },
    { label: "About", file: "/topbar/about.html" },
    { label: "Resources", file: "/topbar/resources.html" },
  ];

  const topbar = document.querySelector(".topbar");
  const currentPath = window.location.pathname.replace(/\.html$/, "");

  for (const item of links) {
    const link = document.createElement("a");

    link.href = item.file;
    link.textContent = item.label;
    link.classList.add("nav-btn");

    if (link.pathname.replace(/\.html$/, "") === currentPath) {
      link.classList.add("active");
    }
    topbar.insertBefore(link, document.getElementById("themeToggle"));
  }
}
