import React, { useState } from 'react';
import Team from './Team';

const Matchup = ({ teams, onAdvanceTeam }) => {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const handleTeamClick = (team) => {
    if (!selectedTeam) {
      setSelectedTeam(team);
      onAdvanceTeam(team);
    }
  };

  return (
    <div className="matchup">
      {teams.map(team => (
        <Team key={team.id} team={team} onClick={() => handleTeamClick(team)} disabled={!!selectedTeam} />
      ))}
    </div>
  );
};

export default Matchup;
