const toggleButton = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav');

toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});