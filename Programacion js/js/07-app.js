let hora = parseFloat(prompt("Ingrese la hora en notacion de 24 horas"));
let formato = "";

if (hora >= 1 && hora <= 12){
    formato = "A.M";
    alert(`La hora es ${hora} ${formato}`)
    document.write(`La hora es ${hora} ${formato}`)
    console.log(`La hora es ${hora} ${formato}`)

} 
else if (hora <= 24 && hora >= 13) {

    formato = "P.M";
    hora -= 12;
        alert(`La hora es ${hora} ${formato}`)
        document.write(`La hora es ${hora} ${formato}`)
        console.log(`La hora es ${hora} ${formato}`)
}
else{
    alert(`hora no permitida`)
        document.write(`hora no permitida`)
        console.log(`hora no permitida`)
}
