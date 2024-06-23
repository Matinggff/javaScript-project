let header = document.getElementsByClassName("header")[0]
let bars = document.getElementsByClassName("fa-bars")[0]
let menu = document.getElementsByClassName("menu")[0]
let turn = false
header.addEventListener("click", () => {
    if (turn === false) {
        menu.classList.add("open")
        bars.classList.remove("fa-bars")
        bars.classList.add("fa-times-circle")
        turn = true
    }else{
        menu.classList.remove("open")
        bars.classList.remove("fa-times-circle")
        bars.classList.add("fa-bars")
        turn = false
    }
})
