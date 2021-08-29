window.onload = init;

function init() {

	var submitCircumferenceThroughRadius = document.getElementById("submitCircumferenceThroughRadius");

	submitCircumferenceThroughRadius.onclick = hendlerFindingTheCircumferenceThroughTheRadius;
}

function hendlerFindingTheCircumferenceThroughTheRadius() {	
	var r = document.getElementById("radiusForTheCircumference");
	controller.findingTheCircumferenceThroughTheRadius(r.value);
};

var controller = {  //порещаем потом, хуетища..

	findingTheCircumferenceThroughTheRadius : function(res) {
		if(res >= 0 && res.length) {
			viev.displayCircumferenceThroughRadius("Решение: " + 2*Math.PI*res);
		}
		else {
			viev.displayCircumferenceThroughRadius(this.checkTheResult(res));
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

	displayCircumferenceThroughRadius : function(result) {
		var resultOutput = document.getElementById("circumferenceThroughRadius");
		resultOutput.innerHTML = result;
	}

};


