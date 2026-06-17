import { preguntar } from './lib/consola.ts';

function repetirLetra(letra: string, cantidad: number): string {
 let resultado ='';

 while(cantidad>0){
    resultado += letra;
    cantidad = cantidad - 1;
  }
  return resultado;
 }


let caracter: string = preguntar('¿Con que caracter vas a dibujar el cuadrado? ');
let tamaño: number = Number(preguntar('¿De qué tamaño? '));

let filasRestantes: number = tamaño;

while (filasRestantes > 0) {
  console.log(repetirLetra(caracter, tamaño));
  filasRestantes = filasRestantes - 1;
}


// COMPLETAR
