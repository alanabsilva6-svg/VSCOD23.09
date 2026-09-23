const usuarios=[
    {nome: "Isac Newton", idade:18},
    {nome: "Alana", idade:45},
    {nome: "Brayan", idade:20},
    {nome: "Amanda", idade:100},
];

function filtrarmotoristas (lista){
    return lista.filter(function(usuario){
        return usuario.idade>=18;
    });
}
console.log(filtrarmotoristas(usuarios));



    