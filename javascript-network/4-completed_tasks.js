//#!usr/bin/node

const request = require('request');
const url = process.argv[2];

request.get(url, (error, response, body) => {
  let todos = JSON.parse(body);
  let myObject = {};
  let value;
  for (let obj of todos) {
    value = 0;
    if (obj.completed) {
      let property = obj.userId;
      if (myObject.hasOwnProperty(property)) {
        property = String(property);
        value = Number(myObject[property]);
      }
      myObject = {
        ...myObject,
        [property]: value++
      };
    }
  }
  console.log(myObject);
});
