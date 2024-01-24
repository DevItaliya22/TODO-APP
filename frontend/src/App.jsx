import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';
import MainPage from './components/MainPage';


function App() {
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
  },[]); // Empty dependency array ensures this runs only once on mount


 
  return (
    <Router>
      <div>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/createTodo" element={<CreateTodo />} />
          <Route path="/todos" element={<Todos/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
