import React from 'react';
import { Box, Container, Typography } from '@mui/material';

interface BasePageProps {
  title: string;
  children: React.ReactNode;
}

const BasePage: React.FC<BasePageProps> = ({ title, children }) => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" gutterBottom>
          {title}
        </Typography>
        {children}
      </Container>
    </Box>
  );
};

export default BasePage;
