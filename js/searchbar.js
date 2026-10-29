/* ===== Sidebar Searchbar ===== */

export function filterErrors() {
  let input = document.getElementById("searchBar").value.toLowerCase();
  let list = document.getElementById("errorList");
  let items = list.getElementsByTagName("li");

  for (let i = 0; i < items.length; i++) {
    let text = items[i].textContent.toLowerCase();
    if (text.includes(input)) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
}
