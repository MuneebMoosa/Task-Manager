import { displayTask } from "./displaytask.js";


export function deleteHolders(task, actualIndex, originalArray, taskDiv) {
// Add long-press to delete
  let holdTimer;
  
      function setTimer(){
                holdTimer = setTimeout(() => {
                  const confirmDelete = confirm(`Delete task: "${task.heading}"?`);
                  if (confirmDelete) {
                    originalArray.splice(actualIndex, 1);
                    localStorage.setItem('tasks', JSON.stringify(originalArray));
                    document.querySelector('.search').value = ''; // if deleted after insearch tab to make search tab cleared
                    displayTask(originalArray); // Re-render the list
                  }else {
                    taskDiv.style.border = '';
                  }
                }, 1000); // 1 second hold
              }

      function clearTimer(){
        clearTimeout(holdTimer);
      }

      return {setTimer , clearTimer};
}