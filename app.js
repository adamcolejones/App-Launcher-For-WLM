// ********************************************************
// * A DESCRIPTION OF THE FUNCTIONALITY OF THE CODE BELOW *
// ********************************************************
// + This file pulls json data and organizes it with html and css
// 
// + Acquire all relevant document elements
// + fetch('data.json')
// + function addCustomField() {
// + function removeCustomField(container) {
// + function updateCustomFieldsVisibility() {
// + mediaform.addEventListener('submit', (event) => {
// + function displayData(data) {
// + function displayMedia(data) {
// + function categoryItems(tag) {
// + tagDiv.addEventListener('click', () => { (sidemenu-item)
// + mediaItemPicture.addEventListener('click', () => { (mediaitempicture)
// + function createMedia(data) {
// + function createTable(data) {
// + function displayMediaItemData(item) { // Shows game items after pic click
// + Updating a media entry APP.JS >> PRELOAD.JS >> MAIN.JS
// + Main.html consists of multiple divs, app.js will only display one at a time and hide the rest for the sake of back button features
// + Need to clean and organize this code again

// ********************************************************


// *************************************************************************************************************************************************
// 4. Backend Communication

import { applyStyling } from './functions/applyStyling.js';
// import { createMedia } from './functions/applyStyling.js';
import { settingsMenu } from './functions/settingsMenu.js';

document.addEventListener('DOMContentLoaded', () => {
    // applyStyling();
    const mediaform = document.getElementById('mediaForm');
    const errorMessageElement = document.getElementById('error-message');
    const mediaSubmit = document.getElementById('mediaSubmit');
    let currentCarouselCategory; // needed to get the value for the categoryItems() function
    let mediaData;
    let tagData;
    let searchbarValue; // this is declared earlier to create a global variable that is referencable outside of specific functions
    


    // const gridDisplay = document.getElementById('gridDisplay');
    const mediaContainer = document.getElementById('mediaContainer');
    // const mediaVisual = document.getElementById('mediaVisual');
    const contentDisplay = document.getElementById('contentDisplay');    

    // Fetch data from data.json
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
      mediaData = data.Media || [];
      tagData = data.Tags || [];
      // Assuming the data in data.json is an object with user-named arrays.
      // displayData(data);
      displayMedia(data);
    })
    .catch(error => console.error('Error fetching media data:', error));

    // Hide the customFieldsContainer initially
    customFieldsContainer.style.display = 'none';

    // Keep track of the number of custom fields added
    let customFieldCount = 0;
    let labelInput, valueInput; // it is in use

    // Hide the customFieldsContainer initially
    updateCustomFieldsVisibility();

    // *************************************************************************************************************************************************
    //                                                                                                    
    //  ██████████████ ██████  ██████ ██████████████ ██████████████ ██████████████ ██████          ██████ 
    //  ██░░░░░░░░░░██ ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██████████████░░██ 
    //  ██░░██████████ ██░░██  ██░░██ ██░░██████████ ██████░░██████ ██░░██████░░██ ██░░░░░░░░░░░░░░░░░░██ 
    //  ██░░██         ██░░██  ██░░██ ██░░██             ██░░██     ██░░██  ██░░██ ██░░██████░░██████░░██ 
    //  ██░░██         ██░░██  ██░░██ ██░░██████████     ██░░██     ██░░██  ██░░██ ██░░██  ██░░██  ██░░██ 
    //  ██░░██         ██░░██  ██░░██ ██░░░░░░░░░░██     ██░░██     ██░░██  ██░░██ ██░░██  ██░░██  ██░░██ 
    //  ██░░██         ██░░██  ██░░██ ██████████░░██     ██░░██     ██░░██  ██░░██ ██░░██  ██████  ██░░██ 
    //  ██░░██         ██░░██  ██░░██         ██░░██     ██░░██     ██░░██  ██░░██ ██░░██          ██░░██ 
    //  ██░░██████████ ██░░██████░░██ ██████████░░██     ██░░██     ██░░██████░░██ ██░░██          ██░░██ 
    //  ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██     ██░░██     ██░░░░░░░░░░██ ██░░██          ██░░██ 
    //  ██████████████ ██████████████ ██████████████     ██████     ██████████████ ██████          ██████ 
    //                                                                                                    
    //                                                                                        
    //  ██████████████ ██████████ ██████████████ ██████         ████████████   ██████████████ 
    //  ██░░░░░░░░░░██ ██░░░░░░██ ██░░░░░░░░░░██ ██░░██         ██░░░░░░░░████ ██░░░░░░░░░░██ 
    //  ██░░██████████ ████░░████ ██░░██████████ ██░░██         ██░░████░░░░██ ██░░██████████ 
    //  ██░░██           ██░░██   ██░░██         ██░░██         ██░░██  ██░░██ ██░░██         
    //  ██░░██████████   ██░░██   ██░░██████████ ██░░██         ██░░██  ██░░██ ██░░██████████ 
    //  ██░░░░░░░░░░██   ██░░██   ██░░░░░░░░░░██ ██░░██         ██░░██  ██░░██ ██░░░░░░░░░░██ 
    //  ██░░██████████   ██░░██   ██░░██████████ ██░░██         ██░░██  ██░░██ ██████████░░██ 
    //  ██░░██           ██░░██   ██░░██         ██░░██         ██░░██  ██░░██         ██░░██ 
    //  ██░░██         ████░░████ ██░░██████████ ██░░██████████ ██░░████░░░░██ ██████████░░██ 
    //  ██░░██         ██░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░████ ██░░░░░░░░░░██ 
    //  ██████         ██████████ ██████████████ ██████████████ ████████████   ██████████████ 
    //                                                                                        
    //                                                                         
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

// *************************************************************************************************************************************************
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

// *************************************************************************************************************************************************
    function updateCustomFieldsVisibility() {
      customFieldsContainer.style.display = customFieldCount > 0 ? 'block' : 'none';
    }

    // Add event listener to the "Add Custom Field" button
    const addCustomFieldButton = document.getElementById('addCustomField');
    addCustomFieldButton.addEventListener('click', addCustomField);

    // // *************************************************************************************************************************************************
    //                                                                                                  
    //  ██████████████ ██████  ██████ ██████████████   ██████          ██████ ██████████ ██████████████ 
    //  ██░░░░░░░░░░██ ██░░██  ██░░██ ██░░░░░░░░░░██   ██░░██████████████░░██ ██░░░░░░██ ██░░░░░░░░░░██ 
    //  ██░░██████████ ██░░██  ██░░██ ██░░██████░░██   ██░░░░░░░░░░░░░░░░░░██ ████░░████ ██████░░██████ 
    //  ██░░██         ██░░██  ██░░██ ██░░██  ██░░██   ██░░██████░░██████░░██   ██░░██       ██░░██     
    //  ██░░██████████ ██░░██  ██░░██ ██░░██████░░████ ██░░██  ██░░██  ██░░██   ██░░██       ██░░██     
    //  ██░░░░░░░░░░██ ██░░██  ██░░██ ██░░░░░░░░░░░░██ ██░░██  ██░░██  ██░░██   ██░░██       ██░░██     
    //  ██████████░░██ ██░░██  ██░░██ ██░░████████░░██ ██░░██  ██████  ██░░██   ██░░██       ██░░██     
    //          ██░░██ ██░░██  ██░░██ ██░░██    ██░░██ ██░░██          ██░░██   ██░░██       ██░░██     
    //  ██████████░░██ ██░░██████░░██ ██░░████████░░██ ██░░██          ██░░██ ████░░████     ██░░██     
    //  ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░░░██ ██░░██          ██░░██ ██░░░░░░██     ██░░██     
    //  ██████████████ ██████████████ ████████████████ ██████          ██████ ██████████     ██████     
    //                                                                                                  
    //                                                                          
    //  ██████████████ ██████████████ ████████████████   ██████          ██████ 
    //  ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░░░██   ██░░██████████████░░██ 
    //  ██░░██████████ ██░░██████░░██ ██░░████████░░██   ██░░░░░░░░░░░░░░░░░░██ 
    //  ██░░██         ██░░██  ██░░██ ██░░██    ██░░██   ██░░██████░░██████░░██ 
    //  ██░░██████████ ██░░██  ██░░██ ██░░████████░░██   ██░░██  ██░░██  ██░░██ 
    //  ██░░░░░░░░░░██ ██░░██  ██░░██ ██░░░░░░░░░░░░██   ██░░██  ██░░██  ██░░██ 
    //  ██░░██████████ ██░░██  ██░░██ ██░░██████░░████   ██░░██  ██████  ██░░██ 
    //  ██░░██         ██░░██  ██░░██ ██░░██  ██░░██     ██░░██          ██░░██ 
    //  ██░░██         ██░░██████░░██ ██░░██  ██░░██████ ██░░██          ██░░██ 
    //  ██░░██         ██░░░░░░░░░░██ ██░░██  ██░░░░░░██ ██░░██          ██░░██ 
    //  ██████         ██████████████ ██████  ██████████ ██████          ██████ 
    //                                                                          
    // Attach a submit event listener to the form
    mediaform.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Get the values entered by the user
      const Name = document.getElementById('Name').value || null;
      // const RunCommand = document.getElementById('RunCommand').value || null;
      const RunCommand = document.getElementById('RunCommand');
      const RunCommandFile = RunCommand.files && RunCommand.files[0]; // Check if files exist
      const RunCommandPath = RunCommandFile ? RunCommandFile.path : null; // Get the path if the file exists
      const Tags = document.getElementById('Tags').value || null;

      // Prevent user from using 'All' or 'Uncategorized' Tags
      if (Tags && (Tags.includes("All") || Tags.includes("Uncategorized") || Tags.includes("Search"))) {
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
      // This data exists outside of the displayMedia function, therefore you have to find another way to reference data, by pre-delcaring the value and having the value exist in this file universally
      let mediaDataMap = mediaData || [];
      const existingIds = mediaDataMap.map(item => item.id);
      const highestId = Math.max(...existingIds);
      const newMediaId = highestId + 1;

      // GET HIGHEST TAG ID WHEN POSSIBLY CREATING THEM, HERE WE DON'T KNOW IF WE NEED TO OR NOT

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

      window.mediaBridge.saveMedia(newMediaId, Name, RunCommandPath, Tags, imagePath); 
      // window.location.reload();

      // For the sake of this example, we'll just reset the form.
      mediaform.reset();
      // window.location.reload();
    });

// *************************************************************************************************************************************************
    // Generic function to display data for any user-named array
    //  ████████████   ██████████ ██████████████ ██████████████ ██████         ██████████████ ████████  ████████                
    //  ██░░░░░░░░████ ██░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██         ██░░░░░░░░░░██ ██░░░░██  ██░░░░██                
    //  ██░░████░░░░██ ████░░████ ██░░██████████ ██░░██████░░██ ██░░██         ██░░██████░░██ ████░░██  ██░░████                
    //  ██░░██  ██░░██   ██░░██   ██░░██         ██░░██  ██░░██ ██░░██         ██░░██  ██░░██   ██░░░░██░░░░██                  
    //  ██░░██  ██░░██   ██░░██   ██░░██████████ ██░░██████░░██ ██░░██         ██░░██████░░██   ████░░░░░░████                  
    //  ██░░██  ██░░██   ██░░██   ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██         ██░░░░░░░░░░██     ████░░████                    
    //  ██░░██  ██░░██   ██░░██   ██████████░░██ ██░░██████████ ██░░██         ██░░██████░░██       ██░░██                      
    //  ██░░██  ██░░██   ██░░██           ██░░██ ██░░██         ██░░██         ██░░██  ██░░██       ██░░██                      
    //  ██░░████░░░░██ ████░░████ ██████████░░██ ██░░██         ██░░██████████ ██░░██  ██░░██       ██░░██                      
    //  ██░░░░░░░░████ ██░░░░░░██ ██░░░░░░░░░░██ ██░░██         ██░░░░░░░░░░██ ██░░██  ██░░██       ██░░██                      
    //  ████████████   ██████████ ██████████████ ██████         ██████████████ ██████  ██████       ██████   
    //      
    //                                                                                 
    //  ██████          ██████ ██████████████ ████████████   ██████████ ██████████████ 
    //  ██░░██████████████░░██ ██░░░░░░░░░░██ ██░░░░░░░░████ ██░░░░░░██ ██░░░░░░░░░░██ 
    //  ██░░░░░░░░░░░░░░░░░░██ ██░░██████████ ██░░████░░░░██ ████░░████ ██░░██████░░██ 
    //  ██░░██████░░██████░░██ ██░░██         ██░░██  ██░░██   ██░░██   ██░░██  ██░░██ 
    //  ██░░██  ██░░██  ██░░██ ██░░██████████ ██░░██  ██░░██   ██░░██   ██░░██████░░██ 
    //  ██░░██  ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░██  ██░░██   ██░░██   ██░░░░░░░░░░██ 
    //  ██░░██  ██████  ██░░██ ██░░██████████ ██░░██  ██░░██   ██░░██   ██░░██████░░██ 
    //  ██░░██          ██░░██ ██░░██         ██░░██  ██░░██   ██░░██   ██░░██  ██░░██ 
    //  ██░░██          ██░░██ ██░░██████████ ██░░████░░░░██ ████░░████ ██░░██  ██░░██ 
    //  ██░░██          ██░░██ ██░░░░░░░░░░██ ██░░░░░░░░████ ██░░░░░░██ ██░░██  ██░░██ 
    //  ██████          ██████ ██████████████ ████████████   ██████████ ██████  ██████ 
    //
    function displayMedia(data) {
      const dataDisplayDiv = document.getElementById('mediaContainer');
      // dataDisplayDiv.innerHTML = ''; // Clear any previous conten
      // console.log("Function: displayMedia: Clear mediaContainer")

      // Gather all the categories from the data.json file
      const tagSections = {}; // Create an object to store items by tags
      if (data && Array.isArray(data.Tags)) {
        for (const item of data.Tags) {
          // Check if the item has no tags or empty tags
          const isUntagged = !item.Name || item.Name.trim() === "";

          // Add the item to the 'All' tag section
          const allMediaKey = 'All';
          if (!tagSections[allMediaKey]) {
              tagSections[allMediaKey] = [];
          }
          tagSections[allMediaKey].push(item);

          if (isUntagged) {
              // Categorize items without tags as 'Uncategorized'
              const untaggedKey = 'Uncategorized';
              if (!tagSections[untaggedKey]) {
                  tagSections[untaggedKey] = [];
              }
              tagSections[untaggedKey].push(item);
          } else {
            // Categorize items by their tags
            if (item.Name) {
              const tagNames = item.Name.split(',').map(Name => Name.trim());
              for (const Name of tagNames) {
                if (!tagSections[Name]) {
                    tagSections[Name] = [];
                }
                tagSections[Name].push(item);
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
      
      // sideMenuDiv.innerHTML = ''; // Clear any previous content

      // *************************************************************************************************************************************************                                                                             
      //  ██████████████ ██████████████ ██████████████ ████████████████   ██████████████ ██████  ██████ 
      //  ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░░░██   ██░░░░░░░░░░██ ██░░██  ██░░██ 
      //  ██░░██████████ ██░░██████████ ██░░██████░░██ ██░░████████░░██   ██░░██████████ ██░░██  ██░░██ 
      //  ██░░██         ██░░██         ██░░██  ██░░██ ██░░██    ██░░██   ██░░██         ██░░██  ██░░██ 
      //  ██░░██████████ ██░░██████████ ██░░██████░░██ ██░░████████░░██   ██░░██         ██░░██████░░██ 
      //  ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░░░██   ██░░██         ██░░░░░░░░░░██ 
      //  ██████████░░██ ██░░██████████ ██░░██████░░██ ██░░██████░░████   ██░░██         ██░░██████░░██ 
      //          ██░░██ ██░░██         ██░░██  ██░░██ ██░░██  ██░░██     ██░░██         ██░░██  ██░░██ 
      //  ██████████░░██ ██░░██████████ ██░░██  ██░░██ ██░░██  ██░░██████ ██░░██████████ ██░░██  ██░░██ 
      //  ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██  ██░░██ ██░░██  ██░░░░░░██ ██░░░░░░░░░░██ ██░░██  ██░░██ 
      //  ██████████████ ██████████████ ██████  ██████ ██████  ██████████ ██████████████ ██████  ██████ 

      // CREATE THE SEARCHBAR HTML
      const searchbar = document.createElement("div");
      searchbar.id = "searchbar";
      searchbar.className = "searchbar";
      searchbar.innerHTML = '<input type="text" placeholder="Search"> <button type="button" id="clearSearchButton">X</button>';
      sideMenuDiv.appendChild(searchbar);

      // CLEAR BUTTON
      const clearButton = document.getElementById('clearSearchButton');
      clearButton.addEventListener('click', function() {
        searchbarInput.value = ""; // Clear the text field
        searchbarInput.focus(); // Optionally, focus the input field after clearing
        searchbarSelect.call(searchbarInput); // Trigger the search handling function after clearing
      });
    
      // SEARCHBAR INPUT
      const searchbarInput = searchbar.querySelector('input');
      searchbarInput.addEventListener('input', searchbarSelect);
      function searchbarSelect() {
        searchbarValue = this.value;
        console.log('Function: searchbarSelect: ' + searchbarValue);
        // Find all sidemenu-items where they have the "selected" class
        var selectedSidemenuItems = document.querySelectorAll('.sidemenu-item.selected');
        selectedSidemenuItems.forEach(item => { // Remove the 'selected' class from each item
            item.classList.remove('selected');
        });
        categoryItems("Search", data); // select the "Search" through the category selection function
        updateSideMenu(searchbarValue); // update the list in the sidemenu to match searchbarValue
      }                                                                                              
                                                                                                                                      
      // *************************************************************************************************************************************************                                                                                                                            
      //  ██████████████ ██████████ ████████████   ██████████████ ██████          ██████ ██████████████ ██████          ██████ ██████  ██████ 
      //  ██░░░░░░░░░░██ ██░░░░░░██ ██░░░░░░░░████ ██░░░░░░░░░░██ ██░░██████████████░░██ ██░░░░░░░░░░██ ██░░██████████  ██░░██ ██░░██  ██░░██ 
      //  ██░░██████████ ████░░████ ██░░████░░░░██ ██░░██████████ ██░░░░░░░░░░░░░░░░░░██ ██░░██████████ ██░░░░░░░░░░██  ██░░██ ██░░██  ██░░██ 
      //  ██░░██           ██░░██   ██░░██  ██░░██ ██░░██         ██░░██████░░██████░░██ ██░░██         ██░░██████░░██  ██░░██ ██░░██  ██░░██ 
      //  ██░░██████████   ██░░██   ██░░██  ██░░██ ██░░██████████ ██░░██  ██░░██  ██░░██ ██░░██████████ ██░░██  ██░░██  ██░░██ ██░░██  ██░░██ 
      //  ██░░░░░░░░░░██   ██░░██   ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░██  ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░██  ██░░██  ██░░██ ██░░██  ██░░██ 
      //  ██████████░░██   ██░░██   ██░░██  ██░░██ ██░░██████████ ██░░██  ██████  ██░░██ ██░░██████████ ██░░██  ██░░██  ██░░██ ██░░██  ██░░██ 
      //          ██░░██   ██░░██   ██░░██  ██░░██ ██░░██         ██░░██          ██░░██ ██░░██         ██░░██  ██░░██████░░██ ██░░██  ██░░██ 
      //  ██████████░░██ ████░░████ ██░░████░░░░██ ██░░██████████ ██░░██          ██░░██ ██░░██████████ ██░░██  ██░░░░░░░░░░██ ██░░██████░░██ 
      //  ██░░░░░░░░░░██ ██░░░░░░██ ██░░░░░░░░████ ██░░░░░░░░░░██ ██░░██          ██░░██ ██░░░░░░░░░░██ ██░░██  ██████████░░██ ██░░░░░░░░░░██ 
      //  ██████████████ ██████████ ████████████   ██████████████ ██████          ██████ ██████████████ ██████          ██████ ██████████████ 
      //                                                                                                                                      
      //                                                          
      //  ██████         ██████████ ██████████████ ██████████████ 
      //  ██░░██         ██░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ 
      //  ██░░██         ████░░████ ██░░██████████ ██████░░██████ 
      //  ██░░██           ██░░██   ██░░██             ██░░██     
      //  ██░░██           ██░░██   ██░░██████████     ██░░██     
      //  ██░░██           ██░░██   ██░░░░░░░░░░██     ██░░██     
      //  ██░░██           ██░░██   ██████████░░██     ██░░██     
      //  ██░░██           ██░░██           ██░░██     ██░░██     
      //  ██░░██████████ ████░░████ ██████████░░██     ██░░██     
      //  ██░░░░░░░░░░██ ██░░░░░░██ ██░░░░░░░░░░██     ██░░██     
      //  ██████████████ ██████████ ██████████████     ██████     
      //                                                            
      //                                                          
      // Set the categories to be displayed in the side bar
      // function updateSideMenu(currentName) {
      function updateSideMenu(searchbarValue) {
        // console.log("updateSideMenu:" + currentName);
        // currentCarouselCategory = currentName;
        // sideMenuDiv.innerHTML = ''; // Clear the side menu
        // sideMenuDiv.appendChild(searchbar); // this part is causing the searchbar to go unclicked when function is called
        // sideMenuDiv.appendChild(carouse.l); // Re-add the carouse.l to the side menu

        const contentDisplayDiv = document.getElementById('contentDisplay');
        const mediaContainerDiv = document.getElementById('mediaContainer');
        const editDisplayDiv = document.getElementById('editDisplay');
        const showTagSettingsDiv = document.getElementById('showTagSettings');
        const editCategorySettings = document.getElementById('editCategorySettings');
        const sideMenuItemContainer = document.getElementById('sidemenu-itemContainer');

        // In the event user has the edit form up and clicks on the side menu to change the display
        // probably should look into some function that hides all unused divs
        mediaContainerDiv.style.display = 'block'; // show media again
        contentDisplayDiv.style.display = 'none'; // hide any other selected content within the media 
        document.getElementById('editCategoryMenu').style.display = 'none';
        contentDisplayDiv.innerHTML = '';
        editDisplayDiv.style.display = 'none';
        editDisplayDiv.innerHTML = '';
        showTagSettingsDiv.style.display = 'none';
        showTagSettingsDiv.innerHTML = '';
        editCategorySettings.style.display = 'none';
        editCategorySettings.innerHTML = '';

        // Display all categories associated with this parent (carouse.lOptions)
        // Common setup for side menu items
        // I want to generate this dynamically in the event the user wants to display the sidebar content in a different way.  This will allow me to perform checks in js without working with hardcoded html
        let sideMenuContainer = document.getElementById('sidemenu-itemContainer');

        if (sideMenuContainer) { // Check if the element already exists.  If it exists, clear its content
            sideMenuContainer.innerHTML = '';
        } else { // If it does not exist, create a new div and set its ID
            sideMenuContainer = document.createElement('div');
            sideMenuContainer.id = 'sidemenu-itemContainer';
            sideMenuDiv.appendChild(sideMenuContainer); // Assuming sideMenuDiv is already defined and accessible
        }

        // let sideMenuContainer = document.createElement('div');
        // sideMenuContainer.id = 'sidemenu-itemContainer';
        // sideMenuDiv.appendChild(sideMenuContainer);
        let itemsToDisplay = [];
        // itemsToDisplay = data.Tags.map(tag => tag.Name);
        // itemsToDisplay.forEach((item, index) => createMenuItem(item, index));
        // Determine which items to display in the side menu
        // If search field has input data, then display all relevant categories
        // if search field is blank, then display all categories in the list
        // TODO
        if (searchbarValue) {
          console.log('SideBar Search value: ' + searchbarValue);
          // Make search field and data results Lowercase and remove spaces
          itemsToDisplay = data.Tags
            .filter(item => item.Name.replace(/\s+/g, '').toLowerCase().includes(searchbarValue.replace(/\s+/g, '').toLowerCase()))
            .map(item => item.Name);

          itemsToDisplay = itemsToDisplay.filter(item => item !== "All"); // remove the all tag from the array, as it will be replaced with the "Search / All" filtered category
          itemsToDisplay = itemsToDisplay.filter(item => item !== "Search"); // remove the all tag from the array, as it will be replaced with the "Search / All" filtered category
          itemsToDisplay = ["Search", ...itemsToDisplay];
          // console.log("SearchbarValue for Categories: " + searchbarValue)
          // console.log("SearchbarValue items to display: " + itemsToDisplay)
        }
        else {
          itemsToDisplay = data.Tags.map(tag => tag.Name);
          itemsToDisplay = itemsToDisplay.filter(item => item !== "All"); //remove "All" from non-alphabetized list, will re-add it at the top later
          itemsToDisplay.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())); // sort seperate from searchBarValue as "All" category should remain
          itemsToDisplay = ["All", ...itemsToDisplay]; //after removing All and alphabetizing the list, add "All" back to the top
          // console.log("SearchbarValue for Categories: " + searchbarValue)
          // console.log("SearchbarValue items to display: " + itemsToDisplay)
        }

        itemsToDisplay.forEach((item, index) => createMenuItem(item, index));  


        function createMenuItem(text, index) {
          // console.log('Text: ' + text)
          // console.log('index: ' + index)
          const itemDiv = document.createElement('div');
          itemDiv.classList.add('sidemenu-item');
          // This changes the category name of the carouse.l item to All, which shows all content belonging to a category under this carouse.l item
          // itemDiv.textContent = text;
          // This former code would change the carousel name to "All", showing all content in that carousel option
          if (index === 0) {
            itemDiv.textContent = "All"; // rename the search field as All 
          }
          else {
            itemDiv.textContent = text;
          }
          // itemDiv.textContent = text;
          sideMenuContainer.appendChild(itemDiv);

          // CREATE SELECTION TAG FOR SELECTED CATEGORY
          itemDiv.addEventListener('click', setSelectedCategory);
          // itemDiv.addEventListener('click', () => {
          function setSelectedCategory() {
            if (itemDiv.classList.contains('selected')) {
              return; // Exit if already selected
            }
            document.querySelectorAll('.sidemenu-item').forEach(item => {
                item.classList.remove('selected');
            });
            itemDiv.classList.add('selected'); // make it the current selecction

            categoryItems(text, data);
          }
          selectFirstSideMenuItem(); // can I do this outside of this function?  It's being called when I update the searcfield and preventing continuos input
        }

        

        // let itemsToDisplay = [];
        
        // itemsToDisplay = data.Tags.map(tag => tag.Name);
        // itemsToDisplay.forEach((item, index) => createMenuItem(item, index));
      }

      function selectFirstSideMenuItem() {
        const firstItem = sideMenuDiv.querySelector('.sidemenu-item');
        if (firstItem) {
          firstItem.click();
        }
      }

      // updateSideMenu(texts[0]);
      updateSideMenu();
      selectFirstSideMenuItem();

        // If Category === All, then display all tags minus those already in the carouse.l
      // if (currentCarouse.lCategory === "All") {
        //   // Filter out tags that are in the 'texts' array and map the results to get the tag names
        //   itemsToDisplay = [currentName].concat(data.Tags.filter(tag => !texts.includes(tag.Name)).map(tag => tag.Name));
        // } else {
        //   // Find the specific tag that matches the currentName
        //   // If foundItem exists, use its Carouse.lOptions, otherwise, use an empty array
        //   // Ensure the first item is the currentName itself
        //   const foundItem = data.Tags.find(item => item.Name === currentName);
        //   itemsToDisplay = [currentName].concat(foundItem?.Carouse.lOptions || []);
        // }
        // itemsToDisplay = [currentName].concat(data.Tags.filter(tag => !texts.includes(tag.Name)).map(tag => tag.Name));


      // *************************************************************************************************************************************************
      //                                                                                                                                  
      //  ██████████████ ██████████████ ██████████████ ██████████████ ██████████████ ██████████████ ████████████████   ████████  ████████ 
      //  ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░░░██   ██░░░░██  ██░░░░██ 
      //  ██░░██████████ ██░░██████░░██ ██████░░██████ ██░░██████████ ██░░██████████ ██░░██████░░██ ██░░████████░░██   ████░░██  ██░░████ 
      //  ██░░██         ██░░██  ██░░██     ██░░██     ██░░██         ██░░██         ██░░██  ██░░██ ██░░██    ██░░██     ██░░░░██░░░░██   
      //  ██░░██         ██░░██████░░██     ██░░██     ██░░██████████ ██░░██         ██░░██  ██░░██ ██░░████████░░██     ████░░░░░░████   
      //  ██░░██         ██░░░░░░░░░░██     ██░░██     ██░░░░░░░░░░██ ██░░██  ██████ ██░░██  ██░░██ ██░░░░░░░░░░░░██       ████░░████     
      //  ██░░██         ██░░██████░░██     ██░░██     ██░░██████████ ██░░██  ██░░██ ██░░██  ██░░██ ██░░██████░░████         ██░░██       
      //  ██░░██         ██░░██  ██░░██     ██░░██     ██░░██         ██░░██  ██░░██ ██░░██  ██░░██ ██░░██  ██░░██           ██░░██       
      //  ██░░██████████ ██░░██  ██░░██     ██░░██     ██░░██████████ ██░░██████░░██ ██░░██████░░██ ██░░██  ██░░██████       ██░░██       
      //  ██░░░░░░░░░░██ ██░░██  ██░░██     ██░░██     ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██  ██░░░░░░██       ██░░██       
      //  ██████████████ ██████  ██████     ██████     ██████████████ ██████████████ ██████████████ ██████  ██████████       ██████       
      //                                                                                                                                  
      //                                                                                
      //  ██████████ ██████████████ ██████████████ ██████          ██████ ██████████████ 
      //  ██░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██████████████░░██ ██░░░░░░░░░░██ 
      //  ████░░████ ██████░░██████ ██░░██████████ ██░░░░░░░░░░░░░░░░░░██ ██░░██████████ 
      //    ██░░██       ██░░██     ██░░██         ██░░██████░░██████░░██ ██░░██         
      //    ██░░██       ██░░██     ██░░██████████ ██░░██  ██░░██  ██░░██ ██░░██████████ 
      //    ██░░██       ██░░██     ██░░░░░░░░░░██ ██░░██  ██░░██  ██░░██ ██░░░░░░░░░░██ 
      //    ██░░██       ██░░██     ██░░██████████ ██░░██  ██████  ██░░██ ██████████░░██ 
      //    ██░░██       ██░░██     ██░░██         ██░░██          ██░░██         ██░░██ 
      //  ████░░████     ██░░██     ██░░██████████ ██░░██          ██░░██ ██████████░░██ 
      //  ██░░░░░░██     ██░░██     ██░░░░░░░░░░██ ██░░██          ██░░██ ██░░░░░░░░░░██ 
      //  ██████████     ██████     ██████████████ ██████          ██████ ██████████████ 
      //                                                                                                                                      
      // Function to display content based on the selected tag
      // Initially, display the default data, The All Tag, that displays all media content
      // categoryItems("All", data); // TODO, this shouldn't be the default way to display all content
      // instead have a function that selects the first item in the side menu list

      function categoryItems(tag, jsondata) {
          
          const scrollableContentDiv = document.querySelector('.scrollableContent');
          const mediaContainerDiv = document.getElementById('mediaContainer');
          mediaContainerDiv.style.display = 'none';
          applyStyling(tag); // when this completes, then mediaContainer display = block
          const mediaVisual = document.getElementById('.mediaVisual');
          
          document.getElementById('showTagSettings').style.display = 'none';
          document.getElementById('contentDisplay').style.display = 'none';
          document.getElementById('editDisplay').style.display = 'none';
          document.getElementById('editCategoryMenu').style.display = 'none';
          // document.getElementById('mediaVisual').style.display = 'block';

          // <div id="loadingScreen">Loading...</div>
          mediaContainerDiv.innerHTML = `
              <div id="tagNameContainer">
                  <div id="tagSelection">${tag}</div>
                  <img src="assets/app/settings.svg" id="editCategoryButton">
              </div>
          `;
      
          // If Tag selected is all, show all media data.  If not, only show media data where the media entries include the selected Tag.
          // This creates a list of Media IDs that will be displayed
          mediaData = jsondata.Media || [];
          tagData = jsondata.Tags || [];
          // Find all the Carouse.lOptions for the selectedTag
          let selectedTag = tagData.find(item => item.Name === tag);
          // let carouse.lOptions = selectedTag.Carouse.lOptions;
          // Find every media item associated with the Options in the list (avoid dupes)
          // create if statement for other categories 
          // console.log('tag: ' + tag);
          // console.log('currentCarouse.lCategory: ' + currentCarouse.lCategory);
          let items;
          // if (tag === "Search" && searchbarValue) {
          if (tag === "Search") {
            if (searchbarValue === "") {
              selectFirstSideMenuItem();
              // select the side menu item that matches "All"
              // categoryItems("All", data);
              return;
              // items = mediaData; // if blank, show all content- search narrows results
              // items = []; // if blank, show nothing at all- search finds results
            }
            else {
              items = mediaData.filter(item => 
                // item.Name && item.Name.toLowerCase().includes(searchbarValue.toLowerCase())
                // Make search field and data results Lowercase and remove spaces
                item.Name.replace(/\s+/g, '').toLowerCase().includes(searchbarValue.replace(/\s+/g, '').toLowerCase()) 
              );
              // console.log("searchbarValue: " + searchbarValue);
              // console.log(items);
            }
          }
          // else if (tag === "All" && currentCarouse.lCategory === "All")   {
          else if (tag === "All")   {
            items = mediaData;
          }
          else {
            // items = tag === currentCarouse.lCategory ?
            // items = tag ?
            // mediaData.filter(mediaItem => mediaItem.Tags && carouse.lOptions.some(option => mediaItem.Tags.includes(option))) :
            items = mediaData.filter(item => item.Tags.includes(tag));
          }
          // applyStyling(tag); 
          // applyStyling(selectedTag.Name);
          mediaContainerDiv.innerHTML += createMedia(items, selectedTag, jsondata);
          
          // Calling this function to trigger the styling on load
          // applyStyling(tag, jsondata); 
          const editCategoryButton = document.getElementById('editCategoryButton');
          editCategoryButton.addEventListener('click', () => {
              // displayTagSettings(tag, jsondata);
              // applyStyling(tag, jsondata);
              settingsMenu();
          });
          initMenuClicks(data);
      }

      // *************************************************************************************************************************************************
      //                                                                                                                                      
      //  ██████████████ ██████████ ████████████   ██████████████ ██████          ██████ ██████████████ ██████          ██████ ██████  ██████ 
      //  ██░░░░░░░░░░██ ██░░░░░░██ ██░░░░░░░░████ ██░░░░░░░░░░██ ██░░██████████████░░██ ██░░░░░░░░░░██ ██░░██████████  ██░░██ ██░░██  ██░░██ 
      //  ██░░██████████ ████░░████ ██░░████░░░░██ ██░░██████████ ██░░░░░░░░░░░░░░░░░░██ ██░░██████████ ██░░░░░░░░░░██  ██░░██ ██░░██  ██░░██ 
      //  ██░░██           ██░░██   ██░░██  ██░░██ ██░░██         ██░░██████░░██████░░██ ██░░██         ██░░██████░░██  ██░░██ ██░░██  ██░░██ 
      //  ██░░██████████   ██░░██   ██░░██  ██░░██ ██░░██████████ ██░░██  ██░░██  ██░░██ ██░░██████████ ██░░██  ██░░██  ██░░██ ██░░██  ██░░██ 
      //  ██░░░░░░░░░░██   ██░░██   ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░██  ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░██  ██░░██  ██░░██ ██░░██  ██░░██ 
      //  ██████████░░██   ██░░██   ██░░██  ██░░██ ██░░██████████ ██░░██  ██████  ██░░██ ██░░██████████ ██░░██  ██░░██  ██░░██ ██░░██  ██░░██ 
      //          ██░░██   ██░░██   ██░░██  ██░░██ ██░░██         ██░░██          ██░░██ ██░░██         ██░░██  ██░░██████░░██ ██░░██  ██░░██ 
      //  ██████████░░██ ████░░████ ██░░████░░░░██ ██░░██████████ ██░░██          ██░░██ ██░░██████████ ██░░██  ██░░░░░░░░░░██ ██░░██████░░██ 
      //  ██░░░░░░░░░░██ ██░░░░░░██ ██░░░░░░░░████ ██░░░░░░░░░░██ ██░░██          ██░░██ ██░░░░░░░░░░██ ██░░██  ██████████░░██ ██░░░░░░░░░░██ 
      //  ██████████████ ██████████ ████████████   ██████████████ ██████          ██████ ██████████████ ██████          ██████ ██████████████ 
      //                                                                                                                                      
      //                                                                                                                                           
      //  ██████████ ██████████████ ██████████████ ██████          ██████ ██████████████ ██████         ██████████ ██████████████ ██████  ████████ 
      //  ██░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██████████████░░██ ██░░░░░░░░░░██ ██░░██         ██░░░░░░██ ██░░░░░░░░░░██ ██░░██  ██░░░░██ 
      //  ████░░████ ██████░░██████ ██░░██████████ ██░░░░░░░░░░░░░░░░░░██ ██░░██████████ ██░░██         ████░░████ ██░░██████████ ██░░██  ██░░████ 
      //    ██░░██       ██░░██     ██░░██         ██░░██████░░██████░░██ ██░░██         ██░░██           ██░░██   ██░░██         ██░░██  ██░░██   
      //    ██░░██       ██░░██     ██░░██████████ ██░░██  ██░░██  ██░░██ ██░░██         ██░░██           ██░░██   ██░░██         ██░░██████░░██   
      //    ██░░██       ██░░██     ██░░░░░░░░░░██ ██░░██  ██░░██  ██░░██ ██░░██         ██░░██           ██░░██   ██░░██         ██░░░░░░░░░░██   
      //    ██░░██       ██░░██     ██░░██████████ ██░░██  ██████  ██░░██ ██░░██         ██░░██           ██░░██   ██░░██         ██░░██████░░██   
      //    ██░░██       ██░░██     ██░░██         ██░░██          ██░░██ ██░░██         ██░░██           ██░░██   ██░░██         ██░░██  ██░░██   
      //  ████░░████     ██░░██     ██░░██████████ ██░░██          ██░░██ ██░░██████████ ██░░██████████ ████░░████ ██░░██████████ ██░░██  ██░░████ 
      //  ██░░░░░░██     ██░░██     ██░░░░░░░░░░██ ██░░██          ██░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░██ ██░░░░░░░░░░██ ██░░██  ██░░░░██ 
      //  ██████████     ██████     ██████████████ ██████          ██████ ██████████████ ██████████████ ██████████ ██████████████ ██████  ████████ 
      //                                                                                                                                           
      // Add a click event listener to tagDivs to switch content
      function initMenuClicks(data) {
        const tagDivs = document.querySelectorAll('.sidemenu-item');
        tagDivs.forEach(tagDiv => {
          tagDiv.addEventListener('click', handleClick);
          // tagDiv.addEventListener('click', () => {
          function handleClick() {
            if (tagDiv.classList.contains('selected')) {
              return; // Exit the function if already selected
            }
            
            const contentDisplayDiv = document.getElementById('contentDisplay');
            const mediaContainerDiv = document.getElementById('mediaContainer');
            const editDisplayDiv = document.getElementById('editDisplay');
            const showTagSettingsDiv = document.getElementById('showTagSettings');
            const editCategorySettings = document.getElementById('editCategorySettings');

            // In the event user has the edit form up and clicks on the side menu to change the display
            // probably should look into some function that hides all unused divs
            // mediaContainerDiv.style.display = 'none'; // show media again
            contentDisplayDiv.style.display = 'none'; // hide any other selected content within the media 
            document.getElementById('editCategoryMenu').style.display = 'none';
            contentDisplayDiv.innerHTML = '';
            editDisplayDiv.style.display = 'none';
            editDisplayDiv.innerHTML = '';
            showTagSettingsDiv.style.display = 'none';
            showTagSettingsDiv.innerHTML = '';
            editCategorySettings.style.display = 'none';
            editCategorySettings.innerHTML = '';

            // Remove the 'selected' class from all tags
            tagDivs.forEach(tag => {
              tag.classList.remove('selected');
            });
            
            // Add the 'selected' class to the clicked tag
            // tagDiv.classList.add('selected');
            const selectedTag = tagDiv.textContent;
            console.log("selectedTag" + selectedTag);
            categoryItems(selectedTag, data);
            addClickListenersToMediaItems(); // Call the function to reapply click listeners to Media items
            // Scroll to the top of the scrollable-content div
            const scrollableContentDiv = document.querySelector('.scrollableContent');
            if (scrollableContentDiv) {
                scrollableContentDiv.scrollTop = 0;
            }
          }
          // });
        });
      }
    // *************************************************************************************************************************************************
    // When user clicks on a media image, display the media JSON information
    //
    //
    //
      function addClickListenersToMediaItems() {
        const mediaContainerDiv = document.getElementById('mediaContainer');
        mediaContainerDiv.addEventListener('click', (event) => {
          const mediaItemPicture = event.target.closest('.testMediaItemPicture');
          
          if (mediaItemPicture) {
            const itemData = JSON.parse(mediaItemPicture.parentElement.dataset.item);
            displayMediaItemData(itemData);

            const scrollableContentDiv = document.querySelector('.scrollableContent');
            if (scrollableContentDiv) {
              scrollableContentDiv.scrollTop = 0;
            }
          }
        });
        // const mediaItemPictures = document.querySelectorAll('.testMediaItemPicture');
        // mediaItemPictures.forEach(mediaItemPicture => {
        //   mediaItemPicture.addEventListener('click', () => {
        //     const itemData = JSON.parse(mediaItemPicture.parentElement.dataset.item); // Access data from parent element
        //     displayMediaItemData(itemData);

        //     const scrollableContentDiv = document.querySelector('.scrollableContent');
        //     if (scrollableContentDiv) {
        //       scrollableContentDiv.scrollTop = 0;
        //     }
        //   });
        // });
      }
      // ADD click listener when page initially loads
      addClickListenersToMediaItems();

    // *************************************************************************************************************************************************
    // Function to display media item data in contentDisplay div              
    //  ██████          ██████ ██████████████ ████████████   ██████████ ██████████████ 
    //  ██░░██████████████░░██ ██░░░░░░░░░░██ ██░░░░░░░░████ ██░░░░░░██ ██░░░░░░░░░░██ 
    //  ██░░░░░░░░░░░░░░░░░░██ ██░░██████████ ██░░████░░░░██ ████░░████ ██░░██████░░██ 
    //  ██░░██████░░██████░░██ ██░░██         ██░░██  ██░░██   ██░░██   ██░░██  ██░░██ 
    //  ██░░██  ██░░██  ██░░██ ██░░██████████ ██░░██  ██░░██   ██░░██   ██░░██████░░██ 
    //  ██░░██  ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░██  ██░░██   ██░░██   ██░░░░░░░░░░██ 
    //  ██░░██  ██████  ██░░██ ██░░██████████ ██░░██  ██░░██   ██░░██   ██░░██████░░██ 
    //  ██░░██          ██░░██ ██░░██         ██░░██  ██░░██   ██░░██   ██░░██  ██░░██ 
    //  ██░░██          ██░░██ ██░░██████████ ██░░████░░░░██ ████░░████ ██░░██  ██░░██ 
    //  ██░░██          ██░░██ ██░░░░░░░░░░██ ██░░░░░░░░████ ██░░░░░░██ ██░░██  ██░░██ 
    //  ██████          ██████ ██████████████ ████████████   ██████████ ██████  ██████ 
    //
    //                                                               
    //  ██████████ ██████          ██████ ██████████████ ██████████████ 
    //  ██░░░░░░██ ██░░██████████  ██░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ 
    //  ████░░████ ██░░░░░░░░░░██  ██░░██ ██░░██████████ ██░░██████░░██ 
    //    ██░░██   ██░░██████░░██  ██░░██ ██░░██         ██░░██  ██░░██ 
    //    ██░░██   ██░░██  ██░░██  ██░░██ ██░░██████████ ██░░██  ██░░██ 
    //    ██░░██   ██░░██  ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░██  ██░░██ 
    //    ██░░██   ██░░██  ██░░██  ██░░██ ██░░██████████ ██░░██  ██░░██ 
    //    ██░░██   ██░░██  ██░░██████░░██ ██░░██         ██░░██  ██░░██ 
    //  ████░░████ ██░░██  ██░░░░░░░░░░██ ██░░██         ██░░██████░░██ 
    //  ██░░░░░░██ ██░░██  ██████████░░██ ██░░██         ██░░░░░░░░░░██ 
    //  ██████████ ██████          ██████ ██████         ██████████████ 
    //                                                                  
      function displayMediaItemData(item) {
        // console.log('Displaying media item data');
        const contentDisplayDiv = document.getElementById('contentDisplay');
        const mediaContainerDiv = document.getElementById('mediaContainer');
        const editDisplayDiv = document.getElementById('editDisplay');

        mediaContainerDiv.style.display = 'none'; // Hide mediaContainer div
        console.log("Function: displayMediaItemData: Clear mediaContainer")
        document.getElementById('editCategoryMenu').style.display = 'none';

        contentDisplayDiv.innerHTML = ``;
        contentDisplayDiv.style.display = 'block'; // Or 'flex', 'media', etc. depending on your layout
        // This itemDataDiv might be unnecessary, just add inner html to contentDisplayDiv and append to scrollable content?  When I have more time
        const itemDataDiv = document.createElement('div');

        // Add the Play button if there is a run command
        // THE REASON I HAVE DUPLICATE HTML HERE IS BECAUSE THE BUTTON CONTAINER DIV AUTOMATICALLY CLOSES BEFORE THE PLAY BUTTON IF STATEMENT IS CHECKED
        // THIS RESULTS ON THE PLAY BUTTON APPEARING ON THE LINE BELOW OTHERWISE
        if (item.RunCommand !== null) {
          itemDataDiv.innerHTML += `
            <div id=buttonContainer>
              <div id="backContainer">
                <img src="assets/app/back.svg">
                <div>Back</div>
              </div>
              <div id="editContainer">
                <img src="assets/app/edit.svg" id="editButton">
                <div>Edit</div>
              </div>
              <div id="playContainer">
                <img src="assets/app/play.svg" id="openCmdButton">
                <div>Play</div>
              </div>
            </div>
          `;
        }
        else {
          itemDataDiv.innerHTML += `
            <div id=buttonContainer>
              <div id="backContainer">
                <img src="assets/app/back.svg">
                <div>Back</div>
              </div>
              <div id="editContainer">
                <img src="assets/app/edit.svg" id="editButton">
                <div>Edit</div>
              </div>
            </div>
          `;
        }

        // Check for image if the value is true on the json entry
        let imagePath = item.Image ? `assets/media/${item.id}.png` : 'assets/media/default.png';
        let imageTag = `<img src="${imagePath}" alt="Image ${item.id}" class="mediaitempicture">`;
        
        // Shows individual media data
        itemDataDiv.innerHTML += `
          </div>
          <br>
          ${imageTag}
          <p>ID: ${item.id}</p>
          <p>Name: ${item.Name}</p>
          <p>Image: ${item.Image}</p>
          <p>Run Command: ${item.RunCommand}</p>
          <p>Tags: ${item.Tags.join(', ')}</p>
          <p>Game Information</p>
          <p>Related Titles</p>
          <p>Gallery (Screenshots, videos, etc)</p>
          <p>Sub Categories</p>
          <p>Activity for individual game, also with Link to full Activity Page</p>
          <p>Background Videos?  Background Music?  Special Fonts?  </p>
          <p>Other Tags this media belongs to, related</p>
          <p>Add Last Played Date and Time to the JSON File Media Data, then give user the ability to sort by last played</p>
          
        `;
        
        // Add all innerHTML and potential play button
        contentDisplayDiv.appendChild(itemDataDiv);

        // Run the if statement again to create listener event after it was added to the innerHTML
        if (item.RunCommand !== null) {
          const openCmdButton = document.getElementById('playContainer');
          openCmdButton.addEventListener('click', () => {
            // console.log('Open CMD button clicked');
            handleOpenCmdButtonClick(item['RunCommand']); // Assuming filePath is a property of the item object
          });
        }

        const editButton = document.getElementById('editContainer');
        editButton.addEventListener('click', () => {
          displayEditForm(item);
        });
        
        // const backMediaButton = document.getElementById('backtomedia');
        // backMediaButton.addEventListener('click', function () {
        //   // Show the original content
        //   mediaContainerDiv.style.display = 'block';
        //   // Remove the edit form
        //   contentDisplayDiv.removeChild(itemDataDiv);
        // });

        const backContainer = document.getElementById('backContainer');
        backContainer.addEventListener('click', function () {
          mediaContainerDiv.style.display = 'block';
          // Remove the edit form
          contentDisplayDiv.removeChild(itemDataDiv);
        });
      }

// *************************************************************************************************************************************************
    // When openCmdButton is clicked, run this function to open the run command file 
    //
    //
    // 
      function handleOpenCmdButtonClick(filePath) {
        if (filePath) {
          console.log('File path found:', filePath);
          const { shell } = window.electron;
          shell.openPath(filePath)
            .then(() => {
              console.log('File opened successfully');
            })
            .catch((error) => {
              console.error('Error opening file:', error.message);
              alert('Cannot open file: Access denied or an error occurred');
            });
        } else {
          console.error('File path not found');
        }
      }

// ************************************************************************************************************************************************* 
    // Display the edit form to update the json information for selected media
    //                                                                         
    //  ██████████████ ████████████   ██████████ ██████████████                
    //  ██░░░░░░░░░░██ ██░░░░░░░░████ ██░░░░░░██ ██░░░░░░░░░░██                
    //  ██░░██████████ ██░░████░░░░██ ████░░████ ██████░░██████                
    //  ██░░██         ██░░██  ██░░██   ██░░██       ██░░██                    
    //  ██░░██████████ ██░░██  ██░░██   ██░░██       ██░░██                    
    //  ██░░░░░░░░░░██ ██░░██  ██░░██   ██░░██       ██░░██                    
    //  ██░░██████████ ██░░██  ██░░██   ██░░██       ██░░██                    
    //  ██░░██         ██░░██  ██░░██   ██░░██       ██░░██                    
    //  ██░░██████████ ██░░████░░░░██ ████░░████     ██░░██                    
    //  ██░░░░░░░░░░██ ██░░░░░░░░████ ██░░░░░░██     ██░░██                    
    //  ██████████████ ████████████   ██████████     ██████                    
    //                                                                         
    //                                                                                 
    //  ██████          ██████ ██████████████ ████████████   ██████████ ██████████████ 
    //  ██░░██████████████░░██ ██░░░░░░░░░░██ ██░░░░░░░░████ ██░░░░░░██ ██░░░░░░░░░░██ 
    //  ██░░░░░░░░░░░░░░░░░░██ ██░░██████████ ██░░████░░░░██ ████░░████ ██░░██████░░██ 
    //  ██░░██████░░██████░░██ ██░░██         ██░░██  ██░░██   ██░░██   ██░░██  ██░░██ 
    //  ██░░██  ██░░██  ██░░██ ██░░██████████ ██░░██  ██░░██   ██░░██   ██░░██████░░██ 
    //  ██░░██  ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░██  ██░░██   ██░░██   ██░░░░░░░░░░██ 
    //  ██░░██  ██████  ██░░██ ██░░██████████ ██░░██  ██░░██   ██░░██   ██░░██████░░██ 
    //  ██░░██          ██░░██ ██░░██         ██░░██  ██░░██   ██░░██   ██░░██  ██░░██ 
    //  ██░░██          ██░░██ ██░░██████████ ██░░████░░░░██ ████░░████ ██░░██  ██░░██ 
    //  ██░░██          ██░░██ ██░░░░░░░░░░██ ██░░░░░░░░████ ██░░░░░░██ ██░░██  ██░░██ 
    //  ██████          ██████ ██████████████ ████████████   ██████████ ██████  ██████ 
    //                                                                                 
      function displayEditForm(updatedItem) {
        const contentDisplayDiv = document.getElementById('contentDisplay');
        const editDisplayDiv = document.getElementById('editDisplay');
        editDisplayDiv.innerHTML = ``;
        contentDisplayDiv.style.display = 'none';
        document.getElementById('editCategoryMenu').style.display = 'none';
        editDisplayDiv.style.display = 'block';
        const editForm = document.createElement('div');
        
        editForm.innerHTML = `
          <div id=buttonContainer>
            <div id="backContainer2">
              <img src="assets/app/back.svg">
              <div>Back</div>
            </div>
            <br>
            <div id="saveContainer">
              <img src="assets/app/save.svg" id="saveButton">
              <div>Save</div>
            </div>
            <div id="deleteContainer">
              <img src="assets/app/delete.svg" id="deleteButton">
              <div>Delete</div>
            </div>
          </div>
          <form id="editForm">
            <input type="hidden" id="id" value="${updatedItem.id}">
            <label for="name">Name:</label>
            <input type="text" id="name" value="${updatedItem.Name}"><br>
            <label for="image">Image:</label>
            <input type="file" id="image"><br>
            <label for="RunCommand">Run Command:</label>
            <input type="file" id="RunCommand"><br>
            <label for="RunCommand2">Old Run Command: ${updatedItem.RunCommand}</label><br>
            <label for="tags">Tags:</label>
            <input type="text" id="tags" value="${updatedItem.Tags.join(', ')}"><br>
            
          </form>
        `;
        // contentDisplayDiv.innerHTML = '';
        // document.body.appendChild(editForm);
        editDisplayDiv.appendChild(editForm);
        // const deleteContainer = document.getElementById('deleteContainer');
        // editFormElement.addEventListener('submit', (event) => {
        document.getElementById('saveContainer').addEventListener('click', (event) => {
          event.preventDefault();
          // Get form elements
          // const id = document.getElementById('id').value;
          const id = Number(document.getElementById('id').value);
          const name = document.getElementById('name').value;
          // const imagePath = document.getElementById('image').files[0];
          const imageInput = document.getElementById('image');
          const imageFile = imageInput.files && imageInput.files[0]; // Check if files exist
          const imagePath = imageFile ? imageFile.path : null; // Get the path if the file exists
          // const RunCommand = document.getElementById('RunCommand').value;
          const RunCommandInput = document.getElementById('RunCommand');
          const RunCommandFile = RunCommandInput.files && RunCommandInput.files[0]; // Check if files exist
          const RunCommandPath = RunCommandFile ? RunCommandFile.path : null; // Get the path if the file exists
          console.log('Run Command Path:', RunCommandPath);
          const tags = document.getElementById('tags').value.split(',').map(tag => tag.trim());
          // const updatedData = {
          //   id: updatedItem.id,
          //   Name: name,
          //   Image: imageFile ? true : false,
          //   RunCommand: RunCommand,
          //   Tags: tags,
          // };
          // console.log('Updated Item:', updatedData);
          console.log('Updated Image Path:', imagePath);
          window.updateBridge.updateMedia(id, name, RunCommandPath, tags, imagePath);
          // window.updateBridge.updateMedia(updatedData, imageFile);
        });
        const backButton = document.getElementById('backContainer2');
        backButton.addEventListener('click', function () {
          // Show the original content
          contentDisplayDiv.style.display = 'block';
          // Remove the edit form
          editDisplayDiv.removeChild(editForm);
        });
        const deleteButton = document.getElementById('deleteContainer');
        deleteButton.addEventListener('click', function () {
            const idToDelete = Number(document.getElementById('id').value);

            // Create the confirmation dialog
            const confirmationDialog = document.createElement('div');
            confirmationDialog.innerHTML = `
                <div id="confirmationDialog" class="confirmation-dialog">
                    <p>Are you sure you want to delete this entry?</p>
                    <button id="confirmDelete">Yes</button>
                    <button id="cancelDelete">No</button>
                </div>
            `;
            editForm.appendChild(confirmationDialog);

            // Set up event listeners for confirm and cancel buttons
            const confirmDeleteButton = document.getElementById('confirmDelete');
            const cancelDeleteButton = document.getElementById('cancelDelete');

            confirmDeleteButton.addEventListener('click', function () {
                window.updateBridge.deleteMedia(idToDelete);

                // Remove the confirmation dialog after deletion
                confirmationDialog.parentNode.removeChild(confirmationDialog);
            });

            cancelDeleteButton.addEventListener('click', function () {
                // Remove the confirmation dialog if the user cancels
                confirmationDialog.parentNode.removeChild(confirmationDialog);
            });
        });
      }   
    }


// *************************************************************************************************************************************************
  // Function to create the table for any array
  //                                                                                                                                                                                  
  //                                                                                                               
  //  ██████████████ ████████████████   ██████████████ ██████████████ ██████████████ ██████████████                
  //  ██░░░░░░░░░░██ ██░░░░░░░░░░░░██   ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██                
  //  ██░░██████████ ██░░████████░░██   ██░░██████████ ██░░██████░░██ ██████░░██████ ██░░██████████                
  //  ██░░██         ██░░██    ██░░██   ██░░██         ██░░██  ██░░██     ██░░██     ██░░██                        
  //  ██░░██         ██░░████████░░██   ██░░██████████ ██░░██████░░██     ██░░██     ██░░██████████                
  //  ██░░██         ██░░░░░░░░░░░░██   ██░░░░░░░░░░██ ██░░░░░░░░░░██     ██░░██     ██░░░░░░░░░░██                
  //  ██░░██         ██░░██████░░████   ██░░██████████ ██░░██████░░██     ██░░██     ██░░██████████                
  //  ██░░██         ██░░██  ██░░██     ██░░██         ██░░██  ██░░██     ██░░██     ██░░██                        
  //  ██░░██████████ ██░░██  ██░░██████ ██░░██████████ ██░░██  ██░░██     ██░░██     ██░░██████████                
  //  ██░░░░░░░░░░██ ██░░██  ██░░░░░░██ ██░░░░░░░░░░██ ██░░██  ██░░██     ██░░██     ██░░░░░░░░░░██                
  //  ██████████████ ██████  ██████████ ██████████████ ██████  ██████     ██████     ██████████████                
  //                                                                                                               
  //                                                                                 
  //  ██████          ██████ ██████████████ ████████████   ██████████ ██████████████ 
  //  ██░░██████████████░░██ ██░░░░░░░░░░██ ██░░░░░░░░████ ██░░░░░░██ ██░░░░░░░░░░██ 
  //  ██░░░░░░░░░░░░░░░░░░██ ██░░██████████ ██░░████░░░░██ ████░░████ ██░░██████░░██ 
  //  ██░░██████░░██████░░██ ██░░██         ██░░██  ██░░██   ██░░██   ██░░██  ██░░██ 
  //  ██░░██  ██░░██  ██░░██ ██░░██████████ ██░░██  ██░░██   ██░░██   ██░░██████░░██ 
  //  ██░░██  ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░██  ██░░██   ██░░██   ██░░░░░░░░░░██ 
  //  ██░░██  ██████  ██░░██ ██░░██████████ ██░░██  ██░░██   ██░░██   ██░░██████░░██ 
  //  ██░░██          ██░░██ ██░░██         ██░░██  ██░░██   ██░░██   ██░░██  ██░░██ 
  //  ██░░██          ██░░██ ██░░██████████ ██░░████░░░░██ ████░░████ ██░░██  ██░░██ 
  //  ██░░██          ██░░██ ██░░░░░░░░░░██ ██░░░░░░░░████ ██░░░░░░██ ██░░██  ██░░██ 
  //  ██████          ██████ ██████████████ ████████████   ██████████ ██████  ██████ 
  //                                                                                                                                                                                                                                                              
  // This is the default, there is no styling applied until the settings button is clicked.
  // This may be overwritten when the settings menu is clicked.  
  // the settings menu should only display the category settings menu, it should not be the cause of the styling being applied
  // Probably want to combine nested categories and media items in one array to have them interwoven if necessary
    function createMedia(items, selectedTag) {
      // use the tag to find child categories, use the carouse.l option to determine if categories should be displayed again, under all
      // console.log("Data: " + data);
      // applyStyling(selectedTag.Name);
      let mediaHTML = '<div class="mediadata">';
      mediaHTML += '<div id="testMediaContainer">';
      let categoryDisplay = "";

      // List other child tags that belong to this category
      if (selectedTag.Name != 'All' && selectedTag.NestedCategories) {
        selectedTag.NestedCategories.forEach(option => {
          // find the category in question
          let category = tagData.find(tag => tag.Name === option);
          let categoryUrl = category.CoverImage ? `assets/categories/${option}.png` : 'assets/categories/default.png';
          // const categoryUrl = option ? `assets/categories/${option}.png` : 'assets/categories/default.png';

          categoryDisplay += `<div class="testMedia">
            <img src="${categoryUrl}" loading="lazy" alt="Image ${option}" class="testMediaItemPicture" draggable="false"/>
          </div>`; // Adjust this line depending on the structure of `option`
        });
      }

      // Check to see if user wants to display the nested categories before other media or not, then check again after media displayed
      if (selectedTag.DisplayNestedTop) {
        mediaHTML += categoryDisplay;
      }

      // CHECK TO SEE IF ANY MEDIA WILL BE DISPLAYED
      if (items.length === 0) { // create test media here so that the applystying page has something to edit and not crash for lack of data
        mediaHTML += '<div class="testMedia">'; // Create a blank item
        mediaHTML += '<p>No media exists in this category.  Do I want to hide this category?</p>'; // Add the line of text
        mediaHTML += '</div>'; // Close the div tags
        // return mediaHTML; // do not return incase there are child options (Nested)
      }
      // Collect all unique keys (field names) from the array
      // const allKeys = new Set();
      // for (const item of items) {
      //   for (const key in item) {
      //     allKeys.add(key);
      //   }
      // }
      // SORT ITEMS ALPHABETICALLY BY SORTEDNAME OR NAME
      items.sort((a, b) => {
        let nameA = a.SortedName || a.Name; // "" considered false
        let nameB = b.SortedName || b.Name;
        return nameA.localeCompare(nameB);
      });
      // Create items rows
      for (const item of items) {
        // console.log("Item: " + item);
        mediaHTML += `<div class="testMedia" data-item='${JSON.stringify(item).replace(/'/g, "&apos;")}'>`;
        let imageUrl;

        if (item.Image == true) { 
          imageUrl = `assets/media/${item.id}.png`; 
        } 
        else { 
          imageUrl = 'assets/media/default.png'; 
        }

        mediaHTML += `<img src="${imageUrl}" loading="lazy" alt="Image ${item.id}" class="testMediaItemPicture" draggable="false"/>`;
        const itemName = item.Name.replace(/'/g, "&apos;");
        // mediaHTML += `<div class="testMediavalue">${itemName}</div>`;
        mediaHTML += '<br></div>';
      }

      // Check to see if user wants to display the nested categories before other media or not, then check again after media displayed
      if (!selectedTag.DisplayNestedTop) {
        mediaHTML += categoryDisplay;
      }
      
      
      // mediaHTML += `<div>"${selectedTag.Carouse.lOptions}"</div>`; // 
      mediaHTML += '<br><p>Toggle that filters child categories on and off</p>'; // class="mediaitemcontainer"
      mediaHTML += '</div>'; // class="testMediaContainer"
      mediaHTML += '</div>'; // class="mediadata"
      // mediaHTML += applyStyling(selectedTag.Name);
      return mediaHTML;
    }
    
// *************************************************************************************************************************************************

// This is the closing section of the doc listener up at the top of the page // document.addEventListener('DOMContentLoaded', () => { 
})
