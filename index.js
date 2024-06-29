const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());

app.get('/crypto-prices', async (req, res) => {
    try {
      const response = await axios.get('https://api.coincap.io/v2/assets');
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  });

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});