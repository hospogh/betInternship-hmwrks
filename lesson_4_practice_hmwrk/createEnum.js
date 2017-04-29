'use strict';
// enum
(function() {
    var lastIndex = 0;
    function defEnumProp(obj, propName) {
        var index = lastIndex;
        var name = propName;
        if(typeof propName !== 'string'){
            index = propName.value;
            name = propName.name;
        }
        Object.defineProperty(obj, name,  {
            value: index,
            configurable: false,
            enumerable: true,
            writable: false 
        });
        lastIndex = index + 1;
    }

    function createEnum(elements) {
        var myEnum = {};
        for(var key in elements) {
            /*
            if(typeof elements[key] === 'string') {
                Object.defineProperty(myEnum, elements[key], {
                    value: lastIndex++,
                    configurable: false,
                    enumerable: true,
                    writable: false 
                });
            } else {
                Object.defineProperty(myEnum, elements[key].name, {
                    value: elements[key].value,
                    configurable: false,
                    enumerable: true,
                    writable: false 
                });
                lastIndex = elements[key].value + 1;
            }*/
           defEnumProp(myEnum,elements[key]);
        }
        return myEnum;
    }
    window.createEnum = createEnum;
}()); 