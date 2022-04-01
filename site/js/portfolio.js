const newImage = document.querySelector("#jsImg")
const clickNewImg = () => {
    newImage.src = "image/avatar.svg"
}




const clickNewName = () => {
    const newName = document.querySelector("#name")
    const newBg = document.querySelectorAll(".pink-bg")
    const colorText = document.querySelectorAll(".pink-text")
    let changeColor = prompt("donne ta couleur")
    newName.innerHTML = prompt("quel est ton prenom ?")
    newName.style.color = "white"

    for (let colorBg of newBg) {
        colorBg.style.backgroundColor = changeColor
    }

    for (let color of colorText) {
        color.style.color = changeColor
    }
}