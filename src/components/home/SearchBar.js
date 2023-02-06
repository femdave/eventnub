import React from 'react';
import { TextField, Select, MenuItem, Button, useTheme, Box } from '@mui/material';

const SearchBar = () => {
  const [value1, setValue1] = React.useState('');
  const [value2, setValue2] = React.useState('');
  const theme = useTheme();

  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };

  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContents: 'space-between',
        alignItems: 'center',
        border: '1px solid #F4F4F4',
        height: '100%',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          width: '90%',
        },
      }}
    >
      <Box sx={{ width: '100%' }}>
        <TextField
          label="Concert Name"
          value={value1}
          onChange={handleChange1}
          variant="standard"
          InputProps={{ disableUnderline: true }}
          sx={{
            marginRight: '16px',
            outline: 'none',
            padding: '5px',
            background: '#F4F4F4',
            height: '100%',
            width: '100%',
            [theme.breakpoints.down('sm')]: {
              width: '100%',
              height: '100%',
            },
          }}
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Select value={value2} onChange={handleChange2} displayEmpty style={{ marginRight: '10px' }}>
          <MenuItem value="">Artist</MenuItem>
          <MenuItem value={10}>Option 1</MenuItem>
          <MenuItem value={20}>Option 2</MenuItem>
        </Select>
        <Select value={value2} onChange={handleChange2} displayEmpty style={{ marginRight: '10px' }}>
          <MenuItem value="">Date</MenuItem>
          <MenuItem value={10}>Option 1</MenuItem>
          <MenuItem value={20}>Option 2</MenuItem>
        </Select>
        <Button
          variant="contained"
          disableElevation
          sx={{
            width: '20vw',
            height: '7vh',
            background: '#FF6C2C',
            boxShadow: '0',
            borderRadius: '20px',
            marginRight: '5px',
            '&:hover': {
              backgroundColor: '#CC5A27',
              boxShadow: 'none',
            },
          }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default SearchBar;
