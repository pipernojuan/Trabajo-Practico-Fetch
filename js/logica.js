const cotizador = new CotizadorVuelos (tipoDestino, tipoPartida,costoPorPersona)

const cargoDestino = ()=> {
    let optionTD
    tipoDestino.forEach(element => {
    optionTD += `<option value="${element.factor}">${element.llega}</option>`
});
    return optionTD
}

const cargoPartida = ()=> {
    let optionTP
    tipoPartida.forEach(element => {
        optionTP += `<option value="${element.factor}">${element.sale}</option>`
});
    return optionTP
}

const swa = (mensaje) => {
    Swal.fire({
        title: '¡No te olvides!',
        text: 'Colocá la cantidad de personas para tu vuelo',
        icon: 'warning',
        timer: 8000,
        timerProgressBar: true,
    })
}

const cotizarVuelo = ()=> {
    if (personas.value !== "") {
        let pers = personas.value
        let tipoDest = selectTipoDestino.value
        let tipoPart = selectTipoPartida.value
        let valorFinalDelVuelo = cotizador.valorDeVuelo(pers, tipoDest, tipoPart)
            valorFinalDelVuelo = valorFinalDelVuelo.toFixed(2)
            valorVuelo.innerText =  `$ ${valorFinalDelVuelo}`           
    } else {
        swa()
        };
    }
