import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup/Signup';
import Connexion from './pages/Connexion/Connexion';
import YoungMenu from './pages/Menu/YoungMenu/YoungMenu'
import OldMenu from './pages/Menu/OldMenu/OldMenu'
import Young_Landing from './pages/Young_Landing/Young_Landing';
import Mission_Card from './components/Mission_card/Mission_card';
import YoungMissions from './pages/YoungMissions/YoungMissions';
import Profile from './pages/Profile/Profile'

function App() {
  return (
	<div className="App">
	  <Router>
		<Routes>
			<Route path="/" element={< Home/>} />
			<Route path="/missions" element={< YoungMissions/>} />
			<Route path="/signup" element={< Signup/>} /> 
			<Route path="/login" element={< Connexion/>} /> 
			<Route path="/youngmenu" element={< YoungMenu/>} /> 
			<Route path="/oldMenu" element={< OldMenu/>} /> 
			<Route path="/missioncard" element={< Mission_Card/>} /> 
			<Route path="/younglanding" element={< Young_Landing/>} /> 
			<Route path="/profile" element={< Profile/>} />
		</Routes>
	  </Router>
	</div>
	);
}

export default App;
