const avatarChange = () => {
   const avatar = document.querySelector('#avatar');
   console.log(avatar.src);
       avatar.src = "./image/avatar.svg";
}

const changeName = () => {
    const newColor = prompt("Enter a new Color");
    const newName = prompt("What's your Name ?");
    const name = document.querySelector('#name');
    name.innerHTML = newName;
    name.style.color = "white";
    const couleurs = document.querySelectorAll('.pink-bg');
    for (let couleur of couleurs){
        couleur.style.backgroundColor = newColor;
    }
    const couleursTexte = document.querySelectorAll('.pink-text');
    for (let couleurTexte of couleursTexte){
        couleurTexte.style.color = newColor;
    }
    
    const couleursLiens = document.querySelectorAll('a');
    for (let couleurLiens of couleursLiens){
        couleurLiens.style.color = newColor;
    }

    document.querySelector('#changeLi').style.backgroundColor = newColor;
    document.querySelector('#changeName').style.backgroundColor = newColor;
    document.querySelector('#buttonNewTool').style.backgroundColor = newColor;
}

const changeListe = () => {
    const liste = document.querySelectorAll('#front-dev-tools__li');
    liste[0].innerText = "VSCode";
    liste[1].innerText = "Github";
    liste[2].innerText = "Terminal";
}

const addTool = () => {
    const newTool = document.querySelector('#newTool').value;
    const listeTools = document.querySelector('#devTools');
    const newLi = document.createElement('li');
    newLi.innerText = newTool;
    listeTools.appendChild(newLi);
    document.querySelector('#newTool').value = '';
}