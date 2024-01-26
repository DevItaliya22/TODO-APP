import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export function Todos() {
  const [todos, setTodos] = useState([]);
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/todos");
        if (!response.ok) {
          throw new Error("Failed to fetch todos");
        }
        const data = await response.json();
        setTodos(data.todos);
      } catch (error) {
        console.error("Error fetching todos:", error.message);
        // Handle error, show message to the user, etc.
      }
    };

    fetchData();
  }, []); 

  const handleToggleCompletion = async (todoId, currentStatus) => {
    try {
      // Implement the actual functionality to toggle completion status
      // You may need to make an API call to update the status and then update local state
    } catch (error) {
      console.error("Error toggling completion:", error.message);
      // Handle error, show message to the user, etc.
    }
  };

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : isAuthenticated ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {todos.map((todo) => (
            <div key={todo._id} style={styles.todoItem}>
              <h1>{todo.title}</h1>
              <h2>{todo.description}</h2>
              <button
                onClick={() => handleToggleCompletion(todo._id, todo.completed)}
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
          ))}
          <div style={{ marginTop: '20px' }}>
            <Link to="/createtodo" style={styles.link}>
              Create TODO
            </Link>
            <Link to="/" style={styles.link}>
              Home
            </Link>
          </div>
        </div>
      ) : (
        <h1>Please login</h1>
      )}
    </>
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
