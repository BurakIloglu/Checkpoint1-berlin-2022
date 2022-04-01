/*Fonction avatar*/
const avatar = () => {
    const image = document.querySelector('#avatar');
    image.src = "image/avatar.svg"
}

/*Fonction button*/
const button = () => {
    const nom = prompt("Entrez votre nom:");
    const couleur = prompt("Changer la couleur");
    const name = document.querySelector("#name")
    const color = document.querySelectorAll(".pink-bg")
    const text = document.querySelectorAll(".pink-text")
    const lien = document.querySelectorAll("a")
    name.style.color = "white"
    name.innerHTML = nom
    /*boucle pour les 4 textes */
    for (var i = 0, l = text.length; i < l; i++) {
        text[i].style.color = couleur
    }
    /*boucle pour le fond et description*/
    for (var i = 0, l = color.length; i < l; i++) {
        color[i].style.backgroundColor = couleur
    }
    /*boucle pour le fond et description*/
    for (var i = 0, l = lien.length; i < l; i++) {
        lien[i].style.color = couleur
    }
}
/*Bonus 2*/
/*Fonction modif*/
const bonusJMP = () => {
    const bonus = document.querySelectorAll("li");
    for (var i = 0, l = bonus.length; i < l; i++) {
        bonus[1].innerHTML = "VS Code"
        bonus[2].innerHTML = "GitHub"
        bonus[3].innerHTML = "Terminal"
    }
}



/*Bonus 3*/
const resetform = () => {
    const titre = document.querySelector("#depot_projet").value = ""
}
const soumettre = (event) => {
    event.preventDefault();
    const titre = document.querySelector("#depot_projet").value

    const creatColumn = document.querySelector("#column1")
    const creatUl = document.createElement("ul")
    const creatLi = document.createElement("projet")
    const creatContenu = document.createElement("projet")

    creatColumn.appendChild(creatUl)
    creatUl.appendChild(creatLi)
    creatLi.appendChild(creatContenu)

    creatContenu.innerHTML = `${titre}`

    resetform()
}