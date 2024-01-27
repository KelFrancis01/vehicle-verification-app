import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Typography, TextField, Button } from '@mui/material';
import axios from 'axios';


const StyledHome = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '16px',
  textAlign: 'center',
  background: '#fff',
  color: '#0A254E',
  minHeight: '600px',
});

const Heading = styled(Typography)({
  marginBottom: '16px',
  marginTop: '1.5rem',
  fontWeight: '400',
});

const Paragraph = styled(Typography)({
  marginBottom: '16px',
  fontSize: '20px',
});

const SearchBar = styled(TextField)({
  width: '40%',
  marginBottom: '16px',
  background: '#f5f5f5',
});

const PrimaryButton = styled(Button)({
  marginRight: '8px',
  backgroundColor: '#C28714',
});

const SecondaryButton = styled(Button)({
    marginRight: '8px',
    color: '#C28714',
    borderColor: '#C28714',
  });

  
  

const Home = () => {

  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  
  };
  const handleVerifyClick = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/Home/${searchValue}`);
      // Process the response and update the UI with the fetched data
      console.log('Fetched data:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error feedback to the user
    }
  };

  const handleSignUpClick = () => {
    window.location.href = '/Reportvehicle'; // Navigate to the SignUp page when the button is clicked
  };
  
  return (
    <div>
        <StyledHome>
        <Heading variant="h3" component="h1" gutterBottom>
            Your Best Choice <br />for Vehicle Verification and Theft Status Check.
        </Heading>
        <Paragraph variant="body1" gutterBottom>
            Verify that vehicle is not a Stolen Vehicle <br /> before you purchase it. 
            Get Started Now by just one click!
        </Paragraph>
        <SearchBar id="search-bar" label="Enter VIN/Chassis Number" name= "vin" variant="outlined" 
        value={searchValue} onChange={handleSearchChange} />
        <span>
            <PrimaryButton variant="contained" size='Medium' 
            onClick={handleVerifyClick}>
                Verify
            </PrimaryButton>
            <SecondaryButton variant="outlined" onClick={handleSignUpClick}>
                Report Stolen Vehicle
            </SecondaryButton>
        </span>
        
        </StyledHome>
    </div>
  );
};

export default Home;