//Escreva um programa que leia o nome, salário atual e percentual de reajuste para um trabalhador,
//calcule e imprima na tela seu salário reajustado. Considere a interface ilustrada abaixo.
function calcula_salario(){
    //obtendo o valor do input
    let nome = (document.getElementById('nome').value);
    let salarioAtual = parseFloat(document.getElementById('salario').value);
    let percentReajuste = parseFloat(document.getElementById('reajuste').value);

    //calculando o novo salario
    const novoSalario = salarioAtual + (salarioAtual * percentReajuste / 100);

    //exibindo o resultado
    document.getElementById('novosalario').innerText = 'Novo salário para ' + nome + ' é: ' + novoSalario;
} 
