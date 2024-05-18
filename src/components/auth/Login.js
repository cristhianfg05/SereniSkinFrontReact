import React from 'react';
import { Button, TextField, Box, Typography, Paper, Grid } from '@mui/material';

const Login = () => {
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
                        />
                    </Grid>
                    <Grid item width="100%">
                        <TextField 
                            label="Password" 
                            type="password" 
                            variant="outlined" 
                            fullWidth 
                            margin="normal" 
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
