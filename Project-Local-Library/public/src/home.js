function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
 const borrowedCount = books.filter(book => book.borrows[0].returned === false).length;
 return borrowedCount;  
}

function getMostCommonGenres(books) {
    let result = {};
    let genre = books.forEach((book) => {
      if (result[book.genre] == null) {
        result[book.genre] = 1; 
      } else {
        result[book.genre] += 1;
      }
    })
    let countArray = [];
    for (const [key, value] of Object.entries(result)) {
      countArray.push({
        'name' : key,
        'count' : value
      }); 
    }
    countArray.sort((a,b) => b.count - a.count);
    return countArray.slice(0, 5);
  }  

  


function getMostPopularBooks(books) {
  
  let totalBookBorrows = books.map(book=> ({
    name: book.title, count: book.borrows.length
  }));

  totalBookBorrows.sort((a,b) => b.count - a.count);

  return totalBookBorrows.slice(0,5);

 
  
}

function getMostPopularAuthors(books, authors) {
    //create new array for final result
    let result = []
  // loop through authors
    authors.forEach((author) => {
      //filter authors by ones that match author.id
      let bookAuthor = books.filter((book) => book.authorId === author.id)
      //add how many times books were borrowed
      let bookAuthBorrows = bookAuthor.reduce((borrowTot, book) => borrowTot + book.borrows.length, 0)
      //push the final result into result array
      result.push({name: author.name.first + " " + author.name.last, count: bookAuthBorrows})
    })
    //sort results from most to least and slice down to a max of five results
    return result.sort((authorA, authorB) => (authorA.count < authorB.count ? 1 : -1)).slice(0, 5)
  }



 



 


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
