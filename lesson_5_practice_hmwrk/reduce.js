//reduce
'use strict';
(function() {
    window.reduce = function(array, myFunction, temp) {
        var index = 0;
        if(temp === undefined) {
            temp = array[index];//index = 0;
            index++;
        }
        for(; index < array.length; index++) {
            temp = myFunction(array[index], temp, index, array);
        }
        return temp;
    }
}());