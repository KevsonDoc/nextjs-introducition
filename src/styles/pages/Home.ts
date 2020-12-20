import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  * {
    transform: scale(0.8);
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: all 0.3s;
    flex-direction: column;
  }

  a h1 {
    margin: 0 0 0 20px;
    color: ${props => props.theme.colors.text};
  }

  img {
    width: auto;
    height: 100px;
  }

  a:hover {
    transform: scale(1);
  }

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
    text-align: center;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
  }

  @media (min-width: 768px) {
    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      text-decoration: none;
      transition: all 0.3s;
    }
  }
`;