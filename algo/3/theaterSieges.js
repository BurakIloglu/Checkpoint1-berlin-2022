/*
Un employé de théatre souhaiterait obtenir la liste de tous les sièges présents dans sa salle principale.
Dans la salle les sièges sont répartis de la manière suivantes : 
  - Il y a 26 colonnes de sièges, numérotés de "1" à "26"
  - Chaque colonne contient 100 sièges, numérotés de "1" à "100"

Compléter la fonction theaterSieges de manière à ce qu'elle retourne une matrice 
où chaque sous-tableau liste les positions des sieges d'une rangée.

exemple :

[
  ['1-1', '1-2', '1-3', ..., '1-100'], 
  ['2-1', '2-2', '2-3', ..., '2-100'],
  ... 
  ['26-1', '26-2', '26-3', ..., '26-100']
] 
*/

function theaterSieges() {
  let siegesArray = [];

  /* v pour l'index vertical, h pour l'index horizontal */
  for (let v = 0; v < 26; v++) {
    for(let h = 0; h < 100; v++) {
        siegesArray[v] = [];
    }
  }
  for (let v = 0; v < 26; v++) {
    for(let h = 0; h < 100; h++) {
       siegesArray[v][h] = `${v+1}-${h+1}`;
    }
  }
  return siegesArray;  
}

// soit ça me fait planter vsCode soir j'ai une erreur out of memory.... 
// j'ai réussi à le faire tourner sous un replit  
// je capitule.....

console.log(theaterSieges());

module.exports = theaterSieges;
