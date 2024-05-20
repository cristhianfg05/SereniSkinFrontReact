import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, CardMedia, CardActions, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]); // Estado inicial vacío para los productos

    useEffect(() => {
        // Función para cargar los datos de la API
        const fetchProducts = async () => {
            const response = await fetch('http://localhost:4000/products'); // Coloca aquí la URL de tu API
            const data = await response.json();
            setProducts(data); // Actualiza el estado con los productos obtenidos
        };

        fetchProducts();
    }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar el componente

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        navigate('/');
    };

    const handleAccount = () => {
        navigate('/account');
    };

    const handleCart = () => {
        navigate('/cart');
    };

    const handleProductDetail = (productId) => {
        navigate(`/product/${productId}`);
    };

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Sereni Skin
                    </Typography>
                    <Button color="inherit" onClick={handleAccount}>Mi Cuenta</Button>
                    <Button color="inherit" onClick={handleCart}>Carrito</Button>
                    <Button color="inherit" onClick={handleLogout}>Cerrar Sesión</Button>
                </Toolbar>
            </AppBar>
            <Container sx={{ py: 8 }}>
                <Grid container spacing={4}>
                    {products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardMedia
                                    component="img"
                                    sx={{ pt: '56.25%' }} // Puede ajustarse dependiendo del tamaño de la imagen
                                    image={product.image_url || 'https://via.placeholder.com/150'} // Usar imagen de placeholder si product.image_url es null
                                    alt={product.name}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {product.name}
                                    </Typography>
                                    <Typography>
                                        {product.description}
                                    </Typography>
                                    <Typography variant="h6" color="text.primary">
                                        ${product.price}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="contained" size="small" color="primary" onClick={() => handleProductDetail(product.id)}>
                                        Ver Detalles
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default MainPage;
