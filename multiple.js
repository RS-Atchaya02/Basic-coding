const Multiple = (arr) => {
    return arr.find(num => num % 7 === 0);
};
const numbers = [10, 14, 23, 28, 35];
console.log(Multiple(numbers)); // Output will be 14
