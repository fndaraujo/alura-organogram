import { StyledDropdown } from '@/components/Dropdown/style'

export const Dropdown = ({ isRequired, label, list }) => (
  <StyledDropdown>
    <label>{label}</label>
    <select required={isRequired}>
      {list.map((item) => (
        <option key={item}>{item}</option>
      ))}
    </select>
  </StyledDropdown>
)
