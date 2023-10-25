
function mostrar(n) {
	var imagenes = document.querySelectorAll("img");

	imagenes.forEach((img, index) => {
		if (index % 2 === n)
			img.style.display = "none";
		else
			img.style.display = "block";
	});
}
