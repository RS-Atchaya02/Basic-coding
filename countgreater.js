const countGreater = (arr) => {
    if (arr.length === 0) return 0; 
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    const average = sum / arr.length;
    const count = arr.filter(num => num > average).length;

    return count;
};
const numbers = [1, 3, 5, 7, 9];
console.log(countGreater(numbers)); // Output will be 2, as 7 and 9 are greater than the average (5)
