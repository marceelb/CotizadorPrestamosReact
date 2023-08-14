const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });   
    return formatter.format(valor)
};

const calcularTotalPagar = (cantidad, plazo) => {
    let total;

    //mientras mayor la cantidad prestada, menor es el interes
    if (cantidad < 5000 ){
        total = cantidad * 1.5 //seria un 50% de interes
    } else if (cantidad >= 5000 && cantidad < 10000){
        total = cantidad * 1.4 //seria un 40% de interes
    } else if (cantidad >= 10000 && cantidad < 15000){
        total = cantidad * 1.3 //seria un 30% de interes
    } else {
        total = cantidad * 1.2 //seria un 20% de interes
    };

    //plazo - mas plazo, mayor interes

    if (plazo === 6){
        total *= 1.1; // se cobra 10% mas
    } else if (plazo === 12){
        total *= 1.2; // se cobra 20% mas
    } else {
        total *= 1.3; // se cobra 30% mas
    };

    return total;
}


export {
    formatearDinero,
    calcularTotalPagar
}