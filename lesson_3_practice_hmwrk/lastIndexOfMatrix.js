//6.
'use strict';
function lastMatrixIndexOf(matrix, value) {
    for(var i = matrix.length - 1; i >= 0; i--) {
        for(var j = matrix[i].length - 1; j >= 0; j--) {
            if(matrix[i][j] === value) {
                return i + ' ' + j;
            }
        }
    }
    return -1;
}