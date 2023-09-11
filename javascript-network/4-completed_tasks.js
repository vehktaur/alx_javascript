//#!usr/bin/node

const request = require('request');
const url = process.argv[2];

let todo = [];
let myObject = {};
let value = 1;
request.get(url, (error, response, body) => {
  todo = JSON.parse(body);
  for (let obj of todo) {
    if (obj.completed) {
      let property = obj.userId;
      if (myObject.hasOwnProperty(property)) {
        property = String(property);
        let value = Number(myObject[property]);
      } else {
        value = 1;
      }
      myObject = {
        ...myObject,
        [property]: obj.completed ? value++ : value
      };
    }
  }
  console.log(myObject);
});
