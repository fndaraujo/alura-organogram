import { Contributor } from '@/components/Contributor'
import { StyledTeam } from '@/components/Team/style'

export const Team = ({ team, contributors, onDelete }) => {
  return (
    contributors.length > 0 && (
      <StyledTeam
        primary={team.colors.primary}
        secundary={team.colors.secundary}
      >
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
