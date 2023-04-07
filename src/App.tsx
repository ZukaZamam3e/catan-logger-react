import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faS, faPlus, faBars, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {Routes,Route} from "react-router-dom"
import Login from './components/Login';
import HomePage from './components/HomePage';
import axios from 'axios'

library.add(faS, faPlus, faBars, faPencil, faTrash);


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;
