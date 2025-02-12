console.log(document.getElementById('taskinput')); 
console.log(document.getElementById('tasklist'));

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === ''){
        alert('Por favor, insira uma tarefa');
        return;
    }

    const li = document.createElement('li');

    const taskText = document.createElement('span');
    taskText.textContent = taskInput.value;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Concluído';
    completeButton.style.backgroundColor = '#52b788';
    completeButton.onclick = function() {
        taskText.style.textDecoration = taskText.style.textDecoration === 'line-through' ? 'none' : 'line-through';
        taskText.style.color = taskText.style.textDecoration === 'line-through' ? '#6c757d' : '#000';
    };

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.onclick = function() {
        li.remove();
    };

    li.appendChild(taskText);
    li.appendChild(completeButton);
    li.appendChild(removeButton);
    taskList.appendChild(li);

    taskInput.value = '';
    taskInput.focus();
}