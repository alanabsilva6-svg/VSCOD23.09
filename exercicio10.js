function invertertexto(texto){
    let textoinvertido = "";

    for ( let i = texto.lenght - 1; i >=0; i--){
        textoinvertido += texto[i];
    }
    return textoinvertido;
}

console.log(invertertexto("futebol"));
console.log(invertertexto("newton"));
