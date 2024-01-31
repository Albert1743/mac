let img = document.querySelector('.block img')
let text_h1 = document.querySelector('.text h1')
let text_p = document.querySelector('.block p')
let price = document.querySelector('h2')

document.querySelector('.btn_one').onclick = () => {
    img.setAttribute("scr", "./img/mbp14-silver-select-202110 1.png")
    text_p.innerHTML = "White"
}

document.querySelector('.btn_two').onclick = () => {
    img.setAttribute("scr", "./img/mbp14-spacegray-select-202110 1.png")
    text_p.innerHTML = "Space Grey"
}


let CostBtn = document.querySelectorAll(".cost button")

CostBtn[0].onclick = () => {
    price.innerHTML = "$1,999"
}
CostBtn[1].onclick = () => {
    price.innerHTML = "$2,199"
}
CostBtn[2].onclick = () => {
    price.innerHTML = "$2,599"
}
CostBtn[3].onclick = () => {
    price.innerHTML = "$3,199"
}

