let num1;
let num2;
let num3;
let producto;
num1 = parseFloat(prompt("Ingrese el primer numero:  "))
num2 = parseFloat(prompt("Ingrese el segundo numero:  "))
num3 = parseFloat(prompt("Ingrese el tercer numero:  "))

if (num1+num2 === num3) {
 producto =  num2/num3
alert(`El valor de los numeros 1 = ${num1} y numero 2 = ${num2} sumados es igual al numero 3= ${num3}`)
} 
else if (num1+num3 === num2)
 {
alert(`El valor de los numeros 1 = ${num1} y numero 3 = ${num3} sumados es igual al numero 2= ${num2}`)
}
else if (num2+num3 === num1){
 alert(`El valor de los numeros 2 = ${num2} y numero 3 = ${num3} sumados es igual al numero 1= ${num1}`) 
} else {
    alert("Ninguno de los numeros coincide con la suma de los otros 2")
}
