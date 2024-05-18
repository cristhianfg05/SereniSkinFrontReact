import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, CardMedia, CardActions, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

const products = [
    { id: 1, name: 'Producto 1', description: 'Descripción del producto 1', price: '$10', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Producto 2', description: 'Descripción del producto 2', price: '$20', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Producto 3', description: 'Descripción del producto 3', price: '$30', image: 'https://via.placeholder.com/150' },
];

const MainPage = () => {
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const handleLogout = () => {
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
                        Nombre de la Tienda
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
                                    sx={{ pt: '56.25%' }}
                                    image={product.image}
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
                                        {product.price}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="contained" size="small" color="primary" onClick={() => handleProductDetail(product.id)}>
                                        Ver Detalles
                                    </Button>
                                    <Button variant="contained" size="small" color="secondary" onClick={() => addToCart(product)}>
                                        Añadir al Carrito
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