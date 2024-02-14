**Movie Microservice:**

This microservice provides movie details, including overviews, based on movie IDs.

**Communication Contract:
**

**Requesting Data**

To request data you must use NodeJS and install the axios library

1. Install axios type into command line:
```
"npm install axios"	
```
2. Use the following code snipper to REQUEST data

**Example Call:**

REQUEST and RECIEVE Data using NodeJS:
```
// Use axios to fetch data
const axios = require('axios');

// Define the URL of my microservice with an input of a movieID
const microserviceUrl = 'https://cs361-movie-microservice-cdc35fc37d51.herokuapp.com/movie/';

// Define the movie ID you want to retrieve data for (can be any ID you have to extract it)
const movieID = 933131;

// Make a GET request to the microservice endpoint using axios by concatenating microserviceURL with the movieID
axios.get(${microserviceURL}${movieID})
  .then(response => {
    // Handle the response (which will be the overview)
    console.log('Data received from microservice:');
    console.log(response.data.overview);  			// To retrieve data make sure you use .overview to retrieve the overview
  })
  .catch(error => {
    // Handle errors if any occur
    console.error('Error requesting data from microservice:', error);
  });
```

Replace "movieID" with the actual ID of the movie you want to retrieve data for.

**Recieving Data:**

An example response would be in a form of a JSON file when URL is: https://cs361-movie-microservice-cdc35fc37d51.herokuapp.com/movie/787699-wonka:

```
{"overview":"Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible."}
```
When you make a request to the microservice endpoint using the provided code snippet, the microservice will respond with the requested data. 
Here's what happens when you execute the code:

1. The axios.get function sends a GET request to the microservice endpoint URL concatenated with the movie ID (You have to change movieID).
2. The microservice processes the request and retrieves the movie data associated with the provided movie ID.
3. If successful, the microservice sends a response containing the movie data back to the client.
4. The .then method is used to handle the successful response. Inside the callback function, response.data.overview contains the movie overview received from the microservice.
5. You can then further process or utilize the received movie data as needed within the callback function.
   
In case of any errors during the request or response process, the .catch method is used to handle the error and log it to the console for debugging purposes.

**UML DIAGRAM:**

![image](https://github.com/ChiChan17/microservice-Tan-Movie/assets/114010974/85f222d9-1374-45a4-91fd-fca6c8502558)




