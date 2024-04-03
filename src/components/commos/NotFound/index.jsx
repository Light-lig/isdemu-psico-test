import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">404 - Página no encontrada</h2>
        <p className="text-gray-600">La página que estás buscando no existe.</p>
      </div>
    </div>
  );
};

export default NotFound;
