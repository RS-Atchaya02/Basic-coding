const Divisible = (arr) => {
    return arr.find(num => num % 3 === 0 && num % 5 === 0);
};
const numbers = [10, 15, 22, 30, 40];
console.log(Divisible(numbers)); // Output will be 15
