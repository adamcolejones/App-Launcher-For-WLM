// export function editCategorySettings(tag, jsondata) {
//     const selectedTag = jsondata.Tags.find(item => item.Name === tag);
//     const editCategorySettings = document.getElementById('editCategorySettings');
//     // const showTagSettingsDiv = document.getElementById('showTagSettings');
//     const mediaDisplayDiv = document.getElementById('mediaDisplay');
//     const scrollableContentDiv = document.querySelector('.scrollableContent'); // Scroll to the top of the page
//     if (scrollableContentDiv) {
//         scrollableContentDiv.scrollTop = 0;
//     }
//     editCategorySettings.style.display = 'block'; // display new content for the edit page
//     mediaDisplayDiv.style.display = 'none';
//     // showTagSettingsDiv.style.display = 'none'; // hide current div, show new edit category div
//     border = selectedTag.Border;
//     borderRadius = selectedTag.BorderRadius;
//     borderColor = selectedTag.BorderColor;
//     // Create a border color default when the checkbox is disabled.
//     // create a border color disabler for input field and for the hovered border as well.
//     wrap = selectedTag.Wrap;
//     gap = selectedTag.Gap;
//     floatingBorder = selectedTag.FloatingBorder;
//     floatingBorderColor = selectedTag.FloatingBorderColor;
//     floatingBorderRadius = selectedTag.FloatingBorderRadius;
//     floatingBorderGap = selectedTag.FloatingBorderGap;
//     var height = selectedTag.Height;
//     var width = selectedTag.Width;
//     ({width, height} = simplifyRatio(width, height));
//     // there needs to be a default that sets the height and width based on the content provided. In the event user wants different sized media placed together. 
//     // If user saved 1920 x 1080 as the height and width of the ratio, user will only see the simplified version after saving
//     // I will need to make a separate border radius for the floating border and then a checkbox that says to match existing border.  
//     // Also need a button that sets the size and gap of the floating border to be automatically sized and centered.

    

//     //-----------------------------------------------------------------------------------------
//     // Greatest Common Denominator for height and width ratios of media content
//     //
//     //
//     function simplifyRatio(width, height) {
//       let gcd = findGCD(width, height);
//       return {width: width / gcd, height: height / gcd};
//     }

//     function findGCD(a, b) { // Euclidean algorithm for finding GCD
//       while (b !== 0) {
//           let temp = b;
//           b = a % b;
//           a = temp;
//       }
//       return a;
//     }
//     //-----------------------------------------------------------------------------------------

//     //-----------------------------------------------------------------------------------------
//     // Shows the editable settings for an individual category
//     editCategorySettings.innerHTML += `
//       <div id="backContainer2">
//         <img src="assets/app/back.svg">
//         <div>Back</div>
//       </div>


//       <div class="settingsContainer">
//         <p>Category Name: ${selectedTag.Name}</p>
//         <br>

//         <p>ASPECT RATIO / POSITION</p>
//         <div class="settingsOptionContainer">
//           <div class="settingsOption">
//             <p id="aspectRatioDisplay">Aspect Ratio: ${width}:${height}</p>
//             <input type="number" id="formRatioWidth" name="formRatioWidth" value=${width}>
//             <input type="number" id="formRatioHeight" name="formRatioHeight" value=${height}>
//           </div>
//           <div class="settingsOption">
//             <p id="gapValue">Gap</p><input id="gapCheckbox" type="checkbox" checked>
//             <input type="number" id="formGap" name="formGap" value=${gap}>
//           </div>
//           <div class="settingsOption">
//             <p id="wrapValue">Wrap</p><input id="wrapCheckbox" type="checkbox" checked>
//           </div>
//         </div>
//         <br>

//         <p>BORDER</p>
//         <div class="settingsOptionContainer">
//           <div class="settingsOption">
//             <p id="borderValue">Size</p><input id="borderCheckbox" type="checkbox" checked>
//             <input type="number" id="formBorder" name="formBorder" value=${border}>
//           </div>
//           <div class="settingsOption">
//             <p id="borderColorValue">Color</p><input id="borderColorCheckbox" type="checkbox" checked>
//             <input type="text" id="formBorderColor" name="formBorderColor" value=${borderColor}>
//           </div>
//           <div class="settingsOption">
//             <p id="borderRadiusValue">Radius</p><input id="borderRadiusCheckbox" type="checkbox" checked>
//             <input type="number" id="formBorderRadius" name="formBorderRadius" value=${borderRadius}>
//           </div>
//         </div>
//         <br>

//         <p>HOVERED BORDER</p>
//         <div class="settingsOptionContainer">
//           <div class="settingsOption">
//             <p id="floatingBorderValue">Size</p><input id="floatingBorderCheckbox" type="checkbox" checked>
//             <input type="number" id="formFloatingBorder" name="formFloatingBorder" value=${floatingBorder}>
//           </div>
//           <div class="settingsOption">
//             <p id="floatingBorderColorValue">Color</p><input id="floatingBorderColorCheckbox" type="checkbox" checked>
//             <input type="text" id="formFloatingBorderColor" name="formFloatingBorderColor" value=${floatingBorderColor}>
//           </div>
//           <div class="settingsOption">
//             <p id="floatingBorderRadiusValue">Radius</p><input id="floatingBorderRadiusCheckbox" type="checkbox" checked>
//             <input type="number" id="formFloatingBorderRadius" name="formFloatingBorderRadius" value=${floatingBorderRadius}>
//           </div>
//           <div class="settingsOption">
//             <p id="floatingBorderGapValue">Gap</p><input id="floatingBorderGapCheckbox" type="checkbox" checked>
//             <input type="number" id="formFloatingBorderGap" name="formFloatingBorderGap" value=${floatingBorderGap}>
//           </div>
//         </div>
//         <br>

//         <p>THEMES</p>
//         <div class="settingsOptionContainer">
//           <div class="settingsOption">
//             <p id="test">Startup Video</p><input id="test" type="checkbox" checked>
//             <input type="number" id="test" name="test" value=${border}>
//           </div>
//           <div class="settingsOption">
//             <p id="test">Background Visual</p><input id="test" type="checkbox" checked>
//             <input type="text" id="test" name="test" value=${border}>
//           </div>
//           <div class="settingsOption">
//             <p id="test">Background Audio</p><input id="test" type="checkbox" checked>
//             <input type="text" id="test" name="test" value=${border}>
//           </div>
//           <div class="settingsOption">
//             <p id="test">Selection Sound</p><input id="test" type="checkbox" checked>
//             <input type="number" id="test" name="test" value=${border}>
//           </div>
//           <div class="settingsOption">
//             <p id="test">Font</p><input id="test" type="checkbox" checked>
//             <input type="number" id="test" name="test" value=${border}>
//           </div>
//         </div>
//         <br>

//         <p>RESTORE DEFAULT SETTINGS</p>
//         <p>SAVE CHANGES</p>

//       </div>
      

//       <div id="otherNotes">
//         <p>------------------------------------------------------------------------------------</p>
//         <p>CATEGORY SETTINGS</p>
//         <p>------------------------------------------------------------------------------------</p>
//         <p>Intro to Category, Video / Music / Transitions</p>
//         <p>Ability to Delete entire Category, the delete option should only be available through an enabled setting with password</p>
//         <p>Selections for common ratios</p>
//         <p>SNES: 2100x1534 Gamecube: 1158x1617? PSP: 1146x1980 Switch: 872x1420 N64: 2100x1532 DS: 1532x1370 3DS: 640x570? (Maybe double to 1280x1140 for a better quality size) NES: 1534x2100</p>
//         <p>File Path to Transition Media and subsequent media</p>
//         <p>Layouts: Nintendo Switch, 3DS, Wiiu, Wii</p>
//         <p>I need to save a default value in the event user wants every category to look the same without setting them all</p>
//         <p>Give the user the ability to add custom values ot the json file, if user wants to create a Date or other text value, that should be here (Speedruns)</p>
//         <p>Custom values might be easier to use if they are saved with the actual media in question and not the tag / category</p>
//         <p>Hoverable Options</p>
//         <p>Create miniature display for the user's content to show setting changes</p>
//         <p></p>
//         <p></p>
//         <p></p>
//         <p></p>
//         <br>
//         <p>------------------------------------------------------------------------------------</p>
//         <p>UNIVERSAL SETTINGS</p>
//         <p>------------------------------------------------------------------------------------</p>
//         <p>Side Bar Location / Style</p>
//         <p>Give user the option for the side bar option to disappear after a moment, then wake up or display the option pressing the assigned button</p>
//         <p>Consider the timing of switching between categories, some transition scenes may take up more time than they need to.  Should there be an option to skip directly to a cat and skip other transitions?</p>
//         <p></p>
//         <p></p>
//         <p></p>
//       </div>
//     `;
//     //-----------------------------------------------------------------------------------------

//     //-----------------------------------------------------------------------------------------
//     const mediaData = jsondata.Media || [];
//     // If Tag selected is all, show all media data.  If not, only show media data where the media entries include the selected Tag.
//     const items = tag === 'All' ? mediaData : mediaData.filter(item => item.Tags.includes(tag));
//     // console.log(items);
//     editCategorySettings.innerHTML += editableMedia(items);
//     function editableMedia(data) {
//       if (data.length === 0) {
//         return '<p>No data available.</p>';
//       }
//       let mediaHTML = '<div class="mediadata">';
//       // Collect all unique keys (field names) from the array
//       const allKeys = new Set();
//       for (const item of data) {
//         for (const key in item) {
//           allKeys.add(key);
//         }
//       }
//       mediaHTML += '<div id="testMediaContainer">';
//       // Create data rows
//       for (const item of data) {
//         mediaHTML += `<div class="testMedia" data-item='${JSON.stringify(item).replace(/'/g, "&apos;")}'>`;
//         if (item.id && item.Image == true) {
//           const imageUrl = item.id ? `assets/media/${item.id}.png` : 'assets/media/default.png';
//           mediaHTML += `<img src="${imageUrl}" alt="Image ${item.id}" class="testMediaItemPicture" />`;
//         } else {
//           const defaultImageUrl = 'assets/media/default.png';
//           mediaHTML += `<img src="${defaultImageUrl}" alt="Default Image" class="testMediaItemPicture" />`;
//         }
//         const itemName = item.Name.replace(/'/g, "&apos;");
//         mediaHTML += `<div class="testMediavalue">${itemName}</div>`;
//         mediaHTML += '<br></div>';
//       }
//       mediaHTML += '<br><p>Display Option to Add a category to this list, Example: Nintendo (Parent) N64, 3DS, GBC (Children)</p>'; // class="mediaitemcontainer"
//       mediaHTML += '</div>'; // class="mediaitemcontainer"
//       mediaHTML += '</div>'; // class="mediakeycontainer"
//       return mediaHTML;
//     }
//     //-----------------------------------------------------------------------------------------

    

//     // Here I am taking Data values from JSON and implementing them into CSS through JS
//     const testMediaContainer = document.getElementById('testMediaContainer');
//     const gapCheckbox = document.getElementById('gapCheckbox');
//     const wrapCheckbox = document.getElementById('wrapCheckbox');
//     const borderCheckbox = document.getElementById('borderCheckbox');
//     const floatingBorderCheckbox = document.getElementById('floatingBorderCheckbox');
//     const floatingBorderRadiusCheckbox = document.getElementById('floatingBorderRadiusCheckbox');
//     const floatingBorderGapCheckbox = document.getElementById('floatingBorderGapCheckbox');
//     const otherNotes = document.getElementById('otherNotes');
//     topAdjustment = 600;
//     testMediaContainer.style.top = '' + topAdjustment + 'px';
//     otherNotes.style.top = '' + topAdjustment + 'px';

//     gapChange(); // Default values for wrap and gap
//     wrapChange();

//     //-----------------------------------------------------------------------------------------
//     // CHECKBOX VALUES UPDATE THE STYLING WHEN CHANGED
//     // Placed before the media elements are created, as the container controls the gaps, not the media itself
//     // 
//     //
//     //
//     gapCheckbox.addEventListener('change', gapChange);
//     function gapChange() {
//       if (gapCheckbox.checked) {
//         gap = parseInt(document.getElementById('formGap').value);
//         testMediaContainer.style.gap = `${gap}px`;
//         document.getElementById("formGap").disabled = false;
        
//       } else {
//         testMediaContainer.style.gap = `0px`;
//         gap = 0;
//         document.getElementById("formGap").disabled = true;
//       }
//     }
//     //-----------------------------------------------------------------------------------------

//     //-----------------------------------------------------------------------------------------
//     // GAP LISTENER
//     //
//     //
//     //
//     document.getElementById("formGap").addEventListener("input", function() {
//       var inputValue = parseInt(this.value);
//       if (inputValue < 0) { // Ensure the value does not go below 0
//         this.value = 0;
//         inputValue = 0; // Update inputValue as well
//       }
//       if (inputValue > 999) { // Check if the value is greater than 999 // If so, set it to 999
//           this.value = 999;
//           inputValue = 999; // Update inputValue as well
//       }
//       gap = inputValue; // Update the border variable with the input value
//       gap = this.value !== null ? this.value : 0;
//       this.value = gap;
//       gapChange(); // apply to all media items
//     });
//     //-----------------------------------------------------------------------------------------

//     //-----------------------------------------------------------------------------------------
//     // WRAP LISTENER
//     //
//     //
//     //
//     wrapCheckbox.addEventListener('change', wrapChange);
//     function wrapChange() {
//       if (wrapCheckbox.checked) {
//         wrap = 'wrap';
//         testMediaContainer.style['flex-wrap'] = `${wrap}`;
//       } else {
//         wrap = 'nowrap';
//         testMediaContainer.style['flex-wrap'] = wrap;
//       } // document.getElementById("wrapValue").textContent = `Wrap: ${wrap}`;
//     }
//     //-----------------------------------------------------------------------------------------
    
//     //-----------------------------------------------------------------------------------------
//     // Loop of all Media Elements
//     //
//     //
//     //
//     const testMediaElements = document.querySelectorAll('.testMedia');
    
    
//     const scrollableContent = document.querySelector('.scrollableContent');
//     testMediaElements.forEach(testMedia => {
//       // Set initial styling
//       // Prevent user from setting odd numbered values for borders and padding, this will keep content evenly spaced when calculating positioning.  User can fix this by using bigger even numbers
//       // This actually wouldn't help when we have to divide the values, 10 would become 5, 6 - 3, etc.
//       updateAspectRatio();
//       updateBorder();
//       updateBorderColor();
//       updateBorderRadius();
//       updateFloatingBorder();
//       updateFloatingBorderColor();
//       updateFloatingBorderRadius();
//       updateFloatingBorderGap();
      
//       let setHeight = 200; // Fixed height for displayed media
//       ratio = width / height; // why does resetting the ratio effect the content?
//       ratioedWidth = setHeight * ratio;
//       testMedia.style.width = `${ratioedWidth}px`;
//       testMedia.style.height = `${setHeight}px`;

//       // console.log('width: ' + width);
//       // console.log('height: ' + height);
//       // console.log('ratio: ' + ratio);
//       // console.log('ratioedWidth: ' + ratioedWidth);
      
//       // testMedia.style.width = `${width}px`;
//       // testMedia.style.height = `${height}px`;
//       testMedia.style.border = `${border}px solid ${borderColor}`;
//       testMedia.style['border-radius'] = `${borderRadius}px`;
//       testMedia.style.zIndex = '2'; // Z-index for this element should be higher than its background border
//       // Create separate styling depending on whether or not the media is hovered over by the mouse, Apply hoverable styling when mouse enters
//       // I should allow any dimensions to be applied to the custom tab, while using a fixed height.
//       // for new hovered border, include a "same size as gap" option
//       testMedia.addEventListener('mouseenter', function() {
//         // on mouse enter, play a sound effect.  This would be where to put it.
//         // You could make a function that times the sound effects to have different pitches based on how many are hovered in a breif moment.  Musical selection menus.
//         // POSSIBLE IDEA, I could create a copy of the media and position it in the middle to enlarge it without affecting the flex box order and layout: Enlarge selected media
//         // console.log("Width: " + window.innerWidth + ", Height: " + window.innerHeight);
//         const rect = testMedia.getBoundingClientRect(); // Get position and size of original media item
//         let scrollDistanceLeft = scrollableContent.scrollLeft;
//         let scrollDistanceTop = scrollableContent.scrollTop;
//         const sideMenuWidth = 200; // Width of the side menu
//         const floatingBorderElement = testMedia.cloneNode(true);
//         testMedia.style.zIndex = '5'; // Z-index for this element should be higher than its background border
//         floatingBorderElement.classList.add('testMediaCopy'); // Add a distinct class name
//         floatingBorderElement.style.position = 'absolute';
//         floatingBorderElement.style.zIndex = '4';
//         floatingBorderElement.style['background-color'] = 'transparent';
//         floatingBorderElement.style.border = `${floatingBorder}` + `px solid ` + `${floatingBorderColor}`; // custom per user
//         floatingBorderElement.style['border-radius'] = `${floatingBorderRadius}px`;
//         // need to turn calculations into named variables to help showcase what is actually being done per value
//         // let gapMiddle = Math.ceil(selectedTag.Gap / 4); // round up to prevent decimal padding.  Round up keeps border closer to element, down spreads it out further
//         floatingBorderPadding = (border) + (floatingBorderGap) +  'px'; // - 2 custom per user border settings
//         floatingBorderTopAdjustment = `${(rect.top) - (floatingBorder) - (floatingBorderGap) + (scrollDistanceTop) - topAdjustment - 414}px`; // Trying to place an element in the middle of an odd element will result in the value skewed to the left innacurately.
//         floatingBorderLeftAdjustment = `${(rect.left) - (floatingBorder) - (floatingBorderGap) + (scrollDistanceLeft) - (sideMenuWidth) + 0}px`; // +1
//         // console.log('---');
//         // console.log('floatingBorderPadding ' + floatingBorderPadding);
//         // console.log('floatingBorderTopAdjustment ' + floatingBorderTopAdjustment);
//         // console.log('floatingBorderLeftAdjustment ' + floatingBorderLeftAdjustment);
        
//         floatingBorderElement.style.padding = floatingBorderPadding; // - 2 custom per user border settings
//         floatingBorderElement.style.top = floatingBorderTopAdjustment; // Trying to place an element in the middle of an odd element will result in the value skewed to the left innacurately.
//         floatingBorderElement.style.left = floatingBorderLeftAdjustment; // +1
//         testMedia.parentNode.appendChild(floatingBorderElement);
//       });
      
//       //-----------------------------------------------------------------------------------------
//       // These listeners are placed after the media conatiners and copy backgrounds have been identified.
//       // Revert back to default non-hoverable styling when mouse leaves
//       testMedia.addEventListener('mouseleave', function() {
//         updateBorder();
//         testMedia.style.zIndex = '2'; // Z-index for this element should be higher than its background border
//         const copies = testMedia.parentNode.querySelectorAll('.testMediaCopy');
//         copies.forEach(copy => {
//           copy.parentNode.removeChild(copy);
//         });
//       });
//       //-----------------------------------------------------------------------------------------

//       //-----------------------------------------------------------------------------------------
//       // UPDATE WIDTH, HEIGHT, and ASPECT RATIO
//       //
//       //
//       document.getElementById("formRatioWidth").addEventListener("input", updateWidth);
//       function updateWidth() {
//         var widthInput = document.getElementById("formRatioWidth");
//         var widthValue = parseInt(widthInput.value);
//         if (widthValue < 1) { // Ensure the width does not go below 1
//           widthInput.value = 1;
//           widthValue = 1; // Update widthValue as well
//         }
//         width = widthValue;
//         updateAspectRatio();
//       }

//       document.getElementById("formRatioHeight").addEventListener("input", updateHeight);
//       function updateHeight() {
//         var heightInput = document.getElementById("formRatioHeight");
//         var heightValue = parseInt(heightInput.value);
//         if (heightValue < 1) { // Ensure the height does not go below 1
//           heightInput.value = 1;
//           heightValue = 1; // Update heightValue as well
//         }
//         height = heightValue; 
//         updateAspectRatio();
//       }
      
//       document.getElementById("formRatioWidth").addEventListener('change', updateAspectRatio);
//       document.getElementById("formRatioHeight").addEventListener('change', updateAspectRatio);
//       function updateAspectRatio() {
//         width = parseInt(document.getElementById("formRatioWidth").value, 10);
//         height = parseInt(document.getElementById("formRatioHeight").value, 10);
//         ({width, height} = simplifyRatio(width, height));
//         let setHeight = 200; // Fixed height
//         ratio = width / height; // why does resetting the ratio effect the content?
//         ratioedWidth = setHeight * ratio;
//         testMedia.style.width = `${ratioedWidth}px`;
//         testMedia.style.height = `${setHeight}px`;
//         document.getElementById("aspectRatioDisplay").textContent = `Aspect Ratio: ${width}:${height}`;
//         // console.log('width: ' + width);
//         // console.log('height: ' + height);
//         // console.log('ratio: ' + ratio);
//         // console.log('ratioedWidth: ' + ratioedWidth);
//       }
//       //-----------------------------------------------------------------------------------------

//       //-----------------------------------------------------------------------------------------
      

//       //-----------------------------------------------------------------------------------------
//       // BORDERS SIZE
//       //
//       //
//       //
//       borderCheckbox.addEventListener('change', updateBorder);
//       function updateBorder() {
//         if (borderCheckbox.checked) {
//           border = parseInt(document.getElementById("formBorder").value);
//           document.getElementById("formBorder").disabled = false;
//           document.getElementById("formBorderColor").disabled = false;
//           document.getElementById("borderColorCheckbox").disabled = false;
//           testMedia.style.border = `${border}px solid ${borderColor}`;
//         } else {
//           testMedia.style.border = `0px solid ${borderColor}`;
//           border = 0;
//           document.getElementById("formBorder").disabled = true;
//           document.getElementById("formBorderColor").disabled = true;
//           document.getElementById("borderColorCheckbox").disabled = true;
//         }
//         // updateTestMediaPicturesSizes();
//       }

//       document.getElementById("formBorder").addEventListener("input", function() {
//         var inputValue = parseInt(this.value);
//         if (inputValue < 0) {
//           this.value = 0;
//           inputValue = 0; // Update inputValue as well
//         } // Check if the value is greater than 999
//         if (inputValue > 999) { // If so, set it to 999
//             this.value = 999;
//             inputValue = 999; // Update inputValue as well
//         } // Update the border variable with the input value
//         border = inputValue;
//         border = this.value !== null ? this.value : 0;
//         this.value = border;
//         updateBorder(); // apply to all media items
//       });
//       //-----------------------------------------------------------------------------------------

//       //-----------------------------------------------------------------------------------------
//       // BORDER COLOR
//       //
//       //
//       borderColorCheckbox.addEventListener('change', updateBorderColor);
//         function updateBorderColor() {
//           if (borderColorCheckbox.checked) {
//             borderColor = document.getElementById("formBorderColor").value;
//             document.getElementById("formBorderColor").disabled = false;
//             testMedia.style.border = `${border}px solid ${borderColor}`;
//           } else {
//             borderColor = 'black';
//             testMedia.style.border = `${border}px solid ${borderColor}`;
//             document.getElementById("formBorderColor").disabled = true;
//           }
//         }

//         document.getElementById("formBorderColor").addEventListener("input", function() {
//           var inputValue = this.value;
//           borderColor = inputValue;
//           borderColor = this.value !== null ? this.value : 'black';
//           this.value = borderColor;
//           updateBorderColor(); // apply to all media items
//         });
      
//       //-----------------------------------------------------------------------------------------

//       //-----------------------------------------------------------------------------------------
//       // BORDER RADIUS
//       //
//       //
//       //
//       borderRadiusCheckbox.addEventListener('change', updateBorderRadius);
//       function updateBorderRadius() {
//         if (borderRadiusCheckbox.checked) {
//           borderRadius = parseInt(document.getElementById("formBorderRadius").value);
//           document.getElementById("formBorderRadius").disabled = false;
//           testMedia.style['border-radius'] = `${borderRadius}px`;
//         } else {
//           testMedia.style['border-radius'] = `0px`;
//           borderRadius = 0;
//           document.getElementById("formBorderRadius").disabled = true;
//         }
//         // updateTestMediaPicturesSizes();
//       }

//       document.getElementById("formBorderRadius").addEventListener("input", function() {
//         var inputValue = parseInt(this.value);
//         if (inputValue < 0) {
//           this.value = 0;
//           inputValue = 0; // Update inputValue as well
//         } // Check if the value is greater than 999
//         if (inputValue > 999) { // If so, set it to 999
//             this.value = 999;
//             inputValue = 999; // Update inputValue as well
//         } // Update the border variable with the input value
//         borderRadius = inputValue;
//         borderRadius = this.value !== null ? this.value : 0;
//         this.value = borderRadius;
//         updateBorderRadius(); // apply to all media items
//       });
//       //-----------------------------------------------------------------------------------------

//       //-----------------------------------------------------------------------------------------
//       // UPDATE IMAGE BORDER RADIUS WHEN BASE BORDER OR BORDER RADIUS IS UPDATED 
//       // limit the border radius to non negative numbers
//       // function updateTestMediaPicturesSizes() {
//       //   testMediaElements.forEach((testMedia, index) => {
//       //     // Assuming there's a one-to-one correspondence between testMedia and testMediaPictures
//       //     const testMediaPicture = testMediaPictures[index];
//       //     if (testMediaPicture) { // Check if the corresponding picture exists
//       //       const width = testMedia.style.width;
//       //       const height = testMedia.style.height;
//       //       testMediaPicture.style.width = width;
//       //       testMediaPicture.style.height = height;
//       //     }
//       //   });
//       // }
//       //-----------------------------------------------------------------------------------------

//       //-----------------------------------------------------------------------------------------
//       // FLOATING BORDER FOR SELECTED MATERIAL
//       // These hovered elements dont exist until the original is hovered, you can't reference them directly you have to use variables.
//       //
//       //
//       //
//       floatingBorderCheckbox.addEventListener('change', updateFloatingBorder);
//       function updateFloatingBorder() {
//         if (floatingBorderCheckbox.checked) {
//           floatingBorder = parseInt(document.getElementById("formFloatingBorder").value);
//           document.getElementById("floatingBorderColorCheckbox").disabled = false;
//           document.getElementById("floatingBorderRadiusCheckbox").disabled = false;
//           document.getElementById("floatingBorderGapCheckbox").disabled = false;
//           document.getElementById("formFloatingBorder").disabled = false;
//           document.getElementById("formFloatingBorderColor").disabled = false;
//           updateFloatingBorderRadius(); // instead call these functions to check whether the checkbox has these inputs enabled or disabled
//           updateFloatingBorderGap();
//           floatingBorderPadding = border;
//         } else {
//           floatingBorder = 0;
//           document.getElementById("floatingBorderRadiusCheckbox").disabled = true;
//           document.getElementById("floatingBorderGapCheckbox").disabled = true;
//           document.getElementById("floatingBorderColorCheckbox").disabled = true;
//           document.getElementById("formFloatingBorder").disabled = true;
//           document.getElementById("formFloatingBorderColor").disabled = true;
//           document.getElementById("formFloatingBorderRadius").disabled = true;
//           document.getElementById("formFloatingBorderGap").disabled = true;
//         }
//       }

//       document.getElementById("formFloatingBorder").addEventListener("input", function() {
//         var inputValue = parseInt(this.value);
//         if (inputValue < 0) {
//           this.value = 0;
//           inputValue = 0; // Update inputValue as well
//         } // Check if the value is greater than 999
//         if (inputValue > 999) { // If so, set it to 999
//             this.value = 999;
//             inputValue = 999; // Update inputValue as well
//         } // Update the border variable with the input value
//         floatingBorder = inputValue;
//         floatingBorder = this.value !== null ? this.value : 0;
//         this.value = floatingBorder;
//         updateFloatingBorder(); // apply to all media items
//       });
//       //-----------------------------------------------------------------------------------------

//       //-----------------------------------------------------------------------------------------
//       // FLOATING BORDER COLOR
//       // These hovered elements dont exist until the original is hovered, you can't reference them directly you have to use variables.
//       //
//       //
//       floatingBorderColorCheckbox.addEventListener('change', updateFloatingBorderColor);
//       function updateFloatingBorderColor() {
//         if (floatingBorderColorCheckbox.checked) {
//           floatingBorderColor = document.getElementById("formFloatingBorderColor").value;
//           document.getElementById("formFloatingBorderColor").disabled = false;
//         } else {
//           floatingBorderColor = 'black';
//           document.getElementById("formFloatingBorderColor").disabled = true;
//         } // document.getElementById("floatingBorderColorValue").textContent = `Floating Border Color Size: ${floatingBorderColor}`;
//       }

//       document.getElementById("formFloatingBorderColor").addEventListener("input", function() {
//         var inputValue = this.value;
//         floatingBorderColor = inputValue;
//         floatingBorderColor = this.value !== null ? this.value : 'black';
//         this.value = floatingBorderColor;
//         updateFloatingBorderColor(); // apply to all media items
//       });
//       //-----------------------------------------------------------------------------------------

//       //-----------------------------------------------------------------------------------------
//       // FLOATING BORDER RADIUS FOR SELECTED MATERIAL
//       // These hovered elements dont exist until the original is hovered, you can't reference them directly you have to use variables.
//       //
//       //
//       floatingBorderRadiusCheckbox.addEventListener('change', updateFloatingBorderRadius);
//       function updateFloatingBorderRadius() {
//         if (floatingBorderRadiusCheckbox.checked) {
//           floatingBorderRadius = parseInt(document.getElementById("formFloatingBorderRadius").value);
//           document.getElementById("formFloatingBorderRadius").disabled = false;
//         } else {
//           floatingBorderRadius = 0;
//           document.getElementById("formFloatingBorderRadius").disabled = true;
//         } // document.getElementById("floatingBorderRadiusValue").textContent = `Floating Border Radius: ${floatingBorderRadius}`;
//       }
      
//       document.getElementById("formFloatingBorderRadius").addEventListener("input", function() {
//         var inputValue = parseInt(this.value);
//         if (inputValue < 0) {
//           this.value = 0;
//           inputValue = 0; // Update inputValue as well
//         } // Check if the value is greater than 999
//         if (inputValue > 999) { // If so, set it to 999
//             this.value = 999;
//             inputValue = 999; // Update inputValue as well
//         } // Update the border variable with the input value
//         floatingBorderRadius = inputValue;
//         floatingBorderRadius = this.value !== null ? this.value : 0;
//         this.value = floatingBorderRadius;
//         updateFloatingBorderRadius(); // apply to all media items
//       });
//       //-----------------------------------------------------------------------------------------

//       //-----------------------------------------------------------------------------------------
//       // FLOATING BORDER GAP FOR SELECTED MATERIAL
//       // These hovered elements dont exist until the original is hovered, you can't reference them directly you have to use variables.
//       //
//       //
//       floatingBorderGapCheckbox.addEventListener('change', updateFloatingBorderGap);
//       function updateFloatingBorderGap() {
//         if (floatingBorderGapCheckbox.checked) {
//           floatingBorderGap = parseInt(document.getElementById("formFloatingBorderGap").value);
//           document.getElementById("formFloatingBorderGap").disabled = false;
//         } else {
//           floatingBorderGap = 0;
//           document.getElementById("formFloatingBorderGap").disabled = true;
//         } // document.getElementById("floatingBorderGapValue").textContent = `Floating Border Gap Size: ${floatingBorderGap}`;
//       }

//       document.getElementById("formFloatingBorderGap").addEventListener("input", function() {
//         var inputValue = parseInt(this.value);
//         if (inputValue < 0) {
//           this.value = 0;
//           inputValue = 0; // Update inputValue as well
//         } // Check if the value is greater than 999
//         if (inputValue > 999) { // If so, set it to 999
//             this.value = 999;
//             inputValue = 999; // Update inputValue as well
//         } // Update the border variable with the input value
//         floatingBorderGap = inputValue;
//         floatingBorderGap = this.value !== null ? this.value : 0;
//         this.value = floatingBorderGap;
//         updateFloatingBorderGap(); // apply to all media items
//       });
//       //-----------------------------------------------------------------------------------------
//     });
//     // everything within this for each loop is repeated per item
//     // need to move alot of these functions outside of this loop to prevent refiring 74 times over

//     const testMediaPictures = document.querySelectorAll('.testMediaItemPicture');

//     //-----------------------------------------------------------------------------------------
//     updateTestMediaPicturesSizes(); //update the image sizes to match the content / border etc.
//     function updateTestMediaPicturesSizes() {
//       console.log('Update complete.');
      
//       // console.log('test');
//         testMediaPictures.forEach(testMediaPicture => {
//         // Assuming there's a one-to-one correspondence between testMedia and testMediaPictures
//           let setHeight = 200; // Fixed height
//           ratio = width / height; // why does resetting the ratio effect the content?
//           ratioedWidth = setHeight * ratio;
//           testMediaPicture.style.width = `${ratioedWidth}px`;
//           testMediaPicture.style.height = `${setHeight}px`;
//           // testMediaPicture.style.width = width;
//           // testMediaPicture.style.height = height;
//           testBorderRadius = borderRadius - border - 1;
//           if (testBorderRadius < 0) {
//             testBorderRadius = 0;
//           }
//           console.log(testBorderRadius);
//           testMediaPicture.style['border-radius'] = testBorderRadius + `px`;
        
//       });
//     }
//     //-----------------------------------------------------------------------------------------

//     //-----------------------------------------------------------------------------------------
//     // BACK BUTTON
//     //
//     //
//     const backContainer = document.getElementById('backContainer2');
//     backContainer.addEventListener('click', function () {
//       const scrollableContentDiv = document.querySelector('.scrollableContent');
//       if (scrollableContentDiv) {
//         scrollableContentDiv.scrollTop = 0;
//       }
//       editCategorySettings.style.display = 'none';
//       // Clear previous content when going back
//       editCategorySettings.innerHTML = '';
//       // showTagSettingsDiv.style.display = 'block';
//       mediaDisplayDiv.style.display = 'block';
//       // showTagSettingsDiv.style.display = 'none';
//       // showTagSettingsDiv.innerHTML = '';
//     });
//     //-----------------------------------------------------------------------------------------
//       // const deleteButton = document.getElementById('deleteButton');
//       // deleteButton.addEventListener('click', function () {
//       //     const idToDelete = Number(document.getElementById('id').value);

//       //     // Create the confirmation dialog
//       //     const confirmationDialog = document.createElement('div');
//       //     confirmationDialog.innerHTML = `
//       //         <div id="confirmationDialog" class="confirmation-dialog">
//       //             <p>Are you sure you want to delete this entry?</p>
//       //             <button id="confirmDelete">Yes</button>
//       //             <button id="cancelDelete">No</button>
//       //         </div>
//       //     `;
//       //     editFormElement.appendChild(confirmationDialog);

//       //     // Set up event listeners for confirm and cancel buttons
//       //     const confirmDeleteButton = document.getElementById('confirmDelete');
//       //     const cancelDeleteButton = document.getElementById('cancelDelete');

//       //     confirmDeleteButton.addEventListener('click', function () {
//       //         window.updateBridge.deleteMedia(idToDelete);

//       //         // Remove the confirmation dialog after deletion
//       //         confirmationDialog.parentNode.removeChild(confirmationDialog);
//       //     });

//       //     cancelDeleteButton.addEventListener('click', function () {
//       //         // Remove the confirmation dialog if the user cancels
//       //         confirmationDialog.parentNode.removeChild(confirmationDialog);
//       //     });
//       // });
// }

//-----------------------------------------------------------------------------------------
    // const mediaData = jsondata.Media || [];
    // // If Tag selected is all, show all media data.  If not, only show media data where the media entries include the selected Tag.
    // const items = tag === 'All' ? mediaData : mediaData.filter(item => item.Tags.includes(tag));
    // // console.log(items);
    // editCategorySettings.innerHTML += editableMedia(items);
    // function editableMedia(data) {
    //   if (data.length === 0) {
    //     return '<p>No data available.</p>';
    //   }
    //   let mediaHTML = '<div class="mediadata">';
    //   // Collect all unique keys (field names) from the array
    //   const allKeys = new Set();
    //   for (const item of data) {
    //     for (const key in item) {
    //       allKeys.add(key);
    //     }
    //   }
    //   mediaHTML += '<div id="testMediaContainer">';
    //   // Create data rows
    //   for (const item of data) {
    //     mediaHTML += `<div class="testMedia" data-item='${JSON.stringify(item).replace(/'/g, "&apos;")}'>`;
    //     if (item.id && item.Image == true) {
    //       const imageUrl = item.id ? `assets/media/${item.id}.png` : 'assets/media/default.png';
    //       mediaHTML += `<img src="${imageUrl}" alt="Image ${item.id}" class="testMediaItemPicture" />`;
    //     } else {
    //       const defaultImageUrl = 'assets/media/default.png';
    //       mediaHTML += `<img src="${defaultImageUrl}" alt="Default Image" class="testMediaItemPicture" />`;
    //     }
    //     const itemName = item.Name.replace(/'/g, "&apos;");
    //     // mediaHTML += `<div class="testMediavalue">${itemName}</div>`;
    //     mediaHTML += '<br></div>';
    //   }
    //   mediaHTML += '<br><p>Display Option to Add a category to this list, Example: Nintendo (Parent) N64, 3DS, GBC (Children)</p>'; // class="mediaitemcontainer"
    //   mediaHTML += '</div>'; // class="mediaitemcontainer"
    //   mediaHTML += '</div>'; // class="mediakeycontainer"
    //   return mediaHTML;
    // }
    //-----------------------------------------------------------------------------------------


// function wrapChange() {
    //   if (wrapCheckbox.checked) {
    //     wrap = 'wrap';
    //     testMediaContainer.style['flex-wrap'] = `${wrap}`;
    //     testMediaContainer.style.width = `auto`;
    //   } else {
    //     wrap = 'nowrap';
    //     testMediaContainer.style['flex-wrap'] = wrap;
    //     testMediaContainer.style.width = `max-content`;
    //   } // document.getElementById("wrapValue").textContent = `Wrap: ${wrap}`;
    // }
    //-----------------------------------------------------------------------------------------







































// function editCategorySettings(tag, jsondata) {
//     const selectedTag = jsondata.Tags.find(item => item.Name === tag);
//     const editCategorySettings = document.getElementById('editCategorySettings');
//     // const showTagSettingsDiv = document.getElementById('showTagSettings');
//     const mediaDisplayDiv = document.getElementById('mediaDisplay');
//     const scrollableContentDiv = document.querySelector('.scrollableContent'); // Scroll to the top of the page
//     if (scrollableContentDiv) {
//         scrollableContentDiv.scrollTop = 0;
//     }
//     editCategorySettings.style.display = 'block'; // display new content for the edit page
//     mediaDisplayDiv.style.display = 'none';
//     document.getElementById('editCategoryMenu').style.display = 'none';
//     // showTagSettingsDiv.style.display = 'none'; // hide current div, show new edit category div
//     border = selectedTag.Border;
//     borderRadius = selectedTag.BorderRadius;
//     borderColor = selectedTag.BorderColor;
//     // Create a border color default when the checkbox is disabled.
//     // create a border color disabler for input field and for the hovered border as well.
//     wrap = selectedTag.Wrap;
//     gap = selectedTag.Gap;
//     floatingBorder = selectedTag.FloatingBorder;
//     floatingBorderColor = selectedTag.FloatingBorderColor;
//     floatingBorderRadius = selectedTag.FloatingBorderRadius;
//     floatingBorderGap = selectedTag.FloatingBorderGap;
//     var height = selectedTag.Height;
//     var width = selectedTag.Width;
//     ({width, height} = simplifyRatio(width, height));
//     functionCount = 1;
//     // there needs to be a default that sets the height and width based on the content provided. In the event user wants different sized media placed together. 
//     // If user saved 1920 x 1080 as the height and width of the ratio, user will only see the simplified version after saving
//     // I will need to make a separate border radius for the floating border and then a checkbox that says to match existing border.  
//     // Also need a button that sets the size and gap of the floating border to be automatically sized and centered.

    

//     //-----------------------------------------------------------------------------------------
//     // Greatest Common Denominator for height and width ratios of media content
//     //
//     //
//     function simplifyRatio(width, height) {
//       let gcd = findGCD(width, height);
//       return {width: width / gcd, height: height / gcd};
//     }

//     function findGCD(a, b) { // Euclidean algorithm for finding GCD
//       while (b !== 0) {
//           let temp = b;
//           b = a % b;
//           a = temp;
//       }
//       return a;
//     }
//     //-----------------------------------------------------------------------------------------

//     //-----------------------------------------------------------------------------------------
//     // Shows the editable settings for an individual category
//     editCategorySettings.innerHTML += `
//       <div id="backContainer2">
//         <img src="assets/app/back.svg">
//         <div>Back</div>
//       </div>


//       <div class="settingsContainer">
//         <p>Category Name: ${selectedTag.Name}</p>
//         <br>

//         <p>ASPECT RATIO / POSITION</p>
//         <div class="settingsOptionContainer">
//           <div class="settingsOption">
//             <p id="originalDimensionsValue">Original Dimensions</p><input id="originalDimensionsCheckbox" type="checkbox">
//           </div>
//           <div class="settingsOption">
//             <p id="aspectRatioDisplay">Aspect Ratio: ${width}:${height}</p>
//             <input type="number" id="formRatioWidth" name="formRatioWidth" value=${width}>
//             <input type="number" id="formRatioHeight" name="formRatioHeight" value=${height}>
//           </div>
//           <div class="settingsOption">
//             <p id="gapValue">Gap</p><input id="gapCheckbox" type="checkbox" checked>
//             <input type="number" id="formGap" name="formGap" value=${gap}>
//           </div>
//           <div class="settingsOption">
//             <p id="wrapValue">Wrap</p><input id="wrapCheckbox" type="checkbox" checked>
//           </div>
//         </div>
//         <br>

//         <p>BORDER</p>
//         <div class="settingsOptionContainer">
//           <div class="settingsOption">
//             <p id="borderValue">Size</p><input id="borderCheckbox" type="checkbox" checked>
//             <input type="number" id="formBorder" name="formBorder" value=${border}>
//           </div>
//           <div class="settingsOption">
//             <p id="borderColorValue">Color</p><input id="borderColorCheckbox" type="checkbox" checked>
//             <input type="text" id="formBorderColor" name="formBorderColor" value=${borderColor}>
//           </div>
//           <div class="settingsOption">
//             <p id="borderRadiusValue">Radius</p><input id="borderRadiusCheckbox" type="checkbox" checked>
//             <input type="number" id="formBorderRadius" name="formBorderRadius" value=${borderRadius}>
//           </div>
//         </div>
//         <br>

//         <p>HOVERED BORDER</p>
//         <div class="settingsOptionContainer">
//           <div class="settingsOption">
//             <p id="floatingBorderValue">Size</p><input id="floatingBorderCheckbox" type="checkbox" checked>
//             <input type="number" id="formFloatingBorder" name="formFloatingBorder" value=${floatingBorder}>
//           </div>
//           <div class="settingsOption">
//             <p id="floatingBorderColorValue">Color</p><input id="floatingBorderColorCheckbox" type="checkbox" checked>
//             <input type="text" id="formFloatingBorderColor" name="formFloatingBorderColor" value=${floatingBorderColor}>
//           </div>
//           <div class="settingsOption">
//             <p id="floatingBorderRadiusValue">Radius</p><input id="floatingBorderRadiusCheckbox" type="checkbox" checked>
//             <input type="number" id="formFloatingBorderRadius" name="formFloatingBorderRadius" value=${floatingBorderRadius}>
//           </div>
//           <div class="settingsOption">
//             <p id="floatingBorderGapValue">Gap</p><input id="floatingBorderGapCheckbox" type="checkbox" checked>
//             <input type="number" id="formFloatingBorderGap" name="formFloatingBorderGap" value=${floatingBorderGap}>
//           </div>
//         </div>
//         <br>

//         <p>THEMES</p>
//         <div class="settingsOptionContainer">
//           <div class="settingsOption">
//             <p id="test">Startup Video</p><input id="test" type="checkbox" checked>
//             <input type="number" id="test" name="test" value=${border}>
//           </div>
//           <div class="settingsOption">
//             <p id="test">Background Visual</p><input id="test" type="checkbox" checked>
//             <input type="text" id="test" name="test" value=${border}>
//           </div>
//           <div class="settingsOption">
//             <p id="test">Background Audio</p><input id="test" type="checkbox" checked>
//             <input type="text" id="test" name="test" value=${border}>
//           </div>
//           <div class="settingsOption">
//             <p id="test">Selection Sound</p><input id="test" type="checkbox" checked>
//             <input type="number" id="test" name="test" value=${border}>
//           </div>
//           <div class="settingsOption">
//             <p id="test">Font</p><input id="test" type="checkbox" checked>
//             <input type="number" id="test" name="test" value=${border}>
//           </div>
//         </div>
//         <br>

//         <p>RESTORE DEFAULT SETTINGS</p>
//         <p>SAVE CHANGES</p>

//       </div>
      

//       <div id="otherNotes">
//         <p>------------------------------------------------------------------------------------</p>
//         <p>CATEGORY SETTINGS</p>
//         <p>------------------------------------------------------------------------------------</p>
//         <p>Intro to Category, Video / Music / Transitions</p>
//         <p>Ability to Delete entire Category, the delete option should only be available through an enabled setting with password</p>
//         <p>File Path to Transition Media and subsequent media</p>
//         <p>Layouts: Nintendo Switch, 3DS, Wiiu, Wii</p>
//         <p>I need to save a default value in the event user wants every category to look the same without setting them all</p>
//         <p>Give the user the ability to add custom values ot the json file, if user wants to create a Date or other text value, that should be here (Speedruns)</p>
//         <p>Custom values might be easier to use if they are saved with the actual media in question and not the tag / category</p>
//         <p>Hoverable Options</p>
//         <p>Create miniature display for the user's content to show setting changes</p>
//         <p></p>
//         <p></p>
//         <p></p>
//         <p></p>
//         <br>
//         <p>------------------------------------------------------------------------------------</p>
//         <p>UNIVERSAL SETTINGS</p>
//         <p>------------------------------------------------------------------------------------</p>
//         <p>Side Bar Location / Style</p>
//         <p>Give user the option for the side bar option to disappear after a moment, then wake up or display the option pressing the assigned button</p>
//         <p>Consider the timing of switching between categories, some transition scenes may take up more time than they need to.  Should there be an option to skip directly to a cat and skip other transitions?</p>
//         <p></p>
//         <p></p>
//         <p></p>
//       </div>
//     `;
//     //-----------------------------------------------------------------------------------------

//     //-----------------------------------------------------------------------------------------
//     const mediaData = jsondata.Media || [];
//     // If Tag selected is all, show all media data.  If not, only show media data where the media entries include the selected Tag.
//     const items = tag === 'All' ? mediaData : mediaData.filter(item => item.Tags.includes(tag));
//     // console.log(items);
//     editCategorySettings.innerHTML += editableMedia(items);
//     function editableMedia(data) {
//       if (data.length === 0) {
//         return '<p>No data available.</p>';
//       }
//       let mediaHTML = '<div class="mediadata">';
//       // Collect all unique keys (field names) from the array
//       const allKeys = new Set();
//       for (const item of data) {
//         for (const key in item) {
//           allKeys.add(key);
//         }
//       }
//       mediaHTML += '<div id="testMediaContainer">';
//       // Create data rows
//       for (const item of data) {
//         mediaHTML += `<div class="testMedia" data-item='${JSON.stringify(item).replace(/'/g, "&apos;")}'>`;
//         if (item.id && item.Image == true) {
//           const imageUrl = item.id ? `assets/media/${item.id}.png` : 'assets/media/default.png';
//           mediaHTML += `<img src="${imageUrl}" alt="Image ${item.id}" class="testMediaItemPicture" />`;
//         } else {
//           const defaultImageUrl = 'assets/media/default.png';
//           mediaHTML += `<img src="${defaultImageUrl}" alt="Default Image" class="testMediaItemPicture" />`;
//         }
//         const itemName = item.Name.replace(/'/g, "&apos;");
//         // mediaHTML += `<div class="testMediavalue">${itemName}</div>`;
//         mediaHTML += '<br></div>';
//       }
//       mediaHTML += '<br><p>Display Option to Add a category to this list, Example: Nintendo (Parent) N64, 3DS, GBC (Children)</p>'; // class="mediaitemcontainer"
//       mediaHTML += '</div>'; // class="mediaitemcontainer"
//       mediaHTML += '</div>'; // class="mediakeycontainer"
//       return mediaHTML;
//     }
//     //-----------------------------------------------------------------------------------------

//     const testMediaContainer = document.getElementById('testMediaContainer');
//     const originalDimensionsCheckbox = document.getElementById('originalDimensionsCheckbox');
//     // const originalDimensionsCheckbox = document.getElementById('originalDimensionsCheckbox');
//     const gapCheckbox = document.getElementById('gapCheckbox');
//     const wrapCheckbox = document.getElementById('wrapCheckbox');
//     const borderCheckbox = document.getElementById('borderCheckbox');
//     const floatingBorderCheckbox = document.getElementById('floatingBorderCheckbox');
//     const floatingBorderRadiusCheckbox = document.getElementById('floatingBorderRadiusCheckbox');
//     const floatingBorderGapCheckbox = document.getElementById('floatingBorderGapCheckbox');
//     const otherNotes = document.getElementById('otherNotes');
//     topAdjustment = 50;
//     testMediaContainer.style.top = '' + topAdjustment + 'px';
//     otherNotes.style.top = '' + topAdjustment + 'px';

//     gapChange(); // Default values for wrap and gap
//     wrapChange();

//     //-----------------------------------------------------------------------------------------
//     // CHECKBOX VALUES UPDATE THE STYLING WHEN CHANGED
//     // Placed before the media elements are created, as the container controls the gaps, not the media itself
//     // 
//     //
//     //
//     gapCheckbox.addEventListener('change', gapChange);
//     function gapChange() {
//       if (gapCheckbox.checked) {
//         gap = parseInt(document.getElementById('formGap').value);
//         testMediaContainer.style.gap = `${gap}px`;
//         document.getElementById("formGap").disabled = false;
        
//       } else {
//         testMediaContainer.style.gap = `0px`;
//         gap = 0;
//         document.getElementById("formGap").disabled = true;
//       }
//     }
//     //-----------------------------------------------------------------------------------------

//     //-----------------------------------------------------------------------------------------
//     // GAP LISTENER
//     //
//     //
//     //
//     document.getElementById("formGap").addEventListener("input", function() {
//       var inputValue = parseInt(this.value);
//       if (inputValue < 0) { // Ensure the value does not go below 0
//         this.value = 0;
//         inputValue = 0; // Update inputValue as well
//       }
//       if (inputValue > 999) { // Check if the value is greater than 999 // If so, set it to 999
//           this.value = 999;
//           inputValue = 999; // Update inputValue as well
//       }
//       gap = inputValue; // Update the border variable with the input value
//       gap = this.value !== null ? this.value : 0;
//       this.value = gap;
//       gapChange(); // apply to all media items
//     });
//     //-----------------------------------------------------------------------------------------

//     //-----------------------------------------------------------------------------------------
//     // WRAP LISTENER
//     //
//     //
//     //
//     wrapCheckbox.addEventListener('change', wrapChange);
//     function wrapChange() {
//       if (wrapCheckbox.checked) {
//         wrap = 'wrap';
//         testMediaContainer.style['flex-wrap'] = `${wrap}`;
//         testMediaContainer.style.width = `auto`;
//       } else {
//         wrap = 'nowrap';
//         testMediaContainer.style['flex-wrap'] = wrap;
//         testMediaContainer.style.width = `max-content`;
//       } // document.getElementById("wrapValue").textContent = `Wrap: ${wrap}`;
//     }
//     //-----------------------------------------------------------------------------------------
    
//     //-----------------------------------------------------------------------------------------
//     // Loop of all Media Elements
//     //
//     //
//     //
//     const scrollableContent = document.querySelector('.scrollableContent');
//     const testMediaElements = document.querySelectorAll('.testMedia');
//     const testMediaPictures = document.querySelectorAll('.testMediaItemPicture');

//     // Functions that don't need to loop
//     // You can set global variables here that apply to all media at once rather than repeating loops
//     //-----------------------------------------------------------------------------------------
//     updateAspectRatio();
//     document.getElementById("formRatioWidth").addEventListener('change', updateAspectRatio);
//     document.getElementById("formRatioHeight").addEventListener('change', updateAspectRatio);
//     function updateAspectRatio() {
//       console.log('Function: Aspect Ratio');
//       width = parseInt(document.getElementById("formRatioWidth").value, 10);
//       height = parseInt(document.getElementById("formRatioHeight").value, 10);
//       ({width, height} = simplifyRatio(width, height));
//       let setHeight = 200; // Fixed height
//       ratio = width / height; // why does resetting the ratio effect the content?
//       ratioedWidth = setHeight * ratio;
//       document.getElementById("aspectRatioDisplay").textContent = `Aspect Ratio: ${width}:${height}`;
//       updateMediaStyling(testMediaElements);
//     }
//     //-----------------------------------------------------------------------------------------
//     // UPDATE WIDTH, HEIGHT, and ASPECT RATIO
//     //
//     //
//     document.getElementById("formRatioWidth").addEventListener("input", updateWidth);
//     function updateWidth() {
//       console.log('Function: Update Width');
//       var widthInput = document.getElementById("formRatioWidth");
//       var widthValue = parseInt(widthInput.value);
//       if (widthValue < 1) { // Ensure the width does not go below 1
//         widthInput.value = 1;
//         widthValue = 1; // Update widthValue as well
//       }
//       width = widthValue;
//       updateAspectRatio();
//     }

//     document.getElementById("formRatioHeight").addEventListener("input", updateHeight);
//     function updateHeight() {
//       console.log('Function: Update Height');
//       var heightInput = document.getElementById("formRatioHeight");
//       var heightValue = parseInt(heightInput.value);
//       if (heightValue < 1) { // Ensure the height does not go below 1
//         heightInput.value = 1;
//         heightValue = 1; // Update heightValue as well
//       }
//       height = heightValue; 
//       updateAspectRatio();
//     }

//     updateOriginalDimensions();
//     originalDimensionsCheckbox.addEventListener('change', updateOriginalDimensions);
//     function updateOriginalDimensions() {
//       console.log('Function: Update Original Dimensions');
//       if (originalDimensionsCheckbox.checked) {
//         // border = parseInt(document.getElementById("formBorder").value);
//         document.getElementById("formRatioWidth").disabled = true;
//         document.getElementById("formRatioHeight").disabled = true;
//         width = 'auto';
//         // document.getElementById("borderColorCheckbox").disabled = false;
//         // testMedia.style.border = `${border}px solid ${borderColor}`;
//       } else {
//         // testMedia.style.border = `0px solid ${borderColor}`;
//         // border = 0;
//         // update width = the width in the box
        
//         document.getElementById("formRatioWidth").disabled = false;
//         document.getElementById("formRatioHeight").disabled = false;
//         updateWidth();
//         // document.getElementById("borderColorCheckbox").disabled = true;
//       }
//       updateMediaStyling(testMediaElements);
//     }

//     //-----------------------------------------------------------------------------------------
//     // BORDERS SIZE
//     //
//     //
//     //
//     updateBorder();
//     borderCheckbox.addEventListener('change', updateBorder);
//     function updateBorder() {
//       console.log('Function: Update Border');
//       if (borderCheckbox.checked) {
//         border = parseInt(document.getElementById("formBorder").value);
//         document.getElementById("formBorder").disabled = false;
//         document.getElementById("formBorderColor").disabled = false;
//         document.getElementById("borderColorCheckbox").disabled = false;
//         // testMedia.style.border = `${border}px solid ${borderColor}`;
//       } else {
//         // testMedia.style.border = `0px solid ${borderColor}`;
//         border = 0;
//         document.getElementById("formBorder").disabled = true;
//         document.getElementById("formBorderColor").disabled = true;
//         document.getElementById("borderColorCheckbox").disabled = true;
//       }
//       updateMediaStyling(testMediaElements);
//     }

//     document.getElementById("formBorder").addEventListener("input", function() {
//       var inputValue = parseInt(this.value);
//       if (inputValue < 0) {
//         this.value = 0;
//         inputValue = 0; // Update inputValue as well
//       } // Check if the value is greater than 999
//       if (inputValue > 999) { // If so, set it to 999
//           this.value = 999;
//           inputValue = 999; // Update inputValue as well
//       } // Update the border variable with the input value
//       border = inputValue;
//       border = this.value !== null ? this.value : 0;
//       this.value = border;
//       updateBorder(); // apply to all media items
//     });
//     //-----------------------------------------------------------------------------------------

//     //-----------------------------------------------------------------------------------------
//     // BORDER COLOR
//     //
//     //
//     borderColorCheckbox.addEventListener('change', updateBorderColor);
//     function updateBorderColor() {
//       console.log('Function: Update Border Color');
//       if (borderColorCheckbox.checked) {
//         borderColor = document.getElementById("formBorderColor").value;
//         document.getElementById("formBorderColor").disabled = false;
//         // testMedia.style.border = `${border}px solid ${borderColor}`;
//       } else {
//         borderColor = 'black';
//         // testMedia.style.border = `${border}px solid ${borderColor}`;
//         document.getElementById("formBorderColor").disabled = true;
//       }
//       updateMediaStyling(testMediaElements);
//     }

//     document.getElementById("formBorderColor").addEventListener("input", function() {
//       var inputValue = this.value;
//       borderColor = inputValue;
//       borderColor = this.value !== null ? this.value : 'black';
//       this.value = borderColor;
//       updateBorderColor(); // apply to all media items
//     });
    
//     //-----------------------------------------------------------------------------------------

//     //-----------------------------------------------------------------------------------------
//     // BORDER RADIUS
//     //
//     //
//     //
//     updateBorderRadius();
//     borderRadiusCheckbox.addEventListener('change', updateBorderRadius);
//     function updateBorderRadius() {
//       console.log('Function: Update Border Radius');
//       if (borderRadiusCheckbox.checked) {
//         borderRadius = parseInt(document.getElementById("formBorderRadius").value);
//         document.getElementById("formBorderRadius").disabled = false;
//         // testMedia.style['border-radius'] = `${borderRadius}px`;
//       } else {
//         // testMedia.style['border-radius'] = `0px`;
//         borderRadius = 0;
//         document.getElementById("formBorderRadius").disabled = true;
//       }
//       updateTestMediaPicturesSizes();
//       updateMediaStyling(testMediaElements);
//     }

//     document.getElementById("formBorderRadius").addEventListener("input", function() {
//       var inputValue = parseInt(this.value);
//       if (inputValue < 0) {
//         this.value = 0;
//         inputValue = 0; // Update inputValue as well
//       } // Check if the value is greater than 999
//       if (inputValue > 999) { // If so, set it to 999
//           this.value = 999;
//           inputValue = 999; // Update inputValue as well
//       } // Update the border variable with the input value
//       borderRadius = inputValue;
//       borderRadius = this.value !== null ? this.value : 0;
//       this.value = borderRadius;
//       updateBorderRadius(); // apply to all media items
//     });
//     //-----------------------------------------------------------------------------------------
//     // STYLE EVERYTHING HERE DOWN BEFORE LAUNCHING AGAIN
//     //-----------------------------------------------------------------------------------------
//     // FLOATING BORDER FOR SELECTED MATERIAL
//     // These hovered elements dont exist until the original is hovered, you can't reference them directly you have to use variables.
//     //
//     //
//     //
//     updateFloatingBorder();
//     floatingBorderCheckbox.addEventListener('change', updateFloatingBorder);
//     function updateFloatingBorder() {
//       console.log('Function: Update Floating Border');
//       if (floatingBorderCheckbox.checked) {
//         floatingBorder = parseInt(document.getElementById("formFloatingBorder").value);
//         document.getElementById("floatingBorderColorCheckbox").disabled = false;
//         document.getElementById("floatingBorderRadiusCheckbox").disabled = false;
//         document.getElementById("floatingBorderGapCheckbox").disabled = false;
//         document.getElementById("formFloatingBorder").disabled = false;
//         document.getElementById("formFloatingBorderColor").disabled = false;
//         updateFloatingBorderRadius(); // instead call these functions to check whether the checkbox has these inputs enabled or disabled
//         updateFloatingBorderGap();
//         floatingBorderPadding = border;
//       } else {
//         floatingBorder = 0;
//         document.getElementById("floatingBorderRadiusCheckbox").disabled = true;
//         document.getElementById("floatingBorderGapCheckbox").disabled = true;
//         document.getElementById("floatingBorderColorCheckbox").disabled = true;
//         document.getElementById("formFloatingBorder").disabled = true;
//         document.getElementById("formFloatingBorderColor").disabled = true;
//         document.getElementById("formFloatingBorderRadius").disabled = true;
//         document.getElementById("formFloatingBorderGap").disabled = true;
//       }
//       updateMediaStyling(testMediaElements);
//     }

//     document.getElementById("formFloatingBorder").addEventListener("input", function() {
//       var inputValue = parseInt(this.value);
//       if (inputValue < 0) {
//         this.value = 0;
//         inputValue = 0; // Update inputValue as well
//       } // Check if the value is greater than 999
//       if (inputValue > 999) { // If so, set it to 999
//           this.value = 999;
//           inputValue = 999; // Update inputValue as well
//       } // Update the border variable with the input value
//       floatingBorder = inputValue;
//       floatingBorder = this.value !== null ? this.value : 0;
//       this.value = floatingBorder;
//       updateFloatingBorder(); // apply to all media items
//     });
//     //-----------------------------------------------------------------------------------------

//     //-----------------------------------------------------------------------------------------
//     // FLOATING BORDER COLOR
//     // These hovered elements dont exist until the original is hovered, you can't reference them directly you have to use variables.
//     //
//     //
//     updateFloatingBorderColor();
//     floatingBorderColorCheckbox.addEventListener('change', updateFloatingBorderColor);
//     function updateFloatingBorderColor() {
//       console.log('Function: Update Floating Border Color');
//       if (floatingBorderColorCheckbox.checked) {
//         floatingBorderColor = document.getElementById("formFloatingBorderColor").value;
//         document.getElementById("formFloatingBorderColor").disabled = false;
//       } else {
//         floatingBorderColor = 'black';
//         document.getElementById("formFloatingBorderColor").disabled = true;
//       } // document.getElementById("floatingBorderColorValue").textContent = `Floating Border Color Size: ${floatingBorderColor}`;
//       updateMediaStyling(testMediaElements);
//     }

//     document.getElementById("formFloatingBorderColor").addEventListener("input", function() {
//       var inputValue = this.value;
//       floatingBorderColor = inputValue;
//       floatingBorderColor = this.value !== null ? this.value : 'black';
//       this.value = floatingBorderColor;
//       updateFloatingBorderColor(); // apply to all media items
//     });
//     //-----------------------------------------------------------------------------------------

//     //-----------------------------------------------------------------------------------------
//     // FLOATING BORDER RADIUS FOR SELECTED MATERIAL
//     // These hovered elements dont exist until the original is hovered, you can't reference them directly you have to use variables.
//     //
//     //
//     updateFloatingBorderRadius();
//     floatingBorderRadiusCheckbox.addEventListener('change', updateFloatingBorderRadius);
//     function updateFloatingBorderRadius() {
//       console.log('Function: Update Floating Border Radius');
//       if (floatingBorderRadiusCheckbox.checked) {
//         floatingBorderRadius = parseInt(document.getElementById("formFloatingBorderRadius").value);
//         document.getElementById("formFloatingBorderRadius").disabled = false;
//       } else {
//         floatingBorderRadius = 0;
//         document.getElementById("formFloatingBorderRadius").disabled = true;
//       } // document.getElementById("floatingBorderRadiusValue").textContent = `Floating Border Radius: ${floatingBorderRadius}`;
//       updateMediaStyling(testMediaElements);
//     }
    
//     document.getElementById("formFloatingBorderRadius").addEventListener("input", function() {
//       var inputValue = parseInt(this.value);
//       if (inputValue < 0) {
//         this.value = 0;
//         inputValue = 0; // Update inputValue as well
//       } // Check if the value is greater than 999
//       if (inputValue > 999) { // If so, set it to 999
//           this.value = 999;
//           inputValue = 999; // Update inputValue as well
//       } // Update the border variable with the input value
//       floatingBorderRadius = inputValue;
//       floatingBorderRadius = this.value !== null ? this.value : 0;
//       this.value = floatingBorderRadius;
//       updateFloatingBorderRadius(); // apply to all media items
//     });
//     //-----------------------------------------------------------------------------------------

//     //-----------------------------------------------------------------------------------------
//     // FLOATING BORDER GAP FOR SELECTED MATERIAL
//     // These hovered elements dont exist until the original is hovered, you can't reference them directly you have to use variables.
//     //
//     //
//     updateFloatingBorderGap();
//     floatingBorderGapCheckbox.addEventListener('change', updateFloatingBorderGap);
//     function updateFloatingBorderGap() {
//       console.log('Function: Update Floating Border Gap');
//       if (floatingBorderGapCheckbox.checked) {
//         floatingBorderGap = parseInt(document.getElementById("formFloatingBorderGap").value);
//         document.getElementById("formFloatingBorderGap").disabled = false;
//       } else {
//         floatingBorderGap = 0;
//         document.getElementById("formFloatingBorderGap").disabled = true;
//       } // document.getElementById("floatingBorderGapValue").textContent = `Floating Border Gap Size: ${floatingBorderGap}`;
//       updateMediaStyling(testMediaElements);
//     }

//     document.getElementById("formFloatingBorderGap").addEventListener("input", function() {
//       var inputValue = parseInt(this.value);
//       if (inputValue < 0) {
//         this.value = 0;
//         inputValue = 0; // Update inputValue as well
//       } // Check if the value is greater than 999
//       if (inputValue > 999) { // If so, set it to 999
//           this.value = 999;
//           inputValue = 999; // Update inputValue as well
//       } // Update the border variable with the input value
//       floatingBorderGap = inputValue;
//       floatingBorderGap = this.value !== null ? this.value : 0;
//       this.value = floatingBorderGap;
//       updateFloatingBorderGap(); // apply to all media items
//     });
//     //-----------------------------------------------------------------------------------------

//     function updateMediaStyling(testMediaElements) {
//       updateTestMediaPicturesSizes();
//       console.log('------------------------------');
//       console.log('Function: Update Media Styling');
//       testMediaElements.forEach(testMedia => {
//         console.log('Function: Update Media Styling For Each Test Media Item: ' + functionCount);
//         // functionCount += 1;
//         // Set initial styling
//         // Prevent user from setting odd numbered values for borders and padding, this will keep content evenly spaced when calculating positioning.  User can fix this by using bigger even numbers
//         // This actually wouldn't help when we have to divide the values, 10 would become 5, 6 - 3, etc.

//         // If ratioed media width exceeds box width, allow the new width to be set to preserve original dimensions: if the user wants to display media this way
        
//         let setHeight = 200; // Fixed height for displayed media
//         // If width = auto, then skip the ratioed width and set it to auto
//         if (width === 'auto') {
//           testMedia.style.width = `auto`;
//           // testMediaPictures.style.width = `auto`;
//           // testMedia.style.height = `${setHeight}px`;
//         }
//         else {
//           ratio = width / height; // why does resetting the ratio effect the content?
//           ratioedWidth = setHeight * ratio;
//           testMedia.style.width = `${ratioedWidth}px`;
//           // testMediaPictures.style.width = `${ratioedWidth}px`;
//         }
//         testMedia.style.height = `${setHeight}px`;

        
//         // testMedia.style.width = `${ratioedWidth}px`;
//         // testMedia.style.height = `${setHeight}px`;
//         testMedia.style.border = `${border}px solid ${borderColor}`;
//         testMedia.style['border-radius'] = `${borderRadius}px`;
//         testMedia.style.zIndex = '2'; // Z-index for this element should be higher than its background border
//         // Create separate styling depending on whether or not the media is hovered over by the mouse, Apply hoverable styling when mouse enters
//         // I should allow any dimensions to be applied to the custom tab, while using a fixed height.
//         // for new hovered border, include a "same size as gap" option
//         testMedia.addEventListener('mouseenter', function() {
//           // on mouse enter, play a sound effect.  This would be where to put it.
//           // You could make a function that times the sound effects to have different pitches based on how many are hovered in a breif moment.  Musical selection menus.
//           // POSSIBLE IDEA, I could create a copy of the media and position it in the middle to enlarge it without affecting the flex box order and layout: Enlarge selected media
//           const rect = testMedia.getBoundingClientRect(); // Get position and size of original media item
//           let scrollDistanceLeft = scrollableContent.scrollLeft;
//           let scrollDistanceTop = scrollableContent.scrollTop;
//           const sideMenuWidth = 200; // Width of the side menu
//           const floatingBorderElement = testMedia.cloneNode(true);
//           testMedia.style.zIndex = '5'; // Z-index for this element should be higher than its background border
//           floatingBorderElement.classList.add('testMediaCopy'); // Add a distinct class name
//           floatingBorderElement.style.position = 'absolute';
//           floatingBorderElement.style.zIndex = '4';
//           floatingBorderElement.style['background-color'] = 'transparent';
//           floatingBorderElement.style.border = `${floatingBorder}` + `px solid ` + `${floatingBorderColor}`; // custom per user
//           floatingBorderElement.style['border-radius'] = `${floatingBorderRadius}px`;
//           // need to turn calculations into named variables to help showcase what is actually being done per value
//           floatingBorderPadding = (border) + (floatingBorderGap) +  'px'; // - 2 custom per user border settings
//           floatingBorderTopAdjustment = `${(rect.top) - (floatingBorder) - (floatingBorderGap) + (scrollDistanceTop) - topAdjustment - 360}px`; // Trying to place an element in the middle of an odd element will result in the value skewed to the left innacurately.
//           floatingBorderLeftAdjustment = `${(rect.left) - (floatingBorder) - (floatingBorderGap) + (scrollDistanceLeft) - (sideMenuWidth) + 0}px`; // +1
//           floatingBorderElement.style.padding = floatingBorderPadding; // - 2 custom per user border settings
//           floatingBorderElement.style.top = floatingBorderTopAdjustment; // Trying to place an element in the middle of an odd element will result in the value skewed to the left innacurately.
//           floatingBorderElement.style.left = floatingBorderLeftAdjustment; // +1
//           testMedia.parentNode.appendChild(floatingBorderElement);
//         });
        
//         //-----------------------------------------------------------------------------------------
//         // These listeners are placed after the media conatiners and copy backgrounds have been identified.
//         // Revert back to default non-hoverable styling when mouse leaves
//         testMedia.addEventListener('mouseleave', function() {
//           testMedia.style.zIndex = '2'; // Z-index for this element should be higher than its background border
//           const copies = testMedia.parentNode.querySelectorAll('.testMediaCopy');
//           copies.forEach(copy => {
//             copy.parentNode.removeChild(copy);
//           });
//         });
//       });
//     }
//     // everything within this for each loop is repeated per item
//     // need to move alot of these functions outside of this loop to prevent refiring 74 times over

//     // const testMediaPictures = document.querySelectorAll('.testMediaItemPicture');

//     //-----------------------------------------------------------------------------------------
//     //update the image sizes to match the content / border etc.
//       function updateTestMediaPicturesSizes() {
//         console.log('Function: updateTestMediaPicturesSizes');
//         testMediaPictures.forEach(testMediaPicture => {
//         // Assuming there's a one-to-one correspondence between testMedia and testMediaPictures
//           let setHeight = 200; // Fixed height
//           if (width === 'auto') {
//             // testMedia.style.width = `auto`;
//             testMediaPicture.style.width = `auto`;
//             testMediaPicture.style.height = `${setHeight}px`;
//           }
//           else {
//             ratio = width / height; // why does resetting the ratio effect the content?
//             ratioedWidth = setHeight * ratio;
//             testMediaPicture.style.width = `${ratioedWidth}px`;
//             // testMediaPictures.style.width = `${ratioedWidth}px`;
//           }
//           testMediaPicture.style.height = `${setHeight}px`;
//           ratio = width / height; // why does resetting the ratio effect the content?
//           ratioedWidth = setHeight * ratio;
//           testMediaPicture.style.width = `${ratioedWidth}px`;
//           testMediaPicture.style.height = `${setHeight}px`;
//           // testMediaPicture.style.width = width;
//           // testMediaPicture.style.height = height;
//           testBorderRadius = borderRadius - border - 1;
//           if (testBorderRadius < 0) {
//             testBorderRadius = 0;
//           }
//           testMediaPicture.style['border-radius'] = testBorderRadius + `px`;
//       });
//     }
    
//     //-----------------------------------------------------------------------------------------

//     //-----------------------------------------------------------------------------------------
//     // BACK BUTTON
//     //
//     //
//     const backContainer = document.getElementById('backContainer2');
//     backContainer.addEventListener('click', function () {
//       const scrollableContentDiv = document.querySelector('.scrollableContent');
//       if (scrollableContentDiv) {
//         scrollableContentDiv.scrollTop = 0;
//       }
//       editCategorySettings.style.display = 'none';
//       document.getElementById('editCategoryMenu').style.display = 'none';

//       // Clear previous content when going back
//       editCategorySettings.innerHTML = '';
//       // showTagSettingsDiv.style.display = 'block';
//       mediaDisplayDiv.style.display = 'block';
//       // showTagSettingsDiv.style.display = 'none';
//       // showTagSettingsDiv.innerHTML = '';
//     });
//     //-----------------------------------------------------------------------------------------
//       // const deleteButton = document.getElementById('deleteButton');
//       // deleteButton.addEventListener('click', function () {
//       //     const idToDelete = Number(document.getElementById('id').value);

//       //     // Create the confirmation dialog
//       //     const confirmationDialog = document.createElement('div');
//       //     confirmationDialog.innerHTML = `
//       //         <div id="confirmationDialog" class="confirmation-dialog">
//       //             <p>Are you sure you want to delete this entry?</p>
//       //             <button id="confirmDelete">Yes</button>
//       //             <button id="cancelDelete">No</button>
//       //         </div>
//       //     `;
//       //     editFormElement.appendChild(confirmationDialog);

//       //     // Set up event listeners for confirm and cancel buttons
//       //     const confirmDeleteButton = document.getElementById('confirmDelete');
//       //     const cancelDeleteButton = document.getElementById('cancelDelete');

//       //     confirmDeleteButton.addEventListener('click', function () {
//       //         window.updateBridge.deleteMedia(idToDelete);

//       //         // Remove the confirmation dialog after deletion
//       //         confirmationDialog.parentNode.removeChild(confirmationDialog);
//       //     });

//       //     cancelDeleteButton.addEventListener('click', function () {
//       //         // Remove the confirmation dialog if the user cancels
//       //         confirmationDialog.parentNode.removeChild(confirmationDialog);
//       //     });
//       // });
//   }