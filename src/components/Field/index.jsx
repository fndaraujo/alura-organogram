import { StyledField } from '@/components/Field/style'

export const Field = ({
  isRequired,
  type = 'text',
  label,
  placeholder,
  value,
  setValue,
}) => (
  <StyledField type={type}>
    <label>{label}</label>
    <input
      required={isRequired}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  </StyledField>
)
