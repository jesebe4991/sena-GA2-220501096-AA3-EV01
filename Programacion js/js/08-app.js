let v1 = [];
let cadena = "";
let cadena2 = ""
let tam_v1 = 5;

for( let i1 = 0; i1 < tam_v1 ; i1++){
    cadena = prompt(`Digite la cadena numer ${i1 + 1} : `)
    v1.push({cadena})

}

for( let i = v1.length - 1; i >= 0; i--){
    
    alert(`${[i + 1]}`);
    document.write(`${[(i + 1)]}`)
    console.log(`${[i + 1]}`)

}

