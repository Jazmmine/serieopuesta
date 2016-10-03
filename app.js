var ingreso = "Coloque un numero";
var limit = parseInt(prompt(ingreso));
function serie(limit){
	for(i = limit; i >= 1; i--){
		document.write(i + " ");
	}
}
serie(limit);

