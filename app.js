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
// + function displayContentForTag(tag) {
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
document.addEventListener('DOMContentLoaded', () => {
    const mediaform = document.getElementById('mediaForm');
    const errorMessageElement = document.getElementById('error-message');
    const mediaSubmit = document.getElementById('mediaSubmit');

    // const gridDisplay = document.getElementById('gridDisplay');
    const mediaDisplay = document.getElementById('mediaDisplay');
    const contentDisplay = document.getElementById('contentDisplay');    

    // Fetch data from data.json
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
      mediaData = data;
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

// *************************************************************************************************************************************************
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

      window.mediaBridge.saveMedia(newId, Name, RunCommandPath, Tags, imagePath); 
      // window.location.reload();

    // For the sake of this example, we'll just reset the form.
      mediaform.reset();
      // window.location.reload();
    });

// *************************************************************************************************************************************************
    // Generic function to display data for any user-named array
    function displayMedia(data) {
      const dataDisplayDiv = document.getElementById('mediaDisplay');
      dataDisplayDiv.innerHTML = ''; // Clear any previous content

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
      sideMenuDiv.innerHTML = ''; // Clear any previous content
      for (const tag of sortedTags) {
        const tagDiv = document.createElement('div');
        tagDiv.classList.add('sidemenu-item');
        tagDiv.textContent = tag;
        // Add a class to the 'All' tag div to differentiate it
        if (tag === "All") {
          // tagDiv.classList.add('all-tag');
          tagDiv.classList.add('selected');
        }
        sideMenuDiv.appendChild(tagDiv);
      }

// *************************************************************************************************************************************************
      // Function to display content based on the selected tag
      //
      //
      // Initially, display the default data, The All Tag, that displays all media content
      displayContentForTag("All", data);

      function displayContentForTag(tag, jsondata) {
          const scrollableContentDiv = document.querySelector('.scrollableContent');
          const mediaDisplayDiv = document.getElementById('mediaDisplay');
          
          // Show media display and hide others
          mediaDisplayDiv.style.display = 'block';
          document.getElementById('showTagSettings').style.display = 'none';
          document.getElementById('contentDisplay').style.display = 'none';
          document.getElementById('editDisplay').style.display = 'none';
      
          mediaDisplayDiv.innerHTML = `
              <div id="tagNameContainer">
                  <div id="tagSelection">${tag}</div>
                  <img src="assets/app/settings.svg" id="editTagImage">
              </div>
          `;
      
          const mediaData = jsondata.Media || [];
          // If Tag selected is all, show all media data.  If not, only show media data where the media entries include the selected Tag.
          const items = tag === 'All' ? mediaData : mediaData.filter(item => item.Tags.includes(tag));
          mediaDisplayDiv.innerHTML += createMedia(items);
      
          // Add event listener for the settings image/button
          const editTagImage = document.getElementById('editTagImage');
          editTagImage.addEventListener('click', () => {
              displayTagSettings(tag, jsondata);
          });
      }
      
// *************************************************************************************************************************************************
//
//
//
      // Function that displays the settings page for an individual tag
      function displayTagSettings(tag, jsondata) {
          const mediaDisplayDiv = document.getElementById('mediaDisplay');
          const showTagSettingsDiv = document.getElementById('showTagSettings');
      
          // Show edit tag settings and hide others
          mediaDisplayDiv.style.display = 'none';
          showTagSettingsDiv.style.display = 'block';
          document.getElementById('contentDisplay').style.display = 'none';
          document.getElementById('editDisplay').style.display = 'none';
      
          // const mediaData = jsondata.Media || [];
      
          // Find the first tag with the selected name
          const selectedTag = jsondata.Tags.find(item => item.Name === tag);

          // Back button for tag settings
          showTagSettingsDiv.innerHTML += `
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
              <div class="tagContent">
                  <p>------------------------------------------------------------------------------------</p>
                  <p>CATEGORY SETTINGS</p>
                  <p>------------------------------------------------------------------------------------</p>
                  <p>Name: ${selectedTag.Name}</p>
                  <p>Media's Display Ratio: ${selectedTag.Width} x ${selectedTag.Height}</p>
                  <p>Intro to Category, Video / Music / Transitions</p>
                  <p>Background Music / Sound Effects</p>
                  <p>Overall themes, fonts, etc.</p>
                  <p>Ability to Delete entire Category, the delete option should only be available through an enabled setting with password</p>
                  <p>DEFAULT RATIOS 1:1 Square 1080 x 1080, 2:3 Vertical Steam Hero 600 x 900, 4:5 Vertical 1080 x 1350, 16:9 Horizontal 1920 x 1080</p>
                  <p>?:? Custom ? x ? (Include decimals if user needs specifics) Do not exceed 100, create math that sorts the correct sizing on page.</p>
                  <p>?:? Match the uploaded Media with a set height to keep the entries in line</p>
                  <p>Don't use pixels as metrics as the height should scale with the users screen size.  Instead just record the ratio</p>
                  <p>Borders, hover effects</p>
                  <p>SNES: 2100x1534 Gamecube: 1158x1617? PSP: 1146x1980 Switch: 872x1420 N64: 2100x1532 DS: 1532x1370 3DS: 640x570? (Maybe double to 1280x1140 for a better quality size) NES: 1534x2100</p>
                  <p>File Path to Transition Media and subsequent media</p>
                  <p>Layouts: Nintendo Switch, 3DS, Wiiu, Wii</p>
                  <p>I need to save a default value in the event user wants every category to look the same without setting them all</p>
                  <p>Give the user the ability to add custom values ot the json file, if user wants to create a Date or other text value, that should be here (Speedruns)</p>
                  <p>Custom values might be easier to use if they are saved with the actual media in question and not the tag / category</p>
                  <p>Hoverable Options</p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <br>
                  <p>------------------------------------------------------------------------------------</p>
                  <p>UNIVERSAL SETTINGS</p>
                  <p>------------------------------------------------------------------------------------</p>
                  <p>Side Bar Location / Style</p>
                  <p>Give user the option for the side bar option to disappear after a moment, then wake up or display the option pressing the assigned button</p>
                  <p>Consider the timing of switching between categories, some transition scenes may take up more time than they need to.  Should there be an option to skip directly to a cat and skip other transitions?</p>
                  <p></p>
                  <p></p>
                  <p></p>
              </div>
          `;
      
          const backContainer = document.getElementById('backContainer');
          backContainer.addEventListener('click', function () {
              mediaDisplayDiv.style.display = 'block';
              showTagSettingsDiv.style.display = 'none';
              // Clear previous content when going back
              showTagSettingsDiv.innerHTML = '';
          });
          const editButton = document.getElementById('editContainer');
          editButton.addEventListener('click', () => {
            editCategorySettings(selectedTag);
          });
          
          
      }
// *************************************************************************************************************************************************
//
//
//
      function editCategorySettings(selectedTag) {
        const editCategorySettings = document.getElementById('editCategorySettings');
        const showTagSettingsDiv = document.getElementById('showTagSettings');
        // hide current div, show new edit category div
        editCategorySettings.style.display = 'block';
        showTagSettingsDiv.style.display = 'none';
        // display new content for the edit page
        
        // Shows the editable settings for an individual category
        editCategorySettings.innerHTML += `
          <div id="backContainer2">
            <img src="assets/app/back.svg">
            <div>Back</div>
          </div>
          <p>Name: ${selectedTag.Name}</p>
          <p>Width: ${selectedTag.Width}</p>
          <p>Height: ${selectedTag.Height}</p>
          <p>Border: ${selectedTag.Border}</p>
          <p>Gap: ${selectedTag.Gap}</p>
          <p>Wrap: ${selectedTag.Wrap}</p>
          <div class="testMediaContainer">
            <div class="testMedia"></div>
            <div class="testMedia"></div>
            <div class="testMedia"></div>
            <div class="testMedia"></div>
            <div class="testMedia"></div>
            <div class="testMedia"></div>
            <div class="testMedia"></div>
            <div class="testMedia"></div>
            <div class="testMedia"></div>
            <div class="testMedia"></div>
            <div class="testMedia"></div>
            <div class="testMedia"></div>
            <div class="testMedia"></div>
            <div class="testMedia"></div>
            <div class="testMedia"></div>
            <div class="testMedia"></div>
            <div class="testMedia"></div>
            <div class="testMedia"></div>
            <div class="testMedia"></div>
            <div class="testMedia"></div>
          </div>
          
        `;

        // Here I am taking Data values from JSON and implementing them into CSS through JS
        const testMediaContainers = document.querySelectorAll('.testMediaContainer');
        testMediaContainers.forEach(container => {
          container.style.gap = `${selectedTag.Gap}px`;
          container.style['flex-wrap'] = selectedTag.Wrap;
        });

        
        const testMediaElements = document.querySelectorAll('.testMedia');
        const scrollableContent = document.querySelector('.scrollableContent');
        testMediaElements.forEach(testMedia => {
          // Set initial styling
          let height = 200; // Fixed height
          let ratio = selectedTag.Width / selectedTag.Height;
          let width = height * ratio;
          testMedia.style.width = `${width}px`;
          testMedia.style.height = `${height}px`;
          testMedia.style.border = `${selectedTag.Border}px solid ${selectedTag.BorderColor}`;
          testMedia.style['border-radius'] = `${selectedTag.BorderRadius}px`;
          testMedia.style.zIndex = '2'; // Z-index for this element should be higher than its background border
          // Create separate styling depending on whether or not the media is hovered over by the mouse, Apply hoverable styling when mouse enters
          testMedia.addEventListener('mouseenter', function() {
            testMedia.style.border = `${selectedTag.Border}px solid ${selectedTag.HoverBorderColor}`;
            testMedia.style['border-radius'] = `${selectedTag.HoverBorderRadius}px`;
            const copy = testMedia.cloneNode(true);
            copy.classList.add('testMediaCopy'); // Add a distinct class name
            copy.style.position = 'absolute';
            const rect = testMedia.getBoundingClientRect(); // Get position and size of original media item
            let scrollDistanceLeft = scrollableContent.scrollLeft;
            let scrollDistanceTop = scrollableContent.scrollTop;
            const sideMenuWidth = 200; // Width of the side menu
            const padding = `${(selectedTag.Gap)}`;
            console.log('padding' + padding);
            copy.style.zIndex = '1';
            copy.style.border = `${selectedTag.Border}px solid red`;
            copy.style['border-radius'] = `${selectedTag.BorderRadius}px`;
            copy.style.padding = padding + 'px';
            copy.style.top = `${(rect.top) - (padding)  + (scrollDistanceTop)}px`; // Trying to place an element in the middle of an odd element will result in the value skewed to the left innacurately.
            copy.style.left = `${(rect.left) - (padding) + (scrollDistanceLeft) - (sideMenuWidth)}px`; // +1
            copy.style['background-color'] = 'Green'; // transparent middle, border could be larger?  Color the border instead
            testMedia.parentNode.appendChild(copy);
            
          });
          // Revert back to default non-hoverable styling when mouse leaves
          testMedia.addEventListener('mouseleave', function() {
            testMedia.style.border = `${selectedTag.Border}px solid ${selectedTag.BorderColor}`;
            testMedia.style['border-radius'] = `${selectedTag.BorderRadius}px`;
            const copies = testMedia.parentNode.querySelectorAll('.testMediaCopy');
            copies.forEach(copy => {
              copy.parentNode.removeChild(copy);
            });
          });
        });

        const backContainer = document.getElementById('backContainer2');
        backContainer.addEventListener('click', function () {
          
          editCategorySettings.style.display = 'none';
          // Clear previous content when going back
          editCategorySettings.innerHTML = '';
          showTagSettingsDiv.style.display = 'block';
        });
          // const deleteButton = document.getElementById('deleteButton');
          // deleteButton.addEventListener('click', function () {
          //     const idToDelete = Number(document.getElementById('id').value);

          //     // Create the confirmation dialog
          //     const confirmationDialog = document.createElement('div');
          //     confirmationDialog.innerHTML = `
          //         <div id="confirmationDialog" class="confirmation-dialog">
          //             <p>Are you sure you want to delete this entry?</p>
          //             <button id="confirmDelete">Yes</button>
          //             <button id="cancelDelete">No</button>
          //         </div>
          //     `;
          //     editFormElement.appendChild(confirmationDialog);

          //     // Set up event listeners for confirm and cancel buttons
          //     const confirmDeleteButton = document.getElementById('confirmDelete');
          //     const cancelDeleteButton = document.getElementById('cancelDelete');

          //     confirmDeleteButton.addEventListener('click', function () {
          //         window.updateBridge.deleteMedia(idToDelete);

          //         // Remove the confirmation dialog after deletion
          //         confirmationDialog.parentNode.removeChild(confirmationDialog);
          //     });

          //     cancelDeleteButton.addEventListener('click', function () {
          //         // Remove the confirmation dialog if the user cancels
          //         confirmationDialog.parentNode.removeChild(confirmationDialog);
          //     });
          // });
      }


// *************************************************************************************************************************************************
      // Add a click event listener to tagDivs to switch content
      //
      //
      //
      const tagDivs = document.querySelectorAll('.sidemenu-item');
      tagDivs.forEach(tagDiv => {
          tagDiv.addEventListener('click', () => {
            const contentDisplayDiv = document.getElementById('contentDisplay');
            const mediaDisplayDiv = document.getElementById('mediaDisplay');
            const editDisplayDiv = document.getElementById('editDisplay');
            const showTagSettingsDiv = document.getElementById('showTagSettings');
            const editCategorySettings = document.getElementById('editCategorySettings');

            // In the event user has the edit form up and clicks on the side menu to change the display
            // probably should look into some function that hides all unused divs
            mediaDisplayDiv.style.display = 'block'; // show media again
            contentDisplayDiv.style.display = 'none'; // hide any other selected content within the media 
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
            tagDiv.classList.add('selected');
            const selectedTag = tagDiv.textContent;
            displayContentForTag(selectedTag, data);
            addClickListenersToMediaItems(); // Call the function to reapply click listeners to Media items
            // Scroll to the top of the scrollable-content div
            const scrollableContentDiv = document.querySelector('.scrollableContent');
            if (scrollableContentDiv) {
                scrollableContentDiv.scrollTop = 0;
            }
          });
      });

// *************************************************************************************************************************************************
    // When user clicks on a media image, display the media JSON information
    //
    //
    //
      function addClickListenersToMediaItems() {
        const mediaItemPictures = document.querySelectorAll('.mediaitempicture');
        mediaItemPictures.forEach(mediaItemPicture => {
          mediaItemPicture.addEventListener('click', () => {
            const itemData = JSON.parse(mediaItemPicture.parentElement.dataset.item); // Access data from parent element
            displayMediaItemData(itemData);

            const scrollableContentDiv = document.querySelector('.scrollableContent');
            if (scrollableContentDiv) {
              scrollableContentDiv.scrollTop = 0;
            }
          });
        });
      }
      // ADD click listener when page initially loads
      addClickListenersToMediaItems();

// *************************************************************************************************************************************************
    // Function to display media item data in contentDisplay div
    //
    //
    //
      function displayMediaItemData(item) {
        // console.log('Displaying media item data');
        const contentDisplayDiv = document.getElementById('contentDisplay');
        const mediaDisplayDiv = document.getElementById('mediaDisplay');
        mediaDisplayDiv.style.display = 'none'; // Hide mediaDisplay div
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
        //   mediaDisplayDiv.style.display = 'block';
        //   // Remove the edit form
        //   contentDisplayDiv.removeChild(itemDataDiv);
        // });

        const backContainer = document.getElementById('backContainer');
        backContainer.addEventListener('click', function () {
          mediaDisplayDiv.style.display = 'block';
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
    //
    //
      function displayEditForm(updatedItem) {
        const contentDisplayDiv = document.getElementById('contentDisplay');
        const editDisplayDiv = document.getElementById('editDisplay');
        contentDisplayDiv.style.display = 'none';
        editDisplayDiv.style.display = 'block';
        const editForm = document.createElement('div');
        editForm.innerHTML = `
          <div id=buttonContainer>
            <div id="backContainer2">
              <img src="assets/app/back.svg">
              <div>Back</div>
            </div>
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
  //
    function createMedia(data) {
      if (data.length === 0) {
        return '<p>No data available.</p>';
      }
      let mediaHTML = '<div class="mediadata">';
      // Collect all unique keys (field names) from the array
      const allKeys = new Set();
      for (const item of data) {
        for (const key in item) {
          allKeys.add(key);
        }
      }
      mediaHTML += '<div class="mediaitemcontainer">';
      // Create data rows
      for (const item of data) {
        mediaHTML += `<div class="mediaitem" data-item='${JSON.stringify(item).replace(/'/g, "&apos;")}'>`;
        if (item.id && item.Image == true) {
          const imageUrl = item.id ? `assets/media/${item.id}.png` : 'assets/media/default.png';
          mediaHTML += `<img src="${imageUrl}" alt="Image ${item.id}" class="mediaitempicture" />`;
        } else {
          const defaultImageUrl = 'assets/media/default.png';
          mediaHTML += `<img src="${defaultImageUrl}" alt="Default Image" class="mediaitempicture" />`;
        }
        const itemName = item.Name.replace(/'/g, "&apos;");
        mediaHTML += `<div class="mediavalue">${itemName}</div>`;
        mediaHTML += '<br></div>';
      }
      mediaHTML += '<br><p>Display Option to Add a category to this list, Example: Nintendo (Parent) N64, 3DS, GBC (Children)</p>'; // class="mediaitemcontainer"
      mediaHTML += '</div>'; // class="mediaitemcontainer"
      mediaHTML += '</div>'; // class="mediakeycontainer"
      return mediaHTML;
    }
    
// *************************************************************************************************************************************************
// This is the closing section of the doc listener up at the top of the page // document.addEventListener('DOMContentLoaded', () => { 
})