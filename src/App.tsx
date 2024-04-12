import './App.css';
import { Avatar } from '@mui/material';
import AvatarImage from './assets/avatar.jpg';
import styled from 'styled-components';

const App = () => {
  return (
    <InfoContainer>
      <Avatar
        alt='Laura F'
        src={AvatarImage}
        sx={{ width: 150, height: 150 }}
      />
      <h1>Software Developer</h1>
      <h2>Laura Forsblom</h2>
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default App;
