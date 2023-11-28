import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-xl font-semibold mt-4">Page Not Found</p>
        <p className="text-gray-500 mt-2">The page you are looking for might be unavailable or does not exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
