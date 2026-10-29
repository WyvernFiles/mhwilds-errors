import { buildTopbar } from "./topbar.js";
import { buildSidebar } from "./sidebar.js";
import { filterErrors } from "./searchbar.js";
import { initializeTheme } from "./themetoggle.js";

buildTopbar();

buildSidebar();

document.getElementById("searchBar").addEventListener("input", filterErrors);

initializeTheme();
