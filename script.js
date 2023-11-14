// Variável de conexão com o banco
var database = firebase.database();

function enviar() {
    // Crie 5 variáveis que recebam os valores dos inputs
    let nome = document.getElementById("input1").value;
    let email = document.getElementById("input2").value;
    let senha = document.getElementById("input3").value;
    let musica = document.getElementById("input4").value;
    let filme = document.getElementById("input5").value;


    let usuario = email.replace(".", "_");

    // Salve os dados no Firebase
    database.ref('usuario/' + usuario).set({
        nome: nome,
        email: email,
        senha: senha,
        musica: musica,
        filme: filme
    });

    alert("Informações salvas");
}

