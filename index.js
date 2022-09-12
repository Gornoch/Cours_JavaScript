/* Une variable est un conteneur pour stocker des données

Le nom d'une variable doit comment par une lettre ou par $ ou _ 

Les noms sont sensibles à la casse (maj et min) 

Certains mots-clés sont réservés car déjà utilisés par Javascript. Ils ne peuvent pas être utilisés comme noms */

/*
let nom =`Vicky`;

 ATTENTION ! le guillement à utiliser est ` (touche 7) 

let presentation =`Salut à tous, mon prénom est ${nom}`;

console.log(presentation);



let livre= {

    titre: "Harry Potter et la Chambre d'Hermione",
    auteur: "J.K. Rowling la terf",
    pages: 720,
    disponible: true
}

let titreDuLivre = livre.titre;
let nbreDePages = livre.pages;

console.log(livre.disponible)


class livre {
    constructor (titre, auteur, pages) {
        this.titre = titre;
        this.auteur = auteur;
        this.pages = pages;
    }
}

let monLivre = new livre("Une certaine idée de l'Anarchie", "Valéry Giscard-d'Estaing", 274);

console.log(monLivre.titre)




let developers = ["Belzebuth", "Satan", "Lucifer", 666];

console.log(developers[0]);
let nbrDePersonnes = developers.length;
console.log(nbrDePersonnes)
developers.push("Valérie Pecresse");
 rajoute une entrée à la fin de la liste 
console.log(developers);
developers.unshift ("Belial");
 rajoute une entrée au début de la liste 
console.log (developers);
developers.pop()
console.log(developers);

let estConnecte = false;

if (estConnecte) {
    console.log("Connexion établie");
} else {
    console.log("Connexion échouée");
}

*/

let scorePSG = 12;
let scoreRealMadrid = 12;

if(scorePSG > scoreRealMadrid) {
    console.log("vous êtes en train de rêver, il est temps d'aller au boulot")
} else if (scorePSG < scoreRealMadrid) {
    console.log("Bah logique");
} else {
    console.log("Encore un match nul ! Bande de nazes !")
}