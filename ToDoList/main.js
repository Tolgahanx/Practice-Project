 const addBtn = document.getElementById('addBtn');
 let toDoItem = '';
 const taskContainer = document.getElementById('task-container');


 addBtn.addEventListener('click', function(){
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');

    toDoItem = document.getElementById('todo').value;
    
    li.innerText = toDoItem;
    task.appendChild(li);

    let checkMark = document.createElement('button');
    checkMark.classList.add('check-mark');
    checkMark.innerHTML = '<i class="fa-solid fa-check"></i>';
    task.appendChild(checkMark);

    let trash = document.createElement('button');
    trash.classList.add('trash-can');
    trash.innerHTML = '<i class="fa-solid fa-trash"></i>';
    task.appendChild(trash);
    




    taskContainer.appendChild(task);
 })