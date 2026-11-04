/* ===== Sidebar Searchbar ===== */

export function setupSearch() {
  const search = document.getElementById("searchBar");
  const list = document.getElementById("errorList");
  search.addEventListener("input", () => {
    const term = search.value.toLowerCase();
    [...list.children].forEach((i) => {
      i.style.display = i.textContent.toLowerCase().includes(term)
        ? ""
        : "none";
    });
  });
}
