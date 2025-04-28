import React from 'react';
import BasePage from './BasePage';
import { Typography } from '@mui/material';

const LoanCalculator: React.FC = () => {
  return (
    <BasePage title="Calculateur de Prêt">
      <Typography paragraph>
        Simulez votre prêt immobilier et calculez vos mensualités.
      </Typography>
    </BasePage>
  );
};

export default LoanCalculator;
