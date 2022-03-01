function calcula(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let resultado = document.getElementsByTagName("p")[0];
    let imc = peso / (altura * 2);
    resultado.innerHTML = `Seu IMC é ${Math.round(imc)} kg/m2`

    let classificacaoPeso = document.getElementsByTagName("p")[1]

    if(imc > 0 && imc < 17){
        classificacaoPeso.innerHTML = "Você está muito abaixo do peso.";
    }else if(imc >= 17 && imc < 18.5){
        classificacaoPeso.innerHTML = "Você está abaixo do peso.";
    }else if(imc >= 18.5 && imc < 25){
        classificacaoPeso.innerHTML = "Seu peso está normal.";
    }else if(imc >= 25 && imc < 30){
        classificacaoPeso.innerHTML = "Você está acima do peso.";
    }else if(imc >= 30 && imc < 35){
        classificacaoPeso.innerHTML = "Você possui obesidade de grau 1.";
    }else if(imc >= 35 && imc <= 40){
        classificacaoPeso.innerHTML = "Você possui obesidade de grau 2.";
    }else if(imc > 40){
        classificacaoPeso.innerHTML = "Você possui obesidade de grau 3.";
    }else{
        classificacaoPeso.innerHTML = "IMC invalido";
    }
}

onload = function(){
    let botaoCalcular = document.getElementById("calcular");
    botaoCalcular.addEventListener("click", calcula);
}