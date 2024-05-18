import React from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AccountPage = () => {
    const navigate = useNavigate();

    const handleUpdate = () => {
        //aqui se ha de poner la logica para actualizar la info :)
    };

    const handleBack = () => {
        navigate('/main');
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
                                defaultValue="Nombre del Usuario" 
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                label="Email" 
                                variant="outlined" 
                                fullWidth 
                                margin="normal" 
                                defaultValue="usuario@example.com" 
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                label="Contraseña" 
                                type="password" 
                                variant="outlined" 
                                fullWidth 
                                margin="normal" 
                                placeholder="Cambiar Contraseña" 
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
