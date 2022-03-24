import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import './App.css';
import Signup from './pages/Signup/Signup';
import Connexion from './pages/Connexion/Connexion';
import Young_Mission from './pages/Yong_Mission/Young_Mission';
import Mission_Card from './components/Mission_card/Mission_card';
import Young_Landing from './pages/Young_Landing/Young_Landing';
import Home from './pages/Home';
import Test from './pages/YoungMissions/YoungMissions'
import Mission_Details from './pages/Mission_Details/Mission_Details';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={< Home/>} />
          <Route path="/signup" element={< Signup/>} /> 
          <Route path="/login" element={< Connexion/>} /> 
          <Route path="/missions" element={< Young_Mission/>} /> 
          <Route path="/missioncard" element={< Mission_Card/>} /> 
          <Route path="/younglanding" element={< Young_Landing/>} /> 
          <Route path="/missiondetails" element={< Mission_Details/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
