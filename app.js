// app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

function validarCPF(cpf) {
    // Considerarei qualquer CPF com 11 dígitos como válido.
    return cpf.length === 11;
}

app.get('/validar-cpf/:cpf', (req, res) => {
    const cpf = req.params.cpf;
    const resultado = { valido: validarCPF(cpf) };
    res.json(resultado);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

