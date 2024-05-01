import React, { useEffect, useState } from 'react';
import { Snackbar, Button } from '@mui/material';

const CookiePopup = () => {
  const [showCookiePopup, setShowCookiePopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCookiePopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Snackbar
      open={showCookiePopup}
      message="Diese Webseite verwendet Cookies."
      action={
        <Button color="secondary" size="small" onClick={() => setShowCookiePopup(false)}>
          Schließen
        </Button>
      }
    />
  );
}

export default CookiePopup;
