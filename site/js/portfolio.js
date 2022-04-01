const imgAvatar = document.querySelector("#img-avatar")


imgAvatar.addEventListener("click", function () {
    imgAvatar.src = "./image/avatar.svg"
    imgAvatar.alt = "Image avatar"
})


const handleClick = () => {

    const color = prompt("Entre ta couleur")
    const changColor = document.querySelectorAll(".pink-bg")
    console.log(changColor)
    for (let index = 0; index < changColor.length; index++) {
        changColor[index].style.backgroundColor = "#750ff7"
    }

    const colorText = document.getElementsByClassName("pink-text");
    console.log(colorText)
    for (let index = 0; index < colorText.length; index++) {
        colorText[index].style.color = "#750ff7"
    }



    const name = prompt("Entrez votre nom: ");
    const title = document.querySelector("#title")
    title.innerHTML = `Salut je m'appelle ${name}, enchanté de faire votre connaissance`



}
const linkIntro = document.getElementsByClassName("linkIntro");
for (let index = 0; index < linkIntro.length; index++) {
    linkIntro[index].style.color = "red"
}

const createList = (text) => {
const list = document.querySelector(".parent-li")
const element = document.createElement("li")
element.innerHTML = text
list.appendChild(element)
}

const handleSubmit = (event) => {
    event.preventDefault()
    const text = document.querySelector("#new-element").value
}