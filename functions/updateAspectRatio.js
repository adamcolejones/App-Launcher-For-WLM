import { simplifyRatio } from './simplifyRatio.js';

function updateAspectRatio(width, height) {
    console.log('Function: Aspect Ratio');
    // console.log('    width / height: ' + width + '/' + height)
    width = parseInt(document.getElementById("formRatioWidth").value, 10);
    height = parseInt(document.getElementById("formRatioHeight").value, 10);
    ({width, height} = simplifyRatio(width, height));
    let setHeight = 200; // Fixed height
    let ratio = width / height; // why does resetting the ratio effect the content?
    let ratioedWidth = setHeight * ratio;
    document.getElementById("aspectRatioDisplay").textContent = `Aspect Ratio: ${width}:${height}`;
    return ratioedWidth, width, height;
    // updateMediaStyling(testMediaElements);
    // Try to call updateMediaStyling all at once rather than multiple times
  }

  export { updateAspectRatio };