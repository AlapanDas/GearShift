const fetch = require('node-fetch');

async function sendPostRequest() {
     const url = 'https://gearshift-backend.onrender.com/car/search';
     const data = {
          model: 'value1',
          brand: 'value2'
     };

     try {
          const response = await fetch(url, {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify(data)
          });

          if (!response.ok) {
               throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const result = await response.json();
          console.log('Success:', result);
     } catch (error) {
          console.error('Error:', error);
     }
}

sendPostRequest();
