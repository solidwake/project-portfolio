const sections = document.querySelectorAll('.section');
const controls = document.querySelectorAll('.controls');
const sectionButtons = document.querySelectorAll('.control');
const body = document.querySelector('.main-content');


function activePage() {
    //Changes 'active-btn' class when clicked
    for (let i = 0; i < sectionButtons.length; i++) {
        sectionButtons[i].addEventListener('click', function() {
            let currentButton = document.querySelectorAll('.active-btn');
            currentButton[0].className = currentButton[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
}

activePage();