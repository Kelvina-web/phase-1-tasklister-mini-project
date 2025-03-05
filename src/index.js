document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskDescription = document.getElementById("new-task-description").value;
    const priority = document.getElementById("priority").value;

    const taskItem = document.createElement("li");
    taskItem.textContent = taskDescription;

    // Set the color based on priority
    if (priority === "high") {
      taskItem.style.color = "red";
    } else if (priority === "medium") {
      taskItem.style.color = "yellow";
    } else if (priority === "low") {
      taskItem.style.color = "green";
    }

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
      taskItem.remove();
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    document.getElementById("new-task-description").value = "";
  });
});