// var color = ["rgb(255, 0, 0)",
// 			"rgb(0, 255, 0)",
// 			"rgb(0, 0, 255)",
// 			"rgb(255, 255, 0)",
// 			"rgb(255, 0, 255)",
// 			"rgb(0, 255, 255)"];

var m_square = document.querySelectorAll(".square");
var m_colorDisplay = document.getElementById("Span_color_display");
var m_message = document.getElementById("Span_message");
var m_btnReset = document.getElementById("Btn_reset");
var m_title = document.getElementById("Div_title");
var m_btnEasy = document.getElementById("Btn_easy");
var m_btnHard = document.getElementById("Btn_hard");

var i,j;
var gameMode = "HARD";
var color = creatColor(gameMode);
var pickedColor = pickColor();


m_colorDisplay.textContent = color[pickedColor].toUpperCase() ;
m_btnReset.addEventListener("click",resetGame);
m_btnEasy.addEventListener("click",modeChange);
m_btnHard.addEventListener("click",modeChange);
for(i=0;i<m_square.length;i++) {
	m_square[i].style.backgroundColor = color[i];
	m_square[i].addEventListener("click",chooseColor);
}

function creatColor(gameMode){
	var i,j;
	var color = [];
	var colorString = "";
	var colorArray = [];
	var colornumber;
	if(gameMode === "HARD")
		colornumber = 6;
	else if(gameMode === "EASY")
		colornumber = 3;

	for(j=0;j<colornumber;j++){
		colorString = "";
		for(i=0;i<3;i++)	{
			color[i] = Math.floor(Math.random()*255);
		}
		colorString = "rgb(" + color[0] + ", " + color[1] + ", " + color[2] + ")";
		colorArray.push(colorString);
	}
	return colorArray;
}

function pickColor(){
	return Math.floor(Math.random()*color.length);
}

function chooseColor(){
	var clickColor = this.style.backgroundColor;
	if( clickColor === color[pickedColor] ) {
		m_message.textContent = "Correct";
		correctColor();
	}
	else {
		m_message.textContent = "Worng!!!";
		this.style.backgroundColor = 'transparent'
	}
}

function correctColor(){
	for(i=0;i<color.length;i++) {
		m_square[i].style.backgroundColor = color[pickedColor];
	}
	m_title.style.background = color[pickedColor];
	m_btnReset.textContent = "Play again ?" ;
}

function resetGame(){
	color = creatColor(gameMode);
	pickedColor = pickColor();
	m_colorDisplay.textContent = color[pickedColor].toUpperCase();
	for(i=0;i<color.length;i++) {
		m_square[i].style.backgroundColor = color[i];
	}
	m_message.textContent = " ";
	m_title.style.background = "rgb(59, 118, 173)";
	m_btnReset.textContent = "New Game !" ;
}
function modeChange(){
	Mode = this.id.toUpperCase();
	if(Mode === "EASY" && gameMode === "HARD"){
		gameMode = "EASY";
		m_btnEasy.classList.add("selected");
		m_btnHard.classList.remove("selected");
		for(i=3;i<6;i++) {
			m_square[i].style.backgroundColor = 'transparent';
		}
		resetGame()

	}
	else if(Mode === "HARD" && gameMode === "EASY"){
		gameMode = "HARD"
		m_btnHard.classList.add("selected");
		m_btnEasy.classList.remove("selected");
		resetGame()
	}
}
