// c = print collins
// u = print uche
// k = print Kamsi
// o = print Ogechi

function printName(letter) {
  if (letter === 'c' || letter === 'C') {
    console.log('collins');
  } else if (letter === 'u' || letter === 'U') {
    console.log('uche');
  } else if (letter === 'k' || letter === 'K') {
    console.log('kamsi');
  } else if (letter === 'o' || letter === 'O') {
    console.log('ogechi');
  } else (
    console.log('not a memmber of the family')

  );
}

printName('c');