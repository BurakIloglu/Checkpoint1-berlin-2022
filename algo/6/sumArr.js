/*
écris une fonction, qui prend deux paramètres.
Ces deux paramètres sont des arrays de string numbers.
Ta fonction doit renvoyer un seul array avec la somme des
éléments correspondants en string.
Si l'un des deux éléments est vide, il doit être considéré comme 0.
Exemple :
sumArr( ["1", "2", "3"], ["2", "4", "1"] ) doit renvoyer ["3", "6", "4"]
sumArr( ["2", "7", "3"], ["2", "4", "9"] ) doit renvoyer ["4", "11", "12"]
sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) doit renvoyer ["4", "11", "12", "8", "2"]
*/

function sumArr(arrayA, arrayB) {
  // Your code here !
  // let longueur = arrayA.length > arrayB.length? arrayA.length : arrayB.length;
  let resultat = [];

  if (arrayA.length > arrayB.length){
    for (let i = arrayB.length; i < arrayA.length; i++){
      arrayB.push('0');
    }
  }
  else if (arrayB.length > arrayA.length){
    for (let j = arrayA.length; j < arrayB.length; j++){
      arrayA.push('0');
    }
  }
  resultat = [];
  for(let k = 0; k < arrayB.length; k++){
    resultat.push((+arrayA[k] + +arrayB[k]).toString());
  }
  return resultat;
}

module.exports = sumArr;
