// ********************************************************
// * A DESCRIPTION OF THE FUNCTIONALITY OF THE CODE BELOW *
// ********************************************************
// + 
// ********************************************************

// 4. Backend Communication
document.addEventListener('DOMContentLoaded', () => {    
    const mediaform = document.getElementById('mediaForm');
    const errorMessageElement = document.getElementById('error-message');
    const mediaSubmit = document.getElementById('mediaSubmit');

    // Fetch data from data.json
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
      mediaData = data;
      // Assuming the data in data.json is an object with user-named arrays.
      displayData(data);
      // displayGrid(data);
    })
    .catch(error => console.error('Error fetching grid data:', error));

    // Hide the customFieldsContainer initially
    customFieldsContainer.style.display = 'none';

    // Keep track of the number of custom fields added
    let customFieldCount = 0;
    let labelInput, valueInput; // it is in use

    // Hide the customFieldsContainer initially
    updateCustomFieldsVisibility();

    // Function to add a new custom field
    function addCustomField() {
      const customFieldsContainer = document.getElementById('customFieldsContainer');
      // Show the customFieldsContainer if there are input fields in the container
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
          
        });
        // Append the input fields and the "Remove" button to the container
        customFieldContainer.appendChild(labelInput);
        customFieldContainer.appendChild(valueInput);
        customFieldContainer.appendChild(removeButton);
        customFieldsContainer.appendChild(customFieldContainer);
        // customFieldsContainer.appendChild(document.createElement('br'));
      }
      if (customFieldCount > 0) {
        customFieldsContainer.style.display = 'block';
      }
      // Update the visibility of customFieldsContainer
      updateCustomFieldsVisibility();
    }

    // Function to remove a custom field
    function removeCustomField(container) {
      const customFieldsContainer = document.getElementById('customFieldsContainer');
      customFieldsContainer.removeChild(container);
      // Reorder the "Remove" button labels after a custom field is removed
      const removeButtons = customFieldsContainer.querySelectorAll('button[type="button"]');
      removeButtons.forEach((button, index) => {
        button.textContent = `Remove`;
      });
      if (customFieldCount === 0) {
        customFieldsContainer.style.display = 'none';
      }
      // Hide the customFieldsContainer if there are no input fields in the container
      customFieldCount--;
      // Update the visibility of customFieldsContainer
      updateCustomFieldsVisibility();
    }

    function updateCustomFieldsVisibility() {
      customFieldsContainer.style.display = customFieldCount > 0 ? 'block' : 'none';
    }

    // Add event listener to the "Add Custom Field" button
    const addCustomFieldButton = document.getElementById('addCustomField');
    addCustomFieldButton.addEventListener('click', addCustomField);

    // Function to calculate the highest ID from media data
    // function calculateHighestId(data) {
    //   const existingIds = data.map((item) => item.id || 0);
    //   return existingIds.length > 0 ? Math.max(...existingIds) : 0;
    // }

    // Attach a submit event listener to the form
    mediaform.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Get the values entered by the user
      const Name = document.getElementById('Name').value || null;
      const RunCommand = document.getElementById('Run Command').value || null;
      const Tags = document.getElementById('Tags').value || null;

      // Prevent user from using 'All' or 'Uncategorized' Tags
      if (Tags && (Tags.includes("All") || Tags.includes("Uncategorized"))) {
        let errorMessage = "Tags cannot include '";
        if (Tags.includes("All")) { errorMessage += "All"; }
        if (Tags.includes("Uncategorized")) { errorMessage += errorMessage.includes("All") ? " or 'Uncategorized'" : "Uncategorized"; }
        errorMessage += "'";
        errorMessageElement.textContent = errorMessage; // Set the error message and display the error element
        errorMessageElement.style.display = 'block';
        return; // Abort further processing
    }

      // If no error, clear the error message and hide the error element
      errorMessageElement.textContent = "";
      errorMessageElement.style.display = 'none';

      // Calculate the highest ID
      // Calculating the highest ID will allow us to add 1 and assign the new highest value to the new media giving it a unique value
      const existingIds = mediaData.Media.map(item => item.id);
      const highestId = Math.max(...existingIds);
      const newId = highestId + 1;

      // Get the selected image file
      const imageInput = document.getElementById('inputimage');
      const imageFile = imageInput.files && imageInput.files[0]; // Check if files exist
      const imagePath = imageFile ? imageFile.path : null; // Get the path if the file exists
      // Getting the image path now allows us to take this sensitive data to the main.js file
      // from here we can use ipc to look up the path and sync the file of the path to a new location of our choice


      // Do something with the collected data
      console.log("Name:", Name);
      console.log("Run Command:", RunCommand);
      console.log("Tags:", Tags);
      console.log("Image:", imagePath);
      // console.log("Release Date:", ReleaseDate);
      // console.log("System:", System);

      window.mediaBridge.saveMedia(newId, Name, RunCommand, Tags, imagePath);
      // window.location.reload();

    // For the sake of this example, we'll just reset the form.
      mediaform.reset();
      // window.location.reload();
    });

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

    // Generic function to display data for any user-named array
    function displayGrid(data) {
      const dataDisplayDiv = document.getElementById('gridDisplay');
      dataDisplayDiv.innerHTML = ''; // Clear any previous content

      const tagSections = {}; // Create an object to store items by tags

      for (const key in data) {
        if (key === 'Media' && Array.isArray(data[key])) {
          for (const item of data[key]) {
            // Find the Media without Tags and assign them to the uncategorized tag
            if (item.Tags === null || (Array.isArray(item.Tags) && item.Tags.length === 0) || (Array.isArray(item.Tags) && item.Tags.length === 1 && item.Tags[0] === "")) {
              const untaggedKey = 'Uncategorized';
              if (!tagSections[untaggedKey]) {
                  tagSections[untaggedKey] = [];
              }
              tagSections[untaggedKey].push(item);
            } else {
                // Add the 'All' tag to all media
                const allMediaKey = 'All';
                if (!tagSections[allMediaKey]) {
                    tagSections[allMediaKey] = [];
                }
                tagSections[allMediaKey].push(item);
            
                if (Array.isArray(item.Tags)) {
                    for (const tag of item.Tags) {
                        if (!tagSections[tag]) {
                            tagSections[tag] = [];
                        }
                        tagSections[tag].push(item);
                    }
                }
            }
          }
        }
      }
      
      const sortedTags = Object.keys(tagSections).sort(); // Sort tags alphabetically
      const allMediaIndex = sortedTags.indexOf("All");
      const uncategorizedIndex = sortedTags.indexOf("Uncategorized");

      // Remove "All" from its current position and push it to the front
      if (allMediaIndex !== -1) {
        sortedTags.splice(allMediaIndex, 1);
        sortedTags.unshift("All");
      }

      if (uncategorizedIndex !== -1) {
          sortedTags.splice(uncategorizedIndex, 1); // Remove "Uncategorized" from its current position
          sortedTags.push("Uncategorized"); // Push "Uncategorized" to the end
      }

      // Display tags in the side menu
      const sideMenuDiv = document.getElementById('sideMenu');
      sideMenuDiv.innerHTML = ''; // Clear any previous content
      for (const tag of sortedTags) {
        const tagDiv = document.createElement('div');
        tagDiv.classList.add('sidemenu-item');
        tagDiv.textContent = tag;
        
        // Add a click event listener to each tagDiv
        // tagDiv.addEventListener('click', () => {
        //   // Replace this with your logic to display content based on the clicked tag
        //   // For example, you can update the content in another part of your page.
        //   // You can use AJAX requests, show/hide elements, or any other method you prefer.
        //   // console.log(`Clicked on tag: ${tag}`);
        //   dataDisplayDiv.innerHTML += `<div class="gridtype">${tag}</div>`;
        //   dataDisplayDiv.innerHTML += createGrid(tagSections[tag]);
        // });
        
        // Add a class to the 'All' tag div to differentiate it
        if (tag === "All") {
          tagDiv.classList.add('all-tag');
        }

        sideMenuDiv.appendChild(tagDiv);
      }

      // Function to display content based on the selected tag
      function displayContentForTag(tag) {
        dataDisplayDiv.innerHTML = `<div class="gridtype">${tag}</div>`;
        dataDisplayDiv.innerHTML += createGrid(tagSections[tag]);
      }

      // Display content for 'All' tag by default
      displayContentForTag("All");

      // Add a click event listener to tagDivs to switch content
      const tagDivs = document.querySelectorAll('.sidemenu-item');
      tagDivs.forEach(tagDiv => {
          tagDiv.addEventListener('click', () => {
              const selectedTag = tagDiv.textContent;
              displayContentForTag(selectedTag);
              // Scroll to the top of the scrollable-content div
              const scrollableContentDiv = document.querySelector('.scrollableContent');
              if (scrollableContentDiv) {
                  scrollableContentDiv.scrollTop = 0;
              }
          });
      });

      // Display Media Based on the associated tags
      // for (const tag of sortedTags) {
      //   dataDisplayDiv.innerHTML += `<div class="gridtype">${tag}</div>`;
      //   dataDisplayDiv.innerHTML += createGrid(tagSections[tag]);
      // }

      // Display Data based on Key Value (Media, Name, not by the associated Tags)
      // for (const key in data) {
      //   if (Array.isArray(data[key])) {
      //     dataDisplayDiv.innerHTML += `<div class="gridtype">${key}</div>`;
      //     dataDisplayDiv.innerHTML += createGrid(data[key]);
      //   }
      // }
    }

    // Function to create the table for any array
    function createGrid(data) {
      if (data.length === 0) {
        return '<p>No data available.</p>';
      }

      let gridHTML = '<div class="griddata">';

      // Collect all unique keys (field names) from the array
      const allKeys = new Set();
      for (const item of data) {
        for (const key in item) {
          allKeys.add(key);
        }
      }

      gridHTML += '<div class="griditemcontainer">';

      // Create data rows
      for (const item of data) {
        gridHTML += '<div class="griditem">';
        if (item.id && item.Image == true) {
          const imageUrl = item.id ? `assets/media/${item.id}.png` : 'assets/media/default.png';
          gridHTML += `<img src="${imageUrl}" alt="Image ${item.id}" class="griditempicture" />`;
        } else {
          const defaultImageUrl = 'assets/media/default.png';
          gridHTML += `<img src="${defaultImageUrl}" alt="Default Image" class="griditempicture" />`;
        }
        // gridHTML += '<div class="griditempicture"></div>';
        for (const key of allKeys) {
          if (key == "Name" || key == "firstName") {
            gridHTML += '<div class="gridvalue">' + (item[key] || '') + '</div>';
          }
        }
        gridHTML += '<br></div>';
      }

      gridHTML += '</div>'; // class="griditemcontainer"
      gridHTML += '</div>'; // class="gridkeycontainer"
      
      return gridHTML;
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