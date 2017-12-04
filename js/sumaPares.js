var inicio = prompt("Ingresa el numero inicial");
var final = prompt("Ingresa el numero final");

inicio = parseFloat(inicio);
final = parseFloat(final);
var sumaPares = 0;
var sumaImpares = 0;
var numerosPares = "";
var numerosImpares = "";

numero = inicio;

while(inicio <= final){
	// console.log(numero);
	if(numero%2){
		sumaImpares = sumaImpares + numero;
		numerosImpares =  numerosImpares+" - " + numero;
		// console.log("El número " + numero + "Es impar");

	}else{
		sumaPares = sumaPares + numero;
		numerosPares =  numerosPares+" - " + numero;

		// console.log("El número " + numero + "Es par");
	}
	numero ++;
	inicio++;
}
console.log("La suma de los pares es "+ sumaPares);
console.log("Los números sumados son "+ numerosPares);
console.log("La suma de los impares es "+ sumaImpares);
console.log("Los números Impares sumados son "+ numerosImpares);


