import React from 'react';
import { Grid, TextField, MenuItem, Button } from '@mui/material';
import BasePage from './BasePage';

const SearchProperties: React.FC = () => {
  return (
    <BasePage title="Rechercher votre bien">
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <TextField
            select
            fullWidth
            label="Type de bien"
            defaultValue=""
          >
            <MenuItem value="apartment">Appartement</MenuItem>
            <MenuItem value="house">Maison</MenuItem>
            <MenuItem value="land">Terrain</MenuItem>
            <MenuItem value="commercial">Local commercial</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            select
            fullWidth
            label="Transaction"
            defaultValue=""
          >
            <MenuItem value="sale">Vente</MenuItem>
            <MenuItem value="rent">Location</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            label="Budget max"
            type="number"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            label="Surface min (m²)"
            type="number"
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" size="large">
            Rechercher
          </Button>
        </Grid>
      </Grid>
    </BasePage>
  );
};

export default SearchProperties;
