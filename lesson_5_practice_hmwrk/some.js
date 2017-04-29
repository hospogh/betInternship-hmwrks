//some
'use strict';
(function() {
    window.some = function(array, myFunction) {
        for(var index = 0; index < array.length; index++) {
            if(myFunction(array[index], index, array)) {
                return true ;
            }
        }
        return false;
    };
}());