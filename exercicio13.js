const precoOriginais = [100,250,80,1500];

const precocomdesconto = precosoriginais.map(function(preco) {
    return preco * 0.9;
});

console.log(precocomdesconto)