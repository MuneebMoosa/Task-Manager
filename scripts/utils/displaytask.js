import { deleteHolders } from "./deleteTask.js";

export function displayTask(input, isSearch = false,  originalArray = input) {

  const container = document.querySelector('.task-list');
  container.innerHTML = ''; // Clear previous tasks
  
    // prority start
    const priorityOrder = 
    {
        high: 0,
        medium: 1,
        low: 2
      };

    input.sort((a , b) => {
      // check if which has greater priority
          if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
               return priorityOrder[a.priority] - priorityOrder[b.priority];
            }
      // if priority is same check which date is newest
           if (a.date !== b.date) {
              return new Date(a.date) - new Date(b.date);
            }
      // if date also same compare the entered time 
            return new Date("1970-01-01T" + a.time) - new Date("1970-01-01T" + b.time);
    })


for (let i = 0; i < input.length; i++) {

  const task = input[i];
  
    const taskDiv = document.createElement('div');

    const actualIndex = isSearch ? task.originalIndex : i;
    taskDiv.setAttribute('data-index', actualIndex);

    taskDiv.classList.add('task');
    taskDiv.innerHTML = `
      <div class="task-type">
        <div class="task-left">
          <input class="checkbox" type="checkbox">
          <p class="task-head ">${task.heading}</p>
        </div>
        <p class="date-head js-task-date">${task.date}</p>
      </div>
      <div class="task-feature">
        <p class="task-prio">Priority : ${task.priority}</p>
        <p class="date-prio js-task-date">${task.date}</p>
      </div>
    `;
 container.appendChild(taskDiv); // Add task to .task-list

  const checkbox = taskDiv.querySelector('.checkbox');

   if (task.completed) {
      checkbox.checked = true;
      taskDiv.style.border = '2px solid red';
    }

    checkbox.addEventListener('change', () => {
      originalArray[actualIndex].completed = checkbox.checked;
      taskDiv.style.border = checkbox.checked ? '2px solid red' : '';
      localStorage.setItem('tasks', JSON.stringify(originalArray));
    });

    
    //  delete start

    const {setTimer , clearTimer } = deleteHolders(task, actualIndex, originalArray, taskDiv);
    
    // Touch on laptop
    taskDiv.addEventListener('mousedown', setTimer);
    taskDiv.addEventListener('mouseup', clearTimer);
    taskDiv.addEventListener('mouseleave', clearTimer);

    // Touch on mobile
    taskDiv.addEventListener('touchstart', setTimer);
    taskDiv.addEventListener('touchend', clearTimer);
    taskDiv.addEventListener('touchmove', clearTimer);
        
    }
}

