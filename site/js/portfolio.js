function changeAvatar() {
    const imageAvatar2 = document.querySelector(".imageAvatar")
    imageAvatar2.src = "./image/avatar.svg"
}

function modifyName() {
    const newBackGround = document.querySelector("#description")
    const newName = document.querySelector("#name")
    const changeBackground = prompt("Enter a color:")
    const question = prompt("Enter your Name:")
    const navbar = document.querySelectorAll(".menu")
    const buttonColor = document.querySelector(".modifyColor-ext")
    const backGroundFooter = document.querySelector('#descriptionFooter')
    const links = document.querySelectorAll('.pink-text')

    backGroundFooter.style.background = changeBackground
    newName.innerHTML = question
    newName.style.color = "white"
    newBackGround.style.background = changeBackground
    buttonColor.style.background = changeBackground
    for (const link of links) {
        link.style.color = changeBackground
    }
    changeLinkColor()
}


function changeLinkColor() {
    const links = document.querySelectorAll('a')
    
    for (const link of links) {
        link.style.color = '#750ff7'
    }
}

function changeUl(){ 
    const array = ["VsCode","Github","Terminal"];
    const arrayLis = document.getElementById('front-dev-tools').getElementsByTagName('li');
   for(let i = 0; i<array.length; i++)
   arrayLis[i].innerHTML = array[i]
}

function inputText(event){
    event.preventDefault()
    const addText = document.getElementById('input')
    const ul = document.querySelector('ul')
    const li = document.createElement('li')
    li.innerHTML = addText.value
    ul.appendChild(li)
    addText.value = ""
}


