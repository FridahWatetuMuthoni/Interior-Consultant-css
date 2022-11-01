const navigation = ()=>{
    const menu = document.getElementById('mobile-menu')
    const open = document.getElementById('open-menu')

    menu.addEventListener('click', () => {
        menu.style = 'display:none'
    })

    open.addEventListener('click', () => {
        menu.style = 'display:block'
    })

}

document.addEventListener('DOMContentLoaded',navigation)