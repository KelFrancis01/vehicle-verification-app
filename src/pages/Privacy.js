import * as React from 'react';
import { Container, Typography } from '@mui/material';

function Privacy() {
  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem', marginBottom:'5rem' }}>
      <Typography variant="h4" component="h1" align="center" sx={{ marginBottom: '2rem', color:'#C28714' }}>
        Privacy Policy
      </Typography>
      <Typography variant="body1" align="justify" sx={{ marginBottom: '1rem' }}>
        At Vehicle Verification App, we are committed to protecting your privacy and ensuring the
        security of the information you provide to us. This Privacy Policy explains how we collect,
        use, and safeguard your personal information.
      </Typography>
      <Typography variant="body1" align="justify" sx={{ marginBottom: '1rem' }}>
        We collect personal information from you when you use our vehicle verification services. This
        information may include your name, contact details, vehicle registration number, and any
        other information required for the verification process.
      </Typography>
      <Typography variant="body1" align="justify" sx={{ marginBottom: '1rem' }}>
        The personal information we collect is used solely for the purpose of providing the vehicle
        verification services you requested. We do not share your personal information with any
        third parties unless required by law.
      </Typography>
      <Typography variant="body1" align="justify" sx={{ marginBottom: '1rem' }}>
        We implement appropriate security measures to protect your personal information from
        unauthorized access, alteration, disclosure, or destruction. We also regularly review and
        update our security practices to ensure the ongoing protection of your information.
      </Typography>
      <Typography variant="body1" align="justify" sx={{ marginBottom: '1rem' }}>
        If you have any questions, concerns, or requests regarding the handling of your personal
        information, please contact us at:
      </Typography>
      <Typography variant="body1" align="justify" sx={{ marginBottom: '1rem' }}>
        Vehicle Verification App
        <br />
        Address: 345 Amino Kano Way, Abuja, Nigeria
        <br />
        Phone: (+234) 706-456-7890
        <br />
        Email: info@vehicleverificationapp.com
      </Typography>
      <Typography variant="body1" align="justify">
        By using our vehicle verification services, you consent to the collection and use of your
        personal information as described in this Privacy Policy.
      </Typography>
    </Container>
  );
}

export default Privacy;