const SpecialCharacters = (str) => {
    const specialCharPattern = /[^a-zA-Z0-9]/;
    return specialCharPattern.test(str);
};
console.log(SpecialCharacters("Hello!"));    // Output will be true (contains '!')
console.log(SpecialCharacters("Hello123"));  // Output will be false (contains only letters and digits)
console.log(SpecialCharacters("NoSpecials")); // Output will be false (contains only letters)
