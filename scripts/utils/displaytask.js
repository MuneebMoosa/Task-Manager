

export function displayTask(input) {

  const container = document.querySelector('.task-list');
  container.innerHTML = ''; // Clear previous tasks

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