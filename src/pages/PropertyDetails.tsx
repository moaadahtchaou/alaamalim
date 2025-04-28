import React from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography, Paper, Button, Box } from '@mui/material';
import BasePage from './BasePage';

const PropertyDetails: React.FC = () => {
  const { id } = useParams();

  // This would normally fetch property details from an API
  const property = {
    title: 'Appartement à vendre à Val Fleury',
    price: 1500000,
    area: 134,
    location: 'Val Fleury',
    description: 'Magnifique appartement avec vue dégagée...',
    features: [
      '3 chambres',
      '2 salles de bain',
      'Parking',
      'Ascenseur',
    ],
  };

  return (
    <BasePage title={property.title}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="h6" gutterBottom>
              Description
            </Typography>
            <Typography paragraph>
              {property.description}
            </Typography>
          </Paper>
          
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Caractéristiques
            </Typography>
            <Grid container spacing={2}>
              {property.features.map((feature) => (
                <Grid item xs={12} sm={6} key={feature}>
                  <Typography>• {feature}</Typography>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" color="primary" gutterBottom>
              {property.price.toLocaleString()} MAD
            </Typography>
            <Typography gutterBottom>
              Surface: {property.area} m²
            </Typography>
            <Typography gutterBottom>
              Localisation: {property.location}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mb: 1 }}
              >
                Demander une visite
              </Button>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
              >
                Contacter l'agence
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </BasePage>
  );
};

export default PropertyDetails;
