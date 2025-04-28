import React from 'react';
import BasePage from './BasePage';
import { Typography } from '@mui/material';

const Services: React.FC = () => {
  return (
    <BasePage title="Services">
      <Typography paragraph>
        Explorez notre gamme complète de services immobiliers.
      </Typography>
    </BasePage>
  );
};

export default Services;
