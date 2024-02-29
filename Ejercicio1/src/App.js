import React, { useState } from 'react';
import FormularioProyecto from './components/FormularioProyecto';
import ListaProyectos from './components/ListaProyectos';
import MontoTotalProyectos from './components/MontoTotalProyectos';

const App = () => {
  const [proyectos, setProyectos] = useState([]);

  const agregarProyecto = (proyecto) => {
    setProyectos([...proyectos, proyecto]);
  };

  const eliminarProyecto = (index) => {
    setProyectos(proyectos.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold text-center mb-4">Gestión de Proyectos</h1>
      <FormularioProyecto onAgregarProyecto={agregarProyecto} />
      <ListaProyectos proyectos={proyectos} onEliminarProyecto={eliminarProyecto} />
      <MontoTotalProyectos proyectos={proyectos} />
    </div>
  );
};

export default App;
