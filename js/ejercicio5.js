
function cambiarColor(){
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);

	let color = `rgb(${r}, ${g}, ${b})`;
	document.body.style.background = color;
}

document.addEventListener("DOMContentLoaded", ()=>{
	var init = document.getElementById("init");

	init.addEventListener("click", ()=> {
		var contador = 0;
		const intervalID = setInterval(() => {
			cambiarColor();
			contador++;
			if (contador >= 8)
				clearInterval(intervalID);
		}, 1000);
	});
});
