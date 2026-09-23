function verificarsituacao (nota1, nota2, nota3){
    const media = (nota1 + nota2 + nota3)/3

    if (media >=7){
        return "media" + media.toFixed(1) + ":aprovado";
    } else if (media >=5){
        return "media" + media.toFixed(1) + ":recuperação";
    }else {
        return "media" + media.toFixed(1) + ":reprovado";
    }
}

console.log(verificarsituacao(8,7.5,9));
console.log(verificarsituacao(6,5.5,5));
console.log(verificarsituacao(4,3,2));