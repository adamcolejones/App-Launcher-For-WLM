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

 // for (const key in data) {
      //   if (key === 'Media' && Array.isArray(data[key])) {
      //     for (const item of data[key]) {
      //       // Check if the item has no tags or empty tags
      //       const isUntagged =
      //         item.Tags === null ||
      //         (Array.isArray(item.Tags) && item.Tags.length === 0) ||
      //         (Array.isArray(item.Tags) && item.Tags.length === 1 && item.Tags[0] === "");
      
      //       // Add the item to the 'All' tag section
      //       const allMediaKey = 'All';
      //       if (!tagSections[allMediaKey]) {
      //         tagSections[allMediaKey] = [];
      //       }
      //       tagSections[allMediaKey].push(item);
      
      //       if (isUntagged) {
      //         // Categorize items without tags as 'Uncategorized'
      //         const untaggedKey = 'Uncategorized';
      //         if (!tagSections[untaggedKey]) {
      //           tagSections[untaggedKey] = [];
      //         }
      //         tagSections[untaggedKey].push(item);
      //       } else {
      //         // Categorize items by their tags
      //         if (Array.isArray(item.Tags)) {
      //           for (const tag of item.Tags) {
      //             if (!tagSections[tag]) {
      //               tagSections[tag] = [];
      //             }
      //             tagSections[tag].push(item);
      //           }
      //         }
      //       }
      //     }
      //   }
      // }

      
    // Generic function to display data for any user-named array
    // function displayData(data) {
    //   const dataDisplayDiv = document.getElementById('dataDisplay');
    //   dataDisplayDiv.innerHTML = ''; // Clear any previous content

    //   for (const key in data) {
    //     if (Array.isArray(data[key])) {
    //       dataDisplayDiv.innerHTML += `<h2>${key}:</h2>`;
    //       dataDisplayDiv.innerHTML += createTable(data[key]);
    //     }
    //   }
    // }

        // Function to calculate the highest ID from media data
    // function calculateHighestId(data) {
    //   const existingIds = data.map((item) => item.id || 0);
    //   return existingIds.length > 0 ? Math.max(...existingIds) : 0;
    // }

    // Function to create the table for any array
    //
    //
    //
    // function createTable(data) {
    //   if (data.length === 0) {
    //     return '<p>No data available.</p>';
    //   }
    //   let tableHTML = '<table>';
    //   // Collect all unique keys (field names) from the array
    //   const allKeys = new Set();
    //   for (const item of data) {
    //     for (const key in item) {
    //       allKeys.add(key);
    //     }
    //   }
    //   // Create header row based on the unique keys (field names)
    //   tableHTML += '<tr>';
    //   for (const key of allKeys) {
    //     tableHTML += `<th>${key}</th>`;
    //   }
    //   tableHTML += '</tr>';
    //   // Create data rows
    //   for (const item of data) {
    //     tableHTML += '<tr>';
    //     for (const key of allKeys) {
    //       tableHTML += '<td>' + (item[key] || '') + '</td>';
    //     }
    //     tableHTML += '</tr>';
    //   }
    //   tableHTML += '</table>';
    //   return tableHTML;
    // }