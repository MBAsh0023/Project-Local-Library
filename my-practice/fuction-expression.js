// Function declaration
function ratingAsText(park) {
    console.log("This is a function declaration.");
    return park.rating > 4 ? "Excellent!" : "Good";
  }
  
  // Function expression
  const ratingAsTextNamed = function ratingToWord(park) {
    console.log("This is a function expression that has a name.");
    return park.rating > 4 ? "Excellent!" : "Good";
  };
  
  // Anonymous function expression
  const ratingAsTextAnonymous = function (park) {
    console.log("This is an anonymous function that does not have a name.");
    return park.rating > 4 ? "Excellent!" : "Good";
  };


  return names.forEach((names) => console.log(names));
}

function logTreeType(trees) {
  trees.forEach(({type}) => console.log(type));
}

function totalPoints(points) {
  let total = 0
   points.forEach(points => {
     total += points;
   });
 return total;
}

function buildSentence(words) {
  let wordStr ="";
   words.forEach(words => {
     wordStr += words + " ";
   })
  return wordStr;
}
    

function logPercentages(decimals) { 
   decimals.forEach(decimals => console.log(decimals * 100 + "%"));
}

