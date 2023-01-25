import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { IHeaderProps } from '../../Common/types';

const HeaderView = ({ children }: IHeaderProps) => {
  return (
    <Container>
      <LogoLink to={'/home'}>
        <Logo>Art here</Logo>
      </LogoLink>
      <BarContainer>{children}</BarContainer>
    </Container>
  );
};

export default HeaderView;

const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 4rem;
  padding: 1.2rem;
  border-bottom: 1px solid black;
  box-sizing: border-box;
  background-color: black;
`;

const Logo = styled.h1`
  margin: 0;
  height: 4rem;
  padding: 0.8rem;
  font-size: 3.5rem;
  border-radius: 40%;
  background-color: #fff;
`;

const LogoLink = styled(Link)`
  color: black;
  text-decoration: none;
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 480px) {
    position: absolute;
    left: 7rem;
  }
`;

const BarContainer = styled.div`
  display: flex;
`;
