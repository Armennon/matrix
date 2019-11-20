const util = require("./utils.js");
const matrix = require("./matrix.js")

let a = [
    [1,1,1],
    [2,2,2],
    [3,3,3],
];

let b = [
    [1,1,1],
    [2,2,2],
    [3,3,3]
];


console.log(matrix.printMatrix(util.multiplyMatrices(a,b)));