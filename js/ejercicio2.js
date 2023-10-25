document.addEventListener("DOMContentLoaded", () => {
	var buttom = document.getElementById("calcular");
	buttom.addEventListener("click", (event) => {
		event.preventDefault();
		var producto = document.getElementById("producto").value.toLowerCase();
		var marca = document.getElementById("marca").value.toLowerCase();
		var precio = document.getElementById("precio").value;
		var descuento = 0;

		if (producto === "leche") {
			if (marca === "asturiana")
				descuento = 0.05;		
			else if(marca === "pascual")
				descuento = 0.1;
		}
		precio *= (1 - descuento);
		resultado = document.getElementById("resultado");

		resultado.innerHTML = `
			<p>El precio final es ${precio.toFixed(2)}</p>
		`;
	})
});