import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: '4rem', marginBottom: '6rem' }}>
      <Typography variant="h4" component="h1" align="center" sx={{ marginBottom: '2rem', color:'#0A254E'}}>
        Contact Us
      </Typography>
      <Typography variant="body1" align="center" sx={{ marginBottom: '1rem', color:'#0A254E' }}>
        For more information on our services and other related vehicle information, kindly leave us a message. 
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Full Name"
          fullWidth
          margin="normal"
          variant="outlined"
          required
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          variant="outlined"
          type="email"
          required
        />
        <TextField
          label="Message"
          fullWidth
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
          required
        />
        <Button type="submit" variant="contained" 
        size="large" sx={{marginTop:'10px', backgroundColor:'#C28714'}}>
          Send
        </Button>
      </form>
    </Container>
  );
}

export default Contact;