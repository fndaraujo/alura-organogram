import { StyledTextfield } from '@/components/Textfield/style'

export const Textfield = ({
  isRequired,
  label,
  placeholder,
  value,
  setValue,
}) => (
  <StyledTextfield>
    <label>{label}</label>
    <input
      required={isRequired}
      type={'text'}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  </StyledTextfield>
)
