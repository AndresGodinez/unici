var vidaGoku = 10000;
var ataqueGoku = 3500;
var vidaVegeta = 20000;
var ataqueVegeta = 2000;

var puntodeAtaque = 'f' ;
while(puntodeAtaque != 0){
	puntodeAtaque =  prompt('ingresa quien hará el ataque \n 1.- para Goku \n Goku vida = '+ vidaGoku +' \n 2.- para Vegeta \n vida Vegeta = '+ vidaVegeta);
	puntodeAtaque = parseFloat(puntodeAtaque);
	if(puntodeAtaque == 1){
		vidaVegeta = vidaVegeta - ataqueGoku;
		console.log("Ha atacado Goku le ha hecho un daño de "+ ataqueGoku);
		console.log("Vegeta ahora tiene "+ vidaVegeta);
	}
	else if(puntodeAtaque == 2){
		vidaGoku = vidaGoku - ataqueVegeta;
		console.log("Ha atacado Vegeta le ha hecho un daño de "+ ataqueVegeta);
		console.log("Goku ahora tiene "+ vidaGoku);

	}
	else{
		console.log("Error al ingresar dato");
	}
	if(vidaGoku <= 0)
	{
		console.log("el ganador es Vegeta");
		break;
	}
	if(vidaVegeta <= 0){
		console.log("el ganador es Goku");
		break;
	}

}