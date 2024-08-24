const express = require('express');
const axios = require('axios');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3000;
const apiKey = "Get API Key from https://api.themoviedb.org";
const movieEndpoint = "https://api.themoviedb.org/3/movie/";


// CORS middleware source: Stack Overflow
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/movie/:movieId', async (req, res) => {                                 // Use axios to fetch movie details from the API using endpoint
  const movieId = req.params.movieId;                                            // Extract movie ID from request parameters
  const tmdbUrl = `${movieEndpoint}${movieId}?api_key=${apiKey}&language=en-US`; // Concatenate URL to fetch the movie overview

  try {
    const response = await axios.get(tmdbUrl);                                   // Fetch movie overview from API
    const overview = response.data.overview;                                     
    res.json( { overview });                                                     // Handle response to get movie overview in JSON format
  } catch (error) {                                                              // Error handling
    console.error("Error:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
