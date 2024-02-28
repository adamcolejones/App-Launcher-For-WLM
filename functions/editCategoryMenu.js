import { gapChange } from './gapChange.js';
import { wrapChange } from './wrapChange.js';
// import { simplifyRatio } from './simplifyRatio.js';
import { updateAspectRatio } from './updateAspectRatio.js';
import { updateHeight } from './updateHeight.js';
import { updateMediaStyling } from './updateMediaStyling.js';
import { updateTestMediaPicturesSizes } from './updateTestMediaPicturesSizes.js';

function editCategoryMenu(tag, jsondata) {
    const selectedTag = jsondata.Tags.find(item => item.Name === tag);
    const editCategoryMenu = document.getElementById('editCategoryMenu');
    if (editCategoryMenu.style.display === 'block') {
      editCategoryMenu.style.display = 'none';
    } else {
        editCategoryMenu.style.display = 'block';
    }
    let border = selectedTag.Border;
    let borderRadius = selectedTag.BorderRadius;
    let borderColor = selectedTag.BorderColor;
    // Create a border color default when the checkbox is disabled.
    // create a border color disabler for input field and for the hovered border as well.
    let wrap = selectedTag.Wrap;
    let gap = selectedTag.Gap;
    let floatingBorder = selectedTag.FloatingBorder;
    let floatingBorderColor = selectedTag.FloatingBorderColor;
    let floatingBorderRadius = selectedTag.FloatingBorderRadius;
    let floatingBorderGap = selectedTag.FloatingBorderGap;
    let height = selectedTag.Height;
    // let setHeight = 200;
    let width = selectedTag.Width;
    // let ratio = width / height; // why does resetting the ratio effect the content?
    // let ratioedWidth = setHeight * ratio;
    let floatingBorderPadding;
    // let floatingBorderTopAdjustment;
    // let floatingBorderLeftAdjustment;
    // ({width, height} = simplifyRatio(width, height));
    // let functionCount = 1;
    
    editCategoryMenu.innerHTML = `
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

    `;
    // const testMediaContainer = document.getElementById('testMediaContainer');
    const originalDimensionsCheckbox = document.getElementById('originalDimensionsCheckbox');
    // const originalDimensionsCheckbox = document.getElementById('originalDimensionsCheckbox');
    const gapCheckbox = document.getElementById('gapCheckbox');
    const wrapCheckbox = document.getElementById('wrapCheckbox');
    const borderCheckbox = document.getElementById('borderCheckbox');
    const floatingBorderCheckbox = document.getElementById('floatingBorderCheckbox');
    const floatingBorderRadiusCheckbox = document.getElementById('floatingBorderRadiusCheckbox');
    const floatingBorderGapCheckbox = document.getElementById('floatingBorderGapCheckbox');
    // const otherNotes = document.getElementById('otherNotes');
    // topAdjustment = 50;
    // testMediaContainer.style.top = '' + topAdjustment + 'px';
    // otherNotes.style.top = '' + topAdjustment + 'px';

    gapChange(gap); // Default values for wrap and gap
    wrapChange(wrap);

    //-----------------------------------------------------------------------------------------
    // CHECKBOX VALUES UPDATE THE STYLING WHEN CHANGED
    // Placed before the media elements are created, as the container controls the gaps, not the media itself
    //-----------------------------------------------------------------------------------------
    // GAP LISTENER
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
    //-----------------------------------------------------------------------------------------

    //-----------------------------------------------------------------------------------------
    // WRAP LISTENER
    wrapCheckbox.addEventListener('change', () => {
        wrap = wrapCheckbox.checked ? 'wrap' : 'nowrap';
        wrapChange(wrap); // Pass the gap value to the imported function
    });


    // const scrollableContent = document.querySelector('.scrollableContent');
    const testMediaElements = document.querySelectorAll('.testMedia');
    // const testMediaPictures = document.querySelectorAll('.testMediaItemPicture');

    // You can set global variables here that apply to all media at once rather than repeating loops
    //-----------------------------------------------------------------------------------------
    // updateAspectRatio(width, height);
    updateMediaStyling(testMediaElements, width, height, border, borderColor, borderRadius, floatingBorder, floatingBorderColor, floatingBorderRadius, floatingBorderPadding, floatingBorderGap, floatingBorderGap);
    // document.getElementById("formRatioWidth").addEventListener('change', updateAspectRatio);
    document.getElementById("formRatioWidth").addEventListener('change', function() {
      updateAspectRatio(width, height);
      updateMediaStyling(testMediaElements, width, height, border, borderColor, borderRadius, floatingBorder, floatingBorderColor, floatingBorderRadius, floatingBorderPadding, floatingBorderGap);
    });

    // document.getElementById("formRatioHeight").addEventListener('change', updateAspectRatio);
    document.getElementById("formRatioHeight").addEventListener('change', function() {
      updateAspectRatio(width, height);
      updateMediaStyling(testMediaElements, width, height, border, borderColor, borderRadius, floatingBorder, floatingBorderColor, floatingBorderRadius, floatingBorderPadding, floatingBorderGap);
    });

    //-----------------------------------------------------------------------------------------
    // UPDATE WIDTH, HEIGHT, and ASPECT RATIO
    //
    //
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
    }

    document.getElementById("formRatioHeight").addEventListener("input", updateHeight);
    // document.getElementById("formRatioHeight").addEventListener("input", function() {
    //   updateHeight(width);
    // });
    function updateHeight() {
      console.log('Function: Update Height');
      var heightInput = document.getElementById("formRatioHeight");
      var heightValue = parseInt(heightInput.value);
      if (heightValue < 1) { // Ensure the height does not go below 1
        heightInput.value = 1;
        heightValue = 1; // Update heightValue as well
      }
      height = heightValue; 
      updateAspectRatio(width, height);
    }

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
      updateMediaStyling(testMediaElements, width, height, border, borderColor, borderRadius, floatingBorder, floatingBorderColor, floatingBorderRadius, floatingBorderPadding, floatingBorderGap);
    }

    //-----------------------------------------------------------------------------------------
    // BORDERS SIZE
    updateBorder();
    borderCheckbox.addEventListener('change', updateBorder);
    function updateBorder() {
      // console.log('Function: Update Border');
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
      updateMediaStyling(testMediaElements, width, height, border, borderColor, borderRadius, floatingBorder, floatingBorderColor, floatingBorderRadius, floatingBorderPadding, floatingBorderGap);
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
      updateMediaStyling(testMediaElements, width, height, border, borderColor, borderRadius, floatingBorder, floatingBorderColor, floatingBorderRadius, floatingBorderPadding, floatingBorderGap);
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
      updateMediaStyling(testMediaElements, width, height, border, borderColor, borderRadius, floatingBorder, floatingBorderColor, floatingBorderRadius, floatingBorderPadding, floatingBorderGap);
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
      updateMediaStyling(testMediaElements, width, height, border, borderColor, borderRadius, floatingBorder, floatingBorderColor, floatingBorderRadius, floatingBorderPadding, floatingBorderGap);
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
      // console.log('Function: Update Floating Border Color');
      if (floatingBorderColorCheckbox.checked) {
        floatingBorderColor = document.getElementById("formFloatingBorderColor").value;
        document.getElementById("formFloatingBorderColor").disabled = false;
      } else {
        floatingBorderColor = 'black';
        document.getElementById("formFloatingBorderColor").disabled = true;
      } // document.getElementById("floatingBorderColorValue").textContent = `Floating Border Color Size: ${floatingBorderColor}`;
      updateMediaStyling(testMediaElements, width, height, border, borderColor, borderRadius, floatingBorder, floatingBorderColor, floatingBorderRadius, floatingBorderPadding, floatingBorderGap);
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
      // console.log('Function: Update Floating Border Radius');
      if (floatingBorderRadiusCheckbox.checked) {
        floatingBorderRadius = parseInt(document.getElementById("formFloatingBorderRadius").value);
        document.getElementById("formFloatingBorderRadius").disabled = false;
      } else {
        floatingBorderRadius = 0;
        document.getElementById("formFloatingBorderRadius").disabled = true;
      } // document.getElementById("floatingBorderRadiusValue").textContent = `Floating Border Radius: ${floatingBorderRadius}`;
      updateMediaStyling(testMediaElements, width, height, border, borderColor, borderRadius, floatingBorder, floatingBorderColor, floatingBorderRadius, floatingBorderPadding, floatingBorderGap);
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
      // console.log('Function: Update Floating Border Gap');
      if (floatingBorderGapCheckbox.checked) {
        floatingBorderGap = parseInt(document.getElementById("formFloatingBorderGap").value);
        document.getElementById("formFloatingBorderGap").disabled = false;
      } else {
        floatingBorderGap = 0;
        document.getElementById("formFloatingBorderGap").disabled = true;
      } // document.getElementById("floatingBorderGapValue").textContent = `Floating Border Gap Size: ${floatingBorderGap}`;
      updateMediaStyling(testMediaElements, width, height, border, borderColor, borderRadius, floatingBorder, floatingBorderColor, floatingBorderRadius, floatingBorderPadding, floatingBorderGap);
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

  }

  export { editCategoryMenu };