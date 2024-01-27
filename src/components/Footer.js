import React from 'react';
import { styled } from '@mui/system';
import { Typography, Link, IconButton, useMediaQuery, useTheme  } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const StyledFooter = styled('footer')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '16px',
  background: '#0A254E',
  color: '#fff',
  minHeight: '200px',
  
});

const Logo = styled(Typography)({
  marginRight: '100px',
});

const FooterLink = styled(Link)({
  marginRight: '16px',
  textDecoration: 'none',
  color:'#fff',
  fontFamily:'Roboto'
});

const SocialMediaLink = styled(IconButton)({
  marginRight: '8px',
  color: '#fff',
});
    

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  return (
   
    <>
        <StyledFooter>
            <Logo variant="h6" component="span">
              <Typography 
                sx={{fontSize:'1.5rem', 
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    mr:2,
                    letterSpacing: '.3rem',}}>  <DirectionsCarIcon />Verver</Typography>
            </Logo>
            {!isMatch && (
                    <>
                        <FooterLink href="Home">Home</FooterLink>
                        <FooterLink href="/About">About</FooterLink>
                        <FooterLink href="/Contact">Contact</FooterLink>
                        <FooterLink href="/Privacy">Privacy Policy</FooterLink>
                        <FooterLink href="/Terms">Terms of Use</FooterLink>
                    </>
                )}
                    <SocialMediaLink>
                        <FacebookIcon />
                    </SocialMediaLink>
                    <SocialMediaLink>
                        <TwitterIcon />
                    </SocialMediaLink>
                    <SocialMediaLink>
                        <InstagramIcon />
                    </SocialMediaLink>
                    <SocialMediaLink>
                        <LinkedInIcon />
                    </SocialMediaLink>
                    <Typography variant="body2" component="span">
                        &copy; {currentYear} Verver. All rights reserved.
                    </Typography>
 
        </StyledFooter>
    </>
  );
};

export default Footer;