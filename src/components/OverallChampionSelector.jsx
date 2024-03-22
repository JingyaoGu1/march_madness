import React, { useState } from 'react';

const OverallChampionSelector = ({ champions }) => {
  const [selectedChampion, setSelectedChampion] = useState(null);

  const selectChampion = (champion) => {
    setSelectedChampion(champion);
  };

  return (
    <div>
      <h2>Select the Overall Champion</h2>
      <div className="champion-selector">
        {Object.entries(champions).map(([region, champion]) => (
          <button 
            key={region} 
            onClick={() => selectChampion(champion)}
            disabled={!champion}
            className={selectedChampion === champion ? 'selected' : ''}
          >
            {champion ? `${champion.name} (${region})` : `Winner of ${region}`}
          </button>
        ))}
      </div>
      {selectedChampion && <div className="final-champion">Overall Champion: {selectedChampion.name}</div>}
    </div>
  );
};

export default OverallChampionSelector;
