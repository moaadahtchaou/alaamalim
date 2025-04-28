import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import BasePage from './BasePage';

const Home: React.FC = () => {
  const features = [
    {
      title: 'Rechercher un bien',
      description: 'Trouvez votre bien idéal parmi notre sélection.',
      link: '/agence/rechercher-votre-bien',
    },
    {
      title: 'Vendre votre bien',
      description: 'Confiez-nous la vente de votre bien immobilier.',
      link: '/vendre-votre-bien',
    },
    {
      title: 'Location',
      description: 'Découvrez nos offres de location.',
      link: '/location',
    },
  ];

  return (
    <BasePage title="Bienvenue chez Al Amal Immobilier">
      <Grid container spacing={4}>
        {features.map((feature) => (
          <Grid key={feature.title} item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {feature.description}
                </Typography>
                <Button
                  component={RouterLink}
                  to={feature.link}
                  variant="contained"
                  color="primary"
                >
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </BasePage>
  );
};

export default Home;
