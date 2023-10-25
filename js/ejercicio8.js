
function getFirst() {
	return (document.querySelector("#botones button:first-child"));
}

document.addEventListener("DOMContentLoaded", () => {
	botones_div = document.getElementById("botones");
	var azul = document.getElementById("azul");
	var rojo = document.getElementById("rojo");
	var verde = document.getElementById("verde");
	azul.addEventListener("click", () => {
		if (getFirst() != azul)
			botones_div.insertBefore(azul, getFirst());
	});

	rojo.addEventListener("click", () => {
		if (getFirst() != rojo)
			botones_div.insertBefore(rojo, getFirst());
	});

	verde.addEventListener("click", () => {
		if (getFirst() != verde)
			botones_div.insertBefore(verde, getFirst());
	});
});
