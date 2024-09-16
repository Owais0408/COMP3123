const calculateSum = (arr) => arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const calculateProduct = (arr) => arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
const array = [1, 2, 3, 4];

const sum = calculateSum(array);
const product = calculateProduct(array);
console.log(sum);       
console.log(product);  
