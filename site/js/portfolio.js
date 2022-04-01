const avatar = () => document.getElementById('img_avatar').src = "./image/avatar.svg"



const changeText = () => {
    
    const name = prompt("Entrez votre nom !")
    const color = prompt("Quelle couleur aimez vous ?")

    const nameOriginal = document.getElementById("name")
    nameOriginal.textContent = name
    nameOriginal.style = "color : white"

    
    let newColor = document.getElementsByClassName('pink-bg')
    for(let i = 0; i < newColor.length; i++) {
        newColor[i].style.backgroundColor = color
    }

    let newColor2 = document.getElementsByClassName('pink-text')
    for(let i = 0; i < newColor2.length; i++) {
        newColor2[i].style.color = color
    }

}



