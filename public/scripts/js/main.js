import { buildTopbar } from "/scripts/js/topbar.js";
import { buildSidebar } from "/scripts/js/sidebar.js";
import { setupSearch } from "/scripts/js/searchbar.js";
import { initializeTheme } from "/scripts/js/themetoggle.js";

buildTopbar();

buildSidebar();

setupSearch();

initializeTheme();
