

var rgbPicketColor = document.getElementById("RGBCode");
var squares = document.querySelectorAll(".square");
var message = document.getElementById("GameMessage");
var h1 = document.querySelector("h1");
var GameModes = document.querySelectorAll(".gameMode");
var resetButton = document.querySelector("#Reset");
var rgbClickedColor;

init();

function init()
{
	setupButtons();
	setupSquares();
	generateNewGame();
}



function setupButtons()
{
	for (var i = 0; i < GameModes.length; i++) {
		var element = GameModes[i];
		element.addEventListener("click", function(){
			deselectAllButtons();
			this.classList.add("selected");
			generateNewGame();
		});
	}
}

function setupSquares()
{
	resetButton.addEventListener("click",generateNewGame);
	for(var i=0; i<squares.length; i++)
	{
		
		//Añade los Click Listeners a los cuadrados
		squares[i].addEventListener("click", function(){
			//Detecta el color del cuadrado elegido
			rgbClickedColor = this.style.backgroundColor;
			//Comapara si el es mismo color que el seleccionado por el script
			if (rgbClickedColor===rgbPicketColor.innerHTML) {
				changeColors(rgbClickedColor);
				h1.style.backgroundColor = rgbClickedColor;
				message.innerHTML="Correcto";
				resetButton.innerHTML="Volver a jugar?";
			}
			else
			{
				this.style.backgroundColor="#232323";
				message.innerHTML="Equivocado, vuelve a intentarlo";
			}
	
		});
	}
}

function generateNewGame()
{
	for (var i = 0; i < GameModes.length; i++) {
		var element = GameModes[i];
		
		if(element.classList.contains("selected")==true)
			{
				if (element.textContent === "Facil") {
					GenerateNewColors(3);
				}
				else if (element.textContent === "Dificil") {
					GenerateNewColors(6);
				}
			}
	}
	
}


function GenerateNewColors(cantidadDeColores)
{

	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor="#232323";
		squares[i].style.display="none";
	}

	for (var i = 0; i < cantidadDeColores; i++) 
	{
		squares[i].style.backgroundColor = "rgb("+GetRandomNumber(256)+", "+GetRandomNumber(256)+", "+GetRandomNumber(256)+")";
		squares[i].style.display = "block";
	}

	rgbPicketColor.innerHTML = squares[GetRandomNumber(cantidadDeColores)].style.backgroundColor;
	h1.style.backgroundColor = "steelblue";
	resetButton.innerHTML="Nuevo Juego";
	message.innerHTML = "Adivina el color!";
}


function deselectAllButtons()
{
	for (var i = 0; i < GameModes.length; i++) {
		var element = GameModes[i];

		GameModes[i].classList.remove("selected");

	}
}

function GetRandomNumber(number)
{
	return Math.floor((Math.random()*number));
}

function changeColors(color)
{
	for (var i = 0; i < squares.length; i++) 
	{
		squares[i].style.backgroundColor=color;
	}
}




	