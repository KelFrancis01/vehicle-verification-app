import * as React from 'react';
import { Container, Typography } from '@mui/material';


function Terms() {
  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
      <Typography variant="h4" component="h1" align="center" sx={{ marginBottom: '2rem', color:'#C28714' }}>
        Terms of Use
      </Typography>
      <Typography variant="body1" align="justify" sx={{ marginBottom: '1rem' }}>
        Welcome to Vehicle Verification App. By using our services, you agree to comply with and be
        bound by the following terms and conditions of use. Please read these terms carefully
        before using our application.
      </Typography>
      <Typography variant="body1" align="justify" sx={{ marginBottom: '1rem' }}>
        1. The content of the pages of this application is for your general information and use
        only. It is subject to change without notice.
      </Typography>
      <Typography variant="body1" align="justify" sx={{ marginBottom: '1rem' }}>
        2. Your use of any information or materials on this application is entirely at your own
        risk, for which we shall not be liable. It shall be your own responsibility to ensure that
        any products, services, or information available through this application meet your specific
        requirements.
      </Typography>
      <Typography variant="body1" align="justify" sx={{ marginBottom: '1rem' }}>
        3. This application contains material which is owned by or licensed to us. This material
        includes, but is not limited to, the design, layout, look, appearance, and graphics.
        Reproduction is prohibited other than in accordance with the copyright notice, which forms
        part of these terms and conditions.
      </Typography>
      <Typography variant="body1" align="justify" sx={{ marginBottom: '1rem' }}>
        4. Unauthorized use of this application may give rise to a claim for damages and/or be a
        criminal offense.
      </Typography>
      <Typography variant="body1" align="justify" sx={{ marginBottom: '1rem' }}>
        5. From time to time, this application may also include links to other applications. These
        links are provided for your convenience to provide further information. They do not signify
        that we endorse the application(s). We have no responsibility for the content of the linked
        application(s).
      </Typography>
      <Typography variant="body1" align="justify" sx={{ marginBottom: '1rem' }}>
        6. Your use of this application and any dispute arising out of such use of the application
        is subject to the laws of your country.
      </Typography>
      <Typography variant="body1" align="justify">
        If you have any questions or concerns regarding these terms of use, please contact us at the
        following:
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
    </Container>
  );
}

export default Terms;