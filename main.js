'use strict'

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(num, characters)
{
  let randomWord = 0;
for(let i = 0;i < num - 1;i++) {
    randomWord += characters[Math.floor(Math.random()*characters.length)];
}
    return randomWord;
}

const key = generateKey(16, characters);
console.log(key); 