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
    if (new URL(element.File, window.location.origin).pathname === currentPath) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
    }
    topbar.insertBefore(link, document.getElementById("themeToggle"));
    
}