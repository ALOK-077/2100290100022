// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';
import { Container, Typography, Box } from '@mui/material';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    company: '',
    category: '',
    rating: 0,
    minPrice: 0,
    maxPrice: 10000,
    availability: '',
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://20.244.56.144/test/companies/${filters.company}/categories/${filters.category}/products`,
          {
            params: {
              top: 10,
              minPrice: filters.minPrice,
              maxPrice: filters.maxPrice,
            },
          }
        );
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [filters]);

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Top Products
        </Typography>
        <Filters filters={filters} setFilters={setFilters} />
        <ProductList products={products} />
      </Box>
    </Container>
  );
};

export default HomePage;
