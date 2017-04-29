////forEach
'use strict';
(function() {
    window.forEach = function(arr, myFunction) {
        for(var index = 0; index < arr.length; index++) {
            myFunction(arr[index], index, arr);
        }
    };
}());