import React, { useState, useRef } from 'react';
import { Paper, Box, Rating, Typography, Avatar, Stack, Container, IconButton, styled } from '@mui/material';
import KeyboardArrowLeftSharpIcon from '@mui/icons-material/KeyboardArrowLeftSharp';
import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import avatarImg from '../../assets/avatar.png';

function SliderCom() {
  const [value, setValue] = useState(5);
  const slideRef = useRef(null);
  const StyledIconbutton = styled(IconButton)(() => ({
    position: 'relative',
    right: '-1rem',
    top: '-10rem',
    borderRadius: '50%',
    background: 'transparent',
    height: '2rem',
    width: '2rem',
    border: '1px solid #838383',
    zIndex: '1',
  }));
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container maxWidth="xl" sx={{ height: '100%', mt: 8, position: 'absolute', marginTop: 20 }}>
      <Slider {...settings} ref={slideRef}>
        <Paper variant="outlined" sx={{ height: '250px', width: '170px', background: '#FBFBFB' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
            <Box sx={{ marginTop: '10px' }}>
              <Rating name="read-only" value={value} readOnly size="small" />
            </Box>
            <Box sx={{ height: '5Opx', marginTop: '15px' }}>
              <Typography variant="body1" paragraph sx={{ fontSize: '13px', color: '#838383', fontWeight: '400' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint
                commodi consequuntur voluptatum.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', marginTop: '30px' }}>
              <Avatar src={avatarImg} alt="avatar" sx={{ marginTop: '10px', width: 70, height: 70 }} />
              <Stack sx={{ marginLeft: '20px', marginTop: 1 }}>
                <Typography sx={{ fontsize: '5px', marginTop: '10px', fontWeight: '600' }}>Peter Akwa</Typography>
                <Typography variant="subtitle2" sx={{ color: '#079EB2', fontWeight: '400' }}>
                  Doctor
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Paper>
        <Paper variant="outlined" sx={{ height: '250px', width: '170px', background: '#FBFBFB' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
            <Box sx={{ marginTop: '10px' }}>
              <Rating name="read-only" value={value} readOnly size="small" />
            </Box>
            <Box sx={{ height: '5Opx', marginTop: '15px' }}>
              <Typography variant="body1" paragraph sx={{ fontSize: '13px', color: '#838383', fontWeight: '400' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint
                commodi consequuntur voluptatum.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', marginTop: '30px' }}>
              <Avatar src={avatarImg} alt="avatar" sx={{ marginTop: '10px', width: 70, height: 70 }} />
              <Stack sx={{ marginLeft: '20px', marginTop: 1 }}>
                <Typography sx={{ fontsize: '5px', marginTop: '10px', fontWeight: '600' }}>Peter Akwa</Typography>
                <Typography variant="subtitle2" sx={{ color: '#079EB2', fontWeight: '400' }}>
                  Doctor
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Paper>
        <Paper variant="outlined" sx={{ height: '250px', width: '170px', background: '#FBFBFB' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
            <Box sx={{ marginTop: '10px' }}>
              <Rating name="read-only" value={value} readOnly size="small" />
            </Box>
            <Box sx={{ height: '5Opx', marginTop: '15px' }}>
              <Typography variant="body1" paragraph sx={{ fontSize: '13px', color: '#838383', fontWeight: '400' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint
                commodi consequuntur voluptatum.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', marginTop: '30px' }}>
              <Avatar src={avatarImg} alt="avatar" sx={{ marginTop: '10px', width: 70, height: 70 }} />
              <Stack sx={{ marginLeft: '20px', marginTop: 1 }}>
                <Typography sx={{ fontsize: '5px', marginTop: '10px', fontWeight: '600' }}>Peter Akwa</Typography>
                <Typography variant="subtitle2" sx={{ color: '#079EB2', fontWeight: '400' }}>
                  Doctor
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Paper>
        <Paper variant="outlined" sx={{ height: '250px', width: '170px', background: '#FBFBFB' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
            <Box sx={{ marginTop: '10px' }}>
              <Rating name="read-only" value={value} readOnly size="small" />
            </Box>
            <Box sx={{ height: '5Opx', marginTop: '15px' }}>
              <Typography variant="body1" paragraph sx={{ fontSize: '13px', color: '#838383', fontWeight: '400' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint
                commodi consequuntur voluptatum.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', marginTop: '30px' }}>
              <Avatar src={avatarImg} alt="avatar" sx={{ marginTop: '10px', width: 70, height: 70 }} />
              <Stack sx={{ marginLeft: '20px', marginTop: 1 }}>
                <Typography sx={{ fontsize: '5px', marginTop: '10px', fontWeight: '600' }}>Peter Akwa</Typography>
                <Typography variant="subtitle2" sx={{ color: '#079EB2', fontWeight: '400' }}>
                  Doctor
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Paper>
        <Paper variant="outlined" sx={{ height: '250px', width: '170px', background: '#FBFBFB' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
            <Box sx={{ marginTop: '10px' }}>
              <Rating name="read-only" value={value} readOnly size="small" />
            </Box>
            <Box sx={{ height: '5Opx', marginTop: '15px' }}>
              <Typography variant="body1" paragraph sx={{ fontSize: '13px', color: '#838383', fontWeight: '400' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint
                commodi consequuntur voluptatum.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', marginTop: '30px' }}>
              <Avatar src={avatarImg} alt="avatar" sx={{ marginTop: '10px', width: 70, height: 70 }} />
              <Stack sx={{ marginLeft: '20px', marginTop: 1 }}>
                <Typography sx={{ fontsize: '5px', marginTop: '10px', fontWeight: '600' }}>Peter Akwa</Typography>
                <Typography variant="subtitle2" sx={{ color: '#079EB2', fontWeight: '400' }}>
                  Doctor
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Paper>
        <Paper variant="outlined" sx={{ height: '250px', width: '170px', background: '#FBFBFB' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
            <Box sx={{ marginTop: '10px' }}>
              <Rating name="read-only" value={value} readOnly size="small" />
            </Box>
            <Box sx={{ height: '5Opx', marginTop: '15px' }}>
              <Typography variant="body1" paragraph sx={{ fontSize: '13px', color: '#838383', fontWeight: '400' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint
                commodi consequuntur voluptatum.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', marginTop: '30px' }}>
              <Avatar src={avatarImg} alt="avatar" sx={{ marginTop: '10px', width: 70, height: 70 }} />
              <Stack sx={{ marginLeft: '20px', marginTop: 1 }}>
                <Typography sx={{ fontsize: '5px', marginTop: '10px', fontWeight: '600' }}>Peter Akwa</Typography>
                <Typography variant="subtitle2" sx={{ color: '#079EB2', fontWeight: '400' }}>
                  Doctor
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Paper>
      </Slider>
      <StyledIconbutton onClick={() => slideRef?.current.slickPrev()}>
        <KeyboardArrowLeftSharpIcon />
      </StyledIconbutton>
      <StyledIconbutton onClick={() => slideRef?.current.slickNext()} sx={{ left: '75rem' }}>
        <KeyboardArrowRightSharpIcon />
      </StyledIconbutton>
    </Container>
  );
}

export default SliderCom;
