function gapChange(gap) {
    let testMediaContainer = document.getElementById('testMediaContainer');
    if (gapCheckbox.checked) {
    //   let gap = parseInt(document.getElementById('formGap').value);
      testMediaContainer.style.gap = `${gap}px`;
      document.getElementById("formGap").disabled = false;
      
    } else {
      testMediaContainer.style.gap = `0px`;
      gap = 0;
      document.getElementById("formGap").disabled = true;
    }
    return gap;
}

export { gapChange };