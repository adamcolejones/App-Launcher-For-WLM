import { updateAspectRatio } from './updateAspectRatio.js';

function updateHeight(width) {
    console.log('Function: Update Height: Current Width' + width);
    let heightInput = document.getElementById("formRatioHeight");
    let heightValue = parseInt(heightInput.value);
    if (heightValue < 1) { // Ensure the height does not go below 1
      heightInput.value = 1;
      heightValue = 1; // Update heightValue as well
    }
    let height = heightValue; 
    updateAspectRatio(width, height);
    return height;
}

export { updateHeight };