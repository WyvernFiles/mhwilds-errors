/* ===== Sidebar Creation ===== */

export function buildSidebar() {
  const errors = [
    {
      label: "Fatal D3D error",
      file: "/errors/graphics/fatal-d3d-error-dxgi-device-removed/",
    },
    {
      label: "0x140000000 + 0xa4d69d0",
      file: "/errors/unknown/unhandled-exception-0x140000000-0xa4d69d0/",
    },
    {
      label: "R31A6-0-0:3 / R35A6-0-0:3 / S9041-TAD-W72T",
      file: "/errors/networking/general-connectivity-r31a6003-r35a6003-s9041-tad-w72t/",
    },
    {
      label: "R1152-TAD-W79J:10001",
      file: "/errors/networking/firewall-r1152-tad-w79j-10001/",
    },
    {
      label: "R1141-TAD-W72T:10001",
      file: "/errors/networking/russian-connectivity-r1141-tad-w72t-10001/",
    },
    {
      label: "Mod-Related Issues",
      file: "/errors/mods/mod-related-issues/",
    },
  ];

  const errorList = document.getElementById("errorList");
  const normalizePath = (path) => path.replace(/\/+$/, "");
  const currentPath = normalizePath(window.location.pathname);
  for (const error of errors) {
    const item = document.createElement("li");
    const link = document.createElement("a");

    link.href = error.file;
    link.textContent = error.label;

    if (normalizePath(link.pathname) === currentPath) {
      item.classList.add("active");
    }

    item.appendChild(link);
    errorList.appendChild(item);
  }
}
