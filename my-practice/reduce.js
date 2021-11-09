const areas = [768, 1004.2, 433.1];

let result = areas.reduce((acc, area, index) => {
  console.log(`index: ${index}`, `acc: ${acc}`, `area: ${area}`);
  return acc + area;
});
console.log(result); //> 2205.3
