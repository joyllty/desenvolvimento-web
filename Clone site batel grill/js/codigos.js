// alert("Sua idade é: " + idade + "!");
let x= 100;
console.log(x);
console.log (typeof(x));

function copia_e_cola(){
    let nome = document.getElementById('nome').value; 
    console.log(nome);
    let comando = "<p id= 't'>" + nome + "</p>";
    document.getElementById('contato_img').innerHTML += comando;
}