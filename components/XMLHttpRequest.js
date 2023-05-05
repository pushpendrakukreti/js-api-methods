// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;      //for node.js environment

// create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// specify the URL and HTTP method
xhr.open('GET', 'https://dummy.restapiexample.com/api/v1/employees', true);

// define the onload handler function
xhr.onload = function() {
  // check if the status code is OK
  if (xhr.status === 200) {
    // log the response in the console
    console.log(xhr.responseText);
  }
};

// send the request
xhr.send();