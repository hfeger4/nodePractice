const fs = require('fs');

// fs.readFile('./animals.txt', 'utf-8', (err,data) => {
//   if (err){
//     console.log(err);
//   }else{
//     console.log(data);
//   }
// });

function selectAnimals(animalString, animalLetter) {
  return animalString
    .split('\n')
    .filter(animal => animal.startsWith(animalLetter))
    .join('\n');
}

const animalLetter = process.argv[2].toUpperCase();

fs.readFile('./animals.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const animals = selectAnimals(data, animalLetter);

  fs.writeFile(`${animalLetter}_animals.txt`, animals, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`successfully created ${animalLetter}_animals.txt`);
  });
});

console.log(process.argv[2]);
