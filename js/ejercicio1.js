
var		windows= null;
const	opciones = "width=600,height=400,menubar=no,toolbar=no,location=no,resizable=no";
const	boton = get_buttom();
const	mensaje = document.createElement("h4");

function is_open(desplegable) {
	if (windows.closed)
		mensaje.innerHTML = "La ventana está cerrada";
	else
		mensaje.innerHTML = "La ventana está abierta";
}

function get_buttom() {
	var boton = create_node("a", "¿Ventana cerrada?");
	boton.href = "#";
	boton.className = "buttom";
	boton.id = "calculate";
	var buttom_container = create_node("div", boton);
	buttom_container.className = "buttom_container";
	return (buttom_container);
}

document.addEventListener("DOMContentLoaded", () => {
	var desplegado = false;
	var buttom = document.getElementById("exe1");
	var desplegable = null;
	buttom.addEventListener("click", () => {
		if (!desplegado) {
			windows = window.open("./ejercicios/ejemplo1.html", "Ejemplo 1", opciones);
			desplegable = append_nodes("div", [boton, mensaje]);
			desplegable.className = "desplegable";
			document.getElementById("ejercicio1").appendChild(desplegable);
			show_node(desplegable);
			desplegable.addEventListener("transitionend", () => {
				boton.addEventListener("click", () =>{
					is_open(desplegable);
					show_node(desplegable);
				});
			});
			desplegado = true;
		}else{
			hide_node(desplegable);
			desplegado = false;
		}
	});
})
