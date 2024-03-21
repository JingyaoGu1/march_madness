// Round.js
import React from 'react';
import Matchup from './Matchup';

const Round = ({ roundName, matchups, onAdvanceTeam }) => (
  <div className={`round ${roundName}`}>
    {matchups.map((matchup, index) => (
      <Matchup
        key={index}
        teams={matchup.teams}
        onAdvanceTeam={(team) => onAdvanceTeam(roundName, index, team)}
      />
    ))}
  </div>
);


export default Round;
