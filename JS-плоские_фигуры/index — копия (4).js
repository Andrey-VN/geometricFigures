window.onload = init;

function init() {

	var submitCircumferenceThroughRadius = document.getElementById("submitCircumferenceThroughRadius");
	var submitAreaOfACircleThroughRadius = document.getElementById("submitAreaOfACircleThroughRadius");
	var submitAreaOfACircleInTermsOfTheCircumference = document.getElementById("submitAreaOfACircleInTermsOfTheCircumference");
	var submitAreaOfACircleThroughDiameter = document.getElementById("submitAreaOfACircleThroughDiameter");
	var submitSideAreaOfASquare = document.getElementById("submitSideAreaOfASquare");
	var submitfindingTheAreaOfASquareAlongTheDiagonal = document.getElementById("submitTheAreaOfTheSquareAcrossTheDiagonal");
	var submitTheAreaOfARectangleBySides = document.getElementById("submitTheAreaOfARectangleBySides");

	submitCircumferenceThroughRadius.onclick = hendlerFindingTheCircumferenceThroughTheRadius;
	submitAreaOfACircleThroughRadius.onclick = hendlerFindingTheAreaOfACircleThroughTheRadius;
	submitAreaOfACircleInTermsOfTheCircumference.onclick = hendlerFindingTheAreaOfACircleUsingTheLengthOfACircle;
	submitAreaOfACircleThroughDiameter.onclick = hendlerFindingTheAreaOfACircleThroughDiameter;
	submitSideAreaOfASquare.onclick = hendlerFindingTheAreaOfASquareBySide;
	submitfindingTheAreaOfASquareAlongTheDiagonal.onclick = hendlerFindingTheAreaOfASquareAlongTheDiagonal;
	submitTheAreaOfARectangleBySides.onclick = hendlerFindingTheAreaOfARectangleBySides;
}

function hendlerFindingTheCircumferenceThroughTheRadius() {	
	var r = document.getElementById("radiusForTheCircumference");
	controller.findingTheCircumferenceThroughTheRadius(r.value);
};

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

function hendlerFindingTheAreaOfASquareBySide() {	
	var a = document.getElementById("squareSideLengthForSquare");
	controller.findingTheAreaOfASquareBySide(a.value);
};

function hendlerFindingTheAreaOfASquareAlongTheDiagonal() {	
	var d = document.getElementById("squareDiagonalForArea");
	controller.findingTheAreaOfASquareAlongTheDiagonal(d.value);
};

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

	findingTheCircumferenceThroughTheRadius : function(res) {
		if(res >= 0 && res.length) {
			viev.displayCircumferenceThroughRadius("Решение: " + 2*Math.PI*res);
		}
		else {
			viev.displayCircumferenceThroughRadius(this.checkTheResult(res));
		}
	},

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

	findingTheAreaOfASquareBySide : function(res) {
		if(!isNaN(res) && res.length) {
			viev.displayTheAreaOfASquareBySide("Решение: " + Math.pow(res, 2));
		}
		else {
			viev.displayTheAreaOfASquareBySide(this.checkTheResult(res));
		}
	},

	findingTheAreaOfASquareAlongTheDiagonal : function(res) {
		if(!isNaN(res) && res.length) {
			viev.displayTheAreaOfASquareAlongTheDiagonal("Решение: " + Math.pow(res, 2)/2);
		}
		else {
			viev.displayTheAreaOfASquareAlongTheDiagonal(this.checkTheResult(res));
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
	},

	displayTheAreaOfASquareBySide : function(result) {
		var resultOutput = document.getElementById("sideAreaOfASquare");
		resultOutput.innerHTML = result;
	},

	displayTheAreaOfASquareAlongTheDiagonal : function(result) {
		var resultOutput = document.getElementById("theAreaOfTheSquareAcrossTheDiagonal");
		resultOutput.innerHTML = result;
	},

	displayfindingTheAreaOfARectangleBySides : function(result) {
		var resultOutput = document.getElementById("theAreaOfARectangleBySides");
		resultOutput.innerHTML = result;
	}


};


