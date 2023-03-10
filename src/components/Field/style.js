import styled from 'styled-components'

export const StyledField = styled.div`
  margin: 24px 0;

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 24px;
    text-transform: capitalize;
  }
  input {
    background-color: white;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.08);
    width: 100%;
    border: none;
    font-size: 24px;
    padding: ${(props) => (props.type === 'color' ? '5px 24px' : '24px')};
  }
`
