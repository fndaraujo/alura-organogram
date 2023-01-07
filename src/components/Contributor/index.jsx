import { AiFillCloseCircle } from 'react-icons/ai'
import { StyledContributor } from '@/components/Contributor/style'

export const Contributor = ({
  id,
  name,
  role,
  image,
  headerColor,
  onDelete,
}) => (
  <StyledContributor primary={headerColor}>
    <AiFillCloseCircle
      size={28}
      className={'delete'}
      onClick={() => onDelete(id)}
    />
    <div className={'header'}>
      <img src={image} alt={`${name} image.`} />
    </div>
    <div className={'footer'}>
      <h4>{name}</h4>
      <h5>{role}</h5>
    </div>
  </StyledContributor>
)
