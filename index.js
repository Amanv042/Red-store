"ise strict";
let ul = document.querySelector(".navbar .nav ul ");
let menuOpen = document.querySelector(".navbar .nav .fa-bars");

// menuOpen.addEventListener("click", function () {
//   ul.classList.add("NAV");
//   //   let NAV = ul;
let NAV = ul;
//   ul.style.display = "flex";
//   //   let closeMenu = document.querySelector(".navbar .nav .fa-bars");
//   //   menuOpen.className = "fa-solid fa-xmark";
//   //   menuOpen.setAttribute("class", "fa-solid fa-xmark");
//   //   menuOpen.addEventListener("click", function () {
//   //     ul.style.display = "none";
//   //     menuOpen.className = "fa-solid fa-bars";
//   //   });
// });
menuOpen.onclick = function () {
  if (ul.style.display == "flex") {
    ul.style.display = "none";
  } else {
    ul.style.display = "flex";
    // ul.classList.add("NAV");
  }
};
