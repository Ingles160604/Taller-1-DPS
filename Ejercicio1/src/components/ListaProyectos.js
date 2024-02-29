import React from 'react';

const ListaProyectos = ({ proyectos, onEliminarProyecto }) => {
  return (
    <div className="flex space-x-4">
      <div className="w-1/2">
        <h2 className="font-bold text-lg mb-4">Proyectos Ambientales</h2>
        {proyectos.filter(p => p.tipoProyecto === 'ambientales').map((proyecto, index) => (
          <div key={index} className="mb-4 p-4 border rounded shadow-sm">
            <p><strong>Categoría:</strong> {proyecto.categoria}</p>
            <p><strong>Monto:</strong> ${proyecto.monto}</p>
            <p><strong>Fecha:</strong> {proyecto.fecha}</p>
            <p><strong>Descripción:</strong> {proyecto.descripcion}</p>
            <button onClick={() => onEliminarProyecto(index)} className="mt-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Eliminar
            </button>
          </div>
        ))}
      </div>
      <div className="w-1/2">
        <h2 className="font-bold text-lg mb-4">Proyectos No Ambientales</h2>
        {proyectos.filter(p => p.tipoProyecto === 'noAmbientales').map((proyecto, index) => (
          <div key={index} className="mb-4 p-4 border rounded shadow-sm">
            <p><strong>Categoría:</strong> {proyecto.categoria}</p>
            <p><strong>Monto:</strong> ${proyecto.monto}</p>
            <p><strong>Fecha:</strong> {proyecto.fecha}</p>
            <p><strong>Descripción:</strong> {proyecto.descripcion}</p>
            <button onClick={() => onEliminarProyecto(index)} className="mt-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaProyectos;
