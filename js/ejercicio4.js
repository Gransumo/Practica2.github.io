const	opciones = "width=500,height=500,menubar=no,toolbar=no,location=no,resizable=no";

document.addEventListener("DOMContentLoaded", ()=> {
	var abrir = document.getElementById("abrir");
	abrir.addEventListener("click", () => {
		//window.close();
		var windows = window.open("", "_blank", opciones);
		windows.document.write(`
		<head>
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
		</head>
		<body>
		<h1>EJERCICIO 4</h1>
		<button id="cerrar" class="btn btn-primary">Cerrar</button>
		<script>
		document.getElementById("cerrar").addEventListener("click", ()=> {
			window.close();
		});
		</script>
		</body>
		`);
	});
});
