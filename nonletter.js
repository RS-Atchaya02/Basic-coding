const FirstNonLetter = (str) => {
    const match = str.match(/[^a-zA-Z]/);
    return match ? match[0] : null; 
};

console.log(FirstNonLetter("Hii,Everyone!")); // Output will be ','
console.log(FirstNonLetter("abc123"));        // Output will be '1'
console.log(FirstNonLetter("abc"));           // Output will be null
