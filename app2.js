// app.js
// 4. Backend Communication
document.addEventListener('DOMContentLoaded', () => {
    const nameform = document.getElementById('nameForm');
    const nameSubmit = document.getElementById('nameSubmit');
    
    const mediaform = document.getElementById('mediaForm');
    const mediaSubmit = document.getElementById('mediaSubmit');

  
    // Attach a submit event listener to the form
    nameform.addEventListener('submit', (event) => {
        event.preventDefault();
    
        // Get the values entered by the user
        const firstName = document.getElementById('firstName').value;
        const middleName = document.getElementById('middleName').value || null;
        const lastName = document.getElementById('lastName').value;
  
        // Do something with the collected data
        console.log("First Name:", firstName);
        console.log("Middle Name:", middleName);
        console.log("Last Name:", lastName);

        window.nameBridge.saveName(firstName, middleName, lastName);
  
      // For the sake of this example, we'll just reset the form.
      nameform.reset();
    });

    // // Attach a submit event listener to the form
    // mediaform.addEventListener('submit', (event) => {
    //   event.preventDefault();
  
    //   // Get the values entered by the user
    //   const mediaName = document.getElementById('mediaName').value || null;
    //   const mediaFile = document.getElementById('mediaFile').value || null;
    //   const collection = document.getElementById('collection').value || null;

    //   // Do something with the collected data
    //   console.log("Media Name:", mediaName);
    //   console.log("Media File:", mediaFile);
    //   console.log("Collection:", collection);

    //   window.mediaBridge.saveMedia(mediaName, mediaFile, collection);

    // // For the sake of this example, we'll just reset the form.
    // mediaform.reset();
    // });

    // Fetch data from data.json
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        // Assuming the data in data.json is an object with user-named arrays.
        displayData(data);
      })
      .catch(error => console.error('Error fetching data:', error));

    // Generic function to display data for any user-named array
    function displayData(data) {
      const dataDisplayDiv = document.getElementById('dataDisplay');
      dataDisplayDiv.innerHTML = ''; // Clear any previous content

      for (const key in data) {
        if (Array.isArray(data[key])) {
          dataDisplayDiv.innerHTML += `<h2>${key}:</h2>`;
          dataDisplayDiv.innerHTML += createTable(data[key]);
        }
      }
    }

    // Function to create the table for any array
    function createTable(data) {
      if (data.length === 0) {
        return '<p>No data available.</p>';
      }

      let tableHTML = '<table>';

      // Collect all unique keys (field names) from the array
      const allKeys = new Set();
      for (const item of data) {
        for (const key in item) {
          allKeys.add(key);
        }
      }

      // Create header row based on the unique keys (field names)
      tableHTML += '<tr>';
      for (const key of allKeys) {
        tableHTML += `<th>${key}</th>`;
      }
      tableHTML += '</tr>';

      // Create data rows
      for (const item of data) {
        tableHTML += '<tr>';
        for (const key of allKeys) {
          tableHTML += '<td>' + (item[key] || '') + '</td>';
        }
        tableHTML += '</tr>';
      }

      tableHTML += '</table>';
      return tableHTML;
    }

})