function calcularnotas(valor){
    const cedulas = [100,50,20,10];
    const resultado = {};
    let restante =valor;

    for (const cedula of cedulas){
        const quantidade = math.floor (restante/cedula);
        if (quantidade > 0){
            resultado[cedulas] = quantidade;
            restante= restante % cedula;
        }
    }
    return resultado;
}
console.log(calcularnotas(690));