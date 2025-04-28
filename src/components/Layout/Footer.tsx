import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
  WhatsApp,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <Facebook />, url: '/facebook', label: 'Facebook' },
    { icon: <Twitter />, url: '/twitter', label: 'Twitter' },
    { icon: <Instagram />, url: '/instagram', label: 'Instagram' },
    { icon: <LinkedIn />, url: '/linked-in', label: 'LinkedIn' },
    { icon: <YouTube />, url: '/youtube', label: 'YouTube' },
    { icon: <WhatsApp />, url: '/ecrivez-nous-sur-whatsapp', label: 'WhatsApp' },
  ];

  const footerSections = [
    {
      title: 'Services',
      links: [
        { text: 'Acheter', url: '/acheter-un-bien' },
        { text: 'Vendre', url: '/vendre-votre-bien' },
        { text: 'Louer', url: '/location' },
        { text: 'Gestion locative', url: '/location-gerance' },
      ],
    },
    {
      title: 'À propos',
      links: [
        { text: 'Qui sommes-nous', url: '/qui-sommes-nous' },
        { text: 'Blog', url: '/le-blog' },
        { text: 'Nos membres', url: '/nos-membres' },
        { text: 'Contact', url: '/nous-contacter' },
      ],
    },
    {
      title: 'Informations',
      links: [
        { text: 'CGV', url: '/cgv' },
        { text: 'FAQ', url: '/questions-reponses' },
        { text: 'Confidentialité', url: '/politique-de-confidentialite' },
        { text: 'Plan du site', url: '/sitemap' },
      ],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {footerSections.map((section) => (
            <Grid item xs={12} sm={4} key={section.title}>
              <Typography variant="h6" gutterBottom>
                {section.title}
              </Typography>
              <Box>
                {section.links.map((link) => (
                  <Box key={link.url} sx={{ mb: 1 }}>
                    <Link
                      component={RouterLink}
                      to={link.url}
                      color="inherit"
                      sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                    >
                      {link.text}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          {socialLinks.map((social) => (
            <IconButton
              key={social.url}
              component={RouterLink}
              to={social.url}
              color="inherit"
              aria-label={social.label}
            >
              {social.icon}
            </IconButton>
          ))}
        </Box>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          © {new Date().getFullYear()} Al Amal Immobilier. Tous droits réservés.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
