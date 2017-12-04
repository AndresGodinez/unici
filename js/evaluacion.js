var costoTaco = 12;
var cantidadTacos = 0;
var dinero = prompt("Ingresa dinero");
dinero =  parseFloat(dinero);
while(dinero>=costoTaco){
	console.log("Me quedan "+ dinero);
	dinero = dinero - costoTaco;
	cantidadTacos++;
	console.log("Me he comido "+ cantidadTacos);

}
