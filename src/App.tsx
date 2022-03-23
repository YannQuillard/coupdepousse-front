import React from 'react';
import logo from './logo.svg';
import './App.css';
import Inscription from './pages/Inscription/Inscription';
import Connexion from './pages/Connexion/Connexion';
import Young_Mission from './pages/Yong_Mission/Young_Mission';
import Mission_Card from './components/Mission_card/Mission_card';

function App() {
  return (
    <div className="App">
      {/* <Inscription></Inscription> */}
      {/* <Connexion></Connexion> */}
      <Young_Mission></Young_Mission>
      {/* <Mission_Card></Mission_Card> */}
    </div>
  );
}

export default App;
