import React from "react";
import EventoCard from "./EventoCard";

function ListaEventos({ eventos }) {
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

export default ListaEventos;