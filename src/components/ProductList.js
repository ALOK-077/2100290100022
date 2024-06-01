// src/components/ProductList.js
import React from 'react';
import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  const getRandomImage = () => `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`;

  return (
    <Grid container spacing={3}>
      {products.map((product, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
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
              <Link to={`/product/${index}`}>View Details</Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
