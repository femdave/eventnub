import React from 'react';
import { Container, Box, Typography } from '@mui/material';

export default function About() {
  return (
    <Container maxWidth="sm" sx={{ height: '75vh', marginTop: '90px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Typography variant="h6" sx={{ marginBottom: '40px', color: '#000' }}>
          How it Works
        </Typography>
        <Box sx={{ width: '50vw' }}>
          <Typography paragraph sx={{ color: '#000', marginLeft: '50px', fontWeight: '600' }}>
            Eventnub helps her users sponsor a part or full ticket fee by letting you play a{' '}
          </Typography>
          <Box sx={{ width: '50vw', padding: '4px 15px' }}>
            <Typography paragraph sx={{ color: '#000', marginLeft: '50px', fontWeight: '600' }}>
              how well you know your fan game to proof you are a real fan of the artist.
            </Typography>
          </Box>
          <Box sx={{ width: '45vw', padding: '4px 20px 4px 30px' }}>
            <Typography paragraph sx={{ color: '#000', marginLeft: '60px', fontWeight: '600' }}>
              If you win the game we will sponsor your ticket to join in the next
            </Typography>
          </Box>
          <Box
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50vw', fontWeight: '600' }}
          >
            <Typography paragraph sx={{ color: '#000', fontWeight: '600' }}>
              live concert of the artist.{' '}
            </Typography>
          </Box>
          <Box sx={{ marginTop: '20px' }}>
            <Typography paragraph sx={{ color: '#000', fontWeight: '600', marginLeft: '75px' }}>
              As an artist you can join our existing artists and create events to
            </Typography>
          </Box>
          <Box sx={{ width: '50vw' }}>
            <Typography paragraph sx={{ color: '#000', fontWeight: '600', marginLeft: '60px' }}>
              enable your fans get free tickets to your events, you can {''}
              <span style={{ color: 'blue' }}>contact us</span> to
            </Typography>
            <Box sx={{ width: '50vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography paragraph sx={{ color: '#000', fontWeight: '600', marginBottom: '50px' }}>
                get started as an artist.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
