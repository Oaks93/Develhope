async function fetchTodos() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const todos = await response.json();
  
      const todoList = document.querySelector('.todo-list');
  
      todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.title;
        todoList.appendChild(li);
      });
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  console.log(fetchTodos())