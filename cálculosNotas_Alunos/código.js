/* Escreva um código em javascript que inicialize uma estrutura de dados com o nome e nota
de 5 alunos.
Crie botões para executar cada uma das seguintes funções:
• função “listaAlunos( )” para exibir na página os dados de todos os alunos;
• função “maiorNota( )” para exibir na página os dados do aluno com MAIOR nota;
• função “menorNota( )” para exibir na página os dados do aluno com MENOR nota;*/ 

//array
let alunos = [ {nome: "Bruna",   nota: 98},
               {nome: "João",    nota: 95},
               {nome: "Maria",   nota: 32},
               {nome: "Marcos",  nota: 67},
               {nome: "Helena",  nota: 76} ];

//função que lista todos os alunos e suas notas
function listarAlunos(){
    let resposta; 
    for(let i = 0; i < alunos.length; i++){
        resposta = "<p>Aluno [" + i + "]:" + alunos[i].nome + "<br>" +
                   "</p>Nota [" + i + "]:" + alunos[i].nota + "</p>";
        //exibindo o resultado   
        document.getElementById('lista').innerHTML += resposta;
    }
} 

//função que exibe a maior nota dos alunos e seu nome
function maiorNota(){
    let maior = alunos[0].nota;
    let nomeMaior = alunos[0].nome;

    for(let i = 0; i < alunos.length; i++){
        if (alunos[i].nota > maior){
            maior = alunos[i].nota;
            nomeMaior = alunos[i].nome;
        }
    }

    //exibindo o resultado
    let resposta = "<p>O aluno com a maior nota é:" + "<br>" +
                   "Nome: " + nomeMaior + "<br>" +
                   "Nota: " + maior + "</p>";
    document.getElementById('maior').innerHTML = resposta;
}

//função que exibe a menor nota dos alunos e seu nome
function menorNota(){
    let menor = alunos[0].nota;
    let nomeMenor = alunos[0].nome;

    for(let i = 0; i < alunos.length; i++){
        if (alunos[i].nota < menor){
            menor = alunos[i].nota;
            nomeMenor = alunos[i].nome;
        }
    }

    //exibindo o resultado
    let resposta = "<p>O aluno com a menor nota é:" + "<br>" +
                   "Nome: " + nomeMenor + "<br>" +
                   "Nota: " + menor + "</p>";
    document.getElementById('menor').innerHTML = resposta;
}

//função que calcula e exibe a média de todas as notas
function calcula_media(){
    let soma = 0, media;

    for(let i = 0; i < alunos.length; i++){
        soma += alunos[i].nota;
    }

    media = soma/alunos.length;

    //exibindo o resultado
    let resposta = "<p>A média das notas é: " + media + "</p>"
    document.getElementById('media').innerHTML = resposta;
}

//função que calcula a soma das notas de dois alunos com índice 
function calcula_soma(){
    //obtendo os indices digitados pelo usuário
    let num1 = parseInt(document.getElementById('ind1S').value);
    let num2 = parseInt(document.getElementById('ind2S').value);

    let soma = alunos[num1].nota + alunos[num2].nota;
    
    //exibindo o resultado
    let resposta = "<p>A soma da nota de " + alunos[num1].nome + " e " + alunos[num2].nome + " é: " + soma + "</p>";
    document.getElementById('soma').innerHTML = resposta;
}

function calcula_multi(){
    //obtendo os indices digitados pelo usuário
    let num1 = parseInt(document.getElementById('ind1M').value);
    let num2 = parseInt(document.getElementById('ind2M').value);

    let multi = alunos[num1].nota * alunos[num2].nota;
    
    //exibindo o resultado
    let resposta = "<p>A multiplicação da nota de " + alunos[num1].nome + " e " + alunos[num2].nome + " é: " + multi + "</p>";
    document.getElementById('multipli').innerHTML = resposta;
}
