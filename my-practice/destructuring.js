//const author = {
//    name: {
//      firstName: "Philip",
//      surname: "Pullman",
 //   },
 //   birthday: "1946-10-19",
//  };

//  function authorNameAndBirthday(author) {
//      return`Book written by ${author.name.firstName} ${author.name.surname}, born ${author.birthday}. `
// }

//console.log(authorNameAndBirthday(author))

// function authorInfo(author) {
//  const name = author.name;
//  const birthdate = author.birthday;

//  return `Book written by ${name.firstName} ${name.surname}, born ${birthdate}.`
//}

//console.log(authorInfo(author))

//function moreAuthorInfo(author){
//  const {name, birthday} = author
//  return `Book written by ${name.firstName} ${name.surname}, born ${birthday}.`
//}
 
//console.log(moreAuthorInfo(author))

function authorInfo(author){
  const {
    name: {firstName, surname},
    birthday
  } = author

  return `Book written by ${firstName} ${surname}, born ${birthday}.`

}

//console.log(authorInfo(author))

const authors = [
  "Ursula K. Le Guin",
  "Brandon Sanderson",
  "Terry Pratchett",
  "Neil Gaiman",
  "J. R. R. Tolkien",
];

const [first, second, third,...otherAuthors] = authors

console.log(first)
console.log(second)
console.log(third)
console.log(otherAuthors) //... otherAuthors is rest operator