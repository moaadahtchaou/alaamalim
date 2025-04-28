import React from 'react';
import BasePage from './BasePage';
import { Typography } from '@mui/material';

const AboutUs: React.FC = () => {
  return (
    <BasePage title="Qui Sommes-Nous">
      <Typography paragraph>
        Al Amal Immobilier, votre partenaire de confiance dans l'immobilier.
      </Typography>
    </BasePage>
  );
};

export default AboutUs;
