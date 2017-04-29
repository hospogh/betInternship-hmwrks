//3.
'use strict';
function getRandomMatrix(n, m) {
    var matrix = new Array(n);
    for(var i = 0; i < n; i++) {
        var array = new Array(m);
        for(var j = 0; j < m; j ++) {
            array[j] = getRandomInt(100);
        }
        matrix[i] = array;
    }
    return matrix;
}