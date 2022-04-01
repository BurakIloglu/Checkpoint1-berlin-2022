const changeAvatar = () => {
    const avatar = document.getElementById('avatar')
    avatar.src = 'image/avatar.svg'
}

const ChangeColor = () => {
    const pinkBackground = document.getElementsByClassName('pink-bg')
    const pinkText = document.getElementsByClassName('pink-text')
    const color = prompt("Entrez une couleur")
    for (const elem of pinkBackground){
        elem.style.backgroundColor = color
    }
    for (const elem of pinkText){
        elem.style.color = color
    }
}
const ChangeName = () => {
    const userName = document.getElementById('name')    
    userName.innerHTML = prompt("Entrez votr nom")
    userName.style.color = "white"
}
const ChangeLinksColor = () => {
    const links = document.querySelectorAll('a')
    for (const link of links){
    link.style.color = '#750ff7'
    }
}

const changeTextAndColor = () => {
    ChangeColor()
    ChangeName()
    ChangeLinksColor()
}

const youCanModify = () => {
    const array = ["VSCode", "Github", "Terminal"]
    const arrayLis = document.getElementById('front-dev-tools').getElementsByTagName('li')
    for(let i = 0; i < arrayLis.length; i++){
        arrayLis[i].innerHTML = array[i]
    }
}

const addText = () => {
    const inputText = document.getElementById('inputText')
    const ul = document.getElementsByTagName('ul')[0]
    const li = document.createElement('li')
    li.innerHTML = inputText.value
    ul.appendChild(li)
    inputText.value = ""
}

