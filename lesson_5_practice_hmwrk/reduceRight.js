//reduceRight
'use strict';
(function() {
    window.reduceRight = function(array, myFunction, temp) {
        var index = array.length - 1;
        if(temp === undefined){
            temp = array[array.length - 1];
            index--;
        }
        for(; index >= 0; index--) {
            temp = myFunction(array[index], temp, index, array);
        }
        return temp;
    }
}());