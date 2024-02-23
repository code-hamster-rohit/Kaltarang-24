function getHandle(className) {
    return document.querySelector('.' + className)
}
function toogleMenuList(className){
    var menuList = getHandle(className)
    var menuText = getHandle('menuBtn')
    var menuContainer = getHandle('navbar')
    if(menuList.style.display == 'block'){
        menuContainer.style.borderRadius = '40px'
        menuList.style.display = 'none'
        menuText.textContent = 'MENU'
    } else {
        menuText.textContent = 'CLOSE'
        menuContainer.style.borderRadius = '8px'
        menuList.style.display = 'block'
    }
}