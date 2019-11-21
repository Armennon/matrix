
module.exports = {
    multiplyMatrices: function(matrix1, matrix2) {
        let matrix = [];
        let sum = 0;

        if(matrix1.length == matrix2[0].length){
            for(let i = 0; i < matrix1.length; i++){
                matrix[i] = [];
                for(let j = 0; j < matrix2[0].length; j++){
                    for(let k = 0; k < matrix1[0].length; k++){
                        sum += matrix1[i][k] * matrix2[k][j];
                    }
                    matrix[i][j] = sum;
                }
            }
            return matrix;
        }
        else{
            return null;
        }
    }
    printMatrix: function(matrix){
        if(matrix == null || matrix == undefined){
            return;
        }
        result = "";
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix[i].length; j++){
                result += matrix[i][j] + " ";
            }
            result += "\n";
        }
        return result;
}
