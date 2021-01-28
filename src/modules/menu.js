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

    const menuPanelWrapper = document.createElement('div')
    menuPanelWrapper.classList.add('content-panel-wrapper')
    content.appendChild(menuPanelWrapper)

    const menuPanel = document.createElement('div')
    menuPanel.classList.add('content-panel')
    menuPanel.id = 'menu-panel'
    menuPanelWrapper.appendChild(menuPanel)

    generateBurgers(menuPanel)
}

const burgers = [
    'bacon',
    'cheese',
    'chicken',
    'cute',
    'monster',
    'steak',
    'veggie'
]

function generateBurgers(parent) {
    for (let item in burgers) {
        const burg = document.createElement('div')
        burg.classList.add('content-panel')
        burg.classList.add('image')
        burg.id = `${burgers[item]}`
        parent.appendChild(burg)
    }
}

export {menu}