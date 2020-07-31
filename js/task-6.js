'use strict';

const buttonTask6Ref = document.querySelector('#task6');

buttonTask6Ref.addEventListener('click', () => {

  let sum = 0;
  while (true) {
    let value = +prompt("Введите число");
    if (!value) break;
    sum += value;
  }
  alert(`Общая сумма чисел равна ` + sum);
});