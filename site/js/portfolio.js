const avatar2 = document.querySelector(".imageAvatar")
const changeImage = () => {

    avatar2.src = "./image/avatar.svg"
    avatar2.alt = "new Avatar"
}
const messageColor = document.querySelector("#name")
const backgColor = document.querySelector(".pink-bg")
const modify = () => {
    let colorBack = prompt("Enter your color")
    let person = prompt("Enter your name:")

    messageColor.innerHTML = person
    messageColor.style.color = "white"
    backgColor.style.backgroundColor = colorBack
}
const textHTML = document.querySelectorAll("a")
for (let index = 0; index < textHTML.length; index++) {
    textHTML[index].style.color = "#750ff7"
}

const idLi = document.querySelector("#front-dev-tools")
const changeLi = idLi.querySelectorAll("li")
const list = () => {
    for (let i = 0; i < changeLi.length; ++i) {
        changeLi[0].innerHTML = "VSCode"
        changeLi[1].innerHTML = "Github"
        changeLi[2].innerHTML = "Terminal"
    }
}
const addList = (event) => {
    event.preventDefault()
    const titleLi = document.querySelector("#nouvelLi").value
    const ul = document.querySelector("#back-dev-tools")
    const newLi = document.createElement("li")
    newLi.classList.add("liback")
    ul.appendChild(newLi)
    newLi.innerHTML = titleLi

    document.querySelector("#nouvelLi").value = ""
}