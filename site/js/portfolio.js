//change avatar image

const logo = document.querySelector('#avatar');

function changeAvatar(){
    logo.addEventListener('click', () => {logo.src='image/avatar-bis.png';})
}
changeAvatar();

//replace name and set color

const btnReplaceName = document.createElement('button');
document.body.appendChild(btnReplaceName);
btnReplaceName.style.width="100px";
btnReplaceName.style.height="50px";
btnReplaceName.innerHTML='Modify Text and Color';
const presentationDiv = document.querySelector('.description');
presentationDiv.appendChild(btnReplaceName);


function changeName(){
    btnReplaceName.addEventListener('click', () => {let userName = prompt('Enter your name :');
    let n = document.querySelector('#name');
    n.innerHTML = userName; 
});

}
changeName();