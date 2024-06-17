// Update existing script.js
document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task');
    const taskInput = document.getElementById('new-task');
    const tasksList = document.getElementById('tasks');
    const timetable = document.querySelector('.timetable tbody');

    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        taskItem.draggable = true;
        taskItem.addEventListener('dragstart', handleDragStart);

        const deleteButton = document.createElement('span');
        deleteButton.textContent = '✖';
        deleteButton.className = 'delete-task';
        deleteButton.addEventListener('click', deleteTask);
        taskItem.appendChild(deleteButton);

        tasksList.appendChild(taskItem);
        taskInput.value = '';
    }

    function deleteTask(e) {
        const taskItem = e.target.parentElement;
        const taskText = taskItem.textContent.replace('✖', '').trim();
        taskItem.remove();

        // Remove tasks from the timetable
        const timetableCells = timetable.querySelectorAll('td');
        timetableCells.forEach(cell => {
            if (cell.textContent === taskText) {
                cell.textContent = '';
            }
        });
    }

    function handleDragStart(e) {
        e.dataTransfer.setData('text', e.target.textContent.replace('✖', '').trim());
    }

    function generateTimetable() {
        for (let hour = 0; hour < 24; hour++) {
            const row = document.createElement('tr');

            const timeCell = document.createElement('td');
            timeCell.textContent = `${hour}:00`;
            row.appendChild(timeCell);

            for (let day = 0; day < 7; day++) {
                const cell = document.createElement('td');
                cell.addEventListener('dragover', (e) => e.preventDefault());
                cell.addEventListener('drop', handleDrop);
                row.appendChild(cell);
            }

            timetable.appendChild(row);
        }
    }

    function handleDrop(e) {
        e.preventDefault();
        const taskText = e.dataTransfer.getData('text');
        const targetCell = e.target;
        const targetRow = targetCell.parentElement;

        // Check if the task already exists in any cell of the same day
        const dayIndex = Array.from(targetRow.children).indexOf(targetCell);
        let existingRow = null;
        timetable.querySelectorAll('tr').forEach(row => {
            if (row.children[dayIndex].textContent === taskText) {
                existingRow = row;
            }
        });

        if (existingRow) {
            // Extend the existing task cell to include the new hour
            const startRowIndex = Array.from(timetable.children).indexOf(existingRow);
            const endRowIndex = Array.from(timetable.children).indexOf(targetRow);
            for (let i = startRowIndex; i <= endRowIndex; i++) {
                timetable.children[i].children[dayIndex].textContent = taskText;
            }
        } else {
            targetCell.textContent = taskText;
        }
    }

    generateTimetable();
});
