import { StyledBanner } from '@/components/Banner/style'

export const Banner = () => (
  <StyledBanner>
    <img
      src={'/images/banner.png'}
      alt={'Banner background image.'}
      className={'banner-image'}
    />
  </StyledBanner>
)
