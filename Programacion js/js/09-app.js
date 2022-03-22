const v1 = [];
let n;
let tam_v1 = 5;
let suma =  0;
let notaMax = 0;
let notaMin= 0;

for( let i = 0; i < tam_v1 ; i++){
    n = parseInt(prompt(`ingresa nota ${i+1}`))
    
    if (n < 10 & n > 0){  
        v1.push(n) 
        
    } else {
        alert("nota no tomada en cuenta")
    }
}

for(let i of v1) suma+=i;

for( let i = 0; i < v1.length; i++){

    if( v1[i] > notaMax){ 

        notaMax = v1[i]
    }
}
notaMin = Math.min.apply(null, v1)
media = suma/tam_v1;

for( let i = 0; i < v1.length; i++){

    document.write(`la nota numero ${i + 1} es: ${v1[i]} <br>`)
    console.log(`${v1[i]}`)
}

document.write(`la nota media es: ${media} <br>`)
document.write(`la nota maxima es: ${notaMax} <br>`)
document.write(`la nota minima es: ${notaMin} <br>`)

console.log("La nota media", media)
console.log(v1)
console.log("La nota maxima", notaMax)
console.log("La nota minima", notaMin)
