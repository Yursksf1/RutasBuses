function activarItemMenu() {
    const itemsMenu = [
        { id: 'item-menu-bogota', link: '/src/page/rutas_Bogota.html' },
        { id: 'item-menu-medellin', link: '/src/page/rutas_Medellin.html' },
    ]
    itemsMenu.forEach(item => {
        if (item.link === window.location.pathname) {
            document.getElementById(item.id).classList.add('active')
        }
    })
}
activarItemMenu()