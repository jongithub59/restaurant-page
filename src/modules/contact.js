function createContact() {
    const contact = document.createElement('div')
    contact.classList.add('contact')

    const contactHeader = document.createElement('h1')
    contactHeader.textContent = 'Contact Information'
    contact.appendChild(contactHeader)

    const ul = document.createElement('ul')

    const phoneHeader = document.createElement('h2')
    const phoneNumber = document.createElement('li')
    const locationHeader = document.createElement('h2')
    const address = document.createElement('li')
    phoneHeader.textContent = 'Phone'
    phoneNumber.textContent = '+81 (03) 596-2476'
    locationHeader.textContent = 'Location'
    address.textContent = '梅沢ビル, B1 11-10, Kamiyamacho, Shibuya City, Tokyo 150-0047, Japan'

    ul.appendChild(phoneHeader)
    ul.appendChild(phoneNumber)
    ul.appendChild(locationHeader)
    ul.appendChild(address)
    contact.appendChild(ul)

    const img = document.createElement('img')
    img.classList.add('address')
    img.src = 'pics/address.JPG'
    img.alt = 'Map of where the restaurant is'

    contact.appendChild(img)

    return contact
}

export default createContact