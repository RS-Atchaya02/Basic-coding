const PerfectCube = (num) => {
    if (num < 0) return false; 
    const cubeRoot = Math.cbrt(num);
    return Math.round(cubeRoot) ** 3 === num;
};
const countCubes = (arr) => {
    return arr.filter(PerfectCube).length;
};
const numbers = [1, 8, 27, 15, 65, 125];
console.log(countCubes(numbers)); // Output 4 
