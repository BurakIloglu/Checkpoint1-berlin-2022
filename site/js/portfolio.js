const imgAvatar = document.querySelector('.avatar-1');
const buttonModify = document.querySelector('.buttonModify');
const aName = document.querySelector('#name');

imgAvatar.addEventListener('click', function () {
    imgAvatar.src = "image/avatar.svg"
    imgAvatar.alt = "new avatar"
})


buttonModify.addEventListener('click', function () {
    let newName = prompt("Enter your name :")

    aName.innerHtml = newName;
});