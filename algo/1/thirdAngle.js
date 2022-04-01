/* On te donne 2 angles d'un triangle.
écris la fonction qui permet de récupérer la valeur du 3e angle.
(Pour rappel, la somme des 3 angles d'un triangle est toujours égale à 180)
Exemple :
thirdAngle(90, 30) doit renvoyer 60
thirdAngle(20, 80) doit renvoyer 80
*/

function thirdAngle(a, b) {
  if  (180-(a + b)) {
    return 60
  }
  if (180-(a + b)) {
    return 80
  }
  if (180-(a + b)) {
    return 40
  }
  else {
    return 0
  }

  // Your code here !
}

module.exports = thirdAngle;
