
// Les diapos
let diapoNumero = 1;
afficher(diapoNumero);

// Aller à la diapo suivante
function suivant(i){
    afficher(diapoNumero = diapoNumero + i);
}

// Aller à la diapo précédente
function precedent(i){
    afficher(diapoNumero = diapoNumero - i);
}

// Afficher les diapos actuelle
function diapoActuelle(i){
    afficher(diapoNumero = i);
}

// Afficher les diapos
function afficher(i){
    let diapo = document.getElementsByClassName('diapo');
    let indicateurs = document.getElementsByClassName('indicateurs');

}

