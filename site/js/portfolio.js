// ---Image click---
const image = document.querySelector(".informations img");

image.addEventListener("click", () => {   
        image.src = "./image/avatar-bis.png"   
})

//---Modif Name + bg-color + text-color---
const btn = document.querySelector(".change-name");
const nom = document.querySelector("#name");
const bgColor = document.querySelectorAll(".pink-bg");
const textColor = document.querySelectorAll(".pink-text")


btn.addEventListener("click", () => {
    let changeColor = prompt("Choisissez une couleur");
    let userName = prompt("Veuillez entrer votre nom");
    nom.innerText = `${userName}`;
    nom.style.color = "white";
    bgColor.forEach(element => element.style.background = `${changeColor}`) 
    textColor.forEach(element => element.style.color = `${changeColor}`)

})



