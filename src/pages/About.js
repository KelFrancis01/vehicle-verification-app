import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function About() {
  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
      <Typography variant="h4" component="h1" align="center" sx={{ marginBottom: '2rem', color:'#0A254E' }}>
        About Us
      </Typography>
      <Typography variant="body1" align="justify" sx={{ marginBottom: '4rem' }}>
      Welcome to Verver – Your Trusted Partner in Vehicle Verification!
      At Verver, we understand the importance of ensuring the authenticity and legitimacy of vehicles. 
      Our web application is designed to provide a seamless and secure vehicle verification process, 
      empowering users with the knowledge they need to make informed decisions.
      <Typography variant="h5" component="h3" align="left" 
      sx={{ marginTop: '1rem', marginBottom: '1rem', color:'#0A254E' }}>Who We Are:</Typography>
      Verver is a cutting-edge platform dedicated to enhancing transparency and trust in the automotive industry. 
      We believe that every user deserves access to accurate and up-to-date information about the vehicles they 
      encounter or consider purchasing.

      <Typography variant="h5" component="h3" align="left" 
      sx={{ marginTop: '1rem', marginBottom: '1rem', color:'#0A254E' }}>Our Mission:</Typography>
      Our mission is to simplify the vehicle verification process, making it accessible to individuals, businesses, 
      and law enforcement agencies alike. By leveraging advanced technology, we aim to contribute to a safer and 
      more informed community of vehicle owners and buyers.

      <Typography variant="h5" component="h3" align="left" 
      sx={{ marginTop: '1rem', marginBottom: '1rem', color:'#0A254E' }}>Key Features:</Typography>
      Comprehensive Database: Our extensive database is continuously updated to provide the latest information on 
      vehicles, ensuring that users have access to the most accurate details.

      User-Friendly Interface: Verver features an intuitive and user-friendly interface, making the vehicle 
      verification process quick and hassle-free.

      Real-time Results: With our state-of-the-art technology, users can receive real-time verification results, allowing for instant decision-making.

      Secure and Confidential: We prioritize the security and confidentiality of user information. Your data is handled with the utmost care and in compliance with industry standards.

      <Typography variant="h5" component="h3" align="left" 
      sx={{ marginTop: '1rem', marginBottom: '1rem', color:'#0A254E' }}>How It Works:</Typography>
      Enter Vehicle Details: Users can input key details about a vehicle, including the VIN 
      (Vehicle Identification Number), make, model, and registration information.

      Instant Verification: Our system swiftly processes the information against our comprehensive database, providing users with instant verification results.

      Detailed Reports: Users receive detailed reports containing information about the vehicle's history, ownership, and any reported incidents.

      <Typography variant="h5" component="h3" align="left" 
      sx={{ marginTop: '1rem', marginBottom: '1rem', color:'#0A254E' }}>Who Can Benefit:</Typography>
      Individual Buyers and Sellers: Ensure the legitimacy of a vehicle before making a purchase or listing it for sale.

      Law Enforcement Agencies: Facilitate investigations and recover stolen vehicles more efficiently.

      Businesses and Fleet Managers: Verify the authenticity of a vehicle before adding it to your fleet.

      Join Us on the Road to Transparency:
      At Verver, we believe in fostering transparency and trust within the automotive community. 
      Join us on the road to confident vehicle transactions, secure ownership, and a safer driving experience.

      Empower yourself with knowledge. Verify with Verver today!
      </Typography>
    </Container>
  );
}
      

export default About;