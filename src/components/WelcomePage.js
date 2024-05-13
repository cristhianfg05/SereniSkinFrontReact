import React from 'react';
import { Button, Box, Typography, Container } from '@mui/material';
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
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: 'url(https://s1.1zoom.me/big0/911/Lipstick_powder_Gray_background_Makeup_Paintbrush_565009_1280x853.jpg)',
            backgroundSize: 'cover'
        }}>
            <Container maxWidth="sm" sx={{ textAlign: 'right', color: 'white' }}>
                <Typography variant="h2" component="h1" gutterBottom>
                    Nombre de la Tienda
                </Typography>
                <Button variant="contained" onClick={handleLogin} sx={{ marginRight: 2 }}>
                    Iniciar Sesión
                </Button>
                <Button variant="contained" color="secondary" onClick={handleRegister}>
                    Registrarse
                </Button>
            </Container>
        </Box>
    );
};

export default WelcomePage;
