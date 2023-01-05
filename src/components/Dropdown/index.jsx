import { StyledDropdown } from '@/components/Dropdown/style'

export const Dropdown = ({ label, list }) => (
  <StyledDropdown>
    <label>{label}</label>
    <select>
      {list.map((item) => (
        <option key={item}>{item}</option>
      ))}
    </select>
  </StyledDropdown>
)
