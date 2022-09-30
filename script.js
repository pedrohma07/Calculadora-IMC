
const calcular = document.getElementById("calcular");


function imc (){
    const container = document.getElementById("container");
    const nome = document.getElementById("name");
    const altura = document.getElementById("altura");
    const peso = document.getElementById("peso");
    const resultado = document.getElementById("resultado");
    const ilustracao = document.getElementById("ilustracao");

    if(peso.value === "" || altura.value === "" || nome.value === ""){
        alert("Preencha todos os campos!");
    }else{
        resultado.value = peso.value / (Math.pow(altura.value, 2));
        if(resultado.value < 18.5){
            resultado.innerHTML = `Seu IMC é ${resultado.value.toFixed(2)} e você está abaixo do peso
                                    <a href="#ilustracao"><img src="assets/seta.svg" alt="" class="seta"></a>`;
            ilustracao.innerHTML = `<img src="assets/img1.png" alt="" class="ilustracao-item">`;
            ilustracao.style.display = "flex";
        }
        else if(resultado.value >= 18.5 && resultado.value <= 24.99){
            resultado.innerHTML = `Seu IMC é ${resultado.value.toFixed(2)} no está no peso ideal
                                    <a href="#ilustracao"><img src="assets/seta.svg" alt="" class="seta"></a>`;
            ilustracao.innerHTML = `<img src="assets/img2.png" alt="" class="ilustracao-item">`
            ilustracao.style.display = "flex";
        }
        else if(resultado.value >= 25 && resultado.value <= 29.99){
            resultado.innerHTML = `Seu IMC é ${resultado.value.toFixed(2)} e você está com excesso de peso
                                    <a href="#ilustracao"><img src="assets/seta.svg" alt="" class="seta"></a>`;
            ilustracao.innerHTML = `<img src="assets/img3.png" alt="" class="ilustracao-item">`
            ilustracao.style.display = "flex";
        }
        else if(resultado.value >= 30 && resultado.value <= 34.99){
            resultado.innerHTML = `Seu IMC é ${resultado.value.toFixed(2)} e você está com Obesidade classe I
                                     <a href="#ilustracao"><img src="assets/seta.svg" alt="" class="seta"></a>`;
            ilustracao.innerHTML = `<img src="assets/img4.png" alt="" class="ilustracao-item">`
            ilustracao.style.display = "flex";
        }
        else if(resultado.value >= 35 && resultado.value <= 39.99){
            resultado.innerHTML = `Seu IMC é ${resultado.value.toFixed(2)} e você está com Obesidade classe II
                                    <a href="#ilustracao"><img src="assets/seta.svg" alt="" class="seta"></a>`;
            ilustracao.innerHTML = `<img src="assets/img5.png" alt="" class="ilustracao-item">`
            ilustracao.style.display = "flex";
        }
        else if(resultado.value >= 40){
            resultado.innerHTML = `Seu IMC é ${resultado.value.toFixed(2)} e você está com Obesidade classe III
                                    <a href="#ilustracao"><img src="assets/seta.svg" alt="" class="seta"></a>`;
            ilustracao.innerHTML = `<img src="assets/img6.png" alt="" class="ilustracao-item">`
            ilustracao.style.display = "flex";
        }
    }
}
calcular.addEventListener("click", imc)