import React, { useState } from 'react';
import Round from './Round';

const Bracket = ({ initialTeams, region, onChampionSelected }) => {
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
      // Directly set the winner for the championship round
      setRounds({
        ...rounds,
        championship: { ...rounds.championship, winner: team }
      });
      onChampionSelected(region, team);
    } else {
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
          return; // No further rounds after championship
      }
  
      // If advancing to championship, handle differently
      if (nextRoundName === 'championship') {
        const updatedChampionship = { ...rounds.championship };
        updatedChampionship.teams = updatedChampionship.teams.concat(team);
  
        setRounds({
          ...rounds,
          [roundName]: updatedRound,
          [nextRoundName]: updatedChampionship
        });
      } else {
        const nextRoundMatchupIndex = Math.floor(matchupId / 2);
        const updatedNextRound = rounds[nextRoundName].map((matchup, index) => {
          if (index === nextRoundMatchupIndex) {
            const updatedTeams = [...matchup.teams, team];
            return { ...matchup, teams: updatedTeams.length > 2 ? updatedTeams.slice(1) : updatedTeams };
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
    <div className="bracket">
      <Round roundName="roundOf16" matchups={rounds.roundOf16} onAdvanceTeam={advanceTeam} />
      <Round roundName="quarterfinals" matchups={rounds.quarterfinals} onAdvanceTeam={advanceTeam} />
      <Round roundName="semifinals" matchups={rounds.semifinals} onAdvanceTeam={advanceTeam} />
      <Round roundName="championship" matchups={[rounds.championship]} onAdvanceTeam={advanceTeam} />
      {rounds.championship.winner && <div className="winner"> {region} Champion: {rounds.championship.winner.name}</div>}
    </div>
    </div>
  );
};

export default Bracket;
