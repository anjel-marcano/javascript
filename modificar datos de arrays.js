/*es casi lo mismo que cambiarle un valor a una variable*/
let miArreglo = [10,20,30];

/*voy a cambiar el primer elemento por un 50*/
miArreglo[0] = 50;
console.log(miArreglo);
/*ahora mi arregloa parace asi [50,20,30]*/

/*tambien lo puedo cambiar po un string o un arreglo anidado*/

miArreglo[0] = "holaMundo";
console.log(miArreglo);
/*aparece asi ['holaMundo', 20, 30]*/

miArreglo[1]= [10,11,12]
console.log(miArreglo);
/*ahora aprece asi ["holaMundo", [10,11,12], 30]*/