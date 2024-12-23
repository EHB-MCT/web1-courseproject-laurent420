document.querySelector(".hamburger").addEventListener("click", function () {
  const navList = document.querySelector(".nav-list");
  navList.classList.toggle("active"); // Gebruik hier "active" in plaats van "open"
});
