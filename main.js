$(document).ready(function () {
  $("#telefone").mask("(00) 00000-0000");
  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      mensagem: {
        required: false,
      },
    },
    messages: {
      nome: "Porfavor, digite seu nome",
      email: "Porfavor, digite seu e-mail",
      telefone: "Porfavor, digite seu telefone",
    },
    submitHandler: function (form) {
      $("#btn-form").text("ENVIADO");
      $("#btn-form").css("background-color", "#c8c8c8");
      $("#btn-form").css("transform", "scale(1)");
      $("#btn-form").css("color", "#2e2e2e");
      $("#nome").val("");
      $("#email").val("");
      $("#telefone").val("");
      $("#mensagem").val("");
      $("#nome").prop("disabled", true);
      $("#email").prop("disabled", true);
      $("#telefone").prop("disabled", true);
      $("#mensagem").prop("disabled", true);
    },
  });
});
