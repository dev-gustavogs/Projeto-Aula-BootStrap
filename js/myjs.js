//MENSAGEM
$(document).ready(function () {
    $("#enviar-mensagem").on("click", function () {
        var nome = $("#nome").val();
        var email = $("#email").val();
        var mensagemTexto = $("#mensagem").val();

        if (!nome || !email || !mensagemTexto) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        var mensagem = {
            nome: nome,
            email: email,
            mensagem: mensagemTexto
        };

        if (typeof inserirMensagem === "function") {
            inserirMensagem(mensagem);
        }

        alert("Mensagem enviada com sucesso!");
        
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

        if (validarUsuario(objLoginSenha)) {
            window.location.href = "mensagens.html";
        } else {
            $("#error-message").show();
        }
    });
});

function validarUsuario(objLoginSenha) {
    const usuarioValido = {
        email: "admin@admin.com",
        senha: "1234"
    };

    return (
        objLoginSenha.email === usuarioValido.email &&
        objLoginSenha.senha === usuarioValido.senha
    );
}

//MENSAGENS
$(document).ready(function () {
    const mensagens = obterMensagens();

    if (mensagens.length > 0) {
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

        $('#message-container').append(tabela);
    } else {
        $('#message-container').append('<p class="no-messages">Nenhuma mensagem recebida.</p>');
    }
});
