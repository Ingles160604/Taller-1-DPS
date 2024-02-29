import React, { useState } from 'react';

const FormularioProyecto = ({ onAgregarProyecto }) => {
  const [tipoProyecto, setTipoProyecto] = useState('');
  const [categoria, setCategoria] = useState('');
  const [monto, setMonto] = useState('');
  const [fecha, setFecha] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const categoriasAmbientales = ['Alimentación', 'Transporte', 'Vivienda', 'Educación'];
  const categoriasNoAmbientales = ['Desarrollo de contenido multimedia', 'Desarrollo de software', 'Construcción de infraestructura'];

  const handleSubmit = (e) => {
    e.preventDefault();
    onAgregarProyecto({ tipoProyecto, categoria, monto, fecha, descripcion });
    setTipoProyecto('');
    setCategoria('');
    setMonto('');
    setFecha('');
    setDescripcion('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="tipoProyecto" className="block text-sm font-medium text-gray-700">Tipo de Proyecto</label>
        <select
          id="tipoProyecto"
          value={tipoProyecto}
          onChange={(e) => setTipoProyecto(e.target.value)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Seleccione un tipo</option>
          <option value="ambientales">Ambientales</option>
          <option value="noAmbientales">No Ambientales</option>
        </select>
      </div>
      <div>
        <label htmlFor="categoria" className="block text-sm font-medium text-gray-700">Categoría</label>
        <select
          id="categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Seleccione una categoría</option>
          {tipoProyecto === 'ambientales' ? categoriasAmbientales.map((cat) => (
            <option value={cat} key={cat}>{cat}</option>
          )) : tipoProyecto === 'noAmbientales' ? categoriasNoAmbientales.map((cat) => (
            <option value={cat} key={cat}>{cat}</option>
          )) : null}
        </select>
      </div>
      <div>
        <label htmlFor="monto" className="block text-sm font-medium text-gray-700">Monto</label>
        <input
          type="number"
          id="monto"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="fecha" className="block text-sm font-medium text-gray-700">Fecha</label>
        <input
          type="date"
          id="fecha"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">Descripción</label>
        <textarea
          id="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Registrar Proyecto
      </button>
    </form>
  );
};

export default FormularioProyecto;
