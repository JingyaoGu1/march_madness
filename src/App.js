import React from 'react';
import Bracket from './components/Bracket';
import './App.css'

const App = () => {
  const initialTeams1 = [
    { id: 1, name: 'Team 1' }, 
    { id: 2, name: 'Team 2' },
    { id: 3, name: 'Team 3' },
    { id: 4, name: 'Team 4' },
    { id: 5, name: 'Team 5' },
    { id: 6, name: 'Team 6' },
    { id: 7, name: 'Team 7' },
    { id: 8, name: 'Team 8' },
    { id: 9, name: 'Team 9' },
    { id: 10, name: 'Team 10' },
    { id: 11, name: 'Team 11' },
    { id: 12, name: 'Team 12' },
    { id: 13, name: 'Team 13' },
    { id: 14, name: 'Team 14' },
    { id: 15, name: 'Team 15' },
    { id: 16, name: 'Team 16' }
  ];
  const initialTeams2 = [
    { id: 1, name: 'Team 1' }, 
    { id: 2, name: 'Team 2' },
    { id: 3, name: 'Team 3' },
    { id: 4, name: 'Team 4' },
    { id: 5, name: 'Team 5' },
    { id: 6, name: 'Team 6' },
    { id: 7, name: 'Team 7' },
    { id: 8, name: 'Team 8' },
    { id: 9, name: 'Team 9' },
    { id: 10, name: 'Team 10' },
    { id: 11, name: 'Team 11' },
    { id: 12, name: 'Team 12' },
    { id: 13, name: 'Team 13' },
    { id: 14, name: 'Team 14' },
    { id: 15, name: 'Team 15' },
    { id: 16, name: 'Team 16' }
  ];
  const initialTeams3 = [
    { id: 1, name: 'Team 1' }, 
    { id: 2, name: 'Team 2' },
    { id: 3, name: 'Team 3' },
    { id: 4, name: 'Team 4' },
    { id: 5, name: 'Team 5' },
    { id: 6, name: 'Team 6' },
    { id: 7, name: 'Team 7' },
    { id: 8, name: 'Team 8' },
    { id: 9, name: 'Team 9' },
    { id: 10, name: 'Team 10' },
    { id: 11, name: 'Team 11' },
    { id: 12, name: 'Team 12' },
    { id: 13, name: 'Team 13' },
    { id: 14, name: 'Team 14' },
    { id: 15, name: 'Team 15' },
    { id: 16, name: 'Team 16' }
  ];
  const initialTeams4 = [
    { id: 1, name: 'Team 1' }, 
    { id: 2, name: 'Team 2' },
    { id: 3, name: 'Team 3' },
    { id: 4, name: 'Team 4' },
    { id: 5, name: 'Team 5' },
    { id: 6, name: 'Team 6' },
    { id: 7, name: 'Team 7' },
    { id: 8, name: 'Team 8' },
    { id: 9, name: 'Team 9' },
    { id: 10, name: 'Team 10' },
    { id: 11, name: 'Team 11' },
    { id: 12, name: 'Team 12' },
    { id: 13, name: 'Team 13' },
    { id: 14, name: 'Team 14' },
    { id: 15, name: 'Team 15' },
    { id: 16, name: 'Team 16' }
  ];
  
  

  return (
    <div className="bracket-container">
      <Bracket className='bracket' initialTeams={initialTeams1} />
      <Bracket className='bracket-right' initialTeams={initialTeams2} />
      <Bracket className='bracket' initialTeams={initialTeams3} />
      <Bracket className='bracket-right' initialTeams={initialTeams4} />
    </div>
  );
};


export default App;
