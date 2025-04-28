import React from 'react';
import BasePage from './BasePage';
import { Typography } from '@mui/material';

const Packages: React.FC = () => {
  return (
    <BasePage title="Nos Packs">
      <Typography paragraph>
        Découvrez nos différents packs de services immobiliers.
      </Typography>
    </BasePage>
  );
};

export default Packages;
