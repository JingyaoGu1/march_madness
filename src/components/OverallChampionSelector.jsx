import React, { useState, useEffect } from 'react';

const OverallChampionSelector = ({ champions }) => {
  const [selectedChampion, setSelectedChampion] = useState(null);

  useEffect(() => {
    if (selectedChampion && selectedChampion.name === 'Illinois') {
      document.body.classList.add('illinois-background');
    } else {
      document.body.classList.remove('illinois-background');
    }
  }, [selectedChampion]);

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
      {selectedChampion && (
        <div 
          className={`final-champion ${selectedChampion.name === 'Illinois' ? 'illinois-champion' : ''}`}
        >
          {selectedChampion.name}
        </div>
      )}
    </div>
  );
};

export default OverallChampionSelector;
