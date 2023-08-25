const menuButton = document.querySelector('.menuBtn');
const sidebar = document.querySelector('#side-bar');

function showNav() {
    sidebar.classList.toggle('show');
    sidebar.style.transition = 'all 0.3s ease-out 0s';
}
