import React from 'react';
import BasePage from './BasePage';
import { Typography } from '@mui/material';

const PriceReference: React.FC = () => {
  return (
    <BasePage title="Référentiel des Prix">
      <Typography paragraph>
        Consultez notre référentiel des prix du marché immobilier.
      </Typography>
    </BasePage>
  );
};

export default PriceReference;
