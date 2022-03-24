import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import './App.css';
import Inscription from './pages/Inscription/Inscription';
import Connexion from './pages/Connexion/Connexion';
import Young_Mission from './pages/Yong_Mission/Young_Mission';
import Mission_Card from './components/Mission_card/Mission_card';
import Home from './pages/Home';
import Test from './pages/YoungMissions/YoungMissions'

function App() {
  return (
    <div className="App">
      <Test></Test>
      {/* <Router>
        <Routes>
          <Route path="/" element={< Home/>} /> 
          <Route path="/signup" element={< Inscription/>} /> 
          <Route path="/login" element={< Connexion/>} /> 
          <Route path="/missions" element={< Young_Mission/>} /> 
          <Route path="/missioncard" element={< Mission_Card/>} /> 
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
