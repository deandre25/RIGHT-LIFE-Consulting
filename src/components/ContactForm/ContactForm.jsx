import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Підключаємо стилі для react-phone-number-input

const ContactForm = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', { name, email, phoneNumber });
    window.location.href = '/thank-you';
  };

  return (
    <Box my={4}>
      <Typography variant="h5" gutterBottom>
        Kontaktformular
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          margin="normal"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          fullWidth
          label="E-Mail"
          variant="outlined"
          margin="normal"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Box my={1}>
          <PhoneInput
            placeholder="Telefon"
            value={phoneNumber}
            onChange={setPhoneNumber}
            defaultCountry="DE"
            style={{ width: '100%', height: '40px', backgroundImage: 'url(/images/flag-icon.png)', backgroundSize: 'contain' }}
          />
        </Box>
        <Button variant="contained" color="primary" type="submit">
          Anfrage senden
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
