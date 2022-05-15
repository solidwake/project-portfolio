const sections = document.querySelectorAll('.section');
const controls = document.querySelectorAll('.controls');
const sectionButtons = document.querySelectorAll('.control');
const body = document.querySelector('.main-content');


function activePage() {
    //Changes the 'active-btn' class when clicked
    for (let i = 0; i < sectionButtons.length; i++) {
        sectionButtons[i].addEventListener('click', function() {
            let currentButton = document.querySelectorAll('.active-btn');
            currentButton[0].className = currentButton[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
    //Active section
    body.addEventListener('click', (event) => {
        const id = event.target.dataset.id;
        if(id) {
            //Adds the 'active' class to the section
            sectionButtons.forEach((button) => {
                button.classList.remove('active')
            })
            event.target.classList.add('active')
            //Hides the other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

activePage();