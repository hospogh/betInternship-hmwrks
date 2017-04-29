//filter
'use strict';
(function() {
    window.filter = function(array, myFunction) {
        var newArr = new Array();
        for(var index = 0; index < array.length; index++) {
            if (myFunction(array[index], index, array) === true) {
                newArr.push(array[index]);
            }
        }
        return newArr;
    }
}());