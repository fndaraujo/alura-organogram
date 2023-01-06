import { StyledContributor } from '@/components/Contributor/style'

export const Contributor = ({ name, role, image, headerColor }) => (
  <StyledContributor primary={headerColor}>
    <div className={'header'}>
      <img src={image} alt={`${name} image.`} />
    </div>
    <div className={'footer'}>
      <h4>{name}</h4>
      <h5>{role}</h5>
    </div>
  </StyledContributor>
)
