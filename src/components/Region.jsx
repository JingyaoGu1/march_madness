import React from 'react';
import Round from './Round';

function Region({ name, onPredictionChange }) {
  return (
    <div>
      <h2>{name} Region</h2>
      <Round name="First Round" region={name} onPredictionChange={onPredictionChange} />
      {/* Additional rounds would go here */}
    </div>
  );
}

export default Region;
