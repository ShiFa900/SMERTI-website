const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  // memberikan efek pada menu, saat dipilih, maka akan menampilkan menu list
  headerEl.classList.toggle("nav-open");
});
