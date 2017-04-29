//5.
'use strict';
function lastIndexOf(array, value) {
    var i;
    for(i = array.length - 1; i >= 0; i--) {
        if(array[i] === value){
            return i;
        }
    }
    return -1;
}