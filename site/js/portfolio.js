function changeName(){
    let user = prompt("Entrez votre nom");
    let color = prompt("Entrez une couleur")
    
    const names = document.querySelector("#name")
    names.innerHTML = user
    names.style.color = "white"

const changeBackground = document.querySelectorAll(".pink-bg")

for (let bluebg of changeBackground ){
    bluebg.style.backgroundColor =color


}
const changeColor = document.querySelectorAll(".pink-text")

for (let changeText of changeColor ){
    changeText.style.color =color
}
}
