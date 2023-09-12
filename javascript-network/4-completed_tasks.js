#!usr/bin/node

const request = require('request');
const url = process.argv[2];

request.get(url, (error, response, body) => {
  let todos = JSON.parse(body);
  let completedTasksObject = {};
  let tasksCompleted;
  for (let item of todos) {
    if (item.completed) {
      let property = String(item.userId);
      if (property in completedTasksObject) {
        tasksCompleted = Number(completedTasksObject[property]);
      } else {
        tasksCompleted = 0;
      }
      completedTasksObject = {
        ...completedTasksObject,
        [property]: ++tasksCompleted
      };
    }
  }
  console.log(completedTasksObject);
});
