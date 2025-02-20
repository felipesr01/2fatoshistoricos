const listaFatos = require("../dados/fatos")

function validaAnoNumero (anoFato)
{
    if(isNaN(anoFato))
    {
        return false
    }
    else
    {
        return true
    }
}

function validaAnoValido(anoFato)
{
    let primeiroAno = listaFatos.fatosHistoricos[0].ano
    let ultimoAno = listaFatos.fatosHistoricos[listaFatos.fatosHistoricos.length-1].ano

    if (anoFato < primeiroAno || anoFato > ultimoAno)
    {
        return false
    }
    else
    {
        return true
    }
}

function selecionaFatoPorAno (anoFato)
{
    const fatoSelecionado = listaFatos.fatosHistoricos.find(fato => fato.ano == anoFato)
    return fatoSelecionado.fato
}

exports.selecionaFatoPorAno = selecionaFatoPorAno;
exports.validaAnoNumero = validaAnoNumero;
exports.validaAnoValido = validaAnoValido;