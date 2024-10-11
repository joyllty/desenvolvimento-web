//função que exibe os dados do formulário
function recebeDados(){
    event.preventDefault(); 

    let user = document.getElementById('usuario').value;
    let senhaL = document.getElementById('senha').value;

    alert("Usuário: " + user + "\nSenha: " + senhaL); 
    console.log("Usuário: " , user);
    console.log("Senha: ", senhaL);

    let resposta = "<p>Usuário: " + user + "<br>" + "Senha: " + senhaL + "</p>";
    document.getElementById('dados_resp').innerHTML = resposta;
}

function verificaNumero() {
    let num = parseInt(document.getElementById('numero').value);
    let resposta;

    if (num % 2 === 0) {
        resposta = "<p>O número é par</p>";
    } else {
        resposta = "<p>O número é ímpar</p>";
    }
    document.getElementById('respos').innerHTML = resposta;
}