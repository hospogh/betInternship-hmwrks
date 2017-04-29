//indexOf function
'use strict';
function myIndexOf(array, value) {
    for(var i = 0; i < array.length; i++) {
        if(array[i] === value) {
            return i;
        }
    }
    return -1;
}