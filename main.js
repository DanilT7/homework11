'use strict'

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

// Первый вариант

// function generateKey(num, characters)
// {
//   let randomWord = '';
// for(let i = 0;i < num - 1;i++) {
//     randomWord += characters[Math.floor(Math.random()*characters.length+1)];
// }
//     return randomWord;
// }

// const key = generateKey(16, characters);
// console.log(key); 

// Второй вариант

function generateRandomNumber(n) {
  return Math.floor(Math.random() * n + 1);
}


function generateKey(num, characters) {
  let string = '';
  for(let i = 0;i < num;i++) {
    const randomNumber = generateRandomNumber(characters.length - 1);
    string += characters[randomNumber];
  }
  return string;
}

const key = generateKey(16, characters);
console.log(key);

