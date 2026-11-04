export function buildTopbar() {
  const links = [
    { label: "Home", file: "/" },
    { label: "About", file: "/topbar/about/" },
    { label: "Resources", file: "/topbar/resources/" },
  ];

  const topbar = document.querySelector(".topbar");
  const normalizePath = (path) => path.replace(/\/+$/, "");
  const currentPath = normalizePath(window.location.pathname);

  for (const item of links) {
    const link = document.createElement("a");

    link.href = item.file;
    link.textContent = item.label;
    link.classList.add("nav-btn");

    if (normalizePath(link.pathname) === currentPath) {
      link.classList.add("active");
    }
    topbar.insertBefore(link, document.getElementById("themeToggle"));
  }
}
