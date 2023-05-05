// const axios = require('axios');      //for node.js environment

// const table = document.querySelector('#myTable');
const table = document.getElementById('myTable');
const tbody = table.querySelector('tbody');

// Choose the fields you want to include
let columns = ['id', 'title', 'description', 'price', 'brand', 'thumbnail'];

async function callAPI(url) {
    let products = await axios.get(url)
        .then(response =>
        // JSON.stringify(response.data.products.filter(el => el.price < 13))
        {
            let data = response.data.products.filter(el => el.id < 20);
            // Loop through the data and create a new row in the table for each item
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const item = data[key];

                    // Extract only the required properties from the item
                    const rowData = {};
                    columns.forEach(column => {
                        rowData[column] = item[column];
                    });

                    // Create a new row and cells in the table
                    const row = tbody.insertRow();
                    columns.forEach(column => {
                        const cell = row.insertCell();
                        cell.innerText = rowData[column];
                    });
                }
            }
            
            // Get all the rows in the table
            const rows = document.querySelectorAll('#myTable tbody tr');

            // Loop over each row and select the last td element
            rows.forEach(row => {
                const lastTd = row.lastElementChild;

                // Do something with the last td element
                lastTd.innerHTML = "<img src=" + lastTd.innerHTML + " width=\"70px\" height=\"50px\">";
            });
        }
        )
        .catch(error => console.error('log error : ', error));

    return products;
}

callAPI('https://dummyjson.com/products');

// callAPI('https://dummyjson.com/products').then((result) => {
//     document.getElementById("products").innerHTML = result;
// });
