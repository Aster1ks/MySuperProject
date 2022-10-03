let strFromHtml = document.getElementById("myTxt");
let offOn = false;

function callFunction() {
	if (!offOn) {
		offOn = true;
		strFromHtml.innerText = "On";
	}
	else {
		offOn = false;
		strFromHtml.innerText = "Off";
	}
}




/* 

<p id="idFromHTML"> qwerty </p>
<button onclick="changeColor('blue');">BLUE</button>

function changeColor(newColor)
{
	var elem = document.getElementById("idFromHTML");
	elem.style.color = newColor;
}


alert();
console.log();
document.write("Display number = \t" + 555);

document.write("Display number = \t" + 555);

Math.cell(2.01);
Math.floor(2.01);
Math.round(2.45);
Math.abs()

*/