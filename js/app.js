/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                        Burger Menu
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const contentHamburger = document.querySelector('#hamburger-content')
const sidebarBodyHamburger = document.querySelector('#hamburger-sidebar-body')
const buttonHamburger = document.querySelector('#hamburger-button')
const overlayHamburger = document.querySelector('#hamburger-overlay')
const activatedHamburger = 'hamburger-activated'

const contentCategoriesNav = document.querySelector('#categories_nav')

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Copy hamburger-content in hamburger-sidebar-body
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
sidebarBodyHamburger.innerHTML = contentHamburger.innerHTML + contentCategoriesNav.innerHTML;

buttonHamburger.addEventListener('click' , function(e) {
    e.preventDefault()
    this.parentNode.classList.add(activatedHamburger)
});

buttonHamburger.addEventListener('keydown' , function() {
    if (this.parentNode.classList.contains(activatedHamburger))
    {
        this.parentNode.classList.remove(activatedHamburger)
    }
})

overlayHamburger.addEventListener('click', function(e) {
    e.preventDefault()

    this.parentNode.classList.remove(activatedHamburger)
})

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                Properties Content version DESKTOP
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
let propertiesContentArticlesLink = document.querySelectorAll('#properties-content-version-mobile .properties-content-articles h3')
let propertiesContentArticlesContent = document.querySelectorAll('#properties-content-version-mobile .properties-content-articles')
let showMoreLinks = document.querySelectorAll('.showMore')

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
if click => Boucle pour tout fermer et ouvrir que sur celui qu'on clique
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
propertiesContentArticlesLink.forEach((link, index)=>{
    link.addEventListener('click', ()=>{
        if (propertiesContentArticlesContent[index].classList.contains('open')){
            propertiesContentArticlesContent[index].classList.remove('open')
        } else {
            propertiesContentArticlesContent[index].classList.add('open')
        }
    })
})
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                Properties Content version MOBILE
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const titre1 = document.querySelector('#properties-content-nav #titre1')
const bloc1 = document.querySelector('#properties-content-version-desktop #bloc1')
const titre2 = document.querySelector('#properties-content-nav #titre2')
const bloc2 = document.querySelector('#properties-content-version-desktop #bloc2')
const titre3 = document.querySelector('#properties-content-nav #titre3')
const bloc3 = document.querySelector('#properties-content-version-desktop #bloc3')
const titre4 = document.querySelector('#properties-content-nav #titre4')
const bloc4 = document.querySelector('#properties-content-version-desktop #bloc4')

titre1.addEventListener('click', function(e) {
    if(bloc1.classList.contains('open')){
        bloc1.classList.remove('open')
    }
    else {
        bloc1.classList.add('open')
        if(bloc2.classList.contains('open')){
            bloc2.classList.remove('open')}
        if(bloc3.classList.contains('open')){
            bloc3.classList.remove('open')}
        if(bloc4.classList.contains('open')){
            bloc4.classList.remove('open')}
    }
})
titre2.addEventListener('click', function(e) {
    if(bloc2.classList.contains('open')){
        bloc2.classList.remove('open')
    }
    else {
        bloc2.classList.add('open')
        if(bloc1.classList.contains('open')){
            bloc1.classList.remove('open')}
        if(bloc3.classList.contains('open')){
            bloc3.classList.remove('open')}
        if(bloc4.classList.contains('open')){
            bloc4.classList.remove('open')}
    }
})
titre3.addEventListener('click', function(e) {
    if(bloc3.classList.contains('open')){
        bloc3.classList.remove('open')
    }
    else {
        bloc3.classList.add('open')
        if(bloc2.classList.contains('open')){
            bloc2.classList.remove('open')}
        if(bloc1.classList.contains('open')){
            bloc3.classList.remove('open')}
        if(bloc4.classList.contains('open')){
            bloc4.classList.remove('open')}
    }
})
titre4.addEventListener('click', function(e) {
    if(bloc4.classList.contains('open')){
        bloc4.classList.remove('open')
    }
    else {
        bloc4.classList.add('open')
        if(bloc2.classList.contains('open')){
            bloc2.classList.remove('open')}
        if(bloc3.classList.contains('open')){
            bloc3.classList.remove('open')}
        if(bloc1.classList.contains('open')){
            bloc1.classList.remove('open')}
    }
})

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                            Basket Modale
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const buttonBasket = document.querySelector('.button-basket')
const basket = document.querySelector('#basket')
const croix = document.querySelector('.croix')

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Basket Modale _ Add Open or Remove with buttonBasket (logo)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
buttonBasket.addEventListener('click' , function(e) {
    e.preventDefault()
    basket.classList.add('open')
})
croix.addEventListener('click', function() {
     basket.classList.remove('open')
 }) 

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Basket Modale _ Add Open with "Mon panier" in hamburger
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const hamburgerContentnavPrincipalaLastChild = document.querySelector('#hamburger-content #nav-principal a:last-child')

hamburgerContentnavPrincipalaLastChild.addEventListener('click', function(e) {
    e.preventDefault()
    basket.classList.add('open')
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == basket) {
            basket.classList.remove('open')
    }
}

