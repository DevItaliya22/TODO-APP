import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';
import MainPage from './components/MainPage';


function App() {
  return (
    <Router>
      <div>
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
