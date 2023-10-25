document.addEventListener("DOMContentLoaded", () =>{
	var buttom = document.getElementById("calcular");

	buttom.addEventListener("click", ()=> {
		var value = document.getElementById("num").value;
		//alert("hola");
		var resultado_div = document.getElementById("resultado");
		if (value) {
			var n = 0;
			if (n > 50)
			n = Math.pow(value, 2);
			else
			n = Math.pow(value, 3);

			resultado_div.innerHTML = `
				<p>El resultado es ${n}</p>
			`;
		}
	});
});
