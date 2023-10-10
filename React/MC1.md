You are tasked with creating a simple Todo List application using React. The application should allow users to add, remove, and mark tasks as complete. It should also display a count of incomplete tasks. Here are the specific requirements:

# Create a React application with two components: App and TodoList.

The TodoList component should be responsible for rendering the list of tasks.
Users should be able to add new tasks by typing in a text input and clicking an "Add" button.
Users should be able to mark a task as complete by clicking a "Complete" button next to each task. Completed tasks should be visually differentiated from incomplete tasks (e.g., strike through the text).
Users should be able to remove a task by clicking a "Delete" button next to each task.
Display the total count of incomplete tasks at the top of the list.
The list of tasks can be stored in the component's state.
You are provided with a basic project structure with the App component already set up. Your task is to complete the TodoList component to meet the requirements above.

Here's a simplified starting point for your code:

```
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Todo List App</h1>
        <TodoList />
      </div>
    );
  }
}

class TodoList extends Component {
  // Your code for the TodoList component goes here

  render() {
    return (
      <div>
        {/* Your UI for the TodoList goes here */}
      </div>
    );
  }
}

export default App;

```

You can use state, props, and event handlers as needed to implement the functionality. Be sure to create a user-friendly and responsive UI for the Todo List application.

This question assesses your ability to work with React components, state management, event handling, and rendering. It also tests your understanding of how to structure a React application.
