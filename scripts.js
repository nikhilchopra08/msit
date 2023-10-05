// // JavaScript code to enhance interactivity

// // Function to handle checkbox state changes
// function handleTaskCompletion(event) {
//     const checkbox = event.target;
//     const taskLabel = checkbox.nextElementSibling; // Get the associated <label> element

//     if (checkbox.checked) {
//         // Task is marked as completed
//         taskLabel.style.textDecoration = 'line-through';
//     } else {
//         // Task is not completed
//         taskLabel.style.textDecoration = 'none';
//     }
// }

// // Function to add a new task
// function addNewTask(taskText) {
//     const taskList = document.querySelector('.task-list ul');
//     const taskItem = document.createElement('li');
//     const taskCheckbox = document.createElement('input');
//     const taskLabel = document.createElement('label');

//     taskCheckbox.type = 'checkbox';
//     taskLabel.textContent = taskText;

//     taskItem.appendChild(taskCheckbox);
//     taskItem.appendChild(taskLabel);
//     taskList.appendChild(taskItem);

//     // Add event listener to the new checkbox
//     taskCheckbox.addEventListener('change', handleTaskCompletion);
// }

// // Add event listeners to all task checkboxes
// const taskCheckboxes = document.querySelectorAll('.task-list input[type="checkbox"]');
// taskCheckboxes.forEach(checkbox => {
//     checkbox.addEventListener('change', handleTaskCompletion);
// });

// // Handle adding a new task when a button or form is submitted
// const addButton = document.querySelector('#addTaskButton');
// const taskInput = document.querySelector('#taskInput');

// addButton.addEventListener('click', () => {
//     const newTaskText = taskInput.value.trim();
//     if (newTaskText !== '') {
//         addNewTask(newTaskText);
//         taskInput.value = ''; // Clear the input field
//     }
// });

// // Additional JavaScript code can be added as needed for dynamic behavior
