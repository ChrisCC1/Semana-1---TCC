document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        let isValid = true;

        // Limpa mensagens de erro anteriores
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

        // Validação do Nome Completo
        const nomeCompleto = document.getElementById('nomeCompleto');
        if (nomeCompleto.value.trim() === '') {
            document.getElementById('nomeCompletoError').textContent = 'O nome completo é obrigatório.';
            isValid = false;
        }

        // Validação do E-mail
        const email = document.getElementById('email');
        if (email.value.trim() === '') {
            document.getElementById('emailError').textContent = 'O e-mail é obrigatório.';
            isValid = false;
        } else if (!isValidEmail(email.value.trim())) {
            document.getElementById('emailError').textContent = 'Por favor, insira um e-mail válido.';
            isValid = false;
        }

        // Validação da Senha
        const senha = document.getElementById('senha');
        if (senha.value.trim() === '') {
            document.getElementById('senhaError').textContent = 'A senha é obrigatória.';
            isValid = false;
        } else if (senha.value.trim().length < 6) {
            document.getElementById('senhaError').textContent = 'A senha deve ter no mínimo 6 caracteres.';
            isValid = false;
        }

        // Validação da Confirmação de Senha
        const confirmarSenha = document.getElementById('confirmarSenha');
        if (confirmarSenha.value.trim() === '') {
            document.getElementById('confirmarSenhaError').textContent = 'Por favor, confirme sua senha.';
            isValid = false;
        } else if (confirmarSenha.value !== senha.value) {
            document.getElementById('confirmarSenhaError').textContent = 'As senhas não coincidem.';
            isValid = false;
        }

        if (isValid) {
            // Se tudo estiver válido, você pode enviar o formulário
            // Por enquanto, apenas um alerta para fins de demonstração
            alert('Formulário enviado com sucesso! (Em um sistema real, os dados seriam enviados para o servidor)');
            // registrationForm.submit(); // Descomente esta linha para enviar o formulário
        }
    });

    // Função para validar formato de e-mail
    function isValidEmail(email) {
        // Regex simples para validação de e-mail
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});