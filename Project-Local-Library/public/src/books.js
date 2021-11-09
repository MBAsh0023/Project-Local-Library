function findAuthorById(authors, id) {
  //look through authors to find the authorID matching the given ID
  return authors.find(author => author.id === id);
}

function findBookById(books, id) {
  //loop through books to find the book with the matching ID
  return books.find(book => book.id === id);
}

//It returns an array with two arrays inside of it.
// All of the inputted books are present in either the first or second array.
function partitionBooksByBorrowedStatus(books) {
  const borrowedBooks = books.filter(book => book.borrows[0].returned === false);
  const returnedBooks = books.filter(book => book.borrows[0].returned === true);
  const bookStatus = []

  bookStatus.push(borrowedBooks,returnedBooks);

  return bookStatus
}

function getBorrowersForBook(book, accounts) {
  
  let bookBorrowInfo = book.borrows.map(borrow => {
    let accountInfo = accounts.find(account => borrow.id === account.id);
    accountInfo.returned = borrow.returned
    return accountInfo
  }).slice(0,10)
  return bookBorrowInfo
  }




module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
