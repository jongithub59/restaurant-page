import addAbout from "./about"

function createHeader() {
    const header = document.createElement('div')
    header.classList.add('header')
    header.textContent = 'The Hungry Dragon'
    const icon = document.createElement('img')
    icon.id = 'chef'
    icon.src = './pics/icon.png'
    icon.alt = 'Chibi Genji in a chef outfit'
    header.appendChild(icon)
    return header //return statement used here so that we can append this later in a single function with the rest of the main page components, and so only needing to export one function
}

function createNav() {
    const nav = document.createElement('div')
    nav.classList.add('nav')
    const ul = document.createElement('ul')
    const about = document.createElement('li')
    const menu = document.createElement('li')
    const contact = document.createElement('li')
    about.textContent = 'About'
    menu.textContent = 'Menu'
    contact.textContent = 'Contact'
    about.classList.add('about-button')
    menu.classList.add('menu-button')
    contact.classList.add('contact-button')
    ul.appendChild(about)
    ul.appendChild(menu)
    ul.appendChild(contact)
    nav.appendChild(ul)
    return nav
}

function createInfo() { //container that we can wipe the textContent/innerHTML to bring a different module
    const info = document.createElement('div')
    info.classList.add('info')
    return info
}

function createGenji() {
    const genji = document.createElement('div')
    genji.classList.add('genji-image')
    const image = document.createElement('img')
    image.src = './pics/genji chef cropped.png'
    image.alt = 'Genji wearing a chef\'s outfit'

    genji.appendChild(image)
    return genji
}

function createMain() {
    const content = document.getElementById('content')
    const main = document.createElement('div')
    main.classList.add('main')

    content.appendChild(createHeader()) // content returns null if script tag in index.html is in the header; appends whatever was returned
    content.appendChild(main)
    main.appendChild(createNav())
    main.appendChild(createInfo())
    main.appendChild(createGenji())

    addAbout()
}

export default createMain