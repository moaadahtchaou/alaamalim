import React from 'react';
import BasePage from './BasePage';
import { Typography } from '@mui/material';

const SpecialOffers: React.FC = () => {
  return (
    <BasePage title="Offres Spéciales">
      <Typography paragraph>
        Découvrez nos offres spéciales et promotions immobilières.
      </Typography>
    </BasePage>
  );
};

export default SpecialOffers;
