// app.js
// 4. Backend Communication
// document.addEventListener('DOMContentLoaded', () => {
//     const nameform = document.getElementById('nameForm');
//     const nameSubmit = document.getElementById('nameSubmit');
    
//     const mediaform = document.getElementById('mediaForm');
//     const mediaSubmit = document.getElementById('mediaSubmit');

  
//     // Attach a submit event listener to the form
//     nameform.addEventListener('submit', (event) => {
//         event.preventDefault();
    
//         // Get the values entered by the user
//         const firstName = document.getElementById('firstName').value;
//         const middleName = document.getElementById('middleName').value || null;
//         const lastName = document.getElementById('lastName').value;
  
//         // Do something with the collected data
//         console.log("First Name:", firstName);
//         console.log("Middle Name:", middleName);
//         console.log("Last Name:", lastName);

//         window.nameBridge.saveName(firstName, middleName, lastName);
  
//       // For the sake of this example, we'll just reset the form.
//       nameform.reset();
//     });

// *************************************************************************************************************************************************
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
    // fetch('data.json')
    //   .then(response => response.json())
    //   .then(data => {
    //     // Assuming the data in data.json is an object with user-named arrays.
    //     displayData(data);
    //   })
    //   .catch(error => console.error('Error fetching data:', error));

// *************************************************************************************************************************************************
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

// *************************************************************************************************************************************************
    // Function to create the table for any array
//     function createTable(data) {
//       if (data.length === 0) {
//         return '<p>No data available.</p>';
//       }

//       let tableHTML = '<table>';

//       // Collect all unique keys (field names) from the array
//       const allKeys = new Set();
//       for (const item of data) {
//         for (const key in item) {
//           allKeys.add(key);
//         }
//       }

//       // Create header row based on the unique keys (field names)
//       tableHTML += '<tr>';
//       for (const key of allKeys) {
//         tableHTML += `<th>${key}</th>`;
//       }
//       tableHTML += '</tr>';

//       // Create data rows
//       for (const item of data) {
//         tableHTML += '<tr>';
//         for (const key of allKeys) {
//           tableHTML += '<td>' + (item[key] || '') + '</td>';
//         }
//         tableHTML += '</tr>';
//       }

//       tableHTML += '</table>';
//       return tableHTML;
//     }

// })

// *************************************************************************************************************************************************

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

// *************************************************************************************************************************************************
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

// *************************************************************************************************************************************************
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

// *************************************************************************************************************************************************
      // Add a click event listener to grid item picture tags to switch content
      // const gridItemPictures = document.querySelectorAll('.griditempicture');
      // gridItemPictures.forEach(gridItemPicture => {
      //     gridItemPicture.addEventListener('click', () => {
      //         // Remove the 'selected' class from all grid item pictures
      //         // gridItemPictures.forEach(itemPicture => {
      //         //     itemPicture.classList.remove('selected');
      //         // });

      //         // Add the 'selected' class to the clicked grid item picture
      //         // gridItemPicture.classList.add('selected');
      //         // const selectedTag = gridItemPicture.getAttribute('data-tag'); // Assuming you have a data attribute 'data-tag'
      //         // displayContentForTag(selectedTag);
      //         // Scroll to the top of the scrollable-content div
      //         const scrollableContentDiv = document.querySelector('.scrollableContent');
      //         if (scrollableContentDiv) {
      //             scrollableContentDiv.scrollTop = 0;
      //         }
      //     });
      // });

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

// *************************************************************************************************************************************************
      // Function to calculate the highest ID from media data
    // function calculateHighestId(data) {
    //   const existingIds = data.map((item) => item.id || 0);
    //   return existingIds.length > 0 ? Math.max(...existingIds) : 0;
    // }

// *************************************************************************************************************************************************
// function displayContentForTag(tag) {
      //   dataDisplayDiv.innerHTML = `<div class="gridtype">${tag}</div>`;
      //   dataDisplayDiv.innerHTML += createGrid(tagSections[tag]);
      // }
      // function displayContentForTag(tag, jsondata) {
      //   const dataDisplayDiv = document.getElementById('gridDisplay');
      //   dataDisplayDiv.innerHTML = `
      //     <div class="TagSelection">${tag}</div>
      //     <button id="editTagButton">Edit Tag</button><br>

      //   `;
      //   const mediaData = jsondata.Media || [];
      //   const items = tag === 'All' ? mediaData : mediaData.filter(item => item.Tags.includes(tag));
      //   dataDisplayDiv.innerHTML += createGrid(items);
      //   const editTagButton = document.getElementById('editTagButton');
      //   editTagButton.addEventListener('click', () => {
      //       // Call a function to handle the tag editing
      //       // handleEditTagButtonClick(tag);
      //       displayTagEditForm(tag);
      //       // window.updateBridge.editTag(tag);
      //   });
      // }

// *************************************************************************************************************************************************
 // function displayContentForTag(tag, jsondata) {
      //     const dataDisplayDiv = document.getElementById('gridDisplay');
      //     dataDisplayDiv.innerHTML = `
      //         <div id="tagNameContainer">
      //           <div id="tagSelection">${tag}</div>
      //           <img src="assets/app/settings.svg" id="editTagImage">
      //         </div>
      //     `;
        
      //     const mediaData = jsondata.Media || [];
      //     const items = tag === 'All' ? mediaData : mediaData.filter(item => item.Tags.includes(tag));
      //     dataDisplayDiv.innerHTML += createGrid(items);
        
      //     // const editTagImage = document.getElementById('editTagImage');
      //     // editTagImage.addEventListener('click', () => {
      //     //   const tagNameContainer = document.getElementById('tagNameContainer');
      //     //   const tagSelectionDiv = document.getElementById('tagSelection');
      //     //   const originalTag = tagSelectionDiv.innerHTML;
        
      //     //   const form = document.createElement('form');
      //     //   const input = document.createElement('input');
      //     //   input.type = 'text';
      //     //   input.value = originalTag;
      //     //   form.appendChild(input);
        
      //     //   const cancelButton = document.createElement('button');
      //     //   cancelButton.textContent = 'Cancel';
      //     //   cancelButton.addEventListener('click', (event) => {
      //     //     event.preventDefault();
      //     //     tagNameContainer.removeChild(form);
      //     //     tagNameContainer.insertBefore(tagSelectionDiv, editTagImage);
        
      //     //     // Adjust styles dynamically to keep them on the same line
      //     //     tagSelectionDiv.style.display = 'inline-block';
      //     //     editTagImage.style.display = 'inline-block';
      //     //   });
      //     //   form.appendChild(cancelButton);
        
      //     //   const submitButton = document.createElement('button');
      //     //   submitButton.type = 'submit';
      //     //   submitButton.textContent = 'Save';
      //     //   form.appendChild(submitButton);
        
      //     //   tagNameContainer.replaceChild(form, tagSelectionDiv);
      //     //   tagSelectionDiv.style.display = 'none';
      //     //   editTagImage.style.display = 'none';
        
      //     //   // Adjust styles dynamically to keep them on the same line
      //     //   form.style.display = 'inline-block';
        
      //     //   form.addEventListener('submit', (event) => {
      //     //     event.preventDefault();
      //     //     const updatedTag = input.value;
      //     //     console.log(updatedTag);
        
      //     //     tagSelectionDiv.innerHTML = updatedTag;
      //     //     tagNameContainer.replaceChild(tagSelectionDiv, form);
      //     //     tagSelectionDiv.style.display = 'inline-block';
      //     //     editTagImage.style.display = 'inline-block';
      //     //   });
      //     // });
      //   }

// *************************************************************************************************************************************************
      // function handleEditTagButtonClick(tag) {
      //   // Call a function to display the tag edit form or take appropriate action
      //   displayTagEditForm(tag);
      // }
      // function displayTagEditForm(tag) {
      //   window.updateBridge.editTag(tag);
      // }

// *************************************************************************************************************************************************
// function displayTagSettings(tag, jsondata) {
      //     const gridDisplayDiv = document.getElementById('gridDisplay');
      //     const editTagSettingsDiv = document.getElementById('editTagSettings');
          
      //     // Show edit tag settings and hide others
      //     gridDisplayDiv.style.display = 'none';
      //     editTagSettingsDiv.style.display = 'block';
      //     document.getElementById('contentDisplay').style.display = 'none';
      //     document.getElementById('editDisplay').style.display = 'none';

      //     const mediaData = jsondata.Media || [];

      //     editTagSettingsDiv.innerHTML = `

      //       <img src="assets/app/back.svg" id="backTagButton">
      //     `;
      
      //     editTagSettingsDiv.addEventListener('click', function (event) {
      //       if (event.target.id === 'backTagButton') {
      //           gridDisplayDiv.style.display = 'block';
      //           editTagSettingsDiv.style.display = 'none';
      //       }
      //   });
      // }

// *************************************************************************************************************************************************

