// var colors=["rgb(45, 14, 128)","rgb(56, 143, 128)","rgb(100, 100, 100)","rgb(240, 255, 128)","rgb(221, 255, 0)","rgb(32, 209, 255)"]

var colors=[]
for (var i = 0; i <6; i++) {
  colors.push(i);
}
var modoJuego="HARD"
var cuadrado=document.getElementsByClassName("cuadrado")
var randomColor = function(){
	return 'rgb('+(Math.floor(Math.random()*255)).toString()+', '+(Math.floor(Math.random()*255)).toString()+', '+(Math.floor(Math.random()*255)).toString()+')'
	}
var pickedColor



generateRandomColors()



function generateRandomColors(){

	document.getElementById("reset").textContent="NEW COLORS"
	document.querySelector("h1").style.backgroundColor="#232323"
	if(modoJuego==="Easy"){
		// colors.length=3
 		for(i=0;i<3	;i++){
			colors[i]=randomColor()
			cuadrado[i].style.backgroundColor=colors[i]
			function pickColor2(){
				return Math.floor(Math.random()*3)
			}
			pickedColor	= colors[pickColor2()]
			document.getElementById("colorDisplay").style.color=pickedColor
			document.getElementById("message").textContent=""
			document.getElementById("este").style.visibility="hidden"
			document.getElementById("colorDisplay").textContent=pickedColor
		}
		}else{
		colors.length=6
		for(i=0;i<colors.length;i++){
			colors[i]=randomColor()
			cuadrado[i].style.backgroundColor=colors[i]
			var pickColor = function(){
			return Math.floor(Math.random()*6)
			}
			pickedColor	= colors[pickColor()]
			document.getElementById("colorDisplay").style.color=pickedColor
			document.getElementById("message").textContent=""
			document.getElementById("este").style.visibility="visible"
			document.getElementById("colorDisplay").textContent=pickedColor
			cuadrado[i].addEventListener("click",function(){
			clickedColor=this.style.backgroundColor
			if(clickedColor!==pickedColor){
				this.style.backgroundColor="#232323";
				document.getElementById("message").textContent="Try again!"
			}else{
				document.getElementById("message").textContent="Correct!"
				document.querySelector("h1").style.backgroundColor=this.style.backgroundColor
				document.getElementById("reset").textContent="Try Again?"

					for(i=0;i<colors.length;i++){
							cuadrado[i].style.backgroundColor=this.style.backgroundColor
					}
				}
			})
					}
				}	
    }


document.getElementById("reset").addEventListener("click", function(){generateRandomColors()})




var clickedColor

for(i=0;i<colors.length;i++){

	cuadrado[i].style.backgroundColor=colors[i]
}



document.getElementById("colorDisplay").style.color=pickedColor



// for(i=0;i<colors.length;i++){
// 	// cuadrado[i].style.backgroundColor=colors[i]
// 	cuadrado[i].addEventListener("click",function(){
// 		clickedColor=this.style.backgroundColor
// 			if(clickedColor!==pickedColor){
// 				this.style.backgroundColor="#232323";
// 				document.getElementById("message").textContent="Try again!"
// 			}else{
// 				document.getElementById("message").textContent="Correct!"
// 				document.querySelector("h1").style.backgroundColor=this.style.backgroundColor
// 				document.getElementById("reset").textContent="Try Again?"

// 					for(i=0;i<colors.length;i++){
// 							cuadrado[i].style.backgroundColor=this.style.backgroundColor
// 					}
// 				}
// 			})
// }

document.getElementById("dificil").addEventListener("click", function(){
	modoJuego="HARD"
	this.style.backgroundColor="steelblue"
	document.getElementById("facil").style.backgroundColor="white"
	generateRandomColors()
})

document.getElementById("facil").addEventListener("click", function(){
	modoJuego="Easy"
	this.style.backgroundColor="steelblue"
	document.getElementById("dificil").style.backgroundColor="white"
	generateRandomColors()
})	
