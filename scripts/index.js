//nome + quantidade de experiência
let heroi = ["Flash", 10.000];

while(true){
    if(heroi[1] <= 1.000){
        console.log("O Herói de nome " + heroi[0] + " está no nível de Ferro.");
    }else if(heroi[1] >= 1.001 && heroi[1] <= 2.000){
        console.log("O Herói de nome " + heroi[0] + " está no nível de Bronze.");
    }if(heroi[1] >= 2.001 && heroi[1] <= 5.000){
        console.log("O Herói de nome " + heroi[0] + " está no nível de Prata.");
    }else if(heroi[1] >= 5.001 && heroi[1] <= 7.000){
        console.log("O Herói de nome " + heroi[0] + " está no nível de Ouro.");
    }if(heroi[1] >= 7.001 && heroi[1] <= 8.000){
        console.log("O Herói de nome " + heroi[0] + " está no nível de Platina.");
    }else if(heroi[1] >= 8.001 && heroi[1] <= 9.000){
        console.log("O Herói de nome " + heroi[0] + " está no nível de Ascendente.");
    }if(heroi[1] >= 9.001 && heroi[1] <= 10.000){
        console.log("O Herói de nome " + heroi[0] + " está no nível de Imortal.");
    }else if(heroi[1] >= 10.001){
        console.log("O Herói de nome " + heroi[0] + " está no nível de Radiante.");
    }
    break;
}