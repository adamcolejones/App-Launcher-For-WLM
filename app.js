// app.js
// 4. Backend Communication
document.addEventListener('DOMContentLoaded', () => {    
    const mediaform = document.getElementById('mediaForm');
    const mediaSubmit = document.getElementById('mediaSubmit');


    // Keep track of the number of custom fields added
    let customFieldCount = 0;
    let labelInput, valueInput;

    // Function to remove a custom field
    function removeCustomField(container) {
      const customFieldsContainer = document.getElementById('customFieldsContainer');
      customFieldsContainer.removeChild(container);

      // Reorder the "Remove" button labels after a custom field is removed
      const removeButtons = customFieldsContainer.querySelectorAll('button[type="button"]');
      removeButtons.forEach((button, index) => {
        button.textContent = `Remove`;
      });
    }

    // Function to add a new custom field
    function addCustomField() {
      const customFieldsContainer = document.getElementById('customFieldsContainer');
      if (customFieldCount < 20) {
        customFieldCount++;

        // Create a container to group the custom field elements
        const customFieldContainer = document.createElement('div');

        // Create input fields for label name and field value
        const labelInput = document.createElement('input');
        labelInput.type = 'text';
        labelInput.placeholder = `Custom Field ${customFieldCount} Label`;

        const valueInput = document.createElement('input');
        valueInput.type = 'text';
        valueInput.placeholder = `Custom Field ${customFieldCount} Value`;

        // Create a "Remove" button for the new custom field
        const removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.textContent = `Remove`;

        // Add event listener to the "Remove" button
        removeButton.addEventListener('click', () => {
          removeCustomField(customFieldContainer);
          customFieldCount--;
        });

        // Append the input fields and the "Remove" button to the container
        customFieldContainer.appendChild(labelInput);
        customFieldContainer.appendChild(valueInput);
        customFieldContainer.appendChild(removeButton);
        customFieldsContainer.appendChild(customFieldContainer);
        // customFieldsContainer.appendChild(document.createElement('br'));
      }
    }

    // Add event listener to the "Add Custom Field" button
    const addCustomFieldButton = document.getElementById('addCustomField');
    addCustomFieldButton.addEventListener('click', addCustomField);



    // Attach a submit event listener to the form
    mediaform.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Get the values entered by the user
      const Name = document.getElementById('Name').value || null;
      const ReleaseDate = document.getElementById('Release Date').value || null;
      const System = document.getElementById('System').value || null;
      const RunCommand = document.getElementById('Run Command').value || null;
      const Tags = document.getElementById('Tags').value || null;

      // Do something with the collected data
      console.log("Name:", Name);
      console.log("Release Date:", ReleaseDate);
      console.log("System:", System);
      console.log("Run Command:", RunCommand);
      console.log("Tags:", Tags);

      window.mediaBridge.saveMedia(Name, ReleaseDate, System, RunCommand, Tags);

    // For the sake of this example, we'll just reset the form.
    mediaform.reset();
    });

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