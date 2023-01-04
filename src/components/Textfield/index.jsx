import { StyledTextfield } from '@/components/Textfield/style'

export const Textfield = ({ label, placeholder }) => (
  <StyledTextfield>
    <label>{label}</label>
    <input type={'text'} placeholder={placeholder} />
  </StyledTextfield>
)
