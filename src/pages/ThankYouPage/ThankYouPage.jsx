import React from 'react';
import { Box, Typography } from '@mui/material';

const ThankYouPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
    >
      <Typography variant="h4" gutterBottom style={{ marginBottom: '1rem', fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>
        Vielen Dank für Ihre Anfrage!
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '1rem', fontSize: '1rem', color: '#555' }}>
        Wir haben Ihre Anfrage erhalten und werden uns in Kürze mit Ihnen in Verbindung setzen.
      </Typography>
    </Box>
  );
};

export default ThankYouPage;
