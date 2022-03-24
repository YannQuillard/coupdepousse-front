import React from 'react';
import logo from './logo.svg';
import './App.css';
import Inscription from './pages/Inscription/Inscription';
import Connexion from './pages/Connexion/Connexion';
import Young_Mission from './pages/Yong_Mission/Young_Mission';
import Mission_Card from './components/Mission_card/Mission_card';
import Young_Landing from './pages/Young_Landing/Young_Landing';

function App() {
  return (
    <div className="App">
      {/* <Inscription></Inscription> */}
      {/* <Connexion></Connexion> */}
      {/* <Young_Mission></Young_Mission> */}
      {/* <Mission_Card></Mission_Card> */}
      <Young_Landing></Young_Landing>
    </div>
  );
}

export default App;
