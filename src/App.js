import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import Menu from './menu';
import ReactDOM from 'react-dom/client';
import ExamCreate from './examCreate';

const App= () => {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Menu" element={<Menu/>}/>
          <Route path="/ExamCreate" element={<ExamCreate/>}/>
          </Routes>
      </div>
    </Router>
  );
  }

export default App;
