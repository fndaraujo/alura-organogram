import { Contributor } from '@/components/Contributor'
import { StyledTeam } from '@/components/Team/style'

export const Team = ({ team, contributors, onDelete, changeColor }) => {
  return (
    contributors.length > 0 && (
      <StyledTeam
        primary={team.colors.primary}
        secundary={team.colors.secundary}
      >
        <input
          type={'color'}
          onChange={(e) => changeColor(e.target.value, team.name)}
          value={team.colors.primary}
          className={'input-color'}
        />
        <h3>{team.name}</h3>
        <div className="contributor">
          {contributors.map((contributor) => (
            <Contributor
              key={contributor.name}
              name={contributor.name}
              role={contributor.role}
              image={contributor.image}
              headerColor={team.colors.primary}
              onDelete={onDelete}
            />
          ))}
        </div>
      </StyledTeam>
    )
  )
}
