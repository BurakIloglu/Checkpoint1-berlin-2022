const avatar2 = document.querySelector('.banner__img')
const newAvatar = () => {
    avatar2.src = "./image/avatar.svg"
    avatar2.alt = 'new avatar'
}

//création const pour modifier nom et couleur du nom
const newUser = document.querySelector('#name')
const button = document.querySelector('.button')

//affichage du button
button.style.backgroundColor = "pink"
button.style.width = "auto"
button.style.height = "50px"
button.style.border = '1px solid white'
button.style.color = 'white'
button.style.fontSize = '1.5em'

//constante pour modifier le background lors du click en bleu
const newBackgroundPink = document.querySelectorAll('.pink-bg')

//textes à modifier en cliquant
const newColorText = document.querySelectorAll('.pink-text')

//link à modifier
const menu = document.querySelectorAll('a')

const newUsers = () => {
    let colorBg = prompt("Enter your color")
    let user = prompt("Enter your name")
    newUser.innerHTML = user
    newUser.style.color = 'white'

//constante pour modifier le background lors du click en bleu
    for (newBackground of newBackgroundPink) {
        newBackground.style.backgroundColor = colorBg
    }

    for (colorText of newColorText) {
        colorText.style.color = colorBg
    }

    for (menuLink of menu) {
        menuLink.style.color = colorBg
    }

    // if color white - pour m'amuser
    if (colorBg == 'white') {
        newUser.style.color = 'black'
        for (colorText of newColorText) {
            colorText.style.color = 'blue'
        }
        for (menuLink of menu) {
            menuLink.style.color = 'blue'
        }
        const description = document.querySelectorAll('.description')
        for (index of description) {
            index.style.color = 'black'
            index.style.border = " 1px solid pink"
        }
        button.style.border = '1px solid pink'
        button.style.color = 'black'
        buttonLink.style.color = 'black'
        button3.style.color = 'black'
    }
    //modification des autres boutons - pour m'amuser
    button.style.backgroundColor = colorBg

    buttonLink.style.backgroundColor = colorBg

    button3.style.backgroundColor = colorBg
}

//créer le 2eme bouton
const button2 = document.querySelector('.button-link')
const buttonLink = document.createElement('button')
buttonLink.classList.add('button2')
button2.appendChild(buttonLink)
buttonLink.style.backgroundColor = 'grey'
buttonLink.style.width = "100px"
buttonLink.innerText = 'Modifie moi !'
buttonLink.style.color = 'white'

//relier le bouton à un click pour modifier les li

buttonLink.addEventListener('click', function () {
    const li = document.querySelectorAll('.ul__li')
    li[0].innerText = 'VSCode'
    li[1].innerText = 'Github'
    li[2].innerText = 'Terminal'

})

//créer le formulaire plus le input pour modifier le ul
const skill = document.querySelector('.skill__form')
const formulaire = document.createElement('form')
formulaire.classList.add('form')
skill.appendChild(formulaire)

const ul = document.querySelector('ul')
formulaire.appendChild(ul)

const input = document.createElement('input')
input.classList.add('input-form')
formulaire.appendChild(input)
input.type = 'text'
input.style.border = '1px solid blue'
input.style.marginRight = "5px"



const button3 = document.createElement('button')
button3.classList.add('button-form')
formulaire.appendChild(button3)

button3.style.backgroundColor = 'grey'
button3.style.width = "50px"
button3.innerText = 'Ajout'
button3.style.color = 'white'

//fonction pour ajouter un texte li
button3.addEventListener('click', function (event) {
    event.preventDefault()
    const newLi = document.createElement('li')
    ul.appendChild(newLi)
    const input = document.querySelector('.input-form').value

    newLi.innerText = input

    /**reset**/
    document.querySelector('.input-form').value = ''

})