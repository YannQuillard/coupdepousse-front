import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup/Signup';
import Signup2 from './pages/Signup/Signup2'
import Signup3 from './pages/Signup/Signup3'
import Connexion from './pages/Connexion/Connexion';
import Connexion2 from './pages/Connexion/Connexion2';
import Young_Mission from './pages/Young_Mission/Young_Mission';
import OldMenu from '../src/pages/Menu/OldMenu/OldMenu'
import YoungMenu from '../src/pages/Menu/YoungMenu/YoungMenu'
import Mission_Card from './components/Mission_card/Mission_card';
import Young_Landing from './pages/Young_Landing/Young_Landing';
import Mission_Details from './pages/Mission_Details/Mission_Details';
import YoungProfile from './pages/Profile/YoungProfile/YoungProfile';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={< Home/>} />
          <Route path="/signup" element={< Signup/>} />
          <Route path="/signup2" element={< Signup2/>} />
          <Route path="/signup3" element={< Signup3/>} />
          <Route path="/login" element={< Connexion/>} />
          <Route path="/login2" element={< Connexion2/>} />
          <Route path="/youngMenu" element={< YoungMenu/>} />
          <Route path="/oldMenu" element={< OldMenu/>} /> 
          <Route path="/missions" element={< Young_Mission/>} />
          <Route path="/missioncard" element={< Mission_Card/>} />
          <Route path="/younglanding" element={< Young_Landing/>} />
          <Route path="/mission_details" element={< Mission_Details/>} />
          <Route path="/YoungProfile" element={< YoungProfile/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
