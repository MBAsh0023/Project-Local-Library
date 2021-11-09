// Function definition


//function calculateTotal(products, { discountPercentage, salesTax }) {
  
  //  function calculateTotal(products, { discountPercentage, salesTax } = {}) {
        // ...

 //function calculateTotal(products, { discountPercentage, salesTax = 0.0825 } = {}) {
            // The code above sets a default value for the key in the object. 
            // If salesTax is undefined, salesTax will in fact be set to the value of 0.0825.
  
function calculateTotal(products = [], { discountPercentage, salesTax } = {}) {
    // ... The above code sets the default for products to be an empty array. 
    //This means that the for loop will still be able to run.         

let result = 0;
    for (let i = 0; i < products.length; i++) {
      const { priceInCents, quantity } = products[i];
      result += priceInCents * quantity;
    }
  
    if (discountPercentage) result *= 1 - discountPercentage;
    return result * (1 + salesTax);
  }
  
  // Inputs
  const products = [
    {
      name: "Black Longline T-Shirt",
      priceInCents: 1500,
      size: "M",
      quantity: 2,
    },
    {
      name: "Light Wash Stretch Skinny Jeans",
      priceInCents: 6000,
      size: 32,
      quantity: 1,
    },
  ];
  const options = { discountPercentage: 0.1, salesTax: 0.0825 };
  
  // Function call
  calculateTotal(products, options); //> 8768.25

  console.log(calculateTotal(products,options))