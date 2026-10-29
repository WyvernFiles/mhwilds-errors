/* ===== Sidebar Creation ===== */

export function buildSidebar() {
  const errors = [
    {
      label: "Fatal D3D error",
      file: "/errors/graphics/fatal-d3d-error-dxgi-device-removed.html",
    },
    {
      label: "0x140000000 + 0xa4d69d0",
      file: "/errors/unknown/unhandled-exception-0x140000000-0xa4d69d0.html",
    },
    {
      label: "R31A6-0-0:3 / R35A6-0-0:3 / S9041-TAD-W72T",
      file: "/errors/networking/general-connectivity-r31a6003-r35a6003-s9041-tad-w72t.html",
    },
    {
      label: "R1152-TAD-W79J:10001",
      file: "/errors/networking/firewall-r1152-tad-w79j-10001.html",
    },
    {
      label: "R1141-TAD-W72T:10001",
      file: "/errors/networking/russian-connectivity-r1141-tad-w72t-10001.html",
    },
  ];

  const errorList = document.getElementById("errorList");

  for (const error of errors) {
    const item = document.createElement("li");
    const link = document.createElement("a");

    link.href = error.file;
    link.textContent = error.label;

    item.appendChild(link);
    errorList.appendChild(item);
  }
}
