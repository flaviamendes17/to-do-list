function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === ''){
        alert('Por favor, insira uma tarefa');
        return;
    }

    const li = document.createElement('li');
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onchange = function() {
        toggleComplete(checkbox);
    }

    const taskText = document.createElement('span');
    taskText.textContent = taskInput.value;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.onclick = function() {
        removeTask(removeButton);
    };

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskText);
    li.appendChild(taskDiv);
    li.appendChild(removeButton);
    taskList.appendChild(li);

    taskInput.value = '';
    taskInput.focus();
}

function toggleComplete(checkbox) {
    const taskText = checkbox.nextElementSibling;
    if (checkbox.checked) {
        taskText.style.textDecoration = 'line-through';
        taskText.style.color = '#6c757d';
    } else {
        taskText.style.textDecoration = 'none';
        taskText.style.color = '#000';
    }
}