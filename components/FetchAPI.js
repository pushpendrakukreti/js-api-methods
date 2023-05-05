// const fetch = require("node-fetch");      //for node.js environment

fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {
        // Process the data here
        console.log(data.products.filter(elem => elem.id < 10 ));
    })
    .catch(error => {
        // Handle any errors here
        console.error(error);
    });