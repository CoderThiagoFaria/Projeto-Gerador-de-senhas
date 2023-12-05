document.getElementById('gerasenha').addEventListener('click', function() {
    const minusculas = 'abcdefghijklmnopqrstuvwxyz';
    const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const especiais = '!@#$%^&*()-_=+[{]}\\|;:\'",<.>/?';

    let caracteres = '';
        if (document.getElementById('minus').checked) {
            caracteres += minusculas;
        }
        if (document.getElementById('maisu').checked) {
            caracteres += maiusculas;
        }
        if (document.getElementById('especial').checked) {
            caracteres += especiais;
        }

    const tamanhoSenha = document.getElementById('slider').value;
    let senha = '';
        for (let i = 0; i < tamanhoSenha; i++) {
            const randomIndex = Math.floor(Math.random() * caracteres.length);
            senha += caracteres.charAt(randomIndex);
        }

    document.getElementById('mostrarSenha').innerText = senha;
});

document.getElementById('slider').addEventListener('input', function() {
    document.getElementById('valor').innerText = this.value;
});