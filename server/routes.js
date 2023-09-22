const express = require('express');
const app = express();
const port = 3001;
const path = require('path');

app.get('/download-pdf', (req, res) => {
    const pdfPath = path.join(__dirname, 'pdfs', 'Rohit.pdf');
    res.sendFile(pdfPath);
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });