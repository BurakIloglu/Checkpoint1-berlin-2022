const newImg = document.querySelector("#jsImg")
const clickNewImg = () => {
    newImg.src = "image/avatar.svg"
}


const clickNewName = () => {
    const newBgColor = document.querySelectorAll(".pink-bg")
    const colorText = document.querySelectorAll(".pink-text")
    const newName = document.querySelector("#name")
    let newColor = prompt("Ecris ta couleur")

    newName.innerHTML = prompt("Quel est ton prénom")
    newName.style.color = "white"

    for (let color of newBgColor) {
        color.style.backgroundColor = newColor
    }
    for (let color of colorText) {
        color.style.color = newColor
    }
}


