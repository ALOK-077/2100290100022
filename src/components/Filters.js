// src/components/Filters.js
import React from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, Button, Grid, Box } from '@mui/material';

const Filters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  return (
    <Box mb={4}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <InputLabel>Company</InputLabel>
            <Select name="company" value={filters.company} onChange={handleChange}>
              <MenuItem value="AMZ">Amazon</MenuItem>
              <MenuItem value="FLP">Flipkart</MenuItem>
              <MenuItem value="SNP">Snapdeal</MenuItem>
              <MenuItem value="MYN">Myntra</MenuItem>
              <MenuItem value="AZO">Alibaba</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select name="category" value={filters.category} onChange={handleChange}>
              <MenuItem value="Phone">Phone</MenuItem>
              <MenuItem value="Laptop">Laptop</MenuItem>
              <MenuItem value="TV">TV</MenuItem>
              {/* Add other categories */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Min Price"
            name="minPrice"
            type="number"
            fullWidth
            value={filters.minPrice}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Max Price"
            name="maxPrice"
            type="number"
            fullWidth
            value={filters.maxPrice}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Rating"
            name="rating"
            type="number"
            fullWidth
            value={filters.rating}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <InputLabel>Availability</InputLabel>
            <Select name="availability" value={filters.availability} onChange={handleChange}>
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={() => setFilters({ ...filters })}>
            Apply Filters
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Filters;
