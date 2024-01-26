import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';
import MainPage from './components/MainPage';
import LoginButton from './components/LoginButton';
import {useAuth0} from '@auth0/auth0-react'

function App() {

  const {user,isAuthenticated} =useAuth0();
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/createTodo" element={<CreateTodo />} />
          <Route path="/todos" element={<Todos/>} />
          <Route path="/login" element={<LoginButton/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
