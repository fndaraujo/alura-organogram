import { StyledTextfield } from '@/components/Textfield/style'

export const Textfield = ({ isRequired, label, placeholder }) => (
  <StyledTextfield>
    <label>{label}</label>
    <input required={isRequired} type={'text'} placeholder={placeholder} />
  </StyledTextfield>
)
