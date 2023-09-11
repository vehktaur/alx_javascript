//#!usr/bin/node

const request = require('request');
const url = process.argv[2];

let todo = [];
let myObject = {};
let value;
request.get(url, (error, response, body) => {
  todo = JSON.parse(body);
  for (let obj of todo) {
    value = 0
    if (obj.completed) {
      let property = obj.userId;
      if (myObject.hasOwnProperty(property)) {
        property = String(property);
        value = Number(myObject[property]);
      }
      myObject = {
        ...myObject,
        [property]: value+1
      };
    }
  }
  console.log(myObject);
});
