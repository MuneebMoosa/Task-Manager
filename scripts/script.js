import { darkMode } from "./utils/darkmode.js";
import { displayTask } from "./utils/displaytask.js";
// darkmode
const togglebutton = document.querySelector('.dark-mode');
darkMode(togglebutton);
// darkmode

// input adding
let input = []

if (localStorage.getItem('tasks')) {
  input = JSON.parse(localStorage.getItem('tasks'));
}

displayTask(input);

document.querySelector('.add').addEventListener('click' , () => {
  const title = document.querySelector('.title').value;
  const date = document.querySelector('.date').value;
  const priority = document.querySelector('.priority').value;

const now = new Date();
const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit'});


  const task = {
    heading : title ,
    date : date ,
    priority: priority,
    time: time
  };

  // push input to array
  input.push(task);

  // saved tasks to local storage
  localStorage.setItem('tasks' , JSON.stringify(input));

  // clear inputs
  document.querySelector('.title').value = '';
  document.querySelector('.date').value = '';
  document.querySelector('.priority').value = '';

  displayTask(input);
});




// display task function start
