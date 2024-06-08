import React from 'react';
import { Typography, Container, Grid, Card, CardContent, CardMedia, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

const CartPage = () => {
    const { cartProducts, removeFromCart, clearCart } = useCart();
    const navigate = useNavigate();

    const handlePurchase = async () => {
        const details = cartProducts.map(product => ({
            product_id: product.id.toString(),
            quantity: product.quantity,
            price: product.price
        }));

        try {
            const userId = sessionStorage.getItem('userId'); // Obtener el ID del usuario de sessionStorage
            const response = await fetch(`http://localhost:4000/purchases/user/${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ details })
            });
            if (response.ok) {
                alert('Compra realizada con éxito');
                clearCart();  // Vaciar el carrito tras una compra exitosa
                navigate('/main'); // Redirigir al usuario a la página principal
            } else {
                const errorData = await response.json();
                alert('Error al realizar la compra: ' + errorData.message);
            }
        } catch (error) {
            alert('Error de red al intentar realizar la compra');
        }
    };

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
                                    image={product.image || 'https://via.placeholder.com/150'}
                                    alt={product.name}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="h6" color="text.primary">
                                        {product.price}
                                    </Typography>
                                    <TextField
                                        type="text"
                                        value={product.quantity}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </CardContent>
                                <Button variant="contained" color="secondary" onClick={() => removeFromCart(product.id)}>
                                    Eliminar del carrito
                                </Button>
                            </Card>
                        </Grid>
                    ))}
                    <Button variant="contained" color="primary" onClick={handlePurchase} sx={{ mt: 2 }}>
                        Realizar Compra
                    </Button>
                </Grid>
            )}
            <Button variant="contained" color="secondary" onClick={() => navigate(-1)} sx={{ mt: 2, ml: 2 }}>
                Volver
            </Button>
        </Container>
    );
};

export default CartPage;
