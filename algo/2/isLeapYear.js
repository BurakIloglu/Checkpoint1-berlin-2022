/*
Tu dois écrire une fonction permettant de déterminer si une année est bissextile.
Elle renverra true si l'année passée en paramêtre est bissextile et false si ce n'est pas le cas.
Pour rappel, une année est bissextile:
 - si elle est divisible par 4 sans être divisible par 100,
 ou
 - si elle est divisible par 400.
Les années 2004, 2016 et 2020 sont bissextiles.
Autre rappel: Tu dois utiliser l'opérateur modulo (%) pour vérifier si un nombre est divisible par un autre.
*/

function isLeapYear(year) {
  let year4 = year % 4;
  let yearDivise = year % 100;
  let year400 = year % 400
  
  if (year4 === 0 && yearDivise !== 0) {
    return true
  } else if (year400 === 0) {
  return true
  } else {
    return false
  }
}

module.exports = isLeapYear;
