function activarItemMenu() {
    const itemsMenu = [
        { id: 'item-menu-bucaramanga', link: './bucaramanga' },
        { id: 'item-menu-bogota', link: './bogota' },
        { id: 'item-menu-medellin', link: './medellin' },
    ]
    itemsMenu.forEach(item => {
        document.getElementById(item.id).addEventListener('click', () => {
            const elementA = document.querySelectorAll('a.nav-link')
            elementA.forEach(a => {
                a.id === item.id ? a.classList.add('active') : a.classList.remove('active')
            })
            window.location.href = item.link
        })
    });
}
activarItemMenu()