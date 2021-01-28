function contact() {
    const content = document.querySelector('#content')

    const homeContainer = document.createElement('main')
    homeContainer.id = 'homepage'
    content.appendChild(homeContainer)

    const pageContent = document.createElement('div')
    pageContent.classList.add('tab-content')
    homeContainer.appendChild(pageContent)

    const contentWrapper = document.createElement('div')
    contentWrapper.classList.add('page-message-wrapper')
    pageContent.appendChild(contentWrapper)
    
    const contactDetails = document.createElement('h2')
    contactDetails.classList.add('page-message')
    contactDetails.textContent = `Email: contact@billysbur.ger Instagram: Billy Bob's Burgers`
    contentWrapper.appendChild(contactDetails)
}

export {contact}