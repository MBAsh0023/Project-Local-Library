
function findAccountById(accounts, id) { 
    return accounts.find(account => account.id === id);
}



function sortAccountsByLastName(accounts) {
  return accounts.sort((lastNameA, lastNameB) => 
  (lastNameA.name.last >lastNameB.name.last ? 1 : -1));
}


//It returns a _number_ that represents the number of times 
//the account's ID appears in any book's `borrows` array.
function getTotalNumberOfBorrows(account, books) {
const id = account.id
let total = 0
 
books.forEach(book => {
  total += book.borrows.filter(borrow => borrow.id === id).length
 
});
  return total
}


//It returns an array of book objects, including author information, 
//that represents all books _currently checked out_ by the given account.
// _Look carefully at the object below,_ as it's not just the book object; 
//the author object is nested inside of it.
function getBooksPossessedByAccount(account, books, authors) {
  let booksbyId = books.filter(book => {
    return book.borrows.some(borrow => borrow.id === account.id && borrow.returned === false)
  });
  
  console.log(booksbyId)
  booksbyId = booksbyId.map(book => {
   let authorInfo = authors.find(author => author.id === book.authorId);
    book['author'] = authorInfo;
    return book
  })
    return booksbyId;
}
  
 
 

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
