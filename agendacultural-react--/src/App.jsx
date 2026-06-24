import React from "react";
import ListaEventos from "./components/ListaEventos";
import { eventos } from "./data/eventos";

function App() {
  return (
    <div>
      <h1>Agenda Cultural</h1>
      <ListaEventos eventos={eventos} />
    </div>
  );
}

export default App;