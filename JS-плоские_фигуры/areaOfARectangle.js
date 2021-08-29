window.onload = init;

function init() {

	var submitTheAreaOfARectangleBySides = document.getElementById("submitTheAreaOfARectangleBySides");

	submitTheAreaOfARectangleBySides.onclick = hendlerFindingTheAreaOfARectangleBySides;
}


function hendlerFindingTheAreaOfARectangleBySides() {	
	var a = document.getElementById("sideAForRectangle");
	var b = document.getElementById("sideBForRectangle");
	controller.findingTheAreaOfARectangleBySides(a.value, b.value);
};

var controller = {  //порещаем потом, хуетища..

	findingTheAreaOfARectangleBySides : function(resA, resB) {
		if(!isNaN(resA) && resA.length && !isNaN(resB) && resB.length) {
			viev.displayfindingTheAreaOfARectangleBySides("Решение: " + resA*resB);
		}
		else {
			viev.displayfindingTheAreaOfARectangleBySides(this.checkTheResult(resA)); 
		}
	},

	checkTheResult : function(res) {

		if(isNaN(res)) {
			alert("Поле не число!");
		}
		else if(!res.length) {
			return "Поле пустое";
		}
		else if (res < 0) {
			return "Введенное число меньше нуля";
		}
	}
};

var viev = {

	displayfindingTheAreaOfARectangleBySides : function(result) {
		var resultOutput = document.getElementById("theAreaOfARectangleBySides");
		resultOutput.innerHTML = result;
	}

};


