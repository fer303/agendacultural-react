import React from "react";
import { eventos } from "../data/eventos";

function ListaEvento() {
  return (
    <div>
      <h2>Lista de Eventos</h2>
      <ul>
        {eventos.map(evento => (
          <li key={evento.id}>
            <strong>{evento.nombre}</strong> - {evento.lugar} ({evento.tipo})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaEvento;