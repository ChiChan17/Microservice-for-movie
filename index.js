const express = require('express');
const axios = require('axios');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3000;
const apiKey = "905325ba3ffbdd89fba8248049958bff";


// CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/movie/:movieId', async (req, res) => {
  const movieId = req.params.movieId;
  const tmdbUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;

  try {
    const response = await axios.get(tmdbUrl);
    const movieDetails = response.data;
    res.json(movieDetails);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
