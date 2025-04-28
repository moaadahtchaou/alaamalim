import React from 'react';
import BasePage from './BasePage';
import { Typography } from '@mui/material';

const Rates: React.FC = () => {
  return (
    <BasePage title="Nos Tarifs">
      <Typography paragraph>
        Consultez nos tarifs et honoraires.
      </Typography>
    </BasePage>
  );
};

export default Rates;
