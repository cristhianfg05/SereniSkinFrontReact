import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AccountPage = () => {
    const navigate = useNavigate();
    const userId = sessionStorage.getItem('userId'); // Obtener el ID del usuario de sessionStorage

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const handleUpdate = async () => {
        const user = {
            full_name: fullName,
            email: email,
            password_hash: password, // Asegúrate de manejar la seguridad adecuadamente
            address: address,
            phone: phone
        };

        try {
            const response = await fetch(`http://localhost:4000/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            if (response.ok) {
                console.log('User information updated successfully');
                navigate('/main'); // O alguna página de confirmación
            } else {
                console.error('Failed to update user information');
                alert('Failed to update information');
            }
        } catch (error) {
            console.error('Error updating user information:', error);
            alert('An error occurred while updating your information');
        }
    };

    const handleBack = () => {
        navigate('/main'); // Navegar de vuelta a la página principal de la tienda
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
            <Container maxWidth="sm">
                <Paper elevation={3} sx={{ padding: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Mi Cuenta
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Información del Usuario
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Nombre Completo"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={fullName}
                                onChange={e => setFullName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Contraseña"
                                type="password"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Nueva Contraseña"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Dirección"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={address}
                                onChange={e => setAddress(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Teléfono"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={handleUpdate}
                                sx={{
                                    mt: 2,
                                    padding: '0.75rem',
                                    boxShadow: 2,
                                    borderRadius: '8px',
                                    '&:hover': {
                                        backgroundColor: '#1565c0',
                                    }
                                }}
                            >
                                Actualizar Información
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="secondary"
                                fullWidth
                                onClick={handleBack}
                                sx={{
                                    mt: 2,
                                    padding: '0.75rem',
                                    boxShadow: 2,
                                    borderRadius: '8px',
                                    '&:hover': {
                                        backgroundColor: '#d32f2f',
                                    }
                                }}
                            >
                                Volver a la Tienda
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
};

export default AccountPage;
