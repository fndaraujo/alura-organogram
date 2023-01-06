import styled from 'styled-components'

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 160px;
  margin-top: 80px;
  padding: 32px;
  background-color: #6278f7;

  .icons {
    display: flex;
    justify-content: space-evenly;
    gap: 32px;
    padding: 8px;
  }

  .logo {
    padding: 8px;
  }

  .copyright {
    padding: 8px;

    p {
      font-size: 22px;
      color: white;
    }
  }
`
