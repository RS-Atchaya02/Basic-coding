const containsDigits = (str) => /\d/.test(str);
console.log(containsDigits("Hello12345")); // true
console.log(containsDigits("Hello"));    // false
