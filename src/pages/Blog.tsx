import React from 'react';
import BasePage from './BasePage';
import { Typography } from '@mui/material';

const Blog: React.FC = () => {
  return (
    <BasePage title="Le Blog">
      <Typography paragraph>
        Découvrez nos articles et actualités immobilières.
      </Typography>
    </BasePage>
  );
};

export default Blog;
