import { StyledTeam } from '@/components/Team/style'

export const Team = ({ team }) => {
  return (
    <StyledTeam primary={team.colors.primary} secundary={team.colors.secundary}>
      <h3>{team.name}</h3>
    </StyledTeam>
  )
}
