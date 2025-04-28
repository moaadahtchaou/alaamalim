import React from 'react';
import BasePage from './BasePage';
import { Typography } from '@mui/material';

const NewProperties: React.FC = () => {
  return (
    <BasePage title="Immobilier Neuf">
      <Typography paragraph>
        Découvrez nos programmes immobiliers neufs.
      </Typography>
    </BasePage>
  );
};

export default NewProperties;
