import React, { useState } from 'react';

const OverallChampionSelector = ({ champions }) => {
  const [selectedChampion, setSelectedChampion] = useState(null);

  const selectChampion = (champion) => {
    setSelectedChampion(champion);
  };

  return (
    <div className="champion-selector">
      <h2>National Champion 2024</h2>
      <div>
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
      {selectedChampion && <div className="final-champion">{selectedChampion.name}</div>}
    </div>
  );
};

export default OverallChampionSelector;
