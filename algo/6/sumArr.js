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
  const result = [];
  let numberA
  let numberB
  for (i=0 ; i< arrayB.length; i++){
    if (arrayA[i]=== null || arrayA[i]=== "0" ){
      numberA = 0
    } else {
      numberA = parseInt(arrayA[i]);
    }
    if (arrayB[i]=== null || arrayB[i]=== "0" ){
      numberB = 0
    } else {
      numberB = parseInt(arrayB[i]);
    }
    result.push((numberA+numberB).toString())
    
  }
  if (arrayA.length>arrayB.length){
    for (i= arrayB.length; i< arrayA.length; i++){
      result.push(arrayA[i])
    }
  }
  
  return result
}

module.exports = sumArr;
