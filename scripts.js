// JavaScript code to enhance interactivity

// Function to handle checkbox state changes
function handleTaskCompletion(event) {
    const checkbox = event.target;
    const taskLabel = checkbox.nextElementSibling; // Get the associated <label> element

    if (checkbox.checked) {
        // Task is marked as completed
        taskLabel.style.textDecoration = 'line-through';
    } else {
        // Task is not completed
        taskLabel.style.textDecoration = 'none';
    }
}

// Function to add a new task
function addNewTask(taskText) {
    const taskList = document.querySelector('.task-list ul');
    const taskItem = document.createElement('li');
    const taskCheckbox = document.createElement('input');
    const taskLabel = document.createElement('label');

    taskCheckbox.type = 'checkbox';
    taskLabel.textContent = taskText;

    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskLabel);
    taskList.appendChild(taskItem);

    // Add event listener to the new checkbox
    taskCheckbox.addEventListener('change', handleTaskCompletion);
}

// Add event listeners to all task checkboxes
const taskCheckboxes = document.querySelectorAll('.task-list input[type="checkbox"]');
taskCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', handleTaskCompletion);
});

// Handle adding a new task when a button or form is submitted
const addButton = document.querySelector('#addTaskButton');
const taskInput = document.querySelector('#taskInput');

addButton.addEventListener('click', () => {
    const newTaskText = taskInput.value.trim();
    if (newTaskText !== '') {
        addNewTask(newTaskText);
        taskInput.value = ''; // Clear the input field
    }
});

const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Define the fields and create a CSV writer
const csvWriter = createCsvWriter({
    path: 'exported_data.csv',
    header: [
        { id: 'taskName', title: 'Task Name' },
        { id: 'dueDate', title: 'Due Date' },
        // Add more fields as needed
    ]
});

// Example data (replace with your data retrieval logic)
const data = [
    { taskName: 'Task 1', dueDate: '2023-10-10' },
    { taskName: 'Task 2', dueDate: '2023-11-05' },
    // Add more data rows
];

// Write the data to the CSV file
csvWriter.writeRecords(data)
    .then(() => console.log('CSV file written successfully'));

    const fs = require('fs');
const PDFDocument = require('pdfkit');

// Create a new PDF document
const doc = new PDFDocument();
const pdfStream = fs.createWriteStream('exported_data.pdf');

// Example data (replace with your data retrieval logic)
const data = [
    { taskName: 'Task 1', dueDate: '2023-10-10' },
    { taskName: 'Task 2', dueDate: '2023-11-05' },
    // Add more data rows
];

// Pipe the PDF document to a writable stream
doc.pipe(pdfStream);

// Add content to the PDF
doc.fontSize(14).text('Task Data Export', { align: 'center' });

// Loop through data and add it to the PDF
data.forEach((item) => {
    doc.fontSize(12).text(`Task Name: ${item.taskName}`);
    doc.fontSize(12).text(`Due Date: ${item.dueDate}`);
    doc.moveDown();
});

// Finalize the PDF
doc.end();

pdfStream.on('finish', () => {
    console.log('PDF file written successfully');
});

// Additional JavaScript code can be added as needed for dynamic behavior
