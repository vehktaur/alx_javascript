#!usr/bin/node

const request = require('request');
const url = process.argv[2];

request.get(url, (error, response, body) => {
  const parsedBody = JSON.parse(body);
  const { results: films } = parsedBody;
  let numberOfMovies = 0;
  films.forEach((film) => {
    let { characters } = film;
    characters.forEach((character) => {
      if (character.includes('18')) {
        numberOfMovies++;
      }
    });
  });
  console.log(numberOfMovies);
});
