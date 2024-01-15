

function createHeader() {
    const header = document.createElement('div')
    header.classList.add('header')
    header.textContent = 'The Hungry Dragon'
    const icon = document.createElement('img')
    icon.id = 'chef'
    icon.src = './pics/icon.png'
    icon.alt = 'Chibi Genji in a chef outfit'
    header.appendChild(icon)
    console.log(header)
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
    contact.textContent = 'contact'
    ul.appendChild(about)
    ul.appendChild(menu)
    ul.appendChild(contact)
    nav.appendChild(ul)
    return nav
}

function createAbout() {
    const about = document.createElement('div')
    about.classList.add('about')
    const aboutHeader = document.createElement('h2')
    aboutHeader.textContent = 'About'
    const aboutText = document.createElement('p')
    //backticks allow the text be formmattd like this and innerhtml alloes the use of <br> for new lines, this is fine since this is trusted text
    aboutText.innerHTML = ` 
    In the bustling streets of Japan, Genji, the enigmatic cybernetic ninja, has embarked on a new venture that transcends his warrior past. 
    Introducing "The Hungry Dragon", a unique and innovative restaurant that blends the ancient traditions of Japan with futuristic culinary 
    experiences. Nestled in the heart of Genji's homeland, this dining establishment is a testament to his journey of self-discovery and 
    cultural fusion. <br> <br>

    "The Hungry Dragon" exudes an ambiance that seamlessly marries the serenity of traditional Japanese aesthetics with the sleek, 
    cutting-edge design reflective of Genji's cybernetic enhancements. The restaurant offers a diverse menu inspired by both classic Japanese 
    cuisine and modern gastronomic trends. Inspired from his many comrades in his Overwatch days, each dish at 
    The Hungry Dragon tells a tale of tradition meeting innovation. <br> <br>

    Genji, once a fierce warrior, now channels his disciplined focus into the culinary realm. His commitment to excellence is evident in every 
    aspect of the dining experience, from the artfully presented dishes to the personalized service that mirrors the precision of a ninja's 
    movements. The staff, clad in a modern interpretation of traditional ninja attire, adds an element of theatricality to the dining adventure. <br> <br>

    "The Hungry Dragon" has quickly become a sensation, drawing locals and tourists alike who seek a taste of Genji's culinary vision. 
    As patrons savor the flavors of Japan in this cybernetic haven, they not only enjoy a feast for the senses but also witness the evolution 
    of a warrior into a masterful chef. Genji's restaurant symbolizes the harmonious coexistence of tradition and technology, where the legacy 
    of the past meets the possibilities of the future in a delightful celebration of Japanese cuisine. <br> <br>
    `
    about.appendChild(aboutHeader)
    about.appendChild(aboutText)
    return about
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
    main.appendChild(createAbout())
    main.appendChild(createGenji())
}
export default createMain