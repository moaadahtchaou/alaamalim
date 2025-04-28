import React from 'react';
import BasePage from './BasePage';
import { Typography } from '@mui/material';

const PropertyManagement: React.FC = () => {
  return (
    <BasePage title="Location et Gérance">
      <Typography paragraph>
        Nos services de gestion locative et de gérance immobilière.
      </Typography>
    </BasePage>
  );
};

export default PropertyManagement;
