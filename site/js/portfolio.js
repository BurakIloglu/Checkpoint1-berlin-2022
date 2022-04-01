const img = document.querySelector("#img");
const img2 = document.querySelector("#img2");


let isVisible = false;

img.addEventListener('click', () => {
    img.classList.remove('isvisible');
    img.classList.add('is-visible')
    img2.classList.add('is-visible');
    img2.classList.remove('no-visible');
    isVisible = !isVisible;
    isVisible ? img.classList.add('no-visible') : img.classList.add('is-visible'); 
});


img2.addEventListener('click', () => {
    img2.classList.remove('is-visible');
    img.classList.add('no-visible');
    img.classList.add('is-visible');
    isVisible = !isVisible;
    isVisible ? img2.classList.add('no-visible') : img2.classList.add('is-visible'); 
  });
