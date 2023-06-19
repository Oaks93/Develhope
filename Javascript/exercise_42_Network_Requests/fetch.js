document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const titleInput = document.getElementById('todo-title');
    const completedInput = document.getElementById('todo-completed');
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const todo = {
        title: titleInput.value,
        completed: completedInput.checked
      };
  
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(todo)
        });
  
        if (response.ok) {
          const createdTodo = await response.json();
          console.log('New todo created:', createdTodo);
        } else {
          console.error('Error:', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
  
      form.reset();
    });
  });
  