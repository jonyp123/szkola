import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import QuestionsFile from './QuestionsFile';

const App= () => {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/QuestionsFile" element={<QuestionsFile/>}/>
          </Routes>
      </div>
    </Router>
  );
  }

export default App;
