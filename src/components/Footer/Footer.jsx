import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  const countryCode = 'DE';
  const phoneNumber = '+41 xxx xxx xxx';

  return (
    <Box id="footer" component="footer" sx={{ bgcolor: '#212121', color: 'white', p: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Alle Rechte vorbehalten.
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Link href="#" variant="body1" sx={{ mr: 2, color: '#fff' }}>
          Datenschutzerklärung
        </Link>
        <Link href="#" variant="body1" sx={{ color: '#fff' }}>
          Nutzungsbedingungen
        </Link>
      </Box>
      <Typography variant="subtitle1" sx={{ color: '#fff' }}>
        Telefon: {phoneNumber} ({countryCode})
      </Typography>
    </Box>
  );
}

export default Footer;
