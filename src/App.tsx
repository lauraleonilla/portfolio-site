import './App.css';
import { Avatar } from '@mui/material';
import AvatarImage from './assets/avatar.jpg';
import styled from 'styled-components';
import HeaderNavigation from './components/Header';

const App = () => {
  return (
    <HomePageWrapper>
      <HeaderNavigation />
      <InfoContainer>
        <Avatar
          alt='Laura F'
          src={AvatarImage}
          sx={{ width: 150, height: 150 }}
        />
        <h1>Software Developer</h1>
        <h2>Laura Forsblom</h2>
      </InfoContainer>
    </HomePageWrapper>
  );
};

const HomePageWrapper = styled.div`
  width: 100%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 4rem;
`;

export default App;
