//Escreva um código em javascript que recebe três notas, calcula a média e informe se o aluno
//foi aprovado (média maior ou igual a 6) ou reprovado (média menor que 6).

let nota1, nota2, nota3;
function calcula_media(){
    nota1 = Number (prompt("Informe a nota 1: "));
    nota2 = Number (prompt("Informe a nota 2: "));
    nota3 = Number (prompt("Informe a nota 3: "));
    
    let media = (nota1 + nota2 + nota3) / 3;
    console.log(media);

    let status;
    if(media >= 6)
        status = "APROVADO!";
    else
        status = "REPROVADO";

    resposta = "<p>A média das notas: </p>" +
               "<p>Nota 1: " + nota1 + "</p>" +
               "<p>Nota 2: " + nota2 + "</p>" +
               "<p>Nota 3: " + nota3 + "</p>" +
               "<h3>é: " + media.toFixed(2) + "</h3";
    document.getElementById('estruturas').innerHTML = resposta;
}

// Array com nomes e notas dos alunos
let alunos = [ { nome: "Alice", nota: 92 },
               { nome: "Bento", nota: 38 },
               { nome: "Carol", nota: 88 },
               { nome: "Marcos", nota: 65 },
               { nome: "Elaine", nota: 72 } ];

function listarAlunos(){
    let resposta;
    for(let i = 0; i < alunos.length; i++){
        resposta = "<p>Aluno ["+ i + "]:" + alunos[i].nome + "<br>" +
                   "<p>Nota ["+ i + "]:" + alunos[i].nota + "</p>";

        document.getElementById('estruturas').innerHTML +=  
        resposta;
    } 
}