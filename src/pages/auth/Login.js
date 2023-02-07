import { Link as RouterLink } from 'react-router-dom';
import { Button, Typography, Box, Container } from '@mui/material';
import { PATH_AUTH } from '../../routes/paths';
import useFirebase from '../../hooks/useFirebase';
import Page from '../../components/Page';
import GoogleIcon from '../../assets/images/auth/google.png';
import FacebookIcon from '../../assets/images/auth/facebook.png';
import bg from '../../assets/background-img.png';
import logo from '../../assets/blueLogo.png';
import { LoginForm } from '../../sections/auth/login';

export default function Login() {
  const { loginWithGoogle, loginWithFacebook } = useFirebase();

  const handleLoginGoogle = async () => {
    try {
      await loginWithGoogle();
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoginFacebook = async () => {
    try {
      await loginWithFacebook();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Page title="Log In">
      <Box
        sx={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '100vh',
          width: '100vw',
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            height: '60%',
            width: '70%',
            backgroundColor: 'rgb(212, 210, 210)',
            display: 'flex',
          }}
        >
          <Box width={'50%'} sx={{ zIndex: '1', position: 'absolute' }}>
            <Box display="flex" flexDirection="column">
              <Box display="flex" alignItems="center">
                <img src={logo} alt="logo" />
                <Typography variant="h6" sx={{ color: '#1358A5', letterSpacing: '0.1em', fontsize: '2rem' }}>
                  eventnub
                </Typography>
              </Box>
              <Box sx={{ width: '180px' }}>
                <Typography
                  variant="h4"
                  sx={{ paddingLeft: '1em', color: '#ffffff', fontWeight: '100', fontSize: '1rem' }}
                >
                  Don't have an account?
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ paddingLeft: '1.8em', color: '#ffffff', fontSize: '0.6rem', paddingTop: '1em' }}
                >
                  Join us and let's help you get that live concert experience
                </Typography>
              </Box>
              <Box sx={{ marginTop: '1em', paddingLeft: '1em' }}>
                <Button variant="outlined" sx={{ border: '1px solid #ffffff', color: '#ffffff' }}>
                  Create Eventnub Account
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: '#fff',
              height: '70vh',
              position: 'relative',
              left: '50%',
              bottom: '10%',
              zIndex: '2',
              width: '45%',
              borderRadius: '5px',
            }}
          >
            <Container>
              <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ marginTop: '1.5rem' }}>
                <Box>
                  <Typography variant="h5" sx={{ color: '#000', fontWeight: '600' }}>
                    Sign In
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={2}>
                  <Typography variant="subtitle2" sx={{ color: '#000', fontWeight: '100' }}>
                    With
                  </Typography>
                  <Button variant="outlined" sx={{ border: '1px solid #F5F5F5' }} onClick={handleLoginGoogle}>
                    <img src={GoogleIcon} alt="google icon" style={{ width: '20px', height: '20px' }} />
                  </Button>
                  <Button variant="outlined" sx={{ border: '1px solid #F5F5F5' }} onClick={handleLoginFacebook}>
                    <img src={FacebookIcon} alt="facebook icon" style={{ width: '20px', height: '20px' }} />
                  </Button>
                </Box>
              </Box>
              <Typography align="center" my={5} variant="h6" sx={{ color: '#000' }}>
                Or
              </Typography>

              <LoginForm />
            </Container>
          </Box>
        </Box>
      </Box>
    </Page>
  );
}
