let sumapar = 0;
let num = 50;


while(num < 200)
{num += 2;
    sumapar += num;
    document.write(num + "<br>")
    console.log(num)}

document.write(`El total de los numeros es ${sumapar}`)
