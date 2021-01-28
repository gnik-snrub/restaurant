function menu() {
    const content = document.querySelector('#content')

    const menuContainer = document.createElement('main')
    menuContainer.id = 'menu'
    content.appendChild(menuContainer)

    const pageContent = document.createElement('div')
    pageContent.classList.add('tab-content')
    menuContainer.appendChild(pageContent)

    const messageWrapper = document.createElement('div')
    messageWrapper.classList.add('page-message-wrapper')
    pageContent.appendChild(messageWrapper)

    const message = document.createElement('h2')
    message.classList.add('page-message')
    message.textContent = "Menu"
    messageWrapper.appendChild(message)

    const menuPanel = document.createElement('div')
    menuPanel.classList.add('content-panel')
    content.appendChild(menuPanel)
}

export {menu}