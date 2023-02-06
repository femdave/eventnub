import React from 'react';
import { Box, styled, Typography, Button, useTheme } from '@mui/material';
import Navbar from './Navbar';
import bg from '../../assets/bg.jpg';

function Hero() {
  const theme = useTheme();
  const StyledDiv = styled('div')(({ theme, bg }) => ({
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
    position: 'relative',
    '&::after': {
      content: '" "',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      height: '100%',
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    },
  }));
  return (
    <Box>
      <StyledDiv bg={bg}>
        <Navbar />
        <Box
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              marginTop: '200px',
              position: 'absolute',
              zIndex: '1',
              [theme.breakpoints.down('sm')]: { marginTop: '100px', marginRight: '120px', width: '100vw' },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: '40px',
                color: '#fff',
                fontWeight: '800',
                marginLeft: '145px',
                [theme.breakpoints.down('sm')]: { fontSize: '1em' },
              }}
            >
              Made For Artist & Fans
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: '400',
                color: '#fff',
                align: 'center',
                marginLeft: '80px',
                [theme.breakpoints.down('sm')]: { fontSize: '0.5em', marginLeft: '140px' },
              }}
            >
              Don’t Miss Out on Your Next Favorite Concert
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: '400',
                color: '#fff',
                align: 'center',
                marginLeft: '120px',
                [theme.breakpoints.down('sm')]: { fontSize: '0.5em', marginLeft: '155px' },
              }}
            >
              Win A Free or Sponsored Ticket Now!
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '120px',
                [theme.breakpoints.down('sm')]: { marginTop: '40px' },
              }}
            >
              <Button
                variant="contained"
                sx={{
                  width: '100%',
                  height: '10vh',
                  boxShadow: 'none',
                  backgroundColor: '#1358A5',
                  marginLeft: '70px',
                  [theme.breakpoints.down('sm')]: { width: '125px', height: '25px' },
                }}
              >
                <Typography
                  component="h5"
                  sx={{ color: '#fff', fontWeight: '700', [theme.breakpoints.down('sm')]: { fontSize: '8px' } }}
                >
                  Find Your Next Concert
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </StyledDiv>
    </Box>
  );
}

export default Hero;
