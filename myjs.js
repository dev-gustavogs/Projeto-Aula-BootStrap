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

      // Chamar a função inserirMensagem com o objeto
      inserirMensagem(mensagem);

      // Exibir uma mensagem de sucesso ou realizar alguma ação adicional
      alert("Mensagem enviada com sucesso!");
      
      // Resetar os campos do formulário (opcional)
      $("#form-contato")[0].reset();
  });
});

//ADMIN
$(document).ready(function () {
    $("#login-btn").on("click", function () {
        // Captura os valores dos campos
        var email = $("#email").val();
        var senha = $("#senha").val();

        // Cria o objeto conforme a estrutura exigida
        var objLoginSenha = {
            email: email,
            senha: senha
        };

        // Chama a função validarUsuario e verifica o resultado
        if (validarUsuario(objLoginSenha)) {
            // Se for válido, redireciona para mensagens.html
            window.location.href = "mensagens.html";
        } else {
            // Caso contrário, exibe a mensagem de erro
            $("#error-message").show();
        }
    });
});