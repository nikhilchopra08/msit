// Sample data for the selected task (replace this with actual data)
const selectedTask = {
    name: "Sample Task",
    description: "This is a sample task description.",
    dueDate: "January 1, 2024",
    status: "Incomplete",
};

// Function to populate task details
function populateTaskDetails() {
    document.querySelector('.task-details h2').textContent = selectedTask.name;
    document.querySelector('.task-details p').textContent = selectedTask.description;
    document.getElementById('dueDate').textContent = selectedTask.dueDate;
    document.getElementById('taskStatus').textContent = selectedTask.status;
}

// Function to mark the task as complete
document.getElementById('markAsComplete').addEventListener('click', () => {
    selectedTask.status = 'Complete';
    document.getElementById('taskStatus').textContent = selectedTask.status;
});

// Function to handle editing the task (redirect to edit page or show an edit form)
document.getElementById('editTask').addEventListener('click', () => {
    // Implement the edit functionality here, such as redirecting to an edit page or displaying an edit form.
    // You can use window.location.href to redirect or toggle the visibility of an edit form.
    // Example: window.location.href = 'edit-task.html?id=' + selectedTask.id;
});

// Function to handle deleting the task (redirect to task list or show a confirmation dialog)
document.getElementById('deleteTask').addEventListener('click', () => {
    // Implement the delete functionality here, such as redirecting to the task list or displaying a confirmation dialog.
    // You can use window.location.href to redirect or show a confirmation dialog using JavaScript.
    // Example: const confirmDelete = confirm('Are you sure you want to delete this task?');
    // if (confirmDelete) {
    //     window.location.href = 'task-list.html';
    // }
});

// Populate task details on page load
populateTaskDetails();
