import { StyledField } from '@/components/Field/style'

export const Field = ({ isRequired, label, placeholder, value, setValue }) => (
  <StyledField>
    <label>{label}</label>
    <input
      required={isRequired}
      type={'text'}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  </StyledField>
)
