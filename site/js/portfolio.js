console.log('hello')

const avatar = document.querySelector('.avatar')
const nameGreet = document.getElementById('name')
const button = document.querySelector('button')
const description = document.querySelectorAll('.pink-bg')
const text = document.querySelectorAll('.pink-text')
const links = document.querySelectorAll('.menu')

console.log(text)

console.log(description)

avatar.addEventListener('click', () => {
	avatar.src = '../image/avatar.svg'
})
console.log(nameGreet)
button.addEventListener('click', () => {
	const enterName = prompt('Enter your name')
	const changeColor = prompt('Enter your color')
	console.log(changeColor)
	nameGreet.textContent = enterName
	for (let desc of description) {
		desc.style.backgroundColor = changeColor
	}

	for (let color of text) {
		color.style.color = changeColor
	}

	// for (let link of links) {
	// 	link.style.color = changeColor
	// }
})
