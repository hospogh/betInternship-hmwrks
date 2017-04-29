//4.
'use strict';
function matrixIndexOf(matrix, value) {
    for(var i = 0; i < matrix.length; i++) {
        for(var j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === value) {
                return i + ' ' + j;
            }
        }
    }
    return -1;
}