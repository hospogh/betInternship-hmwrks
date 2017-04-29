(function() {
	function setPrimitive(obj, val) {
		obj.x = val;
		obj.valueOf = function() {
			return this.x;
		}
	}

	function changePrimitive(obj,val) {
		obj.x=val;
	}

	window.setPrimitive=setPrimitive;
	window.changePrimitive=changePrimitive;
}());


//var a={};
//a.x=43;

//setPrimitive(a,4);
//a.valueOf();//should return 4

//changePrimitive(a,'hello');
//a.valueOf();//should return "hello"
