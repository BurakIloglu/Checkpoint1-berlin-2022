function changeName() {
    let user = prompt("Entrez votre nom d'utilisateur")
    let color = prompt("Entrez une couleur")

    const names = document.querySelector("#name")
    names.innerHTML = user
    names.style.color = "white"

    let changeBackground = document.querySelectorAll(".pink-bg")
    for (let background of changeBackground) {
        background.style.background = color
    }

    let changeColorText = document.querySelectorAll(".pink-text")
    for (let textColor of changeColorText) {
        textColor.style.color = color
    }

}