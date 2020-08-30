import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home/home';

function App() {
  return (
    <>
    <Router>
      <Route exact path="/">
        <Home/>
      </Route>
    </Router>
     
    </>
  );
}

export default App;
