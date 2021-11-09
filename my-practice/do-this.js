const title = "Guards! Guards!";
title.split("!"); //> ['Guards', 'Guards' ''}
title.split(""); //> ['G', 'u', 'a', 'r', 'd', 's', '!', ' ', 'G', 'u', 'a', 'r', 'd', 's', '!']
title.split("guards"); //> ['Guards! Guards!']

console.log(title.split("!"))
console.log(title.split(""))
console.log(title.split("guards"))

const titleArr = ["The", "Light", "Fantastic"];
titleArr.join("-"); //> The-Light-Fantastic
titleArr.join("_-_"); //> The_-_Light_-_Fantastic
titleArr.join(); //> The,Light,Fantastic

console.log(titleArr.join("-"))
console.log(titleArr.join("_-_"))
console.log(titleArr.join())

const titleBook = "Interesting Times";
const author = "Terry Pratchett";
const price = 8.99;

let bookSentence = `The price of '${titleBook}' by ${author} is $${price}.`;

console.log(bookSentence)

