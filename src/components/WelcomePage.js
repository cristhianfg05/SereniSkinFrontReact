import React from 'react';
import { Button, Box, Typography, Container, Paper, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <Box sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: 'url(https://s1.1zoom.me/big0/911/Lipstick_powder_Gray_background_Makeup_Paintbrush_565009_1280x853.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <Container maxWidth="sm">
                <Paper elevation={3} sx={{ padding: 4, backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
                    <Grid container direction="column" alignItems="center" spacing={3}>
                        <Grid item>
                            <Typography variant="h2" component="h1" gutterBottom color="primary" align="center">
                                Sereni Skin
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align="center">
                                Bienvenido a nuestra tienda. Por favor, inicie sesión o regístrese para continuar.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button 
                                variant="contained" 
                                onClick={handleLogin} 
                                sx={{ 
                                    marginRight: 2, 
                                    fontSize: '1.2rem', 
                                    padding: '0.75rem 1.5rem', 
                                    boxShadow: 3, 
                                    borderRadius: '8px',
                                    backgroundColor: '#1976d2',
                                    '&:hover': {
                                        backgroundColor: '#115293',
                                    }
                                }}
                            >
                                Iniciar Sesión
                            </Button>
                            <Button 
                                variant="contained" 
                                color="secondary" 
                                onClick={handleRegister} 
                                sx={{ 
                                    fontSize: '1.2rem', 
                                    padding: '0.75rem 1.5rem', 
                                    boxShadow: 3, 
                                    borderRadius: '8px',
                                    backgroundColor: '#dc004e',
                                    '&:hover': {
                                        backgroundColor: '#9a0036',
                                    }
                                }}
                            >
                                Registrarse
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
};

export default WelcomePage;
