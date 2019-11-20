module.exports = {
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
}