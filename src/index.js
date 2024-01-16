import createMain from "./modules/page-load"
import addAbout from "./modules/about"
import addMenu from "./modules/menu"
import addContact from "./modules/contact"

createMain()



function createButtons() {
    const aboutButton = document.querySelector('.about-button')
    const menuButton = document.querySelector('.menu-button')
    const contactButton = document.querySelector('.contact-button')

    aboutButton.addEventListener('click', displayAbout)
    menuButton.addEventListener('click', displayMenu)
    contactButton.addEventListener('click', displayContact)
}

function displayAbout() {
    addAbout()
}

function displayMenu() {
    addMenu()
}

function displayContact() {
    addContact()
}

createButtons()