

export function displayTask(input) {

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
      // if date also same comapre the entered time 
            return new Date("1970-01-01T" + a.time) - new Date("1970-01-01T" + b.time);
    })


for (let i = 0; i < input.length; i++) {
    const task = input[i];

    const taskDiv = document.createElement('div');
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

    // Add long-press to delete
    let holdTimer;
   
    taskDiv.addEventListener('mousedown', () => {
       taskDiv.style.border = '2px solid red'
          holdTimer = setTimeout(() => {
            const confirmDelete = confirm(`Delete task: "${task.heading}"?`);
            if (confirmDelete) {
              input.splice(i, 1);
              localStorage.setItem('tasks', JSON.stringify(input));
              displayTask(input); // Re-render the list
            }else {
              taskDiv.style.border = '';
            }
          }, 1000); // 1 second hold
        });

    taskDiv.addEventListener('mouseup', () => clearTimeout(holdTimer));
    taskDiv.addEventListener('mouseleave', () => clearTimeout(holdTimer));

   
  }
}