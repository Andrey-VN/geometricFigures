window.onload = init;

function init() {


	var submitAreaOfACircleThroughRadius = document.getElementById("submitAreaOfACircleThroughRadius");
	var submitAreaOfACircleInTermsOfTheCircumference = document.getElementById("submitAreaOfACircleInTermsOfTheCircumference");
	var submitAreaOfACircleThroughDiameter = document.getElementById("submitAreaOfACircleThroughDiameter");
	
	submitAreaOfACircleThroughRadius.onclick = hendlerFindingTheAreaOfACircleThroughTheRadius;
	submitAreaOfACircleInTermsOfTheCircumference.onclick = hendlerFindingTheAreaOfACircleUsingTheLengthOfACircle;
	submitAreaOfACircleThroughDiameter.onclick = hendlerFindingTheAreaOfACircleThroughDiameter;
}

function hendlerFindingTheAreaOfACircleThroughTheRadius() {	
	var r = document.getElementById("radiusForTheAreaOfACircle");
	controller.findingTheAreaOfACircleThroughTheRadius(r.value);
};

function hendlerFindingTheAreaOfACircleUsingTheLengthOfACircle() {	
	var p = document.getElementById("theCircumferenceOfACircleThroughTheArea");
	controller.findingTheAreaOfACircleUsingTheLengthOfACircle(p.value);
};

function hendlerFindingTheAreaOfACircleThroughDiameter() {	
	var d = document.getElementById("circleDiameterForAreaSearch");
	controller.findingTheAreaOfACircleThroughDiameter(d.value);
};


var controller = {  //порещаем потом, хуетища..

	findingTheAreaOfACircleThroughTheRadius : function(res) {
		if(res >= 0 && res.length) {
			viev.displayAreaOfACircleThroughRadius("Решение: " + Math.PI*Math.pow(res, 2));
		}
		else {
			viev.displayAreaOfACircleThroughRadius(this.checkTheResult(res));
		}
	},

	findingTheAreaOfACircleUsingTheLengthOfACircle : function(res) {
		if(res >= 0 && res.length) {
			viev.displayAreaOfACircleInTermsOfTheCircumference("Решение: " + Math.pow(res, 2)/(4*Math.PI));
		}
		else {
			viev.displayAreaOfACircleInTermsOfTheCircumference(this.checkTheResult(res));
		}
	},

	findingTheAreaOfACircleThroughDiameter : function(res) {
		if(res >= 0 && res.length) {
			viev.displayTheAreaOfACircleThroughDiameter("Решение: " + Math.PI*Math.pow(res, 2)/(4));
		}
		else {
			viev.displayTheAreaOfACircleThroughDiameter(this.checkTheResult(res));
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

	displayAreaOfACircleThroughRadius : function(result) {
		var resultOutput = document.getElementById("areaOfACircleThroughRadius");
		resultOutput.innerHTML = result;
	},

	displayAreaOfACircleInTermsOfTheCircumference : function(result) {
		var resultOutput = document.getElementById("areaOfACircleInTermsOfTheCircumference");
		resultOutput.innerHTML = result;
	},

	displayTheAreaOfACircleThroughDiameter : function(result) {
		var resultOutput = document.getElementById("areaOfACircleThroughDiameter");
		resultOutput.innerHTML = result;
	}


};


