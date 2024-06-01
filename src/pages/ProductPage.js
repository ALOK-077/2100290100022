// src/pages/ProductPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Container, CardMedia, Box } from '@mui/material';

const ProductPage = ({ products }) => {
  const { id } = useParams();
  const product = products[id];

  if (!product) {
    return <Typography>Product not found</Typography>;
  }

  const getRandomImage = () => `https://picsum.photos/400/300?random=${Math.floor(Math.random() * 1000)}`;

  return (
    <Container>
      <Box my={4}>
        <Card>
          <CardMedia
            component="img"
            height="300"
            image={getRandomImage()}
            alt={product.productName}
          />
          <CardContent>
            <Typography variant="h5">{product.productName}</Typography>
            <Typography>Company: {product.company}</Typography>
            <Typography>Category: {product.category}</Typography>
            <Typography>Price: ${product.price}</Typography>
            <Typography>Rating: {product.rating}</Typography>
            <Typography>Discount: {product.discount}%</Typography>
            <Typography>Availability: {product.availability}</Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default ProductPage;
