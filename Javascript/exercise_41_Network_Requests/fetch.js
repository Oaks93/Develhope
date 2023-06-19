
async function fetchTodo() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/4');
      const todo = await response.json();
  
      const container = document.getElementById('container');
  
      const h2 = document.createElement('h2');
      h2.textContent = todo.title;
      container.appendChild(h2);
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = todo.completed;
      container.appendChild(checkbox);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchTodo();