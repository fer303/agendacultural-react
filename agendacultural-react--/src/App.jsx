import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ListaEvento from "./components/ListaEvento";

function App() {
  return (
    <div>
      <h1>Agenda Cultural</h1>
      <ListaEvento />
    </div>
  );
}

export default App;