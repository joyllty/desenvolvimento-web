//Escreva um programa que leia um número inteiro, calcule e imprima na tela seu antecessor e sucessor.
function antec_sucess(){
    //obtendo o valor do input
    let numero = parseInt(document.getElementById('numero').value);

    //verificação se o input está vazio
    if(numero !== ''){
        let ant = numero - 1;
        let suc = numero + 1;

        //exibe os resultados em <p>
        document.getElementById('antecessor').innerText = 'Antecessor: ' + ant;
        document.getElementById('sucessor').innerText = 'Sucessor: ' + suc;
    } else {
        //caso esteja vazio, mensagem de erro:
        document.getElementById('antecessor').innerText = 'Por favor insira um número: ';
    }
} 
