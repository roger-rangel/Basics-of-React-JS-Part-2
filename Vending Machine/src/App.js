import React, { Component } from 'react';
import './App.css';
import VendingMachine from './VendingMachine.js';
import Navbar from './Navbar';
import Chips from './Chips';
import Soda from './Soda';
import Sardines from './Sardines';
import { Routes, Route} from "react-router-dom";

class App extends Component {
  
  render() {
      return (
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<VendingMachine />} />
            <Route path="/chips" element={<Chips />} />
            <Route path="/soda" element={<Soda />} />
            <Route path="/sardines" element={<Sardines />} />
          </Routes>
        </div>
      );
  }
 
}

export default App;
