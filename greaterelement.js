const FirstGreater = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            return arr[i];
        }
    }
    return null; 
};
const numbers = [5, 3, 6, 7, 4, 8];
console.log(FirstGreater(numbers)); 
// Output will be 6 (6 is greater than 3)
