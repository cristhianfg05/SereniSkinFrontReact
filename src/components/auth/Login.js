import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Paper, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        // Preparar el JSON que será enviado
        const requestBody = {
            identifier: email,
            password: password
        };

        console.log('Enviando JSON:', JSON.stringify(requestBody));  // Mostrar el JSON enviado en consola

        try {
            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });
            const data = await response.json();

            console.log('Respuesta del servidor:', data);  // Mostrar la respuesta del servidor en consola

            if (response.ok) {
                sessionStorage.setItem('token', data.token);  // Almacenar el token en sessionStorage
                navigate('/main');  // Navegar a la página principal tras el inicio de sesión exitoso
            } else {
                alert('Error en el inicio de sesión: ' + (data.message || 'Error desconocido'));  // Mostrar mensaje de error
            }
        } catch (error) {
            console.error('Error al conectar con el servidor:', error);  // Mostrar errores de conexión en consola
            alert('Error al conectar con el servidor');
        }
    };

    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f5f5f5',
            }}
        >
            <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, width: '100%' }}>
                <Grid container direction="column" alignItems="center" spacing={2}>
                    <Grid item>
                        <Typography variant="h4" component="h1" gutterBottom>
                            Iniciar Sesión
                        </Typography>
                        <Typography variant="body1" color="textSecondary" align="center">
                            Por favor, ingresa tus datos para continuar
                        </Typography>
                    </Grid>
                    <Grid item width="100%">
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item width="100%">
                        <TextField
                            label="Contraseña"
                            type="password"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Grid>
                    <Grid item width="100%">
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{
                                fontSize: '1rem',
                                padding: '0.75rem',
                                boxShadow: 2,
                                borderRadius: '8px',
                                '&:hover': {
                                    backgroundColor: '#1565c0',
                                }
                            }}
                            onClick={handleLogin}
                        >
                            Login
                        </Button>
                    </Grid>
                    <Grid item width="100%" sx={{ mt: 2 }}>
                        <Typography variant="body2" color="textSecondary" align="center">
                            ¿No tienes una cuenta? <a href="/register" style={{ textDecoration: 'none', color: '#1976d2' }}>Regístrate</a>
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}

export default Login;
