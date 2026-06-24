import React from "react";
import { eventos } from "../data/eventos"; // Asegúrate de usar llaves si tu export es 'export const eventos'
import EventoCard from "./EventoCard";

function ListaEvento() {
  return (
    <div>
      <h2>Lista de Eventos</h2>
      {eventos.map(evento => (
        <EventoCard
          key={evento.id}
          nombre={evento.nombre}
          lugar={evento.lugar}
          duracion={evento.duracion}
          tipo={evento.tipo}
          descripcion={evento.descripcion}
          fechas={evento.fechas}
          esGratuito={evento.esGratuito}
        />
      ))}
    </div>
  );
}

export default ListaEvento;