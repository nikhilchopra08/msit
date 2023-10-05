// // Sample data for tasks (you can replace this with actual data)
// const initialTasks = [
//     { id: 1, name: "Task 1", completed: false },
//     { id: 2, name: "Task 2", completed: false },
// ];

// // Function to render tasks on the page
// function renderTasks(tasks) {
//     const taskList = document.getElementById("taskList");
//     taskList.innerHTML = "";

//     tasks.forEach(task => {
//         const listItem = document.createElement("li");
//         listItem.innerHTML = `
//             <input type="checkbox" id="task${task.id}" ${task.completed ? 'checked' : ''}>
//             <label for="task${task.id}">${task.name}</label>
//             <button class="edit">Edit</button>
//             <button class="delete">Delete</button>
//         `;

//         // Add event listeners for editing and deleting tasks
//         const editButton = listItem.querySelector(".edit");
//         const deleteButton = listItem.querySelector(".delete");

//         editButton.addEventListener("click", () => editTask(task.id));
//         deleteButton.addEventListener("click", () => deleteTask(task.id));

//         taskList.appendChild(listItem);
//     });
// }

// // Function to add a new task
// function addTask(taskName) {
//     const newTask = {
//         id: Date.now(),
//         name: taskName,
//         completed: false,
//     };
//     tasks.push(newTask);
//     renderTasks(tasks);
// }

// // Function to edit a task
// function editTask(taskId) {
//     const taskToEdit = tasks.find(task => task.id === taskId);
//     if (!taskToEdit) return;

//     const newName = prompt("Edit task name:", taskToEdit.name);
//     if (newName !== null) {
//         taskToEdit.name = newName;
//         renderTasks(tasks);
//     }
// }

// // Function to delete a task
// function deleteTask(taskId) {
//     const taskIndex = tasks.findIndex(task => task.id === taskId);
//     if (taskIndex !== -1) {
//         tasks.splice(taskIndex, 1);
//         renderTasks(tasks);
//     }
// }

// // Function to handle form submission
// document.getElementById("addTaskForm").addEventListener("submit", function (e) {
//     e.preventDefault();
//     const taskName = document.getElementById("taskName").value.trim();
//     if (taskName !== "") {
//         addTask(taskName);
//         document.getElementById("taskName").value = ""; // Clear the input field
//     }
// });

// // Initial rendering of tasks
// const tasks = [...initialTasks];
// renderTasks(tasks);
