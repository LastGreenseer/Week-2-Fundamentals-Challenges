//Activity 1

let favFilms = [
  "The Dark Knight",
  "Tarzan",
  "Inception",
  "Spider-man 2",
  "Airplane",
];

favFilms.push("Logan", "Infinity War");

console.log(favFilms);

let currentFilm = [3];

if ((currentFilm = "Spider-man 2")) {
  console.log(`${currentFilm}? I thought we were watching ${favFilms[0]}`);
} else {
  console.log(`I wonder what we will watch today! Maybe ${favFilms[5]}?`);
}

//Activity 2
const min = 0;
const max = 51;

let randNum = () => {
  return Math.floor(Math.random() * 50);
};
console.log(randNum);
