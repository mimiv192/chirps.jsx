import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
// import './App.css';
import ListItem from './components/ListItem';



import Home from './pages/Home.jsx';



class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        

      </Router>
    )
  }





}


export default App;
