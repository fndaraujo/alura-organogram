import { StyledDropdown } from '@/components/Dropdown/style'

export const Dropdown = ({ isRequired, label, list, value, setValue }) => (
  <StyledDropdown>
    <label>{label}</label>
    <select
      required={isRequired}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      {list.map((item) => (
        <option key={item}>{item}</option>
      ))}
    </select>
  </StyledDropdown>
)
