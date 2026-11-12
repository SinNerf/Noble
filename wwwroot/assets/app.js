var app =document.querySelector('.app');
var menu = document.querySelector('.menu');
var showButton = document.querySelector('.show');

function modMenu() 
{
    app.classList.toggle('menu-collapsed');
    
    if (app.classList.contains('menu-collapsed')) {
        menu.style = 'display: none;';
        showButton.hidden = false;
    } else {
        menu.style = 'display: block;';
        showButton.hidden = true;
    }
}