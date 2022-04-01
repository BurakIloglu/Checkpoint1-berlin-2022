const av = document.getElementById("avatar")
av.addEventListener('click', function () {
    av.src = "image/avatar.svg"
})

const colorName = document.getElementById("changeColor")

colorName.addEventListener('click', function () {
    // let color2 = prompt("Color?");
    let name1 = prompt("Your name?");
    const colorLocation = document.querySelector('.pink-bg');
    
    const nameLocation = document.querySelector('#name');
    colorLocation.style.backgroundColor = '#750ff7'
    nameLocation.style.color = 'white';
    nameLocation.innerText = name1;

})

// colorName.addEventListener('click', function () {
//             let color2 = prompt("Color?");
//             let name2 = prompt("Your name2?");
//             const colorLocation2 = document.querySelectorAll('pink-text');
//             colorLocation2.style.color = color2

//         }