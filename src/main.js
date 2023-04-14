import "./style.css";
const btn = document.querySelector(".toggle-btn");
// Lav variablen "menu", der henviser til ".main-menu"
// Variabel "menu", der henviser til ".main-menu"
const menu = document.querySelector(".main-menu");

// Lav funktionen "toggleMenu()" med følgende funktionalitet
// Funktionen "toggleMenu()" laves med følgende funktionalitet a, b, c
function toggleMenu() {
  // a) toggle klassen "shown" på menu vha. classList.toggle
  // gør at den fjerne og forsvinder menuen ved at toggle klassen "shown" på menu
  menu.classList.toggle("shown");

  // b) lav variablen "menuShown", som siger, at menu-variablen indeholder klassen "shown" via classList.contains("")
  // b) Laver variablen "menuShown", som siger, at menu-variablen indeholder klassen "shown" via classList.contains("")
  const menuShown = menu.classList.contains("shown");

  // c) spørg om "menuShown" i if-sætningen nedenfor (=> if (menuShown)), og udskift teksten
  // c) spørger om "menuShown" og udskifter teksten via toggle-btn.

  if (menuShown) {
    btn.innerHTML = '<img src="img/kryds.svg" alt="Close icon" style="width: 50px; height:50px";>';
  } else {
    btn.innerHTML = '<img src="img/menu.svg" alt="Menu icon" style="width: 50px; height:50px">';
  }
}

// "toggleMenu()" slutter her

// Tilføjer et klik-event til "btn", der sætter toggleMenu-funktionen i gang
btn.addEventListener("click", toggleMenu);
