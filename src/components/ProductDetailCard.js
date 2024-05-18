import React from 'react';
import { Card, CardContent, Typography, Box, CardMedia } from '@mui/material';

const defaultImage = 'https://via.placeholder.com/150'; 

const ProductDetailCard = ({ title, description, available, image }) => {
    return (
        <Card variant="outlined">
            <CardMedia
                component="img"
                width="100%"
                height="auto"
                image={image || defaultImage} 
                alt={title} 
            />
            <CardContent>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {description}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body2">
                        Disponible:
                    </Typography>
                    <Typography variant="body2" sx={{ ml: 1, color: available ? 'green' : 'red' }}>
                        {available ? 'Sí' : 'No'}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ProductDetailCard;
