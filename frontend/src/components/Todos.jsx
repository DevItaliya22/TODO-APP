import React from 'react';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
export function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/todos");
        const data = await response.json();
        setTodos(data.todos);
      } catch (error) {
        console.error("Error fetching todos:", error);
        // Handle error, maybe set an error state
      }
    };

    fetchData();
  },[]); 
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {todos.map(function (todo) {
        //console.log("Current todo object:", todo); // Log the entire todo object for debugging
        return (
          <div key={todo._id} style={styles.todoItem}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button
              onClick={() => console.log("Toggle completion for todo with ID:", todo._id)}
              style={{
                padding: '8px',
                marginTop: '10px',
                cursor: 'pointer',
                borderRadius: '4px',
                backgroundColor: todo.completed ? '#5cb85c' : '#d9534f',
                color: 'white',
                border: 'none'
              }}
            >
              {todo.completed ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        );
      })}

      {/* Navigation Links */}
      <div style={{ marginTop: '20px' }}>
        <Link to="/createtodo" style={styles.link}>Create TODO</Link>
        <Link to="/" style={styles.link}>Home</Link>
      </div>
    </div>
  );
}

const styles = {
  todoItem: {
    backgroundColor: '#f0f0f0',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
  },
  link: {
    marginRight: '10px',
    textDecoration: 'none',
    color: 'blue',
    fontSize: '16px',
  },
};
