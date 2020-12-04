var inp = document.getElementById("text-input") ;
var btn = document.getElementById("input-btn") ;
var ul = document.getElementById("todo-ul") ;

function addToListClick() {
	if (inp.value.length > 0) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(inp.value)) ;
		ul.appendChild(li) ;
		inp.value = "" ;
	}
}
function addToListPress(event) {
	if (inp.value.length > 0 && event.keyCode === 13) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(inp.value)) ;
		ul.appendChild(li) ;
		inp.value = "" ;
	}
}
btn.addEventListener("click", addToListClick) ;
inp.addEventListener("keypress", addToListPress) ;

