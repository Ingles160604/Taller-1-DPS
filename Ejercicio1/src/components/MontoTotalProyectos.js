import React from 'react';

const MontoTotalProyectos = ({ proyectos }) => {
  const total = proyectos.reduce((acc, proyecto) => acc + parseFloat(proyecto.monto), 0);

  return (
    <div className="mt-4 p-4 border rounded shadow-sm">
      <h2 className="font-bold text-lg">Monto Total de Proyectos</h2>
      <p>${total.toFixed(2)}</p>
    </div>
  );
};

export default MontoTotalProyectos;
