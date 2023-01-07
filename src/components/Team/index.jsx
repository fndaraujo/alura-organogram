import hexToRgba from 'hex-to-rgba'
import { Contributor } from '@/components/Contributor'
import { StyledTeam } from '@/components/Team/style'

export const Team = ({ team, contributors, onDelete, changeColor }) => {
  return (
    contributors.length > 0 && (
      <StyledTeam primary={team.color} secundary={hexToRgba(team.color, '0.6')}>
        <input
          type={'color'}
          onChange={(e) => changeColor(e.target.value, team.id)}
          value={team.color}
          className={'input-color'}
        />
        <h3>{team.name}</h3>
        <div className="contributor">
          {contributors.map((contributor) => (
            <Contributor
              key={contributor.name}
              id={contributor.id}
              name={contributor.name}
              role={contributor.role}
              image={contributor.image}
              headerColor={team.color}
              onDelete={onDelete}
            />
          ))}
        </div>
      </StyledTeam>
    )
  )
}
