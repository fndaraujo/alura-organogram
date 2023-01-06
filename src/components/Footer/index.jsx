import { StyledFooter } from '@/components/Footer/style'

export const Footer = () => (
  <StyledFooter>
    <div className={'icons'}>
      <img src={'/images/fb.png'} alt={'Facebook logo.'} />
      <img src={'/images/tw.png'} alt={'Twitter logo.'} />
      <img src={'/images/ig.png'} alt={'Instagram logo.'} />
    </div>
    <div className={'logo'}>
      <img src={'/images/logo.png'} alt={'Organogram logo.'} />
    </div>
    <div className={'copyright'}>
      <p>Copyright &copy; 2023, Alura.</p>
    </div>
  </StyledFooter>
)
