//MENSAGEM
$(document).ready(function () {
    // Ao clicar no botão de enviar mensagem
    $("#enviar-mensagem").on("click", function () {
        // Obter os valores dos campos do formulário
        var nome = $("#nome").val();
        var email = $("#email").val();
        var mensagemTexto = $("#mensagem").val();

        // Validar os campos (opcional, mas recomendado)
        if (!nome || !email || !mensagemTexto) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Criar o objeto de mensagem
        var mensagem = {
            nome: nome,
            email: email,
            mensagem: mensagemTexto
        };

        // Chamar a função inserirMensagem com o objeto (se for definida)
        if (typeof inserirMensagem === "function") {
            inserirMensagem(mensagem);
        }

        // Exibir uma mensagem de sucesso ou realizar alguma ação adicional
        alert("Mensagem enviada com sucesso!");
        
        // Resetar os campos do formulário (opcional)
        $("#form-contato")[0].reset();
    });
});

//ADM
$(document).ready(function () {
    $("#login-btn").on("click", function () {
        var email = $("#email").val();
        var senha = $("#senha").val();

        var objLoginSenha = {
            email: email,
            senha: senha
        };

        // Chama a função validarUsuario do arquivo api.js
        if (validarUsuario(objLoginSenha)) {
            // Redireciona para mensagens.html
            window.location.href = "mensagens.html";
        } else {
            // Exibe a mensagem de erro
            $("#error-message").show();
        }
    });
});

function validarUsuario(objLoginSenha) {
    // Credenciais válidas
    const usuarioValido = {
        email: "admin@admin.com",
        senha: "1234"
    };

    // Verifica se o email e a senha informados correspondem aos valores válidos
    return (
        objLoginSenha.email === usuarioValido.email &&
        objLoginSenha.senha === usuarioValido.senha
    );
}

//MENSAGENS
$(document).ready(function () {
    // Obtém as mensagens usando a função obterMensagens()
    const mensagens = obterMensagens();

    if (mensagens.length > 0) {
        // Cria uma tabela dinâmica
        const tabela = $('<table></table>');
        const cabecalho = `
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Mensagem</th>
                </tr>
            </thead>
        `;
        tabela.append(cabecalho);

        // Preenche a tabela com os dados do array
        const corpoTabela = $('<tbody></tbody>');
        mensagens.forEach(mensagem => {
            const linha = `
                <tr>
                    <td>${mensagem.nome}</td>
                    <td>${mensagem.email}</td>
                    <td>${mensagem.mensagem}</td>
                </tr>
            `;
            corpoTabela.append(linha);
        });
        tabela.append(corpoTabela);

        // Adiciona a tabela ao container
        $('#message-container').append(tabela);
    } else {
        // Exibe uma mensagem caso não haja mensagens
        $('#message-container').append('<p class="no-messages">Nenhuma mensagem recebida.</p>');
    }
});
