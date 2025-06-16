

export function displayTask(input){

    const container = document.querySelector('.task-list');
    container.innerHTML = '';

    for (let i = 0 ; i < input.length ; i++) {
      const task = input[i];

    container.innerHTML += `
            <div class="task">
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
              </div>
          `;
      }
}