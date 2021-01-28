import './style.css';
import { home } from './modules/home';
import { menu } from './modules/menu';
import { contact } from './modules/contact';

function loadPage() {
    const body = document.querySelector('body')

    const header = document.createElement('header')
    body.appendChild(header)

    const bg = document.querySelector('#background')
    const content = document.createElement('div')
    content.id = 'content'
    bg.appendChild(content)

    const headerWrapper = document.createElement('div')
    headerWrapper.id = 'header-content-wrapper'
    header.appendChild(headerWrapper)

    const headerTitle = document.createElement('p')
    headerTitle.id = 'header-title'
    headerTitle.textContent = "Billy Bob's Burger Bar"
    headerWrapper.appendChild(headerTitle)

    const navbar = document.createElement('nav')
    navbar.id = 'tabs'
    headerWrapper.appendChild(navbar)

    const homeTab = document.createElement('a')
    homeTab.id = 'home'
    homeTab.textContent = 'Home'
    homeTab.href = '#'
    homeTab.classList.add('active')

    const menuTab = document.createElement('a')
    menuTab.id = 'menu'
    menuTab.textContent = 'Menu'
    menuTab.href = '#'
    
    const contactTab = document.createElement('a')
    contactTab.id = 'contact'
    contactTab.textContent = 'Contact Us'
    contactTab.href = '#'

    homeTab.addEventListener('click', function() {
        homeTab.classList.add('active')
        menuTab.classList.remove('active')
        contactTab.classList.remove('active')
        clearContent(content)
        home()
    })

    menuTab.addEventListener('click', function() {
        homeTab.classList.remove('active')
        menuTab.classList.add('active')
        contactTab.classList.remove('active')
        clearContent(content)
        menu()
    })

    contactTab.addEventListener('click', function() {
        homeTab.classList.remove('active')
        menuTab.classList.remove('active')
        contactTab.classList.add('active')
        clearContent(content)
        contact()
    })

    navbar.appendChild(homeTab)
    navbar.appendChild(menuTab)
    navbar.appendChild(contactTab)

    home()
}

function clearContent(element) { 
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
}

loadPage();