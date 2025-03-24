function validarCpf() {
    let cpf = document.getElementById("cpf").value;

    let cpfNumerico = cpf.replace(/\D/g, "");  // remove os caracteres q não são nomors

    if (cpfNumerico.length < 11 || cpfNumerico.length > 11) {
        document.getElementById("resposta").innerText = "issae se quer é um cpf 🥲, refassa plz.";
        document.getElementById("resposta").style.color = "#eb92be";
        resposta.style.visibility = "visible";
        return;
    }

    let cpfArray = [];
    for (let i = 0; i < 11; i++) {
        cpfArray[i] = +cpfNumerico.charAt(i);  // converte string pra int
    }

    console.log(cpfArray); 

     // calcular primeiro digito verificador
     let decrescente = 10;
     let numPos = 0;
        for (let i = 0; i < 9; i++) {
         numPos += cpfArray[i] * decrescente--;
        }
     let resto = numPos % 11;
     let digitoVerificador = (resto < 2) ? 0 : 11 - resto;

    console.log("digito verificador 1: " + digitoVerificador);

    // calcular segundo digito verificador
    let decrescente2 = 11;
    let numPos2 = 0;
        for (let i = 0; i < 9; i++) {
            numPos2 += cpfArray[i] * decrescente2--;
        }
    numPos2 += digitoVerificador * 2;
    let resto2 = numPos2 % 11;
    let digitoVerificador2 = (resto2 < 2) ? 0 : 11 - resto2;

    console.log("digito verificador 2: " + digitoVerificador2);

    // Compara os dígitos verificadores com os 2 últimos dígitos do cpf
    let penultimoDigito = cpfArray[9];  
    let ultimoDigito = cpfArray[10];   

    console.log("Penúltimo dígito do CPF: " + penultimoDigito);
    console.log("Último dígito do CPF: " + ultimoDigito);

    if (digitoVerificador == penultimoDigito && digitoVerificador2 == ultimoDigito) {
        console.log("seu cpf é válido.");
        document.getElementById("resposta").innerText = "seu cpf é valido, amém 🙏";
        document.getElementById("resposta").style.color = "#3770ad";
    } else {
        console.log("seu cpf não é válido.");
        document.getElementById("resposta").innerText = "seu cpf não é valido 💩";
        document.getElementById("resposta").style.color = "#664C28";
    }
    resposta.style.visibility = "visible";
}


   