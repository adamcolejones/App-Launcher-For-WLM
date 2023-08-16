// preload.js

// All the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
// Preload script to expose "saveData" function to the renderer process
const { contextBridge, ipcMain, ipcRenderer } = require("electron");

// Expose the "saveData" function to the renderer process
let saveName = (firstName, middleName, lastName) => {
    let data = { firstName, middleName, lastName };
    console.log(data);
    ipcRenderer.send("saveName", data);
};

let nameBridge = {
    saveName,
};

// window.Bridge = bridge;
contextBridge.exposeInMainWorld("nameBridge", nameBridge);

let saveMedia = (newId, Name, RunCommand, Tags, imagePath) => {
  const customFieldsContainer = document.getElementById('customFieldsContainer');
  const labelInputs = customFieldsContainer.querySelectorAll('input[type="text"][placeholder*="Label"]');
  const valueInputs = customFieldsContainer.querySelectorAll('input[type="text"][placeholder*="Value"]');
  let imageStatus;
  if (imagePath != null) {
    imageStatus = true;
  } else {
    imageStatus = false;
  }

  // Collect the custom field values into an object
  const customData = {};
  for (let i = 0; i < labelInputs.length; i++) {
    const label = labelInputs[i].value.trim();
    const value = valueInputs[i].value.trim();
    if (label && value) {
      customData[label] = value;
    }
  }

  const tagsInput = document.getElementById('Tags');
  const tagsArray = tagsInput.value.split(',').map(tag => tag.trim());

  let data = {
    "id": newId,
    "Name": Name,
    "Image": imageStatus,
    "Run Command": RunCommand,
    "Tags": tagsArray,
    ...customData // Include the custom fields in the data object
  };

  console.log(data, imagePath);
  ipcRenderer.send("saveMedia", data, imagePath);
  ipcRenderer.send('reload-window');
  // window.location.reload();
};
  

let mediaBridge = {
  saveMedia,
};

// window.Bridge = bridge;
contextBridge.exposeInMainWorld("mediaBridge", mediaBridge);

// contextBridge.exposeInMainWorld("imageBridge", imageBridge);



