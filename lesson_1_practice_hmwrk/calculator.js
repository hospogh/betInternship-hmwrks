(function (){
	var calculator ={
		addition:function(a,b){return addition(a,b);},
		multiplication:function(a,b){return multip(a,b)},
		subraction:function(a,b){return subtr(a,b);},
		division:function(a,b){return divis(a,b)}
		
	}	
	function addition(a,b){
		return a+b;
	}
	function multip(a,b){
		return a*b;
	}
	function subtr(a,b){
		return a-b;
	}
	function divis (a,b){
		return a/b;
	}


	window.calculator=calculator;
}())