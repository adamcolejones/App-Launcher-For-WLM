// ********************************************************
// * A DESCRIPTION OF THE FUNCTIONALITY OF THE CODE BELOW *
// ********************************************************
// + To prevent new media from appearing blank for a brief moment, create a new container behind the old one, wait for it to load, then unhide it when the elements have loaded, then remove the old container
// + 
// + 
// + 
// + 
// + 
// + 
// + 
// + 
// + 
// + 
// + 
// + 
// + 
// + 
// + 
// + 
// + 
// + 
// + 
// + 

// ********************************************************
import { gapChange } from './gapChange.js';
import { wrapChange } from './wrapChange.js';
import { updateAspectRatio } from './updateAspectRatio.js';
// import { updateHeight } from './updateHeight.js';
// import { updateMediaStyling } from './updateMediaStyling.js';
import { updateTestMediaPicturesSizes } from './updateTestMediaPicturesSizes.js';
// import { settingsMenu } from './functions/settingsMenu.js';
// import { simplifyRatio } from './simplifyRatio.js';

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
  


  function applyStyling(tag) {

    //###################################################################################################################################################################
    // remove loading screen when all media images have loaded in.
    // loadingScreen.parentNode.removeChild(loadingScreen);

    // window.addEventListener('load', function() {
    //   const images = document.querySelectorAll('.testMediaItemPicture');
    //   let loadCount = 0;
  
    //   images.forEach(image => {
    //       image.addEventListener('load', () => {
    //           loadCount++;
    //           if (loadCount === images.length) {
    //               const loadingScreen = document.getElementById('loadingScreen');
    //               loadingScreen.parentNode.removeChild(loadingScreen);
    //           }
    //       });
  
    //       // If the image is already loaded (cached), manually trigger the load event
    //       if (image.complete) {
    //           image.dispatchEvent(new Event('load'));
    //       }
    //   });
    // });
    //###################################################################################################################################################################


    // If the list of items is empty, then you should avoid calling certain functions that use the items.
    // There should still be a container even if the items are missing.

    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
      let mediaData = data;
      // console.log(data);
      const selectedTag = mediaData.Tags.find(item => item.Name === tag);
      // const selectedTag = jsondata.Tags.find(item => item.Name === tag);

      // IF THESE VALUES RETURN NULL, THEY WILL BREAK THE APP.  IF ANY RETURN NULL, SET DEFAULT VALUES FOR THEM HERE

      // Meta
      let name = selectedTag.Name !== undefined ? selectedTag.Name : 'Undefined';

      // CONTAINER STYLING
        let scrollbarWidth; // used later
        let backgroundVisual = selectedTag.BackgroundVisual !== undefined ? selectedTag.BackgroundVisual : ""; // "checked", or "" (blank)
        // let backgroundVisualCheck = selectedTag.BackgroundVisualCheck;

        // BACKGROUND AUDIO
        let backgroundAudio = selectedTag.BackgroundAudio !== undefined ? selectedTag.BackgroundAudio : false;
        // BACKGROUND COLOR
        // BACKGROUNDCOLOR AND BACKGROUNDCOLORCHECK ARE BOTH REQUIRED VARIABLES TO HAVE DYNAMIC COLOR CHANGES WHILE PRESERVING USER'S LAST INPUT
        let backgroundColorCheck = selectedTag.BackgroundColorCheck !== undefined ? selectedTag.BackgroundColorCheck : ""; // "checked", or "" (blank)
        let backgroundColor = selectedTag.BackgroundColor !== undefined ? selectedTag.BackgroundColor : 'white';
        // GAP
        let gap = selectedTag.Gap !== undefined ? selectedTag.Gap : 5; 
        // WRAP
        let wrap = selectedTag.Wrap !== undefined ? selectedTag.Wrap : 'wrap'; // check json value
        let wrapCheckboxValue = wrap === 'wrap' ? ' checked' : ''; // assign input value


      // Media Styling
        let originalDimensions = selectedTag.OriginalDimensions !== undefined ? selectedTag.OriginalDimensions : false;
        let originalDimensionsCheckboxValue = originalDimensions ? ' checked' : '';
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
        let matchBorder = selectedTag.MatchBorder !== undefined ? selectedTag.MatchBorder : false; 
        let matchBorderCheckboxValue = matchBorder === true ? ' checked' : '';



      //###################################################################################################################################################################
      // i don't think the <p> tags need ids
      editCategoryMenu.innerHTML = `
        
        <p>Category Settings</p>
        <p>General Settings</p>
        <br>

        <p>BACKGROUND</p>
        <div class="settingsOptionContainer">
          <div class="settingsOption">
            <p id="backgroundVisual">Background Visual</p>
            <input id="backgroundVisualCheckbox" type="checkbox" ${backgroundVisual}>
            <input type="file" id="videoUpload" accept="video/*">
          </div>
          <div class="settingsOption">
            <p id="backgroundColor">Background Color</p>
            <input id="backgroundColorCheckbox" type="checkbox" ${backgroundColorCheck}>
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
            <input id="originalDimensionsCheckbox" type="checkbox" ${originalDimensionsCheckboxValue}>
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
            <input id="wrapCheckbox" type="checkbox" ${wrapCheckboxValue}>
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
            <p id="matchBorder">Match Border Settings</p><input id="matchBorderCheckbox" type="checkbox" ${matchBorderCheckboxValue}>          </div>
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
      // CONTAINER
        const scrollableContent = document.querySelector('.scrollableContent');
        let mediaContainer = document.getElementById('mediaContainer');
        mediaContainer.style.display = 'none';
        
        const backgroundVisualCheckbox = document.getElementById('backgroundVisualCheckbox');
        const backgroundColorCheckbox = document.getElementById('backgroundColorCheckbox');
        const formBackgroundColor = document.getElementById('formBackgroundColor');
        const gapCheckbox = document.getElementById('gapCheckbox');
        const wrapCheckbox = document.getElementById('wrapCheckbox');
        const matchBorderCheckbox = document.getElementById('matchBorderCheckbox');
        // const mediaVisual = document.getElementById('mediaVisual');

      // MEDIA
        const originalDimensionsCheckbox = document.getElementById('originalDimensionsCheckbox');
        const borderCheckbox = document.getElementById('borderCheckbox');
        const formBorderColor = document.getElementById('formBorderColor');
        const formBorderRadius = document.getElementById("formBorderRadius");

      // FLOATING
        const floatingBorderCheckbox = document.getElementById('floatingBorderCheckbox');
        const floatingBorderColorCheckbox = document.getElementById('floatingBorderColorCheckbox');
        const floatingBorderRadiusCheckbox = document.getElementById('floatingBorderRadiusCheckbox');
        const formFloatingBorderRadius = document.getElementById("formFloatingBorderRadius");
        const floatingBorderGapCheckbox = document.getElementById('floatingBorderGapCheckbox');
        const formFloatingBorderGap = document.getElementById("formFloatingBorderGap");
        // const testMediaPictures = document.querySelectorAll('.testMediaItemPicture');
        // const otherNotes = document.getElementById('otherNotes');
        // topAdjustment = 50;
        // otherNotes.style.top = '' + topAdjustment + 'px';
        // const testMediaElements = document.querySelectorAll('.testMedia');
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

      // This function will cause the electron app to flicker black when swapping out the video content
      // may need to consider loading videos elsewhere and then displaying them.  Would that not cause lag creating them all at once? 
      // Create the videos when they are selected and preserve them or create them all at once if not taxing on the computer


      // TRY THIS TO PREVENT BLACK STUTTER
      // PLAY AN INVISIBLE MOVIE
      updateBackgroundVisual();

      function updateBackgroundVisual() {
        // let mediaVisual = document.getElementById('mediaVisual');
        let mediaVisual;

        let mediaVisualVideo = document.getElementById('mediaVisualVideo');
        // Update the value of background visual
        backgroundVisual = backgroundVisualCheckbox.checked ? "checked" : "";
        // IF VIDEO BOX IS CHECKED, FIND THE BACKGROUND VIDEO AND DISPLAY IT
        if (backgroundVisual === "checked") {
          if (mediaVisualVideo) {
              mediaContainer.removeChild(mediaVisualVideo); // Remove the existing div if present
          }
          // Create a new video element
          mediaVisualVideo = document.createElement('video');
          mediaVisualVideo.id = 'mediaVisualVideo';
          mediaVisualVideo.loop = true;
          mediaVisualVideo.muted = true;
          mediaVisualVideo.playsInline = true;
          mediaContainer.appendChild(mediaVisualVideo);
          
          // Set video source and styles regardless of new creation or existing
          mediaVisualVideo.src = `./assets/backgroundVisual/${name}.mp4`;
          mediaVisualVideo.style.opacity = "0";
          mediaVisualVideo.addEventListener('canplaythrough', function() {
            mediaVisualVideo.play();
            mediaVisualVideo.style.opacity = "1";
          });
        } 
        // IF VIDEO BOX IS NOT CHECKED, DISPLAY BACKGROUND COLOR
        else {
          if (mediaVisualVideo) {
            mediaVisualVideo.style.opacity = "0"; // Set video transparency to 0
            mediaContainer.removeChild(mediaVisualVideo); // Optionally remove if not needed
          }
        }
      }
      
      // Attach the event listeners once, outside the update function THESE ARE DECLARED IN THE UPDATEBACKGROUNDVISUAL FUNCTION
      backgroundVisualCheckbox.addEventListener('change', updateBackgroundVisual);
      backgroundVisualCheckbox.addEventListener('change', saveStyling);
                                                              
      //###################################################################################################################################################################

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

      // BACKGROUNDCOLOR AND BACKGROUNDCOLOR CHECK ARE BOTH REQUIRED VARIABLES TO HAVE DYNAMIC COLOR CHANGES WHILE PRESERVING USER'S LAST INPUT
      backgroundColorCheckbox.checked = backgroundColorCheck;
      updateBackgroundColor();
      backgroundColorCheckbox.addEventListener('change', updateBackgroundColor);
      backgroundColorCheckbox.addEventListener('change', saveStyling);

      function updateBackgroundColor() {

        //NEW CODE
        let mediaVisualColor = document.getElementById('mediaVisualColor');
        let TEMPbackgroundColor;
        if (mediaVisualColor) {
          mediaContainer.removeChild(mediaVisualColor); // Remove the video if it exists
        }
        // Create a new div for the background color
        mediaVisualColor = document.createElement('div');
        mediaVisualColor.id = 'mediaVisualColor';
        mediaVisualColor.style.width = '100%'; // Set width to cover the container
        mediaVisualColor.style.height = '100%'; // Set height to cover the container

        // Update background color based on checkbox
        if (backgroundColorCheckbox.checked) {
            TEMPbackgroundColor = document.getElementById("formBackgroundColor").value;
            document.getElementById("formBackgroundColor").disabled = false;
            backgroundColorCheck = "checked";
        } else {
            TEMPbackgroundColor = 'white';
            document.getElementById("formBackgroundColor").disabled = true;
            backgroundColorCheck = "";
        }
        mediaVisualColor.style.background = TEMPbackgroundColor;
        mediaContainer.appendChild(mediaVisualColor); // Re-add the mediaVisual div to the mediaContainer

        // if (backgroundColorCheckbox.checked) {
        //   TEMPbackgroundColor = document.getElementById("formBackgroundColor").value;
        //   document.getElementById("formBackgroundColor").disabled = false;
        //   backgroundColorCheck = true;
        //   // testMedia.style.background = `${background}px solid ${backgroundColor}`;
        // } else {
        //   TEMPbackgroundColor = 'white';
        //   backgroundColorCheck = false;
        //   document.getElementById("formBackgroundColor").disabled = true;
        //   // testMedia.style.background = `${background}px solid ${backgroundColor}`;
        // }
        // mediaContainer.style.background = backgroundColor; // Directly update the background of scrollableContent
        // scrollableContent.style.background = backgroundColor; // Directly update the background of scrollableContent

        // if background visual checkbox is checked, do not run this - it causes video to restart
        // if (!backgroundVisualCheckbox.checked) {
        //   updateBackgroundVisual();
        // }
      }

      // create a function here and the call the dunction and save styling seperately
      formBackgroundColor.addEventListener('input', updateBackgroundColorForm);
      formBackgroundColor.addEventListener('input', saveStyling);
      // document.getElementById("formBackgroundColor").addEventListener("input", function() {
      function updateBackgroundColorForm() {
        var inputValue = this.value;
        backgroundColor = inputValue;
        backgroundColor = this.value !== null ? this.value : 'black';
        this.value = backgroundColor;
        updateBackgroundColor(); 
      }

      //###################################################################################################################################################################

      //###################################################################################################################################################################
            //                                                                                                                                                                        
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
            //  ██████████████ ██████  ██████ ████████████   ██████████ ██████████████ 
            //  ██░░░░░░░░░░██ ██░░██  ██░░██ ██░░░░░░░░████ ██░░░░░░██ ██░░░░░░░░░░██ 
            //  ██░░██████░░██ ██░░██  ██░░██ ██░░████░░░░██ ████░░████ ██░░██████░░██ 
            //  ██░░██  ██░░██ ██░░██  ██░░██ ██░░██  ██░░██   ██░░██   ██░░██  ██░░██ 
            //  ██░░██████░░██ ██░░██  ██░░██ ██░░██  ██░░██   ██░░██   ██░░██  ██░░██ 
            //  ██░░░░░░░░░░██ ██░░██  ██░░██ ██░░██  ██░░██   ██░░██   ██░░██  ██░░██ 
            //  ██░░██████░░██ ██░░██  ██░░██ ██░░██  ██░░██   ██░░██   ██░░██  ██░░██ 
            //  ██░░██  ██░░██ ██░░██  ██░░██ ██░░██  ██░░██   ██░░██   ██░░██  ██░░██ 
            //  ██░░██  ██░░██ ██░░██████░░██ ██░░████░░░░██ ████░░████ ██░░██████░░██ 
            //  ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░░░░░░░████ ██░░░░░░██ ██░░░░░░░░░░██ 
            //  ██████  ██████ ██████████████ ████████████   ██████████ ██████████████ 

            updateBackgroundAudio()
            function updateBackgroundAudio() {

              const existingMediaAudio = document.getElementById('mediaAudio');
              if (existingMediaAudio) { // If a mediaAudio already exists, remove it
                existingMediaAudio.parentNode.removeChild(existingMediaAudio);
              }

              if (backgroundAudio) { // see if the value is true, don't bother running if false
                const mediaAudio = document.createElement('audio'); // Create an audio element
                mediaAudio.id = 'mediaAudio';
                mediaAudio.autoplay = true;
                mediaAudio.loop = true;
                // mediaAudio.muted = true;
                mediaAudio.playsinline = true;
                const filePath = `./assets/backgroundAudio/${name}.mp3`; // Use .mp3 extension

                // mediaAudio.src = filePath; // Set the source directly
                // mediaContainer.appendChild(mediaAudio);

                fetch(filePath)
                .then(response => {
                    if (!response.ok) {
                        // File does not exist, handle accordingly
                        console.log("File does not exist");
                    }
                    mediaAudio.src = filePath; // Set the source directly
                    // mediaContainer.appendChild(mediaAudio);
                    scrollableContent.appendChild(mediaAudio); // assign to scrollable content to escape the parent container
                })
                .catch(error => {
                    // Error fetching the file (possibly due to network issues or file not existing)
                    console.error("Error fetching the file:", error);
                });
              }
            }



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
      gapChange(gap); // Default value for gap                                           
      gapCheckbox.addEventListener('change', () => {
          gap = gapCheckbox.checked ? parseInt(document.getElementById('formGap').value) : 0;
          gapChange(gap); // Pass the gap value to the imported function
          // saveStyling();
      });
      gapCheckbox.addEventListener('change', saveStyling);


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
          // saveStyling();
      });
      document.getElementById("formGap").addEventListener("input", saveStyling);

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
      // default value for wrap
      wrapChange(wrap);                                                                
      wrapCheckbox.addEventListener('change', () => {
          wrap = wrapCheckbox.checked ? 'wrap' : 'nowrap';
          // console.log(wrap);
          wrapChange(wrap); // Pass the gap value to the imported function
          // saveStyling();
      });
      wrapCheckbox.addEventListener('change', saveStyling);

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
      document.getElementById("formRatioWidth").addEventListener("input", saveStyling);

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
        // saveStyling();
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
      document.getElementById("formRatioHeight").addEventListener("input", saveStyling);
      // document.getElementById("formRatioHeight").addEventListener("input", function() {
      //   updateHeight(width, height);
      // });
      // document.getElementById("formRatioHeight").addEventListener('change', updateAspectRatio);
      // document.getElementById("formRatioHeight").addEventListener('change', function() {
      //   updateAspectRatio(width, height);
      //   updateMediaStyling();
      // });
      function updateHeight() {
        // console.log('Function: Update Height');
        var heightInput = document.getElementById("formRatioHeight"); // this value can not be accessed outside of this file, this is needed for dynamic updates
        var heightValue = parseInt(heightInput.value);
        if (heightValue < 1) { // Ensure the height does not go below 1
          heightInput.value = 1;
          heightValue = 1; // Update heightValue as well
        }
        height = heightValue; 
        updateAspectRatio(width, height);
        updateMediaStyling();
        // saveStyling();
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
      originalDimensionsCheckbox.addEventListener('change', saveStyling);

      function updateOriginalDimensions() {
        // console.log('Function: Update Original Dimensions');
        if (originalDimensionsCheckbox.checked) {
          // border = parseInt(document.getElementById("formBorder").value);
          document.getElementById("formRatioWidth").disabled = true;
          document.getElementById("formRatioHeight").disabled = true;
          width = 'auto';
          originalDimensions = true;
          // document.getElementById("borderColorCheckbox").disabled = false;
          // testMedia.style.border = `${border}px solid ${borderColor}`;
        } else {
          // testMedia.style.border = `0px solid ${borderColor}`;
          // border = 0;
          // update width = the width in the box
          originalDimensions = false;
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
      borderCheckbox.addEventListener('change', saveStyling);
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
      borderColorCheckbox.addEventListener('change', updateBorderColorCheckbox);
      borderColorCheckbox.addEventListener('change', saveStyling);
      function updateBorderColorCheckbox() {
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

      formBorderColor.addEventListener("input", updateBorderColor);
      formBorderColor.addEventListener("input", saveStyling);
      function updateBorderColor() {
        var inputValue = this.value;
        borderColor = inputValue;
        borderColor = this.value !== null ? this.value : 'black';
        this.value = borderColor;
        updateBorderColorCheckbox(); // apply to all media items
      };
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
      updateBorderRadiusCheckbox();
      borderRadiusCheckbox.addEventListener('change', updateBorderRadiusCheckbox);
      borderRadiusCheckbox.addEventListener('change', saveStyling);

      function updateBorderRadiusCheckbox() {
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

      formBorderRadius.addEventListener("input", updateBorderRadius);
      formBorderRadius.addEventListener("input", saveStyling);
      function updateBorderRadius() {
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
        updateBorderRadiusCheckbox(); // apply to all media items
      };
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
      function onHover(event) {
        // console.log("Item hovered!");
        // Parse the JSON string from the data-item attribute
        const dataItem = JSON.parse(event.target.getAttribute('data-item'));
        // Print the value of the id
        // console.log("Hovered item ID:", dataItem.id);
        const testMedia = event.target; // This is the hovered .testMedia element
        const rect = testMedia.getBoundingClientRect(); // Get position and size of original media item

        let floatingBorderElement = testMedia.parentNode.querySelector('.testMediaCopy');
        // testMedia.style.zIndex = '5'; // Z-index for this element should be higher than its background border
        let scrollDistanceLeft;
        let scrollDistanceTop;
        scrollDistanceLeft = mediaContainer.scrollLeft;
        scrollDistanceTop = mediaContainer.scrollTop;
        const sideMenuWidth = 200; // Width of the side menu
        floatingBorderElement = testMedia.cloneNode(true);
        floatingBorderElement.classList.add('testMediaCopy');
        floatingBorderElement.style.position = 'absolute';
        floatingBorderElement.style.zIndex = '4';
        floatingBorderElement.style['background-color'] = 'transparent';
        floatingBorderElement.style.border = `${floatingBorder}px solid ${floatingBorderColor}`;
        floatingBorderElement.style['border-radius'] = `${floatingBorderRadius}px`;
        floatingBorderElement.style.pointerEvents = 'none'; // Ignore pointer events
        // console.log('    after mouseEnter Border: ' + border); // border is not updating, causing non-bordered hover border to be off center
        // floatingBorderPadding = (border) + (floatingBorderGap) + 'px'; // border is not updating here?
        floatingBorderPadding = (floatingBorderGap) + 'px'; // border is removed to have floating cover original
        let floatingBorderTopAdjustment = `${(rect.top) - (floatingBorder) - (floatingBorderGap) + (border) + (scrollDistanceTop) - 50}px`;
        let floatingBorderLeftAdjustment = `${(rect.left) - (floatingBorder) - (floatingBorderGap) + (border) + (scrollDistanceLeft) - (sideMenuWidth) + 0}px`;
        floatingBorderElement.style.padding = floatingBorderPadding;
        floatingBorderElement.style.top = floatingBorderTopAdjustment;
        floatingBorderElement.style.left = floatingBorderLeftAdjustment;
        testMedia.parentNode.appendChild(floatingBorderElement);
      }

      function onMouseLeave(event) {
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
        // saveStyling(); 
        // height, width, original dimensions are saved here
      }
      //###################################################################################################################################################################
            
      //###################################################################################################################################################################
      //                                                                                     
      //  ██████          ██████ ██████████████ ██████████████ ██████████████ ██████  ██████ 
      //  ██░░██████████████░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██  ██░░██ 
      //  ██░░░░░░░░░░░░░░░░░░██ ██░░██████░░██ ██████░░██████ ██░░██████████ ██░░██  ██░░██ 
      //  ██░░██████░░██████░░██ ██░░██  ██░░██     ██░░██     ██░░██         ██░░██  ██░░██ 
      //  ██░░██  ██░░██  ██░░██ ██░░██████░░██     ██░░██     ██░░██         ██░░██████░░██ 
      //  ██░░██  ██░░██  ██░░██ ██░░░░░░░░░░██     ██░░██     ██░░██         ██░░░░░░░░░░██ 
      //  ██░░██  ██████  ██░░██ ██░░██████░░██     ██░░██     ██░░██         ██░░██████░░██ 
      //  ██░░██          ██░░██ ██░░██  ██░░██     ██░░██     ██░░██         ██░░██  ██░░██ 
      //  ██░░██          ██░░██ ██░░██  ██░░██     ██░░██     ██░░██████████ ██░░██  ██░░██ 
      //  ██░░██          ██░░██ ██░░██  ██░░██     ██░░██     ██░░░░░░░░░░██ ██░░██  ██░░██ 
      //  ██████          ██████ ██████  ██████     ██████     ██████████████ ██████  ██████ 
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
      //      
      // There is a conflict between the size checkbox and the matchBorderSettings Checkbox
      // They can overwrite the disabling and re-enabling the other box has determined
      // It might be better to remove the size checkbox disabler OR
      // Check the values of the other boxes before applying changes in each function
      // when this is checked, this does not automatically update when reg border or radius is changed, 
      // when those border and radius functions are called, call the floating functions to update the floating values also
      matchBorderSize();
      matchBorderCheckbox.addEventListener('change', matchBorderSize);
      matchBorderCheckbox.addEventListener('change', saveStyling);

      function matchBorderSize() {
        let floatingElements = [
          "floatingBorderCheckbox",
          "formFloatingBorder",
          "floatingBorderRadiusCheckbox",
          "formFloatingBorderRadius"
        ];
        if (matchBorderCheckbox.checked) {
          floatingElements.forEach(elementId => {
            document.getElementById(elementId).disabled = true;
          });
          floatingBorder = border;
          // floatingBorderColor = borderColor;
          floatingBorderRadius = borderRadius;
          // console.log('border / floating: ' + border + ' ' + floatingBorder);
          floatingBorderGap = 0;
        }
        else {
          floatingElements.forEach(elementId => {
            document.getElementById(elementId).disabled = false;
          });
        }
        // calling these functions re-enables the input fields
        // updateFloatingBorder();
        // updateFloatingBorderColor();
        // updateFloatingBorderRadius();
        // updateFloatingBorderGap();
        // saveStyling();
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
      floatingBorderCheckbox.addEventListener('change', saveStyling);

      document.getElementById("formFloatingBorderColor").addEventListener("input", updateFloatingBorderColor); // input field update
      function updateFloatingBorder() {
      // console.log('Function: updateFloatingBorder')
      // console.log('Function: Update Floating Border');
      // check to see if anything previous match border is disabled or not
      // Disabling boxes individually might make a mess.  
      // instead create a value that controls wether or not variables can be re-enabled or not (a master switch)
      if (floatingBorderCheckbox.checked) {
          floatingBorder = parseInt(document.getElementById("formFloatingBorder").value);
          // document.getElementById("floatingBorderColorCheckbox").disabled = false;
          // document.getElementById("floatingBorderRadiusCheckbox").disabled = false;
          // document.getElementById("floatingBorderGapCheckbox").disabled = false;
          // document.getElementById("formFloatingBorder").disabled = false;
          // document.getElementById("formFloatingBorderColor").disabled = false;
          updateFloatingBorderRadiusCheckbox(); // instead call these functions to check whether the checkbox has these inputs enabled or disabled
          updateFloatingBorderGapCheckbox();
          floatingBorderPadding = border;
      } 
      if (!floatingBorderCheckbox.checked) {
          floatingBorder = 0;
          // document.getElementById("floatingBorderRadiusCheckbox").disabled = true;
          // document.getElementById("floatingBorderGapCheckbox").disabled = true;
          // document.getElementById("floatingBorderColorCheckbox").disabled = true;
          // document.getElementById("formFloatingBorder").disabled = true;
          // document.getElementById("formFloatingBorderColor").disabled = true;
          // document.getElementById("formFloatingBorderRadius").disabled = true;
          // document.getElementById("formFloatingBorderGap").disabled = true;
      }
        // updateMediaStyling();
        // saveStyling();
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
      floatingBorderColorCheckbox.addEventListener('change', saveStyling);

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
        // saveStyling();
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
      updateFloatingBorderRadiusCheckbox();
      floatingBorderRadiusCheckbox.addEventListener('change', updateFloatingBorderRadiusCheckbox);
      floatingBorderRadiusCheckbox.addEventListener('change', saveStyling);

      function updateFloatingBorderRadiusCheckbox() {
        // console.log('Function: Update Floating Border Radius');
        if (floatingBorderRadiusCheckbox.checked) {
            floatingBorderRadius = parseInt(document.getElementById("formFloatingBorderRadius").value);
            document.getElementById("formFloatingBorderRadius").disabled = false;
        } else {
            floatingBorderRadius = 0;
            document.getElementById("formFloatingBorderRadius").disabled = true;
        } // document.getElementById("floatingBorderRadiusValue").textContent = `Floating Border Radius: ${floatingBorderRadius}`;
        //   updateMediaStyling();
        // saveStyling();
      }

      formFloatingBorderRadius.addEventListener("input", updateFloatingBorderRadius);
      formFloatingBorderRadius.addEventListener("input", saveStyling);
      function updateFloatingBorderRadius() {
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
        updateFloatingBorderRadiusCheckbox(); // apply to all media items
      };
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
      updateFloatingBorderGapCheckbox();
      floatingBorderGapCheckbox.addEventListener('change', updateFloatingBorderGapCheckbox);
      floatingBorderGapCheckbox.addEventListener('change', saveStyling);

      function updateFloatingBorderGapCheckbox() {
        // console.log('Function: Update Floating Border Gap');
        if (floatingBorderGapCheckbox.checked) {
            floatingBorderGap = parseInt(document.getElementById("formFloatingBorderGap").value);
            document.getElementById("formFloatingBorderGap").disabled = false;
        } else {
            floatingBorderGap = 0;
            document.getElementById("formFloatingBorderGap").disabled = true;
        } // document.getElementById("floatingBorderGapValue").textContent = `Floating Border Gap Size: ${floatingBorderGap}`;
        //   updateMediaStyling();
        // saveStyling();
      }

      formFloatingBorderGap.addEventListener("input", updateFloatingBorderGap);
      formFloatingBorderGap.addEventListener("input", saveStyling);
      function updateFloatingBorderGap() {
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
        updateFloatingBorderGapCheckbox(); // apply to all media items
      };
      //###################################################################################################################################################################
      //                                                                    
      //  ██████████████ ██████████████ ██████  ██████ ██████████████ 
      //  ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██  ██░░██ ██░░░░░░░░░░██ 
      //  ██░░██████████ ██░░██████░░██ ██░░██  ██░░██ ██░░██████████ 
      //  ██░░██         ██░░██  ██░░██ ██░░██  ██░░██ ██░░██         
      //  ██░░██████████ ██░░██████░░██ ██░░██  ██░░██ ██░░██████████ 
      //  ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██  ██░░██ ██░░░░░░░░░░██ 
      //  ██████████░░██ ██░░██████░░██ ██░░██  ██░░██ ██░░██████████ 
      //          ██░░██ ██░░██  ██░░██ ██░░░░██░░░░██ ██░░██         
      //  ██████████░░██ ██░░██  ██░░██ ████░░░░░░████ ██░░██████████ 
      //  ██░░░░░░░░░░██ ██░░██  ██░░██   ████░░████   ██░░░░░░░░░░██ 
      //  ██████████████ ██████  ██████     ██████     ██████████████ 
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

      function saveStyling() {
         // if user changes the value, do not run on initial load
        // PRINT SAVED SETTINGS TO CONSOLE 
        console.log('***************************************' + '\n' +
          'Function: saveStyling: ' + '\n' + 
          'name: ' + name + '\n' +
          'backgroundVisual: ' + backgroundVisual + '\n' +
          'backgroundColorCheck: ' + backgroundColorCheck + '\n' +
          'backgroundColor: ' + backgroundColor + '\n' +
          'gap: ' + gap + '\n' +
          'wrap: ' + wrap + '\n' + 
          'originalDimensions: ' + originalDimensions + '\n' + 
          'width: ' + width + '\n' +
          'height: ' + height + '\n' +
          'border: ' + border + '\n' + 
          'borderColor: ' + borderColor + '\n' + 
          'borderRadius: ' + borderRadius + '\n' +
          'floatingBorder: ' + floatingBorder + '\n' +
          'floatingBorderColor: ' + floatingBorderColor + '\n' +
          'floatingBorderRadius: ' + floatingBorderRadius + '\n' +
          'floatingBorderGap: ' + floatingBorderGap
        )
        // PASS VALUES TO NEXT FUNCTION
        window.updateBridge.updateTag(
          name, 
          backgroundVisual, 
          // backgroundAudio, 
          backgroundColorCheck, 
          backgroundColor, 
          gap, 
          wrap, 
          originalDimensions, 
          width, 
          height,
          border, 
          borderColor, 
          borderRadius, 
          floatingBorder, 
          floatingBorderColor, 
          floatingBorderRadius, 
          floatingBorderGap, 
          // floatingBorderPadding
        );
      }
      //###################################################################################################################################################################
      mediaContainer.style.display = 'block'; // show styling after it has finished applying to media items
    })
    .catch(error => console.error('Error fetching media data:', error));
  }
  export { applyStyling };

  // "Name": "All",
  //     "BackgroundVisual": "checked",
  //     "BackgroundColorCheck": true,
  //     "BackgroundColor": "gray",
  //     "OriginalDimensions": true,
  //     "Gap": 2,
  //     "Wrap": "wrap",
  //     "Width": 1,
  //     "Height": 1,
  //     "Border": 5,
  //     "BorderColor": "black",
  //     "BorderRadius": 0,
  //     "FloatingBorder": 2,
  //     "FloatingBorderColor": "white",
  //     "FloatingBorderRadius": 5,
  //     "FloatingBorderGap": 0,
  //     "Rows": 1,
  //     "Columns": 15,
  //     "CustomValues": true
  //   },

  // Need to save these values when Changed, 
  // update them individually automatically, save button adds complexity.  App should strive for simplicity
  // need option to update background visual, for videos or images.  Right now, it only works with videos.
  // 