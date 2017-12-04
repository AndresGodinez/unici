var hambre = true;
var precioTorta= 12.5;
var cantidadTortas =  prompt("Ingrese cantidad de Tortas");
cantidadTortas =  parseFloat(cantidadTortas);
cantidadTortasComidas=0;
while(cantidadTortasComidas != cantidadTortas){
	cantidadTortasComidas =  cantidadTortasComidas +1;
	console.log("Cantidad de tortas comidas "+ cantidadTortasComidas + "y me he gastado" + cantidadTortasComidas*precioTorta );
}