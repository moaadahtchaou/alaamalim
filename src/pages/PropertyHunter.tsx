import React from 'react';
import BasePage from './BasePage';
import { Typography } from '@mui/material';

const PropertyHunter: React.FC = () => {
  return (
    <BasePage title="Chasseur Immobilier">
      <Typography paragraph>
        Service de recherche personnalisée de biens immobiliers.
      </Typography>
    </BasePage>
  );
};

export default PropertyHunter;
