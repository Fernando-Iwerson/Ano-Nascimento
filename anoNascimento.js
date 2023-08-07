const prompt = require('prompt-sync')();

var nomeComp,anoNasc,idade,anoAtual;
anoAtual = 2023

nomeComp = prompt("Diga seu nome Completo: " );
anoNasc = 0;

    while(anoNasc < 1922 || anoNasc > anoAtual){
        anoNasc = parseInt(prompt("Diga o ano que você nasceu: "));

            console.log("Ano invalido, Digite novamente o ano ");
            
        }if(anoNasc >= 1922 || anoNasc < anoAtual){
            
            console.log("Seu nome é:",nomeComp);
            console.log("voce nasceu em: ",anoNasc);
            
            idade = anoAtual - anoNasc;
            
            console.log("Você completou ou Completará: ",idade);
            
        }
    





