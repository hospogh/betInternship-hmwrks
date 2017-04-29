//2.
'use strict';
function getRandomInt(max) {
    if(max > 1) {
        return Math.random() * max | 0;
    }
    return NaN;
}