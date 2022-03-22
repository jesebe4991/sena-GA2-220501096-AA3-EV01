let numCol = 4;
const filaUno = [];
const filaDos = [];
const filaTres = [];
let vectorSumaFilas = [];
let vectorSumaColumnas = [];
const matriz = [filaUno, filaDos, filaTres]






for( let i = 0; i < numCol; i++){
    nC = prompt(`ingresa el valor del elemento en la fila 1 columna ${i+1}`)
    filaUno.push(nC) 
}

for( let i = 0; i < numCol; i++){
    nC = prompt(`ingresa el valor del elemento en la fila fila 2 columna ${i+1}`)
    filaDos.push(nC) 
}

for( let i = 0; i < numCol; i++){
    nC = prompt(`ingresa el valor del elemento en la fila fila 3 columna ${i+1}`)
    filaTres.push(nC) 
}

for (let i=0; i<3; i++){
    let suma = 0;
    for (let j=0; j<4; j++) {
        suma = suma + parseInt(matriz[i][j]);		
    }
    vectorSumaFilas[i] = suma;
}

for (let i=0; i<4; i++){
    let suma = 0;
    for (let j=0; j<3; j++) {
        suma = suma + parseInt(matriz[j][i]);	
    }
    vectorSumaColumnas[i] = suma;
}

for (let i=0; i<3; i++){
    console.log(`Suma de los elementos de la fila ${i + 1} es = ${vectorSumaFilas [i]}`)
    document.write(`Suma de los elementos de la fila ${i + 1} es = ${vectorSumaFilas [i]} <br>`)
}
for (let i=0; i<4; i++){
    console.log(`Suma de los elementos de la columna ${i + 1} es = ${vectorSumaColumnas[i]}`)
    document.write(`Suma de los elementos de la columna ${i + 1} es = ${vectorSumaColumnas[i]} <br>`)
}



