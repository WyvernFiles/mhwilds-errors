/* ===== Sidebar Searchbar ===== */

export function filterErrors() {
  const searchBar = document.getElementById("searchBar");
  searchBar.addEventListener("input", filterErrors);

  const input = document.getElementById("searchBar").value.toLowerCase();
  const list = document.getElementById("errorList");
  const items = list.getElementsByTagName("li");

  for (let i = 0; i < items.length; i++) {
    const text = items[i].textContent.toLowerCase();
    if (text.includes(input)) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
}
