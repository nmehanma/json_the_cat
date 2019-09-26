const request = require('request');


request('https://api.thecatapi.com/v1/breeds/search?q=' + process.argv[2], (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);
  
  if (data.length === 0) {
    console.log("not found");
  } else if (error) {
    console.log(error);
  } else {
    
    console.log((data[0].description));
    // console.log(data;
    console.log(typeof data); // Print the HTML for the Google homepage.
  }

  
  
});



