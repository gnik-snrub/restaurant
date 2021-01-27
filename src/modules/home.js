function home() {
    const content = document.querySelector('#content')

    const homeContainer = document.createElement('main')
    homeContainer.id = 'homepage'
    content.appendChild(homeContainer)

    const pageContent = document.createElement('div')
    pageContent.classList.add('tab-content')
    homeContainer.appendChild(pageContent)

    const messageWrapper = document.createElement('div')
    messageWrapper.classList.add('page-message-wrapper')
    pageContent.appendChild(messageWrapper)

    const message = document.createElement('h2')
    message.classList.add('page-message')
    message.textContent = "The burgers are better at Billy Bob's Burger Bar"
    messageWrapper.appendChild(message)
}

export {home}