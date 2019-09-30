const request = require('request');


const fetchBreedDescription = (breed,callback) => request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {

  const data = JSON.parse(body);
  
  if (error) {
    callback(error, null);
  } else if (data.length === 0) {
    callback(null, "breed not found");
  } else {
    callback(null, data[0].description.trim());
    
  }
 
});



module.exports = { fetchBreedDescription };

