'use strict';
(function() {
    function getClassName(object) {
         return Object.prototype.toString.call(object).slice(8,-1);
    }
    window.getClassName = getClassName;
}());