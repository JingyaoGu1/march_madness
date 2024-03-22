import React, { useState } from 'react';
import Round from './Round';

const BracketRight = ({ initialTeams, region }) => {
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
    finalWinner: null, // Add a state for the final winner
  });

  const advanceTeam = (roundName, matchupId, team) => {
    if (roundName === 'championship') {
      // Handling for championship round
      setRounds({
        ...rounds,
        championship: { ...rounds.championship, winner: team },
        finalWinner: team // Setting the final winner
      });
    } else {
      // Handling for other rounds
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
          return; // No further round
      }
  
      // Check if the next round is the championship round
      if (nextRoundName === 'championship') {
        setRounds({
          ...rounds,
          [roundName]: updatedRound,
          [nextRoundName]: { ...rounds[nextRoundName], teams: [team] }
        });
      } else {
        // Handling for non-championship rounds
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
    }
  };
  

  return (
    <div>
    <h2>{region}</h2>
    <div className="bracket-right">
      <Round roundName="roundOf16" matchups={rounds.roundOf16} onAdvanceTeam={advanceTeam} />
      <Round roundName="quarterfinals" matchups={rounds.quarterfinals} onAdvanceTeam={advanceTeam} />
      <Round roundName="semifinals" matchups={rounds.semifinals} onAdvanceTeam={advanceTeam} />
      <Round roundName="championship" matchups={[rounds.championship]} onAdvanceTeam={advanceTeam} />
      {rounds.championship.winner && <div className="winner">Champion: {rounds.championship.winner.name}</div>}
    </div>
    </div>
  );
};

export default BracketRight;
