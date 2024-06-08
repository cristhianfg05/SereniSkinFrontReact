import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Paper, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const handleRegister = async () => {
        const user = {
            email: email,
            username: email.split('@')[0],  // Assuming the username is derived from the email
            password_hash: password,  // Consider hashing this password client-side or preferably server-side
            full_name: fullName,
            address: address,
            phone: phone
        };

        try {
            const response = await fetch('http://localhost:4000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            const data = await response.json();
            if (response.ok) {
                console.log('Registration successful:', data);
                navigate('/main');
            } else {
                console.log('Registration failed:', data.message);
                alert('Registration failed: ' + data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
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
                            Registrarse
                        </Typography>
                        <Typography variant="body1" color="textSecondary" align="center">
                            Por favor, completa los datos para crear una cuenta
                        </Typography>
                    </Grid>
                    <Grid item width="100%">
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item width="100%">
                        <TextField
                            label="Nombre Completo"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={fullName}
                            onChange={e => setFullName(e.target.value)}
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
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Grid>
                    <Grid item width="100%">
                        <TextField
                            label="Dirección"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                        />
                    </Grid>
                    <Grid item width="100%">
                        <TextField
                            label="Teléfono"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
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
                            onClick={handleRegister}
                        >
                            Registrarse
                        </Button>
                    </Grid>
                    <Grid item width="100%" sx={{ mt: 2 }}>
                        <Typography variant="body2" color="textSecondary" align="center">
                            ¿Ya tienes una cuenta? <a href="/login" style={{ textDecoration: 'none', color: '#1976d2' }}>Inicia Sesión</a>
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}

export default Register;
