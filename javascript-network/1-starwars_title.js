#!usr/bin/node

const request = require('request');
const id = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${id}`;

request.get(url, { encoding: 'utf-8' }, (error, response, body) => {
  const the_body = JSON.parse(body);
  console.log(the_body.title);
});
