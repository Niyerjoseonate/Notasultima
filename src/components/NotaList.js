// src/components/NotaList.js
import React from 'react';

function NotaList({ notas, seleccionarNota }) {
  return (
    <div>
      <h2>Notas:</h2>
      <ul>
        {notas.map(nota => (
          <li key={nota.id} onClick={() => seleccionarNota(nota)}>
            <strong>{nota.titulo}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotaList;
