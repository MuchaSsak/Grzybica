// !!! BRAIN DAMAGE WARNING: VERY BAD & LAZY CODE !!! //

// Resets
const copiedClipboardMsg = document.getElementById("copied-clipboard-msg");
copiedClipboardMsg.style.display = "none";

// Hamburger button & navbar menu
const navbarMenu = document.querySelector("#navbar-menu");
const hamburgerBtn = document.getElementById("hamburger-btn");

hamburgerBtn.onclick = () => {
   hamburgerBtn.classList.toggle("toggled");
   navbarMenu.classList.toggle("showNavbar");
};

// Grzybica logo reload window on click
document.getElementById("grzybica-logo-1").addEventListener("click", () => {
   location.reload();
   document.location.href = "/Grzybica/index.html";
});
document.getElementById("grzybica-logo-2").addEventListener("click", () => {
   location.reload();
   document.location.href = "/Grzybica/index.html";
});

// Social media buttons links
document.getElementById("github-icon").addEventListener("click", () => {
   window.open("https://github.com/MuchaSsak?tab=repositories", "_blank");
});

document.getElementById("discord-icon").addEventListener("click", () => {
   navigator.clipboard.writeText("Mucha#8047");
   copiedClipboardMsg.style.display = "block";
   // Make the message disappear after 3 seconds
   setTimeout(() => {
      copiedClipboardMsg.style.display = "none";
   }, 3000);
});

document.getElementById("steam-icon").addEventListener("click", () => {
   window.open(
      "https://steamcommunity.com/profiles/76561198414073821/",
      "_blank"
   );
});

// Expand btn
const expandBtn = document.getElementById("expand-btn");
const expandBtnContainer = document.getElementById("expand-btn-container");
const expandParagraph = document.getElementById("expand-paragraph");
// Import paragraph text
import { hiddenTxt, expandTxt } from "./history_paragraph_txt.js";

// Changing the button's text and the paragraph's text content
expandBtnContainer.addEventListener("click", () => {
   // Fix the scroll
   location.href = "#history-section";
   // Expand the text
   if (expandBtn.textContent == "Expand") {
      expandParagraph.innerHTML = expandTxt;
      expandBtn.textContent = "Hide";
   }
   // Hide the text
   else {
      expandParagraph.innerHTML = hiddenTxt;
      expandBtn.textContent = "Expand";
      location.href = "#about-section";
      location.href = "#history-section";
   }
});

// Scroll buttons
const infoScrollBtn1 = document.getElementById("info-scroll-btn-1");
const infoScrollBtn2 = document.getElementById("info-scroll-btn-2");

const heroDownloadScrollBtn = document.getElementById(
   "hero-download-scroll-btn"
);

const navbarMenuAboutScrollBtn = document.getElementById(
   "navbar-menu-about-scroll-btn"
);
const navbarMenuHistoryScrollBtn = document.getElementById(
   "navbar-menu-history-scroll-btn"
);
const navbarMenuDownloadScrollBtn = document.getElementById(
   "navbar-menu-download-scroll-btn"
);

infoScrollBtn1.addEventListener("click", () => {
   location.href = "#history-section";
});
infoScrollBtn2.addEventListener("click", () => {
   location.href = "#history-section";
});

heroDownloadScrollBtn.addEventListener("click", () => {
   location.href = "#download-section";
});

navbarMenuAboutScrollBtn.addEventListener("click", () => {
   location.href = "#about-section";
   navbarMenu.classList.toggle("showNavbar");
});
navbarMenuHistoryScrollBtn.addEventListener("click", () => {
   location.href = "#history-section";
   navbarMenu.classList.toggle("showNavbar");
});
navbarMenuDownloadScrollBtn.addEventListener("click", () => {
   location.href = "#download-section";
   navbarMenu.classList.toggle("showNavbar");
});
