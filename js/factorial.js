// 7 * 6 * 5 * 4 *3 * 2 * 1

var numero = prompt("ingrese un número");
numero = parseFloat(numero);
numeroReal = numero;
var factorial = 1;

while(numero != 0){
	factorial = factorial * numero;
	numero--;
}
console.log("El factorial del "+ numeroReal + "Es " + factorial);