
/*
//1. Realiza el cálculo del salario que debe recibir un trabajador que gana x 
//salario con undescuento del 8% por salud y 10% por pensión

var nombreempleado = prompt ("INGRESE EL NOMBRE DEL EMPLEADO");
var salario = prompt("INGRESE EL SALARIO DEL EMPLEADO");
var salud = salario*0.08;
var pension = salario*0.10;
var salarioapagar = salario-salud-pension;

//salida
document.write("EL EMPLEADO " +nombreempleado + "<br>");
document.write("TIENE UN SALARIO DE " + salario+ "<br>");
document.write("DESCUENTO EN SALUS ES " +salud+ "<br>");
document.write("DESCUENTO EN PENSIÓN " + pension+ "<br>");
document.write("EL SALARIO A PAGAR ES DE " + salarioapagar+ "<br>");
*/


/*2. Aplica la fórmula a = (b*h)/2 para calcular el área de un triángulo donde sus dimensiones
base y altura se deben pedir al usuario que las digite.
var base = prompt("ingrese el valor de la base del triángulo");
var altura = prompt("ingrese el valor de la altura del triángulo");
var area= (base*altura)/2;

document.write("El área del triángulo es de: " + area);*/






/*
//3.Realiza las operaciones de suma, resta, multiplicación, división,
 // y módulo pidiéndole solo números al usuario.

 var numero1 = prompt("INGRESE ELPRIMER NUMERO");
 var numero2 = prompt("INGRESE EL SEGUNDO NUMERO");
 var suma = parseInt (numero1) + parseInt (numero2);
 var resta = numero1 - numero2;
 var multiplicación = numero1 * numero2;
 var división = numero1 / numero2;

 //salida
 document.write("LA SUMA ES:  " + suma + "<br>");
 document.write("LA RESTA ES:  " + resta+ "<br>");
 document.write("LA MULTIPLICACIÓN ES:  " +multiplicación+ "<br>");
 document.write("LA DIVISIÓN ES:  " + división+ "<br>");
*/




//4. Calcule el sueldo mensual de un trabajador ingresando
//el número de horas trabajadas enel mes y el valor tanto
//como de las horas normales de trabajo y las horas extras

/*var trabajador = prompt("INGRESE EL NOMBRE DEL EMPLEADO");
var horasnormales = prompt("INGRESE LA CANTIDAD DE HORAS NORMALES TRABAJADAS AL MES");
var horasextras = prompt("INGRESE LA CANTIDAD DE HORAS EXTRAS TRABAJADAS AL MES ")
var valornormal = prompt("INGRESE EL VALOR DE LA HORA NORMAL");
var valorextra = prompt ("INGRESE EL VALOR DE LA HORA EXTRA");
var sueldo= (horasnormales*valornormal)+(horasextras*valorextra);


document.write("El sueldo mensual es de: " + sueldo);*/





/*
5. Digita el ingreso del precio de un producto y se debe calcular el IVA, mostrar cuanto es el
IVA que se agrega, mostrar el precio del producto sin IVA y el total a pagar.¨*/
/*
var precio = prompt("Ingrese el valor del producto");
var precioconiva= precio*0.19;
var totalpagar= parseInt (precio) + parseInt (precioconiva);

document.write("El valor del producto sin iva es: " + precio +"<br>");
document.write("El valor del iva es: " + precioconiva +"<br>");
document.write("El valor total del producto mas el iva es: " + totalpagar +"<br>");*/



/*6. Calcule el porcentaje de alumnos y alumnas de un salón de clase, digitando el total de
alumnos hombres y mujeres.*/

/*var mujeres = prompt("Ingrese la cantidad de mujeres del salon");
var hombres = prompt("Ingrese la cantidad de hombres del salon");
var totalalumnos= parseInt(mujeres) + parseInt (hombres);
var porcentajemujeres = (mujeres/totalalumnos)*100;
var porcentajehombres = (hombres/totalalumnos)*100;

document.write ("El porcentaje de mujeres del salon es: " + porcentajemujeres + "%" + "<br>");
document.write ("El porcentaje de hombres del salon es: " + porcentajehombres + "%" + "<br>");*/

/*
7. Calcule el promedio de 3 notas de un alumno, el rango de cada nota es del 1 al 5.
*/
/*var nombrealumno= prompt("Ingrese el nombre del alumno");
var nota1= prompt("Ingrese la nota 1 del estudiante");
var nota2= prompt("Ingrese la nota 2 del estudiante");
var nota3= prompt("Ingrese la nota 3 del estudiante");
var promedio= (parseInt(nota1)+ parseInt(nota2) + parseInt(nota3))/3;
document.write ("El promedio de nostas de " + nombrealumno + " es de: " + promedio);*/
