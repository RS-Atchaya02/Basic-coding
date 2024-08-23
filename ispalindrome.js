const isPalindrome = (str) => {
    const normalized = str.toLowerCase();
    return normalized === normalized.split('').reverse().join('');
};

const countPalindromes = (arr) => {
    return arr.filter(isPalindrome).length;
};
const strings = ["level", "world", "radar", "hello", "civic", "openai"];
console.log(countPalindromes(strings)); // Output 3 
