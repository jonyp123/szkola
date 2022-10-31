import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import QuestionsFile from './QuestionsFile';

const App= () => {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
  }

export default App;
