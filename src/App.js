// src/App.js
import React, { useState } from 'react';
import CategoriaList from './components/CategoriaList';
import NotaList from './components/NotaList';
import NotaDetalle from './components/NotaDetalle';
import './App.css';

function App() {
  const [categorias, setCategorias] = useState([
    { id: 1, nombre: 'Personal' },
    { id: 2, nombre: 'Trabajo' }
  ]);
  const [notas, setNotas] = useState([
    { id: 1, categoriaId: 1, titulo: 'Comprar leche', contenido: 'Recuerda comprar leche deslactosada.' },
    { id: 2, categoriaId: 1, titulo: 'Jogging', contenido: 'Hacer jogging todos los días a las 7am.' },
    { id: 3, categoriaId: 2, titulo: 'Reunión con el equipo', contenido: 'Reunión semanal todos los jueves.' }
  ]);
  const [notaActual, setNotaActual] = useState(null);
  const [notasFiltradas, setNotasFiltradas] = useState([]);
  const [nuevaNota, setNuevaNota] = useState({ titulo: '', contenido: '' });
  const [nuevaCategoria, setNuevaCategoria] = useState('');

  const seleccionarNota = (nota) => {
    setNotaActual(nota);
  };

  const handleSeleccionarCategoria = (categoriaId) => {
    // Filtrar las notas basadas en la categoría seleccionada
    setNotaActual(null); // Limpiar la nota actual seleccionada
    const notasFiltradas = notas.filter(nota => nota.categoriaId === categoriaId);
    setNotasFiltradas(notasFiltradas);
  };

  const handleAgregarNota = () => {
    const nuevaNotaConId = {
      ...nuevaNota,
      id: notas.length + 1,
      categoriaId: notasFiltradas.length > 0 ? notasFiltradas[0].categoriaId : 1
    };
    setNotas([...notas, nuevaNotaConId]);
    setNuevaNota({ titulo: '', contenido: '' });
  };

  const handleAgregarCategoria = () => {
    const nuevaCategoriaConId = { id: categorias.length + 1, nombre: nuevaCategoria };
    setCategorias([...categorias, nuevaCategoriaConId]);
    setNuevaCategoria('');
  };

  return (
    <div className="App">
      <div className="categorias">
        <CategoriaList categorias={categorias} seleccionarCategoria={handleSeleccionarCategoria} />
        <input
          type="text"
          placeholder="Nueva categoría"
          value={nuevaCategoria}
          onChange={(e) => setNuevaCategoria(e.target.value)}
        />
        <button onClick={handleAgregarCategoria}>Agregar Categoría</button>
      </div>
      <div className="notas">
        <NotaList notas={notasFiltradas} seleccionarNota={seleccionarNota} />
        <input
          type="text"
          placeholder="Título de la nota"
          value={nuevaNota.titulo}
          onChange={(e) => setNuevaNota({ ...nuevaNota, titulo: e.target.value })}
        />
        <input
          type="text"
          placeholder="Contenido de la nota"
          value={nuevaNota.contenido}
          onChange={(e) => setNuevaNota({ ...nuevaNota, contenido: e.target.value })}
        />
        <button onClick={handleAgregarNota}>Agregar Nota</button>
      </div>
      <div className="detalle">
        {notaActual && <NotaDetalle nota={notaActual} />}
      </div>
    </div>
  );
}

export default App;
