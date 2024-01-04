// script.js
function validarCPF() {
    const cpfInput = document.getElementById('cpfInput');
    const resultadoDiv = document.getElementById('resultado');

    // API
    fetch(`/validar-cpf/${cpfInput.value}`)
        .then(response => response.json())
        .then(data => {
            resultadoDiv.innerText = data.valido ? 'CPF válido' : 'CPF inválido';
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
            resultadoDiv.innerText = 'Erro ao validar CPF';
        });
}
