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
// import { gapChange } from './gapChange.js';
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
      //                                                                      
      //          ██████ ██████████████ ██████████████ ██████          ██████ 
      //          ██░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██████████  ██░░██ 
      //          ██░░██ ██░░██████████ ██░░██████░░██ ██░░░░░░░░░░██  ██░░██ 
      //          ██░░██ ██░░██         ██░░██  ██░░██ ██░░██████░░██  ██░░██ 
      //          ██░░██ ██░░██████████ ██░░██  ██░░██ ██░░██  ██░░██  ██░░██ 
      //          ██░░██ ██░░░░░░░░░░██ ██░░██  ██░░██ ██░░██  ██░░██  ██░░██ 
      //  ██████  ██░░██ ██████████░░██ ██░░██  ██░░██ ██░░██  ██░░██  ██░░██ 
      //  ██░░██  ██░░██         ██░░██ ██░░██  ██░░██ ██░░██  ██░░██████░░██ 
      //  ██░░██████░░██ ██████████░░██ ██░░██████░░██ ██░░██  ██░░░░░░░░░░██ 
      //  ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██  ██████████░░██ 
      //  ██████████████ ██████████████ ██████████████ ██████          ██████ 
      //                                                                      
      //                                                                                            
      //  ██████  ██████ ██████████████ ██████         ██████  ██████ ██████████████ ██████████████ 
      //  ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░██         ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ 
      //  ██░░██  ██░░██ ██░░██████░░██ ██░░██         ██░░██  ██░░██ ██░░██████████ ██░░██████████ 
      //  ██░░██  ██░░██ ██░░██  ██░░██ ██░░██         ██░░██  ██░░██ ██░░██         ██░░██         
      //  ██░░██  ██░░██ ██░░██████░░██ ██░░██         ██░░██  ██░░██ ██░░██████████ ██░░██████████ 
      //  ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░██         ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ 
      //  ██░░██  ██░░██ ██░░██████░░██ ██░░██         ██░░██  ██░░██ ██░░██████████ ██████████░░██ 
      //  ██░░░░██░░░░██ ██░░██  ██░░██ ██░░██         ██░░██  ██░░██ ██░░██                 ██░░██ 
      //  ████░░░░░░████ ██░░██  ██░░██ ██░░██████████ ██░░██████░░██ ██░░██████████ ██████████░░██ 
      //    ████░░████   ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ 
      //      ██████     ██████  ██████ ██████████████ ██████████████ ██████████████ ██████████████ 
      //                                                                                            
      // IF THESE VALUES RETURN NULL, THEY WILL BREAK THE APP.  IF ANY RETURN NULL, SET DEFAULT VALUES FOR THEM HERE

      // Meta Data
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
        let gapCheck = selectedTag.GapCheck !== undefined ? selectedTag.GapCheck : ""; // "checked", or "" (blank)
        // WRAP
        let wrap = selectedTag.Wrap !== undefined ? selectedTag.Wrap : 'wrap'; // check json value
        let wrapCheckboxValue = wrap === 'wrap' ? ' checked' : ''; // assign input value


      // Media Styling
        let originalDimensions = selectedTag.OriginalDimensions !== undefined ? selectedTag.OriginalDimensions : false;
        let originalDimensionsCheckboxValue = originalDimensions ? ' checked' : '';
        let width = selectedTag.Width !== undefined ? selectedTag.Width : 1;
        let height = selectedTag.Height !== undefined ? selectedTag.Height : 1;
        // BORDER
        let border = selectedTag.Border !== undefined ? selectedTag.Border : 5;
        let borderCheck = selectedTag.BorderCheck !== undefined ? selectedTag.BorderCheck : ""; // "checked", or "" (blank)
        // BORDER COLOR
        let borderColor = selectedTag.BorderColor !== undefined ? selectedTag.BorderColor : 'black';
        let borderColorCheck = selectedTag.BorderColorCheck !== undefined ? selectedTag.BorderColorCheck : ""; // "checked", or "" (blank)
        // BORDER RADIUS
        let borderRadius = selectedTag.BorderRadius !== undefined ? selectedTag.BorderRadius : 5; 
        let borderRadiusCheck = selectedTag.BorderRadiusCheck !== undefined ? selectedTag.BorderRadiusCheck : ""; // "checked", or "" (blank)


      // Floating Border Values
        // BORDER
        let floatingBorder = selectedTag.FloatingBorder !== undefined ? selectedTag.FloatingBorder : 5;
        let floatingBorderCheck = selectedTag.FloatingBorderCheck !== undefined ? selectedTag.FloatingBorderCheck : ""; // "checked", or "" (blank)
        // BORDER COLOR
        let floatingBorderColor = selectedTag.FloatingBorderColor !== undefined ? selectedTag.FloatingBorderColor : 'red';
        let floatingBorderColorCheck = selectedTag.FloatingBorderColorCheck !== undefined ? selectedTag.FloatingBorderColorCheck : ""; // "checked", or "" (blank)

        // BORDER RADIUS
        let floatingBorderRadius = selectedTag.FloatingBorderRadius !== undefined ? selectedTag.FloatingBorderRadius : 5;
        let floatingBorderRadiusCheck = selectedTag.FloatingBorderRadiusCheck !== undefined ? selectedTag.FloatingBorderRadiusCheck : ""; // "checked", or "" (blank)

        // BORDER GAP, SPACE BETWEEN FLOATING BORDER AND MEDIA IMAGE
        let floatingBorderGap = selectedTag.FloatingBorderGap !== undefined ? selectedTag.FloatingBorderGap : 0;
        let floatingBorderGapCheck = selectedTag.FloatingBorderGapCheck !== undefined ? selectedTag.FloatingBorderGapCheck : ""; // "checked", or "" (blank)

        let floatingBorderPadding; // value is determined later, needed to be initialized beforehand

        let matchBorderCheck = selectedTag.MatchBorderCheck !== undefined ? selectedTag.MatchBorderCheck : ""; // "checked", or "" (blank)
        let wrapBorderCheck = selectedTag.WrapBorderCheck !== undefined ? selectedTag.WrapBorderCheck : ""; // "checked", or "" (blank)

      // GLOBAL MARGIN VALUES
        let borderSizeTemp = border; // need to implement in the event borderSize is disabled after having a value above 0 to prevent incorrect hover image positioning
        let borderRadiusTemp = borderRadius; // should I do this for radius as well? Once you find a reason for it.  I don't think its necessary at the moment
        // let floatingBorderTemp = floatingBorder;
        let floatingBorderSizeTemp = floatingBorder; // repetitive, change to only have one ctrl f
        let floatingBorderColorTemp = floatingBorderColor;
        let floatingBorderRadiusTemp = floatingBorderRadius;
        let floatingBorderGapTemp = floatingBorderGap;

        // let test = 1;
        let autoMarginCheck = selectedTag.AutoMarginCheck !== undefined ? selectedTag.AutoMarginCheck : ""; // "checked", or "" (blank)
        let topMargin = selectedTag.TopMargin !== undefined ? selectedTag.TopMargin : 0; // value or 0 margin
        let leftMargin = selectedTag.LeftMargin !== undefined ? selectedTag.LeftMargin : 0; // value or 0 margin
        let topMarginTemp;
        let leftMarginTemp;

      //###################################################################################################################################################################
      //                                                                                                                                                    
      //  ██████████████ ██████████ ████████████   ██████████████    ██████          ██████ ██████████████ ██████          ██████ ██████  ██████ 
      //  ██░░░░░░░░░░██ ██░░░░░░██ ██░░░░░░░░████ ██░░░░░░░░░░██    ██░░██████████████░░██ ██░░░░░░░░░░██ ██░░██████████  ██░░██ ██░░██  ██░░██ 
      //  ██░░██████████ ████░░████ ██░░████░░░░██ ██░░██████████    ██░░░░░░░░░░░░░░░░░░██ ██░░██████████ ██░░░░░░░░░░██  ██░░██ ██░░██  ██░░██ 
      //  ██░░██           ██░░██   ██░░██  ██░░██ ██░░██            ██░░██████░░██████░░██ ██░░██         ██░░██████░░██  ██░░██ ██░░██  ██░░██ 
      //  ██░░██████████   ██░░██   ██░░██  ██░░██ ██░░██████████    ██░░██  ██░░██  ██░░██ ██░░██████████ ██░░██  ██░░██  ██░░██ ██░░██  ██░░██ 
      //  ██░░░░░░░░░░██   ██░░██   ██░░██  ██░░██ ██░░░░░░░░░░██    ██░░██  ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░██  ██░░██  ██░░██ ██░░██  ██░░██ 
      //  ██████████░░██   ██░░██   ██░░██  ██░░██ ██░░██████████    ██░░██  ██████  ██░░██ ██░░██████████ ██░░██  ██░░██  ██░░██ ██░░██  ██░░██ 
      //          ██░░██   ██░░██   ██░░██  ██░░██ ██░░██            ██░░██          ██░░██ ██░░██         ██░░██  ██░░██████░░██ ██░░██  ██░░██ 
      //  ██████████░░██ ████░░████ ██░░████░░░░██ ██░░██████████    ██░░██          ██░░██ ██░░██████████ ██░░██  ██░░░░░░░░░░██ ██░░██████░░██ 
      //  ██░░░░░░░░░░██ ██░░░░░░██ ██░░░░░░░░████ ██░░░░░░░░░░██    ██░░██          ██░░██ ██░░░░░░░░░░██ ██░░██  ██████████░░██ ██░░░░░░░░░░██ 
      //  ██████████████ ██████████ ████████████   ██████████████    ██████          ██████ ██████████████ ██████          ██████ ██████████████ 

      //  ██████████████ ██████████████ ██████████████ ██████████████ ██████████ ██████          ██████ ██████████████ ██████████████ 
      //  ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░██ ██░░██████████  ██░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ 
      //  ██░░██████████ ██░░██████████ ██████░░██████ ██████░░██████ ████░░████ ██░░░░░░░░░░██  ██░░██ ██░░██████████ ██░░██████████ 
      //  ██░░██         ██░░██             ██░░██         ██░░██       ██░░██   ██░░██████░░██  ██░░██ ██░░██         ██░░██         
      //  ██░░██████████ ██░░██████████     ██░░██         ██░░██       ██░░██   ██░░██  ██░░██  ██░░██ ██░░██         ██░░██████████ 
      //  ██░░░░░░░░░░██ ██░░░░░░░░░░██     ██░░██         ██░░██       ██░░██   ██░░██  ██░░██  ██░░██ ██░░██  ██████ ██░░░░░░░░░░██ 
      //  ██████████░░██ ██░░██████████     ██░░██         ██░░██       ██░░██   ██░░██  ██░░██  ██░░██ ██░░██  ██░░██ ██████████░░██ 
      //          ██░░██ ██░░██             ██░░██         ██░░██       ██░░██   ██░░██  ██░░██████░░██ ██░░██  ██░░██         ██░░██ 
      //  ██████████░░██ ██░░██████████     ██░░██         ██░░██     ████░░████ ██░░██  ██░░░░░░░░░░██ ██░░██████░░██ ██████████░░██ 
      //  ██░░░░░░░░░░██ ██░░░░░░░░░░██     ██░░██         ██░░██     ██░░░░░░██ ██░░██  ██████████░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ 
      //  ██████████████ ██████████████     ██████         ██████     ██████████ ██████          ██████ ██████████████ ██████████████ 
      //                                                                                                                                                                                                                                                                    
      editCategoryMenu.innerHTML = `
        
        <br>
        <div class='settingsHeader'>BACKGROUND</div>
        <div class="settingsOptionContainer">
          <div class="settingsOption">
            <p>Background Visual</p>
            <input id="backgroundVisualCheckbox" type="checkbox" ${backgroundVisual}>
            <input type="file" id="videoUpload" accept="video/*">
          </div>
          <div class="settingsOption">
            <p>Background Color</p>
            <input type="text" id="formBackgroundColor" name="formBackgroundColor" value=${backgroundColor}><input id="backgroundColorCheckbox" type="checkbox" ${backgroundColorCheck}>
          </div>
          <div class="settingsOption">
            <p>Background Audio</p>
            <input id="backgroundAudioCheckbox" type="checkbox" checked>
            <input type="file" id="audioUpload" accept="audio/*">
          </div>
        </div>
        <br>

        <div class='settingsHeader'>ASPECT RATIO / POSITION</div>
        <div class="settingsOptionContainer">
          <div class="settingsOption">
            <p>Original Dimensions</p>
            <input id="originalDimensionsCheckbox" type="checkbox" ${originalDimensionsCheckboxValue}>
          </div>
          <div class="settingsOption">
            <p id="aspectRatioDisplay">Aspect Ratio: ${width}:${height}</p>
            <input type="number" id="formRatioWidth" name="formRatioWidth" value=${width}>
            <input type="number" id="formRatioHeight" name="formRatioHeight" value=${height}>
          </div>
          <div class="settingsOption">
            <p>Gap</p>
            <input type="number" id="formGap" name="formGap" value=${gap}><input id="gapCheckbox" type="checkbox" ${gapCheck}>
          </div>
          <div class="settingsOption">
            <p id="wrapValue">Wrap</p>
            <input id="wrapCheckbox" type="checkbox" ${wrapCheckboxValue}>
          </div>
          <div class="settingsOption">
            <p>Auto Margin</p>
            <input id="autoMarginCheckbox" type="checkbox" ${autoMarginCheck}>
          </div>
          <div class="settingsOption">
            <p>Marginal Spacing</p>
            <input type="number" id="formTopMargin" name="formTopMargin" value=${topMargin}>
            <input type="number" id="formLeftMargin" name="formLeftMargin" value=${leftMargin}>
          </div>
        </div>
        <br>

        <div class='settingsHeader'>BORDER</div>
        <div class="settingsOptionContainer">
          <div class="settingsOption">
            <p>Size</p>
            <input type="number" id="formBorder" name="formBorder" value=${border}><input id="borderCheckbox" type="checkbox" ${borderCheck}>
          </div>
          <div class="settingsOption">
            <p>Color</p>
            <input type="text" id="formBorderColor" name="formBorderColor" value=${borderColor}><input id="borderColorCheckbox" type="checkbox" ${borderColorCheck}>
          </div>
          <div class="settingsOption">
            <p>Radius</p>
            <input type="number" id="formBorderRadius" name="formBorderRadius" value=${borderRadius}><input id="borderRadiusCheckbox" type="checkbox" ${borderRadiusCheck}>
          </div>
        </div>
        <br>

        <div class='settingsHeader'>HOVERED BORDER</div>
        <div class="settingsOptionContainer">
          <div class="settingsOption">
            <p>Match Base Border</p><input id="matchBorderCheckbox" type="checkbox" ${matchBorderCheck}>
          </div>
          <div class="settingsOption">
            <p>Wrap Base Border</p><input id="wrapBorderCheckbox" type="checkbox" ${wrapBorderCheck}>
          </div>
          <div class="settingsOption">
            <p>Size</p>
            <input type="number" id="formFloatingBorder" name="formFloatingBorder" value=${floatingBorder}><input id="floatingBorderCheckbox" type="checkbox" ${floatingBorderCheck}>
          </div>
          <div class="settingsOption">
            <p>Color</p>
            <input type="text" id="formFloatingBorderColor" name="formFloatingBorderColor" value=${floatingBorderColor}><input id="floatingBorderColorCheckbox" type="checkbox" ${floatingBorderColorCheck}>
          </div>
          <div class="settingsOption">
            <p>Radius</p>
            <input type="number" id="formFloatingBorderRadius" name="formFloatingBorderRadius" value=${floatingBorderRadius}><input id="floatingBorderRadiusCheckbox" type="checkbox" ${floatingBorderRadiusCheck}>
          </div>
          <div class="settingsOption">
            <p id="floatingBorderGapValue">Gap</p>
            <input type="number" id="formFloatingBorderGap" name="formFloatingBorderGap" value=${floatingBorderGap}><input id="floatingBorderGapCheckbox" type="checkbox" ${floatingBorderGapCheck}>
          </div>
        </div>
        <br>

        <div class='settingsHeader'>THEMES</div>
        <div class="settingsOptionContainer">
          <div class="settingsOption">
            <p>Startup Video</p>
            <input type="number" id="test" name="test" value=${border}><input id="test" type="checkbox" checked>
          </div>
          <div class="settingsOption">
            <p>Background Visual</p>
            <input type="text" id="test" name="test" value=${border}><input id="test" type="checkbox" checked>
          </div>
          <div class="settingsOption">
            <p>Background Audio</p>
            <input type="text" id="test" name="test" value=${border}><input id="test" type="checkbox" checked>
          </div>
          <div class="settingsOption">
            <p>Selection Sound</p>
            <input type="number" id="test" name="test" value=${border}><input id="test" type="checkbox" checked>
          </div>
          <div class="settingsOption">
            <p>Font</p>
            <input type="number" id="test" name="test" value=${border}><input id="test" type="checkbox" checked>
          </div>
        </div>
        <br>

        <p>RESTORE DEFAULT SETTINGS</p>
        <p>Category Settings</p>
        <p>General Settings</p>
        <br>

      `;
      

      //###################################################################################################################################################################
      //                               
      //  ██████████ ████████████   
      //  ██░░░░░░██ ██░░░░░░░░████ 
      //  ████░░████ ██░░████░░░░██ 
      //    ██░░██   ██░░██  ██░░██ 
      //    ██░░██   ██░░██  ██░░██ 
      //    ██░░██   ██░░██  ██░░██ 
      //    ██░░██   ██░░██  ██░░██ 
      //    ██░░██   ██░░██  ██░░██ 
      //  ████░░████ ██░░████░░░░██ 
      //  ██░░░░░░██ ██░░░░░░░░████ 
      //  ██████████ ████████████                
      //                
      //                                                                                                                          
      //  ██████████████ ██████         ██████████████ ██████          ██████ ██████████████ ██████          ██████ ██████████████ ██████████████ 
      //  ██░░░░░░░░░░██ ██░░██         ██░░░░░░░░░░██ ██░░██████████████░░██ ██░░░░░░░░░░██ ██░░██████████  ██░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ 
      //  ██░░██████████ ██░░██         ██░░██████████ ██░░░░░░░░░░░░░░░░░░██ ██░░██████████ ██░░░░░░░░░░██  ██░░██ ██████░░██████ ██░░██████████ 
      //  ██░░██         ██░░██         ██░░██         ██░░██████░░██████░░██ ██░░██         ██░░██████░░██  ██░░██     ██░░██     ██░░██         
      //  ██░░██████████ ██░░██         ██░░██████████ ██░░██  ██░░██  ██░░██ ██░░██████████ ██░░██  ██░░██  ██░░██     ██░░██     ██░░██████████ 
      //  ██░░░░░░░░░░██ ██░░██         ██░░░░░░░░░░██ ██░░██  ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░██  ██░░██  ██░░██     ██░░██     ██░░░░░░░░░░██ 
      //  ██░░██████████ ██░░██         ██░░██████████ ██░░██  ██████  ██░░██ ██░░██████████ ██░░██  ██░░██  ██░░██     ██░░██     ██████████░░██ 
      //  ██░░██         ██░░██         ██░░██         ██░░██          ██░░██ ██░░██         ██░░██  ██░░██████░░██     ██░░██             ██░░██ 
      //  ██░░██████████ ██░░██████████ ██░░██████████ ██░░██          ██░░██ ██░░██████████ ██░░██  ██░░░░░░░░░░██     ██░░██     ██████████░░██ 
      //  ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██          ██░░██ ██░░░░░░░░░░██ ██░░██  ██████████░░██     ██░░██     ██░░░░░░░░░░██ 
      //  ██████████████ ██████████████ ██████████████ ██████          ██████ ██████████████ ██████          ██████     ██████     ██████████████ 
      //                                                                                                                                          
      //                                           
      // CONTAINER
        const scrollableContent = document.querySelector('.scrollableContent');
        let mediaDataDisplay = document.getElementById("mediadata");
        let mediaContainer = document.getElementById('mediaContainer');
        mediaContainer.style.display = 'none';
        
        const backgroundVisualCheckbox = document.getElementById('backgroundVisualCheckbox');
        const backgroundColorCheckbox = document.getElementById('backgroundColorCheckbox');
        const formBackgroundColor = document.getElementById('formBackgroundColor');
        const gapCheckbox = document.getElementById('gapCheckbox');
        const formGapInput = document.getElementById('formGap');
        const wrapCheckbox = document.getElementById('wrapCheckbox');
        const matchBorderCheckbox = document.getElementById('matchBorderCheckbox');
        const wrapBorderCheckbox = document.getElementById('wrapBorderCheckbox');
        // const mediaVisual = document.getElementById('mediaVisual');
        // MARGINS
        const autoMarginCheckbox = document.getElementById('autoMarginCheckbox');
        const formTopMargin = document.getElementById('formTopMargin');
        const formLeftMargin = document.getElementById('formLeftMargin');

      // MEDIA
        const originalDimensionsCheckbox = document.getElementById('originalDimensionsCheckbox');
        const borderCheckbox = document.getElementById('borderCheckbox');
        const formBorder = document.getElementById('formBorder');
        const formBorderColor = document.getElementById('formBorderColor');
        const formBorderRadius = document.getElementById("formBorderRadius");

      // FLOATING
        // BORDER
        const floatingBorderCheckbox = document.getElementById('floatingBorderCheckbox');
        const formFloatingBorder = document.getElementById('formFloatingBorder');
        // COLOR
        const floatingBorderColorCheckbox = document.getElementById('floatingBorderColorCheckbox');
        const formFloatingBorderColor = document.getElementById('formFloatingBorderColor');
        // RADIUS
        const floatingBorderRadiusCheckbox = document.getElementById('floatingBorderRadiusCheckbox');
        const formFloatingBorderRadius = document.getElementById("formFloatingBorderRadius");
        // GAP
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
          mediaVisualVideo.muted = false;
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
      // Find the value of the checkbox
      // find the value of the input
      // if checkbox is not clicked, no gap,
      // if checkbox is clicked, then show the gap input value
      
      gapChange(); // Default value for gap
      // if the checkbox value changes                                     
      gapCheckbox.addEventListener('change', gapChange);
      gapCheckbox.addEventListener('change', saveStyling);
      // If the gap input changes
      formGapInput.addEventListener('input', gapChange);
      formGapInput.addEventListener('input', saveStyling);

      function gapChange() {
        let inputValue = parseInt(formGapInput.value) || 0;
        if (inputValue < 0) { // Ensure the value does not go below 0
            this.value = 0; // keep the input field non negative
            inputValue = 0; // Update inputValue as well
        }
        if (inputValue > 999) { // Check if the value is greater than 999 // If so, set it to 999
            this.value = 999;
            inputValue = 999; // Update inputValue as well
        }
        gap = inputValue; // Update the border variable with the input value
        // gap = gapCheckbox.checked ? parseInt(document.getElementById('formGap').value) : 0;
        // gapChange(gap); // Pass the gap value to the imported function
        let testMediaContainer = document.getElementById('testMediaContainer');
        if (gapCheckbox.checked) {
          testMediaContainer.style.gap = `${gap}px`;
          document.getElementById("formGap").disabled = false;
          gapCheck = "checked";
          //   let gap = parseInt(document.getElementById('formGap').value);
        } else {
          testMediaContainer.style.gap = `0px`;
          document.getElementById("formGap").disabled = true;
          gapCheck = "";
          // gap = 0; // no need to re-assign
        }
      };
      // gapCheckbox.addEventListener('change', saveStyling);


      // document.getElementById("formGap").addEventListener("input", function() {
      //     let inputValue = parseInt(this.value);
      //     if (inputValue < 0) { // Ensure the value does not go below 0
      //         this.value = 0; // keep the input field non negative
      //         inputValue = 0; // Update inputValue as well
      //     }
      //     if (inputValue > 999) { // Check if the value is greater than 999 // If so, set it to 999
      //         this.value = 999;
      //         inputValue = 999; // Update inputValue as well
      //     }
      //     gap = inputValue; // Update the border variable with the input value
      //     gapChange(); // apply to all media items
      //     // saveStyling();
      // });
      // document.getElementById("formGap").addEventListener("input", saveStyling);

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
      formBorder.addEventListener('input', updateBorder);
      formBorder.addEventListener('input', saveStyling);

      function updateBorder() {
        // console.log('Function: Update Border');
        let inputValue = parseInt(formBorder.value) || 0;
        if (inputValue < 0) {
          this.value = 0;
          inputValue = 0; // Update inputValue as well
        } // Check if the value is greater than 999
        if (inputValue > 999) { // If so, set it to 999
            this.value = 999;
            inputValue = 999; // Update inputValue as well
        } // Update the border variable with the input value
        border = inputValue;
        // border = this.value !== null ? this.value : 0;
        // this.value = border;
        if (borderCheckbox.checked) {
          formBorder.disabled = false; // enable input
          borderCheck = "checked";
          // testMediaElements.style.border = `${border}px solid ${borderColor}`;
          // border = formBorder.value);
          // document.getElementById("formBorderColor").disabled = false; // enable border color
          // document.getElementById("borderColorCheckbox").disabled = false; // enable border color checkbox
        } else {
          borderCheck = "";
          formBorder.disabled = true;
          // document.getElementById("formBorderColor").disabled = true;
          // document.getElementById("borderColorCheckbox").disabled = true;
          // testMediaElements.style.border = `none`;
        }
        updateMediaStyling();  // this function will update the color and size of the border
      }

      // formBorder.addEventListener("input", function() {
      //   var inputValue = parseInt(this.value);
      //   if (inputValue < 0) {
      //     this.value = 0;
      //     inputValue = 0; // Update inputValue as well
      //   } // Check if the value is greater than 999
      //   if (inputValue > 999) { // If so, set it to 999
      //       this.value = 999;
      //       inputValue = 999; // Update inputValue as well
      //   } // Update the border variable with the input value
      //   border = inputValue;
      //   border = this.value !== null ? this.value : 0;
      //   this.value = border;
      //   updateBorder(); // apply to all media items
      // });
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
      updateBorderColor();                                                                                                                                                                               
      borderColorCheckbox.addEventListener('change', updateBorderColor);
      borderColorCheckbox.addEventListener('change', saveStyling);

      formBorderColor.addEventListener("input", updateBorderColor);
      formBorderColor.addEventListener("input", saveStyling);

      function updateBorderColor() {
        // console.log('Function: Update Border Color');
        borderColor = formBorderColor.value !== null ? formBorderColor.value : 'black';
        if (borderColorCheckbox.checked) {
          formBorderColor.disabled = false;
          borderColorCheck = "checked";
        } else {
          formBorderColor.disabled = true;
          borderColorCheck = "";
        }
        updateMediaStyling(); // this function will update the color and size of the border
      }

      // formBorderColor.addEventListener("input", updateBorderColor);
      // formBorderColor.addEventListener("input", saveStyling);
      // function updateBorderColor() {
      //   var inputValue = this.value;
      //   borderColor = inputValue;
      //   borderColor = this.value !== null ? this.value : 'black';
      //   this.value = borderColor;
      //   updateBorderColorCheckbox(); // apply to all media items
      // };
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
      borderRadiusCheckbox.addEventListener('change', saveStyling);

      formBorderRadius.addEventListener("input", updateBorderRadius);
      formBorderRadius.addEventListener("input", saveStyling);

      function updateBorderRadius() {
        // console.log('Function: Update Border Radius');
        var inputValue = parseInt(formBorderRadius.value);
        if (inputValue < 0) {
          formBorderRadius.value = 0; // this keeps the input from exceeding the limit
          inputValue = 0; // Update inputValue as well
        } // Check if the value is greater than 999
        if (inputValue > 999) { // If so, set it to 999
          formBorderRadius.value = 999; // this keeps the input from exceeding the limit
          inputValue = 999; // Update inputValue as well
        } // Update the border variable with the input value
        borderRadius = inputValue;
        // borderRadius = formBorderRadius.value !== null ? this.value : 0;

        if (borderRadiusCheckbox.checked) {
          formBorderRadius.disabled = false;
          borderRadiusCheck = "checked";
          // testMedia.style['border-radius'] = `${borderRadius}px`;
          // borderRadius = parseInt(formBorderRadius.value);
        } else {
          formBorderRadius.disabled = true;
          borderRadiusCheck = "";
          // testMedia.style['border-radius'] = `0px`;
          // borderRadius = 0;
        }
        // updateTestMediaPicturesSizes(); // this will be done in updateMediaStyling
        updateMediaStyling();
      }

      
      // function updateBorderRadius() {
      //   var inputValue = parseInt(formBorderRadius.value);
      //   if (inputValue < 0) {
      //     // formBorderRadius.value = 0;
      //     inputValue = 0; // Update inputValue as well
      //   } // Check if the value is greater than 999
      //   if (inputValue > 999) { // If so, set it to 999
      //       // this.value = 999;
      //       inputValue = 999; // Update inputValue as well
      //   } // Update the border variable with the input value
      //   borderRadius = inputValue;
      //   borderRadius = formBorderRadius.value !== null ? this.value : 0;
      //   // this.value = borderRadius;
      //   // updateBorderRadiusCheckbox(); // apply to all media items
      // };
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
      // This function relies on comparing values and changing them based on user settings.
      // I have created temporary variables to prevent this function from overwritting user's prior values in the event a checkbox was temporarily disabled and will be reverted to later.
      // If I want to shift content to the right based on hovered value sizes, then I can't do this within the hovered styling onHover event.  It would need to check outside of it.
      // These variables found inside of onHover are crucial, they will need to be moved or redeclared.  I like seeing the variables next to their functionality but I want optimized code.
      function onHover(event) {
        const dataItem = JSON.parse(event.target.getAttribute('data-item'));
        // Print the value of the id
        // console.log("Hovered item ID:", dataItem.id);
        // console.log("Item hovered!");
        // Parse the JSON string from the data-item attribute
        const testMedia = event.target; // This is the hovered .testMedia element
        const rect = testMedia.getBoundingClientRect(); // Get position and size of original media item

        let floatingBorderElement = testMedia.parentNode.querySelector('.testMediaCopy');
        // testMedia.style.zIndex = '5'; // Z-index for this element should be higher than its background border
        let scrollDistanceLeft;
        let scrollDistanceTop;
        scrollDistanceLeft = mediaContainer.scrollLeft;
        scrollDistanceTop = mediaContainer.scrollTop;
        const sideMenuWidth = 200; // Width of the side menu

        // TEMPORARY VALUES TO PREVENT OVERWRITING PRIOR VALUES IN JSON, THESE VALUES AND FUNCTION CHECKS ARE IN A SPECIFIC ORDER SO IF THEY ARE REFERENCED ELSEWHERE THEN THEY WOULD NEED TO BE DECLARED AS A SEPERATE VARIABLE
        // let borderSizeTemp; // need to implement in the event borderSize is disabled after having a value above 0 to prevent incorrect hover image positioning
        // let borderRadiusTemp; // should I do this for radius as well? Once you find a reason for it.  I don't think its necessary at the moment
        // let floatingBorderTemp;
        // let floatingBorderColorTemp;
        // let floatingBorderRadiusTemp;
        // let floatingBorderGapTemp;
        // BORDER SIZE
        // if (borderCheck) { borderSizeTemp = border; } // This prevents the value of floating border being overwritten while still removing it if necessary
        // else { borderSizeTemp = 0; } // This prevents the value of floating border being overwritten while still removing it if necessary

        // if (floatingBorderCheck) { floatingBorderTemp = floatingBorder; } // This prevents the value of floating border being overwritten while still removing it if necessary
        // else { floatingBorderTemp = 0; } // This prevents the value of floating border being overwritten while still removing it if necessary
        
        // // BORDER COLOR
        // if (floatingBorderColorCheck) { floatingBorderColorTemp = floatingBorderColor; } // This prevents the value of floating border Color being overwritten while still removing it if necessary
        // else { floatingBorderColorTemp = 'black'; } // This prevents the value of floating border being overwritten while still removing it if necessary

        // // BORDER RADIUS
        // if (borderRadiusCheck) { borderRadiusTemp = borderRadius; } // This prevents the value of floating border being overwritten while still removing it if necessary
        // else { borderRadiusTemp = 0; } // This prevents the value of floating border being overwritten while still removing it if necessary

        // if (floatingBorderRadiusCheck) { floatingBorderRadiusTemp = floatingBorderRadius; } // This prevents the value of floating border Color being overwritten while still removing it if necessary
        // else { floatingBorderRadiusTemp = 0; } // This prevents the value of floating border being overwritten while still removing it if necessary

        // // BORDER GAP
        // if (floatingBorderGapCheck) { floatingBorderGapTemp = floatingBorderGap; } // This prevents the value of floating border Color being overwritten while still removing it if necessary
        // else { floatingBorderGapTemp = 0; } // This prevents the value of floating border being overwritten while still removing it if necessary
        
        // // SIMULATANEOUSLY CHECK TO SEE IF WRAPBORDER IS APPLIED, AFTER OTHER CHECKBOXES
        // if (wrapBorderCheck) { // This prevents the value of floating border Color being overwritten while still removing it if necessary
        //   floatingBorderRadiusTemp = borderRadiusTemp; // keep for later incase I want to match radius as well.
        //   floatingBorderGapTemp = borderSizeTemp; 
        //   if (!borderCheck) { floatingBorderGapTemp = 0; } // if unchecked, assign 0 // Check to see if bordersize or radius are disabled, then wrap the hovered border around the content itself
        //   if (!borderRadiusCheck) { floatingBorderRadiusTemp = 0; } // if unchecked, assign 0
        //   // This will not work if the hovered border size is disabled.  I think the user should be notified that the size is off.  Keep this default, maybe change size to 1 if its set to 0
        // } else { } // DO NOTHING, KEEP THE VALUES SET ABOVE 

        // // SIMULATANEOUSLY CHECK TO SEE IF MATCH BORDER IS APPLIED, AFTER OTHER CHECKBOXES
        // if (matchBorderCheck) { // This prevents the value of floating border Color being overwritten while still removing it if necessary
        //   floatingBorderTemp = borderSizeTemp;
        //   floatingBorderGapTemp = 0;
        //   floatingBorderRadiusTemp = borderRadiusTemp; // when base radius is disabled, it should read 0, this is done above
        //   // checking the value again as it may have been overwritten above in the wrap check // when base radius is enabled it should match base but the wrap check changes the value
        //   // if (borderRadiusCheck) { floatingBorderRadiusTemp = borderRadius; } // This prevents the value of floating border Color being overwritten while still removing it if necessary
        //   // else { floatingBorderRadiusTemp = 0; } // This prevents the value of floating border being overwritten while still removing it if necessary
          
        // } else { } // DO NOTHING, KEEP THE VALUES SET ABOVE

        floatingBorderElement = testMedia.cloneNode(true);
        floatingBorderElement.classList.add('testMediaCopy');
        floatingBorderElement.style.position = 'absolute';
        floatingBorderElement.style.zIndex = '4';
        floatingBorderElement.style['background-color'] = 'transparent';
        floatingBorderElement.style.border = `${floatingBorderSizeTemp}px solid ${floatingBorderColorTemp}`;
        floatingBorderElement.style['border-radius'] = `${floatingBorderRadiusTemp}px`;
        floatingBorderElement.style.pointerEvents = 'none'; // Ignore pointer events
        // console.log('    after mouseEnter Border: ' + border); // border is not updating, causing non-bordered hover border to be off center
        // floatingBorderPadding = (border) + (floatingBorderGap) + 'px'; // border is not updating here?
        floatingBorderPadding = (floatingBorderGapTemp) + 'px'; // border is removed to have floating cover original
        floatingBorderElement.style.padding = floatingBorderPadding;

        // MARGINAL ADJUSTMENTS
        let floatingBorderTopAdjustment = (rect.top) - (floatingBorderSizeTemp) - (floatingBorderGapTemp) + (borderSizeTemp) + (scrollDistanceTop) - (topMarginTemp) - 50;
        let floatingBorderLeftAdjustment = (rect.left) - (floatingBorderSizeTemp) - (floatingBorderGapTemp) + (borderSizeTemp) + (scrollDistanceLeft) - (leftMarginTemp) - (sideMenuWidth) + 0;
        let topMarginAdjustment = 0; // additional values to be added onto the floatingBorderAdjustment based on various checkboxes
        let leftMarginAdjustment = 0; // additional values to be added onto the floatingBorderAdjustment based on various checkboxes
        //if autoMargin is not checked and match base is, only use base border for margin size
        if (autoMarginCheck) {
          topMarginAdjustment = 0 - floatingBorderSizeTemp;
          leftMarginAdjustment = 0 - floatingBorderSizeTemp;
        }
        // if autoMargin is Checked and wrapbase border is checked, account for floating border size and gap in marginTemp Values
        if (autoMarginCheck && wrapBorderCheck) {
          topMarginAdjustment = 0; // if condition is true, reset the values.
          leftMarginAdjustment = 0; // if condition is true, reset the values.
          topMarginAdjustment = ((0 - floatingBorderSizeTemp - borderSizeTemp));
          leftMarginAdjustment = ((0 - floatingBorderSizeTemp - borderSizeTemp));
        }
        // this uses the same variable that was changed previously.  Need to create new temp variables that hold the predicted changed value then add them to the total at the end of the checks
        if (autoMarginCheck && matchBorderCheck) {
          topMarginAdjustment = 0; // if condition is true, reset the values.
          leftMarginAdjustment = 0; // if condition is true, reset the values.
          // topMarginAdjustment = ((floatingBorderSizeTemp + borderSizeTemp));
          // leftMarginAdjustment = ((floatingBorderSizeTemp + borderSizeTemp));
        }
        // Add 'px' to the end for value to be correctly added as string and contain px unit
        floatingBorderTopAdjustment = `${floatingBorderTopAdjustment + topMarginAdjustment}px`;
        floatingBorderLeftAdjustment = `${floatingBorderLeftAdjustment + leftMarginAdjustment}px`;

        floatingBorderElement.style.top = floatingBorderTopAdjustment;
        floatingBorderElement.style.left = floatingBorderLeftAdjustment;
        // END MARGINAL ADJUSTMENTS

        testMedia.parentNode.appendChild(floatingBorderElement);
      }

      function onMouseLeave(event) {
        const testMedia = event.target; // This is the hovered .testMedia element
        testMedia.style.zIndex = '2'; // Z-index for this element should be higher than its background border
        const copies = testMedia.parentNode.querySelectorAll('.testMediaCopy');
        copies.forEach(copy => {
            copy.parentNode.removeChild(copy);
        });
        // console.log("Mouse left the item!");
        // const dataItem = JSON.parse(event.target.getAttribute('data-item'));
        // Print the value of the id
        // console.log("Hovered item ID:", dataItem.id);
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
      // This function should not update the json styling, instead just update the page dynamically here                                                                                                              
      function updateMediaStyling() {
        console.log('Function: Update Media Styling');
        // THIS IS A WORKING WAY TO UPDATE ALL MEDIA ITEMS AT ONCE WITHOUT HAVING TO CREATE LOOPS
        let selector = ".testMedia";
        let setHeight = 200; // Fixed height for displayed media
        let ratio = width / height; // Calculate the aspect ratio
        let ratioedWidth = setHeight * ratio; // Apply the aspect ratio to the new fixed height
        const styleSheets = Array.from(document.styleSheets); // Find the stylesheet already loaded in the document
        const styleSheet = styleSheets.find(sheet => sheet.href && sheet.href.endsWith('main.css'));

        // Temporary values that won't update the json file, but still allow for dynamic changes on the page.
        // I want to avoid the checkbox's from updating the values of border and borderColor
        let borderSizeTemp = borderCheck === "checked" ? border : 0; // default is 0
        let borderColorTemp = borderColorCheck === "checked" ? borderColor : `black`; // default is black
        let borderRadiusTemp = borderRadiusCheck === "checked" ? borderRadius : 0; // default is black

        let ruleText;         // Determine the correct CSS rule based on 'width'
        if (width === 'auto') {
            ruleText = `{ width: auto; height: ${setHeight}px; border: ${borderSizeTemp}px solid ${borderColorTemp}; border-radius: ${borderRadiusTemp}px; }`;
        } else {
            ruleText = `{ width: ${ratioedWidth}px; height: ${setHeight}px; border: ${borderSizeTemp}px solid ${borderColorTemp}; border-radius: ${borderRadiusTemp}px; }`;
        }
        if (styleSheet) { // potentially create a dynaimc style sheet that is less crowded and easier to search through
            let ruleFound = false;
            for (let i = 0; i < styleSheet.cssRules.length; i++) { // console.log(i);
                if (styleSheet.cssRules[i].selectorText === selector) { // Rule exists, so update it
                    styleSheet.deleteRule(i);
                    styleSheet.insertRule(`${selector} ${ruleText}`, i);
                    ruleFound = true;
                    break;
                }
            }
            if (!ruleFound) { // Rule does not exist, add it
                styleSheet.insertRule(`${selector} ${ruleText}`, styleSheet.cssRules.length);
            }
        } else {
            console.log('The specified stylesheet was not found in the document.');
        }

        // HAVING AN ISSUE WITH THE HOVERED BORDER EXCEEDING THE DISPLAY WINDOW ON THE LEFT SIDE.  IMPLEMENT PADDING FOR FLOATING BORDER ACCOMODATION HERE
        // let floatingBorderGapTemp = floatingBorderGapCheck === "checked" ? floatingBorderGap : 0; // if yes, assign the value for floatingBorderGap, if no assign 0
        // if (wrapBorderCheck === "checked") { floatingBorderGapTemp = borderSizeTemp; } // wrapBorderCheck would change the value of the gap between the content and the hovered border.

        // // Calculate the amount of padding that should be applied.
        // if (matchBorderCheck === "checked") { floatingBorderShift = 0; } // if matchBorderCheck is checked at all, there will be no padding required to contain the hovered border in the media display window
        // // what if the user makes the border gap 1000+ ? I don't want to shift the content that far off the page.  
        // // Trying to balance user customization with an ugly user experience.  If the user makes the app that ugly that's on them.  Be different from other apps, give user as much control as possible while trying to guide them to make smart choices.
        // console.log('floatingBorderGapTemp: ' + floatingBorderGapTemp);
        // console.log('mediaDisplayShift: ' + floatingBorderShift);
        // mediaDataDisplay.style.margin = '' + floatingBorderShift + 'px'; // need to save this value globally so that it can be applied to the hover settings. // also this is not updating dynamically yet.  Will need to fix that.
        // left, right, auto margin checkbox settings
        // Do I need to create a new section of code?

        // shift the media content over based on the size and gap of the floating border + shift over just for the sake of space between the edge of the floating border and the side menu
        

        updateTestMediaPicturesSizes(width, height, borderSizeTemp, borderRadiusTemp);
        // testMediaElements.forEach(testMedia => {
        // saveStyling(); 
        // height, width, original dimensions are saved here
      }
      //###################################################################################################################################################################

      //###################################################################################################################################################################
      //  ██████          ██████ ██████████████ ████████████████   ██████████████ ██████████ ██████          ██████ ██████████████ 
      //  ██░░██████████████░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░░░██   ██░░░░░░░░░░██ ██░░░░░░██ ██░░██████████  ██░░██ ██░░░░░░░░░░██ 
      //  ██░░░░░░░░░░░░░░░░░░██ ██░░██████░░██ ██░░████████░░██   ██░░██████████ ████░░████ ██░░░░░░░░░░██  ██░░██ ██░░██████████ 
      //  ██░░██████░░██████░░██ ██░░██  ██░░██ ██░░██    ██░░██   ██░░██           ██░░██   ██░░██████░░██  ██░░██ ██░░██         
      //  ██░░██  ██░░██  ██░░██ ██░░██████░░██ ██░░████████░░██   ██░░██           ██░░██   ██░░██  ██░░██  ██░░██ ██░░██████████ 
      //  ██░░██  ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░░░██   ██░░██  ██████   ██░░██   ██░░██  ██░░██  ██░░██ ██░░░░░░░░░░██ 
      //  ██░░██  ██████  ██░░██ ██░░██████░░██ ██░░██████░░████   ██░░██  ██░░██   ██░░██   ██░░██  ██░░██  ██░░██ ██████████░░██ 
      //  ██░░██          ██░░██ ██░░██  ██░░██ ██░░██  ██░░██     ██░░██  ██░░██   ██░░██   ██░░██  ██░░██████░░██         ██░░██ 
      //  ██░░██          ██░░██ ██░░██  ██░░██ ██░░██  ██░░██████ ██░░██████░░██ ████░░████ ██░░██  ██░░░░░░░░░░██ ██████████░░██ 
      //  ██░░██          ██░░██ ██░░██  ██░░██ ██░░██  ██░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░██ ██░░██  ██████████░░██ ██░░░░░░░░░░██ 
      //  ██████          ██████ ██████  ██████ ██████  ██████████ ██████████████ ██████████ ██████          ██████ ██████████████ 
      //   
      // In the event the user's hovered border extends the width of the screen, we need to set custom margins to keep the entire content on the screen.
      // Set the hovered border values, then set the margin values based on that.

      // check for updates with autoMargin Checkbox and top,left margin input boxes.  If they trigger, then run the function updateMargin
      autoMarginCheckbox.addEventListener('change', updateMargin); //checkbox update
      autoMarginCheckbox.addEventListener('change', saveStyling);

      formTopMargin.addEventListener('input', updateMargin); // if top or left margin values are changed update margin settings.
      formTopMargin.addEventListener('input', saveStyling); // if top or left margin values are changed update margin settings.
      formLeftMargin.addEventListener('input', updateMargin); // if top or left margin values are changed update margin settings.
      formLeftMargin.addEventListener('input', saveStyling); // if top or left margin values are changed update margin settings.

      updateMargin();
      function updateMargin() {
        // TEMPORARY VALUES TO PREVENT OVERWRITING PRIOR VALUES IN JSON, 
        // THESE VALUES AND FUNCTION CHECKS ARE IN A SPECIFIC ORDER SO IF THEY ARE REFERENCED ELSEWHERE THEN THEY WOULD NEED TO BE DECLARED AS A SEPERATE VARIABLE
        
        if (borderCheck) { borderSizeTemp = border; } // This prevents the value of floating border being overwritten while still removing it if necessary
        else { borderSizeTemp = 0; } // This prevents the value of floating border being overwritten while still removing it if necessary

        if (floatingBorderCheck) { floatingBorderSizeTemp = floatingBorder; } // This prevents the value of floating border being overwritten while still removing it if necessary
        else { floatingBorderSizeTemp = 0; } // This prevents the value of floating border being overwritten while still removing it if necessary
        
        // BORDER COLOR
        if (floatingBorderColorCheck) { floatingBorderColorTemp = floatingBorderColor; } // This prevents the value of floating border Color being overwritten while still removing it if necessary
        else { floatingBorderColorTemp = 'black'; } // This prevents the value of floating border being overwritten while still removing it if necessary

        // BORDER RADIUS
        if (borderRadiusCheck) { borderRadiusTemp = borderRadius; } // This prevents the value of floating border being overwritten while still removing it if necessary
        else { borderRadiusTemp = 0; } // This prevents the value of floating border being overwritten while still removing it if necessary

        if (floatingBorderRadiusCheck) { floatingBorderRadiusTemp = floatingBorderRadius; } // This prevents the value of floating border Color being overwritten while still removing it if necessary
        else { floatingBorderRadiusTemp = 0; } // This prevents the value of floating border being overwritten while still removing it if necessary

        // BORDER GAP
        if (floatingBorderGapCheck) { floatingBorderGapTemp = floatingBorderGap; } // This prevents the value of floating border Color being overwritten while still removing it if necessary
        else { floatingBorderGapTemp = 0; } // This prevents the value of floating border being overwritten while still removing it if necessary
        
        // SIMULATANEOUSLY CHECK TO SEE IF WRAPBORDER IS APPLIED, AFTER OTHER CHECKBOXES
        if (wrapBorderCheck) { // This prevents the value of floating border Color being overwritten while still removing it if necessary
          floatingBorderRadiusTemp = borderRadiusTemp; // keep for later incase I want to match radius as well.
          floatingBorderGapTemp = borderSizeTemp; 
          if (!borderCheck) { floatingBorderGapTemp = 0; } // if unchecked, assign 0 // Check to see if bordersize or radius are disabled, then wrap the hovered border around the content itself
          if (!borderRadiusCheck) { floatingBorderRadiusTemp = 0; } // if unchecked, assign 0
          // This will not work if the hovered border size is disabled.  I think the user should be notified that the size is off.  Keep this default, maybe change size to 1 if its set to 0
        } else { } // DO NOTHING, KEEP THE VALUES SET ABOVE 

        // SIMULATANEOUSLY CHECK TO SEE IF MATCH BORDER IS APPLIED, AFTER OTHER CHECKBOXES
        if (matchBorderCheck) { // This prevents the value of floating border Color being overwritten while still removing it if necessary
          console.log("matchBorder: Check");
          floatingBorderSizeTemp = borderSizeTemp;
          floatingBorderGapTemp = 0;
          floatingBorderRadiusTemp = borderRadiusTemp; // when base radius is disabled, it should read 0, this is done above
          // checking the value again as it may have been overwritten above in the wrap check // when base radius is enabled it should match base but the wrap check changes the value
          // if (borderRadiusCheck) { floatingBorderRadiusTemp = borderRadius; } // This prevents the value of floating border Color being overwritten while still removing it if necessary
          // else { floatingBorderRadiusTemp = 0; } // This prevents the value of floating border being overwritten while still removing it if necessary
          
        } else { } // DO NOTHING, KEEP THE VALUES SET ABOVE

        // CALCULATING MARGIN SIZE
        // floatingBorderSizeTemp = floatingBorderCheck === "checked" ? floatingBorder : 0; // if yes, assign the value for floatingBorder, if no assign 0
        // floatingBorderGapTemp = floatingBorderGapCheck === "checked" ? floatingBorderGap : 0; // if yes, assign the value for floatingBorderGap, if no assign 0
        // if (wrapBorderCheck === "checked") { floatingBorderGapTemp = borderSizeTemp; } // wrapBorderCheck would change the value of the gap between the content and the hovered border.

        // Calculate the amount of padding that should be applied.
        let autoMarginAmount = floatingBorderSizeTemp + floatingBorderGapTemp;
        if (matchBorderCheck === "checked") { autoMarginAmount = 0; } // if matchBorderCheck is checked at all, there will be no padding required to contain the hovered border in the media display window
        // what if the user makes the border gap 1000+ ? I don't want to shift the content that far off the page.  
        // Trying to balance user customization with an ugly user experience.  If the user makes the app that ugly that's on them.  Be different from other apps, give user as much control as possible while trying to guide them to make smart choices.
        // console.log('floatingBorderSizeTemp: ' + floatingBorderSizeTemp);
        // console.log('floatingBorderGapTemp: ' + floatingBorderGapTemp);
        // console.log('mediaDisplayShift: ' + floatingBorderShift);
        // mediaDataDisplay.style.margin = '' + floatingBorderShift + 'px'; // need to save this value globally so that it can be applied to the hover settings. // also this is not updating dynamically yet.  Will need to fix that.

        // NEW VALUES
        // const autoMarginCheckbox = document.getElementById('autoMarginCheckbox');
        // floatingBorderSizeTemp = floatingBorderCheck === "checked" ? floatingBorder : 0;
        // const formTopMargin = document.getElementById('formTopMargin');
        // const formLeftMargin = document.getElementById('formLeftMargin');
        // TOP MARGIN
          topMargin =  formTopMargin.value; // I need to verify these values.
          let topMargininputValue = parseInt(formTopMargin.value);
          if (topMargininputValue < 0) {
            formTopMargin.value = 0; // this keeps the input from exceeding the limit
            topMargininputValue = 0; // Update inputValue as well
          } // Check if the value is greater than 999
          if (topMargininputValue > 999) { // If so, set it to 999
            formTopMargin.value = 999; // this keeps the input from exceeding the limit
              topMargininputValue = 999; // Update inputValue as well
          } // Update the border variable with the input value
          topMargin = topMargininputValue;
          // in the event the value is empty or contains letters
          topMargin = formTopMargin.value !== null ? formTopMargin.value : 0;
          formTopMargin.value = topMargin;
        // LEFT MARGIN
          leftMargin = formLeftMargin.value;
          let leftMargininputValue = parseInt(formLeftMargin.value);
          if (leftMargininputValue < 0) {
            formLeftMargin.value = 0; // this keeps the input from exceeding the limit
            leftMargininputValue = 0; // Update inputValue as well
          } // Check if the value is greater than 999
          if (leftMargininputValue > 999) { // If so, set it to 999
            formLeftMargin.value = 999; // this keeps the input from exceeding the limit
            leftMargininputValue = 999; // Update inputValue as well
          } // Update the border variable with the input value
          leftMargin = leftMargininputValue;
          // in the event the value is empty or contains letters
          leftMargin = formLeftMargin.value !== null ? formLeftMargin.value : 0;
          formLeftMargin.value = leftMargin;
        // 
        if (autoMarginCheckbox.checked) {
          formTopMargin.disabled = true;
          formLeftMargin.disabled = true;
          mediaDataDisplay.style['margin-top'] = '' + autoMarginAmount + 'px';
          mediaDataDisplay.style['margin-left'] = '' + autoMarginAmount + 'px';
          autoMarginCheck = "checked";
          topMarginTemp = 0;
          leftMarginTemp = 0;
          
        }
        else {
          formTopMargin.disabled = false;
          formLeftMargin.disabled = false;
          mediaDataDisplay.style['margin-top'] = '' + topMargin + 'px';
          mediaDataDisplay.style['margin-left'] = '' + leftMargin + 'px';
          autoMarginCheck = "";
          topMarginTemp = topMargin;
          leftMarginTemp = leftMargin;
        }
        // updateMediaStyling();
      }
      // let borderSizeTemp = borderCheck === "checked" ? border : 0; // default is 0
      // let borderColorTemp = borderColorCheck === "checked" ? borderColor : `black`; // default is black
      // let borderRadiusTemp = borderRadiusCheck === "checked" ? borderRadius : 0; // default is black

      

      // HOVERED CODE
      // let borderSizeTemp; // need to implement in the event borderSize is disabled after having a value above 0 to prevent incorrect hover image positioning
      // let borderRadiusTemp; // should I do this for radius as well? Once you find a reason for it.  I don't think its necessary at the moment
      // let floatingBorderTemp;
      // let floatingBorderColorTemp;
      // let floatingBorderRadiusTemp;
      // let floatingBorderGapTemp;
      // BORDER SIZE
      


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

      formFloatingBorder.addEventListener('input', updateFloatingBorder); //checkbox update
      formFloatingBorder.addEventListener('input', saveStyling);

      // document.getElementById("formFloatingBorderColor").addEventListener("input", updateFloatingBorderColor); // input field update
      function updateFloatingBorder() {
        let inputValue = parseInt(formFloatingBorder.value);
        if (inputValue < 0) {
            formFloatingBorder.value = 0; // this keeps the input from exceeding the limit
            inputValue = 0; // Update inputValue as well
        } // Check if the value is greater than 999
        if (inputValue > 999) { // If so, set it to 999
            formFloatingBorder.value = 999; // this keeps the input from exceeding the limit
            inputValue = 999; // Update inputValue as well
        } // Update the border variable with the input value
        floatingBorder = inputValue;
        // in the event the value is empty or contains letters
        floatingBorder = formFloatingBorder.value !== null ? formFloatingBorder.value : 0;
        formFloatingBorder.value = floatingBorder;
        // console.log('Function: updateFloatingBorder')
        // console.log('Function: Update Floating Border');
        // check to see if anything previous match border is disabled or not
        // Disabling boxes individually might make a mess.  
        // instead create a value that controls wether or not variables can be re-enabled or not (a master switch)
        if (floatingBorderCheckbox.checked) {
            floatingBorder = parseInt(formFloatingBorder.value);
            formFloatingBorder.disabled = false;
            floatingBorderCheck = "checked";
            // document.getElementById("floatingBorderColorCheckbox").disabled = false;
            // document.getElementById("floatingBorderRadiusCheckbox").disabled = false;
            // document.getElementById("floatingBorderGapCheckbox").disabled = false;
            
            // document.getElementById("formFloatingBorderColor").disabled = false;
            updateFloatingBorderRadius(); // instead call these functions to check whether the checkbox has these inputs enabled or disabled
            updateFloatingBorderGap();
            floatingBorderPadding = border;
        } 
        else {
            // floatingBorder = 0;
            formFloatingBorder.disabled = true;
            floatingBorderCheck = "";
            // document.getElementById("floatingBorderRadiusCheckbox").disabled = true;
            // document.getElementById("floatingBorderGapCheckbox").disabled = true;
            // document.getElementById("floatingBorderColorCheckbox").disabled = true;
            
            // document.getElementById("formFloatingBorderColor").disabled = true;
            // document.getElementById("formFloatingBorderRadius").disabled = true;
            // document.getElementById("formFloatingBorderGap").disabled = true;
        }
          // updateMediaStyling();
          // saveStyling();
          updateMargin(); // update margin settings before expecting to see new value changes.
        }

      // formFloatingBorder.addEventListener("input", function() {
      // let inputValue = parseInt(formFloatingBorder.value);
      // if (inputValue < 0) {
      //     formFloatingBorder.value = 0; // this keeps the input from exceeding the limit
      //     inputValue = 0; // Update inputValue as well
      // } // Check if the value is greater than 999
      // if (inputValue > 999) { // If so, set it to 999
      //     formFloatingBorder.value = 999; // this keeps the input from exceeding the limit
      //     inputValue = 999; // Update inputValue as well
      // } // Update the border variable with the input value
      // floatingBorder = inputValue;
      // floatingBorder = this.value !== null ? this.value : 0;
      // this.value = floatingBorder;
      // updateFloatingBorder(); // apply to all media items
      // });
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
      //
      updateFloatingBorderColor();

      floatingBorderColorCheckbox.addEventListener('change', updateFloatingBorderColor);
      floatingBorderColorCheckbox.addEventListener('change', saveStyling);

      formFloatingBorderColor.addEventListener("input", updateFloatingBorderColor); // input field update
      formFloatingBorderColor.addEventListener("input", saveStyling); // input field update

      function updateFloatingBorderColor() {
        // console.log('Function: Update Floating Border Color');
        if (floatingBorderColorCheckbox.checked) {
            floatingBorderColorCheck = "checked";
            floatingBorderColor = formFloatingBorderColor.value;
            formFloatingBorderColor.disabled = false;
        } else {
            floatingBorderColorCheck = "";
            formFloatingBorderColor.disabled = true;
            // floatingBorderColor = 'black';
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
      //
      updateFloatingBorderRadius();
      floatingBorderRadiusCheckbox.addEventListener('change', updateFloatingBorderRadius);
      floatingBorderRadiusCheckbox.addEventListener('change', saveStyling);

      formFloatingBorderRadius.addEventListener("input", updateFloatingBorderRadius);
      formFloatingBorderRadius.addEventListener("input", saveStyling);

      function updateFloatingBorderRadius() {
        var inputValue = parseInt(formFloatingBorderRadius.value);
        if (inputValue < 0) {
          formFloatingBorderRadius.value = 0;
            inputValue = 0; // Update inputValue as well
        } // Check if the value is greater than 999
        if (inputValue > 999) { // If so, set it to 999
          formFloatingBorderRadius.value = 999;
            inputValue = 999; // Update inputValue as well
        } // Update the border variable with the input value
        floatingBorderRadius = inputValue;
        // console.log('Function: Update Floating Border Radius');
        if (floatingBorderRadiusCheckbox.checked) {
            floatingBorderRadius = parseInt(formFloatingBorderRadius.value);
            formFloatingBorderRadius.disabled = false;
            floatingBorderRadiusCheck = "checked";
        } else {
            floatingBorderRadiusCheck = "";
            formFloatingBorderRadius.disabled = true;
        } // document.getElementById("floatingBorderRadiusValue").textContent = `Floating Border Radius: ${floatingBorderRadius}`;
        //   updateMediaStyling();
        // saveStyling();
      }

      
      // function updateFloatingBorderRadius() {
        // var inputValue = parseInt(formFloatingBorderRadius.value);
        // if (inputValue < 0) {
        //   formFloatingBorderRadius.value = 0;
        //     inputValue = 0; // Update inputValue as well
        // } // Check if the value is greater than 999
        // if (inputValue > 999) { // If so, set it to 999
        //   formFloatingBorderRadius.value = 999;
        //     inputValue = 999; // Update inputValue as well
        // } // Update the border variable with the input value
        // floatingBorderRadius = inputValue;
        // The form should only recognize number inputs anyways
        // floatingBorderRadius = formFloatingBorderRadius.value !== null ? formFloatingBorderRadius.value : 0; // if user enters something like apple
        // formFloatingBorderRadius.value = floatingBorderRadius; // this will actually change the value in input if needed
      
        // updateFloatingBorderRadiusCheckbox(); // apply to all media items
      // };
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
      //        
      updateFloatingBorderGap();
      floatingBorderGapCheckbox.addEventListener('change', updateFloatingBorderGap);
      floatingBorderGapCheckbox.addEventListener('change', saveStyling);

      formFloatingBorderGap.addEventListener("input", updateFloatingBorderGap);
      formFloatingBorderGap.addEventListener("input", saveStyling);

      function updateFloatingBorderGap() {
        var inputValue = parseInt(formFloatingBorderGap.value);
        if (inputValue < 0) {
          formFloatingBorderGap.value = 0;
            inputValue = 0; // Update inputValue as well
        } // Check if the value is greater than 999
        if (inputValue > 999) { // If so, set it to 999
          formFloatingBorderGap.value = 999;
            inputValue = 999; // Update inputValue as well
        } // Update the border variable with the input value
        floatingBorderGap = inputValue;
        // console.log('Function: Update Floating Border Gap');
        if (floatingBorderGapCheckbox.checked) {
          floatingBorderGapCheck = "checked";
          floatingBorderGap = parseInt(formFloatingBorderGap.value);
          formFloatingBorderGap.disabled = false;
        } else {
          floatingBorderGapCheck = "";
          // floatingBorderGap = 0;
          formFloatingBorderGap.disabled = true;
        } // document.getElementById("floatingBorderGapValue").textContent = `Floating Border Gap Size: ${floatingBorderGap}`;
        //   updateMediaStyling();
        // saveStyling();
        updateMargin();
      }

      
      // function updateFloatingBorderGap() {
        // var inputValue = parseInt(formFloatingBorderGap.value);
        // if (inputValue < 0) {
        //   formFloatingBorderGap.value = 0;
        //     inputValue = 0; // Update inputValue as well
        // } // Check if the value is greater than 999
        // if (inputValue > 999) { // If so, set it to 999
        //   formFloatingBorderGap.value = 999;
        //     inputValue = 999; // Update inputValue as well
        // } // Update the border variable with the input value
        // floatingBorderGap = inputValue;
        // floatingBorderGap = formFloatingBorderGap.value !== null ? formFloatingBorderGap.value : 0;
        // formFloatingBorderGap.value = floatingBorderGap;
        // updateFloatingBorderGapCheckbox(); // apply to all media items
      // };
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
        // Disable other floating border settings / inputs
        let floatingElements = [
          "floatingBorderCheckbox",
          "formFloatingBorder",
          "floatingBorderRadiusCheckbox",
          "formFloatingBorderRadius",
          "floatingBorderGapCheckbox",
          "formFloatingBorderGap", 
          "wrapBorderCheckbox" // also disable the surrounding gap check
        ];
        if (matchBorderCheckbox.checked) {
          matchBorderCheck = "checked";
          floatingElements.forEach(elementId => {
            document.getElementById(elementId).disabled = true;
          });
          // Need to find a way to temporarily disable these values. 
          // need to disable this in hover styling along side the other checks
          // need to call hovering styling 
          // floatingBorder = border;
          // floatingBorderRadius = borderRadius;
          // floatingBorderGap = 0;
          // floatingBorderColor = borderColor;
          // console.log('border / floating: ' + border + ' ' + floatingBorder);
        }
        else {
          matchBorderCheck = "";
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
        updateMargin();
      }
      //###################################################################################################################################################################

      //###################################################################################################################################################################
                                                                               
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
                                                                                                           
      // There is a conflict between the size checkbox and the matchBorderSettings Checkbox
      // They can overwrite the disabling and re-enabling the other box has determined
      // It might be better to remove the size checkbox disabler OR
      // Check the values of the other boxes before applying changes in each function
      // when this is checked, this does not automatically update when reg border or radius is changed, 
      // when those border and radius functions are called, call the floating functions to update the floating values also
      wrapBorder();
      wrapBorderCheckbox.addEventListener('change', wrapBorder);
      wrapBorderCheckbox.addEventListener('change', saveStyling);

      function wrapBorder() {
        // Disable other floating border settings / inputs
        let floatingElements = [
          "floatingBorderRadiusCheckbox",
          "formFloatingBorderRadius", // consider the radius for later
          "floatingBorderGapCheckbox",
          "formFloatingBorderGap"
        ];
        if (wrapBorderCheckbox.checked) {
          wrapBorderCheck = "checked";
          floatingBorderRadius = borderRadiusTemp;
          floatingElements.forEach(elementId => {
            document.getElementById(elementId).disabled = true;
          });
        }
        else {
          wrapBorderCheck = "";
          floatingElements.forEach(elementId => {
            document.getElementById(elementId).disabled = false;
          });
        }
        updateMargin();
      }

      //###################################################################################################################################################################

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
        console.log(
          '***************************************' + '\n' +
          'Function: saveStyling: ' + '\n' +
          ' _____________________________ ' + '\n' +
          '|            VALUES           |' + '\n' +
          '|_____________________________|' + '\n' + 
          'name: ' + name + '\n' +
          'backgroundVisual: ' + backgroundVisual + '\n' +
          'backgroundColor: ' + backgroundColor + '\n' +
          'gap: ' + gap + '\n' +
          'wrap: ' + wrap + '\n' + 
          'originalDimensions: ' + originalDimensions + '\n' + 
          'width: ' + width + '\n' +
          'height: ' + height + '\n' +
          'border: ' + border + '\n' + 
          'borderCheck: ' + borderCheck + '\n' + 
          'borderColor: ' + borderColor + '\n' + 
          'borderRadius: ' + borderRadius + '\n' +
          'floatingBorderRadius: ' + floatingBorderRadius + '\n' +
          'floatingBorderGap: ' + floatingBorderGap + '\n' +
          'topMargin: ' + topMargin + '\n' + 
          'leftMargin: ' + leftMargin + '\n' + 
          'floatingBorder: ' + floatingBorder + '\n' +
          ' _____________________________ ' + '\n' +
          '|         CHECK BOXES         |' + '\n' +
          '|_____________________________|' + '\n' +
          'gapCheck: ' + gapCheck + '\n' +
          'backgroundColorCheck: ' + backgroundColorCheck + '\n' +
          'borderColorCheck: ' + borderColorCheck + '\n' + 
          'borderRadiusCheck: ' + borderRadiusCheck + '\n' +
          'floatingBorderCheck: ' + floatingBorderCheck + '\n' +
          'floatingBorderColor: ' + floatingBorderColor + '\n' +
          'floatingBorderColorCheck: ' + floatingBorderColorCheck + '\n' +
          'floatingBorderRadiusCheck: ' + floatingBorderRadiusCheck + '\n' +
          'floatingBorderGapCheck: ' + floatingBorderGapCheck + '\n' +
          'matchBorderCheck: ' + matchBorderCheck + '\n' +
          'wrapBorderCheck: ' + wrapBorderCheck + '\n' +
          'autoMarginCheck: ' + autoMarginCheck + '\n' +
          '***************************************'
        )
        // PASS VALUES TO NEXT FUNCTION
        window.updateBridge.updateTag(
          name, 
          backgroundVisual, 
          // backgroundAudio, 
          backgroundColorCheck, 
          backgroundColor, 
          gap, 
          gapCheck,
          wrap, 
          originalDimensions, 
          width, 
          height,
          border, 
          borderCheck,
          borderColor, 
          borderColorCheck,
          borderRadius, 
          borderRadiusCheck,
          floatingBorder, 
          floatingBorderCheck,
          floatingBorderColor, 
          floatingBorderColorCheck,
          floatingBorderRadius,
          floatingBorderRadiusCheck, 
          floatingBorderGap, 
          floatingBorderGapCheck,
          matchBorderCheck,
          wrapBorderCheck,
          autoMarginCheck,
          topMargin,
          leftMargin,
          // floatingBorderPadding
          //matchBorder
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
  //     MATCH BORDER HERE
  //   },

  // Need to save these values when Changed, 
  // update them individually automatically, save button adds complexity.  App should strive for simplicity
  // need option to update background visual, for videos or images.  Right now, it only works with videos.
  // 