const avatar = (event) =>{
    const image = document.querySelector('#description__img')
    image.src = "./image/avatar.svg"
}

const soumet = (event) =>{
    const userBG = prompt("enter a color")
    const userName = prompt("Whats your name?");
    const name = document.querySelector('#name');
    name.style.color = "white"
    name.innerHTML = userName
    
    const box = document.querySelectorAll(".pink-bg");
    for(let i = 0; i < box.length; i++) {
        box[i].style.backgroundColor = userBG
    }
    const textColor = document.querySelectorAll(".pink-text")
    for(let j = 0; j < textColor.length; j++) {
        textColor[j].style.color = userBG
    }

    const lien = document.querySelectorAll("a")
    for(let l = 0; l < lien.length; l++) {
        lien[l].style.color = userBG
    }

    const btnMod = document.querySelector("#change__skill")
    btnMod.style.backgroundColor = userBG

    const btnChange = document.querySelector('#btn__change')
    btnChange.style.backgroundColor = userBG
}

const modif = () => {
    const listeChange = document.querySelectorAll("#liste__change");
        listeChange[0].innerHTML = "VSCode";
        listeChange[1].innerHTML = "Github";
        listeChange[2].innerHTML = "Terminal";
}

const btn__changeAdd = () => {
    const toolsAdd = document.querySelector('#tools__add').value;
    const boite = document.querySelector('#boite');
    const nouveau = document.createElement('li');
    nouveau.innerHTML = toolsAdd;
    boite.appendChild(nouveau);
    document.querySelector('#tools__add').value =''
}