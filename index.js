const menuDropdown = document.querySelector('.menu-title');
const menuItems = document.querySelector('.menu-items-inactive');


let menuShowing = false;

function updateDropdown () {
    if (!menuShowing) {
        menuItems.className = 'menu-items-inactive';
    } else if (menuShowing) {
        menuItems.className = 'menu-items-active';
    }
}

window.addEventListener('click', (e) => {
    if (e.target.className !== 'menu-title') {
        if (menuShowing) {
            menuShowing = false;
            updateDropdown();
        }
    }
})

menuDropdown.addEventListener('click', () => {
    menuShowing = !menuShowing
    updateDropdown();
})
