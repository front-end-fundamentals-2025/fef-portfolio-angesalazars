/* The next 4 code lines were taken from the youtube video https://youtu.be/Kxv7GIDK9tg?si=EFAqZ8Zwnn9W9mQ0 */

const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
})
