const app = document.querySelector('.app');
const menu = document.querySelector('.menu');
const backdrop = document.querySelector('.menu-backdrop');
const menuToggle = document.querySelector('.menu-toggle');

function isMobileLayout() {
    return window.matchMedia('(max-width: 768px)').matches;
}

function setMenuOpen(open) {
    app.classList.toggle('menu-open', open);
    if (backdrop) backdrop.hidden = !open;
}

function toggleDesktopMenu() {
    app.classList.toggle('hide-menu');
}

document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.altKey && e.code === 'KeyS') {
        e.preventDefault();
        if (isMobileLayout()) {
            setMenuOpen(!app.classList.contains('menu-open'));
        } else {
            toggleDesktopMenu();
        }
    }
});

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        setMenuOpen(!app.classList.contains('menu-open'));
    });
}

if (backdrop) {
    backdrop.addEventListener('click', () => setMenuOpen(false));
}

function checkActiveMenuItem(name) {
    const currentDisplay = document.querySelector('.display');
    currentDisplay.setAttribute('data-display', name);

    document.querySelectorAll('.menu-item').forEach(item => {
        const id = item.getAttribute('data-display-checker');
        const on = id === name;
        item.classList.toggle('active', on);
        item.classList.toggle('inactive', !on);
        item.parentElement.querySelector('ion-icon')?.setAttribute(
            'name',
            on ? 'ellipse' : 'ellipse-outline'
        );
    });

    const chat = document.getElementById('chat');
    const about = document.getElementById('about');

    chat.hidden = name !== 'chat';
    about.hidden = name !== 'about';
    chat.style.display = '';
    about.style.display = '';

    if (isMobileLayout()) {
        setMenuOpen(false);
    }
}

checkActiveMenuItem('about');
