const UniqueCharacters = (str) =>
{
    const uniqueChars = new Set(str);
    return uniqueChars.size; 
};
console.log(UniqueCharacters("hello"));  // Output : 4
console.log(UniqueCharacters("abcdef")); //Output : 6
console.log(UniqueCharacters("aabbcc"));  //Output : 3
