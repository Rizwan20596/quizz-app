import React from "react";
import QuizzComponent from './components/quizz/quizz-home'
import Header from './components/Header/header'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <QuizzComponent />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
