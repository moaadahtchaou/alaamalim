import React from 'react';
import BasePage from './BasePage';
import { Typography } from '@mui/material';

const Contact: React.FC = () => {
  return (
    <BasePage title="Nous Contacter">
      <Typography paragraph>
        Contactez-nous pour toute question ou demande d'information.
      </Typography>
    </BasePage>
  );
};

export default Contact;
