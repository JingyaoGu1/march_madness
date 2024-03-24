const Team = ({ team, onClick, disabled }) => (
  <button class="stylish-button" onClick={onClick} disabled={disabled}>
    {team.seed} {team.name}
  </button>
);

export default Team;
