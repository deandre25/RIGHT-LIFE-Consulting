import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';

const Map = () => {
  const handleMapClick = () => {
    window.open('https://www.google.com/maps?q=46.9340526,7.4169191');
  };

  return (
    <Card onClick={handleMapClick} style={{ width: '100%', cursor: 'pointer' }}>
      <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <RoomIcon sx={{ fontSize: 48, marginRight: 2 }} />
        <Typography variant="h6">Standort auf Google Maps anzeigen</Typography>
      </CardContent>
    </Card>
  );
};

export default Map;
