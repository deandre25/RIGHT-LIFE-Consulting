import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ContactForm from '../ContactForm';
import Map from '../Map';
const MainContent = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Willkommen bei RIGHT LIFE Company
        </Typography>
        <img src="/images/consulting-banner.avif" alt="Banner" style={{ width: '100%', height: 'auto' }} />
        <Typography variant="body1" gutterBottom>
          Herzlich willkommen bei RIGHT LIFE Company. Wir bieten Ihnen erstklassige Beratungsdienstleistungen, um Ihnen zu helfen, in Ihrem Geschäft erfolgreich zu sein.
          Unser Team von Experten steht Ihnen zur Verfügung, um effektive Strategien und Lösungen für alle Ihre geschäftlichen Herausforderungen zu entwickeln.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Wir sind spezialisiert auf Beratung in den Bereichen strategisches Management, Marketing, Finanzen, Technologie und Innovation.
          Kontaktieren Sie uns noch heute, um Ihren Weg zum Erfolg zu beginnen!
        </Typography>
      </Box>

      <Box my={4}>
        <Typography variant="h5" gutterBottom>
          Unsere Vorteile
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Hochqualifizierte Experten" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Individuelle Beratung" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Maßgeschneiderte Lösungen" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Langjährige Erfahrung" />
          </ListItem>
        </List>
      </Box>

      <ContactForm />

      <Map />
    </Container>
  );
}

export default MainContent;
