const menuBtn = document.querySelector(".menu__icon");

menuBtn.addEventListener("click", function () {
  this.querySelector(".close").classList.toggle("hidden");
  document.querySelector(".nav").classList.toggle("active");
  this.querySelector(".open").classList.toggle("hidden");
});
