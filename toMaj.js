// generic function to put all characters to MAj inside an array
function toMaj(tab) {
  for (let i = 1; i < tab.length; i++) {
    tab[i] = tab[i][0].toUpperCase() + tab[i].slice(1);
  }
  return tab;
}

module.exports = toMaj;
