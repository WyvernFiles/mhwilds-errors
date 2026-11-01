import { buildTopbar } from "./topbar.js";
import { buildSidebar } from "./sidebar.js";
import { setupSearch } from "./searchbar.js";
import { initializeTheme } from "./themetoggle.js";

buildTopbar();

buildSidebar();

setupSearch();

initializeTheme();
