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
    // Update tag Settings
    // window.updateBridge.updateTag(name, gap);
    // window.updateBridge.updateTag = (tagName, newGap) => {
    //   ipcRenderer.send("editTag", { Name: tagName, Gap: newGap });
    // };  
    return gap;
}

export { gapChange };