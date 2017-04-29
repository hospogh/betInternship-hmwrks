//instanceOf
'use stirct';
(function() {
    function instanceOf(argument1, argument2) {
        if(argument1.__proto__ === argument2.prototype ||argument1.__proto__ === null) {
            return argument1.__proto__ === argument2.prototype;
        }
        return instanceOf(argument1.__proto__, argument2);
    }
    window.instanceOf = instanceOf;
}());