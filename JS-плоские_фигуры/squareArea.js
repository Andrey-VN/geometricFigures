window.onload = init;

function init() {

	var submitSideAreaOfASquare = document.getElementById("submitSideAreaOfASquare");
	var submitfindingTheAreaOfASquareAlongTheDiagonal = document.getElementById("submitTheAreaOfTheSquareAcrossTheDiagonal");

	submitSideAreaOfASquare.onclick = hendlerFindingTheAreaOfASquareBySide;
	submitfindingTheAreaOfASquareAlongTheDiagonal.onclick = hendlerFindingTheAreaOfASquareAlongTheDiagonal;
}

function hendlerFindingTheAreaOfASquareBySide() {	
	var a = document.getElementById("squareSideLengthForSquare");
	controller.findingTheAreaOfASquareBySide(a.value);
};

function hendlerFindingTheAreaOfASquareAlongTheDiagonal() {	
	var d = document.getElementById("squareDiagonalForArea");
	controller.findingTheAreaOfASquareAlongTheDiagonal(d.value);
};


var controller = {  //порещаем потом, хуетища..

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

	displayTheAreaOfASquareBySide : function(result) {
		var resultOutput = document.getElementById("sideAreaOfASquare");
		resultOutput.innerHTML = result;
	},

	displayTheAreaOfASquareAlongTheDiagonal : function(result) {
		var resultOutput = document.getElementById("theAreaOfTheSquareAcrossTheDiagonal");
		resultOutput.innerHTML = result;
	}
};


