const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;
const apiKey = "905325ba3ffbdd89fba8248049958bff";

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
