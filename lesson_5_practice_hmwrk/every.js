//every
'use strict';
(function() {
    window.every = function(array, myFunction) {
        for(var index = 0; index < array.length; index++) {
            if(!myFunction(array[index], index, array)) {
                return false;
            }
        }
        return true;
    };
}());