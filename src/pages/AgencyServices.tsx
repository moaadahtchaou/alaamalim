import React from 'react';
import BasePage from './BasePage';
import { Typography } from '@mui/material';

const AgencyServices: React.FC = () => {
  return (
    <BasePage title="Nos Services">
      <Typography paragraph>
        Découvrez nos services immobiliers professionnels.
      </Typography>
    </BasePage>
  );
};

export default AgencyServices;
