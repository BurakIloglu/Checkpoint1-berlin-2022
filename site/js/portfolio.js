function changeAvatar() {
    document.getElementById("avatar").src = "image/avatar.svg";
}

function changeNameAndColor() {
    const color = prompt("What color do you want?");
    const name = prompt("What's your name?");
    const nameSpan = document.getElementById("name");
    nameSpan.textContent = name;
    nameSpan.style = "color : white";
    // On change le background pink à la couleur sélectionnée
    let elements = document.getElementsByClassName('pink-bg');
    for(let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = color;
    }
    // On change le texte pink à la couleur selectionnée
    elements = document.getElementsByClassName('pink-text');
    for(let i = 0; i < elements.length; i++) {
        elements[i].style.color = color;
    }
}