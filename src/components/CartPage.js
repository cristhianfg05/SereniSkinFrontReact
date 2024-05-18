import React from 'react';
import { Typography, Container, Box, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';


const cartProducts = [
    { id: 1, name: 'Producto 1', price: '$10', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Producto 2', price: '$20', image: 'https://via.placeholder.com/150' },
];

const CartPage = () => {

    return (
        <Container sx={{ py: 8 }}>
            <Typography variant="h4" gutterBottom>
                Carrito
            </Typography>
            {cartProducts.length === 0 ? (
                <Typography variant="body1">
                    Tu carrito está vacío.
                </Typography>
            ) : (
                <Grid container spacing={4}>
                    {cartProducts.map((product) => (
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
                                    <Typography variant="h6" color="text.primary">
                                        {product.price}
                                    </Typography>
                                </CardContent>
                                <Button variant="contained" color="secondary">
                                    Eliminar del carrito
                                </Button>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
};

export default CartPage;
