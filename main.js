const utils = require("./utils.js");

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


console.log(utils.printMatrix(utils.multiplyMatrices(a,b)));
