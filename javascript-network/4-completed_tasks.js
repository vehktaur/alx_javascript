//#!usr/bin/node

const request = require('request');
const url = process.argv[2];

request.get(url, (error, response, body) => {
  let todos = JSON.parse(body);
  let myObject = {};
  let tasksCompleted;
  for (let obj of todos) {
    if (obj.completed) {
      let property = String(obj.userId);
      if (property in myObject) {
        tasksCompleted = Number(myObject[property]);
      } else {
        tasksCompleted = 0;
      }
      myObject = {
        ...myObject,
        [property]: ++tasksCompleted
      };
    }
  }
  console.log(myObject);
});
