#!usr/bin/node

const request = require('request');

const movieId = process.argv[2];

request.get(
  `https://swapi-api.alx-tools.com/api/films/${movieId}`,
  (error, response, body) => {
    const movie = JSON.parse(body);
    const { characters } = movie;

    for (let character of characters) {
      request.get(character, (error, response, body) => {
        characterObject = JSON.parse(body);
        const { name: characterName } = characterObject;
        console.log(characterName);
      });
    }
  }
);
