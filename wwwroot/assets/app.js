var app =document.querySelector('.app');
var menu = document.querySelector('.menu');

document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.altKey && e.code === "KeyS") {
        e.preventDefault();
        app.classList.toggle('hide-menu');

        if (!app.classList.contains('hide-menu')) {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        }
    }
});

function checkActiveMenuItem(name) {
    const currentDisplay = document.querySelector('.display');
    currentDisplay.setAttribute('data-display', name);
    document.querySelectorAll('.menu-item').forEach(item => {
        const id = item.getAttribute('data-display-checker');
        const on = id === name;
        item.classList.toggle('active', on);
        item.classList.toggle('inactive', !on);
        item.parentElement.querySelector('ion-icon')?.setAttribute('name', on ? 'ellipse' : 'ellipse-outline');
    });

    const chat = document.getElementById('chat');
    const about = document.getElementById('about');

    chat.hidden = name !== 'chat';
    about.hidden = name !== 'about';

    chat.style.display = '';
    about.style.display = '';
}

checkActiveMenuItem('about');