const Team = ({ team, onClick, disabled }) => (
  <button onClick={onClick} disabled={disabled}>
    {team.seed} {team.name}
  </button>
);

export default Team;
