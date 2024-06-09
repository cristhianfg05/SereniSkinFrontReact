import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PurchasesPage = () => {
    const navigate = useNavigate();
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        const fetchPurchases = async () => {
            const userId = sessionStorage.getItem('userId'); // Asume que el ID del usuario se guarda en sessionStorage
            const response = await fetch(`http://localhost:4000/purchases/user/${userId}`);
            const data = await response.json();
            setPurchases(data);
        };

        fetchPurchases();
    }, []);

    return (
        <Container sx={{ py: 8 }}>
            <Typography variant="h4" gutterBottom>
                Mis Compras
            </Typography>
            {purchases.length > 0 ? (
                purchases.map((purchase) => (
                    <Box key={purchase.id} sx={{ mt: 2 }}>
                        <Typography variant="h6">
                            Compra #{purchase.id} - Total: ${purchase.total_price} - Fecha: {new Date(purchase.purchase_date).toLocaleDateString()}
                        </Typography>
                        <Grid container spacing={2}>
                            {purchase.details.map((item) => (
                                <Grid item key={item.purchase_id} xs={12} sm={6} md={4}>
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={item.product.image_url || 'https://via.placeholder.com/150'}
                                            alt={item.product.name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item.product.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Precio: ${item.price_at_purchase}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Cantidad: {item.quantity}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                ))
            ) : (
                <Typography>No hay compras registradas.</Typography>
            )}
            <Button variant="contained" color="secondary" onClick={() => navigate(-1)} sx={{ mt: 2, ml: 2 }}>
                Volver
            </Button>
        </Container>
    );
};

export default PurchasesPage;
