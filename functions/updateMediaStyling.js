// // ********************************************************
// // * A DESCRIPTION OF THE FUNCTIONALITY OF THE CODE BELOW *
// // ********************************************************
// // + Having a seperate file is breaking the scope of some of the variables used for styling
// // + I am planning on retiring this file until I can better understand the scope of dynamiclly updating variables.
// // 
// import { updateTestMediaPicturesSizes } from './updateTestMediaPicturesSizes.js';
// // import * as StyleValues from './applyStyling.js'; // Import all exported bindings from globalSettings.js

// // THIS FUNCTION CONTINUES TO RUN INDEFINITELY 
// function updateMediaStyling(testMediaElements, width, height, border, borderColor, borderRadius, floatingBorder, floatingBorderColor, floatingBorderRadius, floatingBorderPadding, floatingBorderGap) {
//     console.log('Function: Update Media Styling');
//     const scrollableContent = document.querySelector('.scrollableContent');
//     const floatingBorderCheckbox = document.getElementById('floatingBorderCheckbox');
//     const floatingBorderColorCheckbox = document.getElementById('floatingBorderColorCheckbox');
//     const floatingBorderRadiusCheckbox = document.getElementById('floatingBorderRadiusCheckbox');
//     const floatingBorderGapCheckbox = document.getElementById('floatingBorderGapCheckbox'); // redeclaring these variables so that they do not reset
//     updateTestMediaPicturesSizes(width, height, border, borderRadius);
//     testMediaElements.forEach(testMedia => {
//         // functionCount += 1;
//         let setHeight = 200; // Fixed height for displayed media
//         if (width === 'auto') { // If width = auto, then skip the ratioed width and set it to auto
//             testMedia.style.width = `auto`;
//         }
//         else {
//             let ratio = width / height; // why does resetting the ratio effect the content?
//             let ratioedWidth = setHeight * ratio;
//             testMedia.style.width = `${ratioedWidth}px`;
//         }
//         testMedia.style.height = `${setHeight}px`;
//         testMedia.style.border = `${border}px solid ${borderColor}`;
//         testMedia.style['border-radius'] = `${borderRadius}px`;
//         testMedia.style.zIndex = '2'; // Z-index for this element should be higher than its background border 
//         testMedia.addEventListener('mouseenter', function() {
//             let floatingBorderElement = testMedia.parentNode.querySelector('.testMediaCopy');
//             console.log('    before mouseEnter Border: ' + border);
//             // scope issue is not updating the border for the floating element's padding.
//             if (!floatingBorderElement) { // borderColor is resetting here
//                 testMedia.style.zIndex = '5'; // Z-index for this element should be higher than its background border
//                 const rect = testMedia.getBoundingClientRect(); // Get position and size of original media item
//                 let scrollDistanceLeft = scrollableContent.scrollLeft;
//                 let scrollDistanceTop = scrollableContent.scrollTop;
//                 const sideMenuWidth = 200; // Width of the side menu
//                 floatingBorderElement = testMedia.cloneNode(true);
//                 floatingBorderElement.classList.add('testMediaCopy');
//                 floatingBorderElement.style.position = 'absolute';
//                 floatingBorderElement.style.zIndex = '4';
//                 floatingBorderElement.style['background-color'] = 'transparent';
//                 floatingBorderElement.style.border = `${floatingBorder}px solid ${floatingBorderColor}`;
//                 floatingBorderElement.style['border-radius'] = `${floatingBorderRadius}px`;
//                 console.log('    after mouseEnter Border: ' + border); // border is not updating, causing non-bordered hover border to be off center
//                 floatingBorderPadding = (border) + (floatingBorderGap) + 'px'; // border is not updating here?
//                 let floatingBorderTopAdjustment = `${(rect.top) - (floatingBorder) - (floatingBorderGap) + (scrollDistanceTop) - 50}px`;
//                 let floatingBorderLeftAdjustment = `${(rect.left) - (floatingBorder) - (floatingBorderGap) + (scrollDistanceLeft) - (sideMenuWidth) + 0}px`;
//                 floatingBorderElement.style.padding = floatingBorderPadding;
//                 floatingBorderElement.style.top = floatingBorderTopAdjustment;
//                 floatingBorderElement.style.left = floatingBorderLeftAdjustment;
//                 testMedia.parentNode.appendChild(floatingBorderElement);
//             }
//         });
//         //-----------------------------------------------------------------------------------------
//         // These listeners are placed after the media conatiners and copy backgrounds have been identified.
//         // Revert back to default non-hoverable styling when mouse leaves
//         testMedia.addEventListener('mouseleave', function() {
//             testMedia.style.zIndex = '2'; // Z-index for this element should be higher than its background border
//             const copies = testMedia.parentNode.querySelectorAll('.testMediaCopy');
//             copies.forEach(copy => {
//                 copy.parentNode.removeChild(copy);
//             });
//         });
//         //###################################################################################################################################################################
//         // STYLE EVERYTHING HERE DOWN BEFORE LAUNCHING AGAIN
//         // FLOATING BORDER FOR SELECTED MATERIAL
//         // These hovered elements dont exist until the original is hovered, you can't reference them directly you have to use variables.
//         // Everything Floating or hovered HAS TO come after the code that creates the floating border                                                                                                                 
//         //  ██████████████ ██████         ██████████████ ██████████████ ██████████████ ██████████ ██████          ██████ ██████████████ 
//         //  ██░░░░░░░░░░██ ██░░██         ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░██ ██░░██████████  ██░░██ ██░░░░░░░░░░██ 
//         //  ██░░██████████ ██░░██         ██░░██████░░██ ██░░██████░░██ ██████░░██████ ████░░████ ██░░░░░░░░░░██  ██░░██ ██░░██████████ 
//         //  ██░░██         ██░░██         ██░░██  ██░░██ ██░░██  ██░░██     ██░░██       ██░░██   ██░░██████░░██  ██░░██ ██░░██         
//         //  ██░░██████████ ██░░██         ██░░██  ██░░██ ██░░██████░░██     ██░░██       ██░░██   ██░░██  ██░░██  ██░░██ ██░░██         
//         //  ██░░░░░░░░░░██ ██░░██         ██░░██  ██░░██ ██░░░░░░░░░░██     ██░░██       ██░░██   ██░░██  ██░░██  ██░░██ ██░░██  ██████ 
//         //  ██░░██████████ ██░░██         ██░░██  ██░░██ ██░░██████░░██     ██░░██       ██░░██   ██░░██  ██░░██  ██░░██ ██░░██  ██░░██ 
//         //  ██░░██         ██░░██         ██░░██  ██░░██ ██░░██  ██░░██     ██░░██       ██░░██   ██░░██  ██░░██████░░██ ██░░██  ██░░██ 
//         //  ██░░██         ██░░██████████ ██░░██████░░██ ██░░██  ██░░██     ██░░██     ████░░████ ██░░██  ██░░░░░░░░░░██ ██░░██████░░██ 
//         //  ██░░██         ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██  ██░░██     ██░░██     ██░░░░░░██ ██░░██  ██████████░░██ ██░░░░░░░░░░██ 
//         //  ██████         ██████████████ ██████████████ ██████  ██████     ██████     ██████████ ██████          ██████ ██████████████ 
//         //                                                                                                                              
//         //                                                                                                      
//         //  ██████████████   ██████████████ ████████████████   ████████████   ██████████████ ████████████████   
//         //  ██░░░░░░░░░░██   ██░░░░░░░░░░██ ██░░░░░░░░░░░░██   ██░░░░░░░░████ ██░░░░░░░░░░██ ██░░░░░░░░░░░░██   
//         //  ██░░██████░░██   ██░░██████░░██ ██░░████████░░██   ██░░████░░░░██ ██░░██████████ ██░░████████░░██   
//         //  ██░░██  ██░░██   ██░░██  ██░░██ ██░░██    ██░░██   ██░░██  ██░░██ ██░░██         ██░░██    ██░░██   
//         //  ██░░██████░░████ ██░░██  ██░░██ ██░░████████░░██   ██░░██  ██░░██ ██░░██████████ ██░░████████░░██   
//         //  ██░░░░░░░░░░░░██ ██░░██  ██░░██ ██░░░░░░░░░░░░██   ██░░██  ██░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░░░██   
//         //  ██░░████████░░██ ██░░██  ██░░██ ██░░██████░░████   ██░░██  ██░░██ ██░░██████████ ██░░██████░░████   
//         //  ██░░██    ██░░██ ██░░██  ██░░██ ██░░██  ██░░██     ██░░██  ██░░██ ██░░██         ██░░██  ██░░██     
//         //  ██░░████████░░██ ██░░██████░░██ ██░░██  ██░░██████ ██░░████░░░░██ ██░░██████████ ██░░██  ██░░██████ 
//         //  ██░░░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██  ██░░░░░░██ ██░░░░░░░░████ ██░░░░░░░░░░██ ██░░██  ██░░░░░░██ 
//         //  ████████████████ ██████████████ ██████  ██████████ ████████████   ██████████████ ██████  ██████████ 
//         // there may be an issue with these being on a seperate file from the app.js file
//         updateFloatingBorder();
//         floatingBorderCheckbox.addEventListener('change', updateFloatingBorder); //checkbox update
//         document.getElementById("formFloatingBorderColor").addEventListener("input", updateFloatingBorderColor); // input field update
//         function updateFloatingBorder() {
//         console.log('Function: updateFloatingBorder')
//         // console.log('Function: Update Floating Border');
//         if (floatingBorderCheckbox.checked) {
//             floatingBorder = parseInt(document.getElementById("formFloatingBorder").value);
//             document.getElementById("floatingBorderColorCheckbox").disabled = false;
//             document.getElementById("floatingBorderRadiusCheckbox").disabled = false;
//             document.getElementById("floatingBorderGapCheckbox").disabled = false;
//             document.getElementById("formFloatingBorder").disabled = false;
//             document.getElementById("formFloatingBorderColor").disabled = false;
//             updateFloatingBorderRadius(); // instead call these functions to check whether the checkbox has these inputs enabled or disabled
//             updateFloatingBorderGap();
//             floatingBorderPadding = border;
//         } else {
//             floatingBorder = 0;
//             document.getElementById("floatingBorderRadiusCheckbox").disabled = true;
//             document.getElementById("floatingBorderGapCheckbox").disabled = true;
//             document.getElementById("floatingBorderColorCheckbox").disabled = true;
//             document.getElementById("formFloatingBorder").disabled = true;
//             document.getElementById("formFloatingBorderColor").disabled = true;
//             document.getElementById("formFloatingBorderRadius").disabled = true;
//             document.getElementById("formFloatingBorderGap").disabled = true;
//         }
//         //   updateMediaStyling(testMediaElements, width, height, border, borderColor, borderRadius, floatingBorder, floatingBorderColor, floatingBorderRadius, floatingBorderPadding, floatingBorderGap);
        
//         }

//         document.getElementById("formFloatingBorder").addEventListener("input", function() {
//         var inputValue = parseInt(this.value);
//         if (inputValue < 0) {
//             this.value = 0;
//             inputValue = 0; // Update inputValue as well
//         } // Check if the value is greater than 999
//         if (inputValue > 999) { // If so, set it to 999
//             this.value = 999;
//             inputValue = 999; // Update inputValue as well
//         } // Update the border variable with the input value
//         floatingBorder = inputValue;
//         floatingBorder = this.value !== null ? this.value : 0;
//         this.value = floatingBorder;
//         updateFloatingBorder(); // apply to all media items
//         });
//         //###################################################################################################################################################################

//         //###################################################################################################################################################################
//         // FLOATING BORDER COLOR
//         // These hovered elements dont exist until the original is hovered, you can't reference them directly you have to use variables.
//         // ██████████████ ██████████████ ██████         ██████████████ ████████████████   
//         // ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██         ██░░░░░░░░░░██ ██░░░░░░░░░░░░██   
//         // ██░░██████████ ██░░██████░░██ ██░░██         ██░░██████░░██ ██░░████████░░██   
//         // ██░░██         ██░░██  ██░░██ ██░░██         ██░░██  ██░░██ ██░░██    ██░░██   
//         // ██░░██         ██░░██  ██░░██ ██░░██         ██░░██  ██░░██ ██░░████████░░██   
//         // ██░░██         ██░░██  ██░░██ ██░░██         ██░░██  ██░░██ ██░░░░░░░░░░░░██   
//         // ██░░██         ██░░██  ██░░██ ██░░██         ██░░██  ██░░██ ██░░██████░░████   
//         // ██░░██         ██░░██  ██░░██ ██░░██         ██░░██  ██░░██ ██░░██  ██░░██     
//         // ██░░██████████ ██░░██████░░██ ██░░██████████ ██░░██████░░██ ██░░██  ██░░██████ 
//         // ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░██  ██░░░░░░██ 
//         // ██████████████ ██████████████ ██████████████ ██████████████ ██████  ██████████ 
//         updateFloatingBorderColor();
//         floatingBorderColorCheckbox.addEventListener('change', updateFloatingBorderColor);
//         function updateFloatingBorderColor() {
//         // console.log('Function: Update Floating Border Color');
//         if (floatingBorderColorCheckbox.checked) {
//             floatingBorderColor = document.getElementById("formFloatingBorderColor").value;
//             document.getElementById("formFloatingBorderColor").disabled = false;
//         } else {
//             floatingBorderColor = 'black';
//             document.getElementById("formFloatingBorderColor").disabled = true;
//         } // document.getElementById("floatingBorderColorValue").textContent = `Floating Border Color Size: ${floatingBorderColor}`;
//         //   updateMediaStyling(testMediaElements, width, height, border, borderColor, borderRadius, floatingBorder, floatingBorderColor, floatingBorderRadius, floatingBorderPadding, floatingBorderGap);
//         }

//         // document.getElementById("formFloatingBorderColor").addEventListener("input", function() {
//         //   var inputValue = this.value;
//         //   floatingBorderColor = inputValue;
//         //   floatingBorderColor = this.value !== null ? this.value : 'black';
//         //   this.value = floatingBorderColor;
//         //   updateFloatingBorderColor(); // apply to all media items
//         // });
//         //###################################################################################################################################################################

//         //###################################################################################################################################################################
//         // FLOATING BORDER RADIUS FOR SELECTED MATERIAL
//         // These hovered elements dont exist until the original is hovered, you can't reference them directly you have to use variables.
//         //  ████████████████   ██████████████ ████████████   ██████████ ██████  ██████ ██████████████ 
//         //  ██░░░░░░░░░░░░██   ██░░░░░░░░░░██ ██░░░░░░░░████ ██░░░░░░██ ██░░██  ██░░██ ██░░░░░░░░░░██ 
//         //  ██░░████████░░██   ██░░██████░░██ ██░░████░░░░██ ████░░████ ██░░██  ██░░██ ██░░██████████ 
//         //  ██░░██    ██░░██   ██░░██  ██░░██ ██░░██  ██░░██   ██░░██   ██░░██  ██░░██ ██░░██         
//         //  ██░░████████░░██   ██░░██████░░██ ██░░██  ██░░██   ██░░██   ██░░██  ██░░██ ██░░██████████ 
//         //  ██░░░░░░░░░░░░██   ██░░░░░░░░░░██ ██░░██  ██░░██   ██░░██   ██░░██  ██░░██ ██░░░░░░░░░░██ 
//         //  ██░░██████░░████   ██░░██████░░██ ██░░██  ██░░██   ██░░██   ██░░██  ██░░██ ██████████░░██ 
//         //  ██░░██  ██░░██     ██░░██  ██░░██ ██░░██  ██░░██   ██░░██   ██░░██  ██░░██         ██░░██ 
//         //  ██░░██  ██░░██████ ██░░██  ██░░██ ██░░████░░░░██ ████░░████ ██░░██████░░██ ██████████░░██ 
//         //  ██░░██  ██░░░░░░██ ██░░██  ██░░██ ██░░░░░░░░████ ██░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ 
//         //  ██████  ██████████ ██████  ██████ ████████████   ██████████ ██████████████ ██████████████ 
//         updateFloatingBorderRadius();
//         floatingBorderRadiusCheckbox.addEventListener('change', updateFloatingBorderRadius);
//         function updateFloatingBorderRadius() {
//         // console.log('Function: Update Floating Border Radius');
//         if (floatingBorderRadiusCheckbox.checked) {
//             floatingBorderRadius = parseInt(document.getElementById("formFloatingBorderRadius").value);
//             document.getElementById("formFloatingBorderRadius").disabled = false;
//         } else {
//             floatingBorderRadius = 0;
//             document.getElementById("formFloatingBorderRadius").disabled = true;
//         } // document.getElementById("floatingBorderRadiusValue").textContent = `Floating Border Radius: ${floatingBorderRadius}`;
//         //   updateMediaStyling(testMediaElements, width, height, border, borderColor, borderRadius, floatingBorder, floatingBorderColor, floatingBorderRadius, floatingBorderPadding, floatingBorderGap);
//         }

//         document.getElementById("formFloatingBorderRadius").addEventListener("input", function() {
//         var inputValue = parseInt(this.value);
//         if (inputValue < 0) {
//             this.value = 0;
//             inputValue = 0; // Update inputValue as well
//         } // Check if the value is greater than 999
//         if (inputValue > 999) { // If so, set it to 999
//             this.value = 999;
//             inputValue = 999; // Update inputValue as well
//         } // Update the border variable with the input value
//         floatingBorderRadius = inputValue;
//         floatingBorderRadius = this.value !== null ? this.value : 0;
//         this.value = floatingBorderRadius;
//         updateFloatingBorderRadius(); // apply to all media items
//         });
//         //###################################################################################################################################################################

//         //###################################################################################################################################################################
//         // FLOATING BORDER GAP FOR SELECTED MATERIAL
//         // These hovered elements dont exist until the original is hovered, you can't reference them directly you have to use variables.
//         //  ██████████████ ██████████████ ██████████████ 
//         //  ██░░░░░░░░░░██ ██░░░░░░░░░░██ ██░░░░░░░░░░██ 
//         //  ██░░██████████ ██░░██████░░██ ██░░██████░░██ 
//         //  ██░░██         ██░░██  ██░░██ ██░░██  ██░░██ 
//         //  ██░░██         ██░░██████░░██ ██░░██████░░██ 
//         //  ██░░██  ██████ ██░░░░░░░░░░██ ██░░░░░░░░░░██ 
//         //  ██░░██  ██░░██ ██░░██████░░██ ██░░██████████ 
//         //  ██░░██  ██░░██ ██░░██  ██░░██ ██░░██         
//         //  ██░░██████░░██ ██░░██  ██░░██ ██░░██         
//         //  ██░░░░░░░░░░██ ██░░██  ██░░██ ██░░██         
//         //  ██████████████ ██████  ██████ ██████         
//         updateFloatingBorderGap();
//         floatingBorderGapCheckbox.addEventListener('change', updateFloatingBorderGap);
//         function updateFloatingBorderGap() {
//         // console.log('Function: Update Floating Border Gap');
//         if (floatingBorderGapCheckbox.checked) {
//             floatingBorderGap = parseInt(document.getElementById("formFloatingBorderGap").value);
//             document.getElementById("formFloatingBorderGap").disabled = false;
//         } else {
//             floatingBorderGap = 0;
//             document.getElementById("formFloatingBorderGap").disabled = true;
//         } // document.getElementById("floatingBorderGapValue").textContent = `Floating Border Gap Size: ${floatingBorderGap}`;
//         //   updateMediaStyling(testMediaElements, width, height, border, borderColor, borderRadius, floatingBorder, floatingBorderColor, floatingBorderRadius, floatingBorderPadding, floatingBorderGap);
//         }

//         document.getElementById("formFloatingBorderGap").addEventListener("input", function() {
//         var inputValue = parseInt(this.value);
//         if (inputValue < 0) {
//             this.value = 0;
//             inputValue = 0; // Update inputValue as well
//         } // Check if the value is greater than 999
//         if (inputValue > 999) { // If so, set it to 999
//             this.value = 999;
//             inputValue = 999; // Update inputValue as well
//         } // Update the border variable with the input value
//         floatingBorderGap = inputValue;
//         floatingBorderGap = this.value !== null ? this.value : 0;
//         this.value = floatingBorderGap;
//         updateFloatingBorderGap(); // apply to all media items
//         });
//     //###################################################################################################################################################################
//     });
//     console.log('Function END: updateMediaStyling')
// }

// export { updateMediaStyling };

// // everything within this for each loop is repeated per item
// // need to move alot of these functions outside of this loop to prevent refiring 74 times over
// // on mouse enter, play a sound effect.  This would be where to put it.
// // You could make a function that times the sound effects to have different pitches based on how many are hovered in a breif moment.  Musical selection menus.
// // POSSIBLE IDEA, I could create a copy of the media and position it in the middle to enlarge it without affecting the flex box order and layout: Enlarge selected media
// // for new hovered border, include a "same size as gap" option
// // Maybe create a way to check if mouseenter function has already been enabled for this media item, I fear that it is duplicating unecessarily. 
// // Check to see if border already exists, do not clone more than one item
// // floating border should hug the media, not the border of the media.  There is an issue that the clone is cancelling the hover effect when placed ontop of original media
