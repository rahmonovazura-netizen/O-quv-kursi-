const menuBtn = document.getElementById('menuBtn');
const navbar = document.getElementById('navbar');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navbar.classList.toggle('active');
});

// Mobil menyudagi link bosilganda menyuni yopish
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navbar.classList.remove('active');
    });
});