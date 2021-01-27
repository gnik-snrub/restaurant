import './style.css';

function loadPage() {
    const body = document.querySelector('body')
    const header = document.createElement('header')

    const headerWrapper = document.createElement('div')
    headerWrapper.id = 'header-content-wrapper'

    const headerTitle = document.createElement('p')
    headerTitle.id = 'header-title'
    headerTitle.textContent = "Billy Bob's Burger Bar"
    headerWrapper.appendChild(headerTitle)

    const navbar = document.createElement('nav')
    navbar.id = 'tabs'

    const homeTab = document.createElement('a')
    homeTab.id = 'home'
    homeTab.textContent = 'Home'
    homeTab.href = '#'
    navbar.appendChild(homeTab)

    const menuTab = document.createElement('a')
    menuTab.id = 'menu'
    menuTab.textContent = 'Menu'
    menuTab.href = '#'
    navbar.appendChild(menuTab)
    
    const contactTab = document.createElement('a')
    contactTab.id = 'contact'
    contactTab.textContent = 'Contact Us'
    contactTab.href = '#'
    navbar.appendChild(contactTab)
    headerWrapper.appendChild(navbar)

    header.appendChild(headerWrapper)
    body.appendChild(header)
}

loadPage();