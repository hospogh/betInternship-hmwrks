//map
'use strict';
(function() {
    window.map=function(array, myFunction) {
        var newArr = new Array(array.length);
        for(var index=0; index < array.length; index++) {
            newArr[index] = myFunction(array[index], index, array);
        }
        return newArr;
    };
}());