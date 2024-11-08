let ac = document.getElementById("lampAc");
let ap = document.getElementById("lampAp");

ac.addEventListener("click", liga);
ap.addEventListener("click", desliga);

function liga(){
    document.getElementById("lampada").src="./img/acesa.png";
}

function desliga(){
    document.getElementById("lampada").src="./img/apagada.png";
}

let so = document.getElementById("some");
let apr = document.getElementById("aparece");

some.addEventListener("click", someL);
apr.addEventListener("click", apareceL);

function someL(){
    document.getElementById("lampada").style.display = "none";
}

function apareceL(){
    document.getElementById("lampada").style.display = "block";
}
