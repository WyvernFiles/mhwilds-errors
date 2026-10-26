const elements = [

    { label: "Home", File: "/" },
    { label: "About", File: "/topbar/about.html" },
    { label: "Resources", File: "/topbar/resources.html" },
];

const topbar = document.querySelector(".topbar");
const currentPath = normalizePath(window.location.pathname);

function normalizePath(path) {
    const normalizedPath = path.replace(/\/+$/, "") || "/";
    return normalizedPath === "/index.html" ? "/" : normalizedPath;
}

for (const element of elements) {

    const link = document.createElement("a");

    link.href = element.File;
    link.textContent = element.label;
    link.classList.add("nav-btn");
    if (normalizePath(new URL(element.File, window.location.origin).pathname) === currentPath) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
    }
    topbar.insertBefore(link, document.getElementById("themeToggle"));
    
}