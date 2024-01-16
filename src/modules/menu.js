function createMenu() {
    const menu = document.createElement('div')
    menu.classList.add('menu')
    const menuHeader = document.createElement('h2')
    menuHeader.textContent = 'Menu'

    menu.appendChild(menuHeader)

    const ul = document.createElement('ul')

    ul.appendChild(createMenuItem('Rikimaru Ramen'))
    ul.appendChild(createMenuDescription(`Step into the world of cybernetic ninja mastery with the Rikimaru Ramen, 
    a classic favorite of Genji. This ramen dish pays homage to Genji's roots, blending traditional Japanese flavors with a futuristic twist.`))
    
    ul.appendChild(createMenuItem('Tamago Kake Gohan'))
    ul.appendChild(createMenuDescription(`Embark on a culinary journey inspired by the stoic archer and brother of Genji, Hanzo Shimada, with our Tamago Kake Gohan – a dish 
    that captures the essence of tranquility and precision. This traditional Japanese comfort food is elevated to
     mirror the refined tastes favored by the Shimada clan.`))

    ul.appendChild(createMenuItem('Paladin\'s Currywurst Platter'))
    ul.appendChild(createMenuDescription(`Journey into the hearty realm of Reinhardt with our Paladin's Currywurst Platter – a robust and flavorful homage to the valiant knight of Overwatch.
    Immerse yourself in the bold and comforting essence of this German classic, elevated to match the grandeur of Reinhardt's heroic presence.`))

    ul.appendChild(createMenuItem('Tibetan Momos Feast'))
    ul.appendChild(createMenuDescription(`Experience tranquility with our Tibetan Momos Feast, a tribute to the serene wisdom of Zenyatta, the spiritual mentor of Genji. 
    This dish encapsulates the balance and harmony that define Zenyatta's teachings with delicate dumplings filled with a blend of finely minced vegetables.`))

    ul.appendChild(createMenuItem('Outlaw\'s Carne Adovada'))
    ul.appendChild(createMenuDescription(`Saddle up for a bold and fiery adventure with our Carne Adovada, inspired by the rugged cowboy spirit of Cole Cassidy, a close friend of Genji. This dish captures the essence 
    of the wild west with a tantalizing blend of spices, slow-cooked perfection, and a touch of cowboy bravado.`))

    ul.appendChild(createMenuItem('Beat of Bahia Moqueca'))
    ul.appendChild(createMenuDescription(`Immerse yourself in the rhythm of flavor with our Beat of Bahia Moqueca, a culinary masterpiece inspired by the renowned music artist Lucio. 
    This vibrant dish transports you to the sun-kissed shores of Brazil, echoing the infectious energy and harmony that Lucio brings to his music.`))

    ul.appendChild(createMenuItem('Arctic Hearth Roujiamo Buns'))
    ul.appendChild(createMenuDescription(`Step into a world of warmth and flavor with our Roujiamo Pork Buns, a beloved comfort food favored by the brilliant Chinese scientist, Mei. 
    Inspired by the chilly landscapes she navigates, this dish is a fusion of cozy textures and savory delights.`))

    menu.appendChild(ul)

    return menu
}

function createMenuItem(item) { //these two functions simply make creating the several h3 and li elements for menu items a bit shorter and cleaner
    const menuItem = document.createElement('h3')
    menuItem.textContent = item

    
    return menuItem
}

function createMenuDescription(description) {
    const menuDescription = document.createElement('li')
    menuDescription.textContent = description 
    
    return menuDescription
}

function addMenu() {
    const info = document.querySelector('.info')
    info.textContent = ''
    info.appendChild(createMenu())
}

export default addMenu
