const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';

    /*
    if (isOpen) {
    toggleBtnIcon.classList = 'fa-solid fa-xmark';
    } else {
        toggleBtnIcon.classList = 'fa-solid fa-bars';
    }
    */
};


// Get all links in the navigation bar
const navLinks = document.querySelectorAll('.links a');

// Function to set the active link based on the current URL
function setActiveLink() {
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Get all links in the dropdown navigation bar
const dropdownLinks = document.querySelectorAll('.dropdown_ul a');

// Function to set the active link based on the current URL
function setActiveLinkdropdownmenu() {
    dropdownLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Call the function to set the active link on page load
setActiveLink();
setActiveLinkdropdownmenu();