"use strict"
//var compte_a_rebours = document.getElementById('compte_a_rebours');

//date actuelle Mois Jour Heures:Minutes:Secondes Année
//var date_actuelle = new Date();

//date de l'évènement
//var date_evenement = new Date("Jan 1 00:00:00 2018");

//On calcule la différence entre les deux dates (date_evenement - date_actuelle).
//Si la différence est strictement positive, le compte à rebours n'est pas terminé.
//Si la différence est nulle, alors le compte à rebours vient de se terminer à l'instant.
//Sinon (la différence est strictement négative), le compte à rebours est terminé. Dans ce cas-là, on calculera depuis combien de temps il est terminé.

let today = new Date(); //Date() est un constructeur une fonction spéciale capable de construire un objet
let todaySeconds = today.getSeconds();
let todayMinutes = today.getMinutes();
let todayHours = today.getHours();
let todayDay = today.getDay();

let deadline = new Date(2022, 4, 4, 8, 30, 0); //en JS les mois sont numérotés de 0 à 11
let deadSeconds = deadline.getSeconds();
let deadMinutes = deadline.getMinutes();
let deadHours = deadline.getHours();
let deadDay = deadline.getDay();


// //pour une meilleure lecture nous allons afficher 0 quand le résultat est négatif
var diffDays = deadDay - todayDay  ;
if(diffDays <= 0){
    diffDays = "0";
}

var diffHours = deadHours - todayHours;
if(diffHours <= 0){
    diffHours = 23 + diffHours;
}

var diffMinutes = deadMinutes - todayMinutes;


var diffSeconds = deadSeconds - todaySeconds;





//ce qui va être afficher dans le div compte_a_rebours dans le HTML
// let afficher = document.getElementById('compte_a_rebours');


// //Cette fonction a été créer pour être prise en compte dans le fonction compte_a_rebours. La fonction setAfficher consiste à cacher le compte à rebours quand le temps est écoulé
// function setAfficher() {
//     afficher.style.display = 'none';
// }
// //Quand la date de départ est égale à la date de l'évènement, afficher Bravo!.., quand la date de départ dépasse la date de l'évènement, afficher Temps écoulé... quand la date de l'évènement n'est pas encore atteinte afficher le compte à rebours
// function compte_a_rebours() {
//     if(today === deadline){
//         document.getElementById('compte_a_rebours').innerHTML = `Bravo ! vous avez terminé ce projet en (${today.getDate()})- (${deadline.getDate()})`;
//         setTimeout(setAfficher, 5000);
//     } else if (today > deadline){
//         afficher.innerHTML = `Temps écoulé ! Le projet était à rendre le 04 mai 2022 à 8:30:00 `;
//     } else {
//         afficher.innerHTML = `Temps restant :  ${diffDays} jours, ${diffHours} heures, ${diffMinutes} minutes et ${diffSeconds} secondes`;
//     }
// }

// compte_a_rebours() des JOURS;
let afficherJour = document.querySelector('#jours button');


//Cette fonction a été créer pour être prise en compte dans le fonction compte_a_rebours. La fonction setAfficher consiste à cacher le compte à rebours quand le temps est écoulé
function setAfficher() {
    afficherJour.style.display = 'none';
}
//Quand la date de départ est égale à la date de l'évènement, afficher Bravo!.., quand la date de départ dépasse la date de l'évènement, afficher Temps écoulé... quand la date de l'évènement n'est pas encore atteinte afficher le compte à rebours
function reboursJ() {
    if(today === deadline){
        document.getElementById('compte_a_rebours').innerHTML = `Bravo ! vous avez terminé ce projet en (${today.getDate()})- (${deadline.getDate()})`;
        setTimeout(setAfficher, 5000);
    } else if (today > deadline){
        afficherJour.innerHTML = `0 `;
    } else {
        afficherJour.innerHTML = `${diffDays}`;
    }
    diffDays--;
    window.setTimeout('reboursJ()',86400000);
}



// compte_a_rebours() des HEURES;
let afficherheures = document.querySelector('#heures button');


//Cette fonction a été créer pour être prise en compte dans le fonction compte_a_rebours. La fonction setAfficher consiste à cacher le compte à rebours quand le temps est écoulé
function setAfficher() {
    afficherheures.style.display = 'none';
}
//Quand la date de départ est égale à la date de l'évènement, afficher Bravo!.., quand la date de départ dépasse la date de l'évènement, afficher Temps écoulé... quand la date de l'évènement n'est pas encore atteinte afficher le compte à rebours
function reboursH() {
    if(today === deadline){
        document.getElementById('compte_a_rebours').innerHTML = `Bravo ! vous avez terminé ce projet en (${today.getDate()})- (${deadline.getDate()})`;
        setTimeout(setAfficher, 5000);
    } else if (today > deadline){
        afficherheures.innerHTML = `0 `;
    } else {
        afficherheures.innerHTML = `${diffHours}`;
    }
    diffHours--;
    window.setTimeout('reboursH()',3600000);
}



// compte_a_rebours() des MINUTES;
let afficherMinutes = document.querySelector('#minutes button');


//Cette fonction a été créer pour être prise en compte dans le fonction compte_a_rebours. La fonction setAfficher consiste à cacher le compte à rebours quand le temps est écoulé
function setAfficher() {
    afficherMinutes.style.display = 'none';
}
//Quand la date de départ est égale à la date de l'évènement, afficher Bravo!.., quand la date de départ dépasse la date de l'évènement, afficher Temps écoulé... quand la date de l'évènement n'est pas encore atteinte afficher le compte à rebours
function reboursM() {
    if(today === deadline){
        document.getElementById('compte_a_rebours').innerHTML = `Bravo ! vous avez terminé ce projet en (${today.getDate()})- (${deadline.getDate()})`;
        setTimeout(setAfficher, 5000);
    } else if (today > deadline){
        afficherMinutes.innerHTML = `0 `;
    } else {
        afficherMinutes.innerHTML = `${diffMinutes}`;
    }
    diffMinutes--;
    if(diffMinutes <= 0){
        diffMinutes = 59 + diffMinutes;
        diffHours = diffHours - 1 ;
    }
    window.setTimeout('reboursM()',60000);
}



// compte_a_rebours() des SECONDES;
let afficherSecondes = document.querySelector('#secondes button');


//Cette fonction a été créer pour être prise en compte dans le fonction compte_a_rebours. La fonction setAfficher consiste à cacher le compte à rebours quand le temps est écoulé
function setAfficher() {
    afficherSecondes.style.display = 'none';
}
//Quand la date de départ est égale à la date de l'évènement, afficher Bravo!.., quand la date de départ dépasse la date de l'évènement, afficher Temps écoulé... quand la date de l'évènement n'est pas encore atteinte afficher le compte à rebours
function reboursS() {
    if(today === deadline){
        document.getElementById('compte_a_rebours').innerHTML = `Bravo ! vous avez terminé ce projet en (${today.getDate()})- (${deadline.getDate()})`;
        setTimeout(setAfficher, 5000);
    } else if (today > deadline){
        afficherSecondes.innerHTML = `0 `;
    } else {
        afficherSecondes.innerHTML = `${diffSeconds}`;
    }
    diffSeconds--;
    if(diffSeconds <= 0){
        diffSeconds = 59 + diffSeconds;
        diffMinutes = diffMinutes - 1;
    }
    window.setTimeout('reboursS()',1000);
}






