/*  */
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('create-task-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskInput = document.getElementById('new-task-description');
    const taskDescription = taskInput.value;

    const taskList = document.getElementById('tasks');
    const newTask = document.createElement('li');
    newTask.textContent = taskDescription;

    // Add a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      newTask.remove();
    });
    newTask.appendChild(deleteButton);

    taskList.appendChild(newTask);

    // Clear the input field
    taskInput.value = '';
  });
});