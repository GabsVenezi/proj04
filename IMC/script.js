let peso = Number(prompt("Insira seu peso em kg:"))
let altura = Number(prompt("Insira sua altura em metros"))
let imc = Number(peso/(altura*altura))

if (imc < 18.5) {
        alert(`Seu IMC é ${imc.toFixed(2)}. Você está Abaixo do peso.`);
    } else if (imc >= 18.5 && imc <= 24.9) {
        alert(`Seu IMC é ${imc.toFixed(2)}. Seu peso está normal.`);
    } else if (imc >= 25 && imc <= 29.9) {
        alert(`Seu IMC é ${imc.toFixed(2)}. Você está em sobrepeso.`);
    } else {
        alert(`Seu IMC é ${imc.toFixed(2)}, o que demonstra obesidade.`);
    }