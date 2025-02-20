const express = require('express')
const app = express()

const servico = require('./servico/servico')

app.get('/', (req, res) =>  {
    let anoFato = req.query.anoFato;

    if (servico.validaAnoNumero(anoFato) && servico.validaAnoValido(anoFato))
    {
        var fato = servico.selecionaFatoPorAno(anoFato);
        res.json({fato:fato});
    }
    else
    {
        res.status(400).json({'Erro' : 'Ano inválido'})
    }

});

app.listen(8080, () => {
    console.log("Servidor rodando na porta: 8080");
});