import { Box, Container, Typography, Grid, Button, useTheme, styled, Paper } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

import data from '../../constants/data';

export default function Concerts() {
  const theme = useTheme();

  const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    padding: '20px',
  }));

  const [displayData, setDisplayData] = useState(data.slice(0, 6));

  const handleLoadMore = () => {
    setDisplayData(displayData.concat(data.slice(displayData.length, displayData.length + 6)));
  };
  return (
    <Box>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            marginTop: '3em',
            justifyContent: 'space-between',
            [theme.breakpoints.down('sm')]: { flexDirection: 'column' },
          }}
        >
          <Typography
            variant="h6"
            component="h1"
            sx={{
              color: '#000000',
              fontWeight: '600px',
              fontSize: '32px',
              lineHeight: '38.7px',
              [theme.breakpoints.down('sm')]: { fontSize: 16 },
            }}
          >
            Up Coming Concerts
          </Typography>
          <Box sx={{ flex: '0.6' }}>
            <SearchBar />
          </Box>
        </Box>
        <Grid container spacing={3} sx={{ marginTop: '15px' }}>
          {displayData.map((item) => (
            <Grid item xs={12} md={4} key={item.id}>
              <Paper
                elevation={10}
                sx={{ height: '100%', width: '85%', background: '#fff', borderRadius: '8px', position: 'relative' }}
              >
                <Link to="/auth">
                  <img src={item.imageUrl} alt="Live concert" />
                </Link>
                <Box
                  sx={{
                    background: '#fff',
                    width: '12%',
                    height: '5%',
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    borderRadius: '5px',
                    padding: '0.3em',
                    textAlign: 'center',
                    fontSize: '10px',
                    color: '#000000',
                    fontWeight: '400',
                  }}
                >
                  {item.badge}
                </Box>
                <Box sx={{ display: 'flex', marginTop: '15px', padding: '10px' }}>
                  <Box sx={{ marginRight: '10px' }}>
                    <Typography variant="h6" sx={{ color: '#000' }}>
                      {item.day}
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#000' }}>
                      {item.month}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ color: '#000' }}>
                      {item.title}
                    </Typography>
                    <Typography paragraph sx={{ color: '#000' }}>
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
                <StyledLink to="/auth">
                  <Button variant="outlined" sx={{ width: '80%', mb: '0.8em', alignItems: 'center' }}>
                    Explore Available Tickets
                  </Button>
                </StyledLink>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
          <Button
            variant="contained"
            disableElevation
            sx={{ background: 'rgba(19, 88, 165, 0.06)', color: 'black', borderRadius: '10px', boxShadow: 'none' }}
            onClick={handleLoadMore}
          >
            Load More Concerts
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
