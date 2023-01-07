import styled from 'styled-components'

export const StyledContributor = styled.div`
  width: 280px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  background-color: white;
  margin: 16px 0;
  position: relative;

  img {
    width: 160px;
    border-radius: 50%;
    position: relative;
    bottom: -50px;
  }

  .delete {
    position: absolute;
    right: -10px;
    top: -10px;
  }

  .header {
    border-radius: 10px 10px 0 0;
    background-color: ${(props) => props.primary || '#f0f0f0'};
  }

  .footer {
    padding-top: 90px;
    padding-bottom: 40px;
    border-radius: 0 0 10px 10px;

    h4 {
      color: #6278f7;
      font-size: 18px;
      font-weight: bold;
      line-height: 22px;
      margin-bottom: 8px;
    }

    h5 {
      font-size: 18px;
      line-height: 22px;
      color: #212121;
      padding: 0 16px;
    }
  }
`
