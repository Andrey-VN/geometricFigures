window.onload = init;

function init() {

	var submitCircumferenceThroughRadius = document.getElementById("submitCircumferenceThroughRadius");
	var submitAreaOfACircleThroughRadius = document.getElementById("submitAreaOfACircleThroughRadius");
	var submitAreaOfACircleInTermsOfTheCircumference = document.getElementById("submitAreaOfACircleInTermsOfTheCircumference");
	var submitAreaOfACircleThroughDiameter = document.getElementById("submitAreaOfACircleThroughDiameter");

	submitCircumferenceThroughRadius.onclick = hendlerFindingTheCircumferenceThroughTheRadius;
	submitAreaOfACircleThroughRadius.onclick = hendlerFindingTheAreaOfACircleThroughTheRadius;
	submitAreaOfACircleInTermsOfTheCircumference.onclick = hendlerFindingTheAreaOfACircleUsingTheLengthOfACircle;
	submitAreaOfACircleThroughDiameter.onclick = hendlerFindingTheAreaOfACircleThroughDiameter;
}

function hendlerFindingTheCircumferenceThroughTheRadius() {	
	var r = document.getElementById("radiusForTheCircumference");
	controllerCircle.findingTheCircumferenceThroughTheRadius(r.value);
};

function hendlerFindingTheAreaOfACircleThroughTheRadius() {	
	var r = document.getElementById("radiusForTheAreaOfACircle");
	controllerCircle.findingTheAreaOfACircleThroughTheRadius(r.value);
};

function hendlerFindingTheAreaOfACircleUsingTheLengthOfACircle() {	
	var p = document.getElementById("theCircumferenceOfACircleThroughTheArea");
	controllerCircle.findingTheAreaOfACircleUsingTheLengthOfACircle(p.value);
};

function hendlerFindingTheAreaOfACircleThroughDiameter() {	
	var d = document.getElementById("circleDiameterForAreaSearch");
	controllerCircle.findingTheAreaOfACircleThroughDiameter(d.value);
};

var controllerCircle = {

	findingTheCircumferenceThroughTheRadius : function(res) {
		if(res >= 0 && res.length) {
			vievCircle.displayCircumferenceThroughRadius("Решение: " + 2*Math.PI*res);
		}
		else {
			vievCircle.displayCircumferenceThroughRadius(this.checkTheResult(res));
		}
	},

	findingTheAreaOfACircleThroughTheRadius : function(res) {
		if(res >= 0 && res.length) {
			vievCircle.displayAreaOfACircleThroughRadius("Решение: " + Math.PI*Math.pow(res, 2));
		}
		else {
			vievCircle.displayAreaOfACircleThroughRadius(this.checkTheResult(res));
		}
	},

	findingTheAreaOfACircleUsingTheLengthOfACircle : function(res) {
		if(res >= 0 && res.length) {
			vievCircle.displayAreaOfACircleInTermsOfTheCircumference("Решение: " + Math.pow(res, 2)/(4*Math.PI));
		}
		else {
			vievCircle.displayAreaOfACircleInTermsOfTheCircumference(this.checkTheResult(res));
		}
	},

	findingTheAreaOfACircleThroughDiameter : function(res) {
		if(res >= 0 && res.length) {
			vievCircle.displayTheAreaOfACircleThroughDiameter("Решение: " + Math.PI*Math.pow(res, 2)/(4));
		}
		else {
			vievCircle.displayTheAreaOfACircleThroughDiameter(this.checkTheResult(res));
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

var vievCircle = {

	displayCircumferenceThroughRadius : function(result) {
		var resultOutput = document.getElementById("circumferenceThroughRadius");
		resultOutput.innerHTML = result;
	},

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



