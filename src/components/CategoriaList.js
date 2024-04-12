// src/components/CategoriaList.js
import React from 'react';

function CategoriaList({ categorias, seleccionarCategoria }) {
  return (
    <div>
      <h2>Categorías</h2>
      <ul>
        {categorias.map(categoria => (
          <li key={categoria.id} onClick={() => seleccionarCategoria(categoria.id)}>
            {categoria.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriaList;
