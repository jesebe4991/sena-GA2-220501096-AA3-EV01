let num1;
let num2;
let num3;
let producto;

num1 = parseFloat(prompt("Ingrese el primer numero:  "))
num2 = parseFloat(prompt("Ingrese el segundo numero:  "))
num3 = parseFloat(prompt("Ingrese el tercer numero:  "))

if (num1 > 0) {
    producto =  num2/num3
    alert(`El primer numero es positivo, el productro del numero 2 y 3 es: ${producto}`)
} else {
    producto = num1+num2+num3;

    alert(`El primer numero es negativo, la suma de los tres numeros es: ${producto}`)
}

