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
              // displayTagSettings(tag, jsondata);
              editCategorySettings(tag, jsondata);
          });
      }
      
// *************************************************************************************************************************************************
//
//
//
      function editCategorySettings(tag, jsondata) {
        const selectedTag = jsondata.Tags.find(item => item.Name === tag);
        const editCategorySettings = document.getElementById('editCategorySettings');
        // const showTagSettingsDiv = document.getElementById('showTagSettings');
        const mediaDisplayDiv = document.getElementById('mediaDisplay');
        const scrollableContentDiv = document.querySelector('.scrollableContent'); // Scroll to the top of the page
        if (scrollableContentDiv) {
            scrollableContentDiv.scrollTop = 0;
        }
        editCategorySettings.style.display = 'block'; // display new content for the edit page
        mediaDisplayDiv.style.display = 'none';
        // showTagSettingsDiv.style.display = 'none'; // hide current div, show new edit category div
        border = selectedTag.Border;
        borderRadius = selectedTag.BorderRadius;
        borderColor = selectedTag.BorderColor;
        // Create a border color default when the checkbox is disabled.
        // create a border color disabler for input field and for the hovered border as well.
        wrap = selectedTag.Wrap;
        gap = selectedTag.Gap;
        floatingBorder = selectedTag.FloatingBorder;
        floatingBorderColor = selectedTag.FloatingBorderColor;
        floatingBorderRadius = selectedTag.FloatingBorderRadius;
        floatingBorderGap = selectedTag.FloatingBorderGap;
        var height = selectedTag.Height;
        var width = selectedTag.Width;
        ({width, height} = simplifyRatio(width, height));
        functionCount = 1;
        // there needs to be a default that sets the height and width based on the content provided. In the event user wants different sized media placed together. 
        // If user saved 1920 x 1080 as the height and width of the ratio, user will only see the simplified version after saving
        // I will need to make a separate border radius for the floating border and then a checkbox that says to match existing border.  
        // Also need a button that sets the size and gap of the floating border to be automatically sized and centered.

        

        //-----------------------------------------------------------------------------------------
        // Greatest Common Denominator for height and width ratios of media content
        //
        //
        function simplifyRatio(width, height) {
          let gcd = findGCD(width, height);
          return {width: width / gcd, height: height / gcd};
        }

        function findGCD(a, b) { // Euclidean algorithm for finding GCD
          while (b !== 0) {
              let temp = b;
              b = a % b;
              a = temp;
          }
          return a;
        }
        //-----------------------------------------------------------------------------------------

        //-----------------------------------------------------------------------------------------
        // Shows the editable settings for an individual category
        editCategorySettings.innerHTML += `
          <div id="backContainer2">
            <img src="assets/app/back.svg">
            <div>Back</div>
          </div>


          <div class="settingsContainer">
            <p>Category Name: ${selectedTag.Name}</p>
            <br>

            <p>ASPECT RATIO / POSITION</p>
            <div class="settingsOptionContainer">
              <div class="settingsOption">
                <p id="originalDimensionsValue">Original Dimensions</p><input id="originalDimensionsCheckbox" type="checkbox">
              </div>
              <div class="settingsOption">
                <p id="aspectRatioDisplay">Aspect Ratio: ${width}:${height}</p>
                <input type="number" id="formRatioWidth" name="formRatioWidth" value=${width}>
                <input type="number" id="formRatioHeight" name="formRatioHeight" value=${height}>
              </div>
              <div class="settingsOption">
                <p id="gapValue">Gap</p><input id="gapCheckbox" type="checkbox" checked>
                <input type="number" id="formGap" name="formGap" value=${gap}>
              </div>
              <div class="settingsOption">
                <p id="wrapValue">Wrap</p><input id="wrapCheckbox" type="checkbox" checked>
              </div>
            </div>
            <br>

            <p>BORDER</p>
            <div class="settingsOptionContainer">
              <div class="settingsOption">
                <p id="borderValue">Size</p><input id="borderCheckbox" type="checkbox" checked>
                <input type="number" id="formBorder" name="formBorder" value=${border}>
              </div>
              <div class="settingsOption">
                <p id="borderColorValue">Color</p><input id="borderColorCheckbox" type="checkbox" checked>
                <input type="text" id="formBorderColor" name="formBorderColor" value=${borderColor}>
              </div>
              <div class="settingsOption">
                <p id="borderRadiusValue">Radius</p><input id="borderRadiusCheckbox" type="checkbox" checked>
                <input type="number" id="formBorderRadius" name="formBorderRadius" value=${borderRadius}>
              </div>
            </div>
            <br>

            <p>HOVERED BORDER</p>
            <div class="settingsOptionContainer">
              <div class="settingsOption">
                <p id="floatingBorderValue">Size</p><input id="floatingBorderCheckbox" type="checkbox" checked>
                <input type="number" id="formFloatingBorder" name="formFloatingBorder" value=${floatingBorder}>
              </div>
              <div class="settingsOption">
                <p id="floatingBorderColorValue">Color</p><input id="floatingBorderColorCheckbox" type="checkbox" checked>
                <input type="text" id="formFloatingBorderColor" name="formFloatingBorderColor" value=${floatingBorderColor}>
              </div>
              <div class="settingsOption">
                <p id="floatingBorderRadiusValue">Radius</p><input id="floatingBorderRadiusCheckbox" type="checkbox" checked>
                <input type="number" id="formFloatingBorderRadius" name="formFloatingBorderRadius" value=${floatingBorderRadius}>
              </div>
              <div class="settingsOption">
                <p id="floatingBorderGapValue">Gap</p><input id="floatingBorderGapCheckbox" type="checkbox" checked>
                <input type="number" id="formFloatingBorderGap" name="formFloatingBorderGap" value=${floatingBorderGap}>
              </div>
            </div>
            <br>

            <p>THEMES</p>
            <div class="settingsOptionContainer">
              <div class="settingsOption">
                <p id="test">Startup Video</p><input id="test" type="checkbox" checked>
                <input type="number" id="test" name="test" value=${border}>
              </div>
              <div class="settingsOption">
                <p id="test">Background Visual</p><input id="test" type="checkbox" checked>
                <input type="text" id="test" name="test" value=${border}>
              </div>
              <div class="settingsOption">
                <p id="test">Background Audio</p><input id="test" type="checkbox" checked>
                <input type="text" id="test" name="test" value=${border}>
              </div>
              <div class="settingsOption">
                <p id="test">Selection Sound</p><input id="test" type="checkbox" checked>
                <input type="number" id="test" name="test" value=${border}>
              </div>
              <div class="settingsOption">
                <p id="test">Font</p><input id="test" type="checkbox" checked>
                <input type="number" id="test" name="test" value=${border}>
              </div>
            </div>
            <br>

            <p>RESTORE DEFAULT SETTINGS</p>
            <p>SAVE CHANGES</p>

          </div>
          

          <div id="otherNotes">
            <p>------------------------------------------------------------------------------------</p>
            <p>CATEGORY SETTINGS</p>
            <p>------------------------------------------------------------------------------------</p>
            <p>Intro to Category, Video / Music / Transitions</p>
            <p>Ability to Delete entire Category, the delete option should only be available through an enabled setting with password</p>
            <p>File Path to Transition Media and subsequent media</p>
            <p>Layouts: Nintendo Switch, 3DS, Wiiu, Wii</p>
            <p>I need to save a default value in the event user wants every category to look the same without setting them all</p>
            <p>Give the user the ability to add custom values ot the json file, if user wants to create a Date or other text value, that should be here (Speedruns)</p>
            <p>Custom values might be easier to use if they are saved with the actual media in question and not the tag / category</p>
            <p>Hoverable Options</p>
            <p>Create miniature display for the user's content to show setting changes</p>
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
        //-----------------------------------------------------------------------------------------

        //-----------------------------------------------------------------------------------------
        const mediaData = jsondata.Media || [];
        // If Tag selected is all, show all media data.  If not, only show media data where the media entries include the selected Tag.
        const items = tag === 'All' ? mediaData : mediaData.filter(item => item.Tags.includes(tag));
        // console.log(items);
        editCategorySettings.innerHTML += editableMedia(items);
        function editableMedia(data) {
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
          mediaHTML += '<div id="testMediaContainer">';
          // Create data rows
          for (const item of data) {
            mediaHTML += `<div class="testMedia" data-item='${JSON.stringify(item).replace(/'/g, "&apos;")}'>`;
            if (item.id && item.Image == true) {
              const imageUrl = item.id ? `assets/media/${item.id}.png` : 'assets/media/default.png';
              mediaHTML += `<img src="${imageUrl}" alt="Image ${item.id}" class="testMediaItemPicture" />`;
            } else {
              const defaultImageUrl = 'assets/media/default.png';
              mediaHTML += `<img src="${defaultImageUrl}" alt="Default Image" class="testMediaItemPicture" />`;
            }
            const itemName = item.Name.replace(/'/g, "&apos;");
            // mediaHTML += `<div class="testMediavalue">${itemName}</div>`;
            mediaHTML += '<br></div>';
          }
          mediaHTML += '<br><p>Display Option to Add a category to this list, Example: Nintendo (Parent) N64, 3DS, GBC (Children)</p>'; // class="mediaitemcontainer"
          mediaHTML += '</div>'; // class="mediaitemcontainer"
          mediaHTML += '</div>'; // class="mediakeycontainer"
          return mediaHTML;
        }
        //-----------------------------------------------------------------------------------------

        const testMediaContainer = document.getElementById('testMediaContainer');
        const originalDimensionsCheckbox = document.getElementById('originalDimensionsCheckbox');
        // const originalDimensionsCheckbox = document.getElementById('originalDimensionsCheckbox');
        const gapCheckbox = document.getElementById('gapCheckbox');
        const wrapCheckbox = document.getElementById('wrapCheckbox');
        const borderCheckbox = document.getElementById('borderCheckbox');
        const floatingBorderCheckbox = document.getElementById('floatingBorderCheckbox');
        const floatingBorderRadiusCheckbox = document.getElementById('floatingBorderRadiusCheckbox');
        const floatingBorderGapCheckbox = document.getElementById('floatingBorderGapCheckbox');
        const otherNotes = document.getElementById('otherNotes');
        topAdjustment = 50;
        testMediaContainer.style.top = '' + topAdjustment + 'px';
        otherNotes.style.top = '' + topAdjustment + 'px';

        gapChange(); // Default values for wrap and gap
        wrapChange();

        //-----------------------------------------------------------------------------------------
        // CHECKBOX VALUES UPDATE THE STYLING WHEN CHANGED
        // Placed before the media elements are created, as the container controls the gaps, not the media itself
        // 
        //
        //
        gapCheckbox.addEventListener('change', gapChange);
        function gapChange() {
          if (gapCheckbox.checked) {
            gap = parseInt(document.getElementById('formGap').value);
            testMediaContainer.style.gap = `${gap}px`;
            document.getElementById("formGap").disabled = false;
            
          } else {
            testMediaContainer.style.gap = `0px`;
            gap = 0;
            document.getElementById("formGap").disabled = true;
          }
        }
        //-----------------------------------------------------------------------------------------

        //-----------------------------------------------------------------------------------------
        // GAP LISTENER
        //
        //
        //
        document.getElementById("formGap").addEventListener("input", function() {
          var inputValue = parseInt(this.value);
          if (inputValue < 0) { // Ensure the value does not go below 0
            this.value = 0;
            inputValue = 0; // Update inputValue as well
          }
          if (inputValue > 999) { // Check if the value is greater than 999 // If so, set it to 999
              this.value = 999;
              inputValue = 999; // Update inputValue as well
          }
          gap = inputValue; // Update the border variable with the input value
          gap = this.value !== null ? this.value : 0;
          this.value = gap;
          gapChange(); // apply to all media items
        });
        //-----------------------------------------------------------------------------------------

        //-----------------------------------------------------------------------------------------
        // WRAP LISTENER
        //
        //
        //
        wrapCheckbox.addEventListener('change', wrapChange);
        function wrapChange() {
          if (wrapCheckbox.checked) {
            wrap = 'wrap';
            testMediaContainer.style['flex-wrap'] = `${wrap}`;
            testMediaContainer.style.width = `auto`;
          } else {
            wrap = 'nowrap';
            testMediaContainer.style['flex-wrap'] = wrap;
            testMediaContainer.style.width = `max-content`;
          } // document.getElementById("wrapValue").textContent = `Wrap: ${wrap}`;
        }
        //-----------------------------------------------------------------------------------------
        
        //-----------------------------------------------------------------------------------------
        // Loop of all Media Elements
        //
        //
        //
        const scrollableContent = document.querySelector('.scrollableContent');
        const testMediaElements = document.querySelectorAll('.testMedia');
        const testMediaPictures = document.querySelectorAll('.testMediaItemPicture');

        // Functions that don't need to loop
        // You can set global variables here that apply to all media at once rather than repeating loops
        //-----------------------------------------------------------------------------------------
        updateAspectRatio();
        document.getElementById("formRatioWidth").addEventListener('change', updateAspectRatio);
        document.getElementById("formRatioHeight").addEventListener('change', updateAspectRatio);
        function updateAspectRatio() {
          console.log('Function: Aspect Ratio');
          width = parseInt(document.getElementById("formRatioWidth").value, 10);
          height = parseInt(document.getElementById("formRatioHeight").value, 10);
          ({width, height} = simplifyRatio(width, height));
          let setHeight = 200; // Fixed height
          ratio = width / height; // why does resetting the ratio effect the content?
          ratioedWidth = setHeight * ratio;
          document.getElementById("aspectRatioDisplay").textContent = `Aspect Ratio: ${width}:${height}`;
          updateMediaStyling(testMediaElements);
        }
        //-----------------------------------------------------------------------------------------
        // UPDATE WIDTH, HEIGHT, and ASPECT RATIO
        //
        //
        document.getElementById("formRatioWidth").addEventListener("input", updateWidth);
        function updateWidth() {
          console.log('Function: Update Width');
          var widthInput = document.getElementById("formRatioWidth");
          var widthValue = parseInt(widthInput.value);
          if (widthValue < 1) { // Ensure the width does not go below 1
            widthInput.value = 1;
            widthValue = 1; // Update widthValue as well
          }
          width = widthValue;
          updateAspectRatio();
        }

        document.getElementById("formRatioHeight").addEventListener("input", updateHeight);
        function updateHeight() {
          console.log('Function: Update Height');
          var heightInput = document.getElementById("formRatioHeight");
          var heightValue = parseInt(heightInput.value);
          if (heightValue < 1) { // Ensure the height does not go below 1
            heightInput.value = 1;
            heightValue = 1; // Update heightValue as well
          }
          height = heightValue; 
          updateAspectRatio();
        }

        updateOriginalDimensions();
        originalDimensionsCheckbox.addEventListener('change', updateOriginalDimensions);
        function updateOriginalDimensions() {
          console.log('Function: Update Original Dimensions');
          if (originalDimensionsCheckbox.checked) {
            // border = parseInt(document.getElementById("formBorder").value);
            document.getElementById("formRatioWidth").disabled = true;
            document.getElementById("formRatioHeight").disabled = true;
            width = 'auto';
            // document.getElementById("borderColorCheckbox").disabled = false;
            // testMedia.style.border = `${border}px solid ${borderColor}`;
          } else {
            // testMedia.style.border = `0px solid ${borderColor}`;
            // border = 0;
            // update width = the width in the box
            
            document.getElementById("formRatioWidth").disabled = false;
            document.getElementById("formRatioHeight").disabled = false;
            updateWidth();
            // document.getElementById("borderColorCheckbox").disabled = true;
          }
          updateMediaStyling(testMediaElements);
        }

        //-----------------------------------------------------------------------------------------
        // BORDERS SIZE
        //
        //
        //
        updateBorder();
        borderCheckbox.addEventListener('change', updateBorder);
        function updateBorder() {
          console.log('Function: Update Border');
          if (borderCheckbox.checked) {
            border = parseInt(document.getElementById("formBorder").value);
            document.getElementById("formBorder").disabled = false;
            document.getElementById("formBorderColor").disabled = false;
            document.getElementById("borderColorCheckbox").disabled = false;
            // testMedia.style.border = `${border}px solid ${borderColor}`;
          } else {
            // testMedia.style.border = `0px solid ${borderColor}`;
            border = 0;
            document.getElementById("formBorder").disabled = true;
            document.getElementById("formBorderColor").disabled = true;
            document.getElementById("borderColorCheckbox").disabled = true;
          }
          updateMediaStyling(testMediaElements);
        }

        document.getElementById("formBorder").addEventListener("input", function() {
          var inputValue = parseInt(this.value);
          if (inputValue < 0) {
            this.value = 0;
            inputValue = 0; // Update inputValue as well
          } // Check if the value is greater than 999
          if (inputValue > 999) { // If so, set it to 999
              this.value = 999;
              inputValue = 999; // Update inputValue as well
          } // Update the border variable with the input value
          border = inputValue;
          border = this.value !== null ? this.value : 0;
          this.value = border;
          updateBorder(); // apply to all media items
        });
        //-----------------------------------------------------------------------------------------

        //-----------------------------------------------------------------------------------------
        // BORDER COLOR
        //
        //
        borderColorCheckbox.addEventListener('change', updateBorderColor);
        function updateBorderColor() {
          console.log('Function: Update Border Color');
          if (borderColorCheckbox.checked) {
            borderColor = document.getElementById("formBorderColor").value;
            document.getElementById("formBorderColor").disabled = false;
            // testMedia.style.border = `${border}px solid ${borderColor}`;
          } else {
            borderColor = 'black';
            // testMedia.style.border = `${border}px solid ${borderColor}`;
            document.getElementById("formBorderColor").disabled = true;
          }
          updateMediaStyling(testMediaElements);
        }

        document.getElementById("formBorderColor").addEventListener("input", function() {
          var inputValue = this.value;
          borderColor = inputValue;
          borderColor = this.value !== null ? this.value : 'black';
          this.value = borderColor;
          updateBorderColor(); // apply to all media items
        });
        
        //-----------------------------------------------------------------------------------------

        //-----------------------------------------------------------------------------------------
        // BORDER RADIUS
        //
        //
        //
        updateBorderRadius();
        borderRadiusCheckbox.addEventListener('change', updateBorderRadius);
        function updateBorderRadius() {
          console.log('Function: Update Border Radius');
          if (borderRadiusCheckbox.checked) {
            borderRadius = parseInt(document.getElementById("formBorderRadius").value);
            document.getElementById("formBorderRadius").disabled = false;
            // testMedia.style['border-radius'] = `${borderRadius}px`;
          } else {
            // testMedia.style['border-radius'] = `0px`;
            borderRadius = 0;
            document.getElementById("formBorderRadius").disabled = true;
          }
          updateTestMediaPicturesSizes();
          updateMediaStyling(testMediaElements);
        }

        document.getElementById("formBorderRadius").addEventListener("input", function() {
          var inputValue = parseInt(this.value);
          if (inputValue < 0) {
            this.value = 0;
            inputValue = 0; // Update inputValue as well
          } // Check if the value is greater than 999
          if (inputValue > 999) { // If so, set it to 999
              this.value = 999;
              inputValue = 999; // Update inputValue as well
          } // Update the border variable with the input value
          borderRadius = inputValue;
          borderRadius = this.value !== null ? this.value : 0;
          this.value = borderRadius;
          updateBorderRadius(); // apply to all media items
        });
        //-----------------------------------------------------------------------------------------
        // STYLE EVERYTHING HERE DOWN BEFORE LAUNCHING AGAIN
        //-----------------------------------------------------------------------------------------
        // FLOATING BORDER FOR SELECTED MATERIAL
        // These hovered elements dont exist until the original is hovered, you can't reference them directly you have to use variables.
        //
        //
        //
        updateFloatingBorder();
        floatingBorderCheckbox.addEventListener('change', updateFloatingBorder);
        function updateFloatingBorder() {
          console.log('Function: Update Floating Border');
          if (floatingBorderCheckbox.checked) {
            floatingBorder = parseInt(document.getElementById("formFloatingBorder").value);
            document.getElementById("floatingBorderColorCheckbox").disabled = false;
            document.getElementById("floatingBorderRadiusCheckbox").disabled = false;
            document.getElementById("floatingBorderGapCheckbox").disabled = false;
            document.getElementById("formFloatingBorder").disabled = false;
            document.getElementById("formFloatingBorderColor").disabled = false;
            updateFloatingBorderRadius(); // instead call these functions to check whether the checkbox has these inputs enabled or disabled
            updateFloatingBorderGap();
            floatingBorderPadding = border;
          } else {
            floatingBorder = 0;
            document.getElementById("floatingBorderRadiusCheckbox").disabled = true;
            document.getElementById("floatingBorderGapCheckbox").disabled = true;
            document.getElementById("floatingBorderColorCheckbox").disabled = true;
            document.getElementById("formFloatingBorder").disabled = true;
            document.getElementById("formFloatingBorderColor").disabled = true;
            document.getElementById("formFloatingBorderRadius").disabled = true;
            document.getElementById("formFloatingBorderGap").disabled = true;
          }
          updateMediaStyling(testMediaElements);
        }

        document.getElementById("formFloatingBorder").addEventListener("input", function() {
          var inputValue = parseInt(this.value);
          if (inputValue < 0) {
            this.value = 0;
            inputValue = 0; // Update inputValue as well
          } // Check if the value is greater than 999
          if (inputValue > 999) { // If so, set it to 999
              this.value = 999;
              inputValue = 999; // Update inputValue as well
          } // Update the border variable with the input value
          floatingBorder = inputValue;
          floatingBorder = this.value !== null ? this.value : 0;
          this.value = floatingBorder;
          updateFloatingBorder(); // apply to all media items
        });
        //-----------------------------------------------------------------------------------------

        //-----------------------------------------------------------------------------------------
        // FLOATING BORDER COLOR
        // These hovered elements dont exist until the original is hovered, you can't reference them directly you have to use variables.
        //
        //
        updateFloatingBorderColor();
        floatingBorderColorCheckbox.addEventListener('change', updateFloatingBorderColor);
        function updateFloatingBorderColor() {
          console.log('Function: Update Floating Border Color');
          if (floatingBorderColorCheckbox.checked) {
            floatingBorderColor = document.getElementById("formFloatingBorderColor").value;
            document.getElementById("formFloatingBorderColor").disabled = false;
          } else {
            floatingBorderColor = 'black';
            document.getElementById("formFloatingBorderColor").disabled = true;
          } // document.getElementById("floatingBorderColorValue").textContent = `Floating Border Color Size: ${floatingBorderColor}`;
          updateMediaStyling(testMediaElements);
        }

        document.getElementById("formFloatingBorderColor").addEventListener("input", function() {
          var inputValue = this.value;
          floatingBorderColor = inputValue;
          floatingBorderColor = this.value !== null ? this.value : 'black';
          this.value = floatingBorderColor;
          updateFloatingBorderColor(); // apply to all media items
        });
        //-----------------------------------------------------------------------------------------

        //-----------------------------------------------------------------------------------------
        // FLOATING BORDER RADIUS FOR SELECTED MATERIAL
        // These hovered elements dont exist until the original is hovered, you can't reference them directly you have to use variables.
        //
        //
        updateFloatingBorderRadius();
        floatingBorderRadiusCheckbox.addEventListener('change', updateFloatingBorderRadius);
        function updateFloatingBorderRadius() {
          console.log('Function: Update Floating Border Radius');
          if (floatingBorderRadiusCheckbox.checked) {
            floatingBorderRadius = parseInt(document.getElementById("formFloatingBorderRadius").value);
            document.getElementById("formFloatingBorderRadius").disabled = false;
          } else {
            floatingBorderRadius = 0;
            document.getElementById("formFloatingBorderRadius").disabled = true;
          } // document.getElementById("floatingBorderRadiusValue").textContent = `Floating Border Radius: ${floatingBorderRadius}`;
          updateMediaStyling(testMediaElements);
        }
        
        document.getElementById("formFloatingBorderRadius").addEventListener("input", function() {
          var inputValue = parseInt(this.value);
          if (inputValue < 0) {
            this.value = 0;
            inputValue = 0; // Update inputValue as well
          } // Check if the value is greater than 999
          if (inputValue > 999) { // If so, set it to 999
              this.value = 999;
              inputValue = 999; // Update inputValue as well
          } // Update the border variable with the input value
          floatingBorderRadius = inputValue;
          floatingBorderRadius = this.value !== null ? this.value : 0;
          this.value = floatingBorderRadius;
          updateFloatingBorderRadius(); // apply to all media items
        });
        //-----------------------------------------------------------------------------------------

        //-----------------------------------------------------------------------------------------
        // FLOATING BORDER GAP FOR SELECTED MATERIAL
        // These hovered elements dont exist until the original is hovered, you can't reference them directly you have to use variables.
        //
        //
        updateFloatingBorderGap();
        floatingBorderGapCheckbox.addEventListener('change', updateFloatingBorderGap);
        function updateFloatingBorderGap() {
          console.log('Function: Update Floating Border Gap');
          if (floatingBorderGapCheckbox.checked) {
            floatingBorderGap = parseInt(document.getElementById("formFloatingBorderGap").value);
            document.getElementById("formFloatingBorderGap").disabled = false;
          } else {
            floatingBorderGap = 0;
            document.getElementById("formFloatingBorderGap").disabled = true;
          } // document.getElementById("floatingBorderGapValue").textContent = `Floating Border Gap Size: ${floatingBorderGap}`;
          updateMediaStyling(testMediaElements);
        }

        document.getElementById("formFloatingBorderGap").addEventListener("input", function() {
          var inputValue = parseInt(this.value);
          if (inputValue < 0) {
            this.value = 0;
            inputValue = 0; // Update inputValue as well
          } // Check if the value is greater than 999
          if (inputValue > 999) { // If so, set it to 999
              this.value = 999;
              inputValue = 999; // Update inputValue as well
          } // Update the border variable with the input value
          floatingBorderGap = inputValue;
          floatingBorderGap = this.value !== null ? this.value : 0;
          this.value = floatingBorderGap;
          updateFloatingBorderGap(); // apply to all media items
        });
        //-----------------------------------------------------------------------------------------

        function updateMediaStyling(testMediaElements) {
          updateTestMediaPicturesSizes();
          console.log('------------------------------');
          console.log('Function: Update Media Styling');
          testMediaElements.forEach(testMedia => {
            console.log('Function: Update Media Styling For Each Test Media Item: ' + functionCount);
            // functionCount += 1;
            // Set initial styling
            // Prevent user from setting odd numbered values for borders and padding, this will keep content evenly spaced when calculating positioning.  User can fix this by using bigger even numbers
            // This actually wouldn't help when we have to divide the values, 10 would become 5, 6 - 3, etc.

            // If ratioed media width exceeds box width, allow the new width to be set to preserve original dimensions: if the user wants to display media this way
            
            let setHeight = 200; // Fixed height for displayed media
            // If width = auto, then skip the ratioed width and set it to auto
            if (width === 'auto') {
              testMedia.style.width = `auto`;
              // testMediaPictures.style.width = `auto`;
              // testMedia.style.height = `${setHeight}px`;
            }
            else {
              ratio = width / height; // why does resetting the ratio effect the content?
              ratioedWidth = setHeight * ratio;
              testMedia.style.width = `${ratioedWidth}px`;
              // testMediaPictures.style.width = `${ratioedWidth}px`;
            }
            testMedia.style.height = `${setHeight}px`;

            
            // testMedia.style.width = `${ratioedWidth}px`;
            // testMedia.style.height = `${setHeight}px`;
            testMedia.style.border = `${border}px solid ${borderColor}`;
            testMedia.style['border-radius'] = `${borderRadius}px`;
            testMedia.style.zIndex = '2'; // Z-index for this element should be higher than its background border
            // Create separate styling depending on whether or not the media is hovered over by the mouse, Apply hoverable styling when mouse enters
            // I should allow any dimensions to be applied to the custom tab, while using a fixed height.
            // for new hovered border, include a "same size as gap" option
            testMedia.addEventListener('mouseenter', function() {
              // on mouse enter, play a sound effect.  This would be where to put it.
              // You could make a function that times the sound effects to have different pitches based on how many are hovered in a breif moment.  Musical selection menus.
              // POSSIBLE IDEA, I could create a copy of the media and position it in the middle to enlarge it without affecting the flex box order and layout: Enlarge selected media
              const rect = testMedia.getBoundingClientRect(); // Get position and size of original media item
              let scrollDistanceLeft = scrollableContent.scrollLeft;
              let scrollDistanceTop = scrollableContent.scrollTop;
              const sideMenuWidth = 200; // Width of the side menu
              const floatingBorderElement = testMedia.cloneNode(true);
              testMedia.style.zIndex = '5'; // Z-index for this element should be higher than its background border
              floatingBorderElement.classList.add('testMediaCopy'); // Add a distinct class name
              floatingBorderElement.style.position = 'absolute';
              floatingBorderElement.style.zIndex = '4';
              floatingBorderElement.style['background-color'] = 'transparent';
              floatingBorderElement.style.border = `${floatingBorder}` + `px solid ` + `${floatingBorderColor}`; // custom per user
              floatingBorderElement.style['border-radius'] = `${floatingBorderRadius}px`;
              // need to turn calculations into named variables to help showcase what is actually being done per value
              floatingBorderPadding = (border) + (floatingBorderGap) +  'px'; // - 2 custom per user border settings
              floatingBorderTopAdjustment = `${(rect.top) - (floatingBorder) - (floatingBorderGap) + (scrollDistanceTop) - topAdjustment - 360}px`; // Trying to place an element in the middle of an odd element will result in the value skewed to the left innacurately.
              floatingBorderLeftAdjustment = `${(rect.left) - (floatingBorder) - (floatingBorderGap) + (scrollDistanceLeft) - (sideMenuWidth) + 0}px`; // +1
              floatingBorderElement.style.padding = floatingBorderPadding; // - 2 custom per user border settings
              floatingBorderElement.style.top = floatingBorderTopAdjustment; // Trying to place an element in the middle of an odd element will result in the value skewed to the left innacurately.
              floatingBorderElement.style.left = floatingBorderLeftAdjustment; // +1
              testMedia.parentNode.appendChild(floatingBorderElement);
            });
            
            //-----------------------------------------------------------------------------------------
            // These listeners are placed after the media conatiners and copy backgrounds have been identified.
            // Revert back to default non-hoverable styling when mouse leaves
            testMedia.addEventListener('mouseleave', function() {
              testMedia.style.zIndex = '2'; // Z-index for this element should be higher than its background border
              const copies = testMedia.parentNode.querySelectorAll('.testMediaCopy');
              copies.forEach(copy => {
                copy.parentNode.removeChild(copy);
              });
            });
          });
        }
        // everything within this for each loop is repeated per item
        // need to move alot of these functions outside of this loop to prevent refiring 74 times over

        // const testMediaPictures = document.querySelectorAll('.testMediaItemPicture');

        //-----------------------------------------------------------------------------------------
        //update the image sizes to match the content / border etc.
          function updateTestMediaPicturesSizes() {
            console.log('Function: updateTestMediaPicturesSizes');
            testMediaPictures.forEach(testMediaPicture => {
            // Assuming there's a one-to-one correspondence between testMedia and testMediaPictures
              let setHeight = 200; // Fixed height
              if (width === 'auto') {
                // testMedia.style.width = `auto`;
                testMediaPicture.style.width = `auto`;
                testMediaPicture.style.height = `${setHeight}px`;
              }
              else {
                ratio = width / height; // why does resetting the ratio effect the content?
                ratioedWidth = setHeight * ratio;
                testMediaPicture.style.width = `${ratioedWidth}px`;
                // testMediaPictures.style.width = `${ratioedWidth}px`;
              }
              testMediaPicture.style.height = `${setHeight}px`;
              ratio = width / height; // why does resetting the ratio effect the content?
              ratioedWidth = setHeight * ratio;
              testMediaPicture.style.width = `${ratioedWidth}px`;
              testMediaPicture.style.height = `${setHeight}px`;
              // testMediaPicture.style.width = width;
              // testMediaPicture.style.height = height;
              testBorderRadius = borderRadius - border - 1;
              if (testBorderRadius < 0) {
                testBorderRadius = 0;
              }
              testMediaPicture.style['border-radius'] = testBorderRadius + `px`;
          });
        }
        
        //-----------------------------------------------------------------------------------------

        //-----------------------------------------------------------------------------------------
        // BACK BUTTON
        //
        //
        const backContainer = document.getElementById('backContainer2');
        backContainer.addEventListener('click', function () {
          const scrollableContentDiv = document.querySelector('.scrollableContent');
          if (scrollableContentDiv) {
            scrollableContentDiv.scrollTop = 0;
          }
          editCategorySettings.style.display = 'none';
          // Clear previous content when going back
          editCategorySettings.innerHTML = '';
          // showTagSettingsDiv.style.display = 'block';
          mediaDisplayDiv.style.display = 'block';
          // showTagSettingsDiv.style.display = 'none';
          // showTagSettingsDiv.innerHTML = '';
        });
        //-----------------------------------------------------------------------------------------
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