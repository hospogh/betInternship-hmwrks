//Hakob's solutions
//get random matrix
(function() {
    'use strict';
    function getRandomArray(size) {
        var arr = new Array(size) {
            arr[i] = getRandomInt(100)
        }
        return arr;
    }

    window.getRandomMatrix = function (n, m) {
        var arr = new Array(n);
        for (var i = 0; i < n; i++) {
            arr[i] = getRandomArray(m);
        }
        return arr;
    }
}())