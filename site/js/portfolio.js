const avat = document.getElementById('avatar');
avat.addEventListener('click', () => {
    if (avatar.classList.contains('clk')){
        avat.src = "image/avatar-bis.png"
        avatar.classList.remove('clk');
    }
    else{
        avat.src = "image/avatar.svg";
        avatar.classList.add('clk');
    }
})

const name = document.getElementById('name');
const but = document.getElementById('button_modify');
const pinkBg = document.querySelector('.pink-bg');
but.addEventListener('click', () => {
    let color = prompt('Enter the color');
    let input = prompt("Enter your name");
    name.innerHTML = input;
    pinkBg.style.backgroundColor = color;
})