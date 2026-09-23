function encontrarmaior (numeros){
    let maior = numeros [0];

    for (let i= 1; i <numeros.lenght; i++){
        if(numeros[i] > maior){
            maior =numeros[i];
        }
    }

    return maior;
}

const lista = [ 14, 89, 3, 105, 42, 78];
console.log("maior numero:"+encontrarmaior(lista));