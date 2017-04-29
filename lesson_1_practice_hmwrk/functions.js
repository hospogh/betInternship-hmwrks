//first hmwrk
function name(str){
	return str.slice(8,-1);
}

function hexColor(){
	return '#'+Math.random().toString(16).substr(2,6);
}

function guid (){
	function r(){
		return Math.random().toString(16).substr(2,4);
	}
	return	r()+r()+'-'+r()+'-'+r()+'-'+r()+'-'+r()+r()+r();
}


