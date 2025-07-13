document.getElementById('add-todo').addEventListener('click',function(){
    const todoInput = document.getElementById('new-todo');
    const todoText = todoInput.ariaValueMax.trim();

    if (todoText){
        const todoList = document.getElementById('todo-list');

        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        const todoContent = document.createElement('span');
        todoContent.textContent = todoText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click' , function(){
            todoList.removeChild(todoItem);
        });

        todoItem.appendChild(todoContent);
        todoItem.appendChild(removeButton);
        todoList.appendChild(todoItem);

        todoInput.value = '';
    }

})