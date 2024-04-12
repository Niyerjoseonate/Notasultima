// src/components/NotaDetalle.js
import React from 'react';

function NotaDetalle({ nota, onEditar, onEliminar }) {
  return (
    <div className="NotaDetalle">
      <h2>Detalle de la Nota</h2>
      <h3>{nota.titulo}</h3>
      <p>{nota.contenido}</p>
      <div className="botones">
        <button onClick={() => onEditar(nota)}>Editar</button>
        <button onClick={() => onEliminar(nota.id)}>Eliminar</button>
      </div>
    </div>
  );
}

export default NotaDetalle;
