const add2 = document.querySelector('#add2');
const subtract2 = document.querySelector('#subtract2');
const quantity2 = document.querySelector('#quantity2');

add2.addEventListener('click', () => quantity2.value = Number(quantity2.value) + 1);
subtract2.addEventListener('click', () => {
  quantity2.value = Number(quantity2.value) === 0
    ? 0
    : Number(quantity2.value) - 1
});
quantity2.addEventListener('change', () => quantity2.value = Number(quantity2.value) < 0 && 0);