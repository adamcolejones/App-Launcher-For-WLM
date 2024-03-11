import { gapChange } from './gapChange.js';
import { wrapChange } from './wrapChange.js';
import { updateAspectRatio } from './updateAspectRatio.js';
// import { updateHeight } from './updateHeight.js';
// import { updateMediaStyling } from './updateMediaStyling.js';
import { updateTestMediaPicturesSizes } from './updateTestMediaPicturesSizes.js';
// import { settingsMenu } from './functions/settingsMenu.js';
// import { simplifyRatio } from './simplifyRatio.js';


  function applyStyling(tag, jsondata) {
    // const mediaVisual = document.getElementById('mediaVisual');
    const selectedTag = jsondata.Tags.find(item => item.Name === tag);
    // IF THESE VALUES RETURN NULL, THEY WILL BREAK THE APP.  IF ANY RETURN NULL, SET DEFAULT VALUES FOR THEM HERE

    // Meta
    let name = selectedTag.Name !== undefined ? selectedTag.Name : 'Undefined';

    // Container Styling
    let backgroundVisual = selectedTag.BackgroundVisual !== undefined ? selectedTag.BackgroundVisual : false;
    let backgroundColorCheck = selectedTag.BackgroundColorCheck !== undefined ? selectedTag.BackgroundColorCheck : false;
    let backgroundColor = selectedTag.BackgroundColor !== undefined ? selectedTag.BackgroundColor : 'white';
    let gap = selectedTag.Gap !== undefined ? selectedTag.Gap : 1; 
    let wrap = selectedTag.Wrap !== undefined ? selectedTag.Wrap : 'wrap'; 

    // Media Styling
    let originalDimensions = selectedTag.OriginalDimensions !== undefined ? selectedTag.OriginalDimensions : false;
    let width = selectedTag.Width !== undefined ? selectedTag.Width : 1;
    let height = selectedTag.Height !== undefined ? selectedTag.Height : 1;
    let border = selectedTag.Border !== undefined ? selectedTag.Border : 5;
    let borderColor = selectedTag.BorderColor !== undefined ? selectedTag.BorderColor : 'black';
    let borderRadius = selectedTag.BorderRadius !== undefined ? selectedTag.BorderRadius : 5; 

    // Floating Border Values
    let floatingBorder = selectedTag.FloatingBorder !== undefined ? selectedTag.FloatingBorder : 5;
    let floatingBorderColor = selectedTag.FloatingBorderColor !== undefined ? selectedTag.FloatingBorderColor : 'red';
    let floatingBorderRadius = selectedTag.FloatingBorderRadius !== undefined ? selectedTag.FloatingBorderRadius : 5;
    let floatingBorderGap = selectedTag.FloatingBorderGap !== undefined ? selectedTag.FloatingBorderGap : 0;
    let floatingBorderPadding; // value is determined later, needed to be initialized beforehand


    //###################################################################################################################################################################

    editCategoryMenu.innerHTML = `
      
      <p>Category Settings</p>
      <p>General Settings</p>
      <br>

      <p>BACKGROUND</p>
      <div class="settingsOptionContainer">
        <div class="settingsOption">
          <p id="backgroundVisual">Background Visual</p>
          <input id="backgroundVisualCheckbox" type="checkbox" checked>
          <input type="text" id="formBackgroundVisual" name="formBackgroundVisual" value="tbd">
        </div>
        <div class="settingsOption">
          <p id="backgroundColor">Background Color</p>
          <input id="backgroundColorCheckbox" type="checkbox" checked>
          <input type="text" id="formBackgroundColor" name="formBackgroundColor" value=${backgroundColor}>
        </div>
        <div class="settingsOption">
          <p id="backgroundAudio">Background Audio</p>
          <input id="backgroundAudioCheckbox" type="checkbox" checked>
          <input type="text" id="formBackgroundAudio" name="formBackgroundAudio" value="tbd">
        </div>
      </div>
      <br>

      <p>ASPECT RATIO / POSITION</p>
      <div class="settingsOptionContainer">
        <div class="settingsOption">
          <p id="originalDimensionsValue">Original Dimensions</p>
          <input id="originalDimensionsCheckbox" type="checkbox">
        </div>
        <div class="settingsOption">
          <p id="aspectRatioDisplay">Aspect Ratio: ${width}:${height}</p>
          <input type="number" id="formRatioWidth" name="formRatioWidth" value=${width}>
          <input type="number" id="formRatioHeight" name="formRatioHeight" value=${height}>
        </div>
        <div class="settingsOption">
          <p id="gapValue">Gap</p>
          <input id="gapCheckbox" type="checkbox" checked>
          <input type="number" id="formGap" name="formGap" value=${gap}>
        </div>
        <div class="settingsOption">
          <p id="wrapValue">Wrap</p>
          <input id="wrapCheckbox" type="checkbox" checked>
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

    `;
    //###################################################################################################################################################################

    //###################################################################################################################################################################                                                                                                    
    //  ██████████████   ██████████████ ██████████████ ██████  ████████ ██████████████ ████████████████   ██████████████ ██████  ██████ ██████          ██████ ████████████   
    //  ██░░░░░░░░░░██   ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██  ██░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░░░██   ██░░░░░░░░░░██ ██░░██  ██░░██ ██░░██████████  ██░░██ ██░░░░░░░░████ 
    //  ██░░██████░░██   ██░░██████░░██ ██░░██████████ ██░░██  ██░░████ ██░░██████████ ██░░████████░░██   ██░░██████░░██ ██░░██  ██░░██ ██░░░░░░░░░░██  ██░░██ ██░░████░░░░██ 
    //  ██░░██  ██░░██   ██░░██  ██░░██ ██░░██         ██░░██  ██░░██   ██░░██         ██░░██    ██░░██   ██░░██  ██░░██ ██░░██  ██░░██ ██░░██████░░██  ██░░██ ██░░██  ██░░██ 
    //  ██░░██████░░████ ██░░██████░░██ ██░░██         ██░░██████░░██   ██░░██         ██░░████████░░██   ██░░██  ██░░██ ██░░██  ██░░██ ██░░██  ██░░██  ██░░██ ██░░██  ██░░██ 
    //  ██░░░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██         ██░░░░░░░░░░██   ██░░██  ██████ ██░░░░░░░░░░░░██   ██░░██  ██░░██ ██░░██  ██░░██ ██░░██  ██░░██  ██░░██ ██░░██  ██░░██ 
    //  ██░░████████░░██ ██░░██████░░██ ██░░██         ██░░██████░░██   ██░░██  ██░░██ ██░░██████░░████   ██░░██  ██░░██ ██░░██  ██░░██ ██░░██  ██░░██  ██░░██ ██░░██  ██░░██ 
    //  ██░░██    ██░░██ ██░░██  ██░░██ ██░░██         ██░░██  ██░░██   ██░░██  ██░░██ ██░░██  ██░░██     ██░░██  ██░░██ ██░░██  ██░░██ ██░░██  ██░░██████░░██ ██░░██  ██░░██ 
    //  ██░░████████░░██ ██░░██  ██░░██ ██░░██████████ ██░░██  ██░░████ ██░░██████░░██ ██░░██  ██░░██████ ██░░██████░░██ ██░░██████░░██ ██░░██  ██░░░░░░░░░░██ ██░░████░░░░██ 
    //  ██░░░░░░░░░░░░██ ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░██  ██░░░░██ ██░░░░░░░░░░██ ██░░██  ██░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██  ██████████░░██ ██░░░░░░░░████ 
    //  ████████████████ ██████  ██████ ██████████████ ██████  ████████ ██████████████ ██████  ██████████ ██████████████ ██████████████ ██████          ██████ ████████████   
                                                                                                                                                                           
                                                                                           
    //  ██████  ██████ ██████████ ██████████████ ██████  ██████ ██████████████ ██████         
    //  ██░░██  ██░░██ ██░░░░░░██ ██░░░░░░░░░░██ ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░██         
    //  ██░░██  ██░░██ ████░░████ ██░░██████████ ██░░██  ██░░██ ██░░██████░░██ ██░░██         
    //  ██░░██  ██░░██   ██░░██   ██░░██         ██░░██  ██░░██ ██░░██  ██░░██ ██░░██         
    //  ██░░██  ██░░██   ██░░██   ██░░██████████ ██░░██  ██░░██ ██░░██████░░██ ██░░██         
    //  ██░░██  ██░░██   ██░░██   ██░░░░░░░░░░██ ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░██         
    //  ██░░██  ██░░██   ██░░██   ██████████░░██ ██░░██  ██░░██ ██░░██████░░██ ██░░██         
    //  ██░░░░██░░░░██   ██░░██           ██░░██ ██░░██  ██░░██ ██░░██  ██░░██ ██░░██         
    //  ████░░░░░░████ ████░░████ ██████████░░██ ██░░██████░░██ ██░░██  ██░░██ ██░░██████████ 
    //    ████░░████   ██░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██  ██░░██ ██░░░░░░░░░░██ 
    //      ██████     ██████████ ██████████████ ██████████████ ██████  ██████ ██████████████ 

    

    // Step 3: Set the innerHTML of the mediaVisual element with the video and paragraph
    // mediaVisual.innerHTML = `
    //   <video id="mediaVisualVideo" autoplay loop muted playsinline>
    //     <source src="./assets/backgroundVisual/${name}.mp4" type="video/mp4">
    //   </video>
    // `;
    // Replace 'name' with your variable that contains the file name

    if (backgroundVisual) { // see if the value is true, don't bother running if false
      const mediaContainer = document.getElementById('mediaContainer');
      const mediaVisual = document.createElement('div');
      mediaVisual.id = 'mediaVisual';
      const filePath = `./assets/backgroundVisual/${name}.mp4`;

      fetch(filePath)
      .then(response => {
        if (response.ok) {
          // File exists, proceed to set the video in innerHTML
          mediaVisual.innerHTML = `
            <video id="mediaVisualVideo" autoplay loop muted playsinline>
              <source src="${filePath}" type="video/mp4">
            </video>
          `;
          mediaContainer.appendChild(mediaVisual);

        } else {
          // File does not exist, handle accordingly
          console.log("File does not exist");
        }
      })
      .catch(error => {
        // Error fetching the file (possibly due to network issues or file not existing)
        console.error("Error fetching the file bleh:", error);
      });
    }

    // Append the mediaVisual element to the mediaContainer
    // mediaContainer.appendChild(mediaVisual);
                                                                
    //###################################################################################################################################################################

    //###################################################################################################################################################################
    // container
    const scrollableContent = document.querySelector('.scrollableContent');
    // const mediaContainer = document.getElementById('mediaContainer');
    const backgroundColorCheckbox = document.getElementById('backgroundColorCheckbox');
    const gapCheckbox = document.getElementById('gapCheckbox');
    const wrapCheckbox = document.getElementById('wrapCheckbox');
    // const mediaVisual = document.getElementById('mediaVisual');

    //media
    const originalDimensionsCheckbox = document.getElementById('originalDimensionsCheckbox');
    const borderCheckbox = document.getElementById('borderCheckbox');

    // floating
    const floatingBorderCheckbox = document.getElementById('floatingBorderCheckbox');
    const floatingBorderColorCheckbox = document.getElementById('floatingBorderColorCheckbox');
    const floatingBorderRadiusCheckbox = document.getElementById('floatingBorderRadiusCheckbox');
    const floatingBorderGapCheckbox = document.getElementById('floatingBorderGapCheckbox');
    // const testMediaPictures = document.querySelectorAll('.testMediaItemPicture');
    // const otherNotes = document.getElementById('otherNotes');
    // topAdjustment = 50;
    // otherNotes.style.top = '' + topAdjustment + 'px';
    // const testMediaElements = document.querySelectorAll('.testMedia');
    //###################################################################################################################################################################


    gapChange(gap); // Default values for wrap and gap
    wrapChange(wrap);

    


    //###################################################################################################################################################################
    // backgroundColor
    // This should handle pictures and videos as well                                                                                                                                                      
    //  ██████████████   ██████████████ ██████████████ ██████  ████████ ██████████████ ████████████████   ██████████████ ██████  ██████ ██████          ██████ ████████████   
    //  ██░░░░░░░░░░██   ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██  ██░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░░░██   ██░░░░░░░░░░██ ██░░██  ██░░██ ██░░██████████  ██░░██ ██░░░░░░░░████ 
    //  ██░░██████░░██   ██░░██████░░██ ██░░██████████ ██░░██  ██░░████ ██░░██████████ ██░░████████░░██   ██░░██████░░██ ██░░██  ██░░██ ██░░░░░░░░░░██  ██░░██ ██░░████░░░░██ 
    //  ██░░██  ██░░██   ██░░██  ██░░██ ██░░██         ██░░██  ██░░██   ██░░██         ██░░██    ██░░██   ██░░██  ██░░██ ██░░██  ██░░██ ██░░██████░░██  ██░░██ ██░░██  ██░░██ 
    //  ██░░██████░░████ ██░░██████░░██ ██░░██         ██░░██████░░██   ██░░██         ██░░████████░░██   ██░░██  ██░░██ ██░░██  ██░░██ ██░░██  ██░░██  ██░░██ ██░░██  ██░░██ 
    //  ██░░░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██         ██░░░░░░░░░░██   ██░░██  ██████ ██░░░░░░░░░░░░██   ██░░██  ██░░██ ██░░██  ██░░██ ██░░██  ██░░██  ██░░██ ██░░██  ██░░██ 
    //  ██░░████████░░██ ██░░██████░░██ ██░░██         ██░░██████░░██   ██░░██  ██░░██ ██░░██████░░████   ██░░██  ██░░██ ██░░██  ██░░██ ██░░██  ██░░██  ██░░██ ██░░██  ██░░██ 
    //  ██░░██    ██░░██ ██░░██  ██░░██ ██░░██         ██░░██  ██░░██   ██░░██  ██░░██ ██░░██  ██░░██     ██░░██  ██░░██ ██░░██  ██░░██ ██░░██  ██░░██████░░██ ██░░██  ██░░██ 
    //  ██░░████████░░██ ██░░██  ██░░██ ██░░██████████ ██░░██  ██░░████ ██░░██████░░██ ██░░██  ██░░██████ ██░░██████░░██ ██░░██████░░██ ██░░██  ██░░░░░░░░░░██ ██░░████░░░░██ 
    //  ██░░░░░░░░░░░░██ ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░██  ██░░░░██ ██░░░░░░░░░░██ ██░░██  ██░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██  ██████████░░██ ██░░░░░░░░████ 
    //  ████████████████ ██████  ██████ ██████████████ ██████  ████████ ██████████████ ██████  ██████████ ██████████████ ██████████████ ██████          ██████ ████████████   
    //                                                                                                                                                                        
    //                                                                                 
    //  ██████████████ ██████████████ ██████         ██████████████ ████████████████   
    //  ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██         ██░░░░░░░░░░██ ██░░░░░░░░░░░░██   
    //  ██░░██████████ ██░░██████░░██ ██░░██         ██░░██████░░██ ██░░████████░░██   
    //  ██░░██         ██░░██  ██░░██ ██░░██         ██░░██  ██░░██ ██░░██    ██░░██   
    //  ██░░██         ██░░██  ██░░██ ██░░██         ██░░██  ██░░██ ██░░████████░░██   
    //  ██░░██         ██░░██  ██░░██ ██░░██         ██░░██  ██░░██ ██░░░░░░░░░░░░██   
    //  ██░░██         ██░░██  ██░░██ ██░░██         ██░░██  ██░░██ ██░░██████░░████   
    //  ██░░██         ██░░██  ██░░██ ██░░██         ██░░██  ██░░██ ██░░██  ██░░██     
    //  ██░░██████████ ██░░██████░░██ ██░░██████████ ██░░██████░░██ ██░░██  ██░░██████ 
    //  ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██  ██░░░░░░██ 
    //  ██████████████ ██████████████ ██████████████ ██████████████ ██████  ██████████ 
    backgroundColorCheckbox.checked = backgroundColorCheck;
    updateBackgroundColor();
    backgroundColorCheckbox.addEventListener('change', updateBackgroundColor);
    function updateBackgroundColor() {
      // console.log('Function: Update Background Color');
      if (backgroundColorCheckbox.checked) {
        backgroundColor = document.getElementById("formBackgroundColor").value;
        document.getElementById("formBackgroundColor").disabled = false;
        // testMedia.style.background = `${background}px solid ${backgroundColor}`;
      } else {
        backgroundColor = 'white';
        // testMedia.style.background = `${background}px solid ${backgroundColor}`;
        document.getElementById("formBackgroundColor").disabled = true;
      }
      mediaContainer.style.background = backgroundColor; // Directly update the background of mediaContainer
    }

    document.getElementById("formBackgroundColor").addEventListener("input", function() {
      var inputValue = this.value;
      backgroundColor = inputValue;
      backgroundColor = this.value !== null ? this.value : 'black';
      this.value = backgroundColor;
      updateBackgroundColor(); // apply to all media items
    });

    //###################################################################################################################################################################


    //###################################################################################################################################################################
    // Placed before the media elements are created, as the container controls the gaps of the container, not the media itself                               
    //  ██████████████ ██████████████ ██████████████ 
    //  ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ 
    //  ██░░██████████ ██░░██████░░██ ██░░██████░░██ 
    //  ██░░██         ██░░██  ██░░██ ██░░██  ██░░██ 
    //  ██░░██         ██░░██████░░██ ██░░██████░░██ 
    //  ██░░██  ██████ ██░░░░░░░░░░██ ██░░░░░░░░░░██ 
    //  ██░░██  ██░░██ ██░░██████░░██ ██░░██████████ 
    //  ██░░██  ██░░██ ██░░██  ██░░██ ██░░██         
    //  ██░░██████░░██ ██░░██  ██░░██ ██░░██         
    //  ██░░░░░░░░░░██ ██░░██  ██░░██ ██░░██         
    //  ██████████████ ██████  ██████ ██████         
    //                                               
    gapCheckbox.addEventListener('change', () => {
        gap = gapCheckbox.checked ? parseInt(document.getElementById('formGap').value) : 0;
        gapChange(gap); // Pass the gap value to the imported function
    });

    document.getElementById("formGap").addEventListener("input", function() {
        let inputValue = parseInt(this.value);
        if (inputValue < 0) { // Ensure the value does not go below 0
            this.value = 0; // keep the input field non negative
            inputValue = 0; // Update inputValue as well
        }
        if (inputValue > 999) { // Check if the value is greater than 999 // If so, set it to 999
            this.value = 999;
            inputValue = 999; // Update inputValue as well
        }
        gap = inputValue; // Update the border variable with the input value
        gapChange(gap); // apply to all media items
    });
    //###################################################################################################################################################################

    //###################################################################################################################################################################
    // WRAP LISTENER                                                                
    //  ██████          ██████ ████████████████   ██████████████ ██████████████ 
    //  ██░░██          ██░░██ ██░░░░░░░░░░░░██   ██░░░░░░░░░░██ ██░░░░░░░░░░██ 
    //  ██░░██          ██░░██ ██░░████████░░██   ██░░██████░░██ ██░░██████░░██ 
    //  ██░░██          ██░░██ ██░░██    ██░░██   ██░░██  ██░░██ ██░░██  ██░░██ 
    //  ██░░██  ██████  ██░░██ ██░░████████░░██   ██░░██████░░██ ██░░██████░░██ 
    //  ██░░██  ██░░██  ██░░██ ██░░░░░░░░░░░░██   ██░░░░░░░░░░██ ██░░░░░░░░░░██ 
    //  ██░░██  ██░░██  ██░░██ ██░░██████░░████   ██░░██████░░██ ██░░██████████ 
    //  ██░░██████░░██████░░██ ██░░██  ██░░██     ██░░██  ██░░██ ██░░██         
    //  ██░░░░░░░░░░░░░░░░░░██ ██░░██  ██░░██████ ██░░██  ██░░██ ██░░██         
    //  ██░░██████░░██████░░██ ██░░██  ██░░░░░░██ ██░░██  ██░░██ ██░░██         
    //  ██████  ██████  ██████ ██████  ██████████ ██████  ██████ ██████         
    //                                                                          
    wrapCheckbox.addEventListener('change', () => {
        wrap = wrapCheckbox.checked ? 'wrap' : 'nowrap';
        wrapChange(wrap); // Pass the gap value to the imported function
    });
    //###################################################################################################################################################################


    //###################################################################################################################################################################
    // UPDATE WIDTH, HEIGHT, and ASPECT RATIO                                                                              
    //  ██████          ██████ ██████████ ████████████   ██████████████ ██████  ██████ 
    //  ██░░██          ██░░██ ██░░░░░░██ ██░░░░░░░░████ ██░░░░░░░░░░██ ██░░██  ██░░██ 
    //  ██░░██          ██░░██ ████░░████ ██░░████░░░░██ ██████░░██████ ██░░██  ██░░██ 
    //  ██░░██          ██░░██   ██░░██   ██░░██  ██░░██     ██░░██     ██░░██  ██░░██ 
    //  ██░░██  ██████  ██░░██   ██░░██   ██░░██  ██░░██     ██░░██     ██░░██████░░██ 
    //  ██░░██  ██░░██  ██░░██   ██░░██   ██░░██  ██░░██     ██░░██     ██░░░░░░░░░░██ 
    //  ██░░██  ██░░██  ██░░██   ██░░██   ██░░██  ██░░██     ██░░██     ██░░██████░░██ 
    //  ██░░██████░░██████░░██   ██░░██   ██░░██  ██░░██     ██░░██     ██░░██  ██░░██ 
    //  ██░░░░░░░░░░░░░░░░░░██ ████░░████ ██░░████░░░░██     ██░░██     ██░░██  ██░░██ 
    //  ██░░██████░░██████░░██ ██░░░░░░██ ██░░░░░░░░████     ██░░██     ██░░██  ██░░██ 
    //  ██████  ██████  ██████ ██████████ ████████████       ██████     ██████  ██████ 
    //             
    // updateAspectRatio(width, height);
    // updateMediaStyling(, floatingBorderGap);
    // document.getElementById("formRatioWidth").addEventListener('change', updateAspectRatio);
    // document.getElementById("formRatioWidth").addEventListener('change', function() {
    //   updateAspectRatio(width, height);
    //   updateMediaStyling();
    // });

    document.getElementById("formRatioWidth").addEventListener("input", updateWidth);
    function updateWidth() {
      // console.log('Function: Update Width');
      var widthInput = document.getElementById("formRatioWidth");
      var widthValue = parseInt(widthInput.value);
      if (widthValue < 1) { // Ensure the width does not go below 1
        widthInput.value = 1;
        widthValue = 1; // Update widthValue as well
      }
      width = widthValue;
      updateAspectRatio(width, height);
      updateMediaStyling();

    }
    //###################################################################################################################################################################

    //###################################################################################################################################################################                                                                                   
    //  ██████  ██████ ██████████████ ██████████ ██████████████ ██████  ██████ ██████████████ 
    //  ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░░░░░██ ██░░░░░░░░░░██ ██░░██  ██░░██ ██░░░░░░░░░░██ 
    //  ██░░██  ██░░██ ██░░██████████ ████░░████ ██░░██████████ ██░░██  ██░░██ ██████░░██████ 
    //  ██░░██  ██░░██ ██░░██           ██░░██   ██░░██         ██░░██  ██░░██     ██░░██     
    //  ██░░██████░░██ ██░░██████████   ██░░██   ██░░██         ██░░██████░░██     ██░░██     
    //  ██░░░░░░░░░░██ ██░░░░░░░░░░██   ██░░██   ██░░██  ██████ ██░░░░░░░░░░██     ██░░██     
    //  ██░░██████░░██ ██░░██████████   ██░░██   ██░░██  ██░░██ ██░░██████░░██     ██░░██     
    //  ██░░██  ██░░██ ██░░██           ██░░██   ██░░██  ██░░██ ██░░██  ██░░██     ██░░██     
    //  ██░░██  ██░░██ ██░░██████████ ████░░████ ██░░██████░░██ ██░░██  ██░░██     ██░░██     
    //  ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░░░░░██ ██░░░░░░░░░░██ ██░░██  ██░░██     ██░░██     
    //  ██████  ██████ ██████████████ ██████████ ██████████████ ██████  ██████     ██████     
    //                                                                                        
    document.getElementById("formRatioHeight").addEventListener("input", updateHeight);
    // document.getElementById("formRatioHeight").addEventListener("input", function() {
    //   updateHeight(width, height);
    // });
    // document.getElementById("formRatioHeight").addEventListener('change', updateAspectRatio);
    // document.getElementById("formRatioHeight").addEventListener('change', function() {
    //   updateAspectRatio(width, height);
    //   updateMediaStyling();
    // });
    function updateHeight() {
      console.log('Function: Update Height');
      var heightInput = document.getElementById("formRatioHeight"); // this value can not be accessed outside of this file, this is needed for dynamic updates
      var heightValue = parseInt(heightInput.value);
      if (heightValue < 1) { // Ensure the height does not go below 1
        heightInput.value = 1;
        heightValue = 1; // Update heightValue as well
      }
      height = heightValue; 
      updateAspectRatio(width, height);
      updateMediaStyling();

    }
    //###################################################################################################################################################################

    //###################################################################################################################################################################                                                                                                                             
    //  ██████████████ ████████████████   ██████████ ██████████████ ██████████ ██████          ██████ ██████████████ ██████         
    //  ██░░░░░░░░░░██ ██░░░░░░░░░░░░██   ██░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░██ ██░░██████████  ██░░██ ██░░░░░░░░░░██ ██░░██         
    //  ██░░██████░░██ ██░░████████░░██   ████░░████ ██░░██████████ ████░░████ ██░░░░░░░░░░██  ██░░██ ██░░██████░░██ ██░░██         
    //  ██░░██  ██░░██ ██░░██    ██░░██     ██░░██   ██░░██           ██░░██   ██░░██████░░██  ██░░██ ██░░██  ██░░██ ██░░██         
    //  ██░░██  ██░░██ ██░░████████░░██     ██░░██   ██░░██           ██░░██   ██░░██  ██░░██  ██░░██ ██░░██████░░██ ██░░██         
    //  ██░░██  ██░░██ ██░░░░░░░░░░░░██     ██░░██   ██░░██  ██████   ██░░██   ██░░██  ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░██         
    //  ██░░██  ██░░██ ██░░██████░░████     ██░░██   ██░░██  ██░░██   ██░░██   ██░░██  ██░░██  ██░░██ ██░░██████░░██ ██░░██         
    //  ██░░██  ██░░██ ██░░██  ██░░██       ██░░██   ██░░██  ██░░██   ██░░██   ██░░██  ██░░██████░░██ ██░░██  ██░░██ ██░░██         
    //  ██░░██████░░██ ██░░██  ██░░██████ ████░░████ ██░░██████░░██ ████░░████ ██░░██  ██░░░░░░░░░░██ ██░░██  ██░░██ ██░░██████████ 
    //  ██░░░░░░░░░░██ ██░░██  ██░░░░░░██ ██░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░██ ██░░██  ██████████░░██ ██░░██  ██░░██ ██░░░░░░░░░░██ 
    //  ██████████████ ██████  ██████████ ██████████ ██████████████ ██████████ ██████          ██████ ██████  ██████ ██████████████ 
    //                                                                                                                              
    //                                                                                                                                                                        
    //  ████████████   ██████████ ██████          ██████ ██████████████ ██████          ██████ ██████████████ ██████████ ██████████████ ██████          ██████ ██████████████ 
    //  ██░░░░░░░░████ ██░░░░░░██ ██░░██████████████░░██ ██░░░░░░░░░░██ ██░░██████████  ██░░██ ██░░░░░░░░░░██ ██░░░░░░██ ██░░░░░░░░░░██ ██░░██████████  ██░░██ ██░░░░░░░░░░██ 
    //  ██░░████░░░░██ ████░░████ ██░░░░░░░░░░░░░░░░░░██ ██░░██████████ ██░░░░░░░░░░██  ██░░██ ██░░██████████ ████░░████ ██░░██████░░██ ██░░░░░░░░░░██  ██░░██ ██░░██████████ 
    //  ██░░██  ██░░██   ██░░██   ██░░██████░░██████░░██ ██░░██         ██░░██████░░██  ██░░██ ██░░██           ██░░██   ██░░██  ██░░██ ██░░██████░░██  ██░░██ ██░░██         
    //  ██░░██  ██░░██   ██░░██   ██░░██  ██░░██  ██░░██ ██░░██████████ ██░░██  ██░░██  ██░░██ ██░░██████████   ██░░██   ██░░██  ██░░██ ██░░██  ██░░██  ██░░██ ██░░██████████ 
    //  ██░░██  ██░░██   ██░░██   ██░░██  ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░██  ██░░██  ██░░██ ██░░░░░░░░░░██   ██░░██   ██░░██  ██░░██ ██░░██  ██░░██  ██░░██ ██░░░░░░░░░░██ 
    //  ██░░██  ██░░██   ██░░██   ██░░██  ██████  ██░░██ ██░░██████████ ██░░██  ██░░██  ██░░██ ██████████░░██   ██░░██   ██░░██  ██░░██ ██░░██  ██░░██  ██░░██ ██████████░░██ 
    //  ██░░██  ██░░██   ██░░██   ██░░██          ██░░██ ██░░██         ██░░██  ██░░██████░░██         ██░░██   ██░░██   ██░░██  ██░░██ ██░░██  ██░░██████░░██         ██░░██ 
    //  ██░░████░░░░██ ████░░████ ██░░██          ██░░██ ██░░██████████ ██░░██  ██░░░░░░░░░░██ ██████████░░██ ████░░████ ██░░██████░░██ ██░░██  ██░░░░░░░░░░██ ██████████░░██ 
    //  ██░░░░░░░░████ ██░░░░░░██ ██░░██          ██░░██ ██░░░░░░░░░░██ ██░░██  ██████████░░██ ██░░░░░░░░░░██ ██░░░░░░██ ██░░░░░░░░░░██ ██░░██  ██████████░░██ ██░░░░░░░░░░██ 
    //  ████████████   ██████████ ██████          ██████ ██████████████ ██████          ██████ ██████████████ ██████████ ██████████████ ██████          ██████ ██████████████ 
                                                                                                                                            
    originalDimensionsCheckbox.checked = originalDimensions;

    updateOriginalDimensions();
    originalDimensionsCheckbox.addEventListener('change', updateOriginalDimensions);
    function updateOriginalDimensions() {
      // console.log('Function: Update Original Dimensions');
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
      updateMediaStyling();
    }
    //###################################################################################################################################################################

    //###################################################################################################################################################################
    //  BORDERS SIZE                                                                                              
    //  ██████████████   ██████████████ ████████████████   ████████████   ██████████████ ████████████████   
    //  ██░░░░░░░░░░██   ██░░░░░░░░░░██ ██░░░░░░░░░░░░██   ██░░░░░░░░████ ██░░░░░░░░░░██ ██░░░░░░░░░░░░██   
    //  ██░░██████░░██   ██░░██████░░██ ██░░████████░░██   ██░░████░░░░██ ██░░██████████ ██░░████████░░██   
    //  ██░░██  ██░░██   ██░░██  ██░░██ ██░░██    ██░░██   ██░░██  ██░░██ ██░░██         ██░░██    ██░░██   
    //  ██░░██████░░████ ██░░██  ██░░██ ██░░████████░░██   ██░░██  ██░░██ ██░░██████████ ██░░████████░░██   
    //  ██░░░░░░░░░░░░██ ██░░██  ██░░██ ██░░░░░░░░░░░░██   ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░░░██   
    //  ██░░████████░░██ ██░░██  ██░░██ ██░░██████░░████   ██░░██  ██░░██ ██░░██████████ ██░░██████░░████   
    //  ██░░██    ██░░██ ██░░██  ██░░██ ██░░██  ██░░██     ██░░██  ██░░██ ██░░██         ██░░██  ██░░██     
    //  ██░░████████░░██ ██░░██████░░██ ██░░██  ██░░██████ ██░░████░░░░██ ██░░██████████ ██░░██  ██░░██████ 
    //  ██░░░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██  ██░░░░░░██ ██░░░░░░░░████ ██░░░░░░░░░░██ ██░░██  ██░░░░░░██ 
    //  ████████████████ ██████████████ ██████  ██████████ ████████████   ██████████████ ██████  ██████████ 
    //                                                                                                      
    updateBorder();
    borderCheckbox.addEventListener('change', updateBorder);
    // document.getElementById("formBorder").addEventListener("input", updateBorder); // input field update

    function updateBorder() {
      // console.log('Function: Update Border');
      if (borderCheckbox.checked) {
        border = parseInt(document.getElementById("formBorder").value);
        document.getElementById("formBorder").disabled = false;
        document.getElementById("formBorderColor").disabled = false;
        document.getElementById("borderColorCheckbox").disabled = false;
      } else {
        border = 0;
        document.getElementById("formBorder").disabled = true;
        document.getElementById("formBorderColor").disabled = true;
        document.getElementById("borderColorCheckbox").disabled = true;
      }
      updateMediaStyling();
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
    //###################################################################################################################################################################

    //###################################################################################################################################################################
    // BORDER COLOR                                                                                                                                                                              
    // ██████████████ ██████████████ ██████         ██████████████ ████████████████   
    // ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██         ██░░░░░░░░░░██ ██░░░░░░░░░░░░██   
    // ██░░██████████ ██░░██████░░██ ██░░██         ██░░██████░░██ ██░░████████░░██   
    // ██░░██         ██░░██  ██░░██ ██░░██         ██░░██  ██░░██ ██░░██    ██░░██   
    // ██░░██         ██░░██  ██░░██ ██░░██         ██░░██  ██░░██ ██░░████████░░██   
    // ██░░██         ██░░██  ██░░██ ██░░██         ██░░██  ██░░██ ██░░░░░░░░░░░░██   
    // ██░░██         ██░░██  ██░░██ ██░░██         ██░░██  ██░░██ ██░░██████░░████   
    // ██░░██         ██░░██  ██░░██ ██░░██         ██░░██  ██░░██ ██░░██  ██░░██     
    // ██░░██████████ ██░░██████░░██ ██░░██████████ ██░░██████░░██ ██░░██  ██░░██████ 
    // ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██  ██░░░░░░██ 
    // ██████████████ ██████████████ ██████████████ ██████████████ ██████  ██████████ 
    //                                                                                                                                                                                        
    borderColorCheckbox.addEventListener('change', updateBorderColor);
    function updateBorderColor() {
      // console.log('Function: Update Border Color');
      if (borderColorCheckbox.checked) {
        borderColor = document.getElementById("formBorderColor").value;
        document.getElementById("formBorderColor").disabled = false;
        // testMedia.style.border = `${border}px solid ${borderColor}`;
      } else {
        borderColor = 'black';
        // testMedia.style.border = `${border}px solid ${borderColor}`;
        document.getElementById("formBorderColor").disabled = true;
      }
      updateMediaStyling();
    }

    document.getElementById("formBorderColor").addEventListener("input", function() {
      var inputValue = this.value;
      borderColor = inputValue;
      borderColor = this.value !== null ? this.value : 'black';
      this.value = borderColor;
      updateBorderColor(); // apply to all media items
    });
    //###################################################################################################################################################################

    //###################################################################################################################################################################
    // BORDER RADIUS                                                                               
    //  ████████████████   ██████████████ ████████████   ██████████ ██████  ██████ ██████████████ 
    //  ██░░░░░░░░░░░░██   ██░░░░░░░░░░██ ██░░░░░░░░████ ██░░░░░░██ ██░░██  ██░░██ ██░░░░░░░░░░██ 
    //  ██░░████████░░██   ██░░██████░░██ ██░░████░░░░██ ████░░████ ██░░██  ██░░██ ██░░██████████ 
    //  ██░░██    ██░░██   ██░░██  ██░░██ ██░░██  ██░░██   ██░░██   ██░░██  ██░░██ ██░░██         
    //  ██░░████████░░██   ██░░██████░░██ ██░░██  ██░░██   ██░░██   ██░░██  ██░░██ ██░░██████████ 
    //  ██░░░░░░░░░░░░██   ██░░░░░░░░░░██ ██░░██  ██░░██   ██░░██   ██░░██  ██░░██ ██░░░░░░░░░░██ 
    //  ██░░██████░░████   ██░░██████░░██ ██░░██  ██░░██   ██░░██   ██░░██  ██░░██ ██████████░░██ 
    //  ██░░██  ██░░██     ██░░██  ██░░██ ██░░██  ██░░██   ██░░██   ██░░██  ██░░██         ██░░██ 
    //  ██░░██  ██░░██████ ██░░██  ██░░██ ██░░████░░░░██ ████░░████ ██░░██████░░██ ██████████░░██ 
    //  ██░░██  ██░░░░░░██ ██░░██  ██░░██ ██░░░░░░░░████ ██░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ 
    //  ██████  ██████████ ██████  ██████ ████████████   ██████████ ██████████████ ██████████████ 
    //                                                                                            
    updateBorderRadius();
    borderRadiusCheckbox.addEventListener('change', updateBorderRadius);
    function updateBorderRadius() {
      // console.log('Function: Update Border Radius');
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
      updateMediaStyling();
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
    //###################################################################################################################################################################

    //###################################################################################################################################################################
    //                                                                                                               
    //  ██████  ██████ ██████████████ ██████  ██████ ██████████████ ████████████████   ██████████████ ████████████   
    //  ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░░░██   ██░░░░░░░░░░██ ██░░░░░░░░████ 
    //  ██░░██  ██░░██ ██░░██████░░██ ██░░██  ██░░██ ██░░██████████ ██░░████████░░██   ██░░██████████ ██░░████░░░░██ 
    //  ██░░██  ██░░██ ██░░██  ██░░██ ██░░██  ██░░██ ██░░██         ██░░██    ██░░██   ██░░██         ██░░██  ██░░██ 
    //  ██░░██████░░██ ██░░██  ██░░██ ██░░██  ██░░██ ██░░██████████ ██░░████████░░██   ██░░██████████ ██░░██  ██░░██ 
    //  ██░░░░░░░░░░██ ██░░██  ██░░██ ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░░░██   ██░░░░░░░░░░██ ██░░██  ██░░██ 
    //  ██░░██████░░██ ██░░██  ██░░██ ██░░██  ██░░██ ██░░██████████ ██░░██████░░████   ██░░██████████ ██░░██  ██░░██ 
    //  ██░░██  ██░░██ ██░░██  ██░░██ ██░░░░██░░░░██ ██░░██         ██░░██  ██░░██     ██░░██         ██░░██  ██░░██ 
    //  ██░░██  ██░░██ ██░░██████░░██ ████░░░░░░████ ██░░██████████ ██░░██  ██░░██████ ██░░██████████ ██░░████░░░░██ 
    //  ██░░██  ██░░██ ██░░░░░░░░░░██   ████░░████   ██░░░░░░░░░░██ ██░░██  ██░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░████ 
    //  ██████  ██████ ██████████████     ██████     ██████████████ ██████  ██████████ ██████████████ ████████████   
    //                                                                                                               
    //                                                                                                                   
    //  ██████████████ ██████████████ ████████  ████████ ██████         ██████████ ██████          ██████ ██████████████ 
    //  ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░██  ██░░░░██ ██░░██         ██░░░░░░██ ██░░██████████  ██░░██ ██░░░░░░░░░░██ 
    //  ██░░██████████ ██████░░██████ ████░░██  ██░░████ ██░░██         ████░░████ ██░░░░░░░░░░██  ██░░██ ██░░██████████ 
    //  ██░░██             ██░░██       ██░░░░██░░░░██   ██░░██           ██░░██   ██░░██████░░██  ██░░██ ██░░██         
    //  ██░░██████████     ██░░██       ████░░░░░░████   ██░░██           ██░░██   ██░░██  ██░░██  ██░░██ ██░░██         
    //  ██░░░░░░░░░░██     ██░░██         ████░░████     ██░░██           ██░░██   ██░░██  ██░░██  ██░░██ ██░░██  ██████ 
    //  ██████████░░██     ██░░██           ██░░██       ██░░██           ██░░██   ██░░██  ██░░██  ██░░██ ██░░██  ██░░██ 
    //          ██░░██     ██░░██           ██░░██       ██░░██           ██░░██   ██░░██  ██░░██████░░██ ██░░██  ██░░██ 
    //  ██████████░░██     ██░░██           ██░░██       ██░░██████████ ████░░████ ██░░██  ██░░░░░░░░░░██ ██░░██████░░██ 
    //  ██░░░░░░░░░░██     ██░░██           ██░░██       ██░░░░░░░░░░██ ██░░░░░░██ ██░░██  ██████████░░██ ██░░░░░░░░░░██ 
    //  ██████████████     ██████           ██████       ██████████████ ██████████ ██████          ██████ ██████████████ 
    //                                                                                                                   
    // Function to be called when an item is hovered
    function onHover() {
      // console.log("Item hovered!");
      // Parse the JSON string from the data-item attribute
      // const dataItem = JSON.parse(event.target.getAttribute('data-item'));
      // Print the value of the id
      // console.log("Hovered item ID:", dataItem.id);
      const testMedia = event.target; // This is the hovered .testMedia element
      const rect = testMedia.getBoundingClientRect(); // Get position and size of original media item

      let floatingBorderElement = testMedia.parentNode.querySelector('.testMediaCopy');
      testMedia.style.zIndex = '5'; // Z-index for this element should be higher than its background border
      let scrollDistanceLeft = scrollableContent.scrollLeft;
      let scrollDistanceTop = scrollableContent.scrollTop;
      const sideMenuWidth = 200; // Width of the side menu
      floatingBorderElement = testMedia.cloneNode(true);
      floatingBorderElement.classList.add('testMediaCopy');
      floatingBorderElement.style.position = 'absolute';
      floatingBorderElement.style.zIndex = '4';
      floatingBorderElement.style['background-color'] = 'transparent';
      floatingBorderElement.style.border = `${floatingBorder}px solid ${floatingBorderColor}`;
      floatingBorderElement.style['border-radius'] = `${floatingBorderRadius}px`;
      // console.log('    after mouseEnter Border: ' + border); // border is not updating, causing non-bordered hover border to be off center
      floatingBorderPadding = (border) + (floatingBorderGap) + 'px'; // border is not updating here?
      let floatingBorderTopAdjustment = `${(rect.top) - (floatingBorder) - (floatingBorderGap) + (scrollDistanceTop) - 50}px`;
      let floatingBorderLeftAdjustment = `${(rect.left) - (floatingBorder) - (floatingBorderGap) + (scrollDistanceLeft) - (sideMenuWidth) + 0}px`;
      floatingBorderElement.style.padding = floatingBorderPadding;
      floatingBorderElement.style.top = floatingBorderTopAdjustment;
      floatingBorderElement.style.left = floatingBorderLeftAdjustment;
      testMedia.parentNode.appendChild(floatingBorderElement);
    }

    function onMouseLeave() {
      // console.log("Mouse left the item!");
      // const dataItem = JSON.parse(event.target.getAttribute('data-item'));
      // Print the value of the id
      // console.log("Hovered item ID:", dataItem.id);
      const testMedia = event.target; // This is the hovered .testMedia element
      testMedia.style.zIndex = '2'; // Z-index for this element should be higher than its background border
      const copies = testMedia.parentNode.querySelectorAll('.testMediaCopy');
      copies.forEach(copy => {
          copy.parentNode.removeChild(copy);
      });
    }

    // Add event listener to each item with class 'item'
    document.querySelectorAll('.testMedia').forEach(item => {
      item.addEventListener('mouseenter', onHover);
      item.addEventListener('mouseleave', onMouseLeave);
    });
    //###################################################################################################################################################################

    //################################################################################################################################################################### 
    //                                                                                               
    //  ██████  ██████ ██████████████ ████████████   ██████████████ ██████████████ ██████████████    
    //  ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░░░░░░░████ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██    
    //  ██░░██  ██░░██ ██░░██████░░██ ██░░████░░░░██ ██░░██████░░██ ██████░░██████ ██░░██████████    
    //  ██░░██  ██░░██ ██░░██  ██░░██ ██░░██  ██░░██ ██░░██  ██░░██     ██░░██     ██░░██            
    //  ██░░██  ██░░██ ██░░██████░░██ ██░░██  ██░░██ ██░░██████░░██     ██░░██     ██░░██████████    
    //  ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░██  ██░░██ ██░░░░░░░░░░██     ██░░██     ██░░░░░░░░░░██    
    //  ██░░██  ██░░██ ██░░██████████ ██░░██  ██░░██ ██░░██████░░██     ██░░██     ██░░██████████    
    //  ██░░██  ██░░██ ██░░██         ██░░██  ██░░██ ██░░██  ██░░██     ██░░██     ██░░██            
    //  ██░░██████░░██ ██░░██         ██░░████░░░░██ ██░░██  ██░░██     ██░░██     ██░░██████████    
    //  ██░░░░░░░░░░██ ██░░██         ██░░░░░░░░████ ██░░██  ██░░██     ██░░██     ██░░░░░░░░░░██    
    //  ██████████████ ██████         ████████████   ██████  ██████     ██████     ██████████████    
    //                                                                                               
    //                                                                                                                   
    //  ██████████████ ██████████████ ████████  ████████ ██████         ██████████ ██████          ██████ ██████████████ 
    //  ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░██  ██░░░░██ ██░░██         ██░░░░░░██ ██░░██████████  ██░░██ ██░░░░░░░░░░██ 
    //  ██░░██████████ ██████░░██████ ████░░██  ██░░████ ██░░██         ████░░████ ██░░░░░░░░░░██  ██░░██ ██░░██████████ 
    //  ██░░██             ██░░██       ██░░░░██░░░░██   ██░░██           ██░░██   ██░░██████░░██  ██░░██ ██░░██         
    //  ██░░██████████     ██░░██       ████░░░░░░████   ██░░██           ██░░██   ██░░██  ██░░██  ██░░██ ██░░██         
    //  ██░░░░░░░░░░██     ██░░██         ████░░████     ██░░██           ██░░██   ██░░██  ██░░██  ██░░██ ██░░██  ██████ 
    //  ██████████░░██     ██░░██           ██░░██       ██░░██           ██░░██   ██░░██  ██░░██  ██░░██ ██░░██  ██░░██ 
    //          ██░░██     ██░░██           ██░░██       ██░░██           ██░░██   ██░░██  ██░░██████░░██ ██░░██  ██░░██ 
    //  ██████████░░██     ██░░██           ██░░██       ██░░██████████ ████░░████ ██░░██  ██░░░░░░░░░░██ ██░░██████░░██ 
    //  ██░░░░░░░░░░██     ██░░██           ██░░██       ██░░░░░░░░░░██ ██░░░░░░██ ██░░██  ██████████░░██ ██░░░░░░░░░░██ 
    //  ██████████████     ██████           ██████       ██████████████ ██████████ ██████          ██████ ██████████████ 
    //                                                                                                                   
    function updateMediaStyling() {
      // console.log('Function: Update Media Styling');

      // THIS IS A WORKING WAY TO UPDATE ALL MEDIA ITEMS AT ONCE WITHOUT HAVING TO CREATE LOOPS
      // DO THE SAME THING FOR FLOATING BORDER AND YOU SHOULDNT HAVE UNECCESSARY REPEATING LOOPS
      let selector = ".testMedia";
      let setHeight = 200; // Fixed height for displayed media
      let ratio = width / height; // Calculate the aspect ratio
      let ratioedWidth = setHeight * ratio; // Apply the aspect ratio to the new fixed height
      const styleSheets = Array.from(document.styleSheets); // Find the stylesheet already loaded in the document
      const styleSheet = styleSheets.find(sheet => sheet.href && sheet.href.endsWith('main.css'));
      let ruleText;         // Determine the correct CSS rule based on 'width'
      if (width === 'auto') {
          ruleText = `{ width: auto; height: ${setHeight}px; border: ${border}px solid ${borderColor}; border-radius: ${borderRadius}px; }`;
      } else {
          ruleText = `{ width: ${ratioedWidth}px; height: ${setHeight}px; border: ${border}px solid ${borderColor}; border-radius: ${borderRadius}px; }`;
      }
      if (styleSheet) { // potentially create a dynaimc style sheet that is less crowded and easier to search through
          let ruleFound = false;
          for (let i = 0; i < styleSheet.cssRules.length; i++) {
            // console.log(i);
              if (styleSheet.cssRules[i].selectorText === selector) {
                  // Rule exists, so update it
                  styleSheet.deleteRule(i);
                  styleSheet.insertRule(`${selector} ${ruleText}`, i);
                  ruleFound = true;
                  break;
              }
          }
          if (!ruleFound) {
              // Rule does not exist, add it
              styleSheet.insertRule(`${selector} ${ruleText}`, styleSheet.cssRules.length);
          }
      } else {
          console.log('The specified stylesheet was not found in the document.');
      }

      updateTestMediaPicturesSizes(width, height, border, borderRadius);
      // testMediaElements.forEach(testMedia => {
    }
    //###################################################################################################################################################################
          
    //###################################################################################################################################################################
    // STYLE EVERYTHING HERE DOWN BEFORE LAUNCHING AGAIN
    // FLOATING BORDER FOR SELECTED MATERIAL
    // These hovered elements dont exist until the original is hovered, you can't reference them directly you have to use variables.
    // Everything Floating or hovered HAS TO come after the code that creates the floating border                                                                                                                 
    //  ██████████████ ██████         ██████████████ ██████████████ ██████████████ ██████████ ██████          ██████ ██████████████ 
    //  ██░░░░░░░░░░██ ██░░██         ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░██ ██░░██████████  ██░░██ ██░░░░░░░░░░██ 
    //  ██░░██████████ ██░░██         ██░░██████░░██ ██░░██████░░██ ██████░░██████ ████░░████ ██░░░░░░░░░░██  ██░░██ ██░░██████████ 
    //  ██░░██         ██░░██         ██░░██  ██░░██ ██░░██  ██░░██     ██░░██       ██░░██   ██░░██████░░██  ██░░██ ██░░██         
    //  ██░░██████████ ██░░██         ██░░██  ██░░██ ██░░██████░░██     ██░░██       ██░░██   ██░░██  ██░░██  ██░░██ ██░░██         
    //  ██░░░░░░░░░░██ ██░░██         ██░░██  ██░░██ ██░░░░░░░░░░██     ██░░██       ██░░██   ██░░██  ██░░██  ██░░██ ██░░██  ██████ 
    //  ██░░██████████ ██░░██         ██░░██  ██░░██ ██░░██████░░██     ██░░██       ██░░██   ██░░██  ██░░██  ██░░██ ██░░██  ██░░██ 
    //  ██░░██         ██░░██         ██░░██  ██░░██ ██░░██  ██░░██     ██░░██       ██░░██   ██░░██  ██░░██████░░██ ██░░██  ██░░██ 
    //  ██░░██         ██░░██████████ ██░░██████░░██ ██░░██  ██░░██     ██░░██     ████░░████ ██░░██  ██░░░░░░░░░░██ ██░░██████░░██ 
    //  ██░░██         ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██  ██░░██     ██░░██     ██░░░░░░██ ██░░██  ██████████░░██ ██░░░░░░░░░░██ 
    //  ██████         ██████████████ ██████████████ ██████  ██████     ██████     ██████████ ██████          ██████ ██████████████ 
    //                                                                                                                              
    //                                                                                                      
    //  ██████████████   ██████████████ ████████████████   ████████████   ██████████████ ████████████████   
    //  ██░░░░░░░░░░██   ██░░░░░░░░░░██ ██░░░░░░░░░░░░██   ██░░░░░░░░████ ██░░░░░░░░░░██ ██░░░░░░░░░░░░██   
    //  ██░░██████░░██   ██░░██████░░██ ██░░████████░░██   ██░░████░░░░██ ██░░██████████ ██░░████████░░██   
    //  ██░░██  ██░░██   ██░░██  ██░░██ ██░░██    ██░░██   ██░░██  ██░░██ ██░░██         ██░░██    ██░░██   
    //  ██░░██████░░████ ██░░██  ██░░██ ██░░████████░░██   ██░░██  ██░░██ ██░░██████████ ██░░████████░░██   
    //  ██░░░░░░░░░░░░██ ██░░██  ██░░██ ██░░░░░░░░░░░░██   ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░░░██   
    //  ██░░████████░░██ ██░░██  ██░░██ ██░░██████░░████   ██░░██  ██░░██ ██░░██████████ ██░░██████░░████   
    //  ██░░██    ██░░██ ██░░██  ██░░██ ██░░██  ██░░██     ██░░██  ██░░██ ██░░██         ██░░██  ██░░██     
    //  ██░░████████░░██ ██░░██████░░██ ██░░██  ██░░██████ ██░░████░░░░██ ██░░██████████ ██░░██  ██░░██████ 
    //  ██░░░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██  ██░░░░░░██ ██░░░░░░░░████ ██░░░░░░░░░░██ ██░░██  ██░░░░░░██ 
    //  ████████████████ ██████████████ ██████  ██████████ ████████████   ██████████████ ██████  ██████████ 
    // there may be an issue with these being on a seperate file from the app.js file
    updateFloatingBorder();
    floatingBorderCheckbox.addEventListener('change', updateFloatingBorder); //checkbox update
    document.getElementById("formFloatingBorderColor").addEventListener("input", updateFloatingBorderColor); // input field update
    function updateFloatingBorder() {
    console.log('Function: updateFloatingBorder')
    // console.log('Function: Update Floating Border');
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
    //   updateMediaStyling();
    
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
    //###################################################################################################################################################################

    //###################################################################################################################################################################
    // FLOATING BORDER COLOR
    // These hovered elements dont exist until the original is hovered, you can't reference them directly you have to use variables.
    // ██████████████ ██████████████ ██████         ██████████████ ████████████████   
    // ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██         ██░░░░░░░░░░██ ██░░░░░░░░░░░░██   
    // ██░░██████████ ██░░██████░░██ ██░░██         ██░░██████░░██ ██░░████████░░██   
    // ██░░██         ██░░██  ██░░██ ██░░██         ██░░██  ██░░██ ██░░██    ██░░██   
    // ██░░██         ██░░██  ██░░██ ██░░██         ██░░██  ██░░██ ██░░████████░░██   
    // ██░░██         ██░░██  ██░░██ ██░░██         ██░░██  ██░░██ ██░░░░░░░░░░░░██   
    // ██░░██         ██░░██  ██░░██ ██░░██         ██░░██  ██░░██ ██░░██████░░████   
    // ██░░██         ██░░██  ██░░██ ██░░██         ██░░██  ██░░██ ██░░██  ██░░██     
    // ██░░██████████ ██░░██████░░██ ██░░██████████ ██░░██████░░██ ██░░██  ██░░██████ 
    // ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██  ██░░░░░░██ 
    // ██████████████ ██████████████ ██████████████ ██████████████ ██████  ██████████ 
    updateFloatingBorderColor();
    floatingBorderColorCheckbox.addEventListener('change', updateFloatingBorderColor);
    function updateFloatingBorderColor() {
    // console.log('Function: Update Floating Border Color');
    if (floatingBorderColorCheckbox.checked) {
        floatingBorderColor = document.getElementById("formFloatingBorderColor").value;
        document.getElementById("formFloatingBorderColor").disabled = false;
    } else {
        floatingBorderColor = 'black';
        document.getElementById("formFloatingBorderColor").disabled = true;
    } // document.getElementById("floatingBorderColorValue").textContent = `Floating Border Color Size: ${floatingBorderColor}`;
    //   updateMediaStyling();
    }

    // document.getElementById("formFloatingBorderColor").addEventListener("input", function() {
    //   var inputValue = this.value;
    //   floatingBorderColor = inputValue;
    //   floatingBorderColor = this.value !== null ? this.value : 'black';
    //   this.value = floatingBorderColor;
    //   updateFloatingBorderColor(); // apply to all media items
    // });
    //###################################################################################################################################################################

    //###################################################################################################################################################################
    // FLOATING BORDER RADIUS FOR SELECTED MATERIAL
    // These hovered elements dont exist until the original is hovered, you can't reference them directly you have to use variables.
    //  ████████████████   ██████████████ ████████████   ██████████ ██████  ██████ ██████████████ 
    //  ██░░░░░░░░░░░░██   ██░░░░░░░░░░██ ██░░░░░░░░████ ██░░░░░░██ ██░░██  ██░░██ ██░░░░░░░░░░██ 
    //  ██░░████████░░██   ██░░██████░░██ ██░░████░░░░██ ████░░████ ██░░██  ██░░██ ██░░██████████ 
    //  ██░░██    ██░░██   ██░░██  ██░░██ ██░░██  ██░░██   ██░░██   ██░░██  ██░░██ ██░░██         
    //  ██░░████████░░██   ██░░██████░░██ ██░░██  ██░░██   ██░░██   ██░░██  ██░░██ ██░░██████████ 
    //  ██░░░░░░░░░░░░██   ██░░░░░░░░░░██ ██░░██  ██░░██   ██░░██   ██░░██  ██░░██ ██░░░░░░░░░░██ 
    //  ██░░██████░░████   ██░░██████░░██ ██░░██  ██░░██   ██░░██   ██░░██  ██░░██ ██████████░░██ 
    //  ██░░██  ██░░██     ██░░██  ██░░██ ██░░██  ██░░██   ██░░██   ██░░██  ██░░██         ██░░██ 
    //  ██░░██  ██░░██████ ██░░██  ██░░██ ██░░████░░░░██ ████░░████ ██░░██████░░██ ██████████░░██ 
    //  ██░░██  ██░░░░░░██ ██░░██  ██░░██ ██░░░░░░░░████ ██░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ 
    //  ██████  ██████████ ██████  ██████ ████████████   ██████████ ██████████████ ██████████████ 
    updateFloatingBorderRadius();
    floatingBorderRadiusCheckbox.addEventListener('change', updateFloatingBorderRadius);
    function updateFloatingBorderRadius() {
    // console.log('Function: Update Floating Border Radius');
    if (floatingBorderRadiusCheckbox.checked) {
        floatingBorderRadius = parseInt(document.getElementById("formFloatingBorderRadius").value);
        document.getElementById("formFloatingBorderRadius").disabled = false;
    } else {
        floatingBorderRadius = 0;
        document.getElementById("formFloatingBorderRadius").disabled = true;
    } // document.getElementById("floatingBorderRadiusValue").textContent = `Floating Border Radius: ${floatingBorderRadius}`;
    //   updateMediaStyling();
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
    //###################################################################################################################################################################

    //###################################################################################################################################################################
    // FLOATING BORDER GAP FOR SELECTED MATERIAL
    // These hovered elements dont exist until the original is hovered, you can't reference them directly you have to use variables.
    //  ██████████████ ██████████████ ██████████████ 
    //  ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ 
    //  ██░░██████████ ██░░██████░░██ ██░░██████░░██ 
    //  ██░░██         ██░░██  ██░░██ ██░░██  ██░░██ 
    //  ██░░██         ██░░██████░░██ ██░░██████░░██ 
    //  ██░░██  ██████ ██░░░░░░░░░░██ ██░░░░░░░░░░██ 
    //  ██░░██  ██░░██ ██░░██████░░██ ██░░██████████ 
    //  ██░░██  ██░░██ ██░░██  ██░░██ ██░░██         
    //  ██░░██████░░██ ██░░██  ██░░██ ██░░██         
    //  ██░░░░░░░░░░██ ██░░██  ██░░██ ██░░██         
    //  ██████████████ ██████  ██████ ██████         
    updateFloatingBorderGap();
    floatingBorderGapCheckbox.addEventListener('change', updateFloatingBorderGap);
    function updateFloatingBorderGap() {
    // console.log('Function: Update Floating Border Gap');
    if (floatingBorderGapCheckbox.checked) {
        floatingBorderGap = parseInt(document.getElementById("formFloatingBorderGap").value);
        document.getElementById("formFloatingBorderGap").disabled = false;
    } else {
        floatingBorderGap = 0;
        document.getElementById("formFloatingBorderGap").disabled = true;
    } // document.getElementById("floatingBorderGapValue").textContent = `Floating Border Gap Size: ${floatingBorderGap}`;
    //   updateMediaStyling();
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
    //###################################################################################################################################################################

  }
  export { applyStyling };