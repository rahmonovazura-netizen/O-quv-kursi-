document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const navbar = document.getElementById("navbar");

  if (menuBtn && navbar) {
    // Hambuger tugmasini bosganda menyuni ochish / yopish
    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      navbar.classList.toggle("active");
    });

    // Menyudagi istalgan link bosilganda menyuni avotmatik yopish
    document.querySelectorAll(".navbar a").forEach((link) => {
      link.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navbar.classList.remove("active");
      });
    });
  }
});
