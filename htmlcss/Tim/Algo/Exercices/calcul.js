// Calcul : 
// Crée une classe Choice ? 

function addition(nbA, nbB){
return nbA + nbB;
}

function multiplication(nbA, nbB){
    return nbA * nbB;
}

function soustraction(nbA, nbB){

    return nbA - nbB;
}

function division(nbA, nbB){
    if(nbB ==0){
        throw new Error("Divison par 0 Impossible")
    }else

    return nbA / nbB;
}

function calculAir(nbA,nbB){

    return 
}

function calculSurface(){
    return  
}


do {
    let choix = Number(prompt("Faite votre choix :  1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Divison\n "))
}while(choix != 1 && choix != 2 && choix != 3 && choix != 4 )

console.log(choix);