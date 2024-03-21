import React, { useState } from 'react';
import Round from './Round';

const Bracket = ({ initialTeams }) => {
  // Function to create initial matchups for Round of 16
  const createInitialMatchups = () => {
    const matchups = [];
    for (let i = 0; i < initialTeams.length; i += 2) {
      matchups.push({ teams: [initialTeams[i], initialTeams[i + 1]], winner: null });
    }
    return matchups;
  };

  // State for all rounds in the bracket
  const [rounds, setRounds] = useState({
    roundOf16: createInitialMatchups(),
    quarterfinals: Array(4).fill().map(() => ({ teams: [], winner: null })),
    semifinals: Array(2).fill().map(() => ({ teams: [], winner: null })),
    championship: { teams: [], winner: null },
  });

  // Function to advance teams in the bracket
  const advanceTeam = (roundName, matchupId, team) => {
    // Update the current round
    const updatedRound = rounds[roundName].map((matchup, index) => {
      if (index === matchupId) {
        return { ...matchup, winner: team };
      }
      return matchup;
    });
  
    let nextRoundName;
    switch (roundName) {
      case 'roundOf16':
        nextRoundName = 'quarterfinals';
        break;
      case 'quarterfinals':
        nextRoundName = 'semifinals';
        break;
      case 'semifinals':
        nextRoundName = 'championship';
        break;
      default:
        return; // No next round after championship
    }
  
    if (roundName === 'semifinals') {
      // Special handling for advancing to the championship round
      const updatedChampionship = { ...rounds.championship };
      updatedChampionship.teams = [...updatedChampionship.teams, team];
  
      setRounds({
        ...rounds,
        [roundName]: updatedRound,
        championship: updatedChampionship
      });
    } else {
      // Handling for rounds other than semifinals
      const nextRoundMatchupIndex = Math.floor(matchupId / 2);
      const updatedNextRound = rounds[nextRoundName].map((matchup, index) => {
        if (index === nextRoundMatchupIndex) {
          return { ...matchup, teams: [...matchup.teams, team] };
        }
        return matchup;
      });
  
      setRounds({
        ...rounds,
        [roundName]: updatedRound,
        [nextRoundName]: updatedNextRound
      });
    }
  };

  return (
    <div className="bracket">
      <Round roundName="roundOf16" matchups={rounds.roundOf16} onAdvanceTeam={advanceTeam} />
      <Round roundName="quarterfinals" matchups={rounds.quarterfinals} onAdvanceTeam={advanceTeam} />
      <Round roundName="semifinals" matchups={rounds.semifinals} onAdvanceTeam={advanceTeam} />
      <Round roundName="championship" matchups={[rounds.championship]} onAdvanceTeam={advanceTeam} />
      {rounds.championship.winner && <div className="winner">Champion: {rounds.championship.winner.name}</div>}
    </div>
  );
};

export default Bracket;
