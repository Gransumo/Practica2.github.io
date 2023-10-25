
document.addEventListener("DOMContentLoaded", ()=> {
	var insertar = document.getElementById("insert");
	var parrafos_div = document.getElementById("parrafos");
	insertar.addEventListener("click", () => {
		if (document.getElementById("new").value) {
			var p = create_node("p", document.getElementById("new").value);
			var first = document.querySelector("#parrafos p:first-child");
			parrafos_div.insertBefore(p, first);
			document.getElementById("new").value = "";
		}
	});
});
