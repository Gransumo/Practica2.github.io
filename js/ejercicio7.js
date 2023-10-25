
function td_array(n, value1, value2){
	var tr = [];
	tr.push(create_node("td", n));
	tr.push(create_node("td", value1));
	tr.push(create_node("td", value2));
	return (tr);
}

document.addEventListener("DOMContentLoaded", () => {
	var tbody = document.getElementById("tbody");
	tbody.appendChild(append_nodes("tr", td_array('1', "rojo", "Resino")));
	tbody.appendChild(append_nodes("tr", td_array('2', "azul", "Minayo")));
	tbody.appendChild(append_nodes("tr", td_array('3', "verde", "Resino")));
});
