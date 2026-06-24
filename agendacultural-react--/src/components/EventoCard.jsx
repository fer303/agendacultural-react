import React from "react";
import PropTypes from "prop-types";

const tipoColores = {
  Concierto: "#d1e7dd",
  Teatro: "#f8d7da",
  Exposicion: "#cff4fc",
  default: "#f8f9fa"
};

function EventoCard({ nombre, lugar, duracion, tipo, descripcion, fechas }) {
  const estilo = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "12px 0",
    backgroundColor: tipoColores[tipo] || tipoColores.default
  };

  return (
    <div style={estilo}>
      <h3>{nombre}</h3>
      <span style={{
        padding: "2px 8px",
        borderRadius: "12px",
        background: "#333",
        color: "#fff",
        fontSize: "0.8em",
        marginBottom: "8px",
        display: "inline-block"
      }}>{tipo}</span>
      <p><strong>Lugar:</strong> {lugar}</p>
      <p><strong>Duración:</strong> {duracion}</p>
      <p><strong>Fechas:</strong> {fechas}</p>
      <p>{descripcion}</p>
    </div>
  );
}

EventoCard.propTypes = {
  nombre: PropTypes.string,
  lugar: PropTypes.string,
  duracion: PropTypes.string,
  tipo: PropTypes.string,
  descripcion: PropTypes.string,
  fechas: PropTypes.string
};

EventoCard.defaultProps = {
  nombre: "Evento sin nombre",
  lugar: "Lugar no especificado",
  duracion: "Duración no informada",
  tipo: "Otro",
  descripcion: "Sin descripción",
  fechas: "Fecha no informada"
};

export default EventoCard;