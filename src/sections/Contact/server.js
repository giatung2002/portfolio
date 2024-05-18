const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Handle the form data (e.g., save to a database, send an email, etc.)
  console.log('Form Data:', { name, email, message });

  // Respond with a success message
  res.status(200).json({ message: 'Form submitted successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
