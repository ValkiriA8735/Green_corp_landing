const INCREASE_NUMBER_ANIMATION_SPEED = 50;

function increaseNumberAnimationStep (i, element, endNumber) {
  if (i <= endNumber) {
    if (i === endNumber) {
      element.innerText = i + '+';
    } else {
      element.innerText = i;
    }

    i+=100;

    setTimeout(function() {
      increaseNumberAnimationStep(i, element, endNumber);
    }, INCREASE_NUMBER_ANIMATION_SPEED);
  }
}

function initIncreaseNumberAnimation() {
  const element = document.querySelector(".features__clients-count");
  
  increaseNumberAnimationStep(0, element, 5000);
}

initIncreaseNumberAnimation();

// выбор в селекте формы "Другое"

document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
  if (event.target.value === 'other') {
    const formContainer = document.createElement('div');
    formContainer.classList.add('form__group');
    formContainer.classList.add('form__other-input'); // Задание 1
 
    const input = document.createElement('input');
    input.placeholder = "Введите ваш вариант";
    input.type = "text"; // Задание 2
      
    formContainer.appendChild(input);
    document.querySelector('#form form').insertBefore(formContainer, document.querySelector('.form__submit')); // Задание 3
  }
 
  const otherInput = document.querySelector('.form__other-input');
  if (event.target.value !== 'other' && otherInput) { // Задание 5
  document.querySelector('#form form').removeChild(otherInput); // Задание 4
  }
});




// тестовое
function doSomething(sizes) {   let el = document.createElement("div");   el.style.width = sizes.w + "px";   el.style.height = sizes.h + "px";   el.style.border = "1px dotted black";   el.style.borderRadius = sizes.r + "%";   el.style.position = "fixed";   el.style.left = window.innerWidth - sizes.w + "px";   el.style.top = window.innerHeight - sizes.h + "px";   return el; }
document.body.appendChild(doSomething({w: 100, h: 200, r: 50}));
