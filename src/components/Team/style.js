import styled from 'styled-components'

export const StyledTeam = styled.section`
  text-align: center;
  padding: 32px;
  background-color: ${(props) => props.secundary || 'magenta'};

  h3 {
    font-size: 32px;
    border-bottom: 4px solid ${(props) => props.primary || 'magenta'};
    display: inline-block;
    padding-bottom: 8px;
  }

  .contributor {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 32px 0;
  }
`
